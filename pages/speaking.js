import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { Button, Chip, CopyChip, SectionHeader, Readout, uiStyles as ui } from "../components/ui";
import { Timeline, innerStyles as s } from "../components/inner";
import { profile } from "../data/profile";
import { personJsonLd, profilePageJsonLd } from "../data/seo";
import { talks } from "../data/talks";
import { researchActivity } from "../data/publications";
import {
  speakerProfile,
  heroCopy,
  credibility,
  affiliationGroups,
  taglines,
  bios,
  mcIntros,
  territories,
  speakerTalks,
  audiences,
  formats,
  durations,
  researchAreas,
  engineeringAreas,
  headshots,
  headshotUsageNote,
  speakerLinks,
  whyInvite,
  invitationChecklist,
} from "../data/speaking";
import k from "../styles/SpeakerKit.module.css";

const inviteMailto = `mailto:${profile.email}?subject=${encodeURIComponent("Speaking Invitation: [Event Name]")}`;

// Plain-text blocks for the copy actions — clean output for event forms.
const factsText = [
  `Name: ${speakerProfile.name}`,
  `Designation: ${speakerProfile.designation}`,
  `Location: ${speakerProfile.location} (${speakerProfile.timezone})`,
  `Languages: ${speakerProfile.languages}`,
  `Availability: ${speakerProfile.availability.join("; ")}`,
  `Email: ${profile.email}`,
  `Website: ${profile.siteUrl}`,
  `Speaker kit: ${profile.siteUrl}/speaking`,
].join("\n");

const QUICK = [
  ["Name", speakerProfile.name],
  ["Designation", speakerProfile.designation],
  ["Affiliation", "AidCare · HabariPay/GTCO · ML Collective · University of Lagos"],
  ["Location", speakerProfile.location],
  ["Primary topics", "Artificial Intelligence · Computer Vision · Multimodal AI · Medical AI · Agentic Systems · Software Engineering"],
  ["Formats", "Talks · Workshops · Panels · Guest Lectures · Research Presentations · Moderation"],
];
const quickCopyText = [...QUICK.map(([a, b]) => `${a}: ${b}`), `Email: ${profile.email}`].join("\n");
const allLinksText = speakerLinks.map((l) => `${l.label}: ${l.text || l.href}`).join("\n");

const talkCopyText = (t) =>
  `${t.title}\n\n${t.abstract}\n\nAudience: ${t.audience}\nLevel: ${t.level}\nFormat: ${t.formats}\nDuration: ${t.duration}\n\nAttendees will leave with:\n${t.takeaways.map((x) => `• ${x}`).join("\n")}`;

// Research presentations for the speaking-history section, derived from the
// shared research activity so nothing is duplicated by hand.
const presentations = researchActivity.filter((a) => /poster|walkthrough/i.test(a.title));

const ALL_BIOS = [...bios, ...mcIntros];

const JUMP = [
  { label: "At a glance", id: "at-a-glance" },
  { label: "Bios", id: "bios" },
  { label: "What I speak about", id: "topics" },
  { label: "Talks", id: "talks" },
  { label: "Formats", id: "formats" },
  { label: "Headshots", id: "headshots" },
  { label: "Speaking history", id: "past" },
  { label: "Links", id: "links" },
  { label: "Invite", id: "invite" },
];

