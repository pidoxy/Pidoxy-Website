import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { talks } from "../data/talks";
import page from "../styles/Page.module.css";
import styles from "../styles/Talks.module.css";

export default function Talks() {
  return (
    <Layout>
      <Meta
        title="Talks & Speaking"
        description="Talks, workshops, panels, and sessions by Emmanuel Idoko — from Transformer paper walkthroughs to hosting panels with engineers from Bloomberg and Goldman Sachs."
        path="/talks"
      />

      <div className={page.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Speaking</p>
          <h1 className={styles.title}>
            Talks &amp; <em>Speaking</em>
          </h1>
          <p className={styles.lede}>
            Talks, workshops, and panels I&apos;ve given, hosted, or moderated — with recordings, slides, and photos
            where they exist.
          </p>
          <p className={styles.note}>
            Inviting me to speak? The <Link href="/speaking">speaker kit</Link> has bios, headshots, and talk
            abstracts ready to paste.
          </p>
        </header>

        <ul className={styles.list}>
          {talks.map((talk) => {
            const links = talk.links.filter((l) => l.href);
            return (
              <li key={talk.title} className={styles.row}>
                <span className={styles.date}>{talk.date}</span>
                <div className={styles.body}>
                  <h2 className={styles.talkTitle}>{talk.title}</h2>
                  <p className={styles.meta}>
                    {talk.event} <span>·</span> {talk.role}
                  </p>
                  <p className={styles.description}>{talk.description}</p>
                  {links.length > 0 && (
                    <div className={styles.links}>
                      {links.map((link) => (
                        <a
                          key={link.label}
                          className={styles.pill}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer" : undefined}
                        >
                          {link.label}
                          <span className={styles.arrow} aria-hidden="true">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
