// Engineering projects, grouped for the /engineering page.
// `group` keys: "agentic" (AI & Agentic Systems), "products" (Products & Platforms),
// "systems" (Systems & Earlier Work).
export const projectGroups = [
  { key: "agentic", title: "AI & Agentic Systems" },
  { key: "products", title: "Products & Platforms" },
  { key: "systems", title: "In Production" },
];

export const projects = [
  {
    title: "Task-Aware Super-Resolution for Flood Mapping",
    image: "https://res.cloudinary.com/pidoxy/image/upload/v1792895689/site/work/flood-mapping.jpg",
    group: "agentic",
    status: "ACVSS 2026 Research Hackathon",
    summary:
      "Tested whether super-resolution actually improves downstream flood mapping from degraded satellite imagery, using a 3-phase pipeline (conditioned latent-diffusion SR → flood-aware fine-tuning → U-Net segmentation → per-tile risk ranking) on a SpaceNet-8 subset. Diffusion SR improved every downstream metric (mean IoU +24%, flood mIoU +11%) against degraded-LR and bicubic baselines.",
    tags: ["PyTorch", "Latent Diffusion", "U-Net", "SpaceNet-8", "Computer Vision"],
    links: [],
  },
  {
    title: "Virtue Foundation Intelligence Platform",
    slug: "virtue-foundation",
    image: "/images/work/virtue-foundation.jpg",
    group: "agentic",
    status: "MIT Hack-Nation × Databricks · 2nd Place",
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
        label: "Code",
        href: "https://github.com/pidoxy/hacknation",
        external: false,
      },
      {
        label: "Live Demo",
        href: "https://hacknation-three.vercel.app",
        external: true,
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
    slug: "aidcare",
    image: "/images/work/aidcare.jpg",
    group: "agentic",
    status: "Live Clinical AI Product",
    summary:
      "Clinical decision-support platform for Nigerian frontline care. AidCare Core now includes public triage, language-aware guidance, offline-friendly safety flows, and a Community Health Challenge for training and practice.",
    tags: ["Next.js", "FastAPI", "Clinical AI", "Voice", "Triage", "RBAC"],
    links: [
      {
        label: "Open AidCare",
        href: "https://aidcare.pidoxy.com",
        external: true,
      },
      {
        label: "Try Triage",
        href: "https://aidcare.pidoxy.com/triage",
        external: true,
      },
      {
        label: "Health Challenge",
        href: "https://aidcare.pidoxy.com/chc",
        external: true,
      },
    ],
  },
  {
    title: "AI Scientist",
    slug: "ai-scientist",
    image: "/images/work/ai-scientist.jpg",
    group: "agentic",
    status: "Hack-Nation Research OS",
    summary:
      "AI-assisted research workflow that helps researchers move from idea to experiment: organizing hypotheses, generating study plans, benchmarking runs, and turning research work into a repeatable operating system.",
    tags: ["Next.js", "TypeScript", "AI Agents", "Research Workflow", "Vercel"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=2ec62MQ5awI",
        external: true,
        type: "video",
      },
      {
        label: "Architecture",
        href: "https://www.youtube.com/watch?v=UtYp22QBgkg",
        external: true,
        type: "video",
      },
      {
        label: "Code",
        href: "https://github.com/pidoxy/ResearchOS-AI-Scientist",
        external: false,
      },
      {
        label: "Live Demo",
        href: "https://hack-nation-5.vercel.app",
        external: true,
      },
    ],
  },
  {
    title: "Kinetix",
    slug: "kinetix",
    image: "/images/work/kinetix.jpg",
    group: "agentic",
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
    title: "InvoiceMatch.AI",
    group: "agentic",
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
    group: "agentic",
    status: "AI Project",
    summary:
      "A financial-intelligence chatbot that holds dynamic conversations to give personalized money insights, grounded in public-domain financial books. Python + FastAPI backend with Gemini for NLP.",
    tags: ["Python", "FastAPI", "Gemini", "NLP"],
    links: [],
  },
  {
    title: "Amala Atlas",
    slug: "amala-atlas",
    image: "/images/work/amala-atlas.jpg",
    group: "products",
    status: "Amala Hackathon Winner · ₦2M",
    summary:
      "Winner of GDG Lagos' Amala Hackathon (₦2,000,000, winner-takes-all) as Team PRL lead. A crowdsourced global map for discovering authentic Amala spots, with an autonomous agent that scans food blogs daily. It has user reviews with Google auth, Google Maps integration, and an admin moderation panel. Open-sourced for the community.",
    tags: ["Next.js", "Firebase", "Google Maps", "Cheerio", "Vercel"],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=eUpADlc2aVk&t=5s",
        external: true,
        type: "video",
      },
      {
        label: "Buildathon Demo",
        href: "https://www.youtube.com/watch?v=rnla6FqpDug",
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
    title: "Amebo",
    slug: "amebo",
    group: "products",
    status: "AFRETEC Assistive Technology Workshop · 3rd Place · ₦1M",
    summary:
      "A crowdsourced accessibility layer over the Lagos map for pedestrians with disabilities. Users report accessible infrastructure (ramps, wheelchair-friendly bus stops) and live hazards (open gutters, broken pavement); the app answers with voice guidance for visually impaired users and text alerts for deaf and hard-of-hearing users.",
    tags: ["Accessibility", "Maps", "Voice", "Crowdsourcing"],
    links: [
      {
        label: "UNILAG News",
        href: "https://unilag.edu.ng/driving-inclusion-through-innovation-unilag-hosts-pan-african-assistive-technology-workshop/",
        external: true,
      },
    ],
  },
  {
    title: "AccessLearn",
    slug: "accesslearn",
    image: "https://res.cloudinary.com/pidoxy/image/upload/v1792895686/site/work/accesslearn.jpg",
    group: "products",
    status: "AFRETEC Inclusion Challenge · 2nd Place · Mentor & builder",
    summary:
      "An accessible learning platform built with a student team I mentored: text-to-speech in English, major Nigerian languages and Pidgin, AI translation, a fingerspelling tool, accessibility profiles and an AI tutor for document-based questions.",
    tags: ["Accessibility", "Text-to-speech", "Translation", "AI tutor"],
    links: [
      {
        label: "Story on X",
        href: "https://x.com/pidoxy_/status/2051314798114050379",
        external: true,
      },
    ],
  },
  {
    title: "PheraCAM",
    slug: "pheracam",
    image: "/images/work/pheracam.jpg",
    group: "products",
    status: "Hackathon 2nd Place",
    summary:
      "Real-time facial-recognition camera that distinguishes registered faces from unregistered ones on the edge, for bank branches, schools, homes, and even car anti-theft. Built with OpenCV and Azure, >95% accuracy at <150ms. 1st runner-up among 800+ participants from all 36 states at HackLab Nigeria 2022.",
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
    title: "Campus Thrift Books",
    slug: "campus-thrift-books",
    image: "/images/work/campus-thrift-books.jpg",
    group: "products",
    status: "GDSC Solution Challenge 2024",
    summary:
      "A platform for university students to buy, sell, and exchange second-hand textbooks on campus, reducing the cost burden of course materials and promoting a circular economy within academic communities.",
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
    slug: "medity",
    image: "/images/work/medity.jpg",
    group: "products",
    status: "Web App Challenge",
    summary:
      "Global health data aggregator that centralizes pandemic and disease information worldwide, surfacing symptoms, treatments, prevention methods, and real-time news updates to users in regions with limited health information access.",
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
    title: "HabariPay (GTCO)",
    group: "systems",
    status: "Sep 2024 – present · day job",
    summary:
      "Full-stack engineering on enterprise events software at Guaranty Trust's fintech subsidiary, including AI-powered product features.",
    tags: ["Full-stack", "Enterprise", "Fintech", "AI features"],
    links: [],
  },
  {
    title: "Wema Wiki",
    group: "systems",
    status: "Wema Bank · Aug – Dec 2024",
    summary:
      "An AI assistant in Microsoft Teams that answers staff questions about the bank's products and processes, alongside an OpenAI-based product-recommendation model.",
    tags: ["Node.js", "Azure", "OpenAI", "SQL"],
    links: [],
  },
  {
    title: "Modern Search Engine",
    group: "systems",
    status: "Engineering Project",
    summary:
      "Distributed information retrieval system with a custom inverted index, TF-IDF weighting, and cosine similarity scoring. Delivers sub-second query responses across 10,000+ PDF, DOCX, and TXT files with comprehensive xUnit test coverage.",
    tags: ["C#", ".NET", "Azure", "TF-IDF", "Cosine Similarity"],
    links: [],
  },
  {
    title: "AFCF Portal & E-Library",
    group: "systems",
    status: "National Reporting & Digital Library",
    summary:
      "A national reporting and digital-library platform for 500+ AFCF users, automating compliance workflows, real-time chapter updates, and file publishing while cutting manual data-collation time by 75%.",
    tags: ["Node.js", "React", "Next.js", "PostgreSQL", "Workflow Automation"],
    links: [],
  },
  {
    title: "AFM WECA Welfare CRM",
    group: "systems",
    status: "Production Welfare Operations Platform",
    summary:
      "A branch-aware welfare CRM that replaces spreadsheet-led newcomer care with live registration, assignment, follow-up, conversion, attendance, blessings, reporting, and audit workflows. Role-based access supports platform admins, pastors, welfare officers, secretaries, and volunteers; production routes were validated across 213 people, 212 newcomers, and 24 branch-team records.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Redis", "JWT", "RBAC"],
    links: [],
  },
];

// Hackathon builds and side projects for the Engineering archive strip.
// Devpost counts 23 hackathons; these are the ones worth naming.
export const hackathonCount = 23;

export const archive = [
  { year: "2026", title: "KRONOS", note: "USAII Global AI Hackathon · AI study planner", href: "https://usaihacks.vercel.app" },
  { year: "2025", title: "African Folktale Storyteller", note: "Spitchathon · voice AI", href: "" },
  { year: "2024", title: "Take On Squad", note: "Squad by GTCO · 5th place", href: "" },
  { year: "2023", title: "PhishPaddy", note: "Phishing-site detection", href: "https://github.com/pidoxy/PhishPaddy" },
  { year: "2022", title: "Decentralised voting", note: "Ethereum smart contracts", href: "https://github.com/pidoxy/voting-system" },
  { year: "2021", title: "Coffee_Break", note: "HackZurich · Hybrid Team Award", href: "https://devpost.com/software/coffee_break" },
  { year: "2021", title: "Foodify", note: "HackOR · finalist", href: "https://devpost.com/pidoxy" },
  { year: "2021", title: "HTFGame", note: "HackThisFall S2", href: "https://devpost.com/pidoxy" },
];
