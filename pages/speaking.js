import Link from "next/link";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PageHeader from "../components/PageHeader";
import CopyButton from "../components/CopyButton";
import Icon, { LinkIcon } from "../components/Icon";
import { profile } from "../data/profile";
import { talks } from "../data/talks";
import {
  speakerFacts,
  bios,
  mcIntro,
  talkTopics,
  speakerLinks,
  headshots,
} from "../data/speaking";
import styles from "../styles/Page.module.css";

const allLinksText = speakerLinks.map((l) => `${l.label}: ${l.text || l.href}`).join("\n");

const factsText = [
  `Name: ${speakerFacts.name}`,
  `Tagline: ${speakerFacts.taglines[0]}`,
  `Affiliations: ${speakerFacts.affiliations.join("; ")}`,
  `Based: ${speakerFacts.based}`,
  `Languages: ${speakerFacts.languages}`,
  `Email: ${profile.email}`,
].join("\n");

export default function Speaking() {
  return (
    <Layout>
      <Meta
        title="Speaker Kit"
        description="Everything you need to invite Emmanuel Idoko to speak — bios at four lengths, headshots, talk abstracts on clinical AI, agentic systems and medical imaging, past talks, formats, and links."
        path="/speaking"
      />

      <div className={styles.container}>
        <PageHeader
          eyebrow="Speaker kit"
          title="Invite me to"
          accent="speak"
          lede="Bios, headshots, talk abstracts, and logistics — written to be pasted straight into a CFP form, event page, or run-of-show. Everything here is copy-ready and kept in sync with the rest of the site."
        >
          <div className={styles.heroActions}>
            <a href={`mailto:${profile.email}?subject=Speaking%20invitation`} className={styles.primaryButton}>
              <Icon kind="mail" className={styles.buttonIcon} />
              <span>Invite me</span>
            </a>
            <Link href="/talks" className={styles.secondaryButton}>
              Past talks &amp; recordings
            </Link>
          </div>
        </PageHeader>

        {/* ── At a glance ── */}
        <section className={styles.section} id="at-a-glance">
          <div className={styles.kitHeadRow}>
            <h2 className={styles.sectionTitle}>At a glance</h2>
            <CopyButton text={factsText} label="Copy facts" />
          </div>
          <div className={styles.kitGrid}>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Name</h3>
              <ul>
                <li>{speakerFacts.name}</li>
                <li className={styles.kitMuted}>{speakerFacts.alsoKnownAs}</li>
              </ul>
            </div>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Taglines — pick one</h3>
              <ul>
                {speakerFacts.taglines.map((t) => (
                  <li key={t} className={styles.kitCopyRow}>
                    <span>{t}</span>
                    <CopyButton text={t} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Affiliations</h3>
              <ul>
                {speakerFacts.affiliations.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Logistics</h3>
              <ul>
                <li>{speakerFacts.based}</li>
                <li>Languages: {speakerFacts.languages}</li>
                {speakerFacts.availability.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Formats</h3>
              <ul>
                {speakerFacts.formats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className={styles.factsBlock}>
              <h3 className={styles.kitLabel}>Tracks &amp; audiences</h3>
              <ul>
                <li>{speakerFacts.tracks.join(" · ")}</li>
                {speakerFacts.audiences.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Bios ── */}
        <section className={styles.section} id="bios">
          <h2 className={styles.sectionTitle}>Bios</h2>
          <p className={styles.sectionIntro}>
            Third person, present tense. Choose the length your form asks for — each stands alone.
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
                {bio.text.split("\n\n").map((para, i) => (
                  <p key={i} className={styles.bioText}>
                    {para}
                  </p>
                ))}
              </article>
            ))}

            <article className={`${styles.bioCard} ${styles.bioCardTint}`}>
              <div className={styles.bioHead}>
                <h3 className={styles.bioTitle}>
                  Spoken introduction <span className={styles.bioWords}>for a host or MC · ≈20 s</span>
                </h3>
                <CopyButton text={mcIntro} />
              </div>
              <p className={styles.bioText}>{mcIntro}</p>
            </article>
          </div>
        </section>

        {/* ── Headshots ── */}
        <section className={styles.section} id="headshots">
          <h2 className={styles.sectionTitle}>Headshots</h2>
          <p className={styles.sectionIntro}>
            Right-click or tap to save. Please don't stretch, recolor, or add filters; cropping is fine.
          </p>
          <div className={styles.headshotGrid}>
            {headshots.map((h) => (
              <a
                key={h.href}
                href={h.href}
                download
                className={styles.headshotCard}
                aria-label={`Download ${h.label}`}
              >
                <div className={styles.headshotFrame} style={{ aspectRatio: h.aspect }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={h.href}
                    alt={`Emmanuel Idoko — ${h.label.toLowerCase()}`}
                    loading="lazy"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div className={styles.headshotMeta}>
                  <span className={styles.headshotLabel}>{h.label}</span>
                  <span className={styles.headshotNote}>{h.note}</span>
                  <span className={styles.headshotDownload}>
                    Download <Icon kind="arrow-down" className={styles.inlineIcon} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Talk topics ── */}
        <section className={styles.section} id="topics">
          <h2 className={styles.sectionTitle}>Talks I can give</h2>
          <p className={styles.sectionIntro}>
            Abstracts written for CFP submission. Every talk is drawn from work I've built, published, or
            competed with — happy to adapt length, depth, or angle to your audience.
          </p>
          <div className={styles.topicList}>
            {talkTopics.map((t, i) => (
              <article key={t.title} className={styles.topicCard}>
                <div className={styles.topicHead}>
                  <span className={styles.topicIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <div className={styles.topicHeadBody}>
                    <h3 className={styles.topicTitle}>{t.title}</h3>
                    <p className={styles.topicMeta}>
                      {t.formats} · {t.level} · {t.tracks.join(", ")}
                    </p>
                  </div>
                  <CopyButton
                    text={`${t.title}\n\n${t.abstract}\n\nAttendees will leave with:\n${t.takeaways
                      .map((k) => `• ${k}`)
                      .join("\n")}`}
                    label="Copy abstract"
                  />
                </div>
                <p className={styles.topicAbstract}>{t.abstract}</p>
                <p className={styles.topicTakeLabel}>Attendees leave with</p>
                <ul className={styles.topicTakeaways}>
                  {t.takeaways.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── Past speaking ── */}
        <section className={styles.section} id="past">
          <h2 className={styles.sectionTitle}>Recent speaking</h2>
          <ul className={styles.dateList}>
            {talks.map((talk) => (
              <li key={talk.title} className={styles.dateRow}>
                <span className={styles.dateCell}>{talk.date}</span>
                <div className={styles.rowBody}>
                  <h3 className={styles.rowTitle}>{talk.title}</h3>
                  <p className={styles.rowMeta}>
                    {talk.event} · <span className={styles.rowResult}>{talk.role}</span>
                  </p>
                  {talk.links.filter((l) => l.href).length > 0 && (
                    <div className={styles.linkRow}>
                      {talk.links
                        .filter((l) => l.href)
                        .map((link) => (
                          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                            <LinkIcon external={link.external} type={link.type} className={styles.inlineIcon} />
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
            Full list with descriptions on the <Link href="/talks">Talks page</Link>. Poster presentations
            (MIRG-ICAIR 2025, ACVSS 2026) are listed under <Link href="/research">Research</Link>.
          </p>
        </section>

        {/* ── Links ── */}
        <section className={styles.section} id="links">
          <div className={styles.kitHeadRow}>
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

        {/* ── Closing ── */}
        <section className={`${styles.section} ${styles.kitClose}`} id="contact">
          <h2 className={styles.kitCloseTitle}>Have an audience in mind?</h2>
          <p className={styles.kitCloseText}>
            Send the event, date, format, and audience — I reply to every serious invitation, and I'm happy
            to shape a talk around what your attendees actually need.
          </p>
          <a href={`mailto:${profile.email}?subject=Speaking%20invitation`} className={styles.primaryButton}>
            <Icon kind="mail" className={styles.buttonIcon} />
            <span>{profile.email}</span>
          </a>
        </section>
      </div>
    </Layout>
  );
}
