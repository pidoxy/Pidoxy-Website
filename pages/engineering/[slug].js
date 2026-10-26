import { useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import { Button, StatusPill, Readout, SmartLink, uiStyles as ui } from "../../components/ui";
import { Figure, Timeline, Toc, innerStyles as s } from "../../components/inner";
import { caseStudies } from "../../data/caseStudies";
import { profile } from "../../data/profile";
import { personId } from "../../data/seo";

export function getStaticPaths() {
  return { paths: Object.keys(caseStudies).map((slug) => ({ params: { slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug, cs: caseStudies[params.slug] } };
}

export default function CaseStudy({ slug, cs }) {
  const toc = useMemo(() => cs.sections.map((x) => ({ id: x.id, label: x.label })), [cs]);

  return (
    <Layout progress>
      <Meta title={`${cs.title} case study`} description={`${cs.headline} ${cs.lede}`} path={`/engineering/${slug}`} ogType="article" kicker={cs.kicker} cardTitle={`${cs.title}: ${cs.headline}`} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: `${cs.title} case study: ${cs.headline}`,
              description: cs.lede,
              url: `${profile.siteUrl}/engineering/${slug}`,
              image: `${profile.siteUrl}${cs.hero.src}`,
              author: { "@id": personId },
              about: {
                "@type": "SoftwareApplication",
                name: cs.title,
                url: cs.productUrl || `${profile.siteUrl}/engineering/${slug}`,
                applicationCategory: cs.kicker.split(" · ")[1] || "Application",
                creator: { "@id": personId },
              },
            }),
          }}
        />
      </Head>

      <header className={`container ${s.intro}`}>
        <Link href="/engineering" className={`mono ${s.back}`}>
          ← Engineering
        </Link>
        <div className={s.metaRow}>
          <StatusPill status={cs.status} />
          <span className="mono">{cs.kicker}</span>
        </div>
        <h1 className={ui.displayXL} style={{ maxWidth: 980 }}>
          {cs.headline}
        </h1>
        <p className={ui.bodyL}>{cs.lede}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {cs.ctas.map((c) => (
            <Button key={c.href} href={c.href} variant={c.variant} icon="arrow-up-right">
              {c.label}
            </Button>
          ))}
        </div>
        <dl className="caseDetails" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, margin: "8px 0 0", paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
          {cs.details.map((d) => (
            <div key={d.k} style={{ display: "grid", gap: 6 }}>
              <dt className="mono" style={{ color: "var(--secondary)" }}>
                {d.k}
              </dt>
              <dd style={{ margin: 0, fontSize: 15 }}>{d.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="container" style={{ paddingTop: "clamp(24px, 4vw, 48px)" }}>
        <Figure src={cs.hero.src} alt={cs.hero.alt} note={cs.hero.caption} ratio="800 / 478" sizes="(max-width: 1400px) 100vw, 1312px" priority />
      </div>

      <section className="container" style={{ paddingTop: "clamp(64px, 8vw, 96px)" }} aria-label="At a glance">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
          {cs.readouts.map((r) => (
            <Readout key={r.label} {...r} />
          ))}
        </div>
      </section>

      <div className={`container ${s.articleWrap}`}>
        <Toc items={toc} />
        <article className={s.article}>
          {cs.sections.map((x) => (
            <section key={x.id} id={x.id} className={s.block}>
              <p className="eyebrow">{x.label}</p>
              {x.body?.map((p) => (
                <p key={p} className={s.prose}>
                  {p}
                </p>
              ))}
              {x.rows ? (
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {x.rows.map((r) => (
                    <li key={r.t} className={s.caseRow}>
                      <span className={ui.headingS}>{r.t}</span>
                      <span style={{ color: "var(--secondary)" }}>{r.d}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {x.quote ? (
                <blockquote className={s.quote}>
                  <p>{x.quote.text}</p>
                  <cite className="mono" style={{ fontStyle: "normal", color: "var(--secondary)" }}>
                    {x.quote.source}
                  </cite>
                </blockquote>
              ) : null}
              {x.timeline ? <Timeline items={x.timeline} /> : null}
              {x.tryIt ? (
                <>
                  <Figure src={cs.hero.src} alt="" ratio="800 / 478" />
                  <p className={s.prose}>{x.tryIt.text}</p>
                  <div>
                    <Button href={x.tryIt.href} icon="arrow-up-right">
                      {x.tryIt.label}
                    </Button>
                  </div>
                </>
              ) : null}
            </section>
          ))}

          {cs.related ? (
            <section className={s.block}>
              <p className="eyebrow">{cs.related.label}</p>
              <SmartLink href={cs.related.href} className={s.card}>
                <span className={s.cardTitle}>{cs.related.title}</span>
                <span className="mono" style={{ color: "var(--secondary)" }}>
                  In the speaker kit →
                </span>
              </SmartLink>
            </section>
          ) : null}
        </article>
      </div>

      <nav className="container" aria-label="More projects">
        <div className={s.prevNext}>
          <Link href={cs.prev.href}>
            <span className="mono" style={{ color: "var(--secondary)" }}>
              ← Previous
            </span>
            <span className={s.prevNextTitle}>{cs.prev.title}</span>
          </Link>
          <Link href={cs.next.href}>
            <span className="mono" style={{ color: "var(--secondary)" }}>
              Next →
            </span>
            <span className={s.prevNextTitle}>{cs.next.title}</span>
          </Link>
        </div>
      </nav>
    </Layout>
  );
}
