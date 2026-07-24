import Head from "next/head";
import Link from "next/link";
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
      period: "2023",
      detail: "AWS AI & ML Scholarship program.",
    },
  ],

  experience: [
    {
      role: "AI/ML Consultant",
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
        "Architecting a clinical AI decision-support platform for Nigerian healthcare.",
        "Dual-mode RAG system with semantic search over 500+ clinical protocols using FAISS and Sentence Transformers.",
        "Multimodal document ingestion via Whisper ASR and Tesseract OCR; RBAC access control layer.",
      ],
    },
    {
      role: "Software Engineer",
      org: "HabariPay – GTCO",
      period: "Sep 2024 – Present",
      type: "Contract · Hybrid",
      bullets: [
        "Full-stack engineering on payment infrastructure and AI-powered product features for the fintech subsidiary of Guaranty Trust.",
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
        "Research in medical imaging and clinical NLP — Few-Shot Sampling, Computer Vision.",
        "Weekly paper analysis, hypothesis formulation, and experimental protocol design.",
        "Authored papers accepted at MICCAI 2025 and ICPR 2026.",
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
        "Built Wema Wiki — an AI chatbot integrated into Microsoft Teams enabling 2,000+ staff to query bank documentation.",
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
        "Engineered a contact-lookup system with an array-implemented trie — 20% faster with 98.73% space optimization versus baseline implementations.",
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
        "Awarded the AWS AI & Machine Learning Scholarship — completed all requirements ahead of schedule.",
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
        "Developed virtual music and chess room features with WebRTC — real-time A/V sync, multiplayer, third-party API integration.",
        "Led cross-language team integration; optimized response times by 50% via caching.",
        "Managed deployment pipeline with GitHub Actions and Jenkins.",
      ],
    },
    {
      role: "Frontend Developer Hackathon Winner",
      org: "HackOR Hackathon",
      period: "Mar 2021",
      type: "Hackathon · Virtual",
      bullets: [
        "Built a food-sharing platform enabling people to share and receive surplus food to reduce waste.",
        "HackOR 2021 Finalist & Winner.",
      ],
    },
  ],

  publications: [
    {
      title: "SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays",
      authors:
        "I. Abolade, E. Idoko, S. Odelola, P. Omoigui, A. Adebanwo, A. M. Iorumbur, U. Anazodo, A. Crimi, R. Confidence",
      venue: "MIRASOL Workshop, MICCAI 2025",
      year: "2025",
      status: "Published · pp. 83–92",
      links: {
        arxiv: "https://arxiv.org/abs/2508.08518",
        pdf: "https://arxiv.org/pdf/2508.08518",
        doi: "https://doi.org/10.1007/978-3-032-13654-1_9",
      },
    },
    {
      title: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography",
      authors:
        "I. Abolade, P. Mireku, K. Chibundu, P. Ododo, E. Idoko, P. Omoigui, S. Odelola",
      venue: "ICPR 2026 — 28th Int'l Conference on Pattern Recognition",
      year: "2026",
      status: "Accepted",
      links: { arxiv: "https://arxiv.org/abs/2604.06583", pdf: "https://arxiv.org/pdf/2604.06583" },
    },
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
      venue: "MIRG-ICAIR 2025 — Machine Intelligence Research Group Conference",
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
    "Amala Hackathon 2025 — Winner, ₦2,000,000 (Team PRL lead)",
    "ACVSS 2026 — Accepted with Full Grant (1 of 31 from 312)",
    "HackZurich 2021 — Hybrid Team Award (Coffee_Break)",
    "Virtue Foundation Platform — 2nd, Databricks × Hack-Nation 2026",
    "Meta Global Hackathon 2022 — 14th in EMEA, 47th globally",
    "AccessLearn — 2nd, Afretec UNILAG Inclusion Challenge",
    "HackLab Nigeria 2022 — 1st Runner-Up (PheraCAM)",
    "HackOR 2021 — Frontend Hackathon Winner",
    "Jim Ovia Foundation Scholar",
    "PICFI Scholar",
    "Squad Hackademy Scholar",
    "AWS AI & ML Scholarship Recipient",
    "GDSC UNILAG Deputy Lead",
    "Project Lead — Unilag Data Community (250+ students)",
  ],

  certifications: [
    "Microsoft Azure AI Fundamentals",
    "Google Cloud Essentials",
    "Udacity — AI Programming with Python",
    "Game of Learners — AI & ML in Azure Clinics",
    "NexaScale — Cloud Engineering",
    "Wolfstation — Data Structures & Algorithms",
  ],
};

