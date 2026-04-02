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
        // /rsa must not be cached by Vercel CDN edges (Russian edges had stale 404)
        source: "/rsa",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
          {
            key: "CDN-Cache-Control",
            value: "no-store",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "no-store",
          },
        ],
      },
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
