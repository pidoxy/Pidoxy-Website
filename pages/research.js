import Head from "next/head";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import Icon, { LinkIcon } from "../components/Icon";
import Authors from "../components/Authors";
import { profile } from "../data/profile";
import { publications, researchActivity } from "../data/publications";
import styles from "../styles/Page.module.css";

// Year groups, newest first; "In Progress" last.
const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => {
  if (a === "In Progress") return 1;
  if (b === "In Progress") return -1;
  return Number(b) - Number(a);
});

const PILL_ORDER = ["pdf", "arxiv", "doi", "code", "announcement"];
const PILL_LABELS = {
  pdf: "PDF",
  arxiv: "arXiv",
  doi: "DOI",
  code: "Code",
  announcement: "Announcement",
};

function Publication({ pub }) {
  return (
    <article className={pub.featured ? styles.pubFeatured : styles.pubItem}>
      <h3 className={styles.pubTitle}>{pub.title}</h3>
      <p className={styles.pubAuthors}>
        <Authors authors={pub.authors} />
      </p>
      <p className={styles.pubMeta}>
        <em>{pub.venue}</em> · <span className={styles.pubStatus}>{pub.status}</span>
      </p>
      {pub.note && <p className={styles.rowNote}>{pub.note}</p>}
      {Object.keys(pub.links).length > 0 && (
        <div className={styles.pillRow}>
          {PILL_ORDER.filter((key) => pub.links[key]).map((key) => (
            <a
              key={key}
              href={pub.links[key]}
              target="_blank"
              rel="noreferrer"
              className={styles.pill}
            >
              {PILL_LABELS[key]}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Research() {
  const sharpxr = publications.find((p) => p.featured);
  return (
    <Layout>
      <Meta
        title="Research & Publications"
        description="Medical imaging and applied AI research by Emmanuel Idoko — SharpXR (MICCAI 2025), VAMAE (ICPR 2026), and ongoing work in multimodal learning."
        path="/research"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              headline: sharpxr.title,
              author: sharpxr.authors.split(", ").map((name) => ({
                "@type": "Person",
                name,
              })),
              datePublished: "2025",
              publisher: "MIRASOL Workshop, MICCAI 2025",
              sameAs: sharpxr.links.doi,
            }),
          }}
        />
      </Head>

      <div className={styles.container}>
        <PageHeader
          eyebrow="Scholarship"
          title="Research &"
          accent="Publications"
          lede={
            <>
              Research in medical imaging, multimodal learning, and applied AI systems. Also on{" "}
              <a href={profile.scholar} target="_blank" rel="noreferrer">
                Google Scholar
              </a>
              .
            </>
          }
        />

        {years.map((year) => (
          <section key={year}>
            <h2 className={styles.pubYear}>{year}</h2>
            {publications
              .filter((p) => p.year === year)
              .map((pub) => (
                <Publication key={pub.title} pub={pub} />
              ))}
          </section>
        ))}

        <a href={profile.scholar} target="_blank" rel="noreferrer" className={styles.scholarLink}>
          View all on Google Scholar
          <Icon kind="external" className={styles.inlineIcon} />
        </a>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research activity</h2>
          <ul className={styles.dateList}>
            {researchActivity.map((item) => (
              <li key={item.title} className={styles.dateRow}>
                <span className={styles.dateCell}>{item.date}</span>
                <div className={styles.rowBody}>
                  <h3 className={styles.rowTitle}>{item.title}</h3>
                  <p className={styles.rowNote}>{item.note}</p>
                  {item.links?.length > 0 && (
                    <div className={styles.linkRow}>
                      {item.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                          <LinkIcon external className={styles.inlineIcon} />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
