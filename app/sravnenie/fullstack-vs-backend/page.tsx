import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Fullstack vs Backend разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Fullstack и Backend разработчиков-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору специальности.",
  keywords: [
    "fullstack vs backend зарплата",
    "fullstack или backend кто больше зарабатывает",
    "ставка fullstack разработчика 2026",
    "fullstack vs backend разработчик",
    "fullstack или backend что выбрать фриланс",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/fullstack-vs-backend" },
  openGraph: {
    title: "Fullstack vs Backend разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Fullstack и Backend разработчиков на фрилансе. Цифры и аналитика 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/fullstack-vs-backend`,
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
          name: "Кто больше зарабатывает — Fullstack или Backend разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fullstack разработчики зарабатывают чуть больше Backend на Junior и Middle уровнях. Junior Fullstack — 2 000 ₽/час против 1 800 ₽/час у Backend (+11%). Middle Fullstack — 4 000 ₽/час против 3 500 ₽/час (+14%). Senior: Fullstack — 7 000 ₽/час, Backend — 6 000 ₽/час (+17%). Fullstack может закрыть весь стек, что ценнее для малых команд.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Fullstack разработчик-фрилансер в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fullstack разработчик-фрилансер в 2026: Junior — 2 000 ₽/час (320 000 ₽/мес), Middle — 4 000 ₽/час (640 000 ₽/мес), Senior — 7 000 ₽/час (1 120 000 ₽/мес). Данные агрегированы по Хабр Карьера, FL.ru и Kwork, Q1 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Что лучше для фриланса — Fullstack или Backend специализация?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Для фриланса Fullstack часто выгоднее: вы можете взять проект целиком и не делить бюджет с другим разработчиком. Особенно это актуально для работы с небольшими стартапами и малым бизнесом. Backend специализация оправдана при работе с крупными корпоративными проектами, где команды большие и нужна глубокая экспертиза на серверной стороне.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Fullstack vs Backend", item: `${BASE_URL}/sravnenie/fullstack-vs-backend` },
      ],
    },
  ],
};

export default function FullstackVsBackendPage() {
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
              <li className="text-gray-700">Fullstack vs Backend</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Fullstack vs Backend разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Fullstack vs Backend — вопрос о широте против глубины.
            <strong> Fullstack разработчики зарабатывают на 11–17% больше</strong> Backend-специалистов
            на всех уровнях. Разрыв максимален на Senior: Fullstack берёт 7 000 ₽/час против
            6 000 ₽/час у Backend. Для фриланса Fullstack особенно выгоден: можно взять проект
            целиком и не делить бюджет с другим разработчиком. Но Backend глубже —
            и для крупных enterprise-проектов часто ценнее. Разберём по цифрам.
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
              Таблица ставок: Fullstack vs Backend по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-emerald-700">Fullstack ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700">Backend ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход FS/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход BE/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+11%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-700">4 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+14%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">640 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-700">7 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">6 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+17%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 120 000 ₽</td>
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
                <h3 className="font-semibold text-gray-900 mb-2">Закрытие всего стека</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fullstack разработчик может самостоятельно сделать проект от API до интерфейса.
                  Для клиента это одна точка ответственности вместо двух подрядчиков.
                  Малый бизнес и стартапы платят больше именно за эту автономность.
                  Backend-специалист нередко работает в паре с Frontend, что делит бюджет.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Широта vs Глубина</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Backend-специалист глубже понимает серверную архитектуру, высокие нагрузки
                  и оптимизацию баз данных. В крупных корпоративных проектах с тысячами RPS
                  именно эта глубина критична. Fullstack чаще подходит для проектов среднего масштаба,
                  где важнее скорость разработки, чем предельная производительность.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Объём рынка</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  На фриланс-биржах задачи типа «нужен разработчик на весь проект» встречаются
                  чаще, чем «нужен чистый backend». Это делает рынок Fullstack шире и объёмнее.
                  Соответственно, при равном спросе Fullstack-специалист получает больше предложений.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Fullstack и Backend</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-bold text-emerald-900 mb-3">Выбирайте Fullstack, если...</h3>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li>— хотите работать автономно и брать проекты целиком</li>
                  <li>— интересуют стартапы, малый бизнес, MVP</li>
                  <li>— нравится разнообразие задач: и API, и интерфейс</li>
                  <li>— хотите ставку на 11–17% выше Backend</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">Выбирайте Backend, если...</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>— интересует глубокая серверная архитектура</li>
                  <li>— нравится работа с высокими нагрузками и базами данных</li>
                  <li>— хотите работать в крупных корпоративных командах</li>
                  <li>— предпочитаете специализацию, а не широту охвата</li>
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
                  Кто больше зарабатывает — Fullstack или Backend разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fullstack зарабатывает на 11–17% больше. Senior Fullstack — 7 000 ₽/час
                  (1 120 000 ₽/мес) против 6 000 ₽/час (960 000 ₽/мес) у Backend.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает Fullstack разработчик-фрилансер в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior — 2 000 ₽/час (~320 000 ₽/мес), Middle — 4 000 ₽/час
                  (~640 000 ₽/мес), Senior — 7 000 ₽/час (~1 120 000 ₽/мес).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Что лучше для фриланса — Fullstack или Backend?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Для фриланса с небольшими и средними клиентами — Fullstack: можно брать проект
                  целиком, ставка выше. Для работы в аутстаффинге с корпоративными клиентами —
                  глубокий Backend часто ценнее.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/fullstack-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Fullstack разработчик</p>
                <p className="text-sm text-gray-500">Ставка 2 000–7 000 ₽/час. Рассчитать персонально →</p>
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
