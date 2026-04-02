"use client";

import { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { ymGoal } from "../../components/YandexMetrica";

const CALC_URL = "https://freelancecalc.ru";
const REPORT_URL = "https://freelancecalc.ru/benchmark/report?key=2026q1";

const TG_SHARE_TEXT =
  `💼 Купил бенчмарк ставок фрилансеров на Q2 2026 — очень полезно.\n\n` +
  `Prompt-инженер в Москве: 1 900–3 100 ₽/ч\n` +
  `ML/AI-инженер: 4 000–6 500 ₽/ч\n` +
  `Frontend: 1 700–3 200 ₽/ч\n\n` +
  `Бесплатный калькулятор ставки (+ PDF-бенчмарк 32 специальности × 10 городов) →\n${CALC_URL}`;

export default function PaymentSuccess() {
  const [copied, setCopied] = useState(false);
  const [reportCopied, setReportCopied] = useState(false);

  // Fire conversion goal once on mount — tracked in Яндекс.Метрика
  useEffect(() => {
    ymGoal("payment_complete", { product: "pdf_market_rates", price: 249 });
  }, []);

  const handleCopyReport = useCallback(async () => {
    ymGoal("post_purchase_copy_report_link");
    try {
      await navigator.clipboard.writeText(REPORT_URL);
      setReportCopied(true);
      setTimeout(() => setReportCopied(false), 2500);
    } catch {
      window.prompt("Скопируйте ссылку на отчёт:", REPORT_URL);
    }
  }, []);

  const handleTelegramShare = useCallback(() => {
    ymGoal("post_purchase_tg_share");
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(CALC_URL)}&text=${encodeURIComponent(TG_SHARE_TEXT)}`;
    window.open(tgUrl, "_blank", "noopener,noreferrer");
  }, []);

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
            href={REPORT_URL}
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
              <li>• Медианные ставки по 26 специальностям</li>
              <li>• Разбивка по 10 городам России</li>
              <li>• 3 уровня опыта: джун / мид / сеньор</li>
              <li>• Актуальные данные за Q1 2026</li>
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
