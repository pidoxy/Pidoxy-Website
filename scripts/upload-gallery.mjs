#!/usr/bin/env node
/*
 * Upload local gallery photos to Cloudinary with album folders + the gallery tag.
 *
 * WHY: uploading via the API lets us set the public_id explicitly
 * ("portfolio/<event>/<name>"), so the site's album grouping works no matter
 * which folder mode your Cloudinary account uses.
 *
 * SETUP (one time):
 *   1. Organize photos locally:
 *        gallery-source/mirg-icair-2025/poster presentation.jpg
 *        gallery-source/mirg-icair-2025/with attendees.jpg
 *        gallery-source/hackzurich-2021/team photo.jpg
 *      (Each subfolder becomes an album. The filename becomes the caption.)
 *   2. Get API credentials: Cloudinary dashboard -> Settings -> API Keys.
 *      Keep them on your machine only (never commit, never paste them anywhere):
 *        export CLOUDINARY_API_KEY=xxxxxxxxxxxxxxx
 *        export CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
 *   3. Run:
 *        node scripts/upload-gallery.mjs
 *      (Optional custom source dir: node scripts/upload-gallery.mjs ./my-photos)
 *
 * Each photo -> public_id "portfolio/<event>/<name>", tagged "portfolio".
 * They appear in the site gallery within ~60s (ISR) or on the next deploy.
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";

const CLOUD = process.env.CLOUDINARY_CLOUD_NAME || "pidoxy";
const KEY = process.env.CLOUDINARY_API_KEY;
const SECRET = process.env.CLOUDINARY_API_SECRET;
const BASE_FOLDER = (process.env.CLOUDINARY_BASE_FOLDER || "portfolio").replace(/^\/+|\/+$/g, "");
const TAG = process.env.CLOUDINARY_GALLERY_TAG || "portfolio";
const SRC = process.argv[2] || "gallery-source";

if (!KEY || !SECRET) {
  console.error("✗ Missing credentials.");
  console.error("  Get them from Cloudinary -> Settings -> API Keys, then run:");
  console.error("    export CLOUDINARY_API_KEY=xxx CLOUDINARY_API_SECRET=yyy");
  process.exit(1);
}

const IMG = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".heic", ".heif"]);
const slug = (s) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function collect(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const album = slug(entry.name);
      for (const f of fs.readdirSync(full)) {
        if (IMG.has(path.extname(f).toLowerCase())) {
          out.push({ file: path.join(full, f), album, name: slug(path.parse(f).name) });
        }
      }
    } else if (IMG.has(path.extname(entry.name).toLowerCase())) {
      out.push({ file: full, album: "", name: slug(path.parse(entry.name).name) });
    }
  }
  return out;
}

// Cloudinary signs all sent params except file, cloud_name, resource_type,
// api_key and signature — sorted alphabetically, joined with &, secret appended.
function sign(params) {
  const toSign = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&");
  return crypto.createHash("sha1").update(toSign + SECRET).digest("hex");
}

async function upload({ file, album, name }) {
  const publicId = [BASE_FOLDER, album, name].filter(Boolean).join("/");
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = sign({ overwrite: "true", public_id: publicId, tags: TAG, timestamp });

  const form = new FormData();
  form.append("file", new Blob([fs.readFileSync(file)]), path.basename(file));
  form.append("public_id", publicId);
  form.append("tags", TAG);
  form.append("overwrite", "true");
  form.append("timestamp", String(timestamp));
  form.append("api_key", KEY);
  form.append("signature", signature);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`, {
    method: "POST",
    body: form,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`${path.basename(file)}: ${data.error?.message || res.status}`);
  return data.public_id;
}

const items = collect(SRC);
if (!items.length) {
  console.error(`✗ No images found in ./${SRC}/`);
  console.error(`  Create it and add photos in per-event subfolders, e.g.`);
  console.error(`    ${SRC}/mirg-icair-2025/poster presentation.jpg`);
  process.exit(1);
}

console.log(`Uploading ${items.length} image(s) to cloud "${CLOUD}" (folder: ${BASE_FOLDER})\n`);
let ok = 0;
for (const item of items) {
  try {
    const id = await upload(item);
    console.log(`  ✓ ${path.relative(SRC, item.file)}  ->  ${id}`);
    ok += 1;
  } catch (e) {
    console.log(`  ✗ ${e.message}`);
  }
}
console.log(`\nDone: ${ok}/${items.length} uploaded. Live in the gallery within ~60s (or next deploy).`);
