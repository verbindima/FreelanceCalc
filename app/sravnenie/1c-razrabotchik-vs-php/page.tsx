import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "1С разработчик vs PHP разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки 1С-разработчиков и PHP-разработчиков на фрилансе в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход. 1С vs PHP: что выгоднее в России.",
  keywords: [
    "1с разработчик vs php зарплата",
    "1с программист сколько зарабатывает фрилансер",
    "ставка 1с разработчика 2026",
    "php разработчик фриланс ставка",
    "1с или php что выбрать",
    "1с разработчик фриланс",
    "сравнение 1с программист и php",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/1c-razrabotchik-vs-php" },
  openGraph: {
    title: "1С разработчик vs PHP разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок 1С и PHP разработчиков на фрилансе в России. Данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/1c-razrabotchik-vs-php`,
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
          name: "Кто больше зарабатывает — 1С разработчик или PHP разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1С-разработчики берут на 12–20% больше PHP-разработчиков на российском рынке. Middle 1С — 2 800 ₽/час против 2 500 ₽/час у PHP (+12%). Senior 1С — 4 500 ₽/час против 4 000 ₽/час (+12.5%). Причина: 1С — уникально российская специализация с высоким спросом у бизнеса и низкой конкуренцией со стороны зарубежных специалистов.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает 1С-разработчик фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1С-разработчик фрилансер в 2026: Junior — 1 500 ₽/час (240 000 ₽/мес), Middle — 2 800 ₽/час (448 000 ₽/мес), Senior — 4 500 ₽/час (720 000 ₽/мес). Специалисты по 1С:ERP и 1С:Управление торговлей могут брать выше медианы. Дополнительно: ретейнерное сопровождение 1С — 20 000–80 000 ₽/мес.",
          },
        },
        {
          "@type": "Question",
          name: "Есть ли смысл изучать 1С для фриланса в России?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. 1С — уникальная российская экосистема без иностранных аналогов. Малый и средний бизнес России использует 1С повсеместно: бухгалтерия, склад, торговля, ERP. Фрилансер-1Сник стабильно загружен доработками, интеграциями и поддержкой. Плюс: практически нет международной конкуренции, в отличие от PHP.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "1С разработчик vs PHP", item: `${BASE_URL}/sravnenie/1c-razrabotchik-vs-php` },
      ],
    },
  ],
};

export default function OneCVsPhpPage() {
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
              <li className="text-gray-700">1С разработчик vs PHP</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            1С разработчик vs PHP разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            1С-разработка — уникальная ниша, которой нет за пределами России и СНГ.
            <strong> 1С-разработчики берут на 12–20% больше PHP-специалистов</strong> и
            стабильно загружены заказами от бизнеса. Middle 1С — 2 800 ₽/час против 2 500 ₽/час у PHP.
            Разберём, почему 1С — недооценённая специальность для фриланса.
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
              Таблица ставок: 1С разработчик vs PHP по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-indigo-700">PHP ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-amber-700">1С ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход PHP/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход 1С/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-indigo-700">1 200 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-amber-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+25%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">192 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-indigo-700">2 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-amber-700">2 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+12%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">400 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">448 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-indigo-700">4 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-amber-700">4 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+12.5%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">640 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">720 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров, рынок России. Месячный доход = ставка × 160 рабочих часов.
              Данные Q1 2026: FL.ru, Хабр Карьера, биржи 1С-специалистов.
            </p>
          </section>

          {/* 1C specifics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему 1С-разработчики зарабатывают больше PHP
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Нет международной конкуренции</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  1С — платформа с уникальным российским рынком. PHP-разработчик конкурирует
                  с фрилансерами из Беларуси, Украины, Казахстана, Индии. 1С-разработчик
                  работает только с русскоязычным бизнесом — иностранный специалист не поможет
                  клиенту с российской бухгалтерией. Это снижает конкуренцию и поднимает ставки.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Стабильный B2B-спрос</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Практически каждое российское предприятие использует 1С для бухгалтерии
                  и управления. После каждого обновления законодательства (НДС, ЕГАИС, маркировка)
                  бизнес платит за доработки 1С. Это создаёт постоянный спрос на специалистов.
                  PHP-рынок более волатилен — проекты заканчиваются, клиенты меняют технологии.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Ретейнерное сопровождение</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  1С-специалисты часто ведут постоянное сопровождение клиентов:
                  ежемесячная поддержка 1С стоит 20 000–80 000 ₽/мес на компанию.
                  При 3–5 клиентах это 60 000–400 000 ₽ ежемесячного пассивного дохода
                  поверх проектной работы. PHP-фрилансеры такую модель реализуют реже.
                </p>
              </div>
            </div>
          </section>

          {/* PHP advantages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Преимущества PHP для фриланса</h2>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
              <ul className="space-y-3 text-sm text-indigo-800">
                <li className="flex gap-2">
                  <span className="font-bold">→</span>
                  <span><strong>Больше разнообразных заказов:</strong> сайты, интернет-магазины, CMS (WordPress, Bitrix). PHP-фрилансер находит заказы быстрее.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">→</span>
                  <span><strong>Международные клиенты:</strong> PHP-разработчик может работать с зарубежными заказчиками. 1С — только СНГ.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">→</span>
                  <span><strong>Laravel / Symfony:</strong> Senior PHP с современным стеком зарабатывает 3 500–4 500 ₽/час — сравнимо с 1С.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">→</span>
                  <span><strong>Более простой старт:</strong> порог входа в PHP ниже, первые заказы можно получить через 3–4 месяца обучения.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между 1С и PHP</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h3 className="font-bold text-indigo-900 mb-3">Выбирайте PHP, если...</h3>
                <ul className="space-y-2 text-sm text-indigo-800">
                  <li>— нравится веб-разработка и сайты</li>
                  <li>— хотите работать с международными клиентами</li>
                  <li>— планируете быстро начать зарабатывать</li>
                  <li>— интересен Laravel, Symfony, WordPress</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-900 mb-3">Выбирайте 1С, если...</h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li>— хотите ставку на 12–25% выше PHP</li>
                  <li>— интересна работа с бизнес-процессами</li>
                  <li>— хотите стабильные ретейнерные контракты</li>
                  <li>— готовы к узкой, но высокооплачиваемой нише</li>
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
                  Кто зарабатывает больше — 1С разработчик или PHP?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  1С берёт на 12–25% больше. Middle 1С — 2 800 ₽/час (448 000 ₽/мес) против
                  2 500 ₽/час (400 000 ₽/мес) у PHP. Плюс ретейнерное сопровождение у 1С-специалистов.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Много ли заказов для 1С-разработчика на фрилансе?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да. На FL.ru и Weblancer тысячи заказов на 1С: доработки, интеграции с маркетплейсами,
                  обновления после изменений законодательства. Стабильнее, чем многие другие ниши.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сложно ли изучить 1С с нуля?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Платформа специфична: BSL (встроенный язык 1С), конфигуратор, объектная модель.
                  До первых заказов — 4–8 месяцев. Сложнее PHP для старта, но стабильнее на дистанции.
                  Наличие сертификатов 1С повышает ставку на 15–20%.
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
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-blue-100 mb-6">
              Калькулятор учтёт вашу специализацию, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку 1С или PHP разработчика.
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
