import { NextResponse } from "next/server";

const SHOP_ID = process.env.YOOKASSA_SHOP_ID!;
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY!;
const RETURN_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://freelancecalc.ru";

export async function POST() {
  if (!SHOP_ID || !SECRET_KEY) {
    return NextResponse.json(
      { error: "Payment system is not configured" },
      { status: 503 },
    );
  }

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
        amount: { value: "249.00", currency: "RUB" },
        capture: true,
        confirmation: {
          type: "redirect",
          return_url: `${RETURN_URL}/payment/success`,
        },
        description: "PDF «Рыночные ставки фрилансеров» Q1 2026",
        metadata: { product: "market_rates_pdf" },
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

    return NextResponse.json({ url: redirectUrl, paymentId: payment.id });
  } catch (e) {
    console.error("Payment error:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
