import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SPECIALTIES, getSpecialty } from "../specialties";
import { CITIES, getCity } from "../../../goroda/cities";
import SpecialtyCalc from "../SpecialtyCalc";

const BASE_URL = "https://freelancecalc-one.vercel.app";

type Props = { params: Promise<{ slug: string; city: string }> };

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const spec of SPECIALTIES) {
    for (const city of CITIES) {
      params.push({ slug: spec.slug, city: city.slug });
    }
  }
  return params;
}

/** Parse "1 500–3 000 ₽/час" style strings → { low, high } numbers */
function parseRateRange(median: string): { low: number; high: number } | null {
  const nums = [...median.matchAll(/(\d[\d\s]*\d|\d+)/g)]
    .map((m) => parseInt(m[0].replace(/\s/g, ""), 10))
    .filter((n) => n >= 100);
  if (nums.length < 2) return null;
  return { low: nums[0], high: nums[1] };
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

function adjustedIncome(baseIncome: number, multiplier: number): number {
  return Math.round((baseIncome * multiplier) / 1000) * 1000;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const spec = getSpecialty(slug);
  const city = getCity(citySlug);
  if (!spec || !city) return {};

  const adjustedRate = adjustRate(spec.medianHourly, city.multiplier);

  return {
    title: `${spec.shortTitle} ${city.nameIn} 2026 — FreelanceCalc`,
    description: `Рассчитайте часовую ставку ${spec.shortTitle.toLowerCase()} ${city.nameIn} с учётом налогов и загрузки. Медианная ставка ${city.nameIn}: ${adjustedRate}.`,
    alternates: { canonical: `/stavka/${slug}/${citySlug}` },
    openGraph: {
      title: `${spec.shortTitle} ${city.nameIn} 2026`,
      description: `Медианная ставка ${spec.shortTitle.toLowerCase()} ${city.nameIn}: ${adjustedRate}. Калькулятор с учётом НПД, отпуска и загрузки.`,
      url: `${BASE_URL}/stavka/${slug}/${citySlug}`,
      type: "website",
      locale: "ru_RU",
    },
  };
}

export default async function SpecialtyCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const spec = getSpecialty(slug);
  const city = getCity(citySlug);
  if (!spec || !city) notFound();

  const adjustedRate = adjustRate(spec.medianHourly, city.multiplier);
  const defaultIncome = adjustedIncome(spec.defaultIncome, city.multiplier);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stavka/${slug}/${citySlug}`,
        name: `${spec.shortTitle} ${city.nameIn} 2026`,
        description: `Рассчитайте часовую ставку ${spec.shortTitle.toLowerCase()} ${city.nameIn} с учётом налогов и загрузки.`,
        url: `${BASE_URL}/stavka/${slug}/${citySlug}`,
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
              name: "Ставки по специальностям",
              item: `${BASE_URL}/stavka`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: spec.shortTitle,
              item: `${BASE_URL}/stavka/${slug}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: city.name,
              item: `${BASE_URL}/stavka/${slug}/${citySlug}`,
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Сколько берёт ${spec.shortTitle} ${city.nameIn}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Медианная ставка ${spec.shortTitle.toLowerCase()} ${city.nameIn} составляет ${adjustedRate}. Ставка зависит от опыта, специализации и загрузки. Рассчитайте вашу личную ставку с учётом желаемого дохода через калькулятор выше.`,
            },
          },
          {
            "@type": "Question",
            name: `Как рассчитать ставку ${spec.shortTitle.toLowerCase()} ${city.nameIn}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Введите желаемый чистый доход в месяц (рекомендуемая точка для ${city.name} — ${defaultIncome.toLocaleString("ru-RU")} ₽), выберите налоговый режим (самозанятый 4–6% или ИП 6% + взносы), укажите рабочие часы и загрузку. Калькулятор автоматически учтёт налоги, отпуск и нерабочее время.`,
            },
          },
          {
            "@type": "Question",
            name: `Чем ставка ${spec.shortTitle.toLowerCase()} ${city.nameIn} отличается от московской?`,
            acceptedAnswer: {
              "@type": "Answer",
              text:
                city.multiplier >= 1.3
                  ? `${city.name} — один из двух городов России с ставками, близкими к московским. Разрыв минимален для ${spec.shortTitle.toLowerCase()}.`
                  : `Ставки ${spec.shortTitle.toLowerCase()} ${city.nameOf} в среднем на ${Math.round((1.4 / city.multiplier - 1) * 100)}% ниже московских. Однако стоимость жизни также значительно ниже.`,
            },
          },
        ],
      },
    ],
  };

  const baseRange = parseRateRange(spec.medianHourly);
  const occupationJsonLd = baseRange
    ? {
        "@context": "https://schema.org",
        "@type": "Occupation",
        name: spec.shortTitle.replace(/^Ставка\s+/i, ""),
        description: `Ставка ${spec.shortTitle.toLowerCase()} ${city.nameIn} с учётом регионального коэффициента ${city.multiplier}.`,
        occupationLocation: {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "Country", name: "Russia" },
        },
        estimatedSalary: [
          {
            "@type": "MonetaryAmountDistribution",
            name: "hourly rate",
            currency: "RUB",
            duration: "PT1H",
            percentile10: Math.round(baseRange.low * city.multiplier * 0.7 / 100) * 100,
            median: Math.round(((baseRange.low + baseRange.high) / 2) * city.multiplier / 100) * 100,
            percentile90: Math.round(baseRange.high * city.multiplier * 1.2 / 100) * 100,
          },
        ],
      }
    : null;

  const otherCities = CITIES.filter((c) => c.slug !== citySlug);
  const otherSpecialties = SPECIALTIES.filter((s) => s.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {occupationJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(occupationJsonLd) }}
        />
      )}

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">
            FreelanceCalc
          </Link>
          <span>›</span>
          <Link href="/stavka" className="hover:text-indigo-600">
            Специальности
          </Link>
          <span>›</span>
          <Link href={`/stavka/${slug}`} className="hover:text-indigo-600">
            {spec.shortTitle}
          </Link>
          <span>›</span>
          <span className="text-slate-600">{city.name}</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {spec.shortTitle} {city.nameIn}: ставка и калькулятор 2026
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            {spec.intro} {city.intro}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-1.5">
              <span className="text-xs text-indigo-600 font-medium">
                📊 Медиана {city.nameIn}: <strong>{adjustedRate}</strong>
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              <span className="text-xs text-slate-500">
                📍 Коэффициент рынка: <strong>×{city.multiplier}</strong> от среднего
              </span>
            </div>
          </div>
        </header>

        {/* Calculator pre-filled for specialty + city */}
        <SpecialtyCalc
          defaultIncome={defaultIncome}
          defaultHours={spec.defaultHours}
          defaultLoad={spec.defaultLoad}
          specialty={`${spec.shortTitle} ${city.nameIn}`}
        />

        {/* FAQ */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-bold text-slate-800">
            Часто задаваемые вопросы
          </h2>
          <div className="bg-slate-50 rounded-xl p-5 space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-slate-800">
                Сколько берёт {spec.shortTitle} {city.nameIn}?
              </h3>
              <p className="mt-1 text-slate-600 leading-relaxed">
                Медианная ставка {spec.shortTitle.toLowerCase()} {city.nameIn}{" "}
                составляет <strong>{adjustedRate}</strong>. Реальная ставка
                зависит от опыта, технологического стека и загрузки. Используйте
                калькулятор выше, чтобы рассчитать ставку под ваш желаемый доход.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Как рассчитать ставку {spec.shortTitle.toLowerCase()} {city.nameIn}?
              </h3>
              <p className="mt-1 text-slate-600 leading-relaxed">
                Введите желаемый чистый доход (рекомендуемая точка входа для{" "}
                {city.name} — {defaultIncome.toLocaleString("ru-RU")} ₽/мес),
                выберите налоговый режим, укажите рабочие часы и загрузку.
                Калькулятор учтёт НПД, отпуск и нерабочее время.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">
                Чем ставки {city.nameOf} отличаются от московских?
              </h3>
              <p className="mt-1 text-slate-600 leading-relaxed">
                {city.multiplier >= 1.3
                  ? `${city.name} — один из ведущих рынков России. Ставки ${spec.shortTitle.toLowerCase()} здесь близки к московским.`
                  : `Ставки ${spec.shortTitle.toLowerCase()} ${city.nameOf} в среднем на ${Math.round((1.4 / city.multiplier - 1) * 100)}% ниже московских. При этом стоимость жизни ниже — реальная покупательная способность остаётся высокой.`}
              </p>
            </div>
          </div>
        </section>

        {/* Same specialty in other cities */}
        <section className="mt-10">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            {spec.shortTitle} в других городах
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/stavka/${slug}/${c.slug}`}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Other specialties in same city */}
        <section className="mt-6">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Другие специальности {city.nameIn}
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherSpecialties.slice(0, 10).map((s) => (
              <Link
                key={s.slug}
                href={`/stavka/${s.slug}/${citySlug}`}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {s.shortTitle}
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
            Главная
          </Link>
          &nbsp;·&nbsp;
          <Link href={`/stavka/${slug}`} className="hover:text-indigo-600">
            {spec.shortTitle} (все города)
          </Link>
          &nbsp;·&nbsp;
          <Link href={`/goroda/${citySlug}`} className="hover:text-indigo-600">
            Все специальности {city.nameIn}
          </Link>
        </footer>
      </main>
    </>
  );
}
