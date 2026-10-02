import type { NextConfig } from "next";

// The Leak Desk artifact is hosted on claude.ai (it calls Claude live via the
// artifact runtime, which only exists there). The sysconf subdomain points at it.
const LEAK_DESK_ARTIFACT = "https://claude.ai/artifact/JsoaPTLBPqDa55DBSRPxMR";

// Flip this to `false` if the artifact is ever taken down or unshared on Claude.
//   true  -> sysconf.pidoxy.com redirects straight to the artifact (instant shortlink)
//   false -> sysconf.pidoxy.com serves the branded /sysconf fallback page instead,
//            so visitors never hit a raw Claude 404.
// One-line change: set to false, commit, push to v2. Vercel redeploys Production.
const ARTIFACT_AVAILABLE = true;

const SYSCONF_HOST = { type: "host" as const, value: "sysconf.pidoxy.com" };

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Serve AVIF/WebP at card size instead of the original JPEG/PNG.
    formats: ["image/avif", "image/webp"],
    // Next 16 only serves qualities listed here (default is just [75]).
    qualities: [70, 75, 80],
    // YouTube thumbnails rarely change; cache the optimized copies for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [{ protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" }],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Static images in /public: cache a day, revalidate in the background for a
        // week. Short enough that replacing a headshot/portrait still shows up fast.
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
  async redirects() {
    if (!ARTIFACT_AVAILABLE) return [];
    return [
      {
        source: "/:path*",
        has: [SYSCONF_HOST],
        destination: LEAK_DESK_ARTIFACT,
        permanent: false,
      },
    ];
  },
  async rewrites() {
    if (ARTIFACT_AVAILABLE) return [];
    // Serve the on-site fallback page for every path on the subdomain,
    // keeping the sysconf.pidoxy.com URL in the address bar.
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [SYSCONF_HOST],
          destination: "/sysconf",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
