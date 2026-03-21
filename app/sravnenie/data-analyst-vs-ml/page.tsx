import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Data Analyst vs ML-инженер: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки дата-аналитиков и ML-инженеров-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору специальности.",
  keywords: [
    "data analyst vs ml инженер зарплата",
    "дата аналитик или ml инженер кто больше зарабатывает",
    "ставка data analyst 2026",
    "ставка ml инженера 2026",
    "аналитик данных или машинное обучение что выбрать",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/data-analyst-vs-ml" },
  openGraph: {
    title: "Data Analyst vs ML-инженер: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок дата-аналитиков и ML-инженеров на фрилансе. Цифры и аналитика 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/data-analyst-vs-ml`,
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
          name: "Кто больше зарабатывает — Data Analyst или ML-инженер?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ML-инженеры зарабатывают значительно больше на всех уровнях. Junior ML — 3 000 ₽/час против 1 500 ₽/час у Data Analyst (+100%). Middle ML — 5 500 ₽/час против 3 000 ₽/час (+83%). Senior ML — 9 000 ₽/час против 5 500 ₽/час (+64%). ML-инженерия сложнее, требует глубоких знаний математики и программирования, но и вознаграждение соответствующее.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает ML-инженер-фрилансер в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ML-инженер-фрилансер в 2026: Junior — 3 000 ₽/час (480 000 ₽/мес), Middle — 5 500 ₽/час (880 000 ₽/мес), Senior — 9 000 ₽/час (1 440 000 ₽/мес). Это одна из самых высокооплачиваемых IT-специализаций на фрилансе в России в 2026 году.",
          },
        },
        {
          "@type": "Question",
          name: "Может ли Data Analyst перейти в ML-инженерию?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, это один из наиболее логичных карьерных путей. Data Analyst уже владеет Python, SQL и работой с данными. Для перехода в ML нужно углубиться в математику (линейная алгебра, статистика, теорвер), освоить PyTorch/TensorFlow и построить портфолио с ML-проектами. Обычно переход занимает 6–12 месяцев и позволяет увеличить ставку в 1,5–2 раза.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Data Analyst vs ML-инженер", item: `${BASE_URL}/sravnenie/data-analyst-vs-ml` },
      ],
    },
  ],
};

export default function DataAnalystVsMlPage() {
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
              <li className="text-gray-700">Data Analyst vs ML-инженер</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Data Analyst vs ML-инженер: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>8 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Data Science и AI — самые быстро растущие направления в IT-фрилансе.
            Но разрыв между дата-аналитиком и ML-инженером огромный.
            <strong> ML-инженеры зарабатывают в 2 раза больше</strong> на уровне Junior
            и на 64% больше на Senior. Senior ML-инженер берёт 9 000 ₽/час —
            это 1 440 000 ₽/мес при полной загрузке. Data Analyst тоже высокооплачиваем
            относительно других специальностей, но ML — это другой уровень.
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
              Таблица ставок: Data Analyst vs ML-инженер по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-cyan-700">Data Analyst ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-violet-700">ML-инженер ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход DA/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход ML/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+100%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+83%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">9 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+64%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 440 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              ML-инженер — самая высокооплачиваемая специальность среди всех направлений фриланса в 2026.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что влияет на разницу в ставках
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Математическая сложность</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ML-инженер должен глубоко понимать математику: линейную алгебру, теорию вероятностей,
                  статистику, методы оптимизации. Data Analyst использует статистику на практическом
                  уровне, но не реализует алгоритмы обучения с нуля. Математический порог входа
                  в ML значительно выше.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Дефицит и спрос</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Data Analyst с хорошими навыками SQL, Python и Power BI/Tableau — распространённый
                  профиль. Грамотный ML-инженер с реальным опытом production-деплоя моделей —
                  дефицитный специалист. Рост популярности AI ускорил спрос, а предложение
                  опытных кадров не успевает.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Тип задач и ответственность</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Data Analyst анализирует данные и строит дашборды — важная аналитическая работа.
                  ML-инженер создаёт системы, которые принимают решения в production: рекомендации,
                  детекция фрода, оптимизация. Ответственность и инженерная сложность выше —
                  ставка тоже.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Data Analytics и ML</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
                <h3 className="font-bold text-cyan-900 mb-3">Выбирайте Data Analytics, если...</h3>
                <ul className="space-y-2 text-sm text-cyan-800">
                  <li>— нравится работать с данными и находить паттерны</li>
                  <li>— хотите быстрее войти в Data Science (6–9 мес)</li>
                  <li>— интересует бизнес-аналитика и визуализация</li>
                  <li>— предпочитаете SQL, Python, Power BI / Tableau</li>
                </ul>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
                <h3 className="font-bold text-violet-900 mb-3">Выбирайте ML-инженерию, если...</h3>
                <ul className="space-y-2 text-sm text-violet-800">
                  <li>— готовы к глубокой математике и долгому обучению (12–24 мес)</li>
                  <li>— хотите ставку в 2 раза выше аналитики на Junior уровне</li>
                  <li>— интересует AI, нейросети, NLP, компьютерное зрение</li>
                  <li>— нравятся PyTorch, scikit-learn, MLflow</li>
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
                  Кто больше зарабатывает — Data Analyst или ML-инженер?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ML-инженеры зарабатывают в 2 раза больше на Junior уровне (3 000 vs 1 500 ₽/час)
                  и на 64% больше на Senior (9 000 vs 5 500 ₽/час). Senior ML — топ среди
                  всех фриланс-специальностей: 1 440 000 ₽/мес при полной загрузке.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает ML-инженер-фрилансер в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior — 3 000 ₽/час (~480 000 ₽/мес), Middle — 5 500 ₽/час
                  (~880 000 ₽/мес), Senior — 9 000 ₽/час (~1 440 000 ₽/мес).
                  Это самая высокооплачиваемая фриланс-специальность в 2026 году.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Может ли Data Analyst перейти в ML-инженерию?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, это логичный и распространённый карьерный путь. Аналитик уже владеет
                  Python и работой с данными. Для перехода нужно углубиться в математику
                  и освоить PyTorch/TensorFlow. Переход занимает 6–12 месяцев и позволяет
                  увеличить ставку в 1,5–2 раза.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/data-analyst"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-cyan-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Data Analyst</p>
                <p className="text-sm text-gray-500">Ставка 1 500–5 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/ml-inzhener"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-violet-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">ML-инженер</p>
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
