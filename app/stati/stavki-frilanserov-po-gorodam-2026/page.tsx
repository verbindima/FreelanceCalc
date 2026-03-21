import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Ставки фрилансеров по городам России 2026: сравнение 15 городов",
  description:
    "Сколько зарабатывают фрилансеры в Москве, Петербурге, Екатеринбурге и других городах России? Сравнительная таблица медианных ставок по 15 городам 2026 года. Калькулятор для каждого города.",
  keywords: [
    "ставки фрилансеров по городам",
    "сколько зарабатывает фрилансер в Москве",
    "зарплата фрилансера по регионам",
    "ставки IT фрилансеров регионы",
    "сколько берёт фрилансер в Петербурге",
    "ставка фрилансера 2026 города",
    "фриланс ставки по городам России",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-frilanserov-po-gorodam-2026" },
  openGraph: {
    title: "Ставки фрилансеров по городам России 2026",
    description:
      "Сравнительная таблица медианных ставок фрилансеров по 15 городам России. Москва, СПб, Екатеринбург, Новосибирск и другие.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-frilanserov-po-gorodam-2026`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-frilanserov-po-gorodam-2026#article`,
      headline: "Ставки фрилансеров по городам России 2026: сравнение 15 городов",
      description:
        "Сравнительная таблица медианных ставок IT и digital-фрилансеров по 15 городам России в 2026 году.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/stavki-frilanserov-po-gorodam-2026`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Ставки по городам 2026",
            item: `${BASE_URL}/stati/stavki-frilanserov-po-gorodam-2026`,
          },
        ],
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Зависит ли ставка фрилансера от города?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, но меньше, чем кажется. Фрилансер работает удалённо, поэтому технически может брать московские ставки из Омска. На практике местные клиенты ориентируются на локальный рынок: ставки в Москве на 30–50% выше региональных, в Петербурге — на 15–25%. Однако с ростом удалённой работы разрыв сокращается.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать ставку с учётом города?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Используйте калькулятор FreelanceCalc, выбрав свой город — он подставит типичный доход для вашего региона. Вы можете изменить сумму вручную под свои задачи.",
      },
    },
    {
      "@type": "Question",
      name: "Стоит ли брать московские ставки, живя в регионе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, если вы работаете с московскими или иностранными клиентами. Ориентируйтесь не на свой город, а на рынок клиента. Квалифицированный разработчик из Новосибирска вполне может брать 2 000–4 000 ₽/ч при работе с московскими компаниями.",
      },
    },
    {
      "@type": "Question",
      name: "В каком городе России самые высокие ставки фрилансеров?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В Москве — медианный доход IT-фрилансера достигает 280 000 ₽/мес. Далее идут Санкт-Петербург (230 000 ₽/мес) и Екатеринбург (175 000 ₽/мес). Минимальные ставки — в Волгограде и Омске (125–130 000 ₽/мес).",
      },
    },
  ],
};

type CityRow = {
  slug: string;
  name: string;
  multiplier: number;
  defaultIncome: number;
  medianHourly: string;
  frontendRate: string;
  devopsRate: string;
  designerRate: string;
  highlight?: string;
};

