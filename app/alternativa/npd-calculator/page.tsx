import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива NPD-Calculator: калькулятор ставки фрилансера — FreelanceCalc",
  description:
    "Сравниваем FreelanceCalc и npd-calculator.ru. NPD-Calculator считает налог самозанятого. FreelanceCalc делает больше: рассчитывает полную ставку с учётом загрузки, отпуска и рыночных медиан по специальности и городу.",
  keywords: [
    "npd calculator альтернатива",
    "npd-calculator.ru альтернатива",
    "калькулятор самозанятого ставка в час",
    "альтернатива калькулятору НПД",
    "калькулятор фрилансера самозанятый",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/npd-calculator" },
  openGraph: {
    title: "FreelanceCalc vs NPD-Calculator — калькулятор самозанятого фрилансера",
    description:
      "NPD-Calculator считает налог. FreelanceCalc считает полную ставку: сколько выставлять клиенту, чтобы остаться в плюсе.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/npd-calculator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Альтернатива npd-calculator.ru: FreelanceCalc для самозанятых фрилансеров",
  description:
    "Чем FreelanceCalc отличается от npd-calculator.ru: расчёт полной ставки vs расчёт только налога НПД.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/alternativa/npd-calculator`,
  },
  inLanguage: "ru",
};

export default function NpdCalculatorAlternativePage() {
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
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/alternativa" className="hover:text-blue-600">Альтернативы</Link></li>
              <li>/</li>
              <li className="text-gray-700">NPD-Calculator</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Альтернатива NPD-Calculator: полный расчёт ставки самозанятого фрилансера
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            npd-calculator.ru решает одну задачу — посчитать налог НПД. Это полезно, но фрилансеру
            нужно знать не только налог, но и полную ставку: сколько выставлять клиенту с учётом
            загрузки, отпуска, простоев и рыночных реалий. Именно это делает FreelanceCalc.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте полную ставку — бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              Налоги НПД, загрузка, отпуск, рыночные медианы — всё в одном расчёте.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=npd-calculator"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* The key difference */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              В чём принципиальная разница
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-700 mb-3">NPD-Calculator считает:</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>💰 Налог НПД на конкретную сумму дохода</li>
                  <li>📊 Вычет в 10 000 ₽</li>
                  <li>✅ Разница физлицо / юрлицо (4% vs 6%)</li>
                </ul>
                <p className="text-gray-500 text-xs mt-3">
                  Полезно, если уже знаете ставку и хотите посчитать налог
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">FreelanceCalc считает:</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>💰 Налог НПД (4% / 6%)</li>
                  <li>📅 Коэффициент загрузки (60–80%)</li>
                  <li>🏖️ Отпуск и больничные</li>
                  <li>📈 Рыночные медианы по специальности</li>
                  <li>🏙️ Разбивка по городам</li>
                  <li>✅ Итоговая часовая и дневная ставка</li>
                </ul>
                <p className="text-blue-600 text-xs mt-3">
                  Для тех, кто хочет знать правильную ставку — с нуля
                </p>
              </div>
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Таблица сравнения</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Функция</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">NPD-Calculator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Расчёт налога НПД (4% / 6%)", "✅", "✅"],
                    ["Учёт вычета 10 000 ₽", "✅", "✅"],
                    ["Расчёт полной часовой ставки", "✅", "❌"],
                    ["Учёт коэффициента загрузки", "✅", "❌"],
                    ["Учёт отпуска и больничных", "✅", "❌"],
                    ["20+ специальностей", "✅", "❌"],
                    ["Рыночные медианы по специальности", "✅", "❌"],
                    ["10+ городов России", "✅", "❌"],
                    ["Сравнение: самозанятый vs ИП", "✅", "❌"],
                    ["PDF-бенчмарк рынка Q1 2026", "✅ 249 ₽", "❌"],
                  ].map(([feature, fc, npd]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{npd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tax calculation explainer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как FreelanceCalc учитывает налог самозанятого
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FreelanceCalc включает расчёт НПД как один из шагов формирования ставки.
              Вы выбираете режим (самозанятый 4% с физлиц или 6% с юрлиц, ИП УСН 6%),
              и калькулятор учитывает это при расчёте итоговой суммы к выставлению клиенту.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-green-900 font-semibold mb-3">Пример: самозанятый, физлица</p>
              <div className="text-green-800 text-sm space-y-1">
                <p>Желаемый чистый доход: <strong>100 000 ₽/мес</strong></p>
                <p>Налог НПД (4%): <strong>+ 4 167 ₽</strong></p>
                <p>Загрузка 70%, 160 часов в месяц: <strong>× 1.43</strong></p>
                <p>Отпуск 28 дней: <strong>+ 9%</strong></p>
                <p className="border-t border-green-300 pt-2 mt-2 font-bold">
                  Итоговая ставка: ≈ 1 080 ₽/ч
                </p>
              </div>
              <p className="text-green-700 text-xs mt-3">
                NPD-Calculator покажет только налог 4 167 ₽. FreelanceCalc — всю картину.
              </p>
            </div>
          </section>

          {/* Tax calculator link */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Отдельный калькулятор налога самозанятого
            </h2>
            <p className="text-gray-700 mb-5">
              Если вам нужно быстро посчитать только налог НПД — у FreelanceCalc есть
              отдельный инструмент для этого.
            </p>
            <Link
              href="/instrumenty/kalkulator-naloga-samozanyatogo?utm_source=alternativa&utm_medium=page&utm_campaign=npd-calculator"
              className="inline-block bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-700 transition-colors"
            >
              Калькулятор налога самозанятого →
            </Link>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Полный расчёт ставки самозанятого</h2>
            <p className="text-blue-100 mb-6">
              Налог, загрузка, отпуск, рыночные медианы — всё за 30 секунд. Бесплатно.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=npd-calculator-bottom"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
