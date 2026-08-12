import { useCallback, useEffect, useState } from "react";
import { LinkIcon } from "./Icon";
import { moments } from "../data/moments";
import styles from "../styles/Page.module.css";

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
    <div className={styles.galleryGrid}>
      {items.map((photo) => (
        <button
          key={photo.src}
          type="button"
          className={styles.galleryItem}
          onClick={() => onOpen(photo.i)}
          aria-label={`Open image: ${photo.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.thumb || photo.src} alt={photo.alt} loading="lazy" />
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

  const close = useCallback(() => setIndex(-1), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [gallery.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % gallery.length),
    [gallery.length]
  );

  useEffect(() => {
    if (!open) return undefined;
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
    if (photos.length || (m.writeup && m.writeup.length)) {
      blocks.push({ type: "moment", moment: m, photos });
    }
  });
  bySlug.forEach((photos, slug) => {
    if (!used.has(slug)) blocks.push({ type: "plain", slug, photos });
  });

  if (!blocks.length) return null;
  const active = open ? gallery[index] : null;

  return (
    <>
      <div className={styles.momentList}>
        {blocks.map((block) =>
          block.type === "moment" ? (
            <article key={block.moment.slug} className={styles.moment}>
              <div className={styles.momentHead}>
                <h2>{block.moment.title}</h2>
                <p className={styles.momentMeta}>
                  {block.moment.date}
                  {block.moment.role ? ` · ${block.moment.role}` : ""}
                </p>
              </div>
              {block.moment.writeup?.map((para) => (
                <p key={para.slice(0, 24)} className={styles.momentWriteup}>
                  {para}
                </p>
              ))}
              {block.photos.length > 0 && <PhotoGrid items={block.photos} onOpen={setIndex} />}
              {block.moment.links?.length > 0 && (
                <div className={styles.linkRow}>
                  {block.moment.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      <LinkIcon external type={link.type} className={styles.inlineIcon} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ) : (
            <article key={block.slug || "_more"} className={styles.moment}>
              {block.slug && (
                <div className={styles.momentHead}>
                  <h2>{humanizeName(block.slug)}</h2>
                </div>
              )}
              <PhotoGrid items={block.photos} onOpen={setIndex} />
            </article>
          )
        )}
      </div>

      {active && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={close}>
          <button className={styles.lightboxClose} onClick={close} aria-label="Close">
            ×
          </button>
          {gallery.length > 1 && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          <figure className={styles.lightboxFigure} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            {(active.caption || active.alt) && <figcaption>{active.caption || active.alt}</figcaption>}
          </figure>
          {gallery.length > 1 && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
