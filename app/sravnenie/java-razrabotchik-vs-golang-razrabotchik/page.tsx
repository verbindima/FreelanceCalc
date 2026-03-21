import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Java vs Go разработчик: кто больше зарабатывает на фрилансе в 2026",
  description:
    "Сравниваем ставки Java-разработчиков и Golang-разработчиков-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору языка.",
  keywords: [
    "java vs golang зарплата",
    "java или go разработчик кто больше зарабатывает",
    "golang разработчик ставка фриланс",
    "java разработчик ставка 2026",
    "go разработчик фриланс сколько берёт",
    "java vs go какой язык выбрать",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/java-razrabotchik-vs-golang-razrabotchik" },
  openGraph: {
    title: "Java vs Go разработчик: кто больше зарабатывает на фрилансе в 2026",
    description:
      "Сравнение почасовых ставок Java и Golang разработчиков на фрилансе. Данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/java-razrabotchik-vs-golang-razrabotchik`,
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
          name: "Кто больше зарабатывает — Java или Golang разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Golang-разработчики зарабатывают на 29–41% больше Java-разработчиков. Middle Go — 4 500 ₽/час против 3 200 ₽/час у Java (+41%). Senior Go — 7 500 ₽/час против 5 500 ₽/час (+36%). Причина: Go — современный язык для высоконагруженных систем, специалистов мало, дефицит держит ставки высокими.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Go-разработчик фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Golang-разработчик фрилансер в 2026 году: Junior — 2 200 ₽/час (352 000 ₽/мес), Middle — 4 500 ₽/час (720 000 ₽/мес), Senior — 7 500 ₽/час (1 200 000 ₽/мес). Go-специалисты часто работают с международными клиентами через Upwork, где ставки достигают 80–120 $ в час.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли Java-разработчику переходить на Golang?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Финансово оправдано: ставки Go выше на 30–40%. Переход облегчает схожесть парадигм — оба компилируемые, типизированные языки. Go проще Java по синтаксису, но требует понимания горутин, каналов и отсутствия ООП в привычном смысле. Реалистичный срок перехода при наличии Java-базы — 3–6 месяцев.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Java vs Golang разработчик",
          item: `${BASE_URL}/sravnenie/java-razrabotchik-vs-golang-razrabotchik`,
        },
      ],
    },
  ],
};

export default function JavaVsGolangPage() {
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
              <li className="text-gray-700">Java vs Golang</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Java vs Go разработчик: кто больше зарабатывает на фрилансе в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Оба языка используются в enterprise и бэкенде, но ставки расходятся.{" "}
            <strong>Go-разработчики берут на 29–41% больше Java-разработчиков.</strong>
            Middle Go — 4 500 ₽/час против 3 200 ₽/час у Java.
            Дефицит Go-специалистов держит ставки высокими. Разберём детально.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
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
              Таблица ставок: Java vs Go по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-red-700">Java ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-cyan-700">Golang ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Java/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Go/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">1 700 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">2 200 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+29%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">272 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">352 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">3 200 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">4 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+41%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">512 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">720 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">7 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+36%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 200 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров, рынок России. Месячный доход = ставка × 160 рабочих часов.
              Данные Q1 2026: Хабр Карьера, FL.ru, Telegram-каналы Go-сообщества.
            </p>
          </section>

          {/* Why Go pays more */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему Go-разработчик зарабатывает больше Java
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Дефицит специалистов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Go появился в 2009 году и быстро вырос, но Java изучают десятки лет — Java-разработчиков
                  на рынке в 8–10 раз больше. Конкуренция ниже — ставки выше. Крупные компании:
                  Яндекс, VK, Сбер — активно нанимают Go-специалистов и не могут насытить рынок.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Высоконагруженные системы</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Go создан для высоконагруженных микросервисов — именно там бизнес готов платить
                  premium. Kubernetes, Docker, Prometheus написаны на Go. Компании, использующие
                  эти технологии, ищут Go-специалистов и редко жалеют о ставке.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Международный рынок и Upwork</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Go популярен глобально: стартапы в США и Европе активно ищут Go-разработчиков
                  через Upwork. Международные ставки — 60–120 $ в час. Java тоже востребована,
                  но конкуренция значительно выше.
                </p>
              </div>
            </div>
          </section>

          {/* Java advantages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Преимущества Java-разработчика</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Огромный объём заказов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Java — один из самых распространённых языков в enterprise. Spring Boot, Spring Cloud,
                  Android (Kotlin/Java). Заказов на FL.ru, Хабр Фрилансе и других платформах в разы
                  больше. Java Middle никогда не сидит без работы.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Большая экосистема и зрелость</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Java-экосистема (Maven, Gradle, Spring, Hibernate, Kafka) зрелая и стабильная.
                  Java-фрилансер может закрывать широкий спектр задач: backend API, интеграции,
                  микросервисы, работа с legacy-кодом корпораций — что обеспечивает постоянный поток.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Java и Go</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-900 mb-3">Выбирайте Java, если...</h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>— хотите большой поток заказов сразу</li>
                  <li>— нравится Spring-экосистема и enterprise</li>
                  <li>— рассматриваете Android-разработку</li>
                  <li>— важна стабильность и зрелость языка</li>
                </ul>
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
                <h3 className="font-bold text-cyan-900 mb-3">Выбирайте Go, если...</h3>
                <ul className="space-y-2 text-sm text-cyan-800">
                  <li>— хотите ставку на 30–40% выше Java</li>
                  <li>— интересны микросервисы и DevOps-инструменты</li>
                  <li>— нацелены на международный рынок (Upwork)</li>
                  <li>— привлекает простота и скорость компиляции Go</li>
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
                  Кто зарабатывает больше — Java или Go разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Go берёт на 29–41% больше. Middle Go — 4 500 ₽/час (720 000 ₽/мес) против
                  3 200 ₽/час (512 000 ₽/мес) у Java. Дефицит Go-специалистов держит ставки высокими.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Легко ли Java-разработчику освоить Go?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Проще, чем с нуля. Java и Go — компилируемые, статически типизированные языки.
                  Главные отличия: отсутствие классического ООП в Go, горутины вместо потоков,
                  управление ошибками через error. При наличии Java-базы — 3–6 месяцев практики.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Много ли заказов на Go-разработчиков на фрилансе?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Меньше, чем на Java, но заказы более крупные. Go используют в высоконагруженных
                  проектах: стриминговые платформы, финтех, e-commerce с миллионами запросов.
                  Средний проект — 300 000–1 500 000 ₽. На Upwork конкуренция ниже, чем у Java.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Похожие сравнения разработчиков</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/sravnenie/golang-razrabotchik-vs-python-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Golang vs Python разработчик</p>
                <p className="text-sm text-gray-500">Go зарабатывает на 29% больше Python →</p>
              </Link>
              <Link
                href="/sravnenie/java-razrabotchik-vs-python-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Java vs Python разработчик</p>
                <p className="text-sm text-gray-500">Python обгоняет Java на Senior-уровне →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-cyan-100 mb-6">
              Калькулятор учтёт вашу специализацию, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку Java или Go разработчика.
            </p>
            <a
              href="/"
              className="inline-block bg-white text-cyan-700 font-bold px-8 py-3 rounded-xl hover:bg-cyan-50 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
