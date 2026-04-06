"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

function fmt(n: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

function fmtPct(n: number) {
  return n.toFixed(1).replace(".", ",") + "%";
}

// FL.ru freelancer commission — depends on cumulative earnings from THIS client
// Tier: <35k → 20%, 35k–350k → 12%, 350k+ → 7%
function getFlFreelancerRate(cumulative: number): number {
  if (cumulative >= 350_000) return 0.07;
  if (cumulative >= 35_000) return 0.12;
  return 0.20;
}

// FL.ru employer commission — depends on deal amount
function getFlEmployerRate(amount: number): number {
  if (amount >= 100_001) return 0.159;
  if (amount >= 50_001) return 0.169;
  if (amount >= 10_001) return 0.179;
  if (amount >= 5_001) return 0.189;
  return 0.199;
}

// Kwork seller commission — depends on cumulative with THIS buyer
function getKworkSellerRate(cumulative: number): number {
  if (cumulative >= 300_000) return 0.075;
  if (cumulative >= 30_000) return 0.12;
  return 0.20;
}

type Platform = "fl_new" | "fl_regular" | "kwork_new" | "kwork_regular";

interface CalcResult {
  gross: number;
  commission: number;
  commissionPct: number;
  net: number;
  employerExtra: number;
  employerTotal: number;
}

export default function FlRuCalc() {
  const [amount, setAmount] = useState(50_000);
  const [flCumulative, setFlCumulative] = useState(0);
  const [kworkCumulative, setKworkCumulative] = useState(0);

  const flRate = useMemo(() => getFlFreelancerRate(flCumulative), [flCumulative]);
  const flEmployerRate = useMemo(() => getFlEmployerRate(amount), [amount]);
  const kworkRate = useMemo(() => getKworkSellerRate(kworkCumulative), [kworkCumulative]);

  const flResult: CalcResult = useMemo(() => {
    const commission = Math.round(amount * flRate);
    const net = amount - commission;
    const employerExtra = Math.round(amount * flEmployerRate);
    return {
      gross: amount,
      commission,
      commissionPct: flRate * 100,
      net,
      employerExtra,
      employerTotal: amount + employerExtra,
    };
  }, [amount, flRate, flEmployerRate]);

  const kworkResult: CalcResult = useMemo(() => {
    const commission = Math.round(amount * kworkRate);
    const net = amount - commission;
    return {
      gross: amount,
      commission,
      commissionPct: kworkRate * 100,
      net,
      employerExtra: 0,
      employerTotal: amount,
    };
  }, [amount, kworkRate]);

  const flTierLabel =
    flRate === 0.07 ? "постоянный (350 000+ ₽)" :
    flRate === 0.12 ? "постоянный (35 000–350 000 ₽)" :
    "новый клиент (до 35 000 ₽)";

  const kworkTierLabel =
    kworkRate === 0.075 ? "постоянный (300 000+ ₽)" :
    kworkRate === 0.12 ? "постоянный (30 000–300 000 ₽)" :
    "новый покупатель (до 30 000 ₽)";

  return (
    <div className="space-y-6">
      {/* Amount slider */}
      <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Сумма сделки: {fmt(amount)}
          </label>
          <input
            type="range"
            min={1_000}
            max={500_000}
            step={1_000}
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="w-full accent-indigo-600 mt-2"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1 000 ₽</span>
            <span>500 000 ₽</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Накоплено от этого клиента на FL.ru
            </label>
            <select
              value={flCumulative}
              onChange={(e) => setFlCumulative(+e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            >
              <option value={0}>Новый клиент (до 35 000 ₽) — 20%</option>
              <option value={35_000}>35 000–350 000 ₽ накоплено — 12%</option>
              <option value={350_000}>Более 350 000 ₽ накоплено — 7%</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Накоплено от этого покупателя на Kwork
            </label>
            <select
              value={kworkCumulative}
              onChange={(e) => setKworkCumulative(+e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            >
              <option value={0}>Новый покупатель (до 30 000 ₽) — 20%</option>
              <option value={30_000}>30 000–300 000 ₽ накоплено — 12%</option>
              <option value={300_000}>Более 300 000 ₽ накоплено — 7,5%</option>
            </select>
          </div>
        </div>
      </section>

      {/* FL.ru result */}
      <section className="bg-indigo-600 text-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-lg font-bold text-indigo-100 leading-tight">
            FL.ru — вы получите {fmt(flResult.net)}
          </h2>
          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-medium">
            {flTierLabel}
          </span>
        </div>
        <p className="text-xs text-indigo-300 mb-4">
          FL.ru удержит {fmt(flResult.commission)} ({fmtPct(flResult.commissionPct)}) из суммы сделки
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white text-indigo-700 rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-400">Вам на руки</p>
            <p className="text-xl font-bold mt-0.5">{fmt(flResult.net)}</p>
          </div>
          <div className="bg-indigo-700 text-white rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300">Комиссия с вас</p>
            <p className="text-xl font-bold mt-0.5">{fmt(flResult.commission)}</p>
          </div>
          <div className="bg-indigo-700 text-white rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300">Комиссия с заказчика</p>
            <p className="text-xl font-bold mt-0.5">{fmt(flResult.employerExtra)}</p>
          </div>
          <div className="bg-indigo-700 text-white rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300">Заказчик заплатит итого</p>
            <p className="text-xl font-bold mt-0.5">{fmt(flResult.employerTotal)}</p>
          </div>
        </div>
        <p className="text-xs text-indigo-300 mt-3">
          Комиссия заказчика FL.ru зависит от суммы сделки: от 15,9% (крупные) до 19,9% (мелкие)
        </p>
      </section>

      {/* Comparison */}
      <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
          Сравнение бирж при сделке {fmt(amount)}
        </h2>
        <div className="space-y-3">
          {/* FL.ru */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-slate-800 text-sm">FL.ru</p>
              <span className="text-xs text-slate-500">{fmtPct(flResult.commissionPct)} с фрилансера</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-slate-400">Вам на руки</p>
                <p className="text-base font-bold text-slate-700 mt-0.5">{fmt(flResult.net)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Сумма сделки</p>
                <p className="text-base font-bold text-slate-700 mt-0.5">{fmt(amount)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Итого у заказчика</p>
                <p className="text-base font-bold text-slate-700 mt-0.5">{fmt(flResult.employerTotal)}</p>
              </div>
            </div>
          </div>

          {/* Kwork */}
          <div className={`rounded-xl border p-4 ${kworkResult.net > flResult.net ? "border-emerald-300 bg-emerald-50" : "border-slate-200 bg-slate-50"}`}>
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-slate-800 text-sm">
                Kwork
                {kworkResult.net > flResult.net && (
                  <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
                    💚 Выгоднее вам
                  </span>
                )}
              </p>
              <span className="text-xs text-slate-500">{fmtPct(kworkResult.commissionPct)} с продавца</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-slate-400">Вам на руки</p>
                <p className={`text-base font-bold mt-0.5 ${kworkResult.net > flResult.net ? "text-emerald-700" : "text-slate-700"}`}>
                  {fmt(kworkResult.net)}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Сумма сделки</p>
                <p className="text-base font-bold text-slate-700 mt-0.5">{fmt(amount)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Итого у заказчика</p>
                <p className="text-base font-bold text-slate-700 mt-0.5">{fmt(kworkResult.employerTotal)}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">Покупатели на Kwork комиссию не платят</p>
          </div>
        </div>
      </section>

      {/* CTA to main calculator */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
        <p className="text-sm font-semibold text-indigo-900 mb-1">
          Сколько брать за час, чтобы выйти на нужный доход — с учётом комиссий?
        </p>
        <p className="text-xs text-indigo-600 mb-3">
          Рассчитайте ставку с налогами, отпуском и реальной загрузкой
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          Открыть калькулятор ставки →
        </Link>
      </div>
    </div>
  );
}
