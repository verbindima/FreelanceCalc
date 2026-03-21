import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива Яндекс Pay калькулятору НПД — FreelanceCalc для фрилансеров",
  description:
    "Яндекс Pay считает налог НПД на полученный доход. FreelanceCalc считает ставку: сколько выставить клиенту, чтобы после НПД и простоев получить нужную сумму. Рыночные медианы по 22 специальностям и 10 городам России.",
  keywords: [
    "яндекс pay калькулятор НПД альтернатива",
    "альтернатива яндекс калькулятор самозанятый",
    "yandex pay калькулятор фрилансер",
    "калькулятор ставки вместо яндекс НПД",
    "калькулятор НПД фрилансер",
    "яндекс касса калькулятор самозанятый",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/yandex-pay-kalkulator" },
  openGraph: {
    title: "FreelanceCalc vs Яндекс Pay — калькулятор ставки vs калькулятор налога",
    description:
      "Яндекс считает налог НПД постфактум. FreelanceCalc считает нужную ставку заранее — по специальности, городу и желаемому доходу.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/yandex-pay-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Альтернатива Яндекс Pay калькулятору НПД: FreelanceCalc для фрилансеров",
      description:
        "Яндекс Pay предлагает калькулятор НПД для расчёта налога на полученный доход. FreelanceCalc помогает рассчитать правильную ставку заранее — с учётом НПД, загрузки, отпуска и рыночных медиан по специальностям и городам.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/alternativa/yandex-pay-kalkulator`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Альтернативы", item: `${BASE_URL}/alternativa` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Яндекс Pay",
          item: `${BASE_URL}/alternativa/yandex-pay-kalkulator`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Чем FreelanceCalc отличается от калькулятора НПД Яндекс Pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Калькулятор НПД Яндекс Pay рассчитывает налог на уже полученный доход (4% от физлиц или 6% от компаний). FreelanceCalc решает обратную задачу: вы указываете желаемый чистый доход, и калькулятор показывает, какую ставку нужно выставить клиенту, чтобы после НПД, загрузки 70% и 28 дней отпуска получить нужную сумму.",
          },
        },
        {
          "@type": "Question",
          name: "Нужен ли калькулятор ставки если есть «Мой налог» или Яндекс Pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, это разные инструменты. «Мой налог» и Яндекс Pay помогают платить налог на уже полученные деньги. FreelanceCalc помогает ЗАРАНЕЕ рассчитать правильную ставку, которую вы должны называть клиентам, чтобы после всех налогов и простоев зарабатывать нужную сумму.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать ставку самозанятого фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Формула: (желаемый чистый доход ÷ (1 − ставка НПД)) × 12 ÷ (рабочие дни в год × часов в день × коэффициент загрузки). Для самозанятого с НПД 6% и загрузкой 70%, желающего 150 000 ₽/мес — нужна ставка около 2 100 ₽/час. FreelanceCalc делает этот расчёт автоматически за 30 секунд.",
          },
        },
      ],
    },
  ],
};

