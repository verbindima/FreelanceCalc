import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставка самозанятого фрилансера 2026: налоги НПД и расчёт",
  description:
    "Как рассчитать ставку самозанятого фрилансера в 2026 году с учётом НПД (4% и 6%). Налоги, лимиты, изменения 2026. Калькулятор ставки онлайн.",
  keywords: [
    "ставка самозанятого",
    "самозанятый фрилансер ставка",
    "налог самозанятого 2026",
    "НПД ставка 2026",
    "сколько брать самозанятому",
    "самозанятый фрилансер налоги",
    "расчёт ставки самозанятого",
    "НПД фрилансер",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavka-samozanyatogo-2026" },
  openGraph: {
    title: "Ставка самозанятого фрилансера 2026: налоги НПД и расчёт",
    description:
      "Как рассчитать ставку самозанятого с учётом НПД 4%/6%. Лимиты, изменения 2026, калькулятор онлайн.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavka-samozanyatogo-2026`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavka-samozanyatogo-2026#article`,
      headline: "Ставка самозанятого фрилансера 2026: как рассчитать с учётом НПД",
      description:
        "Как рассчитать ставку самозанятого фрилансера в 2026 году с учётом налога на профессиональный доход (НПД) 4% и 6%.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/stavka-samozanyatogo-2026`,
      datePublished: "2026-03-20",
      dateModified: "2026-03-20",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Статьи",
            item: `${BASE_URL}/stati`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Ставка самозанятого 2026",
            item: `${BASE_URL}/stati/stavka-samozanyatogo-2026`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/stavka-samozanyatogo-2026#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько платит налогов самозанятый фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятый платит НПД: 4% с доходов от физических лиц и 6% с доходов от юридических лиц и ИП. Ставки сохранены до 2028 года. Для новых плательщиков действует налоговый вычет 10 000 ₽ — фактически 3% и 4% на старте.",
          },
        },
        {
          "@type": "Question",
          name: "Какой лимит дохода у самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Лимит дохода для самозанятых (НПД) — 2,4 млн рублей в год (200 000 ₽/месяц). При превышении статус самозанятого автоматически прекращается до конца года.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать ставку самозанятого фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нужно учесть желаемый чистый доход, налог НПД (4-6%), реальную загрузку (обычно 60-75%), отпускные дни и часы работы в день. Калькулятор FreelanceCalc делает это автоматически.",
          },
        },
        {
          "@type": "Question",
          name: "Что изменилось для самозанятых в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "С 2026 года введён добровольный механизм выплаты больничных для самозанятых: можно платить фиксированный взнос в СФР (35 000 или 50 000 ₽/год) и получать оплачиваемые больничные. Налоговые ставки НПД не изменились.",
          },
        },
      ],
    },
  ],
};

