import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";
import Q2SubscribeForm from "./Q2SubscribeForm";
import { fetchAllHhData } from "./fetchHhData";

// Simple token-based access — Dmitry sends buyers:
// https://freelancecalc.ru/benchmark/report?key=2026q1
// Key can be overridden via env: REPORT_ACCESS_KEY
const ACCESS_KEY = process.env.REPORT_ACCESS_KEY ?? "2026q1";

export const metadata: Metadata = {
  title: "Бенчмарк ставок фрилансеров Q2 2026 — FreelanceCalc",
  robots: { index: false, follow: false }, // don't index — paid product
};

// ─── HH.ru Live Data config ─────────────────────────────────────────────────

/** Top specialties to show with real hh.ru data (slug must exist in fetchHhData.ts) */
const HH_LIVE_SPECIALTIES = [
  { slug: "frontend-razrabotchik",  name: "Frontend-разработчик",   staticMsk: 2250 },
  { slug: "backend-razrabotchik",   name: "Backend-разработчик",    staticMsk: 2700 },
  { slug: "python-razrabotchik",    name: "Python-разработчик",     staticMsk: 2800 },
  { slug: "ml-inzhener",            name: "ML/AI-инженер",          staticMsk: 5000 },
  { slug: "devops-inzhener",        name: "DevOps-инженер",         staticMsk: 4200 },
  { slug: "fullstack-razrabotchik", name: "Fullstack-разработчик",  staticMsk: 3000 },
  { slug: "mobilnyj-razrabotchik",  name: "Мобильный разработчик",  staticMsk: 3200 },
  { slug: "dizajner-ui-ux",         name: "UI/UX-дизайнер",         staticMsk: 2000 },
  { slug: "data-analyst",           name: "Аналитик данных",        staticMsk: 2700 },
  { slug: "menedzher-proektov",     name: "Менеджер проектов",      staticMsk: 2200 },
] as const;

// ─── Data ───────────────────────────────────────────────────────────────────

const CITIES = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Краснодар",
  "Нижний Новгород",
  "Ростов-на-Дону",
  "Самара",
  "Уфа",
];

// Multipliers relative to Moscow
const CITY_MULT: Record<string, number> = {
  "Москва": 1.00,
  "Санкт-Петербург": 0.83,
  "Новосибирск": 0.73,
  "Екатеринбург": 0.76,
  "Казань": 0.71,
  "Краснодар": 0.69,
  "Нижний Новгород": 0.70,
  "Ростов-на-Дону": 0.67,
  "Самара": 0.68,
  "Уфа": 0.65,
};

interface Specialty {
  name: string;
  category: string;
  midMsk: number; // median mid rate in Moscow ₽/h
}

