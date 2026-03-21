import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "SEO специалист vs SMM специалист: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки SEO и SMM специалистов-фрилансеров в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица с почасовыми ставками и ежемесячным доходом.",
  keywords: [
    "seo vs smm зарплата",
    "seo или smm кто больше зарабатывает",
    "seo специалист ставка 2026",
    "smm специалист ставка 2026",
    "сравнение seo smm фриланс",
    "kем лучше стать seo или smm",
    "seo специалист фриланс сколько зарабатывает",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/seo-specialist-vs-smm-specialist" },
  openGraph: {
    title: "SEO специалист vs SMM специалист: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок SEO и SMM специалистов на фрилансе: Junior, Middle, Senior. Кем лучше стать в 2026 году?",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/seo-specialist-vs-smm-specialist`,
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
          name: "Кто больше зарабатывает — SEO или SMM специалист?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO-специалисты зарабатывают на 25% больше SMM на уровне Middle (1 500 vs 1 200 ₽/час). SEO даёт долгосрочный измеримый результат, что позволяет брать ретейнерные контракты с более высоким чеком. SMM компенсирует это большим количеством доступных заказов и более низким порогом входа.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает SEO-специалист-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO-специалист-фрилансер в 2026 году зарабатывает: Junior — 700 ₽/час (112 000 ₽/месяц), Middle — 1 500 ₽/час (240 000 ₽/месяц), Senior — 3 500 ₽/час (560 000 ₽/месяц). Данные на основе агрегации Хабр Карьера, FL.ru и Kwork.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли SMM-специалисту переходить в SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Переход из SMM в SEO реален за 4–6 месяцев. SEO даёт более высокую ставку (+25% на Middle) и долгосрочные контракты. Минус: результат виден через 3–6 месяцев, что усложняет первые переговоры с клиентами. SMM — более понятен заказчикам и даёт быстрый старт.",
          },
        },
        {
          "@type": "Question",
          name: "Кем легче начать работу фрилансером — SEO или SMM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SMM легче для старта: заказчики понимают ценность подписчиков и контента, результат виден сразу. SEO сложнее объяснить клиенту с нулевым бюджетом — результаты появляются через 3–6 месяцев. Зато SEO-специалисты работают на долгосрочных ретейнерах, а SMM-щики часто на разовых заказах.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "SEO vs SMM", item: `${BASE_URL}/sravnenie/seo-specialist-vs-smm-specialist` },
      ],
    },
  ],
};

export default function SeoVsSmmPage() {
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
              <li className="text-gray-700">SEO vs SMM</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            SEO специалист vs SMM специалист: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            SEO или SMM — популярный выбор для входа в digital-маркетинг. По данным 2026 года,{" "}
            <strong>SEO-специалисты зарабатывают на 25% больше</strong> SMM-специалистов
            на уровне Middle (1 500 vs 1 200 ₽/час). SMM компенсирует это низким порогом
            входа и большим потоком заказов. Разберём детально.
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
              Таблица ставок: SEO vs SMM по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700">SEO ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-pink-700">SMM ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход SEO/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход SMM/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">700 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">SEO +40%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">112 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">80 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">1 200 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">SEO +25%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">192 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">2 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">SEO +40%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">400 000 ₽</td>
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
                <h3 className="font-semibold text-gray-900 mb-2">Измеримость результата</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SEO даёт долгосрочный, измеримый результат: рост органического трафика на конкретные
                  проценты. Заказчики готовы платить ретейнер 30 000–80 000 ₽/мес за стабильный рост.
                  SMM сложнее измерить в деньгах, что ограничивает чек: большинство SMM-заказов —
                  это ведение соцсетей за 15 000–30 000 ₽/мес.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Порог входа</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SMM-специалистом можно стать за 2–3 месяца: написать первый контент-план,
                  настроить таргет, показать результат по подписчикам. SEO требует понимания
                  технической оптимизации, анализа запросов и работы с семантическим ядром —
                  это 4–8 месяцев до первых коммерческих проектов.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Конкуренция на рынке</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SMM-специалистов огромное количество — рынок пресыщен. Отсюда высокая
                  конкуренция и давление на ставки. SEO-специалистов с реальными кейсами
                  значительно меньше, что позволяет держать высокую цену.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между SEO и SMM</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">Выбирайте SEO, если...</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>— хотите более высокую ставку (+25% vs SMM)</li>
                  <li>— интересна аналитика и работа с данными</li>
                  <li>— готовы к 4–8 месяцам обучения до первых заказов</li>
                  <li>— хотите долгосрочные ретейнерные контракты</li>
                </ul>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
                <h3 className="font-bold text-pink-900 mb-3">Выбирайте SMM, если...</h3>
                <ul className="space-y-2 text-sm text-pink-800">
                  <li>— хотите быстрый старт (2–3 месяца до первых заказов)</li>
                  <li>— интересен контент, визуал, тренды</li>
                  <li>— нравится работать с брендами и сообществами</li>
                  <li>— есть понимание аудитории соцсетей</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Важно: многие успешные digital-маркетологи совмещают SEO и SMM.
              Специалист, умеющий выстраивать органический трафик и работать
              с соцсетями одновременно, зарабатывает на 30–50% больше узкого специалиста.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Кто больше зарабатывает — SEO или SMM специалист?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SEO-специалисты зарабатывают на 25–40% больше. Middle SEO — 1 500 ₽/час
                  (240 000 ₽/мес), Middle SMM — 1 200 ₽/час (192 000 ₽/мес). На Senior
                  уровне разрыв сохраняется: SEO 3 500 vs SMM 2 500 ₽/час.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Легко ли найти заказы на SEO или SMM?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SMM: много заказов, но высокая конкуренция и низкий чек (10 000–30 000 ₽/мес
                  ведение). SEO: меньше заказов, но более высокий чек (30 000–100 000 ₽/мес
                  ретейнер). SEO-специалисту с хорошими кейсами найти клиента проще.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Стоит ли SMM-специалисту добавить SEO к своим услугам?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да. Комплексный digital-маркетолог, предлагающий SEO + SMM, увеличивает
                  средний чек на 30–50%. Базовые навыки SEO (семантика, оптимизация контента)
                  реально освоить за 3–4 месяца параллельно с SMM-работой.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/seo-specialist"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">SEO специалист</p>
                <p className="text-sm text-gray-500">Ставка 700–3 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/smm-specialist"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-pink-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">SMM специалист</p>
                <p className="text-sm text-gray-500">Ставка 500–2 500 ₽/час. Рассчитать персонально →</p>
              </Link>
            </div>
          </section>

          {/* Related comparisons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Другие сравнения</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sravnenie/smm-vs-targetolog" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors">
                <p className="font-semibold text-gray-900 mb-1">SMM vs Таргетолог</p>
                <p className="text-sm text-gray-500">Таргетолог зарабатывает на 50% больше SMM →</p>
              </Link>
              <Link href="/sravnenie/kopirayter-vs-kontent-menedzher" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
                <p className="font-semibold text-gray-900 mb-1">Копирайтер vs КМ</p>
                <p className="text-sm text-gray-500">Контент-менеджер берёт чуть больше на Middle →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-green-100 mb-6">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <a
              href="/"
              className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
