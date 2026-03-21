"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// ─── Константы 2026 ──────────────────────────────────────────────────────────
const PLANS = [
  { label: "35 000 ₽ / мес", base: 35_000, monthlyContrib: 1_344, annualContrib: 16_128 },
  { label: "50 000 ₽ / мес", base: 50_000, monthlyContrib: 1_920, annualContrib: 23_040 },
] as const;

// Процент от страховой суммы по стажу
function stashPercent(years: number) {
  if (years < 5) return 0.6;
  if (years < 8) return 0.8;
  return 1.0;
}

function stashLabel(years: number) {
  if (years < 5) return "до 5 лет (60%)";
  if (years < 8) return "5–8 лет (80%)";
  return "более 8 лет (100%)";
}

function fmt(n: number, decimals = 0) {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: decimals }).format(n);
}

// ─── Компонент ───────────────────────────────────────────────────────────────
export default function SfrCalc() {
  const [planIdx, setPlanIdx] = useState<0 | 1>(0);
  const [stashYears, setStashYears] = useState(3);
  const [sickDays, setSickDays] = useState(10);

  const plan = PLANS[planIdx];
  const pct = stashPercent(stashYears);

  const result = useMemo(() => {
    // Дневное пособие: страховая_сумма * % / 30 дней
    const dailyBenefit = Math.round((plan.base * pct) / 30);
    // Годовое пособие
    const annualBenefit = dailyBenefit * sickDays;
    // Сальдо
    const balance = annualBenefit - plan.annualContrib;
    // Точка безубыточности (в днях болезни в год)
    const breakEvenDays = Math.ceil(plan.annualContrib / dailyBenefit);
    const isWorthIt = balance >= 0;

    return { dailyBenefit, annualBenefit, balance, breakEvenDays, isWorthIt };
  }, [plan, pct, sickDays]);

  return (
    <div className="space-y-8">
      {/* ── Форма ──────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
        <h2 className="text-base font-semibold text-slate-800">Параметры расчёта</h2>

        {/* Страховая сумма */}
        <div>
          <p className="text-sm font-medium text-slate-700 mb-2">
            Страховая сумма (размер ежемесячного дохода для расчёта пособия)
          </p>
          <div className="flex gap-3">
            {PLANS.map((p, i) => (
              <button
                key={p.base}
                onClick={() => setPlanIdx(i as 0 | 1)}
                className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-colors ${
                  planIdx === i
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-slate-200 text-slate-700 hover:border-blue-300"
                }`}
              >
                <span className="block font-semibold">{p.label}</span>
                <span className={`text-xs ${planIdx === i ? "text-blue-100" : "text-slate-400"}`}>
                  {fmt(p.monthlyContrib)} ₽ / мес
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Стаж */}
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-sm font-medium text-slate-700">Трудовой стаж</p>
            <p className="text-sm font-semibold text-blue-600">{stashLabel(stashYears)}</p>
          </div>
          <input
            type="range"
            min={0}
            max={20}
            step={1}
            value={stashYears}
            onChange={(e) => setStashYears(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>0 лет</span>
            <span>5 лет</span>
            <span>8 лет</span>
            <span>20 лет</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Стаж = годы работы по трудовой книжке + годы в статусе самозанятого (при уплате
            добровольных пенсионных взносов)
          </p>
        </div>

        {/* Дней болезни в год */}
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-sm font-medium text-slate-700">Сколько дней болеете в год?</p>
            <p className="text-sm font-semibold text-blue-600">{sickDays} дней</p>
          </div>
          <input
            type="range"
            min={1}
            max={60}
            step={1}
            value={sickDays}
            onChange={(e) => setSickDays(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1 день</span>
            <span>Средний по РФ: ~14 дн.</span>
            <span>60 дней</span>
          </div>
        </div>
      </div>

      {/* ── Результат ──────────────────────────────────────────────────── */}
      <div
        className={`rounded-2xl border p-6 ${
          result.isWorthIt
            ? "bg-green-50 border-green-200"
            : "bg-amber-50 border-amber-200"
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">{result.isWorthIt ? "✅" : "⚠️"}</span>
          <p className="font-bold text-lg text-slate-800">
            {result.isWorthIt
              ? "Страхование выгодно при вашем стаже и болезнях"
              : `Нужно болеть ≥ ${result.breakEvenDays} дней в год`}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-xl p-4 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Дневное пособие</p>
            <p className="text-xl font-bold text-slate-800">{fmt(result.dailyBenefit)} ₽</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Взносы в год</p>
            <p className="text-xl font-bold text-slate-800">{fmt(plan.annualContrib)} ₽</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Пособие за {sickDays} дней</p>
            <p className="text-xl font-bold text-slate-800">{fmt(result.annualBenefit)} ₽</p>
          </div>
          <div
            className={`rounded-xl p-4 border ${
              result.balance >= 0
                ? "bg-green-100 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <p className="text-xs text-slate-500 mb-1">Выгода / убыток в год</p>
            <p
              className={`text-xl font-bold ${
                result.balance >= 0 ? "text-green-700" : "text-red-600"
              }`}
            >
              {result.balance >= 0 ? "+" : ""}
              {fmt(result.balance)} ₽
            </p>
          </div>
        </div>

        <div
          className={`rounded-xl px-4 py-3 text-sm font-medium ${
            result.isWorthIt
              ? "bg-green-100 text-green-800"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {result.isWorthIt ? (
            <>
              При {sickDays} днях болезни в год вы получите{" "}
              <strong>{fmt(result.annualBenefit)} ₽</strong> пособия, заплатив лишь{" "}
              <strong>{fmt(plan.annualContrib)} ₽</strong> взносов. Чистая выгода:{" "}
              <strong>{fmt(result.balance)} ₽</strong>.
            </>
          ) : (
            <>
              Точка безубыточности — <strong>{result.breakEvenDays} дней болезни в год</strong>.
              Если болеете реже, взносы не окупятся. Среднестатистический работник болеет ~14 дней
              в год.
            </>
          )}
        </div>
      </div>

      {/* ── Плашка: учесть взносы в ставке ────────────────────────────── */}
      <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
        <p className="text-sm font-semibold text-blue-900 mb-2">
          💡 Учтите взносы в СФР при расчёте ставки
        </p>
        <p className="text-sm text-blue-800 mb-3">
          Если решите подключить страхование, прибавьте{" "}
          <strong>{fmt(plan.monthlyContrib)} ₽/месяц</strong> к своим расходам — и пересчитайте
          минимальную ставку.
        </p>
        <Link
          href={`/?income=${planIdx === 0 ? "150000" : "200000"}&tax=self_employed_fl`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          Пересчитать ставку с учётом взносов →
        </Link>
      </div>
    </div>
  );
}
