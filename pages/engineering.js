import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { Button, Chip, SectionHeader, StatusPill, SmartLink, uiStyles as ui } from "../components/ui";
import { innerStyles as s } from "../components/inner";
import { projects, projectGroups, archive, hackathonCount } from "../data/projects";
import { skills } from "../data/skills";
import e from "../styles/Engineering.module.css";

const anchor = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const FILTERS = [{ key: "all", label: "All" }, ...projectGroups.map((g) => ({ key: g.key, label: g.title }))];
const GROUP_ANCHOR = { agentic: "agentic", products: "products", systems: "production" };
const aidcare = projects.find((p) => p.slug === "aidcare");

// A case study exists for these; their cards link inward instead of out.
const CASE_STUDIES = new Set(["aidcare"]);

function ProjectCard({ p, index }) {
  const primary = CASE_STUDIES.has(p.slug) ? `/engineering/${p.slug}` : p.links[0]?.href;
  return (
    <article id={anchor(p.title)} className={e.card} data-reveal style={{ "--i": index % 3 }}>
      {p.image ? (
        <SmartLink href={primary || "#"} className={e.cardMedia} tabIndex={-1} aria-hidden="true">
          <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 416px" quality={72} />
        </SmartLink>
      ) : null}
      <p className={`mono ${e.cardStatus}`}>{p.status}</p>
      <h3 className={e.cardTitle}>{primary ? <SmartLink href={primary}>{p.title}</SmartLink> : p.title}</h3>
      <p className={e.cardSummary}>{p.summary}</p>
      <p className={`mono ${e.tags}`}>{p.tags.join(" · ")}</p>
      {p.links.length ? (
        <div className={s.chips}>
          {p.links.map((l) => (
            <Chip key={l.href} href={l.href}>
              {l.label}
            </Chip>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Engineering() {
  const [filter, setFilter] = useState("all");
  const groups = projectGroups.filter((g) => filter === "all" || filter === g.key);

  return (
    <Layout>
      <Meta
        title="Engineering"
        description="Engineering by Emmanuel Idoko: production software at HabariPay (GTCO), AidCare (a live clinical decision-support platform), agentic platforms, and award-winning hackathon builds including Amala Atlas, Amebo and the Virtue Foundation Intelligence Platform."
        path="/engineering"
      />

      <header className={`container ${s.intro}`}>
        <div className={s.introText}>
          <p className="eyebrow">Engineering</p>
          <h1 className={ui.displayXL}>From an idea to something people use.</h1>
          <p className={ui.bodyL}>
            Production software at a fintech, a clinical AI product I founded, agentic platforms, and the hackathon builds that taught me to ship under pressure. Most come with a recorded demo.
          </p>
          <div className={e.filter} role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button key={f.key} type="button" className={e.filterBtn} aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Featured: AidCare */}
      {filter === "all" || filter === "agentic" ? (
        <section className="container" style={{ paddingTop: "clamp(32px, 4vw, 56px)" }} aria-label="Featured product">
          <div className={s.feature} data-reveal>
            <SmartLink href="/engineering/aidcare" className={e.featureMedia} tabIndex={-1} aria-hidden="true">
              <Image src={aidcare.image} alt="" fill sizes="(max-width: 900px) 100vw, 680px" quality={80} priority />
            </SmartLink>
            <div className={s.featureText}>
              <div className={s.metaRow}>
                <StatusPill status="Live" />
                <span className="mono">Founder & AI/ML Engineer · May 2025 –</span>
              </div>
              <h2 className={ui.displayL}>AidCare</h2>
              <p className={ui.bodyL} style={{ fontSize: 16 }}>
                Clinical decision support for Nigerian frontline care: public triage, language-aware guidance in English, Hausa, Yoruba, Igbo and Pidgin, offline-friendly safety flows and a Community Health Challenge.
              </p>
              <div className={s.chips}>
                {aidcare.links.map((l) => (
                  <Chip key={l.href} href={l.href}>
                    {l.label}
                  </Chip>
                ))}
              </div>
              <Button href="/engineering/aidcare">Read the case study</Button>
            </div>
          </div>
        </section>
      ) : null}

      {groups.map((g, gi) => {
        const items = projects.filter((p) => p.group === g.key && p.slug !== "aidcare");
        return (
          <section key={g.key} id={GROUP_ANCHOR[g.key]} className={`container ${s.section}`} aria-labelledby={`g-${g.key}`}>
            <SectionHeader index={String(gi + 1).padStart(2, "0")} label={g.title} title={g.title} id={`g-${g.key}`} />
            <div className={e.grid}>
              {items.map((p, i) => (
                <ProjectCard key={p.title} p={p} index={i} />
              ))}
            </div>
          </section>
        );
      })}

      {filter === "all" ? (
        <>
          <section id="archive" className={`container ${s.section}`} aria-labelledby="archive-title">
            <SectionHeader index="04" label="Archive" title={`${hackathonCount} hackathons, and the side projects in between.`} id="archive-title" link={{ href: "https://devpost.com/pidoxy", label: "Devpost profile" }} />
            <ul className={e.strip} aria-label="Hackathon builds">
              {archive.map((a) => (
                <li key={a.title} className={e.stripItem}>
                  {a.href ? (
                    <SmartLink href={a.href} className={e.stripCard}>
                      <span className="mono" style={{ color: "var(--accent)" }}>
                        {a.year}
                      </span>
                      <span className={e.stripTitle}>{a.title}</span>
                      <span className={e.stripNote}>{a.note}</span>
                    </SmartLink>
                  ) : (
                    <div className={e.stripCard}>
                      <span className="mono" style={{ color: "var(--accent)" }}>
                        {a.year}
                      </span>
                      <span className={e.stripTitle}>{a.title}</span>
                      <span className={e.stripNote}>{a.note}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section id="toolbox" className={`container ${s.section}`} aria-labelledby="toolbox-title">
            <SectionHeader index="05" label="Toolbox" title="What I build with" id="toolbox-title" />
            <div className={e.toolbox}>
              {skills.map((k) => (
                <div key={k.title}>
                  <p className="eyebrow">{k.title}</p>
                  <ul>
                    {k.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : null}
    </Layout>
  );
}