export default function YandexPayKalkulatorPage() {
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
              <li className="text-gray-700">Яндекс Pay</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Альтернатива Яндекс Pay для фрилансеров: калькулятор ставки vs калькулятор налога НПД
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Яндекс Pay предлагает полезный калькулятор — он считает, сколько налога НПД нужно заплатить
            с полученного дохода. FreelanceCalc решает <strong>более важную задачу</strong>: сколько нужно
            выставить клиенту, чтобы после НПД, загрузки и отпуска получить нужную сумму на руки. Это
            принципиально разные инструменты.
          </p>

          {/* Main CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте вашу ставку за 30 секунд</p>
            <p className="text-blue-700 text-sm mb-4">
              Налог НПД уже учтён. Плюс коэффициент загрузки, отпуск и рыночные данные по вашей специальности.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=yandex-pay"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Открыть FreelanceCalc →
            </Link>
          </div>

          {/* Difference block */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Яндекс Pay считает налог. FreelanceCalc — ставку.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="font-bold text-gray-700 mb-1 text-sm uppercase tracking-wide">
                  Калькулятор НПД Яндекс Pay
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-3">Налог постфактум</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✅ Введите доход → узнайте налог (4% или 6%)</li>
                  <li>✅ Показывает налоговый вычет 10 000 ₽</li>
                  <li>✅ Актуально для самозанятых</li>
                  <li className="text-red-500">❌ Не поможет, если ставка уже занижена</li>
                  <li className="text-red-500">❌ Нет учёта загрузки и отпуска</li>
                  <li className="text-red-500">❌ Нет рыночных данных по специальностям</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="font-bold text-blue-600 mb-1 text-sm uppercase tracking-wide">
                  FreelanceCalc
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-3">Ставка заранее</div>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>✅ Введите желаемый доход → узнайте ставку</li>
                  <li>✅ Налог НПД (4%/6%) уже заложен в расчёт</li>
                  <li>✅ Учёт загрузки (60–75%) и отпуска</li>
                  <li>✅ Рыночные медианы по 22+ специальностям</li>
                  <li>✅ Данные по 10 городам России</li>
                  <li>✅ Учёт ИП УСН 6% — не только самозанятый</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Полное сравнение функций</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Функция</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Яндекс Pay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Расчёт налога НПД (4%/6%)", "✅", "✅"],
                    ["Учёт налогового вычета 10 000 ₽", "—", "✅"],
                    ["Расчёт ставки по желаемому доходу", "✅", "❌"],
                    ["Учёт коэффициента загрузки", "✅", "❌"],
                    ["Учёт отпуска и больничных", "✅", "❌"],
                    ["Учёт ИП УСН 6% и 15%", "✅", "❌"],
                    ["Рыночные медианы по специальности", "✅", "❌"],
                    ["Ставки по городам России", "✅", "❌"],
                    ["Сравнение с рыночным уровнем", "✅", "❌"],
                    ["PDF-бенчмарк ставок Q1 2026", "✅ 249 ₽", "❌"],
                    ["Экосистема Яндекс / Яндекс Касса", "❌", "✅"],
                  ].map(([feature, fc, yp]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{yp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Example calculation */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Конкретный пример: почему расчёт ставки важнее расчёта налога
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Представьте: вы фрилансер-разработчик, хотите зарабатывать <strong>200 000 ₽/мес</strong>{" "}
                на руки. Работаете с компаниями — значит НПД 6%. Ваша загрузка 70%, отпуск 28 дней.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-600 mb-3 text-sm">🧾 Что даст калькулятор налога Яндекс Pay:</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Введёте доход</span>
                      <span className="font-medium">200 000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Налог 6%</span>
                      <span className="font-medium text-red-600">12 000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>На руки</span>
                      <span className="font-medium">188 000 ₽</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Полезно, но только если уже знаете правильную ставку.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-3 text-sm">🎯 Что даст FreelanceCalc:</p>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex justify-between">
                      <span>Желаемый доход</span>
                      <span className="font-medium">200 000 ₽/мес</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Нужная ставка</span>
                      <span className="font-medium text-blue-700">2 800 ₽/час</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Позиция на рынке</span>
                      <span className="font-medium text-green-700">✅ Рыночный уровень</span>
                    </div>
                  </div>
                  <p className="text-xs text-blue-500 mt-3">
                    Знаете точную ставку до начала переговоров с клиентом.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Чем FreelanceCalc отличается от калькулятора НПД Яндекс Pay?",
                  a: "Яндекс Pay считает налог на уже полученный доход (4% или 6%). FreelanceCalc решает обратную задачу: вы указываете желаемый чистый доход, и калькулятор показывает, какую ставку нужно выставить клиенту с учётом НПД, загрузки 70% и отпуска 28 дней.",
                },
                {
                  q: "Нужен ли мне отдельный калькулятор ставки если есть «Мой налог» или Яндекс Pay?",
                  a: "Да — это разные задачи. «Мой налог» и Яндекс Pay помогают платить налог на уже полученные деньги. FreelanceCalc помогает ЗАРАНЕЕ рассчитать правильную ставку, которую называть клиентам, чтобы зарабатывать нужную сумму после всех налогов и простоев.",
                },
                {
                  q: "Как рассчитать ставку самозанятого с учётом налога?",
                  a: "FreelanceCalc делает это автоматически. Введите желаемый чистый доход, выберите налоговый режим (НПД 4%, 6% или ИП УСН 6%), укажите загрузку и отпуск. Калькулятор покажет нужную часовую и дневную ставку — за 30 секунд без формул.",
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
            <h2 className="text-2xl font-bold mb-3">Узнайте правильную ставку — бесплатно</h2>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Яндекс Pay посчитает налог, когда деньги уже получены. FreelanceCalc поможет назначить
              правильную ставку до начала переговоров.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=yandex-pay-bottom"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Related links */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Связанные страницы</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/alternativa" className="text-sm text-blue-600 hover:underline">
                ← Все альтернативы
              </Link>
              <Link href="/alternativa/konsol-pro" className="text-sm text-blue-600 hover:underline">
                FreelanceCalc vs Konsol.pro →
              </Link>
              <Link href="/alternativa/moj-nalog-kalkulator" className="text-sm text-blue-600 hover:underline">
                FreelanceCalc vs «Мой налог» →
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
