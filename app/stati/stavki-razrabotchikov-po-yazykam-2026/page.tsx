import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Ставки разработчиков по языкам программирования 2026 — Python, JS, PHP, Go, Java",
  description:
    "Сколько берут разработчики-фрилансеры в 2026 году: Python, JavaScript/TypeScript, Java, Go, PHP, C#/.NET, 1C, Swift, Kotlin. Медианные ставки Junior/Middle/Senior с таблицей и калькулятором.",
  keywords: [
    "ставки разработчиков по языкам программирования",
    "python разработчик ставка фриланс",
    "javascript разработчик сколько берет",
    "golang разработчик ставка 2026",
    "java разработчик фриланс ставка",
    "php разработчик ставка",
    "1с разработчик ставка фриланс",
    "swift kotlin разработчик ставка",
    "ставки программистов фрилансеров 2026",
    "сколько берет программист за час",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-razrabotchikov-po-yazykam-2026" },
  openGraph: {
    title: "Ставки разработчиков по языкам: Python, JS, Go, PHP, Java в 2026",
    description:
      "Медианные ставки фрилансеров-разработчиков в 2026 году с разбивкой по языкам и уровням опыта. Таблица Junior / Middle / Senior.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-razrabotchikov-po-yazykam-2026`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-razrabotchikov-po-yazykam-2026#article`,
      headline: "Ставки разработчиков по языкам программирования 2026",
      description:
        "Медианные часовые ставки фрилансеров-разработчиков по языкам: Python, JavaScript, Java, Go, PHP, C#/.NET, 1C, Swift, Kotlin.",
      url: `${BASE_URL}/stati/stavki-razrabotchikov-po-yazykam-2026`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      inLanguage: "ru",
      about: { "@type": "Thing", name: "Ставки программистов-фрилансеров" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ставки по языкам 2026",
          item: `${BASE_URL}/stati/stavki-razrabotchikov-po-yazykam-2026`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько зарабатывает Python-разработчик на фрилансе в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Python-разработчик на фрилансе в 2026 году зарабатывает в среднем: Junior — 1 200–2 000 ₽/час, Middle — 2 200–4 000 ₽/час, Senior — 4 000–7 000 ₽/час. Специалисты в ML/AI и Data Science берут на 30–50% больше за счёт высокого спроса.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько берёт JavaScript-разработчик за час в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "JavaScript/TypeScript разработчик на фрилансе в 2026: Junior — 900–1 800 ₽/час, Middle — 1 700–3 500 ₽/час, Senior — 3 500–6 000 ₽/час. TypeScript-специалисты берут на 10–20% больше, чем чистые JS-разработчики.",
          },
        },
        {
          "@type": "Question",
          name: "Какой язык программирования даёт самую высокую ставку на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "В 2026 году самые высокие ставки у Rust-, Go- и Python ML-разработчиков (3 000–8 000 ₽/час на Senior-уровне). Rust и Go востребованы в системном программировании и high-load сервисах. PHP и WordPress-специалисты — в нижнем сегменте (700–2 800 ₽/час).",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Go/Golang разработчик-фрилансер?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Golang-разработчик на фрилансе в 2026: Junior — 1 500–2 500 ₽/час, Middle — 2 500–4 500 ₽/час, Senior — 4 500–7 500 ₽/час. Go — нишевой язык с высоким спросом в backend-разработке высоконагруженных систем.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько берёт 1С-разработчик за час работы?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "1С-разработчик на фрилансе в 2026: Junior — 800–1 500 ₽/час, Middle — 1 500–3 000 ₽/час, Senior/Архитектор — 3 000–6 000 ₽/час. Корпоративная 1С-экспертиза высоко ценится в В2В-сегменте.",
          },
        },
      ],
    },
  ],
};

