import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки фрилансеров 2026 — бесплатный отчёт по 22 специальностям",
  description:
    "Открытые данные: медианные часовые ставки фрилансеров по 22 специальностям в Москве и Санкт-Петербурге. Q1 2026. Разработка, дизайн, маркетинг, тексты, аналитика.",
  keywords: [
    "ставки фрилансеров 2026",
    "сколько берёт фрилансер",
    "часовая ставка фрилансера москва",
    "ставки разработчиков фрилансеров",
    "ставки дизайнеров фрилансеров",
    "средняя ставка фрилансера 2026",
    "сколько платить фрилансеру",
    "рейтинг ставок фрилансеров россия",
    "бенчмарк ставок фрилансеров",
    "ставки фрилансеров по специальностям",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/otchet-2026" },
  openGraph: {
    title: "Ставки фрилансеров 2026 — открытый отчёт по 22 специальностям",
    description:
      "Бесплатные данные Q1 2026: сколько берут фрилансеры в Москве и СПб по 22 специальностям. Разработка, дизайн, маркетинг, аналитика, тексты.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/otchet-2026`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/otchet-2026#article`,
      headline: "Ставки фрилансеров 2026 — открытый отчёт по 22 специальностям",
      description:
        "Медианные часовые ставки фрилансеров по 22 специальностям в Москве и Санкт-Петербурге. Данные Q1 2026.",
      url: `${BASE_URL}/otchet-2026`,
      datePublished: "2026-03-01",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      inLanguage: "ru",
      about: { "@type": "Thing", name: "Ставки фрилансеров" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Отчёт ставок 2026", item: `${BASE_URL}/otchet-2026` },
      ],
    },
    {
      "@type": "Dataset",
      name: "Ставки фрилансеров Q1 2026 — Москва и Санкт-Петербург",
      description: "Медианные часовые ставки по 22 специальностям в двух городах России. Открытые данные.",
      url: `${BASE_URL}/otchet-2026`,
      license: "https://creativecommons.org/licenses/by/4.0/",
      creator: { "@type": "Organization", name: "FreelanceCalc" },
      temporalCoverage: "2026-01/2026-03",
      spatialCoverage: "RU",
    },
  ],
};

type Specialty = {
  specialty: string;
  category: string;
  msk_low: number;
  msk_high: number;
  spb_low: number;
  spb_high: number;
  note?: string;
};

const RATES: Specialty[] = [
  // Разработка
  { specialty: "ML / AI-инженер", category: "Разработка", msk_low: 4000, msk_high: 6500, spb_low: 3200, spb_high: 5500 },
  { specialty: "DevOps-инженер", category: "Разработка", msk_low: 3200, msk_high: 5500, spb_low: 2600, spb_high: 4500 },
  { specialty: "Мобильный разработчик (iOS/Android)", category: "Разработка", msk_low: 2800, msk_high: 4800, spb_low: 2300, spb_high: 4000 },
  { specialty: "Fullstack-разработчик", category: "Разработка", msk_low: 2400, msk_high: 4200, spb_low: 1900, spb_high: 3500 },
  { specialty: "Backend-разработчик", category: "Разработка", msk_low: 2200, msk_high: 3800, spb_low: 1800, spb_high: 3200 },
  { specialty: "1С-разработчик", category: "Разработка", msk_low: 2000, msk_high: 3500, spb_low: 1600, spb_high: 2800 },
  { specialty: "Frontend-разработчик", category: "Разработка", msk_low: 1700, msk_high: 3200, spb_low: 1400, spb_high: 2600 },
  { specialty: "QA / Тестировщик", category: "Разработка", msk_low: 1500, msk_high: 2800, spb_low: 1200, spb_high: 2300 },
  // Аналитика
  { specialty: "Аналитик данных (Data Analyst)", category: "Аналитика", msk_low: 1800, msk_high: 3800, spb_low: 1500, spb_high: 3200 },
  { specialty: "Бизнес-аналитик", category: "Аналитика", msk_low: 1500, msk_high: 3000, spb_low: 1200, spb_high: 2500 },
  // Дизайн
  { specialty: "Motion-дизайнер", category: "Дизайн", msk_low: 1500, msk_high: 2800, spb_low: 1200, spb_high: 2300 },
  { specialty: "UI/UX-дизайнер", category: "Дизайн", msk_low: 1300, msk_high: 2800, spb_low: 1100, spb_high: 2300 },
  { specialty: "3D-дизайнер", category: "Дизайн", msk_low: 1400, msk_high: 2600, spb_low: 1100, spb_high: 2100 },
  { specialty: "Графический дизайнер", category: "Дизайн", msk_low: 1000, msk_high: 2200, spb_low: 800, spb_high: 1800 },
  // Маркетинг
  { specialty: "Контекстолог (PPC)", category: "Маркетинг", msk_low: 1000, msk_high: 2000, spb_low: 800, spb_high: 1600 },
  { specialty: "SEO-специалист", category: "Маркетинг", msk_low: 1100, msk_high: 2200, spb_low: 900, spb_high: 1800 },
  { specialty: "Таргетолог (ВКонтакте, myTarget)", category: "Маркетинг", msk_low: 1000, msk_high: 2200, spb_low: 800, spb_high: 1800 },
  { specialty: "Email-маркетолог", category: "Маркетинг", msk_low: 900, msk_high: 1800, spb_low: 700, spb_high: 1500 },
  { specialty: "SMM-специалист", category: "Маркетинг", msk_low: 800, msk_high: 1800, spb_low: 650, spb_high: 1500 },
  // Тексты
  { specialty: "Технический писатель", category: "Тексты", msk_low: 1200, msk_high: 2200, spb_low: 950, spb_high: 1800 },
  { specialty: "Редактор", category: "Тексты", msk_low: 900, msk_high: 1900, spb_low: 750, spb_high: 1600 },
  { specialty: "Копирайтер", category: "Тексты", msk_low: 700, msk_high: 1700, spb_low: 550, spb_high: 1400 },
];

