import { NextResponse } from "next/server";

/**
 * Diagnostic endpoint — shows payment configuration status (no credentials exposed).
 * GET https://freelancecalc.ru/api/payment/check
 *
 * Now also tests actual payment *creation* to catch receipt/fiscalization errors
 * that don't surface in the /v3/me credentials check.
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

  const auth =
    shopId && secretKey
      ? "Basic " + Buffer.from(`${shopId}:${secretKey}`).toString("base64")
      : null;

  // Step 1: credentials check via /v3/me
  let yookassaLiveTest: { ok: boolean; status?: number; error?: string; shopInfo?: unknown } | null = null;
  if (auth) {
    try {
      const res = await fetch("https://api.yookassa.ru/v3/me", {
        headers: { Authorization: auth },
      });
      if (res.ok) {
        const data = await res.json();
        yookassaLiveTest = {
          ok: true,
          status: res.status,
          shopInfo: {
            account_id: data.account_id,
            status: data.status,
            fiscalization_enabled: data.fiscalization_enabled,
            test: data.test,
          },
        };
        // Note: fiscalization_enabled=true is handled by our code — receipt is sent when email is provided.
        // We only flag this if the payment creation test also fails (which would indicate receipt handling is broken).
        if (data.test) {
          issues.push("⚠️ Магазин в ТЕСТОВОМ режиме — реальные платежи не принимаются. Включи боевой режим в личном кабинете ЮKassa.");
        }
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

  // Step 2: test actual payment creation with hourly-rotating key (avoids 24h cache masking real errors)
  // Also sends receipt to simulate real payment conditions (fiscalization check).
  const hourlyKey = `freelancecalc-diag-${new Date().toISOString().slice(0, 13)}`; // changes every hour
  let paymentCreationTest: {
    ok: boolean;
    status?: number;
    paymentId?: string;
    confirmationUrl?: string;
    error?: string;
    rawError?: string;
    yookassaCode?: string;
  } | null = null;

  if (auth && yookassaLiveTest?.ok) {
    try {
      const testRes = await fetch("https://api.yookassa.ru/v3/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotence-Key": hourlyKey,
          Authorization: auth,
        },
        body: JSON.stringify({
          amount: { value: "1.00", currency: "RUB" },
          capture: false,
          confirmation: {
            type: "redirect",
            return_url: "https://freelancecalc.ru/payment/success",
          },
          description: "Диагностический тест (не настоящий платёж)",
          metadata: { diagnostic: true },
          // Include receipt to test fiscalization (mirrors real payment flow)
          receipt: {
            customer: { email: "diagnostic@freelancecalc.ru" },
            items: [
              {
                description: "PDF «Рыночные ставки фрилансеров» Q1 2026",
                quantity: "1.00",
                amount: { value: "1.00", currency: "RUB" },
                vat_code: 1,
                payment_mode: "full_payment",
                payment_subject: "intellectual_activity",
              },
            ],
          },
        }),
      });

      if (testRes.ok) {
        const testData = await testRes.json();
        paymentCreationTest = {
          ok: true,
          status: testRes.status,
          paymentId: testData.id,
          confirmationUrl: testData.confirmation?.confirmation_url,
        };
      } else {
        const errText = await testRes.text();
        let parsedError: string = errText.slice(0, 600);
        let yookassaCode: string | undefined;
        try {
          const parsed = JSON.parse(errText);
          parsedError = parsed.description ?? parsed.message ?? errText.slice(0, 600);
          if (parsed.parameter) parsedError += ` (параметр: ${parsed.parameter})`;
          if (parsed.code) yookassaCode = parsed.code;
        } catch { /* not JSON */ }

        paymentCreationTest = { ok: false, status: testRes.status, error: parsedError, rawError: errText.slice(0, 600), yookassaCode };
        issues.push(`❌ Создание платежа провалилось (${testRes.status}) code=${yookassaCode ?? "?"}: ${parsedError}`);
      }
    } catch (e) {
      paymentCreationTest = { ok: false, error: String(e) };
      issues.push(`Сетевая ошибка при создании тестового платежа: ${String(e)}`);
    }
  }

  const overallStatus = issues.length === 0 ? "OK" : "ERROR";

  return NextResponse.json({
    status: overallStatus,
    issues,
    config: {
      YOOKASSA_SHOP_ID: shopId ? `✅ установлен (${shopId.length} символов)` : "❌ НЕ установлен",
      YOOKASSA_SECRET_KEY: secretKey ? `✅ установлен (${secretKey.length} символов)` : "❌ НЕ установлен",
      FALLBACK_PAYMENT_URL: fallbackUrl ? `✅ ${fallbackUrl}` : "не установлен",
      NEXT_PUBLIC_SBP_PHONE: sbpPhone ? `✅ ${sbpPhone}` : "не установлен",
      NEXT_PUBLIC_BASE_URL: baseUrl ?? "не установлен (дефолт: https://freelancecalc.ru)",
    },
    yookassaLiveTest,
    paymentCreationTest,
    hint:
      overallStatus === "OK"
        ? "✅ Всё работает! Попробуй оплату на /benchmark"
        : "❌ Есть проблемы. Смотри поле issues выше — там точная причина и как починить.",
  });
}
