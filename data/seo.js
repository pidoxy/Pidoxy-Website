import { profile } from "./profile";

export const personId = `${profile.siteUrl}/#emmanuel-idoko`;
export const websiteId = `${profile.siteUrl}/#website`;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Emmanuel Idoko",
  givenName: "Emmanuel",
  familyName: "Idoko",
  alternateName: ["Pidoxy"],
  url: profile.siteUrl,
  image: [
    `${profile.siteUrl}/portrait.jpg`,
    `${profile.siteUrl}/speaker/emmanuel-idoko-headshot-square.jpg`,
    `${profile.siteUrl}/og.png`,
  ],
  jobTitle: ["Software Engineer", "AI/ML Engineer", "AI Researcher"],
  description:
    "Emmanuel Idoko is a software engineer, AI/ML engineer, and researcher in Lagos, Nigeria, working across clinical AI, medical imaging, computer vision, RAG, and agentic systems.",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Lagos",
    sameAs: "https://unilag.edu.ng/",
  },
  worksFor: [
    { "@type": "Organization", name: "HabariPay" },
    { "@type": "Organization", name: "AidCare" },
    { "@type": "Organization", name: "ML Collective" },
  ],
  affiliation: [
    { "@type": "CollegeOrUniversity", name: "University of Lagos" },
    { "@type": "Organization", name: "HabariPay" },
    { "@type": "Organization", name: "AidCare" },
    { "@type": "Organization", name: "ML Collective" },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Medical Imaging",
    "Clinical AI",
    "Computer Vision",
    "Self-Supervised Learning",
    "Vision-Language Models",
    "Retrieval-Augmented Generation",
    "Agentic Systems",
    "Full-Stack Engineering",
    "Software Engineering",
  ],
  award: [
    "Nigerian Higher Education Foundation Scholar",
    "African Computer Vision Summer School full grant recipient",
    "Hacknation Databricks Challenge Award",
    "GDG Lagos hackathon winner",
  ],
  sameAs: [
    profile.github,
    profile.linkedin,
    profile.twitter,
    profile.devpost,
    profile.youtube,
    profile.huggingface,
    profile.scholar,
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: "Emmanuel Idoko",
  alternateName: ["Pidoxy", "Emmanuel Idoko Portfolio"],
  url: profile.siteUrl,
  inLanguage: "en",
  publisher: { "@id": personId },
  author: { "@id": personId },
  description:
    "Official website of Emmanuel Idoko, a software engineer, AI/ML engineer, and researcher working across clinical AI, medical imaging, computer vision, RAG, and agentic systems.",
};

export const profilePageJsonLd = (path, name, description) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${profile.siteUrl}${path}#profile-page`,
  name,
  description,
  url: `${profile.siteUrl}${path}`,
  mainEntity: { "@id": personId },
  isPartOf: { "@id": websiteId },
});
