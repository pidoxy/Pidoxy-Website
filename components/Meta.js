import Head from "next/head";
import { profile } from "../data/profile";

// Per-page head: title, description, canonical, OG/Twitter cards.
// `titleOverride` bypasses the "X — Emmanuel Idoko" pattern for pages that
// need a differently-shaped title (e.g. the speaker page).
export default function Meta({ title, titleOverride, description, path = "/" }) {
  const fullTitle =
    titleOverride ||
    (title
      ? `${title} — Emmanuel Idoko`
      : "Emmanuel Idoko — Software Engineer, AI/ML Engineer, and Researcher");
  const url = path === "/" ? profile.siteUrl : `${profile.siteUrl}${path}`;
  const image = `${profile.siteUrl}/og.png`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Emmanuel Idoko" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pidoxy_" />
      <meta name="twitter:creator" content="@pidoxy_" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
