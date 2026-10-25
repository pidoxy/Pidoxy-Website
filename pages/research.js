import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { Button, Chip, SectionHeader, StatusPill, Readout, SmartLink, uiStyles as ui } from "../components/ui";
import { Authors, Figure, Timeline, innerStyles as s } from "../components/inner";
import { profile, aboutFacts } from "../data/profile";
import { personId } from "../data/seo";
import { publications, researchActivity, openWork } from "../data/publications";
import { LINK_LABELS, LINK_ORDER } from "../lib/pubLinks";


const INTERESTS = [...aboutFacts.researchInterests, "Low-resource AI"];
const featured = publications.find((p) => p.featured);

export default function Research() {
  return (
    <Layout>
      <Meta
        title="Research"
        description="Research by Emmanuel Idoko in medical imaging, computer vision, self-supervised learning and retrieval-augmented systems: When Retrieval Hurts (Africa at NeurIPS 2026), VAMAE (ICPR 2026) and SharpXR (MIRASOL Workshop, MICCAI 2025)."
        path="/research"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": publications.map((p) => ({
                "@type": "ScholarlyArticle",
                headline: p.title,
                url: `${profile.siteUrl}/research/${p.slug}`,
                author: p.authors.split(", ").map((name) => ({
                  "@type": "Person",
                  name,
                  ...(name.includes("Idoko") ? { "@id": personId, url: profile.siteUrl } : {}),
                })),
                datePublished: p.year,
                publisher: p.venue,
                ...(p.links.doi || p.links.arxiv ? { sameAs: p.links.doi || p.links.arxiv } : {}),
              })),
            }),
          }}
        />
      </Head>

      <header className={`container ${s.intro}`}>
        <div className={s.introRow}>
          <div className={s.introText}>
            <p className="eyebrow">Research</p>
            <h1 className={ui.displayXL}>Asking where intelligent systems break, and why.</h1>
            <p className={ui.bodyL}>
              My research spans medical imaging, computer vision, self-supervised learning and retrieval-augmented systems. The common thread: judge a model by the decision it supports, not by how good its output looks.
            </p>
          </div>
          <div className={s.introSide}>
            <span className="mono" style={{ color: "var(--secondary)" }}>
              Interests
            </span>
            <ul className={s.pills}>
              {INTERESTS.map((i) => (
                <li key={i} className={s.pill}>
                  {i}
                </li>
              ))}
            </ul>
            <Button href={profile.scholar} variant="secondary" icon="arrow-up-right">
              Google Scholar
            </Button>
          </div>
        </div>
      </header>

      {/* Featured result */}
      <section className="container" style={{ paddingTop: "clamp(40px, 5vw, 72px)" }} aria-label="Featured result">
        {/* No data-reveal: above the fold, so it must paint without waiting for JS. */}
        <div className={s.feature}>
          <Figure src={featured.figure.src} alt={featured.figure.alt} note={featured.figure.note} ratio="5 / 3" sizes="(max-width: 900px) 100vw, 680px" priority />
          <div className={s.featureText}>
            <div className={s.metaRow}>
              <StatusPill status={featured.status} />
              <span className="mono">MIRASOL @ MICCAI 2025 · {featured.position}</span>
            </div>
            <h2 className={ui.headingM}>
              <SmartLink href={`/research/${featured.slug}`}>SharpXR: denoising without erasing the diagnosis</SmartLink>
            </h2>
            <p className={ui.bodyL} style={{ fontSize: 16 }}>
              Low-dose pediatric X-rays are noisy, and denoisers that blur fine structure can hurt the diagnosis they were meant to help. SharpXR is judged by the downstream task, not pixel metrics.
            </p>
            <div className={s.readoutRow}>
              {featured.findings.map((f) => (
                <Readout key={f.label} {...f} />
              ))}
            </div>
            <div className={s.chips}>
              {LINK_ORDER.filter((k) => featured.links[k] && k !== "announcement").map((k) => (
                <Chip key={k} href={featured.links[k]}>
                  {LINK_LABELS[k]}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section className={`container ${s.section}`} aria-labelledby="papers">
        <SectionHeader index="01" label="Publications" title="Papers" id="papers" />
        <ol className={s.pubList}>
          {publications.map((p) => (
            <li key={p.slug} className={s.pub} data-reveal>
              <div className={s.pubYear}>
                <span className={s.pubYearNum}>{p.year}</span>
                <StatusPill status={p.status} />
              </div>
              <div className={s.pubMain}>
                <h3 className={s.pubTitle}>
                  <SmartLink href={`/research/${p.slug}`}>{p.title}</SmartLink>
                </h3>
                <Authors authors={p.authors} />
                <p className="eyebrow" style={{ fontSize: 11 }}>
                  {p.venue} · {p.position}
                </p>
                <p className={s.pubNote}>{p.plain}</p>
                <div className={s.chips}>
                  <Chip href={`/research/${p.slug}`}>Summary</Chip>
                  {LINK_ORDER.filter((k) => p.links[k] && k !== "announcement").map((k) => (
                    <Chip key={k} href={p.links[k]}>
                      {LINK_LABELS[k]}
                    </Chip>
                  ))}
                </div>
              </div>
              <SmartLink href={`/research/${p.slug}`} className={s.pubThumb} aria-hidden="true" tabIndex={-1}>
                <Image src={p.figure.src} alt="" fill sizes="220px" quality={70} />
              </SmartLink>
            </li>
          ))}
        </ol>
      </section>

      {/* Open work */}
      <section className={`container ${s.section}`} aria-labelledby="open-work">
        <SectionHeader index="02" label="In progress" title="Open work" id="open-work" />
        <div className={s.cards}>
          {openWork.map((w, i) => (
            <article key={w.title} className={s.card} data-reveal style={{ "--i": i }}>
              <div className={s.metaRow}>
                <StatusPill status={w.status} />
                <span className="mono">{w.meta}</span>
              </div>
              <h3 className={s.cardTitle}>{w.title}</h3>
              <p className={s.cardBody}>{w.summary}</p>
              <div className={s.chips}>
                {w.links.map((l) => (
                  <Chip key={l.href} href={l.href}>
                    {l.label}
                  </Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className={`container ${s.section}`} aria-labelledby="milestones">
        <SectionHeader index="03" label="Activity" title="Milestones" id="milestones" />
        <Timeline items={researchActivity.map((a) => ({ when: a.date, title: a.title, detail: a.note, links: a.links }))} />
      </section>
    </Layout>
  );
}
