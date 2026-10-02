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

const nextConfig: NextConfig = {
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
