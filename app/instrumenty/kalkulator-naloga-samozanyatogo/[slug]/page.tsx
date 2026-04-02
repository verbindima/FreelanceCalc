import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TaxCalc from "../TaxCalc";
import { SPECIALTIES } from "@/app/stavka/[slug]/specialties";

const BASE_URL = "https://freelancecalc.ru";

export async function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === slug);
  if (!specialty) return {};

  const monthlyTax = Math.round(specialty.defaultIncome * 0.06);
  const netIncome = specialty.defaultIncome - monthlyTax;

  return {
    title: `Калькулятор налога самозанятого: ${specialty.shortTitle} — НПД онлайн`,
    description: `Рассчитайте налог самозанятого для ${specialty.shortTitle.toLowerCase()}. При доходе ${specialty.defaultIncome.toLocaleString("ru-RU")} ₽/мес НПД составит ~${monthlyTax.toLocaleString("ru-RU")} ₽ (на руки ${netIncome.toLocaleString("ru-RU")} ₽). Бонус первого года, лимит 2 400 000 ₽.`,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/instrumenty/kalkulator-naloga-samozanyatogo/${slug}`,
    },
    openGraph: {
      title: `Налог самозанятого: ${specialty.shortTitle}`,
      description: `НПД 4–6% для ${specialty.shortTitle.toLowerCase()}. Расчёт онлайн с учётом бонуса первого года и лимита 2.4М₽.`,
      type: "website",
      locale: "ru_RU",
      url: `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo/${slug}`,
      siteName: "FreelanceCalc",
    },
  };
}

function fmt(n: number): string {
  return new Intl.NumberFormat("ru-RU").format(n) + " ₽";
}

export default async function TaxCalcSpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === slug);
  if (!specialty) notFound();

  const taxRate6 = 0.06;
  const taxRate4 = 0.04;
  const monthlyTax6 = Math.round(specialty.defaultIncome * taxRate6);
  const monthlyTax4 = Math.round(specialty.defaultIncome * taxRate4);
  const netIncome6 = specialty.defaultIncome - monthlyTax6;
  const annualIncome = specialty.defaultIncome * 12;
  const annualTax6 = Math.round(annualIncome * taxRate6);
  const isNearLimit = annualIncome > 1_800_000;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Калькулятор налога самозанятого: ${specialty.shortTitle}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo/${slug}`,
    description: `Расчёт НПД для ${specialty.shortTitle.toLowerCase()} на фрилансе`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Инструменты",
          item: `${BASE_URL}/instrumenty`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Калькулятор налога самозанятого",
          item: `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: specialty.shortTitle,
          item: `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo/${slug}`,
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

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-blue-600 font-bold text-lg">
              FreelanceCalc
            </Link>
            <nav className="text-sm text-gray-500 flex gap-1 items-center flex-wrap justify-end">
              <Link href="/instrumenty" className="hover:text-blue-600">
                Инструменты
              </Link>
              <span>/</span>
              <Link
                href="/instrumenty/kalkulator-naloga-samozanyatogo"
                className="hover:text-blue-600"
              >
                Налог СЗ
              </Link>
              <span>/</span>
              <span className="text-gray-800">{specialty.shortTitle}</span>
            </nav>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          {/* Hero */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Налог самозанятого: {specialty.shortTitle}
            </h1>
            <p className="text-gray-600 text-lg">
              При типичном доходе {fmt(specialty.defaultIncome)}/мес НПД составит{" "}
              <strong>{fmt(monthlyTax6)}</strong> (ставка 6%, клиенты-компании).
              На руки остаётся{" "}
              <strong className="text-green-700">{fmt(netIncome6)}</strong>.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {fmt(monthlyTax4)}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                НПД 4%
                <br />
                (физлица)
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {fmt(monthlyTax6)}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                НПД 6%
                <br />
                (компании)
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center">
              <div className="text-2xl font-bold text-gray-800">
                {fmt(annualTax6)}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                НПД 6%
                <br />в год
              </div>
            </div>
          </div>

          {isNearLimit && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
              <div className="font-semibold text-amber-800 text-sm">
                ⚠️ Внимание: близко к лимиту 2 400 000 ₽/год
              </div>
              <div className="text-amber-700 text-xs mt-1">
                При доходе {fmt(specialty.defaultIncome)}/мес годовой доход составит{" "}
                {fmt(annualIncome)}, что близко к лимиту самозанятого. Рассмотрите переход на ИП УСН
                6% — без лимита и с теми же ставками.
              </div>
            </div>
          )}

          {/* Calculator */}
          <TaxCalc initialIncome={specialty.defaultIncome} />

          {/* Article */}
          <article className="mt-10 prose prose-gray max-w-none">
            <h2>
              НПД для {specialty.shortTitle.toLowerCase()}: что нужно знать
            </h2>
            <p>
              {specialty.intro} Статус самозанятого — самый простой способ
              легально получать оплату от клиентов. Налог рассчитывается
              автоматически в приложении «Мой налог» и платится раз в месяц.
            </p>

            <h3>Типичная налоговая нагрузка</h3>
            <p>
              При медианном доходе {specialty.shortTitle.toLowerCase()} в{" "}
              {fmt(specialty.defaultIncome)}/мес:
            </p>
            <ul>
              <li>
                <strong>НПД 4%</strong> (клиенты — физические лица):{" "}
                {fmt(monthlyTax4)}/мес → на руки{" "}
                {fmt(specialty.defaultIncome - monthlyTax4)}
              </li>
              <li>
                <strong>НПД 6%</strong> (клиенты — компании и ИП):{" "}
                {fmt(monthlyTax6)}/мес → на руки {fmt(netIncome6)}
              </li>
            </ul>
            <p>
              Большинство{" "}
              {specialty.shortTitle.toLowerCase().endsWith("а") ||
              specialty.shortTitle.toLowerCase().endsWith("а-")
                ? "специалистов"
                : "фрилансеров"}{" "}
              работают с компаниями (юрлицами), поэтому применяется ставка 6%.
              Бонус первого года снижает её до 4% до исчерпания вычета 10 000 ₽.
            </p>

            <h3>Самозанятый или ИП: что выгоднее</h3>
            <p>
              Самозанятость выгодна при доходе до 2 400 000 ₽ в год (~200 000
              ₽/мес). Если вы стабильно зарабатываете больше — рассмотрите ИП
              УСН «Доходы» (6%, без лимита, возможность нанимать сотрудников).
            </p>
            <p>
              Преимущества самозанятости для{" "}
              {specialty.shortTitle.toLowerCase()}:
            </p>
            <ul>
              <li>Нет обязательных страховых взносов (~50 000 ₽/год у ИП)</li>
              <li>Простая регистрация через «Мой налог» за 5 минут</li>
              <li>Налог только с реально полученных денег</li>
              <li>Ставка ниже, чем НДФЛ 13% по ГПХ</li>
            </ul>
          </article>

          {/* CTA to rate calc */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <div className="font-semibold text-gray-800 mb-1">
              Знаете налог — посчитайте правильную ставку
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Чтобы получать {fmt(specialty.defaultIncome)}/мес на руки с учётом
              налогов, отпуска и загрузки — посчитайте вашу часовую ставку.
              Медианная ставка {specialty.shortTitle.toLowerCase()}: {specialty.medianHourly}.
            </p>
            <Link
              href={`/stavka/${slug}?utm_source=tax_calc&utm_medium=internal&utm_campaign=specialty_tax`}
              className="inline-block bg-blue-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors text-sm"
            >
              Рассчитать ставку {specialty.shortTitle.toLowerCase()} →
            </Link>
          </div>

          {/* Other specialties */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">
              Другие специальности
            </h3>
            <div className="flex flex-wrap gap-2">
              {SPECIALTIES.filter((s) => s.slug !== slug)
                .slice(0, 10)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/instrumenty/kalkulator-naloga-samozanyatogo/${s.slug}`}
                    className="text-sm bg-gray-50 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 rounded-lg px-3 py-1.5 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
            </div>
          </div>

          {/* Nav */}
          <div className="mt-6 flex gap-3">
            <Link
              href="/instrumenty/kalkulator-naloga-samozanyatogo"
              className="text-sm text-blue-600 hover:underline"
            >
              ← Калькулятор налога самозанятого
            </Link>
            <span className="text-gray-300">·</span>
            <Link
              href="/instrumenty"
              className="text-sm text-blue-600 hover:underline"
            >
              Все инструменты
            </Link>
          </div>
        </main>

        <footer className="border-t border-gray-100 mt-16 py-8 text-center text-sm text-gray-400">
          <p>
            © 2026{" "}
            <Link href="/" className="hover:text-blue-500">
              FreelanceCalc
            </Link>{" "}
            — калькулятор ставки и налогов для фрилансера
          </p>
        </footer>
      </div>
    </>
  );
}
