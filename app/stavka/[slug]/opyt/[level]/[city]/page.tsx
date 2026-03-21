import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SPECIALTIES, getSpecialty } from "../../../specialties";
import { CITIES, getCity } from "../../../../../goroda/cities";
import { LEVELS, getLevel, ExperienceLevel } from "../levels";
import SpecialtyCalc from "../../../SpecialtyCalc";
import { SPECIALTY_ARTICLES } from "../../../related-articles";

const BASE_URL = "https://freelancecalc.ru";

type Props = { params: Promise<{ slug: string; level: string; city: string }> };

// Top specialties and cities for static pre-build (reduces build size)
const TOP_SPECIALTIES = [
  "frontend-razrabotchik", "backend-razrabotchik", "fullstack-razrabotchik",
  "dizajner-ui-ux", "kopirayter", "1c-razrabotchik", "php-razrabotchik",
  "python-razrabotchik", "ios-razrabotchik", "android-razrabotchik",
];
const TOP_CITIES = ["moskva", "sankt-peterburg", "novosibirsk", "ekaterinburg", "krasnodar"];

export async function generateStaticParams() {
  const params: { slug: string; level: string; city: string }[] = [];
  for (const spec of SPECIALTIES.filter(s => TOP_SPECIALTIES.includes(s.slug))) {
    for (const lvl of LEVELS) {
      for (const city of CITIES.filter(c => TOP_CITIES.includes(c.slug))) {
        params.push({ slug: spec.slug, level: lvl.slug, city: city.slug });
      }
    }
  }
  return params;
}

// Long-tail slug/level/city combos are SSR on-demand (SEO-safe, crawlable)
export const dynamicParams = true;

/** Parse "1 500–3 000 ₽/час" and apply combined multiplier */
function adjustRate(median: string, multiplier: number): string {
  const matches = [...median.matchAll(/(\d[\d ]*\d|\d+)/g)];
  const nums = matches
    .map((m) => parseInt(m[0].replace(/ /g, ""), 10))
    .filter((n) => n >= 100);
  if (nums.length < 2) return median;
  const [low, high] = nums;
  const adjLow = Math.round((low * multiplier) / 100) * 100;
  const adjHigh = Math.round((high * multiplier) / 100) * 100;
  return `${adjLow.toLocaleString("ru-RU")} – ${adjHigh.toLocaleString("ru-RU")} ₽/час`;
}

function adjustedIncome(base: number, multiplier: number): number {
  return Math.round((base * multiplier) / 1000) * 1000;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, level: levelSlug, city: citySlug } = await params;
  const spec = getSpecialty(slug);
  const lvl = getLevel(levelSlug);
  const city = getCity(citySlug);
  if (!spec || !lvl || !city) return {};

  const role = spec.shortTitle.replace(/^Ставка\s+/i, "");
  const combinedMultiplier = lvl.incomeMultiplier * city.multiplier;
  const rate = adjustRate(spec.medianHourly, combinedMultiplier);

  return {
    title: `Ставка ${lvl.name} ${role} ${city.nameIn} 2026 — FreelanceCalc`,
    description: `Рассчитайте ставку ${lvl.nameRu} ${role.toLowerCase()} ${city.nameIn}. Медианная ставка: ${rate}. Учёт НПД, отпуска и загрузки — калькулятор онлайн.`,
    alternates: { canonical: `/stavka/${slug}/opyt/${levelSlug}/${citySlug}` },
    openGraph: {
      title: `${lvl.name} ${role} ${city.nameIn} — ставка 2026`,
      description: `Медианная ставка ${lvl.nameRu} ${role.toLowerCase()} ${city.nameIn}: ${rate}. Калькулятор с учётом налогов, отпуска и загрузки.`,
      url: `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}/${citySlug}`,
      type: "website",
      locale: "ru_RU",
    },
  };
}

