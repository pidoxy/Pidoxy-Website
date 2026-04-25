import Head from "next/head";
import styles from "../styles/Home.module.css";

const profile = {
  name: "Emmanuel Idoko",
  initials: "EI",
  title: "Software Engineer · AI/ML Engineer · Researcher",
  bio: "Building clinical AI systems, agentic pipelines, and full-stack products across medical imaging, retrieval, cloud infrastructure, and applied research.",
  background: [
    "I'm a software engineer, AI/ML engineer, and researcher based in Lagos, Nigeria. I build production-grade AI systems — from clinical decision support platforms to agentic multi-agent pipelines — and publish research in medical imaging at conferences like MICCAI and ICPR.",
    "My work spans the full stack: architecting RAG systems and multimodal ingestion at AidCare, shipping full-stack software at HabariPay (GTCO), exploring self-supervised learning for retinal and chest X-ray imaging, and training 250+ students as Project Lead at the Unilag Data Community.",
  ],
  location: "Lagos, Nigeria",
  email: "eemmanuel.idoko@gmail.com",
  institution: "University of Lagos · B.Sc. Computer Science",
  github: "https://github.com/pidoxy",
  linkedin: "https://www.linkedin.com/in/emmanuelidoko/",
  devpost: "https://devpost.com/pidoxy",
  youtube: "https://www.youtube.com/@pidoxy",
  scholar:
    "https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=Emmanuel+Idoko",
};

const experienceSnapshot = [
  {
    role: "AI/ML Consultant",
    org: "Consulting Club of Lagos",
    period: "Mar 2026 – Present",
    detail:
      "Providing AI/ML consulting and strategy for clients through one of Lagos' leading consulting organizations.",
  },
  {
    role: "Founder & AI/ML Engineer",
    org: "AidCare",
    period: "May 2025 – Present",
    detail:
      "Clinical AI platform with dual-mode RAG, semantic search over 500+ protocols, and multimodal ingestion for Nigerian healthcare.",
  },
  {
    role: "Software Engineer",
    org: "HabariPay – GTCO",
    period: "Sep 2024 – Present",
    detail:
      "Full-stack engineering on the fintech subsidiary of Guaranty Trust; building payment infrastructure and AI-powered product features.",
  },
  {
    role: "Independent ML Researcher",
    org: "ML Collective",
    period: "Sep 2024 – Present",
    detail:
      "Medical imaging and clinical NLP research — weekly paper analysis, hypothesis formulation, and experimental protocol design.",
  },
  {
    role: "Data & AI Intern",
    org: "Wema Bank",
    period: "Aug 2024 – Dec 2024",
    detail:
      "AI-powered knowledge chatbot (Node.js, Azure) enabling 2,000+ staff to query documentation; Play Store review analytics pipeline.",
  },
  {
    role: "AWS AI & ML Scholar",
    org: "Amazon Web Services",
    period: "Oct 2023 – Jan 2024",
    detail:
      "Competitive AWS scholarship; built an end-to-end image classification system with PyTorch and CNNs, deployed on cloud GPU (CUDA) infrastructure.",
  },
];

