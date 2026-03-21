import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет, копирайтинг",
  description:
    "Сколько берёт маркетолог-фрилансер в России в 2026 году? Медианные ставки для SMM-менеджеров, SEO-специалистов, таргетологов, копирайтеров и контент-менеджеров. Реальные данные + калькулятор.",
  keywords: [
    "ставки маркетологов фрилансеров 2026",
    "сколько берёт smm менеджер фрилансер",
    "ставка копирайтера фрилансер",
    "ставка seo специалиста фрилансер",
    "сколько зарабатывает таргетолог фрилансер",
    "ставка контент-менеджера фрилансер",
    "ставка email-маркетолога фрилансер",
    "ставки маркетологов россия 2026",
    "почасовая ставка smm",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-marketologov-frilanserov-2026" },
  openGraph: {
    title: "Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет, копирайтинг",
    description:
      "Медианные почасовые ставки для SMM, SEO, таргетологов, копирайтеров и контент-менеджеров на фрилансе. Реальные данные рынка 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-marketologov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-marketologov-frilanserov-2026#article`,
      headline:
        "Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет, копирайтинг",
      description:
        "Медианные почасовые ставки для 7 маркетинг-специализаций на фрилансе в России. Реальные данные рынка 2026.",
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
        "@id": `${BASE_URL}/stati/stavki-marketologov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "Фриланс-маркетинг" },
        { "@type": "Thing", name: "Почасовая ставка маркетолога" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт SMM-менеджер-фрилансер в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Медианная ставка SMM-менеджера-фрилансера в России в 2026 году составляет 700–1 800 ₽/час. В Москве ставки выше на 30–40%. Специалисты с кейсами роста продаж берут 2 000–3 500 ₽/час.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает SEO-специалист на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO-специалист на фрилансе зарабатывает 900–2 500 ₽/час. Технические SEO-специалисты и те, кто работает с e-commerce, берут 2 000–4 000 ₽/час. Средний доход в месяц — от 90 000 до 270 000 ₽.",
          },
        },
        {
          "@type": "Question",
          name: "Почему таргетолог берёт больше SMM-менеджера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Таргетолог работает с рекламными бюджетами и напрямую влияет на ROI клиента — результат легко измерить в рублях. SMM-менеджер создаёт контент и управляет сообществом: эффект косвенный и долгосрочный. Прямая связь с деньгами = более высокая ставка.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать свою ставку маркетологу-фрилансеру?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте формулу: ставка = (желаемый доход + налоги + простои + расходы) / (рабочие часы × коэффициент загрузки). Бесплатный калькулятор на FreelanceCalc делает этот расчёт автоматически с учётом вашей специализации.",
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
          name: "Ставки маркетологов-фрилансеров 2026",
          item: `${BASE_URL}/stati/stavki-marketologov-frilanserov-2026`,
        },
      ],
    },
  ],
};

const marketingSpecialties = [
  {
    name: "Таргетолог",
    slug: "targetolog",
    median: "1 000–2 800 ₽/час",
    monthlyIncome: "от 100 000 до 300 000 ₽",
    demand: "Очень высокий",
    notes: "VK Ads, Яндекс.Директ. Прямая связь с ROI — легко обосновать ставку.",
  },
  {
    name: "SEO-специалист",
    slug: "seo-specialist",
    median: "900–2 500 ₽/час",
    monthlyIncome: "от 90 000 до 270 000 ₽",
    demand: "Высокий",
    notes: "Технический SEO и e-commerce — самые высокооплачиваемые направления.",
  },
  {
    name: "Маркетолог (стратег)",
    slug: "marketolog",
    median: "1 200–3 500 ₽/час",
    monthlyIncome: "от 120 000 до 380 000 ₽",
    demand: "Высокий",
    notes: "Разработка стратегий, анализ рынка, запуски продуктов. Продаётся экспертиза, не время.",
  },
  {
    name: "Email-маркетолог",
    slug: "marketolog",
    median: "900–2 200 ₽/час",
    monthlyIncome: "от 90 000 до 240 000 ₽",
    demand: "Средний",
    notes: "Unisender, Mailchimp, Sendsay. Высокий ROAS email-канала — клиенты ценят.",
  },
  {
    name: "SMM-менеджер",
    slug: "smm-specialist",
    median: "700–1 800 ₽/час",
    monthlyIncome: "от 70 000 до 200 000 ₽",
    demand: "Очень высокий",
    notes: "ВКонтакте, Telegram, Instagram*. Большой рынок, высокая конкуренция среди джунов.",
  },
  {
    name: "Копирайтер / контент-автор",
    slug: "kopirayter",
    median: "600–1 600 ₽/час",
    monthlyIncome: "от 60 000 до 180 000 ₽",
    demand: "Высокий",
    notes: "SEO-тексты, лендинги, рекламные материалы. Узкие ниши платят значительно больше.",
  },
  {
    name: "Контент-менеджер",
    slug: "content-manager",
    median: "600–1 400 ₽/час",
    monthlyIncome: "от 60 000 до 150 000 ₽",
    demand: "Высокий",
    notes: "Публикации, редактура, ведение CMS. Часто совмещают с SMM или копирайтингом.",
  },
];

export default function MarketingRatesArticle() {
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
              <li className="text-gray-700">Ставки маркетологов-фрилансеров 2026</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ставки маркетологов-фрилансеров в России 2026: SMM, SEO, таргет, копирайтинг
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>📅 Обновлено: март 2026</span>
            <span>⏱ 7 минут чтения</span>
            <span>📣 SMM, SEO, Таргет, Копирайтинг, Email</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Маркетинг и контент — третья по численности категория фрилансеров в России после
            разработчиков и дизайнеров. Но разброс ставок внутри профессии огромен: стратег-маркетолог
            и контент-менеджер могут зарабатывать в 3–5 раз по-разному. Ниже — актуальные медианные
            данные по 7 маркетинг-специализациям и объяснение, что реально влияет на ставку.
          </p>

          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Узнайте свою ставку за 30 секунд</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход — калькулятор учтёт налоги, загрузку и отпуск и покажет,
              сколько нужно брать за час работы маркетолога.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=article&utm_campaign=marketing-rates-2026"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Main table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Медианные ставки маркетологов-фрилансеров в 2026 году
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
                  {marketingSpecialties.map((spec, idx) => (
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
                          href={`/stavka/${spec.slug}?utm_source=stati&utm_medium=table&utm_campaign=marketing-rates`}
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
              * Медианы агрегированы по данным FL.ru, Kwork, HeadHunter, Telegram-каналов маркетологов
              и сообществ Digital Jobs, Работа в маркетинге. Данные на Q1 2026.
              Диапазон отражает уровни Junior–Senior.
            </p>
          </section>

          {/* Why rates differ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему стратег-маркетолог берёт в 5 раз больше контент-менеджера
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Разброс в 5–6 раз между специализациями объясняется одним ключевым принципом:
              <strong> близость к деньгам клиента.</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-900 mb-1">Измеримый ROI</h3>
                <p className="text-sm text-gray-600">
                  Таргетолог и маркетолог-стратег напрямую влияют на продажи — клиент считает
                  ROAS и легко обосновывает высокую ставку. Контент-менеджер влияет косвенно.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-1">Ответственность</h3>
                <p className="text-sm text-gray-600">
                  Таргетолог управляет рекламным бюджетом клиента — иногда миллионы рублей.
                  Высокая ответственность = высокая оплата. Контент-менеджер публикует посты.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900 mb-1">Редкость навыков</h3>
                <p className="text-sm text-gray-600">
                  SEO-специалист с опытом в e-commerce и технического SEO — редкость.
                  SMM-менеджеров на рынке избыток, особенно на уровне Junior.
                </p>
              </div>
            </div>
          </section>

          {/* Targetolog deep dive */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Таргетолог: самая быстрорастущая профессия в маркетинге
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Таргетолог на фрилансе в 2026 году — это специалист, который работает с рекламой
              в ВКонтакте, Яндекс.Директ, TikTok и myTarget. После ухода Meta* из России
              рынок перестроился: VK Ads и Яндекс стали основными каналами.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ставка 1 000–2 800 ₽/час — медиана. Специалисты с подтверждёнными кейсами
              (ROAS 400%+, стоимость лида ниже рынка) берут 3 000–5 000 ₽/час. В Москве
              коэффициент +30–40% к средней ставке по России.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-amber-900 font-semibold mb-1">💡 Ключевой инсайт</p>
              <p className="text-amber-800 text-sm">
                Таргетологи, которые презентуют результаты в деньгах («снизил CPL с 800 до 320 ₽»,
                «ROAS 450% за квартал»), зарабатывают в 2–3 раза больше, чем те, кто говорит
                о «красивых креативах» и «хорошем охвате».
              </p>
            </div>
          </section>

          {/* Copywriter section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Копирайтер vs контент-автор: почему разница в ставках такая большая
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Рынок копирайтинга разделился на два сегмента:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">📝 Контент-фабрика</h3>
                <p className="text-sm text-gray-600 mb-3">
                  SEO-тексты, описания товаров, информационные статьи. Ставки 300–600 ₽/час —
                  сильная конкуренция со стороны ИИ-инструментов. Объём падает.
                </p>
                <p className="text-xs text-red-600 font-medium">⚠️ Высокий риск автоматизации</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">✍️ Стратегический копирайтинг</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Лендинги с высокой конверсией, email-последовательности, UX-тексты, сторителлинг
                  для брендов. Ставки 1 500–4 000 ₽/час — спрос растёт.
                </p>
                <p className="text-xs text-green-600 font-medium">✅ Низкий риск автоматизации</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Важный вывод: копирайтеры, освоившие ИИ-инструменты (ChatGPT, Claude, Яндекс.Нейро)
              как ускорители своей работы, не теряют в ставке — они выполняют больший объём
              за то же время. Те, кто конкурирует с ИИ на поле объёма — проигрывают.
            </p>
          </section>

          {/* Taxes section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Налоги и реальный доход маркетолога-фрилансера
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Большинство маркетологов-фрилансеров работают как самозанятые (НПД). Кажется,
              налог 4–6% — немного. Но учитывайте полную картину расходов:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Расход</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">% от дохода</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">
                      При доходе 150 000 ₽
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { item: "Налог НПД (самозанятый, физлица)", pct: "4%", example: "6 000 ₽" },
                    { item: "Простои между проектами (20–30%)", pct: "20–30%", example: "30 000–45 000 ₽" },
                    { item: "Отпуск (без оплаты клиентом)", pct: "8%", example: "12 000 ₽" },
                    {
                      item: "Инструменты (Ahrefs, SemRush, рекл.кабинеты)",
                      pct: "3–7%",
                      example: "4 500–10 500 ₽",
                    },
                    { item: "Курсы и обучение", pct: "3–5%", example: "4 500–7 500 ₽" },
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
              В сумме «невидимые» расходы съедают 35–50% от брутто-дохода. Ставка
              маркетолога-фрилансера должна быть на 60–80% выше, чем аналогичная позиция в штате,
              чтобы выйти на сопоставимый чистый доход.
            </p>
          </section>

          {/* How to grow rates */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как маркетологу-фрилансеру поднять ставку: 5 конкретных шагов
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "1. Привяжите ценообразование к результатам, а не к времени",
                  text: "«Настрою рекламу за 30 000 ₽» — это расход. «Привлеку 100 лидов по 300 ₽ или верну деньги» — это инвестиция. Клиенты охотнее платят больше за гарантированный результат.",
                },
                {
                  step: "2. Узкая специализация = более высокая ставка",
                  text: "«Маркетолог для всего» стоит меньше, чем «таргетолог для B2B SaaS» или «SEO-специалист для интернет-магазинов одежды». Узкая ниша даёт доступ к клиентам с серьёзными бюджетами.",
                },
                {
                  step: "3. Документируйте кейсы с цифрами",
                  text: "«Вёл SMM для ресторана» → «Вырастил подписчиков с 2 000 до 18 000 за 6 месяцев, увеличил бронирования на 35%». Цифры в кейсах окупаются в 3–5 раз при переговорах с новыми клиентами.",
                },
                {
                  step: "4. Освойте смежный инструмент с высоким ROI",
                  text: "SMM-менеджер + базовый таргет = +40–60% к ставке. Копирайтер + email-воронки = +50% к чеку. Пересечение двух компетенций — это редкость, за которую платят.",
                },
                {
                  step: "5. Рассчитайте «правильную» ставку математически",
                  text: "Прежде чем поднимать цены — убедитесь, что текущая ставка вообще окупает все расходы. Многие маркетологи недооценивают простои и инструменты. Используйте калькулятор ниже.",
                },
              ].map((item, idx) => (
                <li key={idx} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.step}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* City section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки маркетологов по городам России
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Маркетинг — полностью удалённая профессия, но город клиента влияет на ставки.
              Московские клиенты платят в среднем на 30–40% больше региональных.
              Маркетолог из Краснодара с московскими клиентами — получает московские деньги:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { city: "Москва", mult: "+30–40%", link: "/goroda/moskva" },
                { city: "Санкт-Петербург", mult: "+15–20%", link: "/goroda/sankt-peterburg" },
                { city: "Екатеринбург", mult: "+5%", link: "/goroda/ekaterinburg" },
                { city: "Регионы", mult: "−10–15%", link: "/goroda" },
              ].map((c, idx) => (
                <Link
                  key={idx}
                  href={c.link}
                  className="bg-white rounded-xl border border-gray-200 hover:border-blue-200 p-4 text-center transition-colors"
                >
                  <div className="text-sm font-semibold text-gray-900">{c.city}</div>
                  <div className="text-xs text-green-600 font-medium mt-1">{c.mult}</div>
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Подробнее — в статье{" "}
              <Link
                href="/stati/stavki-frilanserov-po-gorodam-2026"
                className="text-blue-600 hover:underline"
              >
                «Ставки фрилансеров по городам России 2026»
              </Link>
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "SMM или таргет — что выгоднее как специализация?",
                  a: "Таргет выгоднее с точки зрения ставки, но требует аналитического мышления и готовности работать с KPI. SMM даёт больше творческой свободы и проще для входа. Многие специалисты начинают с SMM и добавляют таргет через год — это резко поднимает ставку.",
                },
                {
                  q: "Нужен ли маркетологу-фрилансеру статус самозанятого?",
                  a: "При доходе до 2,4 млн ₽/год — да, самозанятый (НПД) оптимален: налог 4–6%, минимум отчётности. При доходе выше — рассмотрите ИП УСН 6%. Калькулятор FreelanceCalc помогает сравнить режимы.",
                },
                {
                  q: "Как найти клиентов маркетологу на фрилансе?",
                  a: "Telegram-каналы с вакансиями (Digital Jobs, Вакансии маркетологов, Работа в Digital), FL.ru, Kwork — для старта. Для роста ставки — личный бренд: кейсы в TenChat или VC.ru, рекомендации от клиентов, нетворкинг в профессиональных чатах.",
                },
                {
                  q: "Влияет ли ИИ на рынок маркетологов?",
                  a: "Да, но неравномерно. Контент-фабрики и шаблонный копирайтинг автоматизируются быстро. Стратегия, управление бюджетами, аналитика, работа с нестандартными аудиториями — требуют человека. Маркетологи, которые используют ИИ как инструмент (а не конкурируют с ним), работают в 2–3 раза быстрее и зарабатывают больше.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white mb-10">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте свою ставку как маркетолог</h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Введите желаемый доход, укажите налоговый режим и загрузку —
              калькулятор покажет правильную почасовую ставку с учётом простоев и расходов.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/stavka/targetolog?utm_source=stati&utm_medium=cta&utm_campaign=marketing-rates-2026"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Калькулятор таргетолога →
              </Link>
              <Link
                href="/stavka/smm-specialist?utm_source=stati&utm_medium=cta&utm_campaign=marketing-rates-2026"
                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors border border-blue-400"
              >
                Калькулятор SMM-менеджера →
              </Link>
            </div>
          </div>

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
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  href: "/stati/stavki-razrabotchikov-frilanserov-2026",
                  title: "Ставки разработчиков-фрилансеров 2026",
                  desc: "Медианные ставки по 10 IT-специализациям",
                },
                {
                  href: "/stati/stavki-dizajnerov-frilanserov-2026",
                  title: "Ставки дизайнеров-фрилансеров 2026",
                  desc: "UI/UX, графика, моушн, иллюстрация — таблица ставок",
                },
                {
                  href: "/stati/srednyaya-stavka-frilansera-2026",
                  title: "Средняя ставка фрилансера 2026",
                  desc: "Сводная таблица по 22 специальностям",
                },
                {
                  href: "/stati/kak-povysit-stavku-frilansera",
                  title: "Как повысить ставку фрилансера",
                  desc: "7 проверенных способов с примерами",
                },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm p-4 transition-all"
                >
                  <div className="font-semibold text-gray-900 text-sm mb-1">{link.title}</div>
                  <div className="text-xs text-gray-500">{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-500 mb-3">
              FreelanceCalc — бесплатный калькулятор ставки для фрилансеров в России
            </p>
            <p className="text-xs text-gray-400 mb-3">
              * Instagram и Facebook — продукты компании Meta, признанной экстремистской организацией
              на территории РФ.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/" className="text-blue-600 hover:underline">← Калькулятор</Link>
              <Link href="/stati" className="text-blue-600 hover:underline">Все статьи</Link>
              <Link href="/stavka" className="text-blue-600 hover:underline">Ставки по специальностям</Link>
              <Link href="/goroda" className="text-blue-600 hover:underline">Города</Link>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
