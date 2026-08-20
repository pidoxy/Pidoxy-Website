// Speaker dossier — the single source of truth for /speaking.
// Every fact here mirrors the rest of the site (publications, honors,
// experience). Venue wording is deliberate: SharpXR was published at the
// MIRASOL *Workshop* at MICCAI 2025 (never "published at MICCAI");
// retrieval-induced hallucination is *ongoing research* until formally
// published. Keep it that way.

export const speakerProfile = {
  name: "Emmanuel Idoko",
  designation: "Software Engineer, AI Researcher & Technical Speaker",
  designations: [
    { context: "Default", text: "Software Engineer, AI Researcher & Technical Speaker" },
    { context: "Short", text: "AI Engineer & Researcher" },
    { context: "Research events", text: "AI/ML Researcher — Computer Vision, Multimodal Learning & Medical AI" },
    { context: "Engineering conferences", text: "Software Engineer & Applied AI Researcher" },
  ],
  location: "Lagos, Nigeria",
  timezone: "West Africa Time — UTC+1",
  languages: "English",
  availability: [
    "In person — Nigeria; internationally with travel support",
    "Remote — any timezone",
  ],
};

// The hero proposition and supporting copy.
export const heroCopy = {
  proposition: ["Building intelligent systems.", "Studying how they work.", "Sharing what I learn."],
  intro:
    "I'm Emmanuel Idoko — a software engineer, AI researcher, and technical speaker working across computer vision, multimodal AI, reliable AI, production AI systems, healthcare technology, and software engineering.",
  line2:
    "I speak about the systems I build, the research questions behind them, the experiments that fail, and the engineering decisions required to move an AI idea from a notebook into something people can actually use.",
};

// Compact, text-based credibility strip under the hero.
export const credibility = [
  { lead: "SharpXR", rest: "Published — MIRASOL Workshop, MICCAI 2025" },
  { lead: "VAMAE", rest: "Accepted — ICPR 2026" },
  { lead: "ACVSS 2026", rest: "Selected 1 of 31 from 312 — full grant, Accra" },
  { lead: "AidCare", rest: "Founder — clinical decision-support platform" },
  { lead: "HabariPay (GTCO)", rest: "Software engineer — fintech infrastructure" },
];

// Affiliations, grouped so a role is never implied where there is only
// membership. Sourced from data/experience.js.
export const affiliationGroups = [
  {
    label: "Work",
    items: [
      "Founder & AI/ML Engineer — AidCare",
      "Software Engineer — HabariPay (GTCO's fintech subsidiary)",
      "AI/ML Consultant — Consulting Club of Lagos",
    ],
  },
  {
    label: "Research & Community",
    items: [
      "Independent ML Researcher — ML Collective",
      "Project Lead — Unilag Data Community (trained 250+ students)",
    ],
  },
  {
    label: "Education",
    items: ["B.Sc. Computer Science — University of Lagos (in progress)"],
  },
];

// Copyable tagline variants for event sites, programmes, and CFP platforms.
export const taglines = [
  {
    label: "Default",
    text: "Software Engineer & AI Researcher building intelligent systems from research to production.",
  },
  {
    label: "Research",
    text: "Computer Vision & AI Researcher working on multimodal and medical intelligence.",
  },
  {
    label: "Engineering",
    text: "Software Engineer building production AI, retrieval, and agentic systems.",
  },
  {
    label: "Broad",
    text: "Software Engineer, AI Researcher & Builder exploring how intelligent systems work in the real world.",
  },
  { label: "Very short", text: "AI Engineer & Researcher." },
];

