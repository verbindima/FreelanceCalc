import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор ставки для Habr Freelance — FreelanceCalc",
  description:
    "Работаете на Habr Freelance? FreelanceCalc рассчитывает минимальную часовую ставку с учётом налогов НПД/ИП, реальной загрузки и медиан по 22 IT-специальностям. Бесплатно.",
  keywords: [
    "калькулятор ставки habr freelance",
    "habr freelance ставка",
    "хабр фриланс калькулятор",
    "сколько брать на habr freelance",
    "ставка it фрилансера habr",
    "habr freelance альтернатива калькулятор",
    "ставка разработчика habr freelance",
    "хабр фриланс почасовая ставка",
    "как считать ставку habr freelance",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/habr-freelance-kalkulator" },
  openGraph: {
    title: "Калькулятор ставки для Habr Freelance — FreelanceCalc",
    description:
      "Habr Freelance не даёт инструмент для расчёта ставки. FreelanceCalc считает её с учётом налогов, загрузки и рыночных медиан по IT-специальностям.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/habr-freelance-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Калькулятор ставки для Habr Freelance — как не занизить цену IT-специалисту",
  description:
    "Руководство по расчёту справедливой часовой ставки для IT-фрилансеров на Habr Freelance с учётом налогов, загрузки и рыночных медиан.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/alternativa/habr-freelance-kalkulator`,
  },
  inLanguage: "ru",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какая ставка нормальная для Habr Freelance в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "На Habr Freelance работают преимущественно IT-специалисты с высокими ставками: Frontend — 2 000–4 000 ₽/час, Backend — 2 500–5 000 ₽/час, DevOps — 3 000–7 000 ₽/час, ML-инженер — 3 500–8 000 ₽/час. Рассчитайте свою минимальную ставку через FreelanceCalc с учётом налогов и загрузки.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли платить налог с заказов на Habr Freelance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Доходы от фриланса облагаются налогом. Самозанятые платят 4% с физлиц и 6% с юрлиц. ИП на УСН 6% — 6% плюс страховые взносы (~49 500 ₽/год). FreelanceCalc автоматически закладывает налог в ставку.",
      },
    },
    {
      "@type": "Question",
      name: "Как узнать, ниже ли моя ставка рынка на Habr Freelance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FreelanceCalc показывает рыночный контекст: после расчёта вы увидите, как ваша ставка соотносится с медианой по специальности. Данные Q1 2026 по 22 специальностям и 10 городам.",
      },
    },
  ],
};

