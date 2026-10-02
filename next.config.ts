import type { NextConfig } from "next";

// The Leak Desk artifact is hosted on claude.ai (it calls Claude live via the
// artifact runtime, which only exists there). The sysconf subdomain simply
// redirects to it.
const LEAK_DESK_ARTIFACT = "https://claude.ai/artifact/JsoaPTLBPqDa55DBSRPxMR";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sysconf.pidoxy.com" }],
        destination: LEAK_DESK_ARTIFACT,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