const projects = [
  {
    title: "Virtue Foundation Intelligence Platform",
    status: "Hackathon 2nd Place",
    summary:
      "End-to-end agentic AI platform analyzing 797 Ghana healthcare facilities across 16 regions. A LangGraph supervisor routes queries to 6 specialized sub-agents backed by a FAISS vector store, identifying 10 medical deserts and 43 data anomalies.",
    tags: ["Python", "LangGraph", "GPT-4o-mini", "FAISS", "FastAPI", "Next.js"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=4w29E3NGFV0",
        external: true,
        type: "video",
      },
      {
        label: "Architecture",
        href: "https://www.youtube.com/watch?v=jgot8fLplxw",
        external: true,
        type: "video",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/pidoxy",
        external: true,
      },
    ],
  },
  {
    title: "AidCare",
    status: "Live Clinical AI Product",
    summary:
      "Clinical decision support platform for Nigerian healthcare. Dual-mode RAG system using Sentence Transformers + FAISS over 500+ clinical protocols, with Whisper ASR and Tesseract OCR for multimodal document ingestion.",
    tags: ["FastAPI", "FAISS", "Gemini", "Whisper", "DigitalOcean", "RBAC"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=k9qfi4OKaEg&t=2s",
        external: true,
        type: "video",
      },
    ],
  },
  {
    title: "Kinetix",
    status: "Gemini API Hackathon",
    summary:
      "Real-time AI personal trainer using Gemini's vision API to analyze webcam exercise footage frame-by-frame. Dual-persona architecture: an internal Analyst performs biomechanical reasoning while an external Coach delivers live verbal feedback via TTS.",
    tags: ["Python", "FastAPI", "Gemini API", "WebSockets", "Next.js", "TypeScript"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=V_jsPon1UN0",
        external: true,
        type: "video",
      },
      {
        label: "Live Demo",
        href: "https://studio--studio-1941891810-4157e.us-central1.hosted.app",
        external: true,
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/kinetix-u9alzx",
        external: true,
      },
    ],
  },
  {
    title: "PheraCAM",
    status: "Hackathon 2nd Place",
    summary:
      "Real-time face recognition system using OpenCV and Azure cloud services, achieving >95% accuracy with <150ms response time. Won 2nd place among 50+ teams at Hacklab's Hackathon for technical innovation and robustness.",
    tags: ["Python", "OpenCV", "Azure", "OpenAI API", "React"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=bUmzASxRi6E",
        external: true,
        type: "video",
      },
      {
        label: "Code",
        href: "https://github.com/pidoxy/pheraCAM",
        external: false,
      },
      {
        label: "Live Demo",
        href: "https://phera-cam.vercel.app/",
        external: true,
      },
    ],
  },
  {
    title: "Amala Atlas",
    status: "Open Source Project",
    summary:
      "Crowdsourced global map for discovering authentic Amala spots, with an autonomous agent that scans food blogs daily. Features user reviews with Google auth, Google Maps integration, and an admin moderation panel.",
    tags: ["Next.js", "Firebase", "Google Maps", "Cheerio", "Vercel"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=eUpADlc2aVk&t=5s",
        external: true,
        type: "video",
      },
      {
        label: "Code",
        href: "https://github.com/gdg-lagos/amala-atlas",
        external: false,
      },
      {
        label: "Live Demo",
        href: "https://amala-atlas-oon3.vercel.app",
        external: true,
      },
    ],
  },
  {
    title: "Modern Search Engine",
    status: "Engineering Project",
    summary:
      "Distributed information retrieval system with a custom inverted index, TF-IDF weighting, and cosine similarity scoring. Delivers sub-second query responses across 10,000+ PDF, DOCX, and TXT files with comprehensive xUnit test coverage.",
    tags: ["C#", ".NET", "Azure", "TF-IDF", "Cosine Similarity"],
    links: [],
  },
  {
    title: "Campus Thrift Books",
    status: "GDSC Solution Challenge 2024",
    summary:
      "A platform for university students to buy, sell, and exchange second-hand textbooks on campus — reducing the cost burden of course materials and promoting a circular economy within academic communities.",
    tags: ["React", "Firebase", "Google Cloud", "GDSC"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=siIa8RnFmis",
        external: true,
        type: "video",
      },
    ],
  },
  {
    title: "Medity",
    status: "Web App Challenge",
    summary:
      "Global health data aggregator that centralizes pandemic and disease information worldwide — surfacing symptoms, treatments, prevention methods, and real-time news updates to users in regions with limited health information access.",
    tags: ["React", "KendoReact", "Health Tech", "Netlify"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=6wUNXkcQV7M&t=15s",
        external: true,
        type: "video",
      },
      {
        label: "Code",
        href: "https://github.com/pidoxy/medity",
        external: false,
      },
      {
        label: "Live Demo",
        href: "https://medity-app.netlify.app/",
        external: true,
      },
    ],
  },
  {
    title: "InvoiceMatch.AI",
    status: "Curacel Hackathon 2025",
    summary:
      "AI-powered reconciliation tool for hospital invoices and insurer payouts. Automatically parses uploaded documents, matches line items, pinpoints every underpayment or denial, and generates a natural-language executive summary for finance teams.",
    tags: ["JavaScript", "OpenAI", "Healthcare", "Vercel"],
    links: [
      {
        label: "Code",
        href: "https://github.com/pidoxy/invoicematch.ai",
        external: false,
      },
      {
        label: "Live Demo",
        href: "https://invoicematch-ai.vercel.app",
        external: true,
      },
    ],
  },
];

