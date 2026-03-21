import { Metadata } from "next";
import Link from "next/link";
import { SPECIALTIES } from "./[slug]/specialties";

// TODO: switch to custom domain once purchased & configured in Vercel
const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Ставки фрилансеров по специальностям 2026 — FreelanceCalc",
  description:
    "Калькуляторы почасовой ставки для 12+ профессий: разработчики, дизайнеры, маркетологи, копирайтеры. Медианные ставки с учётом налогов (самозанятый, ИП УСН) и загрузки.",
  alternates: { canonical: "/stavka" },
  openGraph: {
    title: "Ставки фрилансеров по специальностям 2026 — FreelanceCalc",
    description:
      "Медианные ставки и калькуляторы для 12+ профессий фрилансеров в России.",
    url: `${BASE_URL}/stavka`,
    type: "website",
    locale: "ru_RU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ставки фрилансеров по специальностям",
  description:
    "Калькуляторы почасовой ставки для фрилансеров по 12+ специальностям с учётом налогов и загрузки",
  url: `${BASE_URL}/stavka`,
  numberOfItems: SPECIALTIES.length,
  itemListElement: SPECIALTIES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.shortTitle,
    url: `${BASE_URL}/stavka/${s.slug}`,
  })),
};

// Group specialties by category for better UX
const CATEGORIES = [
  {
    title: "💻 Разработка",
    slugs: [
      "frontend-razrabotchik",
      "backend-razrabotchik",
      "fullstack-razrabotchik",
      "mobilnyj-razrabotchik",
    ],
  },
  {
    title: "🎨 Дизайн",
    slugs: ["dizajner-ui-ux", "graficheskij-dizajner"],
  },
  {
    title: "📣 Маркетинг и контент",
    slugs: ["smm-specialist", "seo-specialist", "kopirayter"],
  },
  {
    title: "📊 Аналитика и управление",
    slugs: ["data-analyst", "menedzher-proektov", "testirovshchik-qa"],
  },
];

export default function StavkaIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">
            FreelanceCalc
          </Link>
          <span>›</span>
          <span className="text-slate-600">Ставки по специальностям</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Ставки фрилансеров по специальностям
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            Выберите свою специальность — калькулятор покажет вашу оптимальную
            ставку с учётом налогового режима, отпуска и реальной загрузки.
            Также указаны медианные ставки по рынку.
          </p>
        </header>

        {/* Grouped specialty cards */}
        <div className="space-y-8">
          {CATEGORIES.map((cat) => {
            const specs = cat.slugs
              .map((slug) => SPECIALTIES.find((s) => s.slug === slug))
              .filter(Boolean) as typeof SPECIALTIES;

            return (
              <section key={cat.title}>
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  {cat.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specs.map((spec) => (
                    <Link
                      key={spec.slug}
                      href={`/stavka/${spec.slug}`}
                      className="group bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-sm rounded-xl p-4 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors">
                          {spec.shortTitle}
                        </span>
                        <span className="text-indigo-600 text-sm flex-shrink-0">→</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        Медиана:{" "}
                        <span className="font-medium text-slate-700">
                          {spec.medianHourly}
                        </span>
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Article promo */}
        <section className="mt-10 bg-amber-50 border border-amber-100 rounded-2xl p-5 flex items-start gap-3">
          <span className="text-2xl">📊</span>
          <div>
            <h2 className="font-bold text-slate-800 text-sm mb-1">
              Сравнение ставок по всем 22 специальностям
            </h2>
            <p className="text-xs text-slate-600 mb-2">
              Сводная таблица медианных ставок: от 400 ₽/ч у переводчиков до 7 000 ₽/ч у ML-инженеров.
            </p>
            <Link
              href="/stati/srednyaya-stavka-frilansera-2026"
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-2"
            >
              Читать статью →
            </Link>
          </div>
        </section>

        {/* Cities promo */}
        <section className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-3">
          <span className="text-2xl">📍</span>
          <div>
            <h2 className="font-bold text-slate-800 text-sm mb-1">
              Ставки по городам России
            </h2>
            <p className="text-xs text-slate-600 mb-2">
              Москва, СПб, Екатеринбург и ещё 5 городов — региональные поправки к ставкам.
            </p>
            <Link
              href="/goroda"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
            >
              Ставки по городам →
            </Link>
          </div>
        </section>

        {/* CTA back to main calculator */}
        <section className="mt-6 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center">
          <h2 className="font-bold text-slate-800 text-base mb-1">
            Нет вашей специальности?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Используйте универсальный калькулятор — он подходит для любой профессии.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            💸 Открыть калькулятор
          </Link>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">
            ← Главная
          </Link>
        </footer>
      </main>
    </>
  );
}
