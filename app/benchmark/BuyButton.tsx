"use client";

import { useState } from "react";
import { ymGoal } from "@/app/components/YandexMetrica";

// СБП manual payment: set NEXT_PUBLIC_SBP_PHONE in Vercel to instantly enable payments.
// Format: "+79991234567" (with country code). No credentials, no API — just phone number.
const SBP_PHONE = process.env.NEXT_PUBLIC_SBP_PHONE;

const VIRAL_SHARE_URL = "https://freelancecalc.ru/benchmark?utm_source=share&utm_medium=buy_viral&utm_campaign=price_lock";
const VIRAL_SHARE_TEXT = "Зафиксировал цену 249 ₽ на бенчмарк ставок фрилансеров — с 7 апреля будет 349 ₽. Успей тоже 👇";

function LeadSuccessViralBlock() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(VIRAL_SHARE_URL).then(() => {
      setCopied(true);
      ymGoal("viral_link_copied_buy_success");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleTelegram = () => {
    ymGoal("viral_telegram_clicked_buy_success");
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(VIRAL_SHARE_URL)}&text=${encodeURIComponent(VIRAL_SHARE_TEXT)}`,
      "_blank"
    );
  };

  return (
    <div className="mt-3 pt-3 border-t border-green-200">
      <p className="text-xs font-semibold text-green-800 mb-2">
        📢 Помоги коллеге тоже зафиксировать 249 ₽:
      </p>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={handleTelegram}
          className="flex items-center gap-1 text-xs bg-[#229ED9] hover:bg-[#1a8bc4] text-white font-medium px-2.5 py-1.5 rounded-lg transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </button>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs bg-green-100 hover:bg-green-200 text-green-800 font-medium px-2.5 py-1.5 rounded-lg transition-colors border border-green-300"
        >
          {copied ? "✓ Скопировано!" : "🔗 Скопировать"}
        </button>
      </div>
    </div>
  );
}

const PRICE_INCREASE_DATE = new Date("2026-04-07T00:00:00+03:00");
const currentPrice = Date.now() < PRICE_INCREASE_DATE.getTime() ? 249 : 349;

export default function BuyButton({ label = `Купить полный PDF — ${currentPrice} ₽` }: { label?: string }) {
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  // СБП manual payment state
  const [sbpOpen, setSbpOpen] = useState(false);
  const [sbpEmail, setSbpEmail] = useState("");
  const [sbpLoading, setSbpLoading] = useState(false);
  const [sbpDone, setSbpDone] = useState(false);

  const handleSbpConfirm = async () => {
    if (!sbpEmail.includes("@")) return;
    setSbpLoading(true);
    ymGoal("sbp_payment_confirmed");
    try {
      await fetch("/api/notify-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: sbpEmail, source: "sbp_manual" }),
      });
    } catch { /* silent */ }
    setSbpDone(true);
    setSbpLoading(false);
  };

  const handlePayment = async () => {
    ymGoal("upsell_click");
    // Fast path: СБП manual payment (no API call needed)
    if (SBP_PHONE) {
      setSbpOpen(true);
      return;
    }
    setLoading(true);
    setUnavailable(false);
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
            <div>
              <p className="text-sm font-semibold text-green-700 mb-1">
                {currentPrice === 249 ? "✅ Зафиксировали! Напишем как откроется оплата." : "✅ Отлично! Напишем, как только оплата заработает."}
              </p>
              <LeadSuccessViralBlock />
            </div>
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

  // СБП manual payment modal
  if (sbpOpen && SBP_PHONE) {
    return (
      <div className="text-left w-full max-w-sm">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-4">
          <p className="text-sm font-bold text-indigo-900 mb-1">
            💳 Оплата через СБП — {currentPrice} ₽
          </p>
          {sbpDone ? (
            <div>
              <p className="text-sm font-semibold text-green-700 mb-1">
                ✅ Спасибо! Проверим оплату и вышлем PDF в течение нескольких часов.
              </p>
              <LeadSuccessViralBlock />
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg border border-indigo-200 px-3 py-2 mb-3">
                <p className="text-xs text-gray-500 mb-0.5">Перевести по СБП:</p>
                <p className="text-lg font-bold text-indigo-700 tracking-wide">{SBP_PHONE}</p>
                <p className="text-xs text-gray-500 mt-0.5">Сумма: <strong>{currentPrice} ₽</strong> · Любой банк (Тинькофф, Сбер, СБП)</p>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                После перевода укажи email — вышлем PDF сразу после проверки:
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={sbpEmail}
                  onChange={(e) => setSbpEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSbpConfirm()}
                  placeholder="твой@email.ru"
                  className="flex-1 text-sm border border-indigo-300 rounded-lg px-3 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-0"
                />
                <button
                  onClick={handleSbpConfirm}
                  disabled={sbpLoading || !sbpEmail.includes("@")}
                  className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  {sbpLoading ? "…" : "Оплатил →"}
                </button>
              </div>
            </>
          )}
        </div>
        {!sbpDone && (
          <button
            onClick={() => setSbpOpen(false)}
            className="text-xs text-gray-400 hover:text-gray-600 mt-2 hover:underline"
          >
            ← Назад
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
