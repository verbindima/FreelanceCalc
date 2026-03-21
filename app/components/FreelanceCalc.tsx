"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { ymGoal } from "./YandexMetrica";
import YandexAd from "./YandexAd";

/** Read a single query param from the current URL (client-side only) */
function getParam(key: string): string | null {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get(key);
}

/** Update URL query params without navigation */
function setParams(params: Record<string, string>) {
  if (typeof window === "undefined") return;
  const sp = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([k, v]) => sp.set(k, v));
  window.history.replaceState(null, "", `?${sp.toString()}`);
}

type TaxRegime = "self_employed_fl" | "self_employed_ul" | "ip_usn6" | "ip_usn15" | "none";

const TAX_RATES: Record<TaxRegime, number> = {
  self_employed_fl: 0.04,  // НПД: 4% с физлиц
  self_employed_ul: 0.06,  // НПД: 6% с юрлиц/ИП
  ip_usn6: 0.06,
  ip_usn15: 0.15,
  none: 0,
};

const TAX_LABELS: Record<TaxRegime, string> = {
  self_employed_fl: "Самозанятый — клиенты физлица (НПД 4%)",
  self_employed_ul: "Самозанятый — клиенты компании (НПД 6%)",
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

/** Market position based on real Q1-2026 benchmark data (freelancecalc-one.vercel.app/benchmark) */
function getMarketContext(hourlyRate: number): {
  emoji: string;
  label: string;
  description: string;
  color: string;
} {
  if (hourlyRate < 700) {
    return {
      emoji: "📉",
      label: "Ниже рынка",
      description: "Даже начинающий копирайтер берёт 700–800 ₽/час. Посмотрите, сколько реально платят за вашу специальность —",
      color: "text-red-600 bg-red-50 border-red-200",
    };
  }
  if (hourlyRate < 1200) {
    return {
      emoji: "📊",
      label: "Нижний квартиль рынка",
      description: "Медиана по большинству специальностей — 1 200–2 500 ₽/час. Проверьте, не занижаете ли вы ставку —",
      color: "text-orange-600 bg-orange-50 border-orange-200",
    };
  }
  if (hourlyRate < 2000) {
    return {
      emoji: "✅",
      label: "Рыночный уровень",
      description: "Соответствует медиане для дизайнеров и junior-разработчиков. Сравните с точными данными по вашей специальности —",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    };
  }
  if (hourlyRate < 3500) {
    return {
      emoji: "🚀",
      label: "Выше медианы",
      description: "Сопоставимо с mid/senior разработчиками. Посмотрите точные данные по 22 специальностям и 10 городам —",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    };
  }
  return {
    emoji: "⭐",
    label: "Топ рынка",
    description: "Топ-10% фрилансеров. Сопоставимо с ML/AI и Senior DevOps Москвы. Убедитесь сами —",
    color: "text-violet-600 bg-violet-50 border-violet-200",
  };
}

export default function FreelanceCalc() {
  // Initialise from URL params if present (enables sharing)
  const [netMonthly, setNetMonthly] = useState(() => Number(getParam("income")) || 150000);
  const [taxRegime, setTaxRegime] = useState<TaxRegime>(
    (getParam("tax") as TaxRegime) || "self_employed_fl"
  );
  const [hoursPerDay, setHoursPerDay] = useState(() => Number(getParam("hpd")) || 8);
  const [daysPerWeek, setDaysPerWeek] = useState(() => Number(getParam("dpw")) || 5);
  const [vacationDays, setVacationDays] = useState(() => Number(getParam("vac")) || 28);
  const [billableRatio, setBillableRatio] = useState(() => Number(getParam("load")) || 70);
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
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

  const marketCtx = useMemo(() => getMarketContext(results.hourlyRate), [results.hourlyRate]);

  // Track calculator usage once user changes any value
  useEffect(() => {
    if (!calcUsedTracked.current) {
      calcUsedTracked.current = true;
      return; // Skip initial render
    }
    ymGoal("calculator_used", { income: netMonthly, tax: taxRegime });
  }, [netMonthly, taxRegime, hoursPerDay, daysPerWeek, vacationDays, billableRatio]);

  // Sync state to URL so the link stays shareable
  useEffect(() => {
    setParams({
      income: String(netMonthly),
      tax: taxRegime,
      hpd: String(hoursPerDay),
      dpw: String(daysPerWeek),
      vac: String(vacationDays),
      load: String(billableRatio),
    });
  }, [netMonthly, taxRegime, hoursPerDay, daysPerWeek, vacationDays, billableRatio]);

  const handleShare = useCallback(async () => {
    ymGoal("share_click");
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    } catch {
      // fallback: prompt
      window.prompt("Скопируйте ссылку на ваш расчёт:", url);
    }
  }, []);

  const handleShareTelegram = useCallback(() => {
    ymGoal("share_telegram_click");
    const url = window.location.href;
    const hourly = Math.round(results.hourlyRate);
    const daily = Math.round(results.dailyRate);
    const fmtNum = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
    const text =
      `${marketCtx.emoji} Моя ставка фрилансера: ${fmtNum(hourly)} ₽/час — ${marketCtx.label.toLowerCase()}\n` +
      `📅 ${fmtNum(daily)} ₽/день · ${fmtNum(netMonthly)} ₽/мес на руки\n\n` +
      `Посчитай свою → ${url}`;
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(tgUrl, "_blank", "noopener,noreferrer");
  }, [results, netMonthly, marketCtx]);

  const handleShareVK = useCallback(() => {
    ymGoal("share_vk_click");
    const url = window.location.href;
    const hourly = Math.round(results.hourlyRate);
    const fmtNum = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
    const title = `${marketCtx.emoji} Моя ставка фрилансера: ${fmtNum(hourly)} ₽/час — ${marketCtx.label.toLowerCase()}`;
    const vkUrl = `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&noparse=true`;
    window.open(vkUrl, "_blank", "noopener,noreferrer");
  }, [results, marketCtx]);

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
  const adsEnabled = process.env.NEXT_PUBLIC_YANDEX_AD_ENABLED === "true";

  return (
    <>
      {/* РСЯ Banner — top (only when ads are actually enabled; no placeholder above the fold) */}
      {adsEnabled && (
        <div className="w-full flex justify-center py-2 bg-slate-100 border-b border-slate-200">
          <YandexAd blockId={topAdBlockId} width={728} height={90} />
        </div>
      )}

      <main className="max-w-2xl mx-auto px-4 py-10">
        <header className="mb-8 text-center">
          <p className="text-sm font-semibold text-indigo-500 mb-1 tracking-wide uppercase">
            FreelanceCalc
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Калькулятор ставки фрилансера
          </h1>
          <p className="mt-2 text-slate-500 text-base max-w-md mx-auto">
            Введите желаемый доход — за 30 секунд узнайте точную ставку с учётом налогов, отпуска и загрузки. Большинство фрилансеров занижают цену на 20–40%.
          </p>
          {/* Trust strip — truthful stats that build credibility before user touches the calculator */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
            {[
              { icon: "🎯", text: "36 специальностей" },
              { icon: "🏙️", text: "26 городов" },
              { icon: "🧾", text: "Самозанятый и ИП" },
              { icon: "📅", text: "Данные Q1 2026" },
              { icon: "✅", text: "Бесплатно" },
            ].map(({ icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 px-3 py-1 rounded-full"
              >
                {icon} {text}
              </span>
            ))}
          </div>
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
            {/* Quick income presets — reduce friction to first result */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[80000, 120000, 150000, 200000, 300000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setNetMonthly(preset)}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                    netMonthly === preset
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-slate-500 border-slate-300 hover:border-indigo-400 hover:text-indigo-600"
                  }`}
                >
                  {new Intl.NumberFormat("ru-RU", { notation: "compact", maximumFractionDigits: 0 }).format(preset)} ₽
                </button>
              ))}
            </div>
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
          <div className="flex items-center justify-between mb-4 gap-2">
            <h2 className="text-lg font-bold text-indigo-100">Ваша ставка</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-xs bg-white/15 hover:bg-white/25 active:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-colors"
                title="Скопировать ссылку на расчёт"
              >
                {shareCopied ? "✅ Скопировано!" : "🔗 Скопировать"}
              </button>
              <button
                onClick={handleShareTelegram}
                className="flex items-center gap-1.5 text-xs bg-[#2AABEE]/80 hover:bg-[#2AABEE] active:bg-[#229ED9] text-white px-3 py-1.5 rounded-lg transition-colors"
                title="Поделиться в Telegram"
              >
                ✈️ Telegram
              </button>
              <button
                onClick={handleShareVK}
                className="flex items-center gap-1.5 text-xs bg-[#2787F5]/80 hover:bg-[#2787F5] active:bg-[#1d6ed4] text-white px-3 py-1.5 rounded-lg transition-colors"
                title="Поделиться ВКонтакте"
              >
                ВК
              </button>
            </div>
          </div>
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

        {/* Market context badge — drives curiosity and upsell clicks */}
        <div className={`mt-3 flex items-start gap-3 border rounded-xl px-4 py-3 ${marketCtx.color}`}>
          <span className="text-xl leading-none mt-0.5">{marketCtx.emoji}</span>
          <div>
            <p className="text-sm font-semibold">{marketCtx.label}</p>
            <p className="text-xs mt-0.5 opacity-80">{marketCtx.description}{" "}
              <button
                onClick={handleOpenUpsell}
                className="underline font-medium hover:opacity-100 opacity-70"
              >
                Посмотреть данные по рынку →
              </button>
            </p>
          </div>
        </div>

        {/* Specialty Gap — personalized market comparison to drive upsell + viral sharing */}
        <div className="mt-3 bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
            Выберите специальность — сравним с рынком:
          </p>
          <div className="flex flex-wrap gap-1.5 mb-0">
            {QUICK_SPECIALTIES.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => {
                  const next = selectedSpecialty === s.slug ? null : s.slug;
                  setSelectedSpecialty(next);
                  if (next) ymGoal("specialty_gap_select", { slug: s.slug });
                }}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                  selectedSpecialty === s.slug
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-500 border-slate-300 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
          {selectedSpecialty && (() => {
            const spec = QUICK_SPECIALTIES.find((s) => s.slug === selectedSpecialty);
            if (!spec) return null;
            const myRate = results.hourlyRate;
            const diff = myRate - spec.mid;
            const diffPct = Math.round((Math.abs(diff) / spec.mid) * 100);
            const annualGap = Math.abs(diff) * results.billableDays * hoursPerDay;
            const isBelow = diff < 0;
            return (
              <div className={`mt-3 rounded-xl px-4 py-3 ${isBelow ? "bg-red-50 border border-red-200" : "bg-emerald-50 border border-emerald-200"}`}>
                <p className="text-sm font-semibold text-slate-800">
                  {spec.title}: медиана {spec.median} ₽/час
                </p>
                <p className={`text-xs mt-1 ${isBelow ? "text-red-700" : "text-emerald-700"}`}>
                  {isBelow
                    ? `Ваша ставка ниже медианы на ${diffPct}% — это ~${fmt(annualGap)} недополученного дохода в год`
                    : `Ваша ставка выше медианы на ${diffPct}% — вы в числе лидеров по специальности! 🎉`}
                </p>
                {isBelow && (
                  <button
                    onClick={() => { handleOpenUpsell(); ymGoal("upsell_gap_click", { slug: selectedSpecialty }); }}
                    className="mt-2 text-xs font-semibold text-red-700 underline hover:text-red-900"
                  >
                    Полные данные по городам и опыту → Бенчмарк PDF 249 ₽
                  </button>
                )}
              </div>
            );
          })()}
        </div>

        {/* Viral share nudge — appears after user sees their rate; drives Telegram sharing */}
        <div className="mt-3 flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
          <p className="text-xs text-slate-500">
            💬 Узнайте, сколько берут коллеги — поделитесь калькулятором в чате
          </p>
          <button
            onClick={handleShareTelegram}
            className="shrink-0 flex items-center gap-1.5 text-xs bg-[#2AABEE] hover:bg-[#229ED9] text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
          >
            ✈️ Поделиться
          </button>
        </div>

        {/* Upsell CTA — personalized by market position to maximise curiosity */}
        <section className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
                Ваша ставка: {fmt(Math.round(results.hourlyRate))} / час · {marketCtx.label}
              </p>
              <h3 className="font-bold text-slate-800 text-base">
                {marketCtx.label === "Ниже рынка"
                  ? "Вы зарабатываете ниже рынка. Насколько — и что изменить?"
                  : marketCtx.label === "Нижний квартиль рынка"
                  ? "Вы в нижней четверти рынка. Медиана выше — проверьте разрыв."
                  : marketCtx.label === "Рыночный уровень"
                  ? "Вы на уровне рынка. Сколько берут senior — и где ваш потолок?"
                  : marketCtx.label === "Выше медианы"
                  ? "Вы выше медианы. Убедитесь, что не оставляете деньги на столе."
                  : "Вы в топ-10% рынка. Посмотрите, с кем конкурируете по цене."}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Реальные данные по 22 специальностям × 10 городам. Большинство фрилансеров после сравнения удивляются — и поднимают ставку.
              </p>
            </div>
            <button
              onClick={handleOpenUpsell}
              className="shrink-0 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              Проверить по рынку — 249 ₽
            </button>
          </div>
          <p className="mt-3 text-xs text-amber-700/70">
            📅 Q1 2026 · 22 специальности · 10 городов · Junior / Mid / Senior
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

        {/* Specialty calculators — internal linking for SEO + user discovery */}
        <section className="mt-6 bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="font-semibold text-slate-700 text-sm mb-3">
            🎯 Калькуляторы по специальностям
          </h2>
          <div className="flex flex-wrap gap-2">
            {FEATURED_SPECIALTIES.map((s) => (
              <Link
                key={s.slug}
                href={`/stavka/${s.slug}`}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
                onClick={() => ymGoal("specialty_link_click", { slug: s.slug })}
              >
                {s.title}
              </Link>
            ))}
          </div>
          <Link
            href="/stavka"
            className="mt-3 inline-block text-xs text-indigo-600 hover:underline"
            onClick={() => ymGoal("specialty_all_click")}
          >
            Все специальности →
          </Link>
        </section>

        {/* РСЯ Banner — bottom (only when ads enabled, no placeholder) */}
        {adsEnabled && (
          <div className="mt-8 flex justify-center">
            <YandexAd blockId={bottomAdBlockId} width={336} height={280} />
          </div>
        )}

        {/* Embed CTA — encourages other sites to embed, generates backlinks */}
        <section className="mt-6 bg-white border border-slate-200 rounded-2xl p-6">
          <h3 className="font-semibold text-slate-700 text-sm mb-1">
            🔗 Встроить калькулятор на свой сайт
          </h3>
          <p className="text-xs text-slate-500 mb-3">
            Блог, статья или справочная страница? Добавьте интерактивный калькулятор одной строкой кода — бесплатно.
          </p>
          <EmbedCode />
        </section>

        {/* Guide CTA — links to long-form article for SEO */}
        <section className="mt-6 bg-slate-800 rounded-2xl p-6 text-white">
          <h3 className="font-bold text-base mb-1">
            📖 Не знаете с чего начать?
          </h3>
          <p className="text-slate-300 text-sm mb-4">
            Подробное руководство: формулы, примеры и типичные ошибки при расчёте ставки
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/rukovodstvo"
              className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              onClick={() => ymGoal("guide_link_click")}
            >
              Читать руководство →
            </Link>
            <Link
              href="/instrumenty/kalkulator-naloga-samozanyatogo"
              className="inline-block bg-white/20 text-white hover:bg-white/30 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              onClick={() => ymGoal("tax_calc_link_click")}
            >
              🧾 Калькулятор налога НПД →
            </Link>
          </div>
        </section>

        {/* FAQ Section — rich snippets для Яндекса */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Частые вопросы</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400 space-y-1">
          <div>
            <Link href="/stati" className="hover:text-indigo-600">Статьи</Link>
            &nbsp;·&nbsp;
            <Link href="/goroda" className="hover:text-indigo-600">Города</Link>
            &nbsp;·&nbsp;
            <Link href="/stavka" className="hover:text-indigo-600">Специальности</Link>
            &nbsp;·&nbsp;
            <Link href="/reyting" className="hover:text-indigo-600">Рейтинг ставок</Link>
            &nbsp;·&nbsp;
            <Link href="/rukovodstvo" className="hover:text-indigo-600">Руководство</Link>
            &nbsp;·&nbsp;
            <Link href="/benchmark" className="hover:text-indigo-600">Бенчмарк ставок PDF</Link>
          </div>
          <div>© {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp; Все расчёты носят ориентировочный характер</div>
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
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4">
              <p className="text-xs text-amber-700 font-medium mb-0.5">Ваша рассчитанная ставка</p>
              <p className="text-2xl font-bold text-amber-800">{fmt(Math.round(results.hourlyRate))} / час</p>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Ваша ставка vs рынок Q1 2026
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Точные медианные ставки по 22 специальностям × 10 городам × 3 уровня опыта. Узнайте, занижаете ли вы цену — и на сколько.
            </p>
            <ul className="text-sm text-slate-700 space-y-1 mb-4">
              <li>✅ Frontend-разработчик в Москве: <strong>1 700–3 200 ₽/час</strong></li>
              <li>✅ UI/UX дизайнер: <strong>1 300–2 800 ₽/час</strong></li>
              <li>✅ Копирайтер: <strong>700–1 700 ₽/час</strong></li>
              <li>✅ SEO-специалист: <strong>1 100–2 200 ₽/час</strong></li>
              <li className="text-slate-400 text-xs pt-1">+ 18 других специальностей и разбивка по городам</li>
            </ul>

            {/* Info block */}
            <div className="bg-slate-50 rounded-lg px-3 py-2 mb-4 text-xs text-slate-500">
              🔄 Q1 2026 · Данные с FL.ru, Хабр Карьера, Kwork · Разбивка Junior / Mid / Senior
            </div>

            <p className="text-2xl font-bold text-indigo-700 mb-1">249 ₽</p>
            <p className="text-xs text-slate-400 mb-5">Единоразово · Без подписки · PDF сразу после оплаты · Данные Q1 2026</p>
            <div className="flex gap-3">
              <button
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                onClick={handlePayment}
                disabled={paymentLoading}
              >
                {paymentLoading ? "Переход к оплате…" : "Скачать PDF — 249 ₽"}
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

function EmbedCode() {
  const [copied, setCopied] = useState(false);
  const code = `<iframe\n  src="https://freelancecalc-one.vercel.app/widget"\n  width="100%"\n  height="420"\n  frameborder="0"\n  style="border-radius:12px;border:1px solid #e2e8f0"\n  title="Калькулятор ставки фрилансера"\n></iframe>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Скопируйте код:", code);
    }
  };

  return (
    <div>
      <pre className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600 overflow-x-auto whitespace-pre-wrap break-all">
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="mt-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg transition-colors"
      >
        {copied ? "✅ Скопировано!" : "📋 Скопировать код"}
      </button>
    </div>
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

/** Quick specialty market benchmarks — mid = midpoint of rate range from /reyting data */
const QUICK_SPECIALTIES = [
  { slug: "frontend-razrabotchik",  title: "Frontend",      median: "1 500–3 000", mid: 2250 },
  { slug: "backend-razrabotchik",   title: "Backend",       median: "2 000–4 000", mid: 3000 },
  { slug: "fullstack-razrabotchik", title: "Fullstack",     median: "2 000–4 500", mid: 3250 },
  { slug: "python-razrabotchik",    title: "Python",        median: "2 000–4 500", mid: 3250 },
  { slug: "dizajner-ui-ux",         title: "UI/UX",         median: "1 000–2 500", mid: 1750 },
  { slug: "graficheskij-dizajner",  title: "Дизайн",        median: "800–1 800",   mid: 1300 },
  { slug: "kopirayter",             title: "Копирайтинг",   median: "500–1 500",   mid: 1000 },
  { slug: "seo-specialist",         title: "SEO",           median: "900–2 000",   mid: 1450 },
  { slug: "targetolog",             title: "Таргет",        median: "800–2 000",   mid: 1400 },
  { slug: "smm-specialist",         title: "SMM",           median: "700–1 500",   mid: 1100 },
  { slug: "testirovshchik-qa",      title: "QA",            median: "900–2 000",   mid: 1450 },
  { slug: "ml-inzhener",            title: "ML/AI",         median: "3 000–7 000", mid: 5000 },
];

const FEATURED_SPECIALTIES = [
  { title: "Frontend-разработчик", slug: "frontend-razrabotchik" },
  { title: "Backend-разработчик", slug: "backend-razrabotchik" },
  { title: "Fullstack-разработчик", slug: "fullstack-razrabotchik" },
  { title: "UI/UX-дизайнер", slug: "dizajner-ui-ux" },
  { title: "Копирайтер", slug: "kopirayter" },
  { title: "SMM-специалист", slug: "smm-specialist" },
  { title: "SEO-специалист", slug: "seo-specialist" },
  { title: "Тестировщик QA", slug: "testirovshchik-qa" },
];

const FAQ_ITEMS = [
  {
    q: "Как рассчитать часовую ставку фрилансера?",
    a: "Определите желаемый чистый доход, добавьте налоги (самозанятый — 4% с физлиц, 6% с компаний), затем разделите годовую сумму на оплачиваемые часы с учётом отпуска и загрузки 60–70%. Калькулятор выше делает это автоматически.",
  },
  {
    q: "Какой налог платит самозанятый фрилансер в 2026 году?",
    a: "НПД (налог на профессиональный доход): 4% при работе с физлицами, 6% при работе с юрлицами и ИП. Страховые взносы не платятся, отчётность не сдаётся. Лимит дохода — 2.4 млн руб/год.",
  },
  {
    q: "Почему ставка фрилансера выше офисной зарплаты?",
    a: "Фрилансер сам оплачивает налоги, отпуск, больничные и оборудование. Часть времени уходит на поиск клиентов и переговоры — это неоплачиваемые часы. Для эквивалента офисной зарплаты ставку нужно умножить на 1.5–2.",
  },
  {
    q: "Что такое коэффициент загрузки (billable ratio)?",
    a: "Доля рабочего времени, которую вы фактически продаёте клиентам. Остальное — поиск заказов, переговоры, простои. Для большинства фрилансеров реалистичный показатель: 60–75%.",
  },
  {
    q: "Чем самозанятый отличается от ИП для фрилансера?",
    a: "Самозанятый: лимит 2.4 млн/год, налог 4–6%, без отчётности и взносов. ИП УСН 6%: нет лимита, налог 6% + взносы ~50 000 руб/год, минимальная отчётность. При небольших доходах самозанятость выгоднее.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-3 hover:bg-slate-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-800">{question}</span>
        <span className="text-slate-400 text-lg flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
}
