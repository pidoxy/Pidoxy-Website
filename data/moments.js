// "Moments" — event stories that pair a write-up with photos. Photos attach to
// a moment when their Cloudinary folder (or filename prefix) matches the slug,
// e.g. photos in folder "portfolio/mark-internship-2026/…". Order controls
// display order (top = first). Add a moment by adding an entry here + photos.
export const moments = [
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