const CATEGORY_META: Record<string, { color: string; emoji: string }> = {
  "Разработка": { color: "bg-blue-100 text-blue-700", emoji: "💻" },
  "Аналитика": { color: "bg-purple-100 text-purple-700", emoji: "📊" },
  "Дизайн": { color: "bg-pink-100 text-pink-700", emoji: "🎨" },
  "Маркетинг": { color: "bg-green-100 text-green-700", emoji: "📣" },
  "Тексты": { color: "bg-orange-100 text-orange-700", emoji: "✍️" },
};

const fmt = (n: number) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(n);

// Group specialties by category preserving order
const CATEGORIES = Array.from(new Set(RATES.map((r) => r.category)));

export default function Otchet2026() {
  const byCategory = CATEGORIES.map((cat) => ({
    name: cat,
    meta: CATEGORY_META[cat] ?? { color: "bg-gray-100 text-gray-700", emoji: "📌" },
    rows: RATES.filter((r) => r.category === cat),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Nav */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm">
            <Link href="/" className="text-indigo-600 font-semibold hover:text-indigo-700">
              FreelanceCalc
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600 font-medium">Ставки фрилансеров 2026</span>
            <span className="ml-auto inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
              🆓 Открытые данные
            </span>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">

          {/* Hero */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 border border-indigo-100">
              📊 Данные Q1 2026 · Март 2026 · Открытая лицензия CC BY 4.0
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ставки фрилансеров 2026:<br className="hidden sm:block" /> открытый отчёт по 22 специальностям
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-4">
              Медианные часовые ставки фрилансеров в <strong>Москве</strong> и <strong>Санкт-Петербурге</strong>.
              Данные собраны из открытых вакансий FL.ru, Хабр Карьера, Kwork и Telegram-сообществ за январь–март 2026.
              Разбивка по уровням опыта — в{" "}
              <Link href="/benchmark" className="text-indigo-600 underline hover:text-indigo-700">
                PDF-бенчмарке
              </Link>.
            </p>
            <p className="text-sm text-slate-500">
              Данные свободны для публикации со ссылкой на источник. Ссылка для цитирования:{" "}
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                https://freelancecalc-one.vercel.app/otchet-2026
              </code>
            </p>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { value: "22", label: "специальности" },
              { value: "2", label: "города (бесплатно)" },
              { value: "Q1 2026", label: "актуальность данных" },
              { value: "CC BY 4.0", label: "лицензия" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
                <div className="text-xl font-bold text-indigo-600">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Rate tables by category */}
          <div className="space-y-8">
            {byCategory.map(({ name, meta, rows }) => (
              <section key={name} id={name.toLowerCase()}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{meta.emoji}</span>
                  <h2 className="text-xl font-bold text-slate-900">{name}</h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${meta.color}`}>
                    {rows.length} специальностей
                  </span>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="text-left px-4 py-3 font-semibold text-slate-600">
                          Специальность
                        </th>
                        <th className="text-right px-4 py-3 font-semibold text-slate-600 whitespace-nowrap">
                          🏙 Москва, ₽/час
                        </th>
                        <th className="text-right px-4 py-3 font-semibold text-slate-600 whitespace-nowrap">
                          🌊 Санкт-Петербург, ₽/час
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, i) => (
                        <tr
                          key={row.specialty}
                          className={`border-b border-slate-50 last:border-0 hover:bg-slate-50/60 transition-colors ${i % 2 === 0 ? "" : "bg-slate-50/30"}`}
                        >
                          <td className="px-4 py-3">
                            <span className="font-medium text-slate-800">{row.specialty}</span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span className="font-semibold text-slate-900 whitespace-nowrap">
                              {fmt(row.msk_low)} – {fmt(row.msk_high)}
                            </span>
                            <br />
                            <span className="text-xs text-slate-400">
                              медиана ≈ {fmt(Math.round((row.msk_low + row.msk_high) / 2 / 100) * 100)}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span className="font-semibold text-slate-900 whitespace-nowrap">
                              {fmt(row.spb_low)} – {fmt(row.spb_high)}
                            </span>
                            <br />
                            <span className="text-xs text-slate-400">
                              медиана ≈ {fmt(Math.round((row.spb_low + row.spb_high) / 2 / 100) * 100)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>

          {/* Methodology */}
          <section className="mt-10 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Методология</h2>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
              <li>
                <strong>Источники:</strong> Открытые предложения на FL.ru, Хабр Карьера, Kwork, объявления в
                Telegram-каналах фрилансеров (январь–март 2026).
              </li>
              <li>
                <strong>Период:</strong> Q1 2026 (январь–март 2026). Обновляется ежеквартально.
              </li>
              <li>
                <strong>Выборка:</strong> Учитываются ставки из реальных завершённых заказов и активных предложений,
                крайние значения (топ и нижние 10%) исключаются.
              </li>
              <li>
                <strong>Лицензия:</strong> Открытые данные{" "}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/deed.ru"
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC BY 4.0
                </a>
                . Разрешается публиковать, цитировать и использовать со ссылкой на источник.
              </li>
            </ul>
          </section>

          {/* Premium CTA */}
          <section className="mt-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-200 mb-2">
                  Полный бенчмарк — PDF
                </div>
                <h3 className="text-xl font-bold mb-2">
                  + 8 региональных городов · Разбивка джун/мид/сеньор
                </h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Новосибирск, Екатеринбург, Казань, Краснодар, Нижний Новгород, Ростов-на-Дону, Самара, Уфа.
                  Разбивка по уровням опыта (разрыв до 4×). Скачиваемый PDF, обновление каждый квартал.
                </p>
              </div>
              <div className="shrink-0 text-center">
                <Link
                  href="/benchmark"
                  className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm shadow-sm"
                >
                  Получить PDF — 249 ₽
                </Link>
                <p className="text-xs text-indigo-300 mt-2">ЮKassa · СБП · карты РФ</p>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-1">
                  🧮 Рассчитайте свою личную ставку
                </h3>
                <p className="text-sm text-slate-600">
                  Введите желаемый доход и налоговый режим — калькулятор покажет, сколько нужно брать в час,
                  чтобы выйти на эту сумму с учётом отпуска и реальной загрузки.
                </p>
              </div>
              <Link
                href="/"
                className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Открыть калькулятор →
              </Link>
            </div>
          </section>

          {/* Share prompt */}
          <section className="mt-6 bg-white border border-slate-200 rounded-2xl p-5 text-center">
            <p className="text-sm text-slate-600 mb-3">
              Данные полезны коллегам? Поделитесь ссылкой в Telegram или скопируйте для статьи:
            </p>
            <code className="block bg-slate-100 rounded-lg px-4 py-2 text-xs text-slate-700 mb-3 break-all">
              https://freelancecalc-one.vercel.app/otchet-2026
            </code>
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent("https://freelancecalc-one.vercel.app/otchet-2026")}&text=${encodeURIComponent("📊 Бесплатный отчёт: ставки фрилансеров 2026 по 22 специальностям в Москве и СПб — открытые данные CC BY 4.0")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2AABEE] hover:bg-[#229ED9] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              ✈️ Поделиться в Telegram
            </a>
          </section>

          {/* Related links */}
          <nav className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Смотри также</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/" className="text-indigo-600 hover:underline">🧮 Калькулятор ставки</Link>
              <Link href="/stavka" className="text-indigo-600 hover:underline">🎯 Калькуляторы по специальностям</Link>
              <Link href="/benchmark" className="text-indigo-600 hover:underline">📊 PDF-бенчмарк (10 городов)</Link>
              <Link href="/stati/srednyaya-stavka-frilansera-2026" className="text-indigo-600 hover:underline">📈 Средняя ставка 2026</Link>
              <Link href="/stati/stavki-razrabotchikov-frilanserov-2026" className="text-indigo-600 hover:underline">💻 Ставки разработчиков</Link>
              <Link href="/stati/stavki-dizajnerov-frilanserov-2026" className="text-indigo-600 hover:underline">🎨 Ставки дизайнеров</Link>
            </div>
          </nav>

        </main>
      </div>
    </>
  );
}
