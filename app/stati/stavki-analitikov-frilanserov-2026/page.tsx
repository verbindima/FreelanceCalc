import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки аналитиков-фрилансеров в России 2026: данные, бизнес, продукт",
  description:
    "Сколько берёт аналитик-фрилансер в России в 2026 году? Медианные ставки для data analyst, бизнес-аналитика, системного аналитика, продуктового аналитика. Реальные данные + калькулятор.",
  keywords: [
    "ставки аналитиков фрилансеров 2026",
    "сколько берёт аналитик фрилансер",
    "почасовая ставка аналитика данных",
    "ставка бизнес-аналитика фрилансер",
    "ставка data analyst фрилансер",
    "сколько зарабатывает аналитик на фрилансе",
    "ставка системного аналитика фрилансер",
    "ставка продуктового аналитика",
    "ставки аналитиков россия 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-analitikov-frilanserov-2026" },
  openGraph: {
    title: "Ставки аналитиков-фрилансеров в России 2026: данные, бизнес, продукт",
    description:
      "Медианные почасовые ставки для data analyst, бизнес-аналитика, системного и продуктового аналитика на фрилансе. Реальные данные рынка 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-analitikov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-analitikov-frilanserov-2026#article`,
      headline:
        "Ставки аналитиков-фрилансеров в России 2026: данные, бизнес, продукт",
      description:
        "Медианные почасовые ставки для 5 аналитических специализаций на фрилансе в России. Реальные данные рынка 2026.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stati/stavki-analitikov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "Фриланс-аналитика" },
        { "@type": "Thing", name: "Почасовая ставка аналитика" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт аналитик-фрилансер в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В зависимости от специализации: Data Analyst — 1 500–3 500 ₽/час, бизнес-аналитик — 1 200–3 000 ₽/час, системный аналитик — 1 500–3 500 ₽/час, продуктовый аналитик — 1 800–4 000 ₽/час, BI-аналитик — 1 300–3 000 ₽/час.",
          },
        },
        {
          "@type": "Question",
          name: "Почему продуктовый аналитик берёт больше других?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Продуктовый аналитик напрямую влияет на бизнес-метрики продукта: конверсию, retention, LTV. Он совмещает навыки анализа данных, A/B-тестирования и понимание продуктовой стратегии. Это пересечение с продукт-менеджментом даёт премию к ставке.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать свою ставку аналитику-фрилансеру?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте формулу: ставка = (желаемый доход + налоги + расходы) / (рабочие часы × коэффициент загрузки). Бесплатный калькулятор на FreelanceCalc учитывает налог НПД и реальную загрузку автоматически.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли аналитику оформлять самозанятость?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, для легальной работы с большинством заказчиков нужен статус самозанятого или ИП. Самозанятый платит 4% с доходов от физлиц и 6% — от юрлиц. При доходе выше 2,4 млн ₽/год нужен переход на ИП.",
          },
        },
        {
          "@type": "Question",
          name: "Откуда данные по ставкам аналитиков?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Данные агрегированы из открытых источников: Хабр Карьера, FL.ru, Kwork, Telegram-каналов по аналитике данных и отчётов по российскому рынку. Медиана отражает примерную середину реальных предложений.",
          },
        },
      ],
    },
  ],
};

const analyticSpecialties = [
  {
    name: "Data Analyst",
    slug: "data-analyst",
    median: "1 500–3 500 ₽/час",
    monthlyIncome: "от 150 000 до 380 000 ₽",
    demand: "Очень высокий",
    notes: "SQL, Python/Pandas, Tableau, Power BI. Спрос из e-commerce, банков и стартапов.",
  },
  {
    name: "Бизнес-аналитик",
    slug: "biznes-analitik",
    median: "1 200–3 000 ₽/час",
    monthlyIncome: "от 120 000 до 320 000 ₽",
    demand: "Высокий",
    notes: "BPMN, требования, UML. Работа с корпоративными заказчиками и интеграторами.",
  },
  {
    name: "Системный аналитик",
    slug: "sistemnyj-analitik",
    median: "1 500–3 500 ₽/час",
    monthlyIncome: "от 150 000 до 380 000 ₽",
    demand: "Высокий",
    notes: "REST API, OpenAPI, ТЗ и спецификации. Незаменим в сложных IT-проектах.",
  },
  {
    name: "Продуктовый аналитик",
    slug: "produktovyj-analitik",
    median: "1 800–4 000 ₽/час",
    monthlyIncome: "от 180 000 до 430 000 ₽",
    demand: "Очень высокий",
    notes: "A/B-тесты, воронки, cohort analysis. Топ-ставки среди аналитиков на фрилансе.",
  },
  {
    name: "BI-аналитик / Дашбордер",
    slug: "bi-analitik",
    median: "1 300–3 000 ₽/час",
    monthlyIncome: "от 130 000 до 320 000 ₽",
    demand: "Средний",
    notes: "Power BI, Tableau, Looker Studio, DataLens. Много разового заказа на дашборды.",
  },
];

