import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Java vs Python разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Java и Python разработчиков-фрилансеров в 2026. Junior, Middle, Senior — почасовые ставки и ежемесячный доход. Что выгоднее учить для фриланса в России.",
  keywords: [
    "java vs python зарплата",
    "java или python кто больше зарабатывает",
    "java разработчик ставка фриланс",
    "python разработчик ставка 2026",
    "java или python для фриланса",
    "сравнение java python доход",
    "python разработчик фриланс сколько зарабатывает",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/java-razrabotchik-vs-python-razrabotchik" },
  openGraph: {
    title: "Java vs Python разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Java и Python разработчиков на фрилансе в России: Junior, Middle, Senior. Данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/java-razrabotchik-vs-python-razrabotchik`,
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
          name: "Кто больше зарабатывает — Java или Python разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "На уровне Junior и Middle Java-разработчик зарабатывает сопоставимо с Python (1 700 vs 1 500 ₽/час и 3 200 vs 3 500 ₽/час). На Senior Python вырывается вперёд — 6 500 vs 5 500 ₽/час — за счёт ML/AI-специализации. Если вы пойдёте в Machine Learning или Data Science на Python, потолок выше. Для корпоративного enterprise и Android — Java.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Java-разработчик фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Java-разработчик на фрилансе в 2026: Junior — 1 700 ₽/час (272 000 ₽/мес), Middle — 3 200 ₽/час (512 000 ₽/мес), Senior — 5 500 ₽/час (880 000 ₽/мес). Специалисты Spring Boot + микросервисы берут выше медианы. Корпоративные интеграции и legacy-банкинг — стабильный источник заказов.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Python-разработчик фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python-разработчик на фрилансе в 2026: Junior — 1 500 ₽/час (240 000 ₽/мес), Middle — 3 500 ₽/час (560 000 ₽/мес), Senior — 6 500 ₽/час (1 040 000 ₽/мес). ML/AI-инженеры на Python берут 7 000–9 000 ₽/час. Django и FastAPI веб-разработка — 2 500–5 000 ₽/час.",
          },
        },
        {
          "@type": "Question",
          name: "Что лучше учить для фриланса — Java или Python?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Для быстрого старта — Python: более простой синтаксис, больше tutorial-проектов для портфолио, DJ/FastAPI сразу дают заказы. Для долгосрочного корпоративного фриланса — Java: стабильный спрос на интеграции, банки и enterprise. Для максимального дохода в перспективе 3–5 лет — Python + ML/AI.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Java vs Python", item: `${BASE_URL}/sravnenie/java-razrabotchik-vs-python-razrabotchik` },
      ],
    },
  ],
};

