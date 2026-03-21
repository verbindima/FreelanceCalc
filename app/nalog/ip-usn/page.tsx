import type { Metadata } from "next";
import Link from "next/link";
import IpUsnCalc from "./IpUsnCalc";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор налога ИП УСН 6% 2026 — расчёт онлайн для фрилансера",
  description:
    "Рассчитайте налог ИП УСН 6% (доходы) онлайн. Страховые взносы 2026, вычет взносов из налога, переменные взносы 1%. Калькулятор для фрилансеров: введите доход — узнайте точную сумму к уплате.",
  keywords: [
    "калькулятор налога ИП УСН 6",
    "налог ИП УСН 6 процентов рассчитать",
    "ИП УСН 6 калькулятор онлайн 2026",
    "страховые взносы ИП 2026",
    "налог ИП фрилансер",
    "УСН доходы калькулятор",
    "ИП упрощёнка 6 процентов",
    "взносы ИП 2026 сумма",
    "вычет страховых взносов из УСН",
    "налог ИП без работников",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/nalog/ip-usn" },
  openGraph: {
    title: "Калькулятор налога ИП УСН 6% 2026 — для фрилансеров",
    description:
      "Введите годовой доход ИП — рассчитайте налог УСН 6%, страховые взносы, вычеты. Точный онлайн-расчёт.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/nalog/ip-usn`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Калькулятор налога ИП УСН 6%",
      description:
        "Онлайн-калькулятор налога ИП на упрощённой системе налогообложения (УСН 6%). Учитывает страховые взносы 2026, вычет взносов из налога, переменные взносы 1% с дохода свыше 300 000 ₽.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/nalog/ip-usn`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Налоги фрилансера", item: `${BASE_URL}/nalog` },
        { "@type": "ListItem", position: 3, name: "ИП УСН 6%", item: `${BASE_URL}/nalog/ip-usn` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько налогов платит ИП на УСН 6% в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ИП на УСН 6% платит: налог 6% от всех доходов (уменьшается на сумму страховых взносов — до 100% для ИП без работников) + фиксированные страховые взносы 53 658 ₽ (2026 год) + 1% с дохода свыше 300 000 ₽. Например, при доходе 2 млн ₽: налог УСН ~120 000 ₽, вычет взносов ~53 658 ₽, итого налог ~66 342 ₽ + взносы ~53 658 ₽ + 17 000 ₽ (1%) = ~137 000 ₽ обязательных платежей.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли уменьшить налог ИП УСН на страховые взносы?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. ИП без наёмных работников может уменьшить налог УСН 6% на всю сумму уплаченных страховых взносов (до 100%). ИП с работниками — только до 50% от суммы налога. Чтобы получить вычет в текущем квартале, взносы нужно заплатить в том же квартале.",
          },
        },
        {
          "@type": "Question",
          name: "Чем ИП УСН 6% отличается от самозанятого для фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятый: ставка 4–6%, нет взносов, лимит 2,4 млн ₽/год, нельзя нанимать. ИП УСН 6%: ставка 6% + ~53 658 ₽ взносов, лимит 450 млн ₽/год, можно нанимать сотрудников. До дохода ~1,2 млн ₽/год самозанятость обычно выгоднее — взносы перекрывают разницу в ставке. Выше 2,4 млн ₽/год — только ИП.",
          },
        },
        {
          "@type": "Question",
          name: "Когда платить налог ИП УСН?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Авансовые платежи по УСН: до 28 апреля (за I квартал), 28 июля (за полугодие), 28 октября (за 9 месяцев). Годовой налог: до 28 апреля следующего года. Страховые взносы: фиксированные — до 31 декабря; 1% переменный — до 1 июля следующего года.",
          },
        },
      ],
    },
  ],
};

const CONTRIBUTION_ROWS = [
  { year: "2024", fixed: "49 500 ₽", variable: "1% свыше 300К", cap: "277 571 ₽" },
  { year: "2025", fixed: "53 658 ₽", variable: "1% свыше 300К", cap: "300 888 ₽" },
  { year: "2026", fixed: "53 658 ₽", variable: "1% свыше 300К", cap: "300 888 ₽" },
];

