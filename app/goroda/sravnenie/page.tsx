import { Metadata } from "next";
import Link from "next/link";
import { getCity } from "../cities";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const CITY_PAIRS = [
  { city1: "moskva", city2: "sankt-peterburg" },
  { city1: "moskva", city2: "ekaterinburg" },
  { city1: "moskva", city2: "novosibirsk" },
  { city1: "moskva", city2: "krasnodar" },
  { city1: "moskva", city2: "kazan" },
  { city1: "moskva", city2: "rostov-na-donu" },
  { city1: "moskva", city2: "tyumen" },
  { city1: "moskva", city2: "nizhnij-novgorod" },
  { city1: "sankt-peterburg", city2: "ekaterinburg" },
  { city1: "sankt-peterburg", city2: "novosibirsk" },
  { city1: "ekaterinburg", city2: "novosibirsk" },
  { city1: "moskva", city2: "chelyabinsk" },
];

export const metadata: Metadata = {
  title: "Сравнение ставок фрилансеров по городам России 2026 — FreelanceCalc",
  description:
    "Сравниваем ставки IT-фрилансеров в Москве, Санкт-Петербурге, Екатеринбурге, Новосибирске, Краснодаре и других городах. Разница в ставках по городам — таблицы, данные, калькулятор.",
  alternates: { canonical: "/goroda/sravnenie" },
  openGraph: {
    title: "Сравнение ставок фрилансеров по городам России 2026",
    description:
      "Ставки IT-фрилансеров в разных городах России: Москва, Питер, Екатеринбург, Новосибирск, Краснодар. Сравнение и калькулятор.",
    url: `${BASE_URL}/goroda/sravnenie`,
    type: "website",
    locale: "ru_RU",
  },
};

export default function CityComparisonHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Сравнение ставок фрилансеров по городам России",
    description:
      "Сравнение ставок IT-фрилансеров в разных городах России с калькулятором",
    url: `${BASE_URL}/goroda/sravnenie`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Ставки по городам", item: `${BASE_URL}/goroda` },
        { "@type": "ListItem", position: 3, name: "Сравнение городов", item: `${BASE_URL}/goroda/sravnenie` },
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
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span>›</span>
          <Link href="/goroda" className="hover:text-indigo-600">Города</Link>
          <span>›</span>
          <span className="text-slate-600">Сравнение городов</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Сравнение ставок фрилансеров по городам России
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            Ставки фрилансеров в Москве на 30–50% выше региональных. Но где выгоднее
            работать с учётом стоимости жизни? Сравните ставки по парам городов.
          </p>
        </header>

        <div className="grid gap-3">
          {CITY_PAIRS.map(({ city1, city2 }) => {
            const c1 = getCity(city1);
            const c2 = getCity(city2);
            if (!c1 || !c2) return null;
            const diffPct = Math.round(((c1.multiplier - c2.multiplier) / c2.multiplier) * 100);
            return (
              <Link
                key={`${city1}-vs-${city2}`}
                href={`/goroda/sravnenie/${city1}-vs-${city2}`}
                className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group"
              >
                <div>
                  <span className="font-semibold text-slate-800 group-hover:text-indigo-700">
                    {c1.name} vs {c2.name}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {c1.defaultIncome.toLocaleString("ru-RU")} ₽ vs{" "}
                    {c2.defaultIncome.toLocaleString("ru-RU")} ₽/мес
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                    {diffPct > 0 ? "+" : ""}{diffPct}% разница
                  </span>
                  <span className="text-indigo-400 group-hover:text-indigo-600">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        <section className="mt-8 bg-slate-50 rounded-xl p-5 text-sm text-slate-600">
          <h2 className="font-semibold text-slate-800 mb-2">
            Почему ставки различаются по городам?
          </h2>
          <p className="leading-relaxed">
            Ставки фрилансеров зависят от концентрации платёжеспособных заказчиков,
            стоимости жизни и конкуренции на рынке. Московские клиенты готовы платить
            больше, региональные фрилансеры часто работают с удалёнными московскими заказчиками
            по столичным ставкам — и этот разрыв постепенно сокращается.
          </p>
        </section>

        <section className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5">
          <h2 className="font-semibold text-slate-800 text-sm mb-1">
            📊 Ставки по специальностям
          </h2>
          <p className="text-xs text-slate-600 mb-2">
            Рассчитайте свою ставку с учётом специальности, опыта и города.
          </p>
          <Link
            href="/"
            className="text-xs font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-2"
          >
            Открыть калькулятор →
          </Link>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">← Главная</Link>
          &nbsp;·&nbsp;
          <Link href="/goroda" className="hover:text-indigo-600">Все города</Link>
        </footer>
      </main>
    </>
  );
}