// Purpose-built biographies — not one paragraph truncated seven ways.
export const bios = [
  {
    label: "One-line bio",
    words: "≈25 words",
    text: "Emmanuel Idoko is a software engineer and AI researcher working across computer vision, multimodal AI, medical intelligence, agentic systems, and production software engineering.",
  },
  {
    label: "Short bio",
    words: "≈60 words",
    text: "Emmanuel Idoko is a software engineer and AI researcher working across computer vision, multimodal learning, medical AI, agentic systems, and production software engineering. His research includes work published at the MIRASOL Workshop at MICCAI 2025 and accepted at ICPR 2026, while his engineering work spans clinical decision support, retrieval systems, fintech, and intelligent software platforms.",
  },
  {
    label: "Standard speaker bio",
    words: "≈130 words",
    text: "Emmanuel Idoko is a software engineer, AI researcher, and technical speaker whose work spans computer vision, multimodal learning, medical AI, agentic systems, and production software engineering.\n\nHis research includes SharpXR, a structure-aware approach to pediatric chest X-ray denoising published at the MIRASOL Workshop at MICCAI 2025; VAMAE, vessel-aware masked autoencoders for OCT angiography accepted at ICPR 2026; and ongoing work investigating how retrieval can introduce hallucination into medical vision-language systems.\n\nAlongside his research, Emmanuel builds applied AI systems. He founded AidCare, a clinical decision-support platform combining retrieval, multimodal document ingestion, and AI-assisted reasoning, and works as a software engineer at HabariPay, GTCO's fintech subsidiary.\n\nHe regularly teaches, presents research, moderates technical discussions, and speaks with engineering and student communities about AI, computer vision, software systems, research, and building technology that survives beyond the demo.",
  },
  {
    label: "Extended bio",
    words: "≈240 words",
    text: "Emmanuel Idoko is a software engineer, AI researcher, builder, and technical speaker interested in a central question: how do we build intelligent systems that remain useful, reliable, and grounded when they encounter the complexity of the real world? His work spans computer vision, multimodal learning, medical artificial intelligence, retrieval-augmented systems, agentic AI, and production software engineering.\n\nAs a researcher, Emmanuel has contributed to work in medical imaging and representation learning. He co-authored SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays, published at the MIRASOL Workshop at MICCAI 2025, exploring how image enhancement can preserve clinically meaningful structure rather than optimizing perceptual quality alone. He also contributed to VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography, accepted at ICPR 2026, and is leading ongoing research investigating retrieval-induced hallucination in medical vision-language models. In 2026, he was selected as one of 31 participants from 312 applicants for the African Computer Vision Summer School at the Google AI Community Center in Accra.\n\nHis engineering work is similarly interdisciplinary. Emmanuel founded AidCare, a clinical decision-support platform for healthcare environments where specialist knowledge may be limited, and works as a software engineer at HabariPay, GTCO's fintech subsidiary, having previously built AI and data systems in banking, cloud engineering, and information retrieval.\n\nBeyond research and product development, Emmanuel teaches AI and machine-learning concepts, presents research, facilitates paper-reading sessions, moderates technical conversations, and works with student and developer communities. His talks sit at the intersection of research insight and engineering reality: not just how a model works, but why it fails, how it is evaluated, and what happens when it meets production constraints.",
  },
  {
    label: "Research / academic bio",
    words: "≈110 words",
    context: "Research conferences, universities, labs, seminars",
    text: "Emmanuel Idoko is an AI and computer-vision researcher completing a B.Sc. in Computer Science at the University of Lagos. His interests include medical imaging, multimodal learning, self-supervised representation learning, vision-language models, and reliable clinical AI.\n\nHe is a co-author of SharpXR, published at the MIRASOL Workshop at MICCAI 2025, and VAMAE, accepted at ICPR 2026. His ongoing research investigates retrieval-induced hallucination and grounding failures in medical vision-language systems.\n\nHe was selected for the African Computer Vision Summer School 2026, where he presented his work and participated in advanced computer-vision research. Alongside research, he works as a software engineer and builds applied AI systems, giving him a particular interest in connecting experimental research with deployment and real-world evaluation.",
  },
  {
    label: "Developer / engineering bio",
    words: "≈100 words",
    context: "Developer conferences, engineering communities",
    text: "Emmanuel Idoko is a software engineer and AI researcher who builds systems across applied AI, retrieval, agentic architectures, computer vision, backend engineering, and cloud infrastructure.\n\nHis work ranges from clinical decision-support systems and multi-agent healthcare intelligence platforms to information-retrieval systems, fintech infrastructure, multimodal ingestion pipelines, and computer-vision applications. He is particularly interested in what happens between an impressive AI prototype and a dependable production system: architecture, evaluation, observability, retrieval quality, failure modes, data pipelines, deployment constraints, and responsible use.\n\nHis research has appeared at MICCAI-affiliated venues and ICPR, giving his technical talks a perspective that bridges contemporary AI research with practical software engineering.",
  },
  {
    label: "Student / community bio",
    words: "≈120 words",
    context: "University groups, student conferences, hackathons",
    text: "Emmanuel Idoko is a software engineer, AI researcher, and technical community leader who enjoys helping students move from learning technology to building, researching, and contributing with it.\n\nHe began building competitively through hackathons and has since worked across software engineering, banking, fintech, cloud systems, computer vision, and artificial intelligence while pursuing research in medical imaging and multimodal AI. His work has been published or accepted at venues connected to MICCAI and ICPR, and he has participated in more than twenty hackathons, research programmes, technical communities, and engineering projects.\n\nHis student-focused sessions are practical and experience-driven: getting started with AI research, reading technical papers, learning engineering through projects, building strong hackathon teams, finding technical opportunities, and developing from an undergraduate learner into an engineer and researcher.",
  },
];