function renderAuthors(authors) {
  return authors.split(", ").map((author, i, arr) => {
    const isMe = author.includes("Idoko");
    return (
      <span key={`${author}-${i}`}>
        {isMe ? <strong>{author}</strong> : author}
        {i < arr.length - 1 ? ", " : ""}
      </span>
    );
  });
}

export default function CV() {
  return (
    <div className={styles.page}>
      <Head>
        <title>CV — Emmanuel Idoko</title>
        <meta name="description" content="Curriculum Vitae of Emmanuel Idoko — Software Engineer, AI/ML Engineer, and Researcher." />
      </Head>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navName}>Emmanuel Idoko</Link>
        <div className={styles.navLinks}>
          <Link href="/#publications">Research</Link>
          <Link href="/#projects">Engineering</Link>
          <span className={styles.navActive}>CV</span>
        </div>
      </nav>

      <main className={styles.main}>

        {/* Header */}
        <header className={styles.header}>
          <h1>{cv.name}</h1>
          <p className={styles.headerRole}>{cv.title}</p>
          <div className={styles.headerMeta}>
            <span>{cv.location}</span>
            <span>·</span>
            <a href={`mailto:${cv.email}`}>{cv.email}</a>
            <span>·</span>
            <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
            <span>·</span>
            <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>·</span>
            <a href={cv.scholar} target="_blank" rel="noreferrer">Scholar</a>
          </div>
          <div className={styles.resumeRow}>
            <a href="/resume_swe.pdf" target="_blank" rel="noreferrer" className={styles.resumeButton}>
              Download SWE Résumé
            </a>
            <a href="/resume_research.pdf" target="_blank" rel="noreferrer" className={styles.resumeButtonAlt}>
              Download Research Résumé
            </a>
          </div>
        </header>

        {/* Education */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {cv.education.map((ed) => (
            <div key={ed.institution} className={styles.row}>
              <div className={styles.rowLeft}>{ed.period}</div>
              <div className={styles.rowRight}>
                <div className={styles.rowTitle}>{ed.degree}</div>
                <div className={styles.rowOrg}>{ed.institution}</div>
                {ed.detail && <div className={styles.rowDetail}>{ed.detail}</div>}
              </div>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {cv.experience.map((exp) => (
            <div key={exp.role + exp.org} className={styles.row}>
              <div className={styles.rowLeft}>{exp.period}</div>
              <div className={styles.rowRight}>
                <div className={styles.rowTitle}>{exp.role}</div>
                <div className={styles.rowOrg}>{exp.org} · <span className={styles.rowType}>{exp.type}</span></div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Publications */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Publications</h2>
          {cv.publications.map((pub) => (
            <div key={pub.title} className={styles.row}>
              <div className={styles.rowLeft}>{pub.year}</div>
              <div className={styles.rowRight}>
                <div className={styles.rowTitle}>{pub.title}</div>
                <div className={styles.rowOrg}>{renderAuthors(pub.authors)}</div>
                <div className={styles.rowVenue}>{pub.venue} · {pub.status}</div>
                {Object.keys(pub.links).length > 0 && (
                  <div className={styles.pills}>
                    {pub.links.pdf && <a href={pub.links.pdf} target="_blank" rel="noreferrer" className={styles.pill}>PDF</a>}
                    {pub.links.arxiv && <a href={pub.links.arxiv} target="_blank" rel="noreferrer" className={styles.pill}>arXiv</a>}
                    {pub.links.doi && <a href={pub.links.doi} target="_blank" rel="noreferrer" className={styles.pill}>DOI</a>}
                    {pub.links.code && <a href={pub.links.code} target="_blank" rel="noreferrer" className={styles.pill}>Code</a>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          {Object.entries(cv.skills).map(([category, items]) => (
            <div key={category} className={styles.row}>
              <div className={styles.rowLeft}>{category}</div>
              <div className={styles.rowRight}>
                <p className={styles.skillList}>{items.join(" · ")}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Awards */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Awards & Recognition</h2>
          <ul className={styles.awardList}>
            {cv.awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </section>

        {/* Certifications */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <ul className={styles.awardList}>
            {cv.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>© 2026 Emmanuel Idoko · <a href="/">Back to portfolio</a></p>
      </footer>
    </div>
  );
}
