import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { profile } from "../data/profile";
import styles from "../styles/Page.module.css";

// Leak Desk landing / fallback page.
//
// While the artifact is live, sysconf.pidoxy.com redirects straight to Claude
// (see ARTIFACT_AVAILABLE in next.config.ts). If the artifact is ever taken
// down, flipping that flag routes the subdomain here instead of to a Claude
// 404 — so visitors always land on a branded page. This page also reads fine
// as a normal landing page, since it just points at the live demo.
const ARTIFACT_URL = "https://claude.ai/artifact/JsoaPTLBPqDa55DBSRPxMR";

export default function Sysconf() {
  return (
    <Layout>
      <Meta
        title="Leak Desk"
        description='Leak Desk — an interactive demo from the SysConf talk on getting language models to know when to say "I don&apos;t know."'
        path="/sysconf"
        noindex
      />
      <div className={`${styles.container} ${styles.notFound}`}>
        <p className={styles.eyebrow}>SysConf · Interactive demo</p>
        <h1 className={styles.pageTitle}>
          Leak <em>Desk</em>
        </h1>
        <p className={styles.notFoundText} style={{ maxWidth: "54ch", marginInline: "auto" }}>
          Three sources, three honest answers — ANSWER, CONFLICT, or NEED MORE. A small demo
          from my SysConf talk on getting language models to know when to say &ldquo;I don&apos;t
          know.&rdquo; It calls Claude live, so it runs on Claude.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "var(--s4)",
          }}
        >
          <a className={styles.primaryButton} href={ARTIFACT_URL} target="_blank" rel="noreferrer">
            Open the live demo ↗
          </a>
          <Link className={styles.secondaryButton} href="/talks">
            See the talk
          </Link>
        </div>
        <p className={styles.notFoundText} style={{ fontSize: "0.9rem", marginInline: "auto" }}>
          If the demo doesn&apos;t open, it may be offline —{" "}
          <a href={`mailto:${profile.email}?subject=Leak%20Desk%20demo`}>email me</a> and I&apos;ll
          resend the link.
        </p>
      </div>
    </Layout>
  );
}
