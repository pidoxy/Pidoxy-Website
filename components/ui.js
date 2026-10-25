import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import useCopy from "../lib/useCopy";
import styles from "../styles/ui.module.css";

// Shared building blocks for the rebuilt pages. Each mirrors a component on
// the Figma "Components" page so design and code stay in step.

const isExternal = (href = "") => /^(https?:|mailto:)/.test(href);

// Renders a Next <Link> for internal routes and a plain <a> for external ones,
// opening external links in a new tab safely.
export function SmartLink({ href, children, ...rest }) {
  // Static files (résumés, images) aren't routes: use a plain anchor so Next
  // doesn't try to prefetch them as pages.
  if (/\.(pdf|jpe?g|png|webp)$/i.test(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

export function Button({ href, onClick, variant = "primary", icon = "arrow-right", children, className = "", ...rest }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;
  const dir = icon === "arrow-up-right" ? "up-right" : icon === "arrow-right" ? "right" : undefined;
  const inner = (
    <>
      <span className={styles.btnLabel}>{children}</span>
      {icon ? (
        <span className={styles.btnIcon} data-dir={dir} aria-hidden="true">
          <Icon kind={icon} className={styles.btnIcon} />
        </span>
      ) : null}
    </>
  );
  if (href) {
    return (
      <SmartLink href={href} className={cls} {...rest}>
        {inner}
      </SmartLink>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {inner}
    </button>
  );
}

const STATUS_CLASS = {
  published: "status_published",
  accepted: "status_accepted",
  presented: "status_presented",
  submitted: "status_submitted",
  "in progress": "status_progress",
  live: "status_live",
};

export function StatusPill({ status }) {
  const key = String(status || "").toLowerCase();
  return (
    <span className={`${styles.status} ${styles[STATUS_CLASS[key] || "status_submitted"]}`}>
      {key === "live" ? <span className={styles.liveDot} aria-hidden="true" /> : null}
      {status}
    </span>
  );
}

export function NowPill({ href, text }) {
  return (
    <SmartLink href={href} className={styles.now}>
      <span className={styles.liveDot} aria-hidden="true" />
      <span className={styles.nowTag}>Now</span>
      <span className={styles.nowSep} aria-hidden="true" />
      <span className={styles.nowText}>{text}</span>
      <Icon kind="arrow-up-right" className={styles.btnIcon} />
    </SmartLink>
  );
}

// Copy-to-clipboard pill, styled like a link chip. Used for copy-ready
// facts, bios and abstracts in the speaker kit.
export function CopyChip({ text, label = "Copy" }) {
  const [state, copy] = useCopy(text);
  return (
    <button type="button" className={`${styles.chip} ${styles.copyChip}`} onClick={copy} aria-live="polite" data-state={state} data-track="copy_text" data-track-item={label}>
      {state === "copied" ? "Copied" : state === "failed" ? "Select & copy" : label}
      <Icon kind={state === "copied" ? "check" : "copy"} />
    </button>
  );
}

export function Chip({ href, children }) {
  return (
    <SmartLink href={href} className={styles.chip}>
      {children}
      <Icon kind="arrow-up-right" />
    </SmartLink>
  );
}

export function SectionHeader({ index, label, title, sub, link, id }) {
  return (
    <div className={styles.sectionHead}>
      <div className={styles.sectionHeadText}>
        <p className="eyebrow">{index ? `${index} · ${label}` : label}</p>
        <h2 className={styles.displayL} id={id}>
          {title}
        </h2>
        {sub ? <p className={styles.sectionSub}>{sub}</p> : null}
      </div>
      {link ? (
        <Button href={link.href} variant="ghost">
          {link.label}
        </Button>
      ) : null}
    </div>
  );
}

// Counts the largest number in `value` up from zero the first time it is
// seen. Non-numeric values ("Anatomy ≠ disease") render as-is. Under reduced
// motion the final value shows immediately. The full value is always in the
// accessible name, so screen readers never hear the ticking.
export function Readout({ label, value, caption }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const nums = [...value.matchAll(/\d[\d,]*(?:\.\d+)?/g)];
    if (!nums.length || !ref.current) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const target = nums.reduce((a, b) => (parseFloat(b[0].replace(/,/g, "")) > parseFloat(a[0].replace(/,/g, "")) ? b : a));
    const end = parseFloat(target[0].replace(/,/g, ""));
    const decimals = (target[0].split(".")[1] || "").length;
    const before = value.slice(0, target.index);
    const after = value.slice(target.index + target[0].length);
    const fmt = (n) => (decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US"));
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 900;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(before + fmt(end * eased) + after);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    // Reset to zero on the next frame (not synchronously in the effect), so
    // the server-rendered final value is what crawlers and no-JS users get.
    const reset = requestAnimationFrame(() => setDisplay(before + fmt(0) + after));
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(reset);
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div className={styles.readout} ref={ref}>
      <p className="eyebrow">{label}</p>
      <p className={styles.readoutValue} aria-label={value}>
        <span aria-hidden="true">{display}</span>
      </p>
      {caption ? <p className={styles.readoutCaption}>{caption}</p> : null}
    </div>
  );
}

export function Stamp({ role, event, date, rotate = 0, index = 0 }) {
  return (
    <div className={styles.stamp} style={{ "--rot": `${rotate}deg`, "--i": index }} data-reveal>
      <span className="mono" style={{ color: "var(--secondary)" }}>
        {role}
      </span>
      <span className={styles.stampEvent}>{event}</span>
      <span className="mono" style={{ color: "var(--accent)" }}>
        {date}
      </span>
    </div>
  );
}

export function UpdateList({ items }) {
  return (
    <ul className={styles.updates}>
      {items.map((u) => (
        <li key={u.date + u.text} className={styles.update}>
          <SmartLink href={u.href} className={styles.updateLink}>
            <span className="mono" style={{ color: "var(--secondary)" }}>
              {u.date}
            </span>
            <span className="mono" style={{ color: "var(--accent)" }}>
              {u.kind}
            </span>
            <span className={styles.updateText}>{u.text}</span>
            <Icon kind="arrow-right" className={styles.updateArrow} />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}

// Selected-work tile. The whole card is clickable via the title link's
// stretched ::after; secondary links stay independently focusable above it.
export function WorkTile({ href, image, imageAlt = "", status, meta, title, desc, more = "Read more", video = false, index = 0, priority = false, sizes = "(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 416px" }) {
  return (
    <article className={styles.tile} data-reveal style={{ "--i": index }}>
      <div className={styles.media}>
        {image ? <Image src={image} alt={imageAlt} fill sizes={sizes} quality={75} priority={priority} /> : null}
        {video ? (
          <span className={styles.badge}>
            <Icon kind="play" /> Watch demo
          </span>
        ) : null}
      </div>
      <div className={styles.tileMeta}>
        {status ? <StatusPill status={status} /> : null}
        {meta ? <span className="mono">{meta}</span> : null}
      </div>
      <h3 className={styles.tileTitle}>
        <SmartLink href={href}>{title}</SmartLink>
      </h3>
      {desc ? <p className={styles.tileDesc}>{desc}</p> : null}
      <span className={styles.tileMore} aria-hidden="true">
        {more}
        <Icon kind={isExternal(href) ? "arrow-up-right" : "arrow-right"} />
      </span>
    </article>
  );
}

export function Marquee({ items, label }) {
  const group = (hidden) => (
    <ul className={styles.marqueeGroup} aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <li key={it + i} className={styles.marqueeItem}>
          {it}
          <span className={styles.marqueeDot} aria-hidden="true">
            {"  ·"}
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <section className={styles.marquee} aria-label={label}>
      <div className={styles.marqueeTrack}>
        {group(false)}
        {group(true)}
      </div>
    </section>
  );
}

export { styles as uiStyles };
