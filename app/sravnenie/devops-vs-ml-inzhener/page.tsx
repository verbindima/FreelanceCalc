import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "DevOps vs ML-инженер: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки DevOps-инженера и ML-инженера на фрилансе в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица почасовых ставок и дохода за месяц.",
  keywords: [
    "devops vs ml инженер зарплата",
    "devops или ml кто больше зарабатывает",
    "сравнение ставок devops ml",
    "ml инженер ставка 2026",
    "devops инженер ставка 2026",
    "кем лучше стать devops или ml",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/devops-vs-ml-inzhener" },
  openGraph: {
    title: "DevOps vs ML-инженер: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок DevOps и ML-инженера на фрилансе: Junior, Middle, Senior. Кто зарабатывает больше в 2026 году.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/devops-vs-ml-inzhener`,
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
          name: "Кто больше зарабатывает — DevOps или ML-инженер?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ML-инженер зарабатывает значительно больше DevOps на всех уровнях: на Middle — 5 500 ₽/час против 3 800 ₽/час (+45%), на Senior — 9 000 ₽/час против 6 500 ₽/час (+38%). ML/AI — самая высокооплачиваемая специальность на фрилансе в 2026 году.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает DevOps-инженер фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DevOps-инженер-фрилансер в 2026 году зарабатывает: Junior — 2 000 ₽/час (~320 000 ₽/месяц), Middle — 3 800 ₽/час (~608 000 ₽/месяц), Senior — 6 500 ₽/час (~1 040 000 ₽/месяц). Данные Q1 2026 по Хабр Карьера, FL.ru.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли переходить из DevOps в ML?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Переход сложный, но выгодный. DevOps даёт базу в инфраструктуре, что полезно для MLOps. Нужно добавить математику (линейная алгебра, статистика), Python, ML-фреймворки (PyTorch, TensorFlow) и понимание моделей. Переход обычно занимает 1–2 года и повышает доход на 45%.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "DevOps vs ML", item: `${BASE_URL}/sravnenie/devops-vs-ml-inzhener` },
      ],
    },
  ],
};

export default function DevopsVsMlPage() {
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
              <li className="text-gray-700">DevOps vs ML-инженер</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            DevOps vs ML-инженер: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Обе специальности — элита технического фриланса с доходом от 320 000 ₽/месяц на Junior.
            Но по данным 2026 года,{" "}
            <strong>ML-инженер зарабатывает на 45% больше</strong> DevOps на уровне Middle
            (5 500 vs 3 800 ₽/час). ML/AI — абсолютный лидер по ставкам. Разбираем причины.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит с рыночной медианой.
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
              Таблица ставок: DevOps vs ML-инженер по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-cyan-700">DevOps ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-violet-700">ML ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход DevOps/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход ML/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+50%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">3 800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+45%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">608 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">6 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">9 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+38%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 040 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 440 000 ₽</td>
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
              Почему ML-инженер зарабатывает на 45% больше DevOps
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Уникальность экспертизы</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ML-инженер должен одновременно знать математику (линейная алгебра, статистика,
                  теорвер), программирование (Python, PyTorch/TensorFlow) и понимать бизнес-задачи.
                  Таких специалистов ещё мало. DevOps — более распространённая специальность:
                  Docker, Kubernetes, CI/CD — это стек, который изучает всё больше инженеров.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">AI-бум 2024–2026</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Спрос на ML/AI специалистов вырос кратно после выхода ChatGPT и языковых моделей.
                  Компании гонятся за AI-экспертизой и готовы платить premium. DevOps-рынок
                  более зрелый — ставки растут, но умереннее.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Международный рынок</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ML-инженеры активно работают с зарубежными заказчиками, где ставки выше.
                  Это подтягивает рублёвый рынок вверх. DevOps также востребован международно,
                  но конкуренция там выше.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между DevOps и ML</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
                <h3 className="font-bold text-cyan-900 mb-3">Выбирайте DevOps, если...</h3>
                <ul className="space-y-2 text-sm text-cyan-800">
                  <li>— нравится инфраструктура, серверы, автоматизация</li>
                  <li>— хотите войти в высокооплачиваемый IT за 12–18 мес.</li>
                  <li>— интересны Kubernetes, Terraform, CI/CD-пайплайны</li>
                  <li>— хотите стабильный доход от 320 000 ₽/мес с Junior</li>
                </ul>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
                <h3 className="font-bold text-violet-900 mb-3">Выбирайте ML, если...</h3>
                <ul className="space-y-2 text-sm text-violet-800">
                  <li>— есть математическая база (или готовы её получить)</li>
                  <li>— интересны нейросети, модели, данные, PyTorch</li>
                  <li>— хотите ставку на 45% выше, чем у DevOps</li>
                  <li>— готовы инвестировать 1,5–2 года в обучение</li>
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
                  Кто больше зарабатывает — DevOps или ML-инженер?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ML-инженер зарабатывает значительно больше: на Middle на 45% (5 500 vs 3 800 ₽/час),
                  на Senior на 38% (9 000 vs 6 500 ₽/час). ML — топ-1 специальность по ставкам
                  на фрилансе в 2026 году.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает DevOps-фрилансер?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior DevOps — 2 000 ₽/час (~320 000 ₽/мес), Middle — 3 800 ₽/час
                  (~608 000 ₽/мес), Senior — 6 500 ₽/час (~1 040 000 ₽/мес).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Что такое MLOps и сколько он зарабатывает?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  MLOps — специалист на стыке ML и DevOps: разворачивает ML-модели в production,
                  настраивает мониторинг и CI/CD для AI-систем. Ставки MLOps близки к ML-инженеру
                  (4 000–8 000 ₽/час), и спрос на эту специализацию растёт.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/devops-inzhener"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-cyan-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">DevOps-инженер</p>
                <p className="text-sm text-gray-500">Ставка 2 000–6 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/ml-inzhener"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-violet-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">ML-инженер / AI-специалист</p>
                <p className="text-sm text-gray-500">Ставка 3 000–9 000 ₽/час. Рассчитать персонально →</p>
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
