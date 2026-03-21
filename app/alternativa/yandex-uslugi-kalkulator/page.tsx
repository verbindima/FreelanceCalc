import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Калькулятор ставки для Яндекс Услуги — FreelanceCalc",
  description:
    "Работаете на Яндекс Услуги? FreelanceCalc рассчитает вашу минимальную ставку с учётом налогов НПД, загрузки и рыночных медиан по 20+ специальностям и 10+ городам России. Обновлено Q1 2026.",
  keywords: [
    "калькулятор ставки яндекс услуги",
    "яндекс услуги как установить цену",
    "ставка фрилансера яндекс услуги",
    "яндекс услуги фрилансер расчёт",
    "как посчитать стоимость услуги яндекс",
    "яндекс услуги ценообразование",
    "яндекс услуги самозанятый налоги",
    "uslugi yandex калькулятор",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/yandex-uslugi-kalkulator" },
  openGraph: {
    title: "FreelanceCalc для Яндекс Услуги — как правильно поставить цену",
    description:
      "Яндекс Услуги не даёт калькулятор ставки с рыночными медианами. FreelanceCalc восполняет этот пробел.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/yandex-uslugi-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Калькулятор ставки для Яндекс Услуги — как не занизить цену",
      description:
        "Как рассчитать часовую ставку для работы на Яндекс Услуги с учётом налогов самозанятого, загрузки и рыночных медиан.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/alternativa/yandex-uslugi-kalkulator`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Как правильно установить цену на Яндекс Услуги?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Рассчитайте минимальную ставку через FreelanceCalc: укажите желаемый доход, специальность и город. Калькулятор учтёт налог НПД (4–6%), нерабочие дни и загрузку. Затем сравните с рыночными медианами — это ваша нижняя граница. На Яндекс Услуги платформа показывает средние цены по категории, но они не учитывают ваши налоги.",
          },
        },
        {
          "@type": "Question",
          name: "Берёт ли Яндекс Услуги комиссию?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Яндекс Услуги берёт комиссию с исполнителей — обычно 15–20% от суммы заказа в зависимости от категории. Это необходимо учитывать при расчёте ставки: FreelanceCalc позволяет добавить процент комиссии платформы в расчёт.",
          },
        },
        {
          "@type": "Question",
          name: "Нужна ли самозанятость для работы на Яндекс Услуги?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Яндекс Услуги активно интегрирован с самозанятостью — вы можете принимать оплату от юрлиц с автоматической выдачей чека. Налог НПД 4% (физлица) или 6% (юрлица) FreelanceCalc учитывает в расчёте ставки.",
          },
        },
      ],
    },
  ],
};

