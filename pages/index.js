import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import PortraitSplit from "../components/PortraitSplit";
import { Button, NowPill, SectionHeader, WorkTile, Readout, Stamp, UpdateList, Marquee, SmartLink, uiStyles as ui } from "../components/ui";
import Icon from "../components/Icon";
import { profile, hero, proofStrip, spendingTime } from "../data/profile";
import { selectedWork, recognition, stage } from "../data/home";
import { updates } from "../data/updates";
import { personJsonLd, websiteJsonLd, profilePageJsonLd } from "../data/seo";
import styles from "../styles/Home.module.css";

// Old single-page anchors → new routes (the hash never reaches the server,
// so this has to happen client-side).
const HASH_ROUTES = {
  "#about": "/about",
  "#publications": "/research",
  "#projects": "/engineering",
  "#honors": "/about#honours",
  "#talks": "/talks",
  "#press": "/about#press",
  "#moments": "/moments",
  "#milestones": "/research",
  "#skills": "/engineering",
};

const SOCIALS = [
  { label: "Google Scholar", href: profile.scholar },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.twitter },
  { label: "CV", href: "/cv" },
];

const STAMP_ROTATIONS = [-4, 3, -2, 4];

export default function Home() {
  useEffect(() => {
    const target = HASH_ROUTES[window.location.hash];
    if (target) window.location.replace(target);
  }, []);

  return (
    <Layout>
      <Meta
        description="Emmanuel Idoko studies how intelligent systems work and builds the ones people depend on: research in medical imaging and reliable AI, production software at HabariPay (GTCO), and AidCare, a clinical decision-support platform."
        path="/"
        ogType="profile"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                personJsonLd,
                websiteJsonLd,
                profilePageJsonLd("", "Emmanuel Idoko — Software Engineer, AI Researcher and Founder", hero.intro),
              ],
            }),
          }}
        />
      </Head>

      {/* ── Hero ── */}
      <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
        <div className={styles.heroText}>
          <NowPill href={hero.now.href} text={hero.now.text} />
          <h1 id="hero-title" className={ui.displayXL}>
            {hero.headline}
          </h1>
          <p className={ui.bodyL}>{hero.intro}</p>
          <div className={styles.heroActions}>
            <Button href="/research">Explore research</Button>
            <Button href="/engineering" variant="secondary">
              Explore engineering
            </Button>
            <Button href="/speaking" variant="ghost">
              Invite me to speak
            </Button>
          </div>
          <ul className={styles.socials}>
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <SmartLink href={s.href} className="mono">
                  {s.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.heroFigure}>
          <PortraitSplit src="/images/home/portrait.jpg" alt="Emmanuel Idoko, arms crossed, smiling, in front of a curved wooden wall" caption="Fig. 0 — The author, partially denoised. Drag the seam." />
        </div>
      </section>

      <Marquee items={proofStrip} label="Where the work has appeared" />

      {/* ── Where I'm spending my time ── */}
      <section className={`container ${styles.section} ${styles.spending}`} aria-labelledby="spending-title">
        <p className="eyebrow" id="spending-title">
          Where I&rsquo;m spending my time
        </p>
        <ul className={styles.spendingGrid}>
          {spendingTime.map((s, i) => (
            <li key={s.org} data-reveal style={{ "--i": i }}>
              <SmartLink href={s.href} className={styles.spendingItem}>
                <span className={styles.spendingOrg}>{s.org}</span>
                <span className={styles.spendingRole}>{s.role}</span>
              </SmartLink>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Selected work ── */}
      <section className={`container ${styles.sectionLg}`} aria-labelledby="work-title">
        <SectionHeader index="01" label="Selected work" title="Questions explored. Systems shipped." id="work-title" link={{ href: "/engineering", label: "All work" }} />
        <div className={styles.workGrid}>
          {selectedWork.map((w, i) => (
            <WorkTile key={w.title} {...w} index={i % 3} />
          ))}
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className={`container ${styles.sectionLg}`} aria-labelledby="rec-title">
        <SectionHeader index="02" label="Recognition" title="Selected, not just awarded." id="rec-title" link={{ href: "/about#honours", label: "All honours" }} />
        <div className={styles.readouts}>
          {recognition.map((r) => (
            <Readout key={r.label} {...r} />
          ))}
        </div>
      </section>

      {/* ── On stage ── */}
      <section className={`container ${styles.sectionLg}`} aria-labelledby="stage-title">
        <SectionHeader index="03" label="On stage" title="On stage and in the classroom." id="stage-title" link={{ href: "/speaking", label: "Speaking & invitations" }} />
        <div className={styles.stage}>
          <figure className={styles.stagePhoto} data-reveal>
            <div className={styles.stageImg}>
              <Image src={stage.photo.src} alt={stage.photo.alt} fill sizes="(max-width: 900px) 100vw, 640px" quality={75} />
            </div>
            <figcaption className="mono">{stage.photo.caption}</figcaption>
          </figure>
          <div className={styles.stageSide}>
            <div className={styles.stamps}>
              {stage.stamps.map((s, i) => (
                <Stamp key={s.event} {...s} rotate={STAMP_ROTATIONS[i]} index={i} />
              ))}
            </div>
            <SmartLink href={stage.latest.href} className={styles.latest}>
              {stage.latest.text}
              <Icon kind="arrow-up-right" className={styles.latestIcon} />
            </SmartLink>
            <SmartLink href={stage.video.href} className={styles.video}>
              <span className={styles.videoThumb}>
                <Image src={stage.video.image} alt="" fill sizes="224px" quality={70} />
                <span className={styles.play} aria-hidden="true">
                  <Icon kind="play" />
                </span>
              </span>
              <span className={styles.videoText}>
                <span className="eyebrow">{stage.video.meta}</span>
                <span className={ui.headingS}>{stage.video.title}</span>
                <span className={styles.videoMore}>
                  Watch on YouTube <Icon kind="arrow-up-right" />
                </span>
              </span>
            </SmartLink>
          </div>
        </div>
      </section>

      {/* ── Recently ── */}
      <section className={`container ${styles.sectionLg}`} aria-labelledby="recent-title">
        <SectionHeader index="04" label="Recently" title="Recently." id="recent-title" link={{ href: "/research", label: "All news" }} />
        <UpdateList items={updates} />
      </section>
    </Layout>
  );
}
