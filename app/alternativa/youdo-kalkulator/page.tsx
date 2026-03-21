import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор ставки для YouDo — FreelanceCalc",
  description:
    "Работаете на YouDo? FreelanceCalc рассчитывает вашу минимальную ставку с учётом налогов НПД, реальной загрузки и медиан по рынку. Бесплатно, без регистрации.",
  keywords: [
    "калькулятор ставки youdo",
    "youdo фрилансер ставка",
    "сколько брать на youdo",
    "youdo кalkulator",
    "альтернатива youdo калькулятор",
    "ставка исполнителя youdo",
    "как считать ставку на youdo",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/youdo-kalkulator" },
  openGraph: {
    title: "Калькулятор ставки для YouDo — FreelanceCalc",
    description:
      "YouDo не даёт инструмент для расчёта ставки. FreelanceCalc считает её с учётом налогов НПД и реальной загрузки.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/youdo-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Калькулятор ставки для YouDo — как не занизить цену",
  description:
    "Руководство по расчёту справедливой часовой ставки для исполнителей YouDo с учётом налогов НПД и реальной загрузки.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/alternativa/youdo-kalkulator`,
  },
  inLanguage: "ru",
};

export default function YouDoAlternativePage() {
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
              <li className="text-gray-700">YouDo</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Калькулятор ставки для YouDo — как не продешевить на платформе
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            YouDo — один из крупнейших маркетплейсов задач в России: репетиторы, курьеры,
            разработчики, дизайнеры, фотографы. Но платформа не помогает исполнителям
            рассчитать справедливую цену. В итоге многие занижают ставку
            и работают с отрицательной рентабельностью. FreelanceCalc решает эту проблему.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте ставку для YouDo — бесплатно</p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Укажите желаемый доход, налоговый режим и загрузку — получите
              обоснованную минимальную ставку для заданий на YouDo.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=youdo"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Why underpricing happens on YouDo */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему исполнители YouDo занижают ставки
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              На YouDo десятки откликов на каждое задание. Психологически хочется написать цену
              ниже соседа. Но при этом многие не учитывают:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm leading-relaxed">
              <li>Налог самозанятого: 4% с физлиц, 6% с компаний — деньги уходят не «в карман»</li>
              <li>Время на отклики, переговоры, дорогу — это неоплачиваемые часы</li>
              <li>Простой между заданиями: реальная загрузка исполнителя YouDo — 50–65%</li>
              <li>Расходы на оборудование, связь, транспорт</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-yellow-900 mb-3">Пример: дизайнер на YouDo</p>
              <div className="space-y-2 text-sm text-yellow-800">
                <div className="flex justify-between">
                  <span>Желаемый доход в месяц</span>
                  <span className="font-medium">120 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Налог НПД 4% (с физлиц)</span>
                  <span className="font-medium">−5 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Отпуск 28 дней + праздники</span>
                  <span className="font-medium">×1.14 коэффициент</span>
                </div>
                <div className="flex justify-between">
                  <span>Загрузка 55% (реальная для YouDo)</span>
                  <span className="font-medium">×1.82 коэффициент</span>
                </div>
                <div className="flex justify-between border-t border-yellow-300 pt-2 font-bold">
                  <span>Минимальная обоснованная ставка</span>
                  <span className="text-yellow-900">≈ 1 150 ₽/час</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Большинство дизайнеров на YouDo берут 600–800 ₽/час — это 30–50% ниже
              обоснованной ставки. FreelanceCalc показывает реальную цифру.
            </p>
          </section>

          {/* Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              FreelanceCalc для YouDo — что умеет инструмент
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Функция</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">FreelanceCalc</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">YouDo (встроенное)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Расчёт минимальной часовой ставки", "✅", "❌"],
                    ["Учёт налога НПД 4% / 6%", "✅", "❌"],
                    ["Учёт ИП УСН 6%", "✅", "❌"],
                    ["Учёт реальной загрузки (не 100%)", "✅", "❌"],
                    ["Учёт отпуска и праздников", "✅", "❌"],
                    ["Калькуляторы по 20+ специальностям", "✅", "❌"],
                    ["Рыночные медианы Q1 2026", "✅", "❌"],
                    ["Сравнение со ставками в вашем городе", "✅", "❌"],
                    ["PDF-бенчмарк по рынку (249 ₽)", "✅", "❌"],
                  ].map(([feat, fc, yd]) => (
                    <tr key={feat} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feat}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">{fc}</td>
                      <td className="px-4 py-3 text-center text-gray-400">{yd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* By specialty */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Популярные специальности на YouDo
            </h2>
            <p className="text-gray-600 mb-5">
              Рассчитайте ставку под вашу профессию:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "UI/UX дизайнер", slug: "dizajner-ui-ux" },
                { name: "Копирайтер", slug: "kopirayter" },
                { name: "SMM-специалист", slug: "smm-specialist" },
                { name: "Фотограф", slug: "fotograf" },
                { name: "Frontend-разработчик", slug: "frontend-razrabotchik" },
                { name: "SEO-специалист", slug: "seo-specialist" },
                { name: "Переводчик", slug: "perevodchik" },
                { name: "Иллюстратор", slug: "illustrator" },
                { name: "Аналитик данных", slug: "analitik-dannyh" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=youdo`}
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
                  q: "Нужно ли платить налог с дохода на YouDo?",
                  a: "Да. YouDo работает с самозанятыми и физлицами. Если вы самозанятый, налог НПД — 4% с физлиц и 6% с компаний. Если работаете как физлицо без статуса самозанятого, YouDo удерживает 13% НДФЛ. FreelanceCalc учитывает оба режима.",
                },
                {
                  q: "Какая загрузка типична для исполнителей YouDo?",
                  a: "По опросам исполнителей платформы, реальная оплачиваемая загрузка составляет 50–65%. Остальное время уходит на отклики, ожидание, переговоры и дорогу. Не забывайте учитывать это в калькуляторе.",
                },
                {
                  q: "Как указать правильную ставку в профиле YouDo?",
                  a: "Используйте FreelanceCalc: введите желаемый чистый доход, выберите налоговый режим и реальную загрузку. Полученная сумма — ваша минимальная ставка, ниже которой работать невыгодно. Для привлечения клиентов можно добавить 10–20% к минимуму — это даст запас для скидки.",
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
            <h2 className="text-2xl font-bold mb-3">Узнайте свою обоснованную ставку для YouDo</h2>
            <p className="text-blue-100 mb-6">
              Бесплатно. Без регистрации. Специальность + налоги + загрузка = честная цена.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=youdo-bottom"
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
