import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "PHP vs Python разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки PHP и Python разработчиков-фрилансеров в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица с почасовыми ставками и ежемесячным доходом.",
  keywords: [
    "php vs python зарплата",
    "php или python кто больше зарабатывает",
    "php разработчик ставка 2026",
    "python разработчик ставка 2026",
    "сравнение php python фриланс",
    "стоит ли переходить с php на python",
    "php разработчик фриланс ставка",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/php-razrabotchik-vs-python-razrabotchik" },
  openGraph: {
    title: "PHP vs Python разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок PHP и Python разработчиков на фрилансе: Junior, Middle, Senior. Стоит ли переходить с PHP на Python в 2026?",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/php-razrabotchik-vs-python-razrabotchik`,
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
          name: "Кто больше зарабатывает — PHP или Python разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python разработчики зарабатывают на 40% больше PHP на уровне Middle (3 500 vs 2 500 ₽/час). Python открывает доступ к ML/AI-проектам с ставками 5 500–9 000 ₽/час, чего у PHP нет. PHP лидирует по количеству заказов за счёт огромной базы WordPress/Bitrix-сайтов.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли PHP-разработчику переходить на Python?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, если цель — рост ставки. Переход с PHP на Python реален за 6–9 месяцев для опытного разработчика. Python даёт доступ к Django/FastAPI-проектам (+40% к ставке) и открывает путь в ML (ещё +57–83% к ставке). PHP остаётся выгодным для тех, кто работает с корпоративными сайтами на Bitrix.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает PHP разработчик-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PHP разработчик-фрилансер в 2026 году зарабатывает: Junior — 1 200 ₽/час (192 000 ₽/месяц), Middle — 2 500 ₽/час (400 000 ₽/месяц), Senior — 4 500 ₽/час (720 000 ₽/месяц). Данные на основе агрегации Хабр Карьера, FL.ru и Kwork.",
          },
        },
        {
          "@type": "Question",
          name: "Много ли заказов на PHP на российских биржах?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PHP — один из самых популярных языков на российских фриланс-биржах. Тысячи сайтов на WordPress и Bitrix обеспечивают стабильный поток заказов. Но бюджеты меньше, чем у Python-проектов: WordPress-правки стоят 5 000–30 000 ₽, тогда как Python-бэкенд — от 50 000 ₽.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "PHP vs Python", item: `${BASE_URL}/sravnenie/php-razrabotchik-vs-python-razrabotchik` },
      ],
    },
  ],
};

export default function PhpVsPythonPage() {
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
              <li className="text-gray-700">PHP vs Python</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            PHP vs Python разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            PHP против Python — один из главных вопросов веб-разработчиков. По данным 2026 года,{" "}
            <strong>Python разработчики зарабатывают на 40% больше</strong> PHP-специалистов
            на уровне Middle (3 500 vs 2 500 ₽/час). При этом PHP даёт огромный рынок заказов
            через WordPress и Bitrix. Разберём детально.
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
              Таблица ставок: PHP vs Python по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-purple-700">PHP ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-yellow-700">Python ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход PHP/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Python/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">1 200 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">Python +50%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">192 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">2 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">Python +40%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">400 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">4 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-yellow-700">6 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">Python +44%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">720 000 ₽</td>
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
                <h3 className="font-semibold text-gray-900 mb-2">Потолок ставки у PHP</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PHP прочно ассоциируется с WordPress и Bitrix — платформами, где конкуренция
                  огромная, а бюджеты ограниченные. Senior PHP-разработчик упирается в потолок
                  4 500–5 000 ₽/час. Python-разработчик, ушедший в ML, зарабатывает
                  6 500–9 000 ₽/час без потолка.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Рынок заказов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PHP — крупнейший рынок веб-заказов в России. Миллионы сайтов на WordPress,
                  Bitrix и Laravel. Заказы есть всегда, но средний бюджет ниже. Python даёт
                  меньше заказов, но каждый стоит дороже: автоматизация, бэкенд на FastAPI,
                  data science.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Перспективы роста</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Python — один из самых быстрорастущих языков в мире. Спрос со стороны AI/ML
                  и автоматизации делает Python-разработчиков всё более востребованными.
                  PHP остаётся стабильным, но рост ставок замедляется.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между PHP и Python</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h3 className="font-bold text-purple-900 mb-3">Оставайтесь на PHP, если...</h3>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li>— уже есть клиентская база на WordPress/Bitrix</li>
                  <li>— хотите стабильный поток небольших заказов</li>
                  <li>— специализируетесь на Bitrix для корпоративных клиентов</li>
                  <li>— интересует Laravel — наиболее высокооплачиваемый PHP-фреймворк</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h3 className="font-bold text-yellow-900 mb-3">Переходите на Python, если...</h3>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li>— цель — рост ставки на 40%+ в ближайший год</li>
                  <li>— интересен ML/AI — путь к ставкам 6 500–9 000 ₽/час</li>
                  <li>— готовы к 6–9 месяцам переобучения</li>
                  <li>— хотите работать с технологическими компаниями</li>
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
                  Стоит ли переходить с PHP на Python в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, если цель — рост ставки. Переход реален за 6–9 месяцев для опытного
                  PHP-разработчика. Python даёт +40% к ставке на Middle и открывает путь в ML
                  с ставками 6 500–9 000 ₽/час. PHP остаётся выгодным при наличии клиентской
                  базы на Bitrix или WordPress.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Много ли заказов на PHP на российских биржах?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PHP — один из самых популярных языков на FL.ru и Kwork. Тысячи сайтов
                  на WordPress и Bitrix обеспечивают постоянный поток заказов. Но средний
                  бюджет ниже: WordPress-правки — 5 000–30 000 ₽, Python-бэкенд — от 50 000 ₽.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Какой PHP-фреймворк даёт максимальную ставку?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Laravel — наиболее высокооплачиваемый PHP-фреймворк. Laravel Middle-разработчик
                  зарабатывает 2 800–3 200 ₽/час, что выше медианы PHP. Bitrix-специалисты
                  также ценятся, особенно в корпоративном сегменте.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/php-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">PHP разработчик</p>
                <p className="text-sm text-gray-500">Ставка 1 200–4 500 ₽/час. Рассчитать персонально →</p>
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
              <Link href="/sravnenie/1c-razrabotchik-vs-php" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 transition-colors">
                <p className="font-semibold text-gray-900 mb-1">1С vs PHP</p>
                <p className="text-sm text-gray-500">1С берёт на 12% больше PHP в B2B →</p>
              </Link>
              <Link href="/sravnenie/golang-razrabotchik-vs-python-razrabotchik" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-cyan-300 transition-colors">
                <p className="font-semibold text-gray-900 mb-1">Golang vs Python</p>
                <p className="text-sm text-gray-500">Go зарабатывает на 29% больше Python →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-purple-100 mb-6">
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
