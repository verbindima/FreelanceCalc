import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SPECIALTIES, getSpecialty, Specialty } from "./specialties";
import { CITIES } from "../../goroda/cities";
import { LEVELS } from "./opyt/[level]/levels";
import SpecialtyCalc from "./SpecialtyCalc";

// TODO: switch to custom domain once purchased & configured in Vercel
const BASE_URL = "https://freelancecalc-one.vercel.app";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  if (!spec) return {};
  return {
    title: `${spec.shortTitle} — FreelanceCalc`,
    description: spec.description,
    alternates: { canonical: `/stavka/${slug}` },
    openGraph: {
      title: `${spec.shortTitle} — FreelanceCalc`,
      description: spec.description,
      url: `${BASE_URL}/stavka/${slug}`,
      type: "website",
      locale: "ru_RU",
    },
  };
}

/** Parse "1 500–3 000 ₽/час" → { low, high } */
function parseRateRange(median: string): { low: number; high: number } | null {
  const nums = [...median.matchAll(/(\d[\d\s]*\d|\d+)/g)]
    .map((m) => parseInt(m[0].replace(/\s/g, ""), 10))
    .filter((n) => n >= 100);
  if (nums.length < 2) return null;
  return { low: nums[0], high: nums[1] };
}

/** Generate 4 specialty-specific FAQ items from structured data */
function buildSpecialtyFaq(spec: Specialty) {
  const name = spec.shortTitle; // e.g. "Ставка Frontend-разработчика"
  const role = name.replace(/^Ставка\s+/i, ""); // "Frontend-разработчика"
  const median = spec.medianHourly;
  const income = new Intl.NumberFormat("ru-RU").format(spec.defaultIncome);

  return [
    {
      q: `Сколько берёт ${role} за час работы?`,
      a: `Медианная ставка ${role} на фрилансе в России — ${median}. Конкретная сумма зависит от опыта, технологического стека и региона. Используйте калькулятор на этой странице, чтобы рассчитать свою ставку, исходя из желаемого дохода ${income} ₽/мес и налогового режима.`,
    },
    {
      q: `Как рассчитать ставку ${role}?`,
      a: `Формула: (желаемый чистый доход ÷ (1 − ставка налога)) × 12 ÷ (рабочие дни в год × часов в день × коэффициент загрузки). Для самозанятого с клиентами-компаниями ставка НПД — 6%, загрузка — 65–75%. Калькулятор выше автоматизирует весь расчёт.`,
    },
    {
      q: `Почему ставка ${role}-фрилансера выше, чем в найме?`,
      a: `Фрилансер самостоятельно оплачивает налоги (4–6% НПД или 6% УСН + взносы для ИП), отпуск и больничные — без гарантированной оплаты. Часть времени уходит на поиск заказов и переговоры. Чтобы получать «на руки» столько же, сколько сотрудник в найме, ставка должна быть в 1,5–2 раза выше.`,
    },
    {
      q: `Какой налог платит ${role} на фрилансе?`,
      a: `Большинство фрилансеров выбирают самозанятость (НПД): 4% при работе с физлицами, 6% с компаниями. Лимит — 2,4 млн ₽/год. При более высоких доходах переходят на ИП УСН 6% + фиксированные страховые взносы (~50 000 ₽/год). Калькулятор учитывает оба режима.`,
    },
  ];
}

export default async function SpecialtyPage({ params }: Props) {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  if (!spec) notFound();

  const faqItems = buildSpecialtyFaq(spec);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": spec.title,
    "description": spec.description,
    "url": `${BASE_URL}/stavka/${slug}`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "FreelanceCalc", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Ставки по специальностям", "item": `${BASE_URL}/stavka` },
        { "@type": "ListItem", "position": 3, "name": spec.shortTitle, "item": `${BASE_URL}/stavka/${slug}` },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  const rateRange = parseRateRange(spec.medianHourly);
  const occupationJsonLd = rateRange
    ? {
        "@context": "https://schema.org",
        "@type": "Occupation",
        name: spec.shortTitle.replace(/^Ставка\s+/i, ""),
        description: spec.description,
        occupationLocation: {
          "@type": "Country",
          name: "Russia",
        },
        estimatedSalary: [
          {
            "@type": "MonetaryAmountDistribution",
            name: "hourly rate",
            currency: "RUB",
            duration: "PT1H",
            percentile10: Math.round(rateRange.low * 0.7 / 100) * 100,
            median: Math.round((rateRange.low + rateRange.high) / 2 / 100) * 100,
            percentile90: Math.round(rateRange.high * 1.2 / 100) * 100,
          },
        ],
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span>›</span>
          <span>Ставки по специальностям</span>
          <span>›</span>
          <span className="text-slate-600">{spec.shortTitle}</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {spec.title}
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            {spec.intro}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-1.5">
            <span className="text-xs text-indigo-600 font-medium">
              📊 Медианная ставка: <strong>{spec.medianHourly}</strong>
            </span>
          </div>
        </header>

        {/* Calculator pre-filled for this specialty */}
        <SpecialtyCalc
          defaultIncome={spec.defaultIncome}
          defaultHours={spec.defaultHours}
          defaultLoad={spec.defaultLoad}
          specialty={spec.shortTitle}
        />

        {/* Benchmark upsell — hot zone right after user sees their rate */}
        <section className="mt-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">📊 Полный бенчмарк Q1 2026</p>
            <p className="text-sm font-bold text-slate-900 mb-1">
              Ставки {spec.shortTitle} по 10 городам России
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Москва, СПб + Новосибирск, Екатеринбург, Казань, Краснодар и 4 города.
              Джун / мид / сеньор. <span className="text-red-600 font-medium">С 7 апреля — 349 ₽.</span>
            </p>
          </div>
          <Link
            href="/benchmark"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap shadow-sm"
          >
            Открыть за 249 ₽ →
          </Link>
        </section>

        {/* Links by experience level */}
        <section className="mt-10">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            {spec.shortTitle} по уровню опыта
          </h2>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map((lvl) => (
              <Link
                key={lvl.slug}
                href={`/stavka/${slug}/opyt/${lvl.slug}`}
                className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-100 px-3 py-1.5 rounded-full transition-colors font-medium"
              >
                {lvl.name} · {lvl.years}
              </Link>
            ))}
          </div>
        </section>

        {/* Links to this specialty by city */}
        <section className="mt-6">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            {spec.shortTitle} по городам
          </h2>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((c) => (
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

        {/* FAQ Section — visible content required for FAQPage rich snippets */}
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

        {/* Links to other specialties */}
        <section className="mt-6">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Другие специальности
          </h2>
          <div className="flex flex-wrap gap-2">
            {SPECIALTIES.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                href={`/stavka/${s.slug}`}
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
            ← Главная
          </Link>
        </footer>
      </main>
    </>
  );
}