function buildFaq(
  spec: NonNullable<ReturnType<typeof getSpecialty>>,
  lvl: ExperienceLevel,
  city: NonNullable<ReturnType<typeof getCity>>
) {
  const role = spec.shortTitle.replace(/^Ставка\s+/i, "");
  const combinedMultiplier = lvl.incomeMultiplier * city.multiplier;
  const rate = adjustRate(spec.medianHourly, combinedMultiplier);
  const income = adjustedIncome(spec.defaultIncome, combinedMultiplier);
  const incomeStr = income.toLocaleString("ru-RU");

  return [
    {
      q: `Сколько зарабатывает ${lvl.name} ${role} ${city.nameIn}?`,
      a: `Медианная ставка ${lvl.nameRu} ${role.toLowerCase()} ${city.nameIn} составляет ${rate}. При стандартной загрузке 70% и режиме самозанятого это соответствует доходу около ${incomeStr} ₽/месяц на руки. Рассчитайте точную ставку под ваш желаемый доход с помощью калькулятора выше.`,
    },
    {
      q: `Почему ставка ${lvl.name} ${role.toLowerCase()} ${city.nameIn} отличается от Москвы?`,
      a: `Региональный коэффициент для ${city.nameOf} составляет ${city.multiplier.toFixed(2)}x от среднероссийского уровня${city.multiplier < 1.0 ? `, что ниже московских ставок` : ` — это один из наиболее высоких показателей в России`}. Разница обусловлена уровнем жизни, стоимостью аренды и концентрацией платёжеспособных клиентов в регионе.`,
    },
    {
      q: `Как ${lvl.name} ${role.toLowerCase()} ${city.nameIn} может поднять ставку?`,
      a:
        lvl.slug === "junior"
          ? `Для джуниора в ${city.nameOf} ключевой шаг — набор 3–5 реальных проектов в портфолио и переход к работе с юридическими лицами (ставка НПД 6% vs 4%, но клиенты готовы платить больше). Обычно до Middle-уровня специалист доходит за 12–18 месяцев.`
          : lvl.slug === "middle"
          ? `Middle-специалист ${city.nameOf} может повысить ставку за счёт специализации (например, e-commerce или fintech), получения отзывов на ключевых платформах и добавления кейсов с измеримым результатом. Переход к Senior-ставкам — рост на 50–70%.`
          : `Senior-специалисты ${city.nameOf} часто выходят на московских и зарубежных клиентов удалённо — это позволяет работать по московским ставкам (×${(1.4 / city.multiplier).toFixed(1)} к местному рынку). Также выгоден переход к консалтингу и менторству.`,
    },
    {
      q: `Стоит ли ${lvl.nameRu} ${role.toLowerCase()} работать с московскими клиентами из ${city.nameOf}?`,
      a: `Да, удалённая работа с московскими или питерскими компаниями — распространённая стратегия для специалистов из регионов. Ставки в Москве выше на ${Math.round((1.4 / city.multiplier - 1) * 100)}%, при этом стоимость жизни в ${city.nameOf} ниже. Это увеличивает реальный покупательный паритет дохода.`,
    },
  ];
}

