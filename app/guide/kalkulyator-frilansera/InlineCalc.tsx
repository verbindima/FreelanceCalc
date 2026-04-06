"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type TaxRegime = "self_employed_fl" | "self_employed_ul" | "ip_usn6" | "ip_usn15";

const TAX_RATES: Record<TaxRegime, number> = {
  self_employed_fl: 0.04,
  self_employed_ul: 0.06,
  ip_usn6: 0.06,
  ip_usn15: 0.15,
};

const TAX_LABELS: Record<TaxRegime, string> = {
  self_employed_fl: "Самозанятый — клиенты физлица (НПД 4%)",
  self_employed_ul: "Самозанятый — клиенты компании (НПД 6%)",
  ip_usn6: "ИП УСН «Доходы» (6%)",
  ip_usn15: "ИП УСН «Доходы минус расходы» (15%)",
};

// Annual fixed contributions for IP (2025-2026)
const IP_FIXED_CONTRIBUTIONS = 49500;

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU").format(Math.round(n));
}

function calcRate(
  netMonthly: number,
  regime: TaxRegime,
  hpd: number,
  vac: number,
  load: number
): { hourly: number; daily: number; gross: number } {
  const taxRate = TAX_RATES[regime];

  // Monthly gross needed before tax
  let monthlyFixedExtra = 0;
  if (regime === "ip_usn6" || regime === "ip_usn15") {
    // Spread annual contributions across 12 months
    monthlyFixedExtra = IP_FIXED_CONTRIBUTIONS / 12;
  }

  const grossMonthly = netMonthly / (1 - taxRate) + monthlyFixedExtra;

  // Working hours per year
  const workDaysPerYear = 248 - vac; // ~248 working days minus vacation
  const billableHours = workDaysPerYear * hpd * (load / 100);
  const billableHoursPerMonth = billableHours / 12;

  const hourly = grossMonthly / billableHoursPerMonth;
  const daily = hourly * hpd;

  return { hourly, daily, gross: grossMonthly };
}

function getContext(hourly: number): {
  emoji: string;
  label: string;
  color: string;
  tip: string;
} {
  if (hourly < 700)
    return {
      emoji: "📉",
      label: "Ниже входного порога",
      color: "text-red-700 bg-red-50 border-red-200",
      tip: "Даже начинающий копирайтер берёт 700–800 ₽/час. Повышайте квалификацию или пересмотрите нишу.",
    };
  if (hourly < 1200)
    return {
      emoji: "📊",
      label: "Нижний квартиль",
      color: "text-orange-700 bg-orange-50 border-orange-200",
      tip: "Медиана большинства специальностей — 1 200–2 500 ₽/час. Проверьте, не занижаете ли ставку.",
    };
  if (hourly < 2000)
    return {
      emoji: "✅",
      label: "Рыночный уровень",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      tip: "Соответствует медиане для дизайнеров и junior-разработчиков. Есть потенциал роста.",
    };
  if (hourly < 3500)
    return {
      emoji: "🚀",
      label: "Выше медианы",
      color: "text-indigo-700 bg-indigo-50 border-indigo-200",
      tip: "Middle/Senior уровень. Рассмотрите нишевую специализацию для дальнейшего роста.",
    };
  return {
    emoji: "⭐",
    label: "Топ-10% рынка",
    color: "text-violet-700 bg-violet-50 border-violet-200",
    tip: "Уровень Senior DevOps или ML-инженера в Москве. Можно выходить на международный рынок.",
  };
}

