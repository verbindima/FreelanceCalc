import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива калькулятору Cossa.ru — FreelanceCalc",
  description:
    "Сравниваем FreelanceCalc и калькулятор фрилансера Cossa.ru. FreelanceCalc считает ставку по 20+ специальностям и 10+ городам, учитывает налоги НПД и ИП, показывает рыночные медианы — помогает не только рассчитать, но и обосновать цену клиенту.",
  keywords: [
    "cossa калькулятор фрилансера",
    "альтернатива cossa калькулятор",
    "cossa.ru калькулятор ставки",
    "калькулятор стоимости часа работы фрилансера",
    "freelancecalc vs cossa",
    "рассчитать ставку фрилансера онлайн",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/cossa-kalkulator" },
  openGraph: {
    title: "FreelanceCalc vs Cossa.ru — сравнение калькуляторов ставки фрилансера",
    description:
      "Какой калькулятор ставки фрилансера точнее? Сравниваем FreelanceCalc и Cossa.ru — функции, налоги, рыночные данные.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/cossa-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Альтернатива калькулятору Cossa.ru: FreelanceCalc vs Cossa калькулятор фрилансера",
  description:
    "Сравнение двух калькуляторов ставки фрилансера: что учитывает каждый, чем отличается подход к расчёту, налогам и рыночным данным.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/alternativa/cossa-kalkulator` },
  inLanguage: "ru",
};

export default function CossaAlternativePage() {
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
              <li className="text-gray-700">Cossa.ru калькулятор</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Альтернатива Cossa.ru: FreelanceCalc vs калькулятор фрилансера Cossa
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Cossa.ru — авторитетное медиа для диджитал-специалистов. Их калькулятор помогает
            рассчитать часовую ставку по желаемому доходу. FreelanceCalc делает то же самое,
            но добавляет налоги НПД и ИП, рыночные медианы по специальности и городу —
            чтобы вы не просто считали, но и знали, где вы находитесь относительно рынка.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Попробуйте FreelanceCalc бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              Расчёт за 30 секунд. Налоги, загрузка, отпуск — всё учтено. Плюс медианы рынка по вашей специальности и городу.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=cossa"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Сравнение: FreelanceCalc vs Cossa.ru</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Функция</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Cossa.ru</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Расчёт часовой ставки по желаемому доходу", "✅", "✅"],
                    ["Расчёт стоимости проекта", "✅", "✅"],
                    ["Учёт налогов НПД (самозанятый 4%/6%)", "✅", "❌"],
                    ["Учёт налогов ИП УСН 6%", "✅", "❌"],
                    ["Учёт коэффициента загрузки (billable ratio)", "✅", "❌"],
                    ["Учёт отпуска и больничных", "✅", "❌"],
                    ["20+ специальностей (разработчик, дизайнер, SEO...)", "✅", "❌"],
                    ["Рыночные медианы по специальностям", "✅", "❌"],
                    ["10+ городов России (Москва, СПб, Краснодар...)", "✅", "❌"],
                    ["PDF-бенчмарк ставок по рынку", "✅ 249 ₽", "❌"],
                    ["Актуальные данные 2026", "✅", "данные устарели"],
                    ["Интерфейс на русском", "✅", "✅"],
                    ["Бесплатно", "✅", "✅"],
                  ].map(([feature, fc, cossa]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{cossa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key difference */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Главная разница: налоги и рыночный контекст
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Калькулятор Cossa считает ставку по простой формуле: желаемый доход ÷ рабочие часы.
              Это отправная точка, но не полная картина. Если вы самозанятый или ИП, налоги
              увеличивают нужную ставку на 4–20% в зависимости от формы. Если клиенты не загружают
              вас на 100% — реальная ставка должна быть ещё выше.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              FreelanceCalc считает итоговую ставку с учётом всех этих факторов — и затем
              сравнивает её с рыночными медианами по вашей специальности и городу.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-yellow-900 font-semibold mb-2">Пример: копирайтер в Москве</p>
              <p className="text-yellow-800 text-sm mb-2">
                Желаемый доход: 80 000 ₽/мес. Cossa посчитает: 500 ₽/ч (при 8ч × 20 дней).
              </p>
              <p className="text-yellow-800 text-sm">
                FreelanceCalc добавит: НПД 6% (юрлица) + загрузка 70% + 2 недели отпуска = <strong>реальная ставка 780 ₽/ч</strong>.
                Медиана рынка для копирайтера в Москве — 600–900 ₽/ч. Вы в рынке.
              </p>
            </div>
          </section>

          {/* Audience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Кому какой инструмент подходит</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">FreelanceCalc подойдёт, если</h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>✅ Вы самозанятый или ИП — нужен точный налоговый расчёт</li>
                  <li>✅ Хотите знать медианы рынка по своей специальности</li>
                  <li>✅ Важен город (Москва, СПб, Краснодар и т.д.)</li>
                  <li>✅ Хотите обосновать ставку перед клиентом цифрами</li>
                  <li>✅ Нужна актуальная аналитика рынка 2026</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-700 mb-3">Cossa подойдёт, если</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>🔹 Нужен быстрый базовый расчёт без деталей</li>
                  <li>🔹 Вы только начинаете и хотите простой старт</li>
                  <li>🔹 Форма налогообложения не важна</li>
                  <li>🔹 Рыночный контекст пока не нужен</li>
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
              Аудитория Cossa — диджитал-маркетологи, SEO-специалисты, контент-менеджеры,
              дизайнеры. Для каждой специальности FreelanceCalc учитывает реальные особенности рынка:
              типичную загрузку, медианные ставки, сезонность.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "SEO-специалист", slug: "seo-specialist" },
                { name: "Таргетолог", slug: "targetolog" },
                { name: "Копирайтер", slug: "copywriter" },
                { name: "Дизайнер", slug: "designer" },
                { name: "SMM-специалист", slug: "smm-specialist" },
                { name: "Контент-менеджер", slug: "content-manager" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=cossa`}
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

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Калькулятор Cossa бесплатный. Зачем мне другой?",
                  a: "Cossa считает базовую ставку без налогов и рыночных данных. Если вы самозанятый и работаете с юрлицами, налог НПД 6% не включён в расчёт — а это ощутимая разница. FreelanceCalc учитывает форму налогообложения, загрузку и показывает, выше или ниже вы рынка."
                },
                {
                  q: "Насколько актуальны данные FreelanceCalc?",
                  a: "Рыночные медианы обновляются ежеквартально. Текущие данные — Q1 2026. Данные Cossa в статье не обновлялись с момента публикации."
                },
                {
                  q: "Что такое рыночная медиана и зачем она нужна?",
                  a: "Медиана — это середина рынка: 50% фрилансеров зарабатывают ниже этой суммы, 50% — выше. Знать медиану важно для переговоров с клиентом: если ваша ставка ниже медианы, у вас аргумент для повышения. Если выше — вы можете обосновать цену конкретными данными."
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте ставку с рыночным контекстом</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. 30 секунд. Налоги, загрузка, медианы по специальности и городу.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=cossa-bottom"
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
