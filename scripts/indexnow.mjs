// Tells Bing, Yandex and other IndexNow engines (Bing also feeds ChatGPT
// search) that every sitemap URL changed. Run after a production deploy:
//   npm run indexnow
// The key file public/3d823082563e9a58007dc78a8cbdee3b.txt proves we own the domain.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const KEY = "3d823082563e9a58007dc78a8cbdee3b";
const HOST = "www.pidoxy.com";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemap = readFileSync(path.join(root, "public", "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
