import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      // /setup/rsa and /rsa fail on Russian Vercel PoPs (Next.js route 404)
      // → redirect to static HTML file in /public/ which always works
      {
        source: "/setup/rsa",
        destination: "/rsa-setup.html",
        permanent: false, // non-permanent: don't let browser cache this again
      },
      {
        source: "/rsa",
        destination: "/rsa-setup.html",
        permanent: false,
      },
      {
        source: "/rsa-connect",
        destination: "/rsa-setup.html",
        permanent: false,
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
        // /rsa-connect — fresh URL for RSA setup, never cached, no-store from day 1
        source: "/rsa-connect",
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
