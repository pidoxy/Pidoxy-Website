import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import { honors } from "../data/honors";
import styles from "../styles/Page.module.css";

function AwardColumn({ title, items }) {
  return (
    <section>
      <h2 className={styles.sectionTitle}>{title}</h2>
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
  const wins = honors.filter((h) => h.kind === "win");
  const selections = honors.filter((h) => h.kind === "selection");

  return (
    <Layout>
      <Meta
        title="Awards & Honours"
        description="Hackathon wins, podium finishes, grants, and selections — from HackZurich to GDG Lagos' ₦2M winner-takes-all and the African Computer Vision Summer School."
        path="/awards"
      />

      <div className={styles.container}>
        <PageHeader
          eyebrow="Recognition"
          title="Awards &"
          accent="Honours"
          lede="Selected wins and podium finishes from 23+ hackathons, plus grants, scholarships, and competitive selections."
        />

        <div className={styles.awardsColumns}>
          <AwardColumn title="Hackathon Wins & Podiums" items={wins} />
          <AwardColumn title="Grants, Scholarships & Selections" items={selections} />
        </div>
      </div>
    </Layout>
  );
}
