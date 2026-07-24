import fs from "fs";
import path from "path";
import { useCallback, useEffect, useState } from "react";
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
  twitter: "https://x.com/pidoxy_",
  devpost: "https://devpost.com/pidoxy",
  youtube: "https://www.youtube.com/@pidoxy",
  huggingface: "https://huggingface.co/Pidoxy",
  scholar: "https://scholar.google.com/citations?hl=en&user=hHEK0h0AAAAJ",
  siteUrl: "https://pidoxy.com",
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
    role: "Software Engineer Intern",
    org: "NitHub (UNILAG Innovation Hub)",
    period: "Feb 2023 – Present",
    detail:
      "Building AI/ML-integrated IoT systems with student innovators; represented the hub at the Lagos Chamber of Commerce and Industry showcase.",
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
      "Real-time facial-recognition camera that distinguishes registered faces from unregistered ones on the edge — for bank branches, schools, homes, and even car anti-theft. Built with OpenCV and Azure, >95% accuracy at <150ms. 1st runner-up among 800+ participants from all 36 states at HackLab Nigeria 2022.",
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
    status: "Amala Hackathon Winner · ₦2M",
    summary:
      "Winner of GDG Lagos' Amala Hackathon (₦2,000,000, winner-takes-all) as Team PRL lead. A crowdsourced global map for discovering authentic Amala spots, with an autonomous agent that scans food blogs daily — user reviews with Google auth, Google Maps integration, and an admin moderation panel. Open-sourced for the community.",
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
  {
    title: "FinBuddy",
    status: "AI Project",
    summary:
      "A financial-intelligence chatbot that holds dynamic conversations to give personalized money insights, grounded in public-domain financial books. Python + FastAPI backend with Gemini for NLP.",
    tags: ["Python", "FastAPI", "Gemini", "NLP"],
    links: [],
  },
  {
    title: "AFCF Portal",
    status: "Engineering Project",
    summary:
      "An automated coordination platform that streamlined a national reporting process with real-time data updates — cutting manual entry time by 75%.",
    tags: ["Automation", "Real-time Data", "Web"],
    links: [],
  },
];