const LANG_DATA = [
  {
    lang: "Python (ML/AI/Data)",
    slug: "ml-inzhener",
    icon: "🐍",
    junior: "1 200–2 000",
    middle: "2 500–5 000",
    senior: "5 000–8 000",
    demand: "🔥 Очень высокий",
    demandColor: "text-red-600",
    note: "Премиум за ML/LLM-экспертизу",
    trend: "+",
  },
  {
    lang: "Rust",
    slug: "backend-razrabotchik",
    icon: "🦀",
    junior: "1 500–2 500",
    middle: "3 000–5 500",
    senior: "5 500–8 000",
    demand: "🔥 Высокий",
    demandColor: "text-red-600",
    note: "Нишевой; высокий порог входа",
    trend: "+",
  },
  {
    lang: "Go / Golang",
    slug: "backend-razrabotchik",
    icon: "🔵",
    junior: "1 500–2 500",
    middle: "2 500–4 500",
    senior: "4 500–7 500",
    demand: "🟠 Высокий",
    demandColor: "text-orange-600",
    note: "High-load backend, микросервисы",
    trend: "+",
  },
  {
    lang: "Swift (iOS)",
    slug: "mobilnyj-razrabotchik",
    icon: "🍎",
    junior: "1 500–2 800",
    middle: "3 000–5 500",
    senior: "5 000–8 000",
    demand: "🟠 Высокий",
    demandColor: "text-orange-600",
    note: "Мало специалистов, высокий спрос",
    trend: "=",
  },
  {
    lang: "Kotlin (Android)",
    slug: "mobilnyj-razrabotchik",
    icon: "🤖",
    junior: "1 400–2 500",
    middle: "2 500–5 000",
    senior: "4 500–7 500",
    demand: "🟠 Высокий",
    demandColor: "text-orange-600",
    note: "Android-экосистема, кроссплатформа",
    trend: "=",
  },
  {
    lang: "Java",
    slug: "backend-razrabotchik",
    icon: "☕",
    junior: "1 200–2 200",
    middle: "2 000–4 000",
    senior: "4 000–7 000",
    demand: "🟡 Умеренный",
    demandColor: "text-yellow-600",
    note: "Enterprise backend, Spring, финтех",
    trend: "=",
  },
  {
    lang: "JavaScript / TypeScript",
    slug: "frontend-razrabotchik",
    icon: "🟨",
    junior: "900–1 800",
    middle: "1 700–3 500",
    senior: "3 500–6 000",
    demand: "🟡 Высокий, конкурентный",
    demandColor: "text-yellow-600",
    note: "Много специалистов → давление на ставки",
    trend: "=",
  },
  {
    lang: "C# / .NET",
    slug: "backend-razrabotchik",
    icon: "🔷",
    junior: "1 000–2 000",
    middle: "1 800–3 500",
    senior: "3 500–6 000",
    demand: "🟡 Умеренный",
    demandColor: "text-yellow-600",
    note: "Корпоративный сектор, 1С-конкуренция",
    trend: "=",
  },
  {
    lang: "C / C++",
    slug: "backend-razrabotchik",
    icon: "⚙️",
    junior: "1 200–2 200",
    middle: "2 500–5 000",
    senior: "5 000–8 000",
    demand: "🟡 Нишевой",
    demandColor: "text-yellow-600",
    note: "Embedded, gamedev, системное ПО",
    trend: "=",
  },
  {
    lang: "1С",
    slug: "backend-razrabotchik",
    icon: "🏢",
    junior: "800–1 500",
    middle: "1 500–3 000",
    senior: "3 000–6 000",
    demand: "🟡 Стабильный",
    demandColor: "text-yellow-600",
    note: "B2B, автоматизация бизнеса, ERP",
    trend: "=",
  },
  {
    lang: "PHP",
    slug: "backend-razrabotchik",
    icon: "🐘",
    junior: "700–1 400",
    middle: "1 200–2 800",
    senior: "2 500–4 500",
    demand: "🟢 Высокий (массовый)",
    demandColor: "text-green-700",
    note: "Много проектов, высокая конкуренция",
    trend: "-",
  },
  {
    lang: "WordPress / Bitrix",
    slug: "backend-razrabotchik",
    icon: "📝",
    junior: "500–1 200",
    middle: "1 000–2 500",
    senior: "2 000–4 000",
    demand: "🟢 Массовый",
    demandColor: "text-green-700",
    note: "Низкий порог входа; ставки ниже рынка",
    trend: "-",
  },
];

