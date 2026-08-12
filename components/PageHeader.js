import styles from "../styles/Page.module.css";

// Editorial page intro: small-caps eyebrow, large serif title with the final
// word(s) in italic, optional lede paragraph.
export default function PageHeader({ eyebrow, title, accent, lede, children }) {
  return (
    <header className={styles.pageHeader}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h1 className={styles.pageTitle}>
        {title}
        {accent ? <> <em>{accent}</em></> : null}
      </h1>
      {lede && <p className={styles.lede}>{lede}</p>}
      {children}
    </header>
  );
}
