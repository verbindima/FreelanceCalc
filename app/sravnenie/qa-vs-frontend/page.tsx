import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "QA-тестировщик vs Frontend разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки QA-тестировщиков и Frontend разработчиков-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору специальности.",
  keywords: [
    "qa vs frontend зарплата",
    "тестировщик или frontend кто больше зарабатывает",
    "ставка qa тестировщика 2026",
    "qa тестировщик или разработчик что выбрать",
    "переход из qa в разработку",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/qa-vs-frontend" },
  openGraph: {
    title: "QA-тестировщик vs Frontend разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок QA-тестировщиков и Frontend разработчиков на фрилансе. Цифры и аналитика 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/qa-vs-frontend`,
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
          name: "Кто больше зарабатывает — QA-тестировщик или Frontend разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Frontend разработчики зарабатывают значительно больше на всех уровнях. Middle Frontend — 3 000 ₽/час против 1 800 ₽/час у QA (+67%). Senior Frontend — 5 500 ₽/час против 3 500 ₽/час у QA (+57%). QA остаётся популярным входным путём в IT благодаря более низкому порогу входа.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает QA-тестировщик-фрилансер в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "QA-тестировщик-фрилансер в 2026: Junior — 800 ₽/час (128 000 ₽/мес), Middle — 1 800 ₽/час (288 000 ₽/мес), Senior — 3 500 ₽/час (560 000 ₽/мес). QA-автоматизаторы зарабатывают на 30–50% больше ручных тестировщиков.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли QA-специалисту переходить в Frontend разработку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "С финансовой точки зрения — да: Middle Frontend зарабатывает на 67% больше QA. Но переход требует 9–18 месяцев обучения React/TypeScript и наработки портфолио. Альтернатива с меньшими затратами: перейти в QA-автоматизацию (Playwright, Cypress) — это поднимает ставку на 30–50% и требует меньше времени, чем полный переход во фронтенд.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "QA vs Frontend", item: `${BASE_URL}/sravnenie/qa-vs-frontend` },
      ],
    },
  ],
};

export default function QaVsFrontendPage() {
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
              <li className="text-gray-700">QA vs Frontend</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            QA-тестировщик vs Frontend разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            QA — популярный «вход в IT» для тех, кто хочет работать в технологиях без глубокого
            программирования. Frontend — одна из самых востребованных специальностей.
            По данным 2026 года, <strong>Frontend разработчики зарабатывают на 57–67% больше</strong>{" "}
            QA-тестировщиков. Разница в 1 000–1 200 ₽/час на Middle уровне — это 160 000–192 000 ₽/мес
            при полной загрузке. Но у QA есть свои преимущества: более быстрый вход и чёткий путь
            в автоматизацию тестирования, где ставки заметно выше.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
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
              Таблица ставок: QA vs Frontend по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-red-700">QA ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">Frontend ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход QA/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Frontend/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+88%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">128 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+67%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+57%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              QA-автоматизатор (Playwright, Cypress) зарабатывает на 30–50% больше ручного тестировщика.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что влияет на разницу в ставках
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Порог входа и сложность задач</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  QA-тестировщик может начать работу с базовыми знаниями тест-дизайна и инструментов
                  (Jira, TestRail, Postman). Frontend требует знания JavaScript, React, инструментов
                  сборки и браузерных API. Более высокий барьер входа = более высокая ставка.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">QA-автоматизация как мост</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  QA-автоматизатор (Playwright, Cypress, Selenium) зарабатывает на 30–50% больше
                  ручного тестировщика и приближается к ставкам Junior/Middle Frontend.
                  Это промежуточный шаг для тех, кто хочет вырасти в ставке, не переходя
                  полностью во фронтенд-разработку.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Тип заказчиков</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Frontend нанимают постоянно и в большом количестве: агентства, стартапы, корпорации.
                  QA нанимают реже — обычно на конкретный проект или как часть аутстаффинга.
                  Спрос на Frontend стабильнее и объёмнее, что поддерживает высокие ставки.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между QA и Frontend</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-900 mb-3">Выбирайте QA, если...</h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>— хотите быстро войти в IT (3–6 месяцев до первых проектов)</li>
                  <li>— нравится системное мышление и поиск дефектов</li>
                  <li>— интересует автоматизация тестирования как следующий шаг</li>
                  <li>— не готовы сразу глубоко изучать JavaScript и React</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте Frontend, если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— готовы инвестировать 9–12 месяцев в обучение</li>
                  <li>— хотите ставку на 57–67% выше QA на Middle уровне</li>
                  <li>— нравится создавать интерфейсы и работать с дизайнерами</li>
                  <li>— интересует React, TypeScript, современный веб</li>
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
                  Кто больше зарабатывает — QA или Frontend разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Frontend зарабатывает на 57–67% больше на Middle и Senior уровнях.
                  Middle Frontend — 3 000 ₽/час против 1 800 ₽/час у QA.
                  Senior Frontend — 5 500 ₽/час против 3 500 ₽/час.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает QA-тестировщик-фрилансер в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior — 800 ₽/час (~128 000 ₽/мес), Middle — 1 800 ₽/час
                  (~288 000 ₽/мес), Senior — 3 500 ₽/час (~560 000 ₽/мес).
                  QA-автоматизаторы зарабатывают на 30–50% больше.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Стоит ли QA-специалисту переходить в Frontend разработку?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Финансово выгодно: +57–67% к ставке. Но переход занимает 9–18 месяцев.
                  Промежуточный вариант — QA-автоматизация (+30–50% к ставке за 3–6 месяцев обучения).
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/qa-testirovshchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-red-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">QA-тестировщик</p>
                <p className="text-sm text-gray-500">Ставка 800–3 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/frontend-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Frontend разработчик</p>
                <p className="text-sm text-gray-500">Ставка 1 500–5 500 ₽/час. Рассчитать персонально →</p>
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