// Spoken introductions — written to sound natural aloud.
export const mcIntros = [
  {
    label: "Standard MC introduction",
    words: "≈85 words",
    text: "Our next speaker is Emmanuel Idoko, a software engineer and AI researcher working across computer vision, multimodal AI, medical intelligence, and production software systems.\n\nHis research includes work published at the MICCAI 2025 MIRASOL Workshop and accepted at ICPR 2026, and he is the founder of AidCare, a clinical AI platform. He also works as a software engineer at HabariPay, GTCO's fintech subsidiary.\n\nHis work combines research with building real systems, and today he'll be sharing some of the lessons from that intersection. Please welcome Emmanuel Idoko.",
  },
  {
    label: "15-second MC introduction",
    words: "≈45 words",
    text: "Emmanuel Idoko is a software engineer and AI researcher working across computer vision, medical AI, multimodal systems, and production engineering. His work has appeared at MICCAI-affiliated venues and ICPR, and he is the founder of clinical AI platform AidCare. Please welcome Emmanuel Idoko.",
  },
];

// Speaker territories — the intellectual ground the talks come from.
export const territories = [
  {
    title: "Computer Vision & Multimodal AI",
    lede: "Research and engineering around how machines perceive, represent, retrieve, and reason over visual information.",
    topics: [
      "Vision-language models",
      "Multimodal learning",
      "Medical image analysis",
      "Self-supervised learning",
      "Representation learning",
      "Image enhancement & super-resolution",
      "Visual grounding",
      "Generative vision",
      "Evaluation beyond image-quality metrics",
    ],
  },
  {
    title: "Reliable AI & Model Failure",
    lede: "AI systems often look impressive until they meet the conditions under which they will actually be used.",
    topics: [
      "Hallucination & grounding failures",
      "Retrieval-induced failure in RAG",
      "Evaluating generative AI",
      "Semantic similarity vs. actual relevance",
      "Failure analysis",
      "Data leakage",
      "High-stakes AI evaluation",
      "When more context makes a model worse",
      "Safeguards around imperfect models",
    ],
  },
  {
    title: "AI Systems & Production Engineering",
    lede: "What it takes to turn an AI experiment into software people can depend on.",
    topics: [
      "Production RAG architectures",
      "Agentic systems & orchestration",
      "Retrieval infrastructure & vector search",
      "Document ingestion",
      "Speech & multimodal pipelines",
      "Backend architecture for AI",
      "Observability & evaluation",
      "Cloud deployment",
      "Architecture under resource constraints",
    ],
  },
  {
    title: "AI for Healthcare",
    lede: "Healthcare sets the hardest requirements: imperfect data, limited resources, high consequences, and a need for trustworthy outputs.",
    topics: [
      "Clinical decision support",
      "Medical vision-language models",
      "Medical imaging",
      "Healthcare retrieval systems",
      "AI for resource-constrained health systems",
      "Multimodal clinical interfaces",
      "Responsible clinical deployment",
      "Workflow-aware AI design",
    ],
  },
  {
    title: "From Research Paper to Real System",
    lede: "Research and engineering are often treated as separate worlds. My work sits deliberately between them.",
    topics: [
      "Translating papers into implementations",
      "Designing reproducible experiments",
      "Reading research critically",
      "Benchmarking correctly",
      "Prototype to production",
      "Knowing when an improvement is meaningful",
      "Downstream-task-aware evaluation",
    ],
  },
  {
    title: "Building, Hackathons & Engineering Under Pressure",
    lede: "More than twenty hackathons have been an unusual laboratory for product development.",
    topics: [
      "Scoping ambitious ideas under time pressure",
      "Technical decision-making in competition",
      "Building effective engineering teams",
      "Designing compelling demos",
      "Turning prototypes into products",
      "Learning rapidly through competitive building",
      "Choosing what not to build",
    ],
  },
  {
    title: "Becoming a Researcher While Still a Student",
    lede: "A practical conversation for students trying to move beyond coursework into meaningful technical work.",
    topics: [
      "Finding a research direction",
      "Reading your first papers",
      "Working with collaborators",
      "Reproducing papers",
      "Designing experiments",
      "Finding mentors",
      "Building a research portfolio",
      "Combining engineering and research",
      "Learning publicly",
    ],
  },
];

