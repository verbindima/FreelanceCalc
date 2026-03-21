"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const FIXED_CONTRIBUTIONS_2026 = 53658;

function formatRub(n: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

function calcNpd(income: number, clientType: "fl" | "ul") {
  const rate = clientType === "fl" ? 0.04 : 0.06;
  // Бонус первого года (10 000 ₽) — для упрощения не учитываем
  const tax = income * rate;
  return {
    tax,
    contributions: 0,
    total: tax,
    net: income - tax,
    effectiveRate: rate * 100,
  };
}

function calcIpUsn6(income: number, hasEmployees: boolean) {
  const grossTax = income * 0.06;
  const variableContrib = income > 300_000 ? (income - 300_000) * 0.01 : 0;
  const totalContrib = FIXED_CONTRIBUTIONS_2026 + variableContrib;
  const deduction = hasEmployees ? Math.min(grossTax * 0.5, totalContrib) : totalContrib;
  const tax = Math.max(0, grossTax - deduction);
  const total = tax + totalContrib;
  return {
    tax,
    contributions: totalContrib,
    total,
    net: income - total,
    effectiveRate: (total / income) * 100,
  };
}

export default function SravnenieCalc() {
  const [income, setIncome] = useState(1_500_000);
  const [clientType, setClientType] = useState<"fl" | "ul">("ul");
  const [hasEmployees, setHasEmployees] = useState(false);

  const npd = useMemo(() => calcNpd(income, clientType), [income, clientType]);
  const ipUsn = useMemo(() => calcIpUsn6(income, hasEmployees), [income, hasEmployees]);

  const winner = npd.total < ipUsn.total ? "npd" : "ip";
  const diff = Math.abs(ipUsn.total - npd.total);

  // Breakeven point: where NPD = IP USN
  // For UL clients (6%): 0.06 * x = 0.06 * x - min(0.06x, totalContrib(x)) + totalContrib(x)
  // Simplified: NPD with UL = 6%, IP USN effectively = 6% - vычет
  // At low income, IP USN wins because взносы fully offset tax; at high income NPD wins (no fixed costs)
  // Breakeven where NPD total = IP USN total:
  // 0.06x = max(0, 0.06x - C(x)) + C(x) → both sides equal when C(x) > 0.06x, i.e. 0.06x < C(x)
  // So: for UL clients, up to income = FIXED_CONTRIB / 0.06 = ~894K, IP USN total = just contributions
  // For NPD: tax = 0.06 * income, no contributions
  // Breakeven: 0.06 * x = C(x) where C(x) = 53658 + max(0, (x-300000)*0.01)
  // Approximate: 0.06x ≈ 53658 + (x-300000)*0.01 → 0.05x ≈ 50658 → x ≈ 1,013,160

  const breakevenApprox = Math.round(FIXED_CONTRIBUTIONS_2026 / 0.05 + 300_000 * 0.2);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        Сравнительный калькулятор: Самозанятый vs ИП УСН 6%
      </h2>

      {/* Inputs */}
      <div className="grid gap-5 md:grid-cols-3 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Годовой доход (выручка), ₽
          </label>
          <input
            type="number"
            value={income}
            min={0}
            max={10_000_000}
            step={100_000}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <p className="text-xs text-gray-400 mt-1">{formatRub(income / 12)}/мес</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Клиенты (для НПД)</label>
          <div className="flex gap-2">
            <button
              onClick={() => setClientType("ul")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium border transition-colors ${
                clientType === "ul"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              Юрлица (6%)
            </button>
            <button
              onClick={() => setClientType("fl")}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium border transition-colors ${
                clientType === "fl"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              Физлица (4%)
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Сотрудники у ИП</label>
          <div className="flex gap-2">
            <button
              onClick={() => setHasEmployees(false)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium border transition-colors ${
                !hasEmployees
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              Нет
            </button>
            <button
              onClick={() => setHasEmployees(true)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium border transition-colors ${
                hasEmployees
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              Есть
            </button>
          </div>
        </div>
      </div>

      {/* Limit warning */}
      {income > 2_400_000 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-5 text-sm text-red-700">
          ⚠️ При доходе свыше 2,4 млн ₽/год самозанятость невозможна — лимит НПД исчерпан. ИП обязателен.
        </div>
      )}

      {/* Comparison cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* NPD card */}
        <div
          className={`rounded-xl border-2 p-4 transition-all ${
            winner === "npd" && income <= 2_400_000
              ? "border-green-400 bg-green-50"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Самозанятый НПД</h3>
            {winner === "npd" && income <= 2_400_000 && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                Выгоднее ✓
              </span>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Налог НПД</span>
              <span className="font-medium">{formatRub(npd.tax)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Взносы</span>
              <span className="font-medium text-green-700">Нет</span>
            </div>
            <div className="flex justify-between text-sm font-semibold border-t border-gray-200 pt-2">
              <span>Всего платежей</span>
              <span className={winner === "npd" && income <= 2_400_000 ? "text-green-700" : ""}>
                {formatRub(npd.total)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Остаток на руки</span>
              <span className="font-semibold text-gray-900">{formatRub(npd.net)}</span>
            </div>
            <div className="text-xs text-gray-400">
              Эффективная ставка: {npd.effectiveRate.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* IP USN card */}
        <div
          className={`rounded-xl border-2 p-4 transition-all ${
            winner === "ip" || income > 2_400_000
              ? "border-blue-400 bg-blue-50"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">ИП УСН 6%</h3>
            {(winner === "ip" || income > 2_400_000) && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                {income > 2_400_000 ? "Единственный вариант" : "Выгоднее ✓"}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Налог УСН</span>
              <span className="font-medium">{formatRub(ipUsn.tax)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Взносы (фикс + 1%)</span>
              <span className="font-medium">{formatRub(ipUsn.contributions)}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold border-t border-gray-200 pt-2">
              <span>Всего платежей</span>
              <span className={winner === "ip" || income > 2_400_000 ? "text-blue-700" : ""}>
                {formatRub(ipUsn.total)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Остаток на руки</span>
              <span className="font-semibold text-gray-900">{formatRub(ipUsn.net)}</span>
            </div>
            <div className="text-xs text-gray-400">
              Эффективная ставка: {ipUsn.effectiveRate.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      {/* Winner banner */}
      {income <= 2_400_000 && (
        <div
          className={`rounded-lg p-4 text-sm text-center mb-2 ${
            winner === "npd"
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {winner === "npd" ? (
            <>
              Самозанятость выгоднее на{" "}
              <strong>{formatRub(diff)}/год</strong> — нет обязательных взносов.
            </>
          ) : (
            <>
              ИП УСН 6% выгоднее на{" "}
              <strong>{formatRub(diff)}/год</strong> — взносы полностью вычитаются из налога.
            </>
          )}
        </div>
      )}

      {/* Breakeven hint */}
      <p className="text-xs text-gray-400 mt-3 text-center">
        Точка перехода (при работе с юрлицами): ~{formatRub(breakevenApprox)}/год — выше этого дохода режимы равнозначны до лимита НПД
      </p>
    </div>
  );
}
