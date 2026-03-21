import type { Metadata } from "next";
import Link from "next/link";
import CommissionCalc from "./CommissionCalc";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Калькулятор комиссии биржи фрилансеров — Kwork, FL.ru, Хабр 2026",
  description:
    "Сколько забирает Kwork, FL.ru или Хабр Фриланс с каждого заказа? Рассчитайте комиссию биржи + налог самозанятого — и узнайте, сколько вы теряете за год.",
  keywords: [
    "комиссия kwork",
    "комиссия fl.ru",
    "сколько берет kwork комиссию",
    "комиссия биржи фрилансеров",
    "калькулятор комиссии фриланс биржа",
    "kwork сколько процентов берет",
    "fl.ru комиссия процент",
    "хабр фриланс комиссия",
    "комиссия фриланс платформ россия",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/instrumenty/kalkulator-komissii-birzhi" },
  openGraph: {
    title: "Калькулятор комиссии биржи фрилансеров — Kwork, FL.ru, Хабр 2026",
    description:
      "Kwork берёт 20%, FL.ru — 10–20%. Посчитайте, сколько вы реально получаете после комиссии и налогов. И сколько теряете за год.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/instrumenty/kalkulator-komissii-birzhi`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${BASE_URL}/instrumenty/kalkulator-komissii-birzhi`,
      name: "Калькулятор комиссии биржи фрилансеров",
      description:
        "Рассчитайте комиссию Kwork, FL.ru, Хабр Фриланс, YouDo — и сколько вы получаете после всех удержаний.",
      url: `${BASE_URL}/instrumenty/kalkulator-komissii-birzhi`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "ru",
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      featureList: [
        "Расчёт комиссии Kwork (20%)",
        "Расчёт комиссии FL.ru (10–20%)",
        "Расчёт комиссии Хабр Фриланс (10%)",
        "Учёт НПД самозанятого 4% и 6%",
        "Сравнительная таблица всех платформ",
        "Расчёт годовых потерь",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Инструменты", item: `${BASE_URL}/instrumenty` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Калькулятор комиссии биржи",
          item: `${BASE_URL}/instrumenty/kalkulator-komissii-birzhi`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт Kwork комиссию?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kwork берёт 20% с каждого заказа. Это фиксированная комиссия — независимо от суммы и категории услуги. Если клиент оплатил 10 000 ₽, исполнитель получает 8 000 ₽.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько берёт FL.ru комиссию?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FL.ru берёт от 10% до 20% в зависимости от рейтинга фрилансера. У новых аккаунтов комиссия выше. Средняя комиссия — около 15%.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли платить налог с комиссии биржи?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятый платит НПД только с суммы, которую реально получил — то есть уже после вычета комиссии биржи. Если проект стоил 10 000 ₽, Kwork забрал 2 000 ₽, то налог 6% = 480 ₽ считается с 8 000 ₽.",
          },
        },
        {
          "@type": "Question",
          name: "Как компенсировать комиссию биржи в цене?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Чтобы получить желаемую сумму после комиссии 20%, нужно поднять цену на 25% (делить на 0.8). При комиссии 15% — поднять на 18% (делить на 0.85). Калькулятор автоматически показывает нужную сумму договора.",
          },
        },
      ],
    },
  ],
};

export default function KalkulyatorKomissiiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 font-semibold hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/instrumenty" className="text-gray-500 hover:text-blue-600">
              Инструменты
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">Комиссия биржи</span>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          {/* Hero */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              📉 Kwork забирает 20% с каждого заказа
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Сколько биржа забирает с ваших проектов
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Рассчитайте комиссию <strong>Kwork, FL.ru, Хабр Фриланс</strong> и узнайте,
              сколько вы реально получаете после всех удержаний — и сколько теряете за год.
            </p>
          </div>

          {/* Calculator */}
          <CommissionCalc />

          {/* SEO text block */}
          <article className="mt-10 prose prose-slate max-w-none text-sm">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Комиссии фриланс-бирж в 2026 году
            </h2>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-5">
              <div className="grid grid-cols-1 gap-3">
                {[
                  { name: "Kwork", commission: "20%", detail: "Фиксированная для всех категорий услуг" },
                  { name: "FL.ru", commission: "10–20%", detail: "Зависит от рейтинга фрилансера" },
                  { name: "Хабр Фриланс", commission: "10%", detail: "Фиксированная для всех проектов" },
                  { name: "YouDo", commission: "15%", detail: "Для большинства категорий услуг" },
                  { name: "Upwork", commission: "20%", detail: "До $500 с клиента, затем 10% и 5%" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                    <div>
                      <span className="font-semibold text-slate-800">{item.name}</span>
                      <span className="text-xs text-slate-400 ml-2">{item.detail}</span>
                    </div>
                    <span className="font-bold text-red-600">{item.commission}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Нужно ли платить налог с комиссии биржи?
            </h2>
            <p className="text-gray-600 mb-4">
              Самозанятый платит НПД только с суммы, которую реально получил на счёт —
              то есть уже после вычета комиссии биржи. Если клиент заплатил 50 000 ₽,
              а Kwork удержал 10 000 ₽ (20%), то налог 6% считается с 40 000 ₽ = 2 400 ₽.
            </p>
            <p className="text-gray-600 mb-4">
              Однако при расчёте чека в «Мой налог» нужно указывать полную сумму заказа,
              а не после комиссии. Это важный момент, который часто путают новые самозанятые.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Как компенсировать комиссию биржи в цене?
            </h2>
            <p className="text-gray-600 mb-4">
              Простая формула: нужная цена = желаемый доход ÷ (1 − комиссия). При комиссии
              Kwork 20%: если хотите получить 40 000 ₽, назначайте 40 000 ÷ 0.8 = 50 000 ₽.
            </p>
            <p className="text-gray-600">
              Но поднять цену реально только если вы знаете рыночный уровень.
              Для этого нужны данные по медианным ставкам в вашей специальности и городе —
              их можно проверить в{" "}
              <Link href="/benchmark" className="text-indigo-600 hover:underline">
                PDF-бенчмарке FreelanceCalc
              </Link>.
            </p>
          </article>
        </main>

        <footer className="border-t border-gray-100 mt-12 py-6 text-center text-sm text-gray-400">
          <p>© 2026 FreelanceCalc · <Link href="/" className="hover:text-blue-500">Калькулятор ставки</Link></p>
        </footer>
      </div>
    </>
  );
}
