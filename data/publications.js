// Publications. Author strings reflect the true author order — never reorder
// or inflate; Emmanuel's name is bolded at render time only.
// `year` drives the year-grouped list on /research.
export const publications = [
  {
    title: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography",
    authors:
      "I. Abolade, P. Mireku, K. Chibundu, P. Ododo, E. Idoko, P. Omoigui, S. Odelola",
    venue: "ICPR 2026 — 28th Int'l Conference on Pattern Recognition",
    year: "2026",
    status: "Accepted",
    featured: false,
    links: { arxiv: "https://arxiv.org/abs/2604.06583", pdf: "https://arxiv.org/pdf/2604.06583" },
  },
  {
    title: "SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays",
    authors:
      "I. Abolade, E. Idoko, S. Odelola, P. Omoigui, A. Adebanwo, A. M. Iorumbur, U. Anazodo, A. Crimi, R. Confidence",
    venue: "MIRASOL Workshop, MICCAI 2025",
    year: "2025",
    status: "Published · pp. 83–92",
    featured: true,
    links: {
      arxiv: "https://arxiv.org/abs/2508.08518",
      pdf: "https://arxiv.org/pdf/2508.08518",
      doi: "https://doi.org/10.1007/978-3-032-13654-1_9",
      code: "https://github.com/ileri-oluwa-kiiye/SharpXR",
      announcement: "https://x.com/pidoxy_/status/1956482610974048601",
    },
  },
  {
    title: "SharpXR Research Poster Presentation",
    authors: "E. Idoko",
    venue: "MIRG-ICAIR 2025 — Machine Intelligence Research Group Conference",
    year: "2025",
    status: "Poster",
    featured: false,
    links: {},
  },
  {
    title: "Cross-Modality Attention Fusion for Chest X-ray Diagnosis",
    authors: "E. Idoko et al.",
    venue: "Ongoing Research",
    year: "In Progress",
    status: "Working Paper",
    featured: false,
    links: {},
  },
];

// Dated research activity for the /research page (milestones, selections, sessions).
export const researchActivity = [
  {
    date: "2026",
    title: "Selected for the African Computer Vision Summer School (ACVSS 2026)",
    note: "1 of 31 from 312 applicants, with a full grant — intensive lectures, mentoring, and research with 15+ scientists at the Google AI Community Center, Accra.",
    links: [{ label: "About ACVSS", href: "https://www.acvss.ai/" }],
  },
  {
    date: "2026",
    title: "“Attention Is All You Need” — paper walkthrough session",
    note: "A beginner-friendly walkthrough of the Transformer paper for early student researchers — self-attention, multi-head attention, and positional encoding.",
    links: [
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1awchVX5RlsujKO5JHHEd4iUZnAId0WO1yCOBp9OlBU8/edit?usp=sharing",
      },
      { label: "Photos", href: "https://x.com/pidoxy_/status/2017238883054878853" },
    ],
  },
  {
    date: "2025",
    title: "Presented the SharpXR poster at MIRG-ICAIR 2025",
    note: "Presented our pediatric chest X-ray denoising work to researchers at the MIRG-ICAIR conference, University of Lagos.",
    links: [
      { label: "Post", href: "https://x.com/pidoxy_/status/1991873231876395334" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/posts/emmanuelidoko_two-weeks-ago-i-had-the-pleasure-of-presenting-activity-7397637497679167488-rftR",
      },
    ],
  },
  {
    date: "2025",
    title: "SharpXR accepted to the MIRASOL Workshop at MICCAI 2025",
    note: "My first paper — structure-aware denoising for pediatric chest X-rays.",
    links: [{ label: "Announcement", href: "https://x.com/pidoxy_/status/1956482610974048601" }],
  },
];
