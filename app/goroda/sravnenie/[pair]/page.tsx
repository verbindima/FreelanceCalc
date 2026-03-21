import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCity } from "../../cities";
import { CITY_PAIRS } from "../page";

const BASE_URL = "https://freelancecalc-one.vercel.app";

// Base median hourly rates (Middle level, national average)
const SPECIALTIES = [
  { name: "Frontend разработчик", slug: "frontend-razrabotchik", baseRate: 3000 },
  { name: "Backend разработчик", slug: "backend-razrabotchik", baseRate: 3500 },
  { name: "UI/UX дизайнер", slug: "ui-ux-dizajner", baseRate: 2500 },
  { name: "SEO-специалист", slug: "seo-specialist", baseRate: 2000 },
  { name: "Копирайтер", slug: "kopirayter", baseRate: 1500 },
];

type Props = { params: Promise<{ pair: string }> };

export function generateStaticParams() {
  return CITY_PAIRS.map(({ city1, city2 }) => ({
    pair: `${city1}-vs-${city2}`,
  }));
}

function parsePair(pair: string): [string, string] | null {
  const idx = pair.indexOf("-vs-");
  if (idx === -1) return null;
  return [pair.slice(0, idx), pair.slice(idx + 4)];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) return {};
  const [c1Slug, c2Slug] = parsed;
  const city1 = getCity(c1Slug);
  const city2 = getCity(c2Slug);
  if (!city1 || !city2) return {};

  return {
    title: `Ставки фрилансеров: ${city1.name} vs ${city2.name} 2026 — FreelanceCalc`,
    description: `Сравнение почасовых ставок IT-фрилансеров ${city1.nameIn} и ${city2.nameIn}. Разница в доходах разработчиков, дизайнеров и маркетологов по городам. Таблица 2026.`,
    keywords: [
      `ставки фрилансеров ${city1.name} ${city2.name}`,
      `фриланс ${city1.name} или ${city2.name}`,
      `сравнение ставок ${city1.nameOf} и ${city2.nameOf}`,
      `зарплата фрилансера ${city1.nameIn} ${city2.nameIn}`,
    ],
    alternates: { canonical: `/goroda/sravnenie/${pair}` },
    openGraph: {
      title: `Ставки фрилансеров: ${city1.name} vs ${city2.name} 2026`,
      description: `Разница в ставках IT-фрилансеров ${city1.nameIn} и ${city2.nameIn}: таблица по специальностям, калькулятор.`,
      url: `${BASE_URL}/goroda/sravnenie/${pair}`,
      type: "article",
      locale: "ru_RU",
      siteName: "FreelanceCalc",
    },
  };
}

