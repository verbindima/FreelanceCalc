import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "SEO-специалист vs Таргетолог: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки SEO-специалиста и таргетолога на фрилансе в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица с почасовыми ставками и ежемесячным доходом.",
  keywords: [
    "seo специалист vs таргетолог зарплата",
    "seo или таргет кто больше зарабатывает",
    "сравнение ставок seo таргетолог",
    "таргетолог ставка 2026",
    "seo специалист ставка 2026",
    "кем лучше стать seo или таргетолог",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/seo-specialist-vs-targetolog" },
  openGraph: {
    title: "SEO-специалист vs Таргетолог: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок SEO и таргетолога на фрилансе: Junior, Middle, Senior. Кто зарабатывает больше в 2026 году.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/seo-specialist-vs-targetolog`,
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
          name: "Кто больше зарабатывает — SEO-специалист или Таргетолог?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "На уровне Middle таргетолог зарабатывает на 20% больше SEO-специалиста: 1 800 ₽/час против 1 500 ₽/час. Это объясняется прямой измеримостью результатов таргетинга (ROI, ROAS) — клиенты готовы платить за конвертируемый трафик. На Senior уровне ставки выравниваются (оба 3 500 ₽/час).",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает SEO-специалист фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO-специалист-фрилансер в 2026 году зарабатывает: Junior — 700 ₽/час (~112 000 ₽/месяц), Middle — 1 500 ₽/час (~240 000 ₽/месяц), Senior — 3 500 ₽/час (~560 000 ₽/месяц). Данные Q1 2026 по Хабр Карьера, FL.ru, Kwork.",
          },
        },
        {
          "@type": "Question",
          name: "Что выгоднее изучать — SEO или таргетинг?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Таргетинг даёт более быстрый старт и доход уже в первые месяцы обучения: настройка рекламы во ВКонтакте и myTarget — более конкретный навык. SEO даёт долгосрочный стабильный доход через ретейнерные контракты и пассивный трафик. Таргет — более волатильный: платформы меняются, алгоритмы обновляются.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "SEO vs Таргетолог", item: `${BASE_URL}/sravnenie/seo-specialist-vs-targetolog` },
      ],
    },
  ],
};

export default function SeoVsTargetologPage() {
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
              <li className="text-gray-700">SEO vs Таргетолог</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            SEO-специалист vs Таргетолог: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            SEO или таргет — популярный карьерный выбор в digital-маркетинге. По данным 2026 года,{" "}
            <strong>таргетолог зарабатывает на 20% больше</strong> SEO-специалиста на уровне Middle
            (1 800 vs 1 500 ₽/час). На Senior уровне ставки сравниваются. Разбираем, почему и что выбрать.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит с рыночной медианой.
            </p>
            <a
              href="https://freelancecalc-one.vercel.app/"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>

          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Таблица ставок: SEO vs Таргетолог по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">SEO ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-orange-700">Таргет ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход SEO/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Таргет/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">700 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">700 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">0%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">112 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">112 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+20%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">0%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Данные агрегированы по Хабр Карьера, FL.ru, Kwork, Q1 2026.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему на Middle таргетолог зарабатывает больше
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Измеримый ROI</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Результат таргетолога виден в CPA, ROAS и продажах — клиент платит напрямую
                  за лиды и конверсии. SEO-результат размыт во времени: 3–6 месяцев до первых
                  позиций. Это снижает переговорную позицию SEO-специалиста при обсуждении ставки.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Скорость результата</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Таргетолог запускает рекламу за день и уже на следующей неделе показывает
                  клиенту цифры. Клиенты ценят скорость и готовы за неё платить. SEO — это
                  долгая инвестиция, что затрудняет обоснование высокой ставки.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">На Senior уровне — паритет</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Опытный SEO-специалист выстраивает пассивный трафик и долгосрочные ретейнерные
                  контракты — это стабильный доход без зависимости от рекламных бюджетов.
                  Senior SEO также часто становится техническим консультантом, что поднимает ставку
                  до уровня таргетолога.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между SEO и таргетингом</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте SEO, если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— нравится аналитика, технический аудит и работа с контентом</li>
                  <li>— хотите долгосрочные ретейнерные контракты (3–12 мес.)</li>
                  <li>— интересна работа с сайтами, структурой и семантикой</li>
                  <li>— хотите пассивный трафик, который работает без бюджетов</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h3 className="font-bold text-orange-900 mb-3">Выбирайте таргетинг, если...</h3>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li>— хотите видеть результат быстро (недели, не месяцы)</li>
                  <li>— нравится работа с аудиториями и кабинетами ВКонтакте</li>
                  <li>— готовы к более высокому доходу на Middle (+20% vs SEO)</li>
                  <li>— интересны A/B-тесты креативов и оптимизация воронок</li>
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
                  Кто больше зарабатывает — SEO или таргетолог?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  На уровне Middle таргетолог зарабатывает на 20% больше (1 800 vs 1 500 ₽/час).
                  На Junior и Senior уровнях ставки одинаковы. Разрыв объясняется прямой
                  измеримостью результатов рекламных кампаний.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает SEO-специалист фрилансер?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior SEO — 700 ₽/час (~112 000 ₽/мес), Middle — 1 500 ₽/час
                  (~240 000 ₽/мес), Senior — 3 500 ₽/час (~560 000 ₽/мес).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Можно ли совмещать SEO и таргетинг?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, многие digital-маркетологи знают оба инструмента. Это делает вас
                  комплексным специалистом и позволяет предлагать клиентам полный цикл
                  привлечения трафика — что оправдывает более высокую ставку.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/seo-specialist"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">SEO-специалист</p>
                <p className="text-sm text-gray-500">Ставка 700–3 500 ₽/час. Рассчитать персонально →</p>
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
              href="https://freelancecalc-one.vercel.app/"
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
