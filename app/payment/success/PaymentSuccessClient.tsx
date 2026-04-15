"use client";

import { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { ymGoal } from "../../components/YandexMetrica";

const CALC_URL = "https://freelancecalc.ru";
const NEXT_QUARTER = "Q3 2026 (сентябрь)";

const TG_SHARE_TEXT =
  `💼 Купил бенчмарк ставок фрилансеров на Q2 2026 — очень полезно.\n\n` +
  `Prompt-инженер в Москве: 1 900–3 100 ₽/ч\n` +
  `ML/AI-инженер: 4 000–6 500 ₽/ч\n` +
  `Frontend: 1 700–3 200 ₽/ч\n\n` +
  `Бесплатный калькулятор ставки (+ PDF-бенчмарк 32 специальности × 10 городов) →\n${CALC_URL}`;

interface PaymentSuccessClientProps {
  reportUrl: string;
}

export default function PaymentSuccessClient({ reportUrl }: PaymentSuccessClientProps) {
  const [copied, setCopied] = useState(false);
  const [reportCopied, setReportCopied] = useState(false);
  const [q3Email, setQ3Email] = useState("");
  const [q3Sent, setQ3Sent] = useState(false);
  const [q3Loading, setQ3Loading] = useState(false);

  // Fire conversion goal once on mount — tracked in Яндекс.Метрика
  useEffect(() => {
    ymGoal("payment_complete", { product: "pdf_market_rates", price: 249 });
  }, []);

  const handleCopyReport = useCallback(async () => {
    ymGoal("post_purchase_copy_report_link");
    try {
      await navigator.clipboard.writeText(reportUrl);
      setReportCopied(true);
      setTimeout(() => setReportCopied(false), 2500);
    } catch {
      window.prompt("Скопируйте ссылку на отчёт:", reportUrl);
    }
  }, [reportUrl]);

  const handleTelegramShare = useCallback(() => {
    ymGoal("post_purchase_tg_share");
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(CALC_URL)}&text=${encodeURIComponent(TG_SHARE_TEXT)}`;
    window.open(tgUrl, "_blank", "noopener,noreferrer");
  }, []);

  const handleQ3Subscribe = useCallback(async () => {
    if (!q3Email.trim()) return;
    setQ3Loading(true);
    ymGoal("q3_update_subscribe");
    try {
      await fetch("/api/notify-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: q3Email.trim(), source: "q2_subscriber" }),
      });
      setQ3Sent(true);
    } catch {
      // silent fail — goal is already tracked
      setQ3Sent(true);
    } finally {
      setQ3Loading(false);
    }
  }, [q3Email]);

  const handleCopyLink = useCallback(async () => {
    ymGoal("post_purchase_copy_link");
    try {
      await navigator.clipboard.writeText(CALC_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Скопируйте ссылку:", CALC_URL);
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full space-y-4">
        {/* Confirmation card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Спасибо за покупку!
          </h1>
          <p className="text-slate-600 text-sm mb-4">
            Оплата подтверждена. Ваш отчёт готов — откройте прямо сейчас:
          </p>

          {/* Primary CTA — instant report access */}
          <a
            href={reportUrl}
            onClick={() => ymGoal("post_purchase_open_report")}
            className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold px-6 py-3.5 rounded-xl text-base transition-colors mb-3"
          >
            📊 Открыть отчёт
          </a>

          <button
            onClick={handleCopyReport}
            className="inline-flex items-center justify-center gap-2 w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 font-medium px-6 py-2.5 rounded-xl text-sm transition-colors mb-6"
          >
            {reportCopied ? "✅ Ссылка скопирована!" : "🔗 Скопировать ссылку на отчёт"}
          </button>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-indigo-700 font-medium mb-2">
              📊 Отчёт включает:
            </p>
            <ul className="text-sm text-indigo-600 space-y-1">
              <li>• Медианные ставки по <strong>32 специальностям</strong></li>
              <li>• Разбивка по 10 городам России</li>
              <li>• 3 уровня опыта: джун / мид / сеньор</li>
              <li>• Актуальные данные <strong>Q2 2026</strong> · <span className="text-cyan-600">новое: AI/ИИ специалисты</span></li>
            </ul>
          </div>

          <p className="text-xs text-slate-400 mb-4">
            Сохрани ссылку — она всегда доступна для повторного просмотра
          </p>

          <Link
            href="/"
            className="inline-block text-slate-500 hover:text-slate-700 text-sm transition-colors"
          >
            ← Вернуться к калькулятору
          </Link>
        </div>

        {/* Q3 update subscription */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <p className="text-sm font-bold text-emerald-800 mb-1">
            🔔 Получить {NEXT_QUARTER} бесплатно
          </p>
          <p className="text-xs text-emerald-700 mb-4 leading-relaxed">
            Как покупатель Q2 — ты получишь следующее обновление бесплатно. Оставь email, чтобы мы выслали ссылку в сентябре.
          </p>
          {q3Sent ? (
            <div className="text-sm font-semibold text-emerald-700 text-center py-2">
              ✅ Отлично! Пришлём Q3 в сентябре 2026
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="email"
                value={q3Email}
                onChange={(e) => setQ3Email(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleQ3Subscribe()}
                placeholder="твой@email.ru"
                className="flex-1 text-sm border border-emerald-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                onClick={handleQ3Subscribe}
                disabled={q3Loading || !q3Email.trim()}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                {q3Loading ? "…" : "Напомни →"}
              </button>
            </div>
          )}
        </div>

        {/* Virality block */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <p className="text-sm font-bold text-amber-800 mb-1">
            💬 Расскажи коллегам-фрилансерам
          </p>
          <p className="text-xs text-amber-700 mb-4 leading-relaxed">
            Помоги друзьям узнать свою реальную ставку — и не продешевить на переговорах.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleTelegramShare}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2AABEE] hover:bg-[#229ED9] active:bg-[#1e8ec3] text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
            >
              ✈️ Поделиться в Telegram
            </button>
            <button
              onClick={handleCopyLink}
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
            >
              {copied ? "✅ Скопировано!" : "🔗 Скопировать ссылку"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
