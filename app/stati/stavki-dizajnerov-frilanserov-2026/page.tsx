import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям",
  description:
    "Сколько берёт дизайнер-фрилансер в России в 2026 году? Медианные почасовые ставки для UI/UX, графических дизайнеров, иллюстраторов, моушн и видеомонтажёров. Данные + калькулятор.",
  keywords: [
    "ставки дизайнеров фрилансеров 2026",
    "сколько берёт дизайнер фрилансер",
    "почасовая ставка дизайнера",
    "ставка ui ux дизайнера фрилансер",
    "ставка графического дизайнера фрилансер",
    "сколько зарабатывает дизайнер фрилансер",
    "ставка иллюстратора фрилансер",
    "ставка видеомонтажёра фрилансер",
    "ставки дизайнеров россия",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-dizajnerov-frilanserov-2026" },
  openGraph: {
    title: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям",
    description:
      "Медианные почасовые ставки для UI/UX, графических дизайнеров, иллюстраторов, моушн и видеомонтажёров на фрилансе. Актуальные данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-dizajnerov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-dizajnerov-frilanserov-2026#article`,
      headline: "Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям",
      description:
        "Медианные почасовые ставки для 7 дизайн-специализаций на фрилансе в России. Реальные данные 2026 года.",
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
        "@id": `${BASE_URL}/stati/stavki-dizajnerov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "Фриланс-дизайн" },
        { "@type": "Thing", name: "Почасовая ставка дизайнера" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт дизайнер-фрилансер в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В зависимости от специализации: UI/UX-дизайнер — 1 200–3 500 ₽/час, графический дизайнер — 800–2 000 ₽/час, моушн-дизайнер — 1 500–4 000 ₽/час, иллюстратор — 1 000–3 000 ₽/час, видеомонтажёр — 900–2 500 ₽/час.",
          },
        },
        {
          "@type": "Question",
          name: "Почему UI/UX дизайнер берёт больше графического?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UI/UX требует понимания пользовательской психологии, прототипирования, A/B-тестирования и бизнес-метрик. Это смежная с продукт-менеджментом роль, которая напрямую влияет на конверсию и доход бизнеса — отсюда и более высокая ставка.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать свою ставку дизайнеру-фрилансеру?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте формулу: ставка = (желаемый доход + налоги + расходы) / (рабочие часы × коэффициент загрузки). Бесплатный калькулятор на FreelanceCalc делает этот расчёт автоматически с учётом вашей специализации.",
          },
        },
        {
          "@type": "Question",
          name: "Откуда данные по ставкам дизайнеров?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Данные агрегированы из открытых источников: Behance, Dribbble, FL.ru, Kwork, Telegram-каналов дизайнеров и отчётов по российскому рынку. Медиана отражает примерную середину реальных предложений.",
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
          name: "Ставки дизайнеров-фрилансеров 2026",
          item: `${BASE_URL}/stati/stavki-dizajnerov-frilanserov-2026`,
        },
      ],
    },
  ],
};

const designSpecialties = [
  {
    name: "UI/UX-дизайнер",
    slug: "ui-ux-dizajner",
    median: "1 200–3 500 ₽/час",
    monthlyIncome: "от 120 000 до 380 000 ₽",
    demand: "Очень высокий",
    notes: "Figma, Protopie. Влияет на конверсию — самая оплачиваемая дизайн-роль.",
  },
  {
    name: "Графический дизайнер",
    slug: "graficheskij-dizajner",
    median: "800–2 000 ₽/час",
    monthlyIncome: "от 80 000 до 220 000 ₽",
    demand: "Высокий",
    notes: "Брендинг, полиграфия, соцсети. Широкий рынок, высокая конкуренция.",
  },
  {
    name: "Моушн-дизайнер",
    slug: "ui-ux-dizajner",
    median: "1 500–4 000 ₽/час",
    monthlyIncome: "от 150 000 до 430 000 ₽",
    demand: "Высокий",
    notes: "After Effects, Cinema 4D. Видеореклама — растущий спрос от брендов.",
  },
  {
    name: "Иллюстратор",
    slug: "ui-ux-dizajner",
    median: "1 000–3 000 ₽/час",
    monthlyIncome: "от 100 000 до 320 000 ₽",
    demand: "Средний",
    notes: "Procreate, Illustrator. Книги, игры, детский контент, NFT.",
  },
  {
    name: "Видеомонтажёр",
    slug: "videomontazher",
    median: "900–2 500 ₽/час",
    monthlyIncome: "от 90 000 до 270 000 ₽",
    demand: "Высокий",
    notes: "Premiere Pro, DaVinci Resolve. Соцсети и YouTube — огромный рынок.",
  },
  {
    name: "3D-дизайнер / визуализатор",
    slug: "graficheskij-dizajner",
    median: "1 200–3 200 ₽/час",
    monthlyIncome: "от 120 000 до 340 000 ₽",
    demand: "Средний",
    notes: "3ds Max, Blender, Cinema 4D. Архвизуализация и реклама продуктов.",
  },
  {
    name: "Веб-дизайнер",
    slug: "graficheskij-dizajner",
    median: "900–2 200 ₽/час",
    monthlyIncome: "от 90 000 до 240 000 ₽",
    demand: "Высокий",
    notes: "Landing pages, корпоративные сайты. Часто совмещают с вёрсткой.",
  },
];

export default function DesignRatesArticle() {
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
              <li className="text-gray-700">Ставки дизайнеров-фрилансеров 2026</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ставки дизайнеров-фрилансеров в России 2026: таблица по специализациям
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>📅 Обновлено: март 2026</span>
            <span>⏱ 7 минут чтения</span>
            <span>🎨 UI/UX, Графика, Моушн, Иллюстрация, Видео</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Дизайнеры — вторая по численности категория фрилансеров в России после разработчиков.
            Но разброс ставок внутри профессии огромный: UI/UX-дизайнер и верстальщик шаблонов
            получают принципиально разные деньги. Ниже — актуальные медианные данные по 7
            дизайн-специализациям и объяснение, от чего зависит ставка.
          </p>

          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Узнайте свою ставку за 30 секунд</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход — калькулятор учтёт налоги, загрузку и отпуск и покажет,
              сколько нужно брать за час. Плюс сравнение с медианой по вашей специализации.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=article&utm_campaign=design-rates-2026"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Main table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Медианные ставки дизайнеров-фрилансеров в 2026 году
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
                  {designSpecialties.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
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
                          href={`/stavka/${spec.slug}?utm_source=stati&utm_medium=table&utm_campaign=design-rates`}
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
              * Медианы агрегированы по данным Behance, FL.ru, Kwork и Telegram-каналов дизайнеров.
              Данные на Q1 2026. Диапазон отражает уровни Junior–Senior.
            </p>
          </section>

          {/* Why rates differ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему ставки дизайнеров так сильно различаются
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Разброс в 4–5 раз между специализациями объясняется тремя факторами:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-900 mb-1">Влияние на бизнес</h3>
                <p className="text-sm text-gray-600">
                  UI/UX-дизайн напрямую влияет на конверсию и выручку. Клиент легко считает ROI —
                  поэтому готов платить больше. Иллюстрации сложнее конвертируются в деньги.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">🎓</div>
                <h3 className="font-semibold text-gray-900 mb-1">Порог входа</h3>
                <p className="text-sm text-gray-600">
                  Графический дизайн — массовая профессия с высокой конкуренцией.
                  Моушн и 3D требуют специфических навыков с более долгим кривым обучения.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-1">Срочность рынка</h3>
                <p className="text-sm text-gray-600">
                  Видеомонтажёров и моушн-дизайнеров не хватает — рост потребления
                  видеоконтента опережает предложение специалистов.
                </p>
              </div>
            </div>
          </section>

          {/* UI/UX deep dive */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              UI/UX-дизайнер: почему это самая высокооплачиваемая дизайн-роль
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              UI/UX-дизайнер — это уже не просто «рисовальщик интерфейсов». Современный UX-специалист
              на фрилансе работает с пользовательскими исследованиями, A/B-тестами, метриками конверсии
              и продуктовой стратегией.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ставка 1 200–3 500 ₽/час — это медиана. Senior UI/UX фрилансеры с портфолио
              из кейсов роста метрик берут 4 000–6 000 ₽/час и выше, особенно в Москве
              (коэффициент +40% к средней ставке по России).
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-amber-900 font-semibold mb-1">💡 Ключевой инсайт</p>
              <p className="text-amber-800 text-sm">
                Дизайнеры, которые говорят на языке метрик («увеличил конверсию на 23%», «снизил
                отток в онбординге»), зарабатывают в 2–3 раза больше, чем те, кто говорит только
                о красоте интерфейса.
              </p>
            </div>
          </section>

          {/* Taxes section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Налоги и реальный доход дизайнера-фрилансера
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Большинство дизайнеров-фрилансеров работают как самозанятые (НПД). Это означает
              налог 4% с физических лиц или 6% с юридических. Кажется немного — но учитывайте полную картину:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Расход</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">% от дохода</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Пример при доходе 200 000 ₽</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { item: "Налог НПД (самозанятый, физлица)", pct: "4%", example: "8 000 ₽" },
                    { item: "Простои между проектами (20–30%)", pct: "20–30%", example: "40 000–60 000 ₽" },
                    { item: "Отпуск (без оплаты клиентом)", pct: "8%", example: "16 000 ₽" },
                    { item: "ПО (Figma, Adobe CC, плагины)", pct: "2–5%", example: "4 000–10 000 ₽" },
                    { item: "Самообучение, конференции", pct: "3–5%", example: "6 000–10 000 ₽" },
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
              В сумме «невидимые» расходы съедают 35–45% от брутто-дохода. Именно поэтому ставка
              дизайнера-фрилансера должна быть на 60–80% выше, чем аналогичная позиция в штате.
            </p>
          </section>

          {/* How to grow rates */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как дизайнеру повысить ставку: 5 практических шагов
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "1. Специализируйтесь, а не распыляйтесь",
                  text: "«Дизайнер для всего» стоит меньше, чем «UX-дизайнер для SaaS-продуктов» или «иллюстратор для детских книг». Узкая ниша = выше экспертиза = выше ставка.",
                },
                {
                  step: "2. Показывайте результаты, а не процесс",
                  text: "Кейс с «+35% конверсии после редизайна онбординга» продаётся в 3 раза лучше, чем красивый мокап. Добавьте метрики к каждому проекту в портфолио.",
                },
                {
                  step: "3. Поднимайте цену для новых клиентов первым",
                  text: "Не нужно пугать текущих клиентов резким ростом. Начните брать больше с новых — и со временем подтяните старых к новому уровню.",
                },
                {
                  step: "4. Добавьте сопутствующие услуги",
                  text: "UX-аудит + дизайн + базовая аналитика = выше чек. Клиенту удобнее платить одному, чем координировать нескольких специалистов.",
                },
                {
                  step: "5. Рассчитайте «правильную» ставку математически",
                  text: "Прежде чем поднимать цены — убедитесь, что текущая ставка вообще окупает все расходы. Используйте калькулятор ниже.",
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
              Ставки дизайнеров по городам России
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Фриланс — удалённая работа, но география всё ещё влияет на ставки. Клиенты из Москвы
              платят в среднем на 35–40% больше, чем из регионов. Дизайнеры из регионов, работающие
              с московскими клиентами, получают «московские» деньги:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { city: "Москва", mult: "+35–40%", link: "/goroda/moskva" },
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
              <Link href="/stati/stavki-frilanserov-po-gorodam-2026" className="text-blue-600 hover:underline">
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
                  q: "Графический дизайнер или UI/UX — куда расти?",
                  a: "Если хочется выше доход — в UI/UX. Но это требует освоения навыков продуктового мышления, пользовательских исследований и работы с данными. Если любите визуальное творчество — моушн и иллюстрация дают больше свободы и растут в оплате за счёт дефицита специалистов.",
                },
                {
                  q: "Нужен ли дизайнеру статус самозанятого или ИП?",
                  a: "При доходе до 2,4 млн ₽/год достаточно статуса самозанятого (НПД): налог 4–6%, минимум бюрократии. При доходе выше — рассмотрите ИП УСН 6%. Калькулятор на FreelanceCalc поможет сравнить режимы.",
                },
                {
                  q: "Как дизайнеру найти клиентов с хорошими бюджетами?",
                  a: "Агентства платят меньше, но стабильно. Прямые клиенты — дороже, но требуют самостоятельного поиска. Telegram-каналы с вакансиями (Digital Jobs, Вакансии для дизайнеров), сарафанное радио и LinkedIn — основные каналы для дизайнеров уровня Middle+.",
                },
                {
                  q: "Влияет ли ИИ на ставки дизайнеров?",
                  a: "Низкоуровневые задачи автоматизируются быстро: подборка цветов, базовые иллюстрации, шаблоны. Но стратегический UX, сложная иллюстрация с авторским стилем и моушн-продакшн пока требуют человека. Специалисты, которые умеют использовать ИИ-инструменты (Midjourney, DALL-E, Runway), работают быстрее и зарабатывают больше.",
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
            <h2 className="text-2xl font-bold mb-3">Рассчитайте свою ставку как дизайнер</h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Введите желаемый доход, укажите налоговый режим и загрузку —
              калькулятор покажет правильную почасовую ставку.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/stavka/ui-ux-dizajner?utm_source=stati&utm_medium=cta&utm_campaign=design-rates-2026"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Калькулятор UI/UX-дизайнера →
              </Link>
              <Link
                href="/stavka/graficheskij-dizajner?utm_source=stati&utm_medium=cta&utm_campaign=design-rates-2026"
                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors border border-blue-400"
              >
                Калькулятор графического дизайнера →
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
                  href: "/stati/srednyaya-stavka-frilansera-2026",
                  title: "Средняя ставка фрилансера 2026",
                  desc: "Таблица по 22 специальностям",
                },
                {
                  href: "/stati/skrytye-rashody-frilansera",
                  title: "Скрытые расходы фрилансера",
                  desc: "Полный список того, что нужно заложить в ставку",
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
