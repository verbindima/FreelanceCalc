import { Metadata } from "next";
import Link from "next/link";
import { getCity } from "../cities";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const CITY_PAIRS = [
  { city1: "moskva", city2: "sankt-peterburg" },
  { city1: "moskva", city2: "ekaterinburg" },
  { city1: "moskva", city2: "novosibirsk" },
  { city1: "moskva", city2: "kazan" },
  { city1: "moskva", city2: "krasnodar" },
  { city1: "moskva", city2: "samara" },
  { city1: "moskva", city2: "nizhnij-novgorod" },
  { city1: "moskva", city2: "rostov-na-donu" },
  { city1: "moskva", city2: "krasnojarsk" },
  { city1: "moskva", city2: "perm" },
  { city1: "moskva", city2: "ufa" },
  { city1: "moskva", city2: "voronezh" },
  { city1: "moskva", city2: "chelyabinsk" },
  { city1: "moskva", city2: "omsk" },
  { city1: "moskva", city2: "volgograd" },
  { city1: "moskva", city2: "tyumen" },
  { city1: "moskva", city2: "tomsk" },
  { city1: "moskva", city2: "vladivostok" },
  { city1: "moskva", city2: "irkutsk" },
  { city1: "moskva", city2: "saratov" },
  { city1: "moskva", city2: "khabarovsk" },
  { city1: "moskva", city2: "togliatti" },
  { city1: "moskva", city2: "barnaul" },
  { city1: "sankt-peterburg", city2: "ekaterinburg" },
  { city1: "sankt-peterburg", city2: "novosibirsk" },
  { city1: "sankt-peterburg", city2: "kazan" },
  { city1: "sankt-peterburg", city2: "krasnodar" },
  { city1: "sankt-peterburg", city2: "samara" },
  { city1: "sankt-peterburg", city2: "nizhnij-novgorod" },
  { city1: "sankt-peterburg", city2: "rostov-na-donu" },
  { city1: "sankt-peterburg", city2: "krasnojarsk" },
  { city1: "sankt-peterburg", city2: "perm" },
  { city1: "sankt-peterburg", city2: "ufa" },
  { city1: "sankt-peterburg", city2: "voronezh" },
  { city1: "sankt-peterburg", city2: "chelyabinsk" },
  { city1: "sankt-peterburg", city2: "omsk" },
  { city1: "sankt-peterburg", city2: "volgograd" },
  { city1: "sankt-peterburg", city2: "tyumen" },
  { city1: "sankt-peterburg", city2: "tomsk" },
  { city1: "sankt-peterburg", city2: "vladivostok" },
  { city1: "sankt-peterburg", city2: "irkutsk" },
  { city1: "sankt-peterburg", city2: "saratov" },
  { city1: "sankt-peterburg", city2: "khabarovsk" },
  { city1: "sankt-peterburg", city2: "togliatti" },
  { city1: "sankt-peterburg", city2: "barnaul" },
  { city1: "ekaterinburg", city2: "novosibirsk" },
  { city1: "ekaterinburg", city2: "kazan" },
  { city1: "ekaterinburg", city2: "krasnodar" },
  { city1: "ekaterinburg", city2: "samara" },
  { city1: "ekaterinburg", city2: "nizhnij-novgorod" },
  { city1: "ekaterinburg", city2: "rostov-na-donu" },
  { city1: "ekaterinburg", city2: "krasnojarsk" },
  { city1: "ekaterinburg", city2: "perm" },
  { city1: "ekaterinburg", city2: "ufa" },
  { city1: "ekaterinburg", city2: "voronezh" },
  { city1: "ekaterinburg", city2: "chelyabinsk" },
  { city1: "ekaterinburg", city2: "omsk" },
  { city1: "ekaterinburg", city2: "volgograd" },
  { city1: "ekaterinburg", city2: "tyumen" },
  { city1: "ekaterinburg", city2: "tomsk" },
  { city1: "ekaterinburg", city2: "vladivostok" },
  { city1: "ekaterinburg", city2: "irkutsk" },
  { city1: "ekaterinburg", city2: "saratov" },
  { city1: "ekaterinburg", city2: "khabarovsk" },
  { city1: "ekaterinburg", city2: "togliatti" },
  { city1: "ekaterinburg", city2: "barnaul" },
  { city1: "novosibirsk", city2: "kazan" },
  { city1: "novosibirsk", city2: "krasnodar" },
  { city1: "novosibirsk", city2: "samara" },
  { city1: "novosibirsk", city2: "nizhnij-novgorod" },
  { city1: "novosibirsk", city2: "rostov-na-donu" },
  { city1: "novosibirsk", city2: "krasnojarsk" },
  { city1: "novosibirsk", city2: "perm" },
  { city1: "novosibirsk", city2: "ufa" },
  { city1: "novosibirsk", city2: "voronezh" },
  { city1: "novosibirsk", city2: "chelyabinsk" },
  { city1: "novosibirsk", city2: "omsk" },
  { city1: "novosibirsk", city2: "volgograd" },
  { city1: "novosibirsk", city2: "tyumen" },
  { city1: "novosibirsk", city2: "tomsk" },
  { city1: "novosibirsk", city2: "vladivostok" },
  { city1: "novosibirsk", city2: "irkutsk" },
  { city1: "novosibirsk", city2: "saratov" },
  { city1: "novosibirsk", city2: "khabarovsk" },
  { city1: "novosibirsk", city2: "togliatti" },
  { city1: "novosibirsk", city2: "barnaul" },
  { city1: "kazan", city2: "krasnodar" },
  { city1: "kazan", city2: "samara" },
  { city1: "kazan", city2: "nizhnij-novgorod" },
  { city1: "kazan", city2: "rostov-na-donu" },
  { city1: "kazan", city2: "krasnojarsk" },
  { city1: "kazan", city2: "perm" },
  { city1: "kazan", city2: "ufa" },
  { city1: "kazan", city2: "voronezh" },
  { city1: "kazan", city2: "chelyabinsk" },
  { city1: "kazan", city2: "omsk" },
  { city1: "kazan", city2: "volgograd" },
  { city1: "kazan", city2: "tyumen" },
  { city1: "kazan", city2: "tomsk" },
  { city1: "kazan", city2: "vladivostok" },
  { city1: "kazan", city2: "irkutsk" },
  { city1: "kazan", city2: "saratov" },
  { city1: "kazan", city2: "khabarovsk" },
  { city1: "kazan", city2: "togliatti" },
  { city1: "kazan", city2: "barnaul" },
  { city1: "krasnodar", city2: "samara" },
  { city1: "krasnodar", city2: "nizhnij-novgorod" },
  { city1: "krasnodar", city2: "rostov-na-donu" },
  { city1: "krasnodar", city2: "krasnojarsk" },
  { city1: "krasnodar", city2: "perm" },
  { city1: "krasnodar", city2: "ufa" },
  { city1: "krasnodar", city2: "voronezh" },
  { city1: "krasnodar", city2: "chelyabinsk" },
  { city1: "krasnodar", city2: "omsk" },
  { city1: "krasnodar", city2: "volgograd" },
  { city1: "krasnodar", city2: "tyumen" },
  { city1: "krasnodar", city2: "tomsk" },
  { city1: "krasnodar", city2: "vladivostok" },
  { city1: "krasnodar", city2: "irkutsk" },
  { city1: "krasnodar", city2: "saratov" },
  { city1: "krasnodar", city2: "khabarovsk" },
  { city1: "krasnodar", city2: "togliatti" },
  { city1: "krasnodar", city2: "barnaul" },
  { city1: "samara", city2: "nizhnij-novgorod" },
  { city1: "samara", city2: "rostov-na-donu" },
  { city1: "samara", city2: "krasnojarsk" },
  { city1: "samara", city2: "perm" },
  { city1: "samara", city2: "ufa" },
  { city1: "samara", city2: "voronezh" },
  { city1: "samara", city2: "chelyabinsk" },
  { city1: "samara", city2: "omsk" },
  { city1: "samara", city2: "volgograd" },
  { city1: "samara", city2: "tyumen" },
  { city1: "samara", city2: "tomsk" },
  { city1: "samara", city2: "vladivostok" },
  { city1: "samara", city2: "irkutsk" },
  { city1: "samara", city2: "saratov" },
  { city1: "samara", city2: "khabarovsk" },
  { city1: "samara", city2: "togliatti" },
  { city1: "samara", city2: "barnaul" },
  { city1: "nizhnij-novgorod", city2: "rostov-na-donu" },
  { city1: "nizhnij-novgorod", city2: "krasnojarsk" },
  { city1: "nizhnij-novgorod", city2: "perm" },
  { city1: "nizhnij-novgorod", city2: "ufa" },
  { city1: "nizhnij-novgorod", city2: "voronezh" },
  { city1: "nizhnij-novgorod", city2: "chelyabinsk" },
  { city1: "nizhnij-novgorod", city2: "omsk" },
  { city1: "nizhnij-novgorod", city2: "volgograd" },
  { city1: "nizhnij-novgorod", city2: "tyumen" },
  { city1: "nizhnij-novgorod", city2: "tomsk" },
  { city1: "nizhnij-novgorod", city2: "vladivostok" },
  { city1: "nizhnij-novgorod", city2: "irkutsk" },
  { city1: "nizhnij-novgorod", city2: "saratov" },
  { city1: "nizhnij-novgorod", city2: "khabarovsk" },
  { city1: "nizhnij-novgorod", city2: "togliatti" },
  { city1: "nizhnij-novgorod", city2: "barnaul" },
  { city1: "rostov-na-donu", city2: "krasnojarsk" },
  { city1: "rostov-na-donu", city2: "perm" },
  { city1: "rostov-na-donu", city2: "ufa" },
  { city1: "rostov-na-donu", city2: "voronezh" },
  { city1: "rostov-na-donu", city2: "chelyabinsk" },
  { city1: "rostov-na-donu", city2: "omsk" },
  { city1: "rostov-na-donu", city2: "volgograd" },
  { city1: "rostov-na-donu", city2: "tyumen" },
  { city1: "rostov-na-donu", city2: "tomsk" },
  { city1: "rostov-na-donu", city2: "vladivostok" },
  { city1: "rostov-na-donu", city2: "irkutsk" },
  { city1: "rostov-na-donu", city2: "saratov" },
  { city1: "rostov-na-donu", city2: "khabarovsk" },
  { city1: "rostov-na-donu", city2: "togliatti" },
  { city1: "rostov-na-donu", city2: "barnaul" },
  { city1: "krasnojarsk", city2: "perm" },
  { city1: "krasnojarsk", city2: "ufa" },
  { city1: "krasnojarsk", city2: "voronezh" },
  { city1: "krasnojarsk", city2: "chelyabinsk" },
  { city1: "krasnojarsk", city2: "omsk" },
  { city1: "krasnojarsk", city2: "volgograd" },
  { city1: "krasnojarsk", city2: "tyumen" },
  { city1: "krasnojarsk", city2: "tomsk" },
  { city1: "krasnojarsk", city2: "vladivostok" },
  { city1: "krasnojarsk", city2: "irkutsk" },
  { city1: "krasnojarsk", city2: "saratov" },
  { city1: "krasnojarsk", city2: "khabarovsk" },
  { city1: "krasnojarsk", city2: "togliatti" },
  { city1: "krasnojarsk", city2: "barnaul" },
  { city1: "perm", city2: "ufa" },
  { city1: "perm", city2: "voronezh" },
  { city1: "perm", city2: "chelyabinsk" },
  { city1: "perm", city2: "omsk" },
  { city1: "perm", city2: "volgograd" },
  { city1: "perm", city2: "tyumen" },
  { city1: "perm", city2: "tomsk" },
  { city1: "perm", city2: "vladivostok" },
  { city1: "perm", city2: "irkutsk" },
  { city1: "perm", city2: "saratov" },
  { city1: "perm", city2: "khabarovsk" },
  { city1: "perm", city2: "togliatti" },
  { city1: "perm", city2: "barnaul" },
  { city1: "ufa", city2: "voronezh" },
  { city1: "ufa", city2: "chelyabinsk" },
  { city1: "ufa", city2: "omsk" },
  { city1: "ufa", city2: "volgograd" },
  { city1: "ufa", city2: "tyumen" },
  { city1: "ufa", city2: "tomsk" },
  { city1: "ufa", city2: "vladivostok" },
  { city1: "ufa", city2: "irkutsk" },
  { city1: "ufa", city2: "saratov" },
  { city1: "ufa", city2: "khabarovsk" },
  { city1: "ufa", city2: "togliatti" },
  { city1: "ufa", city2: "barnaul" },
  { city1: "voronezh", city2: "chelyabinsk" },
  { city1: "voronezh", city2: "omsk" },
  { city1: "voronezh", city2: "volgograd" },
  { city1: "voronezh", city2: "tyumen" },
  { city1: "voronezh", city2: "tomsk" },
  { city1: "voronezh", city2: "vladivostok" },
  { city1: "voronezh", city2: "irkutsk" },
  { city1: "voronezh", city2: "saratov" },
  { city1: "voronezh", city2: "khabarovsk" },
  { city1: "voronezh", city2: "togliatti" },
  { city1: "voronezh", city2: "barnaul" },
  { city1: "chelyabinsk", city2: "omsk" },
  { city1: "chelyabinsk", city2: "volgograd" },
  { city1: "chelyabinsk", city2: "tyumen" },
  { city1: "chelyabinsk", city2: "tomsk" },
  { city1: "chelyabinsk", city2: "vladivostok" },
  { city1: "chelyabinsk", city2: "irkutsk" },
  { city1: "chelyabinsk", city2: "saratov" },
  { city1: "chelyabinsk", city2: "khabarovsk" },
  { city1: "chelyabinsk", city2: "togliatti" },
  { city1: "chelyabinsk", city2: "barnaul" },
  { city1: "omsk", city2: "volgograd" },
  { city1: "omsk", city2: "tyumen" },
  { city1: "omsk", city2: "tomsk" },
  { city1: "omsk", city2: "vladivostok" },
  { city1: "omsk", city2: "irkutsk" },
  { city1: "omsk", city2: "saratov" },
  { city1: "omsk", city2: "khabarovsk" },
  { city1: "omsk", city2: "togliatti" },
  { city1: "omsk", city2: "barnaul" },
  { city1: "volgograd", city2: "tyumen" },
  { city1: "volgograd", city2: "tomsk" },
  { city1: "volgograd", city2: "vladivostok" },
  { city1: "volgograd", city2: "irkutsk" },
  { city1: "volgograd", city2: "saratov" },
  { city1: "volgograd", city2: "khabarovsk" },
  { city1: "volgograd", city2: "togliatti" },
  { city1: "volgograd", city2: "barnaul" },
  { city1: "tyumen", city2: "tomsk" },
  { city1: "tyumen", city2: "vladivostok" },
  { city1: "tyumen", city2: "irkutsk" },
  { city1: "tyumen", city2: "saratov" },
  { city1: "tyumen", city2: "khabarovsk" },
  { city1: "tyumen", city2: "togliatti" },
  { city1: "tyumen", city2: "barnaul" },
  { city1: "tomsk", city2: "vladivostok" },
  { city1: "tomsk", city2: "irkutsk" },
  { city1: "tomsk", city2: "saratov" },
  { city1: "tomsk", city2: "khabarovsk" },
  { city1: "tomsk", city2: "togliatti" },
  { city1: "tomsk", city2: "barnaul" },
  { city1: "vladivostok", city2: "irkutsk" },
  { city1: "vladivostok", city2: "saratov" },
  { city1: "vladivostok", city2: "khabarovsk" },
  { city1: "vladivostok", city2: "togliatti" },
  { city1: "vladivostok", city2: "barnaul" },
  { city1: "irkutsk", city2: "saratov" },
  { city1: "irkutsk", city2: "khabarovsk" },
  { city1: "irkutsk", city2: "togliatti" },
  { city1: "irkutsk", city2: "barnaul" },
  { city1: "saratov", city2: "khabarovsk" },
  { city1: "saratov", city2: "togliatti" },
  { city1: "saratov", city2: "barnaul" },
  { city1: "khabarovsk", city2: "togliatti" },
  { city1: "khabarovsk", city2: "barnaul" },
  { city1: "togliatti", city2: "barnaul" },
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
