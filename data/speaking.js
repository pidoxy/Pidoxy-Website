// Speaker kit — everything an organizer or CFP form needs, copy-paste ready.
// All facts here mirror the rest of the site; keep them in sync.

export const speakerFacts = {
  name: "Emmanuel Idoko",
  alsoKnownAs: "Pidoxy (online handle)",
  taglines: [
    "Software Engineer & AI Researcher",
    "AI Engineer and Researcher",
    "Founder, AidCare · Software Engineer, HabariPay (GTCO)",
    "Software Engineer & AI Researcher — clinical AI, agentic systems, medical imaging",
  ],
  affiliations: [
    "Founder & AI/ML Engineer, AidCare",
    "Software Engineer, HabariPay (Guaranty Trust's fintech subsidiary)",
    "Independent ML Researcher, ML Collective",
    "B.Sc. Computer Science, University of Lagos",
  ],
  based: "Lagos, Nigeria — West Africa Time (UTC+1)",
  languages: "English",
  availability: [
    "In person — Lagos and across Nigeria; international with travel support",
    "Remote — talks, panels, and workshops over video, any timezone",
  ],
  formats: [
    "Conference talk (25–45 min)",
    "Hands-on workshop (90 min – half day)",
    "Panel speaker, host, or moderator",
    "Paper walkthrough / reading-group session",
    "Guest lecture or student session",
  ],
  tracks: ["AI / Machine Learning", "Research", "Software Engineering", "Healthcare Technology", "Career & Community"],
  audiences: [
    "Engineers shipping ML and LLM features in production",
    "Researchers and students in medical imaging and computer vision",
    "Healthcare-technology teams and clinical-AI builders",
    "Early-career developers and student communities",
  ],
};

// Bios in increasing length. Third person, present tense.
export const bios = [
  {
    label: "One-liner",
    words: "≈25 words",
    text:
      "Emmanuel Idoko is a software engineer and AI researcher building clinical AI systems and agentic pipelines — and publishing the research behind them at MICCAI and ICPR.",
  },
  {
    label: "Short bio",
    words: "≈60 words",
    text:
      "Emmanuel Idoko is a software engineer and AI researcher working on clinical AI, agentic systems, and medical imaging. He is the founder of AidCare, a clinical decision-support platform; a software engineer at HabariPay, Guaranty Trust's fintech subsidiary; and a co-author of medical-imaging research published at MICCAI 2025 and ICPR 2026. He has won or placed at hackathons from HackZurich to GDG Lagos.",
  },
  {
    label: "Standard bio",
    words: "≈120 words",
    text:
      "Emmanuel Idoko is a software engineer and AI researcher who builds production AI systems and publishes the research behind them. He founded AidCare, a clinical decision-support platform that pairs a dual-mode retrieval-augmented generation system with semantic search over 500+ clinical protocols and multimodal ingestion of scanned documents and voice notes. He is a software engineer at HabariPay, the fintech subsidiary of Guaranty Trust, and an independent researcher with ML Collective, where his work spans medical imaging and computer vision — including SharpXR (MICCAI 2025, MIRASOL Workshop), VAMAE (ICPR 2026), and a first-author study of retrieval-induced hallucination in medical vision-language models. He was selected — 1 of 31 from 312 applicants — for the 2026 African Computer Vision Summer School, and has won or placed at hackathons from HackZurich to GDG Lagos' ₦2M Amala Hackathon.",
  },
  {
    label: "Extended bio",
    words: "≈220 words",
    text:
      "Emmanuel Idoko is a software engineer and AI researcher whose work sits at the intersection of clinical AI, agentic systems, and medical imaging. He builds systems that survive contact with production, then publishes the research behind them.\n\nHe is the founder of AidCare, a clinical decision-support platform for settings where specialist knowledge is scarce: a dual-mode RAG system with semantic search over 500+ clinical protocols, Whisper-based speech ingestion, OCR for scanned records, and a containerized FastAPI backend engineered for real-world infrastructure. As a software engineer at HabariPay — Guaranty Trust's fintech subsidiary — he works on payment infrastructure and AI-powered product features. He previously shipped an AI knowledge chatbot serving 2,000+ staff at Wema Bank and automated cloud deployments at NexaScale.\n\nAs an independent researcher with ML Collective, he co-authored SharpXR (structure-aware denoising for pediatric chest X-rays, MICCAI 2025 MIRASOL Workshop) and VAMAE (vessel-aware masked autoencoders for OCT angiography, ICPR 2026), and is first author on a study of retrieval-induced hallucination in medical vision-language models. In 2026 he was selected — 1 of 31 from 312 applicants, on a full grant — for the African Computer Vision Summer School.\n\nEmmanuel has competed in 23+ hackathons with wins on three continents, including HackZurich's Hybrid Team Award, GDG Lagos' ₦2M Amala Hackathon, and 2nd place at the Databricks × Hack-Nation Global AI Hackathon. He trains hundreds of students as Project Lead of the Unilag Data Community and is completing a B.Sc. in Computer Science at the University of Lagos.",
  },
];

