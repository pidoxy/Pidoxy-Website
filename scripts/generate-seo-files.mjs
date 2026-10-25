// Writes public/sitemap.xml, public/robots.txt and public/llms.txt from the
// site's data files, so search engines and AI assistants always see the same
// facts the pages render. Runs before every build (npm "prebuild").
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const load = (file) => import(path.join(root, "data", file));

const { profile, hero, aboutProse, aboutFacts } = await load("profile.js");
const { publications } = await load("publications.js");
const { caseStudies } = await load("caseStudies.js");
const { experience } = await load("experience.js");
const { honors } = await load("honors.js");
const { talks } = await load("talks.js");
const { projects } = await load("projects.js");

const site = profile.siteUrl;

// Last commit date touching any of the files a route is built from. Falls back
// to today when git history isn't available (e.g. a shallow CI clone).
function lastmod(files) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files], { cwd: root, encoding: "utf8" }).trim();
    if (out) return out;
  } catch {
    /* no git */
  }
  return new Date().toISOString().slice(0, 10);
}

const shared = ["data/profile.js", "components/Layout.js"];
const routes = [
  { path: "/", priority: "1.0", files: ["pages/index.js", "data/home.js", "data/updates.js"] },
  { path: "/about", priority: "0.9", files: ["pages/about.js", "data/experience.js", "data/honors.js", "data/press.js"] },
  { path: "/research", priority: "0.9", files: ["pages/research.js", "data/publications.js"] },
  { path: "/engineering", priority: "0.9", files: ["pages/engineering.js", "data/projects.js"] },
  { path: "/talks", priority: "0.7", files: ["pages/talks.js", "data/talks.js"] },
  { path: "/speaking", priority: "0.7", files: ["pages/speaking.js", "data/speaking.js"] },
  { path: "/moments", priority: "0.6", files: ["pages/moments.js", "data/moments.js"] },
  { path: "/cv", priority: "0.8", files: ["pages/cv.js"] },
  ...publications.map((p) => ({ path: `/research/${p.slug}`, priority: "0.8", files: ["pages/research/[slug].js", "data/publications.js"] })),
  ...Object.keys(caseStudies).map((slug) => ({ path: `/engineering/${slug}`, priority: "0.8", files: ["pages/engineering/[slug].js", "data/caseStudies.js"] })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${site}${r.path}</loc>
    <lastmod>${lastmod([...r.files, ...shared])}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${site}/sitemap.xml
`;

const current = experience.filter((e) => /present/i.test(e.period));
const featured = projects.filter((p) => p.slug && /place|winner|live/i.test(p.status));

const llms = `# Emmanuel Idoko (Pidoxy)

> ${hero.intro} Based in ${profile.location}. Online handle: Pidoxy (@pidoxy on GitHub, YouTube and Devpost; @pidoxy_ on X).

${aboutProse.join("\n\n")}

## Key pages

- [Home](${site}/): overview, current work and recognition
- [About](${site}/about): experience, leadership, honours and press
- [Research](${site}/research): publications in medical imaging, computer vision and reliable AI
- [Engineering](${site}/engineering): products, production systems and hackathon builds
- [Talks](${site}/talks): talks, workshops and teaching
- [Speaker kit](${site}/speaking): bios, headshots and talk abstracts for organisers
- [CV](${site}/cv): full curriculum vitae with research and engineering résumés

## Publications

${publications.map((p) => `- [${p.title}](${site}/research/${p.slug}): ${p.venue}, ${p.year}. ${p.status}. ${p.plain}`).join("\n")}

## Current roles

${current.map((e) => `- ${e.role}, ${e.org} (${e.period})`).join("\n")}

## Selected work

${Object.entries(caseStudies)
  .map(([slug, c]) => `- [${c.title}](${site}/engineering/${slug}): ${c.headline} ${c.lede}`)
  .join("\n")}
${featured
  .filter((p) => !caseStudies[p.slug])
  .map((p) => `- ${p.title} (${p.status}): ${p.summary}`)
  .join("\n")}

## Honours

${honors.map((h) => `- ${h.title}: ${h.result} (${h.date})`).join("\n")}

## Talks and teaching

${talks.map((t) => `- ${t.title}, ${t.event} (${t.date}), ${t.role}`).join("\n")}

## Contact and profiles

- Email: ${profile.email}
${aboutFacts.profiles.map((p) => `- ${p.label}: ${p.href}`).join("\n")}
`;

writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);
writeFileSync(path.join(root, "public", "robots.txt"), robots);
writeFileSync(path.join(root, "public", "llms.txt"), llms);
console.log(`SEO files written: ${routes.length} sitemap URLs, llms.txt ${llms.length} chars.`);