export default function StavkiPoYazykamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">FreelanceCalc</Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 hover:text-blue-600">Статьи</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Ставки по языкам 2026</span>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          {/* Hero */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              💻 Данные Q1 2026 · Обновлено март 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ставки разработчиков по языкам программирования в 2026 году
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Медианные часовые ставки фрилансеров-разработчиков по 12 языкам: Python, JavaScript,
              Go, Java, PHP, Swift, Kotlin, C#, C++, 1С, Rust, WordPress. Разбивка по уровням
              Junior / Middle / Senior.
            </p>
            <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-500">
              <span>⏱ 7 минут чтения</span>
              <span>📅 Март 2026</span>
              <span>🎯 12 языков · 3 уровня опыта</span>
            </div>
          </div>

          {/* CTA — calculator */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-10">
            <p className="text-indigo-900 font-semibold mb-1">Рассчитайте свою ставку</p>
            <p className="text-indigo-700 text-sm mb-3">
              Медианные данные — ориентир. Точная ставка зависит от вашего дохода, налогового
              режима, города и загрузки. Калькулятор учитывает всё это за 30 секунд.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              Рассчитать свою ставку бесплатно →
            </Link>
          </div>

          {/* Summary table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Таблица ставок по языкам: Junior / Middle / Senior
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Медианные ставки в Москве (₽/час), Q1 2026. Источник: FL.ru, Хабр Карьера, Kwork,
              Telegram-сообщества разработчиков.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 min-w-[180px]">Язык / Стек</th>
                    <th className="text-right px-3 py-3 font-semibold text-gray-600 whitespace-nowrap">Junior</th>
                    <th className="text-right px-3 py-3 font-semibold text-gray-600 whitespace-nowrap">Middle</th>
                    <th className="text-right px-3 py-3 font-semibold text-gray-600 whitespace-nowrap">Senior</th>
                    <th className="text-right px-3 py-3 font-semibold text-gray-600 whitespace-nowrap hidden md:table-cell">Спрос</th>
                  </tr>
                </thead>
                <tbody>
                  {LANG_DATA.map((row) => (
                    <tr
                      key={row.lang}
                      className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{row.icon}</span>
                          <div>
                            <div className="font-medium text-gray-800">{row.lang}</div>
                            <div className="text-xs text-gray-400">{row.note}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-right text-gray-600 whitespace-nowrap text-xs">
                        {row.junior} ₽/ч
                      </td>
                      <td className="px-3 py-3 text-right font-semibold text-gray-900 whitespace-nowrap text-sm">
                        {row.middle} ₽/ч
                      </td>
                      <td className="px-3 py-3 text-right font-semibold text-indigo-700 whitespace-nowrap text-sm">
                        {row.senior} ₽/ч
                      </td>
                      <td className={`px-3 py-3 text-right text-xs whitespace-nowrap hidden md:table-cell ${row.demandColor}`}>
                        {row.demand}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              * Данные — медиана по Москве. Региональные ставки ниже на 15–40% в зависимости от города.
              <Link href="/goroda" className="text-blue-600 hover:underline ml-1">Коэффициенты по городам →</Link>
            </p>
          </section>

          {/* Key insights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ключевые выводы</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🏆",
                  title: "Топ-3 по ставкам: Rust, Python ML, Go",
                  text: "Senior-специалисты на этих языках берут 5 000–8 000 ₽/час. Причина — высокий спрос при дефиците предложения. Rust и Go используются в высоконагруженных системах, Python ML — в AI-стартапах.",
                },
                {
                  icon: "📉",
                  title: "PHP и WordPress: давление на ставки",
                  text: "Низкий порог входа в PHP создаёт конкуренцию. Middle-PHP берёт в среднем 1 200–2 800 ₽/час — на 30–40% меньше, чем Go- или Python-разработчик того же уровня.",
                },
                {
                  icon: "💹",
                  title: "Специализация внутри языка — ×1.5–2 к ставке",
                  text: "Python-разработчик без специализации: 2 000–3 500 ₽/час. Python ML/AI-инженер: 3 500–7 000 ₽/час. Java-разработчик без специализации vs Java fintech: разрыв 25–40%.",
                },
                {
                  icon: "🌐",
                  title: "Московские ставки vs регионы: −20–40%",
                  text: "Данные в таблице — Москва. Новосибирск, Екатеринбург: −25%, Казань, Краснодар: −30–35%, другие регионы: −35–40%. Но удалённые клиенты из Москвы платят московские ставки.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-gray-800 mb-2">{item.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed sections by language group */}
          <section className="mb-10 prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Разбор по языкам</h2>

            {/* Python */}
            <div className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                🐍 Python — лидер по росту ставок
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Python занял доминирующую позицию в ML/AI, что подтолкнуло ставки специалистов
                вверх. Middle Python-разработчик без ML-специализации зарабатывает
                <strong> 2 200–3 800 ₽/час</strong>. ML/AI-инженер того же уровня —
                <strong> 3 500–5 500 ₽/час</strong>. Разрыв — 40–50%.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Спрос на Python-разработчиков стабильно растёт: крупные компании внедряют AI-решения,
                стартапы строят продукты на базе LLM. Ставки специалистов с опытом в LangChain,
                fine-tuning и RAG-системах на 20–30% выше среднерыночного уровня.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/stavka/ml-inzhener" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  Калькулятор ML-инженера →
                </Link>
                <Link href="/stavka/backend-razrabotchik" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  Калькулятор Backend-разработчика →
                </Link>
              </div>
            </div>

            {/* JavaScript */}
            <div className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                🟨 JavaScript / TypeScript — большой рынок, высокая конкуренция
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                JS/TS — самый популярный стек на фриланс-биржах. Огромный спрос,
                но и огромное предложение. Middle Frontend берёт <strong>1 700–3 200 ₽/час</strong> в Москве.
                TypeScript-специалисты, знающие React/Next.js и современные паттерны —
                на верхней границе. «Вёрстальщики» с минимальной логикой — на нижней.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Node.js-разработчики (серверный JS) ближе к backend-ставкам:
                <strong> 2 000–4 000 ₽/час</strong> на Middle. Fullstack (React + Node.js) —
                ещё на 10–20% выше за счёт универсальности.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/stavka/frontend-razrabotchik" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  Калькулятор Frontend-разработчика →
                </Link>
                <Link href="/stavka/fullstack-razrabotchik" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  Калькулятор Fullstack-разработчика →
                </Link>
              </div>
            </div>

            {/* Go */}
            <div className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                🔵 Go (Golang) — нишевой, но высокооплачиваемый
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Go-разработчики специализируются на high-load backend, микросервисах и
                DevOps-инструментах. Рынок узкий, специалистов меньше, чем Java или PHP, — поэтому ставки
                выше среднего. Middle Go-разработчик берёт <strong>2 500–4 500 ₽/час</strong>.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Go-специалисты с опытом в Kubernetes, Kafka и распределённых системах стоят дороже.
                Они часто конкурируют с Java-разработчиками в enterprise-секторе, но имеют преимущество
                в cloud-native и DevOps-смежных проектах.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/sravnenie/golang-razrabotchik-vs-python-razrabotchik" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  Go vs Python: кто зарабатывает больше? →
                </Link>
              </div>
            </div>

            {/* Java */}
            <div className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                ☕ Java — стабильный enterprise-стек
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Java остаётся основным языком корпоративного backend: банки, финтех, госпроекты,
                крупный e-commerce. Ставки стабильны: Middle Java берёт <strong>2 000–4 000 ₽/час</strong>.
                Spring Framework, Hibernate и опыт с высоконагруженными системами — ключевые
                факторы для верхней границы.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Java-специалисты с опытом в fintech и банкинге зарабатывают на 20–30% больше
                среднего. Конкуренция умеренная: Java сложнее для входа, чем PHP или JS.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/sravnenie/java-razrabotchik-vs-python-razrabotchik" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  Java vs Python: сравнение ставок →
                </Link>
                <Link href="/sravnenie/java-razrabotchik-vs-golang-razrabotchik" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  Java vs Go: сравнение ставок →
                </Link>
              </div>
            </div>

            {/* PHP */}
            <div className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                🐘 PHP — массовый рынок, конкурентные ставки
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                PHP — самый распространённый язык на фриланс-биржах по числу задач. Огромное
                предложение давит на ставки: Middle PHP берёт <strong>1 200–2 800 ₽/час</strong>.
                Laravel-специалисты на верхней границе, WordPress/Bitrix — ниже.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                PHP-разработчик может увеличить ставку за счёт специализации в high-load, работы
                с крупными e-commerce платформами или перехода в смежную экспертизу (DevOps,
                архитектура). Без специализации — жёсткая ценовая конкуренция.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/sravnenie/php-razrabotchik-vs-python-razrabotchik" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  PHP vs Python: кто зарабатывает больше? →
                </Link>
                <Link href="/sravnenie/bitrix-razrabotchik-vs-wordpress-razrabotchik" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  Bitrix vs WordPress: сравнение ставок →
                </Link>
              </div>
            </div>

            {/* 1C */}
            <div className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                🏢 1С — стабильный B2B-нишевой рынок
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                1С-разработчики работают в специфической нише корпоративной автоматизации. Спрос
                стабилен: малый и средний бизнес активно автоматизирует учёт. Middle-разработчик
                берёт <strong>1 500–3 000 ₽/час</strong>. Архитекторы и консультанты 1С:ERP —
                до 6 000 ₽/час.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Плюс ниши — высокий барьер входа (специфический язык и экосистема) и корпоративные
                клиенты с долгосрочными контрактами. Минус — ограниченный рынок без выхода на
                международных клиентов.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/sravnenie/1c-razrabotchik-vs-php" className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100">
                  1С vs PHP: сравнение ставок →
                </Link>
              </div>
            </div>
          </section>

          {/* How to calculate */}
          <section className="mb-10 bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Как посчитать свою ставку, зная медиану по языку
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Медианная ставка — ориентир, а не ваша ставка. Реальная ставка зависит от:
            </p>
            <ul className="space-y-2 mb-5">
              {[
                "Желаемого чистого дохода «на руки» в месяц",
                "Налогового режима (самозанятый НПД 4–6%, ИП УСН 6%)",
                "Количества оплачиваемых часов (загрузка 60–80%)",
                "Количества дней отпуска в году",
                "Города (Москва, регионы, удалённые клиенты)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-indigo-600 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              Рассчитать точную ставку за 30 секунд →
            </Link>
          </section>

          {/* Upsell — benchmark */}
          <section className="mb-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white">
            <div className="text-3xl mb-3">📊</div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Полные данные: 22+ специальности × 10 городов × 3 уровня
            </h2>
            <p className="text-indigo-100 text-sm leading-relaxed mb-2">
              Хотите знать ставки вашей специальности по всем городам — не только Москве?
              PDF-бенчмарк Q1 2026 включает полную матрицу: Новосибирск, Екатеринбург, Казань,
              Краснодар, Нижний Новгород и другие.
            </p>
            <p className="text-indigo-200 text-xs mb-5">
              ⏳ Сейчас 249 ₽ — с 7 апреля цена вырастет до 349 ₽.
            </p>
            <Link
              href="/benchmark"
              className="inline-block bg-white text-indigo-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors text-sm"
            >
              Посмотреть бенчмарк PDF →
            </Link>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Сколько зарабатывает Python-разработчик на фрилансе в 2026?",
                  a: "Middle Python-разработчик без специализации — 2 200–3 800 ₽/час. Python ML/AI-инженер — 3 500–5 500 ₽/час. Senior Python ML — до 7 000–8 000 ₽/час. Данные по Москве; регионы — минус 20–40%.",
                },
                {
                  q: "Почему PHP-разработчики зарабатывают меньше Go-разработчиков?",
                  a: "Два фактора: 1) Go — нишевой язык с высоким порогом входа, поэтому специалистов меньше. 2) Go используется в high-load и cloud-native системах, где клиенты готовы платить премиум. PHP — массовый рынок с огромной конкуренцией, что давит на ставки.",
                },
                {
                  q: "Как поднять ставку, если я PHP/WordPress-разработчик?",
                  a: "Три пути: 1) Специализация в нишевом стеке (Laravel + API, headless WordPress, high-load). 2) Переход в смежную специализацию (DevOps, техническая SEO-оптимизация). 3) Изучение второго языка — Python или Go расширяют доступный рынок и ставки.",
                },
                {
                  q: "Стоит ли учить Rust в 2026 году для фриланса?",
                  a: "Rust даёт самые высокие ставки (до 8 000 ₽/час Senior), но рынок фриланс-задач узкий: embedded, системное ПО, WebAssembly. Если ваша цель — больше задач, лучше Go или Python ML. Если цель — максимальная ставка в нише — Rust оправдан.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="font-semibold text-gray-800 mb-2 text-sm">{item.q}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Читайте также:</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/stati/stavki-razrabotchikov-frilanserov-2026" className="text-sm text-blue-600 hover:underline">
                Ставки разработчиков-фрилансеров 2026 →
              </Link>
              <Link href="/sravnenie/frontend-vs-backend" className="text-sm text-blue-600 hover:underline">
                Frontend vs Backend: кто зарабатывает больше →
              </Link>
              <Link href="/stati/kak-povysit-stavku-frilansera" className="text-sm text-blue-600 hover:underline">
                Как поднять ставку без потери клиентов →
              </Link>
              <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="text-sm text-blue-600 hover:underline">
                Самозанятый vs ИП: что выгоднее →
              </Link>
              <Link href="/benchmark" className="text-sm text-blue-600 hover:underline">
                Полный бенчмарк ставок по городам PDF →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
