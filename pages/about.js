import Head from "next/head";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import { profile, aboutProse, aboutFacts } from "../data/profile";
import { experience } from "../data/experience";
import styles from "../styles/Page.module.css";

export default function About() {
  return (
    <Layout>
      <Meta
        title="About"
        description="Emmanuel Idoko is a software engineer and AI researcher — clinical AI systems, agentic pipelines, and medical imaging research published at MICCAI and ICPR."
        path="/about"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emmanuel Idoko",
              url: `${profile.siteUrl}/about`,
              jobTitle: "Software Engineer & AI Researcher",
              alumniOf: { "@type": "CollegeOrUniversity", name: "University of Lagos" },
            }),
          }}
        />
      </Head>

      <div className={styles.container}>
        <PageHeader eyebrow="About" title="Emmanuel" accent="Idoko" />

        <div className={styles.aboutGrid}>
          <div className={styles.prose}>
            {aboutProse.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>

          <aside className={styles.aboutSidebar}>
            <div className={styles.portrait}>
              {/* Portrait slot — replace with <img src="/portrait.jpg" alt="Emmanuel Idoko" /> */}
              <span className={styles.portraitInitials}>{profile.initials}</span>
            </div>

            <div className={styles.factsBlock}>
              <h2>Education</h2>
              <ul>
                {aboutFacts.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.factsBlock}>
              <h2>Location</h2>
              <ul>
                <li>{aboutFacts.location}</li>
              </ul>
            </div>

            <div className={styles.factsBlock}>
              <h2>Profiles</h2>
              <ul>
                {aboutFacts.profiles.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <ul className={styles.dateList}>
            {experience.map((item) => (
              <li key={`${item.role}-${item.org}`} className={styles.dateRow}>
                <span className={styles.dateCell}>{item.period}</span>
                <div className={`${styles.rowBody} ${styles.timelineItem}`}>
                  <h3>{item.role}</h3>
                  <p className={styles.timelineOrg}>{item.org}</p>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
