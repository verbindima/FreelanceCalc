import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива Тинькофф Журнал калькулятору фрилансера — FreelanceCalc",
  description:
    "Сравниваем FreelanceCalc и калькулятор фрилансера от Тинькофф Журнала (t-j.ru). FreelanceCalc добавляет рыночные медианы по 20+ специальностям и 10+ городам — видите не только «сколько нужно», но и «сколько платит рынок».",
  keywords: [
    "тинькофф журнал калькулятор фрилансера",
    "t-j.ru freelance calc альтернатива",
    "альтернатива тинькофф калькулятору",
    "калькулятор ставки фрилансера",
    "freelancecalc vs тинькофф",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/tinkoff-kalkulator" },
  openGraph: {
    title: "FreelanceCalc vs Тинькофф Журнал — сравнение калькуляторов ставки",
    description:
      "Тинькофф считает базовую ставку. FreelanceCalc добавляет рыночные данные по специальностям и городам.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/tinkoff-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Альтернатива Тинькофф Журнал: FreelanceCalc vs калькулятор фрилансера от t-j.ru",
  description:
    "Сравнение калькулятора Тинькофф Журнала и FreelanceCalc: функции, рыночные данные, специализация.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/alternativa/tinkoff-kalkulator`,
  },
  inLanguage: "ru",
};

export default function TinkoffAlternativePage() {
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
              <li className="text-gray-700">Тинькофф Журнал</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Альтернатива Тинькофф Журналу: FreelanceCalc vs калькулятор фрилансера t-j.ru
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Калькулятор Тинькофф Журнала — один из первых в рунете. Он помогает понять минимальную
            ставку «чтобы не работать в минус». FreelanceCalc делает следующий шаг:
            сравнивает вашу ставку с тем, что реально платит рынок в вашем городе по вашей специальности.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Попробуйте FreelanceCalc — это бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Ставка по специальности, с учётом города, налогов и рыночных медиан.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=tinkoff"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Сравнение: FreelanceCalc vs Тинькофф Журнал</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Функция</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Тинькофф Журнал</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Расчёт минимальной ставки", "✅", "✅"],
                    ["Учёт налогов самозанятого (4% / 6%)", "✅", "✅"],
                    ["Учёт ИП УСН", "✅", "частично"],
                    ["Учёт коэффициента загрузки", "✅", "✅"],
                    ["Учёт отпуска и больничных", "✅", "✅"],
                    ["20+ специальностей", "✅", "❌"],
                    ["Рыночные медианы по специальности", "✅", "❌"],
                    ["10+ городов России", "✅", "❌"],
                    ["PDF-бенчмарк ставок Q1 2026", "✅ 249 ₽", "❌"],
                    ["Постоянно обновляется", "✅", "❌ (2021)"],
                  ].map(([feature, fc, tj]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{tj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Data freshness */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Проблема устаревших данных
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Калькулятор Тинькофф Журнала был создан несколько лет назад и с тех пор практически
              не обновлялся. За это время ставки фрилансеров в России существенно выросли — особенно
              в IT. Рассчитывать ставку на основе старых данных значит намеренно занижать себе цену.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              FreelanceCalc обновляет рыночные медианы ежеквартально. Текущие данные — Q1 2026.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-900 font-semibold mb-2">Рыночные ставки Q1 2026</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Frontend-разработчик", "2 000–4 500 ₽/ч"],
                  ["Backend-разработчик", "2 500–5 000 ₽/ч"],
                  ["UX/UI-дизайнер", "1 500–3 500 ₽/ч"],
                  ["Копирайтер", "500–1 500 ₽/ч"],
                  ["Таргетолог", "800–2 000 ₽/ч"],
                  ["SEO-специалист", "800–2 500 ₽/ч"],
                ].map(([spec, rate]) => (
                  <div key={spec} className="text-orange-800">
                    <span className="font-medium">{spec}:</span> {rate}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cities section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки по городам — чего нет у конкурентов
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Ставки во Владивостоке и Москве отличаются в 1.5–2 раза. Фрилансер из Краснодара,
              работающий с московскими клиентами, может ориентироваться на московские медианы —
              и зарабатывать значительно больше локального рынка.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Москва", slug: "moskva" },
                { name: "Санкт-Петербург", slug: "saint-petersburg" },
                { name: "Краснодар", slug: "krasnodar" },
                { name: "Новосибирск", slug: "novosibirsk" },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/goroda/${city.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=tinkoff`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <Link href="/goroda" className="text-blue-600 hover:underline">Все города →</Link>
            </p>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Актуальная ставка с рыночными данными 2026</h2>
            <p className="text-blue-100 mb-6">
              Не угадывайте — считайте по медианам реального рынка. Бесплатно, 30 секунд.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=tinkoff-bottom"
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
