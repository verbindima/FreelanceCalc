import type { Metadata } from "next";
import Link from "next/link";
import EmployeeCostCalc from "./EmployeeCostCalc";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Калькулятор реальной стоимости сотрудника 2026 — сколько стоит нанять работника",
  description:
    "Считайте реальную стоимость штатного сотрудника для работодателя: оклад + НДФЛ + страховые взносы 30% + отпускные + оборудование + офис. Сравните с фрилансером.",
  keywords: [
    "стоимость сотрудника работодателю",
    "во сколько обходится сотрудник",
    "реальная стоимость работника",
    "страховые взносы работодателя",
    "стоимость найма сотрудника",
    "фрилансер vs штатный сотрудник стоимость",
    "калькулятор стоимости сотрудника",
    "сколько работодатель платит за сотрудника",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/instrumenty/kalkulator-stoimosti-sotrudnika" },
  openGraph: {
    title: "Калькулятор реальной стоимости сотрудника 2026",
    description:
      "Сотрудник с окладом 100 000 ₽ стоит работодателю ≈150 000 ₽/мес — без учёта офиса и оборудования. Посчитайте свой случай.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/instrumenty/kalkulator-stoimosti-sotrudnika`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Калькулятор реальной стоимости сотрудника",
      description:
        "Онлайн-калькулятор полной стоимости штатного сотрудника для работодателя: оклад, НДФЛ, страховые взносы, отпускные, оборудование и сравнение с фрилансером.",
      url: `${BASE_URL}/instrumenty/kalkulator-stoimosti-sotrudnika`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Инструменты", item: `${BASE_URL}/instrumenty` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Стоимость сотрудника",
          item: `${BASE_URL}/instrumenty/kalkulator-stoimosti-sotrudnika`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько реально стоит сотрудник работодателю?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Сотрудник с окладом 100 000 ₽ gross обходится работодателю около 147–160 000 ₽ в месяц с учётом страховых взносов (30,2%), отпускных (11% annual), больничных (1,5%), и дополнительных расходов. Реальная стоимость = оклад × 1,45–1,65.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько страховых взносов платит работодатель?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Работодатель платит 30,2% от фонда оплаты труда: ПФР 22%, ФОМС 5,1%, ФСС 2,9%, взносы на травматизм 0,2%. Эти взносы платит работодатель — дополнительно к окладу сотрудника.",
          },
        },
        {
          "@type": "Question",
          name: "Фрилансер или штатный сотрудник — что выгоднее для работодателя?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Фрилансер при ставке до 70–80% от расходов на штатного сотрудника обычно выгоднее: нет страховых взносов (30%), нет отпускных, нет оборудования, нет офисных расходов. Фрилансер сам платит налоги (4–6% НПД). Калькулятор помогает сравнить оба варианта.",
          },
        },
      ],
    },
  ],
};

export default function EmployeeCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Главная</Link>
          <span>›</span>
          <Link href="/instrumenty" className="hover:text-indigo-600 transition-colors">Инструменты</Link>
          <span>›</span>
          <span className="text-slate-600">Стоимость сотрудника</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Для работодателей и фрилансеров · Данные 2026
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
            Калькулятор реальной стоимости сотрудника
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Оклад — это только часть расходов. Работодатель платит ещё страховые взносы
            (30,2%), отпускные, больничные, расходы на рабочее место и найм.
            Узнайте полную стоимость — и сравните с фрилансером.
          </p>

          {/* Key fact */}
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
            <p className="text-sm font-semibold text-amber-800">
              💡 Факт: сотрудник с окладом 100 000 ₽ обходится работодателю ≈ 147 000–165 000 ₽/мес
            </p>
            <p className="text-xs text-amber-600 mt-1">
              При этом сотрудник получает «на руки» только 87 000 ₽ (после НДФЛ 13%).
            </p>
          </div>
        </header>

        <EmployeeCostCalc />
      </main>
    </>
  );
}
