"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// 2026 constants — источник: gogov.ru, klerk.ru, СФР
// https://gogov.ru/articles/retirement-points/ipk2026
// https://www.klerk.ru/buh/articles/651570/
const IPK_COST_2026 = 156.76;           // ₽/мес за 1 балл ИПК
const FIXED_PAYMENT_2026 = 9_584.69;   // ₽/мес фиксированная выплата
const MIN_CONTRIBUTION_YEAR = 71_525.52; // ₽/год минимальный добровольный взнос самозанятого
const IPC_PER_MIN_YEAR = 1.09;           // ИПК за минимальный взнос в год
const MIN_STAZH = 15;                    // минимальный стаж для страховой пенсии (2026)
const MIN_IPC = 30;                      // минимальный ИПК для страховой пенсии (2026)
const SOCIAL_PENSION_2026 = 7_500;       // социальная пенсия ~(платится на 5 лет позже)
const IPC_PER_OFFICIAL_YEAR = 1.5;       // средний ИПК за год официальной работы (оценка, медиана)

function fmt(n: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

function plural(n: number, one: string, few: string, many: string) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

export default function PensionCalc() {
  const [selfEmployedYears, setSelfEmployedYears] = useState(5);
  const [officialYears, setOfficialYears] = useState(5);

  const r = useMemo(() => {
    // ИПК и стаж из официальной работы
    const ipcOfficial = officialYears * IPC_PER_OFFICIAL_YEAR;

    // --- Сценарий БЕЗ добровольных взносов ---
    const stazh_no = officialYears; // годы самозанятости НЕ идут в стаж
    const ipc_no = ipcOfficial;
    const eligible_no = stazh_no >= MIN_STAZH && ipc_no >= MIN_IPC;
    const pension_no = eligible_no
      ? Math.round(ipc_no * IPK_COST_2026 + FIXED_PAYMENT_2026)
      : SOCIAL_PENSION_2026;

    // --- Сценарий С минимальными добровольными взносами ---
    const ipcFromSE = selfEmployedYears * IPC_PER_MIN_YEAR;
    const stazh_yes = officialYears + selfEmployedYears;
    const ipc_yes = ipcOfficial + ipcFromSE;
    const eligible_yes = stazh_yes >= MIN_STAZH && ipc_yes >= MIN_IPC;
    const pension_yes = eligible_yes
      ? Math.round(ipc_yes * IPK_COST_2026 + FIXED_PAYMENT_2026)
      : Math.round(SOCIAL_PENSION_2026 + ipcFromSE * IPK_COST_2026);

    const pensionDiff = pension_yes - pension_no;

    // Накопленная потеря за 20 лет пенсии
    const cumulativeLoss = pensionDiff * 12 * 20;

    // Потеря ИПК за каждый год без взносов → потеря пенсии в месяц
    const lossPerYearMonthly = IPC_PER_MIN_YEAR * IPK_COST_2026;

    // Полная стоимость добровольных взносов
    const totalCost = selfEmployedYears * MIN_CONTRIBUTION_YEAR;

    // Окупаемость
    const monthsToPayback = pensionDiff > 0 ? totalCost / pensionDiff : Infinity;
    const yearsToPayback = monthsToPayback / 12;

    return {
      pension_no,
      pension_yes,
      pensionDiff,
      cumulativeLoss,
      lossPerYearMonthly,
      totalCost,
      yearsToPayback,
      eligible_no,
      eligible_yes,
      ipcFromSE,
      monthlyContribution: MIN_CONTRIBUTION_YEAR / 12,
      stazh_no,
      stazh_yes,
      ipc_no: Math.round(ipc_no * 10) / 10,
      ipc_yes: Math.round(ipc_yes * 10) / 10,
    };
  }, [selfEmployedYears, officialYears]);

  return (
    <div className="space-y-6">
      {/* Alert */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl px-4 py-3 flex gap-3">
        <span className="text-xl">⚠️</span>
        <p className="text-sm text-amber-800">
          <strong>По умолчанию самозанятые не платят пенсионные взносы.</strong>{" "}
          НПД (4% или 6%) идёт только в ФОМС. Каждый год работы как самозанятый без добровольных взносов — это{" "}
          <strong>−{fmt(r.lossPerYearMonthly)}/мес</strong> к будущей пенсии навсегда.
        </p>
      </div>

      {/* Inputs */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Лет работаете (или планируете работать) как самозанятый:{" "}
            <strong className="text-indigo-600">{selfEmployedYears}</strong>
          </label>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={selfEmployedYears}
            onChange={(e) => setSelfEmployedYears(+e.target.value)}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1 год</span>
            <span>30 лет</span>
          </div>
          {/* Quick presets */}
          <div className="flex flex-wrap gap-2 mt-2">
            {[2, 5, 10, 15, 20].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setSelfEmployedYears(v)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  selfEmployedYears === v
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-500 border-slate-300 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {v} {plural(v, "год", "года", "лет")}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Лет официального трудоустройства (работодатель платил взносы):{" "}
            <strong className="text-indigo-600">{officialYears}</strong>
          </label>
          <input
            type="range"
            min={0}
            max={40}
            step={1}
            value={officialYears}
            onChange={(e) => setOfficialYears(+e.target.value)}
            className="w-full accent-indigo-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>0 (только самозанятость)</span>
            <span>40 лет</span>
          </div>
        </div>
      </section>

      {/* Results — two columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Without contributions */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-3">
            Без добровольных взносов
          </p>
          <p className="text-4xl font-bold text-red-700 leading-none">
            {fmt(r.pension_no)}
          </p>
          <p className="text-sm text-red-600 mt-0.5">в месяц</p>
          <div className="mt-4 space-y-1.5 text-xs text-red-700/80 border-t border-red-200 pt-3">
            <p>
              Стаж от самозанятости: <strong>0 лет</strong>
            </p>
            <p>
              ИПК от самозанятости: <strong>0 баллов</strong>
            </p>
            <p>
              Общий стаж: <strong>{r.stazh_no} {plural(r.stazh_no, "год", "года", "лет")}</strong>
            </p>
            {!r.eligible_no && (
              <p className="font-semibold text-red-700 mt-2">
                ⚠️ Может не хватить стажа/ИПК — страховую пенсию не дадут, только социальную (на 5 лет позже обычного)
              </p>
            )}
          </div>
        </div>

        {/* With minimum contributions */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3">
            С минимальными взносами
          </p>
          <p className="text-4xl font-bold text-emerald-700 leading-none">
            {fmt(r.pension_yes)}
          </p>
          <p className="text-sm text-emerald-600 mt-0.5">в месяц</p>
          <div className="mt-4 space-y-1.5 text-xs text-emerald-700/80 border-t border-emerald-200 pt-3">
            <p>
              ИПК от самозанятости:{" "}
              <strong>+{r.ipcFromSE.toFixed(1)} балла</strong>
            </p>
            <p>
              Общий стаж:{" "}
              <strong>
                {r.stazh_yes} {plural(r.stazh_yes, "год", "года", "лет")}
              </strong>
            </p>
            <p>
              Прибавка к пенсии:{" "}
              <strong className="text-emerald-700">
                +{fmt(r.pensionDiff)}/мес
              </strong>
            </p>
            <p>
              Взнос:{" "}
              <strong>{fmt(r.monthlyContribution)}/мес</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Loss block — strong Kahneman framing */}
      {r.pensionDiff > 0 && (
        <div className="bg-red-100 border border-red-300 rounded-2xl px-5 py-5">
          <p className="text-sm font-bold text-red-800">
            Каждый год без взносов —{" "}
            <span className="text-red-700">−{fmt(r.lossPerYearMonthly)}/мес</span> к пенсии навсегда
          </p>
          <div className="mt-3">
            <p className="text-xs text-red-700/70 mb-1">
              За {selfEmployedYears} {plural(selfEmployedYears, "год", "года", "лет")} самозанятости без взносов — потеря пенсии составит:
            </p>
            <p className="text-3xl font-bold text-red-700">
              {fmt(r.cumulativeLoss)}
            </p>
            <p className="text-xs text-red-600/70 mt-1">
              {fmt(r.pensionDiff)}/мес × 12 мес × 20 лет пенсии
            </p>
          </div>
        </div>
      )}

      {/* Cost-benefit table */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <h3 className="font-semibold text-slate-800 text-sm mb-4">
          💰 Цена вопроса: добровольные взносы 2026
        </h3>
        <div className="space-y-2 text-sm">
          {[
            {
              label: "Минимальный взнос в год",
              value: fmt(MIN_CONTRIBUTION_YEAR),
              note: null,
            },
            {
              label: "В месяц",
              value: fmt(r.monthlyContribution),
              note: null,
            },
            {
              label: `Итого за ${selfEmployedYears} ${plural(selfEmployedYears, "год", "года", "лет")}`,
              value: fmt(r.totalCost),
              note: null,
            },
            {
              label: "Прибавка к пенсии",
              value: `+${fmt(r.pensionDiff)}/мес`,
              note: null,
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex justify-between items-center py-1 border-b border-amber-100 last:border-0"
            >
              <span className="text-slate-600">{label}</span>
              <strong className="text-slate-800">{value}</strong>
            </div>
          ))}
          {isFinite(r.yearsToPayback) && (
            <div className="flex justify-between items-center pt-2 mt-1 border-t border-amber-300">
              <span className="text-slate-600">Окупаемость взносов</span>
              <strong className="text-amber-700">
                ~{Math.round(r.yearsToPayback)} {plural(Math.round(r.yearsToPayback), "год", "года", "лет")} после выхода на пенсию
              </strong>
            </div>
          )}
        </div>
        <p className="text-xs text-amber-700/70 mt-3">
          Если доживёте до пенсии и проживёте её дольше {Math.round(r.yearsToPayback)} лет —
          взносы окупятся. При меньшем сроке — в минусе. Это важно учитывать.
        </p>
      </section>

      {/* How to pay */}
      <section className="bg-indigo-600 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-base mb-1">Как платить добровольные взносы?</h3>
        <p className="text-indigo-200 text-sm mb-4">
          Через приложение СФР, СберБизнес или Госуслуги. Сначала подайте заявление
          о добровольном вступлении в правоотношения по ОПС.
        </p>
        <ol className="text-indigo-100 text-sm space-y-1 list-decimal list-inside mb-4">
          <li>Зайдите на сайт СФР или Госуслуги</li>
          <li>Подайте заявление на добровольное страхование по ОПС</li>
          <li>Оплатите взнос до 31 декабря (частями или разово)</li>
          <li>Получите год стажа и 1,09 ИПК</li>
        </ol>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/nalog/sfr"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            Больничный для самозанятых (СФР) →
          </Link>
          <Link
            href="/"
            className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            Рассчитать ставку с учётом взносов →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-3">
        {[
          {
            q: "Самозанятый вообще не получит пенсию?",
            a: "Получит, но только социальную — на 5 лет позже обычного пенсионного возраста и значительно меньше. В 2026 году социальная пенсия составляет ~7 500 ₽/мес. Страховую пенсию (которая привязана к стажу и ИПК) самозанятый получит только если имеет достаточный официальный стаж или платил добровольные взносы.",
          },
          {
            q: "Если у меня была официальная работа — зачтётся ли стаж?",
            a: "Да. Все годы официального трудоустройства (когда работодатель платил страховые взносы в ПФР/СФР) идут в стаж и ИПК. Калькулятор учитывает это. Проблема только в годах самозанятости без добровольных взносов.",
          },
          {
            q: "Можно ли заплатить за прошлые годы?",
            a: "Нет. Добровольные взносы можно платить только за текущий год (до 31 декабря). «Докупить» пенсионный стаж за прошлые годы самозанятости невозможно.",
          },
          {
            q: "Сколько ИПК даёт минимальный взнос?",
            a: `В 2026 году минимальный взнос — ${new Intl.NumberFormat("ru-RU").format(MIN_CONTRIBUTION_YEAR)} ₽/год. За это дают 1,09 балла ИПК. Стоимость 1 балла — ${IPK_COST_2026} ₽/мес, то есть минимальный взнос добавляет ~171 ₽/мес к будущей пенсии.`,
          },
        ].map(({ q, a }) => (
          <details key={q} className="bg-white border border-slate-200 rounded-xl p-4 group">
            <summary className="text-sm font-semibold text-slate-800 cursor-pointer list-none flex justify-between items-center">
              {q}
              <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
            </summary>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a}</p>
          </details>
        ))}
      </section>

      {/* Source */}
      <p className="text-xs text-slate-400 text-center">
        Данные 2026: ИПК — 156,76 ₽/балл, фиксированная выплата — 9 584,69 ₽, мин. взнос самозанятого — 71 525,52 ₽/год.{" "}
        <a href="https://gogov.ru/articles/retirement-points/ipk2026" target="_blank" rel="noopener noreferrer" className="underline">
          Источник: gogov.ru
        </a>
        ,{" "}
        <a href="https://sfr.gov.ru/employers/selfemployed/" target="_blank" rel="noopener noreferrer" className="underline">
          СФР
        </a>
        . Расчёт ориентировочный.
      </p>
    </div>
  );
}
