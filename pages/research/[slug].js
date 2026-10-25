import { useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import { Button, Chip, StatusPill, Readout, SmartLink, uiStyles as ui } from "../../components/ui";
import { Authors, Figure, Toc, innerStyles as s } from "../../components/inner";
import useCopy from "../../lib/useCopy";
import { LINK_LABELS, LINK_ORDER } from "../../lib/pubLinks";
import { profile } from "../../data/profile";
import { personId } from "../../data/seo";
import { publications } from "../../data/publications";

export function getStaticPaths() {
  return { paths: publications.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  const i = publications.findIndex((p) => p.slug === params.slug);
  const prev = publications[i - 1] || null;
  const next = publications[i + 1] || null;
  return {
    props: {
      pub: publications[i],
      prev: prev && { slug: prev.slug, title: prev.title.split(":")[0] },
      next: next && { slug: next.slug, title: next.title.split(":")[0] },
    },
  };
}

function citation(pub) {
  const authors = pub.authors
    .split(", ")
    .map((a) => {
      const parts = a.split(" ");
      const last = parts.pop();
      return `${last}, ${parts.join(" ")}`;
    })
    .join(", ");
  const id = pub.links.arxiv ? ` arXiv:${pub.links.arxiv.split("/").pop()}.` : "";
  return `${authors}. ${pub.title}. ${pub.venue}, ${pub.year}.${id}`;
}

function CopyCitation({ text }) {
  const [state, copy] = useCopy(text);
  return (
    <Button variant="ghost" icon={state === "copied" ? "check" : "copy"} onClick={copy} aria-live="polite">
      {state === "copied" ? "Copied" : "Copy citation"}
    </Button>
  );
}

export default function Paper({ pub, prev, next }) {
  const cite = citation(pub);
  const toc = useMemo(
    () =>
      [
    { id: "overview", label: "Overview" },
    pub.problem && { id: "problem", label: "The problem" },
    pub.findings && { id: "findings", label: "Findings" },
    pub.method && { id: "method", label: "Method" },
    { id: "cite", label: "Cite" },
      ].filter(Boolean),
    [pub]
  );
  const links = [
    ...LINK_ORDER.filter((k) => pub.links[k] && k !== "announcement").map((k) => ({ label: LINK_LABELS[k], href: pub.links[k] })),
    ...(pub.extraLinks || []),
  ];
  const illustrative = /illustrative/i.test(pub.figure.note);
  const short = pub.title.split(":")[0];

  return (
    <Layout>
      <Meta title={short} description={`${pub.plain} ${pub.venue}.`} path={`/research/${pub.slug}`} ogType="article" />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              headline: pub.title,
              url: `${profile.siteUrl}/research/${pub.slug}`,
              author: pub.authors.split(", ").map((name) => ({
                "@type": "Person",
                name,
                ...(name.includes("Idoko") ? { "@id": personId, url: profile.siteUrl } : {}),
              })),
              datePublished: pub.year,
              publisher: pub.venue,
              ...(pub.links.doi || pub.links.arxiv ? { sameAs: pub.links.doi || pub.links.arxiv } : {}),
            }),
          }}
        />
      </Head>

      <header className={`container ${s.intro}`}>
        <Link href="/research" className={`mono ${s.back}`}>
          ← Research
        </Link>
        <div className={s.metaRow}>
          <StatusPill status={pub.status} />
          <span className="mono">
            {pub.venue} · {pub.position}
          </span>
        </div>
        <h1 className={ui.displayL} style={{ maxWidth: 1080 }}>
          {pub.title}
        </h1>
        <Authors authors={pub.authors} />
        <div className={s.chips}>
          {links.map((l) => (
            <Chip key={l.href} href={l.href}>
              {l.label}
            </Chip>
          ))}
        </div>
      </header>

      <div className="container" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }}>
        <Figure src={pub.figure.src} alt={pub.figure.alt} note={illustrative ? `${pub.figure.note}. Replace with Figure 1 from the paper.` : pub.figure.note} ratio="16 / 8" contain={illustrative} sizes="(max-width: 1400px) 100vw, 1312px" priority />
      </div>

      <div className={`container ${s.articleWrap}`}>
        <Toc items={toc} />
        <article className={s.article}>
          <section id="overview" className={s.block}>
            <p className="eyebrow">Overview</p>
            {pub.overview.map((p) => (
              <p key={p} className={s.prose}>
                {p}
              </p>
            ))}
          </section>

          {pub.problem ? (
            <section id="problem" className={s.block}>
              <p className="eyebrow">The problem</p>
              <p className={s.prose}>{pub.problem}</p>
            </section>
          ) : null}

          {pub.findings ? (
            <section id="findings" className={s.block}>
              <p className="eyebrow">Findings</p>
              <div className={s.readoutRow}>
                {pub.findings.map((f) => (
                  <Readout key={f.label} {...f} />
                ))}
              </div>
            </section>
          ) : null}

          {pub.method ? (
            <section id="method" className={s.block}>
              <p className="eyebrow">Method</p>
              <ol className={s.pipeline} style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {pub.method.map((m, i) => (
                  <li key={m} style={{ display: "contents" }}>
                    <span className={`mono ${s.step}`}>{m}</span>
                    {i < pub.method.length - 1 ? <span aria-hidden="true">→</span> : null}
                  </li>
                ))}
              </ol>
              {pub.controls ? <p className={s.prose}>{pub.controls}</p> : null}
            </section>
          ) : null}

          <section id="cite" className={s.block}>
            <p className="eyebrow">Cite</p>
            <div className={s.cite}>
              <p className={s.citeText}>{cite}</p>
              <CopyCitation text={cite} />
            </div>
          </section>

          {pub.relatedTalk ? (
            <section className={s.block}>
              <p className="eyebrow">Related talk</p>
              <SmartLink href={pub.relatedTalk.href} className={s.card} style={{ textDecoration: "none" }}>
                <span className={s.cardTitle}>{pub.relatedTalk.title}</span>
                <span className="mono" style={{ color: "var(--secondary)", display: "inline-flex", gap: 6, alignItems: "center" }}>
                  In the speaker kit →
                </span>
              </SmartLink>
            </section>
          ) : null}
        </article>
      </div>

      <nav className={`container`} aria-label="More research">
        <div className={s.prevNext}>
          {prev ? (
            <Link href={`/research/${prev.slug}`}>
              <span className="mono" style={{ color: "var(--secondary)" }}>
                ← Previous
              </span>
              <span className={s.prevNextTitle}>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/research/${next.slug}`}>
              <span className="mono" style={{ color: "var(--secondary)" }}>
                Next →
              </span>
              <span className={s.prevNextTitle}>{next.title}</span>
            </Link>
          ) : (
            <Link href="/engineering">
              <span className="mono" style={{ color: "var(--secondary)" }}>
                Next →
              </span>
              <span className={s.prevNextTitle}>See what I&rsquo;ve built</span>
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  );
}
