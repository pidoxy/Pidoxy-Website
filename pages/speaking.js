import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import CopyButton from "../components/CopyButton";
import Icon, { LinkIcon } from "../components/Icon";
import { profile } from "../data/profile";
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
import styles from "../styles/Page.module.css";

const inviteMailto = `mailto:${profile.email}?subject=${encodeURIComponent("Speaking Invitation — [Event Name]")}`;

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

const quickCopyText = [
  `Name: ${speakerProfile.name}`,
  `Designation: ${speakerProfile.designation}`,
  "Affiliation: AidCare · HabariPay/GTCO · ML Collective · University of Lagos",
  `Location: ${speakerProfile.location}`,
  "Primary topics: Artificial Intelligence · Computer Vision · Multimodal AI · Medical AI · Agentic Systems · Software Engineering",
  "Speaking formats: Talks · Workshops · Panels · Guest Lectures · Research Presentations · Moderation",
  `Email: ${profile.email}`,
].join("\n");

const allLinksText = speakerLinks.map((l) => `${l.label}: ${l.text || l.href}`).join("\n");

const talkCopyText = (t) =>
  `${t.title}\n\n${t.abstract}\n\nAudience: ${t.audience}\nLevel: ${t.level}\nFormat: ${t.formats}\nDuration: ${t.duration}\n\nAttendees will leave with:\n${t.takeaways
    .map((k) => `• ${k}`)
    .join("\n")}`;

// Research presentations for the speaking-history section, derived from the
// shared research activity so nothing is duplicated by hand.
const presentations = researchActivity.filter((a) => /poster|walkthrough/i.test(a.title));

const JUMP_LINKS = [
  { label: "At a glance", href: "#at-a-glance" },
  { label: "Bios", href: "#bios" },
  { label: "What I speak about", href: "#topics" },
  { label: "Talks", href: "#talks" },
  { label: "Headshots", href: "#headshots" },
  { label: "Speaking history", href: "#past" },
  { label: "Links", href: "#links" },
];