export default function SamozanyatoySstavkaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3 flex-wrap">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 text-sm">Статьи</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Ставка самозанятого 2026</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ставка самозанятого фрилансера 2026: как рассчитать с учётом НПД
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Самозанятость — самый популярный налоговый режим у фрилансеров в России.
              Разбираем, как НПД влияет на вашу ставку, какие лимиты действуют в 2026 году
              и почему нельзя просто «накинуть 4%» к желаемому доходу.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Обновлено: март 2026</span>
              <span>·</span>
              <span>Режим НПД</span>
              <span>·</span>
              <span>Россия</span>
            </div>
          </div>

          {/* Key facts 2026 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "НПД с физлиц", value: "4%", sub: "сохранён до 2028" },
              { label: "НПД с юрлиц и ИП", value: "6%", sub: "сохранён до 2028" },
              { label: "Лимит дохода", value: "2,4 млн ₽", sub: "в год (~200 тыс/мес)" },
              { label: "Вычет для новых", value: "10 000 ₽", sub: "фактически 3%/4%" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                <div className="text-xs font-medium text-gray-700 mt-1">{item.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* What is NPD */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что такое НПД и кому подходит
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                НПД (налог на профессиональный доход) — специальный режим для фрилансеров
                и самозанятых. Подходит, если вы работаете как физическое лицо без наёмных
                сотрудников и ваш годовой доход не превышает <strong>2,4 млн рублей</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Главное преимущество: минимальная бюрократия. Регистрация через приложение
                «Мой налог» за 10 минут, чеки выставляются через то же приложение,
                налог начисляется автоматически раз в месяц.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-semibold text-green-800 mb-1">✓ Кому подходит НПД</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>Разработчики, дизайнеры, маркетологи на фрилансе</li>
                  <li>Консультанты и эксперты с проектной работой</li>
                  <li>Те, кто зарабатывает до 200 000 ₽/месяц</li>
                  <li>Начинающие фрилансеры, которые хотят работать легально</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tax rates comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Налоговые ставки НПД в 2026 году
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Клиент</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600">Ставка НПД</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">
                      Налог с 10 000 ₽
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">
                      Для новых (с вычетом)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800">Физическое лицо</td>
                    <td className="px-4 py-3 text-right font-bold text-blue-600">4%</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden md:table-cell">400 ₽</td>
                    <td className="px-4 py-3 text-right text-green-600 hidden md:table-cell">3% (300 ₽)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">ИП или юридическое лицо</td>
                    <td className="px-4 py-3 text-right font-bold text-blue-600">6%</td>
                    <td className="px-4 py-3 text-right text-gray-600 hidden md:table-cell">600 ₽</td>
                    <td className="px-4 py-3 text-right text-green-600 hidden md:table-cell">4% (400 ₽)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">
              * Налоговый вычет 10 000 ₽ применяется автоматически при регистрации.
              Он снижает ставку с 4% до 3% и с 6% до 4%, пока не будет исчерпан.
            </p>
          </section>

          {/* Why "just add 4%" doesn't work */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему нельзя просто «накинуть 4% к доходу»
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
              <div className="font-semibold text-amber-800 mb-2">⚠️ Типичная ошибка</div>
              <p className="text-sm text-amber-700">
                Многие фрилансеры считают так: «хочу 100 000 ₽ в месяц чистыми,
                значит буду брать 104 000 ₽». Это неверно.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              Ставка фрилансера — это не «зарплата + налог». Она должна покрывать
              несколько факторов одновременно:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: "📅",
                  title: "Отпуск и больничные",
                  text: "У фрилансера нет оплачиваемого отпуска. 14–28 дней в году вы не зарабатываете — это нужно заложить в ставку заранее.",
                },
                {
                  icon: "⏱️",
                  title: "Загрузка 60–75%",
                  text: "Реальная оплачиваемая работа занимает меньше рабочего времени. Остальное — поиск клиентов, переговоры, обучение, административные задачи.",
                },
                {
                  icon: "💸",
                  title: "Налог НПД",
                  text: "4% или 6% сверху к желаемому чистому доходу. Но считать нужно от выручки, а не прибавлять поверх. Разница незначительная, но важная при точном расчёте.",
                },
                {
                  icon: "🔧",
                  title: "Оборудование и инструменты",
                  text: "Подписки на сервисы, обновление техники, обучение — всё это расходы, которых нет у наёмного сотрудника.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-4 flex gap-3">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Formula */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Формула расчёта ставки для самозанятого
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="bg-blue-50 rounded-lg p-4 mb-5 font-mono text-sm text-blue-800 leading-relaxed">
                <div className="font-bold mb-2">Шаг 1. Месячный доход с учётом загрузки:</div>
                <div className="pl-4">Нужный доход (чистыми) ÷ (1 − НПД%) ÷ коэффициент загрузки</div>
                <div className="font-bold mt-3 mb-2">Шаг 2. Часовая ставка:</div>
                <div className="pl-4">Месячный доход ÷ рабочих часов в месяце</div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 font-semibold text-gray-700 text-sm border-b border-gray-200">
                  Пример: Frontend-разработчик
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Желаемый чистый доход</span>
                    <span className="font-semibold">150 000 ₽/мес</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Налог НПД (6%, клиенты — компании)</span>
                    <span className="font-semibold text-red-600">÷ 0,94</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Загрузка 70%</span>
                    <span className="font-semibold text-red-600">÷ 0,70</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Рабочих часов в месяц (7 ч × 22 дня)</span>
                    <span className="font-semibold text-red-600">÷ 154 ч</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-blue-700 text-base">
                    <span>Итоговая ставка</span>
                    <span>≈ 1 475 ₽/час</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Без учёта загрузки и налогов ставка была бы всего 974 ₽/час — на 34% меньше.
              </p>
            </div>
          </section>

          {/* 2026 changes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Изменения для самозанятых в 2026 году
            </h2>
            <div className="space-y-3">
              {[
                {
                  badge: "Ставки НПД",
                  badgeColor: "bg-green-100 text-green-700",
                  title: "4% и 6% — без изменений до 2028 года",
                  text: "Правительство подтвердило сохранение всех условий режима НПД минимум до конца 2028 года. Можно планировать бизнес без страха внезапного повышения налогов.",
                },
                {
                  badge: "Лимит дохода",
                  badgeColor: "bg-blue-100 text-blue-700",
                  title: "2,4 млн рублей в год — без изменений",
                  text: "Лимит соответствует ~200 000 ₽/месяц. При превышении нужно переходить на ИП (например, УСН). FreelanceCalc умеет рассчитывать ставку для обоих режимов.",
                },
                {
                  badge: "Новое в 2026",
                  badgeColor: "bg-amber-100 text-amber-700",
                  title: "Добровольные больничные для самозанятых",
                  text: "С января 2026 по декабрь 2028 действует эксперимент: самозанятые могут добровольно платить в СФР (35 000 или 50 000 ₽/год) и получать оплачиваемые больничные. Это снижает риски при болезни.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* НПД vs IP comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              НПД или ИП: что выбрать фрилансеру?
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 w-1/3">Параметр</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-600">Самозанятый (НПД)</th>
                    <th className="text-center px-4 py-3 font-semibold text-purple-600">ИП на УСН 6%</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: "Налог", npd: "4% / 6%", ip: "6% + страховые взносы" },
                    { param: "Страховые взносы", npd: "Нет (добровольно)", ip: "~50 000 ₽/год (обязательно)" },
                    { param: "Лимит дохода", npd: "2,4 млн ₽/год", ip: "265,8 млн ₽/год" },
                    { param: "Наёмные сотрудники", npd: "Нельзя", ip: "До 130 человек" },
                    { param: "Отчётность", npd: "Приложение «Мой налог»", ip: "Декларация раз в год" },
                    { param: "Регистрация", npd: "10 минут онлайн", ip: "3–5 дней + госпошлина" },
                  ].map((row, idx) => (
                    <tr
                      key={row.param}
                      className={`border-b border-gray-100 ${idx % 2 === 0 ? "" : "bg-gray-50/50"}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-700">{row.param}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.npd}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Вывод: НПД выгоднее при доходе до ~130–150 тыс ₽/месяц. При большем доходе
              ИП на УСН 6% может быть дешевле суммарно — особенно если работаете с юрлицами
              и возникает вопрос о страховых взносах.
            </p>
          </section>

          {/* Calculator CTA */}
          <section className="mb-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Рассчитайте свою ставку самозанятого онлайн
            </h2>
            <p className="text-blue-100 mb-6 text-sm md:text-base">
              Калькулятор FreelanceCalc считает ставку с учётом вашего налогового режима
              (НПД 4%, НПД 6%, ИП УСН 6%, ИП УСН 15%), загрузки, отпуска и рабочих часов.
              Результат — минимальная ставка, ниже которой работать в убыток.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Открыть калькулятор →
              </Link>
              <Link
                href="/stavka"
                className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors"
              >
                По специальностям →
              </Link>
            </div>
          </section>

          {/* Benchmark PDF upsell */}
          <section className="mb-10 border border-blue-200 rounded-2xl p-6 bg-blue-50">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  Медианные ставки с разбивкой по городам и опыту
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  PDF-бенчмарк содержит ставки по Москве, СПб и регионам для уровней
                  джун / мид / сеньор. Удобно, если нужно обосновать ставку клиенту
                  или сравнить себя с рынком. Обновляется ежеквартально. Цена — 249 ₽.
                </p>
                <Link
                  href="/benchmark"
                  className="inline-block text-sm font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2"
                >
                  Посмотреть бенчмарк →
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько платит налогов самозанятый фрилансер в 2026 году?",
                  a: "Самозанятый платит НПД: 4% с доходов от физических лиц и 6% с доходов от юридических лиц и ИП. Ставки сохранены до 2028 года. Для новых плательщиков действует налоговый вычет 10 000 ₽ — фактически 3% и 4% на старте.",
                },
                {
                  q: "Что делать, если превысил лимит 2,4 млн ₽?",
                  a: "При превышении лимита статус самозанятого прекращается автоматически. Нужно зарегистрироваться как ИП на УСН. Делается онлайн через Госуслуги или банк. Калькулятор FreelanceCalc умеет считать ставку для ИП УСН 6% и 15%.",
                },
                {
                  q: "Нужно ли самозанятому сдавать отчётность?",
                  a: "Нет. Все операции ведутся через приложение «Мой налог» — выставляете чек, налог начисляется автоматически до 12-го числа следующего месяца. Никаких деклараций и бухгалтера.",
                },
                {
                  q: "Что изменилось для самозанятых в 2026 году?",
                  a: "С 2026 года введён добровольный механизм выплаты больничных: можно платить фиксированный взнос в СФР (35 000 или 50 000 ₽/год) и получать оплачиваемые больничные. Налоговые ставки НПД не изменились.",
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
              Средние ставки по специальностям →
            </Link>
            <Link href="/rukovodstvo" className="text-sm text-blue-600 hover:underline">
              Полное руководство по расчёту ставки →
            </Link>
            <Link href="/stavka" className="text-sm text-blue-600 hover:underline">
              Калькуляторы по специальностям →
            </Link>
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              Калькулятор ставки →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
