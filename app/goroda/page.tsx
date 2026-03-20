import { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "./cities";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки фрилансеров по городам России 2026 — FreelanceCalc",
  description:
    "Медианные ставки фрилансеров в Москве, Санкт-Петербурге, Екатеринбурге, Ростове, Краснодаре, Перми, Уфе, Воронеже, Челябинске и других городах России. Рассчитайте свою ставку с учётом регионального рынка.",
  alternates: { canonical: "/goroda" },
  openGraph: {
    title: "Ставки фрилансеров по городам России 2026",
    description:
      "Медианные ставки фрилансеров в Москве, СПб, Екатеринбурге и других городах России.",
    url: `${BASE_URL}/goroda`,
    type: "website",
    locale: "ru_RU",
  },
};

export default function CitiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ставки фрилансеров по городам России",
    description:
      "Медианные ставки фрилансеров в крупных городах России с калькулятором",
    url: `${BASE_URL}/goroda`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "FreelanceCalc",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ставки по городам",
          item: `${BASE_URL}/goroda`,
        },
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
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">
            FreelanceCalc
          </Link>
          <span>›</span>
          <span className="text-slate-600">Ставки по городам</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Ставки фрилансеров по городам России
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            Ставки фрилансеров существенно различаются в зависимости от города.
            Московские специалисты берут в среднем на 30–50% больше, чем
            коллеги в регионах. Выберите город, чтобы узнать актуальные ставки
            и рассчитать свою.
          </p>
        </header>

        <div className="grid gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/goroda/${city.slug}`}
              className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group"
            >
              <div>
                <span className="font-semibold text-slate-800 group-hover:text-indigo-700">
                  {city.name}
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Медиана: ~{city.defaultIncome.toLocaleString("ru-RU")} ₽/мес
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    city.multiplier >= 1.2
                      ? "bg-green-100 text-green-700"
                      : city.multiplier >= 1.0
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {city.multiplier >= 1 ? "+" : ""}
                  {Math.round((city.multiplier - 1) * 100)}% к медиане
                </span>
                <span className="text-indigo-400 group-hover:text-indigo-600">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-8 bg-slate-50 rounded-xl p-5 text-sm text-slate-600">
          <h2 className="font-semibold text-slate-800 mb-2">
            Почему ставки различаются по городам?
          </h2>
          <p className="leading-relaxed">
            Разница в ставках обусловлена стоимостью жизни, концентрацией
            крупных заказчиков и уровнем платёжеспособного спроса. Фрилансеры в
            Москве и Санкт-Петербурге работают с более дорогими проектами, а
            региональные специалисты часто берут московских заказчиков и
            ориентируются на столичный рынок.
          </p>
        </section>

        <section className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5">
          <h2 className="font-semibold text-slate-800 text-sm mb-1">
            📊 Ставки по специальностям
          </h2>
          <p className="text-xs text-slate-600 mb-2">
            Медианные ставки для 22 профессий: от переводчика до ML-инженера.
          </p>
          <Link
            href="/stavka"
            className="text-xs font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-2"
          >
            Смотреть все специальности →
          </Link>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">
            ← Главная
          </Link>
          &nbsp;·&nbsp;
          <Link href="/stavka" className="hover:text-indigo-600">
            Специальности
          </Link>
        </footer>
      </main>
    </>
  );
}
