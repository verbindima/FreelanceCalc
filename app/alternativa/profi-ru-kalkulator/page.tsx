import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива калькулятору Profi.ru — FreelanceCalc",
  description:
    "Работаете на Profi.ru? FreelanceCalc считает ставку с учётом налогов НПД, реальной загрузки и рыночных медиан по 20+ специальностям и 16 городам России. Бесплатно, без регистрации.",
  keywords: [
    "калькулятор ставки profi.ru",
    "profi ru сколько брать за работу",
    "альтернатива profi.ru калькулятор",
    "как считать ставку на профи ру",
    "ставка исполнителя profi.ru",
    "калькулятор самозанятого профи ру",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/profi-ru-kalkulator" },
  openGraph: {
    title: "FreelanceCalc vs калькулятор ставки для Profi.ru — сравнение",
    description:
      "Profi.ru не показывает, сколько реально стоит ваш час. FreelanceCalc считает ставку с учётом налогов, загрузки и сравнивает с рынком.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/profi-ru-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Калькулятор ставки для Profi.ru — сколько брать за услуги в 2026",
  description:
    "Как рассчитать минимальную ставку на Profi.ru с учётом налога самозанятого, нерабочих дней и реальной загрузки. Сравнение с рыночными медианами.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/alternativa/profi-ru-kalkulator`,
  },
  inLanguage: "ru",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько брать за услуги на Profi.ru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Минимальная ставка рассчитывается от желаемого дохода с поправкой на налог самозанятого (4–6%), нерабочие дни (~28 дней в год) и реальную загрузку (обычно 60–70% для исполнителей Profi.ru). Калькулятор FreelanceCalc автоматизирует этот расчёт.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли платить налог с заработка на Profi.ru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Если вы зарегистрированы как самозанятый, ставка НПД — 4% с физлиц и 6% с юрлиц. Этот налог нужно закладывать в цену услуги, иначе вы получаете меньше, чем рассчитывали.",
      },
    },
    {
      "@type": "Question",
      name: "Как Profi.ru влияет на реальную загрузку?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "На Profi.ru конкуренция высокая — особенно в Москве и Санкт-Петербурге. Новые исполнители загружены на 40–60%, опытные с рейтингом — на 70–80%. FreelanceCalc позволяет задать свой коэффициент загрузки.",
      },
    },
  ],
};

