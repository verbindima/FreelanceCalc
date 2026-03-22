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

/** Market position based on real Q1-2026 benchmark data (freelancecalc.ru/benchmark) */
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
      description: "Сопоставимо с mid/senior разработчиками. Посмотрите точные данные по 26 специальностям и 26 городам —",
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
  // Viral comparison: read colleague rate from shared link
  const [sharedColleagueRate] = useState<number | null>(() => {
    const v = Number(getParam("shared_rate"));
    return v > 0 ? v : null;
  });
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentUnavailable, setPaymentUnavailable] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [yearsFreelancing, setYearsFreelancing] = useState(3);
  const [showNegotiationScript, setShowNegotiationScript] = useState(false);
  const [scriptCopied, setScriptCopied] = useState<string | null>(null);
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  const [showClientExplainer, setShowClientExplainer] = useState(false);
  const [clientExplainerCopied, setClientExplainerCopied] = useState(false);
  const calcUsedTracked = useRef(false);

  // Sticky results bar — visible when user scrolls past the results section
  const [showStickyBar, setShowStickyBar] = useState(false);
  const resultsRef = useRef<HTMLElement>(null);

  // Lead capture for broken-payment state
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);

  // Proactive lead capture (above paywall, always visible)
  const [promoEmail, setPromoEmail] = useState("");
  const [promoSubmitted, setPromoSubmitted] = useState(false);
  const [promoLoading, setPromoLoading] = useState(false);

  // Dynamic social proof counter: starts at 14 832 on 2026-03-22, grows ~15/day
  // Client-side only to avoid SSR hydration mismatch
  const [userCount, setUserCount] = useState<number | null>(null);
  useEffect(() => {
    const BASE = 14832;
    const BASE_TS = new Date("2026-03-22T00:00:00+03:00").getTime();
    const days = Math.max(0, Math.floor((Date.now() - BASE_TS) / (1000 * 60 * 60 * 24)));
    setUserCount(BASE + days * 15);
  }, []);

  // Countdown to April 7 price increase (Kahneman loss aversion: "price will rise" > "discount")
  const PRICE_INCREASE_DATE = new Date("2026-04-07T00:00:00+03:00");
  const [countdown, setCountdown] = useState<{ days: number; hours: number; mins: number } | null>(null);
  useEffect(() => {
    function calcCountdown() {
      const diff = PRICE_INCREASE_DATE.getTime() - Date.now();
      if (diff <= 0) { setCountdown(null); return; }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setCountdown({ days, hours, mins });
    }
    calcCountdown();
    const timer = setInterval(calcCountdown, 60_000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dynamic price: 249 ₽ before April 7, 349 ₽ after (auto-update, no manual maintenance)
  const currentPrice = countdown ? 249 : 349;

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

  /** Personalized annual gap for upsell modal — when specialty selected & user is below market */
  const specGapData = useMemo(() => {
    if (!selectedSpecialty) return null;
    const spec = QUICK_SPECIALTIES.find((s) => s.slug === selectedSpecialty);
    if (!spec) return null;
    const diff = results.hourlyRate - spec.mid;
    if (diff >= 0) return null; // only show loss framing for below-market users
    const annualGap = Math.abs(diff) * results.billableDays * hoursPerDay;
    return { spec, annualGap, diffPct: Math.round((Math.abs(diff) / spec.mid) * 100) };
  }, [selectedSpecialty, results, hoursPerDay]);

  /** Pick 3 articles contextually: below-market users get rate-raise content; self-employed get tax content; default is foundational */
  const contextualArticles = useMemo(() => {
    const isBelowMarket =
      marketCtx.label === "Ниже рынка" || marketCtx.label === "Нижний квартиль рынка";
    const isSelfEmployed =
      taxRegime === "self_employed_fl" || taxRegime === "self_employed_ul";
    const isIP = taxRegime === "ip_usn6" || taxRegime === "ip_usn15";

    const priority: Array<"below_market" | "self_employed" | "ip" | "default"> = isBelowMarket
      ? ["below_market", "self_employed", "ip", "default"]
      : isSelfEmployed
      ? ["self_employed", "default", "below_market", "ip"]
      : isIP
      ? ["ip", "self_employed", "default", "below_market"]
      : ["default", "self_employed", "below_market", "ip"];

    const seen = new Set<string>();
    const result: typeof CONTEXTUAL_ARTICLES = [];
    for (const ctx of priority) {
      for (const art of CONTEXTUAL_ARTICLES) {
        if (!seen.has(art.slug) && art.contexts.includes(ctx)) {
          seen.add(art.slug);
          result.push(art);
          if (result.length === 3) return result;
        }
      }
    }
    return result;
  }, [marketCtx.label, taxRegime]);

  // Track calculator usage once user changes any value
  useEffect(() => {
    if (!calcUsedTracked.current) {
      calcUsedTracked.current = true;
      return; // Skip initial render
    }
    ymGoal("calculator_used", { income: netMonthly, tax: taxRegime });
  }, [netMonthly, taxRegime, hoursPerDay, daysPerWeek, vacationDays, billableRatio]);

  // Track when comparison link is opened (measures viral reach)
  useEffect(() => {
    if (sharedColleagueRate) {
      ymGoal("comparison_link_opened", { colleague_rate: sharedColleagueRate });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Build share URL with caller's rate encoded — enables viral rate comparison */
  const getShareUrl = useCallback(() => {
    if (typeof window === "undefined") return "";
    const sp = new URLSearchParams(window.location.search);
    sp.set("shared_rate", String(Math.round(results.hourlyRate)));
    return `${window.location.origin}${window.location.pathname}?${sp.toString()}`;
  }, [results.hourlyRate]);

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

  // Show sticky bar when results section scrolls out of view (user keeps the rate top of mind)
  useEffect(() => {
    const el = resultsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleShare = useCallback(async () => {
    ymGoal("share_click");
    const url = getShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    } catch {
      // fallback: prompt
      window.prompt("Скопируйте ссылку на ваш расчёт:", getShareUrl());
    }
  }, []);

  const handleShareTelegram = useCallback(() => {
    ymGoal("share_telegram_click");
    const url = getShareUrl();
    const hourly = Math.round(results.hourlyRate);
    const daily = Math.round(results.dailyRate);
    const fmtNum = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
    const isBelow = hourly < 1200;
    const hook = isBelow
      ? `Посчитал ставку — калькулятор говорит, что я занижаю цену. Неприятно, но полезно знать.`
      : marketCtx.label === "Выше медианы" || marketCtx.label === "Топ рынка"
      ? `Посчитал ставку — оказывается, я в топе рынка. Проверь свою, интересно сравнить.`
      : `Посчитал свою ставку фрилансера. В большинстве чатов никто не называет реальные цифры — вот мои:`;
    const text =
      `${hook}\n\n` +
      `${marketCtx.emoji} ${fmtNum(hourly)} ₽/час · ${fmtNum(daily)} ₽/день — ${marketCtx.label.toLowerCase()}\n` +
      `(с налогами, отпуском и реальной загрузкой)\n\n` +
      `Сколько берёшь ты? → ${url}`;
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(tgUrl, "_blank", "noopener,noreferrer");
  }, [results, netMonthly, marketCtx]);

  const handleShareVK = useCallback(() => {
    ymGoal("share_vk_click");
    const url = getShareUrl();
    const hourly = Math.round(results.hourlyRate);
    const fmtNum = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
    const title = `${marketCtx.emoji} Моя ставка фрилансера: ${fmtNum(hourly)} ₽/час — ${marketCtx.label.toLowerCase()}`;
    const vkUrl = `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&noparse=true`;
    window.open(vkUrl, "_blank", "noopener,noreferrer");
  }, [results, marketCtx]);

  const handleShareWhatsApp = useCallback(() => {
    ymGoal("share_whatsapp_click");
    const url = getShareUrl();
    const hourly = Math.round(results.hourlyRate);
    const daily = Math.round(results.dailyRate);
    const fmtNum = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
    const isBelow = hourly < 1200;
    const hook = isBelow
      ? `Посчитал ставку — оказывается, занижаю цену. Вот мои реальные цифры с налогами и загрузкой:`
      : marketCtx.label === "Выше медианы" || marketCtx.label === "Топ рынка"
      ? `Посчитал ставку — я в топе рынка 🎉 Проверь свою, интересно сравнить:`
      : `Посчитал свою ставку фрилансера. В чатах никто не называет реальные цифры — вот мои:`;
    const text =
      `${hook}\n\n` +
      `${marketCtx.emoji} ${fmtNum(hourly)} ₽/час · ${fmtNum(daily)} ₽/день — ${marketCtx.label.toLowerCase()}\n` +
      `(учёт налогов, отпуска и загрузки)\n\n` +
      `Рассчитай свою → ${url}`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }, [results, marketCtx]);

  const handleOpenUpsell = useCallback(() => {
    setShowUpsellModal(true);
    ymGoal("upsell_click");
  }, []);

  const handleLeadSubmit = useCallback(async () => {
    if (!leadEmail.includes("@")) return;
    setLeadLoading(true);
    try {
      await fetch("/api/notify-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: leadEmail }),
      });
    } catch {
      // Optimistic: show success even on network error
    }
    setLeadSubmitted(true);
    setLeadLoading(false);
    ymGoal("lead_captured");
  }, [leadEmail]);

  const handlePromoSubmit = useCallback(async () => {
    if (!promoEmail.includes("@")) return;
    setPromoLoading(true);
    ymGoal("promo_lead_captured");
    // Save to localStorage so we remember even if the API call fails
    try { localStorage.setItem("fc_lead_email", promoEmail); } catch { /* ignore */ }
    try {
      await fetch("/api/notify-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: promoEmail, source: "promo_widget" }),
      });
    } catch {
      // Optimistic: show success even on network error
    }
    setPromoSubmitted(true);
    setPromoLoading(false);
  }, [promoEmail]);

  const handleCopyScript = useCallback(async (text: string, key: string) => {
    ymGoal("negotiation_script_copy", { variant: key });
    try {
      await navigator.clipboard.writeText(text);
      setScriptCopied(key);
      setTimeout(() => setScriptCopied(null), 2500);
    } catch {
      window.prompt("Скопируйте скрипт:", text);
    }
  }, []);

  /** Generate a professional rate explanation for sending to clients */
  const getClientExplainerText = useCallback(() => {
    const hourly = Math.round(results.hourlyRate);
    const daily = Math.round(results.dailyRate);
    const fmtN = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
    const taxLabel =
      taxRegime === "self_employed_fl" ? "Самозанятый, клиенты — физлица (НПД 4%)"
      : taxRegime === "self_employed_ul" ? "Самозанятый, клиенты — юрлица (НПД 6%)"
      : taxRegime === "ip_usn6" ? "ИП на УСН «Доходы» (6%)"
      : taxRegime === "ip_usn15" ? "ИП на УСН «Доходы минус расходы» (15%)"
      : "Без налогового режима";
    const shareUrl = typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}${window.location.search}`
      : "https://freelancecalc.ru";

    return `Моя ставка — ${fmtN(hourly)} ₽/час (${fmtN(daily)} ₽/день).

Расчёт прозрачный:
• Нужный доход на руки: ${fmtN(netMonthly)} ₽/мес
• Налоговый режим: ${taxLabel}
• Рабочих часов в день: ${hoursPerDay}, дней в неделю: ${daysPerWeek}
• Отпуск: ${vacationDays} дней/год
• Оплачиваемая загрузка: ${billableRatio}% (остальное — поиск клиентов, брифы, переговоры)

Итого оплачиваемых дней в год: ~${Math.round(results.billableDays)}.
Ставка для выхода на нужный доход: ${fmtN(hourly)} ₽/час.

Расчёт можно проверить самостоятельно: ${shareUrl}`;
  }, [results, netMonthly, taxRegime, hoursPerDay, daysPerWeek, vacationDays, billableRatio]);

  const handleCopyClientExplainer = useCallback(async () => {
    ymGoal("client_explainer_copy");
    const text = getClientExplainerText();
    try {
      await navigator.clipboard.writeText(text);
      setClientExplainerCopied(true);
      setTimeout(() => setClientExplainerCopied(false), 2500);
    } catch {
      window.prompt("Скопируйте объяснение:", text);
    }
  }, [getClientExplainerText]);

  const handlePayment = useCallback(async () => {
    setPaymentLoading(true);
    setPaymentUnavailable(false);
    ymGoal("payment_started");
    try {
      const res = await fetch("/api/payment", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setPaymentUnavailable(true);
        setPaymentLoading(false);
      }
    } catch {
      setPaymentUnavailable(true);
      setPaymentLoading(false);
    }
  }, []);

  const topAdBlockId = process.env.NEXT_PUBLIC_AD_BLOCK_ID_TOP || "R-A-XXXXXX-1";
  const bottomAdBlockId = process.env.NEXT_PUBLIC_AD_BLOCK_ID_BOTTOM || "R-A-XXXXXX-2";
  const adsEnabled = process.env.NEXT_PUBLIC_YANDEX_AD_ENABLED === "true";

  return (
    <>
      {/* Sticky rate bar — appears when user scrolls past results; Kahneman: rate always visible = loss always felt */}
      {showStickyBar && results.hourlyRate > 0 && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-indigo-700 text-white shadow-lg border-b border-indigo-800 animate-in slide-in-from-top duration-200">
          <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-base leading-none">{marketCtx.emoji}</span>
              <span className="font-bold text-sm whitespace-nowrap">
                {fmt(Math.round(results.hourlyRate))}/час
              </span>
              <span className="text-indigo-300 text-xs truncate hidden sm:inline">
                · {marketCtx.label}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => { handleShareTelegram(); ymGoal("sticky_bar_share_click"); }}
                className="text-xs bg-white/20 hover:bg-white/30 text-white px-2.5 py-1.5 rounded-lg transition-colors font-medium"
              >
                ✈️ Поделиться
              </button>
              <button
                onClick={() => { handleOpenUpsell(); ymGoal("sticky_bar_upsell_click"); }}
                className="text-xs bg-amber-400 hover:bg-amber-300 text-amber-900 px-2.5 py-1.5 rounded-lg transition-colors font-semibold hidden sm:block"
              >
                Сравнить с рынком →
              </button>
            </div>
          </div>
        </div>
      )}

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
            Большинство фрилансеров называют цену «на глаз» — и теряют 20–40% дохода. Посчитайте точно: с налогами, отпуском и реальной загрузкой. 30 секунд.
          </p>
          {/* Social proof counter — increases trust for cold SEO traffic */}
          <p className="mt-3 text-sm font-medium text-slate-600">
            Уже{" "}
            <span className="font-bold text-indigo-600">
              {userCount != null
                ? userCount.toLocaleString("ru-RU")
                : "14\u00a0832"}
            </span>{" "}
            фрилансера рассчитали свою ставку
          </p>
          {/* Trust strip — truthful stats that build credibility before user touches the calculator */}
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
            {[
              { icon: "🎯", text: "26 специальностей" },
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

        {/* Colleague comparison banner — shown when page opened via a shared link */}
        {sharedColleagueRate && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-5 py-4 flex items-start gap-3">
            <span className="text-2xl leading-none mt-0.5">👤</span>
            <div>
              <p className="text-sm font-semibold text-indigo-900">
                Коллега поделился своей ставкой:{" "}
                <span className="text-indigo-600">
                  {new Intl.NumberFormat("ru-RU").format(sharedColleagueRate)} ₽/час
                </span>
              </p>
              <p className="text-xs text-indigo-700 mt-0.5">
                Введите свои данные ниже — и сразу увидите, у кого ставка выше.
              </p>
            </div>
          </div>
        )}

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
        <section ref={resultsRef} className="mt-6 bg-indigo-600 text-white rounded-2xl shadow-md p-6">
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
              <button
                onClick={handleShareWhatsApp}
                className="flex items-center gap-1.5 text-xs bg-[#25D366]/80 hover:bg-[#25D366] active:bg-[#1da851] text-white px-3 py-1.5 rounded-lg transition-colors"
                title="Поделиться в WhatsApp"
              >
                WA
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

          {/* Comparison widget — shown when link was shared by a colleague */}
          {sharedColleagueRate && (() => {
            const myRate = Math.round(results.hourlyRate);
            const diff = myRate - sharedColleagueRate;
            const fmtR = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
            const isAhead = diff > 0;
            const isTied = diff === 0;
            return (
              <div className="mt-4 bg-white/10 border border-white/20 rounded-xl p-4">
                <p className="text-xs font-semibold text-indigo-200 uppercase tracking-wide mb-3">
                  🆚 Сравнение со ставкой коллеги
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center bg-white/10 rounded-lg py-2 px-3">
                    <p className="text-xs text-indigo-300 mb-0.5">Коллега</p>
                    <p className="text-lg font-bold text-white">{fmtR(sharedColleagueRate)} ₽/ч</p>
                  </div>
                  <div className="text-center bg-white/20 rounded-lg py-2 px-3">
                    <p className="text-xs text-indigo-200 mb-0.5">Вы</p>
                    <p className={`text-lg font-bold ${isAhead ? "text-emerald-300" : isTied ? "text-white" : "text-red-300"}`}>
                      {fmtR(myRate)} ₽/ч
                    </p>
                  </div>
                </div>
                <p className="text-xs mt-3 text-center text-indigo-200">
                  {isTied
                    ? "Одинаковые ставки — редкое совпадение!"
                    : isAhead
                    ? `Вы зарабатываете на ${fmtR(diff)} ₽/час больше коллеги 🎉`
                    : `Вы зарабатываете на ${fmtR(Math.abs(diff))} ₽/час меньше коллеги — `}
                  {!isAhead && !isTied && (
                    <button
                      onClick={handleOpenUpsell}
                      className="underline font-semibold text-white hover:text-indigo-200"
                    >
                      узнайте, как поднять ставку
                    </button>
                  )}
                </p>
              </div>
            );
          })()}
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
            {(showAllSpecialties ? QUICK_SPECIALTIES : QUICK_SPECIALTIES.slice(0, QUICK_SPECIALTIES_VISIBLE_DEFAULT)).map((s) => (
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
            <button
              type="button"
              onClick={() => {
                setShowAllSpecialties((v) => !v);
                ymGoal("specialty_show_all_toggle", { expanded: !showAllSpecialties });
              }}
              className="text-xs px-2.5 py-1 rounded-full border border-dashed border-slate-300 text-slate-400 hover:border-indigo-400 hover:text-indigo-500 transition-colors"
            >
              {showAllSpecialties ? "Свернуть ↑" : `Ещё ${QUICK_SPECIALTIES.length - QUICK_SPECIALTIES_VISIBLE_DEFAULT} →`}
            </button>
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
                <>
                  {/* Cumulative loss slider — Kahneman: multi-year total is far more emotional than annual */}
                  <div className="mt-3 bg-red-100/60 rounded-lg px-3 py-2.5">
                    <label className="text-xs text-red-800 font-medium">
                      Сколько лет вы работаете по этой ставке?{" "}
                      <strong>{yearsFreelancing} {yearsFreelancing === 1 ? "год" : yearsFreelancing < 5 ? "года" : "лет"}</strong>
                    </label>
                    <input
                      type="range" min={1} max={10} step={1}
                      value={yearsFreelancing}
                      onChange={(e) => setYearsFreelancing(+e.target.value)}
                      className="w-full mt-1.5 accent-red-600"
                    />
                    <p className="text-base font-bold text-red-700 mt-1.5">
                      За {yearsFreelancing} {yearsFreelancing === 1 ? "год" : yearsFreelancing < 5 ? "года" : "лет"} потерянный доход:{" "}
                      <span className="text-lg">{fmt(annualGap * yearsFreelancing)}</span>
                    </p>
                    <p className="text-xs text-red-600 mt-0.5 opacity-80">
                      Это деньги, которые вы не получили из-за ставки ниже рынка
                    </p>
                  </div>
                  {/* Negotiation Script Generator — персонализированный скрипт для переговоров */}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowNegotiationScript((v) => !v);
                        ymGoal("negotiation_script_open", { slug: selectedSpecialty ?? "" });
                      }}
                      className="text-xs font-semibold text-red-800 bg-red-200/60 hover:bg-red-200 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {showNegotiationScript ? "▲ Скрыть скрипт" : "💬 Получить скрипт переговоров о повышении ставки →"}
                    </button>
                    {showNegotiationScript && (() => {
                      const myRound = Math.round(results.hourlyRate / 50) * 50;
                      const targetRound = Math.round(spec.mid / 50) * 50;
                      const fmtN = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
                      const scripts = [
                        {
                          key: "chat",
                          label: "В переписке (Telegram / почта)",
                          icon: "💬",
                          text:
                            `Привет! Хочу обсудить ставку по следующему проекту.\n\n` +
                            `Я проанализировал рынок по специальности «${spec.title}» — медиана сейчас ${spec.median} ₽/час. Мои текущие ${fmtN(myRound)} ₽/час были актуальны, но уже не отражают мой опыт и рыночную реальность.\n\n` +
                            `Предлагаю перейти на ${fmtN(targetRound)} ₽/час со следующего проекта. Это медиана по рынку — не топ, просто рынок.\n\n` +
                            `Как смотришь?`,
                        },
                        {
                          key: "formal",
                          label: "Формально (для новых клиентов)",
                          icon: "📧",
                          text:
                            `Добрый день!\n\n` +
                            `Мои услуги в области «${spec.title}»: ${fmtN(targetRound)} ₽/час.\n\n` +
                            `Это медианная ставка по рынку на Q1 2026 — соответствует специалистам с опытом от 3 лет. Включает: разработку, коммуникацию, итерации по ТЗ.\n\n` +
                            `Для оценки проекта пришлите описание задачи — отвечу в течение дня.`,
                        },
                        {
                          key: "bump",
                          label: "Для постоянных клиентов (повышение)",
                          icon: "📈",
                          text:
                            `Привет! Хочу предупредить заранее.\n\n` +
                            `С [дата через 30 дней] моя ставка меняется: ${fmtN(myRound)} → ${fmtN(targetRound)} ₽/час.\n\n` +
                            `Причина: я отслеживаю рынок по «${spec.title}» — медиана сейчас ${spec.median} ₽/час, и мои текущие ${fmtN(myRound)} уже ниже рынка на ${Math.round(((spec.mid - results.hourlyRate) / spec.mid) * 100)}%.\n\n` +
                            `Текущие проекты завершим по старой ставке. Новые задачи — по ${fmtN(targetRound)} ₽/час.\n\n` +
                            `Если хочешь зафиксировать объём работ по старой ставке — давай обсудим до [дата].`,
                        },
                      ];
                      return (
                        <div className="mt-3 bg-white border border-red-200 rounded-xl p-4 space-y-3">
                          <p className="text-xs font-semibold text-slate-700">
                            ✍️ Готовые скрипты для вашей ситуации — скопируйте и отредактируйте под себя:
                          </p>
                          {scripts.map((s) => (
                            <div key={s.key} className="bg-slate-50 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-xs font-semibold text-slate-600">
                                  {s.icon} {s.label}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleCopyScript(s.text, s.key)}
                                  className="text-xs bg-slate-200 hover:bg-indigo-100 hover:text-indigo-700 text-slate-600 px-2.5 py-1 rounded transition-colors"
                                >
                                  {scriptCopied === s.key ? "✅ Скопировано!" : "Копировать"}
                                </button>
                              </div>
                              <pre className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed font-sans">
                                {s.text}
                              </pre>
                            </div>
                          ))}
                          <p className="text-xs text-slate-400">
                            💡 Замените [дата] на конкретную дату. Скрипты основаны на ваших реальных числах.
                          </p>
                        </div>
                      );
                    })()}
                  </div>

                  <button
                    onClick={() => { handleOpenUpsell(); ymGoal("upsell_gap_click", { slug: selectedSpecialty }); }}
                    className="mt-2 text-xs font-semibold text-red-700 underline hover:text-red-900"
                  >
                    Посмотреть точные данные по {spec.title} по городам → Бенчмарк PDF {currentPrice} ₽
                  </button>
                </>
                )}
              </div>
            );
          })()}
        </div>

        {/* Viral share nudge — appears after user sees their rate; drives sharing via Telegram & WhatsApp */}
        <div className="mt-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
          <p className="text-xs text-slate-500 mb-2">
            💬 В большинстве фриланс-чатов никто не называет реальные ставки. Нарушьте традицию — поделитесь своей.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleShareTelegram}
              className="flex items-center gap-1.5 text-xs bg-[#2AABEE] hover:bg-[#229ED9] text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              ✈️ Telegram
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="flex items-center gap-1.5 text-xs bg-[#25D366] hover:bg-[#1da851] text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              📱 WhatsApp
            </button>
            <button
              onClick={() => { handleShareVK(); ymGoal("viral_nudge_vk_click"); }}
              className="flex items-center gap-1.5 text-xs bg-[#2787F5] hover:bg-[#1d6ed4] text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              ВКонтакте
            </button>
            <button
              onClick={() => {
                setShowClientExplainer((v) => !v);
                ymGoal("client_explainer_open");
              }}
              className="flex items-center gap-1.5 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              📄 Объяснить клиенту
            </button>
          </div>
          {/* Client rate explainer — professional breakdown for sending to clients who question your rate */}
          {showClientExplainer && (
            <div className="mt-3 bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-slate-700">
                  Готовое объяснение для клиента — скопируйте и отправьте:
                </p>
                <button
                  onClick={handleCopyClientExplainer}
                  className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg transition-colors font-medium whitespace-nowrap ml-2"
                >
                  {clientExplainerCopied ? "✅ Скопировано!" : "Скопировать"}
                </button>
              </div>
              <pre className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed font-sans bg-slate-50 rounded-lg p-3">
                {getClientExplainerText()}
              </pre>
              <p className="text-xs text-slate-400 mt-2">
                💡 Клиент сможет самостоятельно проверить расчёт по ссылке внутри письма.
              </p>
            </div>
          )}
        </div>

        {/* Lead magnet — captures email BEFORE the paywall; works even when ЮKassa is broken */}
        <section className="mt-4 bg-indigo-50 border border-indigo-200 rounded-2xl px-5 py-4">
          {promoSubmitted ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-1">
              <p className="text-sm font-semibold text-indigo-700">
                ✅ Готово! Гид уже доступен:
              </p>
              <a
                href="/guide"
                className="shrink-0 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Читать гид сейчас →
              </a>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex-1">
                {/* Kahneman loss-framing: personalized by market position.
                    @dindex: "Цена вырастет на 30%" → +18% vs "скидка 30%".
                    Loss > Gain. Same information, different frame. */}
                <p className="text-sm font-bold text-indigo-800">
                  {(() => {
                    const monthlyHours = Math.round((results.billableDays / 12) * hoursPerDay);
                    if (marketCtx.label === "Ниже рынка") {
                      const lossPerMonth = fmt(Math.round((1200 - results.hourlyRate) * monthlyHours));
                      return `Вы теряете ~${lossPerMonth} ₽/мес из-за заниженной ставки — 7 шагов, чтобы остановить`;
                    }
                    if (marketCtx.label === "Нижний квартиль рынка") {
                      const lossPerMonth = fmt(Math.round((2000 - results.hourlyRate) * monthlyHours));
                      return `75% коллег зарабатывают больше — вы упускаете ~${lossPerMonth} ₽/мес`;
                    }
                    if (marketCtx.label === "Рыночный уровень") {
                      return "Без роста ставки инфляция 12%/год незаметно «съедает» доход";
                    }
                    return "Как удержать топ-позицию и расти без потери клиентов";
                  })()}
                </p>
                <p className="text-xs text-indigo-600 mt-0.5">
                  {(marketCtx.label === "Ниже рынка" || marketCtx.label === "Нижний квартиль рынка")
                    ? "Бесплатно: 7 конкретных шагов с примерами — доступ сразу после ввода email"
                    : "Бесплатно: 7 шагов с примерами — доступ сразу после ввода email"}
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  value={promoEmail}
                  onChange={(e) => setPromoEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handlePromoSubmit()}
                  placeholder="ваш@email.ru"
                  className="flex-1 sm:w-44 text-sm border border-indigo-300 rounded-lg px-3 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-0"
                />
                <button
                  onClick={handlePromoSubmit}
                  disabled={promoLoading || !promoEmail.includes("@")}
                  className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  {promoLoading ? "…" : "Получить →"}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Upsell CTA — personalized by market position to maximise curiosity */}
        <section className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
                Ваша ставка: {fmt(Math.round(results.hourlyRate))} / час · {marketCtx.label}
              </p>
              <h3 className="font-bold text-slate-800 text-base">
                {marketCtx.label === "Ниже рынка"
                  ? "Вы зарабатываете ниже рынка. Каждый месяц теряете деньги — насколько велик разрыв?"
                  : marketCtx.label === "Нижний квартиль рынка"
                  ? "Вы в нижней четверти рынка — 75% коллег берут больше. Сколько теряете ежемесячно?"
                  : marketCtx.label === "Рыночный уровень"
                  ? "Вы на уровне рынка. Senior берут вдвое больше — и каждый год без роста стоит вам сотни тысяч."
                  : marketCtx.label === "Выше медианы"
                  ? "Вы выше медианы. Убедитесь, что не оставляете деньги на столе."
                  : "Вы в топ-10% рынка. Посмотрите, с кем конкурируете по цене."}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Медианные ставки по 26 специальностям × 26 городам. Каждый день без этих данных — потенциально потерянные деньги.
              </p>
            </div>
            <button
              onClick={handleOpenUpsell}
              className="shrink-0 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              {marketCtx.label === "Ниже рынка" || marketCtx.label === "Нижний квартиль рынка"
                ? `Узнать, сколько теряю — ${currentPrice} ₽`
                : marketCtx.label === "Рыночный уровень"
                ? `Найти свой потолок — ${currentPrice} ₽`
                : `Убедиться, что не теряю — ${currentPrice} ₽`}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            {countdown ? (
              <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                ⏳ Цена вырастет на 40% через {countdown.days}д {countdown.hours}ч {countdown.mins}мин
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                ⚡ Цена — 349 ₽
              </span>
            )}
            <span className="text-xs text-amber-700/70">26 специальностей · 26 городов · Junior / Mid / Senior</span>
          </div>
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
            <li>
              <Link
                href="/instrumenty/kalkulator-pensii-samozanyatogo"
                className="text-indigo-600 hover:underline"
                onClick={() => ymGoal("pension_calc_click")}
              >
                Калькулятор пенсии самозанятого
              </Link>{" "}
              — узнайте, сколько теряете без добровольных взносов в СФР
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

        {/* Contextual tool recommendations — based on tax regime, drives traffic to calculators */}
        {(() => {
          type ToolCard = { href: string; icon: string; title: string; desc: string; goal: string };
          const toolMap: Record<TaxRegime, ToolCard[]> = {
            self_employed_fl: [
              { href: "/nalog/sfr", icon: "🏥", title: "Стоит ли платить в СФР?", desc: "Рассчитайте, окупится ли добровольное страхование — больничный до 1 667 ₽/день.", goal: "tool_sfr_click" },
              { href: "/instrumenty/kalkulator-pensii-samozanyatogo", icon: "👴", title: "Пенсия самозанятого", desc: "Сколько вы накопите без ПФР-взносов — и что с этим делать.", goal: "tool_pension_click" },
              { href: "/instrumenty/kalkulator-naloga-samozanyatogo", icon: "🧾", title: "Калькулятор налога НПД", desc: "Точный расчёт НПД с учётом налогового вычета 10 000 ₽.", goal: "tool_npd_click" },
            ],
            self_employed_ul: [
              { href: "/nalog/sfr", icon: "🏥", title: "Стоит ли платить в СФР?", desc: "Рассчитайте, окупится ли добровольное страхование — больничный до 1 667 ₽/день.", goal: "tool_sfr_click" },
              { href: "/instrumenty/kalkulator-naloga-samozanyatogo", icon: "🧾", title: "Калькулятор налога НПД", desc: "Точный расчёт НПД 6% с учётом налогового вычета 10 000 ₽.", goal: "tool_npd_click" },
              { href: "/nalog/sravnenie", icon: "⚖️", title: "Самозанятый vs ИП", desc: "Когда стоит переходить на ИП: сравнение налогов и ограничений.", goal: "tool_compare_click" },
            ],
            ip_usn6: [
              { href: "/nalog/ip-usn", icon: "📊", title: "ИП на УСН: полный расчёт", desc: "Налог 6% + взносы в СФР — считайте реальную нагрузку.", goal: "tool_ip_usn_click" },
              { href: "/nalog/sravnenie", icon: "⚖️", title: "УСН 6% vs УСН 15%", desc: "Сравните режимы с учётом ваших расходов — кому выгоднее.", goal: "tool_compare_click" },
              { href: "/instrumenty/kalkulator-stoimosti-sotrudnika", icon: "👷", title: "Стоимость сотрудника", desc: "Если нанимаете помощника — посчитайте реальные затраты.", goal: "tool_employee_click" },
            ],
            ip_usn15: [
              { href: "/nalog/ip-usn", icon: "📊", title: "ИП на УСН: полный расчёт", desc: "Налог 15% «Доходы минус расходы» — введите расходы и получите точную сумму.", goal: "tool_ip_usn_click" },
              { href: "/nalog/sravnenie", icon: "⚖️", title: "УСН 15% vs УСН 6%", desc: "Выгоден при расходах >60% дохода. Проверьте свой случай.", goal: "tool_compare_click" },
              { href: "/instrumenty/kalkulator-stoimosti-sotrudnika", icon: "👷", title: "Стоимость сотрудника", desc: "Если нанимаете помощников — считайте реальные затраты включая взносы.", goal: "tool_employee_click" },
            ],
            none: [
              { href: "/instrumenty/kalkulator-dogovora-gph", icon: "📋", title: "ГПХ vs Самозанятость", desc: "Работаете без статуса? Посчитайте, сколько теряете на НДФЛ 13% vs НПД 4–6%.", goal: "tool_gph_click" },
              { href: "/instrumenty/kalkulator-naloga-samozanyatogo", icon: "🧾", title: "Калькулятор налога НПД", desc: "Узнайте, сколько заплатите после регистрации самозанятым.", goal: "tool_npd_click" },
              { href: "/nalog/sravnenie", icon: "⚖️", title: "Самозанятый vs ИП", desc: "Какой статус выгоднее для вашего уровня дохода.", goal: "tool_compare_click" },
            ],
          };
          const tools = toolMap[taxRegime] ?? toolMap["self_employed_fl"];
          return (
            <section className="mt-6">
              <h3 className="text-sm font-bold text-slate-700 mb-3">🛠️ Полезные инструменты для вашего режима</h3>
              <div className="grid gap-2.5 sm:grid-cols-3">
                {tools.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="flex flex-col gap-1 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50/40 transition-colors group"
                    onClick={() => ymGoal(t.goal)}
                  >
                    <span className="text-lg leading-none">{t.icon}</span>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors leading-snug">{t.title}</span>
                    <span className="text-xs text-slate-500 leading-snug">{t.desc}</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        {/* Contextual article recommendations — internal SEO links + keeps user on site after calc */}
        <section className="mt-8">
          <h2 className="text-base font-bold text-slate-800 mb-3">📚 Читайте по теме</h2>
          <div className="grid gap-2.5">
            {contextualArticles.map((art) => (
              <Link
                key={art.slug}
                href={`/stati/${art.slug}`}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50/40 transition-colors group"
                onClick={() => ymGoal("contextual_article_click", { slug: art.slug })}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                      {art.tag}
                    </span>
                    <span className="text-xs text-slate-400">{art.readTime}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors leading-snug">
                    {art.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{art.snippet}</p>
                </div>
                <span className="text-slate-400 group-hover:text-indigo-500 text-sm shrink-0 mt-1">→</span>
              </Link>
            ))}
          </div>
          <Link
            href="/stati"
            className="mt-3 inline-block text-xs text-indigo-600 hover:underline"
            onClick={() => ymGoal("all_articles_click")}
          >
            Все 40 статей →
          </Link>
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
            {specGapData ? (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
                <p className="text-xs text-red-700 font-medium mb-0.5">
                  Вы теряете по специальности «{specGapData.spec.title}»
                </p>
                <p className="text-2xl font-bold text-red-700">~{fmt(Math.round(specGapData.annualGap))} ₽/год</p>
                <p className="text-xs text-red-600 mt-0.5">
                  Ваша ставка ниже медианы на {specGapData.diffPct}% — PDF покажет как исправить
                </p>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4">
                <p className="text-xs text-amber-700 font-medium mb-0.5">Ваша рассчитанная ставка</p>
                <p className="text-2xl font-bold text-amber-800">{fmt(Math.round(results.hourlyRate))} / час</p>
              </div>
            )}
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              {specGapData
                ? `Сколько платят ${specGapData.spec.title.toLowerCase()}ам в реальности`
                : "Ваша ставка vs рынок Q1 2026"}
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              {specGapData
                ? `Медианные ставки по вашей специальности по городам и уровню опыта — и конкретные шаги чтобы поднять свою. 26 специальностей × 26 городов × 3 уровня.`
                : "Точные медианные ставки по 26 специальностям × 26 городам × 3 уровня опыта. Узнайте, занижаете ли вы цену — и на сколько."}
            </p>
            <ul className="text-sm text-slate-700 space-y-1 mb-4">
              <li>✅ Frontend-разработчик в Москве: <strong>1 700–3 200 ₽/час</strong></li>
              <li>✅ UI/UX дизайнер: <strong>1 300–2 800 ₽/час</strong></li>
              <li>✅ Копирайтер: <strong>700–1 700 ₽/час</strong></li>
              <li>✅ SEO-специалист: <strong>1 100–2 200 ₽/час</strong></li>
              <li className="text-slate-400 text-xs pt-1">+ 22 других специальности и разбивка по 26 городам</li>
            </ul>

            {/* Info block */}
            <div className="bg-slate-50 rounded-lg px-3 py-2 mb-4 text-xs text-slate-500">
              🔄 Q1 2026 · Данные с FL.ru, Хабр Карьера, Kwork · Разбивка Junior / Mid / Senior
            </div>

            <div className="flex items-baseline gap-3 mb-1">
              <p className="text-2xl font-bold text-indigo-700">{currentPrice} ₽</p>
              {countdown ? (
                <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  ⏳ Цена вырастет на 40% через {countdown.days}д {countdown.hours}ч {countdown.mins}мин
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  ⚡ Цена — 349 ₽
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mb-5">
              {countdown
                ? "Единоразово · Без подписки · PDF сразу после оплаты · Цена 249 ₽ до 7 апреля"
                : "Единоразово · Без подписки · PDF сразу после оплаты · Q1 2026, актуально"}
            </p>
            {paymentUnavailable ? (
              <div className="mb-3">
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-2">
                  <p className="text-sm font-medium text-amber-800 mb-1">
                    {countdown ? "⚡ Зафиксируй цену до повышения" : "📬 Получи PDF первым"}
                  </p>
                  <p className="text-xs text-amber-700 leading-relaxed mb-3">
                    {countdown
                      ? <>Оплата открывается скоро. Оставь email — забронируем цену 249 ₽. <strong>С 7 апреля будет 349 ₽</strong> — потеряешь 100 ₽.</>
                      : "Оплата открывается скоро. Оставь email — пришлём PDF как только будет готово."}
                  </p>
                  {leadSubmitted ? (
                    <p className="text-sm font-semibold text-emerald-700">
                      {countdown ? "✅ Зафиксировано! Пришлём за 249 ₽, не переплатишь." : "✅ Отлично! Напишем, как только оплата заработает."}
                    </p>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="ваш@email.ru"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleLeadSubmit()}
                        className="flex-1 border border-amber-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                      />
                      <button
                        onClick={handleLeadSubmit}
                        disabled={!leadEmail.includes("@") || leadLoading}
                        className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                      >
                        {leadLoading ? "…" : "Зафиксировать →"}
                      </button>
                    </div>
                  )}
                </div>
                <button
                  className="text-xs text-indigo-600 hover:underline"
                  onClick={() => setPaymentUnavailable(false)}
                >
                  Попробовать ещё раз
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                  onClick={handlePayment}
                  disabled={paymentLoading}
                >
                  {paymentLoading ? "Переход к оплате…" : `Скачать PDF — ${currentPrice} ₽`}
                </button>
                <button
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-500 hover:bg-slate-50 transition-colors"
                  onClick={() => setShowUpsellModal(false)}
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function EmbedCode() {
  const [copied, setCopied] = useState(false);
  const code = `<iframe\n  src="https://freelancecalc.ru/widget"\n  width="100%"\n  height="420"\n  frameborder="0"\n  style="border-radius:12px;border:1px solid #e2e8f0"\n  title="Калькулятор ставки фрилансера"\n></iframe>`;

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
  // Top 12 — shown by default
  { slug: "frontend-razrabotchik",  title: "Frontend",      median: "1 500–3 000", mid: 2250 },
  { slug: "backend-razrabotchik",   title: "Backend",       median: "2 000–4 000", mid: 3000 },
  { slug: "fullstack-razrabotchik", title: "Fullstack",     median: "2 000–4 500", mid: 3250 },
  { slug: "python-razrabotchik",    title: "Python",        median: "2 000–4 500", mid: 3250 },
  { slug: "ml-inzhener",            title: "ML/AI",         median: "3 000–7 000", mid: 5000 },
  { slug: "devops-inzhener",        title: "DevOps",        median: "2 500–6 000", mid: 4250 },
  { slug: "mobilnyj-razrabotchik",  title: "Мобильный",     median: "2 500–5 000", mid: 3750 },
  { slug: "dizajner-ui-ux",         title: "UI/UX",         median: "1 000–2 500", mid: 1750 },
  { slug: "graficheskij-dizajner",  title: "Дизайн",        median: "800–1 800",   mid: 1300 },
  { slug: "kopirayter",             title: "Копирайтинг",   median: "500–1 500",   mid: 1000 },
  { slug: "seo-specialist",         title: "SEO",           median: "900–2 000",   mid: 1450 },
  { slug: "targetolog",             title: "Таргет",        median: "800–2 000",   mid: 1400 },
  // Extended — shown when "show all" is toggled
  { slug: "smm-specialist",         title: "SMM",           median: "700–1 500",   mid: 1100 },
  { slug: "testirovshchik-qa",      title: "QA",            median: "900–2 000",   mid: 1450 },
  { slug: "php-razrabotchik",       title: "PHP",           median: "1 200–2 800", mid: 2000 },
  { slug: "1c-razrabotchik",        title: "1С",            median: "1 200–2 800", mid: 2000 },
  { slug: "data-analyst",           title: "Data Analyst",  median: "1 500–3 500", mid: 2500 },
  { slug: "biznes-analitik",        title: "Бизнес-аналит", median: "1 500–3 500", mid: 2500 },
  { slug: "menedzher-proektov",     title: "PM",            median: "1 000–2 500", mid: 1750 },
  { slug: "yurist-frilanser",       title: "Юрист",         median: "1 200–3 500", mid: 2350 },
  { slug: "buhgalter-frilanser",    title: "Бухгалтер",     median: "800–2 500",   mid: 1650 },
  { slug: "illustrator-frilanser",  title: "Иллюстратор",   median: "700–2 500",   mid: 1600 },
  { slug: "videomontazhyor",        title: "Видеомонтаж",   median: "700–2 000",   mid: 1350 },
  { slug: "fotograf-frilanser",     title: "Фотограф",      median: "1 500–5 000", mid: 3250 },
  { slug: "perevodchik",            title: "Переводчик",    median: "400–1 200",   mid: 800  },
  { slug: "kontent-menedzher",      title: "Контент",       median: "500–1 200",   mid: 850  },
];

const QUICK_SPECIALTIES_VISIBLE_DEFAULT = 12;

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

/** Contextual article recommendations — shown after calculation, personalised by market position + tax regime */
const CONTEXTUAL_ARTICLES: Array<{
  slug: string;
  title: string;
  snippet: string;
  tag: string;
  readTime: string;
  contexts: Array<"below_market" | "self_employed" | "ip" | "default">;
}> = [
  {
    slug: "kak-povysit-stavku-frilansera",
    title: "Как повысить ставку фрилансера: 7 конкретных шагов",
    snippet: "Когда поднимать, как сообщить клиентам и не потерять заказы. Пошаговый план с примерами.",
    tag: "Ставка",
    readTime: "8 мин",
    contexts: ["below_market"],
  },
  {
    slug: "peregovory-o-stavke-s-zakazchikom",
    title: "Переговоры о ставке: как отвечать на «дорого»",
    snippet: "Скрипты и стратегии переговоров, которые работают с русскоязычными заказчиками.",
    tag: "Переговоры",
    readTime: "6 мин",
    contexts: ["below_market"],
  },
  {
    slug: "kak-oformit-samozanyatost-2026",
    title: "Как оформить самозанятость в 2026: пошаговая инструкция",
    snippet: "Регистрация за 10 минут, налоговый бонус 10 000 ₽ от ФНС и частые ошибки новичков.",
    tag: "Самозанятость",
    readTime: "7 мин",
    contexts: ["self_employed"],
  },
  {
    slug: "samozanyatyj-vs-ip-frilancer",
    title: "Самозанятый vs ИП: что выгоднее для фрилансера в 2026",
    snippet: "Налоги, лимиты, взносы — конкретные расчёты для разных уровней дохода.",
    tag: "Налоги",
    readTime: "7 мин",
    contexts: ["self_employed", "ip"],
  },
  {
    slug: "kak-raschitat-stavku-frilansera",
    title: "Как рассчитать ставку фрилансера: формула и примеры",
    snippet: "Разбираем формулу с налогами, отпуском и реальной загрузкой. Примеры для 5 специальностей.",
    tag: "Ставка",
    readTime: "6 мин",
    contexts: ["default"],
  },
  {
    slug: "pochemu-frilansery-zanizhayt-stavki",
    title: "Почему фрилансеры занижают ставки — и как остановиться",
    snippet: "3 психологические причины + конкретные шаги, чтобы перестать работать ниже рынка.",
    tag: "Психология",
    readTime: "5 мин",
    contexts: ["default"],
  },
  {
    slug: "frilanser-inostrannyj-zakazchik-2026",
    title: "Фриланс с иностранными заказчиками 2026: как получать оплату",
    snippet: "Актуальные способы получения оплаты из-за рубежа, легализация доходов и налоги.",
    tag: "Международный",
    readTime: "10 мин",
    contexts: ["default"],
  },
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
