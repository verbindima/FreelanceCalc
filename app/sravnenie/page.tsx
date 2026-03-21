import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Сравнение специальностей фрилансеров: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки фрилансеров по 23 парам специальностей: Frontend vs Backend, Android vs iOS, DevOps vs ML, Python vs Data Analyst, PM vs BA, SEO vs Таргет и другие. Таблицы с Junior, Middle, Senior ставками 2026 года.",
  keywords: [
    "сравнение специальностей фрилансеров",
    "кто больше зарабатывает фрилансер",
    "frontend vs backend зарплата",
    "android vs ios разработчик зарплата",
    "devops vs backend зарплата",
    "1с разработчик vs php зарплата",
    "smm vs таргетолог зарплата",
    "data analyst vs ml зарплата",
    "сравнение ставок разработчиков 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie" },
  openGraph: {
    title: "Сравнение специальностей фрилансеров: кто больше зарабатывает в 2026",
    description:
      "Детальные сравнения ставок по 23 парам специальностей. Junior, Middle, Senior — кто зарабатывает больше и почему.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/sravnenie`,
      url: `${BASE_URL}/sravnenie`,
      name: "Сравнение специальностей фрилансеров — FreelanceCalc",
      description:
        "Сравнение почасовых ставок по 18 парам специальностей на фрилансе в России. Junior, Middle, Senior уровни — актуальные данные 2026 года.",
      inLanguage: "ru",
      isPartOf: { "@id": BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
      ],
    },
  ],
};

