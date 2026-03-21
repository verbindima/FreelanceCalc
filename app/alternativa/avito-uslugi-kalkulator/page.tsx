import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор ставки для Авито Услуги — FreelanceCalc",
  description:
    "Работаете на Авито Услуги? FreelanceCalc рассчитает вашу минимальную ставку с учётом налогов НПД, загрузки и рыночных медиан по 20+ специальностям и 10+ городам России. Обновлено Q1 2026.",
  keywords: [
    "калькулятор ставки авито услуги",
    "авито услуги как установить цену",
    "ставка фрилансера авито",
    "авито услуги фрилансер расчёт",
    "как посчитать стоимость услуги авито",
    "авито услуги ценообразование",
    "авито фрилансер налоги самозанятый",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/avito-uslugi-kalkulator" },
  openGraph: {
    title: "FreelanceCalc для Авито Услуги — как правильно поставить цену",
    description:
      "Авито Услуги не даёт калькулятор ставки с рыночными медианами. FreelanceCalc восполняет этот пробел.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/avito-uslugi-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Калькулятор ставки для Авито Услуги — как не занизить цену",
      description:
        "Как рассчитать часовую ставку для работы на Авито Услуги с учётом налогов самозанятого, загрузки и рыночных медиан.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/alternativa/avito-uslugi-kalkulator`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Как правильно установить цену на Авито Услуги?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Рассчитайте минимальную ставку через FreelanceCalc: укажите желаемый доход, специальность и город. Калькулятор учтёт налог НПД (4–6%), нерабочие дни и загрузку. Затем сравните с рыночными медианами по вашей специальности — это ваша нижняя граница.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли платить налог с дохода на Авито Услуги?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Если вы зарегистрированы как самозанятый, ставка НПД — 4% с физлиц и 6% с юрлиц. FreelanceCalc учитывает оба варианта автоматически при расчёте ставки.",
          },
        },
        {
          "@type": "Question",
          name: "Чем FreelanceCalc лучше встроенного ценообразования Авито?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Авито Услуги показывает только диапазон цен других исполнителей на платформе — без учёта ваших налогов, загрузки и отпуска. FreelanceCalc рассчитывает вашу персональную минимальную ставку и сравнивает её с рыночными медианами по специальности и городу.",
          },
        },
      ],
    },
  ],
};