const talks = [
  {
    title: "M.A.R.K Internship Initiative",
    event: "CISA UNILAG × NACOS UNILAG",
    role: "Host & Moderator",
    date: "May 9, 2026",
    description:
      "Hosted and moderated a panel on landing internships and global opportunities, featuring software engineers from Bloomberg (London) and Goldman Sachs on how students can build a competitive edge and break into top companies.",
    tags: ["Career", "Internships", "Panel", "Moderation"],
    links: [
      {
        label: "Watch Recording",
        href: "https://www.youtube.com/watch?v=_XcIKOSQldc&t=4325s",
        external: true,
        type: "video",
      },
    ],
  },
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
    authors:
      "I. Abolade, E. Idoko, S. Odelola, P. Omoigui, A. Adebanwo, A. M. Iorumbur, U. Anazodo, A. Crimi, R. Confidence",
    venue: "MIRASOL Workshop, MICCAI 2025",
    year: "2025",
    status: "Published · pp. 83–92",
    links: {
      arxiv: "https://arxiv.org/abs/2508.08518",
      pdf: "https://arxiv.org/pdf/2508.08518",
      doi: "https://doi.org/10.1007/978-3-032-13654-1_9",
      code: "https://github.com/ileri-oluwa-kiiye/SharpXR",
      announcement: "https://x.com/pidoxy_/status/1956482610974048601",
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
];

// Hackathon wins & honors. Verified entries seeded below — add/adjust freely.
const honors = [
  {
    title: "Amala Hackathon 2025 — Winner (₦2M)",
    org: "GDG Lagos · winner-takes-all",
    year: "2025",
    result: "Winner · ₦2,000,000",
    detail:
      "Led Team PRL to win GDG Lagos' Amala Hackathon with Amala Atlas — an open-source, crowdsourced map that auto-discovers and community-verifies Amala spots.",
    link: "https://www.youtube.com/watch?v=eUpADlc2aVk&t=5s",
  },
  {
    title: "HackZurich 2021 — Hybrid Team Award",
    org: "HackZurich · Europe's largest hackathon",
    year: "2021",
    result: "Winner",
    detail:
      "Won the Hybrid Team Award for Coffee_Break, a virtual break-room bringing spontaneous 'water-cooler' moments to remote teams via spatial audio.",
    link: "https://devpost.com/software/coffee_break",
  },
  {
    title: "HackOR 2021 — Finalist & Winner",
    org: "HackOR",
    year: "2021",
    result: "Winner",
    detail:
      "Built Foodify, a food-sharing platform that lets people share and receive surplus food to reduce waste.",
    link: "https://devpost.com/pidoxy",
  },
  {
    title: "HackLab Nigeria 2022 — 1st Runner-Up",
    org: "HackLab Foundation · Africa FinTech Foundry",
    year: "2022",
    result: "2nd Place · ₦300k grant",
    detail:
      "PheraCam, a real-time facial-recognition security camera, placed 1st runner-up among 800+ participants and was featured in national tech coverage.",
    link: "https://www.myjoyonline.com/hacklab-nigeria-ends-12-scalable-ai-big-data-edge-solutions/",
  },
  {
    title: "Virtue Foundation Intelligence Platform — 2nd Place",
    org: "Databricks × Hack-Nation Global AI Hackathon",
    year: "2026",
    result: "2nd Place",
    detail:
      "Agentic AI platform mapping healthcare gaps across 797 Ghana facilities, surfacing 10 medical deserts and 43 data anomalies.",
    link: "https://www.youtube.com/watch?v=4w29E3NGFV0",
  },
  {
    title: "Meta Global Hackathon 2022",
    org: "Meta · algorithmic challenge",
    year: "2022",
    result: "14th in EMEA · 47th globally",
    detail:
      "Engineered 10+ algorithmic solutions to critical system bugs, reducing error rates by 40% and improving stability by 25%.",
    link: "",
  },
  {
    title: "AccessLearn — 2nd Place",
    org: "Afretec UNILAG Inclusion Team Innovation Challenge",
    year: "2025",
    result: "2nd Place",
    detail:
      "Mentored a student team and built AccessLearn, an accessible learning platform with read-aloud in English, Nigerian languages and Pidgin, AI translation, a fingerspelling tool for Deaf and hard-of-hearing learners, and a document-based AI tutor.",
    link: "",
  },
  {
    title: "ACVSS 2026 — Accepted with Full Grant",
    org: "African Computer Vision Summer School · Google AI Community Center, Accra",
    year: "2026",
    result: "Accepted · Full Grant",
    detail:
      "Selected as 1 of 31 from 312 applicants for the African Computer Vision Summer School — intensive lectures, mentoring, and research with 15+ scientists across advanced vision, diffusion, self-supervised, and multimodal learning.",
    link: "https://www.acvss.ai/",
  },
];

// Press & media coverage. Seeded with verified coverage of Emmanuel's projects.
const press = [
  {
    outlet: "MyJoyOnline",
    title: "HackLab Nigeria ends: 12 scalable AI, Big Data & Edge solutions",
    note: "National coverage of the HackLab Nigeria 2022 finale where PheraCam placed 1st runner-up.",
    date: "2022",
    href: "https://www.myjoyonline.com/hacklab-nigeria-ends-12-scalable-ai-big-data-edge-solutions/",
  },
  {
    outlet: "BusinessDay",
    title: "HackLab Foundation partners BlueAfric Media on HackLab Hackathon Nigeria 2022",
    note: "Coverage of the hackathon where PheraCam was recognised.",
    date: "2022",
    href: "https://businessday.ng/companies/article/hacklab-foundation-partners-blueafric-media-on-hacklab-hackathon-nigeria-2022/",
  },
];

// Curated milestones — research acceptances, talks, and reflections shared publicly.
// A lightweight proof-of-recency layer, not a general social feed.
const milestones = [
  {
    category: "Poster Presentation",
    title: "Presented the SharpXR poster at MIRG-ICAIR 2025",
    note: "Presented our pediatric chest X-ray denoising work to researchers at the MIRG-ICAIR conference, University of Lagos.",
    links: [
      { label: "Post", href: "https://x.com/pidoxy_/status/1991873231876395334", type: "twitter" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/posts/emmanuelidoko_two-weeks-ago-i-had-the-pleasure-of-presenting-activity-7397637497679167488-rftR",
        type: "linkedin",
      },
    ],
  },
  {
    category: "Research Milestone",
    title: "SharpXR accepted to the MIRASOL Workshop at MICCAI",
    note: "Announcing my first paper — structure-aware denoising for pediatric chest X-rays — accepted at a MICCAI workshop.",
    links: [{ label: "Post", href: "https://x.com/pidoxy_/status/1956482610974048601", type: "twitter" }],
  },
  {
    category: "Talk",
    title: "Attention Is All You Need — paper walkthrough session",
    note: "Facilitating a Transformer paper walkthrough for early student researchers.",
    links: [{ label: "Photos", href: "https://x.com/pidoxy_/status/2017238883054878853", type: "twitter" }],
  },
  {
    category: "Reflection",
    title: "On pushing past your limits",
    note: "A short reflection on growth after a debate — the mindset behind the work.",
    links: [{ label: "Post", href: "https://x.com/pidoxy_/status/1867597674410615178", type: "twitter" }],
  },
];

const skills = [
  {
    title: "Machine Learning & AI",
    icon: "brain",
    items: [
      "PyTorch, TensorFlow, Hugging Face Transformers",
      "FAISS, Sentence Transformers, LangGraph",
      "OpenAI API, Gemini API",
      "Whisper ASR, Tesseract OCR",
      "Computer Vision (OpenCV, ViTs)",
      "Scikit-learn, Pandas, NumPy, Matplotlib",
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

  if (kind === "twitter") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    );
  }

  if (kind === "trophy") {
    return (
      <svg {...commonProps}>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
        <path d="M7 4H4v2a3 3 0 0 0 3 3" />
        <path d="M17 4h3v2a3 3 0 0 1-3 3" />
      </svg>
    );
  }

  if (kind === "newspaper") {
    return (
      <svg {...commonProps}>
        <path d="M4 4h13v16H5a1 1 0 0 1-1-1z" />
        <path d="M17 8h3v10a2 2 0 0 1-2 2" />
        <path d="M8 8h5" />
        <path d="M8 12h5" />
        <path d="M8 16h5" />
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

// Renders a comma-separated author list, bolding Emmanuel's name.
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

// Event-grouped gallery with a full-screen lightbox (keyboard + arrow nav).
// Extracts a YouTube video ID from a watch / youtu.be / embed URL.
function youtubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

// First YouTube thumbnail across an item's links (maxres, with hq fallback).
function videoThumb(links) {
  for (const link of links || []) {
    const id = youtubeId(link.href);
    if (id) {
      return {
        max: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
        hq: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      };
    }
  }
  return null;
}

// 16:9 thumbnail: YouTube frame when a video link exists, else a branded
// gradient placeholder. maxres falls back to hq (always present) on error.
function CardThumb({ links, className }) {
  const thumb = videoThumb(links);
  if (thumb) {
    return (
      <div className={`${styles.cardThumb} ${className || ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb.max}
          alt=""
          loading="lazy"
          onError={(e) => {
            if (!e.currentTarget.dataset.fb) {
              e.currentTarget.dataset.fb = "1";
              e.currentTarget.src = thumb.hq;
            }
          }}
        />
      </div>
    );
  }
  return (
    <div className={`${styles.cardThumb} ${styles.cardThumbPlaceholder} ${className || ""}`}>
      <Icon kind="code" className={styles.cardThumbIcon} />
    </div>
  );
}

function PhotoGrid({ items, onOpen }) {
  return (
    <div className={styles.galleryGrid}>
      {items.map((photo) => (
        <button
          key={photo.src}
          type="button"
          className={styles.galleryItem}
          onClick={() => onOpen(photo.i)}
          aria-label={`Open image: ${photo.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.thumb || photo.src} alt={photo.alt} loading="lazy" />
        </button>
      ))}
    </div>
  );
}

// Renders event "moments" — a write-up paired with its photos — plus a
// lightbox. Photos attach to a moment by album slug; leftover photos (no
// matching moment) render as a plain trailing block.
function Moments({ gallery }) {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  const close = useCallback(() => setIndex(-1), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [gallery.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % gallery.length),
    [gallery.length]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  // Group photos by album slug.
  const bySlug = new Map();
  gallery.forEach((photo, i) => {
    const slug = photo.album || "";
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push({ ...photo, i });
  });

  // Configured moments first (in order), then any leftover photo groups.
  const used = new Set();
  const blocks = [];
  moments.forEach((m) => {
    used.add(m.slug);
    const photos = bySlug.get(m.slug) || [];
    if (photos.length || (m.writeup && m.writeup.length)) {
      blocks.push({ type: "moment", moment: m, photos });
    }
  });
  bySlug.forEach((photos, slug) => {
    if (!used.has(slug)) blocks.push({ type: "plain", slug, photos });
  });

  if (!blocks.length) return null;
  const active = open ? gallery[index] : null;

  return (
    <section className={styles.section} id="moments">
      <div className={styles.sectionIntro}>
        <h2>Moments</h2>
        <p>Talks, conferences, and community — what happened, in words and pictures.</p>
      </div>

      <div className={styles.momentList}>
        {blocks.map((block) =>
          block.type === "moment" ? (
            <article key={block.moment.slug} className={styles.moment}>
              <div className={styles.momentHead}>
                <h3>{block.moment.title}</h3>
                <p className={styles.momentMeta}>
                  {block.moment.date}
                  {block.moment.role ? ` · ${block.moment.role}` : ""}
                </p>
              </div>
              {block.moment.writeup?.map((para) => (
                <p key={para.slice(0, 24)} className={styles.momentWriteup}>
                  {para}
                </p>
              ))}
              {block.photos.length > 0 && <PhotoGrid items={block.photos} onOpen={setIndex} />}
              {block.moment.links?.length > 0 && (
                <div className={styles.linkRow}>
                  {block.moment.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      <LinkIcon external type={link.type} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ) : (
            <article key={block.slug || "_more"} className={styles.moment}>
              {block.slug && (
                <div className={styles.momentHead}>
                  <h3>{humanizeName(block.slug)}</h3>
                </div>
              )}
              <PhotoGrid items={block.photos} onOpen={setIndex} />
            </article>
          )
        )}
      </div>

      {active && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={close}>
          <button className={styles.lightboxClose} onClick={close} aria-label="Close">
            ×
          </button>
          {gallery.length > 1 && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          <figure className={styles.lightboxFigure} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            {(active.caption || active.alt) && <figcaption>{active.caption || active.alt}</figcaption>}
          </figure>
          {gallery.length > 1 && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default function Home({ gallery = [] }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>Emmanuel Idoko — Software Engineer & AI Researcher</title>
        <meta
          name="description"
          content="Portfolio of Emmanuel Idoko (Pidoxy) — software engineer, AI/ML engineer, and researcher building clinical AI systems, agentic pipelines, and full-stack products. Published at MICCAI and ICPR."
        />
        <link rel="canonical" href={profile.siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emmanuel Idoko" />
        <meta property="og:title" content="Emmanuel Idoko — Software Engineer & AI Researcher" />
        <meta
          property="og:description"
          content="Building clinical AI systems, agentic pipelines, and full-stack products across medical imaging, retrieval, and applied research. Published at MICCAI and ICPR."
        />
        <meta property="og:url" content={profile.siteUrl} />
        <meta property="og:image" content={`${profile.siteUrl}/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pidoxy_" />
        <meta name="twitter:creator" content="@pidoxy_" />
        <meta name="twitter:title" content="Emmanuel Idoko — Software Engineer & AI Researcher" />
        <meta
          name="twitter:description"
          content="Building clinical AI systems, agentic pipelines, and full-stack products. Published at MICCAI and ICPR."
        />
        <meta name="twitter:image" content={`${profile.siteUrl}/og.png`} />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emmanuel Idoko",
              alternateName: "Pidoxy",
              url: profile.siteUrl,
              image: `${profile.siteUrl}/og.png`,
              jobTitle: "Software Engineer & AI Researcher",
              email: `mailto:${profile.email}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Lagos",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Deep Learning",
                "Medical Imaging",
                "Computer Vision",
                "Retrieval-Augmented Generation",
                "Full-Stack Engineering",
              ],
              sameAs: [
                profile.github,
                profile.linkedin,
                profile.twitter,
                profile.devpost,
                profile.youtube,
                profile.huggingface,
                profile.scholar,
              ],
            }),
          }}
        />
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
            <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <Icon kind="twitter" className={styles.socialIcon} />
            </a>
            <a href={profile.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Icon kind="youtube" className={styles.socialIcon} />
            </a>
            <a href={profile.devpost} target="_blank" rel="noreferrer" aria-label="Devpost">
              <Icon kind="external" className={styles.socialIcon} />
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
                <CardThumb links={project.links} />
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

        {/* ── Honors & Hackathons ── */}
        <section className={styles.section} id="honors">
          <div className={styles.sectionIntro}>
            <h2>Honors & Hackathons</h2>
            <p>
              Selected wins and podium finishes from 23+ hackathons — from HackZurich in Europe
              to Nigeria&apos;s HackLab and global AI hackathons.
            </p>
          </div>

          <div className={styles.honorList}>
            {honors.map((honor) => (
              <div key={honor.title} className={styles.honorCard}>
                <div className={styles.honorIconWrap}>
                  <Icon kind="trophy" className={styles.honorIcon} />
                </div>
                <div className={styles.honorBody}>
                  <div className={styles.honorTop}>
                    <h3>{honor.title}</h3>
                    <span className={styles.honorResult}>{honor.result}</span>
                  </div>
                  <p className={styles.honorOrg}>
                    {honor.org} · {honor.year}
                  </p>
                  <p className={styles.cardSummary}>{honor.detail}</p>
                  {honor.link && (
                    <div className={styles.linkRow}>
                      <a href={honor.link} target="_blank" rel="noreferrer">
                        <Icon kind="external" className={styles.inlineIcon} />
                        <span>Details</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
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
                  {videoThumb(talk.links) ? (
                    <CardThumb links={talk.links} className={styles.talkThumb} />
                  ) : (
                    <div className={styles.talkIconWrap}>
                      <Icon kind="mic" className={styles.talkIcon} />
                    </div>
                  )}
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

          <div className={styles.publicationList}>
            {publications.map((pub) => (
              <article key={pub.title} className={styles.publicationCard}>
                <div className={styles.publicationIconWrap}>
                  <Icon kind="document" className={styles.publicationIcon} />
                </div>
                <div className={styles.publicationBody}>
                  <h3>{pub.title}</h3>
                  <p className={styles.publicationAuthors}>{renderAuthors(pub.authors)}</p>
                  <div className={styles.publicationMeta}>
                    <span>{pub.venue}</span>
                    <span>{pub.status}</span>
                  </div>
                  {Object.keys(pub.links).length > 0 && (
                    <div className={styles.pillRow}>
                      {pub.links.pdf && (
                        <a href={pub.links.pdf} target="_blank" rel="noreferrer" className={styles.pill}>PDF</a>
                      )}
                      {pub.links.arxiv && (
                        <a href={pub.links.arxiv} target="_blank" rel="noreferrer" className={styles.pill}>arXiv</a>
                      )}
                      {pub.links.doi && (
                        <a href={pub.links.doi} target="_blank" rel="noreferrer" className={styles.pill}>DOI</a>
                      )}
                      {pub.links.code && (
                        <a href={pub.links.code} target="_blank" rel="noreferrer" className={styles.pill}>Code</a>
                      )}
                      {pub.links.announcement && (
                        <a href={pub.links.announcement} target="_blank" rel="noreferrer" className={styles.pill}>Announcement</a>
                      )}
                    </div>
                  )}
                </div>
              </article>
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

        {/* ── Press & Media ── */}
        {press.length > 0 && (
          <section className={`${styles.section} ${styles.tintedSection}`} id="press">
            <div className={styles.sectionIntro}>
              <h2>Press & Media</h2>
              <p>Coverage of my projects and the events I&apos;ve competed in.</p>
            </div>

            <div className={styles.cardGrid}>
              {press.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.pressCard}
                >
                  <div className={styles.pressHeader}>
                    <span className={styles.pressIconWrap}>
                      <Icon kind="newspaper" className={styles.pressIcon} />
                    </span>
                    <div>
                      <span className={styles.pressOutlet}>{item.outlet}</span>
                      <span className={styles.pressDate}>{item.date}</span>
                    </div>
                  </div>
                  <h3 className={styles.pressTitle}>{item.title}</h3>
                  <p className={styles.cardSummary}>{item.note}</p>
                  <span className={styles.pressLink}>
                    Read <Icon kind="external" className={styles.inlineIcon} />
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ── Moments ── */}
        <Moments gallery={gallery} />

        {/* ── Recent Milestones ── */}
        {milestones.length > 0 && (
          <section className={styles.section} id="milestones">
            <div className={styles.sectionIntro}>
              <h2>Recent Milestones</h2>
              <p>Curated signals — research acceptances, talks, and reflections shared along the way.</p>
            </div>

            <div className={styles.cardGrid}>
              {milestones.map((item) => (
                <div key={item.title} className={styles.socialCard}>
                  <div className={styles.socialCardHeader}>
                    <span className={styles.socialCategory}>{item.category}</span>
                  </div>
                  <h3 className={styles.socialTitle}>{item.title}</h3>
                  <p className={styles.cardSummary}>{item.note}</p>
                  <div className={styles.linkRow}>
                    {item.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        <Icon
                          kind={link.type === "linkedin" ? "linkedin" : link.type === "twitter" ? "twitter" : "external"}
                          className={styles.inlineIcon}
                        />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

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

const CLOUDINARY_CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "pidoxy";
const CLOUDINARY_TAG = process.env.CLOUDINARY_GALLERY_TAG || "portfolio";
// Optional Cloudinary folder the gallery images live in. Stripped from the
// public_id before album parsing, so a photo at "portfolio/mirg-icair-2025/x"
// groups under the album "mirg-icair-2025" (not "portfolio").
const CLOUDINARY_BASE_FOLDER = (process.env.CLOUDINARY_BASE_FOLDER || "portfolio").replace(/^\/+|\/+$/g, "");
// Server-only Admin API credentials (never NEXT_PUBLIC — never sent to the browser).
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";

function humanizeName(name) {
  return name
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .replace(/^[\d\s_-]+/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

// Turns a filename segment into a caption, but returns "" for opaque
// auto-generated IDs (mixed upper/lower + digits, e.g. "G6SOG7DXkAAOOh9")
// so random Cloudinary/Twitter names never show as captions.
function readableCaption(segment) {
  if (!segment) return "";
  const base = segment.replace(/\.[^.]+$/, "");
  const looksRandom = /[A-Z]/.test(base) && /[a-z]/.test(base) && /\d/.test(base);
  if (looksRandom) return "";
  return base.replace(/^[\d\s_-]+/, "").replace(/[-_]+/g, " ").trim();
}

// "Moments" — event stories that pair a write-up with photos. Photos attach to
// a moment when their Cloudinary folder (or filename prefix) matches the slug,
// e.g. photos in folder "portfolio/mark-internship-2026/…". Order controls
// display order (top = first). Add a moment by adding an entry here + photos.
const moments = [
  {
    slug: "acvss-2026",
    title: "ACVSS 2026 — African Computer Vision Summer School",
    date: "July 2026",
    role: "Attendee · Full Grant",
    writeup: [
      "I was selected as 1 of 31 from 312 applicants — with a full grant — for the African Computer Vision Summer School (ACVSS 2026), hosted at the Google AI Community Center in Accra.",
      "It's an intensive gathering of African students with 15+ scientists from around the world: lectures, hands-on sessions, and mentoring across advanced vision architectures, diffusion models, self-supervised and multimodal learning, 3D vision, world models, fairness, and ethics.",
    ],
    links: [
      { label: "About ACVSS", href: "https://www.acvss.ai/", type: "external" },
    ],
  },
  {
    slug: "mark-internship-2026",
    title: "M.A.R.K Internship Initiative",
    date: "May 2026",
    role: "Host & Moderator",
    writeup: [
      "I hosted and moderated the M.A.R.K Internship Initiative, a session by CISA UNILAG and NACOS UNILAG for students serious about internships and global opportunities.",
      "I guided a panel of engineers now at Bloomberg (London) and Goldman Sachs through the realities of breaking into top companies — how they positioned themselves, what actually moved the needle in their applications, and the habits that built a competitive edge. My role was to keep it practical and honest, and draw out advice students could act on the next morning.",
    ],
    links: [
      { label: "Watch Recording", href: "https://www.youtube.com/watch?v=_XcIKOSQldc&t=4325s", type: "video" },
    ],
  },
  {
    slug: "mirg-icair-2025",
    title: "MIRG-ICAIR 2025 — SharpXR Poster",
    date: "Nov 2025",
    role: "Poster Presenter",
    writeup: [
      "I presented our paper, SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays, as a poster at the MIRG-UNILAG International Conference on AI and Robotics — Empowering Africa Through AI and Robotics Research.",
      "Alongside my co-author Solomon Odelola, I walked researchers and industry experts through how SharpXR improves diagnostic image quality for pediatric care, and fielded questions from people pushing the frontiers of AI and robotics across the continent.",
    ],
    links: [
      { label: "Pre-print", href: "https://arxiv.org/abs/2508.08518", type: "external" },
    ],
  },
  {
    slug: "hacklab-2022",
    title: "HackLab Nigeria 2022 — My First In-Person Hackathon",
    date: "June 2022",
    role: "Team Phantoms · 1st Runner-Up",
    writeup: [
      "HackLab Nigeria 2022 was my first in-person hackathon — three days at the Africa FinTech Foundry in Lagos among 800+ participants.",
      "With Team Phantoms, I built PheraCam, a real-time facial-recognition camera that tells registered faces from unregistered ones on the edge — for bank branches, churches, schools, homes, and car anti-theft. We placed 1st runner-up, winning a ₦300k grant, two Nvidia Deep Learning Institute vouchers, and a video documentary and branding from BlueAfric Media. It's the event that got me hooked on building under pressure.",
    ],
    links: [
      { label: "Watch Documentary", href: "https://www.instagram.com/p/CfWHkiZKEzP/", type: "external" },
      { label: "Event Photos", href: "https://x.com/hacklabfdn/status/1537382809974804480", type: "photos" },
    ],
  },
];

const momentBySlug = Object.fromEntries(moments.map((m) => [m.slug, m]));

// Explicit moment assignment for specific Cloudinary public_ids — used for
// photos uploaded to the portfolio root with auto-generated names. Future
// photos can instead just live in a subfolder named after the moment slug.
const photoMomentOverride = {
  "portfolio/PHOTO-2026-05-09-10-35-48_kpnhra": "mark-internship-2026",
  "portfolio/G6SOG67WoAAuFSD_nd70w4": "mirg-icair-2025",
  "portfolio/G6SOG7DXkAAOOh9_hvsixi": "mirg-icair-2025",
  "portfolio/G6SOG7BWcAAVtb0_cm4wnt": "mirg-icair-2025",
  "portfolio/G6SN1IGWMAAu_Qb_vlzbgm": "mirg-icair-2025",
};

// Derives an album slug + caption from a Cloudinary public_id or a filename.
// Supports "album-slug/photo" (folder) and "album-slug__caption" conventions.
function parseAlbum(id) {
  const name = id.replace(/\.[^.]+$/, "");
  let albumSlug = "";
  let rest = name;
  if (name.includes("/")) {
    const parts = name.split("/");
    albumSlug = parts[0];
    rest = parts.slice(1).join("/");
  } else if (name.includes("__")) {
    const parts = name.split("__");
    albumSlug = parts[0];
    rest = parts.slice(1).join(" ");
  }
  const caption = rest.replace(/^[\d\s_-]+/, "").replace(/[-_]+/g, " ").trim();
  return { albumSlug, caption };
}

function cloudinaryUrls(publicId, version, format) {
  const base = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload`;
  const v = version ? `v${version}/` : "";
  return {
    // full-size for the lightbox; f_auto/q_auto = automatic format + quality
    src: `${base}/f_auto,q_auto,c_limit,w_1600/${v}${publicId}.${format}`,
    // uniform, cropped thumbnail for the grid tile
    thumb: `${base}/f_auto,q_auto,c_fill,g_auto,w_640,h_480/${v}${publicId}.${format}`,
  };
}

// Preferred source: Cloudinary Admin API (reliable on all account types).
// Reads images tagged CLOUDINARY_TAG, deriving the album from the asset's
// folder and the caption from its context metadata or display name — so albums
// and captions are fully managed from the Cloudinary dashboard, no code.
// Needs CLOUDINARY_API_KEY/SECRET (server-only Vercel env vars).
async function galleryFromCloudinaryAdmin() {
  const auth = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString("base64");
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/resources/image/tags/${CLOUDINARY_TAG}?max_results=100&context=true`;
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
  if (!res.ok) throw new Error(`Cloudinary Admin ${res.status}`);
  const data = await res.json();
  return (data.resources || [])
    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
    .map((r) => {
      // Album from the folder (asset_folder in dynamic mode, else the public_id path).
      let folder =
        r.asset_folder ||
        (r.public_id.includes("/") ? r.public_id.split("/").slice(0, -1).join("/") : "");
      if (CLOUDINARY_BASE_FOLDER && folder.startsWith(CLOUDINARY_BASE_FOLDER)) {
        folder = folder.slice(CLOUDINARY_BASE_FOLDER.length).replace(/^\/+/, "");
      }
      // Explicit override (by public_id) wins over the folder-derived slug.
      const albumSlug = photoMomentOverride[r.public_id] || folder.split("/")[0] || "";
      const ctx = (r.context && r.context.custom) || {};
      const lastSegment = r.public_id.split("/").pop();
      // Prefer dashboard-set caption/alt/name; otherwise derive from the filename,
      // but suppress opaque auto-generated IDs (mixed case + digits, no words).
      const caption =
        ctx.caption || ctx.alt || r.display_name || readableCaption(lastSegment);
      const albumTitle = (momentBySlug[albumSlug] || {}).title;
      const urls = cloudinaryUrls(r.public_id, r.version, r.format);
      return {
        ...urls,
        alt: caption || albumTitle || "Gallery photo",
        caption,
        album: albumSlug,
      };
    });
}

// Legacy source: public keyless tag-list endpoint. Deprecated on newer Cloudinary
// accounts (returns 404), so this is only a secondary attempt.
async function galleryFromCloudinary() {
  const url = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/list/${CLOUDINARY_TAG}.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Cloudinary list ${res.status}`);
  const data = await res.json();
  const base = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload`;
  return (data.resources || [])
    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
    .map((r) => {
      let relId = r.public_id;
      if (CLOUDINARY_BASE_FOLDER && relId.startsWith(`${CLOUDINARY_BASE_FOLDER}/`)) {
        relId = relId.slice(CLOUDINARY_BASE_FOLDER.length + 1);
      }
      const { albumSlug, caption } = parseAlbum(relId);
      const label = caption || humanizeName(relId);
      return {
        // full-size for the lightbox; f_auto/q_auto = automatic format + quality
        src: `${base}/f_auto,q_auto,c_limit,w_1600/v${r.version}/${r.public_id}.${r.format}`,
        // uniform, cropped thumbnail for the grid tile
        thumb: `${base}/f_auto,q_auto,c_fill,g_auto,w_640,h_480/v${r.version}/${r.public_id}.${r.format}`,
        alt: label,
        caption: caption || "",
        album: albumSlug,
      };
    });
}

// Fallback source: local /public/gallery folder, auto-discovered at build time.
// Captions/alt optional via /public/gallery/captions.json.
function galleryFromFolder() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);
  let captions = {};
  const captionsPath = path.join(galleryDir, "captions.json");
  if (fs.existsSync(captionsPath)) {
    captions = JSON.parse(fs.readFileSync(captionsPath, "utf-8"));
  }
  return fs
    .readdirSync(galleryDir)
    .filter((file) => imageExts.has(path.extname(file).toLowerCase()))
    .sort()
    .reverse() // newest-first when files are date-prefixed (e.g. 2026-06-...)
    .map((file) => {
      const meta = captions[file] || {};
      const { albumSlug, caption } = parseAlbum(file);
      return {
        src: `/gallery/${file}`,
        thumb: `/gallery/${file}`,
        alt: meta.alt || meta.caption || caption || humanizeName(file),
        caption: meta.caption || caption || "",
        album: albumSlug,
      };
    });
}

export async function getStaticProps() {
  let gallery = [];
  try {
    if (CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
      gallery = await galleryFromCloudinaryAdmin(); // reliable, dashboard-driven
    } else if (CLOUDINARY_CLOUD) {
      gallery = await galleryFromCloudinary(); // legacy keyless endpoint
    } else {
      gallery = galleryFromFolder();
    }
  } catch {
    // Any Cloudinary error → try the local folder; if that also fails, hide section.
    try {
      gallery = galleryFromFolder();
    } catch {
      gallery = [];
    }
  }

  // Revalidate every 60s so new Cloudinary uploads appear without a redeploy.
  return { props: { gallery }, revalidate: 60 };
}
