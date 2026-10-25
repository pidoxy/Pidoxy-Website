import { useEffect, useState } from "react";
import Image from "next/image";
import { Chip, SmartLink } from "./ui";
import styles from "../styles/Inner.module.css";

// Shared inner-page pieces: the dated timeline row, a figure, author lists,
// and the sticky contents list with scroll-spy.

export function Authors({ authors }) {
  return (
    <p className={styles.authors}>
      {authors.split(", ").map((a, i, arr) => (
        <span key={`${a}-${i}`}>
          {a.includes("Idoko") ? <strong>{a}</strong> : a}
          {i < arr.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

export function Timeline({ items }) {
  return (
    <ol className={styles.timeline}>
      {items.map((it) => (
        <li key={`${it.when}-${it.title}`} className={styles.trow} id={it.id}>
          <span className={`mono ${styles.trowWhen}`}>{it.when}</span>
          <div className={styles.trowBody}>
            <h3 className={styles.trowTitle}>{it.href ? <SmartLink href={it.href}>{it.title}</SmartLink> : it.title}</h3>
            {it.sub ? <p className={styles.trowSub}>{it.sub}</p> : null}
            {it.detail ? <p className={styles.trowDetail}>{it.detail}</p> : null}
            {it.links?.length ? (
              <div className={styles.trowLinks}>
                {it.links.map((l) => (
                  <Chip key={l.href} href={l.href}>
                    {l.label}
                  </Chip>
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Figure({ src, alt, note, ratio = "10 / 7", contain = false, sizes = "(max-width: 960px) 100vw, 760px", priority = false }) {
  return (
    <figure className={styles.figure}>
      <div className={`${styles.figureFrame} ${contain ? styles.figureContain : ""}`} style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill sizes={sizes} quality={80} priority={priority} />
      </div>
      {note ? <figcaption className={`mono ${styles.figcaption}`}>{note}</figcaption> : null}
    </figure>
  );
}

// Highlights the section currently in view. Sections are matched by id.
export function Toc({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className={styles.toc} aria-label="Contents">
      <span className="mono" style={{ color: "var(--secondary)" }}>
        Contents
      </span>
      <ol>
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className={`${styles.tocLink} ${active === i.id ? styles.tocActive : ""}`} aria-current={active === i.id ? "location" : undefined}>
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { styles as innerStyles };
