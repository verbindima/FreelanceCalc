/**
 * Shared price utility for FreelanceCalc benchmark product.
 * Price increases on April 7, 2026 from 249 → 349 ₽.
 *
 * Usage in server components (evaluated at build time):
 *   import { BENCHMARK_PRICE, showUrgency } from "@/lib/price";
 *
 * Usage in client components (evaluated at runtime — always accurate):
 *   const price = Date.now() < new Date("2026-04-07T00:00:00+03:00").getTime() ? 249 : 349;
 */

export const PRICE_INCREASE_DATE = new Date("2026-04-07T00:00:00+03:00");

/** Returns current benchmark price. Server components: build time. Client: use Date.now() directly. */
export function getBenchmarkPrice(): number {
  return Date.now() < PRICE_INCREASE_DATE.getTime() ? 249 : 349;
}

export const BENCHMARK_PRICE = getBenchmarkPrice();

/** True while the early-bird offer is still active */
export const showUrgency = BENCHMARK_PRICE === 249;
