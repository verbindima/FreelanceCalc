"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const BENCHMARK_PRICE = Date.now() < new Date("2026-04-07T00:00:00+03:00").getTime() ? 249 : 349;

type Platform = {
  id: string;
  name: string;
  emoji: string;
  commission: number; // %
  note: string;
  color: string;
};

const PLATFORMS: Platform[] = [
  {
    id: "kwork",
    name: "Kwork",
    emoji: "🟢",
    commission: 20,
    note: "20% с каждого заказа",
    color: "border-green-200 bg-green-50",
  },
  {
    id: "fl",
    name: "FL.ru",
    emoji: "🔵",
    commission: 15,
    note: "10–20% в зависимости от рейтинга",
    color: "border-blue-200 bg-blue-50",
  },
  {
    id: "habr",
    name: "Хабр Фриланс",
    emoji: "🟠",
    commission: 10,
    note: "10% с каждого проекта",
    color: "border-orange-200 bg-orange-50",
  },
  {
    id: "youdo",
    name: "YouDo",
    emoji: "🟣",
    commission: 15,
    note: "15% за услуги",
    color: "border-purple-200 bg-purple-50",
  },
  {
    id: "upwork",
    name: "Upwork",
    emoji: "🌍",
    commission: 20,
    note: "20% до $500, потом 10%",
    color: "border-slate-200 bg-slate-50",
  },
];

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

