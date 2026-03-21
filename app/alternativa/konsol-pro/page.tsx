import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива Консоль.Про для фрилансеров — FreelanceCalc",
  description:
    "Консоль.Про считает налог НПД на уже полученный доход. FreelanceCalc считает другое: какую ставку назначить клиенту, чтобы после налогов и простоев получить нужную сумму на руки. Сравниваем инструменты.",
  keywords: [
    "альтернатива konsol.pro",
    "консол про калькулятор самозанятый альтернатива",
    "калькулятор ставки самозанятого фрилансера",
    "калькулятор НПД фрилансер",
    "konsol.pro freelance",
    "консоль про альтернатива",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/konsol-pro" },
  openGraph: {
    title: "FreelanceCalc vs Konsol.pro — разные задачи, разные инструменты",
    description:
      "Konsol.pro считает налог. FreelanceCalc считает ставку. Узнайте разницу — и что нужно именно вам.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/konsol-pro`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Альтернатива Консоль.Про: FreelanceCalc vs калькулятор НПД для самозанятых",
      description:
        "Konsol.pro помогает рассчитать налог НПД на полученный доход. FreelanceCalc помогает рассчитать ставку, которую нужно назначить клиенту, чтобы получить нужный чистый доход после налогов. Разные инструменты для разных задач.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/alternativa/konsol-pro`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Альтернативы", item: `${BASE_URL}/alternativa` },
        { "@type": "ListItem", position: 3, name: "Konsol.pro", item: `${BASE_URL}/alternativa/konsol-pro` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Чем FreelanceCalc отличается от Konsol.pro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Konsol.pro рассчитывает налог НПД на уже полученный доход (сколько заплатить государству с уже полученных денег). FreelanceCalc решает обратную задачу: сколько нужно выставить клиенту, чтобы после уплаты НПД и учёта простоев получить желаемую сумму на руки. Это принципиально разные инструменты.",
          },
        },
        {
          "@type": "Question",
          name: "Нужен ли мне Konsol.pro если я использую FreelanceCalc?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Это взаимодополняющие инструменты. FreelanceCalc поможет рассчитать правильную ставку заранее. Konsol.pro или «Мой налог» пригодятся для расчёта фактического налога по уже полученным платежам. Если вы только начинаете как самозанятый — начните с FreelanceCalc, чтобы не занизить ставку.",
          },
        },
        {
          "@type": "Question",
          name: "Почему важно считать ставку, а не только налог?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Большинство фрилансеров занижают ставку на 20–40%, не учитывая три ключевых фактора: налог НПД (4% или 6%), реальную загрузку (оплачивается только 60–75% рабочего времени) и отпуск/простои. Если не закладывать всё это в ставку — вы работаете себе в убыток. FreelanceCalc автоматически учитывает все три фактора.",
          },
        },
      ],
    },
  ],
};

