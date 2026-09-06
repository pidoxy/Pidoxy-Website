// Publications. Author order is preserved exactly as supplied; Emmanuel's
// name is emphasized only by the rendering component.
export const publications = [
  {
    title: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography",
    authors:
      "I. Abolade, P. Mireku, K. Chibundu, P. Ododo, E. Idoko, P. Omoigui, S. Odelola",
    venue: "Accepted at the 28th International Conference on Pattern Recognition (ICPR 2026)",
    year: "2026",
    status: "Accepted",
    featured: false,
    links: {
      arxiv: "https://arxiv.org/abs/2604.06583",
      pdf: "https://arxiv.org/pdf/2604.06583",
    },
  },
  {
    title: "SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays",
    authors:
      "I. Abolade, E. Idoko, S. Odelola, P. Omoigui, A. Adebanwo, A. M. Iorumbur, U. Anazodo, A. Crimi, R. Confidence",
    venue: "MIRASOL Workshop, MICCAI 2025, pp. 83–92",
    year: "2025",
    status: "Published",
    featured: true,
    links: {
      arxiv: "https://arxiv.org/abs/2508.08518",
      pdf: "https://arxiv.org/pdf/2508.08518",
      doi: "https://doi.org/10.1007/978-3-032-13654-1_9",
      code: "https://github.com/ileri-oluwa-kiiye/SharpXR",
      announcement: "https://x.com/pidoxy_/status/1956482610974048601",
    },
  },
];

// Dated research activity for the /research page. These are milestones, not
// additional publication records.
export const researchActivity = [
  {
    date: "2026",
    title: "VAMAE accepted at ICPR 2026",
    note: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography was accepted at the 28th International Conference on Pattern Recognition.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2604.06583" }],
  },
  {
    date: "2026",
    title: "African Computer Vision Summer School (ACVSS 2026)",
    note: "Selected as 1 of 31 applicants from 312 for ACVSS 2026 at the Google AI Community Center in Accra, with a full grant.",
    links: [{ label: "About ACVSS", href: "https://www.acvss.ai/" }],
  },
  {
    date: "2025",
    title: "SharpXR published at the MIRASOL Workshop, MICCAI 2025",
    note: "Structure-aware denoising for pediatric chest X-rays, published in the MIRASOL Workshop proceedings.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2508.08518" }],
  },
];
