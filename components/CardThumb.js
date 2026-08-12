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
// placeholder. maxres falls back to hq (always present) on error.
export default function CardThumb({ links, className }) {
  const thumb = videoThumb(links);
  if (thumb) {
    return (
      <div className={`${styles.cardThumb} ${className || ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb.max}
          alt=""
          loading="lazy"
          onError={(e) => {
            if (!e.currentTarget.dataset.fb) {
              e.currentTarget.dataset.fb = "1";
              e.currentTarget.src = thumb.hq;
            }
          }}
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
