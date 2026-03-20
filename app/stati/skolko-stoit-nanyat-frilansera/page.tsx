import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";
const CANONICAL = "/stati/skolko-stoit-nanyat-frilansera";

export const metadata: Metadata = {
  title: "Сколько стоит нанять фрилансера в 2026 году — ставки по специальностям",
  description:
    "Сколько платить фрилансеру? Реальные часовые ставки для разработчиков, дизайнеров, маркетологов и копирайтеров в 2026 году. Таблица ставок по рынку России + как рассчитать бюджет.",
  keywords: [
    "сколько стоит нанять фрилансера",
    "сколько берет фрилансер за работу",
    "сколько платить фрилансеру",
    "ставки фрилансеров россия 2026",
    "стоимость услуг фрилансера",
    "сколько стоит работа фрилансера",
    "бюджет на фрилансера",
    "hourly rate фрилансера россия",
    "сколько берет разработчик фрилансер",
    "сколько берет дизайнер фрилансер",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Сколько стоит нанять фрилансера в 2026 году",
    description:
      "Реальные ставки фрилансеров по специальностям в России: разработчики, дизайнеры, маркетологи. Таблица медиан + советы по бюджету.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}${CANONICAL}`,
    siteName: "FreelanceCalc",
    publishedTime: "2026-03-01T00:00:00Z",
    modifiedTime: "2026-03-20T00:00:00Z",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Сколько стоит нанять фрилансера в 2026 году — ставки по специальностям",
  description:
    "Реальные часовые ставки для разработчиков, дизайнеров, маркетологов и копирайтеров в 2026 году. Таблица ставок по рынку России.",
  url: `${BASE_URL}${CANONICAL}`,
  datePublished: "2026-03-01",
  dateModified: "2026-03-20",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько берёт фрилансер-разработчик за час работы в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Медианная ставка frontend-разработчика в Москве — 1 700–3 200 ₽/час, backend — 2 200–3 800 ₽/час, fullstack — 2 400–4 200 ₽/час. В регионах России ставки на 20–35% ниже. ML/AI-инженеры: 4 000–6 500 ₽/час.",
      },
    },
    {
      "@type": "Question",
      name: "Почему фрилансер берёт больше, чем штатный сотрудник?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Фрилансер сам платит налоги (4–12%), не получает оплату в периоды без заказов, сам покупает оборудование и ПО, не имеет оплачиваемого отпуска и больничных. Реальная загрузка — 60–75% рабочего времени. Чтобы получить 100 000 ₽ «на руки», фрилансер должен выставить счёт на 115 000–145 000 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать бюджет на разработку сайта с фрилансером?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Оцените количество часов на проект, умножьте на часовую ставку специалиста. Пример: лендинг = 20–40 часов × 1 700–3 200 ₽/ч = 34 000–128 000 ₽. Корпоративный сайт = 80–200 часов. Добавьте 20% буфер на правки и коммуникацию.",
      },
    },
    {
      "@type": "Question",
      name: "Где найти фрилансера по рыночной ставке?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Популярные площадки в России: FL.ru, Kwork, Habr Freelance, Upwork (для международных проектов). На Kwork фиксированные пакеты, на FL.ru — почасовая и проектная оплата. Ставки на Kwork часто ниже рыночных: специалисты демпингуют ради отзывов.",
      },
    },
    {
      "@type": "Question",
      name: "Как проверить, что ставка фрилансера соответствует рынку?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Сравните предложенную ставку с медианными данными по рынку: откройте PDF-бенчмарк FreelanceCalc с медианными ставками по 22 специальностям и 10 городам России. Это позволяет быстро понять, укладывается ли предложение специалиста в рыночный диапазон.",
      },
    },
  ],
};

const RATE_TABLE = [
  { specialty: "ML/AI-инженер", category: "Разработка", low: 4000, high: 6500, note: "Высший приоритет рынка" },
  { specialty: "DevOps-инженер", category: "Разработка", low: 3200, high: 5500, note: "Дефицит специалистов" },
  { specialty: "Мобильный разработчик", category: "Разработка", low: 2800, high: 4800, note: "iOS > Android по ставке" },
  { specialty: "Fullstack-разработчик", category: "Разработка", low: 2400, high: 4200, note: "Самый востребованный" },
  { specialty: "Backend-разработчик", category: "Разработка", low: 2200, high: 3800, note: "" },
  { specialty: "Frontend-разработчик", category: "Разработка", low: 1700, high: 3200, note: "" },
  { specialty: "UI/UX-дизайнер", category: "Дизайн", low: 1300, high: 2800, note: "" },
  { specialty: "Графический дизайнер", category: "Дизайн", low: 900, high: 2200, note: "" },
  { specialty: "Аналитик данных", category: "Аналитика", low: 1800, high: 3800, note: "" },
  { specialty: "Системный аналитик", category: "Аналитика", low: 1600, high: 3200, note: "" },
  { specialty: "Таргетолог", category: "Маркетинг", low: 1000, high: 2200, note: "" },
  { specialty: "SEO-специалист", category: "Маркетинг", low: 1100, high: 2200, note: "" },
  { specialty: "SMM-специалист", category: "Маркетинг", low: 800, high: 1800, note: "" },
  { specialty: "Копирайтер", category: "Тексты", low: 700, high: 1700, note: "" },
  { specialty: "Переводчик", category: "Тексты", low: 600, high: 1400, note: "" },
];

