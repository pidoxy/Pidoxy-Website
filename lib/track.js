import { track as vercelTrack } from "@vercel/analytics";

// One event, every analytics tool. GA4 and Clarity load lazily, so either may
// be missing; Vercel queues until its script is ready. Never throws.
export function track(name, props = {}) {
  try {
    if (typeof window === "undefined") return;
    if (typeof window.gtag === "function") window.gtag("event", name, props);
    if (typeof window.clarity === "function") window.clarity("event", name);
    vercelTrack(name, props);
  } catch {
    // Analytics must never break the page.
  }
}

const FILE_RE = /\.(pdf|docx?|pptx?|zip|png|jpe?g)$/i;

function labelOf(el) {
  return (el.getAttribute("aria-label") || el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
}

// Classifies a click into an analytics event, or null to ignore it.
// Explicit `data-track="name"` (plus `data-track-*` props) wins; otherwise
// links are sorted into downloads, email, and outbound clicks automatically,
// so new links are covered without touching this file. Names avoid GA4's
// automatic "click"/"file_download" so enhanced measurement never double-counts.
export function eventForClick(target) {
  const tagged = target.closest("[data-track]");
  if (tagged) {
    const props = {};
    for (const [key, value] of Object.entries(tagged.dataset)) {
      if (key.startsWith("track") && key !== "track") {
        props[key.slice(5).replace(/^./, (c) => c.toLowerCase())] = value;
      }
    }
    return { name: tagged.dataset.track, props: { label: labelOf(tagged), ...props } };
  }

  const a = target.closest("a[href]");
  if (!a) return null;
  const href = a.getAttribute("href");
  const label = labelOf(a);

  if (href.startsWith("mailto:")) return { name: "contact_email", props: { label } };

  let url;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }
  const path = url.pathname;
  if (FILE_RE.test(path)) {
    return { name: "download", props: { file: path.split("/").pop(), label } };
  }
  if (url.host !== window.location.host) {
    return { name: "outbound_link", props: { host: url.host.replace(/^www\./, ""), url: url.href.slice(0, 200), label } };
  }
  return null;
}
