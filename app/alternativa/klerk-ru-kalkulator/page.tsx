import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Альтернатива Klerk.ru для расчёта ставки фрилансера — FreelanceCalc",
  description:
    "Сравниваем FreelanceCalc и статьи Klerk.ru о ставках фрилансеров. FreelanceCalc считает вашу личную ставку с учётом налогов НПД/ИП, загрузки и отпуска — и сравнивает с медианами рынка по 22 специальностям и 16 городам России.",
  keywords: [
    "klerk.ru ставка фрилансера",
    "klerk ставка разработчика 2026",
    "альтернатива klerk.ru калькулятор",
    "ставка фрилансера klerk",
    "калькулятор ставки фрилансера вместо klerk",
    "рассчитать ставку разработчика онлайн",
    "ставка разработчика фрилансера 2026",
    "медиана ставки фрилансера россия",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/klerk-ru-kalkulator" },
  openGraph: {
    title: "FreelanceCalc vs Klerk.ru — калькулятор ставки фрилансера 2026",
    description:
      "Klerk.ru публикует статьи о ставках, но не считает вашу личную цифру. FreelanceCalc — считает. Налоги, загрузка, медианы рынка по специальности и городу.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/klerk-ru-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Альтернатива Klerk.ru: как рассчитать ставку фрилансера онлайн в 2026 году",
      description:
        "Klerk.ru публикует обзоры рынка и статьи о ставках фрилансеров, но не имеет персонального калькулятора. FreelanceCalc — бесплатный инструмент с налогами НПД/ИП, загрузкой и рыночными медианами по 22 специальностям и 16 городам России.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/alternativa/klerk-ru-kalkulator`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Альтернативы",
          item: `${BASE_URL}/alternativa`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Klerk.ru",
          item: `${BASE_URL}/alternativa/klerk-ru-kalkulator`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Klerk.ru публикует данные о ставках фрилансеров — зачем мне ещё один калькулятор?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Klerk.ru публикует аналитику и обзоры рынка — это полезно для ориентира. Но статья не считает вашу личную цифру: с вашим налоговым режимом, загрузкой и городом. FreelanceCalc за 30 секунд даёт конкретную ставку именно для вашей ситуации — и сравнивает её с рыночной медианой.",
          },
        },
        {
          "@type": "Question",
          name: "Как FreelanceCalc учитывает налоги самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FreelanceCalc считает НПД 4% (для физлиц) и НПД 6% (для юрлиц), ИП УСН 6%. Итоговая ставка уже включает налог — вы видите, сколько нужно выставить клиенту, чтобы получить нужную чистую сумму на руки.",
          },
        },
        {
          "@type": "Question",
          name: "Насколько актуальны данные о медианах ставок?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Рыночные медианы обновляются ежеквартально. Текущие данные — Q1 2026, по 22 специальностям и 16 городам России.",
          },
        },
      ],
    },
  ],
};