// Signature talks — established sessions, each adaptable by audience, depth,
// format, and duration. Every quantitative claim is sourced from site data.
export const speakerTalks = [
  {
    category: "Reliable AI",
    title: "When Retrieval Makes AI Worse",
    hook: "How retrieval-augmented systems fail, why semantic similarity is not the same thing as relevance, and what our experiments with medical vision-language models reveal about designing safer RAG systems.",
    abstract:
      "Retrieval-augmented generation is supposed to ground models in evidence. In medical vision-language models it can do the opposite. This talk walks through ongoing research on retrieval-induced hallucination in chest X-ray reporting: 95% of retrieval-augmented reports copied text verbatim from another patient's report (0% without retrieval), and the cause traced to embedding similarity tracking anatomy rather than disease. Retrieval doubled clinical accuracy when the retrieved case was relevant (CheXbert F1 0.201 → 0.402) and collapsed it to 0.043 when it wasn't. We cover the full pipeline — BioMedCLIP retrieval, LLaVA-1.5-7B generation, CheXbert evaluation — plus the patient-level leakage and coincidental-overlap controls that rule out chance, and what this means for anyone deploying RAG in a high-stakes domain.",
    audience: "ML engineers, AI researchers, teams shipping RAG in high-stakes domains",
    level: "Intermediate → Advanced",
    formats: "Conference talk · Research presentation",
    duration: "25–45 min",
    tracks: ["AI", "Research", "Healthcare"],
    takeaways: [
      "Why similarity search can silently retrieve the wrong evidence — and how to detect it",
      "A reproducible evaluation harness for grounding failures in medical VLMs",
      "Concrete gating strategies for when retrieval should be trusted, and when it shouldn't",
    ],
    related: { label: "Related research", href: "/research" },
  },
  {
    category: "AI Systems",
    title: "Clinical AI That Survives Production",
    hook: "The architecture, compromises, retrieval design, multimodal ingestion, privacy considerations, and deployment lessons behind building AidCare.",
    abstract:
      "AidCare is a clinical decision-support platform built for healthcare settings where specialist knowledge is scarce and infrastructure is unreliable. This is a systems talk about the engineering decisions that weren't obvious: why a dual-mode RAG design with separate knowledge bases for physicians and community health workers; how a Sentence Transformers + FAISS pipeline over 500+ clinical protocols delivers sub-second retrieval; how Whisper ASR and Tesseract OCR turn voice notes and scanned records into queryable context; and how a token-efficient Gemini prompting layer produces grounded differential diagnoses. We close with deployment on a single DigitalOcean box — containerized FastAPI, RBAC, scoped tokens, anonymized logging — and the failure modes we hit along the way.",
    audience: "Software engineers, AI product teams, health-tech builders",
    level: "Intermediate",
    formats: "Conference talk · Workshop",
    duration: "30–45 min · 90-min workshop",
    tracks: ["AI", "Software", "Healthcare"],
    takeaways: [
      "A reference architecture for domain RAG under real infrastructure constraints",
      "How to design ingestion for messy multimodal inputs (voice, scans, PDFs)",
      "Privacy and access-control patterns for clinical data on a small budget",
    ],
    related: { label: "About AidCare", href: "/engineering" },
  },
  {
    category: "Agentic AI",
    title: "Beyond the Multi-Agent Demo",
    hook: "What building an agentic intelligence platform over hundreds of healthcare facilities taught us about supervisors, routing, tool boundaries, confidence, and observability.",
    abstract:
      "Multi-agent systems are easy to demo and hard to make useful. This talk dissects a platform built for the Virtue Foundation that analyzes 797 healthcare facilities across Ghana's 16 regions: a LangGraph supervisor routes natural-language questions to six specialized sub-agents backed by a FAISS vector store, and an intelligent document-processing pipeline (GPT-4o-mini) extracts structured capability data from unstructured facility records with per-field confidence scores. It surfaced 10 medical deserts and 43 data anomalies — and took 2nd place at the Databricks × Hack-Nation Global AI Hackathon. We focus on routing design, when to split agents versus tools, confidence scoring for extraction, and how to keep an agentic pipeline debuggable.",
    audience: "Engineers building agent systems, AI platform teams",
    level: "Intermediate",
    formats: "Conference talk",
    duration: "25–40 min",
    tracks: ["AI", "Software"],
    takeaways: [
      "A decision framework for supervisor/sub-agent decomposition",
      "Per-field confidence scoring as a first-class output of LLM extraction",
      "Observability patterns that make agent failures diagnosable, not mysterious",
    ],
    related: { label: "Project details", href: "/engineering" },
  },
  {
    category: "Computer Vision",
    title: "Does Better-Looking Imagery Produce Better Models?",
    hook: "A task-aware investigation of super-resolution, hallucinated structure, and downstream flood segmentation.",
    abstract:
      "Super-resolution looks better. Does it work better? Built in a three-person team at the ACVSS 2026 research hackathon, this project treats enhancement as an intermediate representation whose value must be proven on a downstream task: a three-phase pipeline (conditioned latent-diffusion SR → flood-aware fine-tuning → U-Net segmentation → per-tile risk ranking) on a SpaceNet-8 subset. Controlled experiments against degraded-LR and bicubic baselines showed diffusion SR improved every downstream metric (mean IoU +24%, flood mIoU +11%) — while an earlier SR run hurt segmentation, isolating semantic fidelity versus hallucinated structure as the condition under which enhancement helps. A talk about experimental discipline as much as about models.",
    audience: "Computer-vision researchers, ML engineers, data scientists",
    level: "Intermediate",
    formats: "Conference talk · Research presentation",
    duration: "20–30 min",
    tracks: ["Research", "AI"],
    takeaways: [
      "How to set up controlled comparisons that isolate what actually helps",
      "When generative enhancement hallucinates structure — and how to catch it",
      "A template for “does this preprocessing step earn its place?” experiments",
    ],
    related: { label: "Related research", href: "/research" },
  },
  {
    category: "Medical Imaging",
    title: "Preserving What Matters: Structure-Aware Medical Image Enhancement",
    hook: "Lessons from SharpXR on evaluating image enhancement by the downstream clinical task rather than visual quality alone.",
    abstract:
      "Pediatric chest X-rays are acquired at low dose, so they're noisy — and denoising that blurs fine structure can hurt the downstream diagnosis it was meant to help. SharpXR, published at the MIRASOL Workshop at MICCAI 2025, benchmarks seven denoising baselines (REDCNN, DnCNN, HFormer, ResUNet++, Attention U-Net, Sharp U-Net, BM3D) and shows that structure-preserving denoising raises downstream pneumonia-classification accuracy from 88.8% to 92.5%. This talk covers the evaluation design — judging denoisers by task performance rather than pixel metrics — the architectural choices that preserve edges, and lessons from presenting the work at MIRG-ICAIR 2025 and the African Computer Vision Summer School.",
    audience: "Medical-imaging researchers, ML engineers, health-tech teams",
    level: "Intermediate → Advanced",
    formats: "Conference talk · Poster · Research presentation",
    duration: "20–30 min",
    tracks: ["Research", "AI", "Healthcare"],
    takeaways: [
      "Why task-based evaluation beats PSNR/SSIM for medical image enhancement",
      "Which architectural choices actually preserve diagnostic structure",
      "A practical benchmarking protocol you can reuse on your own modality",
    ],
    related: { label: "Read the paper", href: "/research" },
  },
  {
    category: "Research Education",
    title: "Reading “Attention Is All You Need” Like a Researcher",
    hook: "An accessible but technically grounded walkthrough of Transformers — and a framework for learning how to read difficult machine-learning papers.",
    abstract:
      "A walkthrough of the paper that started the Transformer era, built for students and early researchers reading their first landmark paper. We break down self-attention, multi-head attention, and positional encoding with intuitive explanations and small worked examples — and, just as importantly, model how to read a dense ML paper: what to skim, what to slow down on, which assumptions to question, and how to check your understanding. Previously delivered to a student researchers session; slides available.",
    audience: "Students, early researchers, developers new to ML",
    level: "Introductory",
    formats: "Session · Workshop · Guest lecture",
    duration: "45–60 min",
    tracks: ["AI", "Research", "Community"],
    takeaways: [
      "An intuition for attention that survives contact with the equations",
      "A repeatable method for reading and dissecting ML papers",
      "Confidence to tackle the next paper alone",
    ],
    related: { label: "Session details", href: "/talks" },
  },
  {
    category: "Building",
    title: "What 20+ Hackathons Taught Me About Shipping Software",
    hook: "How short deadlines expose engineering priorities: scope, risk, architecture, teamwork, storytelling, and the difference between an idea and a working product.",
    abstract:
      "Twenty-plus hackathons with wins and podiums on three continents — HackZurich's Hybrid Team Award, GDG Lagos' ₦2M winner-takes-all Amala Hackathon, 1st runner-up among 800+ at HackLab Nigeria, 2nd at the Databricks × Hack-Nation Global AI Hackathon. This talk distills what actually transfers from a 48-hour build to a real product: scoping ruthlessly, choosing the boring stack, demoing the risky part first, and turning judges' questions into a roadmap. Practical, story-driven, and honest about the projects that didn't work.",
    audience: "Developers, students, startup and community audiences",
    level: "All levels",
    formats: "Conference talk · Panel · Community session",
    duration: "20–30 min",
    tracks: ["Software", "Career", "Community"],
    takeaways: [
      "A scoping method that produces a working demo every time",
      "How to pick problems that judges — and users — care about",
      "The path from a weekend prototype to something people rely on",
    ],
    related: { label: "Hackathon record", href: "/awards" },
  },
];

