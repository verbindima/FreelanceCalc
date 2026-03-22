import { NextResponse } from "next/server";

/**
 * Returns whether the payment system is currently configured and usable.
 * Called by the FreelanceCalc component on upsell-modal open so we can
 * show the lead-capture form immediately — without forcing the user to
 * click "pay", wait for an API round-trip, and then see a failure message.
 */
export async function GET() {
  const hasYooKassa = !!(
    process.env.YOOKASSA_SHOP_ID &&
    process.env.YOOKASSA_SECRET_KEY
  );
  const hasFallback = !!process.env.FALLBACK_PAYMENT_URL;

  return NextResponse.json({ available: hasYooKassa || hasFallback });
}
