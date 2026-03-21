import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Сколько стоит час работы программиста-фрилансера в 2026 году",
  description:
    "Реальные ставки программистов-фрилансеров в России в 2026 году: Frontend, Backend, Fullstack, Mobile, Python, PHP, DevOps, 1С. Медианы по городам + бесплатный калькулятор для расчёта вашей ставки.",
  keywords: [
    "сколько стоит час работы программиста",
    "стоимость часа работы программиста 2026",
    "час работы программиста фрилансера",
    "ставка программиста фрилансера 2026",
    "сколько берёт программист в час",
    "ставка разработчика фрилансера",
    "сколько стоит программист 2026",
    "почасовая ставка it специалиста",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/skolko-stoit-chas-raboty-programmista-2026" },
  openGraph: {
    title: "Сколько стоит час работы программиста-фрилансера в 2026 году",
    description:
      "Медианные часовые ставки для 10+ IT-специализаций на фрилансе в России. Актуальные данные Q1 2026 + калькулятор.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/skolko-stoit-chas-raboty-programmista-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/skolko-stoit-chas-raboty-programmista-2026#article`,
      headline: "Сколько стоит час работы программиста-фрилансера в 2026 году",
      description:
        "Реальные медианные часовые ставки для IT-специалистов на фрилансе в России. Данные Q1 2026.",
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
        "@id": `${BASE_URL}/stati/skolko-stoit-chas-raboty-programmista-2026`,
      },
      inLanguage: "ru",
      about: {
        "@type": "Thing",
        name: "Ставки программистов фрилансеров",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько стоит час работы программиста-фрилансера в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Медианная часовая ставка программиста-фрилансера в России в 2026 году: Junior — 800–1 500 ₽/час, Middle — 2 000–3 500 ₽/час, Senior — 4 000–7 000 ₽/час. Зависит от специализации: Frontend разработчики берут 1 500–4 500 ₽/час, Backend — 2 000–5 500 ₽/час, ML-инженеры — 3 500–8 000 ₽/час.",
          },
        },
        {
          "@type": "Question",
          name: "Почему ставка программиста-фрилансера выше офисного разработчика?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Фрилансер оплачивает всё сам: налоги (самозанятый — 4–6%, ИП — 6% + страховые взносы ~50 000 ₽/год), простои между проектами (20–40% времени), отпуск и больничные без сохранения зарплаты, оборудование и ПО. Реальная ставка с учётом всех издержек должна быть в 1.5–2 раза выше офисной зарплаты.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать правильную ставку программиста на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Формула: (желаемый доход / рабочие дни в году) / (рабочих часов в день × загрузка) × налоговый коэффициент. Для дохода 200 000 ₽/мес, загрузке 70%, самозанятого с юрлицами: ставка ≈ 1 850–1 950 ₽/час. Калькулятор FreelanceCalc автоматизирует этот расчёт.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько берёт Frontend-разработчик в час на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Медианная ставка Frontend-разработчика на фрилансе в России в 2026 году: Junior — 900–1 400 ₽/час, Middle — 1 800–3 200 ₽/час, Senior — 3 500–6 000 ₽/час. В Москве ставки на 15–20% выше, в регионах — на 10–25% ниже медианы.",
          },
        },
        {
          "@type": "Question",
          name: "Чем отличается ставка Backend и Fullstack разработчика?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Backend-разработчики в среднем берут 2 000–5 500 ₽/час — чуть выше Frontend из-за сложности серверной логики и работы с БД. Fullstack-разработчики покрывают обе стороны, их медиана — 2 500–5 000 ₽/час. Конкретная ставка зависит от стека технологий и опыта.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "FreelanceCalc",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Статьи",
          item: `${BASE_URL}/stati`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Сколько стоит час работы программиста",
          item: `${BASE_URL}/stati/skolko-stoit-chas-raboty-programmista-2026`,
        },
      ],
    },
  ],
};

