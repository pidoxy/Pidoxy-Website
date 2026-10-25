// Long-form case studies under /engineering/[slug]. Copy is from
// design/copy-deck.md; numbers are the ones AidCare's own site publishes.
export const caseStudies = {
  aidcare: {
    title: "AidCare",
    headline: "Know how urgent it is, and where to go.",
    lede: "A clinical AI platform for Nigerian frontline care: safer triage, clearer referrals and clinician review for community health workers, with public triage and training for everyone else.",
    status: "Live",
    kicker: "AidCare · Clinical decision support",
    ctas: [
      { label: "Visit aidcare.pidoxy.com", href: "https://aidcare.pidoxy.com", variant: "primary" },
      { label: "Try public triage", href: "https://aidcare.pidoxy.com/triage", variant: "secondary" },
    ],
    details: [
      { k: "Role", v: "Founder & AI/ML Engineer" },
      { k: "Timeline", v: "May 2025 – present" },
      { k: "Live at", v: "aidcare.pidoxy.com" },
      { k: "Languages", v: "English · Hausa · Yoruba · Igbo · Pidgin" },
      { k: "Stack", v: "Next.js · FastAPI · Voice · RBAC" },
    ],
    hero: { src: "/images/work/aidcare.jpg", alt: "AidCare landing page beside the community health worker home screen", caption: "aidcare.pidoxy.com — landing and the community health worker home screen." },
    readouts: [
      { label: "Clinical modes", value: "2", caption: "CHW triage and clinical support" },
      { label: "Languages", value: "5", caption: "English, Hausa, Yoruba, Igbo, Pidgin" },
      { label: "Workflow", value: "NSO", caption: "grounded workflow (as described on the AidCare site)" },
      { label: "Diagnosis claims", value: "0", caption: "decision support, not diagnosis" },
    ],
    sections: [
      { id: "problem", label: "The problem", body: ["Frontline care in Nigeria runs on community health workers and primary health centres, where specialist knowledge is scarce and infrastructure is unreliable. Patients also need to know how urgent a symptom is before they know where to go."] },
      {
        id: "what",
        label: "What it does",
        rows: [
          { t: "CHW triage mode", d: "Guided consultations for community health workers, with cases routed to clinician review." },
          { t: "Clinical support mode", d: "Grounded clinical guidance alongside the clinician workflow." },
          { t: "Public triage + training", d: "Language-aware public triage and a Community Health Challenge for practice." },
        ],
      },
      { id: "decisions", label: "Engineering decisions", body: ["Public triage and clinician workflows sit beside grounded clinical guidance. Language-aware interaction, including voice, changes the product surface. Offline-friendly safety flows shape the interface, and privacy, access control and auditability decide what can safely ship."] },
      { id: "safety", label: "Safety stance", quote: { text: "“It is decision support, not diagnosis.”", source: "From the AidCare product copy" } },
      {
        id: "along",
        label: "Along the way",
        timeline: [
          {
            when: "Jun 2025",
            title: "AFRETEC-UNILAG Innovation-in-Health Challenge 2025",
            detail: "AidCare was presented among the health-innovation projects at the challenge, alongside teams from LAUTECH, UNIBEN, UNIJOS, the University of Ibadan and McPherson University.",
            links: [{ label: "UNILAG News", href: "https://unilag.edu.ng/team-pharmacode-clinches-first-place-at-the-afretec-unilag-innovation-in-health-challenge-2025/" }],
          },
        ],
      },
      { id: "try", label: "Try it", tryIt: { text: "AidCare is live. The public triage flow needs no account.", href: "https://aidcare.pidoxy.com", label: "Open aidcare.pidoxy.com" } },
    ],
    related: { label: "Related talk", title: "Clinical AI That Survives Production", href: "/speaking" },
    next: { title: "Virtue Foundation Intelligence Platform", href: "/engineering#virtue-foundation-intelligence-platform" },
    prev: { title: "Amala Atlas", href: "/engineering#amala-atlas" },
  },
};
