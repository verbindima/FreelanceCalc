"use client";

import { useState, useCallback, useEffect } from "react";
import { ymGoal } from "@/app/components/YandexMetrica";

const PRICE_INCREASE_DATE = new Date("2026-04-07T00:00:00+03:00");

function getDaysLeft(): number {
  const diff = PRICE_INCREASE_DATE.getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function BenchmarkLeadForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    setDaysLeft(getDaysLeft());
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!email.includes("@")) return;
    setLoading(true);
    ymGoal("benchmark_lead_captured");
    try {
      await fetch("/api/notify-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "benchmark_price_lock" }),
      });
    } catch {
      // Optimistic UX: show success even on network errors
    }
    setSubmitted(true);
    setLoading(false);
  }, [email]);

  const isPriceActive = daysLeft !== null && daysLeft > 0;

  if (submitted) {
    return (
      <div className="mb-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="font-semibold text-emerald-800 mb-1">
          {isPriceActive ? "Цена 249 ₽ зафиксирована!" : "Записали!"}
        </p>
        <p className="text-sm text-emerald-700">
          {isPriceActive
            ? "Напишем как только откроется оплата — по вашей цене, без повышения."
            : "Пришлём ссылку на Q2 бенчмарк (июнь 2026) первым делом."}
        </p>
      </div>
    );
  }

  return (
    <div className={`mb-10 rounded-2xl p-6 border ${isPriceActive ? "bg-amber-50 border-amber-200" : "bg-slate-50 border-slate-200"}`}>
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl mt-0.5">{isPriceActive ? "⚡" : "📬"}</span>
        <div>
          <p className={`font-bold text-sm ${isPriceActive ? "text-amber-900" : "text-slate-800"}`}>
            {isPriceActive && daysLeft !== null
              ? `Зафиксируй цену 249 ₽ — осталось ${daysLeft} ${daysLeft === 1 ? "день" : daysLeft <= 4 ? "дня" : "дней"}`
              : "Получи Q2 бенчмарк первым"}
          </p>
          <p className={`text-sm mt-0.5 leading-relaxed ${isPriceActive ? "text-amber-800" : "text-slate-500"}`}>
            {isPriceActive
              ? <>С 7 апреля цена вырастет до <strong>349 ₽</strong>. Оставь email — уведомим как откроется оплата, и цена&nbsp;249&nbsp;₽ будет зафиксирована для тебя.</>
              : "Оставь email — пришлём Q2 бенчмарк (июнь 2026) и уведомление об оплате."}
          </p>
        </div>
      </div>
      <div className="flex gap-2 max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="ваш@email.ru"
          className={`flex-1 text-sm border rounded-lg px-3 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 min-w-0 ${
            isPriceActive
              ? "border-amber-300 focus:ring-amber-400"
              : "border-slate-300 focus:ring-indigo-400"
          }`}
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !email.includes("@")}
          className={`text-sm font-semibold disabled:opacity-40 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
            isPriceActive
              ? "bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300"
              : "bg-slate-700 hover:bg-slate-800"
          }`}
        >
          {loading ? "…" : isPriceActive ? "Зафиксировать 249 ₽ →" : "Уведомить →"}
        </button>
      </div>
      <p className={`text-xs mt-2 ${isPriceActive ? "text-amber-600" : "text-slate-400"}`}>
        {isPriceActive
          ? "Без спама. Только уведомление об открытии оплаты по зафиксированной цене."
          : "Без спама. Только Q2 бенчмарк + уведомление об оплате."}
      </p>
    </div>
  );
}
