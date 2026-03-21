import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Самозанятый или ИП: что выгоднее для фрилансера в 2026 году",
  description:
    "Подробное сравнение НПД (самозанятый) и ИП УСН 6% для фрилансеров. Налоги, взносы, реальные расчёты — при каком доходе выгоднее ИП. Онлайн-калькулятор ставки.",
  keywords: [
    "самозанятый или ИП для фрилансера",
    "самозанятый vs ИП что выгоднее",
    "ИП или самозанятый 2026",
    "НПД или УСН для фрилансера",
    "переход с самозанятого на ИП",
    "фрилансер самозанятый ИП сравнение",
    "ИП УСН или самозанятый что лучше",
    "страховые взносы ИП фрилансер",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/samozanyatyj-vs-ip-frilancer" },
  openGraph: {
    title: "Самозанятый или ИП: что выгоднее для фрилансера в 2026",
    description:
      "Сравниваем НПД и ИП УСН 6%: налоги, взносы, лимиты, реальные цифры. При каком доходе переходить на ИП?",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/samozanyatyj-vs-ip-frilancer`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/samozanyatyj-vs-ip-frilancer#article`,
      headline:
        "Самозанятый или ИП: что выгоднее для фрилансера в 2026 году",
      description:
        "Подробное сравнение НПД (самозанятый) и ИП УСН 6% для фрилансеров. Налоги, взносы, реальные расчёты.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/samozanyatyj-vs-ip-frilancer`,
      datePublished: "2026-03-20",
      dateModified: "2026-03-20",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Самозанятый или ИП",
            item: `${BASE_URL}/stati/samozanyatyj-vs-ip-frilancer`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/samozanyatyj-vs-ip-frilancer#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "При каком доходе фрилансеру выгоднее открыть ИП?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При доходе примерно от 70 000–75 000 ₽/месяц ИП на УСН 6% становится выгоднее самозанятости: страховые взносы (~50 800 ₽/год) полностью перекрываются налоговым вычетом, и общая нагрузка оказывается ниже, чем НПД 6%. При доходе ниже 70 000 ₽/месяц самозанятость выгоднее из-за отсутствия обязательных взносов.",
          },
        },
        {
          "@type": "Question",
          name: "Чем самозанятый отличается от ИП для фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятый (НПД) платит 4–6% налога без страховых взносов, лимит дохода — 2,4 млн ₽/год. ИП на УСН 6% платит 6% налога плюс обязательные страховые взносы (~50 800 ₽/год), но может работать с любым доходом, нанимать сотрудников и вычитать взносы из налога.",
          },
        },
        {
          "@type": "Question",
          name: "Что будет если превысить лимит 2,4 млн рублей у самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При превышении лимита 2,4 млн ₽/год статус самозанятого автоматически прекращается. Нужно зарегистрироваться как ИП на УСН. Лучше сделать это заранее, когда доход приближается к 200 000 ₽/месяц.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли совмещать самозанятость и ИП?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, ИП может применять режим НПД (самозанятость). Но при этом нельзя использовать другие налоговые режимы (УСН, патент). Если ИП перешёл на НПД — он платит только НПД, без страховых взносов ИП.",
          },
        },
      ],
    },
  ],
};

