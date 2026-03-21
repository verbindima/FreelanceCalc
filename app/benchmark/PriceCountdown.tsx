"use client";

import { useEffect, useState } from "react";

// Price increases on April 7, 2026 (early-bird window closes)
const PRICE_INCREASE_DATE = new Date("2026-04-07T00:00:00+03:00");

function getDaysWord(n: number): string {
  if (n % 100 >= 11 && n % 100 <= 19) return "дней";
  const r = n % 10;
  if (r === 1) return "день";
  if (r >= 2 && r <= 4) return "дня";
  return "дней";
}

export default function PriceCountdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    function calcDays() {
      const now = new Date();
      const diff = PRICE_INCREASE_DATE.getTime() - now.getTime();
      const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
      setDaysLeft(days);
    }
    calcDays();
    const timer = setInterval(calcDays, 60_000);
    return () => clearInterval(timer);
  }, []);

  if (daysLeft === null) return null;

  // After deadline: show current price info instead of countdown
  if (daysLeft === 0) {
    return (
      <div className="rounded-xl p-4 flex items-center gap-3 border bg-slate-50 border-slate-200">
        <span className="text-2xl">📊</span>
        <div>
          <div className="font-bold text-sm text-slate-800">
            Актуальная цена — <span className="text-lg">349 ₽</span>
          </div>
          <div className="text-xs mt-0.5 text-slate-500">
            Q1 2026 · 22 специальности · 10 городов · Junior / Mid / Senior
          </div>
        </div>
      </div>
    );
  }

  const isUrgent = daysLeft <= 21;

  return (
    <div
      className={`rounded-xl p-4 flex items-center gap-3 border ${
        isUrgent
          ? "bg-red-50 border-red-200"
          : "bg-amber-50 border-amber-200"
      }`}
    >
      <span className="text-2xl">{isUrgent ? "🚨" : "⏳"}</span>
      <div>
        <div
          className={`font-bold text-sm ${
            isUrgent ? "text-red-800" : "text-amber-800"
          }`}
        >
          До повышения цены:{" "}
          <span className="text-lg">
            {daysLeft} {getDaysWord(daysLeft)}
          </span>
        </div>
        <div
          className={`text-xs mt-0.5 ${
            isUrgent ? "text-red-600" : "text-amber-600"
          }`}
        >
          С 7 апреля цена вырастет на 40% — с 249 до 349 ₽
        </div>
      </div>
    </div>
  );
}
