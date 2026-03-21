"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

function fmtPct(n: number): string {
  return `${n > 0 ? "+" : ""}${Math.round(n)}%`;
}

type WorkFormat = "office" | "remote" | "hybrid";

const INSURANCE_RATE = 0.302; // 22% ПФР + 5.1% ФОМС + 2.9% ФСС = 30%+ (max-rated)
const INJURY_RATE = 0.002;   // травматизм — минимум 0.2%
const NDFL_RATE = 0.13;

export default function EmployeeCostCalc() {
  // Inputs
  const [grossSalary, setGrossSalary] = useState(100000);
  const [workFormat, setWorkFormat] = useState<WorkFormat>("office");
  const [vacationDays, setVacationDays] = useState(28);
  const [hasMedIns, setHasMedIns] = useState(false);
  const [hasEquipment, setHasEquipment] = useState(true);
  const [hasRecruiting, setHasRecruiting] = useState(true);
  const [freelancerRate, setFreelancerRate] = useState(0); // 0 = not set
  const [showFreelancerInput, setShowFreelancerInput] = useState(false);

  const results = useMemo(() => {
    // --- Mandatory costs ---
    const ndfl = grossSalary * NDFL_RATE;
    const netSalary = grossSalary - ndfl;

    const insurance = grossSalary * INSURANCE_RATE;
    const injuryIns = grossSalary * INJURY_RATE;
    const totalInsurance = insurance + injuryIns;

    // Vacation: employer pays 28 days + праздники (~14 дней) из расчёта среднего дневного заработка
    const avgDailyGross = (grossSalary * 12) / 247; // 247 рабочих дней в году
    const vacationCost = avgDailyGross * vacationDays;
    const holidayCost = avgDailyGross * 14; // ~14 официальных праздников в году

    // Sick leave compensation — работодатель платит первые 3 дня; ~5 дней/год в среднем
    const sickLeaveCost = avgDailyGross * 3;

    // --- Optional costs ---
    const officeRent = workFormat === "office" ? 15000 : workFormat === "hybrid" ? 7500 : 0; // руб/мес на человека
    const medInsurance = hasMedIns ? 5000 : 0; // ДМС: ~5 000 ₽/мес на сотрудника
    const equipment = hasEquipment ? Math.round(60000 / 36) : 0; // ноутбук 60k, 3 года амортизации → 1 667 ₽/мес
    const recruitingCost = hasRecruiting ? grossSalary * 1.0 : 0; // ~1 зарплата на поиск, амортизируем за 12 мес → /12
    const recruitingPerMonth = recruitingCost / 12;

    // --- Monthly totals ---
    const monthlyMandatory = grossSalary + totalInsurance + (vacationCost + holidayCost + sickLeaveCost) / 12;
    const monthlyOptional = officeRent + medInsurance + equipment + recruitingPerMonth;
    const totalMonthly = monthlyMandatory + monthlyOptional;
    const totalAnnual = totalMonthly * 12;

    // --- Overhead multiplier ---
    const overheadMultiplier = totalMonthly / grossSalary;

    // --- Freelancer comparison ---
    const freelancerMonthly = freelancerRate > 0 ? freelancerRate : null;
    const savings = freelancerMonthly !== null ? totalMonthly - freelancerMonthly : null;
    const savingsPct = savings !== null ? (savings / totalMonthly) * 100 : null;

    return {
      netSalary,
      ndfl,
      insurance: totalInsurance,
      vacationCost: (vacationCost + holidayCost + sickLeaveCost) / 12,
      officeRent,
      medInsurance,
      equipment,
      recruitingPerMonth,
      monthlyMandatory,
      monthlyOptional,
      totalMonthly,
      totalAnnual,
      overheadMultiplier,
      freelancerMonthly,
      savings,
      savingsPct,
    };
  }, [grossSalary, workFormat, vacationDays, hasMedIns, hasEquipment, hasRecruiting, freelancerRate]);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-5">
        <h2 className="text-base font-bold text-slate-800">Параметры сотрудника</h2>

        {/* Gross salary */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Оклад (gross, до вычета НДФЛ)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={30000}
              max={500000}
              step={5000}
              value={grossSalary}
              onChange={(e) => setGrossSalary(+e.target.value)}
              className="flex-1 accent-indigo-600"
            />
            <input
              type="number"
              value={grossSalary}
              onChange={(e) => setGrossSalary(Math.max(0, +e.target.value))}
              className="w-32 border border-slate-300 rounded-lg px-3 py-1.5 text-right text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Сотрудник получает «на руки»: <strong>{fmt(results.netSalary)}</strong> (после НДФЛ 13%)
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {[50000, 80000, 100000, 150000, 200000].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setGrossSalary(preset)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  grossSalary === preset
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-500 border-slate-300 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {new Intl.NumberFormat("ru-RU", { notation: "compact", maximumFractionDigits: 0 }).format(preset)} ₽
              </button>
            ))}
          </div>
        </div>

        {/* Work format */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Формат работы</label>
          <div className="flex gap-2">
            {([
              { id: "office", label: "🏢 Офис" },
              { id: "hybrid", label: "🔀 Гибрид" },
              { id: "remote", label: "🏠 Удалёнка" },
            ] as { id: WorkFormat; label: string }[]).map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setWorkFormat(id)}
                className={`flex-1 text-sm py-2 rounded-xl border transition-colors font-medium ${
                  workFormat === id
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-600 border-slate-300 hover:border-indigo-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Vacation */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Отпуск: {vacationDays} дней/год
          </label>
          <input
            type="range"
            min={14}
            max={56}
            step={1}
            value={vacationDays}
            onChange={(e) => setVacationDays(+e.target.value)}
            className="w-full accent-indigo-600"
          />
          <p className="text-xs text-slate-400">Минимум по ТК РФ — 28 дней</p>
        </div>

        {/* Toggles */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1">Дополнительные расходы</label>
          {[
            { key: "equipment", label: "💻 Оборудование (ноутбук, периферия)", value: hasEquipment, setter: setHasEquipment },
            { key: "recruiting", label: "🔍 Подбор персонала (≈1 оклад/год)", value: hasRecruiting, setter: setHasRecruiting },
            { key: "medins", label: "🏥 ДМС (~5 000 ₽/мес)", value: hasMedIns, setter: setHasMedIns },
          ].map(({ key, label, value, setter }) => (
            <label key={key} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setter(e.target.checked)}
                className="w-4 h-4 accent-indigo-600 rounded"
              />
              <span className="text-sm text-slate-600">{label}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="bg-red-600 text-white rounded-2xl shadow-md p-6">
        <h2 className="text-lg font-bold text-red-100 mb-4">Реальная стоимость сотрудника</h2>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-xs text-red-200 mb-1">Оклад (gross)</p>
            <p className="text-xl font-bold">{fmt(grossSalary)}</p>
            <p className="text-xs text-red-300 mt-0.5">+НДФЛ: {fmt(results.ndfl)}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-xs text-red-200 mb-1">Страховые взносы</p>
            <p className="text-xl font-bold">{fmt(results.insurance)}</p>
            <p className="text-xs text-red-300 mt-0.5">ПФР 22% + ФОМС 5.1% + ФСС 2.9%</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-xs text-red-200 mb-1">Отпуск + праздники + больничный</p>
            <p className="text-xl font-bold">{fmt(results.vacationCost)}</p>
            <p className="text-xs text-red-300 mt-0.5">в месяц (амортизировано)</p>
          </div>
          {results.officeRent > 0 && (
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-red-200 mb-1">Офис</p>
              <p className="text-xl font-bold">{fmt(results.officeRent)}</p>
              <p className="text-xs text-red-300 mt-0.5">аренда на 1 сотрудника/мес</p>
            </div>
          )}
          {results.equipment > 0 && (
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-red-200 mb-1">Оборудование</p>
              <p className="text-xl font-bold">{fmt(results.equipment)}</p>
              <p className="text-xs text-red-300 mt-0.5">амортизация/мес</p>
            </div>
          )}
          {results.recruitingPerMonth > 0 && (
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-red-200 mb-1">Подбор персонала</p>
              <p className="text-xl font-bold">{fmt(results.recruitingPerMonth)}</p>
              <p className="text-xs text-red-300 mt-0.5">≈1 оклад / 12 мес</p>
            </div>
          )}
          {results.medInsurance > 0 && (
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-red-200 mb-1">ДМС</p>
              <p className="text-xl font-bold">{fmt(results.medInsurance)}</p>
              <p className="text-xs text-red-300 mt-0.5">ср. стоимость в месяц</p>
            </div>
          )}
        </div>

        {/* Total */}
        <div className="border-t border-white/20 pt-4 mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-red-200">Итого работодатель платит в месяц:</span>
            <span className="text-2xl font-bold">{fmt(results.totalMonthly)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-red-300">В год (без премий и бонусов):</span>
            <span className="text-base font-semibold text-red-100">{fmt(results.totalAnnual)}</span>
          </div>
          <div className="mt-3 bg-white/10 rounded-xl px-4 py-2.5">
            <p className="text-sm font-bold text-white">
              Реальная стоимость = <span className="text-red-200">{results.overheadMultiplier.toFixed(2)}×</span> от оклада
            </p>
            <p className="text-xs text-red-200 mt-0.5">
              Сотрудник получает {fmt(results.netSalary)} «на руки» — вы платите в{" "}
              {(results.totalMonthly / results.netSalary).toFixed(1)} раза больше
            </p>
          </div>
        </div>
      </section>

      {/* Freelancer comparison */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-base font-bold text-slate-800 mb-1">
          А если нанять фрилансера?
        </h2>
        <p className="text-sm text-slate-500 mb-4">
          Укажите бюджет на фрилансера в месяц — и мы покажем, сколько вы сэкономите
        </p>

        {!showFreelancerInput ? (
          <button
            onClick={() => setShowFreelancerInput(true)}
            className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 text-sm font-semibold rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
          >
            + Добавить стоимость фрилансера для сравнения
          </button>
        ) : (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Стоимость фрилансера в месяц (бюджет проекта / ставка × часы)
            </label>
            <div className="flex items-center gap-3 mb-4">
              <input
                type="range"
                min={10000}
                max={500000}
                step={5000}
                value={freelancerRate || 80000}
                onChange={(e) => setFreelancerRate(+e.target.value)}
                className="flex-1 accent-emerald-600"
              />
              <input
                type="number"
                value={freelancerRate || ""}
                placeholder="100 000"
                onChange={(e) => setFreelancerRate(Math.max(0, +e.target.value))}
                className="w-32 border border-slate-300 rounded-lg px-3 py-1.5 text-right text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {freelancerRate > 0 && (
              <div className={`rounded-xl px-4 py-4 ${results.savings && results.savings > 0 ? "bg-emerald-50 border border-emerald-200" : "bg-orange-50 border border-orange-200"}`}>
                {results.savings !== null && results.savingsPct !== null ? (
                  results.savings > 0 ? (
                    <>
                      <p className="text-base font-bold text-emerald-800">
                        ✅ Фрилансер обходится дешевле на{" "}
                        <span className="text-lg">{fmt(results.savings)}/мес</span>
                        {" "}({Math.abs(Math.round(results.savingsPct))}% экономии)
                      </p>
                      <p className="text-sm text-emerald-700 mt-1">
                        За год вы экономите: <strong>{fmt(results.savings * 12)}</strong>
                      </p>
                      <p className="text-xs text-emerald-600 mt-2 opacity-80">
                        Плюс: нет больничных, отпускных и страховых взносов. Фрилансер сам платит свои налоги (4–6% НПД).
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-base font-bold text-orange-800">
                        ⚠️ В этом случае штатный сотрудник выгоднее на{" "}
                        <span className="text-lg">{fmt(Math.abs(results.savings))}/мес</span>
                      </p>
                      <p className="text-xs text-orange-600 mt-2 opacity-80">
                        Но учтите: фрилансер не требует онбординга, испытательного срока и не создаёт трудовых споров.
                      </p>
                    </>
                  )
                ) : null}
              </div>
            )}
          </div>
        )}

        {/* Key insights */}
        <div className="mt-4 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Почему фрилансеры часто выгоднее:</p>
          <ul className="space-y-1.5 text-xs text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
              <span>Нет страховых взносов — вы не платите 30% сверху оклада</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
              <span>Нет отпускных и больничных — платите только за реальную работу</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
              <span>Нет затрат на рабочее место и оборудование (фрилансер работает своими инструментами)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
              <span>Нет расходов на подбор, обучение и адаптацию</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
              <span>Гибкость — нанимаете на проект, а не навсегда</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Viral CTA — freelancers share this with clients */}
      <section className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
        <p className="text-sm font-bold text-indigo-800 mb-1">
          🔗 Пошлите эту страницу заказчику
        </p>
        <p className="text-xs text-indigo-600 mb-3">
          Клиент говорит «дорого»? Покажите ему, во сколько обходится штатный сотрудник с теми же задачами.
        </p>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "Реальная стоимость сотрудника — калькулятор",
                text: `Штатный сотрудник за ${new Intl.NumberFormat("ru-RU").format(grossSalary)} ₽ gross стоит работодателю ${new Intl.NumberFormat("ru-RU").format(Math.round(results.totalMonthly))} ₽/мес — посчитайте сами:`,
                url: "https://freelancecalc-one.vercel.app/instrumenty/kalkulator-stoimosti-sotrudnika",
              }).catch(() => {});
            } else {
              navigator.clipboard.writeText("https://freelancecalc-one.vercel.app/instrumenty/kalkulator-stoimosti-sotrudnika").then(() => {
                alert("Ссылка скопирована!");
              });
            }
          }}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
        >
          📤 Поделиться калькулятором
        </button>
      </section>

      {/* Internal links */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5">
        <p className="text-sm font-semibold text-slate-700 mb-3">Полезные ссылки</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/" className="text-xs text-indigo-600 hover:underline bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
            Калькулятор ставки фрилансера
          </Link>
          <Link href="/frilanc-vs-najm" className="text-xs text-indigo-600 hover:underline bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
            Фриланс vs найм по специальностям
          </Link>
          <Link href="/stati/skolko-stoit-nanyat-frilansera" className="text-xs text-indigo-600 hover:underline bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
            Сколько стоит нанять фрилансера?
          </Link>
          <Link href="/stavka" className="text-xs text-indigo-600 hover:underline bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
            Ставки по специальностям
          </Link>
        </div>
      </section>
    </div>
  );
}
