import { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Рейтинг ставок фрилансеров 2026 — кто зарабатывает больше всех | FreelanceCalc",
  description:
    "Топ специальностей фрилансеров по часовой ставке в 2026 году. ML-инженеры, DevOps и мобильные разработчики возглавляют рейтинг. Медианные ставки по 26 специальностям.",
  alternates: { canonical: `${BASE_URL}/reyting` },
  openGraph: {
    title: "Рейтинг ставок фрилансеров 2026 — кто зарабатывает больше всех",
    description:
      "Медианные ставки по 26 специальностям: от ML-инженера (3 000–7 000 ₽/час) до контент-менеджера (500–1 200 ₽/час).",
    url: `${BASE_URL}/reyting`,
    type: "website",
    locale: "ru_RU",
  },
};

// Sorted by median (midpoint of range), descending
const RATING = [
  { rank: 1,  slug: "ml-inzhener",           title: "ML-инженер / AI-специалист",  median: "3 000–7 000", mid: 5000, category: "Разработка", trend: "🔥" },
  { rank: 2,  slug: "devops-inzhener",        title: "DevOps-инженер",               median: "2 500–6 000", mid: 4250, category: "Разработка", trend: "🔥" },
  { rank: 3,  slug: "mobilnyj-razrabotchik",  title: "Мобильный разработчик",       median: "2 500–5 000", mid: 3750, category: "Разработка", trend: "📈" },
  { rank: 4,  slug: "fotograf-frilanser",     title: "Фотограф (коммерческий)",      median: "1 500–5 000", mid: 3250, category: "Креатив",   trend: "📈" },
  { rank: 5,  slug: "python-razrabotchik",    title: "Python-разработчик",           median: "2 000–4 500", mid: 3250, category: "Разработка", trend: "📈" },
  { rank: 6,  slug: "fullstack-razrabotchik", title: "Fullstack-разработчик",        median: "2 000–4 500", mid: 3250, category: "Разработка", trend: "📈" },
  { rank: 7,  slug: "backend-razrabotchik",   title: "Backend-разработчик",          median: "2 000–4 000", mid: 3000, category: "Разработка", trend: "📈" },
  { rank: 8,  slug: "data-analyst",           title: "Аналитик данных",              median: "1 500–3 500", mid: 2500, category: "Аналитика", trend: "📈" },
  { rank: 9,  slug: "biznes-analitik",        title: "Бизнес-аналитик",              median: "1 500–3 500", mid: 2500, category: "Аналитика", trend: "📈" },
  { rank: 10, slug: "yurist-frilanser",       title: "Юрист (самозанятый)",          median: "1 200–3 500", mid: 2350, category: "Право",     trend: "📊" },
  { rank: 11, slug: "frontend-razrabotchik",  title: "Frontend-разработчик",         median: "1 500–3 000", mid: 2250, category: "Разработка", trend: "📊" },
  { rank: 12, slug: "1c-razrabotchik",        title: "1С-разработчик",               median: "1 200–2 800", mid: 2000, category: "Разработка", trend: "📊" },
  { rank: 13, slug: "php-razrabotchik",       title: "PHP-разработчик",              median: "1 200–2 800", mid: 2000, category: "Разработка", trend: "📊" },
  { rank: 14, slug: "menedzher-proektov",     title: "Менеджер проектов",            median: "1 000–2 500", mid: 1750, category: "Управление", trend: "📊" },
  { rank: 15, slug: "dizajner-ui-ux",         title: "UI/UX дизайнер",               median: "1 000–2 500", mid: 1750, category: "Дизайн",    trend: "📊" },
  { rank: 16, slug: "buhgalter-frilanser",    title: "Бухгалтер (самозанятый)",      median: "800–2 500",   mid: 1650, category: "Финансы",   trend: "📊" },
  { rank: 17, slug: "illustrator-frilanser",  title: "Иллюстратор",                  median: "700–2 500",   mid: 1600, category: "Дизайн",    trend: "📊" },
  { rank: 18, slug: "seo-specialist",         title: "SEO-специалист",               median: "900–2 000",   mid: 1450, category: "Маркетинг", trend: "📊" },
  { rank: 19, slug: "testirovshchik-qa",      title: "QA-тестировщик",               median: "900–2 000",   mid: 1450, category: "Разработка", trend: "📊" },
  { rank: 20, slug: "targetolog",             title: "Таргетолог",                   median: "800–2 000",   mid: 1400, category: "Маркетинг", trend: "📊" },
  { rank: 21, slug: "videomontazhyor",        title: "Видеомонтажёр",                median: "700–2 000",   mid: 1350, category: "Креатив",   trend: "📊" },
  { rank: 22, slug: "graficheskij-dizajner",  title: "Графический дизайнер",         median: "800–1 800",   mid: 1300, category: "Дизайн",    trend: "📊" },
  { rank: 23, slug: "smm-specialist",         title: "SMM-специалист",               median: "700–1 500",   mid: 1100, category: "Маркетинг", trend: "📊" },
  { rank: 24, slug: "kopirayter",             title: "Копирайтер",                   median: "500–1 500",   mid: 1000, category: "Контент",   trend: "📊" },
  { rank: 25, slug: "perevodchik",            title: "Переводчик",                   median: "400–1 200",   mid: 800,  category: "Контент",   trend: "📊" },
  { rank: 26, slug: "kontent-menedzher",      title: "Контент-менеджер",             median: "500–1 200",   mid: 850,  category: "Контент",   trend: "📊" },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Разработка": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Аналитика":  "bg-blue-50 text-blue-700 border-blue-200",
  "Дизайн":     "bg-purple-50 text-purple-700 border-purple-200",
  "Маркетинг":  "bg-orange-50 text-orange-700 border-orange-200",
  "Контент":    "bg-slate-50 text-slate-700 border-slate-200",
  "Управление": "bg-teal-50 text-teal-700 border-teal-200",
  "Финансы":    "bg-green-50 text-green-700 border-green-200",
  "Право":      "bg-amber-50 text-amber-700 border-amber-200",
  "Креатив":    "bg-rose-50 text-rose-700 border-rose-200",
};

