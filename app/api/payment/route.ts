import { NextResponse } from "next/server";

const SHOP_ID = process.env.YOOKASSA_SHOP_ID!;
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY!;
const RETURN_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://freelancecalc-one.vercel.app";

// Sync with FreelanceCalc.tsx: 249 ₽ before April 7, 349 ₽ after (loss aversion countdown)
const PRICE_DEADLINE = new Date("2026-04-07T00:00:00+03:00"); // MSK midnight
function getCurrentPrice(): number {
  return new Date() < PRICE_DEADLINE ? 249 : 349;
}

export async function POST() {
  if (!SHOP_ID || !SECRET_KEY) {
    return NextResponse.json(
      { error: "Payment system is not configured" },
      { status: 503 },
    );
  }

  const price = getCurrentPrice();
  const idempotenceKey = crypto.randomUUID();

  try {
    const res = await fetch("https://api.yookassa.ru/v3/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotence-Key": idempotenceKey,
        Authorization:
          "Basic " +
          Buffer.from(`${SHOP_ID}:${SECRET_KEY}`).toString("base64"),
      },
      body: JSON.stringify({
        amount: { value: `${price}.00`, currency: "RUB" },
        capture: true,
        confirmation: {
          type: "redirect",
          return_url: `${RETURN_URL}/payment/success`,
        },
        description: `PDF «Рыночные ставки фрилансеров» Q1 2026 — ${price} ₽`,
        metadata: { product: "market_rates_pdf", price_rub: price },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("YooKassa error:", err);
      return NextResponse.json(
        { error: "Payment creation failed" },
        { status: 502 },
      );
    }

    const payment = await res.json();
    const redirectUrl = payment.confirmation?.confirmation_url;

    if (!redirectUrl) {
      return NextResponse.json(
        { error: "No redirect URL returned" },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: redirectUrl, paymentId: payment.id, price });
  } catch (e) {
    console.error("Payment error:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