export default async function LevelCityPage({ params }: Props) {
  const { slug, level: levelSlug, city: citySlug } = await params;
  const spec = getSpecialty(slug);
  const lvl = getLevel(levelSlug);
  const city = getCity(citySlug);
  if (!spec || !lvl || !city) notFound();

  const role = spec.shortTitle.replace(/^Ставка\s+/i, "");
  const combinedMultiplier = lvl.incomeMultiplier * city.multiplier;
  const adjustedRate = adjustRate(spec.medianHourly, combinedMultiplier);
  const defaultIncome = adjustedIncome(spec.defaultIncome, combinedMultiplier);
  const faqItems = buildFaq(spec, lvl, city);
  const otherLevels = LEVELS.filter((l) => l.slug !== levelSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}/${citySlug}`,
        name: `Ставка ${lvl.name} ${role} ${city.nameIn} 2026`,
        description: `Медианная ставка ${lvl.nameRu} ${role.toLowerCase()} ${city.nameIn}: ${adjustedRate}.`,
        url: `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}/${citySlug}`,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Специальности", item: `${BASE_URL}/stavka` },
            { "@type": "ListItem", position: 3, name: spec.shortTitle, item: `${BASE_URL}/stavka/${slug}` },
            { "@type": "ListItem", position: 4, name: `${lvl.name} уровень`, item: `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}` },
            { "@type": "ListItem", position: 5, name: city.name, item: `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}/${citySlug}` },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
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
          <Link href="/stavka" className="hover:text-indigo-600">Специальности</Link>
          <span>›</span>
          <Link href={`/stavka/${slug}`} className="hover:text-indigo-600">{spec.shortTitle}</Link>
          <span>›</span>
          <Link href={`/stavka/${slug}/opyt/${levelSlug}`} className="hover:text-indigo-600">{lvl.name}</Link>
          <span>›</span>
          <span className="text-slate-600">{city.name}</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Ставка {lvl.name} {role} {city.nameIn}: калькулятор 2026
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            {lvl.context} {spec.intro}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-1.5">
              <span className="text-xs text-indigo-600 font-medium">
                📊 Медиана {lvl.name} {city.nameIn}: <strong>{adjustedRate}</strong>
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              <span className="text-xs text-slate-500">
                🎓 Опыт: <strong>{lvl.yearsLong}</strong>
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              <span className="text-xs text-slate-500">
                🏙 Регион: <strong>{city.name}</strong> (коэф. {city.multiplier.toFixed(2)}x)
              </span>
            </div>
          </div>
        </header>

        {/* Calculator */}
        <SpecialtyCalc
          defaultIncome={defaultIncome}
          defaultHours={spec.defaultHours}
          defaultLoad={spec.defaultLoad}
          specialty={`${lvl.name} ${role} ${city.nameIn}`}
        />

        {/* Level comparison in this city */}
        <section className="mt-8">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Ставки {role.toLowerCase()} по уровням опыта {city.nameIn}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Уровень</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Опыт</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Медиана {city.nameIn}</th>
                </tr>
              </thead>
              <tbody>
                {LEVELS.map((l) => (
                  <tr
                    key={l.slug}
                    className={`border-b border-slate-100 last:border-0 ${l.slug === levelSlug ? "bg-indigo-50" : "hover:bg-slate-50"}`}
                  >
                    <td className="px-4 py-3">
                      {l.slug === levelSlug ? (
                        <span className="font-semibold text-indigo-700">{l.name} ←</span>
                      ) : (
                        <Link href={`/stavka/${slug}/opyt/${l.slug}/${citySlug}`} className="text-indigo-600 hover:underline">
                          {l.name}
                        </Link>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-500">{l.years}</td>
                    <td className="px-4 py-3 font-medium text-slate-800">
                      {adjustRate(spec.medianHourly, l.incomeMultiplier * city.multiplier)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Частые вопросы</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden group"
              >
                <summary className="w-full text-left px-5 py-4 flex justify-between items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                  <span className="text-sm font-semibold text-slate-800">{item.q}</span>
                  <span className="text-slate-400 text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Navigation: other levels in same city */}
        <section className="mt-8">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Другие уровни — {role} {city.nameIn}
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherLevels.map((l) => (
              <Link
                key={l.slug}
                href={`/stavka/${slug}/opyt/${l.slug}/${citySlug}`}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {l.name} {role} {city.nameIn} ({l.years})
              </Link>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="mt-8 border-t border-slate-100 pt-6">
          <h2 className="text-base font-semibold text-slate-700 mb-3">Читайте по теме</h2>
          <ul className="space-y-2">
            <li>
              <Link href={`/stavka/${slug}/opyt/${levelSlug}`} className="text-sm text-indigo-600 hover:underline">
                Ставка {lvl.name} {role} — все города
              </Link>
            </li>
            <li>
              <Link href={`/stavka/${slug}/${citySlug}`} className="text-sm text-indigo-600 hover:underline">
                {spec.shortTitle} {city.nameIn} — все уровни
              </Link>
            </li>
            <li>
              <Link href={`/stavka/${slug}`} className="text-sm text-indigo-600 hover:underline">
                {spec.title} — полный обзор
              </Link>
            </li>
            {SPECIALTY_ARTICLES[slug] && (
              <li>
                <Link href={SPECIALTY_ARTICLES[slug].href} className="text-sm text-indigo-600 hover:underline font-medium">
                  {SPECIALTY_ARTICLES[slug].title}
                </Link>
              </li>
            )}
            <li>
              <Link href="/rukovodstvo" className="text-sm text-indigo-600 hover:underline">
                Как рассчитать ставку фрилансера: полное руководство 2026
              </Link>
            </li>
          </ul>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">← Главная</Link>
          &nbsp;·&nbsp;
          <Link href={`/stavka/${slug}/opyt/${levelSlug}`} className="hover:text-indigo-600">
            {lvl.name} {role}
          </Link>
          &nbsp;·&nbsp;
          <Link href={`/goroda/${citySlug}`} className="hover:text-indigo-600">
            {city.name}
          </Link>
        </footer>
      </main>
    </>
  );
}