export default function AvitoUslugiAlternativePage() {
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
              <li className="text-gray-700">Авито Услуги</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Авито Услуги: как не занизить цену и не работать в убыток
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Авито — крупнейшая платформа объявлений в России с 50+ млн пользователей.
            Раздел «Услуги» используют миллионы фрилансеров: от разработчиков и дизайнеров
            до фотографов и репетиторов. Но у Авито нет встроенного калькулятора ставки:
            большинство исполнителей ставят цену «на глаз» — и в итоге работают ниже рынка,
            не учитывая налоги и реальную загрузку.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте ставку для Авито Услуги — бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Специальность, желаемый доход и город — получите ставку с рыночным контекстом.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=avito-uslugi"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Why Avito freelancers underprice */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему исполнители на Авито занижают ставки
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              На Авито Услуги легко увидеть, сколько просят конкуренты, — и возникает
              соблазн поставить чуть ниже. Но «конкурентная цена» не учитывает:
              налог самозанятого (4–6%), дни без заказов, отпуск, время на переписку.
              В итоге цена кажется рыночной — а фактически вы работаете ниже нужного уровня.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-yellow-900 mb-3">Пример расчёта для дизайнера на Авито</p>
              <div className="space-y-2 text-sm text-yellow-800">
                <div className="flex justify-between">
                  <span>Желаемый доход в месяц</span>
                  <span className="font-medium">120 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Налог НПД (6% с юрлиц)</span>
                  <span className="font-medium">−7 700 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Отпуск 28 дней + праздники</span>
                  <span className="font-medium">×1.14 коэффициент</span>
                </div>
                <div className="flex justify-between">
                  <span>Загрузка 65% (типично для Авито)</span>
                  <span className="font-medium">×1.54 коэффициент</span>
                </div>
                <div className="flex justify-between border-t border-yellow-300 pt-2 font-bold">
                  <span>Минимальная ставка</span>
                  <span className="text-yellow-900">≈ 1 350 ₽/час</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Большинство дизайнеров на Авито называют 700–900 ₽/час — это на 35–50%
              ниже обоснованной ставки. FreelanceCalc помогает увидеть реальную цифру.
            </p>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              FreelanceCalc для Авито Услуги — что умеет инструмент
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Задача</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">Авито Услуги</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Рассчитать минимальную ставку", "✅", "❌"],
                    ["Учёт налога НПД 4% / 6%", "✅", "❌"],
                    ["Учёт ИП УСН 6%", "✅", "❌"],
                    ["Учёт коэффициента загрузки", "✅", "❌"],
                    ["Учёт отпуска и больничных", "✅", "❌"],
                    ["20+ специальностей (разработчик, дизайнер...)", "✅", "❌"],
                    ["Рыночные медианы Q1 2026", "✅", "❌"],
                    ["Данные по 10+ городам России", "✅", "❌"],
                    ["Видеть среднюю цену по Авито", "❌", "✅ (частично)"],
                    ["PDF-бенчмарк медиан по рынку", "✅ 249 ₽", "❌"],
                  ].map(([feature, fc, avito]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-400">{avito}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* By specialty */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки для популярных специальностей на Авито Услуги
            </h2>
            <p className="text-gray-600 mb-5">
              Авито Услуги охватывает самые разные профессии — рассчитайте ставку под вашу:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "UI/UX дизайнер", slug: "dizajner-ui-ux" },
                { name: "Фронтенд-разработчик", slug: "frontend-razrabotchik" },
                { name: "Копирайтер", slug: "kopirayter" },
                { name: "WordPress-разработчик", slug: "wordpress-razrabotchik" },
                { name: "SEO-специалист", slug: "seo-specialist" },
                { name: "SMM-специалист", slug: "smm-specialist" },
                { name: "Графический дизайнер", slug: "graficheskij-dizajner" },
                { name: "Таргетолог", slug: "targetolog" },
                { name: "PHP-разработчик", slug: "php-razrabotchik" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=avito-uslugi`}
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

          {/* Tips for Avito */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Советы по ценообразованию на Авито Услуги
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">1. Не смотрите только на конкурентов</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Цены на Авито — это не рыночная медиана, а смесь демпинга и
                  случайных цифр. Часть исполнителей работают нелегально без налогов
                  и могут ставить заниженные цены. Ваша ставка должна покрывать ваши
                  реальные расходы, включая налоги.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">2. Укажите полный пакет, а не почасовку</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  На Авито клиенты плохо понимают почасовые ставки. Лучше предложить
                  фиксированный пакет («лендинг за 15 000 ₽», «логотип за 8 000 ₽»),
                  рассчитав его стоимость через часовую ставку из FreelanceCalc.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">3. Самозанятый — обязательно</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Авито активно продвигает сотрудничество с самозанятыми. Регистрация
                  через «Мой налог» занимает 10 минут — и позволяет официально работать
                  с юрлицами. Ставка НПД 4% (физлица) или 6% (юрлица) уже учтена в
                  расчётах FreelanceCalc.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Как правильно установить цену на Авито Услуги?",
                  a: "Рассчитайте минимальную ставку через FreelanceCalc, учтя налоги и реальную загрузку. Авито показывает диапазоны цен конкурентов — но они не учитывают налоги и простои. Ваша цена должна быть не ниже рассчитанного минимума.",
                },
                {
                  q: "Берёт ли Авито комиссию с исполнителей?",
                  a: "Авито берёт плату за размещение объявлений (зависит от категории и города), но не комиссию с каждой сделки — в отличие от Kwork (20%) или FL.ru. Это нужно учитывать при расчёте ставки.",
                },
                {
                  q: "Нужно ли оформлять самозанятость для работы на Авито?",
                  a: "Формально необязательно для небольших сумм. Но Авито активно интегрирует самозанятость — вы сможете работать с юрлицами и ИП официально. FreelanceCalc учитывает НПД 4%/6% в расчёте ставки.",
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
            <h2 className="text-2xl font-bold mb-3">Узнайте свою реальную ставку для Авито Услуги</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. 30 секунд. Специальность + город + налоги = ставка с рыночным контекстом.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=avito-uslugi-bottom"
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
