import { NextResponse } from "next/server";

/**
 * Diagnostic endpoint — shows payment configuration status (no credentials exposed).
 * GET https://freelancecalc.ru/api/payment/check
 */
export async function GET() {
  const shopId = process.env.YOOKASSA_SHOP_ID;
  const secretKey = process.env.YOOKASSA_SECRET_KEY;
  const fallbackUrl = process.env.FALLBACK_PAYMENT_URL;
  const sbpPhone = process.env.NEXT_PUBLIC_SBP_PHONE;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const issues: string[] = [];

  if (!shopId) issues.push("YOOKASSA_SHOP_ID не установлен в Vercel");
  if (!secretKey) issues.push("YOOKASSA_SECRET_KEY не установлен в Vercel");

  // If credentials are present, do a live test call
  let yookassaLiveTest: { ok: boolean; status?: number; error?: string } | null = null;
  if (shopId && secretKey) {
    try {
      const res = await fetch("https://api.yookassa.ru/v3/me", {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`${shopId}:${secretKey}`).toString("base64"),
        },
      });
      if (res.ok) {
        const data = await res.json();
        yookassaLiveTest = {
          ok: true,
          status: res.status,
          error: data.account_id ? undefined : "account_id missing in response",
        };
      } else {
        const errText = await res.text();
        yookassaLiveTest = { ok: false, status: res.status, error: errText.slice(0, 200) };
        issues.push(`ЮKassa API ошибка ${res.status}: ${errText.slice(0, 100)}`);
      }
    } catch (e) {
      yookassaLiveTest = { ok: false, error: String(e) };
      issues.push(`Сетевая ошибка при подключении к ЮKassa: ${String(e)}`);
    }
  }

  return NextResponse.json({
    status: issues.length === 0 ? "OK" : "ERROR",
    issues,
    config: {
      YOOKASSA_SHOP_ID: shopId ? `✅ установлен (${shopId.length} символов)` : "❌ НЕ установлен",
      YOOKASSA_SECRET_KEY: secretKey ? `✅ установлен (${secretKey.length} символов)` : "❌ НЕ установлен",
      FALLBACK_PAYMENT_URL: fallbackUrl ? `✅ ${fallbackUrl}` : "не установлен (не нужен если ЮKassa работает)",
      NEXT_PUBLIC_SBP_PHONE: sbpPhone ? `✅ ${sbpPhone}` : "не установлен",
      NEXT_PUBLIC_BASE_URL: baseUrl ?? "не установлен (используется https://freelancecalc.ru)",
    },
    yookassaLiveTest,
    hint: issues.length > 0
      ? "Добавь переменные в Vercel: Settings → Environment Variables. Имена ТОЧНО как указано выше."
      : "Всё настроено! Попробуй оплату ещё раз на /benchmark",
  });
}
