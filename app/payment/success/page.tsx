"use client";

import { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { ymGoal } from "../../components/YandexMetrica";

const CALC_URL = "https://freelancecalc.ru";

const TG_SHARE_TEXT =
  `💼 Купил бенчмарк ставок фрилансеров на Q1 2026 — очень полезно.\n\n` +
  `ML/AI-инженер в Москве: 4 000–6 500 ₽/ч\n` +
  `Frontend: 1 700–3 200 ₽/ч\n` +
  `Копирайтер: 700–1 700 ₽/ч\n\n` +
  `Бесплатный калькулятор ставки (+ PDF-бенчмарк по всем городам) →\n${CALC_URL}`;

export default function PaymentSuccess() {
  const [copied, setCopied] = useState(false);

  // Fire conversion goal once on mount — tracked in Яндекс.Метрика
  useEffect(() => {
    ymGoal("payment_complete", { product: "pdf_market_rates", price: 249 });
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
          <p className="text-slate-600 text-sm mb-6">
            PDF «Рыночные ставки фрилансеров» отправлен на вашу почту, указанную
            при оплате. Если письмо не пришло — проверьте папку «Спам».
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-indigo-700 font-medium mb-2">
              📊 Отчёт включает:
            </p>
            <ul className="text-sm text-indigo-600 space-y-1">
              <li>• Медианные ставки по 26 специальностям</li>
              <li>• Разбивка по 26 городам России</li>
              <li>• Актуальные данные за Q1 2026</li>
            </ul>
          </div>

          <Link
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
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
