import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "FL.ru или Kwork: какую биржу выбрать фрилансеру в 2026 году",
  description:
    "Сравниваем FL.ru и Kwork: комиссии, типы заказов, условия выплат. На FL.ru комиссия 7–20%, на Kwork — фиксированные 20%. Считаем, сколько вы теряете — и как это учесть в ставке.",
  keywords: [
    "fl.ru vs kwork 2026",
    "fl.ru или kwork что лучше",
    "сравнение бирж фриланса",
    "комиссия fl.ru kwork",
    "какую биржу фриланса выбрать",
    "fl.ru kwork сравнение 2026",
    "лучшая биржа для фрилансера",
    "fl.ru kwork комиссия процент",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/fl-ru-vs-kwork-birzha-frilanserov-2026" },
  openGraph: {
    title: "FL.ru или Kwork: какую биржу выбрать фрилансеру в 2026",
    description:
      "FL.ru — комиссия 7–20%, Kwork — 20% со всех заказов. Сравниваем реальные потери и считаем, как они влияют на вашу ставку.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/fl-ru-vs-kwork-birzha-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/fl-ru-vs-kwork-birzha-frilanserov-2026#article`,
      headline: "FL.ru или Kwork: какую биржу выбрать фрилансеру в 2026 году",
      description:
        "Сравниваем FL.ru и Kwork: комиссии, типы заказов, условия выплат. Считаем реальные потери и как это учесть в ставке.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/fl-ru-vs-kwork-birzha-frilanserov-2026`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
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
            name: "FL.ru или Kwork",
            item: `${BASE_URL}/stati/fl-ru-vs-kwork-birzha-frilanserov-2026`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/fl-ru-vs-kwork-birzha-frilanserov-2026#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Какая комиссия у FL.ru для фрилансеров?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FL.ru берёт комиссию 7–20% от суммы заказа. Размер зависит от рейтинга фрилансера и суммы проекта: новички платят 20%, опытные исполнители с хорошим рейтингом — 7–10%. Комиссия уменьшается по мере накопления репутации на платформе.",
          },
        },
        {
          "@type": "Question",
          name: "Какая комиссия у Kwork для фрилансеров?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kwork берёт фиксированную комиссию 20% со всех заказов без исключений. Минимальная цена кворка — 500 ₽. Эта комиссия не меняется в зависимости от рейтинга или суммы заказа.",
          },
        },
        {
          "@type": "Question",
          name: "Что лучше для начинающего фрилансера: FL.ru или Kwork?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Для начинающих Kwork удобнее: покупатели сами находят ваш оффер, не нужно откликаться на проекты и конкурировать с опытными исполнителями. FL.ru подходит тем, кто хочет работать на почасовой ставке или берёт крупные и сложные проекты.",
          },
        },
        {
          "@type": "Question",
          name: "Как учесть комиссию биржи при расчёте ставки?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Комиссию биржи нужно закладывать поверх желаемой ставки. Если хотите получить 1 000 ₽/час на руки при комиссии 20% (Kwork), ставьте на бирже минимум 1 250 ₽/час: 1 250 × (1 − 0.20) = 1 000 ₽. Используйте калькулятор FreelanceCalc для точного расчёта с учётом налогов.",
          },
        },
        {
          "@type": "Question",
          name: "Какие биржи фриланса ещё есть в России в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Крупнейшие российские биржи фриланса: FL.ru (комплексные проекты, ~1 млн посетителей/месяц), Kwork (фиксированные гиги, ~4 млн посетителей/месяц), Habr Freelance (IT-специалисты), YouDo (локальные услуги), Avito Услуги (широкий спектр), Profi.ru (профессионалы).",
          },
        },
      ],
    },
  ],
};

const COMPARISON_TABLE = [
  { param: "Комиссия с фрилансера", fl: "7–20% (зависит от рейтинга)", kwork: "Фиксированные 20%" },
  { param: "Минимальный заказ", fl: "Нет ограничений", kwork: "500 ₽" },
  { param: "Тип заказов", fl: "Почасовые и фиксированные", kwork: "Только фиксированная цена" },
  { param: "Кто ищет кого", fl: "Фрилансер откликается на проекты", kwork: "Клиент находит ваш оффер" },
  { param: "Специализация", fl: "Любые проекты, esp. IT", kwork: "Массовые гиги: тексты, дизайн, SMM" },
  { param: "Защита сделки", fl: "Безопасная сделка (платная)", kwork: "Встроенная защита" },
  { param: "Выплаты", fl: "ЮKassa, банковская карта", kwork: "ЮKassa, банковская карта" },
  { param: "Подходит для", fl: "Разработка, аналитика, консалтинг", kwork: "Копирайтинг, дизайн, SMM, SEO" },
];

