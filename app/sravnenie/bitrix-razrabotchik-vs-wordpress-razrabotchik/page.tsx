import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Bitrix разработчик vs WordPress: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Bitrix-разработчиков и WordPress-разработчиков-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход, плюсы и минусы каждой платформы.",
  keywords: [
    "bitrix разработчик зарплата",
    "wordpress разработчик ставка",
    "bitrix vs wordpress кто больше зарабатывает",
    "bitrix разработчик фриланс ставка",
    "wordpress freelancer сколько берёт",
    "битрикс разработчик зарплата 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/bitrix-razrabotchik-vs-wordpress-razrabotchik" },
  openGraph: {
    title: "Bitrix разработчик vs WordPress: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Bitrix и WordPress разработчиков на фрилансе. Данные 2026 года для российского рынка.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/bitrix-razrabotchik-vs-wordpress-razrabotchik`,
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
          name: "Кто больше зарабатывает — Bitrix или WordPress разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bitrix-разработчики зарабатывают на 60–70% больше WordPress-разработчиков. Middle Bitrix — 2 500 ₽/час против 1 500 ₽/час у WordPress (+67%). Причина: Bitrix — закрытая корпоративная платформа с высоким порогом входа, WordPress — открытая с огромным числом специалистов и жёсткой конкуренцией по цене.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Bitrix-разработчик фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bitrix-разработчик фрилансер в 2026 году: Junior — 1 200 ₽/час (192 000 ₽/мес), Middle — 2 500 ₽/час (400 000 ₽/мес), Senior — 4 500 ₽/час (720 000 ₽/мес). Специалисты по Bitrix24 (CRM, колл-трекинг, интеграции) берут в среднем на 20–30% выше ставки Bitrix-сайтов.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли переходить с WordPress на Bitrix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Финансово — выгодно: ставки Bitrix на 60–70% выше. Но Bitrix — платформа с высоким порогом входа: необходимо изучить архитектуру D7, компонентную модель, Bitrix24 REST API. Срок обучения — 3–6 месяцев плотной практики. Конкуренция ниже, заказчики — B2B (банки, ретейл, производства), средний бюджет проекта 200 000–2 000 000 ₽.",
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
          name: "Bitrix vs WordPress разработчик",
          item: `${BASE_URL}/sravnenie/bitrix-razrabotchik-vs-wordpress-razrabotchik`,
        },
      ],
    },
  ],
};

export default function BitrixVsWordPressPage() {
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
              <li className="text-gray-700">Bitrix vs WordPress</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Bitrix разработчик vs WordPress: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Оба работают с сайтами, но ставки кардинально разные.{" "}
            <strong>Bitrix-разработчик берёт на 60–70% больше</strong> WordPress-разработчика.
            Middle Bitrix — 2 500 ₽/час против 1 500 ₽/час у WordPress.
            Разберём почему — и стоит ли переходить.
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
              Таблица ставок: Bitrix vs WordPress по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-orange-700">Bitrix ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">WordPress ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Bitrix/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход WP/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">1 200 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">700 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+71%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">192 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">112 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">2 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+67%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">400 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-orange-700">4 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">2 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+61%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">720 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">448 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров, рынок России. Месячный доход = ставка × 160 рабочих часов.
              Данные Q1 2026: FL.ru, Kwork, агентства цифрового маркетинга.
            </p>
          </section>

          {/* Why Bitrix pays more */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему Bitrix-разработчик зарабатывает больше WordPress
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Высокий порог входа</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bitrix — закрытая, сложная платформа с собственной архитектурой D7, компонентной
                  моделью, ORM и интеграциями (1С, CRM, телефония). Войти сложнее — специалистов
                  меньше, конкуренции по цене нет. WordPress изучают за 2–4 недели, Bitrix — за 3–6 месяцев
                  плотной практики.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Корпоративный B2B-рынок</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Клиенты Bitrix — банки, ретейл, производства, государственные структуры. Средний бюджет
                  проекта: 200 000–2 000 000 ₽. Клиенты WordPress — малый бизнес и блогеры, бюджет
                  20 000–150 000 ₽. Разница в платёжеспособности прямо отражается на ставке.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Меньше конкуренции = выше ставка</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  По данным FL.ru, заказов на WordPress в 3–4 раза больше, но и исполнителей в 5–7 раз
                  больше. Конкуренция давит ставку вниз. В нише Bitrix каждый хороший специалист
                  нарасхват: потребность растёт (Битрикс24 занимает 40%+ рынка CRM в России).
                </p>
              </div>
            </div>
          </section>

          {/* WordPress advantages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Преимущества WordPress-разработчика
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Объём заказов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  WordPress — самая популярная CMS в мире (43% сайтов по данным W3Techs). Заказов
                  бесчисленно: сайты-визитки, интернет-магазины на WooCommerce, лендинги. Даже средний
                  специалист загружен полностью. Bitrix-фрилансер может неделями ждать подходящего заказа.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Международные клиенты и Upwork</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  WordPress популярен глобально. Специалист может работать на Upwork с зарубежными
                  клиентами по 30–80 $ в час, что выгоднее российского рынка. Bitrix — почти
                  исключительно русскоязычный рынок.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Bitrix и WordPress</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h3 className="font-bold text-orange-900 mb-3">Выбирайте Bitrix, если...</h3>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li>— хотите ставку на 60–70% выше WordPress</li>
                  <li>— нравится работа с B2B-клиентами (банки, ретейл)</li>
                  <li>— уже есть PHP-основа для ускоренного входа</li>
                  <li>— хотите меньше конкуренции по цене</li>
                  <li>— интересен Битрикс24: CRM и интеграции</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте WordPress, если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— хотите быстро стартовать (меньше порог входа)</li>
                  <li>— целитесь на зарубежный рынок (Upwork)</li>
                  <li>— нравится разнообразие заказов каждый день</li>
                  <li>— интересен WooCommerce и e-commerce</li>
                  <li>— хотите работать с малым бизнесом и стартапами</li>
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
                  Кто зарабатывает больше — Bitrix или WordPress разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bitrix берёт на 60–70% больше. Middle Bitrix — 2 500 ₽/час (400 000 ₽/мес) против
                  1 500 ₽/час (240 000 ₽/мес) у WordPress. Разница объясняется более высоким порогом
                  входа и корпоративными клиентами Bitrix.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько времени нужно, чтобы освоить Bitrix?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  При наличии PHP-базы — 3–6 месяцев плотной практики. Нужно освоить архитектуру D7,
                  инфоблоки, компоненты, Битрикс24 REST API. Официальные курсы 1С-Битрикс ускоряют
                  обучение и дают сертификат, который повышает доверие заказчиков.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Есть ли смысл изучать оба — и Bitrix, и WordPress?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, на старте это увеличит поток заказов. Но лучше выбрать одно направление и стать
                  экспертом: на рынке ценится специализация. WordPress-Bitrix-универсал берёт меньше,
                  чем чистый Bitrix Senior. Глубина выгоднее ширины.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Похожие сравнения</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/sravnenie/1c-razrabotchik-vs-php"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">1С разработчик vs PHP</p>
                <p className="text-sm text-gray-500">1С берёт на 12% больше PHP →</p>
              </Link>
              <Link
                href="/sravnenie/php-razrabotchik-vs-python-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">PHP vs Python разработчик</p>
                <p className="text-sm text-gray-500">Python зарабатывает на 40% больше PHP →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-orange-100 mb-6">
              Калькулятор учтёт вашу специализацию, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку Bitrix или WordPress разработчика.
            </p>
            <a
              href="/"
              className="inline-block bg-white text-orange-700 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