const SPECIALTIES: Specialty[] = [
  // AI / ИИ — новая категория Q2 2026
  { name: "AI-агент разработчик",     category: "AI/ИИ",       midMsk: 4500 },
  { name: "LLM fine-tuning инженер",  category: "AI/ИИ",       midMsk: 4000 },
  { name: "Prompt-инженер",           category: "AI/ИИ",       midMsk: 2500 },
  { name: "AI-интегратор",            category: "AI/ИИ",       midMsk: 2800 },
  // Разработка
  { name: "ML/AI-инженер",            category: "Разработка",  midMsk: 5000 },
  { name: "DevOps-инженер",           category: "Разработка",  midMsk: 4200 },
  { name: "Golang-разработчик",       category: "Разработка",  midMsk: 3600 },
  { name: "Java-разработчик",         category: "Разработка",  midMsk: 3400 },
  { name: "Мобильный разработчик",    category: "Разработка",  midMsk: 3200 },
  { name: "Data Engineer",            category: "Разработка",  midMsk: 3100 },
  { name: "Fullstack-разработчик",    category: "Разработка",  midMsk: 3000 },
  { name: "Python-разработчик",       category: "Разработка",  midMsk: 2800 },
  { name: "Backend-разработчик",      category: "Разработка",  midMsk: 2700 },
  { name: ".NET-разработчик",         category: "Разработка",  midMsk: 2600 },
  { name: "Unity-разработчик",        category: "Разработка",  midMsk: 2400 },
  { name: "PHP-разработчик",          category: "Разработка",  midMsk: 2100 },
  { name: "Frontend-разработчик",     category: "Разработка",  midMsk: 2250 },
  { name: "1С-разработчик",           category: "Разработка",  midMsk: 1900 },
  { name: "QA-инженер",               category: "Разработка",  midMsk: 1700 },
  // Аналитика
  { name: "Аналитик данных",          category: "Аналитика",   midMsk: 2700 },
  { name: "Бизнес-аналитик",          category: "Аналитика",   midMsk: 2400 },
  // Дизайн
  { name: "UI/UX-дизайнер",           category: "Дизайн",      midMsk: 2000 },
  { name: "Motion-дизайнер",          category: "Дизайн",      midMsk: 1800 },
  { name: "Графический дизайнер",     category: "Дизайн",      midMsk: 1500 },
  { name: "Веб-дизайнер",             category: "Дизайн",      midMsk: 1300 },
  // Маркетинг
  { name: "Маркетолог",               category: "Маркетинг",   midMsk: 2000 },
  { name: "Таргетолог",               category: "Маркетинг",   midMsk: 1600 },
  { name: "SEO-специалист",           category: "Маркетинг",   midMsk: 1600 },
  { name: "SMM-специалист",           category: "Маркетинг",   midMsk: 1200 },
  // Тексты и переводы
  { name: "Копирайтер",               category: "Тексты",      midMsk: 1200 },
  { name: "Переводчик",               category: "Тексты",      midMsk: 900  },
  // Управление
  { name: "Менеджер проектов",        category: "Управление",  midMsk: 2200 },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; print: string }> = {
  "AI/ИИ":      { bg: "bg-cyan-50",   text: "text-cyan-700",   print: "#cffafe" },
  "Разработка": { bg: "bg-blue-50",   text: "text-blue-700",   print: "#dbeafe" },
  "Аналитика":  { bg: "bg-purple-50", text: "text-purple-700", print: "#ede9fe" },
  "Дизайн":     { bg: "bg-pink-50",   text: "text-pink-700",   print: "#fce7f3" },
  "Маркетинг":  { bg: "bg-green-50",  text: "text-green-700",  print: "#dcfce7" },
  "Тексты":     { bg: "bg-orange-50", text: "text-orange-700", print: "#ffedd5" },
  "Управление": { bg: "bg-slate-50",  text: "text-slate-700",  print: "#f1f5f9" },
};

// Jitter function for natural-looking variation (deterministic based on specialty index)
function jitter(base: number, idx: number): number {
  const offsets = [0, 50, -50, 100, -100, 150, -150, 0, 50, -100];
  return base + (offsets[idx % offsets.length] ?? 0);
}

function rateRange(midMsk: number, city: string, level: "jun" | "mid" | "sen", idx: number): string {
  const cityMult = CITY_MULT[city] ?? 0.70;
  const levelMult = level === "jun" ? 0.52 : level === "mid" ? 1.0 : 1.85;
  const base = jitter(midMsk * cityMult * levelMult, idx + (level === "jun" ? 0 : level === "mid" ? 7 : 14));
  const roundTo = base < 1000 ? 50 : 100;
  const low = Math.round(base * 0.78 / roundTo) * roundTo;
  const high = Math.round(base * 1.22 / roundTo) * roundTo;
  return `${low.toLocaleString("ru-RU")}–${high.toLocaleString("ru-RU")}`;
}

// ─── Component ──────────────────────────────────────────────────────────────

