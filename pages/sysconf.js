import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { Button, uiStyles as ui } from "../components/ui";
import { innerStyles as s } from "../components/inner";
import { profile } from "../data/profile";

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
      <header className={`container ${s.intro}`} style={{ paddingBottom: 0 }}>
        <p className="eyebrow">SysConf · Interactive demo</p>
        <h1 className={ui.displayXL}>Leak Desk</h1>
        <p className={ui.bodyL}>
          Three sources, three honest answers — ANSWER, CONFLICT, or NEED MORE. A small demo from my SysConf talk on getting language models to know when to say &ldquo;I don&apos;t know.&rdquo; It calls Claude live, so it runs on Claude.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button href={ARTIFACT_URL} icon="arrow-up-right">
            Open the live demo
          </Button>
          <Button href="/talks" variant="secondary">
            See the talk
          </Button>
        </div>
        <p className="mono" style={{ color: "var(--secondary)", margin: 0 }}>
          If the demo doesn&apos;t open, it may be offline —{" "}
          <a href={`mailto:${profile.email}?subject=Leak%20Desk%20demo`} style={{ textDecoration: "underline" }}>
            email me
          </a>{" "}
          and I&apos;ll resend the link.
        </p>
      </header>
    </Layout>
  );
}
