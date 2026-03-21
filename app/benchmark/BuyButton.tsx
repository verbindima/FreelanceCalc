"use client";

import { useState } from "react";

function ymGoal(name: string) {
  if (typeof window !== "undefined" && typeof (window as unknown as Record<string, unknown>).ym === "function") {
    const id = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
    (window as unknown as Record<string, (...args: unknown[]) => void>).ym?.(id, "reachGoal", name);
  }
}

const PRICE_INCREASE_DATE = new Date("2026-04-07T00:00:00+03:00");
const currentPrice = Date.now() < PRICE_INCREASE_DATE.getTime() ? 249 : 349;

export default function BuyButton({ label = `Купить полный PDF — ${currentPrice} ₽` }: { label?: string }) {
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    setUnavailable(false);
    ymGoal("upsell_click");
    try {
      const res = await fetch("/api/payment", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        ymGoal("payment_started");
        window.location.href = data.url;
      } else {
        setUnavailable(true);
        setLoading(false);
      }
    } catch {
      setUnavailable(true);
      setLoading(false);
    }
  };

  const handleLeadSubmit = async () => {
    if (!leadEmail.includes("@")) return;
    setLeadLoading(true);
    ymGoal("lead_captured");
    try {
      await fetch("/api/notify-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: leadEmail }),
      });
    } catch {
      // silent
    }
    setLeadSubmitted(true);
    setLeadLoading(false);
  };

  if (unavailable) {
    return (
      <div className="text-left w-full max-w-sm">
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-4 mb-2">
          <p className="text-sm font-semibold text-amber-800 mb-1">
            {currentPrice === 249 ? "⚡ Зафиксируй цену 249 ₽ до 7 апреля" : "📬 Получи PDF первым"}
          </p>
          <p className="text-xs text-amber-700 leading-relaxed mb-3">
            {currentPrice === 249
              ? <>С 7 апреля цена вырастет до <strong>349 ₽</strong> — потеряешь 100 ₽. Оставь почту, забронируем цену и пришлём PDF как только откроется оплата.</>
              : "Оплата открывается скоро. Оставь почту — пришлём PDF как только будет готово."}
          </p>
          {leadSubmitted ? (
            <p className="text-sm font-semibold text-green-700">
              {currentPrice === 249 ? "✅ Зафиксировали! Напишем как откроется оплата." : "✅ Отлично! Напишем, как только оплата заработает."}
            </p>
          ) : (
            <div className="flex gap-2">
              <input
                type="email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLeadSubmit()}
                placeholder="твой@email.ru"
                className="flex-1 text-sm border border-amber-300 rounded-lg px-3 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 min-w-0"
              />
              <button
                onClick={handleLeadSubmit}
                disabled={leadLoading || !leadEmail.includes("@")}
                className="text-sm font-semibold bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                {leadLoading ? "…" : "Зафиксировать →"}
              </button>
            </div>
          )}
        </div>
        {!leadSubmitted && (
          <button
            onClick={() => { setUnavailable(false); setLeadEmail(""); }}
            className="text-xs text-indigo-600 hover:underline"
          >
            Попробовать ещё раз
          </button>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm"
    >
      {loading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Переход к оплате…
        </>
      ) : (
        label
      )}
    </button>
  );
}
