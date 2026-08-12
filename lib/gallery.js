// Server-side gallery loading for the Moments page. Preferred source is the
// Cloudinary Admin API; falls back to the legacy keyless tag endpoint, then to
// the local /public/gallery folder. Only ever imported inside getStaticProps.
import fs from "fs";
import path from "path";
import { moments } from "../data/moments";

const CLOUDINARY_CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "pidoxy";
const CLOUDINARY_TAG = process.env.CLOUDINARY_GALLERY_TAG || "portfolio";
// Optional Cloudinary folder the gallery images live in. Stripped from the
// public_id before album parsing, so a photo at "portfolio/mirg-icair-2025/x"
// groups under the album "mirg-icair-2025" (not "portfolio").
const CLOUDINARY_BASE_FOLDER = (process.env.CLOUDINARY_BASE_FOLDER || "portfolio").replace(/^\/+|\/+$/g, "");
// Server-only Admin API credentials (never NEXT_PUBLIC — never sent to the browser).
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";

const momentBySlug = Object.fromEntries(moments.map((m) => [m.slug, m]));

function humanizeName(name) {
  return name
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .replace(/^[\d\s_-]+/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

// Turns a filename segment into a caption, but returns "" for opaque
// auto-generated IDs (mixed upper/lower + digits, e.g. "G6SOG7DXkAAOOh9")
// so random Cloudinary/Twitter names never show as captions.
function readableCaption(segment) {
  if (!segment) return "";
  const base = segment.replace(/\.[^.]+$/, "");
  const looksRandom = /[A-Z]/.test(base) && /[a-z]/.test(base) && /\d/.test(base);
  if (looksRandom) return "";
  return base.replace(/^[\d\s_-]+/, "").replace(/[-_]+/g, " ").trim();
}

// Derives an album slug + caption from a Cloudinary public_id or a filename.
// Supports "album-slug/photo" (folder) and "album-slug__caption" conventions.
function parseAlbum(id) {
  const name = id.replace(/\.[^.]+$/, "");
  let albumSlug = "";
  let rest = name;
  if (name.includes("/")) {
    const parts = name.split("/");
    albumSlug = parts[0];
    rest = parts.slice(1).join("/");
  } else if (name.includes("__")) {
    const parts = name.split("__");
    albumSlug = parts[0];
    rest = parts.slice(1).join(" ");
  }
  const caption = rest.replace(/^[\d\s_-]+/, "").replace(/[-_]+/g, " ").trim();
  return { albumSlug, caption };
}

function cloudinaryUrls(publicId, version, format) {
  const base = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload`;
  const v = version ? `v${version}/` : "";
  return {
    // full-size for the lightbox; f_auto/q_auto = automatic format + quality
    src: `${base}/f_auto,q_auto,c_limit,w_1600/${v}${publicId}.${format}`,
    // uniform, cropped thumbnail for the grid tile
    thumb: `${base}/f_auto,q_auto,c_fill,g_auto,w_640,h_480/${v}${publicId}.${format}`,
  };
}

// Preferred source: Cloudinary Admin API (reliable on all account types).
// Reads images tagged CLOUDINARY_TAG, deriving the album from the asset's
// folder and the caption from its context metadata or display name — so albums
// and captions are fully managed from the Cloudinary dashboard, no code.
// Needs CLOUDINARY_API_KEY/SECRET (server-only Vercel env vars).
async function galleryFromCloudinaryAdmin() {
  const auth = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString("base64");
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/resources/image/tags/${CLOUDINARY_TAG}?max_results=100&context=true`;
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
  if (!res.ok) throw new Error(`Cloudinary Admin ${res.status}`);
  const data = await res.json();
  return (data.resources || [])
    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
    .map((r) => {
      // Album from the folder (asset_folder in dynamic mode, else the public_id path).
      let folder =
        r.asset_folder ||
        (r.public_id.includes("/") ? r.public_id.split("/").slice(0, -1).join("/") : "");
      if (CLOUDINARY_BASE_FOLDER && folder.startsWith(CLOUDINARY_BASE_FOLDER)) {
        folder = folder.slice(CLOUDINARY_BASE_FOLDER.length).replace(/^\/+/, "");
      }
      const albumSlug = folder.split("/")[0] || "";
      const ctx = (r.context && r.context.custom) || {};
      const lastSegment = r.public_id.split("/").pop();
      // Prefer dashboard-set caption/alt/name; otherwise derive from the filename,
      // but suppress opaque auto-generated IDs (mixed case + digits, no words).
      const caption =
        ctx.caption || ctx.alt || r.display_name || readableCaption(lastSegment);
      const albumTitle = (momentBySlug[albumSlug] || {}).title;
      const urls = cloudinaryUrls(r.public_id, r.version, r.format);
      return {
        ...urls,
        alt: caption || albumTitle || "Gallery photo",
        caption,
        album: albumSlug,
      };
    });
}

// Legacy source: public keyless tag-list endpoint. Deprecated on newer Cloudinary
// accounts (returns 404), so this is only a secondary attempt.
async function galleryFromCloudinary() {
  const url = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/list/${CLOUDINARY_TAG}.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Cloudinary list ${res.status}`);
  const data = await res.json();
  const base = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload`;
  return (data.resources || [])
    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
    .map((r) => {
      let relId = r.public_id;
      if (CLOUDINARY_BASE_FOLDER && relId.startsWith(`${CLOUDINARY_BASE_FOLDER}/`)) {
        relId = relId.slice(CLOUDINARY_BASE_FOLDER.length + 1);
      }
      const { albumSlug, caption } = parseAlbum(relId);
      const label = caption || humanizeName(relId);
      return {
        src: `${base}/f_auto,q_auto,c_limit,w_1600/v${r.version}/${r.public_id}.${r.format}`,
        thumb: `${base}/f_auto,q_auto,c_fill,g_auto,w_640,h_480/v${r.version}/${r.public_id}.${r.format}`,
        alt: label,
        caption: caption || "",
        album: albumSlug,
      };
    });
}

// Fallback source: local /public/gallery folder, auto-discovered at build time.
// Captions/alt optional via /public/gallery/captions.json.
function galleryFromFolder() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);
  let captions = {};
  const captionsPath = path.join(galleryDir, "captions.json");
  if (fs.existsSync(captionsPath)) {
    captions = JSON.parse(fs.readFileSync(captionsPath, "utf-8"));
  }
  return fs
    .readdirSync(galleryDir)
    .filter((file) => imageExts.has(path.extname(file).toLowerCase()))
    .sort()
    .reverse() // newest-first when files are date-prefixed (e.g. 2026-06-...)
    .map((file) => {
      const meta = captions[file] || {};
      const { albumSlug, caption } = parseAlbum(file);
      return {
        src: `/gallery/${file}`,
        thumb: `/gallery/${file}`,
        alt: meta.alt || meta.caption || caption || humanizeName(file),
        caption: meta.caption || caption || "",
        album: albumSlug,
      };
    });
}

export async function getGallery() {
  try {
    if (CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
      return await galleryFromCloudinaryAdmin(); // reliable, dashboard-driven
    }
    if (CLOUDINARY_CLOUD) {
      return await galleryFromCloudinary(); // legacy keyless endpoint
    }
    return galleryFromFolder();
  } catch {
    // Any Cloudinary error → try the local folder; if that also fails, hide section.
    try {
      return galleryFromFolder();
    } catch {
      return [];
    }
  }
}
