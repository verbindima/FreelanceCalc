"use client";

import { useState, useMemo, useCallback } from "react";
import { ymGoal } from "../../components/YandexMetrica";

const BENCHMARK_PRICE = Date.now() < new Date("2026-04-07T00:00:00+03:00").getTime() ? 249 : 349;

type TaxRegime = "self_employed_fl" | "self_employed_ul" | "ip_usn6" | "ip_usn15" | "none";

const TAX_RATES: Record<TaxRegime, number> = {
  self_employed_fl: 0.04,
  self_employed_ul: 0.06,
  ip_usn6: 0.06,
  ip_usn15: 0.15,
  none: 0,
};

const TAX_LABELS: Record<TaxRegime, string> = {
  self_employed_fl: "Самозанятый — клиенты физлица (НПД 4%)",
  self_employed_ul: "Самозанятый — клиенты компании (НПД 6%)",
  ip_usn6: "ИП УСН «Доходы» (6%)",
  ip_usn15: "ИП УСН «Доходы минус расходы» (15%)",
  none: "Без налогов / физлицо",
};

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

type Props = {
  defaultIncome: number;
  defaultHours: number;
  defaultLoad: number;
  specialty: string;
};

export default function SpecialtyCalc({ defaultIncome, defaultHours, defaultLoad, specialty }: Props) {
  const [netMonthly, setNetMonthly] = useState(defaultIncome);
  const [taxRegime, setTaxRegime] = useState<TaxRegime>("self_employed_fl");
  const [hoursPerDay, setHoursPerDay] = useState(defaultHours);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [vacationDays, setVacationDays] = useState(28);
  const [billableRatio, setBillableRatio] = useState(defaultLoad);
  const [shareCopied, setShareCopied] = useState(false);

  const results = useMemo(() => {
    const taxRate = TAX_RATES[taxRegime];
    const grossMonthly = taxRate < 1 ? netMonthly / (1 - taxRate) : netMonthly;
    const grossAnnual = grossMonthly * 12;
    const workingDaysPerYear = Math.round(52 * daysPerWeek - vacationDays);
    const billableDays = workingDaysPerYear * (billableRatio / 100);
    const billableHours = billableDays * hoursPerDay;
    const dailyRate = billableDays > 0 ? grossAnnual / billableDays : 0;
    const hourlyRate = billableHours > 0 ? grossAnnual / billableHours : 0;
    const monthlyGross = grossMonthly;
    const taxPerMonth = grossMonthly - netMonthly;
    return { hourlyRate, dailyRate, monthlyGross, taxPerMonth, billableDays };
  }, [netMonthly, taxRegime, hoursPerDay, daysPerWeek, vacationDays, billableRatio]);

  const handleShare = useCallback(async () => {
    ymGoal("share_click", { specialty });
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    } catch {
      window.prompt("Скопируйте ссылку:", url);
    }
  }, [specialty]);

  const handleUpsell = useCallback(() => {
    ymGoal("upsell_click", { specialty });
    window.location.href = "/?utm_source=specialty&utm_medium=upsell#pdf";
  }, [specialty]);

  return (
    <div className="space-y-5">
      {/* Inputs */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Желаемый чистый доход в месяц
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={20000}
              max={1000000}
              step={5000}
              value={netMonthly}
              onChange={(e) => setNetMonthly(+e.target.value)}
              className="flex-1 accent-indigo-600"
            />
            <input
              type="number"
              value={netMonthly}
              onChange={(e) => setNetMonthly(Math.max(0, +e.target.value))}
              className="w-32 border border-slate-300 rounded-lg px-3 py-1.5 text-right text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Налоговый режим
          </label>
          <select
            value={taxRegime}
            onChange={(e) => setTaxRegime(e.target.value as TaxRegime)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {(Object.keys(TAX_LABELS) as TaxRegime[]).map((key) => (
              <option key={key} value={key}>{TAX_LABELS[key]}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Часов в день</label>
            <input
              type="number" min={1} max={24} value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Math.min(24, Math.max(1, +e.target.value)))}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Загрузка: {billableRatio}%</label>
            <input
              type="range" min={10} max={100} step={5} value={billableRatio}
              onChange={(e) => setBillableRatio(+e.target.value)}
              className="w-full mt-2 accent-indigo-600"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-indigo-600 text-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-indigo-100">Ваша ставка</h2>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs bg-white/15 hover:bg-white/25 text-white px-3 py-1.5 rounded-lg transition-colors"
          >
            {shareCopied ? "✅ Скопировано!" : "🔗 Поделиться"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "В час", value: fmt(results.hourlyRate), highlight: true },
            { label: "В день", value: fmt(results.dailyRate) },
            { label: "В месяц (gross)", value: fmt(results.monthlyGross) },
            { label: "Налог в месяц", value: fmt(results.taxPerMonth) },
          ].map(({ label, value, highlight }) => (
            <div key={label} className={`rounded-xl p-4 ${highlight ? "bg-white" : "bg-indigo-700"}`}>
              <p className={`text-xs font-medium ${highlight ? "text-indigo-400" : "text-indigo-300"}`}>{label}</p>
              <p className={`text-xl font-bold mt-0.5 ${highlight ? "text-indigo-700" : "text-white"}`}>{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-indigo-300">
          Расчёт основан на {Math.round(results.billableDays)} оплачиваемых рабочих днях в год
        </p>
      </section>

      {/* Upsell */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-slate-800 text-sm">📊 Сравните со рынком</h3>
            <p className="text-xs text-slate-600 mt-1">
              PDF с медианными ставками по 20+ специальностям и городам. Обновлён в марте 2026.
            </p>
          </div>
          <button
            onClick={handleUpsell}
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            Купить PDF — {BENCHMARK_PRICE} ₽
          </button>
        </div>
      </section>
    </div>
  );
}