// Медианная ставка национального уровня: frontend ~1800 ₽/ч, devops ~3500 ₽/ч, дизайнер ~1400 ₽/ч
// Умножаем на multiplier города
const CITIES: CityRow[] = [
  {
    slug: "moskva",
    name: "Москва",
    multiplier: 1.4,
    defaultIncome: 280000,
    medianHourly: "1 400–3 400 ₽/ч",
    frontendRate: "2 100–4 200 ₽/ч",
    devopsRate: "3 500–8 400 ₽/ч",
    designerRate: "1 400–3 500 ₽/ч",
    highlight: "Крупнейший рынок",
  },
  {
    slug: "sankt-peterburg",
    name: "Санкт-Петербург",
    multiplier: 1.2,
    defaultIncome: 230000,
    medianHourly: "1 200–2 900 ₽/ч",
    frontendRate: "1 800–3 600 ₽/ч",
    devopsRate: "3 000–7 200 ₽/ч",
    designerRate: "1 200–3 000 ₽/ч",
    highlight: "2-й по ставкам",
  },
  {
    slug: "ekaterinburg",
    name: "Екатеринбург",
    multiplier: 1.05,
    defaultIncome: 175000,
    medianHourly: "1 000–2 600 ₽/ч",
    frontendRate: "1 600–3 200 ₽/ч",
    devopsRate: "2 600–6 300 ₽/ч",
    designerRate: "1 100–2 600 ₽/ч",
  },
  {
    slug: "novosibirsk",
    name: "Новосибирск",
    multiplier: 1.0,
    defaultIncome: 160000,
    medianHourly: "900–2 500 ₽/ч",
    frontendRate: "1 500–3 000 ₽/ч",
    devopsRate: "2 500–6 000 ₽/ч",
    designerRate: "1 000–2 500 ₽/ч",
    highlight: "Эталонный уровень",
  },
  {
    slug: "nizhnij-novgorod",
    name: "Нижний Новгород",
    multiplier: 0.95,
    defaultIncome: 150000,
    medianHourly: "850–2 300 ₽/ч",
    frontendRate: "1 400–2 900 ₽/ч",
    devopsRate: "2 400–5 700 ₽/ч",
    designerRate: "950–2 400 ₽/ч",
  },
  {
    slug: "kazan",
    name: "Казань",
    multiplier: 0.95,
    defaultIncome: 150000,
    medianHourly: "850–2 300 ₽/ч",
    frontendRate: "1 400–2 900 ₽/ч",
    devopsRate: "2 400–5 700 ₽/ч",
    designerRate: "950–2 400 ₽/ч",
  },
  {
    slug: "krasnodar",
    name: "Краснодар",
    multiplier: 0.95,
    defaultIncome: 145000,
    medianHourly: "850–2 200 ₽/ч",
    frontendRate: "1 400–2 800 ₽/ч",
    devopsRate: "2 400–5 700 ₽/ч",
    designerRate: "950–2 350 ₽/ч",
    highlight: "Растущий рынок",
  },
  {
    slug: "rostov-na-donu",
    name: "Ростов-на-Дону",
    multiplier: 0.9,
    defaultIncome: 145000,
    medianHourly: "800–2 200 ₽/ч",
    frontendRate: "1 350–2 700 ₽/ч",
    devopsRate: "2 250–5 400 ₽/ч",
    designerRate: "900–2 250 ₽/ч",
  },
  {
    slug: "samara",
    name: "Самара",
    multiplier: 0.9,
    defaultIncome: 140000,
    medianHourly: "800–2 100 ₽/ч",
    frontendRate: "1 350–2 700 ₽/ч",
    devopsRate: "2 250–5 400 ₽/ч",
    designerRate: "900–2 250 ₽/ч",
  },
  {
    slug: "krasnojarsk",
    name: "Красноярск",
    multiplier: 0.9,
    defaultIncome: 145000,
    medianHourly: "800–2 200 ₽/ч",
    frontendRate: "1 350–2 700 ₽/ч",
    devopsRate: "2 250–5 400 ₽/ч",
    designerRate: "900–2 250 ₽/ч",
  },
  {
    slug: "perm",
    name: "Пермь",
    multiplier: 0.88,
    defaultIncome: 140000,
    medianHourly: "780–2 000 ₽/ч",
    frontendRate: "1 320–2 640 ₽/ч",
    devopsRate: "2 200–5 300 ₽/ч",
    designerRate: "880–2 200 ₽/ч",
  },
  {
    slug: "ufa",
    name: "Уфа",
    multiplier: 0.88,
    defaultIncome: 138000,
    medianHourly: "780–2 000 ₽/ч",
    frontendRate: "1 320–2 640 ₽/ч",
    devopsRate: "2 200–5 300 ₽/ч",
    designerRate: "880–2 200 ₽/ч",
  },
  {
    slug: "voronezh",
    name: "Воронеж",
    multiplier: 0.87,
    defaultIncome: 135000,
    medianHourly: "770–1 950 ₽/ч",
    frontendRate: "1 300–2 600 ₽/ч",
    devopsRate: "2 175–5 220 ₽/ч",
    designerRate: "870–2 175 ₽/ч",
  },
  {
    slug: "chelyabinsk",
    name: "Челябинск",
    multiplier: 0.85,
    defaultIncome: 130000,
    medianHourly: "750–1 900 ₽/ч",
    frontendRate: "1 275–2 550 ₽/ч",
    devopsRate: "2 125–5 100 ₽/ч",
    designerRate: "850–2 125 ₽/ч",
  },
  {
    slug: "omsk",
    name: "Омск",
    multiplier: 0.85,
    defaultIncome: 130000,
    medianHourly: "750–1 900 ₽/ч",
    frontendRate: "1 275–2 550 ₽/ч",
    devopsRate: "2 125–5 100 ₽/ч",
    designerRate: "850–2 125 ₽/ч",
  },
  {
    slug: "volgograd",
    name: "Волгоград",
    multiplier: 0.82,
    defaultIncome: 125000,
    medianHourly: "720–1 850 ₽/ч",
    frontendRate: "1 230–2 460 ₽/ч",
    devopsRate: "2 050–4 920 ₽/ч",
    designerRate: "820–2 050 ₽/ч",
  },
];