export default function IpUsnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-3 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              ← FreelanceCalc
            </Link>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-700">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/nalog" className="hover:text-gray-700">Налоги фрилансера</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">ИП УСН 6%</span>
          </nav>

          {/* Hero */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Калькулятор налога ИП УСН 6% в 2026 году
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Введите годовой доход — рассчитайте налог, страховые взносы и чистый остаток.
            Учитывает вычет взносов из налога для ИП без работников.
          </p>

          {/* Calculator */}
          <div className="mb-10">
            <IpUsnCalc />
          </div>

          {/* Contributions table */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Страховые взносы ИП 2024–2026
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-gray-600 font-medium">Год</th>
                    <th className="text-right py-2 px-3 text-gray-600 font-medium">Фиксированные</th>
                    <th className="text-right py-2 px-3 text-gray-600 font-medium">Переменные</th>
                    <th className="text-right py-2 px-3 text-gray-600 font-medium">Максимум</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {CONTRIBUTION_ROWS.map((r) => (
                    <tr key={r.year} className={r.year === "2026" ? "bg-blue-50" : ""}>
                      <td className="py-2.5 pr-4 font-medium text-gray-800">
                        {r.year} {r.year === "2026" && <span className="text-xs text-blue-600 ml-1">(текущий)</span>}
                      </td>
                      <td className="py-2.5 px-3 text-right text-gray-700">{r.fixed}</td>
                      <td className="py-2.5 px-3 text-right text-gray-700">{r.variable}</td>
                      <td className="py-2.5 px-3 text-right text-gray-700">{r.cap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Источник: НК РФ ст. 430. Фиксированные взносы включают ОПС + ОМС.
            </p>
          </section>

          {/* How it works */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Как рассчитывается налог ИП УСН 6%
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                  Считаем базовый налог
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Налог = Доход × 6%</strong>
                  <br /><br />
                  Налоговая база — все поступления на расчётный счёт (включая платежи от физлиц и юрлиц). Расходы не учитываются — это «доходная» упрощёнка.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                  Вычитаем взносы
                </h3>
                <p className="text-sm text-gray-600">
                  ИП без работников: вычет до 100% суммы уплаченных взносов.
                  <br /><br />
                  <strong>Налог к уплате = max(0, Налог − Взносы)</strong>
                  <br /><br />
                  При доходе до ~894К ₽/год налог полностью перекрывается взносами.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                  Добавляем переменные взносы
                </h3>
                <p className="text-sm text-gray-600">
                  С дохода свыше 300 000 ₽ платится дополнительный взнос 1%.
                  <br /><br />
                  <strong>Переменные взносы = (Доход − 300К) × 1%</strong>
                  <br /><br />
                  Максимум — 300 888 ₽/год (8 × фиксированные взносы).
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                  Итого к уплате
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Итого = Налог УСН (после вычета) + Фиксированные взносы + Переменные взносы</strong>
                  <br /><br />
                  При доходе 1,5 млн ₽ фактическая нагрузка: ~8,7% от выручки — выгоднее выглядит чем 6%, но реально чуть выше из-за взносов.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько налогов платит ИП на УСН 6% при доходе 1 млн ₽/год?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  При доходе 1 000 000 ₽: налог УСН = 60 000 ₽; фиксированные взносы = 53 658 ₽;
                  переменные взносы = (1 000 000 − 300 000) × 1% = 7 000 ₽. Вычет взносов из
                  налога: 53 658 + 7 000 = 60 658 ₽ &gt; 60 000 ₽, поэтому налог = 0 ₽. Итого
                  обязательных платежей: 60 658 ₽ (только взносы). Чистый остаток: 939 342 ₽.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Нужен ли расчётный счёт ИП на УСН?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  По закону расчётный счёт не обязателен — ИП может принимать наличные с ККТ.
                  Но на практике расчётный счёт нужен для работы с юрлицами (большинство компаний
                  переводят на р/с) и для удобства уплаты налогов через ЕНС.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Выгоднее ли ИП УСН 6% или самозанятый для фрилансера-разработчика?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  До дохода ~1 200 000 ₽/год (100К ₽/мес) — обычно выгоднее самозанятый: нет
                  взносов, ставка 6% с юрлиц. От 1,2 до 2,4 млн ₽/год разница минимальная. Выше
                  2,4 млн ₽/год — только ИП (лимит самозанятости исчерпан).{" "}
                  <Link href="/nalog/sravnenie" className="text-blue-600 hover:underline">
                    Точный расчёт для вашего дохода →
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* Related links */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Связанные инструменты</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/nalog/sravnenie" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100">
                <span className="text-xl">⚖️</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Самозанятый vs ИП УСН</p>
                  <p className="text-xs text-gray-500">Интерактивное сравнение</p>
                </div>
              </Link>
              <Link href="/instrumenty/kalkulator-naloga-samozanyatogo" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100">
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Калькулятор налога НПД</p>
                  <p className="text-xs text-gray-500">Для самозанятых 4% и 6%</p>
                </div>
              </Link>
              <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100">
                <span className="text-xl">🧮</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Калькулятор ставки</p>
                  <p className="text-xs text-gray-500">Рассчитать ставку под желаемый доход</p>
                </div>
              </Link>
              <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100">
                <span className="text-xl">📖</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Статья: Самозанятый vs ИП</p>
                  <p className="text-xs text-gray-500">Подробный разбор для фрилансеров</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
