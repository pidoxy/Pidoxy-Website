import { profile } from "./profile.js";
import { experience } from "./experience.js";
import { honors } from "./honors.js";

export const personId = `${profile.siteUrl}/#emmanuel-idoko`;
export const websiteId = `${profile.siteUrl}/#website`;

const currentOrgs = experience
  .filter((e) => /present/i.test(e.period))
  .map((e) => e.org.replace(/\s*[–-]\s*GTCO$/, " (GTCO)"));

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Emmanuel Idoko",
  givenName: "Emmanuel",
  familyName: "Idoko",
  alternateName: ["Pidoxy", "Idoko, Emmanuel", "Emmanuel Idoko (Pidoxy)"],
  url: profile.siteUrl,
  image: [
    `${profile.siteUrl}/portrait.jpg`,
    `${profile.siteUrl}/speaker/emmanuel-idoko-headshot-square.jpg`,
    `${profile.siteUrl}/og.png`,
  ],
  jobTitle: ["Software Engineer", "AI Researcher", "Founder of AidCare"],
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
  // Current roles and top honours come from the same data the pages render,
  // so search engines never see a stale résumé.
  worksFor: currentOrgs.map((name) => ({ "@type": "Organization", name })),
  affiliation: [{ "@type": "CollegeOrUniversity", name: "University of Lagos" }, ...currentOrgs.map((name) => ({ "@type": "Organization", name }))],
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
  award: honors.slice(0, 10).map((h) => `${h.title}: ${h.result} (${h.date})`),
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

// Home > Section > Page trail for any path, emitted by Meta on every page.
const SECTION_NAMES = {
  research: "Research",
  engineering: "Engineering",
  talks: "Talks",
  about: "About",
  speaking: "Speaker kit",
  moments: "Moments",
  cv: "CV",
};

export function breadcrumbJsonLd(path, pageName) {
  const parts = path.split("/").filter(Boolean);
  const items = [{ name: "Home", url: `${profile.siteUrl}/` }];
  parts.forEach((part, i) => {
    const isLast = i === parts.length - 1;
    items.push({
      name: isLast && pageName ? pageName : SECTION_NAMES[part] || part,
      url: `${profile.siteUrl}/${parts.slice(0, i + 1).join("/")}`,
    });
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: item.url })),
  };
}
