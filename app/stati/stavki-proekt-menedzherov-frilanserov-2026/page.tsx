import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки проект-менеджеров и продакт-менеджеров фрилансеров 2026: таблица",
  description:
    "Сколько берёт проект-менеджер или продакт-менеджер на фрилансе в России в 2026 году? Медианные ставки для PM, Product Manager, Scrum Master, Agile Coach и Product Owner. Реальные данные + калькулятор.",
  keywords: [
    "ставки проект менеджера фрилансера 2026",
    "ставки продакт менеджера фрилансера 2026",
    "сколько берёт проект менеджер фрилансер",
    "сколько зарабатывает продакт менеджер фрилансер",
    "почасовая ставка pm фрилансер",
    "ставка scrum master фрилансер",
    "ставка product owner фрилансер",
    "ставки проджект менеджеров россия",
    "сколько стоит нанять проект менеджера фрилансера",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-proekt-menedzherov-frilanserov-2026" },
  openGraph: {
    title: "Ставки проект-менеджеров и продакт-менеджеров фрилансеров 2026",
    description:
      "Медианные почасовые ставки для PM, Product Manager, Scrum Master, Product Owner на фрилансе. Реальные данные рынка России 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-proekt-menedzherov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-proekt-menedzherov-frilanserov-2026#article`,
      headline:
        "Ставки проект-менеджеров и продакт-менеджеров фрилансеров в России 2026",
      description:
        "Медианные почасовые ставки для 6 управленческих специализаций на фрилансе в России. Реальные данные 2026 года.",
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
        "@id": `${BASE_URL}/stati/stavki-proekt-menedzherov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "Проект-менеджер фрилансер" },
        { "@type": "Thing", name: "Продакт-менеджер фрилансер" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт проект-менеджер на фрилансе в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В зависимости от опыта и специализации: проект-менеджер (PM) — 1 200–3 500 ₽/час, продакт-менеджер — 1 500–4 500 ₽/час, Scrum Master — 1 400–3 200 ₽/час, Product Owner — 1 300–3 800 ₽/час. Специалисты с опытом в IT и подтверждёнными кейсами роста продукта берут 4 000–7 000 ₽/час.",
          },
        },
        {
          "@type": "Question",
          name: "Почему продакт-менеджер берёт больше проект-менеджера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Продакт-менеджер определяет стратегию продукта, влияет на метрики бизнеса (DAU, Retention, Revenue) и несёт ответственность за рыночный успех. Проект-менеджер управляет процессом — бюджетом, сроками, ресурсами. Влияние продакта на прибыль выше, отсюда и ставка.",
          },
        },
        {
          "@type": "Question",
          name: "Есть ли спрос на PM и продакт-менеджеров на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. На FL.ru и HH ежемесячно появляется 300–600 проектов для PM-специалистов на фрилансе. Особенно востребованы: запуск MVP, аудит процессов разработки, управление аутсорс-командами, interim PM на время поиска штатного.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ставки проект-менеджеров фрилансеров 2026",
          item: `${BASE_URL}/stati/stavki-proekt-menedzherov-frilanserov-2026`,
        },
      ],
    },
  ],
};

const pmSpecialties = [
  {
    name: "Продакт-менеджер (Product Manager)",
    slug: "product-manager",
    median: "1 500–4 500 ₽/час",
    monthlyIncome: "от 150 000 до 500 000 ₽",
    demand: "Очень высокий",
    notes: "Стратегия продукта, метрики роста, roadmap. Самая высокооплачиваемая управленческая роль.",
  },
  {
    name: "Product Owner (PO)",
    slug: "product-owner",
    median: "1 300–3 800 ₽/час",
    monthlyIncome: "от 130 000 до 420 000 ₽",
    demand: "Высокий",
    notes: "Бэклог, приоритизация, работа с командой разработки. Часто совмещают с PM-функциями.",
  },
  {
    name: "Проект-менеджер (PM)",
    slug: "proekt-menedzher",
    median: "1 200–3 500 ₽/час",
    monthlyIncome: "от 120 000 до 380 000 ₽",
    demand: "Высокий",
    notes: "Управление сроками, бюджетом, ресурсами. Востребован для аутсорс-проектов и запуска MVP.",
  },
  {
    name: "Scrum Master",
    slug: "scrum-master",
    median: "1 400–3 200 ₽/час",
    monthlyIncome: "от 140 000 до 350 000 ₽",
    demand: "Средний",
    notes: "Фасилитация agile-процессов, ретроспективы, устранение блокеров. Востребован в IT-командах.",
  },
  {
    name: "Agile Coach",
    slug: "agile-coach",
    median: "2 000–6 000 ₽/час",
    monthlyIncome: "от 200 000 до 600 000 ₽",
    demand: "Средний",
    notes: "Трансформация процессов на уровне организации. Работает проектно (2–6 месяцев). Высший уровень оплаты.",
  },
  {
    name: "Менеджер продукта (Interim PM)",
    slug: "interim-pm",
    median: "1 800–5 000 ₽/час",
    monthlyIncome: "от 180 000 до 550 000 ₽",
    demand: "Высокий",
    notes: "Временное замещение PM-роли в компании. Клиент платит за скорость — нет времени нанимать в штат.",
  },
];

export default function PmRatesArticle() {
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
              <li className="text-gray-700">Ставки PM и продакт-менеджеров 2026</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ставки проект-менеджеров и продакт-менеджеров фрилансеров в России 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>📅 Обновлено: март 2026</span>
            <span>⏱ 7 минут чтения</span>
            <span>📣 PM, Product Manager, Scrum Master, Agile Coach</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Управленческие роли — одни из самых высокооплачиваемых на фрилансе в IT. Если разработчик
            продаёт навык написания кода, то PM и продакт-менеджер продают снижение рисков и ускорение
            бизнеса. Именно это позволяет брать 1 500–6 000 ₽/час. Ниже — актуальные медианные данные
            по 6 управленческим специализациям и ответ на вопрос «почему фриланс-PM стоит столько».
          </p>

          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">
              Не теряйте деньги — узнайте свою реальную ставку за 30 секунд
            </p>
            <p className="text-blue-700 text-sm mb-4">
              Большинство PM-фрилансеров занижают ставку на 20–40%, не учитывая налоги,
              простои и отпуска. Калькулятор покажет точную цифру исходя из вашего желаемого дохода.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=article&utm_campaign=pm-rates-2026"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Main table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Медианные ставки PM и продакт-менеджеров фрилансеров в 2026 году
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
                  {pmSpecialties.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{spec.name}</td>
                      <td className="px-4 py-3 text-center font-semibold text-green-700">{spec.median}</td>
                      <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell text-xs">{spec.monthlyIncome}</td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            spec.demand === "Очень высокий"
                              ? "bg-green-100 text-green-800"
                              : spec.demand === "Высокий"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {spec.demand}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Link
                          href={`/?utm_source=stati&utm_medium=table&utm_campaign=pm-rates`}
                          className="text-blue-600 hover:underline text-xs font-medium"
                        >
                          Рассчитать →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Медианы агрегированы по данным FL.ru, HeadHunter, Habr Career, Telegram-каналов
              «Управление продуктом», «Product Sense», «PMclub». Данные на Q1 2026.
              Диапазон отражает уровни Junior–Senior.
            </p>
          </section>

          {/* Why rates differ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему продакт-менеджер на фрилансе берёт больше штатного
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Компания, нанимающая PM-фрилансера, платит больше по трём причинам:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-1">Скорость включения</h3>
                <p className="text-sm text-gray-600">
                  Поиск штатного PM занимает 2–4 месяца. Фрилансер стартует за неделю.
                  В IT каждый месяц промедления — потерянные деньги.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-1">Конкретная экспертиза</h3>
                <p className="text-sm text-gray-600">
                  «Нужен PM с опытом запуска B2B SaaS» — это редкий профиль.
                  Штатного с таким бэкграундом найти сложно. Фрилансер с кейсами
                  стоит своей ставки.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-900 mb-1">Без соцпакета</h3>
                <p className="text-sm text-gray-600">
                  Компания экономит 30–40% от зарплаты на налогах, страховке, отпускных
                  и офисных расходах. Часть этой экономии идёт в ставку фрилансера.
                </p>
              </div>
            </div>
          </section>

          {/* Product Manager deep dive */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Продакт-менеджер: самая дорогая управленческая роль на фрилансе
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Продакт-менеджер на фрилансе в 2026 году — это специалист, которому доверяют
              стратегические решения: что строить, для кого и почему. Спрос вырос после волны
              сокращений в IT-компаниях 2023–2024 годов: многие опытные PM ушли во фриланс,
              накопив портфолио в Яндексе, Сбере, VK, Mail.ru.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ставка 1 500–4 500 ₽/час — медиана. Продакты с опытом роста метрик на 30%+ (
              Retention, DAU, Revenue) берут 5 000–8 000 ₽/час. В Москве коэффициент +25–35%
              к средней ставке по России.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-amber-900 font-semibold mb-1">💡 Ключевой инсайт</p>
              <p className="text-amber-800 text-sm">
                Продакты, которые говорят на языке денег («увеличил Retention с 28% до 41% —
                это +12 млн ₽ годового ARR»), зарабатывают в 2–3 раза больше тех, кто
                рассказывает про «хорошие процессы» и «сильную команду».
                Клиент платит за влияние на выручку, а не за управление.
              </p>
            </div>
          </section>

          {/* PM vs Product Manager */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Проект-менеджер vs продакт-менеджер: в чём разница для фрилансера
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Проект-менеджер (PM)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Управляет <strong>процессом</strong>: сроками, бюджетом, командой и рисками.
                  Отвечает на вопрос «Как выполнить задачу в срок и в рамках бюджета?».
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Аутсорс-разработка под ключ</li>
                  <li>✓ Запуск конкретных IT-проектов</li>
                  <li>✓ Координация распределённых команд</li>
                  <li>✓ Антикризисное управление проектами</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">Типичная ставка: 1 200–3 500 ₽/час</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🚀 Продакт-менеджер</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Управляет <strong>продуктом</strong>: стратегией, метриками и ценностью для пользователей.
                  Отвечает на вопрос «Что строить и почему это важно для бизнеса?».
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Продуктовая стратегия и roadmap</li>
                  <li>✓ Исследования пользователей и рынка</li>
                  <li>✓ Работа с метриками (DAU, Retention, LTV)</li>
                  <li>✓ Запуск новых продуктов / фич</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">Типичная ставка: 1 500–4 500 ₽/час</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              На практике граница размытая. Многие фриланс-PM совмещают обе роли, особенно в стартапах
              и небольших командах. Совмещение функций — аргумент для повышения ставки на 20–30%.
            </p>
          </section>

          {/* Taxes section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Налоги и реальный доход PM-фрилансера
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Большинство фриланс-менеджеров работают как ИП (УСН 6%) или самозанятые. При доходе
              выше 2,4 млн ₽ в год самозанятость недоступна — переходят на ИП.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Расход</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">% от дохода</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">
                      При доходе 250 000 ₽
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { item: "Налог (ИП УСН 6% или НПД 6%)", pct: "6%", example: "15 000 ₽" },
                    { item: "Страховые взносы ИП (фиксированные)", pct: "~3%", example: "7 500 ₽" },
                    { item: "Простои между проектами (15–25%)", pct: "15–25%", example: "37 500–62 500 ₽" },
                    { item: "Отпуск (без оплаты клиентом)", pct: "8%", example: "20 000 ₽" },
                    {
                      item: "Инструменты (Jira, Miro, Notion, Figma, курсы)",
                      pct: "2–5%",
                      example: "5 000–12 500 ₽",
                    },
                    { item: "Маркетинг и продвижение", pct: "2–4%", example: "5 000–10 000 ₽" },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{row.item}</td>
                      <td className="px-4 py-3 text-center font-semibold text-red-600">{row.pct}</td>
                      <td className="px-4 py-3 text-gray-500 hidden md:table-cell text-xs">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed">
              В сумме «невидимые» расходы съедают 35–46% от брутто-дохода. Ставка
              PM-фрилансера должна быть на 70–90% выше эквивалентной штатной позиции,
              чтобы выйти на сопоставимый чистый доход.
            </p>
          </section>

          {/* How to grow rates */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как PM-фрилансеру поднять ставку: 5 конкретных шагов
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "1. Переведите результаты в деньги",
                  text: "«Запустил проект в срок» — это обязательный минимум. «Снизил time-to-market с 4 до 2 месяцев, что дало компании 3 месяца конкурентного преимущества» — вот это продаётся. Квантифицируйте каждый кейс.",
                },
                {
                  step: "2. Выберите узкую нишу",
                  text: "«PM для B2B-стартапов на стадии MVP» берёт больше «PM для любых IT-проектов». Узкая ниша — это сигнал экспертизы. Клиент готов платить за понимание именно его контекста.",
                },
                {
                  step: "3. Зарабатывайте сертификаты, которые видит рынок",
                  text: "PMP, PRINCE2, Professional Scrum Master (PSM I) или сертификация Product School — это сигнал на рынке. Не ради знаний, а ради доверия клиента при первом контакте.",
                },
                {
                  step: "4. Поднимайте ставку с каждым новым клиентом",
                  text: "Классическая ошибка — держать ставку годами. Правило: с каждым новым контрактом поднимайте на 10–15%. Если новый клиент согласился без торга — значит, можно было брать больше.",
                },
                {
                  step: "5. Продавайте результат, а не время",
                  text: "«Помогу запустить MVP за 3 месяца» вместо «80 часов консалтинга по PM». Клиент не хочет покупать ваше время — он хочет купить снижение риска и ускорение. Упакуйте предложение под его задачу.",
                },
              ].map((item, idx) => (
                <li key={idx} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.step}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Where to find projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Где PM-фрилансеру искать проекты в 2026 году
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  platform: "HeadHunter / hh.ru",
                  type: "Лучший источник",
                  desc: "Фильтр «Удалённая работа» + «Проектная работа». Крупные компании ищут interim PM именно здесь. Конкуренция ниже, чем на специализированных биржах.",
                },
                {
                  platform: "Habr Career",
                  type: "IT-профили",
                  desc: "Профессиональная аудитория IT-работодателей. Ставка выше средней, клиенты понимают специфику продуктовой работы. Лучший выбор для продакт-менеджеров.",
                },
                {
                  platform: "FL.ru",
                  type: "Биржа фрилансеров",
                  desc: "Большой поток задач, но высокая конкуренция. Хорошо подходит для наработки первых кейсов и отзывов. Для Senior PM — второстепенный канал.",
                },
                {
                  platform: "Telegram-каналы",
                  type: "Нетворкинг",
                  desc: "«PM Club», «Product Jobs», «Управление продуктом», «IT Remote Jobs». Многие хорошие контракты появляются через личные знакомства именно здесь.",
                },
              ].map((p, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">{p.platform}</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{p.type}</span>
                  </div>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы о ставках PM-фрилансеров
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Можно ли начать PM-фриланс без опыта в штате?",
                  a: "Сложно, но реально. Большинство фриланс-PM приходят с 2–5 летним штатным опытом. Без кейсов — ставка будет близка к минимуму (600–900 ₽/час). Альтернатива: начать с помощника PM или координатора проектов, наработать портфолио за 6–12 месяцев.",
                },
                {
                  q: "Как оформить отношения с клиентом?",
                  a: "Большинство фриланс-PM работают как самозанятые (при доходе до 2,4 млн ₽/год) или ИП на УСН 6%. ИП предпочтительно для крупных клиентов — им проще проводить крупные платежи юрлицу, чем самозанятому физлицу.",
                },
                {
                  q: "Сколько нужно клиентов одновременно?",
                  a: "Опытные PM-фрилансеры ведут 2–3 проекта параллельно при частичной занятости или 1 крупный при фуллтайм. Главный риск — взять слишком много и потерять качество. Лучше один довольный клиент с рекомендацией, чем три разочарованных.",
                },
              ].map((item, idx) => (
                <details key={idx} className="bg-white rounded-xl border border-gray-200 p-5 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA — Loss aversion framing */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">
              Не занижайте ставку — это стоит вам денег каждый месяц
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              PM-фрилансеры теряют в среднем 30–40% потенциального дохода, не учитывая налоги,
              простои и отсутствие отпускных. Рассчитайте правильную ставку за 30 секунд.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=bottom-cta&utm_campaign=pm-rates-2026"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </section>

          {/* Related articles */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  href: "/stati/stavki-razrabotchikov-frilanserov-2026",
                  title: "Ставки разработчиков-фрилансеров 2026",
                  desc: "Медианные ставки для frontend, backend, fullstack, мобильной разработки",
                },
                {
                  href: "/stati/stavki-analitikov-frilanserov-2026",
                  title: "Ставки аналитиков-фрилансеров 2026",
                  desc: "Data Analyst, Business Analyst, Systems Analyst — кто сколько берёт",
                },
                {
                  href: "/stati/kak-povysit-stavku-frilansera",
                  title: "Как поднять ставку: пошаговый план",
                  desc: "5 конкретных шагов для роста ставки на 30–50% за 3 месяца",
                },
                {
                  href: "/stati/skrytye-rashody-frilansera",
                  title: "Скрытые расходы фрилансера",
                  desc: "Что съедает 40% вашего дохода и как это учесть в ставке",
                },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-500">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
