import Head from "next/head";
import { profile } from "../data/profile";
import { breadcrumbJsonLd } from "../data/seo";

// Per-page head: title, description, canonical, OG/Twitter cards and a
// breadcrumb trail. `titleOverride` bypasses the "X — Emmanuel Idoko" pattern
// for pages that need a differently-shaped title (e.g. the speaker page).
// Pages get their own social card from /api/og unless `image` is given;
// `kicker` is the small label on that card (defaults to the section name) and
// `cardTitle` its headline (defaults to the page title).
export default function Meta({
  title,
  titleOverride,
  description,
  path = "/",
  keywords = profile.seoKeywords,
  noindex = false,
  ogType = "website",
  image,
  kicker,
  cardTitle,
}) {
  const fullTitle =
    titleOverride ||
    (title ? `${title} — Emmanuel Idoko` : "Emmanuel Idoko (Pidoxy) — Software Engineer, AI Researcher and Founder");
  const url = path === "/" ? `${profile.siteUrl}/` : `${profile.siteUrl}${path}`;
  const section = path.split("/").filter(Boolean)[0];
  const cardText = cardTitle || title || "I study how intelligent systems work, and build the ones people depend on.";
  const cardKicker = kicker || (section ? section.replace(/^./, (c) => c.toUpperCase()) : "Emmanuel Idoko · Pidoxy");
  const ogImage =
    image ||
    (path === "/"
      ? `${profile.siteUrl}/og.png`
      : `${profile.siteUrl}/api/og?${new URLSearchParams({ title: cardText, kicker: cardKicker })}`);
  const imageAlt = title ? `${title} — Emmanuel Idoko` : "Emmanuel Idoko — software engineer, AI researcher and founder";
  const keywordContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profile.name} />
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Emmanuel Idoko" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      {ogType === "profile" && (
        <>
          <meta property="profile:first_name" content="Emmanuel" />
          <meta property="profile:last_name" content="Idoko" />
          <meta property="profile:username" content="pidoxy" />
        </>
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pidoxy_" />
      <meta name="twitter:creator" content="@pidoxy_" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {!noindex && path !== "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(path, title)) }}
        />
      )}
    </Head>
  );
}
