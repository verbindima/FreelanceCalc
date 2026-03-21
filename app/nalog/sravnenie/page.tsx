import type { Metadata } from "next";
import Link from "next/link";
import SravnenieCalc from "./SravnenieCalc";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Самозанятый или ИП УСН: что выгоднее фрилансеру в 2026 — сравнение",
  description:
    "Интерактивное сравнение: самозанятый НПД против ИП УСН 6%. Введите свой доход — узнайте точную разницу в налогах, взносах и чистом остатке. Точка перехода самозанятый → ИП.",
  keywords: [
    "самозанятый или ИП что выгоднее 2026",
    "самозанятый vs ИП УСН",
    "сравнение самозанятый ИП фрилансер",
    "самозанятый или ИП налоги сравнение",
    "когда выгоднее ИП чем самозанятый",
    "переход самозанятого на ИП",
    "самозанятый ИП калькулятор сравнение",
    "НПД vs УСН 6 что выгоднее",
    "лимит самозанятого когда открыть ИП",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/nalog/sravnenie" },
  openGraph: {
    title: "Самозанятый или ИП: что выгоднее для фрилансера в 2026?",
    description:
      "Введите свой доход — калькулятор покажет точную разницу в налогах между НПД и ИП УСН 6%. Данные 2026 года.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/nalog/sravnenie`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Сравнение Самозанятый vs ИП УСН 6%",
      description:
        "Интерактивный калькулятор-сравнение налоговых режимов для фрилансеров: НПД (самозанятость) против ИП на упрощённой системе налогообложения 6%. Учитывает страховые взносы 2026 года.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/nalog/sravnenie`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Налоги фрилансера", item: `${BASE_URL}/nalog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Самозанятый vs ИП УСН",
          item: `${BASE_URL}/nalog/sravnenie`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "При каком доходе выгоднее перейти с самозанятого на ИП?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При работе с юрлицами (НПД 6% vs ИП УСН 6%): разница минимальна в диапазоне 1–2,4 млн ₽/год. При работе с физлицами (НПД 4%): переход на ИП никогда не выгоднее по ставке — только если лимит превышен. При доходе свыше 2,4 млн ₽/год самозанятость закрывается принудительно — нужно открывать ИП.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли быть одновременно самозанятым и ИП?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет в традиционном смысле: ИП не может применять НПД одновременно с УСН. Но ИП может зарегистрироваться как плательщик НПД — тогда он будет «ИП на НПД» с теми же ставками 4/6%, без страховых взносов, но с лимитом 2,4 млн ₽. При превышении лимита — автоматически переходит на УСН.",
          },
        },
        {
          "@type": "Question",
          name: "Как перейти с самозанятого на ИП?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1. Зарегистрируйте ИП через Госуслуги, МФЦ или ИФНС. 2. В течение 30 дней подайте уведомление о переходе на УСН (форма 26.2-1). 3. Снимитесь с учёта как самозанятый в приложении «Мой налог». Переход можно сделать заранее — ИП на НПД продолжает работать по тем же ставкам до исчерпания лимита.",
          },
        },
      ],
    },
  ],
};

const SCENARIOS = [
  {
    income: 600_000,
    label: "50 000 ₽/мес",
    npdTotal: 36_000,
    ipUsnTotal: 53_658,
    winner: "npd" as const,
    note: "Взносы ИП превышают весь налог НПД",
  },
  {
    income: 1_200_000,
    label: "100 000 ₽/мес",
    npdTotal: 72_000,
    ipUsnTotal: 62_658,
    winner: "ip" as const,
    note: "Взносы ИП покрывают ~85% налога",
  },
  {
    income: 2_400_000,
    label: "200 000 ₽/мес",
    npdTotal: 144_000,
    ipUsnTotal: 122_658,
    winner: "ip" as const,
    note: "У лимита НПД выгоднее ИП",
  },
  {
    income: 3_000_000,
    label: "250 000 ₽/мес",
    npdTotal: null,
    ipUsnTotal: 150_658,
    winner: "ip" as const,
    note: "НПД невозможен — лимит превышен",
  },
];

export default function SravneniePage() {
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
            <span className="text-gray-900">Самозанятый vs ИП УСН</span>
          </nav>

          {/* Hero */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Самозанятый или ИП УСН 6%: что выгоднее фрилансеру в 2026?
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Введите свой доход — калькулятор покажет точную разницу в налогах,
            взносах и чистом остатке. С учётом страховых взносов 2026 года.
          </p>

          {/* Calculator */}
          <div className="mb-10">
            <SravnenieCalc />
          </div>

          {/* Quick scenarios */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Готовые сценарии: что выгоднее при разных доходах
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Расчёт для юрлиц (НПД 6%, ИП УСН 6%), без наёмных работников.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-3 text-gray-600 font-medium">Доход/мес</th>
                    <th className="text-right py-2 px-3 text-gray-600 font-medium">НПД платежи</th>
                    <th className="text-right py-2 px-3 text-gray-600 font-medium">ИП УСН платежи</th>
                    <th className="text-left py-2 pl-3 text-gray-600 font-medium">Вывод</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SCENARIOS.map((s) => (
                    <tr key={s.income}>
                      <td className="py-3 pr-3 font-medium text-gray-800">{s.label}</td>
                      <td className="py-3 px-3 text-right">
                        {s.npdTotal !== null ? (
                          <span className={s.winner === "npd" ? "text-green-700 font-semibold" : "text-gray-700"}>
                            {new Intl.NumberFormat("ru-RU").format(s.npdTotal)} ₽
                          </span>
                        ) : (
                          <span className="text-red-500 text-xs">Лимит исчерпан</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <span className={s.winner === "ip" ? "text-blue-700 font-semibold" : "text-gray-700"}>
                          {new Intl.NumberFormat("ru-RU").format(s.ipUsnTotal)} ₽
                        </span>
                      </td>
                      <td className="py-3 pl-3 text-gray-600 text-xs">{s.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pros cons */}
          <section className="grid gap-6 md:grid-cols-2 mb-10">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                🟢 Самозанятый (НПД) — когда выбирать
              </h2>
              <ul className="space-y-2.5">
                {[
                  "Доход до 200 000 ₽/мес стабильно",
                  "Клиенты — физлица (ставка 4% вместо 6%)",
                  "Хотите минимум бюрократии",
                  "Нет нужды в расчётном счёте",
                  "Только начинаете фрилансить",
                  "Не планируете нанимать сотрудников",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/instrumenty/kalkulator-naloga-samozanyatogo"
                className="mt-4 block text-sm text-blue-600 hover:text-blue-800"
              >
                Калькулятор налога НПД →
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                🔵 ИП УСН 6% — когда выбирать
              </h2>
              <ul className="space-y-2.5">
                {[
                  "Доход превышает 2,4 млн ₽/год",
                  "Планируете нанять сотрудников",
                  "Нужна кредитная история для банка",
                  "Работа с крупными корпорациями (некоторые не работают с самозанятыми)",
                  "Хотите копить пенсионные баллы",
                  "Планируете расширение бизнеса",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/nalog/ip-usn"
                className="mt-4 block text-sm text-blue-600 hover:text-blue-800"
              >
                Калькулятор налога ИП УСН →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  При каком доходе выгоднее перейти с самозанятого на ИП?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  При работе с юрлицами разница в выгоде минимальная в диапазоне 1–2,4 млн ₽/год —
                  ИП чаще немного выгоднее за счёт вычета взносов, но разница ~10 000–20 000 ₽/год.
                  При физлицах-клиентах (НПД 4%) самозанятый выгоднее почти всегда до лимита.
                  При превышении 2,4 млн ₽/год самозанятость невозможна — открывайте ИП.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Учитываются ли взносы ИП при расчёте пенсии?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да. ИП обязательно платит пенсионные взносы (около 43 000 ₽ из 53 658 ₽ фиксированных
                  взносов 2026 года), что формирует пенсионные баллы. Самозанятый взносы не платит —
                  пенсионные баллы не начисляются, если не подключил добровольное страхование.
                  С 2024 года самозанятые могут добровольно платить взносы в СФР.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Какой режим лучше для разработчика с иностранными клиентами?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Оба режима допускают работу с иностранными заказчиками. Основной вопрос — способ
                  получения оплаты. Самозанятому сложнее принимать валютные платежи напрямую (нужен
                  банк с поддержкой ВЭД). ИП проще — открываете валютный р/с и декларируете доход.
                  Налог платится с рублёвого эквивалента по курсу ЦБ на дату поступления.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 text-center">
            <p className="text-gray-700 font-medium mb-1">
              Знаете свой налоговый режим? Рассчитайте правильную ставку.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Главный калькулятор учитывает НПД и ИП УСН при расчёте часовой ставки.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Рассчитать ставку →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