// Rate data by specialization
const SPECS = [
  {
    title: "Frontend-разработчик",
    slug: "frontend-razrabotchik",
    junior: "900–1 400",
    middle: "1 800–3 200",
    senior: "3 500–6 000",
    median: "2 200",
    note: "React, Vue, Angular — ключевые стеки. TypeScript поднимает ставку на 15–20%.",
  },
  {
    title: "Backend-разработчик",
    slug: "backend-razrabotchik",
    junior: "1 000–1 600",
    middle: "2 200–4 000",
    senior: "4 000–7 000",
    median: "2 800",
    note: "Node.js, Python/Django, Go, Java. Golang и Rust — премиум-надбавка 20–30%.",
  },
  {
    title: "Fullstack-разработчик",
    slug: "fullstack-razrabotchik",
    junior: "1 000–1 500",
    middle: "2 000–3 800",
    senior: "3 800–6 500",
    median: "2 600",
    note: "Покрывает обе стороны, но часто проигрывает глубиной узкому специалисту.",
  },
  {
    title: "Мобильный разработчик (iOS/Android)",
    slug: "mobilnyj-razrabotchik",
    junior: "1 100–1 700",
    middle: "2 400–4 200",
    senior: "4 200–7 500",
    median: "3 000",
    note: "iOS (Swift) чуть дороже Android (Kotlin). Flutter/React Native — средняя ниша.",
  },
  {
    title: "Python-разработчик",
    slug: "backend-razrabotchik",
    junior: "900–1 500",
    middle: "2 000–3 800",
    senior: "4 000–7 000",
    median: "2 700",
    note: "Django/FastAPI — веб. Data Engineering/ML — отдельная ниша с надбавкой.",
  },
  {
    title: "PHP-разработчик",
    slug: "backend-razrabotchik",
    junior: "700–1 200",
    middle: "1 500–3 000",
    senior: "3 000–5 500",
    median: "2 200",
    note: "Laravel и Bitrix — основной рынок. Bitrix специалисты востребованы в корпоратах.",
  },
  {
    title: "DevOps / Cloud инженер",
    slug: "backend-razrabotchik",
    junior: "1 200–2 000",
    middle: "2 800–5 000",
    senior: "5 000–8 500",
    median: "3 500",
    note: "AWS, GCP, Yandex.Cloud. Kubernetes + CI/CD — базовые требования уровня Middle.",
  },
  {
    title: "1С-разработчик",
    slug: "backend-razrabotchik",
    junior: "800–1 400",
    middle: "1 800–3 200",
    senior: "3 200–6 000",
    median: "2 500",
    note: "Стабильный корпоративный рынок. Сертификат 1С повышает ставку на 20%.",
  },
  {
    title: "ML / Data Science инженер",
    slug: "backend-razrabotchik",
    junior: "1 500–2 500",
    middle: "3 500–6 000",
    senior: "6 000–10 000",
    median: "4 500",
    note: "Самые высокие ставки в IT. Дефицит предложения при росте спроса.",
  },
  {
    title: "Тестировщик (QA)",
    slug: "testirovshchik-qa",
    junior: "700–1 100",
    middle: "1 400–2 500",
    senior: "2 500–4 500",
    median: "1 900",
    note: "Ручное тестирование — нижняя часть. Automation QA (Selenium, Cypress) — верхняя.",
  },
];

const CITIES = [
  { name: "Москва", coeff: "+15–20%" },
  { name: "Санкт-Петербург", coeff: "+10–15%" },
  { name: "Екатеринбург", coeff: "+0–5%" },
  { name: "Новосибирск", coeff: "−5%" },
  { name: "Краснодар", coeff: "−10–15%" },
  { name: "Казань", coeff: "−5–10%" },
  { name: "Нижний Новгород", coeff: "−5–10%" },
  { name: "Самара", coeff: "−10–15%" },
];