// Audiences — not every session fits every group; talks list their own.
export const audiences = [
  "Software engineers",
  "Machine-learning engineers",
  "AI researchers",
  "Computer-vision researchers",
  "Data scientists",
  "Health-tech teams",
  "Product & engineering organizations adopting AI",
  "University researchers",
  "Undergraduate & graduate students",
  "Developer communities",
  "Startup & innovation communities",
  "Technical leadership programmes",
];

export const formats = [
  "Conference talk",
  "Keynote / featured session — enquiries welcome",
  "Technical workshop",
  "Research presentation",
  "University seminar / guest lecture",
  "Paper walkthrough",
  "Technical or industry panel",
  "Fireside chat",
  "Podcast / interview",
  "Moderation",
  "Hackathon or developer-community session",
];

export const durations = [
  { label: "Lightning", value: "10–15 min" },
  { label: "Conference", value: "20–45 min" },
  { label: "Deep dive", value: "45–60 min" },
  { label: "Workshop", value: "90 min +" },
];

// For academic forms and technical programmes.
export const researchAreas =
  "Computer Vision · Multimodal Learning · Vision-Language Models · Medical Imaging · Self-Supervised Learning · Representation Learning · Retrieval-Augmented AI · Reliable AI · Clinical AI";

// For developer conferences.
export const engineeringAreas =
  "Applied AI · Agentic Systems · RAG · Information Retrieval · Backend Engineering · AI Infrastructure · Computer Vision · LLM Applications · Cloud Systems · Healthcare Technology · Fintech";

