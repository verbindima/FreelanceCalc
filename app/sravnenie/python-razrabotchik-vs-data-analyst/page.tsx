import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Python разработчик vs Аналитик данных: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Python разработчика и аналитика данных на фрилансе в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица почасовых ставок.",
  keywords: [
    "python разработчик vs аналитик данных зарплата",
    "python или data analyst кто больше зарабатывает",
    "сравнение ставок python data analyst",
    "data analyst ставка 2026",
    "python разработчик ставка 2026",
    "кем лучше стать python разработчик или аналитик",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/python-razrabotchik-vs-data-analyst" },
  openGraph: {
    title: "Python разработчик vs Аналитик данных: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Python разработчика и Data Analyst на фрилансе в 2026: Junior, Middle, Senior.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/python-razrabotchik-vs-data-analyst`,
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
          name: "Кто больше зарабатывает — Python разработчик или аналитик данных?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python разработчик зарабатывает на 17% больше аналитика данных на уровне Middle: 3 500 ₽/час против 3 000 ₽/час. На Senior уровне разрыв сохраняется: Python — 6 500 ₽/час против 5 500 ₽/час у Data Analyst (+18%). Разработка требует более глубокого технического стека и приносит прямой бизнес-результат через продукты.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Data Analyst фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Data Analyst-фрилансер в 2026 году зарабатывает: Junior — 1 500 ₽/час (~240 000 ₽/месяц), Middle — 3 000 ₽/час (~480 000 ₽/месяц), Senior — 5 500 ₽/час (~880 000 ₽/месяц). Данные Q1 2026 по Хабр Карьера, FL.ru.",
          },
        },
        {
          "@type": "Question",
          name: "Что выгоднее изучать — Python разработку или аналитику данных?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python разработчик зарабатывает на 17–18% больше, но порог входа выше: нужны знания фреймворков (Django, FastAPI), архитектуры и баз данных. Data Analyst проще начать: SQL + Python + визуализация (Tableau, Power BI) — достаточно для первых проектов. Оба пути ведут к доходу от 480 000 ₽/мес на Middle.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Python vs Data Analyst", item: `${BASE_URL}/sravnenie/python-razrabotchik-vs-data-analyst` },
      ],
    },
  ],
};

export default function PythonVsDataAnalystPage() {
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
              <li className="text-gray-700">Python vs Data Analyst</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Python разработчик vs Аналитик данных: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Python используется и в разработке, и в аналитике — отсюда путаница при выборе специализации.
            По данным 2026 года,{" "}
            <strong>Python разработчик зарабатывает на 17% больше</strong> Data Analyst на уровне Middle
            (3 500 vs 3 000 ₽/час). Но аналитика — более доступный путь для старта. Разбираем детали.
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
              Таблица ставок: Python разработчик vs Data Analyst
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-yellow-700">Python ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-teal-700">Data Analyst ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Python/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход DA/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-teal-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+20%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-teal-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+17%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">6 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-teal-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+18%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 040 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Данные агрегированы по Хабр Карьера, FL.ru, Q1 2026.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему Python разработчик зарабатывает больше аналитика
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Прямой продуктовый результат</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python разработчик создаёт API, сервисы, автоматизацию — работающие продукты.
                  Клиент платит за конкретный код. Data Analyst готовит инсайты и отчёты, которые
                  помогают принять решение. Решение — ценность, но она менее очевидна, чем
                  готовый продукт.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Технический стек</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python разработчик знает Django, FastAPI, SQLAlchemy, Docker, архитектуру
                  микросервисов. Это глубокий инженерный стек. Data Analyst — SQL, Python (pandas,
                  numpy), Tableau/Power BI. Инженерная часть меньше, поэтому ставка ниже.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Аналитика — ворота в ML</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Многие Data Analysts переходят в ML-инженеры, где ставки 5 000–9 000 ₽/час.
                  Это хорошая карьерная траектория: аналитика → ML → AI-специалист.
                  Python разработчик тоже может перейти в ML, но через другой путь.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Python разработкой и аналитикой данных</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h3 className="font-bold text-yellow-900 mb-3">Выбирайте Python разработку, если...</h3>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li>— нравится писать бэкенд API и сервисы</li>
                  <li>— хотите ставку на 17–20% выше аналитиков</li>
                  <li>— интересны Django, FastAPI, PostgreSQL, Docker</li>
                  <li>— готовы к более сложному инженерному стеку</li>
                </ul>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-bold text-teal-900 mb-3">Выбирайте Data Analysis, если...</h3>
                <ul className="space-y-2 text-sm text-teal-800">
                  <li>— нравится работать с данными и строить дашборды</li>
                  <li>— хотите более короткий путь до первых проектов</li>
                  <li>— интересны SQL, pandas, Tableau, аналитика продукта</li>
                  <li>— рассматриваете переход в ML как следующий шаг</li>
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
                  Кто больше зарабатывает — Python разработчик или Data Analyst?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python разработчик зарабатывает на 17–20% больше на всех уровнях.
                  Middle Python — 3 500 ₽/час (560 000 ₽/мес) против 3 000 ₽/час
                  (480 000 ₽/мес) у Data Analyst.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Нужен ли Python Data Analyst'у?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да. Python (pandas, numpy, matplotlib) — стандартный инструмент аналитика данных.
                  Но на уровне Junior хватает SQL + Excel. Python добавляется на Middle и Senior
                  для автоматизации и работы с большими данными.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Data Analyst может перейти в Python разработку?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да. Аналитики, знающие Python, часто переходят в бэкенд-разработку или MLOps.
                  Нужно добавить знания фреймворков (Django/FastAPI), Git, Docker и архитектуры
                  приложений. Переход занимает обычно 6–12 месяцев дополнительного обучения.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/python-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-yellow-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Python разработчик</p>
                <p className="text-sm text-gray-500">Ставка 1 800–6 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/data-analyst"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Аналитик данных</p>
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
