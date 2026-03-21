import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Android vs iOS разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Android и iOS разработчиков-фрилансеров в 2026. Junior, Middle, Senior — кто зарабатывает больше, таблица почасовых ставок, месячный доход и советы по выбору платформы.",
  keywords: [
    "android vs ios разработчик зарплата",
    "android или ios кто больше зарабатывает",
    "ставка android разработчика 2026",
    "ставка ios разработчика 2026",
    "ios разработчик фриланс",
    "android разработчик фриланс ставка",
    "какую платформу выбрать android или ios",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/android-vs-ios-razrabotchik" },
  openGraph: {
    title: "Android vs iOS разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Android и iOS разработчиков на фрилансе. Junior, Middle, Senior — цифры 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/android-vs-ios-razrabotchik`,
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
          name: "Кто больше зарабатывает — Android или iOS разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "iOS разработчики зарабатывают на 14–17% больше Android-разработчиков на Middle и Senior уровнях. Middle iOS — 3 200 ₽/час против 2 800 ₽/час у Android (+14%). Senior iOS — 5 800 ₽/час против 5 000 ₽/час (+16%). Причина: сообщество iOS-разработчиков меньше, Swift/SwiftUI сложнее для освоения, а клиенты Apple-экосистемы традиционно платят выше.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает iOS разработчик-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "iOS разработчик-фрилансер в 2026 году: Junior — 1 800 ₽/час (288 000 ₽/мес), Middle — 3 200 ₽/час (512 000 ₽/мес), Senior — 5 800 ₽/час (928 000 ₽/мес). Данные по рынку фриланса России.",
          },
        },
        {
          "@type": "Question",
          name: "Какую мобильную платформу выгоднее изучать — Android или iOS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "iOS даёт выше ставку (+14–17%), но Android — больше вакансий и заказов. На российском рынке Android-устройств больше, поэтому Android-разработчики загружены заказами стабильнее. iOS выгоднее при работе с зарубежными клиентами или продуктовыми компаниями. Для максимального дохода — React Native или Flutter позволяют покрыть обе платформы.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Android vs iOS разработчик", item: `${BASE_URL}/sravnenie/android-vs-ios-razrabotchik` },
      ],
    },
  ],
};

export default function AndroidVsIosPage() {
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
              <li className="text-gray-700">Android vs iOS разработчик</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Android vs iOS разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Мобильная разработка — один из самых высокооплачиваемых фриланс-направлений.
            <strong> iOS-разработчики зарабатывают на 14–17% больше</strong> Android-коллег.
            Middle iOS берёт 3 200 ₽/час против 2 800 ₽/час у Android. Но Android даёт
            больший поток заказов на российском рынке. Разберём по цифрам.
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
              Таблица ставок: Android vs iOS разработчик по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700">Android ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">iOS ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Android/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход iOS/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+20%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">2 800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 200 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+14%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">448 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">512 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">5 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">5 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+16%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">800 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">928 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров, рынок России. Месячный доход = ставка × 160 рабочих часов.
              Данные Q1 2026: FL.ru, Хабр Карьера, Kwork.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему iOS-разработчики берут больше
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Меньший пул специалистов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  iOS-разработчиков на рынке примерно в 1.5–2 раза меньше, чем Android-разработчиков.
                  Swift и экосистема Apple требуют более узкой специализации и Mac-устройства для
                  разработки. Дефицит квалифицированных специалистов поднимает ставки вверх.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Платёжеспособная аудитория клиентов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Компании, разрабатывающие iOS-приложения, часто ориентируются на premium-аудиторию
                  и международный рынок. Это повышает бюджеты проектов и готовность платить за качество.
                  Android-проекты нередко имеют более широкий ценовой диапазон.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Преимущество Android: больше заказов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Android занимает ~75% рынка смартфонов в России. Android-разработчики
                  стабильнее загружены заказами — спрос выше. При загрузке 80%+ годовой доход
                  Android middle может превысить iOS middle с загрузкой 60%.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать платформу для фриланса</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">Выбирайте Android, если...</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>— хотите больший поток заказов на RU-рынке</li>
                  <li>— у вас Windows/Linux (Mac не нужен)</li>
                  <li>— нравится Kotlin и экосистема Google</li>
                  <li>— планируете работать с локальными бизнесами</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте iOS, если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— хотите ставку выше на 14–17%</li>
                  <li>— есть Mac для разработки</li>
                  <li>— нравится Swift и экосистема Apple</li>
                  <li>— интересны международные и premium-клиенты</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="font-bold text-purple-900 mb-2">Лучший вариант: кроссплатформа</h3>
              <p className="text-sm text-purple-800 leading-relaxed">
                React Native или Flutter позволяют писать приложения для обеих платформ.
                Кроссплатформенные разработчики с хорошим портфолио берут 2 800–4 500 ₽/час на Middle,
                закрывая больший пул клиентов. Это компромисс между ставкой и объёмом заказов.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Кто зарабатывает больше — Android или iOS разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  iOS берёт на 14–17% больше. Middle iOS — 3 200 ₽/час (512 000 ₽/мес) против
                  2 800 ₽/час (448 000 ₽/мес) у Android. Senior iOS — 5 800 ₽/час против 5 000 ₽/час.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает Android-разработчик фрилансер в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior — 1 500 ₽/час (~240 000 ₽/мес), Middle — 2 800 ₽/час
                  (~448 000 ₽/мес), Senior — 5 000 ₽/час (~800 000 ₽/мес).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Стоит ли изучать Flutter или React Native вместо нативной разработки?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Для фриланса — да. Кроссплатформенный разработчик охватывает оба рынка,
                  больше клиентов и стабильнее загружен. Ставка чуть ниже нативного iOS,
                  но выше нативного Android. При хорошем портфолио Middle берёт 2 800–3 500 ₽/час.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Другие сравнения мобильной разработки</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/sravnenie/frontend-vs-backend"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Frontend vs Backend</p>
                <p className="text-sm text-gray-500">Backend зарабатывает на 17% больше →</p>
              </Link>
              <Link
                href="/sravnenie/fullstack-vs-backend"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Fullstack vs Backend</p>
                <p className="text-sm text-gray-500">Fullstack закрывает оба стека →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-blue-100 mb-6">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку мобильного разработчика.
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
