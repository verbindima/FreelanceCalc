import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Альтернатива Digital Broccoli калькулятору фрилансера — FreelanceCalc",
  description:
    "Сравниваем FreelanceCalc и калькулятор Digital Broccoli. FreelanceCalc считает ставку по 20+ специальностям и 10+ городам, учитывает рыночные медианы — помогает не только рассчитать, но и обосновать цену клиенту.",
  keywords: [
    "digital broccoli калькулятор фрилансера",
    "альтернатива digital broccoli",
    "digital broccoli calc альтернатива",
    "калькулятор ставки фрилансера онлайн",
    "freelancecalc vs digital broccoli",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/digital-broccoli" },
  openGraph: {
    title: "FreelanceCalc vs Digital Broccoli — сравнение калькуляторов ставки",
    description:
      "Какой калькулятор ставки фрилансера точнее? Сравниваем функции и помогаем выбрать.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/digital-broccoli`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Альтернатива Digital Broccoli: FreelanceCalc vs Digital Broccoli калькулятор фрилансера",
  description:
    "Сравнение двух калькуляторов ставки фрилансера: что учитывает каждый, чем отличается подход к расчёту и рыночным данным.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/alternativa/digital-broccoli` },
  inLanguage: "ru",
};

export default function DigitalBroccoliAlternativePage() {
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
              <li className="text-gray-700">Digital Broccoli</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Альтернатива Digital Broccoli: FreelanceCalc vs калькулятор фрилансера Digital Broccoli
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Digital Broccoli сделали простой калькулятор ставки — вводишь желаемый доход, получаешь цену в час.
            FreelanceCalc идёт дальше: добавляет рыночный контекст по специальности и городу, чтобы вы не просто
            считали ставку, но и понимали, соответствует ли она рынку.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Попробуйте FreelanceCalc бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              Расчёт за 30 секунд. Налоги, загрузка, отпуск — всё учтено. Плюс медианы рынка по вашей специальности.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=digital-broccoli"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Сравнение: FreelanceCalc vs Digital Broccoli</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Функция</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Digital Broccoli</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Расчёт часовой ставки по доходу", "✅", "✅"],
                    ["Учёт налогов (самозанятый, ИП)", "✅", "частично"],
                    ["Учёт коэффициента загрузки", "✅", "✅"],
                    ["Учёт отпуска и больничных", "✅", "✅"],
                    ["20+ специальностей (разработчик, дизайнер, копирайтер...)", "✅", "❌"],
                    ["Рыночные медианы по специальностям", "✅", "❌"],
                    ["10+ городов России (Москва, СПб, Краснодар...)", "✅", "❌"],
                    ["PDF-бенчмарк ставок по рынку", "✅ 249 ₽", "❌"],
                    ["Интерфейс на русском", "✅", "✅"],
                    ["Бесплатно", "✅", "✅"],
                  ].map(([feature, fc, db]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{db}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why context matters */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему рыночный контекст важнее формулы
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Калькулятор Digital Broccoli решает задачу «сколько мне нужно, чтобы выйти в ноль».
              Это важно, но не достаточно. Когда вы называете клиенту цену, вопрос не «сколько мне нужно»,
              а «сколько платит рынок за таких специалистов в моём городе».
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              FreelanceCalc совмещает оба подхода: сначала считает вашу экономически обоснованную ставку,
              затем сравнивает её с рыночными медианами. Если ваша ставка ниже медианы — значит, вы
              недооцениваете себя. Если выше — у вас аргумент для клиента.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-yellow-900 font-semibold mb-2">Пример</p>
              <p className="text-yellow-800 text-sm">
                Frontend-разработчик в Краснодаре рассчитал ставку 1 800 ₽/ч. По данным FreelanceCalc,
                медиана рынка для senior frontend в Краснодаре — 2 200–3 000 ₽/ч. Значит, он недооценивает
                себя почти на 25%.
              </p>
            </div>
          </section>

          {/* When to use which */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Когда что использовать</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">FreelanceCalc подойдёт, если</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>✅ Вы хотите знать рыночные медианы по специальности</li>
                  <li>✅ Вам важен город (Москва, СПб, Краснодар и т.д.)</li>
                  <li>✅ Вы хотите обосновать ставку перед клиентом данными</li>
                  <li>✅ Вы ИП или самозанятый — нужен точный налоговый расчёт</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-700 mb-3">Digital Broccoli подойдёт, если</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>🔹 Нужен быстрый расчёт «на коленке»</li>
                  <li>🔹 Вас устраивает общий калькулятор без специализации</li>
                  <li>🔹 Рыночный контекст не важен</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Specialties promo */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Калькуляторы по специальностям в FreelanceCalc
            </h2>
            <p className="text-gray-700 mb-5">
              В отличие от одного универсального калькулятора, FreelanceCalc учитывает реальные
              особенности каждой специальности — типичную загрузку, сезонность, форму налогообложения.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Frontend-разработчик", slug: "frontend-razrabotchik" },
                { name: "Backend-разработчик", slug: "backend-razrabotchik" },
                { name: "Дизайнер", slug: "designer" },
                { name: "Копирайтер", slug: "copywriter" },
                { name: "Таргетолог", slug: "targetolog" },
                { name: "SEO-специалист", slug: "seo-specialist" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=digital-broccoli`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  {spec.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <Link href="/stavka" className="text-blue-600 hover:underline">Все 20+ специальностей →</Link>
            </p>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте свою ставку с рыночным контекстом</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. 30 секунд. Налоги, загрузка, медианы по специальности и городу.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=digital-broccoli-bottom"
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
