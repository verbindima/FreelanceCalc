import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива Freelancehunt: калькулятор ставки для фрилансеров — FreelanceCalc",
  description:
    "Freelancehunt показывает средние ставки по платформе, но не считает вашу персональную ставку с учётом налогов и загрузки. FreelanceCalc рассчитывает точную ставку по специальности и городу за 30 секунд.",
  keywords: [
    "freelancehunt калькулятор ставки",
    "альтернатива freelancehunt",
    "как рассчитать ставку на freelancehunt",
    "freelancehunt цена работы",
    "калькулятор фрилансера freelancehunt",
    "freelancehunt статистика ставок альтернатива",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/freelancehunt-kalkulator" },
  openGraph: {
    title: "FreelanceCalc vs Freelancehunt — персональный расчёт ставки фрилансера",
    description:
      "Freelancehunt даёт средние цифры по платформе. FreelanceCalc считает вашу ставку с налогами, загрузкой и рыночными медианами по городу.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/freelancehunt-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Альтернатива Freelancehunt: FreelanceCalc vs статистика ставок Freelancehunt",
  description:
    "Сравнение FreelanceCalc и статистики ставок Freelancehunt. FreelanceCalc рассчитывает персональную ставку с учётом налогов (НПД, ИП), загрузки и отпуска — не просто средние цифры по платформе.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/alternativa/freelancehunt-kalkulator`,
  },
  inLanguage: "ru",
};

