import { NextRequest, NextResponse } from "next/server";

// Free push-notification service — no credentials required.
// Dmitry should subscribe to this topic in the ntfy.sh app:
//   https://ntfy.sh/freelancecalc-leads-xk9m2p
// Or open in browser: https://ntfy.sh/freelancecalc-leads-xk9m2p
const NTFY_TOPIC = process.env.NTFY_TOPIC || "freelancecalc-leads-xk9m2p";

// Sync with payment/route.ts: 249 ₽ before April 7, 349 ₽ after (loss aversion countdown)
const PRICE_DEADLINE = new Date("2026-04-07T00:00:00+03:00");
const getLockedPrice = () => (new Date() < PRICE_DEADLINE ? 249 : 349);

export async function POST(req: NextRequest) {
  let email = "";
  try {
    const body = await req.json();
    email = (body.email ?? "").toString().trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const lockedPrice = getLockedPrice();

  // Always log for Vercel log drain fallback
  console.log(`[LEAD] email=${email} price=${lockedPrice} ts=${new Date().toISOString()}`);

  // Non-blocking push to ntfy.sh
  try {
    await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        Title: "FreelanceCalc: новый лид",
        Tags: "money_with_wings,email",
        Priority: "default",
      },
      body: `Email: ${email}\nЗафиксированная цена: ${lockedPrice} ₽\nВремя: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}\n\nПользователь оставил email — оплата ${lockedPrice} ₽ пока недоступна. Напиши ему как только ЮKassa подключена.`,
    });
  } catch (err) {
    // Fail silently — email already logged to Vercel logs above
    console.error("[LEAD] ntfy.sh error:", err);
  }

  return NextResponse.json({ ok: true });
}