export default function ReytingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Рейтинг ставок фрилансеров 2026 — кто зарабатывает больше всех",
    description:
      "Топ специальностей фрилансеров по часовой ставке. Медианные данные по 26 специальностям за Q1 2026.",
    url: `${BASE_URL}/reyting`,
    datePublished: "2026-01-01",
    dateModified: "2026-03-01",
    publisher: {
      "@type": "Organization",
      name: "FreelanceCalc",
      url: BASE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Рейтинг специальностей", item: `${BASE_URL}/reyting` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Главная</Link>
          <span className="mx-1">›</span>
          <span className="text-slate-600">Рейтинг специальностей</span>
        </nav>

        {/* Hero */}
        <header className="mb-8">
          <p className="text-sm font-semibold text-indigo-500 mb-1 tracking-wide uppercase">
            FreelanceCalc · Q1 2026
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Рейтинг ставок фрилансеров 2026
          </h1>
          <p className="mt-2 text-slate-500 text-base">
            Кто зарабатывает больше всех? Медианные часовые ставки по 26 специальностям.
            Данные основаны на реальном рынке фриланса России за Q1 2026.
          </p>

          {/* Key facts bar */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium">26 специальностей</span>
            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">Данные Q1 2026</span>
            <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-medium">Медианные ставки</span>
          </div>
        </header>

        {/* Top-3 highlight */}
        <section className="mb-8 grid grid-cols-3 gap-3">
          {RATING.slice(0, 3).map((s) => (
            <Link
              key={s.slug}
              href={`/stavka/${s.slug}`}
              className="bg-gradient-to-b from-indigo-600 to-indigo-700 text-white rounded-2xl p-4 text-center hover:from-indigo-500 hover:to-indigo-600 transition-colors"
            >
              <p className="text-2xl font-black mb-1">#{s.rank}</p>
              <p className="text-xs font-semibold leading-tight opacity-90">{s.title}</p>
              <p className="text-sm font-bold mt-2 opacity-80">{s.median} ₽/ч</p>
            </Link>
          ))}
        </section>

        {/* Full ranking table */}
        <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-800 text-sm">Все специальности — рейтинг по медиане</h2>
            <span className="text-xs text-slate-400">Медиана ₽/час</span>
          </div>

          <div className="divide-y divide-slate-100">
            {RATING.map((s) => (
              <Link
                key={s.slug}
                href={`/stavka/${s.slug}`}
                className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 transition-colors group"
              >
                {/* Rank */}
                <span className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold ${
                  s.rank <= 3
                    ? "bg-indigo-600 text-white"
                    : s.rank <= 10
                    ? "bg-slate-200 text-slate-700"
                    : "bg-slate-100 text-slate-400"
                }`}>
                  {s.rank}
                </span>

                {/* Title & category */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 truncate">
                    {s.trend} {s.title}
                  </p>
                  <span className={`inline-block text-xs px-2 py-0.5 rounded-full border mt-0.5 ${CATEGORY_COLORS[s.category]}`}>
                    {s.category}
                  </span>
                </div>

                {/* Median range */}
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-slate-800">{s.median}</p>
                  <p className="text-xs text-slate-400">₽/час</p>
                </div>

                {/* Arrow */}
                <span className="text-slate-300 group-hover:text-indigo-400 transition-colors flex-shrink-0">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Methodology note */}
        <section className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
          <h3 className="font-semibold text-slate-700 mb-2">📊 Методология</h3>
          <p>
            Ставки рассчитаны на основе агрегированных данных фриланс-бирж, профессиональных
            сообществ и опросов фрилансеров за Q1 2026. Диапазон отражает 25-й и 75-й перцентили
            рынка. Конкретная ставка зависит от опыта, специализации и города.
          </p>
          <p className="mt-2">
            <Link href="/benchmark" className="text-indigo-600 hover:underline font-medium">
              Полный бенчмарк по специальностям и городам →
            </Link>
          </p>
        </section>

        {/* CRO: Upsell to calculator */}
        <section className="mt-6 bg-indigo-600 text-white rounded-2xl p-6 text-center">
          <h2 className="font-bold text-xl mb-2">
            Рассчитайте вашу личную ставку
          </h2>
          <p className="text-indigo-200 text-sm mb-4">
            Медианы — ориентир. Точная ставка зависит от вашего налогового режима,
            загрузки и желаемого дохода. Калькулятор учтёт всё.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm"
          >
            Открыть калькулятор →
          </Link>
        </section>

        {/* Related: specialty pages */}
        <section className="mt-6 bg-white border border-slate-200 rounded-2xl p-5">
          <h3 className="font-semibold text-slate-700 text-sm mb-3">🎯 Калькуляторы по специальностям</h3>
          <div className="flex flex-wrap gap-2">
            {RATING.slice(0, 12).map((s) => (
              <Link
                key={s.slug}
                href={`/stavka/${s.slug}`}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {s.title}
              </Link>
            ))}
            <Link
              href="/stavka"
              className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Все специальности →
            </Link>
          </div>
        </section>

        {/* FAQ for SEO rich snippets */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: "Кто зарабатывает больше всех на фрилансе в 2026 году?",
                a: "Топ-3 специальности по медианной ставке: ML-инженер (3 000–7 000 ₽/час), DevOps-инженер (2 500–6 000 ₽/час) и мобильный разработчик (2 500–5 000 ₽/час).",
              },
              {
                q: "Какова средняя ставка фрилансера в России?",
                a: "Средняя ставка по всем специальностям — около 1 500–2 000 ₽/час. Разброс огромный: от 400 ₽/час (переводчики) до 7 000 ₽/час (ML-инженеры). Точная ставка зависит от специальности, опыта и города.",
              },
              {
                q: "Насколько ставки отличаются по городам?",
                a: "В Москве ставки в среднем на 20–40% выше, чем в регионах. В Санкт-Петербурге — на 10–25% выше регионального среднего. Для IT-специальностей разница меньше, так как большинство проектов ведётся удалённо.",
              },
              {
                q: "Как рассчитать свою ставку с учётом налогов?",
                a: "Часовая ставка зависит не только от желаемого дохода, но и от налогового режима, количества рабочих дней, отпуска и процента загрузки. Используйте калькулятор FreelanceCalc для точного расчёта.",
              },
            ].map((item, i) => (
              <details key={i} className="border border-slate-200 rounded-xl bg-white">
                <summary className="px-5 py-4 font-semibold text-slate-800 cursor-pointer text-sm list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-slate-400 ml-2">+</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <footer className="mt-10 text-center text-xs text-slate-400 space-y-1">
          <div>
            <Link href="/stavka" className="hover:text-indigo-600">Специальности</Link>
            &nbsp;·&nbsp;
            <Link href="/goroda" className="hover:text-indigo-600">Города</Link>
            &nbsp;·&nbsp;
            <Link href="/benchmark" className="hover:text-indigo-600">Бенчмарк PDF</Link>
            &nbsp;·&nbsp;
            <Link href="/stati" className="hover:text-indigo-600">Статьи</Link>
          </div>
          <p>© 2026 FreelanceCalc — калькулятор ставки фрилансера</p>
        </footer>
      </main>
    </>
  );
}