const comparisons = [
  {
    slug: "frontend-vs-backend",
    title: "Frontend vs Backend",
    subtitle: "Разработчики",
    winner: "Backend +17%",
    winnerColor: "green",
    description: "Backend зарабатывает на 17% больше на Middle уровне. Но Frontend проще для старта.",
    juniorDiff: "1 500 vs 1 800 ₽/час",
    middleDiff: "3 000 vs 3 500 ₽/час",
    seniorDiff: "5 500 vs 6 000 ₽/час",
    tags: ["IT", "Разработка"],
  },
  {
    slug: "python-vs-frontend",
    title: "Python vs Frontend",
    subtitle: "Разработчики",
    winner: "Python +17%",
    winnerColor: "yellow",
    description: "Python разработчики зарабатывают больше, плюс открывают путь в ML с ставками до 9 000 ₽/час.",
    juniorDiff: "1 800 vs 1 500 ₽/час",
    middleDiff: "3 500 vs 3 000 ₽/час",
    seniorDiff: "6 000 vs 5 500 ₽/час",
    tags: ["IT", "Разработка"],
  },
  {
    slug: "fullstack-vs-backend",
    title: "Fullstack vs Backend",
    subtitle: "Разработчики",
    winner: "Fullstack +14%",
    winnerColor: "emerald",
    description: "Fullstack закрывает весь стек и берёт на 14% больше. Особенно выгоден для фриланса.",
    juniorDiff: "2 000 vs 1 800 ₽/час",
    middleDiff: "4 000 vs 3 500 ₽/час",
    seniorDiff: "7 000 vs 6 000 ₽/час",
    tags: ["IT", "Разработка"],
  },
  {
    slug: "qa-vs-frontend",
    title: "QA vs Frontend",
    subtitle: "IT-специалисты",
    winner: "Frontend +67%",
    winnerColor: "blue",
    description: "Frontend зарабатывает на 67% больше QA на Middle уровне. QA — популярный входной путь в IT.",
    juniorDiff: "800 vs 1 500 ₽/час",
    middleDiff: "1 800 vs 3 000 ₽/час",
    seniorDiff: "3 500 vs 5 500 ₽/час",
    tags: ["IT", "Тестирование"],
  },
  {
    slug: "data-analyst-vs-ml",
    title: "Data Analyst vs ML",
    subtitle: "Data Science",
    winner: "ML +83%",
    winnerColor: "violet",
    description: "ML-инженер зарабатывает вдвое больше аналитика на Junior. Senior ML — 9 000 ₽/час.",
    juniorDiff: "1 500 vs 3 000 ₽/час",
    middleDiff: "3 000 vs 5 500 ₽/час",
    seniorDiff: "5 500 vs 9 000 ₽/час",
    tags: ["Data Science", "AI"],
  },
  {
    slug: "ui-ux-vs-graficheskij-dizajner",
    title: "UI/UX vs Граф. дизайн",
    subtitle: "Дизайнеры",
    winner: "UI/UX +39%",
    winnerColor: "purple",
    description: "UI/UX дизайнеры зарабатывают на 39–43% больше. Аналитика и исследования — их преимущество.",
    juniorDiff: "700 vs 1 000 ₽/час",
    middleDiff: "1 800 vs 2 500 ₽/час",
    seniorDiff: "3 500 vs 5 000 ₽/час",
    tags: ["Дизайн"],
  },
  {
    slug: "smm-vs-targetolog",
    title: "SMM vs Таргетолог",
    subtitle: "Маркетинг",
    winner: "Таргет +50%",
    winnerColor: "orange",
    description: "Таргетолог зарабатывает на 50% больше SMM на Middle. Прямой ROI поднимает ставку.",
    juniorDiff: "500 vs 700 ₽/час",
    middleDiff: "1 200 vs 1 800 ₽/час",
    seniorDiff: "2 500 vs 3 500 ₽/час",
    tags: ["Маркетинг"],
  },
  {
    slug: "kopirayter-vs-kontent-menedzher",
    title: "Копирайтер vs Контент-менеджер",
    subtitle: "Контент",
    winner: "КМ +13%",
    winnerColor: "indigo",
    description: "Контент-менеджер берёт чуть больше на Middle. Но специализированный копирайтер может обойти обоих.",
    juniorDiff: "300 vs 400 ₽/час",
    middleDiff: "800 vs 900 ₽/час",
    seniorDiff: "2 000 vs 2 000 ₽/час",
    tags: ["Контент", "Тексты"],
  },
  {
    slug: "android-vs-ios-razrabotchik",
    title: "Android vs iOS разработчик",
    subtitle: "Мобильная разработка",
    winner: "iOS +14%",
    winnerColor: "blue",
    description: "iOS берёт на 14–17% больше. Но Android даёт больше заказов на российском рынке.",
    juniorDiff: "1 500 vs 1 800 ₽/час",
    middleDiff: "2 800 vs 3 200 ₽/час",
    seniorDiff: "5 000 vs 5 800 ₽/час",
    tags: ["IT", "Мобильная"],
  },
  {
    slug: "devops-vs-backend",
    title: "DevOps vs Backend",
    subtitle: "IT-инфраструктура",
    winner: "DevOps +8%",
    winnerColor: "cyan",
    description: "DevOps берёт на 8–10% больше. Ретейнерные контракты дают DevOps стабильный доход.",
    juniorDiff: "1 800 vs 2 000 ₽/час",
    middleDiff: "3 500 vs 3 800 ₽/час",
    seniorDiff: "6 000 vs 6 500 ₽/час",
    tags: ["IT", "Инфраструктура"],
  },
  {
    slug: "1c-razrabotchik-vs-php",
    title: "1С разработчик vs PHP",
    subtitle: "Разработка (RU-рынок)",
    winner: "1С +12%",
    winnerColor: "amber",
    description: "1С берёт на 12–25% больше PHP. Нет международной конкуренции, стабильный B2B-спрос.",
    juniorDiff: "1 200 vs 1 500 ₽/час",
    middleDiff: "2 500 vs 2 800 ₽/час",
    seniorDiff: "4 000 vs 4 500 ₽/час",
    tags: ["IT", "1С", "RU"],
  },
  {
    slug: "java-razrabotchik-vs-python-razrabotchik",
    title: "Java vs Python разработчик",
    subtitle: "Разработчики",
    winner: "Python +18% (Senior)",
    winnerColor: "blue",
    description: "Python обгоняет Java на Senior-уровне за счёт ML/AI (6 500 vs 5 500 ₽/час). Java лучше для старта.",
    juniorDiff: "1 700 vs 1 500 ₽/час",
    middleDiff: "3 200 vs 3 500 ₽/час",
    seniorDiff: "5 500 vs 6 500 ₽/час",
    tags: ["IT", "Разработка"],
  },
  {
    slug: "golang-razrabotchik-vs-python-razrabotchik",
    title: "Golang vs Python разработчик",
    subtitle: "Разработчики",
    winner: "Golang +29%",
    winnerColor: "cyan",
    description: "Go-разработчики зарабатывают на 29% больше на Middle. Дефицит Go-специалистов держит ставки высокими.",
    juniorDiff: "2 000 vs 1 800 ₽/час",
    middleDiff: "4 500 vs 3 500 ₽/час",
    seniorDiff: "7 500 vs 6 500 ₽/час",
    tags: ["IT", "Разработка"],
  },
  {
    slug: "php-razrabotchik-vs-python-razrabotchik",
    title: "PHP vs Python разработчик",
    subtitle: "Веб-разработка",
    winner: "Python +40%",
    winnerColor: "yellow",
    description: "Python зарабатывает на 40% больше PHP на Middle. PHP лидирует по количеству заказов (WordPress, Bitrix).",
    juniorDiff: "1 200 vs 1 800 ₽/час",
    middleDiff: "2 500 vs 3 500 ₽/час",
    seniorDiff: "4 500 vs 6 500 ₽/час",
    tags: ["IT", "Веб"],
  },
  {
    slug: "seo-specialist-vs-smm-specialist",
    title: "SEO vs SMM специалист",
    subtitle: "Digital-маркетинг",
    winner: "SEO +25%",
    winnerColor: "green",
    description: "SEO зарабатывает на 25% больше SMM на Middle. Долгосрочные ретейнеры поднимают ставку SEO-специалиста.",
    juniorDiff: "700 vs 500 ₽/час",
    middleDiff: "1 500 vs 1 200 ₽/час",
    seniorDiff: "3 500 vs 2 500 ₽/час",
    tags: ["Маркетинг", "SEO"],
  },
  {
    slug: "bitrix-razrabotchik-vs-wordpress-razrabotchik",
    title: "Bitrix vs WordPress разработчик",
    subtitle: "Веб-разработка (RU-рынок)",
    winner: "Bitrix +67%",
    winnerColor: "amber",
    description: "Bitrix-разработчики берут на 67% больше WordPress. Закрытая платформа, B2B-клиенты, высокий порог входа.",
    juniorDiff: "1 200 vs 700 ₽/час",
    middleDiff: "2 500 vs 1 500 ₽/час",
    seniorDiff: "4 500 vs 2 800 ₽/час",
    tags: ["IT", "Веб", "RU"],
  },
  {
    slug: "java-razrabotchik-vs-golang-razrabotchik",
    title: "Java vs Golang разработчик",
    subtitle: "Бэкенд-разработка",
    winner: "Go +41%",
    winnerColor: "cyan",
    description: "Go-разработчики зарабатывают на 29–41% больше Java. Дефицит Go-специалистов держит ставки высокими.",
    juniorDiff: "1 700 vs 2 200 ₽/час",
    middleDiff: "3 200 vs 4 500 ₽/час",
    seniorDiff: "5 500 vs 7 500 ₽/час",
    tags: ["IT", "Разработка"],
  },
  {
    slug: "net-razrabotchik-vs-java-razrabotchik",
    title: ".NET vs Java разработчик",
    subtitle: "Корпоративная разработка",
    winner: "Java +10%",
    winnerColor: "blue",
    description: "Java незначительно обгоняет .NET на Senior-уровне. Ставки почти равны: разница определяется специализацией.",
    juniorDiff: "1 600 vs 1 700 ₽/час",
    middleDiff: "3 000 vs 3 200 ₽/час",
    seniorDiff: "5 000 vs 5 500 ₽/час",
    tags: ["IT", "Enterprise"],
  },
  {
    slug: "menedzher-proektov-vs-biznes-analitik",
    title: "PM vs Бизнес-аналитик",
    subtitle: "IT-менеджмент",
    winner: "BA +33%",
    winnerColor: "green",
    description: "Бизнес-аналитик зарабатывает на 33% больше PM на Middle. Глубокая экспертиза в требованиях стоит дороже координации.",
    juniorDiff: "800 vs 900 ₽/час",
    middleDiff: "1 500 vs 2 000 ₽/час",
    seniorDiff: "3 000 vs 4 000 ₽/час",
    tags: ["IT", "Менеджмент"],
  },
  {
    slug: "seo-specialist-vs-targetolog",
    title: "SEO vs Таргетолог",
    subtitle: "Digital-маркетинг",
    winner: "Таргет +20%",
    winnerColor: "orange",
    description: "Таргетолог зарабатывает на 20% больше SEO на Middle. Прямой измеримый ROI поднимает ставку.",
    juniorDiff: "700 vs 700 ₽/час",
    middleDiff: "1 500 vs 1 800 ₽/час",
    seniorDiff: "3 500 vs 3 500 ₽/час",
    tags: ["Маркетинг", "SEO"],
  },
  {
    slug: "devops-vs-ml-inzhener",
    title: "DevOps vs ML-инженер",
    subtitle: "IT-инфраструктура и AI",
    winner: "ML +45%",
    winnerColor: "violet",
    description: "ML-инженер зарабатывает на 45% больше DevOps на Middle. AI-бум 2024–2026 разогнал ставки до 9 000 ₽/час на Senior.",
    juniorDiff: "2 000 vs 3 000 ₽/час",
    middleDiff: "3 800 vs 5 500 ₽/час",
    seniorDiff: "6 500 vs 9 000 ₽/час",
    tags: ["IT", "AI", "Инфраструктура"],
  },
  {
    slug: "fullstack-vs-mobilnyj-razrabotchik",
    title: "Fullstack vs Мобильный разработчик",
    subtitle: "Разработка",
    winner: "Мобильный +13%",
    winnerColor: "emerald",
    description: "Мобильный разработчик берёт на 13% больше Fullstack. Узкая платформенная специализация создаёт дефицит.",
    juniorDiff: "2 000 vs 2 200 ₽/час",
    middleDiff: "4 000 vs 4 500 ₽/час",
    seniorDiff: "7 000 vs 7 500 ₽/час",
    tags: ["IT", "Разработка", "Mobile"],
  },
  {
    slug: "python-razrabotchik-vs-data-analyst",
    title: "Python разработчик vs Data Analyst",
    subtitle: "Data Science",
    winner: "Python +17%",
    winnerColor: "yellow",
    description: "Python разработчик зарабатывает на 17% больше аналитика данных. Прямой продуктовый результат ценится выше инсайтов.",
    juniorDiff: "1 800 vs 1 500 ₽/час",
    middleDiff: "3 500 vs 3 000 ₽/час",
    seniorDiff: "6 500 vs 5 500 ₽/час",
    tags: ["IT", "Data Science"],
  },
];

