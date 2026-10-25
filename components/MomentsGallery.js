import { useCallback, useEffect, useRef, useState } from "react";
import { Chip } from "./ui";
import Icon from "./Icon";
import { moments } from "../data/moments";
import styles from "../styles/Moments.module.css";

function humanizeName(name) {
  return name
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .replace(/^[\d\s_-]+/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

function PhotoGrid({ items, onOpen }) {
  return (
    <div className={styles.grid} data-count={Math.min(items.length, 5)}>
      {items.map((photo, n) => (
        <button key={photo.src} type="button" className={styles.photo} onClick={() => onOpen(photo.i)} data-track="photo_open" data-track-album={photo.album || ""} aria-label={`Open image: ${photo.alt}`}>
          {/* Cloudinary already serves sized, auto-format thumbnails. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.thumb || photo.src} alt={photo.alt} loading={n < 2 ? "eager" : "lazy"} decoding="async" />
        </button>
      ))}
    </div>
  );
}

// Renders event "moments" — a write-up paired with its photos — plus a
// lightbox (keyboard + arrow nav). Photos attach to a moment by album slug;
// leftover photos (no matching moment) render as a plain trailing block.
export default function MomentsGallery({ gallery }) {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  const openAt = useCallback((i) => {
    lastFocus.current = document.activeElement;
    setIndex(i);
  }, []);
  const close = useCallback(() => setIndex(-1), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + gallery.length) % gallery.length), [gallery.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % gallery.length), [gallery.length]);

  useEffect(() => {
    if (!open) return undefined;
    const restore = lastFocus.current;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      restore?.focus?.();
    };
  }, [open, close, prev, next]);

  // Group photos by album slug.
  const bySlug = new Map();
  gallery.forEach((photo, i) => {
    const slug = photo.album || "";
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push({ ...photo, i });
  });

  // Configured moments first (in order), then any leftover photo groups.
  const used = new Set();
  const blocks = [];
  moments.forEach((m) => {
    used.add(m.slug);
    const photos = bySlug.get(m.slug) || [];
    if (photos.length || (m.writeup && m.writeup.length)) blocks.push({ type: "moment", moment: m, photos });
  });
  bySlug.forEach((photos, slug) => {
    if (!used.has(slug)) blocks.push({ type: "plain", slug, photos });
  });

  if (!blocks.length) return null;
  const active = open ? gallery[index] : null;

  return (
    <>
      <nav className={styles.index} aria-label="Moments">
        {blocks
          .filter((b) => b.type === "moment")
          .map((b) => (
            <a key={b.moment.slug} href={`#${b.moment.slug}`}>
              <span className="mono">{b.moment.date}</span>
              {b.moment.title.split(" — ")[0]}
            </a>
          ))}
      </nav>

      <div className={styles.list}>
        {blocks.map((block) =>
          block.type === "moment" ? (
            <article key={block.moment.slug} id={block.moment.slug} className={styles.moment} data-reveal>
              <div className={styles.text}>
                <p className="eyebrow">
                  {block.moment.date}
                  {block.photos.length ? ` · ${block.photos.length} photo${block.photos.length > 1 ? "s" : ""}` : ""}
                </p>
                <h2 className={styles.title}>{block.moment.title}</h2>
                {block.moment.role ? <p className={styles.role}>{block.moment.role}</p> : null}
                {block.moment.writeup?.map((para) => (
                  <p key={para.slice(0, 24)} className={styles.writeup}>
                    {para}
                  </p>
                ))}
                {block.moment.links?.length ? (
                  <div className={styles.links}>
                    {block.moment.links.map((link) =>
                      link.download ? (
                        <a key={link.href} href={link.href} download className={styles.dl}>
                          {link.label} <Icon kind="arrow-down" />
                        </a>
                      ) : (
                        <Chip key={link.href} href={link.href}>
                          {link.label}
                        </Chip>
                      )
                    )}
                  </div>
                ) : null}
              </div>
              {block.photos.length ? <PhotoGrid items={block.photos} onOpen={openAt} /> : null}
            </article>
          ) : (
            <article key={block.slug || "_more"} className={styles.moment}>
              <div className={styles.text}>{block.slug ? <h2 className={styles.title}>{humanizeName(block.slug)}</h2> : <h2 className={styles.title}>More photos</h2>}</div>
              <PhotoGrid items={block.photos} onOpen={openAt} />
            </article>
          )
        )}
      </div>

      {active ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button ref={closeRef} type="button" className={styles.lbClose} onClick={close} aria-label="Close">
            <Icon kind="close" />
          </button>
          {gallery.length > 1 ? (
            <button
              type="button"
              className={`${styles.lbNav} ${styles.lbPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              <Icon kind="arrow-right" />
            </button>
          ) : null}
          <figure className={styles.lbFigure} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            <figcaption>
              <span className="mono">
                {index + 1} / {gallery.length}
              </span>
              {active.caption || active.alt}
            </figcaption>
          </figure>
          {gallery.length > 1 ? (
            <button
              type="button"
              className={`${styles.lbNav} ${styles.lbNext}`}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              <Icon kind="arrow-right" />
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