function JumpBar() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const els = JUMP.map((j) => document.getElementById(j.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <nav className={k.jump} aria-label="On this page">
      <div className={`container ${k.jumpInner}`}>
        {JUMP.map((j) => (
          <a key={j.id} href={`#${j.id}`} className={`${k.jumpLink} ${active === j.id ? k.jumpActive : ""}`} aria-current={active === j.id ? "location" : undefined}>
            {j.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Bios() {
  const [tab, setTab] = useState(0);
  const onKey = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (tab + (e.key === "ArrowRight" ? 1 : -1) + ALL_BIOS.length) % ALL_BIOS.length;
    setTab(next);
    document.getElementById(`bio-tab-${next}`)?.focus();
  };
  return (
    <>
      <div className={k.tabs} role="tablist" aria-label="Bio length" onKeyDown={onKey}>
        {ALL_BIOS.map((b, i) => (
          <button
            key={b.label}
            id={`bio-tab-${i}`}
            type="button"
            role="tab"
            className={k.tab}
            aria-selected={tab === i}
            aria-controls={`bio-panel-${i}`}
            tabIndex={tab === i ? 0 : -1}
            onClick={() => setTab(i)}
            data-track="bio_tab"
          >
            {b.label.replace(/ bio$/i, "").replace(/ introduction$/i, " intro")}
          </button>
        ))}
      </div>
      {ALL_BIOS.map((b, i) => (
        <div key={b.label} id={`bio-panel-${i}`} role="tabpanel" aria-labelledby={`bio-tab-${i}`} hidden={tab !== i} className={k.bioPanel}>
          <div className={k.headRow}>
            <span className="mono" style={{ color: "var(--secondary)" }}>
              {b.label} · {b.words}
            </span>
            <CopyChip text={b.text} label="Copy bio" />
          </div>
          {b.context ? (
            <p className="mono" style={{ color: "var(--accent)" }}>
              Best for: {b.context}
            </p>
          ) : null}
          {b.text.split("\n\n").map((para, j) => (
            <p key={j} className={k.bioText}>
              {para}
            </p>
          ))}
        </div>
      ))}
    </>
  );
}

export default function Speaking() {
  return (
    <Layout>
      <Meta
        titleOverride="Emmanuel Idoko | Speaker · AI, Computer Vision & Software Engineering"
        cardTitle="Speaker kit: AI, computer vision and software engineering"
        description="Speaker kit for Emmanuel Idoko: software engineer, AI researcher, and technical speaker from Nigeria working across computer vision, multimodal AI, reliable AI, and production systems. Bios, headshots, talk abstracts, and everything an organizer needs."
        path="/speaking"
        ogType="profile"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [personJsonLd, profilePageJsonLd("/speaking", "Emmanuel Idoko Speaker Kit", "Speaker kit for Emmanuel Idoko, with bios, headshots, talk abstracts, and organizer links.")],
            }),
          }}
        />
      </Head>

      {/* ── Hero ── */}
      <header className={`container ${k.hero}`}>
        <div className={k.heroText}>
          <nav className="mono" aria-label="Talks sections" style={{ display: "flex", gap: 22 }}>
            <Link href="/talks" style={{ color: "var(--secondary)" }}>
              ← Archive
            </Link>
            <span aria-current="page">Speaker kit</span>
          </nav>
          <h1 className={`${ui.displayXL} ${k.heroTitle}`}>{heroCopy.proposition.join("\n")}</h1>
          <p className={ui.bodyL}>{heroCopy.intro}</p>
          <p className={ui.bodyL} style={{ fontSize: 16 }}>
            {heroCopy.line2}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <Button href={inviteMailto} icon={null}>
              Invite me to speak
            </Button>
            <Button href="#talks" variant="secondary">
              Explore talks
            </Button>
            <Button href="#headshots" variant="ghost" icon="arrow-down">
              Download speaker assets
            </Button>
          </div>
          <div className={k.facts}>
            <div>
              <span className="mono" style={{ color: "var(--secondary)" }}>
                Location
              </span>
              {speakerProfile.location}
            </div>
            <div>
              <span className="mono" style={{ color: "var(--secondary)" }}>
                Time zone
              </span>
              {speakerProfile.timezone}
            </div>
            {speakerProfile.availability.map((a) => (
              <div key={a}>
                <span className="mono" style={{ color: "var(--secondary)" }}>
                  {a.split(" · ")[0]}
                </span>
                {a.split(" · ")[1] || a}
              </div>
            ))}
          </div>
        </div>
        <div className={k.headshot}>
          <Image src="/speaker/emmanuel-idoko-headshot-portrait.jpg" alt="Emmanuel Idoko, studio portrait in a navy suit" fill sizes="(max-width: 900px) 80vw, 420px" quality={80} priority />
        </div>
      </header>

      <JumpBar />

      <div className={`container ${k.cred}`}>
        {credibility.map((c) => (
          <div key={c.lead}>
            <span className="mono">{c.lead}</span>
            <p>{c.rest}</p>
          </div>
        ))}
      </div>

      {/* ── At a glance ── */}
      <section id="at-a-glance" className={`container ${s.section} ${k.anchor}`} aria-labelledby="glance-title">
        <div className={k.headRow}>
          <SectionHeader index="01" label="At a glance" title="Speaker facts" id="glance-title" />
          <CopyChip text={factsText} label="Copy speaker facts" />
        </div>
        <div className={k.blocks}>
          <div className={k.block}>
            <p className="eyebrow">Designation · pick by context</p>
            <ul>
              {speakerProfile.designations.map((d) => (
                <li key={d.context} className={k.copyRow}>
                  <span>
                    <span className={`mono ${k.context}`}>{d.context}</span>
                    {d.text}
                  </span>
                  <CopyChip text={d.text} />
                </li>
              ))}
            </ul>
          </div>
          <div className={k.block}>
            <p className="eyebrow">Logistics</p>
            <ul>
              <li>{speakerProfile.location}</li>
              <li>{speakerProfile.timezone}</li>
              <li>Languages: {speakerProfile.languages}</li>
              {speakerProfile.availability.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          {affiliationGroups.map((g) => (
            <div key={g.label} className={k.block}>
              <p className="eyebrow">{g.label}</p>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className={k.block}>
            <p className="eyebrow">Taglines · pick one</p>
            <ul>
              {taglines.map((t) => (
                <li key={t.label} className={k.copyRow}>
                  <span>
                    <span className={`mono ${k.context}`}>{t.label}</span>
                    {t.text}
                  </span>
                  <CopyChip text={t.text} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Bios ── */}
      <section id="bios" className={`container ${s.section} ${k.anchor}`} aria-labelledby="bios-title">
        <SectionHeader index="02" label="Bios" title="Copy-ready bios" id="bios-title" sub="Purpose-built for different events, not one paragraph truncated seven ways. Third person, present tense; each stands alone." />
        <div style={{ display: "grid", gap: 20 }}>
          <Bios />
        </div>
      </section>

      {/* ── Territories ── */}
      <section id="topics" className={`container ${s.section} ${k.anchor}`} aria-labelledby="topics-title">
        <SectionHeader
          index="03"
          label="Territories"
          title="What I speak about"
          id="topics-title"
          sub="Seven territories my sessions are drawn from, each backed by research I’ve conducted, systems I’ve built, or communities I’ve taught."
        />
        <div className={k.territories}>
          {territories.map((t) => (
            <article key={t.title} className={k.territory}>
              <h3>{t.title}</h3>
              <p>{t.lede}</p>
              <p className={k.topics}>{t.topics.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Talks on offer ── */}
      <section id="talks" className={`container ${s.section} ${k.anchor}`} aria-labelledby="talks-title">
        <SectionHeader
          index="04"
          label="Talks on offer"
          title="Talks I can bring to your audience"
          id="talks-title"
          sub="Established sessions drawn from research I’ve conducted, systems I’ve built, and lessons I’ve learned. Each adapts to your audience’s technical depth, format, and duration."
        />
        <div className={k.talks}>
          {speakerTalks.map((t, i) => (
            <article key={t.title} className={k.talk} data-reveal style={{ "--i": i % 2 }}>
              <div className={k.headRow}>
                <span className="eyebrow">{t.category}</span>
                <CopyChip text={talkCopyText(t)} label="Copy abstract" />
              </div>
              <h3 className={k.talkTitle}>{t.title}</h3>
              <p className={k.talkHook}>{t.hook}</p>
              <p className={`mono ${k.talkMeta}`}>
                {t.duration} · {t.level} · {t.formats}
              </p>
              <details className={k.details}>
                <summary>Abstract & takeaways</summary>
                <div className={k.detailsBody}>
                  <p>{t.abstract}</p>
                  <dl>
                    <dt>Audience</dt>
                    <dd>{t.audience}</dd>
                    <dt>Level</dt>
                    <dd>{t.level}</dd>
                    <dt>Format</dt>
                    <dd>{t.formats}</dd>
                    <dt>Duration</dt>
                    <dd>{t.duration}</dd>
                  </dl>
                  <p className="eyebrow">Attendees leave with</p>
                  <ul>
                    {t.takeaways.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  {t.related ? (
                    <div>
                      <Chip href={t.related.href}>{t.related.label}</Chip>
                    </div>
                  ) : null}
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      {/* ── Audiences, formats, durations ── */}
      <section id="formats" className={`container ${s.section} ${k.anchor}`} aria-labelledby="formats-title">
        <SectionHeader index="05" label="Formats" title="Audiences, formats and lengths" id="formats-title" />
        <div className={k.formats}>
          <div style={{ display: "grid", gap: 28, alignContent: "start" }}>
            <div style={{ display: "grid", gap: 12 }}>
              <p className="eyebrow">Formats</p>
              <ul className={k.formatPills}>
                {formats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              <p className="eyebrow">Audiences I speak to</p>
              <ul className={k.formatPills}>
                {audiences.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="mono" style={{ color: "var(--secondary)", margin: 0 }}>
                Not every session fits every group; each talk above lists its intended audience.
              </p>
            </div>
          </div>
          <div>
            <div className={k.durations}>
              {durations.map((d) => (
                <Readout key={d.label} label={d.label} value={d.value.replace(" min +", "+").replace(" min", "")} caption="minutes" />
              ))}
            </div>
            <div className={k.areas}>
              <p className="eyebrow">Research areas</p>
              <p>{researchAreas}</p>
              <p className="eyebrow" style={{ marginTop: 12 }}>
                Engineering areas
              </p>
              <p>{engineeringAreas}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Headshots ── */}
      <section id="headshots" className={`container ${s.section} ${k.anchor}`} aria-labelledby="shots-title">
        <SectionHeader index="06" label="Headshots" title="Photos for programmes" id="shots-title" sub={headshotUsageNote} />
        <div className={k.headshots}>
          {headshots.map((h) => (
            <div key={h.href} className={k.shot}>
              <a href={h.href} download className={k.shotImg} aria-label={`Download ${h.label} headshot`}>
                <Image src={h.href} alt={`Emmanuel Idoko, ${h.label.toLowerCase()} headshot`} fill sizes="(max-width: 1000px) 50vw, 310px" quality={78} />
              </a>
              <div className={k.shotMeta}>
                <span>{h.label}</span>
                <span className="mono">{h.note}</span>
                <span>{h.bestFor}</span>
              </div>
              <div className={s.chips}>
                <a href={h.href} download className={ui.chip}>
                  Download
                </a>
                <CopyChip text={`${profile.siteUrl}${h.href}`} label="Copy link" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── History ── */}
      <section id="past" className={`container ${s.section} ${k.anchor}`} aria-labelledby="past-title">
        <SectionHeader index="07" label="History" title="Recent speaking & presentations" id="past-title" link={{ href: "/talks", label: "Talks archive" }} />
        <p className="eyebrow" style={{ marginBottom: 12 }}>
          Talks, panels & sessions
        </p>
        <Timeline items={talks.map((t) => ({ when: t.date, title: t.title, sub: `${t.event} · ${t.role}`, links: t.links.filter((l) => l.href).map((l) => ({ label: l.label, href: l.href })) }))} />
        <p className="eyebrow" style={{ margin: "40px 0 12px" }}>
          Research presentations
        </p>
        <Timeline items={presentations.map((p) => ({ when: p.date, title: p.title, detail: p.note, links: p.links }))} />
      </section>

      {/* ── Organizer copy & links ── */}
      <section id="links" className={`container ${s.section} ${k.anchor}`} aria-labelledby="links-title">
        <div className={k.headRow}>
          <SectionHeader index="08" label="For organizers" title="Organizer quick copy" id="links-title" />
          <CopyChip text={quickCopyText} label="Copy profile" />
        </div>
        <ul className={k.table}>
          {QUICK.map(([label, value]) => (
            <li key={label} className={k.tableRow}>
              <span className="mono" style={{ color: "var(--secondary)" }}>
                {label}
              </span>
              <span>{value}</span>
              <CopyChip text={value} />
            </li>
          ))}
        </ul>
        <div className={k.headRow} style={{ marginTop: 56 }}>
          <h3 className={ui.headingM}>Links for forms</h3>
          <CopyChip text={allLinksText} label="Copy all" />
        </div>
        <ul className={k.table} style={{ marginTop: 20 }}>
          {speakerLinks.map((l) => (
            <li key={l.label} className={k.tableRow}>
              <span className="mono" style={{ color: "var(--secondary)" }}>
                {l.label}
              </span>
              <a href={l.href} {...(l.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
                {l.text || l.href}
              </a>
              <CopyChip text={l.text || l.href} />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Why invite ── */}
      <section id="why" className={`container ${s.section} ${k.anchor}`} aria-labelledby="why-title">
        <SectionHeader index="09" label="Why" title="Why invite Emmanuel?" id="why-title" />
        <div className={k.why}>
          {whyInvite.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── Invite ── */}
      <section id="invite" className={`container ${s.section} ${k.anchor}`} aria-labelledby="invite-title">
        <div className={k.invite}>
          <p className="eyebrow">Invite</p>
          <h2 className={ui.displayL} id="invite-title">
            Have an audience I can contribute to?
          </h2>
          <p>
            I&rsquo;m interested in conversations at the intersection of AI research, computer vision, intelligent systems, software engineering, healthcare technology, and technical education. If you&rsquo;re organizing a conference, research seminar, engineering event, university programme, workshop, panel, podcast, or developer-community session, send me:{" "}
            {invitationChecklist.join(" · ").toLowerCase()}.
          </p>
          <p>I&rsquo;m happy to adapt an existing session or develop something that fits your audience.</p>
          <Button href={inviteMailto} icon={null}>
            Invite Emmanuel
          </Button>
        </div>
      </section>
    </Layout>
  );
}
