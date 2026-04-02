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
  let source = "lead"; // "lead" | "sbp_manual"
  try {
    const body = await req.json();
    email = (body.email ?? "").toString().trim().toLowerCase();
    source = (body.source ?? "lead").toString();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const lockedPrice = getLockedPrice();
  const isSbp = source === "sbp_manual";
  const isQ2Sub = source === "q2_subscriber";

  // Always log for Vercel log drain fallback
  const tag = isSbp ? "SBP_PAYMENT" : isQ2Sub ? "Q2_SUBSCRIBER" : "LEAD";
  console.log(`[${tag}] email=${email} price=${lockedPrice} ts=${new Date().toISOString()}`);

  // Non-blocking push to ntfy.sh
  try {
    let title: string;
    let tags: string;
    let priority: string;
    let body: string;

    if (isSbp) {
      title = "💰 ОПЛАТА через СБП — проверь и вышли PDF!";
      tags = "money_with_wings,white_check_mark";
      priority = "high";
      body = `Email покупателя: ${email}\nСумма: ${lockedPrice} ₽ (СБП)\nВремя: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}\n\n✅ Проверь входящий перевод на ${lockedPrice} ₽\n📎 Вышли PDF на: ${email}`;
    } else if (isQ2Sub) {
      title = "📧 Q2 подписчик — вышли Q3 в сентябре";
      tags = "calendar,email";
      priority = "default";
      body = `Email Q2-покупателя для рассылки Q3:\n${email}\nВремя: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}\n\n📋 Добавь в список рассылки Q3 (сентябрь 2026).`;
    } else {
      title = "FreelanceCalc: новый лид";
      tags = "money_with_wings,email";
      priority = "default";
      body = `Email: ${email}\nЗафиксированная цена: ${lockedPrice} ₽\nВремя: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}\n\nПользователь оставил email — оплата ${lockedPrice} ₽ пока недоступна. Напиши ему как только ЮKassa подключена.`;
    }

    await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        Title: title,
        Tags: tags,
        Priority: priority,
      },
      body,
    });
  } catch (err) {
    // Fail silently — email already logged to Vercel logs above
    console.error("[LEAD] ntfy.sh error:", err);
  }

  return NextResponse.json({ ok: true });
}
