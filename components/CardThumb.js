import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import styles from "../styles/Page.module.css";

// Extracts a YouTube video ID from a watch / youtu.be / embed URL.
export function youtubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

// First YouTube thumbnail across an item's links (maxres, with hq fallback).
export function videoThumb(links) {
  for (const link of links || []) {
    const id = youtubeId(link.href);
    if (id) {
      return {
        max: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
        hq: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      };
    }
  }
  return null;
}

// 16:9 thumbnail: YouTube frame when a video link exists, else a quiet
// placeholder. Served through next/image so the browser gets a card-sized
// WebP/AVIF instead of the 1280x720 original. maxres falls back to hq (always
// present) when a video has no maxres frame.
export default function CardThumb({ links, className }) {
  const [useHq, setUseHq] = useState(false);
  const thumb = videoThumb(links);
  if (thumb) {
    return (
      <div className={`${styles.cardThumb} ${className || ""}`}>
        <Image
          src={useHq ? thumb.hq : thumb.max}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 400px"
          quality={70}
          onError={() => setUseHq(true)}
        />
      </div>
    );
  }
  return (
    <div className={`${styles.cardThumb} ${styles.cardThumbPlaceholder} ${className || ""}`}>
      <Icon kind="code" className={styles.cardThumbIcon} />
    </div>
  );
}
