// Curated content for the home page. Copy is from design/copy-deck.md; facts
// trace to publications.js, projects.js and honors.js.

export const selectedWork = [
  {
    title: "When Retrieval Hurts",
    href: "/research/when-retrieval-hurts",
    image: "/images/research/wrh-illustrative.jpg",
    imageAlt: "Illustrative generated chest X-ray report with one finding copied from a retrieved case",
    status: "Accepted",
    meta: "Africa @ NeurIPS 2026 · 1st author",
    desc: "Retrieval is meant to ground a model. We show when it makes chest X-ray reports worse, and why.",
    more: "Read the paper",
  },
  {
    title: "SharpXR",
    href: "/research/sharpxr",
    image: "/images/research/sharpxr-noisy-vs-sharp.jpg",
    imageAlt: "Noisy pediatric chest X-ray beside the SharpXR denoised output",
    status: "Published",
    meta: "MIRASOL @ MICCAI 2025 · 2nd author",
    desc: "Denoising pediatric X-rays without erasing the structure clinicians read. Left: noisy input. Right: SharpXR.",
    more: "Read the paper",
  },
  {
    title: "VAMAE",
    href: "/research/vamae",
    image: "/images/research/vamae-vessels.jpg",
    imageAlt: "OCT angiography input, vesselness map and vessel skeleton",
    status: "Presented",
    meta: "ICPR 2026, Lyon · 5th author",
    desc: "Teaching masked autoencoders where the vessels are, for OCT angiography.",
    more: "Read the paper",
  },
  {
    title: "AidCare",
    href: "/engineering/aidcare",
    image: "/images/work/aidcare.jpg",
    imageAlt: "AidCare landing page and community health worker home screen",
    status: "Live",
    meta: "Founder & AI/ML Engineer",
    desc: "Clinical decision support for frontline care in Nigeria: triage, referrals and clinician review in five languages.",
    more: "Read the case study",
  },
  {
    title: "Amala Atlas",
    href: "https://www.youtube.com/watch?v=eUpADlc2aVk",
    image: "/images/work/amala-atlas.jpg",
    imageAlt: "Amala Atlas: discover and verify authentic Amala spots",
    meta: "Winner · GDG Lagos ₦2M",
    desc: "A crowdsourced map of authentic Amala spots, kept fresh by an agent that reads food blogs daily.",
    more: "Watch the demo",
    video: true,
  },
  {
    title: "Virtue Foundation Intelligence Platform",
    href: "https://www.youtube.com/watch?v=4w29E3NGFV0",
    image: "/images/work/virtue-foundation.jpg",
    imageAlt: "Command Center map of 797 Ghana healthcare facilities with medical deserts highlighted",
    meta: "MIT Hack-Nation × Databricks · 2nd place",
    desc: "An agentic platform mapping healthcare access across 797 facilities in Ghana, and flagging where care is missing.",
    more: "Watch the demo",
    video: true,
  },
];

export const recognition = [
  { label: "ACVSS 2026", value: "1 / 31", caption: "selected from 312 applicants, full grant" },
  { label: "GDG Lagos · 2025", value: "₦2M", caption: "winner-takes-all hackathon, as team lead for Amala Atlas" },
  { label: "Hackathons", value: "23", caption: "with prizes at GDG Lagos, MIT Hack-Nation, AFRETEC, HackLab and HackZurich" },
  { label: "Scholarships", value: "3", caption: "NHEF · Jim Ovia Foundation · GTCO Squad Hackademy" },
];

export const stage = {
  photo: { src: "/images/talks/nithub-2026.jpg", alt: "Emmanuel teaching at the NITHub AI Literacy Day", caption: "Explaining why AI outputs need verification · NITHub AI Literacy Day, University of Lagos · Sep 2026" },
  stamps: [
    { role: "Speaker", event: "SysConf", date: "Oct 2026" },
    { role: "Facilitator", event: "NITHub", date: "Sep 2026" },
    { role: "Instructor", event: "AI Colony", date: "Jul 2026" },
    { role: "Host", event: "M.A.R.K", date: "May 2026" },
  ],
  latest: { text: "Latest: “From Senses to Systems” at SysConf 2026, recording available.", href: "https://www.youtube.com/watch?v=nDVWoPTkgyU" },
  video: { title: "I spent 2 weeks learning computer vision in Ghana", meta: "Video · ACVSS 2026 · Accra", href: "https://www.youtube.com/watch?v=B3tcyaODznE", image: "/images/talks/acvss-vlog.jpg" },
};