const talks = [
  {
    title: "Introduction to AI in Business",
    event: "AI/ML Track Session",
    role: "Track Coach · AI/ML",
    date: "April 23, 2026",
    description:
      "An introductory session for the AI/ML track covering practical applications of AI in business — how organizations can leverage AI tools, frameworks, and workflows to drive value and improve decision-making.",
    tags: ["AI/ML", "Business", "Workshop"],
    links: [
      {
        label: "Slides",
        href: "https://www.figma.com/deck/ZJqu4rKQx03WYW9n0BS6WT",
        external: true,
        type: "slides",
      },
    ],
  },
  {
    title: "Attention Is All You Need — Paper Walkthrough",
    event: "Student Researchers Session",
    role: "Speaker",
    date: "2026",
    description:
      "A beginner-friendly walkthrough of the landmark Transformer paper for early student researchers — breaking down self-attention, multi-head attention, and positional encoding with intuitive explanations.",
    tags: ["Deep Learning", "NLP", "Transformers", "Research"],
    links: [
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1awchVX5RlsujKO5JHHEd4iUZnAId0WO1yCOBp9OlBU8/edit?usp=sharing",
        external: true,
        type: "slides",
      },
      {
        label: "Photos",
        href: "https://x.com/pidoxy_/status/2017238883054878853",
        external: true,
        type: "photos",
      },
    ],
  },
];

const publications = [
  {
    title: "SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays",
    authors: "Emmanuel Idoko et al.",
    venue: "MIRASOL Workshop, MICCAI 2025",
    year: "2025",
    status: "Accepted",
    links: { arxiv: "https://arxiv.org/abs/2508.08518", pdf: "https://arxiv.org/pdf/2508.08518" },
  },
  {
    title: "VAMAE: Vessel-Aware Masked Autoencoders for OCT-Angiography",
    authors: "Emmanuel Idoko",
    venue: "ICPR 2026 — 28th Int'l Conference on Pattern Recognition",
    year: "2026",
    status: "Accepted",
    links: { arxiv: "https://arxiv.org/abs/2604.06583", pdf: "https://arxiv.org/pdf/2604.06583" },
  },
  {
    title: "Cross-Modality Attention Fusion for Chest X-ray Diagnosis",
    authors: "Emmanuel Idoko",
    venue: "Ongoing Research",
    year: "In Progress",
    status: "Working Paper",
    links: {},
  },
  {
    title: "SharpXR Research Poster Presentation",
    authors: "Emmanuel Idoko",
    venue: "MIRG-ICAIR 2025 — Machine Intelligence Research Group Conference",
    year: "2025",
    status: "Poster",
    links: {},
  },
];