export default function HabrFreelanceAlternativePage() {
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
              <li className="text-gray-700">Habr Freelance</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Калькулятор ставки для Habr Freelance — как IT-специалисту не занизить цену
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Habr Freelance — главная площадка для IT-фрилансеров в России. Но платформа
            не предлагает инструмент для расчёта ставки: большинство специалистов называют
            цену «по ощущениям» или ориентируются на других исполнителей. Это ведёт к
            занижению ставки на 20–40%. FreelanceCalc рассчитывает вашу минимальную ставку
            по формуле с учётом налогов, загрузки и рыночных медиан по 22 IT-специальностям.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте ставку для Habr Freelance — бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Укажите специальность, желаемый доход и город — получите ставку с рыночным контекстом.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=habr-freelance"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Why IT freelancers underprice on Habr */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему IT-фрилансеры на Habr Freelance занижают ставки
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              На Habr Freelance большинство заказчиков — технологические компании и стартапы,
              которые хорошо понимают рынок. Фрилансер, называющий слишком низкую цену,
              вызывает подозрение. При этом специалисты часто не учитывают реальные издержки:
              налог самозанятого (4–6% НПД), взносы ИП (~49 500 ₽/год), простои между
              проектами и время на пресейл. Итог — работа в финансовый минус.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-yellow-900 mb-3">Пример: Backend-разработчик на Habr Freelance</p>
              <div className="space-y-2 text-sm text-yellow-800">
                <div className="flex justify-between">
                  <span>Желаемый доход в месяц</span>
                  <span className="font-medium">250 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Налог НПД 6% (клиенты — юрлица)</span>
                  <span className="font-medium">−16 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Отпуск 28 дней + праздники</span>
                  <span className="font-medium">×1.14 коэффициент</span>
                </div>
                <div className="flex justify-between">
                  <span>Загрузка 65% (реальная для IT на Habr)</span>
                  <span className="font-medium">×1.54 коэффициент</span>
                </div>
                <div className="flex justify-between border-t border-yellow-300 pt-2 font-bold">
                  <span>Минимальная ставка</span>
                  <span className="text-yellow-900">≈ 2 750 ₽/час</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Многие Backend-разработчики на Habr Freelance берут 1 800–2 200 ₽/час —
              это на 20–35% ниже обоснованного минимума. FreelanceCalc помогает увидеть
              точную цифру.
            </p>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              FreelanceCalc для Habr Freelance — что умеет инструмент
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Задача</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Habr Freelance (встроенное)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Рассчитать минимальную ставку", "✅", "❌"],
                    ["Учёт налога НПД 4% / 6%", "✅", "❌"],
                    ["Учёт ИП УСН 6% + страховые взносы", "✅", "❌"],
                    ["Учёт коэффициента загрузки (простои)", "✅", "❌"],
                    ["Учёт отпуска и нерабочих дней", "✅", "❌"],
                    ["22 IT-специальности (Frontend, DevOps, ML...)", "✅", "❌"],
                    ["Рыночные медианы Q1 2026", "✅", "❌"],
                    ["Данные по 10+ городам России", "✅", "❌"],
                    ["Показывает позицию относительно рынка", "✅", "❌"],
                    ["PDF-бенчмарк медиан по рынку", "✅ 249 ₽", "❌"],
                  ].map(([feature, fc, habr]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-400">{habr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* IT specialties */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки для IT-специальностей на Habr Freelance
            </h2>
            <p className="text-gray-600 mb-5">
              Рассчитайте ставку под вашу специализацию — калькулятор настроен под каждую:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Frontend-разработчик", slug: "frontend-razrabotchik" },
                { name: "Backend-разработчик", slug: "backend-razrabotchik" },
                { name: "Fullstack-разработчик", slug: "fullstack-razrabotchik" },
                { name: "Mobile-разработчик", slug: "mobilnyj-razrabotchik" },
                { name: "DevOps-инженер", slug: "devops-inzhener" },
                { name: "ML-инженер / Data Scientist", slug: "ml-inzhener" },
                { name: "PHP-разработчик", slug: "php-razrabotchik" },
                { name: "Python-разработчик", slug: "python-razrabotchik" },
                { name: "Тестировщик QA", slug: "testirovshchik-qa" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=habr-freelance`}
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

          {/* Market rates table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Рыночные ставки IT-фрилансеров на Habr Freelance — Q1 2026
            </h2>
            <p className="text-gray-600 mb-5">
              Медианные часовые ставки по данным FreelanceCalc (Москва, Senior-уровень):
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Специальность</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Junior</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Middle</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Senior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Frontend-разработчик", "1 200 ₽", "2 200 ₽", "3 500 ₽"],
                    ["Backend-разработчик", "1 500 ₽", "2 800 ₽", "4 500 ₽"],
                    ["Fullstack-разработчик", "1 400 ₽", "2 500 ₽", "4 000 ₽"],
                    ["Mobile (iOS/Android)", "1 800 ₽", "3 200 ₽", "5 500 ₽"],
                    ["DevOps-инженер", "2 000 ₽", "3 500 ₽", "6 000 ₽"],
                    ["ML-инженер", "2 500 ₽", "4 000 ₽", "7 000 ₽"],
                    ["Python-разработчик", "1 400 ₽", "2 600 ₽", "4 200 ₽"],
                    ["Тестировщик QA", "900 ₽", "1 600 ₽", "2 800 ₽"],
                  ].map(([spec, jr, mid, sr]) => (
                    <tr key={spec} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700 font-medium">{spec}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{jr}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{mid}</td>
                      <td className="px-4 py-3 text-center font-semibold text-blue-700">{sr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              * Медианные данные FreelanceCalc Q1 2026. Ставки указаны для Москвы, без учёта налогов. {" "}
              <Link href="/otchet-2026" className="text-blue-500 hover:underline">Полный отчёт →</Link>
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Какая ставка нормальная для Habr Freelance в 2026 году?",
                  a: "Зависит от специализации и уровня. Frontend middle — 2 000–3 000 ₽/час, Backend senior — 3 500–5 500 ₽/час, DevOps senior — 4 000–7 000 ₽/час. Рассчитайте вашу минимальную ставку через FreelanceCalc с учётом налогов и загрузки.",
                },
                {
                  q: "Нужно ли регистрировать самозанятость для работы на Habr Freelance?",
                  a: "Habr Freelance работает с физлицами, самозанятыми и ИП. Для работы с компаниями удобнее самозанятость (НПД 6% с юрлиц) или ИП. FreelanceCalc учитывает все режимы налогообложения при расчёте ставки.",
                },
                {
                  q: "Почему IT-фрилансер на Habr берёт больше, чем на других биржах?",
                  a: "Habr Freelance — профессиональная IT-платформа с более квалифицированной аудиторией. Заказчики здесь — компании, которые готовы платить рыночные ставки за экспертизу. Но и требования выше: чёткое ТЗ, сроки, портфолио.",
                },
                {
                  q: "Как правильно рассчитать ставку для проекта на Habr Freelance?",
                  a: "Шаг 1: рассчитайте часовую ставку через FreelanceCalc (доход + налоги + загрузка). Шаг 2: оцените трудозатраты проекта в часах. Шаг 3: умножьте и добавьте буфер 15–20% на непредвиденные задачи. Итог — стоимость проекта.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 mb-2">{q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Другие биржи и платформы</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Калькулятор для FL.ru", href: "/alternativa/fl-ru-kalkulator" },
                { name: "Калькулятор для Kwork", href: "/alternativa/kwork-kalkulator" },
                { name: "Калькулятор для Profi.ru", href: "/alternativa/profi-ru-kalkulator" },
                { name: "Калькулятор для YouDo", href: "/alternativa/youdo-kalkulator" },
                { name: "Калькулятор НПД", href: "/alternativa/moj-nalog-kalkulator" },
                { name: "Все альтернативы", href: "/alternativa" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою реальную ставку для Habr Freelance</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. 30 секунд. Специальность + город + налоги = ставка с рыночным контекстом по 22 IT-специализациям.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=habr-freelance-bottom"
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
