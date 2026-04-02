// Fresh URL for RSA setup — bypasses stale CDN 404 on Russian Vercel edge nodes.
// /rsa and /setup/rsa have cached 404 responses at Vercel Russian PoP.
// This brand-new path has no cached response; no-store headers are set in next.config.ts.
export { default, metadata } from "../setup/rsa/page";
