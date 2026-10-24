import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/PortraitSplit.module.css";

const MIN = 8;
const MAX = 92;

// The hero portrait, split into a "noise" half and a "signal" half with a
// draggable seam. The noise half is the same image with CSS filters and an
// SVG grain overlay, so there is no second download. The seam is a real
// slider: pointer-draggable, and arrow/Home/End keys move it.
export default function PortraitSplit({ src, alt, caption, priority = true }) {
  const frameRef = useRef(null);
  const dragging = useRef(false);
  const [seam, setSeam] = useState(30);

  // Drift the seam open on load so it's obvious it moves.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeam(43);
      return undefined;
    }
    const t = setTimeout(() => setSeam(43), 350);
    return () => clearTimeout(t);
  }, []);

  const fromPointer = useCallback((clientX) => {
    const r = frameRef.current.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setSeam(Math.min(MAX, Math.max(MIN, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    frameRef.current.setPointerCapture(e.pointerId);
    frameRef.current.dataset.dragging = "true";
    fromPointer(e.clientX);
  };
  const onPointerMove = (e) => {
    if (dragging.current) fromPointer(e.clientX);
  };
  const onPointerUp = (e) => {
    dragging.current = false;
    delete frameRef.current.dataset.dragging;
    frameRef.current.releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 4;
    const map = { ArrowLeft: -step, ArrowDown: -step, ArrowRight: step, ArrowUp: step };
    if (e.key in map) {
      e.preventDefault();
      setSeam((s) => Math.min(MAX, Math.max(MIN, s + map[e.key])));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSeam(MIN);
    } else if (e.key === "End") {
      e.preventDefault();
      setSeam(MAX);
    }
  };

  return (
    <figure className={styles.figure}>
      <div
        ref={frameRef}
        className={styles.frame}
        style={{ "--seam": `${seam}%` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <Image src={src} alt={alt} fill priority={priority} fetchPriority="high" sizes="(max-width: 900px) 92vw, 464px" quality={80} className={styles.signal} />
        <div className={styles.noise} aria-hidden="true">
          <Image src={src} alt="" fill sizes="(max-width: 900px) 92vw, 464px" quality={80} className={styles.noiseImg} />
        </div>
        <span className={`mono ${styles.tag} ${styles.tagLeft}`}>Noise</span>
        <span className={`mono ${styles.tag} ${styles.tagRight}`}>Signal</span>
        <div
          className={styles.handle}
          role="slider"
          tabIndex={0}
          aria-label="Move the line between the noisy and denoised halves"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={Math.round(seam)}
          aria-valuetext={`${Math.round(seam)}% noise`}
          onKeyDown={onKeyDown}
        >
          <span className={styles.knob} aria-hidden="true" />
        </div>
      </div>
      {caption ? <figcaption className={`mono ${styles.caption}`}>{caption}</figcaption> : null}
    </figure>
  );
}
