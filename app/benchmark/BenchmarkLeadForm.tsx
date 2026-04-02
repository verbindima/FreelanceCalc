"use client";

import { useState, useCallback, useEffect } from "react";
import { ymGoal } from "@/app/components/YandexMetrica";

const PRICE_INCREASE_DATE = new Date("2026-04-07T00:00:00+03:00");

function getDaysLeft(): number {
  const diff = PRICE_INCREASE_DATE.getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

const SHARE_URL = "https://freelancecalc.ru/benchmark?utm_source=share&utm_medium=lead_viral&utm_campaign=price_lock";
const SHARE_TEXT = "Зафиксировал цену 249 ₽ на бенчмарк ставок фрилансеров — с 7 апреля будет 349 ₽. Успей тоже 👇";

function ViralShareBlock({ daysLeft }: { daysLeft: number | null }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SHARE_URL).then(() => {
      setCopied(true);
      ymGoal("viral_link_copied_lead_success");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleTelegram = () => {
    ymGoal("viral_telegram_clicked_lead_success");
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(SHARE_URL)}&text=${encodeURIComponent(SHARE_TEXT)}`,
      "_blank"
    );
  };

  return (
    <div className="mt-4 pt-4 border-t border-emerald-200">
      <p className="text-sm font-semibold text-emerald-800 mb-2">
        {daysLeft && daysLeft > 0
          ? `📢 Помоги коллеге тоже зафиксировать 249 ₽ до 7 апреля:`
          : `📢 Поделись с коллегами:`}
      </p>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={handleTelegram}
          className="flex items-center gap-1.5 text-sm bg-[#229ED9] hover:bg-[#1a8bc4] text-white font-medium px-3 py-1.5 rounded-lg transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </button>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-sm bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-medium px-3 py-1.5 rounded-lg transition-colors border border-emerald-300"
        >
          {copied ? "✓ Скопировано!" : "🔗 Скопировать ссылку"}
        </button>
      </div>
    </div>
  );
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
      <div className="mb-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
        <div className="text-center">
          <div className="text-3xl mb-2">✅</div>
          <p className="font-semibold text-emerald-800 mb-1">
            {isPriceActive ? "Напомним!" : "Записали!"}
          </p>
          <p className="text-sm text-emerald-700">
            {isPriceActive
              ? "Пришлём ссылку на бенчмарк за 249 ₽ до 7 апреля — чтобы не забыть."
              : "Пришлём ссылку на Q2 бенчмарк (июнь 2026) первым делом."}
          </p>
        </div>
        <ViralShareBlock daysLeft={daysLeft} />
      </div>
    );
  }

  return (
    <div className={`mb-10 rounded-2xl p-6 border ${isPriceActive ? "bg-amber-50 border-amber-200" : "bg-slate-50 border-slate-200"}`}>
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl mt-0.5">{isPriceActive ? "📩" : "📬"}</span>
        <div>
          <p className={`font-bold text-sm ${isPriceActive ? "text-amber-900" : "text-slate-800"}`}>
            {isPriceActive && daysLeft !== null
              ? `Не готов платить прямо сейчас? Пришлём напоминание`
              : "Получи Q2 бенчмарк первым"}
          </p>
          <p className={`text-sm mt-0.5 leading-relaxed ${isPriceActive ? "text-amber-800" : "text-slate-500"}`}>
            {isPriceActive
              ? <>Оставь email — пришлём ссылку на бенчмарк за <strong>249 ₽</strong> до 7 апреля. После — будет <strong>349 ₽</strong>.</>
              : "Оставь email — пришлём Q2 бенчмарк (июнь 2026) как выйдет."}
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
          {loading ? "…" : isPriceActive ? "Напомнить →" : "Уведомить →"}
        </button>
      </div>
      <p className={`text-xs mt-2 ${isPriceActive ? "text-amber-600" : "text-slate-400"}`}>
        {isPriceActive
          ? "Без спама. Только ссылка на бенчмарк — купишь когда удобно, пока 249 ₽."
          : "Без спама. Только Q2 бенчмарк как выйдет."}
      </p>
    </div>
  );
}