export default function FlRuVsKworkPage() {
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
            <span className="text-gray-700 text-sm">FL.ru vs Kwork</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              FL.ru или Kwork: какую биржу выбрать фрилансеру в 2026 году
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Две крупнейшие российские биржи фриланса — разные модели, разные комиссии, разные аудитории. Разбираем честно: сколько вы потеряете на комиссии, как это учесть в ставке и когда одна биржа выгоднее другой.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Обновлено: март 2026</span>
              <span>·</span>
              <span>Биржи фриланса</span>
              <span>·</span>
              <span>Россия</span>
            </div>
          </div>

          {/* Quick answer */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
            <div className="font-semibold text-blue-900 mb-2">⚡ Короткий ответ</div>
            <ul className="text-sm text-blue-800 space-y-1.5">
              <li>
                <strong>Kwork</strong> — если вы продаёте стандартные гиги (тексты, дизайн, SMM). Клиенты сами вас находят, порог входа низкий. Но комиссия всегда 20%.
              </li>
              <li>
                <strong>FL.ru</strong> — если ваши проекты сложные, крупные или почасовые. Комиссия от 7% для опытных исполнителей.
              </li>
              <li>
                <strong>Лучшая стратегия</strong> — работать на обеих. Разные аудитории, разный спрос.
              </li>
            </ul>
          </div>

          {/* Key numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Комиссия FL.ru", value: "7–20%", sub: "зависит от рейтинга" },
              { label: "Комиссия Kwork", value: "20%", sub: "фиксированная" },
              { label: "Аудитория Kwork", value: "4,5 млн", sub: "посетителей/мес" },
              { label: "Аудитория FL.ru", value: "1,1 млн", sub: "посетителей/мес" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Сравнительная таблица: FL.ru vs Kwork
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">Параметр</th>
                    <th className="text-left px-4 py-3 text-blue-700 font-semibold">FL.ru</th>
                    <th className="text-left px-4 py-3 text-violet-700 font-semibold">Kwork</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE.map((row, i) => (
                    <tr key={row.param} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-600 font-medium">{row.param}</td>
                      <td className="px-4 py-3 text-gray-800">{row.fl}</td>
                      <td className="px-4 py-3 text-gray-800">{row.kwork}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Commission impact */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как комиссия съедает вашу ставку — в рублях
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Комиссия биржи — это деньги, которые вы теряете ещё до уплаты налогов. Её обязательно нужно закладывать в ставку поверх желаемого чистого дохода. Иначе вы работаете в минус.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">Желаемая ставка на руки</th>
                    <th className="text-left px-4 py-3 text-blue-700 font-medium">FL.ru (20% — новичок)</th>
                    <th className="text-left px-4 py-3 text-blue-700 font-medium">FL.ru (10% — опытный)</th>
                    <th className="text-left px-4 py-3 text-violet-700 font-medium">Kwork (20%)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { net: "500 ₽/ч", fl20: "625 ₽/ч", fl10: "556 ₽/ч", kw: "625 ₽/ч" },
                    { net: "1 000 ₽/ч", fl20: "1 250 ₽/ч", fl10: "1 111 ₽/ч", kw: "1 250 ₽/ч" },
                    { net: "1 500 ₽/ч", fl20: "1 875 ₽/ч", fl10: "1 667 ₽/ч", kw: "1 875 ₽/ч" },
                    { net: "2 000 ₽/ч", fl20: "2 500 ₽/ч", fl10: "2 222 ₽/ч", kw: "2 500 ₽/ч" },
                  ].map((row) => (
                    <tr key={row.net} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-semibold text-gray-900">{row.net}</td>
                      <td className="px-4 py-3 text-gray-700">{row.fl20}</td>
                      <td className="px-4 py-3 text-green-700 font-medium">{row.fl10}</td>
                      <td className="px-4 py-3 text-gray-700">{row.kw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">
              * Формула: ставка на бирже = желаемая ставка ÷ (1 − комиссия). Налоги (НПД, УСН) считаются отдельно.
            </p>
          </section>

          {/* Calculator CTA */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-10">
            <h3 className="font-bold text-indigo-900 text-lg mb-2">
              Рассчитайте вашу ставку с учётом всех комиссий
            </h3>
            <p className="text-sm text-indigo-700 mb-4">
              Наш калькулятор учитывает налоги (НПД / УСН), отпуск, простои и загрузку. Вбейте желаемый чистый доход — получите ставку, которую нужно ставить на бирже.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>

          {/* FL.ru section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FL.ru: для кого подходит</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              FL.ru (Free-Lance.ru) — старейшая российская биржа фриланса, запущена в 2005 году. Здесь традиционно сильны IT-специалисты: разработчики, аналитики, системные архитекторы.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="font-semibold text-green-800 mb-2">✅ Плюсы FL.ru</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>Комиссия снижается до 7% при высоком рейтинге</li>
                  <li>Почасовые контракты — возможность работать по Time &amp; Material</li>
                  <li>Сложные и дорогостоящие проекты (100k+ ₽)</li>
                  <li>Прямой контакт с клиентом до заключения сделки</li>
                  <li>Раздел вакансий для поиска штатных сотрудников</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="font-semibold text-red-800 mb-2">❌ Минусы FL.ru</div>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>Новичкам трудно: нужно откликаться и конкурировать</li>
                  <li>Большой демпинг в стандартных нишах</li>
                  <li>Для некоторых функций нужен Pro-аккаунт</li>
                  <li>Высокая комиссия 20% пока не наработан рейтинг</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 bg-white border border-gray-200 rounded-xl p-4">
              <strong>Совет:</strong> На FL.ru ищут разработчиков, аналитиков, проектных менеджеров. Если вы в IT — начинайте с FL.ru. Принцип: откликайтесь на проекты, быстро набирайте первые отзывы, снижайте комиссию.
            </p>
          </section>

          {/* Kwork section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kwork: для кого подходит</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Kwork — российский аналог Fiverr, запущен в 2014 году. Модель: вы создаёте «кворк» (фиксированную услугу по фиксированной цене), клиенты сами вас находят через поиск.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="font-semibold text-green-800 mb-2">✅ Плюсы Kwork</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>Клиенты находят вас сами — без активных откликов</li>
                  <li>Огромная аудитория (~4,5 млн посетителей/мес)</li>
                  <li>Быстрый старт для новичков</li>
                  <li>Чёткие условия: клиент знает цену заранее</li>
                  <li>Встроенная система защиты платежей</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="font-semibold text-red-800 mb-2">❌ Минусы Kwork</div>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>Комиссия всегда 20% — не снижается при росте рейтинга</li>
                  <li>Только фиксированная цена: нет почасовых контрактов</li>
                  <li>Сильная конкуренция в популярных категориях</li>
                  <li>Минимум 500 ₽ — невыгодно для мелких задач</li>
                  <li>Сложные или нестандартные проекты — плохо подходит</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 bg-white border border-gray-200 rounded-xl p-4">
              <strong>Совет:</strong> На Kwork хорошо продаются: SEO-тексты, посты для соцсетей, логотипы, настройка рекламы, аудиты сайтов. Сделайте 3–5 пакетов с разными объёмами работ и ценами — это увеличивает конверсию.
            </p>
          </section>

          {/* Strategy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Оптимальная стратегия: работайте на обеих
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Профессиональные фрилансеры не выбирают одну биржу — они присутствуют на обеих, плюс находят клиентов напрямую. Вот почему:
            </p>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="font-semibold text-gray-900 mb-2">1. Разные клиенты — разные бюджеты</div>
                <p className="text-sm text-gray-600">
                  На Kwork заказчики привыкли платить 1 000–5 000 ₽ за задачу. На FL.ru бюджеты часто выше — 50 000–500 000 ₽ за проект. Присутствуя на обеих, вы получаете поток мелких заказов через Kwork и крупные проекты через FL.ru.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="font-semibold text-gray-900 mb-2">2. Диверсификация — защита от простоя</div>
                <p className="text-sm text-gray-600">
                  Когда крупный проект на FL.ru завершается, Kwork обеспечивает постоянный мелкий поток. Не бывает «нулевого» месяца.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="font-semibold text-gray-900 mb-2">3. Прямые клиенты — нулевая комиссия</div>
                <p className="text-sm text-gray-600">
                  Лучшая стратегия — перевести биржевых клиентов на прямое сотрудничество после первого проекта. Так вы экономите 7–20% комиссии на каждом заказе.
                </p>
              </div>
            </div>
          </section>

          {/* Rate calculation section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как правильно рассчитать ставку для биржи
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ошибка большинства новичков — ставить на бирже ту же ставку, что они хотят получить на руки. Но комиссия биржи + налоги съедают значительную часть этой суммы.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <div className="font-semibold text-amber-900 mb-3">📊 Формула расчёта ставки для биржи</div>
              <div className="bg-white rounded-lg p-4 font-mono text-sm text-gray-800 mb-3">
                <div>Ставка на бирже = Желаемая ставка ÷ (1 − комиссия_биржи) ÷ (1 − ставка_налога)</div>
              </div>
              <div className="text-sm text-amber-800 space-y-1">
                <p><strong>Пример:</strong> Хотите получать 1 500 ₽/час на руки, работаете как самозанятый с юрлицами (НПД 6%), биржа Kwork (20%):</p>
                <p className="font-mono bg-white rounded px-3 py-1 inline-block mt-1">
                  1 500 ÷ (1 − 0.20) ÷ (1 − 0.06) = 1 500 ÷ 0.80 ÷ 0.94 ≈ 1 994 ₽/час
                </p>
                <p className="mt-2">Значит, минимальная ставка на Kwork — <strong>~2 000 ₽/час</strong>.</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Точный расчёт с учётом вашего налогового режима, отпуска и загрузки — в{" "}
              <Link href="/" className="text-indigo-600 hover:underline font-medium">
                калькуляторе FreelanceCalc
              </Link>
              .
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Какая комиссия у FL.ru в 2026 году?",
                  a: "FL.ru берёт 7–20% в зависимости от рейтинга исполнителя. Новички платят максимум — 20%. По мере накопления отзывов и репутации комиссия снижается до 7–10%."
                },
                {
                  q: "Можно ли работать на FL.ru и Kwork одновременно?",
                  a: "Да, это не запрещено и даже рекомендуется. Разные платформы привлекают разных клиентов с разными бюджетами. Большинство опытных фрилансеров работают на нескольких площадках."
                },
                {
                  q: "Как вывести деньги с FL.ru и Kwork?",
                  a: "Обе платформы поддерживают вывод через ЮKassa (ЮMoney), на банковскую карту и на расчётный счёт ИП. Для самозанятых удобнее всего вывод на карту с одновременным формированием чека через приложение «Мой налог»."
                },
                {
                  q: "Стоит ли использовать Habr Freelance вместо FL.ru?",
                  a: "Habr Freelance хорош для IT-специалистов, ориентированных на российский рынок. Комиссия — 10%, аудитория технически грамотная. Минус — меньший трафик, чем у FL.ru или Kwork."
                },
              ].map((item) => (
                <details key={item.q} className="bg-white border border-gray-200 rounded-xl">
                  <summary className="px-5 py-4 font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 transition-colors rounded-xl">
                    {item.q}
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  href: "/stati/skrytye-rashody-frilansera",
                  title: "Скрытые расходы фрилансера: полный список",
                  tag: "Финансы",
                },
                {
                  href: "/stati/kak-povysit-stavku-frilansera",
                  title: "Как повысить ставку: 7 проверенных способов",
                  tag: "Карьера",
                },
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  title: "Самозанятый или ИП: что выгоднее",
                  tag: "Налоги",
                },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-200 hover:shadow-sm transition-all group"
                >
                  <div className="text-xs text-indigo-600 font-medium mb-2">{a.tag}</div>
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors leading-snug">
                    {a.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Back link */}
          <div className="pt-6 border-t border-gray-200">
            <Link href="/stati" className="text-indigo-600 hover:underline text-sm">
              ← Все статьи о ставке фрилансера
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