function fmtShort(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} млн ₽`;
  if (n >= 1_000) return `${Math.round(n / 1_000)} тыс ₽`;
  return fmt(n);
}

export default function CommissionCalc() {
  const [platformId, setPlatformId] = useState("kwork");
  const [projectSum, setProjectSum] = useState(50000);
  const [projectsPerMonth, setProjectsPerMonth] = useState(3);
  const [taxRegime, setTaxRegime] = useState<"npd6" | "npd4" | "none">("npd6");

  const platform = PLATFORMS.find((p) => p.id === platformId) ?? PLATFORMS[0]!;

  const results = useMemo(() => {
    const commRate = platform.commission / 100;
    const taxRate = taxRegime === "npd6" ? 0.06 : taxRegime === "npd4" ? 0.04 : 0;

    // Per project
    const commissionLoss = Math.round(projectSum * commRate);
    const afterCommission = projectSum - commissionLoss;
    const taxLoss = Math.round(afterCommission * taxRate);
    const netReceived = afterCommission - taxLoss;
    const totalLoss = commissionLoss + taxLoss;
    const lossPercent = Math.round((totalLoss / projectSum) * 100);

    // Monthly
    const monthlyGross = projectSum * projectsPerMonth;
    const monthlyCommission = commissionLoss * projectsPerMonth;
    const monthlyTax = taxLoss * projectsPerMonth;
    const monthlyNet = netReceived * projectsPerMonth;
    const monthlyLoss = totalLoss * projectsPerMonth;

    // Annual
    const annualLoss = monthlyLoss * 12;
    const annualCommission = monthlyCommission * 12;

    // Rate boost needed to compensate (gross up)
    const compensatedRate = Math.round(projectSum / (1 - commRate - taxRate));
    const boostNeeded = compensatedRate - projectSum;
    const boostPercent = Math.round((boostNeeded / projectSum) * 100);

    return {
      commissionLoss, afterCommission, taxLoss, netReceived, totalLoss, lossPercent,
      monthlyGross, monthlyCommission, monthlyTax, monthlyNet, monthlyLoss,
      annualLoss, annualCommission,
      compensatedRate, boostNeeded, boostPercent,
    };
  }, [platform, projectSum, projectsPerMonth, taxRegime]);

  return (
    <div className="space-y-6">

      {/* Platform selector */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Выберите биржу
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlatformId(p.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all ${
                  platformId === p.id
                    ? "border-indigo-500 bg-indigo-50 shadow-sm"
                    : `border-slate-200 hover:border-indigo-300 ${p.color}`
                }`}
              >
                <span className="text-2xl">{p.emoji}</span>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.note}</div>
                </div>
                {platformId === p.id && (
                  <span className="ml-auto text-indigo-600 font-bold text-lg">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project sum */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Сумма проекта:{" "}
            <span className="text-indigo-600">{fmt(projectSum)}</span>
          </label>
          <input
            type="range"
            min={5000}
            max={500000}
            step={5000}
            value={projectSum}
            onChange={(e) => setProjectSum(+e.target.value)}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>5 000 ₽</span>
            <span>50 000 ₽</span>
            <span>250 000 ₽</span>
            <span>500 000 ₽</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              { label: "Мелкий (10к)", val: 10000 },
              { label: "Средний (50к)", val: 50000 },
              { label: "Крупный (150к)", val: 150000 },
              { label: "Большой (300к)", val: 300000 },
            ].map((p) => (
              <button
                key={p.val}
                type="button"
                onClick={() => setProjectSum(p.val)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  projectSum === p.val
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-500 border-slate-300 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects per month */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Проектов в месяц:{" "}
            <span className="text-indigo-600">{projectsPerMonth}</span>
          </label>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={projectsPerMonth}
            onChange={(e) => setProjectsPerMonth(+e.target.value)}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1</span>
            <span>5</span>
            <span>10</span>
            <span>20</span>
          </div>
        </div>

        {/* Tax regime */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Налоговый режим
          </label>
          <div className="flex flex-col gap-2">
            {([
              { val: "npd6", label: "Самозанятый — клиенты компании (НПД 6%)" },
              { val: "npd4", label: "Самозанятый — клиенты физлица (НПД 4%)" },
              { val: "none", label: "Без налогов (только комиссия биржи)" },
            ] as { val: "npd6" | "npd4" | "none"; label: string }[]).map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() => setTaxRegime(opt.val)}
                className={`text-left text-sm py-2 px-3 rounded-lg border transition-colors ${
                  taxRegime === opt.val
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-600 border-slate-300 hover:border-indigo-400"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main result — loss framing */}
      <section className="bg-red-600 text-white rounded-2xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">📉</span>
          <h2 className="text-lg font-bold">
            Вы теряете на {platform.name} + налогах
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-red-700 rounded-xl p-4">
            <p className="text-xs text-red-200 mb-1">С одного проекта</p>
            <p className="text-2xl font-bold">−{fmt(results.totalLoss)}</p>
            <p className="text-xs text-red-200 mt-1">
              {results.lossPercent}% от суммы договора
            </p>
          </div>
          <div className="bg-red-700 rounded-xl p-4">
            <p className="text-xs text-red-200 mb-1">В месяц ({projectsPerMonth} проектов)</p>
            <p className="text-2xl font-bold">−{fmtShort(results.monthlyLoss)}</p>
            <p className="text-xs text-red-200 mt-1">комиссия + налог</p>
          </div>
          <div className="bg-white text-red-800 rounded-xl p-4 col-span-2">
            <p className="text-xs text-red-400 mb-1 font-medium">За год — вы отдаёте бирже и государству</p>
            <p className="text-3xl font-bold">{fmtShort(results.annualLoss)}</p>
            <p className="text-xs text-red-500 mt-1">
              из них комиссия {platform.name}: {fmtShort(results.annualCommission)}
            </p>
          </div>
        </div>

        <p className="text-xs text-red-200">
          Расчёт: биржа берёт {platform.commission}% с суммы проекта {fmt(projectSum)}.{" "}
          {taxRegime !== "none" && `Самозанятый платит НПД ${taxRegime === "npd6" ? "6%" : "4%"} с остатка.`}
        </p>
      </section>

      {/* Breakdown */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="font-semibold text-slate-800 mb-4">Куда уходят деньги с проекта {fmt(projectSum)}</h3>
        <div className="space-y-3">
          {/* Visual bar */}
          <div className="flex h-6 rounded-lg overflow-hidden text-xs font-semibold">
            <div
              className="bg-green-500 flex items-center justify-center text-white transition-all"
              style={{ width: `${(results.netReceived / projectSum) * 100}%` }}
            >
              {Math.round((results.netReceived / projectSum) * 100)}%
            </div>
            <div
              className="bg-red-400 flex items-center justify-center text-white transition-all"
              style={{ width: `${(results.commissionLoss / projectSum) * 100}%` }}
            >
              {platform.commission}%
            </div>
            {taxRegime !== "none" && (
              <div
                className="bg-orange-400 flex items-center justify-center text-white transition-all"
                style={{ width: `${(results.taxLoss / projectSum) * 100}%` }}
              >
                {taxRegime === "npd6" ? "6%" : "4%"}
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-3 text-xs mt-2">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-500 rounded-sm inline-block" />
              Вы получаете: {fmt(results.netReceived)}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-red-400 rounded-sm inline-block" />
              Биржа: {fmt(results.commissionLoss)}
            </span>
            {taxRegime !== "none" && (
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-orange-400 rounded-sm inline-block" />
                НПД: {fmt(results.taxLoss)}
              </span>
            )}
          </div>
        </div>

        {/* Monthly summary */}
        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-3 text-sm">
          <div className="text-center">
            <p className="text-slate-400 text-xs mb-0.5">Выручка / мес</p>
            <p className="font-bold text-slate-800">{fmtShort(results.monthlyGross)}</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-xs mb-0.5">Потери / мес</p>
            <p className="font-bold text-red-600">−{fmtShort(results.monthlyLoss)}</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-xs mb-0.5">На руки / мес</p>
            <p className="font-bold text-green-700">{fmtShort(results.monthlyNet)}</p>
          </div>
        </div>
      </section>

      {/* What to do — raise rate */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h3 className="font-bold text-slate-800 mb-2">
          💡 Чтобы получить те же деньги «на руки»
        </h3>
        <p className="text-slate-600 text-sm mb-3">
          Учитывая комиссию {platform.name} ({platform.commission}%)
          {taxRegime !== "none" && ` и НПД ${taxRegime === "npd6" ? "6%" : "4%"}`},
          ваш проект должен стоить:{" "}
          <strong className="text-indigo-700">{fmt(results.compensatedRate)}</strong>
          {" "}вместо {fmt(projectSum)}.
        </p>
        <div className="bg-white rounded-xl p-4 flex items-center gap-4">
          <div className="text-3xl">📈</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Поднять ставку на{" "}
              <span className="text-indigo-600">{results.boostPercent}%</span>
              {" "}(+{fmt(results.boostNeeded)})
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Именно столько нужно заложить сверху, чтобы после комиссии и налогов
              получать столько же.
            </p>
          </div>
        </div>
        <p className="text-xs text-amber-700 mt-3">
          Но поднять ставку — значит знать рынок. Иначе рискуете потерять клиентов
          или, наоборот, всё равно занижать цену.
        </p>
      </section>

      {/* Upsell to benchmark */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">📊</div>
        <h3 className="font-bold text-lg mb-2">
          Не знаете, сколько реально берут за ваш тип работы?
        </h3>
        <p className="text-indigo-100 text-sm mb-4 max-w-md mx-auto">
          Медианные ставки по 32 специальностям в 10 городах России — чтобы
          компенсировать комиссию и не занижать цену.
          Если ваша ставка ниже медианы — вы теряете дважды: на бирже и на разнице с рынком.
        </p>
        <Link
          href="/benchmark"
          className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
        >
          Проверить свою ставку — {BENCHMARK_PRICE} ₽
        </Link>
        <p className="text-xs text-indigo-300 mt-3">
          Единоразово · PDF сразу после оплаты · 22+ специальности
        </p>
      </section>

      {/* Comparison table */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 overflow-x-auto">
        <h3 className="font-semibold text-slate-800 mb-4">
          Сравнение комиссий бирж — проект {fmt(projectSum)}
        </h3>
        <table className="w-full text-sm min-w-[400px]">
          <thead>
            <tr className="border-b border-slate-100 text-slate-500">
              <th className="text-left py-2 font-medium">Биржа</th>
              <th className="text-right py-2 font-medium">Комиссия</th>
              <th className="text-right py-2 font-medium">Вы теряете</th>
              <th className="text-right py-2 font-medium">Получаете</th>
            </tr>
          </thead>
          <tbody>
            {PLATFORMS.map((p) => {
              const loss = Math.round(projectSum * p.commission / 100);
              const net = projectSum - loss;
              const isActive = p.id === platformId;
              return (
                <tr
                  key={p.id}
                  onClick={() => setPlatformId(p.id)}
                  className={`border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors ${
                    isActive ? "bg-indigo-50" : ""
                  }`}
                >
                  <td className="py-2.5">
                    <span className="font-medium text-slate-800">
                      {p.emoji} {p.name}
                    </span>
                    {isActive && (
                      <span className="ml-2 text-xs text-indigo-600 font-semibold">
                        ← выбрано
                      </span>
                    )}
                  </td>
                  <td className="text-right py-2.5 text-slate-600">{p.commission}%</td>
                  <td className="text-right py-2.5 font-semibold text-red-600">
                    −{fmt(loss)}
                  </td>
                  <td className="text-right py-2.5 font-semibold text-green-700">
                    {fmt(net)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-slate-400 mt-3">
          * только комиссия биржи, без учёта налогов. Нажмите на строку для детального расчёта.
        </p>
      </section>

      {/* Links to related tools */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <p className="text-sm font-semibold text-slate-700 mb-3">Похожие инструменты</p>
        <div className="flex flex-col gap-2">
          <Link href="/instrumenty/kalkulator-naloga-samozanyatogo" className="text-sm text-indigo-600 hover:underline">
            → Калькулятор налога самозанятого (НПД 4%/6%)
          </Link>
          <Link href="/" className="text-sm text-indigo-600 hover:underline">
            → Калькулятор ставки фрилансера (сколько просить)
          </Link>
          <Link href="/instrumenty/kalkulator-stoimosti-proekta" className="text-sm text-indigo-600 hover:underline">
            → Калькулятор стоимости найма фрилансера
          </Link>
          <Link href="/nalog/sravnenie" className="text-sm text-indigo-600 hover:underline">
            → Самозанятый vs ИП: сравнение налогов
          </Link>
        </div>
      </section>
    </div>
  );
}
