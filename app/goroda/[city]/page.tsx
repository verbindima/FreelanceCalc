import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCity } from "../cities";
import { SPECIALTIES } from "../../stavka/[slug]/specialties";
import SpecialtyCalc from "../../stavka/[slug]/SpecialtyCalc";

const BASE_URL = "https://freelancecalc-one.vercel.app";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  return {
    title: `Ставка фрилансера ${city.nameIn} 2026 — калькулятор и цены | FreelanceCalc`,
    description: city.description,
    alternates: { canonical: `/goroda/${citySlug}` },
    openGraph: {
      title: `Ставка фрилансера ${city.nameIn} 2026`,
      description: city.description,
      url: `${BASE_URL}/goroda/${citySlug}`,
      type: "website",
      locale: "ru_RU",
    },
  };
}

/** Parse "1 500–3 000 ₽/час" style strings and apply city multiplier */
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

const TOP_SPECIALTY_SLUGS = [
  "frontend-razrabotchik",
  "backend-razrabotchik",
  "mobilnyj-razrabotchik",
  "dizajner-ui-ux",
  "python-razrabotchik",
  "devops-inzhener",
  "data-analyst",
  "seo-specialist",
  "smm-specialist",
  "kopirayter",
];

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const topSpecs = TOP_SPECIALTY_SLUGS.map((slug) =>
    SPECIALTIES.find((s) => s.slug === slug)
  ).filter(Boolean) as typeof SPECIALTIES;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Ставка фрилансера ${city.nameIn}`,
    description: city.description,
    url: `${BASE_URL}/goroda/${citySlug}`,
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
        {
          "@type": "ListItem",
          position: 3,
          name: city.name,
          item: `${BASE_URL}/goroda/${citySlug}`,
        },
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Сколько берёт фрилансер ${city.nameIn}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Медианная ставка фрилансера ${city.nameIn} зависит от специальности. IT-разработчики берут от ${adjustRate("2 000–4 000 ₽/час", city.multiplier)}, дизайнеры — от ${adjustRate("800–2 000 ₽/час", city.multiplier)}, маркетологи — от ${adjustRate("700–1 500 ₽/час", city.multiplier)}.`,
          },
        },
        {
          "@type": "Question",
          name: `Как рассчитать часовую ставку фрилансера ${city.nameIn}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Введите желаемый чистый доход в месяц (рекомендуемая точка входа для ${city.name} — ${city.defaultIncome.toLocaleString("ru-RU")} ₽), выберите налоговый режим, укажите количество рабочих часов и загрузку. Калькулятор учтёт налоги, отпуск и нерабочее время.`,
          },
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
          <Link href="/goroda" className="hover:text-indigo-600">
            Города
          </Link>
          <span>›</span>
          <span className="text-slate-600">{city.name}</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Ставка фрилансера {city.nameIn}: калькулятор и цены 2026
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            {city.intro}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-1.5">
            <span className="text-xs text-indigo-600 font-medium">
              📍 Медианный доход {city.nameIn}:{" "}
              <strong>~{city.defaultIncome.toLocaleString("ru-RU")} ₽/мес</strong>
            </span>
          </div>
        </header>

        {/* Calculator pre-filled for this city */}
        <SpecialtyCalc
          defaultIncome={city.defaultIncome}
          defaultHours={6}
          defaultLoad={70}
          specialty={`фрилансер ${city.nameIn}`}
        />

        {/* Rates Table */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">
            Медианные ставки по специальностям {city.nameIn}
          </h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">
                    Специальность
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600">
                    Медиана {city.nameIn}
                  </th>
                </tr>
              </thead>
              <tbody>
                {topSpecs.map((spec, i) => (
                  <tr
                    key={spec.slug}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={`/stavka/${spec.slug}`}
                        className="text-indigo-600 hover:text-indigo-800 hover:underline"
                      >
                        {spec.shortTitle}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right text-slate-700 font-medium tabular-nums">
                      {adjustRate(spec.medianHourly, city.multiplier)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            * Рассчитано на основе медианных данных по России с поправкой на
            региональный рынок {city.nameOf}. Данные обновлены в марте 2026.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-bold text-slate-800">
            Часто задаваемые вопросы
          </h2>
          <div className="bg-slate-50 rounded-xl p-5 space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-slate-800">
                Сколько берёт фрилансер {city.nameIn}?
              </h3>
              <p className="mt-1 text-slate-600 leading-relaxed">
                IT-специалисты зарабатывают от{" "}
                {adjustRate("2 000–4 000 ₽/час", city.multiplier)}, дизайнеры —
                от {adjustRate("800–2 000 ₽/час", city.multiplier)}, маркетологи
                и SMM — от {adjustRate("700–1 500 ₽/час", city.multiplier)}.
                Ставка зависит от опыта, специализации и загрузки.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Как рассчитать часовую ставку {city.nameIn}?
              </h3>
              <p className="mt-1 text-slate-600 leading-relaxed">
                Используйте калькулятор выше: введите желаемый чистый доход
                (рекомендуемая точка входа для {city.name} —{" "}
                {city.defaultIncome.toLocaleString("ru-RU")} ₽/мес), выберите
                налоговый режим, укажите рабочие часы и загрузку. Калькулятор
                автоматически учтёт налоги, отпуск и нерабочее время.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Чем ставки {city.nameOf} отличаются от московских?
              </h3>
              <p className="mt-1 text-slate-600 leading-relaxed">
                {city.multiplier >= 1.3
                  ? `${city.name} — один из двух городов России с ставками, близкими к московским. Разрыв минимален.`
                  : city.multiplier >= 1.0
                  ? `Ставки ${city.nameOf} на ${Math.round((1.4 / city.multiplier - 1) * 100)}% ниже московских, но стоимость жизни тоже ниже — реальный доход сопоставим.`
                  : `Ставки ${city.nameOf} в среднем на ${Math.round((1.4 / city.multiplier - 1) * 100)}% ниже московских. Однако стоимость жизни значительно ниже, что делает фриланс в ${city.name} привлекательным.`}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Какой налоговый режим выбрать фрилансеру {city.nameIn}?
              </h3>
              <p className="mt-1 text-slate-600 leading-relaxed">
                Большинство фрилансеров {city.nameIn} работают как самозанятые
                (НПД 4% с физлицами, 6% с юрлицами) — это самый простой
                вариант. При доходе выше 2,4 млн ₽/год нужно переходить на ИП
                УСН. Калькулятор поддерживает все режимы.
              </p>
            </div>
          </div>
        </section>

        {/* Other Cities */}
        <section className="mt-10">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Ставки в других городах
          </h2>
          <div className="flex flex-wrap gap-2">
            {CITIES.filter((c) => c.slug !== citySlug).map((c) => (
              <Link
                key={c.slug}
                href={`/goroda/${c.slug}`}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">
            ← Главная
          </Link>
          &nbsp;·&nbsp;
          <Link href="/goroda" className="hover:text-indigo-600">
            Все города
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
