import { useState } from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { Button } from "../components/ui";
import { Authors } from "../components/inner";
import { publications } from "../data/publications";
import { LINK_LABELS, LINK_ORDER } from "../lib/pubLinks";
import styles from "../styles/CV.module.css";

const cv = {
  name: "Emmanuel Idoko",
  title: "Software Engineer · AI/ML Engineer · Researcher",
  email: "eemmanuel.idoko@gmail.com",
  location: "Lagos, Nigeria",
  github: "https://github.com/pidoxy",
  linkedin: "https://www.linkedin.com/in/emmanuelidoko/",
  scholar: "https://scholar.google.com/citations?hl=en&user=hHEK0h0AAAAJ",

  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "University of Lagos",
      period: "2021 – 2027",
      detail: "",
    },
    {
      degree: "AI Programming with Python Nanodegree",
      institution: "Udacity",
      period: "Oct 2023 – Jan 2024",
      detail: "AWS AI & ML Scholarship program.",
    },
  ],

  experience: [
    {
      role: "Instructor, AI for Software Engineering",
      org: "The AI Colony",
      period: "Jul 2026 – Present",
      type: "Contract · Remote",
      bullets: ["Teaching the AI for Software Engineering module to Cohort One, built around a real two-language service codebase (FastAPI and Express)."],
    },
    {
      role: "Head, AI and ML",
      org: "Consulting Club of Lagos",
      period: "Mar 2026 – Present",
      type: "Consulting",
      bullets: [
        "Providing AI/ML strategy and consulting for client engagements through one of Lagos' leading consulting organizations.",
      ],
    },
    {
      role: "Founder & AI/ML Engineer",
      org: "AidCare",
      period: "May 2025 – Present",
      type: "Founding",
      bullets: [
        "Architecting a clinical AI decision-support platform for Nigerian frontline care.",
        "Built public triage, language-aware guidance, and offline-friendly safety flows for care settings with limited specialist access.",
        "Shaping clinician workspace foundations with patient and consultation workflows, access control, and auditability.",
      ],
    },
    {
      role: "Software Engineer",
      org: "HabariPay – GTCO",
      period: "Sep 2024 – Present",
      type: "Contract · Hybrid",
      bullets: [
        "Full-stack engineering on enterprise events software, including AI-powered product features, at the fintech subsidiary of Guaranty Trust.",
        "Built vendor management application (Next.js, Node.js, PostgreSQL) used by 260+ attendees.",
        "TF-IDF recommendation engine and Gemini-powered product summaries.",
      ],
    },
    {
      role: "Independent ML Researcher",
      org: "ML Collective",
      period: "Sep 2024 – Present",
      type: "Remote",
      bullets: [
        "Research in medical imaging and computer vision: Few-Shot Sampling.",
        "Weekly paper analysis, hypothesis formulation, and experimental protocol design.",
        "Co-authored SharpXR (MIRASOL Workshop, MICCAI 2025) and VAMAE (ICPR 2026); first author on When Retrieval Hurts (Africa at NeurIPS 2026).",
      ],
    },
    {
      role: "Software Engineer Intern",
      org: "NitHub (UNILAG Innovation Hub)",
      period: "Feb 2023 – Present",
      type: "Internship",
      bullets: [
        "Designed and deployed AI/ML-integrated IoT systems in collaboration with student innovators.",
        "Represented the hub at the Lagos Chamber of Commerce and Industry program showcasing products.",
      ],
    },
    {
      role: "Software Engineer – Data and AI",
      org: "Wema Bank Plc.",
      period: "Aug 2024 – Dec 2024",
      type: "Internship · Hybrid",
      bullets: [
        "Built Wema Wiki, an AI chatbot integrated into Microsoft Teams enabling 2,000+ staff to query bank documentation.",
        "Developed advanced SQL scripts for data requests across departments.",
        "Product recommendation model with OpenAI; Play Store comment analytics pipeline.",
      ],
    },
    {
      role: "Software Engineer – Data Structures & Algorithms",
      org: "Wolfstation",
      period: "May 2024 – Aug 2024",
      type: "Apprenticeship · Remote",
      bullets: [
        "Engineered a contact-lookup system with an array-implemented trie: 20% faster with 98.73% space optimization versus baseline implementations.",
        "Hosted and facilitated problem-solving sessions and competitive-programming hackathons.",
        "Advanced data-structure and algorithm patterns, solving complex challenges in Python.",
      ],
    },
    {
      role: "AWS AI & ML Scholar",
      org: "Amazon Web Services",
      period: "Oct 2023 – Jan 2024",
      type: "Scholarship · Remote",
      bullets: [
        "Awarded the AWS AI & Machine Learning Scholarship and completed all requirements ahead of schedule.",
        "Built an end-to-end image classification system using Python, PyTorch, and CNNs.",
        "Deployed via command-line interface on cloud-based GPU (CUDA) infrastructure.",
      ],
    },
    {
      role: "Cloud Engineer",
      org: "NexaScale",
      period: "Feb 2023 – May 2023",
      type: "Apprenticeship · Remote",
      bullets: [
        "Automated 30+ AWS resources with Terraform; microservice app containerized with Docker.",
        "Orchestrated on Kubernetes (AKS); worked across AWS, Azure, and GCP.",
      ],
    },
    {
      role: "Lead Software Developer",
      org: "Zuri Chat",
      period: "Jul 2021 – Nov 2021",
      type: "Contract",
      bullets: [
        "Developed virtual music and chess room features with WebRTC: real-time A/V sync, multiplayer, third-party API integration.",
        "Led cross-language team integration; optimized response times by 50% via caching.",
        "Managed deployment pipeline with GitHub Actions and Jenkins.",
      ],
    },
    {
      role: "Frontend Developer, Hackathon Finalist",
      org: "HackOR Hackathon",
      period: "Mar 2021",
      type: "Hackathon · Virtual",
      bullets: [
        "Built a food-sharing platform enabling people to share and receive surplus food to reduce waste.",
        "HackOR 2021 Finalist.",
      ],
    },
  ],

  // The three papers come from data/publications.js so statuses never drift;
  // these are the extra CV-only entries.
  extraPublications: [
    {
      title: "Cross-Modality Attention Fusion for Chest X-ray Diagnosis",
      authors: "E. Idoko et al.",
      venue: "Ongoing Research",
      year: "In Progress",
      status: "Working Paper",
      links: {},
    },
    {
      title: "SharpXR Research Poster Presentation",
      authors: "E. Idoko",
      venue: "MIRG-ICAIR 2025, Machine Intelligence Research Group Conference",
      year: "2025",
      status: "Poster",
      links: {},
    },
  ],

  skills: {
    "Machine Learning & AI": [
      "PyTorch, TensorFlow, Hugging Face Transformers",
      "FAISS, Sentence Transformers, LangGraph",
      "OpenAI API, Gemini API",
      "Computer Vision (OpenCV, ViTs)",
      "Whisper ASR, Tesseract OCR",
      "Scikit-learn, Pandas, NumPy, Matplotlib",
    ],
    "Programming Languages": [
      "Python, TypeScript, JavaScript",
      "Java, C#, SQL, Bash",
      "C (systems & assembly)",
    ],
    "Frameworks & Infrastructure": [
      "Next.js, React, Node.js, FastAPI",
      "PostgreSQL, MongoDB, SQLite",
      "Docker, Kubernetes, Terraform",
      "AWS, Azure, GCP, DigitalOcean",
      "GitHub Actions, Jenkins, Azure DevOps",
    ],
  },

  awards: [
    "Amala Hackathon 2025 · Winner, ₦2,000,000 (Team PRL lead)",
    "ACVSS 2026 · Accepted with Full Grant (1 of 31 from 312)",
    "HackZurich 2021 · Hybrid Team Award (Coffee_Break)",
    "Virtue Foundation Platform · 2nd, MIT Hack-Nation × Databricks 2026",
    "Amebo · 3rd of 9, Pan-African Assistive Technology Workshop (AFRETEC) 2026, ₦1,000,000",
    "Meta Global Hackathon 2022 · 14th in EMEA, 47th globally",
    "AccessLearn · 2nd, AFRETEC UNILAG Inclusion Team Innovation Challenge 2026 (mentor & builder)",
    "HackLab Nigeria 2022 · 1st Runner-Up (PheraCAM)",
    "HackOR 2021 · Finalist (Foodify)",
    "Jim Ovia Foundation Scholar",
    "PICFI Scholar",
    "Squad Hackademy Scholar",
    "AWS AI & ML Scholarship Recipient",
    "Deputy Trainings & Competitions Lead · GDSC UNILAG",
    "Project Lead · Unilag Data Community (250+ students)",
  ],

  certifications: [
    "Microsoft Azure AI Fundamentals",
    "Google Cloud Essentials",
    "Udacity · AI Programming with Python",
    "Game of Learners · AI & ML in Azure Clinics",
    "NexaScale · Cloud Engineering",
    "Wolfstation · Data Structures & Algorithms",
  ],
};

