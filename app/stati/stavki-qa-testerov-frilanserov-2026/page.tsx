import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки QA-тестировщиков-фрилансеров в России 2026: ручное и автоматизированное тестирование",
  description:
    "Сколько берёт QA-тестировщик-фрилансер в России в 2026 году? Медианные ставки для ручного тестирования, automation QA, mobile QA, нагрузочного и security-тестирования. Реальные данные рынка + калькулятор.",
  keywords: [
    "ставки qa тестировщиков фрилансеров 2026",
    "сколько берёт тестировщик фрилансер",
    "qa engineer фриланс ставка",
    "ставка тестировщика в час",
    "automation qa фриланс зарплата",
    "manual qa freelancer ставка",
    "сколько зарабатывает тестировщик на фрилансе",
    "стоимость тестирования фрилансер",
    "ставки тестировщиков россия 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-qa-testerov-frilanserov-2026" },
  openGraph: {
    title: "Ставки QA-тестировщиков-фрилансеров в России 2026",
    description:
      "Медианные почасовые ставки для ручного тестирования, automation QA, mobile QA и нагрузочного тестирования на фрилансе. Реальные данные рынка 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-qa-testerov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-qa-testerov-frilanserov-2026#article`,
      headline:
        "Ставки QA-тестировщиков-фрилансеров в России 2026: ручное и автоматизированное тестирование",
      description:
        "Медианные почасовые ставки для 6 QA-специализаций на фрилансе в России. Реальные данные рынка 2026.",
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
        "@id": `${BASE_URL}/stati/stavki-qa-testerov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "Фриланс QA тестирование" },
        { "@type": "Thing", name: "Почасовая ставка тестировщика" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт QA-тестировщик-фрилансер в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В зависимости от специализации: ручной тестировщик (Middle) — 700–1 500 ₽/час, automation QA (Middle) — 1 200–2 500 ₽/час, automation QA (Senior) — 2 500–4 500 ₽/час, mobile QA — 800–2 000 ₽/час, нагрузочное тестирование — 1 500–3 500 ₽/час, QA Lead — 2 000–4 000 ₽/час.",
          },
        },
        {
          "@type": "Question",
          name: "Почему automation QA берёт значительно больше ручного тестировщика?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Автоматизатор пишет код: знает Python, Java или JavaScript, умеет работать с Selenium, Playwright, Cypress, REST Assured. Это пересечение навыков разработчика и тестировщика — отсюда и ставка ближе к программистской. Ручной тестировщик без навыков автоматизации занимает нижний ценовой сегмент.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать ставку QA-тестировщику-фрилансеру?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте формулу: ставка = (желаемый доход + налоги + простои) / рабочие часы. При доходе 150 000 ₽/мес, налоге самозанятого 6% и загрузке 70%: нужная ставка = 150 000 / (0,94 × 112 часов) ≈ 1 425 ₽/час. Бесплатный калькулятор на FreelanceCalc считает автоматически.",
          },
        },
        {
          "@type": "Question",
          name: "Выгодно ли QA-специалисту уходить на фриланс?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automation QA Senior в офисе получает 150–220 тыс. ₽/мес. На фрилансе при ставке 3 000 ₽/час и загрузке 80 часов/мес — 240 000 ₽/мес до налогов. Ручному тестировщику Junior переход менее выгоден: нижний порог ставок конкурирует с офисной зарплатой. Всё зависит от уровня и специализации.",
          },
        },
        {
          "@type": "Question",
          name: "Откуда данные по ставкам QA-тестировщиков?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Данные агрегированы из открытых источников: Хабр Карьера, FL.ru, Kwork, HeadHunter (раздел проектной занятости), Telegram-каналов QA-сообщества. Медиана отражает примерную середину реальных предложений на рынке в Q1 2026.",
          },
        },
      ],
    },
  ],
};

const qaSpecialties = [
  {
    name: "Ручной тестировщик (Manual QA)",
    slug: "qa-inzhener",
    median: "700–1 500 ₽/час",
    monthlyIncome: "от 70 000 до 170 000 ₽",
    demand: "Высокий",
    notes: "Test cases, баг-репорты, Jira, Confluence, Postman для API. Старт фриланс-карьеры в QA.",
  },
  {
    name: "Automation QA (Junior–Middle)",
    slug: "qa-inzhener",
    median: "1 200–2 500 ₽/час",
    monthlyIncome: "от 130 000 до 280 000 ₽",
    demand: "Очень высокий",
    notes: "Selenium, Playwright, Cypress. Python/Java/JS. Самый быстрорастущий сегмент QA на фрилансе.",
  },
  {
    name: "Automation QA (Senior)",
    slug: "qa-inzhener",
    median: "2 500–4 500 ₽/час",
    monthlyIncome: "от 270 000 до 500 000 ₽",
    demand: "Очень высокий",
    notes: "Архитектура тест-фреймворков, CI/CD интеграция, Jenkins/GitLab CI. Ставка близка к разработчику.",
  },
  {
    name: "Mobile QA",
    slug: "qa-inzhener",
    median: "800–2 000 ₽/час",
    monthlyIncome: "от 90 000 до 220 000 ₽",
    demand: "Высокий",
    notes: "iOS/Android тестирование, XCUITest, Espresso, Appium. Спрос от мобильных продуктов и стартапов.",
  },
  {
    name: "Нагрузочное тестирование (Performance QA)",
    slug: "qa-inzhener",
    median: "1 500–3 500 ₽/час",
    monthlyIncome: "от 160 000 до 380 000 ₽",
    demand: "Средний",
    notes: "JMeter, Gatling, k6, Locust. Узкая специализация с Premium-надбавкой.",
  },
  {
    name: "QA Lead / Test Manager",
    slug: "qa-inzhener",
    median: "2 000–4 000 ₽/час",
    monthlyIncome: "от 220 000 до 430 000 ₽",
    demand: "Средний",
    notes: "Выстраивание процессов тестирования, управление QA-командой. Часто нанимается на проект под запуск.",
  },
];

export default function QaRatesArticle() {
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
              <li className="text-gray-700">Ставки QA-тестировщиков-фрилансеров 2026</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ставки QA-тестировщиков-фрилансеров в России 2026: таблица по специализациям
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>📅 Обновлено: март 2026</span>
            <span>⏱ 7 минут чтения</span>
            <span>👥 Manual QA, Automation, Mobile, Performance, QA Lead</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            QA — одна из самых стабильных фриланс-специальностей: проекты всегда нужно тестировать,
            а нанимать штатного тестировщика на один релиз невыгодно. В 2026 году спрос на QA-фрилансеров
            вырос: компании сокращают офисные команды, но тест-задачи никуда не уходят.
            Разброс ставок внутри профессии — в 4–6 раз: от junior manual до senior automation.
            Ниже — актуальные медианные данные по 6 специализациям.
          </p>

          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Узнайте свою ставку за 30 секунд</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход — калькулятор учтёт налог самозанятого, реальную загрузку
              и отпуск и покажет, сколько нужно брать за час работы.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=article&utm_campaign=qa-rates-2026"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Main table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Медианные ставки QA-тестировщиков-фрилансеров в 2026 году
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
                  {qaSpecialties.map((spec, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
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
                          href={`/?utm_source=stati&utm_medium=table&utm_campaign=qa-rates-2026`}
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
              * Данные: медиана рыночных предложений Хабр Карьера, FL.ru, Kwork, HeadHunter (проектная занятость), Telegram QA-сообщество. Март 2026.
            </p>
          </section>

          {/* Specialty breakdowns */}
          <section className="mb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Подробно по каждой специализации
            </h2>

            {/* Manual QA */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Ручной тестировщик (Manual QA)</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  700–1 500 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Самый массовый сегмент QA на фрилансе. Типичные задачи: написание тест-кейсов,
                функциональное регрессионное тестирование, баг-репорты в Jira, smoke-тесты после
                деплоя. Много разовой работы — «проверить сайт перед запуском», «протестировать
                API через Postman».
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">Jira / YouTrack</div>
                  <div className="text-gray-500 text-xs">обязательно</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">Postman</div>
                  <div className="text-gray-500 text-xs">желательно</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">SQL (базовый)</div>
                  <div className="text-gray-500 text-xs">даёт +20% к ставке</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">DevTools</div>
                  <div className="text-gray-500 text-xs">базово</div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                <strong>Важно:</strong> ручное тестирование — самый конкурентный сегмент. Чтобы
                выйти из нижнего ценового диапазона (700–900 ₽/час), нужны либо глубокое знание
                домена (fintech, медицина, e-commerce), либо базовые навыки автоматизации.
              </div>
            </div>

            {/* Automation QA */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Automation QA</h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  1 200–4 500 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Самый востребованный и высокооплачиваемый QA-сегмент. Автоматизаторы пишут
                UI-тесты (Selenium, Playwright, Cypress), API-тесты (RestAssured, Supertest),
                строят тест-фреймворки и интегрируют их в CI/CD-пайплайны. По навыкам —
                пересечение разработчика и тестировщика, отсюда и ставка.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">Playwright / Cypress</div>
                  <div className="text-gray-500 text-xs">тренд 2026</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">Python / Java / JS</div>
                  <div className="text-gray-500 text-xs">обязательно</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">GitLab CI / Jenkins</div>
                  <div className="text-gray-500 text-xs">Senior-уровень</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                <strong>Ставка Senior Automation QA</strong> (2 500–4 500 ₽/час) сравнима
                с Middle-разработчиком. Специалисты, умеющие строить тест-инфраструктуру
                с нуля, дефицитны — особенно в стартапах, которые «внезапно» поняли,
                что нужно покрыть продукт тестами перед раундом.
              </p>
            </div>

            {/* Mobile QA */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Mobile QA</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  800–2 000 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Тестирование мобильных приложений под iOS и Android. Работа с реальными
                устройствами и эмуляторами, проверка под разные размеры экранов и версии ОС.
                Ручные Mobile QA работают на нижнем диапазоне, автоматизаторы с опытом в Appium,
                XCUITest или Espresso — на верхнем.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-sm text-indigo-800">
                <strong>Рост спроса:</strong> с 2024 года всё больше e-commerce и fintech
                делают mobile-first продукты. Заказы на Mobile QA в Kwork и FL.ru выросли
                примерно в 1,5 раза год к году.
              </div>
            </div>

            {/* Performance QA */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Нагрузочное тестирование (Performance QA)</h3>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  1 500–3 500 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Узкая специализация с premium-ставкой. Задачи: нагрузочные тесты перед запуском
                (JMeter, Gatling, k6, Locust), профилирование узких мест, отчёты по RPS/latency.
                Обычно нанимается разово — перед Чёрной пятницей, запуском нового сервиса
                или перед выходом на рынок.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Типичный проект:</strong> нагрузочное тестирование API (5–10 сценариев) —
                60 000–150 000 ₽ за проект. При ставке 2 000 ₽/час = 30–75 часов работы.
              </p>
            </div>

            {/* QA Lead */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">QA Lead / Test Manager</h3>
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  2 000–4 000 ₽/час
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                QA Lead на фрилансе нанимают под конкретную задачу: выстроить тест-процессы
                в команде, подготовить к сертификации (например, ISO или требованиям крупного заказчика),
                запустить QA с нуля в стартапе. Часто это проектная работа на 1–3 месяца.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                <strong>Важно понимать:</strong> QA Lead на фрилансе — не управленец в традиционном
                смысле. Это практик с опытом, который умеет и руками работать, и процессы строить.
                Чисто менеджерские роли на фрилансе продаются значительно хуже.
              </div>
            </div>
          </section>

          {/* Junior vs Senior comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Junior vs Senior QA: разница в ставках и типах заказов
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-lg font-bold text-gray-900 mb-2">Junior QA</div>
                <div className="text-2xl font-bold text-green-700 mb-3">400–800 ₽/час</div>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>• Регрессионное тестирование по готовым тест-кейсам</li>
                  <li>• Баг-репорты по шаблону</li>
                  <li>• Smoke-тесты после деплоя</li>
                  <li>• Небольшие проекты на Kwork</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-indigo-200 p-5 shadow-sm">
                <div className="text-lg font-bold text-gray-900 mb-2">Middle QA</div>
                <div className="text-2xl font-bold text-green-700 mb-3">800–2 000 ₽/час</div>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>• Самостоятельно пишет тест-документацию</li>
                  <li>• API-тестирование (Postman, Newman)</li>
                  <li>• Базовые навыки автоматизации — плюс 50% к ставке</li>
                  <li>• Полноценный участник спринтов</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-lg font-bold text-gray-900 mb-2">Senior QA</div>
                <div className="text-2xl font-bold text-green-700 mb-3">2 500–4 500 ₽/час</div>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>• Проектирует тест-стратегию</li>
                  <li>• Строит автотест-инфраструктуру с нуля</li>
                  <li>• CI/CD интеграция, DevOps-взаимодействие</li>
                  <li>• Консультирует и принимает решения</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to calculate your rate */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как посчитать свою ставку QA-фрилансеру
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Многие тестировщики устанавливают ставку «по рынку» — смотрят похожие объявления
              и берут среднее. Это ошибка: без учёта налогов и реальной загрузки легко
              оказаться в минусе.
            </p>
            <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm mb-4">
              <div className="text-gray-400 mb-2">// Формула расчёта ставки</div>
              <div>желаемый_доход = 150 000 ₽/мес</div>
              <div>налог_самозанятый = 6% (с юрлиц)</div>
              <div>загрузка = 70% (реальная для начала)</div>
              <div>рабочих_часов = 160 ч/мес × 70% = 112 ч</div>
              <div className="mt-3 text-green-400">
                ставка = 150 000 / (0.94 × 112) ≈ 1 425 ₽/час
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              При этом не забудьте про «невидимые» расходы: простои между проектами, обучение,
              ПО для тестирования (подписки на TestRail, BrowserStack), отпуск и больничные
              за свой счёт. Подробнее — в статье про{" "}
              <Link href="/stati/skrytye-rashody-frilansera" className="text-blue-600 hover:underline">
                скрытые расходы фрилансера
              </Link>.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-blue-900 font-semibold mb-2">
                Рассчитайте точную ставку с учётом вашей специфики
              </p>
              <p className="text-blue-700 text-sm mb-4">
                Укажите желаемый доход, режим налогообложения и загрузку — калькулятор
                покажет нужную часовую ставку и сравнит с медианой по QA-рынку.
              </p>
              <Link
                href="/?utm_source=stati&utm_medium=cta&utm_campaign=qa-rates-2026"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Открыть калькулятор →
              </Link>
            </div>
          </section>

          {/* City comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки QA-тестировщиков по городам
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              QA-фрилансеры работают удалённо, поэтому география заказчика важнее географии
              исполнителя. Тем не менее, ожидания по ставке у фрилансеров из разных городов
              различаются — особенно у тех, кто только начинает.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Город</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Manual QA Middle</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Automation QA Middle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { city: "Москва", manualLink: "/goroda/moskva", manual: "900–1 800 ₽/час", auto: "1 500–3 000 ₽/час" },
                    { city: "Санкт-Петербург", manualLink: "/goroda/sankt-peterburg", manual: "800–1 600 ₽/час", auto: "1 400–2 800 ₽/час" },
                    { city: "Екатеринбург", manualLink: "/goroda/ekaterinburg", manual: "700–1 400 ₽/час", auto: "1 200–2 500 ₽/час" },
                    { city: "Новосибирск", manualLink: "/goroda/novosibirsk", manual: "650–1 300 ₽/час", auto: "1 100–2 300 ₽/час" },
                    { city: "Регионы (медиана)", manualLink: "/goroda", manual: "600–1 200 ₽/час", auto: "1 000–2 000 ₽/час" },
                  ].map((row) => (
                    <tr key={row.city} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <Link href={row.manualLink} className="hover:text-blue-600 hover:underline">
                          {row.city}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.manual}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{row.auto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Фрилансеры из регионов, работающие с московскими заказчиками, как правило, могут претендовать
              на ставки, близкие к московским — если портфолио и коммуникации соответствуют.
            </p>
          </section>

          {/* How to grow */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как QA-тестировщику выйти из нижнего ценового сегмента
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl font-bold text-indigo-600 shrink-0">1</div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Освойте базу автоматизации</div>
                  <p className="text-gray-600 text-sm">
                    Даже базовый Python + Playwright или Cypress мгновенно поднимает ставку
                    на 50–80%. Это самая быстрая инвестиция для ручного тестировщика.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl font-bold text-indigo-600 shrink-0">2</div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Специализируйтесь на домене</div>
                  <p className="text-gray-600 text-sm">
                    QA с опытом в fintech, медицине или e-commerce берёт 30–50% надбавку.
                    Заказчики из этих секторов готовы платить за понимание специфики.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl font-bold text-indigo-600 shrink-0">3</div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Перейдите на проектные ставки</div>
                  <p className="text-gray-600 text-sm">
                    Продавать «тестирование приложения перед релизом за 40 000 ₽» выгоднее,
                    чем «час тестирования за 1 000 ₽». Проектная цена скрывает почасовую
                    и убирает торг.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl font-bold text-indigo-600 shrink-0">4</div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Стройте повторные продажи</div>
                  <p className="text-gray-600 text-sm">
                    QA идеален для ретейнер-модели: «тестирую каждый релиз за X тыс. ₽/мес».
                    Стабильный ретейнер даже при ставке ниже рынка лучше нестабильных
                    разовых заказов по высокой ставке.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benchmark upsell — loss aversion (Каннеман: "цена вырастет", не "сэкономьте") */}
          <div className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex-1">
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
                  📊 Бенчмарк ставок · Q1 2026
                </p>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  Ваша ставка выше или ниже медианы по вашему городу?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Медианные ставки по 22 специальностям × 10 городам с разбивкой джун&nbsp;/&nbsp;мид&nbsp;/&nbsp;сеньор.
                  Данные Q1 2026.
                </p>
              </div>
              <Link
                href="/benchmark"
                className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                Сравнить свою ставку → 249 ₽
              </Link>
            </div>
            <p className="text-xs text-amber-700/70 mt-2">
              ⏳ С 7 апреля цена вырастет до 349 ₽ — сейчас 249 ₽
            </p>
          </div>

          {/* Related articles */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stati/stavki-razrabotchikov-frilanserov-2026"
                className="block bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm p-5 transition-all"
              >
                <div className="text-xs text-blue-600 font-medium mb-1">Рынок</div>
                <div className="font-semibold text-gray-800 hover:text-blue-700">
                  Ставки разработчиков-фрилансеров 2026 →
                </div>
                <div className="text-xs text-gray-500 mt-1">Frontend, Backend, Fullstack, Mobile, DevOps, ML</div>
              </Link>
              <Link
                href="/stati/stavki-analitikov-frilanserov-2026"
                className="block bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm p-5 transition-all"
              >
                <div className="text-xs text-blue-600 font-medium mb-1">Рынок</div>
                <div className="font-semibold text-gray-800 hover:text-blue-700">
                  Ставки аналитиков-фрилансеров 2026 →
                </div>
                <div className="text-xs text-gray-500 mt-1">Data Analyst, БА, системный, продуктовый</div>
              </Link>
              <Link
                href="/stati/skrytye-rashody-frilansera"
                className="block bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm p-5 transition-all"
              >
                <div className="text-xs text-red-600 font-medium mb-1">Финансы</div>
                <div className="font-semibold text-gray-800 hover:text-blue-700">
                  Скрытые расходы фрилансера →
                </div>
                <div className="text-xs text-gray-500 mt-1">Всё, что надо заложить в ставку</div>
              </Link>
              <Link
                href="/stati/kak-povysit-stavku-frilansera"
                className="block bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm p-5 transition-all"
              >
                <div className="text-xs text-emerald-600 font-medium mb-1">Карьера</div>
                <div className="font-semibold text-gray-800 hover:text-blue-700">
                  Как повысить ставку фрилансера →
                </div>
                <div className="text-xs text-gray-500 mt-1">7 проверенных способов</div>
              </Link>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-center mb-8">
            <p className="text-indigo-900 font-semibold mb-1">
              Проверьте, соответствует ли ваша ставка рынку
            </p>
            <p className="text-indigo-600 text-sm mb-4">
              Бесплатный калькулятор с учётом налогов, простоев и вашей специализации
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=footer&utm_campaign=qa-rates-2026"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          <footer className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
            <Link href="/" className="hover:text-blue-600">← Главная</Link>
            &nbsp;·&nbsp;
            <Link href="/stati" className="hover:text-blue-600">Все статьи</Link>
            &nbsp;·&nbsp;
            <Link href="/stavka" className="hover:text-blue-600">Ставки по специальностям</Link>
          </footer>
        </article>
      </main>
    </>
  );
}