export default function ProfiRuAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <li className="text-gray-700">Profi.ru</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Сколько брать на Profi.ru: калькулятор ставки с учётом налогов
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Profi.ru — крупнейший маркетплейс услуг в России: более 10 млн исполнителей от
            репетиторов до разработчиков. Но платформа не показывает, сколько вам реально
            стоит поставить цену. FreelanceCalc рассчитывает минимальную ставку с учётом
            налога самозанятого, загрузки и сравнивает вас с рыночными медианами по специальности и городу.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте ставку для Profi.ru — бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Введите желаемый доход, специальность и город — получите ставку с рыночным контекстом.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=profi-ru"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Why underpricing happens */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему исполнители на Profi.ru занижают цены
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              На Profi.ru клиенты видят десятки предложений сразу и выбирают по цене — давление
              снижать ставку реальное. При этом большинство исполнителей не учитывают:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Налог самозанятого: 4% с физлиц, 6% с юрлиц — это уходит из дохода</li>
              <li>Нерабочие дни: 28 дней отпуска + праздники = ~247 рабочих дней в году</li>
              <li>Простой: поиск клиентов, переписка, подготовка, ожидание оплаты</li>
              <li>Комиссия Profi.ru: 10–20% в зависимости от категории и региона</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-yellow-900 mb-3">Пример для репетитора в Москве</p>
              <div className="space-y-2 text-sm text-yellow-800">
                <div className="flex justify-between">
                  <span>Желаемый доход на руки</span>
                  <span className="font-medium">100 000 ₽/мес</span>
                </div>
                <div className="flex justify-between">
                  <span>Оплачиваемых часов (загрузка 65%)</span>
                  <span className="font-medium">~105 ч/мес</span>
                </div>
                <div className="flex justify-between">
                  <span>Налог НПД 4% (с физлиц)</span>
                  <span className="font-medium">+4.2% к ставке</span>
                </div>
                <div className="flex justify-between">
                  <span>Отпуск 28 дней</span>
                  <span className="font-medium">+13% к ставке</span>
                </div>
                <div className="flex justify-between border-t border-yellow-300 pt-2 font-bold">
                  <span>Минимальная ставка</span>
                  <span className="text-yellow-900">≈ 1 180 ₽/час</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Большинство репетиторов в Москве берут 800–1 000 ₽/час — это ниже обоснованного
              минимума, если хочется зарабатывать 100 000 ₽ чистыми.
            </p>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              FreelanceCalc для Profi.ru — что умеет инструмент
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Задача</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Profi.ru (встроенное)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Рассчитать минимальную ставку", "✅", "❌"],
                    ["Учёт налога НПД 4% / 6%", "✅", "❌"],
                    ["Учёт ИП УСН 6%", "✅", "❌"],
                    ["Учёт коэффициента загрузки", "✅", "❌"],
                    ["Учёт отпуска и больничных", "✅", "❌"],
                    ["20+ специальностей (разработчик, дизайнер, репетитор...)", "✅", "❌"],
                    ["Рыночные медианы Q1 2026", "✅", "❌"],
                    ["Данные по 16 городам России", "✅", "❌"],
                    ["Сравнить себя с рынком", "✅", "❌"],
                    ["PDF-бенчмарк медиан по рынку", "✅ 249 ₽", "❌"],
                  ].map(([feature, fc, profi]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-400">{profi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* By specialty */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки по популярным категориям на Profi.ru
            </h2>
            <p className="text-gray-600 mb-5">
              Рассчитайте ставку под вашу специальность — калькулятор настроен под каждую:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Frontend-разработчик", slug: "frontend-razrabotchik" },
                { name: "Backend-разработчик", slug: "backend-razrabotchik" },
                { name: "UI/UX дизайнер", slug: "dizajner-ui-ux" },
                { name: "Копирайтер", slug: "kopirayter" },
                { name: "SMM-специалист", slug: "smm-specialist" },
                { name: "SEO-специалист", slug: "seo-specialist" },
                { name: "Тестировщик QA", slug: "testirovshchik-qa" },
                { name: "Переводчик", slug: "perevodchik" },
                { name: "Видеограф", slug: "videograf" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=profi-ru`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  {spec.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <Link href="/stavka" className="text-blue-600 hover:underline">Все специальности →</Link>
            </p>
          </section>

          {/* Cities */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки на Profi.ru по городам
            </h2>
            <p className="text-gray-600 mb-4">
              Рынок на Profi.ru разный в зависимости от города. Рассчитайте ставку с учётом вашего региона:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Москва", slug: "moskva" },
                { name: "Санкт-Петербург", slug: "saint-peterburg" },
                { name: "Екатеринбург", slug: "ekaterinburg" },
                { name: "Новосибирск", slug: "novosibirsk" },
                { name: "Казань", slug: "kazan" },
                { name: "Краснодар", slug: "krasnodar" },
                { name: "Нижний Новгород", slug: "nizhniy-novgorod" },
                { name: "Ростов-на-Дону", slug: "rostov-na-donu" },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/goroda/${city.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=profi-ru`}
                  className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько брать за услуги на Profi.ru?",
                  a: "Минимальная ставка рассчитывается от желаемого дохода с поправкой на налог самозанятого (4–6%), нерабочие дни (~28 дней в год) и реальную загрузку (обычно 60–70% для исполнителей Profi.ru). Калькулятор FreelanceCalc автоматизирует этот расчёт.",
                },
                {
                  q: "Нужно ли платить налог с заработка на Profi.ru?",
                  a: "Да. Если вы зарегистрированы как самозанятый, ставка НПД — 4% с физлиц и 6% с юрлиц. Этот налог нужно закладывать в цену услуги, иначе вы получаете меньше, чем рассчитывали.",
                },
                {
                  q: "Как Profi.ru влияет на реальную загрузку?",
                  a: "На Profi.ru конкуренция высокая — особенно в Москве и Санкт-Петербурге. Новые исполнители загружены на 40–60%, опытные с рейтингом — на 70–80%. FreelanceCalc позволяет задать свой коэффициент загрузки.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2">{q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою реальную ставку для Profi.ru</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. 30 секунд. Специальность + город + налоги = ставка с рыночным контекстом.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=profi-ru-bottom"
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
