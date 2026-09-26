import Head from "next/head";
import { profile } from "../data/profile";

// Per-page head: title, description, canonical, OG/Twitter cards.
// `titleOverride` bypasses the "X — Emmanuel Idoko" pattern for pages that
// need a differently-shaped title (e.g. the speaker page).
export default function Meta({
  title,
  titleOverride,
  description,
  path = "/",
  keywords = profile.seoKeywords,
  noindex = false,
  ogType = "website",
}) {
  const fullTitle =
    titleOverride ||
    (title
      ? `${title} — Emmanuel Idoko`
      : "Emmanuel Idoko — Software Engineer, AI/ML Engineer, and Researcher");
  const url = path === "/" ? profile.siteUrl : `${profile.siteUrl}${path}`;
  const image = `${profile.siteUrl}/og.png`;
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
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Emmanuel Idoko — software engineer, AI/ML engineer, and researcher" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="pidoxy.com" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content="@pidoxy_" />
      <meta name="twitter:creator" content="@pidoxy_" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Emmanuel Idoko — software engineer, AI/ML engineer, and researcher" />
    </Head>
  );
}
