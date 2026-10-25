import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { Button, Chip, SectionHeader, uiStyles as ui } from "../components/ui";
import { Timeline, innerStyles as s } from "../components/inner";
import { aboutHeadline, aboutProse, aboutFacts } from "../data/profile";
import { personJsonLd, profilePageJsonLd } from "../data/seo";
import { experience, leadership } from "../data/experience";
import { honors } from "../data/honors";
import { press, mentions } from "../data/press";
import { moments } from "../data/moments";
import a from "../styles/About.module.css";

export default function About() {
  return (
    <Layout>
      <Meta
        title="About"
        description="Emmanuel Idoko builds software for a living, researches why AI fails, and teaches: software engineer at HabariPay (GTCO), founder of AidCare, researcher in medical imaging and reliable AI, instructor at The AI Colony."
        path="/about"
        ogType="profile"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [personJsonLd, profilePageJsonLd("/about", "About Emmanuel Idoko", aboutProse[0])],
            }),
          }}
        />
      </Head>

      <header className={`container ${a.intro}`}>
        <div className={a.introText}>
          <p className="eyebrow">About</p>
          <h1 className={ui.displayXL}>{aboutHeadline}</h1>
          <div className={a.prose}>
            {aboutProse.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Button href="/cv">Download CV</Button>
            <Button href="#contact" variant="secondary" icon={null}>
              Get in touch
            </Button>
          </div>
        </div>
        <aside className={a.side}>
          <div className={a.portrait}>
            <Image src="/speaker/emmanuel-idoko-headshot-professional-portrait.jpg" alt="Emmanuel Idoko, arms crossed, smiling" fill sizes="(max-width: 960px) 90vw, 440px" quality={80} priority />
          </div>
          <div className={a.facts}>
            <p className="mono" style={{ color: "var(--secondary)", margin: 0 }}>
              Education
            </p>
            {aboutFacts.education.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </div>
          <div className={a.facts}>
            <p className="mono" style={{ color: "var(--secondary)", margin: 0 }}>
              Elsewhere
            </p>
            <p style={{ margin: 0 }}>
              Online I go by <strong>Pidoxy</strong>: @pidoxy on GitHub, YouTube and Devpost, @pidoxy_ on X.
            </p>
            <div className={s.chips}>
              {aboutFacts.profiles.map((p) => (
                <Chip key={p.href} href={p.href}>
                  {p.label}
                </Chip>
              ))}
            </div>
          </div>
        </aside>
      </header>

      <section id="experience" className={`container ${s.section}`} aria-labelledby="exp-title">
        <SectionHeader index="01" label="Experience" title="Where I work" id="exp-title" link={{ href: "/cv", label: "Full CV" }} />
        <Timeline items={experience.map((x) => ({ when: x.period, title: x.role, sub: x.org, detail: x.detail, links: x.links }))} />
        <div className={a.leadership}>
          <p className="mono" style={{ color: "var(--secondary)", margin: 0 }}>
            Leadership & community
          </p>
          <ul>
            {leadership.map((l) => (
              <li key={l.role + l.org}>
                <span>{l.role}</span>
                <span className={a.org}>{l.org}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="honours" className={`container ${s.section}`} aria-labelledby="hon-title">
        <SectionHeader index="02" label="Honours" title="Awards and scholarships" id="hon-title" />
        <Timeline
          items={honors.map((h) => ({
            when: h.date,
            title: h.title,
            sub: h.result,
            detail: [h.org, h.detail].filter(Boolean).join(" · "),
            links: h.link ? [{ label: "Source", href: h.link }] : [],
          }))}
        />
      </section>

      <section id="press" className={`container ${s.section}`} aria-labelledby="press-title">
        <SectionHeader index="03" label="Press" title="Coverage" id="press-title" />
        <div className={a.press}>
          {press.map((p, i) => (
            <article key={p.href} className={s.card} data-reveal style={{ "--i": i % 2 }}>
              <p className="eyebrow" style={{ fontSize: 11 }}>
                {p.outlet} · {p.date}
              </p>
              <h3 className={s.cardTitle}>{p.title}</h3>
              <p className={s.cardBody}>{p.note}</p>
              <div>
                <Chip href={p.href}>Read article</Chip>
              </div>
            </article>
          ))}
        </div>
        {mentions.length ? (
          <div className={a.mentions}>
            <p className="mono" style={{ color: "var(--secondary)", margin: 0 }}>
              Mentions
            </p>
            {mentions.map((m) => (
              <a key={m.href} href={m.href} target="_blank" rel="noopener noreferrer">
                {m.label} <span style={{ color: "var(--secondary)" }}>· {m.source}</span>
              </a>
            ))}
          </div>
        ) : null}
      </section>

      <section id="moments" className={`container ${s.section}`} aria-labelledby="mom-title">
        <SectionHeader index="04" label="Moments" title="Events in photos" id="mom-title" link={{ href: "/moments", label: "All moments" }} />
        <ul className={a.moments}>
          {moments.map((m) => (
            <li key={m.slug}>
              <Link href={`/moments#${m.slug}`}>
                <span className="mono" style={{ color: "var(--accent)" }}>
                  {m.date}
                </span>
                <span>{m.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