export default function KlerkAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              FreelanceCalc
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Главная
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/alternativa" className="hover:text-blue-600">
                  Альтернативы
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-700">Klerk.ru</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Альтернатива Klerk.ru: рассчитайте ставку фрилансера онлайн
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Klerk.ru — авторитетный ресурс для бухгалтеров и предпринимателей:
            статьи о рынке, обзоры ставок, налоговые гайды. Но там нет
            персонального калькулятора. FreelanceCalc считает вашу ставку: с
            налогами НПД или ИП, коэффициентом загрузки и рыночными медианами
            по вашей специальности и городу.
          </p>

          {/* CTA top */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">
              Рассчитайте вашу ставку прямо сейчас — бесплатно
            </p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Специальность, город, форма налогообложения, загрузка
              — и конкретная цифра с рыночным контекстом.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=klerk"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* What Klerk offers vs what you need */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Что даёт Klerk.ru и чего не хватает
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">
                  ✅ Klerk.ru полезен для
                </h3>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• Общего понимания рыночных ставок в 2026 году</li>
                  <li>• Налоговых гайдов: самозанятый vs ИП</li>
                  <li>• Аналитических обзоров рынка фриланса</li>
                  <li>• Новостей об изменениях в налоговом законодательстве</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-900 mb-3">
                  ❌ Чего нет на Klerk.ru
                </h3>
                <ul className="text-red-800 text-sm space-y-2">
                  <li>• Персонального расчёта вашей ставки</li>
                  <li>• Учёта НПД/ИП прямо в калькуляторе</li>
                  <li>• Коэффициента загрузки (billable ratio)</li>
                  <li>• Медиан ставок по специальности и городу</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-yellow-900 font-semibold mb-2">
                💡 Главная проблема: статья даёт диапазон, а не вашу цифру
              </p>
              <p className="text-yellow-800 text-sm">
                Прочитав на Klerk.ru, что «фронтенд-разработчики берут
                1500–4000 ₽/ч», вы всё равно не знаете: сколько нужно именно
                вам, с вашим налоговым режимом, загрузкой и городом? Это и
                считает FreelanceCalc.
              </p>
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Сравнение: FreelanceCalc vs Klerk.ru
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">
                      Функция
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">
                      FreelanceCalc
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">
                      Klerk.ru
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Персональный расчёт ставки", "✅", "❌ только обзоры"],
                    ["Учёт НПД 4% (самозанятый / физлица)", "✅", "❌"],
                    ["Учёт НПД 6% (самозанятый / юрлица)", "✅", "❌"],
                    ["Учёт ИП УСН 6%", "✅", "❌"],
                    ["Коэффициент загрузки (billable ratio)", "✅", "❌"],
                    ["Учёт отпуска и больничных", "✅", "❌"],
                    ["22 специальности", "✅", "❌"],
                    ["16 городов России", "✅", "❌"],
                    ["Рыночные медианы Q1 2026", "✅", "статьи устаревают"],
                    ["Интерактивный расчёт в реальном времени", "✅", "❌"],
                    ["PDF-бенчмарк по рынку", "✅ 249 ₽", "❌"],
                    ["Бесплатный базовый доступ", "✅", "✅"],
                  ].map(([feature, fc, klerk]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">
                        {fc}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-500">
                        {klerk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Example calculation */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Пример: разработчик читает статью Klerk.ru и идёт в FreelanceCalc
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Допустим, вы фронтенд-разработчик в Екатеринбурге. Статья на
              Klerk.ru говорит: «ставки разработчиков — от 1000 до 3500 ₽/ч».
              Широкий диапазон. Что делать с этими данными?
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">
                  1. Входите в FreelanceCalc
                </p>
                <p className="text-gray-600 text-sm">
                  Выбираете специальность «Frontend-разработчик», город
                  «Екатеринбург», вводите желаемый доход и форму
                  налогообложения.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">
                  2. Получаете персональную цифру
                </p>
                <p className="text-gray-600 text-sm">
                  Желаемый доход 150 000 ₽/мес, НПД 6%, загрузка 75%, 2 недели
                  отпуска → нужная ставка <strong>1 950 ₽/ч</strong>.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="font-semibold text-blue-900 mb-2">
                  3. Видите рыночный контекст
                </p>
                <p className="text-blue-800 text-sm">
                  Медиана для Frontend-разработчика в Екатеринбурге — 1800–2400
                  ₽/ч. Вы в рынке. Можно смело называть цену клиенту.
                </p>
              </div>
            </div>
          </section>

          {/* Specialties grid */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Калькуляторы по специальностям
            </h2>
            <p className="text-gray-700 mb-5">
              Klerk.ru охватывает широкую аудиторию: разработчики, дизайнеры,
              бухгалтеры, юристы, маркетологи. Для каждой специальности
              FreelanceCalc считает ставку с учётом особенностей рынка.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Frontend-разработчик", slug: "frontend-razrabotchik" },
                { name: "Backend-разработчик", slug: "backend-razrabotchik" },
                { name: "Python-разработчик", slug: "python-razrabotchik" },
                { name: "Бухгалтер", slug: "buhgalter" },
                { name: "Юрист", slug: "yurist" },
                { name: "Бизнес-аналитик", slug: "biznes-analitik" },
                { name: "Дизайнер", slug: "designer" },
                { name: "Копирайтер", slug: "copywriter" },
                { name: "SEO-специалист", slug: "seo-specialist" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=klerk`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  {spec.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <Link href="/stavka" className="text-blue-600 hover:underline">
                Все 22 специальности →
              </Link>
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Klerk.ru публикует данные о ставках фрилансеров — зачем мне ещё один калькулятор?",
                  a: "Klerk.ru публикует аналитику и обзоры рынка — это полезно для ориентира. Но статья не считает вашу личную цифру: с вашим налоговым режимом, загрузкой и городом. FreelanceCalc за 30 секунд даёт конкретную ставку именно для вашей ситуации — и сравнивает её с рыночной медианой.",
                },
                {
                  q: "Как FreelanceCalc учитывает налоги самозанятого?",
                  a: "FreelanceCalc считает НПД 4% (для физлиц) и НПД 6% (для юрлиц), ИП УСН 6%. Итоговая ставка уже включает налог — вы видите, сколько нужно выставить клиенту, чтобы получить нужную чистую сумму на руки.",
                },
                {
                  q: "Насколько актуальны данные о медианах ставок?",
                  a: "Рыночные медианы обновляются ежеквартально. Текущие данные — Q1 2026, по 22 специальностям и 16 городам России. Klerk.ru публикует статьи реже, и данные быстро устаревают.",
                },
                {
                  q: "Можно ли использовать FreelanceCalc вместе с материалами Klerk.ru?",
                  a: "Да, это отличная стратегия. Статьи Klerk.ru дают общий контекст и объяснения. FreelanceCalc даёт персональную цифру с налогами и загрузкой. Используйте оба: сначала почитайте аналитику, потом рассчитайте свою конкретную ставку.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="bg-white border border-gray-200 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Узнайте вашу ставку — не диапазон из статьи
            </h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. 30 секунд. Налоги НПД/ИП, загрузка, медианы рынка по
              вашей специальности и городу.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=klerk-bottom"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