export default function FreelancehuntAlternativePage() {
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
          <nav
            className="text-sm text-gray-500 mb-6"
            aria-label="Breadcrumb"
          >
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
              <li className="text-gray-700">Freelancehunt</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Альтернатива Freelancehunt: как рассчитать ставку точнее, чем по
            средним цифрам платформы
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Freelancehunt публикует статистику ставок по платформе — полезный
            ориентир, но не инструмент для расчёта именно вашей цены.
            FreelanceCalc считает персональную ставку: с вашими налогами,
            загрузкой, отпуском и рыночными медианами по специальности и
            городу.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">
              Рассчитайте свою ставку — не среднюю по платформе
            </p>
            <p className="text-blue-700 text-sm mb-4">
              30 секунд. Специальность, город, налоги, загрузка — и точная
              ставка с рыночным контекстом. Бесплатно.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=freelancehunt"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Problem with platform averages */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему средняя ставка по Freelancehunt — плохой ориентир
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Freelancehunt показывает средние цены на услуги — по всем
              исполнителям сразу: от новичков до seniors, из разных городов,
              с разными формами налогообложения. Это полезно, чтобы понять
              «диапазон рынка», но бесполезно для расчёта вашей ставки.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Если вы backend-разработчик в Краснодаре на НПД, средняя
              ставка по Freelancehunt не учтёт: ваш налог 6%, типичную
              загрузку 70%, 28 дней отпуска и 10 дней больничных в году.
              Без этих данных вы либо завышаете ставку и теряете заказы,
              либо занижаете и работаете в минус.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-yellow-900 font-semibold mb-2">Пример расчёта</p>
              <p className="text-yellow-800 text-sm">
                Backend-разработчик хочет 120 000 ₽ в месяц чистыми. Налог
                НПД 6%, загрузка 75%, отпуск 28 дней. Его минимальная ставка
                — не «средняя по рынку», а <strong>~1 800–2 200 ₽/час</strong> с
                учётом всех коэффициентов. FreelanceCalc считает это автоматически.
              </p>
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Сравнение: FreelanceCalc vs Freelancehunt
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">
                      Возможность
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">
                      FreelanceCalc
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-500">
                      Freelancehunt
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Персональный расчёт ставки", "✅", "❌"],
                    ["Учёт налогов (НПД 4%/6%, ИП УСН 6%)", "✅", "❌"],
                    ["Учёт загрузки (billable ratio)", "✅", "❌"],
                    ["Учёт отпуска и больничных", "✅", "❌"],
                    ["20+ специальностей с отдельными медианами", "✅", "❌"],
                    ["Рыночные медианы по 10+ городам России", "✅", "частично"],
                    ["Средние ставки по платформе", "✅", "✅"],
                    ["Статистика ставок по специальностям", "✅", "✅"],
                    ["PDF-бенчмарк рынка 2026", "✅ 249 ₽", "❌"],
                    ["Биржа заказов", "❌", "✅"],
                    ["Бесплатный расчёт", "✅", "✅"],
                  ].map(([feature, fc, fh]) => (
                    <tr key={feature} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{feature}</td>
                      <td className="px-4 py-3 text-center font-medium text-green-700">
                        {fc}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-500">{fh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to use together */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как использовать оба инструмента вместе
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Freelancehunt и FreelanceCalc решают разные задачи. Оптимальная
              стратегия — использовать оба:
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "FreelanceCalc → ваша минимальная ставка",
                  desc: "Рассчитайте, ниже какой ставки вы не можете работать в плюс: с учётом налогов, загрузки, отпуска и желаемого дохода. Это ваш нижний порог.",
                },
                {
                  step: "2",
                  title: "Freelancehunt → рыночный диапазон",
                  desc: "Посмотрите статистику ставок по своей специальности на Freelancehunt — это реальные цены, которые принимают заказчики.",
                },
                {
                  step: "3",
                  title: "Итог → уверенная ставка с аргументом",
                  desc: 'Если рыночная ставка выше вашей минимальной — можно работать. Если ниже — нужно оптимизировать расходы или искать другую аудиторию. Теперь у вас есть данные, а не "ощущения".',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center text-sm">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* When to choose which */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Когда что использовать
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">
                  FreelanceCalc подойдёт, если
                </h3>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>✅ Нужно рассчитать свою минимальную ставку</li>
                  <li>✅ Вы хотите учесть налоги и форму занятости</li>
                  <li>✅ Важна привязка к городу и специальности</li>
                  <li>✅ Нужно обосновать цену данными рынка</li>
                  <li>✅ Вы только начинаете и не знаете, сколько просить</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-700 mb-3">
                  Freelancehunt подойдёт, если
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>🔹 Ищете заказы — биржа с большой базой</li>
                  <li>🔹 Хотите посмотреть общий диапазон ставок</li>
                  <li>🔹 Нужны примеры успешных предложений</li>
                  <li>🔹 Ищете заказчиков по конкретной нише</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Specialties */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Рассчитайте ставку по своей специальности
            </h2>
            <p className="text-gray-700 mb-5">
              FreelanceCalc учитывает особенности каждой специальности —
              типичную загрузку, сезонность, форму налогообложения.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Frontend-разработчик", slug: "frontend-razrabotchik" },
                { name: "Backend-разработчик", slug: "backend-razrabotchik" },
                { name: "Fullstack-разработчик", slug: "fullstack-razrabotchik" },
                { name: "Дизайнер", slug: "designer" },
                { name: "Копирайтер", slug: "copywriter" },
                { name: "Таргетолог", slug: "targetolog" },
                { name: "SEO-специалист", slug: "seo-specialist" },
                { name: "Аналитик данных", slug: "analitik-dannyh" },
                { name: "Тестировщик QA", slug: "qa-tester" },
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/stavka/${spec.slug}?utm_source=alternativa&utm_medium=page&utm_campaign=freelancehunt`}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 transition-colors text-center"
                >
                  {spec.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <Link href="/stavka" className="text-blue-600 hover:underline">
                Все 20+ специальностей →
              </Link>
            </p>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Рассчитайте свою персональную ставку
            </h2>
            <p className="text-blue-100 mb-6">
              Не среднюю по платформе, а именно вашу — с налогами, загрузкой,
              отпуском и рыночным контекстом по городу. Бесплатно за 30 секунд.
            </p>
            <Link
              href="/?utm_source=alternativa&utm_medium=page&utm_campaign=freelancehunt-bottom"
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