export default function ProgrammerHourRatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
              FreelanceCalc
            </Link>
            <Link
              href="/"
              className="hidden sm:inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать свою ставку →
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1 items-center">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li className="text-gray-300">/</li>
              <li><Link href="/stati" className="hover:text-blue-600">Статьи</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-700">Стоимость часа программиста 2026</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-10">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Данные Q1 2026 · Обновлено 21 марта 2026
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Сколько стоит час работы программиста‑фрилансера в 2026 году
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Реальные медианные ставки для 10 IT-специализаций в России: Frontend, Backend,
              Fullstack, Mobile, Python, PHP, DevOps, 1С, ML и QA. Данные актуальны на Q1 2026
              — с учётом налогов и рыночной конъюнктуры.
            </p>
          </header>

          {/* Calculator CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-semibold text-blue-900 mb-1">Узнайте свою минимальную ставку</p>
                <p className="text-blue-700 text-sm">
                  Медианы по рынку — ориентир. Ваша реальная ставка зависит от налогов,
                  загрузки и дохода. Рассчитайте за 30 секунд бесплатно.
                </p>
              </div>
              <Link
                href="/?utm_source=stati&utm_medium=article&utm_campaign=programmer-hour"
                className="shrink-0 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Рассчитать ставку →
              </Link>
            </div>
          </div>

          {/* Key numbers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ставки программистов: ключевые цифры 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Junior", value: "700–1 600 ₽/ч", color: "bg-gray-50 border-gray-200" },
                { label: "Middle", value: "1 500–4 200 ₽/ч", color: "bg-blue-50 border-blue-200" },
                { label: "Senior", value: "3 500–8 500 ₽/ч", color: "bg-indigo-50 border-indigo-200" },
                { label: "ML/AI ниша", value: "до 10 000 ₽/ч", color: "bg-purple-50 border-purple-200" },
              ].map(({ label, value, color }) => (
                <div key={label} className={`border rounded-xl p-4 text-center ${color}`}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</p>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              * Диапазоны отражают медианы по 10 IT-специализациям в России. Москва +15–20%, регионы −5–20%.
              Рассчитайте точную ставку с учётом вашей специальности и города в{" "}
              <Link href="/?utm_source=stati&utm_medium=inline&utm_campaign=programmer-hour" className="text-blue-600 hover:underline">
                калькуляторе FreelanceCalc
              </Link>
              .
            </p>
          </section>

          {/* Main table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Таблица ставок по IT-специализациям (Q1 2026)
            </h2>
            <p className="text-gray-600 mb-5">
              Медианные часовые ставки программистов-фрилансеров в России на начало 2026 года.
              Данные собраны по открытым источникам, опросам фрилансеров и биржам труда.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Специализация</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Junior</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">Middle</th>
                    <th className="text-center px-4 py-3 font-semibold text-indigo-700">Senior</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Медиана</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SPECS.map((spec) => (
                    <tr key={spec.title} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <Link
                          href={`/stavka/${spec.slug}?utm_source=stati&utm_medium=table&utm_campaign=programmer-hour`}
                          className="font-medium text-blue-700 hover:underline"
                        >
                          {spec.title}
                        </Link>
                        <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">{spec.note}</p>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-600">{spec.junior} ₽/ч</td>
                      <td className="px-4 py-3 text-center font-medium text-blue-700">{spec.middle} ₽/ч</td>
                      <td className="px-4 py-3 text-center font-medium text-indigo-700">{spec.senior} ₽/ч</td>
                      <td className="px-4 py-3 text-center font-bold text-gray-900">{spec.median} ₽/ч</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400">
              Источник: FreelanceCalc, анализ открытых вакансий и предложений на FL.ru, Kwork, Хабр Карьера, HeadHunter.
              Данные Q1 2026. Медиана рассчитана как средний по диапазону Middle.
            </p>
          </section>

          {/* Why freelancer rates are higher */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему ставка программиста-фрилансера должна быть выше офисной
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Офисный разработчик с зарплатой 200 000 ₽ «на руки» не платит налоги напрямую
              (за него это делает работодатель) и получает больничный, отпускные и оборудование.
              Фрилансер берёт это на себя — и должен заложить все эти расходы в ставку.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: "💰",
                  title: "Налоги",
                  desc: "Самозанятый платит 4–6% НПД. ИП на УСН — 6% + ~50 000 ₽ страховых взносов в год. Итого 8–12% дохода уходит государству.",
                },
                {
                  icon: "🕐",
                  title: "Загрузка 60–75%",
                  desc: "Не все часы оплачиваемые: поиск клиентов, переговоры, переписка — 25–40% рабочего времени не приносит дохода.",
                },
                {
                  icon: "🏖️",
                  title: "Отпуск и простои",
                  desc: "28 дней отпуска + праздники + простои между проектами. Итого ~50–60 дней в году без дохода, но с расходами.",
                },
                {
                  icon: "💻",
                  title: "Оборудование и ПО",
                  desc: "Ноутбук, лицензии, курсы, интернет — от 5 000 до 30 000 ₽/мес в зависимости от специальности и стека.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{title}</p>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Example calculation */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-semibold text-amber-900 mb-3">
                Пример: сколько должен брать Backend Middle за час, чтобы получать 250 000 ₽/мес
              </p>
              <div className="space-y-2 text-sm text-amber-800">
                {[
                  ["Желаемый доход в месяц (чистыми)", "250 000 ₽"],
                  ["Налог НПД 6% (с юрлиц)", "+ 16 000 ₽ → итого 266 000 ₽"],
                  ["Рабочих дней в году (28 дней отпуска)", "220 дней → 18.3 дня/мес"],
                  ["Загрузка 70% (оплачиваемые часы)", "× 1.43 коэффициент"],
                  ["Рабочих часов в день", "8 часов"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span>{label}</span>
                    <span className="font-medium text-right">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between gap-4 border-t border-amber-300 pt-2 font-bold text-base">
                  <span>Минимальная ставка</span>
                  <span className="text-amber-900">≈ 2 600 ₽/час</span>
                </div>
              </div>
              <p className="text-xs text-amber-700 mt-3">
                При ставке ниже 2 600 ₽/час разработчик фактически работает в убыток относительно желаемого дохода.{" "}
                <Link
                  href="/?utm_source=stati&utm_medium=example&utm_campaign=programmer-hour"
                  className="underline font-medium"
                >
                  Рассчитайте свою цифру в калькуляторе →
                </Link>
              </p>
            </div>
          </section>

          {/* Cities section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки программистов по городам России
            </h2>
            <p className="text-gray-600 mb-5">
              Стоимость часа работы программиста варьируется по регионам. Московские разработчики
              в среднем берут на 15–20% больше, чем их коллеги из Новосибирска или Краснодара.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {CITIES.map(({ name, coeff }) => (
                <div key={name} className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center">
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{coeff} к медиане</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Подробные ставки разработчиков по вашему городу — в{" "}
              <Link href="/stavka/frontend-razrabotchik?utm_source=stati&utm_medium=cities&utm_campaign=programmer-hour" className="text-blue-600 hover:underline">
                калькуляторе по специальностям
              </Link>
              {" "}или в статье{" "}
              <Link href="/stati/stavki-frilanserov-po-gorodam-2026" className="text-blue-600 hover:underline">
                ставки фрилансеров по городам России 2026
              </Link>
              .
            </p>
          </section>

          {/* Trends 2026 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Тренды рынка программистов-фрилансеров в 2026 году
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "ИИ-инструменты снижают порог входа, но повышают требования к Senior",
                  text: "GitHub Copilot, Cursor и аналоги ускоряют работу Junior-разработчиков. Заказчики это знают и снижают бюджеты на рутинный код. Но сложная архитектура, ревью AI-кода и интеграции — по-прежнему оцениваются высоко.",
                },
                {
                  title: "Импортозамещение создаёт устойчивый спрос на 1С и отечественный стек",
                  text: "Корпоративный рынок продолжает мигрировать на отечественные решения. 1С, СУБД Postgres Pro, Astra Linux — специалисты по этим технологиям востребованы с хорошими ставками, особенно в B2B-сегменте.",
                },
                {
                  title: "ML/Data Engineering — самый быстрорастущий сегмент",
                  text: "Ставки ML-инженеров выросли на 20–30% за 2025 год. Дефицит кандидатов при росте спроса со стороны корпораций и стартапов. Специалисты с опытом работы с LLM берут от 6 000 ₽/час.",
                },
                {
                  title: "Рост числа самозанятых программистов",
                  text: "В 2026 году более 60% IT-фрилансеров зарегистрированы как самозанятые. Простота оформления и низкий налог (4–6%) привлекают разработчиков, которые раньше работали «в серую».",
                },
              ].map(({ title, text }) => (
                <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to set your rate */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как правильно установить ставку: пошаговая инструкция
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Определите желаемый чистый доход",
                  text: "Сколько вы хотите получать «на руки» после уплаты налогов? Начните с реалистичной цифры — например, 180 000–250 000 ₽/мес для Middle-разработчика.",
                },
                {
                  step: 2,
                  title: "Выберите налоговый режим",
                  text: "Самозанятый (НПД 4–6%) подходит при доходе до 2.4 млн ₽/год. ИП УСН 6% — если доход выше. Налоговый режим напрямую влияет на минимальную ставку.",
                },
                {
                  step: 3,
                  title: "Учтите реальную загрузку",
                  text: "Junior: 40–55% (много времени на поиск клиентов). Middle: 60–75%. Senior: 70–85%. Не оплачиваемые часы должны быть заложены в ставку.",
                },
                {
                  step: 4,
                  title: "Сравните с рыночными медианами",
                  text: "Ваша расчётная ставка — это минимум. Сравните её с медианами по специальности и городу. Если вы выше рынка — это нормально при хорошем портфолио. Ниже рынка — вы недооцениваете себя.",
                },
                {
                  step: 5,
                  title: "Добавьте «буфер» на переговоры",
                  text: "Заказчики почти всегда торгуются. Называйте ставку на 15–25% выше минимальной — это даёт пространство для снижения без ущерба для вашего дохода.",
                },
              ].map(({ step, title, text }) => (
                <li key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько берёт программист-фрилансер за час в Москве?",
                  a: "В Москве медианная ставка Middle-разработчика на 15–20% выше общероссийской. Backend Middle в Москве — 2 500–4 800 ₽/час, Frontend Middle — 2 200–3 800 ₽/час, Senior Backend — 5 000–8 000 ₽/час.",
                },
                {
                  q: "Как повысить ставку программисту-фрилансеру?",
                  a: "Три рычага: 1) Специализация в дефицитном стеке (ML, Golang, iOS) даёт +20–40%. 2) Портфолио с измеримыми результатами повышает доверие клиентов. 3) Работа через агентства или выход на зарубежные рынки. Подробнее — в статье «Как повысить ставку фрилансера».",
                },
                {
                  q: "Какую ставку указывать в профиле на FL.ru или Kwork?",
                  a: "Рассчитайте минимальную ставку через калькулятор и добавьте 15–25% на переговоры. Указывать ставку «за проект» или «за час» — зависит от формата работы. На Kwork удобнее фиксированные пакеты, на FL.ru — почасовая.",
                },
                {
                  q: "Стоит ли брать меньше рынка, чтобы получить первых клиентов?",
                  a: "Краткосрочно — да, но с ограничением по времени. Работа по ставке ниже минимальной убыточна в перспективе. Лучше альтернатива: брать рыночную ставку, но предлагать первый мини-проект с ограниченной фиксированной стоимостью — это демонстрирует качество без занижения ценности.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2">{q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related specialties */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Калькуляторы по IT-специальностям
            </h2>
            <p className="text-gray-600 mb-4">
              Рассчитайте точную ставку для вашей специальности с учётом налогов, загрузки и медиан:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "Frontend-разработчик", slug: "frontend-razrabotchik" },
                { name: "Backend-разработчик", slug: "backend-razrabotchik" },
                { name: "Fullstack-разработчик", slug: "fullstack-razrabotchik" },
                { name: "Мобильный разработчик", slug: "mobilnyj-razrabotchik" },
                { name: "Тестировщик (QA)", slug: "testirovshchik-qa" },
                { name: "Data Analyst", slug: "data-analyst" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=stati&utm_medium=related&utm_campaign=programmer-hour`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  {spec.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/stati/stavki-razrabotchikov-frilanserov-2026",
                  title: "Ставки разработчиков-фрилансеров: таблица по 10 специализациям",
                  desc: "Полный разбор с методикой расчёта и региональными коэффициентами",
                },
                {
                  href: "/stati/kak-povysit-stavku-frilansera",
                  title: "Как повысить ставку фрилансера: 7 рабочих способов",
                  desc: "Конкретные шаги: специализация, портфолио, переговоры",
                },
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  title: "Самозанятый vs ИП для фрилансера: что выгоднее",
                  desc: "Сравнение налогов, ограничений и удобства для IT-специалиста",
                },
                {
                  href: "/stati/skrytye-rashody-frilansera",
                  title: "Скрытые расходы фрилансера, которые съедают доход",
                  desc: "Чего не учитывают начинающие при расчёте ставки",
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <p className="font-semibold text-gray-900 text-sm mb-1 leading-tight">{title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Рассчитайте вашу ставку программиста
            </h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Бесплатно. 30 секунд. Введите желаемый доход, специальность и город — получите
              точную ставку с рыночным контекстом.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=final-cta&utm_campaign=programmer-hour"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор — бесплатно →
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
            <p>
              © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;
              <Link href="/" className="hover:text-blue-600">Калькулятор ставки</Link>
              &nbsp;·&nbsp;
              <Link href="/stavka" className="hover:text-blue-600">Ставки по специальностям</Link>
              &nbsp;·&nbsp;
              <Link href="/stati" className="hover:text-blue-600">Все статьи</Link>
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
