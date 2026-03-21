import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Python vs Frontend разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Python и Frontend разработчиков-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору специальности.",
  keywords: [
    "python vs frontend зарплата",
    "python или frontend кто больше зарабатывает",
    "сравнение ставок python frontend",
    "python разработчик ставка 2026",
    "что лучше python или frontend",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/python-vs-frontend" },
  openGraph: {
    title: "Python vs Frontend разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Python и Frontend разработчиков на фрилансе. Junior, Middle, Senior — цифры и аналитика 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/python-vs-frontend`,
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
          name: "Кто больше зарабатывает — Python или Frontend разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python разработчики зарабатывают столько же или больше Frontend на всех уровнях. Junior Python — 1 800 ₽/час против 1 500 ₽ у Frontend (+20%). Middle Python — 3 500 ₽/час против 3 000 ₽ (+17%). Senior — 6 000 ₽/час у обоих. Python особенно выгоден для тех, кто работает в Data Science, автоматизации или backend на FastAPI/Django.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Python разработчик-фрилансер в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python разработчик-фрилансер в 2026: Junior — 1 800 ₽/час (288 000 ₽/мес), Middle — 3 500 ₽/час (560 000 ₽/мес), Senior — 6 000 ₽/час (960 000 ₽/мес). Расчёт по 160 рабочим часам в месяц.",
          },
        },
        {
          "@type": "Question",
          name: "В каких направлениях Python приносит больше всего дохода?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Наиболее высокооплачиваемые направления Python-разработки на фрилансе: Data Science и ML (ставки до 9 000 ₽/час на senior), автоматизация бизнес-процессов, backend на FastAPI и Django, парсинг и обработка данных. Чистый веб-разработчик на Python зарабатывает примерно столько же, сколько Backend-разработчик на других языках.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Python vs Frontend", item: `${BASE_URL}/sravnenie/python-vs-frontend` },
      ],
    },
  ],
};

export default function PythonVsFrontendPage() {
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
              <li className="text-gray-700">Python vs Frontend</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Python vs Frontend разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Python — один из самых универсальных языков: веб, автоматизация, аналитика, ML.
            Frontend — специализация с самой большой базой заказов на рынке фриланса.
            По данным 2026 года, <strong>Python разработчики зарабатывают на 17–20% больше</strong>{" "}
            Frontend-коллег на уровнях Junior и Middle. На Senior ставки выравниваются:
            оба зарабатывают 6 000 ₽/час. Но у Python есть «бонус» — путь в Data Science и ML,
            где ставки достигают 9 000 ₽/час.
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
              Таблица ставок: Python vs Frontend по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-yellow-700">Python ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">Frontend ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Python/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Frontend/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+20%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+17%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">6 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+9%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">960 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Бонус Python: при переходе в ML/Data Science Senior-ставка достигает 9 000 ₽/час.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что влияет на разницу в ставках
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Универсальность Python</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python разработчик может работать в веб-разработке (Django, FastAPI), автоматизации,
                  парсинге данных, Data Science и ML. Такая универсальность позволяет выбирать
                  наиболее высокооплачиваемые задачи. Frontend ограничен браузерной экосистемой,
                  хотя и там спектр задач широкий.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Путь в ML и Data Science</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python — основной язык для машинного обучения. Специалист, начавший с веб-разработки
                  на Python, может органично перейти в ML-инженерию, где ставки стартуют от 3 000 ₽/час
                  для Junior и достигают 9 000 ₽/час для Senior. Это уникальный карьерный трек,
                  недоступный для чистых Frontend-разработчиков.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Скорость входа в профессию</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Frontend привлекателен быстрым стартом: первые коммерческие проекты реальны
                  через 6–9 месяцев обучения. Python для backend требует больше времени на освоение
                  фреймворков и работы с базами данных. Однако Python как язык считается одним из
                  самых простых для изучения с нуля.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Python и Frontend</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h3 className="font-bold text-yellow-900 mb-3">Выбирайте Python, если...</h3>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li>— интересует Data Science, автоматизация или ML</li>
                  <li>— хотите универсальность: веб, скрипты, аналитика</li>
                  <li>— привлекает работа с данными и серверной логикой</li>
                  <li>— нацелены на максимальную ставку в перспективе 2–3 лет</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте Frontend, если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— важно быстро начать зарабатывать (6–9 месяцев)</li>
                  <li>— нравится визуальная часть: интерфейсы, анимации, UX</li>
                  <li>— хотите работать с дизайнерами и продуктовыми командами</li>
                  <li>— интересует React, TypeScript, Next.js экосистема</li>
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
                  Кто больше зарабатывает — Python или Frontend разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python разработчики зарабатывают на 17–20% больше на Junior и Middle уровнях.
                  На Senior ставки близки (6 000 vs 5 500 ₽/час). При переходе в ML ставки
                  Python-разработчиков вырастают до 9 000 ₽/час.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает Python разработчик-фрилансер в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior — 1 800 ₽/час (~288 000 ₽/мес), Middle — 3 500 ₽/час
                  (~560 000 ₽/мес), Senior — 6 000 ₽/час (~960 000 ₽/мес).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  В каких направлениях Python приносит больше всего дохода?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Топ по ставкам: ML-инженерия (до 9 000 ₽/час Senior), Data Science
                  (до 5 500 ₽/час Middle), автоматизация корпоративных процессов,
                  backend на FastAPI/Django для финтеха.
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
                <p className="text-sm text-gray-500">Ставка 1 800–6 000 ₽/час. Рассчитать персонально →</p>
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
