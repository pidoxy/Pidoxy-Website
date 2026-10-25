import { ImageResponse } from "next/og";

// Per-page social card (1200×630) in the site's light palette, so a shared
// paper or case-study link shows its own title instead of the generic og.png.
// Usage: /api/og?title=…&kicker=…  (both optional, trimmed for safety).
export const config = { runtime: "edge" };

const clip = (value, max) => (value || "").slice(0, max);

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = clip(searchParams.get("title"), 120) || "Emmanuel Idoko";
  const kicker = clip(searchParams.get("kicker"), 60) || "pidoxy.com";
  const long = title.length > 60;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f6f4ef",
          color: "#0e0d12",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#826622", fontFamily: "monospace", letterSpacing: 2, textTransform: "uppercase" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#826622" }} />
          {kicker}
        </div>
        <div style={{ display: "flex", fontSize: long ? 60 : 78, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #d9d4c7", paddingTop: 28, fontSize: 28, fontFamily: "sans-serif" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 600 }}>Emmanuel Idoko</span>
            <span style={{ color: "#5e606b" }}>Software engineer · AI researcher · Founder</span>
          </div>
          <span style={{ color: "#5e606b" }}>www.pidoxy.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=604800" },
    }
  );
}
