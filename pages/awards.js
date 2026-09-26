import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import { honors } from "../data/honors";
import styles from "../styles/Page.module.css";

function AwardTimeline({ items }) {
  return (
    <section aria-label="Awards and honours">
      <ul className={styles.dateList}>
        {items.map((item) => (
          <li key={item.title} className={styles.dateRow}>
            <span className={styles.dateCell}>{item.date}</span>
            <div className={styles.rowBody}>
              <h3 className={styles.rowTitle}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p className={styles.rowMeta}>
                {item.org} · <span className={styles.rowResult}>{item.result}</span>
              </p>
              <p className={styles.rowNote}>{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Awards() {
  return (
    <Layout>
      <Meta
        title="Awards & Honours"
        description="Selected awards, scholarships, and competitive recognition for Emmanuel Idoko."
        path="/awards"
      />

      <div className={styles.container}>
        <PageHeader
          eyebrow="Recognition"
          title="Awards &"
          accent="Honours"
          lede="Selected awards, scholarships, and competitive recognition, ordered newest first."
        />

        <AwardTimeline items={honors} />
      </div>
    </Layout>
  );
}
