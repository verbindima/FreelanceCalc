// Fresh URL for RSA setup — bypasses stale CDN 404 on Russian Vercel edge nodes.
// /rsa and /setup/rsa have cached 404 responses at Vercel Russian PoP.
// This brand-new path has no cached response; no-store headers are set in next.config.ts.
// force-static must be declared in THIS file (not just re-exported) for Next.js segment config to apply
export const dynamic = "force-static";
export { default, metadata } from "../setup/rsa/page";