export default function AnalyticsRatesArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
              FreelanceCalc
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/stati" className="hover:text-blue-600">Статьи</Link></li>
              <li>/</li>
              <li className="text-gray-700">Ставки аналитиков-фрилансеров 2026</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ставки аналитиков-фрилансеров в России 2026: таблица по специализациям
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>📅 Обновлено: март 2026</span>
            <span>⏱ 7 минут чтения</span>
            <span>👥 Data Analyst, БА, Системный, Продуктовый, BI</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Аналитика — одна из самых востребованных фриланс-специальностей 2026 года.
            Компании всё активнее нанимают аналитиков на проект: построить дашборд, описать
            бизнес-процессы, собрать требования под новую систему. Но «аналитик» — это широкое
            понятие, и ставки внутри профессии расходятся в 2–3 раза.
            Ниже — актуальные медианные данные по 5 аналитическим специализациям.
          </p>

          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Узнайте свою ставку за 30 секунд</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход — калькулятор учтёт налоги, загрузку и отпуск и покажет,
              сколько нужно брать за час. Плюс сравнение с медианой по вашей специализации.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=article&utm_campaign=analytics-rates-2026"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Main table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Медианные ставки аналитиков-фрилансеров в 2026 году
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Специализация</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Медиана ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход/месяц</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Спрос</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Калькулятор</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {analyticSpecialties.map((spec) => (
                    <tr key={spec.slug} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{spec.name}</td>
                      <td className="px-4 py-3 text-center font-semibold text-green-700">{spec.median}</td>
                      <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell text-xs">{spec.monthlyIncome}</td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          spec.demand === "Очень высокий"
                            ? "bg-green-100 text-green-800"
                            : spec.demand === "Высокий"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {spec.demand}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Link
                          href={`/?spec=${spec.slug}&utm_source=stati&utm_medium=table&utm_campaign=analytics-rates-2026`}
                          className="text-blue-600 hover:text-blue-800 text-xs font-medium hover:underline"
                        >
                          Рассчитать →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Данные: медиана рыночных предложений Хабр Карьера, FL.ru, Kwork, Telegram-каналы по аналитике данных. Март 2026.
            </p>
          </section>

          {/* Specialty breakdowns */}
          <section className="mb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Подробно по каждой специализации
            </h2>

            {/* Data Analyst */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Data Analyst</h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  1 500–3 500 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Самая массовая аналитическая специальность на фрилансе. Заказчики — интернет-магазины,
                банки, маркетплейсы, SaaS-стартапы. Типичные задачи: построить модель данных,
                написать SQL-запросы под отчёт, автоматизировать выгрузки, создать дашборд в BI-системе.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">SQL</div>
                  <div className="text-gray-500 text-xs">обязательно</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">Python/Pandas</div>
                  <div className="text-gray-500 text-xs">желательно</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">Tableau / Power BI</div>
                  <div className="text-gray-500 text-xs">часто нужно</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">Excel</div>
                  <div className="text-gray-500 text-xs">базово</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                <strong>Ставка зависит от домена:</strong> аналитик с опытом в fintech или e-commerce
                легко берёт +30–50% к базовой ставке. Аналитики без SQL-навыков занимают нижнюю
                часть диапазона (1 000–1 500 ₽/час).
              </p>
            </div>

            {/* Business Analyst */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Бизнес-аналитик (БА)</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  1 200–3 000 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Фриланс-бизнес-аналитики востребованы в IT-интеграции, автоматизации бизнеса,
                ERP-внедрениях (1С, SAP, MS Dynamics) и разработке корпоративных систем.
                Занимаются сбором требований, описанием бизнес-процессов, составлением ТЗ.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                <strong>Ставка растёт</strong> при наличии опыта в конкретных системах: 1С-специалисты
                с аналитическими навыками и SAP-консультанты берут 2 500–4 500 ₽/час за проектные работы.
              </div>
            </div>

            {/* System Analyst */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Системный аналитик</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  1 500–3 500 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Системный аналитик проектирует архитектуру взаимодействия систем: описывает
                REST API, разрабатывает OpenAPI-спецификации, пишет ТЗ для разработчиков.
                Ближе всего к разработке среди аналитических специальностей — отсюда и ставка.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">REST / OpenAPI</div>
                  <div className="text-gray-500 text-xs">ключевой навык</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">UML / BPMN</div>
                  <div className="text-gray-500 text-xs">обязательно</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">Confluence / Jira</div>
                  <div className="text-gray-500 text-xs">рабочая среда</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Системный аналитик — дефицитная специальность на фрилансе. Хорошие специалисты
                разбираются до начала проекта. Верхняя планка ставки — при работе в банках,
                телекоме и государственных IT-проектах.
              </p>
            </div>

            {/* Product Analyst */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Продуктовый аналитик</h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  1 800–4 000 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Наиболее высокооплачиваемая аналитическая специальность на фрилансе.
                Продуктовый аналитик работает с метриками продукта: DAU/MAU, retention,
                воронки, A/B-тесты, cohort analysis. Его задачи напрямую влияют на бизнес-решения.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
                <strong>Топ-ставки</strong> — у аналитиков с портфелем кейсов роста метрик:
                «увеличил retention на X%», «оптимизировал воронку оплаты». Такие специалисты
                легко берут 3 500–5 000 ₽/час в продуктовых компаниях.
              </div>
            </div>

            {/* BI Analyst */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">BI-аналитик / Дашбордер</h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  1 300–3 000 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Специалисты по Business Intelligence и визуализации данных. Большой рынок
                разовых заказов: компании часто нанимают на 20–40 часов для создания
                управленческих дашбордов. Основные инструменты: Power BI, Tableau,
                Looker Studio, Яндекс DataLens.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Совет:</strong> BI-аналитик с навыком DAX/M (Power BI) или Calculated Fields
                (Tableau) берёт на 20–30% больше «чистого дашбордера». Автоматизация обновления
                данных — дополнительный аргумент для повышения ставки.
              </p>
            </div>
          </section>

          {/* City comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки аналитиков по городам
            </h2>
            <p className="text-gray-600 mb-6">
              Аналитики работают удалённо, но ставки зависят от города заказчика и специалиста:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Город</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Data Analyst</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Бизнес-аналитик</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Продуктовый</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">
                      <Link href="/goroda/moskva" className="text-blue-600 hover:underline">Москва</Link>
                    </td>
                    <td className="px-4 py-3 text-center text-green-700 font-medium">2 100–4 900 ₽</td>
                    <td className="px-4 py-3 text-center text-green-700 font-medium">1 700–4 200 ₽</td>
                    <td className="px-4 py-3 text-center text-green-700 font-medium">2 500–5 600 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">
                      <Link href="/goroda/sankt-peterburg" className="text-blue-600 hover:underline">Санкт-Петербург</Link>
                    </td>
                    <td className="px-4 py-3 text-center text-blue-700 font-medium">1 800–4 200 ₽</td>
                    <td className="px-4 py-3 text-center text-blue-700 font-medium">1 440–3 600 ₽</td>
                    <td className="px-4 py-3 text-center text-blue-700 font-medium">2 160–4 800 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">
                      <Link href="/goroda/ekaterinburg" className="text-blue-600 hover:underline">Екатеринбург</Link>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700 font-medium">1 575–3 675 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-700 font-medium">1 260–3 150 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-700 font-medium">1 890–4 200 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Другие города</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-medium">1 275–3 325 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-medium">1 020–2 850 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-medium">1 530–3 800 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Коэффициенты: Москва ×1.4, Санкт-Петербург ×1.2, Екатеринбург ×1.05, регионы ×0.85–1.0
            </p>
          </section>

          {/* How to grow rates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Как аналитику поднять ставку: 5 рычагов
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">1. Специализироваться на одном домене</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Аналитик «для всех» уступает в ставке аналитику с кейсами в fintech, e-commerce
                  или медицине. Заказчики платят премию за понимание отраслевой специфики.
                  Выберите нишу и наберите 3–5 кейсов именно в ней.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">2. Добавить смежный навык</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Data Analyst + ML-базис → Data Scientist-lite, ставка +40%.
                  Бизнес-аналитик + написание ТЗ для API → системный аналитик, ставка +30%.
                  Продуктовый аналитик + навык принятия продуктовых решений → продукт-менеджер.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">3. Показывать измеримые результаты</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  «Построил дашборд» = дёшево. «Дашборд сократил время подготовки отчётов с 4 часов
                  до 20 минут» — это кейс. Оцифровывайте результаты каждого проекта:
                  сэкономленные часы, рост конверсии, снижение ошибок.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">4. Работать с более крупными заказчиками</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Малый бизнес платит меньше — не потому что жадный, а потому что задачи проще.
                  Средний бизнес и корпорации платят вдвое больше за тот же объём часов.
                  Переход вверх по размеру заказчика — один из быстрых способов поднять доход.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">5. Переходить на ретейнеры</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Разовые проекты оплачиваются по рыночной ставке. Ретейнер (фиксированное кол-во
                  часов в месяц) позволяет брать чуть дороже за счёт предсказуемости для заказчика
                  и стабильного дохода для вас. Предлагайте ретейнер после успешного первого проекта.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/stati/kak-povysit-stavku-frilansera"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
              >
                Полный гайд: как повысить ставку фрилансера →
              </Link>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте вашу ставку</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Введите желаемый доход в месяц — калькулятор учтёт налог НПД,
              простои, отпуск и покажет минимальную почасовую ставку.
              Плюс сравнение с медианой по рынку.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=cta&utm_campaign=analytics-rates-2026"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Открыть калькулятор →
            </Link>
          </section>

          {/* Related articles */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stati/stavki-razrabotchikov-frilanserov-2026"
                className="block bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all p-5"
              >
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">Рынок</span>
                <h3 className="text-sm font-semibold text-gray-800 mt-2 hover:text-blue-700">
                  Ставки разработчиков-фрилансеров 2026 →
                </h3>
              </Link>
              <Link
                href="/stati/stavki-dizajnerov-frilanserov-2026"
                className="block bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all p-5"
              >
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">Рынок</span>
                <h3 className="text-sm font-semibold text-gray-800 mt-2 hover:text-blue-700">
                  Ставки дизайнеров-фрилансеров 2026 →
                </h3>
              </Link>
              <Link
                href="/stati/srednyaya-stavka-frilansera-2026"
                className="block bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all p-5"
              >
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">Рынок</span>
                <h3 className="text-sm font-semibold text-gray-800 mt-2 hover:text-blue-700">
                  Средняя ставка фрилансера 2026: 22 специальности →
                </h3>
              </Link>
              <Link
                href="/stati/kak-raschitat-stavku-frilansera"
                className="block bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all p-5"
              >
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-medium">Руководство</span>
                <h3 className="text-sm font-semibold text-gray-800 mt-2 hover:text-blue-700">
                  Как рассчитать ставку: пошаговое руководство →
                </h3>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <details className="bg-white rounded-xl border border-gray-200 p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Сколько берёт аналитик-фрилансер в России в 2026 году?
                  <span className="text-gray-400 text-lg">+</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  В зависимости от специализации: Data Analyst — 1 500–3 500 ₽/час,
                  бизнес-аналитик — 1 200–3 000 ₽/час, системный аналитик — 1 500–3 500 ₽/час,
                  продуктовый аналитик — 1 800–4 000 ₽/час, BI-аналитик — 1 300–3 000 ₽/час.
                  Московские ставки выше на 30–40%.
                </p>
              </details>
              <details className="bg-white rounded-xl border border-gray-200 p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Почему продуктовый аналитик берёт больше других?
                  <span className="text-gray-400 text-lg">+</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Продуктовый аналитик напрямую влияет на бизнес-метрики: конверсию, retention, LTV.
                  Он совмещает навыки анализа данных, A/B-тестирования и понимание продуктовой стратегии.
                  Это пересечение с продукт-менеджментом даёт премию к ставке.
                </p>
              </details>
              <details className="bg-white rounded-xl border border-gray-200 p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Нужно ли аналитику оформлять самозанятость?
                  <span className="text-gray-400 text-lg">+</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Да, для легальной работы с большинством заказчиков нужен статус самозанятого
                  или ИП. Самозанятый платит 4% с доходов от физлиц и 6% — от юрлиц.
                  При доходе выше 2,4 млн ₽/год нужен переход на ИП. Подробнее в статье{" "}
                  <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="text-blue-600 hover:underline">
                    Самозанятый или ИП: что выгоднее
                  </Link>.
                </p>
              </details>
              <details className="bg-white rounded-xl border border-gray-200 p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Откуда данные по ставкам аналитиков?
                  <span className="text-gray-400 text-lg">+</span>
                </summary>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Данные агрегированы из открытых источников: Хабр Карьера, FL.ru, Kwork,
                  Telegram-каналы по аналитике данных (Data Learn, SQL для аналитиков и др.)
                  и отчётов по российскому рынку. Медиана отражает примерную середину
                  реальных предложений на март 2026.
                </p>
              </details>
            </div>
          </section>
        </article>

        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">← Калькулятор</Link>
            <Link href="/stati" className="hover:text-blue-600">Все статьи</Link>
            <Link href="/stavka" className="hover:text-blue-600">Ставки по специальностям</Link>
            <Link href="/goroda" className="hover:text-blue-600">По городам</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