// Spoken introduction for a host or MC.
export const mcIntro =
  "Our next speaker is Emmanuel Idoko — a software engineer and AI researcher. He's the founder of AidCare, a clinical decision-support platform; an engineer at HabariPay, GTCO's fintech arm; and a published medical-imaging researcher with papers at MICCAI and ICPR. He's also a serial hackathon winner, from HackZurich to GDG Lagos. Please welcome Emmanuel Idoko.";

// Talks he can give now. Abstracts are written to be pasted into a CFP.
export const talkTopics = [
  {
    title: "When Retrieval Makes Medical AI Worse: Hallucination in Vision-Language Models",
    formats: "Talk · 25–45 min",
    level: "Intermediate → Advanced",
    tracks: ["AI", "Research", "Healthcare"],
    abstract:
      "Retrieval-augmented generation is supposed to ground models in evidence. In medical vision-language models it can do the opposite. This talk walks through a study of retrieval-induced hallucination in chest X-ray reporting: 95% of retrieval-augmented reports copied text verbatim from another patient's report (0% without retrieval), and the cause traced to embedding similarity tracking anatomy rather than disease. Retrieval doubled clinical accuracy when the retrieved case was relevant (CheXbert F1 0.201 → 0.402) and collapsed it to 0.043 when it wasn't. We cover the full pipeline — BioMedCLIP retrieval, LLaVA-1.5-7B generation, CheXbert evaluation — plus the patient-level leakage and coincidental-overlap controls that rule out chance, and what this means for anyone deploying RAG in a high-stakes domain.",
    takeaways: [
      "Why similarity search can silently retrieve the wrong patient — and how to detect it",
      "A reproducible evaluation harness for grounding failures in medical VLMs",
      "Concrete gating strategies for when retrieval should be trusted, and when it shouldn't",
    ],
  },
  {
    title: "Clinical Decision Support That Survives Production: Building AidCare",
    formats: "Talk · 30–45 min, or Workshop · 90 min",
    level: "Intermediate",
    tracks: ["AI", "Software", "Healthcare"],
    abstract:
      "AidCare is a clinical decision-support platform built for healthcare settings where specialist knowledge is scarce and infrastructure is unreliable. This is a systems talk about the engineering decisions that weren't obvious: why a dual-mode RAG design with separate knowledge bases for physicians and community health workers; how a Sentence Transformers + FAISS pipeline over 500+ clinical protocols delivers sub-second retrieval; how Whisper ASR and Tesseract OCR turn voice notes and scanned records into queryable context; and how a token-efficient Gemini prompting layer produces grounded differential diagnoses. We close with deployment on a single DigitalOcean box — containerized FastAPI, RBAC, scoped tokens, anonymized logging — and the failure modes we hit along the way.",
    takeaways: [
      "A reference architecture for domain RAG under real infrastructure constraints",
      "How to design ingestion for messy multimodal inputs (voice, scans, PDFs)",
      "Privacy and access-control patterns for clinical data on a small budget",
    ],
  },
  {
    title: "Agentic Systems in Practice: A LangGraph Supervisor over 797 Health Facilities",
    formats: "Talk · 25–40 min",
    level: "Intermediate",
    tracks: ["AI", "Software"],
    abstract:
      "Multi-agent systems are easy to demo and hard to make useful. This talk dissects a platform built for the Virtue Foundation that analyzes 797 healthcare facilities across Ghana's 16 regions: a LangGraph supervisor routes natural-language questions to six specialized sub-agents backed by a FAISS vector store, and an intelligent document-processing pipeline (GPT-4o-mini) extracts structured capability data from unstructured facility records with per-field confidence scores. It surfaced 10 medical deserts and 43 data anomalies — and took 2nd place at the Databricks × Hack-Nation Global AI Hackathon. We focus on routing design, when to split agents versus tools, confidence scoring for extraction, and how to keep an agentic pipeline debuggable.",
    takeaways: [
      "A decision framework for supervisor/sub-agent decomposition",
      "Per-field confidence scoring as a first-class output of LLM extraction",
      "Observability patterns that make agent failures diagnosable, not mysterious",
    ],
  },
  {
    title: "Structure-Aware Denoising for Pediatric Chest X-Rays (SharpXR)",
    formats: "Talk · 20–30 min, or Poster",
    level: "Intermediate → Advanced",
    tracks: ["Research", "AI", "Healthcare"],
    abstract:
      "Pediatric chest X-rays are acquired at low dose, so they're noisy — and denoising that blurs fine structure can hurt the downstream diagnosis it was meant to help. SharpXR, published at the MIRASOL Workshop at MICCAI 2025, benchmarks seven denoising baselines (REDCNN, DnCNN, HFormer, ResUNet++, Attention U-Net, Sharp U-Net, BM3D) and shows that structure-preserving denoising raises downstream pneumonia-classification accuracy from 88.8% to 92.5%. This talk covers the evaluation design — judging denoisers by task performance rather than pixel metrics — the architectural choices that preserve edges, and lessons from presenting the work at MIRG-ICAIR 2025 and the African Computer Vision Summer School.",
    takeaways: [
      "Why task-based evaluation beats PSNR/SSIM for medical image enhancement",
      "Which architectural choices actually preserve diagnostic structure",
      "A practical benchmarking protocol you can reuse on your own modality",
    ],
  },
  {
    title: "Does Enhancement Help? Task-Aware Super-Resolution for Flood Mapping",
    formats: "Talk · 20–30 min",
    level: "Intermediate",
    tracks: ["Research", "AI"],
    abstract:
      "Super-resolution looks better. Does it work better? Built in a three-person team at the ACVSS 2026 research hackathon, this project treats enhancement as an intermediate representation whose value must be proven on a downstream task: a three-phase pipeline (conditioned latent-diffusion SR → flood-aware fine-tuning → U-Net segmentation → per-tile risk ranking) on a SpaceNet-8 subset. Controlled experiments against degraded-LR and bicubic baselines showed diffusion SR improved every downstream metric (mean IoU +24%, flood mIoU +11%) — while an earlier SR run hurt segmentation, isolating semantic fidelity versus hallucinated structure as the condition under which enhancement helps. A talk about experimental discipline as much as about models.",
    takeaways: [
      "How to set up controlled comparisons that isolate what actually helps",
      "When generative enhancement hallucinates structure — and how to catch it",
      "A template for 'does this preprocessing step earn its place?' experiments",
    ],
  },
  {
    title: "Attention Is All You Need — A Walkthrough for New Researchers",
    formats: "Session · 45–60 min, or Workshop",
    level: "Beginner",
    tracks: ["AI", "Research", "Community"],
    abstract:
      "A beginner-friendly walkthrough of the paper that started the Transformer era, built for students and early researchers reading their first landmark paper. We break down self-attention, multi-head attention, and positional encoding with intuitive explanations and small worked examples — and, just as importantly, model how to read a dense ML paper: what to skim, what to slow down on, and how to check your understanding. Previously delivered to a student researchers session; slides available.",
    takeaways: [
      "An intuition for attention that survives contact with the equations",
      "A repeatable method for reading and dissecting ML papers",
      "Confidence to tackle the next paper alone",
    ],
  },
  {
    title: "From Hackathon to Product: What 23+ Hackathons Taught Me About Shipping",
    formats: "Talk · 20–30 min, or Panel",
    level: "All levels",
    tracks: ["Software", "Career", "Community"],
    abstract:
      "Twenty-three-plus hackathons, six wins and podiums across three continents — HackZurich's Hybrid Team Award, GDG Lagos' ₦2M winner-takes-all Amala Hackathon, 1st runner-up among 800+ at HackLab Nigeria, 2nd at the Databricks × Hack-Nation Global AI Hackathon. This talk distills what actually transfers from a 48-hour build to a real product: scoping ruthlessly, choosing the boring stack, demoing the risky part first, and turning judges' questions into a roadmap. Practical, story-driven, and honest about the projects that didn't work.",
    takeaways: [
      "A scoping method that produces a working demo every time",
      "How to pick problems that judges — and users — care about",
      "The path from a weekend prototype to something people rely on",
    ],
  },
];

