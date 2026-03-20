import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки разработчиков-фрилансеров в России 2026: таблица по 10 специализациям",
  description:
    "Сколько берёт программист-фрилансер в России в 2026 году? Медианные почасовые ставки для Frontend, Backend, Fullstack, Mobile, Python, PHP, DevOps, 1С, ML и QA разработчиков. Данные + калькулятор.",
  keywords: [
    "ставки разработчиков фрилансеров 2026",
    "сколько берёт программист фрилансер",
    "почасовая ставка разработчика",
    "ставка фронтенд разработчика",
    "ставка бэкенд разработчика",
    "сколько зарабатывает программист фрилансер",
    "ставка мобильного разработчика фрилансер",
    "ставка devops фрилансер",
    "ставки it специалистов фрилансеров",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-razrabotchikov-frilanserov-2026" },
  openGraph: {
    title: "Ставки разработчиков-фрилансеров в России 2026: таблица по 10 специализациям",
    description:
      "Медианные почасовые ставки для Frontend, Backend, Fullstack, Mobile, Python, DevOps и других IT-специализаций на фрилансе. Актуальные данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-razrabotchikov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-razrabotchikov-frilanserov-2026#article`,
      headline: "Ставки разработчиков-фрилансеров в России 2026: таблица по 10 специализациям",
      description:
        "Медианные почасовые ставки для 10 IT-специализаций на фрилансе в России. Реальные данные 2026 года.",
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
        "@id": `${BASE_URL}/stati/stavki-razrabotchikov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "Фриланс-разработка" },
        { "@type": "Thing", name: "Почасовая ставка программиста" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт программист-фрилансер в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В зависимости от специализации: Frontend — 1 500–3 000 ₽/час, Backend — 2 000–4 000 ₽/час, Fullstack — 2 000–4 500 ₽/час, Mobile — 2 500–5 000 ₽/час, DevOps — 2 500–6 000 ₽/час, ML-инженер — 3 000–7 000 ₽/час.",
          },
        },
        {
          "@type": "Question",
          name: "Почему фрилансер берёт больше, чем наёмный сотрудник?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Фрилансер сам оплачивает налоги (4–6% НПД или 6% + страховые взносы для ИП), простои между проектами, отпуск, оборудование и самообучение. Все эти расходы закладываются в ставку.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать свою ставку разработчику-фрилансеру?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте формулу: ставка = (желаемый доход + налоги + расходы) / (рабочие часы × коэффициент загрузки). Бесплатный калькулятор на FreelanceCalc делает этот расчёт автоматически с учётом вашей специализации.",
          },
        },
        {
          "@type": "Question",
          name: "Откуда данные по ставкам?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Данные агрегированы из открытых источников: Хабр Карьера, FL.ru, Kwork, Telegram-каналов по фрилансу и отчётов по российскому IT-рынку. Медиана отражает примерную середину реальных предложений.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько берёт Junior, Middle и Senior разработчик-фрилансер?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Junior (0–2 года): Frontend 600–1 200 ₽/ч, Backend 800–1 500 ₽/ч, Mobile 900–1 800 ₽/ч, DevOps 1 000–2 000 ₽/ч. Middle (2–5 лет): Frontend 1 500–2 500 ₽/ч, Backend 2 000–3 200 ₽/ч, Mobile 2 500–3 800 ₽/ч, DevOps 2 500–4 000 ₽/ч. Senior (5+ лет): Frontend 2 800–4 500 ₽/ч, Backend 3 500–6 000 ₽/ч, Mobile 4 000–6 500 ₽/ч, DevOps 4 000–7 500 ₽/ч.",
          },
        },
      ],
    },
  ],
};

const devSpecialties = [
  {
    name: "Frontend-разработчик",
    slug: "frontend-razrabotchik",
    median: "1 500–3 000 ₽/час",
    monthlyIncome: "от 150 000 до 350 000 ₽",
    demand: "Очень высокий",
    notes: "React, Vue, Angular. Высокий спрос от агентств и стартапов.",
  },
  {
    name: "Backend-разработчик",
    slug: "backend-razrabotchik",
    median: "2 000–4 000 ₽/час",
    monthlyIncome: "от 200 000 до 450 000 ₽",
    demand: "Очень высокий",
    notes: "Node.js, Java, Go, C#. Стабильный спрос от корпораций.",
  },
  {
    name: "Fullstack-разработчик",
    slug: "fullstack-razrabotchik",
    median: "2 000–4 500 ₽/час",
    monthlyIncome: "от 200 000 до 500 000 ₽",
    demand: "Высокий",
    notes: "Закрывает весь стек — ценится в небольших командах.",
  },
  {
    name: "Мобильный разработчик",
    slug: "mobilnyj-razrabotchik",
    median: "2 500–5 000 ₽/час",
    monthlyIncome: "от 250 000 до 550 000 ₽",
    demand: "Высокий",
    notes: "iOS (Swift), Android (Kotlin), Flutter. Дефицит специалистов.",
  },
  {
    name: "Python-разработчик",
    slug: "python-razrabotchik",
    median: "2 000–4 500 ₽/час",
    monthlyIncome: "от 200 000 до 500 000 ₽",
    demand: "Очень высокий",
    notes: "Веб (Django/FastAPI), автоматизация, Data Science.",
  },
  {
    name: "DevOps-инженер",
    slug: "devops-inzhener",
    median: "2 500–6 000 ₽/час",
    monthlyIncome: "от 250 000 до 650 000 ₽",
    demand: "Высокий",
    notes: "Kubernetes, CI/CD, AWS/Yandex Cloud. Один из топов по ставкам.",
  },
  {
    name: "PHP-разработчик",
    slug: "php-razrabotchik",
    median: "1 200–2 800 ₽/час",
    monthlyIncome: "от 120 000 до 300 000 ₽",
    demand: "Средний",
    notes: "WordPress, Bitrix, Laravel. Большой рынок малого бизнеса.",
  },
  {
    name: "1С-разработчик",
    slug: "1c-razrabotchik",
    median: "1 200–2 800 ₽/час",
    monthlyIncome: "от 120 000 до 300 000 ₽",
    demand: "Высокий",
    notes: "Тысячи клиентов — малый и средний бизнес по всей России.",
  },
  {
    name: "QA / Тестировщик",
    slug: "testirovshchik-qa",
    median: "900–2 000 ₽/час",
    monthlyIncome: "от 90 000 до 220 000 ₽",
    demand: "Средний",
    notes: "Ручное и автоматизированное тестирование. Selenium, Cypress.",
  },
  {
    name: "ML-инженер / AI-специалист",
    slug: "ml-inzhener",
    median: "3 000–7 000 ₽/час",
    monthlyIncome: "от 300 000 до 750 000 ₽",
    demand: "Очень высокий",
    notes: "Самый быстрорастущий сегмент. PyTorch, LLM, компьютерное зрение.",
  },
];

export default function DevRatesArticle() {
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
              <li className="text-gray-700">Ставки разработчиков-фрилансеров 2026</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ставки разработчиков-фрилансеров в России 2026: таблица по 10 специализациям
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>📅 Обновлено: март 2026</span>
            <span>⏱ 8 минут чтения</span>
            <span>👥 Frontend, Backend, Mobile, DevOps, ML</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Разработчики — самая многочисленная и высокооплачиваемая категория фрилансеров в России.
            Но «сколько берёт программист» — это почти бессмысленный вопрос без уточнения специализации.
            Ставка ML-инженера и ставка PHP-разработчика могут отличаться в 5 раз.
            Ниже — актуальные медианные данные по 10 IT-специализациям и объяснение, из чего складываются эти цифры.
          </p>

          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Узнайте свою ставку за 30 секунд</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход — калькулятор учтёт налоги, загрузку и отпуск и покажет,
              сколько нужно брать за час. Плюс сравнение с медианой по вашей специализации.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=article&utm_campaign=dev-rates-2026"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Main table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Медианные ставки разработчиков-фрилансеров в 2026 году
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
                  {devSpecialties.map((spec) => (
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
                          href={`/stavka/${spec.slug}?utm_source=stati&utm_medium=table&utm_campaign=dev-rates`}
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
              * Медианы агрегированы по данным Хабр Карьера, FL.ru, Kwork и Telegram-каналов специалистов.
              Данные на Q1 2026. Диапазон отражает уровни Junior–Senior.
            </p>
          </section>

          {/* Junior / Middle / Senior breakdown */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки разработчиков по уровню опыта: Junior, Middle, Senior
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Самый частый вопрос: «сколько берёт разработчик» — зависит не только от специализации,
              но и от опыта. Junior и Senior в одной области могут отличаться по ставке в 4–6 раз.
              Ниже — сводная таблица по уровням для ключевых IT-специализаций на фрилансе в 2026 году.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Специализация</th>
                    <th className="text-center px-4 py-3 font-semibold text-yellow-700 bg-yellow-50">Junior<br/><span className="text-xs font-normal text-gray-500">0–2 года</span></th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700 bg-blue-50">Middle<br/><span className="text-xs font-normal text-gray-500">2–5 лет</span></th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700 bg-green-50">Senior<br/><span className="text-xs font-normal text-gray-500">5+ лет</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "Frontend", junior: "600–1 200", middle: "1 500–2 500", senior: "2 800–4 500" },
                    { name: "Backend", junior: "800–1 500", middle: "2 000–3 200", senior: "3 500–6 000" },
                    { name: "Fullstack", junior: "800–1 500", middle: "2 000–3 500", senior: "3 500–6 000" },
                    { name: "Mobile (iOS/Android)", junior: "900–1 800", middle: "2 500–3 800", senior: "4 000–6 500" },
                    { name: "Python", junior: "800–1 500", middle: "2 000–3 500", senior: "3 500–6 000" },
                    { name: "DevOps", junior: "1 000–2 000", middle: "2 500–4 000", senior: "4 000–7 500" },
                    { name: "PHP", junior: "500–1 000", middle: "1 200–2 000", senior: "2 000–3 500" },
                    { name: "1С", junior: "500–1 000", middle: "1 200–2 000", senior: "2 200–3 800" },
                    { name: "QA / Тестировщик", junior: "400–900", middle: "900–1 600", senior: "1 600–2 800" },
                    { name: "ML / AI-инженер", junior: "1 200–2 000", middle: "2 800–4 500", senior: "4 500–8 000" },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                      <td className="px-4 py-3 text-center text-yellow-700 font-medium">{row.junior} ₽/ч</td>
                      <td className="px-4 py-3 text-center text-blue-700 font-semibold">{row.middle} ₽/ч</td>
                      <td className="px-4 py-3 text-center text-green-700 font-bold">{row.senior} ₽/ч</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              * Диапазоны отражают медианные ставки по данным Хабр Карьера, FL.ru, Kwork и Telegram-каналов специалистов на Q1 2026.
              Junior — до 2 лет опыта на фрилансе, Middle — 2–5 лет, Senior — 5+ лет и/или сильное портфолио.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-2">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="text-yellow-700 font-bold text-lg mb-1">Junior</div>
                <p className="text-sm text-gray-700">
                  Портфолио из учебных/pet-проектов, ограниченный коммерческий опыт.
                  Ставку занижать не стоит — даже Junior закладывает 30–40% на простои и налоги.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="text-blue-700 font-bold text-lg mb-1">Middle</div>
                <p className="text-sm text-gray-700">
                  2–3 коммерческих проекта в портфолио, понимание архитектурных решений.
                  Основной сегмент рынка — именно на Middle приходится большинство фриланс-заказов.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="text-green-700 font-bold text-lg mb-1">Senior</div>
                <p className="text-sm text-gray-700">
                  Уверенная экспертиза, способность принимать архитектурные решения, сильное портфолио.
                  Заказчики платят премию за скорость и предсказуемость результата.
                </p>
              </div>
            </div>
          </section>

          {/* Why rates differ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему ставки так сильно отличаются между специализациями?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Разница в ставках между PHP-разработчиком (1 200–2 800 ₽/час) и ML-инженером
              (3 000–7 000 ₽/час) не случайна — она отражает соотношение спроса и предложения на рынке.
              Несколько ключевых факторов:
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">📈 Дефицит специалистов</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ML-инженеры, DevOps и мобильные разработчики (особенно iOS) стоят дорого,
                  потому что их мало. Порог входа высокий, обучение занимает годы.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">💸 Цена ошибки</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ошибка DevOps-инженера или backend-архитектора может стоить компании миллионы.
                  Чем выше цена ошибки — тем выше ставка специалиста.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">🌍 Конкуренция с международным рынком</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Python- и ML-разработчики активно работают с зарубежными клиентами через Upwork
                  и Toptal — это подтягивает их ставки вверх.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">📦 Объём рынка заказчиков</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  PHP и 1С — огромный рынок малого бизнеса. Много заказов, но и много специалистов.
                  Конкуренция удерживает ставки умеренными.
                </p>
              </div>
            </div>
          </section>

          {/* Why freelancer > office */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему фрилансер берёт больше, чем штатный разработчик?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Часто слышишь: «ты берёшь 3 000 ₽/час, а в офисе программист получает 150 000 ₽/месяц
              — это же меньше». Давайте посчитаем.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-4">Что не оплачивает работодатель фрилансеру:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  ["Налог НПД (4–6%)", "Самозанятый платит сам"],
                  ["Страховые взносы (ИП)", "~50 000 ₽/год фиксировано"],
                  ["Отпуск (28 дней/год)", "~10% от годового дохода"],
                  ["Больничные", "Нет оплаты от заказчиков"],
                  ["Поиск клиентов", "10–30% рабочего времени"],
                  ["Оборудование и ПО", "Из своего кармана"],
                  ["Обучение и сертификаты", "Без компенсации"],
                  ["Простои между проектами", "Риск нулевого дохода"],
                ].map(([item, note]) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <div>
                      <span className="text-gray-800 font-medium">{item}</span>
                      <span className="text-gray-500 block text-xs">{note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Если считать честно, фрилансер с доходом 300 000 ₽/месяц — это примерно аналог
              штатного сотрудника с зарплатой 200 000–230 000 ₽. Разница съедается налогами,
              простоями и самостоятельными расходами.{" "}
              <Link href="/stati/frilans-vs-naym-2026" className="text-blue-600 hover:underline">
                Подробнее о сравнении фрилансер vs наём →
              </Link>
            </p>
          </section>

          {/* Individual specialty deep-dives */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Подробнее по ключевым специализациям
            </h2>

            {/* Frontend */}
            <div className="border border-gray-200 rounded-xl bg-white p-6 mb-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-gray-900">Frontend-разработчик</h3>
                <span className="text-green-700 font-bold text-sm whitespace-nowrap">1 500–3 000 ₽/час</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Самая массовая IT-специальность на фрилансе. Сотни заказов в день на FL.ru и Kwork.
                Нижняя граница ставки (1 500 ₽/час) — это, как правило, junior с опытом 1–2 года
                или разработчик с ограниченным стеком. Senior на React с TypeScript и опытом
                архитектуры компонентов спокойно берёт 2 500–3 000 ₽/час.
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Тренды 2026: растёт спрос на Next.js, Nuxt, микрофронтенды и разработчиков,
                которые понимают SEO и производительность.
              </p>
              <Link
                href="/stavka/frontend-razrabotchik?utm_source=stati&utm_medium=article&utm_campaign=dev-rates"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Калькулятор ставки Frontend-разработчика →
              </Link>
            </div>

            {/* Backend */}
            <div className="border border-gray-200 rounded-xl bg-white p-6 mb-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-gray-900">Backend-разработчик</h3>
                <span className="text-green-700 font-bold text-sm whitespace-nowrap">2 000–4 000 ₽/час</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Backend традиционно оплачивается выше frontend — ответственность за данные,
                безопасность и масштабируемость системы выше. Самые высокие ставки у специалистов
                по высоконагруженным системам (Go, Java, Kotlin) и микросервисам.
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Node.js и Python-backend — чуть дешевле (ниже порог входа), но по-прежнему
                значительно выше среднего по рынку.
              </p>
              <Link
                href="/stavka/backend-razrabotchik?utm_source=stati&utm_medium=article&utm_campaign=dev-rates"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Калькулятор ставки Backend-разработчика →
              </Link>
            </div>

            {/* Mobile */}
            <div className="border border-gray-200 rounded-xl bg-white p-6 mb-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-gray-900">Мобильный разработчик (iOS/Android)</h3>
                <span className="text-green-700 font-bold text-sm whitespace-nowrap">2 500–5 000 ₽/час</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Дефицит мобильных разработчиков сохраняется — найти хорошего iOS-специалиста
                сложнее, чем backend-разработчика. Swift и Kotlin нативный стек стоит дороже
                Flutter, но Flutter-разработчики тоже подросли в цене.
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Верхняя граница (4 500–5 000 ₽/час) — это опытный нативный iOS-разработчик
                с публикациями в App Store и портфолем крупных приложений.
              </p>
              <Link
                href="/stavka/mobilnyj-razrabotchik?utm_source=stati&utm_medium=article&utm_campaign=dev-rates"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Калькулятор ставки мобильного разработчика →
              </Link>
            </div>

            {/* DevOps */}
            <div className="border border-gray-200 rounded-xl bg-white p-6 mb-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-gray-900">DevOps-инженер</h3>
                <span className="text-green-700 font-bold text-sm whitespace-nowrap">2 500–6 000 ₽/час</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Один из самых высокооплачиваемых фрилансеров в IT. DevOps на фрилансе часто
                работает с несколькими компаниями одновременно, настраивая инфраструктуру
                «под ключ» — CI/CD, контейнеризация, мониторинг, безопасность.
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Фрилансеры с опытом в Yandex Cloud и российских облаках особенно востребованы
                после ухода зарубежных провайдеров.
              </p>
              <Link
                href="/stavka/devops-inzhener?utm_source=stati&utm_medium=article&utm_campaign=dev-rates"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Калькулятор ставки DevOps-инженера →
              </Link>
            </div>

            {/* ML */}
            <div className="border border-gray-200 rounded-xl bg-white p-6 mb-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-gray-900">ML-инженер / AI-специалист</h3>
                <span className="text-green-700 font-bold text-sm whitespace-nowrap">3 000–7 000 ₽/час</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Самая быстрорастущая специализация и один из лидеров по ставкам. Спрос на
                ML-инженеров вырос кратно с распространением LLM-приложений, RAG-систем
                и компьютерного зрения в бизнесе.
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Верхняя граница 7 000 ₽/час — это специалисты с опытом fine-tuning больших
                моделей, построения production ML-систем и участием в NeurIPS/ICLR.
              </p>
              <Link
                href="/stavka/ml-inzhener?utm_source=stati&utm_medium=article&utm_campaign=dev-rates"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Калькулятор ставки ML-инженера →
              </Link>
            </div>
          </section>

          {/* How to calculate your rate */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как рассчитать свою ставку разработчику?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Медианные данные — это ориентир, но не ваша ставка. Ваша ставка зависит от
              конкретного опыта, технологического стека, типа клиентов и города.
              Базовая формула:
            </p>
            <div className="bg-gray-900 text-green-400 rounded-xl p-5 font-mono text-sm mb-4">
              <p className="text-gray-400 mb-1">// Формула расчёта почасовой ставки</p>
              <p>ставка = (доход + налоги + расходы)</p>
              <p className="pl-8">/ (рабочие часы × загрузка%)</p>
              <p className="text-gray-400 mt-3">// Пример: Backend-разработчик, Москва</p>
              <p>доход = 300 000 ₽ (цель)</p>
              <p>НПД 6% = 19 149 ₽</p>
              <p>расходы = 15 000 ₽/мес</p>
              <p>часы = 160 ч/мес × 70% загрузка</p>
              <p className="text-yellow-400">→ ставка = 334 149 / 112 = ~2 983 ₽/ч</p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Но считать это вручную — лишнее. FreelanceCalc делает расчёт за 30 секунд
              с учётом вашего налогового режима (самозанятый или ИП), отпуска, коэффициента
              загрузки и рыночных медиан по специализации.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Frontend", slug: "frontend-razrabotchik" },
                { name: "Backend", slug: "backend-razrabotchik" },
                { name: "Fullstack", slug: "fullstack-razrabotchik" },
                { name: "Python", slug: "python-razrabotchik" },
                { name: "Mobile", slug: "mobilnyj-razrabotchik" },
                { name: "DevOps", slug: "devops-inzhener" },
                { name: "PHP", slug: "php-razrabotchik" },
                { name: "1С", slug: "1c-razrabotchik" },
                { name: "QA / Тестировщик", slug: "testirovshchik-qa" },
                { name: "ML / AI", slug: "ml-inzhener" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=stati&utm_medium=grid&utm_campaign=dev-rates`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  Калькулятор для {spec.name} →
                </Link>
              ))}
            </div>
          </section>

          {/* City factor */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Влияет ли город на ставку разработчика-фрилансера?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Формально фрилансер может работать из любой точки. Но на практике — да, город влияет:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <span>
                  <strong>Москва и Санкт-Петербург</strong> — концентрация крупных клиентов и бюджеты выше.
                  Московские заказчики в среднем готовы платить на 20–30% больше, чем региональные.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <span>
                  <strong>Краснодар, Екатеринбург, Новосибирск</strong> — активные IT-кластеры.
                  Ставки ниже московских на 10–20%, но стоимость жизни существенно ниже.
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                <span>
                  <strong>Удалённая работа с зарубежными клиентами</strong> — отдельная история.
                  Разработчики, работающие на Upwork или с европейскими клиентами,
                  могут зарабатывать в 2–3 раза больше рынка.
                </span>
              </li>
            </ul>
            <p className="text-gray-700">
              Посмотреть ставки по конкретным городам:{" "}
              <Link href="/goroda" className="text-blue-600 hover:underline">
                калькуляторы ставок по городам России →
              </Link>
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько зарабатывает разработчик-фрилансер в России в 2026 году?",
                  a: "В зависимости от специализации: Frontend — 150 000–350 000 ₽/месяц, Backend — 200 000–450 000 ₽, Mobile — 250 000–550 000 ₽, DevOps — 250 000–650 000 ₽, ML-инженер — 300 000–750 000 ₽. Данные указаны для загрузки 70% и опыта от 2 лет.",
                },
                {
                  q: "Нужно ли разработчику регистрироваться как самозанятый?",
                  a: "Если вы работаете с российскими заказчиками — да, нужно. Самозанятость позволяет легально принимать оплату, выдавать чеки через приложение «Мой налог» и платить всего 4–6% налога. Без этого у заказчика могут быть проблемы с учётом расходов. Подробнее: статья о самозанятом фрилансере.",
                },
                {
                  q: "Почему моя ставка ниже медианы?",
                  a: "Причины могут быть разные: недостаточный портфель, работа в низкобюджетном сегменте (биржи типа Kwork), низкий личный бренд, или вы реально в начале карьеры. FreelanceCalc показывает вашу экономически обоснованную минимальную ставку — ниже неё работать в минус.",
                },
                {
                  q: "Как повысить ставку разработчику-фрилансеру?",
                  a: "Несколько проверенных путей: специализация в дефицитной области (DevOps, ML), выход на зарубежных клиентов, создание кейсов с измеримыми результатами, рост личного бренда (GitHub, Habr, Telegram-канал). Подробнее — в статье «Как повысить ставку фрилансера».",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Средняя ставка фрилансера 2026: таблица по 22 специальностям",
                  href: "/stati/srednyaya-stavka-frilansera-2026",
                },
                {
                  title: "Как рассчитать ставку фрилансера: пошаговое руководство",
                  href: "/stati/kak-raschitat-stavku-frilansera",
                },
                {
                  title: "Фриланс vs найм 2026: что выгоднее для разработчика",
                  href: "/stati/frilans-vs-naym-2026",
                },
                {
                  title: "Ставки фрилансеров по городам России 2026",
                  href: "/stati/stavki-frilanserov-po-gorodam-2026",
                },
                {
                  title: "Скрытые расходы фрилансера: что забывают посчитать",
                  href: "/stati/skrytye-rashody-frilansera",
                },
                {
                  title: "Как повысить ставку фрилансера в 2026 году",
                  href: "/stati/kak-povysit-stavku-frilansera",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <span className="text-gray-700 text-sm group-hover:text-blue-700 leading-snug">
                    {article.title} →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте вашу ставку прямо сейчас</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. 30 секунд. Выберите специализацию и узнайте, сколько брать за час
              с учётом налогов, загрузки и рыночных медиан.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=cta&utm_campaign=dev-rates-bottom"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
