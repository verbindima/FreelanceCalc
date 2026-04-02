import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCity } from "../cities";
import { SPECIALTIES } from "../../stavka/[slug]/specialties";
import SpecialtyCalc from "../../stavka/[slug]/SpecialtyCalc";
import { BENCHMARK_PRICE, showUrgency } from "@/lib/price";

const BASE_URL = "https://freelancecalc.ru";

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

/** Extract the lower hourly number from strings like "1 500–3 000 ₽/час" */
function extractLowRate(median: string): number {
  const nums = [...median.matchAll(/(\d[\d ]*\d|\d+)/g)]
    .map((m) => parseInt(m[0].replace(/ /g, ""), 10))
    .filter((n) => n >= 100);
  return nums[0] ?? 0;
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  // All specialties sorted by city-adjusted rate (highest first)
  const sortedSpecs = [...SPECIALTIES].sort(
    (a, b) =>
      extractLowRate(b.medianHourly) * city.multiplier -
      extractLowRate(a.medianHourly) * city.multiplier
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/goroda/${citySlug}`,
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
      },
      {
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
          {
            "@type": "Question",
            name: `Чем ставки ${city.nameOf} отличаются от московских?`,
            acceptedAnswer: {
              "@type": "Answer",
              text:
                city.multiplier >= 1.3
                  ? `${city.name} — один из двух городов России с ставками, близкими к московским. Разрыв минимален.`
                  : city.multiplier >= 1.0
                  ? `Ставки ${city.nameOf} на ${Math.round((1.4 / city.multiplier - 1) * 100)}% ниже московских, но стоимость жизни тоже ниже — реальный доход сопоставим.`
                  : `Ставки ${city.nameOf} в среднем на ${Math.round((1.4 / city.multiplier - 1) * 100)}% ниже московских. Однако стоимость жизни значительно ниже, что делает фриланс в ${city.name} привлекательным.`,
            },
          },
          {
            "@type": "Question",
            name: `Какой налоговый режим выбрать фрилансеру ${city.nameIn}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Большинство фрилансеров ${city.nameIn} работают как самозанятые (НПД 4% с физлицами, 6% с юрлицами) — это самый простой вариант. При доходе выше 2,4 млн ₽/год нужно переходить на ИП УСН. Калькулятор поддерживает все режимы.`,
            },
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

        {/* Benchmark upsell — hot zone right after city calculator */}
        <section className="mt-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">📊 Полный бенчмарк Q1 2026</p>
            <p className="text-sm font-bold text-slate-900 mb-1">
              Ставки всех специальностей {city.nameIn} — таблица PDF
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              26 специальностей × 10 городов, включая {city.name}. Джун / мид / сеньор.{showUrgency && <>{" "}<span className="text-red-600 font-medium">С 7 апреля — 349 ₽.</span></>}
            </p>
          </div>
          <Link
            href="/benchmark"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap shadow-sm"
          >
            Открыть за {BENCHMARK_PRICE} ₽ →
          </Link>
        </section>

        {/* Rates Table */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-800 mb-1">
            Ставки всех специальностей {city.nameIn}
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            {sortedSpecs.length} специальностей · отсортировано по убыванию ставки
          </p>
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
                {sortedSpecs.map((spec, i) => (
                  <tr
                    key={spec.slug}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={`/stavka/${spec.slug}/${citySlug}`}
                        className="text-indigo-600 hover:text-indigo-800 hover:underline"
                      >
                        {spec.shortTitle.replace(/^Ставка\s+/i, "")}
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
            * Медианные ставки по России с поправкой на региональный рынок {city.nameOf}. Данные обновлены в марте 2026.
            Нажмите на специальность, чтобы открыть калькулятор с городскими настройками.
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

        {/* Related articles */}
        <section className="mt-8 border-t border-slate-100 pt-6">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Читайте по теме
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/rukovodstvo" className="text-sm text-indigo-600 hover:underline">
                Как рассчитать ставку фрилансера: полное руководство 2026
              </Link>
            </li>
            <li>
              <Link href="/stati/srednyaya-stavka-frilansera-2026" className="text-sm text-indigo-600 hover:underline">
                Средняя ставка фрилансера в России 2026: таблица по 22 специальностям
              </Link>
            </li>
            <li>
              <Link href="/stati/kak-povysit-stavku-frilansera" className="text-sm text-indigo-600 hover:underline">
                Как повысить ставку фрилансера: 7 проверенных способов
              </Link>
            </li>
          </ul>
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
