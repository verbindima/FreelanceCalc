import { NextResponse } from "next/server";

const SHOP_ID = process.env.YOOKASSA_SHOP_ID!;
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY!;
const RETURN_URL = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://freelancecalc.ru"
).replace(/\/$/, ""); // strip trailing slash to prevent double-slash in return_url

// Fallback: any external payment page URL (Tribute, Boosty, Tinkoff QR, etc.)
// Set FALLBACK_PAYMENT_URL in Vercel env vars to instantly unblock payments
// without needing YooKassa credentials.
const FALLBACK_PAYMENT_URL = process.env.FALLBACK_PAYMENT_URL;

// Sync with FreelanceCalc.tsx: 249 ₽ before April 7, 349 ₽ after (loss aversion countdown)
const PRICE_DEADLINE = new Date("2026-04-07T00:00:00+03:00"); // MSK midnight
function getCurrentPrice(): number {
  return new Date() < PRICE_DEADLINE ? 249 : 349;
}

export async function POST(request: Request) {
  // Fast-path: if a fallback payment URL is configured, use it immediately.
  // This allows Tribute.tinkoff.ru / Boosty / any payment link to work
  // while YooKassa credentials are pending.
  if (FALLBACK_PAYMENT_URL) {
    return NextResponse.json({ url: FALLBACK_PAYMENT_URL, price: getCurrentPrice(), source: "fallback" });
  }

  if (!SHOP_ID || !SECRET_KEY) {
    return NextResponse.json(
      { error: "Payment system is not configured" },
      { status: 503 },
    );
  }

  // Parse optional email from request body (used for receipt / fiscalization)
  let customerEmail: string | undefined;
  try {
    const body = await request.json();
    if (typeof body?.email === "string" && body.email.includes("@")) {
      customerEmail = body.email.trim().toLowerCase();
    }
  } catch { /* body is optional */ }

  const price = getCurrentPrice();
  const idempotenceKey = crypto.randomUUID();

  // Build receipt if email is provided (required when fiscalization_enabled=true in YooKassa)
  const receipt = customerEmail
    ? {
        customer: { email: customerEmail },
        items: [
          {
            description: `PDF «Рыночные ставки фрилансеров» Q2 2026`,
            quantity: "1.00",
            amount: { value: `${price}.00`, currency: "RUB" },
            vat_code: 1, // 1 = без НДС (НДС не облагается)
            payment_mode: "full_payment",
            payment_subject: "intellectual_activity", // PDF = результат интеллектуальной деятельности (54-ФЗ)
          },
        ],
      }
    : undefined;

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
        description: `PDF «Рыночные ставки фрилансеров» Q2 2026 — ${price} ₽`,
        metadata: { product: "market_rates_pdf", price_rub: price },
        ...(receipt && { receipt }),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("YooKassa error:", errText);
      let yookassaCode: string | undefined;
      let yookassaDescription: string | undefined;
      try {
        const parsed = JSON.parse(errText);
        yookassaCode = parsed.code;
        yookassaDescription = parsed.description;
      } catch { /* not JSON */ }
      return NextResponse.json(
        { error: "Payment creation failed", yookassaCode, yookassaDescription },
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
