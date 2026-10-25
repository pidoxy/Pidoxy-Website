import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { Button, Chip, SectionHeader, Stamp, uiStyles as ui } from "../components/ui";
import { innerStyles as s } from "../components/inner";
import { profile } from "../data/profile";
import { talks } from "../data/talks";
import t from "../styles/TalksPage.module.css";

const STRIP = [
  { src: "/images/talks/nithub-2026.jpg", alt: "Teaching at the NITHub AI Literacy Day", caption: "NITHub AI Literacy Day · Sep 2026" },
  { src: "/images/talks/sysconf-2026.jpg", alt: "Slide from From Senses to Systems at SysConf 2026", caption: "SysConf 2026 · “From Senses to Systems”" },
  { src: "/images/talks/acvss-vlog.jpg", alt: "ACVSS 2026 in Accra", caption: "ACVSS 2026 · Accra" },
];

const PASSPORT = [
  { role: "Speaker", event: "SysConf", date: "Oct 2026" },
  { role: "Facilitator", event: "NITHub", date: "Sep 2026" },
  { role: "Build Lab", event: "IMAGINE", date: "Aug 2026" },
  { role: "Instructor", event: "AI Colony", date: "Jul 2026" },
  { role: "Scholar", event: "ACVSS", date: "Jul 2026" },
  { role: "Host", event: "M.A.R.K", date: "May 2026" },
  { role: "Poster", event: "MIRG-ICAIR", date: "Nov 2025" },
];
const ROT = [-4, 3, -2, 4, -3, 2, -1];

export default function Talks() {
  return (
    <Layout>
      <Meta
        title="Talks & teaching"
        description="Talks, workshops and teaching by Emmanuel Idoko: SysConf 2026, NITHub AI Literacy Day, AI for Software Engineering at The AI Colony, paper walkthroughs and community sessions."
        path="/talks"
      />

      <header className={`container ${s.intro}`}>
        <nav className={`mono ${t.subnav}`} aria-label="Talks sections">
          <Link href="/talks" aria-current="page">
            Archive
          </Link>
          <Link href="/speaking">Speaker kit →</Link>
        </nav>
        <h1 className={ui.displayXL}>I teach what I build.</h1>
        <p className={ui.bodyL}>Conference talks, workshops, paper walkthroughs and community sessions, from AI literacy for first-timers to retrieval failures for ML teams.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Button href="/speaking">Invite me to speak</Button>
          <Button href={profile.youtube} variant="secondary" icon="arrow-up-right">
            YouTube channel
          </Button>
        </div>
      </header>

      <section className="container" style={{ paddingTop: "clamp(32px, 4vw, 64px)" }} aria-label="Photos">
        <div className={t.strip}>
          {STRIP.map((p, i) => (
            <figure key={p.src} data-reveal style={{ "--i": i }}>
              <div className={t.stripImg}>
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 100vw, 40vw" quality={72} priority={i === 0} />
              </div>
              <figcaption className="mono">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={`container ${s.section}`} aria-labelledby="archive">
        <SectionHeader index="01" label="Archive" title="Every session" id="archive" />
        <ol className={t.talks}>
          {talks.map((k) => (
            <li key={k.title} className={`${t.talk} ${k.image ? "" : t.talkNoThumb}`} data-reveal>
              {k.image ? (
                <div className={t.thumb}>
                  <Image src={k.image} alt="" fill sizes="240px" quality={70} />
                </div>
              ) : null}
              <div className={t.talkBody}>
                <span className="eyebrow" style={{ fontSize: 11 }}>
                  {k.date} · {k.role}
                </span>
                <h3 className={t.talkTitle}>{k.title}</h3>
                <p className={t.talkEvent}>{k.event}</p>
                {k.description ? <p className={t.talkDesc}>{k.description}</p> : null}
                <div className={s.chips}>
                  {k.links.map((l) => (
                    <Chip key={l.href} href={l.href}>
                      {l.label}
                    </Chip>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={`container ${s.section}`} aria-labelledby="passport">
        <SectionHeader index="02" label="Passport" title="Where I’ve been" id="passport" link={{ href: "/moments", label: "Moments in photos" }} />
        <div className={t.stamps}>
          {PASSPORT.map((p, i) => (
            <Stamp key={p.event} {...p} rotate={ROT[i]} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