const PAPERS = [
  ...publications.map((p) => ({ title: p.title, authors: p.authors, venue: p.venue, year: p.year, status: `${p.status} · ${p.position}`, links: p.links, href: `/research/${p.slug}` })),
  ...cv.extraPublications,
];

const VERSIONS = {
  research: { label: "Research", href: "/resume_research.pdf" },
  swe: { label: "Software engineering", href: "/resume_swe.pdf" },
};

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className="eyebrow">{title}</h2>
      {children}
    </section>
  );
}

function Row({ when, children }) {
  return (
    <div className={styles.row}>
      <div className={`mono ${styles.when}`}>{when}</div>
      <div className={styles.what}>{children}</div>
    </div>
  );
}

export default function CV() {
  const [version, setVersion] = useState("research");
  return (
    <Layout>
      <Meta
        title="CV"
        description="Curriculum Vitae of Emmanuel Idoko: software engineer, AI researcher and founder: experience, publications, skills, awards and certifications, with research and engineering résumé downloads."
        path="/cv"
      />

      <div className={`container ${styles.toolbar}`}>
        <div className={styles.toolbarText}>
          <p className="eyebrow">CV</p>
          <h1 className={styles.toolbarTitle}>Two versions, one record.</h1>
        </div>
        <div className={styles.toolbarActions}>
          <div className={styles.segmented} role="radiogroup" aria-label="Résumé version">
            {Object.entries(VERSIONS).map(([key, v]) => (
              <button key={key} type="button" role="radio" aria-checked={version === key} onClick={() => setVersion(key)} data-track="resume_version" data-track-version={key}>
                {v.label}
              </button>
            ))}
          </div>
          <Button href={VERSIONS[version].href} icon="arrow-down" target="_blank" rel="noopener noreferrer">
            Download PDF
          </Button>
        </div>
      </div>

      <div className="container">
        <article className={styles.sheet}>
          <header className={styles.head}>
            <div>
              <p className={styles.name}>{cv.name}</p>
              <p className={styles.role}>{cv.title}</p>
            </div>
            <div className={`mono ${styles.contact}`}>
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <span>
                <a href={cv.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>{" "}
                ·{" "}
                <a href={cv.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{" "}
                ·{" "}
                <a href={cv.scholar} target="_blank" rel="noopener noreferrer">
                  Scholar
                </a>
              </span>
              <span>pidoxy.com</span>
            </div>
          </header>

          <Section title="Education">
            {cv.education.map((ed) => (
              <Row key={ed.institution} when={ed.period}>
                <p className={styles.title}>{ed.degree}</p>
                <p className={styles.org}>{ed.institution}</p>
                {ed.detail ? <p className={styles.detail}>{ed.detail}</p> : null}
              </Row>
            ))}
          </Section>

          <Section title="Experience">
            {cv.experience.map((exp) => (
              <Row key={exp.role + exp.org} when={exp.period}>
                <p className={styles.title}>{exp.role}</p>
                <p className={styles.org}>
                  {exp.org} <span className={styles.type}>· {exp.type}</span>
                </p>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Row>
            ))}
          </Section>

          <Section title="Publications">
            {PAPERS.map((pub) => (
              <Row key={pub.title} when={pub.year}>
                <p className={styles.title}>{pub.href ? <a href={pub.href}>{pub.title}</a> : pub.title}</p>
                <Authors authors={pub.authors} />
                <p className={styles.detail}>
                  {pub.venue} · {pub.status}
                </p>
                {Object.keys(pub.links).length ? (
                  <p className={`mono ${styles.links}`}>
                    {LINK_ORDER.filter((key) => pub.links[key] && key !== "announcement").map((key) => (
                      <a key={key} href={pub.links[key]} target="_blank" rel="noopener noreferrer">
                        {LINK_LABELS[key]}
                      </a>
                    ))}
                  </p>
                ) : null}
              </Row>
            ))}
          </Section>

          <Section title="Skills">
            {Object.entries(cv.skills).map(([category, items]) => (
              <Row key={category} when={category}>
                <p className={styles.detail} style={{ color: "var(--ink)" }}>
                  {items.join(" · ")}
                </p>
              </Row>
            ))}
          </Section>

          <Section title="Awards & recognition">
            <ul className={styles.list}>
              {cv.awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Section>

          <Section title="Certifications">
            <ul className={styles.list}>
              {cv.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Section>
        </article>
      </div>
    </Layout>
  );
}
