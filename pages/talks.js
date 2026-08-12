import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import { LinkIcon } from "../components/Icon";
import { talks } from "../data/talks";
import styles from "../styles/Page.module.css";

export default function Talks() {
  return (
    <Layout>
      <Meta
        title="Talks & Speaking"
        description="Talks, workshops, panels, and sessions by Emmanuel Idoko — from Transformer paper walkthroughs to hosting panels with engineers from Bloomberg and Goldman Sachs."
        path="/talks"
      />

      <div className={styles.container}>
        <PageHeader
          eyebrow="Speaking"
          title="Talks &"
          accent="Speaking"
          lede="Talks, workshops, and panels I've given, hosted, or moderated — with recordings, slides, and photos where they exist."
        />

        <ul className={styles.dateList}>
          {talks.map((talk) => (
            <li key={talk.title} className={styles.dateRow}>
              <span className={styles.dateCell}>{talk.date}</span>
              <div className={styles.rowBody}>
                <h2 className={styles.rowTitle}>{talk.title}</h2>
                <p className={styles.rowMeta}>
                  {talk.event} · <span className={styles.rowResult}>{talk.role}</span>
                </p>
                <p className={styles.rowNote}>{talk.description}</p>
                {talk.links.filter((l) => l.href).length > 0 && (
                  <div className={styles.linkRow}>
                    {talk.links
                      .filter((l) => l.href)
                      .map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                          <LinkIcon external={link.external} type={link.type} className={styles.inlineIcon} />
                          <span>{link.label}</span>
                        </a>
                      ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