const categoryColor: Record<string, string> = {
  Разработка: "bg-blue-100 text-blue-700",
  Дизайн: "bg-pink-100 text-pink-700",
  Аналитика: "bg-purple-100 text-purple-700",
  Маркетинг: "bg-green-100 text-green-700",
  Тексты: "bg-orange-100 text-orange-700",
};

const PROJECT_ESTIMATES = [
  {
    name: "Лендинг (1 страница)",
    hours: "20–40 ч",
    specialist: "Frontend + дизайнер",
    budget: "34 000 – 128 000 ₽",
    note: "В зависимости от сложности",
  },
  {
    name: "Корпоративный сайт",
    hours: "80–200 ч",
    specialist: "Fullstack + дизайнер",
    budget: "220 000 – 840 000 ₽",
    note: "+CMS, интеграции — дороже",
  },
  {
    name: "Мобильное приложение (MVP)",
    hours: "200–600 ч",
    specialist: "Mobile + backend",
    budget: "500 000 – 2 800 000 ₽",
    note: "Зависит от платформы и функций",
  },
  {
    name: "SEO-продвижение (мес)",
    hours: "20–60 ч/мес",
    specialist: "SEO-специалист",
    budget: "22 000 – 132 000 ₽/мес",
    note: "Результат через 3–6 месяцев",
  },
  {
    name: "Таргетированная реклама",
    hours: "15–40 ч/мес",
    specialist: "Таргетолог",
    budget: "15 000 – 88 000 ₽/мес",
    note: "+ бюджет на рекламу",
  },
  {
    name: "Брендинг / логотип",
    hours: "20–60 ч",
    specialist: "UI/UX или графический дизайнер",
    budget: "18 000 – 168 000 ₽",
    note: "Зависит от опыта дизайнера",
  },
];

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline font-medium">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-blue-600 hover:underline">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 truncate">Сколько стоит нанять фрилансера</span>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-full">
                Для заказчиков
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                Обновлено март 2026
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Сколько стоит нанять фрилансера в 2026 году
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Реальные рыночные ставки для разработчиков, дизайнеров, маркетологов и копирайтеров.
              Таблица по специальностям, типичные бюджеты на проекты и советы, как не переплатить.
            </p>
          </div>

          {/* TL;DR box */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <p className="text-sm font-semibold text-amber-800 mb-2">Коротко: ключевые цифры Q1 2026</p>
            <ul className="text-sm text-amber-900 space-y-1">
              <li>💻 <strong>Разработчики:</strong> 1 700–6 500 ₽/час (зависит от стека и опыта)</li>
              <li>🎨 <strong>Дизайнеры:</strong> 900–2 800 ₽/час</li>
              <li>📈 <strong>Маркетологи:</strong> 800–2 200 ₽/час</li>
              <li>✍️ <strong>Копирайтеры:</strong> 700–1 700 ₽/час</li>
              <li>📍 <strong>Москва vs регионы:</strong> разница 20–40%</li>
            </ul>
          </div>

          {/* Section 1: Why freelancers charge more */}
          <section className="mb-8 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Почему фрилансер стоит дороже штатного сотрудника?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Первая реакция многих заказчиков: «Сотрудник с зарплатой 100 000 ₽ обходится дешевле,
              чем фрилансер с ставкой 2 000 ₽/час». Это иллюзия. Посчитаем честно:
            </p>
            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4 not-prose">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Штатный сотрудник (100 000 ₽/мес)</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>+ НДФЛ 13% → вы платите ~115 000 ₽</li>
                    <li>+ Страховые взносы 30% → +30 000 ₽</li>
                    <li>+ Отпуск 28 дней → ~10 000 ₽/мес</li>
                    <li>+ Больничные, оборудование, офис</li>
                    <li className="font-semibold text-red-600 pt-2">
                      Итого: ~170–200 000 ₽/мес факт. расходов
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Фрилансер (2 000 ₽/ч)</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>160 ч/мес × 2 000 ₽ = 320 000 ₽</li>
                    <li className="text-amber-700">Но: нужны реально 80–100 ч/мес задач</li>
                    <li>80 ч × 2 000 ₽ = 160 000 ₽</li>
                    <li>Налоги, отпуск, соцпакет — за свой счёт</li>
                    <li className="font-semibold text-green-600 pt-2">
                      Итого: платите только за реальную работу
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              При загрузке менее 50% рабочего времени фрилансер выгоднее штатного сотрудника.
              При полной нагрузке — штат. Для большинства проектов (особенно разовых или сезонных)
              фрилансер — оптимальный выбор.
            </p>
          </section>

          {/* Section 2: Rate table */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Таблица ставок фрилансеров по специальностям — Q1 2026
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Медианные часовые ставки по Москве. В регионах России — на 20–35% ниже.
              Данные: FL.ru, Хабр Карьера, Kwork, Telegram-чаты специалистов.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Специальность</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600">Ставка (Москва)</th>
                    <th className="hidden md:table-cell text-right px-4 py-3 font-semibold text-gray-600">Проект 40 ч</th>
                  </tr>
                </thead>
                <tbody>
                  {RATE_TABLE.map((row, i) => (
                    <tr
                      key={row.specialty}
                      className={`border-b border-gray-50 last:border-0 ${i % 2 === 0 ? "" : "bg-gray-50/40"}`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-800 text-sm">{row.specialty}</div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span
                            className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                              categoryColor[row.category] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {row.category}
                          </span>
                          {row.note && (
                            <span className="text-xs text-gray-400">{row.note}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-semibold text-gray-900">
                          {row.low.toLocaleString("ru-RU")}–{row.high.toLocaleString("ru-RU")} ₽/ч
                        </span>
                      </td>
                      <td className="hidden md:table-cell px-4 py-3 text-right text-gray-500 text-xs">
                        {(row.low * 40).toLocaleString("ru-RU")}–{(row.high * 40).toLocaleString("ru-RU")} ₽
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Benchmark upsell */}
            <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex-1">
                <p className="text-sm font-semibold text-indigo-800">
                  📊 Полный бенчмарк: 22 специальности × 10 городов
                </p>
                <p className="text-xs text-indigo-600 mt-0.5">
                  Москва, СПб, Новосибирск, Екатеринбург, Казань, Краснодар и ещё 4 города — в PDF.
                </p>
              </div>
              <Link
                href="/benchmark"
                className="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Скачать PDF — 249 ₽
              </Link>
            </div>
          </section>

          {/* Section 3: Project budgets */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Типичные бюджеты на проекты с фрилансерами
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Расчёт: медианная ставка специалиста × оценочное количество часов. Данные — Москва.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {PROJECT_ESTIMATES.map((p) => (
                <div key={p.name} className="bg-white rounded-xl border border-gray-200 p-4">
                  <p className="font-semibold text-gray-800 text-sm mb-1">{p.name}</p>
                  <p className="text-xs text-gray-500 mb-2">{p.specialist} · {p.hours}</p>
                  <p className="text-lg font-bold text-indigo-700">{p.budget}</p>
                  {p.note && (
                    <p className="text-xs text-gray-400 mt-1">{p.note}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Red flags */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Красные флаги: когда ставка подозрительно низкая
            </h2>
            <div className="space-y-3">
              {[
                {
                  flag: "Ставка в 3–5 раз ниже рынка",
                  risk: "Скорее всего, начинающий без опыта или специалист, работающий параллельно на нескольких клиентах. Рискуете получить низкое качество и сорванные дедлайны.",
                },
                {
                  flag: "Нет портфолио и отзывов",
                  risk: "Невозможно проверить реальный уровень. Попросите тестовое задание или рекомендации прошлых клиентов.",
                },
                {
                  flag: "Берётся за всё подряд",
                  risk: "«Я и разработчик, и дизайнер, и маркетолог» — обычно означает поверхностное знание каждой области. Ищите узких специалистов.",
                },
                {
                  flag: "Предоплата 100% сразу",
                  risk: "Стандарт — 50% аванс, 50% после сдачи. Запрос 100% предоплаты без репутации — риск.",
                },
              ].map((item) => (
                <div key={item.flag} className="bg-white rounded-xl border border-red-100 p-4 flex gap-3">
                  <span className="text-red-500 text-lg flex-shrink-0">⚠️</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">{item.flag}</p>
                    <p className="text-sm text-gray-600">{item.risk}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: How to negotiate */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как договориться о справедливой цене
            </h2>
            <ol className="space-y-3">
              {[
                {
                  step: "Изучите рыночную медиану",
                  detail: "Используйте данный бенчмарк или PDF с полной таблицей, чтобы понять реалистичный диапазон для нужной специальности в вашем городе.",
                },
                {
                  step: "Попросите разбивку по часам",
                  detail: "Попросите фрилансера оценить задачи в часах: «дизайн макета — 8 часов, вёрстка — 12 часов». Так проще контролировать и согласовывать бюджет.",
                },
                {
                  step: "Фиксируйте объём в договоре",
                  detail: "Ставка без фиксации объёма — открытый бюджет. Обговорите, что входит, сколько правок, как фиксируются доработки.",
                },
                {
                  step: "Предложите долгосрочное сотрудничество",
                  detail: "Фрилансеры часто дают скидку 10–20% за гарантированную загрузку. Ретейнер на 3–6 месяцев выгоднее разовых задач.",
                },
              ].map((item, i) => (
                <li key={item.step} className="flex gap-3 bg-white rounded-xl border border-gray-200 p-4">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">{item.step}</p>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Benchmark CTA */}
          <section className="mb-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white text-center">
            <div className="text-4xl mb-3">📊</div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Полный бенчмарк ставок — 249 ₽
            </h2>
            <p className="text-indigo-100 text-sm mb-5 max-w-md mx-auto leading-relaxed">
              22 специальности × 10 городов России. Москва, СПб и 8 региональных центров.
              Разбивка джун / мид / сеньор. Данные Q1 2026. PDF — скачать сразу после оплаты.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/benchmark"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                Посмотреть бенчмарк →
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-sm text-indigo-200 hover:text-white underline underline-offset-2"
              >
                Калькулятор ставки фрилансера
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Частые вопросы заказчиков</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Сколько берёт фрилансер-разработчик за час работы в 2026 году?",
                  a: "Медианная ставка frontend-разработчика в Москве — 1 700–3 200 ₽/час, backend — 2 200–3 800 ₽/час, fullstack — 2 400–4 200 ₽/час. В регионах на 20–35% ниже. ML/AI-инженеры — 4 000–6 500 ₽/час.",
                },
                {
                  q: "Почему фрилансер берёт больше, чем штатный сотрудник?",
                  a: "Фрилансер сам оплачивает налоги (4–12%), не получает оплату в периоды без заказов, сам покупает оборудование. Его реальная загрузка — 60–75% рабочего времени. Поэтому ставка выше офисной, но вы платите только за реальную работу.",
                },
                {
                  q: "Как проверить, что ставка фрилансера соответствует рынку?",
                  a: "Сравните с медианными данными по рынку. Бенчмарк FreelanceCalc содержит ставки по 22 специальностям и 10 городам России — можно быстро проверить, укладывается ли предложение специалиста в рыночный диапазон.",
                },
                {
                  q: "Как рассчитать бюджет на разработку сайта с фрилансером?",
                  a: "Оцените часы × ставку. Лендинг: 20–40 ч × 1 700–3 200 ₽/ч = 34 000–128 000 ₽. Корпоративный сайт: 80–200 ч. Добавьте 20% буфер на правки.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                  <p className="font-semibold text-gray-800 text-sm mb-2">{item.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-8 bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">Связанные материалы</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "/", label: "Калькулятор ставки фрилансера" },
                { href: "/benchmark", label: "Бенчмарк ставок PDF" },
                { href: "/stavka/frontend-razrabotchik", label: "Ставка Frontend-разработчика" },
                { href: "/stavka/dizajner-ui-ux", label: "Ставка UI/UX-дизайнера" },
                { href: "/stavka/seo-specialist", label: "Ставка SEO-специалиста" },
                { href: "/stati/srednyaya-stavka-frilansera-2026", label: "Средняя ставка фрилансера 2026" },
                { href: "/stati/frilans-vs-naym-2026", label: "Фриланс vs найм 2026" },
                { href: "/goroda", label: "Ставки по городам" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs bg-gray-100 hover:bg-indigo-50 hover:text-indigo-700 text-gray-600 px-3 py-1.5 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <footer className="text-xs text-gray-400 pt-4 border-t border-gray-200">
            <p>
              Данные носят ориентировочный характер. Источники: FL.ru, Хабр Карьера, Kwork,
              Telegram-сообщества специалистов. Актуально для Q1 2026.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