export default function KonsolProAlternativePage() {
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

        <article className="max-w-4xl mx-auto px-4 py-10">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1 items-center">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/alternativa" className="hover:text-blue-600">Альтернативы</Link></li>
              <li>/</li>
              <li className="text-gray-700">Konsol.pro</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Альтернатива Konsol.pro для фрилансеров: FreelanceCalc vs калькулятор НПД
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Konsol.pro — полезный сервис для самозанятых, но его калькулятор решает одну конкретную задачу:
            рассчитать налог на <strong>уже полученный</strong> доход. FreelanceCalc решает другую, более
            важную задачу: какую ставку назначить <strong>заранее</strong>, чтобы после всех налогов,
            простоев и отпуска получить нужную сумму на руки.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте вашу ставку бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Желаемый доход → ставка с учётом НПД, загрузки и отпуска. По специальности и городу.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=konsol-pro"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку →
            </Link>
          </div>

          {/* Key difference */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Главное отличие: задачи «до» и «после»
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-3">🧾</div>
                <h3 className="font-bold text-gray-900 mb-2">Konsol.pro: задача «после»</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Вы уже получили оплату от клиента. Нужно понять, сколько заплатить в ФНС.
                  Konsol.pro показывает: при доходе 100 000 ₽ от физлица налог составит 4 000 ₽.
                </p>
                <p className="text-xs text-gray-400">
                  Полезно: да. Но это постфактум — деньги уже получены.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-bold text-blue-900 mb-2">FreelanceCalc: задача «до»</h3>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Вы хотите зарабатывать 150 000 ₽ чистыми в месяц. Сколько выставлять клиентам?
                  FreelanceCalc учитывает НПД, коэффициент загрузки (70%), отпуск и показывает: нужна
                  ставка 2 100 ₽/час.
                </p>
                <p className="text-xs text-blue-600">
                  Это стратегическая задача — ставку нужно знать заранее.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Сравнение: FreelanceCalc vs Konsol.pro
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Функция</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Konsol.pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Расчёт налога НПД", "✅", "✅"],
                    ["Расчёт нужной ставки по желаемому доходу", "✅", "❌"],
                    ["Учёт коэффициента загрузки (billable ratio)", "✅", "❌"],
                    ["Учёт отпуска и простоев", "✅", "❌"],
                    ["Учёт режима ИП УСН 6%", "✅", "частично"],
                    ["Рыночные медианы по специальности", "✅", "❌"],
                    ["Ставки по 10+ городам России", "✅", "❌"],
                    ["Сравнение с рынком (выше/ниже медианы)", "✅", "❌"],
                    ["PDF-бенчмарк рыночных ставок", "✅ 249 ₽", "❌"],
                    ["Регистрация самозанятого", "❌", "✅"],
                    ["Налоговая отчётность", "❌", "✅"],
                  ].map(([feature, fc, kp]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{kp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why rate matters */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему ставка важнее расчёта налога
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Большинство фрилансеров-самозанятых недооценивают свою ставку на 20–40%. Причина — они не
              учитывают три ключевых фактора, которые «съедают» доход:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: "💸",
                  title: "Налог НПД",
                  text: "4% с физлиц, 6% с компаний. При доходе 150 000 ₽ от компании налог — 9 000 ₽ в месяц. Это нужно закладывать в ставку заранее.",
                },
                {
                  icon: "⏳",
                  title: "Загрузка 60–75%",
                  text: "Только 60–75% рабочего времени оплачивается. Остальное — поиск заказов, переговоры, обучение. Всё это ваш реальный рабочий «простой».",
                },
                {
                  icon: "🏖",
                  title: "Отпуск и больничные",
                  text: "Фрилансер не получает оплачиваемый отпуск. 28 дней отпуска в год = 28 дней без дохода. Это нужно компенсировать ставкой.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
              <p className="text-indigo-900 font-semibold mb-1">Пример расчёта</p>
              <p className="text-indigo-800 text-sm leading-relaxed">
                Хотите 150 000 ₽/мес «на руки». Работаете с компаниями (НПД 6%). Загрузка 70%, отпуск
                28 дней. FreelanceCalc посчитает: нужная ставка — <strong>~2 100 ₽/час</strong>. Без учёта
                этих факторов многие фрилансеры берут 1 500 ₽/час и работают себе в убыток.
              </p>
            </div>
          </section>

          {/* Market data section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Рыночный контекст: чего нет в Konsol.pro
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              FreelanceCalc показывает не только вашу минимальную ставку, но и где вы находитесь
              относительно рынка. Medианные ставки по специальностям Q1 2026:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Специальность</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600">Медиана/час</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Медиана/мес</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["ML/AI-инженер", "3 000–7 000 ₽", "360K–840K ₽"],
                    ["Backend-разработчик", "2 000–4 000 ₽", "240K–480K ₽"],
                    ["Frontend-разработчик", "1 500–3 000 ₽", "180K–360K ₽"],
                    ["UI/UX-дизайнер", "1 000–2 500 ₽", "120K–300K ₽"],
                    ["SEO-специалист", "900–2 000 ₽", "108K–240K ₽"],
                    ["Копирайтер", "500–1 500 ₽", "60K–180K ₽"],
                  ].map(([spec, hourly, monthly]) => (
                    <tr key={spec} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{spec}</td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-900">{hourly}</td>
                      <td className="px-4 py-3 text-right text-gray-500 hidden md:table-cell">{monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Данные Q1 2026. Источник:{" "}
              <Link href="/stati/srednyaya-stavka-frilansera-2026" className="underline hover:text-gray-600">
                FreelanceCalc, медианные ставки по 22 специальностям
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Чем FreelanceCalc отличается от Konsol.pro?",
                  a: "Konsol.pro рассчитывает налог НПД на уже полученный доход. FreelanceCalc решает обратную задачу: сколько нужно выставить клиенту, чтобы после уплаты НПД, учёта простоев и отпуска получить желаемую сумму на руки. Разные инструменты для разных задач.",
                },
                {
                  q: "Нужен ли мне Konsol.pro если я использую FreelanceCalc?",
                  a: "Они дополняют друг друга. FreelanceCalc поможет заранее рассчитать правильную ставку. Konsol.pro или «Мой налог» — для расчёта фактического налога по уже полученным платежам. Начните с FreelanceCalc, чтобы не занизить ставку.",
                },
                {
                  q: "Почему важно считать ставку заранее, а не налог постфактум?",
                  a: "Если назначить неправильную ставку, никакой налоговый калькулятор не поможет — деньги уже потеряны. Правильная ставка — это фундамент: она должна покрывать налоги (4–6% НПД), простои (30–40% времени без оплаты) и отпуск. FreelanceCalc считает это за 30 секунд.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-2">{item.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте правильную ставку — бесплатно</h2>
            <p className="text-blue-100 mb-6">
              Налог НПД уже заложен в расчёт. Плюс загрузка, отпуск и рыночный контекст по вашей специальности.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=konsol-pro-bottom"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </div>

          {/* Related links */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Связанные материалы</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/alternativa" className="text-sm text-blue-600 hover:underline">
                ← Все альтернативы
              </Link>
              <Link href="/alternativa/moj-nalog-kalkulator" className="text-sm text-blue-600 hover:underline">
                FreelanceCalc vs «Мой налог» →
              </Link>
              <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="text-sm text-blue-600 hover:underline">
                Самозанятый vs ИП: что выгоднее →
              </Link>
              <Link href="/instrumenty/kalkulator-naloga-samozanyatogo" className="text-sm text-blue-600 hover:underline">
                Калькулятор налога самозанятого →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
