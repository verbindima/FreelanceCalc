import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "SMM-специалист vs Таргетолог: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки SMM-специалистов и таргетологов-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору специальности.",
  keywords: [
    "smm vs таргетолог зарплата",
    "smm специалист или таргетолог кто больше зарабатывает",
    "ставка smm специалиста 2026",
    "ставка таргетолога 2026",
    "таргетолог или smm что выбрать",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/smm-vs-targetolog" },
  openGraph: {
    title: "SMM-специалист vs Таргетолог: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок SMM-специалистов и таргетологов на фрилансе. Цифры и аналитика 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/smm-vs-targetolog`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Кто больше зарабатывает — SMM-специалист или таргетолог?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Таргетологи зарабатывают больше на всех уровнях. Middle таргетолог берёт 1 800 ₽/час против 1 200 ₽/час у SMM-специалиста (+50%). Senior таргетолог — 3 500 ₽/час против 2 500 ₽/час (+40%). Причина: таргетолог управляет рекламными бюджетами и напрямую влияет на ROI, что делает его результаты измеримыми и легко монетизируемыми.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает таргетолог-фрилансер в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Таргетолог-фрилансер в 2026: Junior — 700 ₽/час (112 000 ₽/мес), Middle — 1 800 ₽/час (288 000 ₽/мес), Senior — 3 500 ₽/час (560 000 ₽/мес). Дополнительно многие таргетологи берут процент от рекламного бюджета (5–15%), что существенно увеличивает доход при крупных клиентах.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли совмещать SMM и таргет?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, и это популярная стратегия на рынке. Специалист «SMM + таргет» может предложить клиенту комплексную работу с социальными сетями и закрыть сразу две потребности. Такой пакет стоит дороже, чем каждая услуга отдельно. Освоить таргет при наличии SMM-базы реально за 2–3 месяца практики с реальными бюджетами.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "SMM vs Таргетолог", item: `${BASE_URL}/sravnenie/smm-vs-targetolog` },
      ],
    },
  ],
};

export default function SmmVsTargetologPage() {
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
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/sravnenie" className="hover:text-blue-600">Сравнение специальностей</Link></li>
              <li>/</li>
              <li className="text-gray-700">SMM vs Таргетолог</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            SMM-специалист vs Таргетолог: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            SMM и таргет — часто смешиваемые профессии, но ставки у них разные.
            <strong> Таргетологи зарабатывают на 40–50% больше</strong> SMM-специалистов.
            Middle таргетолог берёт 1 800 ₽/час против 1 200 ₽/час у SMM.
            Причина проста: таргетолог управляет деньгами клиента и его результат измерим в ROAS
            и стоимости лида. SMM создаёт контент и ведёт сообщества — важно, но сложнее
            обосновать прямой ROI. Разберём по цифрам.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <a
              href="https://freelancecalc.ru/"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>

          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Таблица ставок: SMM vs Таргетолог по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-teal-700">SMM ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-orange-700">Таргетолог ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход SMM/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Таргет/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-teal-700">500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">700 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+40%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">80 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">112 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-teal-700">1 200 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+50%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">192 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-teal-700">2 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+40%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">400 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Таргетологи также могут брать % от рекламного бюджета (5–15%).
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что влияет на разницу в ставках
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Прямая связь с ROI</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Таргетолог управляет рекламным бюджетом и его результат виден немедленно:
                  стоимость лида, ROAS, конверсия. Это делает переговоры о ставке проще —
                  клиент понимает, за что платит. SMM влияет на метрики косвенно: охваты,
                  вовлечённость, репутация — ценные, но менее осязаемые для бюджета.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Дополнительный доход таргетолога</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Таргетологи нередко получают не только фиксированную ставку, но и процент
                  от рекламного бюджета (5–15%). При бюджете клиента в 300 000 ₽/мес
                  это дополнительные 15 000–45 000 ₽ сверх почасовой оплаты.
                  SMM редко работает по такой модели.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Уровень конкуренции</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SMM-специалистов на рынке значительно больше: ниже порог входа,
                  больше предложений. Таргетологов с реальным опытом управления
                  крупными бюджетами и подтверждёнными результатами заметно меньше.
                  Дефицит хороших специалистов поднимает ставки вверх.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между SMM и Таргетом</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-bold text-teal-900 mb-3">Выбирайте SMM, если...</h3>
                <ul className="space-y-2 text-sm text-teal-800">
                  <li>— любите создавать контент: тексты, сторис, видео</li>
                  <li>— интересует работа с брендом и сообществом</li>
                  <li>— нравится вести страницы и общаться с аудиторией</li>
                  <li>— хотите широкий рынок задач без глубокой аналитики</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h3 className="font-bold text-orange-900 mb-3">Выбирайте Таргет, если...</h3>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li>— нравится работа с данными и аналитикой</li>
                  <li>— хотите зарабатывать на 40–50% больше SMM</li>
                  <li>— готовы учиться работать с рекламными кабинетами</li>
                  <li>— интересует VK Реклама, Яндекс Директ, Telegram Ads</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Кто больше зарабатывает — SMM или таргетолог?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Таргетологи зарабатывают на 40–50% больше. Senior таргетолог — 3 500 ₽/час
                  (560 000 ₽/мес) против 2 500 ₽/час (400 000 ₽/мес) у SMM-специалиста.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает таргетолог-фрилансер в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior — 700 ₽/час (~112 000 ₽/мес), Middle — 1 800 ₽/час
                  (~288 000 ₽/мес), Senior — 3 500 ₽/час (~560 000 ₽/мес).
                  Плюс возможный процент от бюджета.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Можно ли совмещать SMM и таргет?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, это популярный формат на рынке. Специалист «SMM + таргет» предлагает
                  комплексный сервис и может брать за пакет больше, чем сумма двух услуг отдельно.
                  Таргет при наличии SMM-базы реально освоить за 2–3 месяца.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/smm-specialist"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">SMM-специалист</p>
                <p className="text-sm text-gray-500">Ставка 500–2 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/targetolog"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Таргетолог</p>
                <p className="text-sm text-gray-500">Ставка 700–3 500 ₽/час. Рассчитать персонально →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-blue-100 mb-6">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <a
              href="https://freelancecalc.ru/"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
