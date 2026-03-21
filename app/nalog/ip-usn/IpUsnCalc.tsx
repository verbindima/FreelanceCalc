"use client";

import { useState, useMemo } from "react";

const FIXED_CONTRIBUTIONS_2026 = 53658; // Фиксированные страховые взносы ИП в 2026 году

function formatRub(n: number) {
  return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(n);
}

export default function IpUsnCalc() {
  const [income, setIncome] = useState(1_500_000);
  const [hasEmployees, setHasEmployees] = useState(false);
  const [rate, setRate] = useState<6 | 15>(6);
  const [expenses, setExpenses] = useState(30); // % of income, for USN 15%

  const result = useMemo(() => {
    const grossTax = income * (rate / 100);
    const variableContrib = income > 300_000 ? (income - 300_000) * 0.01 : 0;
    const totalContrib = FIXED_CONTRIBUTIONS_2026 + variableContrib;

    let taxAfterDeduction: number;
    if (rate === 6) {
      // ИП без работников вычитает взносы из налога (до 100%)
      const deduction = hasEmployees ? totalContrib * 0.5 : totalContrib;
      taxAfterDeduction = Math.max(0, grossTax - deduction);
    } else {
      // УСН 15%: налог с (доходы - расходы), взносы входят в расходы
      const expensesAmount = income * (expenses / 100) + totalContrib;
      taxAfterDeduction = Math.max(income * 0.01, (income - expensesAmount) * 0.15); // минимальный налог 1%
    }

    const totalObligatory = taxAfterDeduction + totalContrib;
    const netIncome = income - totalObligatory;
    const effectiveRate = (totalObligatory / income) * 100;

    return {
      grossTax,
      variableContrib,
      totalContrib,
      taxAfterDeduction,
      totalObligatory,
      netIncome,
      effectiveRate,
    };
  }, [income, hasEmployees, rate, expenses]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">Калькулятор налога ИП УСН 2026</h2>

      <div className="grid gap-5 md:grid-cols-2 mb-6">
        {/* Income */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Годовой доход (выручка), ₽
          </label>
          <input
            type="number"
            value={income}
            min={0}
            max={450_000_000}
            step={50_000}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <p className="text-xs text-gray-400 mt-1">
            {formatRub(income / 12)}/мес
          </p>
        </div>

        {/* Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ставка УСН</label>
          <div className="flex gap-2">
            <button
              onClick={() => setRate(6)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-colors ${
                rate === 6
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              УСН 6% (доходы)
            </button>
            <button
              onClick={() => setRate(15)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-colors ${
                rate === 15
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              УСН 15% (д−р)
            </button>
          </div>
        </div>

        {/* Employees */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Наёмные сотрудники</label>
          <div className="flex gap-2">
            <button
              onClick={() => setHasEmployees(false)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-colors ${
                !hasEmployees
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              Нет (один)
            </button>
            <button
              onClick={() => setHasEmployees(true)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-colors ${
                hasEmployees
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              Есть сотрудники
            </button>
          </div>
        </div>

        {/* Expenses (only for USN 15%) */}
        {rate === 15 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Доля расходов от дохода: {expenses}%
            </label>
            <input
              type="range"
              min={0}
              max={90}
              step={5}
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0% (нет расходов)</span>
              <span>90% (высокие расходы)</span>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="bg-gray-50 rounded-xl p-5">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Налог УСН к уплате</p>
            <p className="text-xl font-bold text-blue-700">{formatRub(result.taxAfterDeduction)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Страховые взносы</p>
            <p className="text-xl font-bold text-orange-600">{formatRub(result.totalContrib)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Итого обязательных платежей</p>
            <p className="text-xl font-bold text-red-600">{formatRub(result.totalObligatory)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Остаётся на руки</p>
            <p className="text-xl font-bold text-green-700">{formatRub(result.netIncome)}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <p className="text-sm text-gray-600">
            Эффективная налоговая нагрузка:{" "}
            <strong className="text-gray-900">{result.effectiveRate.toFixed(1)}%</strong>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Фиксированные взносы: {formatRub(FIXED_CONTRIBUTIONS_2026)} + 1% с дохода свыше 300 000 ₽ = {formatRub(result.totalContrib)}
          </p>
        </div>
      </div>

      {/* Breakdown */}
      <div className="mt-5">
        <details className="group">
          <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-800 font-medium list-none flex items-center gap-1">
            <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
            Показать детальный расчёт
          </summary>
          <div className="mt-3 text-sm space-y-2 bg-blue-50 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Доход (выручка)</span>
              <span className="font-medium">{formatRub(income)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Налог УСН {rate}% (до вычета)</span>
              <span className="font-medium">{formatRub(result.grossTax)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Фиксированные взносы</span>
              <span className="font-medium">{formatRub(FIXED_CONTRIBUTIONS_2026)}</span>
            </div>
            {result.variableContrib > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">1% с дохода свыше 300К</span>
                <span className="font-medium">{formatRub(result.variableContrib)}</span>
              </div>
            )}
            {rate === 6 && (
              <div className="flex justify-between text-green-700">
                <span>Вычет взносов из налога</span>
                <span className="font-medium">
                  −{formatRub(Math.min(result.grossTax, hasEmployees ? result.totalContrib * 0.5 : result.totalContrib))}
                </span>
              </div>
            )}
            <div className="flex justify-between font-semibold border-t border-blue-200 pt-2 mt-2">
              <span>Налог УСН к уплате</span>
              <span>{formatRub(result.taxAfterDeduction)}</span>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
