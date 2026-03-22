import { NextRequest, NextResponse } from "next/server";

// ЮKassa sends POST to this endpoint when payment status changes.
// Configure in ЮKassa dashboard: https://yookassa.ru/my/merchant/integration/http-notifications
// Webhook URL: https://freelancecalc.ru/api/payment/webhook

const NTFY_TOPIC = process.env.NTFY_TOPIC || "freelancecalc-leads-xk9m2p";

interface YookassaWebhook {
  type: string;
  event: string;
  object: {
    id: string;
    status: string;
    amount: { value: string; currency: string };
    description?: string;
    metadata?: Record<string, string | number>;
    payment_method?: {
      type: string;
      title?: string;
    };
    created_at: string;
    captured_at?: string;
  };
}

export async function POST(req: NextRequest) {
  let payload: YookassaWebhook;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { event, object: payment } = payload;

  // Log all events for Vercel log drain
  console.log(`[YUKASSA_WEBHOOK] event=${event} payment_id=${payment.id} status=${payment.status} amount=${payment.amount?.value} ${payment.amount?.currency}`);

  // Only act on successful payments
  if (event !== "payment.succeeded") {
    return NextResponse.json({ ok: true });
  }

  const amount = payment.amount?.value ?? "249.00";
  const paymentId = payment.id;
  const methodTitle = payment.payment_method?.title ?? payment.payment_method?.type ?? "неизвестно";
  const moscowTime = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

  // Non-blocking push to ntfy.sh
  try {
    await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        Title: "💰 ОПЛАТА через ЮKassa — вышли PDF!",
        Tags: "money_with_wings,white_check_mark",
        Priority: "high",
      },
      body: [
        `Сумма: ${amount} ₽`,
        `Способ оплаты: ${methodTitle}`,
        `ID платежа: ${paymentId}`,
        `Время: ${moscowTime}`,
        ``,
        `📋 Данные покупателя → ЮKassa: https://yookassa.ru/my/payments/${paymentId}`,
        `📎 Найди email покупателя и вышли PDF`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[YUKASSA_WEBHOOK] ntfy.sh error:", err);
  }

  return NextResponse.json({ ok: true });
}