export default function InlineCalc() {
  const [income, setIncome] = useState(150000);
  const [regime, setRegime] = useState<TaxRegime>("self_employed_ul");
  const [hpd, setHpd] = useState(8);
  const [vac, setVac] = useState(28);
  const [load, setLoad] = useState(70);

  const result = useMemo(
    () => calcRate(income, regime, hpd, vac, load),
    [income, regime, hpd, vac, load]
  );

  const ctx = useMemo(() => getContext(result.hourly), [result.hourly]);

  const shareUrl = `/?income=${income}&tax=${regime}&hpd=${hpd}&dpw=5&vac=${vac}&load=${load}`;

  return (
    <section className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl">🧮</span>
        <div>
          <h2 className="text-lg font-bold text-slate-900 leading-tight">
            Рассчитай свою ставку прямо здесь
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Измени параметры — результат обновится мгновенно
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {/* Income */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-slate-600 block mb-1.5">
            Хочу получать на руки в месяц
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={30000}
              max={500000}
              step={5000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="flex-1 accent-indigo-600"
            />
            <span className="text-base font-bold text-indigo-700 w-32 text-right shrink-0">
              {fmt(income)} ₽
            </span>
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-0.5">
            <span>30 000 ₽</span>
            <span>500 000 ₽</span>
          </div>
        </div>

        {/* Tax regime */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-slate-600 block mb-1.5">
            Налоговый режим
          </label>
          <select
            value={regime}
            onChange={(e) => setRegime(e.target.value as TaxRegime)}
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {(Object.keys(TAX_LABELS) as TaxRegime[]).map((k) => (
              <option key={k} value={k}>
                {TAX_LABELS[k]}
              </option>
            ))}
          </select>
        </div>

        {/* Hours/day */}
        <div>
          <label className="text-xs font-semibold text-slate-600 block mb-1.5">
            Часов в рабочем дне: <span className="text-indigo-600">{hpd}</span>
          </label>
          <input
            type="range"
            min={4}
            max={12}
            step={1}
            value={hpd}
            onChange={(e) => setHpd(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-0.5">
            <span>4 ч</span>
            <span>12 ч</span>
          </div>
        </div>

        {/* Load */}
        <div>
          <label className="text-xs font-semibold text-slate-600 block mb-1.5">
            Загрузка проектами: <span className="text-indigo-600">{load}%</span>
          </label>
          <input
            type="range"
            min={30}
            max={100}
            step={5}
            value={load}
            onChange={(e) => setLoad(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-0.5">
            <span>30%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Vacation */}
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-slate-600 block mb-1.5">
            Дней отпуска в году: <span className="text-indigo-600">{vac}</span>
          </label>
          <input
            type="range"
            min={0}
            max={60}
            step={1}
            value={vac}
            onChange={(e) => setVac(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-0.5">
            <span>0 дней</span>
            <span>60 дней</span>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="bg-slate-900 rounded-2xl p-5 text-white mb-4">
        <p className="text-slate-400 text-xs mb-3 text-center">Минимальная ставка</p>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-white leading-none">
              {fmt(result.hourly)} ₽
            </p>
            <p className="text-slate-400 text-xs mt-1">в час</p>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-300 leading-none">
              {fmt(result.daily)} ₽
            </p>
            <p className="text-slate-400 text-xs mt-1">в день</p>
          </div>
        </div>
        <p className="text-center text-slate-500 text-xs mt-3">
          Нужно выставить счётов: ~{fmt(result.gross)} ₽/мес
        </p>
      </div>

      {/* Market context */}
      <div
        className={`border rounded-xl p-3.5 mb-4 flex items-start gap-3 ${ctx.color}`}
      >
        <span className="text-xl leading-none mt-0.5">{ctx.emoji}</span>
        <div>
          <p className="text-sm font-semibold">{ctx.label}</p>
          <p className="text-xs mt-0.5 leading-relaxed opacity-90">{ctx.tip}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2">
        <Link
          href={shareUrl}
          className="flex-1 bg-indigo-600 text-white text-sm font-semibold py-2.5 px-4 rounded-xl text-center hover:bg-indigo-700 transition-colors"
        >
          Детальный расчёт →
        </Link>
        <Link
          href="/stavka"
          className="flex-1 bg-slate-100 text-slate-700 text-sm font-semibold py-2.5 px-4 rounded-xl text-center hover:bg-slate-200 transition-colors"
        >
          Ставки по специальностям
        </Link>
      </div>

      <p className="text-xs text-slate-400 text-center mt-3">
        Расчёт по формуле: (доход + налоги) ÷ (рабочие часы × загрузка)
      </p>
    </section>
  );
}
