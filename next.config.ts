import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      // /setup/rsa had a stale 404 at Vercel CDN edge — permanently forward to /rsa
      {
        source: "/setup/rsa",
        destination: "/rsa",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Allow /widget to be embedded in iframes from any domain
        source: "/widget",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