const skills = [
  {
    title: "Machine Learning & AI",
    icon: "brain",
    items: [
      "PyTorch, Hugging Face Transformers",
      "FAISS, Sentence Transformers, LangGraph",
      "OpenAI API, Gemini API",
      "Whisper ASR, Tesseract OCR",
      "Computer Vision (OpenCV, ViTs)",
      "Scikit-learn, Pandas, NumPy",
    ],
  },
  {
    title: "Programming Languages",
    icon: "code",
    items: [
      "Python, TypeScript, JavaScript",
      "Java, C#, SQL, Bash",
      "C (systems & assembly)",
    ],
  },
  {
    title: "Frameworks & Product",
    icon: "graph",
    items: [
      "Next.js, React, Node.js, Express",
      "FastAPI, Flask",
      "PostgreSQL, MongoDB, SQLite",
      "WebSockets, REST APIs",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "database",
    items: [
      "Docker, Kubernetes, Terraform",
      "AWS, Azure, DigitalOcean",
      "CI/CD (GitHub Actions, Jenkins, Azure DevOps)",
      "Linux, Git",
    ],
  },
];

function Icon({ kind, className }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.85",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  if (kind === "mail") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  if (kind === "github") {
    return (
      <svg {...commonProps}>
        <path d="M9 18c-4 1.5-4-2-6-2" />
        <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (kind === "youtube") {
    return (
      <svg {...commonProps}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (kind === "external") {
    return (
      <svg {...commonProps}>
        <path d="M14 4h6v6" />
        <path d="M10 14L20 4" />
        <path d="M20 14v6H4V4h6" />
      </svg>
    );
  }

  if (kind === "document") {
    return (
      <svg {...commonProps}>
        <path d="M14 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    );
  }

  if (kind === "brain") {
    return (
      <svg {...commonProps}>
        <path d="M10 4a3 3 0 0 0-6 1 3.5 3.5 0 0 0 0 6 4 4 0 0 0 4 6h2" />
        <path d="M14 4a3 3 0 0 1 6 1 3.5 3.5 0 0 1 0 6 4 4 0 0 1-4 6h-2" />
        <path d="M12 4v16" />
        <path d="M8 10h1" />
        <path d="M15 10h1" />
      </svg>
    );
  }

  if (kind === "code") {
    return (
      <svg {...commonProps}>
        <path d="M8 16L4 12l4-4" />
        <path d="M16 8l4 4-4 4" />
      </svg>
    );
  }

  if (kind === "database") {
    return (
      <svg {...commonProps}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
        <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    );
  }

  if (kind === "graph") {
    return (
      <svg {...commonProps}>
        <path d="M4 18l6-6 4 4 6-8" />
        <circle cx="4" cy="18" r="1.5" />
        <circle cx="10" cy="12" r="1.5" />
        <circle cx="14" cy="16" r="1.5" />
        <circle cx="20" cy="8" r="1.5" />
      </svg>
    );
  }

  if (kind === "building") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h.01" />
        <path d="M15 7h.01" />
        <path d="M9 11h.01" />
        <path d="M15 11h.01" />
        <path d="M9 15h.01" />
        <path d="M15 15h.01" />
      </svg>
    );
  }

  if (kind === "location") {
    return (
      <svg {...commonProps}>
        <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (kind === "arrow-down") {
    return (
      <svg {...commonProps}>
        <path d="M12 5v14" />
        <path d="M6 13l6 6 6-6" />
      </svg>
    );
  }

  if (kind === "slides") {
    return (
      <svg {...commonProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M9 9l3 3 5-5" />
      </svg>
    );
  }

  if (kind === "image") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    );
  }

  if (kind === "mic") {
    return (
      <svg {...commonProps}>
        <rect x="9" y="2" width="6" height="11" rx="3" />
        <path d="M19 10a7 7 0 0 1-14 0" />
        <path d="M12 19v3" />
        <path d="M8 22h8" />
      </svg>
    );
  }

  return null;
}

function LinkIcon({ external = false, type = null }) {
  if (type === "video") return <Icon kind="youtube" className={styles.inlineIcon} />;
  if (type === "slides") return <Icon kind="slides" className={styles.inlineIcon} />;
  if (type === "photos") return <Icon kind="image" className={styles.inlineIcon} />;
  return <Icon kind={external ? "external" : "github"} className={styles.inlineIcon} />;
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Emmanuel Idoko — Software Engineer & AI Researcher</title>
        <meta
          name="description"
          content="Portfolio of Emmanuel Idoko — software engineer, AI/ML engineer, and researcher building clinical AI systems, agentic pipelines, and full-stack products."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.avatar}>{profile.initials}</div>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.title}</p>
          <p className={styles.bio}>{profile.bio}</p>

          <div className={styles.heroActions}>
            <a href="#contact" className={styles.primaryButton}>
              <Icon kind="mail" className={styles.buttonIcon} />
              <span>Contact Me</span>
            </a>
            <a href="#projects" className={styles.secondaryButton}>
              View Projects
            </a>
          </div>

          <div className={styles.iconLinks}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon kind="github" className={styles.socialIcon} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon kind="linkedin" className={styles.socialIcon} />
            </a>
            <a href={profile.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Icon kind="youtube" className={styles.socialIcon} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon kind="mail" className={styles.socialIcon} />
            </a>
          </div>

          <a href="#about" className={styles.scrollHint} aria-label="Scroll to about section">
            <Icon kind="arrow-down" className={styles.scrollIcon} />
          </a>
        </section>

        {/* ── About ── */}
        <section className={styles.section} id="about">
          <div className={styles.sectionTitleOnly}>
            <h2>About Me</h2>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutColumn}>
              <h3>Background</h3>
              {profile.background.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.aboutColumn}>
              <h3>Experience</h3>
              <div className={styles.timelineList}>
                {experienceSnapshot.map((item) => (
                  <div key={item.role} className={styles.timelineItem}>
                    <h4>{item.role}</h4>
                    <p className={styles.timelineOrg}>
                      {item.org} · {item.period}
                    </p>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className={`${styles.section} ${styles.tintedSection}`} id="projects">
          <div className={styles.sectionIntro}>
            <h2>Selected Projects</h2>
            <p>
              Building across agentic AI, clinical systems, computer vision, full-stack
              products, and distributed engineering.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.card}>
                <h3>{project.title}</h3>
                <span className={styles.statusBadge}>{project.status}</span>
                <p className={styles.cardSummary}>{project.summary}</p>

                <div className={styles.tagRow}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className={styles.linkRow}>
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        <LinkIcon external={link.external} type={link.type} />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── Talks & Sessions ── */}
        <section className={`${styles.section} ${styles.tintedSection}`} id="talks">
          <div className={styles.sectionIntro}>
            <h2>Talks & Sessions</h2>
            <p>Public talks, workshops, and sessions I've facilitated — with slides, photos, and writeups.</p>
          </div>

          <div className={styles.talkList}>
            {talks.map((talk) => (
              <div key={talk.title} className={styles.talkCard}>
                <div className={styles.talkHeader}>
                  <div className={styles.talkIconWrap}>
                    <Icon kind="mic" className={styles.talkIcon} />
                  </div>
                  <div>
                    <h3>{talk.title}</h3>
                    <p className={styles.talkMeta}>
                      {talk.date} · {talk.event}
                    </p>
                  </div>
                </div>
                <span className={styles.talkRole}>{talk.role}</span>
                <p className={styles.cardSummary}>{talk.description}</p>
                <div className={styles.tagRow}>
                  {talk.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.linkRow}>
                  {talk.links.filter((l) => l.href).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      <LinkIcon external={link.external} type={link.type} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Publications ── */}
        <section className={styles.section} id="publications">
          <div className={styles.sectionIntro}>
            <h2>Selected Publications</h2>
            <p>Research spanning medical imaging, multimodal learning, and applied AI systems.</p>
          </div>

          <div className={styles.pubList}>
            {publications.map((pub) => (
              <div key={pub.title} className={styles.pubRow}>
                <div className={styles.pubYear}>{pub.year}</div>
                <div className={styles.pubContent}>
                  <h3 className={styles.pubTitle}>{pub.title}</h3>
                  <p className={styles.pubAuthors}>{pub.authors}</p>
                  <p className={styles.pubVenue}>{pub.venue} · {pub.status}</p>
                  {Object.keys(pub.links).length > 0 && (
                    <div className={styles.pillRow}>
                      {pub.links.pdf && (
                        <a href={pub.links.pdf} target="_blank" rel="noreferrer" className={styles.pill}>PDF</a>
                      )}
                      {pub.links.arxiv && (
                        <a href={pub.links.arxiv} target="_blank" rel="noreferrer" className={styles.pill}>arXiv</a>
                      )}
                      {pub.links.code && (
                        <a href={pub.links.code} target="_blank" rel="noreferrer" className={styles.pill}>Code</a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href={profile.scholar}
            target="_blank"
            rel="noreferrer"
            className={styles.scholarLink}
          >
            View all on Google Scholar
            <Icon kind="external" className={styles.inlineIcon} />
          </a>
        </section>

        {/* ── Skills ── */}
        <section className={`${styles.section} ${styles.tintedSection}`} id="skills">
          <div className={styles.sectionIntro}>
            <h2>Skills & Expertise</h2>
            <p>A comprehensive toolkit for building and deploying production AI systems.</p>
          </div>

          <div className={styles.cardGrid}>
            {skills.map((group) => (
              <article key={group.title} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillIconWrap}>
                    <Icon kind={group.icon} className={styles.skillIcon} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section className={styles.section} id="contact">
          <div className={styles.sectionIntro}>
            <h2>Get In Touch</h2>
            <p>
              Interested in collaboration, research opportunities, or engineering work? Feel
              free to reach out.
            </p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIconWrap}>
                <Icon kind="mail" className={styles.contactIcon} />
              </div>
              <h3>Email</h3>
              <p>{profile.email}</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIconWrap}>
                <Icon kind="building" className={styles.contactIcon} />
              </div>
              <h3>Institution</h3>
              <p>{profile.institution}</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIconWrap}>
                <Icon kind="location" className={styles.contactIcon} />
              </div>
              <h3>Location</h3>
              <p>{profile.location}</p>
            </div>
          </div>

          <div className={styles.contactPanel}>
            <h3>Open to Opportunities</h3>
            <p>
              I&apos;m currently exploring engineering roles, research collaborations, startup
              builds, and applied AI projects with real-world impact.
            </p>
            <a href={`mailto:${profile.email}`} className={styles.primaryButton}>
              <Icon kind="mail" className={styles.buttonIcon} />
              <span>Send a Message</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Emmanuel Idoko. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.scholar} target="_blank" rel="noreferrer">Scholar</a>
          <a href="/cv">CV</a>
        </div>
      </footer>
    </div>
  );
}
