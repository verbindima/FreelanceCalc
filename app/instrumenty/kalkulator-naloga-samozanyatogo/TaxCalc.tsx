"use client";

import { useState, useMemo } from "react";

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

type ClientType = "individual" | "business";
type Period = "month" | "project" | "year";

const ANNUAL_LIMIT = 2_400_000;
const FIRST_YEAR_BONUS = 10_000;

export default function TaxCalc() {
  const [income, setIncome] = useState(80000);
  const [period, setPeriod] = useState<Period>("month");
  const [clientType, setClientType] = useState<ClientType>("business");
  const [hasBonus, setHasBonus] = useState(true);
  const [annualEarned, setAnnualEarned] = useState(0);

  const result = useMemo(() => {
    const rate = clientType === "individual" ? 0.04 : 0.06;
    const reducedRate = clientType === "individual" ? 0.03 : 0.04;

    let periodLabel = "в месяц";
    let monthsCount = 1;
    if (period === "project") {
      periodLabel = "за проект";
      monthsCount = 1;
    } else if (period === "year") {
      periodLabel = "в год";
      monthsCount = 12;
    }

    const annualIncome =
      period === "year" ? income : period === "month" ? income * 12 : income;
    const remainingLimit = Math.max(0, ANNUAL_LIMIT - annualEarned);
    const overLimit = Math.max(0, annualIncome - remainingLimit);
    const withinLimit = annualIncome - overLimit;

    // Tax with bonus: first FIRST_YEAR_BONUS of tax is covered by bonus
    let taxNormal = income * rate;
    let taxWithBonus = income * reducedRate;
    let bonusUsed = hasBonus ? Math.min(FIRST_YEAR_BONUS, income * (rate - reducedRate)) : 0;
    let effectiveTax = hasBonus ? taxWithBonus : taxNormal;

    if (period === "year") {
      taxNormal = income * rate;
      taxWithBonus = hasBonus
        ? Math.min(income * reducedRate + 0, income * rate - FIRST_YEAR_BONUS)
        : taxNormal;
      effectiveTax = hasBonus ? Math.max(income * reducedRate, income * rate - FIRST_YEAR_BONUS) : taxNormal;
      bonusUsed = hasBonus ? Math.min(FIRST_YEAR_BONUS, income * (rate - reducedRate)) : 0;
    }

    const netIncome = income - effectiveTax;
    const isOverLimit = annualEarned + annualIncome > ANNUAL_LIMIT;
    const monthsUntilLimit =
      income > 0 ? Math.floor(remainingLimit / (income * (period === "year" ? 1/12 : 1))) : 99;

    return {
      rate: rate * 100,
      reducedRate: reducedRate * 100,
      taxNormal,
      effectiveTax,
      bonusUsed,
      netIncome,
      periodLabel,
      isOverLimit,
      remainingLimit,
      monthsUntilLimit,
      annualProjection: period === "month" ? income * 12 : period === "project" ? income : income,
    };
  }, [income, period, clientType, hasBonus, annualEarned]);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
        <h2 className="text-lg font-semibold text-gray-800">Параметры расчёта</h2>

        {/* Income */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Доход
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Math.max(0, Number(e.target.value)))}
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="80 000"
            />
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value as Period)}
              className="border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="month">в месяц</option>
              <option value="project">за проект</option>
              <option value="year">в год</option>
            </select>
          </div>
        </div>

        {/* Client type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Кто ваш клиент?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                { value: "individual", label: "Физлицо", sub: "НПД 4%" },
                { value: "business", label: "Компания / ИП", sub: "НПД 6%" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                onClick={() => setClientType(opt.value)}
                className={`rounded-xl border-2 px-4 py-3 text-left transition-all ${
                  clientType === opt.value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="font-semibold text-sm">{opt.label}</div>
                <div className="text-xs text-gray-500">{opt.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* First year bonus */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-700">Бонус первого года</div>
            <div className="text-xs text-gray-500">Налоговый вычет 10 000 ₽ — снижает ставку до {clientType === "individual" ? "3" : "4"}%</div>
          </div>
          <button
            onClick={() => setHasBonus(!hasBonus)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              hasBonus ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                hasBonus ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Annual earned (for limit tracking) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Уже заработано в этом году
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={2400000}
              step={50000}
              value={annualEarned}
              onChange={(e) => setAnnualEarned(Number(e.target.value))}
              className="flex-1 accent-blue-500"
            />
            <span className="text-sm font-semibold text-gray-700 w-24 text-right">
              {fmt(annualEarned)}
            </span>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0 ₽</span>
            <span>лимит: 2 400 000 ₽</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white space-y-4">
        <h2 className="text-lg font-semibold opacity-90">Результат расчёта</h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xs opacity-75 mb-1">Налог НПД</div>
            <div className="text-2xl font-bold">{fmt(result.effectiveTax)}</div>
            <div className="text-xs opacity-75 mt-1">
              ставка {hasBonus ? result.reducedRate : result.rate}%
              {hasBonus && ` (с бонусом)`}
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xs opacity-75 mb-1">На руки</div>
            <div className="text-2xl font-bold">{fmt(result.netIncome)}</div>
            <div className="text-xs opacity-75 mt-1">{result.periodLabel}</div>
          </div>
        </div>

        {hasBonus && result.bonusUsed > 0 && (
          <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-3">
            <div className="text-sm font-semibold">
              💚 Бонус сэкономил {fmt(result.bonusUsed)} на этом платеже
            </div>
            <div className="text-xs opacity-80 mt-0.5">
              Из 10 000 ₽ вычета использовано {fmt(result.bonusUsed)}
            </div>
          </div>
        )}

        {result.isOverLimit && (
          <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3">
            <div className="text-sm font-semibold">
              ⚠️ Внимание: превышение лимита 2 400 000 ₽
            </div>
            <div className="text-xs opacity-80 mt-0.5">
              При превышении нужно закрыть статус самозанятого или перейти на ИП
            </div>
          </div>
        )}
      </div>

      {/* Info block */}
      <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
        <h3 className="font-semibold text-gray-800">Как работает налог самозанятого</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex gap-2">
            <span className="text-blue-500 font-bold">4%</span>
            <span>— с доходов от физических лиц</span>
          </div>
          <div className="flex gap-2">
            <span className="text-blue-500 font-bold">6%</span>
            <span>— с доходов от ИП и компаний</span>
          </div>
          <div className="flex gap-2">
            <span className="text-green-500 font-bold">−10 000 ₽</span>
            <span>— бонус при регистрации: снижает ставку до 3% и 4% пока не израсходован</span>
          </div>
          <div className="flex gap-2">
            <span className="text-orange-500 font-bold">2 400 000 ₽</span>
            <span>— годовой лимит дохода. При превышении статус аннулируется</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
        <p className="text-gray-600 text-sm mb-3">
          Знаете налог — теперь посчитайте вашу рыночную ставку с учётом загрузки и желаемого дохода
        </p>
        <a
          href="/?utm_source=instrumenty&utm_medium=internal&utm_campaign=tax_calc"
          className="inline-block bg-blue-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors"
        >
          Рассчитать ставку фрилансера →
        </a>
      </div>
    </div>
  );
}
