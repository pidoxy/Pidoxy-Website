// Publications. Author order is preserved exactly as supplied; Emmanuel's
// name is emphasized only by the rendering component.
export const publications = [
  {
    title: "When Retrieval Hurts: Measuring and Explaining Retrieval-Induced Hallucination in Chest X-ray Report Generation",
    authors: "E. Idoko, A. Olabisi, S. Oni, A. Josiah",
    venue: "Africa at NeurIPS 2026",
    year: "2026",
    status: "Accepted",
    featured: false,
    slug: "when-retrieval-hurts",
    overview: [
      "Retrieval-augmented generation is supposed to ground a model in evidence. This first-author paper measures when it does the opposite in chest X-ray report generation, and explains why.",
    ],
    problem: "A retrieved case can look similar for the wrong reasons. When it does, its findings leak into a report for a different patient.",
    controls: "Patient-level leakage and coincidental-overlap controls rule out chance as the explanation.",
    relatedTalk: { title: "When Retrieval Makes AI Worse", href: "/speaking" },
    extraLinks: [{ label: "OpenReview", href: "https://openreview.net/forum?id=oNbPPMFIRu" }],
    position: "1st author",
    plain: "When does retrieval make a radiology report worse? We measure it, and trace the cause.",
    figure: { src: "/images/research/wrh-illustrative.jpg", alt: "Illustrative generated chest X-ray report with one finding copied from a retrieved case", note: "Illustrative, not a figure from the paper" },
    findings: [
      { label: "Verbatim copying", value: "95%", caption: "of retrieval-augmented reports copied text from another patient (0% without retrieval)" },
      { label: "Relevant retrieval", value: "0.201 → 0.402", caption: "CheXbert F1 doubles when the retrieved case matches" },
      { label: "Irrelevant retrieval", value: "0.043", caption: "CheXbert F1 collapses when it does not" },
      { label: "Root cause", value: "Anatomy ≠ disease", caption: "embedding similarity tracks anatomy rather than pathology" },
    ],
    method: ["BioMedCLIP retrieval", "LLaVA-1.5-7B generation", "CheXbert evaluation"],
    note: "First-author work measuring and explaining how retrieved evidence can introduce unsupported findings into chest X-ray report generation. Preprint available on arXiv.",
    links: {
      arxiv: "https://arxiv.org/abs/2609.31733",
      pdf: "https://arxiv.org/pdf/2609.31733",
    },
  },
  {
    title: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography",
    authors:
      "I. Abolade, P. Mireku, K. Chibundu, P. Ododo, E. Idoko, P. Omoigui, S. Odelola",
    venue: "28th International Conference on Pattern Recognition (ICPR 2026)",
    year: "2026",
    status: "Presented",
    featured: false,
    slug: "vamae",
    overview: [
      "VAMAE adapts masked-autoencoder pre-training to OCT angiography by telling the model where the vessels are. Vesselness maps, binary vessel maps and vessel skeletons are turned into patch-wise structural priors (vessel density and skeleton presence per patch) that guide pre-training.",
      "It was presented in the official P3 poster session at the 28th International Conference on Pattern Recognition in Lyon, France.",
    ],
    method: ["Vesselness map", "Binary vessel map", "Vessel skeleton", "Patch-wise priors"],
    position: "5th author",
    plain: "Teaching masked autoencoders where the vessels are: vesselness and skeleton priors guide pre-training for OCT angiography.",
    figure: { src: "/images/research/vamae-vessels.jpg", alt: "OCT angiography input, vesselness map and vessel skeleton", note: "From the paper, arXiv 2604.06583" },
    note: "Presented in the official P3 poster session in Lyon, France; the poster presentation certificate is available directly from this page.",
    links: {
      arxiv: "https://arxiv.org/abs/2604.06583",
      pdf: "https://arxiv.org/pdf/2604.06583",
      certificate: "/documents/icpr-2026-vamae-poster-presentation-certificate.pdf",
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
    slug: "sharpxr",
    overview: [
      "Pediatric chest X-rays are acquired at low dose, so they are noisy, and denoising that blurs fine structure can hurt the downstream diagnosis it was meant to help.",
      "SharpXR is a structure-aware dual-decoder approach, benchmarked against seven denoising baselines and judged by downstream pneumonia classification rather than pixel metrics alone. It was presented as a poster at MIRG-ICAIR 2025 and at the African Computer Vision Summer School.",
    ],
    relatedTalk: { title: "Preserving What Matters: Structure-Aware Medical Image Enhancement", href: "/speaking" },
    position: "2nd author",
    plain: "Structure-preserving denoising that lifts downstream pneumonia classification from 88.8% to 92.5%.",
    figure: { src: "/images/research/sharpxr-noisy-vs-sharp.jpg", alt: "Noisy pediatric chest X-ray beside the SharpXR denoised output", note: "Left: noisy input. Right: SharpXR. From the paper, arXiv 2508.08518" },
    findings: [
      { label: "Pneumonia accuracy", value: "88.8 → 92.5%", caption: "downstream classification" },
      { label: "Baselines", value: "7", caption: "REDCNN, DnCNN, HFormer, ResUNet++, Attention U-Net, Sharp U-Net, BM3D" },
    ],
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
    date: "Oct 2026",
    title: "When Retrieval Hurts accepted at Africa at NeurIPS 2026",
    note: "Our paper on retrieval-induced hallucination in chest X-ray report generation was accepted at Africa at NeurIPS 2026.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2609.31733" },
      { label: "OpenReview", href: "https://openreview.net/forum?id=oNbPPMFIRu" },
    ],
  },
  {
    date: "2026",
    title: "Invited reviewer - MIRASOL Workshop, MICCAI 2026",
    note: "Invited to review paper submissions for the MIRASOL Workshop at MICCAI 2026, contributing peer-review expertise in medical imaging and AI.",
    links: [],
  },
  {
    date: "Aug 2026",
    title: "VAMAE poster presentation at ICPR 2026",
    note: "Co-authored VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography was presented in the official P3 poster session at the 28th International Conference on Pattern Recognition in Lyon, France.",
    links: [
      { label: "Poster presentation certificate", href: "/documents/icpr-2026-vamae-poster-presentation-certificate.pdf" },
      { label: "arXiv", href: "https://arxiv.org/abs/2604.06583" },
    ],
  },
  {
    date: "Aug 2026",
    title: "IMAGINE 2026 - Imaging Without Borders MRI Build Lab",
    note: "Completed CAMERA MRI Africa and MAI Lab's IMAGINE training as part of the Lagos cohort. The cohort's onsite Build Lab assembled a low-field MRI scanner and a robotic field-mapping system in Nigeria, leading to a preliminary report accepted for poster presentation at ESMRMB Congress 2026.",
    links: [
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7507753718310793216/",
      },
    ],
  },
  {
    date: "2026",
    title: "VAMAE accepted at ICPR 2026",
    note: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography was accepted at the 28th International Conference on Pattern Recognition.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2604.06583" }],
  },
  {
    date: "2026",
    title: "African Computer Vision Summer School (ACVSS 2026)",
    note: "Selected as 1 of 31 from 312 applicants for ACVSS 2026 at the Google AI Community Center in Accra, with a full grant. Presented the SharpXR poster and built a task-aware super-resolution pipeline for flood mapping in the research hackathon.",
    links: [{ label: "About ACVSS", href: "https://www.acvss.ai/" }],
  },
  {
    date: "2025",
    title: "SharpXR published at the MIRASOL Workshop, MICCAI 2025",
    note: "Structure-aware denoising for pediatric chest X-rays, published in the MIRASOL Workshop proceedings.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2508.08518" }],
  },
];

// Work in progress and open artefacts for the Research page.
export const openWork = [
  {
    status: "In progress",
    meta: "ACVSS 2026 hackathon",
    title: "RadWatch",
    summary: "Progression-aware chest X-ray triage: given a prior and a current scan, is the patient improved, stable or worse? Radiologists read change over time; most models don't.",
    links: [{ label: "Code", href: "https://github.com/pidoxy/RadWatch" }],
  },
  {
    status: "Live",
    meta: "Hugging Face dataset",
    title: "Blind Spots of Frontier Models",
    summary: "A public dataset documenting the blind spots of frontier models.",
    links: [{ label: "Dataset", href: "https://huggingface.co/datasets/Pidoxy/Blind_Spots_of_Frontier_Models" }],
  },
  {
    status: "Live",
    meta: "Open baseline",
    title: "RGCA",
    summary: "The retrieval-augmented report-generation baseline behind When Retrieval Hurts: no retrieval, retrieval and mismatched retrieval, side by side.",
    links: [{ label: "Code", href: "https://github.com/pidoxy/RGCA" }],
  },
];
