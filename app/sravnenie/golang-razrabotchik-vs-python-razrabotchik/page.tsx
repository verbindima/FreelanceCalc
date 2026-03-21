import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Golang vs Python разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Golang и Python разработчиков-фрилансеров в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица с почасовыми ставками и ежемесячным доходом.",
  keywords: [
    "golang vs python зарплата",
    "golang или python кто больше зарабатывает",
    "go разработчик ставка 2026",
    "python разработчик ставка 2026",
    "сравнение golang python фриланс",
    "golang разработчик фриланс",
    "python разработчик фриланс ставка",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/golang-razrabotchik-vs-python-razrabotchik" },
  openGraph: {
    title: "Golang vs Python разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Golang и Python разработчиков на фрилансе: Junior, Middle, Senior. Кто зарабатывает больше в 2026 году.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/golang-razrabotchik-vs-python-razrabotchik`,
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
          name: "Кто больше зарабатывает — Golang или Python разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Golang разработчики зарабатывают в среднем на 29% больше Python на уровне Middle (4 500 vs 3 500 ₽/час). Go — системный язык с высоким порогом входа и дефицитом специалистов, что поднимает ставки. Python даёт более широкий рынок: веб, ML/AI, автоматизация.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Golang разработчик-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Golang разработчик-фрилансер в 2026 году зарабатывает: Junior — 2 000 ₽/час (320 000 ₽/месяц), Middle — 4 500 ₽/час (720 000 ₽/месяц), Senior — 7 500 ₽/час (1 200 000 ₽/месяц). Данные на основе агрегации Хабр Карьера, FL.ru и Kwork.",
          },
        },
        {
          "@type": "Question",
          name: "Что выгоднее учить — Golang или Python?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Зависит от цели. Golang даёт более высокую ставку, но рынок уже — меньше заказов и дольше поиск клиентов. Python — огромный рынок: web (Django/FastAPI), ML, DevOps-скрипты. На Senior уровне Python обгоняет Golang за счёт ML/AI-проектов. Оптимально: знать Python как основу, Golang — как специализацию.",
          },
        },
        {
          "@type": "Question",
          name: "Есть ли заказы на Golang на российских фриланс-биржах?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Заказов на Go существенно меньше, чем на Python или PHP, но бюджеты выше. Golang-проекты — это преимущественно highload-сервисы, микросервисная архитектура, API-шлюзы. Заказчики — стартапы и технологические компании. Python — универсальный язык с заказами во всех нишах.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Golang vs Python", item: `${BASE_URL}/sravnenie/golang-razrabotchik-vs-python-razrabotchik` },
      ],
    },
  ],
};

export default function GolangVsPythonPage() {
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
              <li className="text-gray-700">Golang vs Python</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Golang vs Python разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Golang-разработчики — одни из самых высокооплачиваемых фрилансеров в IT. По данным 2026 года,{" "}
            <strong>Go-разработчики зарабатывают на 29% больше</strong> Python-специалистов
            на уровне Middle (4 500 vs 3 500 ₽/час). Но Python открывает значительно более широкий
            рынок. Разберём по уровням и нишам.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит её с рыночной медианой по вашей специальности.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>

          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Таблица ставок: Golang vs Python по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-cyan-700">Golang ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-yellow-700">Python ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Golang/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Python/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+11%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">4 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+29%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">720 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">7 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">6 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+15%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 200 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 040 000 ₽</td>
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
                <h3 className="font-semibold text-gray-900 mb-2">Дефицит Go-разработчиков</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Golang — относительно молодой язык (2012). Опытных Go-разработчиков на рынке
                  значительно меньше, чем Python-специалистов. Высокий спрос при ограниченном
                  предложении толкает ставки вверх на 29% на Middle-уровне.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Типы проектов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Golang используют для высоконагруженных систем, микросервисов и API-шлюзов —
                  заказчики с большими бюджетами. Python востребован шире: от малого бизнеса
                  (Django-сайты) до enterprise (ML-пайплайны). Golang-клиенты готовы платить больше.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Сложность входа</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Go требует понимания конкурентности, горутин и управления памятью — навыки,
                  которые формируются дольше. Python доступнее для старта, первые коммерческие
                  проекты реальны уже через 3–6 месяцев обучения. Go потребует 9–15 месяцев
                  для первых серьёзных заказов.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Python + ML = максимальная ставка</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  На Senior-уровне разрыв сужается: Python-разработчики со специализацией в ML/AI
                  зарабатывают 6 500–9 000 ₽/час — наравне или выше Go-разработчиков. ML-инженеры
                  на Python — одна из самых высокооплачиваемых специальностей на фрилансе.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Golang и Python</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
                <h3 className="font-bold text-cyan-900 mb-3">Выбирайте Golang, если...</h3>
                <ul className="space-y-2 text-sm text-cyan-800">
                  <li>— хотите максимальную ставку на Middle (+29%)</li>
                  <li>— интересна highload-разработка и микросервисы</li>
                  <li>— готовы к более длинному поиску клиентов</li>
                  <li>— уже знаете Python или другой системный язык</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h3 className="font-bold text-yellow-900 mb-3">Выбирайте Python, если...</h3>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li>— хотите быстрый старт в коммерческих проектах</li>
                  <li>— интересен ML/AI — путь к ставкам 9 000+ ₽/час</li>
                  <li>— нужен широкий рынок заказов (веб, автоматизация, data)</li>
                  <li>— комфортен более низкий порог входа</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Оптимальная стратегия: Python как основа, Go как специализация.
              Fullstack-разработчик, знающий оба языка, может рассчитывать на ставку
              Senior-уровня значительно раньше.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Кто больше зарабатывает — Golang или Python разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Golang-разработчики зарабатывают в среднем на 29% больше на Middle-уровне:
                  4 500 vs 3 500 ₽/час. На Senior разница меньше — 15% (7 500 vs 6 500 ₽/час),
                  так как Python-специалисты с ML-экспертизой выравнивают ставку.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Есть ли заказы на Golang на российских биржах?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Заказов на Go меньше, чем на Python, но бюджеты выше. Golang-проекты — это
                  highload API, микросервисы, системная разработка. Заказчики — технологические
                  компании с серьёзным бюджетом. Python охватывает все сегменты: от лендингов
                  до ML-пайплайнов.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько нужно времени, чтобы выйти на первые заказы?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python: первые коммерческие проекты — через 3–6 месяцев обучения.
                  Golang: серьёзные заказы — через 9–15 месяцев. Go требует более глубокого
                  понимания системного программирования.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/golang-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-cyan-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Golang разработчик</p>
                <p className="text-sm text-gray-500">Ставка 2 000–7 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/python-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-yellow-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Python разработчик</p>
                <p className="text-sm text-gray-500">Ставка 1 800–6 500 ₽/час. Рассчитать персонально →</p>
              </Link>
            </div>
          </section>

          {/* Related comparisons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Другие сравнения</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sravnenie/java-razrabotchik-vs-python-razrabotchik" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
                <p className="font-semibold text-gray-900 mb-1">Java vs Python</p>
                <p className="text-sm text-gray-500">Python обгоняет Java на Senior за счёт ML →</p>
              </Link>
              <Link href="/sravnenie/php-razrabotchik-vs-python-razrabotchik" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
                <p className="font-semibold text-gray-900 mb-1">PHP vs Python</p>
                <p className="text-sm text-gray-500">Python зарабатывает на 40% больше PHP →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-cyan-100 mb-6">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <a
              href="/"
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
