"use client";

import { useState, useMemo, useEffect } from "react";

type TaxRegime = "self_employed_fl" | "self_employed_ul" | "ip_usn6" | "ip_usn15" | "none";

const TAX_RATES: Record<TaxRegime, number> = {
  self_employed_fl: 0.04,
  self_employed_ul: 0.06,
  ip_usn6: 0.06,
  ip_usn15: 0.15,
  none: 0,
};

const TAX_LABELS: Record<TaxRegime, string> = {
  self_employed_fl: "Самозанятый — физлица (4%)",
  self_employed_ul: "Самозанятый — компании (6%)",
  ip_usn6: "ИП УСН «Доходы» (6%)",
  ip_usn15: "ИП УСН «Доходы − расходы» (15%)",
  none: "Без налогов",
};

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

const BASE_URL = "https://freelancecalc.ru";

export default function WidgetCalc() {
  const [netMonthly, setNetMonthly] = useState(150000);
  const [taxRegime, setTaxRegime] = useState<TaxRegime>("self_employed_fl");
  const [vacationDays, setVacationDays] = useState(28);
  const [billableRatio, setBillableRatio] = useState(70);

  const results = useMemo(() => {
    const taxRate = TAX_RATES[taxRegime];
    const grossMonthly = taxRate < 1 ? netMonthly / (1 - taxRate) : netMonthly;
    const grossAnnual = grossMonthly * 12;
    const workingDaysPerYear = Math.round(52 * 5 - vacationDays);
    const billableDays = workingDaysPerYear * (billableRatio / 100);
    const billableHours = billableDays * 8;
    const dailyRate = billableDays > 0 ? grossAnnual / billableDays : 0;
    const hourlyRate = billableHours > 0 ? grossAnnual / billableHours : 0;
    return { hourlyRate, dailyRate };
  }, [netMonthly, taxRegime, vacationDays, billableRatio]);

  // Tell parent frame our height so it can resize the iframe
  useEffect(() => {
    const height = document.body.scrollHeight;
    window.parent.postMessage({ type: "freelancecalc-resize", height }, "*");
  });

  const shareUrl = `${BASE_URL}/?income=${netMonthly}&tax=${taxRegime}&vac=${vacationDays}&load=${billableRatio}`;

  return (
    <div className="font-sans text-sm text-slate-800 p-4 space-y-4">
      {/* Header */}
      <div className="text-center pb-2 border-b border-slate-100">
        <p className="font-bold text-base text-slate-900">Калькулятор ставки фрилансера</p>
        <p className="text-xs text-slate-400 mt-0.5">Введите доход — получите ставку</p>
      </div>

      {/* Income */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
            Доход на руки / месяц
          </label>
          <span className="font-bold text-indigo-600">{fmt(netMonthly)}</span>
        </div>
        <input
          type="range"
          min={30000}
          max={600000}
          step={5000}
          value={netMonthly}
          onChange={(e) => setNetMonthly(+e.target.value)}
          className="w-full accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-0.5">
          <span>30 000 ₽</span><span>600 000 ₽</span>
        </div>
      </div>

      {/* Tax */}
      <div>
        <label className="block font-semibold text-slate-700 text-xs uppercase tracking-wide mb-1">
          Налоговый режим
        </label>
        <select
          value={taxRegime}
          onChange={(e) => setTaxRegime(e.target.value as TaxRegime)}
          className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
        >
          {(Object.keys(TAX_LABELS) as TaxRegime[]).map((k) => (
            <option key={k} value={k}>{TAX_LABELS[k]}</option>
          ))}
        </select>
      </div>

      {/* Vacation + Load */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block font-semibold text-slate-700 text-xs uppercase tracking-wide mb-1">
            Отпуск (дней)
          </label>
          <input
            type="number"
            min={0} max={120}
            value={vacationDays}
            onChange={(e) => setVacationDays(Math.min(120, Math.max(0, +e.target.value)))}
            className="w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 text-xs uppercase tracking-wide mb-1">
            Загрузка: {billableRatio}%
          </label>
          <input
            type="range" min={20} max={100} step={5}
            value={billableRatio}
            onChange={(e) => setBillableRatio(+e.target.value)}
            className="w-full mt-2 accent-indigo-600"
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 grid grid-cols-2 gap-3">
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-0.5">Часовая ставка</p>
          <p className="text-xl font-bold text-indigo-700">{fmt(Math.round(results.hourlyRate))}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-0.5">Дневная ставка</p>
          <p className="text-xl font-bold text-indigo-700">{fmt(Math.round(results.dailyRate))}</p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100">
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-500 hover:text-indigo-700 font-medium transition-colors"
        >
          Детальный расчёт на FreelanceCalc →
        </a>
        <a
          href={BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
        >
          freelancecalc.ru
        </a>
      </div>
    </div>
  );
}
