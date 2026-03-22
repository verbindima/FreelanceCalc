"use client";

import { useState, useCallback } from "react";
import { ymGoal } from "@/app/components/YandexMetrica";

export default function BenchmarkLeadForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (!email.includes("@")) return;
    setLoading(true);
    ymGoal("benchmark_lead_captured");
    try {
      await fetch("/api/notify-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "benchmark_page_lead" }),
      });
    } catch {
      // Optimistic UX: show success even on network errors
    }
    setSubmitted(true);
    setLoading(false);
  }, [email]);

  if (submitted) {
    return (
      <div className="mb-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="font-semibold text-emerald-800 mb-1">Записали!</p>
        <p className="text-sm text-emerald-700">
          Пришлём Q2 бенчмарк (июнь 2026) на почту первым делом.
          Как откроется оплата — тоже напишем.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl mt-0.5">📬</span>
        <div>
          <p className="font-semibold text-slate-800 text-sm">
            Оплата недоступна или нет карты РФ?
          </p>
          <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">
            Оставь email — пришлём бесплатный образец Q2 бенчмарка (июнь&nbsp;2026)
            и уведомим, когда откроется оплата.
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
          className="flex-1 text-sm border border-slate-300 rounded-lg px-3 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-0"
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !email.includes("@")}
          className="text-sm font-semibold bg-slate-700 hover:bg-slate-800 disabled:bg-slate-300 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          {loading ? "…" : "Уведомить →"}
        </button>
      </div>
      <p className="text-xs text-slate-400 mt-2">Без спама. Только Q2 бенчмарк + уведомление об оплате.</p>
    </div>
  );
}
