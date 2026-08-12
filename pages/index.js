import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Icon from "../components/Icon";
import CardThumb from "../components/CardThumb";
import { profile, proofStrip, currently } from "../data/profile";
import { projects } from "../data/projects";
import { publications } from "../data/publications";
import styles from "../styles/Page.module.css";

// Old single-page anchors → new routes (the hash never reaches the server,
// so this has to happen client-side).
const HASH_ROUTES = {
  "#about": "/about",
  "#publications": "/research",
  "#projects": "/engineering",
  "#honors": "/awards",
  "#talks": "/talks",
  "#press": "/press",
  "#moments": "/moments",
  "#milestones": "/research",
  "#skills": "/engineering",
};

const aidcare = projects.find((p) => p.title === "AidCare");
const amala = projects.find((p) => p.title === "Amala Atlas");
const sharpxr = publications.find((p) => p.featured);

const featured = [
  {
    eyebrow: "Latest publication",
    title: sharpxr.title,
    summary:
      "Structure-aware denoising for pediatric chest X-rays — published at the MIRASOL Workshop, MICCAI 2025.",
    href: "/research",
    linkLabel: "Research & publications",
    links: [],
  },
  {
    eyebrow: "Flagship product",
    title: "AidCare",
    summary:
      "Clinical decision support for healthcare settings where specialist knowledge is scarce — dual-mode RAG over 500+ clinical protocols.",
    href: "/engineering",
    linkLabel: "Engineering",
    links: aidcare.links,
  },
  {
    eyebrow: "Flagship win",
    title: "Amala Atlas",
    summary:
      "Winner of GDG Lagos' ₦2,000,000 winner-takes-all hackathon as team lead — an open-source, crowdsourced map with an autonomous discovery agent.",
    href: "/awards",
    linkLabel: "Awards & honours",
    links: amala.links,
  },
];

export default function Home() {
  useEffect(() => {
    // window.location.replace, not router.replace: the router can silently
    // cancel navigations triggered during hydration.
    const target = HASH_ROUTES[window.location.hash];
    if (target) window.location.replace(target);
  }, []);

  return (
    <Layout>
      <Meta
        description="Emmanuel Idoko — software engineer and AI researcher building clinical AI systems, agentic pipelines, and full-stack products. Published at MICCAI and ICPR."
        path="/"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emmanuel Idoko",
              alternateName: "Pidoxy",
              url: profile.siteUrl,
              image: `${profile.siteUrl}/og.png`,
              jobTitle: "Software Engineer & AI Researcher",
              email: `mailto:${profile.email}`,
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Lagos",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Deep Learning",
                "Medical Imaging",
                "Computer Vision",
                "Retrieval-Augmented Generation",
                "Full-Stack Engineering",
              ],
              sameAs: [
                profile.github,
                profile.linkedin,
                profile.twitter,
                profile.devpost,
                profile.youtube,
                profile.huggingface,
                profile.scholar,
              ],
            }),
          }}
        />
      </Head>

      {/* ── Hero ── */}
      <section className={`${styles.container} ${styles.hero}`}>
        <p className={styles.eyebrow}>Software Engineer &amp; AI Researcher</p>
        <h1 className={styles.heroName}>
          Emmanuel <em>Idoko</em>
        </h1>
        <p className={styles.heroRole}>{profile.roleLine}</p>
        <p className={styles.heroThesis}>{profile.thesis}</p>

        <div className={styles.heroActions}>
          <a href={`mailto:${profile.email}`} className={styles.primaryButton}>
            <Icon kind="mail" className={styles.buttonIcon} />
            <span>Contact</span>
          </a>
          <Link href="/engineering" className={styles.secondaryButton}>
            See my work
          </Link>
        </div>

        <div className={styles.iconLinks}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon kind="github" className={styles.socialIcon} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon kind="linkedin" className={styles.socialIcon} />
          </a>
          <a href={profile.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar">
            <Icon kind="document" className={styles.socialIcon} />
          </a>
          <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <Icon kind="twitter" className={styles.socialIcon} />
          </a>
          <a href={profile.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
            <Icon kind="youtube" className={styles.socialIcon} />
          </a>
          <a href={profile.devpost} target="_blank" rel="noreferrer" aria-label="Devpost">
            <Icon kind="external" className={styles.socialIcon} />
          </a>
        </div>
      </section>

      {/* ── Proof strip ── */}
      <section className={styles.container} aria-label="Highlights">
        <div className={styles.proofStrip}>
          {proofStrip.map((item) => (
            <div key={item.lead} className={styles.proofItem}>
              <p className={styles.proofLead}>{item.lead}</p>
              <p className={styles.proofRest}>{item.rest}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured work ── */}
      <section className={`${styles.container} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Featured work</h2>
        <div className={styles.cardGrid}>
          {featured.map((item) => (
            <article key={item.title} className={styles.card}>
              <CardThumb links={item.links} />
              <p className={styles.eyebrow}>{item.eyebrow}</p>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardSummary}>{item.summary}</p>
              <Link href={item.href} className={styles.featuredLink}>
                {item.linkLabel}
                <Icon kind="arrow-right" className={styles.inlineIcon} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Currently ── */}
      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.currentlyRow}>
          <span className={styles.currentlyLabel}>Currently</span>
          {currently.map((item) => (
            <span key={item} className={styles.currentlyItem}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── Contact band ── */}
      <section className={styles.band} id="contact">
        <div className={`${styles.container} ${styles.contactBand}`}>
          <h2 className={styles.contactBandTitle}>
            Let&apos;s build something <em>real</em>.
          </h2>
          <p className={styles.contactBandNote}>
            I&apos;m open to research collaborations, engineering roles, and applied AI projects
            with real-world impact.
          </p>
          <div className={styles.contactBandActions}>
            <a href={`mailto:${profile.email}`} className={styles.primaryButton}>
              <Icon kind="mail" className={styles.buttonIcon} />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
