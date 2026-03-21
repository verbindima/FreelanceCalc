"use client";

import { useState, useMemo } from "react";

const fmt = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(Math.round(n));

const pct = (n: number) =>
  new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(n);

type Mode = "gross_to_net" | "net_to_gross";

// Professional deduction 20% reduces NDFL base for individual contractors (ст. 221 НК РФ)
// NDFL = (gross × 0.8) × 0.13 = gross × 0.104 (if professional deduction applied)
// Without deduction: NDFL = gross × 0.13
// Insurance premiums paid by client ON TOP of contract sum: 30% (Пенсионный, ОМС, ВНиМ) — но ГПХ освобождён от ВНиМ 2.9%, итого 27.1%
// Simplified: ~27.1% on top (standard 2026 rates for companies on general system)

const INSURANCE_RATE = 0.271; // paid BY CLIENT on top — not deducted from contractor

// Toggle: применять профессиональный вычет (20%) или нет
const calcGph = (gross: number, useDeduction: boolean) => {
  const deductionBase = useDeduction ? gross * 0.8 : gross;
  const ndfl = deductionBase * 0.13;
  const net = gross - ndfl;
  const ndflRate = (ndfl / gross) * 100;
  const insuranceOnTop = gross * INSURANCE_RATE;
  const totalCostClient = gross + insuranceOnTop;
  return { ndfl, net, ndflRate, insuranceOnTop, totalCostClient };
};

const calcNpd = (gross: number, fromLegal: boolean) => {
  const rate = fromLegal ? 0.06 : 0.04;
  const tax = gross * rate;
  const net = gross - tax;
  return { tax, net, rate: rate * 100, totalCostClient: gross };
};

