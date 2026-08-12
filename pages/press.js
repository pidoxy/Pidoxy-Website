import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import { profile } from "../data/profile";
import { press } from "../data/press";
import styles from "../styles/Page.module.css";

export default function Press() {
  return (
    <Layout>
      <Meta
        title="Press & Media"
        description="Press and media coverage of Emmanuel Idoko's projects and competitions, including national coverage of PheraCam at HackLab Nigeria 2022."
        path="/press"
      />

      <div className={styles.container}>
        <PageHeader
          eyebrow="Coverage"
          title="Press &"
          accent="Media"
          lede="Coverage of my projects and the events I've competed in."
        />

        <ul className={styles.dateList}>
          {press.map((item) => (
            <li key={item.title} className={styles.dateRow}>
              <span className={styles.dateCell}>{item.date}</span>
              <div className={styles.rowBody}>
                <p className={styles.rowMeta}>{item.outlet}</p>
                <h2 className={styles.rowTitle}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </h2>
                <p className={styles.rowNote}>{item.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.rowNote} style={{ marginTop: "var(--s6)" }}>
          For media inquiries: <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </div>
    </Layout>
  );
}