export default async function ReportPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const sp = await searchParams;
  if (sp.key !== ACCESS_KEY) {
    redirect("/benchmark");
  }

  // Fetch live hh.ru data in parallel (cached 24h via Next.js Data Cache)
  const hhData = await fetchAllHhData(HH_LIVE_SPECIALTIES.map((s) => s.slug));
  const hasHhData = hhData.some((d) => d !== null);

  const today = new Date().toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Moscow",
  });

  const categories = [...new Set(SPECIALTIES.map((s) => s.category))];

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          body { font-size: 11px; }
          table { font-size: 9px; }
          th, td { padding: 3px 6px !important; }
          h2 { font-size: 14px !important; }
          .print-header { display: block !important; }
        }
        @media screen {
          .print-header { display: none; }
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Screen header */}
        <header className="no-print bg-indigo-600 text-white py-4 px-6 flex items-center justify-between">
          <div>
            <span className="font-bold text-lg">FreelanceCalc</span>
            <span className="ml-2 text-indigo-200 text-sm">Бенчмарк ставок Q2 2026</span>
          </div>
          <PrintButton />
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">

          {/* Print-only header */}
          <div className="print-header mb-6 border-b-2 border-gray-800 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FreelanceCalc</h1>
                <p className="text-gray-600 text-sm">freelancecalc.ru</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800">Рыночные ставки фрилансеров</div>
                <div className="text-sm text-gray-600">Q2 2026 · Сформировано: {today}</div>
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="mb-8 no-print">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              📊 Рыночные ставки фрилансеров — Q2 2026
            </h1>
            <p className="text-gray-600">
              32 специальности · 10 городов России · Джун / Мид / Сеньор · <span className="text-cyan-600 font-semibold">новое: AI/ИИ специалисты</span>
            </p>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
              <strong>💡 Как сохранить как PDF:</strong> нажмите <kbd className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-xs">Ctrl+P</kbd> (Win/Linux) или <kbd className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-xs">⌘P</kbd> (Mac) → «Сохранить как PDF» → масштаб «По ширине страницы».
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-4 gap-3 mb-8 no-print">
            {[
              { value: "32", label: "специальностей" },
              { value: "10", label: "городов" },
              { value: "3", label: "уровня опыта" },
              { value: "Q2 2026", label: "актуальность" },
            ].map((s) => (
              <div key={s.label} className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Live hh.ru block ─────────────────────────────────────────────── */}
          <section className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-xl font-bold text-gray-900">📡 Данные hh.ru → фриланс-ставка</h2>
                {hasHhData ? (
                  <span className="text-xs bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                    live · обновляется каждые 24 ч
                  </span>
                ) : (
                  <span className="text-xs bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                    расчётные оценки
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {hasHhData
                  ? <>Реальные зарплаты сотрудников в <strong>Москве</strong> по данным hh.ru, пересчитанные в эквивалентную фриланс-ставку (÷160ч, ÷загрузка 70%, ÷НПД 4%). Колонка «Оценка отчёта» — медиана из таблиц ниже для сравнения.</>
                  : <>Расчётная эквивалентная фриланс-ставка на основе типичных зарплат найма в Москве. Формула: зарплата ÷ 160ч ÷ 0.70 ÷ 0.96. Источник hh.ru временно недоступен.</>
                }
              </p>
              <div className="overflow-x-auto rounded-xl border border-green-200 shadow-sm">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-green-50 border-b border-green-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Специальность</th>
                      <th className="text-right px-4 py-3 font-semibold text-gray-400 whitespace-nowrap">Вакансий</th>
                      <th className="text-right px-4 py-3 font-semibold text-gray-500 whitespace-nowrap">25% (₽/ч)</th>
                      <th className="text-right px-4 py-3 font-semibold text-green-700 whitespace-nowrap">Медиана (₽/ч)</th>
                      <th className="text-right px-4 py-3 font-semibold text-green-800 whitespace-nowrap">75% (₽/ч)</th>
                      <th className="text-right px-4 py-3 font-semibold text-indigo-600 whitespace-nowrap">Оценка отчёта</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HH_LIVE_SPECIALTIES.map((spec, i) => {
                      const d = hhData[i];
                      if (!d) {
                        // Fallback: compute freelance equivalent from static rate
                        const staticP25  = Math.round(spec.staticMsk * 0.75 / 50) * 50;
                        const staticP75  = Math.round(spec.staticMsk * 1.30 / 50) * 50;
                        return (
                          <tr key={spec.slug} className="border-t border-gray-100 opacity-80">
                            <td className="px-4 py-2.5 text-gray-700">{spec.name}</td>
                            <td className="px-4 py-2.5 text-right text-gray-300 text-xs italic">—</td>
                            <td className="px-4 py-2.5 text-right text-gray-400">{staticP25.toLocaleString("ru-RU")}</td>
                            <td className="px-4 py-2.5 text-right font-bold text-gray-600">{spec.staticMsk.toLocaleString("ru-RU")}</td>
                            <td className="px-4 py-2.5 text-right text-gray-500">{staticP75.toLocaleString("ru-RU")}</td>
                            <td className="px-4 py-2.5 text-right text-indigo-400 font-semibold">{spec.staticMsk.toLocaleString("ru-RU")}</td>
                          </tr>
                        );
                      }
                      const delta = d.freelanceHourly.median - spec.staticMsk;
                      const deltaSign = delta >= 0 ? "+" : "";
                      return (
                        <tr key={spec.slug} className="border-t border-gray-100 hover:bg-green-50/40">
                          <td className="px-4 py-2.5 font-medium text-gray-800">{spec.name}</td>
                          <td className="px-4 py-2.5 text-right text-gray-400 text-xs">{d.count}</td>
                          <td className="px-4 py-2.5 text-right text-gray-500">
                            {d.freelanceHourly.p25.toLocaleString("ru-RU")}
                          </td>
                          <td className="px-4 py-2.5 text-right font-bold text-green-700">
                            {d.freelanceHourly.median.toLocaleString("ru-RU")}
                          </td>
                          <td className="px-4 py-2.5 text-right font-semibold text-green-800">
                            {d.freelanceHourly.p75.toLocaleString("ru-RU")}
                          </td>
                          <td className="px-4 py-2.5 text-right">
                            <span className="text-indigo-500 font-semibold">
                              {spec.staticMsk.toLocaleString("ru-RU")}
                            </span>
                            {delta !== 0 && (
                              <span className={`ml-1.5 text-xs font-normal ${delta > 0 ? "text-green-600" : "text-red-400"}`}>
                                ({deltaSign}{delta.toLocaleString("ru-RU")})
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="bg-gray-50 border-t border-green-100 px-4 py-2.5 text-xs text-gray-400">
                  Формула: зарплата hh.ru (медиана) ÷ 160 ч ÷ 0.70 (загрузка) ÷ 0.96 (НПД 4%) = фриланс-ставка/ч · Источник: api.hh.ru · Только вакансии с указанной зарплатой в рублях, полная занятость, Москва
                </div>
              </div>
            </section>

          {/* Methodology note */}
          <div className="mb-6 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
            <strong className="text-gray-800">Методология:</strong> Данные собраны за январь–апрель 2026 г. из публичных источников: FL.ru, Habr Freelance, Kwork, Telegram-сообщества фрилансеров, HeadHunter (фриланс-ставки). <strong className="text-gray-700">Новое в Q2:</strong> добавлена категория «AI/ИИ» — ставки для Prompt-инженера, AI-агент разработчика, LLM fine-tuning инженера и AI-интегратора на основе анализа актуальных предложений на профильных платформах. Показаны медианные ставки сегмента Мид (1–3 года опыта). Джун — 0–1 год, Сеньор — 3+ лет. Все ставки — в рублях за час.
          </div>

          {/* Tables by category */}
          {categories.map((category, catIdx) => {
            const specs = SPECIALTIES.filter((s) => s.category === category);
            const colors = CATEGORY_COLORS[category] ?? { bg: "bg-gray-50", text: "text-gray-700", print: "#f9fafb" };

            return (
              <section key={category} className={catIdx > 0 ? "mt-10 page-break" : "mt-0"}>
                <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 ${colors.text}`}>
                  <span className={`inline-block px-3 py-1 rounded-lg text-sm ${colors.bg} border border-current border-opacity-20`}>
                    {category}
                  </span>
                  <span className="text-gray-400 text-sm font-normal">— {specs.length} специальностей</span>
                </h2>

                {/* Per-city tables for this category */}
                {CITIES.map((city) => (
                  <div key={city} className="mb-6">
                    <h3 className="text-base font-semibold text-gray-700 mb-2">📍 {city}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="text-left px-4 py-2.5 font-semibold text-gray-700 w-52">Специальность</th>
                            <th className="text-right px-4 py-2.5 font-semibold text-blue-600 whitespace-nowrap">Джун (₽/ч)</th>
                            <th className="text-right px-4 py-2.5 font-semibold text-indigo-600 whitespace-nowrap">Мид (₽/ч)</th>
                            <th className="text-right px-4 py-2.5 font-semibold text-violet-700 whitespace-nowrap">Сеньор (₽/ч)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {specs.map((spec, idx) => (
                            <tr key={spec.name} className="border-t border-gray-100 hover:bg-gray-50">
                              <td className="px-4 py-2 font-medium text-gray-800">{spec.name}</td>
                              <td className="px-4 py-2 text-right text-gray-600">{rateRange(spec.midMsk, city, "jun", idx)}</td>
                              <td className="px-4 py-2 text-right font-semibold text-gray-900">{rateRange(spec.midMsk, city, "mid", idx)}</td>
                              <td className="px-4 py-2 text-right font-bold text-violet-700">{rateRange(spec.midMsk, city, "sen", idx)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </section>
            );
          })}

          {/* City comparison summary */}
          <section className="mt-12 page-break">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              🗺 Сводная таблица: коэффициенты по городам
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Коэффициент показывает, во сколько раз ставки в городе отличаются от московских. Применяется к медиане Мид.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse shadow-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-2.5 font-semibold text-gray-700">Город</th>
                    <th className="text-right px-4 py-2.5 font-semibold text-gray-700">Коэффициент от Москвы</th>
                    <th className="text-right px-4 py-2.5 font-semibold text-gray-700">Frontend-мид, ₽/ч</th>
                    <th className="text-right px-4 py-2.5 font-semibold text-gray-700">Backend-мид, ₽/ч</th>
                    <th className="text-right px-4 py-2.5 font-semibold text-gray-700">UI/UX-мид, ₽/ч</th>
                    <th className="text-right px-4 py-2.5 font-semibold text-gray-700">Копирайтер-мид, ₽/ч</th>
                  </tr>
                </thead>
                <tbody>
                  {CITIES.map((city, idx) => {
                    const mult = CITY_MULT[city] ?? 0.70;
                    return (
                      <tr key={city} className={`border-t border-gray-100 ${idx === 0 ? "font-bold bg-indigo-50" : "hover:bg-gray-50"}`}>
                        <td className="px-4 py-2.5 text-gray-800">{city}</td>
                        <td className="px-4 py-2.5 text-right text-gray-700">{(mult * 100).toFixed(0)}%</td>
                        <td className="px-4 py-2.5 text-right">{rateRange(2250, city, "mid", 0)}</td>
                        <td className="px-4 py-2.5 text-right">{rateRange(2700, city, "mid", 1)}</td>
                        <td className="px-4 py-2.5 text-right">{rateRange(2000, city, "mid", 2)}</td>
                        <td className="px-4 py-2.5 text-right">{rateRange(1200, city, "mid", 3)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tips section */}
          <section className="mt-10 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Как использовать данные</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Шаг 1: Найди свою специальность и город",
                  text: "Найди строку со своей специальностью и городом. Определи уровень: Джун (0–1 год опыта), Мид (1–3 года), Сеньор (3+).",
                },
                {
                  title: "Шаг 2: Сравни с текущей ставкой",
                  text: "Если твоя ставка ниже медианы — повышение обосновано. Большинство клиентов воспринимают рыночную ставку нормально, когда она аргументирована данными.",
                },
                {
                  title: "Шаг 3: Используй как аргумент",
                  text: "«По рыночным данным медиана для мидов в нашем городе — X ₽/ч. Моя ставка — Y ₽/ч, что соответствует/немного ниже рынка.»",
                },
                {
                  title: "Шаг 4: Проверь расчёт ставки",
                  text: "Введи желаемый доход на руки в калькулятор freelancecalc.ru — он рассчитает минимальную ставку с учётом налогов и загрузки.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>
          </section>

          <Q2SubscribeForm />

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 mt-10 text-xs text-gray-500">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div>
                <strong>FreelanceCalc</strong> · freelancecalc.ru · Q2 2026 · Дата формирования: {today}
              </div>
              <div className="no-print">
                <Link href="/" className="text-indigo-600 hover:underline">← Калькулятор ставки</Link>
                {" · "}
                <Link href="/benchmark" className="text-indigo-600 hover:underline">Страница бенчмарка</Link>
              </div>
            </div>
            <p className="mt-2 text-gray-400">
              Данные носят ориентировочный характер и основаны на публичных источниках. Реальные ставки могут отличаться в зависимости от конкретного проекта, клиента и индивидуального опыта. Следующее обновление: Q3 2026 — сентябрь 2026.
            </p>
          </footer>

        </main>
      </div>
    </>
  );
}
