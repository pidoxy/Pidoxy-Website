// Engineering projects, grouped for the /engineering page.
// `group` keys: "agentic" (AI & Agentic Systems), "products" (Products & Platforms),
// "systems" (Systems & Earlier Work).
export const projectGroups = [
  { key: "agentic", title: "AI & Agentic Systems" },
  { key: "products", title: "Products & Platforms" },
  { key: "systems", title: "Systems & Earlier Work" },
];

export const projects = [
  {
    title: "Virtue Foundation Intelligence Platform",
    group: "agentic",
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
    group: "agentic",
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
    group: "products",
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
    title: "PheraCAM",
    group: "products",
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
    title: "Campus Thrift Books",
    group: "products",
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
    group: "products",
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
    title: "Modern Search Engine",
    group: "systems",
    status: "Engineering Project",
    summary:
      "Distributed information retrieval system with a custom inverted index, TF-IDF weighting, and cosine similarity scoring. Delivers sub-second query responses across 10,000+ PDF, DOCX, and TXT files with comprehensive xUnit test coverage.",
    tags: ["C#", ".NET", "Azure", "TF-IDF", "Cosine Similarity"],
    links: [],
  },
  {
    title: "AFCF Portal",
    group: "systems",
    status: "Engineering Project",
    summary:
      "An automated coordination platform that streamlined a national reporting process with real-time data updates — cutting manual entry time by 75%.",
    tags: ["Automation", "Real-time Data", "Web"],
    links: [],
  },
];