// Every URL an organizer or form might ask for, as plain text.
export const speakerLinks = [
  { label: "Website", href: "https://pidoxy.com" },
  { label: "Speaker kit", href: "https://pidoxy.com/speaking" },
  { label: "Talks & recordings", href: "https://pidoxy.com/talks" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=hHEK0h0AAAAJ" },
  { label: "GitHub", href: "https://github.com/pidoxy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuelidoko/" },
  { label: "X (Twitter)", href: "https://x.com/pidoxy_" },
  { label: "YouTube", href: "https://www.youtube.com/@pidoxy" },
  { label: "Devpost", href: "https://devpost.com/pidoxy" },
  { label: "Hugging Face", href: "https://huggingface.co/Pidoxy" },
  { label: "Email", href: "mailto:eemmanuel.idoko@gmail.com", text: "eemmanuel.idoko@gmail.com" },
];

// Downloadable assets.
export const headshots = [
  {
    label: "Studio — square",
    note: "1200 × 1200 · JPG · for CFP forms and speaker cards",
    href: "/speaker/headshot-square.jpg",
    aspect: "1 / 1",
  },
  {
    label: "Studio — portrait",
    note: "1066 × 1600 · JPG · for posters and event pages",
    href: "/speaker/headshot-portrait.jpg",
    aspect: "1 / 1",
    fit: "cover",
  },
  {
    label: "Casual — square",
    note: "1200 × 1200 · JPG · relaxed option for community events",
    href: "/speaker/headshot-casual-square.jpg",
    aspect: "1 / 1",
  },
  {
    label: "Casual — portrait",
    note: "1500 × 2000 · JPG · full-length, warm setting",
    href: "/speaker/headshot-casual-portrait.jpg",
    aspect: "1 / 1",
    fit: "cover",
  },
];