const winnerColorMap: Record<string, string> = {
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
  emerald: "bg-emerald-100 text-emerald-800",
  blue: "bg-blue-100 text-blue-800",
  violet: "bg-violet-100 text-violet-800",
  purple: "bg-purple-100 text-purple-800",
  orange: "bg-orange-100 text-orange-800",
  indigo: "bg-indigo-100 text-indigo-800",
  cyan: "bg-cyan-100 text-cyan-800",
  amber: "bg-amber-100 text-amber-800",
};

export default function SravneniePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
              FreelanceCalc
            </Link>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li className="text-gray-700">Сравнение специальностей</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Сравнение специальностей фрилансеров: кто больше зарабатывает в 2026
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Выбираете специальность или думаете о смене направления? Здесь — честное сравнение ставок
            по 23 парам специальностей: от IT-разработки и мобильной разработки до маркетинга, дизайна и аналитики.
            Данные Junior, Middle, Senior с расчётом месячного дохода. Актуально на Q1 2026.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою персональную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Сравнение покажет направление. Калькулятор — вашу конкретную ставку с учётом
              налогов, загрузки и города.
            </p>
            <a
              href="/stavka"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>

          {/* Comparison grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Все сравнения специальностей (23 пары)</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {comparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/sravnenie/${comp.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{comp.subtitle}</p>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{comp.title}</h3>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${winnerColorMap[comp.winnerColor]}`}>
                      {comp.winner}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{comp.description}</p>

                  <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-xs text-gray-600 mb-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-500">Junior</span>
                      <span>{comp.juniorDiff}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-500">Middle</span>
                      <span>{comp.middleDiff}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-500">Senior</span>
                      <span>{comp.seniorDiff}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {comp.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-blue-600 text-sm font-medium">Подробнее →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Summary table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Быстрая таблица: Middle-ставки по всем сравниваемым специальностям
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Специальность</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Middle ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Сравнение</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "ML-инженер", rate: "5 500", monthly: "880 000", slug: "data-analyst-vs-ml", badge: "Топ", badgeColor: "bg-violet-100 text-violet-800" },
                    { name: "Fullstack разработчик", rate: "4 000", monthly: "640 000", slug: "fullstack-vs-backend", badge: "", badgeColor: "" },
                    { name: "Backend разработчик", rate: "3 500", monthly: "560 000", slug: "frontend-vs-backend", badge: "", badgeColor: "" },
                    { name: "Python разработчик", rate: "3 500", monthly: "560 000", slug: "java-razrabotchik-vs-python-razrabotchik", badge: "", badgeColor: "" },
                    { name: "Java разработчик", rate: "3 200", monthly: "512 000", slug: "java-razrabotchik-vs-python-razrabotchik", badge: "", badgeColor: "" },
                    { name: "Frontend разработчик", rate: "3 000", monthly: "480 000", slug: "frontend-vs-backend", badge: "", badgeColor: "" },
                    { name: "Data Analyst", rate: "3 000", monthly: "480 000", slug: "data-analyst-vs-ml", badge: "", badgeColor: "" },
                    { name: "UI/UX дизайнер", rate: "2 500", monthly: "400 000", slug: "ui-ux-vs-graficheskij-dizajner", badge: "", badgeColor: "" },
                    { name: "iOS разработчик", rate: "3 200", monthly: "512 000", slug: "android-vs-ios-razrabotchik", badge: "", badgeColor: "" },
                    { name: "Android разработчик", rate: "2 800", monthly: "448 000", slug: "android-vs-ios-razrabotchik", badge: "", badgeColor: "" },
                    { name: "1С разработчик", rate: "2 800", monthly: "448 000", slug: "1c-razrabotchik-vs-php", badge: "RU", badgeColor: "bg-amber-100 text-amber-800" },
                    { name: "QA-тестировщик", rate: "1 800", monthly: "288 000", slug: "qa-vs-frontend", badge: "", badgeColor: "" },
                    { name: "Таргетолог", rate: "1 800", monthly: "288 000", slug: "smm-vs-targetolog", badge: "", badgeColor: "" },
                    { name: "Графический дизайнер", rate: "1 800", monthly: "288 000", slug: "ui-ux-vs-graficheskij-dizajner", badge: "", badgeColor: "" },
                    { name: "PHP разработчик", rate: "2 500", monthly: "400 000", slug: "1c-razrabotchik-vs-php", badge: "", badgeColor: "" },
                    { name: "SMM-специалист", rate: "1 200", monthly: "192 000", slug: "smm-vs-targetolog", badge: "", badgeColor: "" },
                    { name: "Контент-менеджер", rate: "900", monthly: "144 000", slug: "kopirayter-vs-kontent-menedzher", badge: "", badgeColor: "" },
                    { name: "Копирайтер", rate: "800", monthly: "128 000", slug: "kopirayter-vs-kontent-menedzher", badge: "", badgeColor: "" },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {row.name}
                        {row.badge && (
                          <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${row.badgeColor}`}>
                            {row.badge}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-green-700">{row.rate} ₽</td>
                      <td className="px-4 py-3 text-center text-gray-500 text-xs hidden md:table-cell">{row.monthly} ₽</td>
                      <td className="px-4 py-3 text-center">
                        <Link
                          href={`/sravnenie/${row.slug}`}
                          className="text-blue-600 hover:underline text-xs font-medium"
                        >
                          Сравнение →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Middle-ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Данные Q1 2026 по Хабр Карьера, FL.ru, Kwork.
            </p>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте свою точную ставку</h2>
            <p className="text-blue-100 mb-6">
              Сравнение показывает направление. Калькулятор — вашу конкретную минимальную ставку
              с учётом налогов (НПД / ИП), загрузки, отпуска и рыночной медианы по вашей специальности.
            </p>
            <a
              href="/stavka"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