export default function SamozanyatyjVsIpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3 flex-wrap">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 text-sm hover:text-blue-600">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Самозанятый или ИП</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Самозанятый или ИП: что выгоднее для фрилансера в 2026 году
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Главный вопрос при легализации фриланса — самозанятость (НПД) или ИП на УСН 6%?
              Разбираем реальные цифры: при каком доходе выгоднее ИП, сколько теряет каждый
              режим в рублях и когда пора переходить.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Обновлено: март 2026</span>
              <span>·</span>
              <span>Налоги</span>
              <span>·</span>
              <span>Россия</span>
            </div>
          </div>

          {/* Quick answer banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
            <div className="font-semibold text-blue-900 mb-2">⚡ Короткий ответ</div>
            <ul className="text-sm text-blue-800 space-y-1.5">
              <li>
                <strong>До ~70 000 ₽/месяц</strong> — самозанятость выгоднее: нет фиксированных
                взносов
              </li>
              <li>
                <strong>От ~70 000 ₽/месяц</strong> — ИП на УСН 6% выгоднее: взносы перекрывают
                налог
              </li>
              <li>
                <strong>Свыше 200 000 ₽/месяц</strong> — только ИП: самозанятость недоступна
                (лимит 2,4 млн/год)
              </li>
            </ul>
          </div>

          {/* Key numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "НПД с юрлиц", value: "6%", sub: "самозанятый" },
              { label: "УСН (ИП)", value: "6%", sub: "минус взносы" },
              { label: "Взносы ИП", value: "~50 800 ₽", sub: "в год (2026)" },
              { label: "Лимит НПД", value: "2,4 млн ₽", sub: "в год" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                <div className="text-xs font-medium text-gray-700 mt-1">{item.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Full comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Полное сравнение: самозанятый vs ИП
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 w-1/3">
                      Параметр
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700">
                      Самозанятый (НПД)
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">
                      ИП на УСН 6%
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      param: "Налог",
                      npd: "4% (физлица) / 6% (юрлица)",
                      ip: "6% с оборота",
                    },
                    {
                      param: "Страховые взносы",
                      npd: "Нет (добровольно с 2026)",
                      ip: "~50 800 ₽/год + 1% с дохода >300 тыс",
                    },
                    {
                      param: "Вычет взносов из налога",
                      npd: "—",
                      ip: "До 100% налога (без сотрудников)",
                    },
                    {
                      param: "Лимит дохода",
                      npd: "2,4 млн ₽/год",
                      ip: "265,8 млн ₽/год",
                    },
                    {
                      param: "Наёмные сотрудники",
                      npd: "Нельзя",
                      ip: "До 130 человек",
                    },
                    {
                      param: "Отчётность",
                      npd: "Только приложение «Мой налог»",
                      ip: "Декларация раз в год",
                    },
                    {
                      param: "Регистрация",
                      npd: "10 минут онлайн",
                      ip: "3–5 дней, госпошлина 800 ₽",
                    },
                    {
                      param: "Расчётный счёт",
                      npd: "Необязателен",
                      ip: "Рекомендуется",
                    },
                    {
                      param: "Пенсионные накопления",
                      npd: "Нет (добровольно)",
                      ip: "Включены в взносы",
                    },
                    {
                      param: "Статус в договорах",
                      npd: "Физлицо (самозанятый)",
                      ip: "ИП — более привычно для крупных компаний",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={row.param}
                      className={`border-b border-gray-100 ${idx % 2 === 0 ? "" : "bg-gray-50/50"}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-700">{row.param}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.npd}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Real numbers by income */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Реальные расчёты: кто платит меньше?
            </h2>
            <p className="text-gray-600 mb-5">
              ИП на УСН 6% может уменьшить налог на сумму страховых взносов (до 100%
              при работе без сотрудников). Это меняет всё — посмотрим на реальных цифрах.
            </p>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">
                      Доход в год
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-green-700 hidden md:table-cell">
                      Доход в мес
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-green-700">
                      НПД (6%)
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-blue-700">
                      ИП УСН 6%
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600">
                      Выгоднее
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      yearIncome: "600 000 ₽",
                      monthIncome: "50 000 ₽",
                      npd: "36 000 ₽",
                      ip: "50 800 ₽",
                      winner: "НПД",
                      winnerColor: "text-green-600",
                      diff: "−14 800 ₽",
                    },
                    {
                      yearIncome: "840 000 ₽",
                      monthIncome: "70 000 ₽",
                      npd: "50 400 ₽",
                      ip: "50 800 ₽",
                      winner: "≈ равно",
                      winnerColor: "text-gray-500",
                      diff: "0 ₽",
                    },
                    {
                      yearIncome: "1 200 000 ₽",
                      monthIncome: "100 000 ₽",
                      npd: "72 000 ₽",
                      ip: "59 800 ₽",
                      winner: "ИП",
                      winnerColor: "text-blue-600",
                      diff: "−12 200 ₽",
                    },
                    {
                      yearIncome: "1 800 000 ₽",
                      monthIncome: "150 000 ₽",
                      npd: "108 000 ₽",
                      ip: "72 000 ₽",
                      winner: "ИП",
                      winnerColor: "text-blue-600",
                      diff: "−36 000 ₽",
                    },
                    {
                      yearIncome: "2 400 000 ₽",
                      monthIncome: "200 000 ₽",
                      npd: "144 000 ₽",
                      ip: "84 800 ₽",
                      winner: "ИП",
                      winnerColor: "text-blue-600",
                      diff: "−59 200 ₽",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={row.yearIncome}
                      className={`border-b border-gray-100 ${idx % 2 === 0 ? "" : "bg-gray-50/50"}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-700">{row.yearIncome}</td>
                      <td className="px-4 py-3 text-right text-gray-500 hidden md:table-cell">
                        {row.monthIncome}
                      </td>
                      <td className="px-4 py-3 text-right text-green-700">{row.npd}</td>
                      <td className="px-4 py-3 text-right text-blue-700">{row.ip}</td>
                      <td className={`px-4 py-3 text-right font-semibold ${row.winnerColor}`}>
                        {row.winner}
                        <span className="text-xs ml-1 text-gray-400">{row.diff}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              <strong>Примечание:</strong> Расчёт для клиентов-юрлиц (НПД 6%). Страховые взносы
              ИП 2026 — 50 798 ₽ фиксированных + 1% с дохода свыше 300 000 ₽. ИП вычитает
              взносы из налога УСН до 100%. Данные актуальны на март 2026.
            </div>
          </section>

          {/* When to choose each */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Когда выбрать самозанятость, а когда — ИП?
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border-2 border-green-200 p-5">
                <div className="font-bold text-green-800 text-base mb-3">
                  ✅ Выбирайте самозанятость (НПД), если:
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Доход до 70 000 ₽/месяц — налоговая нагрузка ниже</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Только начинаете фрилансить и не уверены в стабильном доходе</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Нужна максимально простая схема без бухгалтерии</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Работаете в основном с физлицами (ставка 4%)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Не планируете расти и нанимать людей</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border-2 border-blue-200 p-5">
                <div className="font-bold text-blue-800 text-base mb-3">
                  ✅ Выбирайте ИП (УСН 6%), если:
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Доход стабильно выше 70 000–80 000 ₽/месяц</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Приближаетесь к лимиту 2,4 млн ₽/год</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Крупные корпоративные клиенты требуют статус ИП</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Хотите копить пенсионный стаж и страховые баллы</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">✓</span>
                    <span>Планируете расширяться или нанять помощника</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How ИП reduces tax */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как ИП уменьшает налог на взносы: пример расчёта
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-gray-600 mb-5">
                Это ключевое преимущество ИП на УСН 6%: страховые взносы напрямую вычитаются
                из суммы налога (не из доходов, а из налога!). При работе без сотрудников
                — до 100%.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-5 text-sm">
                <div className="font-semibold text-blue-900 mb-3">
                  Пример: доход 1 500 000 ₽/год (125 000 ₽/месяц)
                </div>
                <div className="space-y-2 text-blue-800">
                  <div className="flex justify-between">
                    <span>Налог УСН 6%</span>
                    <span className="font-semibold">90 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Страховые взносы фиксированные</span>
                    <span className="font-semibold">50 798 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доп. взносы 1% с дохода свыше 300 тыс</span>
                    <span className="font-semibold">12 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span>Итого взносов</span>
                    <span className="font-semibold">62 798 ₽</span>
                  </div>
                  <div className="border-t border-blue-200 pt-2 flex justify-between">
                    <span>Налог к уплате (90 000 − 62 798)</span>
                    <span className="font-semibold">27 202 ₽</span>
                  </div>
                  <div className="border-t border-blue-200 pt-2 flex justify-between font-bold text-blue-900">
                    <span>Итого выплат государству</span>
                    <span>90 000 ₽</span>
                  </div>
                  <div className="text-xs text-blue-600 mt-2">
                    Самозанятый заплатил бы НПД 6%: 90 000 ₽ — одинаково на первый взгляд.
                    Но ИП накапливает пенсионный стаж и имеет неограниченный лимит дохода.
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 text-sm">
                <div className="font-semibold text-green-900 mb-2">
                  При доходе 2 400 000 ₽/год (200 000 ₽/месяц)
                </div>
                <div className="space-y-1 text-green-800">
                  <div className="flex justify-between">
                    <span>НПД 6% (самозанятый)</span>
                    <span className="font-semibold text-red-600">144 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ИП УСН 6% (после вычета взносов)</span>
                    <span className="font-semibold text-green-700">84 800 ₽</span>
                  </div>
                  <div className="flex justify-between font-bold text-green-900 border-t border-green-200 pt-2">
                    <span>Экономия с ИП</span>
                    <span>59 200 ₽/год</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Рассчитайте ставку для своего налогового режима
            </h2>
            <p className="text-blue-100 mb-6 text-sm md:text-base">
              FreelanceCalc считает ставку с учётом НПД 4%, НПД 6%, ИП УСН 6% и ИП УСН 15%.
              Укажите желаемый доход — калькулятор покажет минимальную ставку в час.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Открыть калькулятор →
              </Link>
              <Link
                href="/stavka"
                className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors"
              >
                По специальностям →
              </Link>
            </div>
          </section>

          {/* How to register IP */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как перейти с самозанятости на ИП: пошаговый план
            </h2>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "Зарегистрируйте ИП",
                  text: "Через Госуслуги (бесплатно при подаче онлайн) или МФЦ (800 ₽ госпошлина). Занимает 3 рабочих дня.",
                },
                {
                  step: "2",
                  title: "Подайте уведомление о переходе на УСН",
                  text: "В течение 30 дней после регистрации ИП подайте заявление в ФНС. Иначе автоматически попадёте на ОСНО (основная система) — это невыгодно.",
                },
                {
                  step: "3",
                  title: "Снимитесь с НПД",
                  text: "В приложении «Мой налог» снимите себя с учёта как плательщика НПД. Важно: ИП не может совмещать НПД с УСН одновременно.",
                },
                {
                  step: "4",
                  title: "Откройте расчётный счёт",
                  text: "Не обязательно, но удобно. Большинство банков открывают счёт ИП бесплатно за 1 день (Тинькофф, СберБизнес, ВТБ, Альфа).",
                },
                {
                  step: "5",
                  title: "Обновите договоры с клиентами",
                  text: "Уведомите клиентов о смене статуса. Обновите реквизиты в договорах — теперь вы ИП, а не физлицо-самозанятый.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benchmark PDF upsell */}
          <section className="mb-10 border border-blue-200 rounded-2xl p-6 bg-blue-50">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  Сколько реально зарабатывают фрилансеры вашей специальности?
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  PDF-бенчмарк с медианными ставками по Москве, СПб и регионам —
                  для уровней джун / мид / сеньор. Удобно для переговоров с клиентами
                  или проверки своей ставки. Обновляется ежеквартально. Цена — 249 ₽.
                </p>
                <Link
                  href="/benchmark"
                  className="inline-block text-sm font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2"
                >
                  Посмотреть бенчмарк →
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "При каком доходе фрилансеру выгоднее открыть ИП?",
                  a: "При доходе примерно от 70 000–75 000 ₽/месяц ИП на УСН 6% становится выгоднее. Страховые взносы (~50 800 ₽/год) полностью перекрываются налоговым вычетом, и общая нагрузка оказывается ниже, чем НПД 6%. При меньшем доходе самозанятость выгоднее из-за отсутствия обязательных взносов.",
                },
                {
                  q: "Можно ли совмещать статус ИП и самозанятого?",
                  a: "Да, ИП может применять режим НПД. Но при этом нельзя одновременно использовать УСН или патент. Если ИП на НПД — он платит НПД без страховых взносов ИП, и без права вычитать взносы из налога. Чаще всего это невыгодно при высоком доходе.",
                },
                {
                  q: "Что будет если самозанятый превысит лимит 2,4 млн рублей?",
                  a: "Статус самозанятого прекращается автоматически. До конца календарного года нельзя снова стать самозанятым. Нужно зарегистрироваться как ИП на УСН. Лучше сделать это заранее, когда доход приближается к 200 000 ₽/месяц.",
                },
                {
                  q: "Нужна ли онлайн-касса для ИП на УСН без сотрудников?",
                  a: "Для ИП, оказывающих услуги физлицам, касса нужна. Если работаете только с юрлицами и ИП — можно обходиться без кассы при безналичном расчёте. Уточните в ФНС для вашего вида деятельности.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="font-semibold text-gray-800 mb-2">{item.q}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom nav */}
          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-3">
            <Link
              href="/stati/samozanyatyj-ipoteka-2026"
              className="text-sm text-blue-600 hover:underline"
            >
              Ипотека для самозанятых 2026 →
            </Link>
            <Link
              href="/stati/stavka-samozanyatogo-2026"
              className="text-sm text-blue-600 hover:underline"
            >
              Ставка самозанятого: как считать →
            </Link>
            <Link
              href="/stati/kak-raschitat-stavku-frilansera"
              className="text-sm text-blue-600 hover:underline"
            >
              Как рассчитать ставку фрилансера →
            </Link>
            <Link href="/stavka" className="text-sm text-blue-600 hover:underline">
              Калькуляторы по специальностям →
            </Link>
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              Калькулятор ставки →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