export default function GphCalc() {
  const [mode, setMode] = useState<Mode>("gross_to_net");
  const [amount, setAmount] = useState("100000");
  const [useDeduction, setUseDeduction] = useState(false);
  const [npd, setNpd] = useState<"4" | "6">("6"); // default: юрлицо → НПД 6%

  const numAmount = useMemo(() => {
    const n = parseFloat(amount.replace(/\s/g, "").replace(",", "."));
    return isNaN(n) || n <= 0 ? 0 : n;
  }, [amount]);

  const gphGross = useMemo(() => {
    if (mode === "gross_to_net") return numAmount;
    // net_to_gross: net = gross - gross * deductionBase * 0.13
    // if useDeduction: net = gross*(1 - 0.8*0.13) = gross*0.896 → gross = net/0.896
    // else: net = gross*(1 - 0.13) = gross*0.87 → gross = net/0.87
    const factor = useDeduction ? 0.896 : 0.87;
    return numAmount / factor;
  }, [mode, numAmount, useDeduction]);

  const npdGross = useMemo(() => {
    if (mode === "gross_to_net") return numAmount;
    const rate = npd === "6" ? 0.06 : 0.04;
    return numAmount / (1 - rate);
  }, [mode, numAmount, npd]);

  const gph = useMemo(() => calcGph(gphGross, useDeduction), [gphGross, useDeduction]);
  const npdResult = useMemo(() => calcNpd(npdGross, npd === "6"), [npdGross, npd]);

  const netDiff = npdResult.net - gph.net;
  const clientSaving = gph.totalCostClient - npdResult.totalCostClient;

  return (
    <div className="space-y-6">
      {/* Mode toggle */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setMode("gross_to_net")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "gross_to_net"
              ? "bg-white shadow text-slate-900"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Брутто → сколько получу
        </button>
        <button
          onClick={() => setMode("net_to_gross")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "net_to_gross"
              ? "bg-white shadow text-slate-900"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Хочу получить → что указать в договоре
        </button>
      </div>

      {/* Input */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          {mode === "gross_to_net" ? "Сумма в договоре ГПХ (брутто), ₽" : "Желаемая сумма на руки (нетто), ₽"}
        </label>
        <input
          type="number"
          min="0"
          step="1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 text-slate-900"
          placeholder="100000"
        />
        <p className="text-xs text-slate-400 mt-1.5">
          {mode === "gross_to_net"
            ? "Именно эта сумма прописана в вашем договоре — с неё удержат НДФЛ."
            : "Столько вы хотите получить в итоге — калькулятор подберёт сумму в договоре."}
        </p>

        {/* Options */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={useDeduction}
              onChange={(e) => setUseDeduction(e.target.checked)}
              className="mt-0.5 accent-indigo-600"
            />
            <span className="text-sm text-slate-600 leading-snug">
              Применить профессиональный вычет 20%
              <span className="block text-xs text-slate-400">уменьшает НДФЛ до {useDeduction ? "10.4%" : "13%"} — только для ИП/физлиц с документами на расходы (ст. 221 НК РФ)</span>
            </span>
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 whitespace-nowrap">НПД ставка:</span>
            <select
              value={npd}
              onChange={(e) => setNpd(e.target.value as "4" | "6")}
              className="border border-slate-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="6">6% — от юрлица</option>
              <option value="4">4% — от физлица</option>
            </select>
          </div>
        </div>
      </div>

      {numAmount > 0 && (
        <>
          {/* Comparison table */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* GPC card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📋</span>
                <h3 className="font-bold text-slate-900">
                  {mode === "gross_to_net" ? "Договор ГПХ" : "Договор ГПХ"}
                </h3>
              </div>
              <dl className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <dt className="text-sm text-slate-500">Сумма в договоре</dt>
                  <dd className="font-semibold text-slate-900">{fmt(gphGross)} ₽</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-sm text-slate-500">
                    НДФЛ {useDeduction ? "10.4%" : "13%"}
                    {useDeduction && <span className="text-xs ml-1">(с вычетом)</span>}
                  </dt>
                  <dd className="font-semibold text-red-600">−{fmt(gph.ndfl)} ₽</dd>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between items-baseline">
                  <dt className="text-sm font-semibold text-slate-700">Вы получите на руки</dt>
                  <dd className="text-xl font-bold text-slate-900">{fmt(gph.net)} ₽</dd>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 mt-2">
                  <p className="text-xs text-amber-700 font-medium mb-1">Расходы клиента сверх договора:</p>
                  <p className="text-xs text-amber-600">
                    + Страховые взносы ~27.1% = <span className="font-semibold">{fmt(gph.insuranceOnTop)} ₽</span>
                  </p>
                  <p className="text-xs text-amber-800 font-semibold mt-1">
                    Итого клиент тратит: {fmt(gph.totalCostClient)} ₽
                  </p>
                </div>
                <div className="text-xs text-slate-400">
                  КПД выплаты: {pct((gph.net / gph.totalCostClient) * 100)}% (сколько из затрат клиента доходит до вас)
                </div>
              </dl>
            </div>

            {/* Self-employed card */}
            <div className="bg-indigo-50 rounded-2xl border border-indigo-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🟢</span>
                <h3 className="font-bold text-indigo-900">
                  Самозанятый (НПД {npd}%)
                </h3>
              </div>
              <dl className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <dt className="text-sm text-indigo-600">Сумма в чеке / счёте</dt>
                  <dd className="font-semibold text-indigo-900">{fmt(npdGross)} ₽</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-sm text-indigo-600">НПД {npd}%</dt>
                  <dd className="font-semibold text-indigo-700">−{fmt(npdResult.tax)} ₽</dd>
                </div>
                <div className="border-t border-indigo-100 pt-3 flex justify-between items-baseline">
                  <dt className="text-sm font-semibold text-indigo-800">Вы получите на руки</dt>
                  <dd className="text-xl font-bold text-indigo-900">{fmt(npdResult.net)} ₽</dd>
                </div>
                <div className="bg-white rounded-lg p-3 mt-2">
                  <p className="text-xs text-indigo-600 font-medium mb-1">Расходы клиента сверх чека:</p>
                  <p className="text-xs text-green-700 font-semibold">✅ Ноль — никаких страховых взносов</p>
                  <p className="text-xs text-indigo-800 font-semibold mt-1">
                    Итого клиент тратит: {fmt(npdResult.totalCostClient)} ₽
                  </p>
                </div>
                <div className="text-xs text-slate-500">
                  КПД выплаты: {pct((npdResult.net / npdResult.totalCostClient) * 100)}% (почти всё доходит до вас)
                </div>
              </dl>
            </div>
          </div>

          {/* Summary insight */}
          <div className="bg-slate-900 rounded-2xl p-5 text-white">
            <h3 className="font-bold text-lg mb-3">📊 Итог сравнения</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-400 mb-1">Вы получите больше как самозанятый:</p>
                <p className={`text-2xl font-bold ${netDiff >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {netDiff >= 0 ? "+" : ""}{fmt(Math.abs(netDiff))} ₽
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {netDiff >= 0
                    ? `Самозанятый выгоднее для вас на ${pct((netDiff / gph.net) * 100)}%`
                    : `ГПХ выгоднее для вас на ${pct((Math.abs(netDiff) / npdResult.net) * 100)}%`}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Клиент сэкономит как самозанятый:</p>
                <p className={`text-2xl font-bold ${clientSaving >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {clientSaving >= 0 ? "+" : ""}{fmt(Math.abs(clientSaving))} ₽
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {clientSaving >= 0
                    ? "Страховые взносы ГПХ — скрытая нагрузка для клиента"
                    : "В этом случае ГПХ дешевле для клиента"}
                </p>
              </div>
            </div>
            {netDiff > 0 && (
              <p className="mt-4 text-sm text-indigo-200 border-t border-slate-700 pt-3">
                💡 Если вы оформлены как самозанятый — вы можете выставить счёт на <strong>{fmt(npdGross)} ₽</strong> вместо <strong>{fmt(gphGross)} ₽</strong> по ГПХ и получить столько же на руки. Клиент при этом не платит страховые взносы. <strong>Выиграют оба.</strong>
              </p>
            )}
          </div>

          {/* GPC risks note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <p className="font-semibold mb-2">⚠️ Важно о договоре ГПХ</p>
            <ul className="space-y-1.5 text-xs leading-relaxed">
              <li>• НДФЛ 13% удерживает и перечисляет заказчик — вы получаете уже чистую сумму</li>
              <li>• Страховые взносы ~27.1% платит заказчик <em>сверху</em> — это его расходы, не ваши</li>
              <li>• Профессиональный вычет 20% (ст. 221 НК РФ) нужно запросить у заказчика до выплаты</li>
              <li>• По ГПХ нет отпускных, больничных, трудовых гарантий — в отличие от трудового договора</li>
              <li>• Если работаете постоянно через ГПХ — налоговая может переквалифицировать в трудовые отношения</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
