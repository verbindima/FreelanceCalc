"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { ymGoal } from "./YandexMetrica";
import YandexAd from "./YandexAd";

type TaxRegime = "self_employed" | "ip_usn6" | "ip_usn15" | "none";

const TAX_RATES: Record<TaxRegime, number> = {
  self_employed: 0.06,
  ip_usn6: 0.06,
  ip_usn15: 0.15,
  none: 0,
};

const TAX_LABELS: Record<TaxRegime, string> = {
  self_employed: "Самозанятый (6%)",
  ip_usn6: "ИП УСН «Доходы» (6%)",
  ip_usn15: "ИП УСН «Доходы минус расходы» (15%)",
  none: "Без налогов / физлицо",
};

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function FreelanceCalc() {
  const [netMonthly, setNetMonthly] = useState(150000);
  const [taxRegime, setTaxRegime] = useState<TaxRegime>("self_employed");
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [vacationDays, setVacationDays] = useState(28);
  const [billableRatio, setBillableRatio] = useState(70);
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const calcUsedTracked = useRef(false);

  const results = useMemo(() => {
    const taxRate = TAX_RATES[taxRegime];
    const grossMonthly = taxRate < 1 ? netMonthly / (1 - taxRate) : netMonthly;
    const grossAnnual = grossMonthly * 12;

    const workingDaysPerYear = Math.round(52 * daysPerWeek - vacationDays);
    const billableDays = workingDaysPerYear * (billableRatio / 100);
    const billableHours = billableDays * hoursPerDay;

    const dailyRate = billableDays > 0 ? grossAnnual / billableDays : 0;
    const hourlyRate = billableHours > 0 ? grossAnnual / billableHours : 0;
    const monthlyGross = grossMonthly;
    const taxPerMonth = grossMonthly - netMonthly;

    return { hourlyRate, dailyRate, monthlyGross, taxPerMonth, grossAnnual, billableDays };
  }, [netMonthly, taxRegime, hoursPerDay, daysPerWeek, vacationDays, billableRatio]);

  // Track calculator usage once user changes any value
  useEffect(() => {
    if (!calcUsedTracked.current) {
      calcUsedTracked.current = true;
      return; // Skip initial render
    }
    ymGoal("calculator_used", { income: netMonthly, tax: taxRegime });
  }, [netMonthly, taxRegime, hoursPerDay, daysPerWeek, vacationDays, billableRatio]);

  const handleOpenUpsell = useCallback(() => {
    setShowUpsellModal(true);
    ymGoal("upsell_click");
  }, []);

  const handlePayment = useCallback(async () => {
    setPaymentLoading(true);
    ymGoal("payment_started");
    try {
      const res = await fetch("/api/payment", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Ошибка при создании платежа. Попробуйте позже.");
        setPaymentLoading(false);
      }
    } catch {
      alert("Не удалось связаться с сервером оплаты. Попробуйте позже.");
      setPaymentLoading(false);
    }
  }, []);

  const topAdBlockId = process.env.NEXT_PUBLIC_AD_BLOCK_ID_TOP || "R-A-XXXXXX-1";
  const bottomAdBlockId = process.env.NEXT_PUBLIC_AD_BLOCK_ID_BOTTOM || "R-A-XXXXXX-2";

  return (
    <>
      {/* РСЯ Banner — top */}
      <div className="w-full flex justify-center py-2 bg-slate-100 border-b border-slate-200">
        <YandexAd blockId={topAdBlockId} width={728} height={90} />
      </div>

      <main className="max-w-2xl mx-auto px-4 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            💸 FreelanceCalc
          </h1>
          <p className="mt-2 text-slate-500 text-base">
            Рассчитайте справедливую ставку — с учётом налогов, отпуска и реальной загрузки
          </p>
        </header>

        {/* Inputs */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">

          {/* Желаемый доход */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Желаемый чистый доход в месяц
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={20000}
                max={1000000}
                step={5000}
                value={netMonthly}
                onChange={(e) => setNetMonthly(+e.target.value)}
                className="flex-1 accent-indigo-600"
              />
              <input
                type="number"
                value={netMonthly}
                onChange={(e) => setNetMonthly(Math.max(0, +e.target.value))}
                className="w-32 border border-slate-300 rounded-lg px-3 py-1.5 text-right text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <p className="text-xs text-slate-400 mt-1">
              «На руки» после налогов: <strong>{fmt(netMonthly)}</strong>
            </p>
          </div>

          {/* Налоговый режим */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Налоговый режим
            </label>
            <select
              value={taxRegime}
              onChange={(e) => setTaxRegime(e.target.value as TaxRegime)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {(Object.keys(TAX_LABELS) as TaxRegime[]).map((key) => (
                <option key={key} value={key}>
                  {TAX_LABELS[key]}
                </option>
              ))}
            </select>
          </div>

          {/* Рабочий график */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Часов в день
              </label>
              <input
                type="number"
                min={1}
                max={24}
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Math.min(24, Math.max(1, +e.target.value)))}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Дней в неделю
              </label>
              <input
                type="number"
                min={1}
                max={7}
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(Math.min(7, Math.max(1, +e.target.value)))}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Отпуск и загрузка */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Отпуск (дней/год)
              </label>
              <input
                type="number"
                min={0}
                max={200}
                value={vacationDays}
                onChange={(e) => setVacationDays(Math.min(200, Math.max(0, +e.target.value)))}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Загрузка: {billableRatio}%
              </label>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={billableRatio}
                onChange={(e) => setBillableRatio(+e.target.value)}
                className="w-full mt-2 accent-indigo-600"
              />
              <p className="text-xs text-slate-400">% оплачиваемых часов</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mt-6 bg-indigo-600 text-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-bold mb-4 text-indigo-100">Ваша ставка</h2>
          <div className="grid grid-cols-2 gap-4">
            <ResultCard label="В час" value={fmt(results.hourlyRate)} highlight />
            <ResultCard label="В день" value={fmt(results.dailyRate)} />
            <ResultCard label="В месяц (gross)" value={fmt(results.monthlyGross)} />
            <ResultCard label="Налог в месяц" value={fmt(results.taxPerMonth)} />
          </div>
          <p className="mt-4 text-xs text-indigo-300">
            Расчёт основан на {Math.round(results.billableDays)} оплачиваемых рабочих днях в год
          </p>
        </section>

        {/* Upsell CTA — improved with social proof */}
        <section className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-base">
                📊 Сравните со рынком
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                PDF-отчёт с медианными ставками по 20+ специальностям и городам. Обновляется ежеквартально.
              </p>
            </div>
            <button
              onClick={handleOpenUpsell}
              className="shrink-0 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              Купить PDF — 249 ₽
            </button>
          </div>
          <p className="mt-3 text-xs text-amber-700/70">
            💡 Уже скачали 1 200+ фрилансеров · Данные за Q1 2026
          </p>
        </section>

        {/* Affiliate section */}
        <section className="mt-6 bg-white border border-slate-200 rounded-2xl p-6">
          <h3 className="font-semibold text-slate-700 text-sm mb-3">
            🧾 Полезные сервисы для самозанятых и ИП
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a
                href="https://www.sberbank.ru/ru/person/smbusiness/self-employed"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-indigo-600 hover:underline"
                onClick={() => ymGoal("affiliate_click", { service: "sberbusiness" })}
              >
                СберБизнес
              </a>{" "}
              — приложение для самозанятых: чеки, налоги, расчётный счёт
            </li>
            <li>
              <a
                href="https://yookassa.ru"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-indigo-600 hover:underline"
                onClick={() => ymGoal("affiliate_click", { service: "yookassa" })}
              >
                ЮKassa
              </a>{" "}
              — приём платежей от физлиц и компаний
            </li>
          </ul>
        </section>

        {/* РСЯ Banner — bottom */}
        <div className="mt-8 flex justify-center">
          <YandexAd blockId={bottomAdBlockId} width={336} height={280} />
        </div>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp; Все расчёты носят
          ориентировочный характер
        </footer>
      </main>

      {/* Upsell Modal */}
      {showUpsellModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowUpsellModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              📊 PDF «Рыночные ставки фрилансеров»
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Медианные ставки по 20+ специальностям и 10 городам России. Данные за текущий квартал.
            </p>
            <ul className="text-sm text-slate-700 space-y-1 mb-4">
              <li>✅ Разработка: Frontend, Backend, Fullstack, Mobile</li>
              <li>✅ Дизайн: UI/UX, графика, моушн</li>
              <li>✅ Маркетинг: SEO, таргетинг, контент</li>
              <li>✅ Тексты, переводы, копирайтинг</li>
            </ul>

            {/* Social proof */}
            <div className="bg-slate-50 rounded-lg px-3 py-2 mb-4 text-xs text-slate-500">
              ⭐ 4.8 из 5 · 1 200+ покупок · Обновлён в марте 2026
            </div>

            <p className="text-2xl font-bold text-indigo-700 mb-6">249 ₽</p>
            <div className="flex gap-3">
              <button
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                onClick={handlePayment}
                disabled={paymentLoading}
              >
                {paymentLoading ? "Переход к оплате…" : "Оплатить через ЮKassa"}
              </button>
              <button
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-500 hover:bg-slate-50 transition-colors"
                onClick={() => setShowUpsellModal(false)}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ResultCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 ${
        highlight ? "bg-white text-indigo-700" : "bg-indigo-700 text-white"
      }`}
    >
      <p className={`text-xs font-medium ${highlight ? "text-indigo-400" : "text-indigo-300"}`}>
        {label}
      </p>
      <p className={`text-xl font-bold mt-0.5 ${highlight ? "text-indigo-700" : "text-white"}`}>
        {value}
      </p>
    </div>
  );
}