export default function JavaVsPythonPage() {
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
              <li className="text-gray-700">Java vs Python</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Java vs Python разработчик: кто больше зарабатывает на фрилансе в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Java и Python — два самых популярных языка для backend-фриланса в России.{" "}
            <strong>Python обгоняет Java на Senior-уровне</strong> за счёт ML/AI-специализации
            (6 500 vs 5 500 ₽/час), но Java стабильнее в корпоративном сегменте.
            Разберём по цифрам, что выгоднее для фриланса в 2026.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/stavka/java-razrabotchik"
                className="inline-block bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition-colors text-sm"
              >
                Ставка Java разработчика →
              </Link>
              <Link
                href="/stavka/python-razrabotchik"
                className="inline-block bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Ставка Python разработчика →
              </Link>
            </div>
          </div>

          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Таблица ставок: Java vs Python по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-orange-700">Java ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">Python ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-orange-700 hidden md:table-cell">Доход Java/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700 hidden md:table-cell">Доход Python/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">1 700 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center text-orange-600 hidden md:table-cell">Java +13%</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">272 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">240 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">3 200 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center text-blue-600 hidden md:table-cell">Python +9%</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">512 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">560 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">6 500 ₽</td>
                    <td className="px-4 py-3 text-center text-blue-600 hidden md:table-cell">Python +18%</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">880 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">1 040 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-amber-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior ML/AI</td>
                    <td className="px-4 py-3 text-center text-gray-400 text-xs">—</td>
                    <td className="px-4 py-3 text-center font-bold text-blue-800">7 000–9 000 ₽</td>
                    <td className="px-4 py-3 text-center text-blue-700 font-semibold hidden md:table-cell">Только Python</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">—</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700 hidden md:table-cell">1 120–1 440 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              * Медианные ставки по данным FL.ru, Хабр Карьера, Kwork — март 2026. При загрузке 70%, 6 ч/день, 5 дней/нед, 28 дней отпуска. Включает НПД 6%.
            </p>
          </section>

          {/* Pros / cons section */}
          <section className="mb-12 grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
              <h2 className="text-xl font-bold text-orange-900 mb-4">☕ Java на фрилансе</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-orange-800 text-sm mb-1">Плюсы</p>
                  <ul className="text-sm text-orange-900 space-y-1">
                    <li>✓ Выше ставка у Junior (+13% vs Python)</li>
                    <li>✓ Корпоративный enterprise — стабильные длинные проекты</li>
                    <li>✓ Банки, страховые, госсектор — постоянные заказчики</li>
                    <li>✓ Spring Boot + микросервисы — высокий спрос</li>
                    <li>✓ Android-разработка как дополнительная ниша</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-orange-800 text-sm mb-1">Минусы</p>
                  <ul className="text-sm text-orange-900 space-y-1">
                    <li>✗ Нет ML/AI-потолка (Python берёт 9 000 ₽/ч)</li>
                    <li>✗ Тяжелее начать: больше бойлерплейта</li>
                    <li>✗ Меньше стартап-проектов на FL.ru</li>
                  </ul>
                </div>
                <Link
                  href="/stavka/java-razrabotchik"
                  className="inline-block mt-2 text-sm font-semibold text-orange-700 hover:text-orange-800 underline underline-offset-2"
                >
                  Рассчитать ставку Java разработчика →
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">🐍 Python на фрилансе</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-blue-800 text-sm mb-1">Плюсы</p>
                  <ul className="text-sm text-blue-900 space-y-1">
                    <li>✓ Высший потолок дохода через ML/AI (до 9 000 ₽/ч)</li>
                    <li>✓ Проще войти: меньше синтаксиса, быстрее первый проект</li>
                    <li>✓ Django/FastAPI — огромный рынок веб-разработки</li>
                    <li>✓ Автоматизация и скриптинг — масса небольших задач</li>
                    <li>✓ Data Science / аналитика как смежная ниша</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-blue-800 text-sm mb-1">Минусы</p>
                  <ul className="text-sm text-blue-900 space-y-1">
                    <li>✗ Junior ставка ниже Java (1 500 vs 1 700 ₽/ч)</li>
                    <li>✗ Высокая конкуренция на базовом уровне</li>
                    <li>✗ ML-специализация требует 1–2 года дополнительного обучения</li>
                  </ul>
                </div>
                <Link
                  href="/stavka/python-razrabotchik"
                  className="inline-block mt-2 text-sm font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-2"
                >
                  Рассчитать ставку Python разработчика →
                </Link>
              </div>
            </div>
          </section>

          {/* Market demand */}
          <section className="mb-12 bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Спрос на FL.ru и Kwork в 2026</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-orange-700 mb-2">☕ Java</h3>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>• Spring Boot интеграции — высокий спрос</li>
                  <li>• Корпоративные порталы и CRM</li>
                  <li>• Банковские и финтех-проекты</li>
                  <li>• Android-приложения (Java + Kotlin)</li>
                  <li>• Migrating legacy Java 8 → Java 17+</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">🐍 Python</h3>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  <li>• Django и FastAPI веб-проекты</li>
                  <li>• Парсинг и автоматизация (много небольших задач)</li>
                  <li>• Telegram-боты — стабильный рынок в России</li>
                  <li>• ML-модели для продуктовых компаний</li>
                  <li>• Data Engineering: ETL, пайплайны</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Verdict */}
          <section className="mb-12 bg-gray-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Вердикт: что выбрать для фриланса</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">Выберите Java</strong>, если хотите быстро найти
                первые заказы в корпоративном сегменте, работать со Spring Boot и получать стабильный
                доход в Enterprise. Java Junior зарабатывает на 13% больше Python Junior.
              </p>
              <p>
                <strong className="text-white">Выберите Python</strong>, если готовы инвестировать
                1–2 года в ML/AI и хотите максимальный долгосрочный доход. Senior Python+ML берёт
                7 000–9 000 ₽/час против 5 500 ₽/час у Senior Java. Также Python проще осваивается
                с нуля, что важно для смены специализации.
              </p>
              <p>
                <strong className="text-white">Компромисс:</strong> Java-разработчик может добавить
                Python для ML/аналитики — это даёт +20–30% к ставке за счёт редкой комбинации
                навыков. Особенно востребовано в финтех.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Java или Python — что лучше учить с нуля для фриланса?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python проще для старта: меньше синтаксиса, больше ресурсов, быстрее первый коммерческий проект.
                  До первого заказа на Django — 4–6 месяцев. На Java — 6–9 месяцев. Если цель — максимальный
                  доход за 5 лет, выбирайте Python с прицелом на ML/AI.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Много ли Java-заказов на российских фриланс-биржах?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  На FL.ru — тысячи заказов на Java (Spring, корпоративные интеграции). Но средний бюджет
                  выше, чем на Python: клиенты — банки и крупные компании с серьёзными задачами.
                  Python-заказов больше по количеству, но средний бюджет ниже (много автоматизации и скриптов).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Можно ли совмещать Java и Python на фрилансе?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, и это ценная комбинация: Java backend + Python для ML-задач или аналитики — редкое
                  сочетание навыков, которое позволяет брать +20–30% к ставке у финтех-клиентов.
                  Однако лучше сначала специализироваться в одном, а потом расширяться.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Другие сравнения разработчиков</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/sravnenie/frontend-vs-backend"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Frontend vs Backend</p>
                <p className="text-sm text-gray-500">Backend зарабатывает на 17% больше →</p>
              </Link>
              <Link
                href="/sravnenie/python-vs-frontend"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Python vs Frontend</p>
                <p className="text-sm text-gray-500">Python открывает путь в ML (9 000 ₽/час) →</p>
              </Link>
              <Link
                href="/sravnenie/devops-vs-backend"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">DevOps vs Backend</p>
                <p className="text-sm text-gray-500">DevOps берёт до 20% больше Backend →</p>
              </Link>
              <Link
                href="/sravnenie/1c-razrabotchik-vs-php"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">1С vs PHP разработчик</p>
                <p className="text-sm text-gray-500">Уникальная ниша: 1С берёт на 12% больше →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте свою реальную ставку за 30 секунд</h2>
            <p className="text-blue-100 mb-6">
              Введите желаемый доход, выберите налоговый режим и город — калькулятор покажет
              вашу минимальную и рыночную ставку Java или Python разработчика.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/stavka/java-razrabotchik"
                className="inline-block bg-orange-400 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-300 transition-colors"
              >
                Ставка Java разработчика →
              </Link>
              <Link
                href="/stavka/python-razrabotchik"
                className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Ставка Python разработчика →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