export default async function CityComparisonPage({ params }: Props) {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) notFound();
  const [c1Slug, c2Slug] = parsed!;
  const city1 = getCity(c1Slug);
  const city2 = getCity(c2Slug);
  if (!city1 || !city2) notFound();

  const tableData = SPECIALTIES.map((spec) => {
    const rate1 = Math.round((spec.baseRate * city1.multiplier) / 100) * 100;
    const rate2 = Math.round((spec.baseRate * city2.multiplier) / 100) * 100;
    const diffPct = Math.round(((rate1 - rate2) / rate2) * 100);
    return { ...spec, rate1, rate2, diffPct };
  });

  const overallDiff = Math.round(((city1.multiplier - city2.multiplier) / city2.multiplier) * 100);
  const winner = city1.multiplier >= city2.multiplier ? city1 : city2;
  const loser = city1.multiplier < city2.multiplier ? city1 : city2;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Где выше ставки фрилансеров — в ${city1.nameIn} или ${city2.nameIn}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Ставки ${winner.nameOf} выше — на ${Math.abs(overallDiff)}% по сравнению с ${loser.nameOf}. Медианный доход фрилансера ${winner.nameIn} — ${winner.defaultIncome.toLocaleString("ru-RU")} ₽/мес, ${loser.nameIn} — ${loser.defaultIncome.toLocaleString("ru-RU")} ₽/мес.`,
            },
          },
          {
            "@type": "Question",
            name: `Сколько зарабатывает Frontend-разработчик ${city1.nameIn} в 2026 году?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Медианная ставка Middle Frontend-разработчика ${city1.nameIn} — ${(Math.round((3000 * city1.multiplier) / 100) * 100).toLocaleString("ru-RU")} ₽/час. Ежемесячный доход при полной загрузке (160 ч/мес) — ${(Math.round((3000 * city1.multiplier) / 100) * 100 * 160).toLocaleString("ru-RU")} ₽.`,
            },
          },
          {
            "@type": "Question",
            name: `В каком городе лучше работать фрилансером — ${city1.nameIn} или ${city2.nameIn}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `По уровню ставок выигрывает ${winner.name} (+${Math.abs(overallDiff)}%). Однако нужно учитывать стоимость жизни: ставки ${winner.name} выше, но и расходы на жильё и жизнь тоже. ${loser.name} привлекателен для фрилансеров, работающих с удалёнными заказчиками — меньше расходов при почти сопоставимом рыночном доходе.`,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Ставки по городам", item: `${BASE_URL}/goroda` },
          { "@type": "ListItem", position: 3, name: "Сравнение городов", item: `${BASE_URL}/goroda/sravnenie` },
          {
            "@type": "ListItem",
            position: 4,
            name: `${city1.name} vs ${city2.name}`,
            item: `${BASE_URL}/goroda/sravnenie/${pair}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
              FreelanceCalc
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/goroda" className="hover:text-blue-600">Города</Link></li>
              <li>/</li>
              <li><Link href="/goroda/sravnenie" className="hover:text-blue-600">Сравнение городов</Link></li>
              <li>/</li>
              <li className="text-gray-700">{city1.name} vs {city2.name}</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ставки фрилансеров: {city1.name} vs {city2.name} — сравнение 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>5 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Ставки фрилансеров {city1.nameIn} и {city2.nameIn} различаются на{" "}
            <strong>{Math.abs(overallDiff)}%</strong>.{" "}
            {overallDiff > 0
              ? `${city1.name} опережает по ставкам: медианный доход — ${city1.defaultIncome.toLocaleString("ru-RU")} ₽/мес против ${city2.defaultIncome.toLocaleString("ru-RU")} ₽/мес ${city2.nameIn}.`
              : overallDiff < 0
              ? `${city2.name} опережает по ставкам: медианный доход — ${city2.defaultIncome.toLocaleString("ru-RU")} ₽/мес против ${city1.defaultIncome.toLocaleString("ru-RU")} ₽/мес ${city1.nameIn}.`
              : `Ставки в обоих городах практически одинаковы — около ${city1.defaultIncome.toLocaleString("ru-RU")} ₽/мес.`}
            {" "}Разбираем по специальностям с таблицей и калькулятором.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою точную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите специальность, опыт и выберите город — получите персональный расчёт
              с учётом налогов и загрузки.
            </p>
            <a
              href={BASE_URL}
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>

          {/* Summary cards */}
          <section className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-500 mb-1">{city1.name}</p>
              <p className="text-3xl font-bold text-gray-900">
                {city1.defaultIncome.toLocaleString("ru-RU")} ₽
              </p>
              <p className="text-xs text-gray-400 mt-1">медиана/месяц</p>
              <p className="text-sm font-medium text-indigo-600 mt-2">
                Коэффициент рынка: ×{city1.multiplier.toFixed(2)}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-500 mb-1">{city2.name}</p>
              <p className="text-3xl font-bold text-gray-900">
                {city2.defaultIncome.toLocaleString("ru-RU")} ₽
              </p>
              <p className="text-xs text-gray-400 mt-1">медиана/месяц</p>
              <p className="text-sm font-medium text-indigo-600 mt-2">
                Коэффициент рынка: ×{city2.multiplier.toFixed(2)}
              </p>
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Сравнение ставок по специальностям: {city1.name} vs {city2.name}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Специальность</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">
                      {city1.name} ₽/час
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700">
                      {city2.name} ₽/час
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">
                      Разница
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tableData.map((row) => (
                    <tr key={row.slug} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <Link
                          href={`/stavka/${row.slug}`}
                          className="hover:text-blue-600 hover:underline"
                        >
                          {row.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-blue-700">
                        {row.rate1.toLocaleString("ru-RU")} ₽
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-green-700">
                        {row.rate2.toLocaleString("ru-RU")} ₽
                      </td>
                      <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            row.diffPct > 0
                              ? "bg-blue-100 text-blue-700"
                              : row.diffPct < 0
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {row.diffPct > 0 ? "+" : ""}{row.diffPct}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки Middle-уровня. Месячный доход = ставка × 160 ч. Данные Q1 2026.
            </p>
          </section>

          {/* Specialty × city cross-links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Калькуляторы по специальностям и городам
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {SPECIALTIES.map((spec) => (
                <div key={spec.slug} className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 mb-2 text-sm">{spec.name}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Link
                      href={`/stavka/${spec.slug}/${c1Slug}`}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Ставка {city1.nameIn} →
                    </Link>
                    <Link
                      href={`/stavka/${spec.slug}/${c2Slug}`}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Ставка {city2.nameIn} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* City context */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Рынок фриланса: {city1.name} и {city2.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">{city1.name}</h3>
                <p className="text-sm text-blue-800 leading-relaxed">{city1.intro}</p>
                <Link
                  href={`/goroda/${c1Slug}`}
                  className="inline-block mt-3 text-xs font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2"
                >
                  Все ставки {city1.nameOf} →
                </Link>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">{city2.name}</h3>
                <p className="text-sm text-green-800 leading-relaxed">{city2.intro}</p>
                <Link
                  href={`/goroda/${c2Slug}`}
                  className="inline-block mt-3 text-xs font-semibold text-green-700 hover:text-green-800 underline underline-offset-2"
                >
                  Все ставки {city2.nameOf} →
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Где выше ставки фрилансеров — в {city1.nameIn} или {city2.nameIn}?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ставки {winner.nameOf} выше на {Math.abs(overallDiff)}%. Медианный доход{" "}
                  {winner.nameIn} — {winner.defaultIncome.toLocaleString("ru-RU")} ₽/мес,{" "}
                  {loser.nameIn} — {loser.defaultIncome.toLocaleString("ru-RU")} ₽/мес.
                  Разница обусловлена концентрацией крупных заказчиков и платёжеспособным спросом.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает Frontend-разработчик {city1.nameIn} в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Middle Frontend-разработчик {city1.nameIn} берёт{" "}
                  {(Math.round((3000 * city1.multiplier) / 100) * 100).toLocaleString("ru-RU")} ₽/час.
                  При 160 рабочих часах в месяц доход составит{" "}
                  {(Math.round((3000 * city1.multiplier) / 100) * 100 * 160).toLocaleString("ru-RU")} ₽.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  В каком городе лучше работать фрилансером — {city1.nameIn} или {city2.nameIn}?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  По ставкам выигрывает {winner.name}. Однако {loser.name} привлекателен для
                  фрилансеров, работающих с удалёнными заказчиками: при более низких расходах
                  на жизнь доход в рублях практически сопоставим. Оптимальная стратегия — работать
                  с московскими клиентами по московским ставкам из любого города.
                </p>
              </div>
            </div>
          </section>

          {/* Other comparisons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Другие сравнения городов</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {CITY_PAIRS.filter(
                (p) =>
                  !(p.city1 === c1Slug && p.city2 === c2Slug) &&
                  !(p.city1 === c2Slug && p.city2 === c1Slug)
              )
                .slice(0, 6)
                .map(({ city1: s1, city2: s2 }) => {
                  const ca = getCity(s1);
                  const cb = getCity(s2);
                  if (!ca || !cb) return null;
                  return (
                    <Link
                      key={`${s1}-${s2}`}
                      href={`/goroda/sravnenie/${s1}-vs-${s2}`}
                      className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors"
                    >
                      <p className="font-semibold text-gray-900 text-sm">
                        {ca.name} vs {cb.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {ca.defaultIncome.toLocaleString("ru-RU")} ₽ vs{" "}
                        {cb.defaultIncome.toLocaleString("ru-RU")} ₽/мес →
                      </p>
                    </Link>
                  );
                })}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте свою ставку за 30 секунд</h2>
            <p className="text-blue-100 mb-6">
              Калькулятор учтёт специализацию, опыт, город, налоги и загрузку.
            </p>
            <a
              href={BASE_URL}
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор бесплатно →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
