// Alias for /setup/rsa — fresh URL to bypass any CDN edge caching
// force-static must be declared in THIS file (not just re-exported) for Next.js segment config to apply
export const dynamic = "force-static";
export { default, metadata } from "../setup/rsa/page";