export default function Speaking() {
  return (
    <Layout>
      <Meta
        titleOverride="Emmanuel Idoko — Speaker · AI, Computer Vision & Software Engineering"
        description="Speaker kit for Emmanuel Idoko — software engineer, AI researcher, and technical speaker from Nigeria working across computer vision, multimodal AI, reliable AI, and production systems. Bios, headshots, talk abstracts, and everything an organizer needs."
        path="/speaking"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              url: `${profile.siteUrl}/speaking`,
              mainEntity: {
                "@type": "Person",
                name: "Emmanuel Idoko",
                url: profile.siteUrl,
                image: `${profile.siteUrl}/speaker/emmanuel-idoko-headshot-square.jpg`,
                jobTitle: "Software Engineer, AI Researcher & Technical Speaker",
                affiliation: [
                  { "@type": "Organization", name: "AidCare" },
                  { "@type": "Organization", name: "HabariPay (GTCO)" },
                  { "@type": "CollegeOrUniversity", name: "University of Lagos" },
                ],
                knowsAbout: [
                  "Computer Vision",
                  "Multimodal Learning",
                  "Vision-Language Models",
                  "Medical Imaging",
                  "Retrieval-Augmented Generation",
                  "Agentic Systems",
                  "Software Engineering",
                ],
                sameAs: [
                  profile.github,
                  profile.linkedin,
                  profile.twitter,
                  profile.scholar,
                  profile.youtube,
                  profile.devpost,
                  profile.huggingface,
                ],
              },
            }),
          }}
        />
      </Head>

      <div className={styles.container}>
        {/* ── Hero ── */}
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Speaker Kit</p>
          <h1 className={`${styles.pageTitle} ${styles.pageTitleLong}`}>
            Building intelligent systems. Studying how they work.{" "}
            <em>Sharing what I learn.</em>
          </h1>
          <p className={styles.lede}>{heroCopy.intro}</p>
          <p className={styles.ledeSecondary}>{heroCopy.line2}</p>

          <div className={styles.heroActions}>
            <a href={inviteMailto} className={styles.primaryButton}>
              <Icon kind="mail" className={styles.buttonIcon} />
              <span>Invite me to speak</span>
            </a>
            <a href="#talks" className={styles.secondaryButton}>
              Explore talks
            </a>
            <a href="#headshots" className={styles.tertiaryLink}>
              Download speaker assets
              <Icon kind="arrow-down" className={styles.inlineIcon} />
            </a>
          </div>

          <nav className={styles.jumpNav} aria-label="On this page">
            {JUMP_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.jumpLink}>
                {l.label}
              </a>
            ))}
          </nav>
        </header>

        {/* ── Credibility strip ── */}
        <div className={styles.credStrip}>
          {credibility.map((c) => (
            <div key={c.lead} className={styles.credItem}>
              <p className={styles.proofLead}>{c.lead}</p>
              <p className={styles.proofRest}>{c.rest}</p>
            </div>
          ))}
        </div>

        {/* ── At a glance ── */}
        <section className={styles.section} id="at-a-glance">
          <div className={styles.kitHeadRow}>
            <h2 className={styles.sectionTitle}>At a glance</h2>
            <CopyButton text={factsText} label="Copy speaker facts" />
          </div>
          <div className={styles.kitGrid}>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Designation — pick by context</h3>
              <ul>
                {speakerProfile.designations.map((d) => (
                  <li key={d.context} className={styles.kitCopyRow}>
                    <span>
                      <span className={styles.kitContext}>{d.context}</span>
                      {d.text}
                    </span>
                    <CopyButton text={d.text} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Logistics</h3>
              <ul>
                <li>{speakerProfile.location}</li>
                <li>{speakerProfile.timezone}</li>
                <li>Languages: {speakerProfile.languages}</li>
                {speakerProfile.availability.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            {affiliationGroups.map((group) => (
              <div key={group.label} className={styles.factsBlock}>
                <h3 className={styles.kitLabel}>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Taglines — pick one</h3>
              <ul>
                {taglines.map((t) => (
                  <li key={t.label} className={styles.kitCopyRow}>
                    <span>
                      <span className={styles.kitContext}>{t.label}</span>
                      {t.text}
                    </span>
                    <CopyButton text={t.text} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Bios ── */}
        <section className={styles.section} id="bios">
          <h2 className={styles.sectionTitle}>Bios</h2>
          <p className={styles.sectionIntro}>
            Purpose-built for different events — not one paragraph truncated seven ways. Third
            person, present tense; each stands alone.
          </p>
          <div className={styles.bioList}>
            {bios.map((bio) => (
              <article key={bio.label} className={styles.bioCard}>
                <div className={styles.bioHead}>
                  <h3 className={styles.bioTitle}>
                    {bio.label} <span className={styles.bioWords}>{bio.words}</span>
                  </h3>
                  <CopyButton text={bio.text} />
                </div>
                {bio.context && <p className={styles.bioContext}>Best for: {bio.context}</p>}
                {bio.text.split("\n\n").map((para, i) => (
                  <p key={i} className={styles.bioText}>
                    {para}
                  </p>
                ))}
              </article>
            ))}

            {mcIntros.map((intro) => (
              <article key={intro.label} className={`${styles.bioCard} ${styles.bioCardTint}`}>
                <div className={styles.bioHead}>
                  <h3 className={styles.bioTitle}>
                    {intro.label} <span className={styles.bioWords}>{intro.words}</span>
                  </h3>
                  <CopyButton text={intro.text} />
                </div>
                {intro.text.split("\n\n").map((para, i) => (
                  <p key={i} className={styles.bioText}>
                    {para}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        {/* ── Speaker territories ── */}
        <section className={styles.section} id="topics">
          <h2 className={styles.sectionTitle}>What I speak about</h2>
          <p className={styles.sectionIntro}>
            Seven territories my sessions are drawn from — each backed by research I&rsquo;ve
            conducted, systems I&rsquo;ve built, or communities I&rsquo;ve taught.
          </p>
          <div className={styles.territoryGrid}>
            {territories.map((t) => (
              <article key={t.title} className={styles.territoryCard}>
                <h3 className={styles.territoryTitle}>{t.title}</h3>
                <p className={styles.territoryLede}>{t.lede}</p>
                <p className={styles.territoryTopics}>{t.topics.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Signature talks ── */}
        <section className={styles.section} id="talks">
          <h2 className={styles.sectionTitle}>Talks I can bring to your audience</h2>
          <p className={styles.sectionIntro}>
            Established sessions drawn from research I&rsquo;ve conducted, systems I&rsquo;ve
            built, and lessons I&rsquo;ve learned. Each adapts to your audience&rsquo;s technical
            depth, format, and duration.
          </p>
          <div className={styles.topicList}>
            {speakerTalks.map((t) => (
              <article key={t.title} className={styles.topicCard}>
                <div className={styles.topicHead}>
                  <span className={styles.topicCategory}>{t.category}</span>
                  <div className={styles.topicHeadBody}>
                    <h3 className={styles.topicTitle}>{t.title}</h3>
                    <p className={styles.topicHook}>{t.hook}</p>
                  </div>
                  <CopyButton text={talkCopyText(t)} label="Copy abstract" />
                </div>
                <p className={styles.topicAbstract}>{t.abstract}</p>
                <div className={styles.topicMetaRow}>
                  <span className={styles.topicMetaItem}>
                    <strong>Audience</strong> {t.audience}
                  </span>
                  <span className={styles.topicMetaItem}>
                    <strong>Level</strong> {t.level}
                  </span>
                  <span className={styles.topicMetaItem}>
                    <strong>Format</strong> {t.formats}
                  </span>
                  <span className={styles.topicMetaItem}>
                    <strong>Duration</strong> {t.duration}
                  </span>
                </div>
                <p className={styles.topicTakeLabel}>Attendees leave with</p>
                <ul className={styles.topicTakeaways}>
                  {t.takeaways.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
                {t.related && (
                  <div className={styles.linkRow}>
                    <Link href={t.related.href}>
                      <Icon kind="arrow-right" className={styles.inlineIcon} />
                      <span>{t.related.label}</span>
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── Audiences & formats ── */}
        <section className={styles.section} id="formats">
          <div className={styles.kitGrid}>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Audiences I speak to</h3>
              <p className={styles.territoryTopics}>{audiences.join(" · ")}</p>
              <p className={styles.kitFootnote}>
                Not every session fits every group — each talk above lists its intended audience.
              </p>
            </div>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Formats</h3>
              <ul>
                {formats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Durations</h3>
              <ul>
                {durations.map((d) => (
                  <li key={d.label}>
                    {d.label}: {d.value}
                  </li>
                ))}
              </ul>
              <h3 className={`${styles.kitLabel} ${styles.kitLabelSpaced}`}>Research areas</h3>
              <p className={styles.territoryTopics}>{researchAreas}</p>
              <h3 className={`${styles.kitLabel} ${styles.kitLabelSpaced}`}>Engineering areas</h3>
              <p className={styles.territoryTopics}>{engineeringAreas}</p>
            </div>
          </div>
        </section>

        {/* ── Headshots ── */}
        <section className={styles.section} id="headshots">
          <h2 className={styles.sectionTitle}>Headshots</h2>
          <p className={styles.sectionIntro}>{headshotUsageNote}</p>
          <div className={styles.headshotGrid}>
            {headshots.map((h) => (
              <a
                key={h.href}
                href={h.href}
                download
                className={styles.headshotCard}
                aria-label={`Download ${h.label} headshot`}
              >
                <div className={styles.headshotFrame} style={{ aspectRatio: "1 / 1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={h.href}
                    alt={`Emmanuel Idoko — ${h.label.toLowerCase()} headshot`}
                    loading="lazy"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div className={styles.headshotMeta}>
                  <span className={styles.headshotLabel}>{h.label}</span>
                  <span className={styles.headshotNote}>{h.note}</span>
                  <span className={styles.headshotNote}>{h.bestFor}</span>
                  <span className={styles.headshotDownload}>
                    Download <Icon kind="arrow-down" className={styles.inlineIcon} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Recent speaking & presentations ── */}
        <section className={styles.section} id="past">
          <h2 className={styles.sectionTitle}>Recent speaking &amp; presentations</h2>

          <h3 className={styles.kitLabel}>Talks, panels &amp; sessions</h3>
          <ul className={styles.dateList}>
            {talks.map((talk) => (
              <li key={talk.title} className={styles.dateRow}>
                <span className={styles.dateCell}>{talk.date}</span>
                <div className={styles.rowBody}>
                  <h4 className={styles.rowTitle}>{talk.title}</h4>
                  <p className={styles.rowMeta}>
                    {talk.event} · <span className={styles.rowResult}>{talk.role}</span>
                  </p>
                  {talk.links.filter((l) => l.href).length > 0 && (
                    <div className={styles.linkRow}>
                      {talk.links
                        .filter((l) => l.href)
                        .map((link) => (
                          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                            <LinkIcon
                              external={link.external}
                              type={link.type}
                              className={styles.inlineIcon}
                            />
                            <span>{link.label}</span>
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <h3 className={`${styles.kitLabel} ${styles.kitLabelSpaced}`}>
            Research presentations
          </h3>
          <ul className={styles.dateList}>
            {presentations.map((item) => (
              <li key={item.title} className={styles.dateRow}>
                <span className={styles.dateCell}>{item.date}</span>
                <div className={styles.rowBody}>
                  <h4 className={styles.rowTitle}>{item.title}</h4>
                  <p className={styles.rowNote}>{item.note}</p>
                  {item.links?.length > 0 && (
                    <div className={styles.linkRow}>
                      {item.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                          <Icon kind="external" className={styles.inlineIcon} />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className={styles.kitFootnote}>
            Full talk descriptions on the <Link href="/talks">Talks page</Link>; publications and
            posters under <Link href="/research">Research</Link>.
          </p>
        </section>

        {/* ── Organizer quick copy & links ── */}
        <section className={styles.section} id="links">
          <div className={styles.kitHeadRow}>
            <h2 className={styles.sectionTitle}>Organizer quick copy</h2>
            <CopyButton text={quickCopyText} label="Copy profile" />
          </div>
          <ul className={styles.linkTable}>
            {[
              ["Name", speakerProfile.name],
              ["Designation", speakerProfile.designation],
              ["Affiliation", "AidCare · HabariPay/GTCO · ML Collective · University of Lagos"],
              ["Location", speakerProfile.location],
              [
                "Primary topics",
                "Artificial Intelligence · Computer Vision · Multimodal AI · Medical AI · Agentic Systems · Software Engineering",
              ],
              [
                "Formats",
                "Talks · Workshops · Panels · Guest Lectures · Research Presentations · Moderation",
              ],
            ].map(([label, value]) => (
              <li key={label} className={styles.linkTableRow}>
                <span className={styles.linkTableLabel}>{label}</span>
                <span className={styles.linkTableValue}>{value}</span>
                <CopyButton text={value} />
              </li>
            ))}
          </ul>

          <div className={`${styles.kitHeadRow} ${styles.kitHeadRowSpaced}`}>
            <h2 className={styles.sectionTitle}>Links for forms</h2>
            <CopyButton text={allLinksText} label="Copy all" />
          </div>
          <ul className={styles.linkTable}>
            {speakerLinks.map((l) => (
              <li key={l.label} className={styles.linkTableRow}>
                <span className={styles.linkTableLabel}>{l.label}</span>
                <a
                  href={l.href}
                  target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className={styles.linkTableValue}
                >
                  {l.text || l.href}
                </a>
                <CopyButton text={l.text || l.href} />
              </li>
            ))}
          </ul>
        </section>

        {/* ── Why invite ── */}
        <section className={styles.section} id="why">
          <h2 className={styles.sectionTitle}>Why invite Emmanuel?</h2>
          <div className={`${styles.prose} ${styles.proseNarrow}`}>
            {whyInvite.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </section>

        {/* ── Closing ── */}
        <section className={`${styles.section} ${styles.kitClose}`} id="contact">
          <h2 className={styles.kitCloseTitle}>Have an audience I can contribute to?</h2>
          <p className={styles.kitCloseText}>
            I&rsquo;m interested in conversations at the intersection of AI research, computer
            vision, intelligent systems, software engineering, healthcare technology, and technical
            education. If you&rsquo;re organizing a conference, research seminar, engineering event,
            university programme, workshop, panel, podcast, or developer-community session, send
            me: {invitationChecklist.join(" · ").toLowerCase()}.
          </p>
          <p className={styles.kitCloseText}>
            I&rsquo;m happy to adapt an existing session or develop something that fits your
            audience.
          </p>
          <a href={inviteMailto} className={styles.primaryButton}>
            <Icon kind="mail" className={styles.buttonIcon} />
            <span>Invite Emmanuel</span>
          </a>
        </section>
      </div>
    </Layout>
  );
}