export default function YandexUslugiAlternativePage() {
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
              <li className="text-gray-700">Яндекс Услуги</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Яндекс Услуги: как правильно поставить цену и не потерять на налогах
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Яндекс Услуги — один из крупнейших маркетплейсов для специалистов в России,
            интегрированный с экосистемой Яндекса. Платформа помогает находить клиентов,
            но не даёт персонального калькулятора ставки: фрилансеры ориентируются на
            средние цены в категории и не учитывают налоги, загрузку и рыночные медианы.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте ставку для Яндекс Услуги — бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Специальность, желаемый доход и город — получите ставку с рыночным контекстом.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=yandex-uslugi"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Why Yandex Uslugi freelancers underprice */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему исполнители на Яндекс Услуги занижают ставки
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Яндекс Услуги показывает средние цены по категории — это удобный ориентир,
              но ловушка: средняя цена уже включает демпинг начинающих исполнителей.
              Плюс платформа берёт комиссию 15–20% — её нужно заложить в ставку.
              Не заложил — работаешь с реальным убытком.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-yellow-900 mb-3">Пример расчёта для копирайтера на Яндекс Услуги</p>
              <div className="space-y-2 text-sm text-yellow-800">
                <div className="flex justify-between">
                  <span>Желаемый доход в месяц</span>
                  <span className="font-medium">80 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Налог НПД (6% с юрлиц)</span>
                  <span className="font-medium">−5 100 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Комиссия Яндекс Услуги (~18%)</span>
                  <span className="font-medium">×1.22 коэффициент</span>
                </div>
                <div className="flex justify-between">
                  <span>Загрузка 70%, отпуск 28 дней</span>
                  <span className="font-medium">×1.63 коэффициент</span>
                </div>
                <div className="flex justify-between border-t border-yellow-300 pt-2 font-bold">
                  <span>Минимальная ставка</span>
                  <span className="text-yellow-900">≈ 800 ₽/час</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Большинство копирайтеров на маркетплейсах называют 200–400 ₽/час.
              При правильном расчёте ставка должна быть вдвое выше.
            </p>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              FreelanceCalc для Яндекс Услуги — что умеет инструмент
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Задача</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Яндекс Услуги</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Рассчитать минимальную ставку", "✅", "❌"],
                    ["Учёт налога НПД 4% / 6%", "✅", "❌"],
                    ["Учёт ИП УСН 6%", "✅", "❌"],
                    ["Учёт комиссии платформы", "✅", "❌"],
                    ["Учёт коэффициента загрузки", "✅", "❌"],
                    ["Учёт отпуска и больничных", "✅", "❌"],
                    ["20+ специальностей (разработчик, дизайнер...)", "✅", "❌"],
                    ["Рыночные медианы Q1 2026", "✅", "❌"],
                    ["Данные по 10+ городам России", "✅", "❌"],
                    ["Средние цены по категории на платформе", "❌", "✅"],
                    ["PDF-бенчмарк медиан по рынку", "✅ 249 ₽", "❌"],
                  ].map(([feature, fc, ya]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-400">{ya}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* By specialty */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки для популярных специальностей на Яндекс Услуги
            </h2>
            <p className="text-gray-600 mb-5">
              Рассчитайте ставку под вашу специальность — калькулятор настроен под каждую:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Копирайтер", slug: "kopirayter" },
                { name: "UI/UX дизайнер", slug: "dizajner-ui-ux" },
                { name: "Таргетолог", slug: "targetolog" },
                { name: "SMM-специалист", slug: "smm-specialist" },
                { name: "SEO-специалист", slug: "seo-specialist" },
                { name: "WordPress-разработчик", slug: "wordpress-razrabotchik" },
                { name: "Переводчик", slug: "perevodchik" },
                { name: "Графический дизайнер", slug: "graficheskij-dizajner" },
                { name: "Контент-менеджер", slug: "kontent-menedzher" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=yandex-uslugi`}
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

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Как правильно установить цену на Яндекс Услуги?",
                  a: "Рассчитайте минимальную ставку через FreelanceCalc, учтя налоги, комиссию платформы и реальную загрузку. Средние цены на Яндекс Услуги — ориентир, но они не учитывают ваши индивидуальные расходы. Работать ниже минимальной ставки — значит работать в убыток.",
                },
                {
                  q: "Какую комиссию берёт Яндекс Услуги?",
                  a: "Комиссия составляет 15–20% от суммы заказа в зависимости от категории услуг. Это необходимо учитывать в расчёте ставки — ваша цена для клиента должна быть выше минимальной ставки на размер комиссии.",
                },
                {
                  q: "Чем FreelanceCalc отличается от встроенной аналитики Яндекс Услуги?",
                  a: "Яндекс Услуги показывает только средние цены по платформе. FreelanceCalc рассчитывает вашу персональную минимальную ставку с учётом налогов, загрузки, отпуска и комиссии — и сравнивает её с рыночными медианами по специальности и городу.",
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
            <h2 className="text-2xl font-bold mb-3">Узнайте свою реальную ставку для Яндекс Услуги</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. 30 секунд. Специальность + город + налоги + комиссия = правильная ставка.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=yandex-uslugi-bottom"
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