export default function CityRatesArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3 flex-wrap">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 text-sm hover:text-gray-700">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Ставки по городам 2026</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ставки фрилансеров по городам России 2026: сравнение 15 городов
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Сколько берут фрилансеры в разных городах России? Разбираем разрыв между Москвой
              и регионами, показываем ставки по ключевым специальностям и объясняем, почему
              местоположение влияет на доход меньше, чем многие думают.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Обновлено: март 2026</span>
              <span>·</span>
              <span>15 городов</span>
              <span>·</span>
              <span>3 специальности</span>
            </div>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Разрыв Москва / регион", value: "×1.7", sub: "медиана по IT" },
              { label: "Макс. доход (Москва)", value: "280 т₽", sub: "медиана/месяц" },
              { label: "Мин. доход (Волгоград)", value: "125 т₽", sub: "медиана/месяц" },
              { label: "Городов в базе", value: "15", sub: "с калькуляторами" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                <div className="text-xs font-medium text-gray-700 mt-1">{item.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Main comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Сравнительная таблица: ставки по 15 городам
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Медианные ставки для Frontend-разработчика, DevOps-инженера и UI/UX-дизайнера.
              Нажмите на город, чтобы открыть калькулятор с вашими параметрами.
            </p>

            {/* Mobile-friendly cards layout */}
            <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Город</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Медиана ₽/ч</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Frontend</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">DevOps</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Дизайнер</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Доход/мес</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  {CITIES.map((city, idx) => (
                    <tr
                      key={city.slug}
                      className={`border-b border-gray-50 hover:bg-blue-50/40 transition-colors ${
                        idx === CITIES.length - 1 ? "border-0" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-800">{city.name}</div>
                        {city.highlight && (
                          <div className="text-xs text-blue-500 mt-0.5">{city.highlight}</div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 whitespace-nowrap text-xs">
                        {city.medianHourly}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap text-xs">
                        {city.frontendRate}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap text-xs">
                        {city.devopsRate}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap text-xs">
                        {city.designerRate}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-800 whitespace-nowrap">
                        {city.defaultIncome.toLocaleString("ru-RU")} ₽
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={`/goroda/${city.slug}`}
                          className="inline-block text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap"
                        >
                          Считать →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {CITIES.map((city) => (
                <div key={city.slug} className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-semibold text-gray-800">{city.name}</span>
                      {city.highlight && (
                        <span className="ml-2 text-xs text-blue-500">{city.highlight}</span>
                      )}
                    </div>
                    <Link
                      href={`/goroda/${city.slug}`}
                      className="text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      Считать →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                    <div>Медиана: <span className="font-medium text-gray-800">{city.medianHourly}</span></div>
                    <div>Доход/мес: <span className="font-medium text-gray-800">{city.defaultIncome.toLocaleString("ru-RU")} ₽</span></div>
                    <div>Frontend: <span className="text-gray-700">{city.frontendRate}</span></div>
                    <div>DevOps: <span className="text-gray-700">{city.devopsRate}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Analysis section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что влияет на разрыв между городами?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: "🏙️",
                  title: "Концентрация крупного бизнеса",
                  text: "В Москве и Петербурге сосредоточены штаб-квартиры крупных компаний, которые платят выше рынка. Региональный малый бизнес ориентируется на местные зарплаты.",
                },
                {
                  icon: "📡",
                  title: "Удалённая работа стирает границы",
                  text: "Квалифицированный разработчик из Новосибирска может работать с московскими клиентами по московским ставкам. Локальный рынок — не потолок.",
                },
                {
                  icon: "📉",
                  title: "Стоимость жизни компенсирует разрыв",
                  text: "Доход 150 000 ₽/мес в Казани эквивалентен ~220 000 ₽/мес в Москве по покупательной способности. Реальное благосостояние выравнивается.",
                },
                {
                  icon: "🚀",
                  title: "Рост ставок в регионах",
                  text: "С 2022 года многие специалисты переехали из Москвы в регионы, принеся столичные ставки. Краснодар, Казань и Нижний Новгород быстро сокращают разрыв.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* City highlights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Особенности рынков по городам
            </h2>
            <div className="space-y-4">
              {[
                {
                  city: "Москва и Санкт-Петербург",
                  slug: "moskva",
                  text: "Крупнейшие рынки фриланса. Здесь максимальный выбор клиентов и самые высокие ставки, но и конкуренция среди специалистов выше. Для старта карьеры — оптимальный выбор, если можно позволить аренду.",
                },
                {
                  city: "Екатеринбург, Казань, Краснодар",
                  slug: "ekaterinburg",
                  text: "«Новые» IT-столицы с быстро растущим рынком. Ставки чуть ниже столичных, но разрыв сокращается. Краснодар особенно привлекателен для переехавших москвичей — ставки держатся на московском уровне при меньших расходах.",
                },
                {
                  city: "Новосибирск и Академгородок",
                  slug: "novosibirsk",
                  text: "Сильная техническая школа — Академгородок, НГУ, Технопарк. Конкуренция среди разработчиков высока, ставки на уровне среднероссийских. Хорошая база для выхода на международный рынок.",
                },
                {
                  city: "Воронеж, Пермь, Уфа",
                  slug: "voronezh",
                  text: "IT-аутсорсинговые центры с развитыми техническими вузами. Много разработчиков, работающих удалённо на столичных клиентов. Для фрилансера — оптимальное сочетание низких расходов и доступа к московскому рынку.",
                },
              ].map((item) => (
                <div key={item.city} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 mb-1">{item.city}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                    </div>
                    <Link
                      href={`/goroda/${item.slug}`}
                      className="flex-shrink-0 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Калькулятор →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tip: work with Moscow clients from regions */}
          <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              💡 Как взять московскую ставку из региона
            </h2>
            <ol className="text-sm text-gray-700 space-y-2 list-none">
              {[
                "Работайте с московскими и питерскими клиентами — они не спрашивают ваш город.",
                "Специализируйтесь: узкий стек (Go, Rust, Swift) даёт ставку выше независимо от региона.",
                "Стройте портфолио на проектах для крупного бизнеса, а не местного малого.",
                "Ориентируйтесь на ставку по специальности, а не по городу — используйте калькулятор ниже.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 font-bold text-amber-600">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Calculator CTA */}
          <section className="mb-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Рассчитайте свою ставку под ваш город
            </h2>
            <p className="text-blue-100 mb-6 text-sm md:text-base">
              Выберите город, укажите желаемый доход и налоговый режим. Калькулятор покажет
              минимальную и комфортную ставку с учётом реальной загрузки и отпуска.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Открыть калькулятор →
              </Link>
              <Link
                href="/goroda"
                className="inline-block bg-blue-500/30 text-white border border-white/20 font-semibold px-6 py-3 rounded-xl hover:bg-blue-500/50 transition-colors"
              >
                Все города →
              </Link>
            </div>
          </section>

          {/* Benchmark upsell */}
          <section className="mb-10 border border-indigo-200 rounded-2xl p-6 bg-indigo-50">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  Нужны ставки с разбивкой по опыту?
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  PDF-бенчмарк содержит медианные ставки по <strong>15 городам</strong> ×{" "}
                  <strong>26 специальностям</strong> × <strong>3 уровням опыта</strong> (джун / мид / сеньор).
                  Обновляется ежеквартально. Удобно для переговоров с клиентом.
                </p>
                <p className="text-xs text-gray-400 mb-3">Единоразовая покупка — 249 ₽</p>
                <Link
                  href="/benchmark"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-800 bg-indigo-100 hover:bg-indigo-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Смотреть бенчмарк →
                </Link>
              </div>
            </div>
          </section>

          {/* All cities links */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Калькуляторы по городам
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/goroda/${city.slug}`}
                  className="text-sm text-blue-600 hover:text-blue-800 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-lg px-3 py-2 transition-colors text-center"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Зависит ли ставка фрилансера от города?",
                  a: "Да, но меньше, чем кажется. Фрилансер работает удалённо, поэтому технически может брать московские ставки из Омска. На практике местные клиенты ориентируются на локальный рынок: ставки в Москве на 30–50% выше региональных, в Петербурге — на 15–25%. Однако с ростом удалённой работы разрыв сокращается.",
                },
                {
                  q: "Как рассчитать ставку с учётом города?",
                  a: "Используйте калькулятор FreelanceCalc, выбрав свой город — он подставит типичный доход для вашего региона. Вы можете изменить сумму вручную под свои задачи.",
                },
                {
                  q: "Стоит ли брать московские ставки, живя в регионе?",
                  a: "Да, если вы работаете с московскими или иностранными клиентами. Ориентируйтесь не на свой город, а на рынок клиента. Квалифицированный разработчик из Новосибирска вполне может брать 2 000–4 000 ₽/ч при работе с московскими компаниями.",
                },
                {
                  q: "В каком городе России самые высокие ставки фрилансеров?",
                  a: "В Москве — медианный доход IT-фрилансера достигает 280 000 ₽/мес. Далее идут Санкт-Петербург (230 000 ₽/мес) и Екатеринбург (175 000 ₽/мес). Минимальные ставки — в Волгограде и Омске (125–130 000 ₽/мес).",
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
            <Link href="/stati/srednyaya-stavka-frilansera-2026" className="text-sm text-blue-600 hover:underline">
              ← Ставки по специальностям
            </Link>
            <Link href="/stavka" className="text-sm text-blue-600 hover:underline">
              Калькулятор по специальности →
            </Link>
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              Главный калькулятор →
            </Link>
            <Link href="/stati" className="text-sm text-blue-600 hover:underline">
              Все статьи →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