// Downloadable headshot assets.
export const headshots = [
  {
    label: "Studio — square",
    note: "1200 × 1200 · JPG",
    bestFor: "Conference sites, speaker cards, CFP platforms, badges",
    href: "/speaker/emmanuel-idoko-headshot-square.jpg",
  },
  {
    label: "Studio — portrait",
    note: "1066 × 1600 · JPG",
    bestFor: "Posters, programmes, banners, editorial profiles",
    href: "/speaker/emmanuel-idoko-headshot-portrait.jpg",
  },
  {
    label: "Casual — square",
    note: "1200 × 1200 · JPG",
    bestFor: "Community events, podcasts, meetups, interviews",
    href: "/speaker/emmanuel-idoko-headshot-casual-square.jpg",
  },
  {
    label: "Casual — portrait",
    note: "1500 × 2000 · JPG",
    bestFor: "Less formal promotional materials",
    href: "/speaker/emmanuel-idoko-headshot-casual-portrait.jpg",
  },
];

export const headshotUsageNote =
  "Cropping is permitted. Please avoid heavy filters, recolouring, stretching, or modifying facial features.";

// Every URL an organizer or CFP form might ask for.
export const speakerLinks = [
  { label: "Website", href: "https://pidoxy.com" },
  { label: "Speaker kit", href: "https://pidoxy.com/speaking" },
  { label: "Research & publications", href: "https://pidoxy.com/research" },
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

// Why invite Emmanuel — evidence-led, audience-aware.
export const whyInvite = [
  "I bring a perspective that sits between several communities that do not always speak enough to one another: research and engineering, models and systems, theory and deployment, students and practitioners.",
  "My talks are built from work I have personally researched, implemented, tested, presented, or deployed. That means I can explain not only what worked, but also what failed, what surprised us, what the metrics initially hid, and what I would build differently the next time.",
  "For highly technical audiences, I can go deep into model architecture, experimental design, retrieval, evaluation, computer vision, and AI systems. For broader developer audiences, I focus on architecture, engineering decisions, production constraints, debugging, and practical mental models. For student audiences, I make the same ideas accessible without stripping away the technical substance.",
];

// What organizers should include in an invitation.
export const invitationChecklist = [
  "Event name",
  "Audience",
  "Proposed topic",
  "Date",
  "Format",
  "Location",
  "Expected technical depth",
];
