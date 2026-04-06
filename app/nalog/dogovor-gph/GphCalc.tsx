"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const FIXED_CONTRIBUTIONS_IP_2026 = 53658;

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

interface RegimeResult {
  name: string;
  slug: string;
  netContractor: number;
  clientTotalCost: number;
  contractorTax: number;
  effectiveRateContractor: number;
  clientExtra: number;
  note?: string;
}

function calcGph(gross: number, useDeduction: boolean): RegimeResult {
  const taxableIncome = useDeduction ? gross * 0.8 : gross;
  const ndfl = Math.round(taxableIncome * 0.13);
  const net = gross - ndfl;
  const clientExtra = Math.round(gross * 0.302); // 22% + 5.1% + 2.9% + 0.2% травматизм min
  const clientTotal = gross + clientExtra;
  return {
    name: "Договор ГПХ",
    slug: "gph",
    netContractor: net,
    contractorTax: ndfl,
    clientTotalCost: clientTotal,
    effectiveRateContractor: (ndfl / gross) * 100,
    clientExtra,
    note: useDeduction ? "С профессиональным вычетом 20% (нужна декларация)" : undefined,
  };
}

function calcNpd(gross: number): RegimeResult {
  const tax = Math.round(gross * 0.06);
  return {
    name: "Самозанятый (НПД)",
    slug: "npd",
    netContractor: gross - tax,
    contractorTax: tax,
    clientTotalCost: gross,
    effectiveRateContractor: 6,
    clientExtra: 0,
    note: "Клиент — юрлицо, ставка 6%",
  };
}

function calcIpUsn(gross: number): RegimeResult {
  const usn = Math.round(gross * 0.06);
  const varContrib = gross > 300_000 ? Math.round((gross - 300_000) * 0.01) : 0;
  const totalContrib = FIXED_CONTRIBUTIONS_IP_2026 + varContrib;
  const deduction = Math.min(usn, totalContrib);
  const taxAfterDeduction = Math.max(0, usn - deduction);
  const totalTax = taxAfterDeduction + totalContrib;
  return {
    name: "ИП УСН 6%",
    slug: "ip-usn",
    netContractor: gross - totalTax,
    contractorTax: totalTax,
    clientTotalCost: gross,
    effectiveRateContractor: (totalTax / gross) * 100,
    clientExtra: 0,
    note: `Взносы ${fmt(FIXED_CONTRIBUTIONS_IP_2026)}/год + 1% с дохода > 300 000 ₽`,
  };
}

export default function GphCalc() {
  const [gross, setGross] = useState(150_000);
  const [useDeduction, setUseDeduction] = useState(false);

  const gph = useMemo(() => calcGph(gross, useDeduction), [gross, useDeduction]);
  const npd = useMemo(() => calcNpd(gross), [gross]);
  const ipUsn = useMemo(() => calcIpUsn(gross), [gross]);

  const regimes: RegimeResult[] = [gph, npd, ipUsn];
  const bestNet = Math.max(...regimes.map((r) => r.netContractor));
  const bestClientCost = Math.min(...regimes.map((r) => r.clientTotalCost));

  return (
    <div className="space-y-6">
      {/* Input */}
      <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Сумма по договору ГПХ: {fmt(gross)}
        </label>
        <input
          type="range"
          min={30_000}
          max={1_000_000}
          step={5_000}
          value={gross}
          onChange={(e) => setGross(+e.target.value)}
          className="w-full accent-indigo-600 mt-2"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>30 000 ₽</span>
          <span>1 000 000 ₽</span>
        </div>

        <label className="flex items-center gap-2 mt-4 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={useDeduction}
            onChange={(e) => setUseDeduction(e.target.checked)}
            className="accent-indigo-600 w-4 h-4"
          />
          <span className="text-sm text-slate-600">
            Применить профессиональный вычет 20% по ГПХ
            <span className="text-xs text-slate-400 ml-1">(требует декларацию 3-НДФЛ)</span>
          </span>
        </label>
      </section>

      {/* ГПХ result card */}
      <section className="bg-indigo-600 text-white rounded-2xl shadow-md p-6">
        <h2 className="text-lg font-bold text-indigo-100 leading-tight">
          По договору ГПХ вы получите {fmt(gph.netContractor)}
        </h2>
        <p className="text-xs text-indigo-300 mt-0.5">
          из {fmt(gross)} — НДФЛ {fmt(gph.contractorTax)} удержит заказчик
        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-white text-indigo-700 rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-400">Вам на руки</p>
            <p className="text-xl font-bold mt-0.5">{fmt(gph.netContractor)}</p>
          </div>
          <div className="bg-indigo-700 text-white rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300">НДФЛ (удержит заказчик)</p>
            <p className="text-xl font-bold mt-0.5">{fmt(gph.contractorTax)}</p>
          </div>
          <div className="bg-indigo-700 text-white rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300">Заказчик заплатит сверху</p>
            <p className="text-xl font-bold mt-0.5">{fmt(gph.clientExtra)}</p>
          </div>
          <div className="bg-indigo-700 text-white rounded-xl p-4">
            <p className="text-xs font-medium text-indigo-300">Реальная стоимость для заказчика</p>
            <p className="text-xl font-bold mt-0.5">{fmt(gph.clientTotalCost)}</p>
          </div>
        </div>
        <p className="text-xs text-indigo-300 mt-3">
          Страховые взносы заказчика: 22% ПФР + 5,1% ОМС + 2,9% ФСС = ~30% сверх суммы договора
        </p>
      </section>

      {/* Comparison table */}
      <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
          Сравнение режимов при сумме {fmt(gross)}
        </h2>
        <div className="space-y-3">
          {regimes.map((r) => {
            const isBestNet = r.netContractor === bestNet;
            const isBestClient = r.clientTotalCost === bestClientCost;
            return (
              <div
                key={r.slug}
                className={`rounded-xl border p-4 ${
                  isBestNet
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{r.name}</p>
                    {r.note && (
                      <p className="text-xs text-slate-500 mt-0.5">{r.note}</p>
                    )}
                  </div>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {isBestNet && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                        💚 Выгоднее вам
                      </span>
                    )}
                    {isBestClient && (
                      <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                        🤝 Выгоднее заказчику
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-slate-400">Вам на руки</p>
                    <p className={`text-base font-bold mt-0.5 ${isBestNet ? "text-emerald-700" : "text-slate-700"}`}>
                      {fmt(r.netContractor)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Налоги с вас</p>
                    <p className="text-base font-bold mt-0.5 text-slate-600">
                      {fmtPct(r.effectiveRateContractor)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Стоит заказчику</p>
                    <p className={`text-base font-bold mt-0.5 ${isBestClient ? "text-blue-700" : "text-slate-700"}`}>
                      {fmt(r.clientTotalCost)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-400 mt-3">
          * ИП: взносы {fmt(FIXED_CONTRIBUTIONS_IP_2026)}/год уже включены в расчёт
        </p>
      </section>

      {/* CTA */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
        <p className="text-sm font-semibold text-indigo-900 mb-2">
          Рассчитайте вашу ставку фрилансера с учётом налогов
        </p>
        <p className="text-xs text-indigo-600 mb-3">
          Сколько нужно брать за час/день, чтобы получать нужный доход на руки?
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
