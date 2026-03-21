import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Frontend vs Backend разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Frontend и Backend разработчиков-фрилансеров в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица с почасовыми ставками и ежемесячным доходом.",
  keywords: [
    "frontend vs backend зарплата",
    "frontend или backend кто больше зарабатывает",
    "сравнение ставок frontend backend",
    "backend разработчик ставка 2026",
    "frontend разработчик ставка 2026",
    "кем лучше стать frontend или backend",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/frontend-vs-backend" },
  openGraph: {
    title: "Frontend vs Backend разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Frontend и Backend разработчиков на фрилансе: Junior, Middle, Senior. Кто зарабатывает больше в 2026 году.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/frontend-vs-backend`,
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
          name: "Кто больше зарабатывает — Frontend или Backend разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Backend разработчики в среднем зарабатывают на 17% больше Frontend. На уровне Middle разница составляет 500 ₽/час (3 500 vs 3 000 ₽/час), на Senior — 500 ₽/час (6 000 vs 5 500 ₽/час). Это связано с тем, что Backend требует более глубоких знаний алгоритмов, работы с базами данных и системного проектирования.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Frontend разработчик-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Frontend разработчик-фрилансер в 2026 году зарабатывает: Junior — 1 500 ₽/час (240 000 ₽/месяц), Middle — 3 000 ₽/час (480 000 ₽/месяц), Senior — 5 500 ₽/час (880 000 ₽/месяц). Данные на основе агрегации Хабр Карьера, FL.ru и Kwork.",
          },
        },
        {
          "@type": "Question",
          name: "Что выгоднее изучать — Frontend или Backend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "С точки зрения ставки Backend даёт преимущество, но Frontend проще для старта: порог входа ниже, первый заказ можно получить уже через 6–9 месяцев обучения. Backend требует понимания серверной логики, баз данных и архитектуры — это обычно 12–18 месяцев до первых проектов. В итоге оба пути ведут к высоким ставкам, выбор зависит от склонности к задачам.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Frontend vs Backend", item: `${BASE_URL}/sravnenie/frontend-vs-backend` },
      ],
    },
  ],
};

export default function FrontendVsBackendPage() {
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
              <li className="text-gray-700">Frontend vs Backend</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Frontend vs Backend разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Вечный спор разработчиков: что выгоднее — фронт или бэк? По данным 2026 года,{" "}
            <strong>Backend разработчики зарабатывают на 17% больше</strong> Frontend-специалистов
            на аналогичном уровне опыта. Разница ощутима: Middle Backend берёт 3 500 ₽/час против
            3 000 ₽/час у Frontend-разработчика. Но Frontend имеет свои преимущества — ниже порог
            входа и огромный спрос от агентств и стартапов. Разберём всё по уровням и цифрам.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит её с рыночной медианой по вашей специальности.
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
              Таблица ставок: Frontend vs Backend по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">Frontend ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700">Backend ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Frontend/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Backend/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+20%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+17%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">6 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+9%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">960 000 ₽</td>
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
              Что влияет на разницу в ставках
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Сложность задач</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Backend разработка требует понимания алгоритмов, архитектуры баз данных,
                  оптимизации запросов и работы с высокими нагрузками. Эти знания накапливаются
                  дольше и стоят дороже. Frontend стал сложнее за последние годы, но порог входа
                  остаётся ниже: HTML/CSS/React доступнее, чем Go/PostgreSQL/Kafka.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Спрос и предложение</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Frontend-разработчиков на рынке больше — каждый год выходят тысячи выпускников
                  курсов. Backend-специалистов с реальным опытом значительно меньше. Высокий спрос
                  при дефиците предложения поднимает ставки Backend вверх.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Типы заказчиков</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Frontend чаще нанимают агентства и малый бизнес с ограниченным бюджетом.
                  Backend нанимают корпорации, финтех и инфраструктурные проекты — там бюджеты
                  на порядок выше. Это напрямую отражается на ставках.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Frontend и Backend</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте Frontend, если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— вам важен быстрый старт (первые заказы через 6–9 месяцев)</li>
                  <li>— интересна визуальная часть продуктов</li>
                  <li>— хотите работать с дизайнерами и продуктовыми командами</li>
                  <li>— нравятся React, TypeScript, анимации и UX</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">Выбирайте Backend, если...</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>— готовы инвестировать 12–18 месяцев в обучение</li>
                  <li>— интересны базы данных, архитектура, производительность</li>
                  <li>— хотите ставку на 17–20% выше рынка Frontend</li>
                  <li>— нравятся Python, Go, Node.js, PostgreSQL</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Важно: на Senior-уровне разница в ставках сужается до 9%. Опыт и специализация
              (например, высоконагруженные системы или финтех) нивелируют разрыв. Senior Frontend
              с экспертизой в производительности может зарабатывать столько же, сколько Backend.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Кто больше зарабатывает — Frontend или Backend разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Backend разработчики зарабатывают в среднем на 17% больше. Разница на уровне
                  Middle составляет 500 ₽/час: Backend берёт 3 500 ₽/час против 3 000 ₽/час у
                  Frontend. На Senior разница меньше — всего 9% (6 000 vs 5 500 ₽/час).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает Frontend разработчик-фрилансер в 2026 году?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior Frontend — 1 500 ₽/час (~240 000 ₽/мес), Middle — 3 000 ₽/час
                  (~480 000 ₽/мес), Senior — 5 500 ₽/час (~880 000 ₽/мес).
                  Расчёт по 160 рабочим часам в месяц.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Что выгоднее изучать — Frontend или Backend?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Зависит от цели. Если важен быстрый старт — Frontend: первые заказы реальны
                  через 6–9 месяцев. Если цель — максимальная ставка — Backend даёт преимущество
                  в 17–20% на Junior/Middle уровне. Оба пути ведут к доходу от 500 000 ₽/мес
                  на Senior.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/frontend-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Frontend разработчик</p>
                <p className="text-sm text-gray-500">Ставка 1 500–5 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/backend-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Backend разработчик</p>
                <p className="text-sm text-gray-500">Ставка 1 800–6 000 ₽/час. Рассчитать персонально →</p>
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
