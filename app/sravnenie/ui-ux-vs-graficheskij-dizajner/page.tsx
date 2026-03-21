import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "UI/UX дизайнер vs Графический дизайнер: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки UI/UX и графических дизайнеров-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору специальности.",
  keywords: [
    "ui ux vs графический дизайнер зарплата",
    "ui ux дизайнер или графический дизайнер кто больше зарабатывает",
    "ставка ui ux дизайнера 2026",
    "ставка графического дизайнера 2026",
    "что лучше ui ux или графический дизайн",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/ui-ux-vs-graficheskij-dizajner" },
  openGraph: {
    title: "UI/UX дизайнер vs Графический дизайнер: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок UI/UX и графических дизайнеров на фрилансе. Цифры и аналитика 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/ui-ux-vs-graficheskij-dizajner`,
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
          name: "Кто больше зарабатывает — UI/UX дизайнер или графический дизайнер?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UI/UX дизайнеры зарабатывают значительно больше: Middle UI/UX — 2 500 ₽/час против 1 800 ₽/час у графического дизайнера (+39%). Senior UI/UX — 5 000 ₽/час против 3 500 ₽/час (+43%). Разрыв обусловлен тем, что UI/UX требует аналитических навыков, знания исследований пользователей и работы с продуктовыми командами.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает UI/UX дизайнер-фрилансер в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UI/UX дизайнер-фрилансер в 2026: Junior — 1 000 ₽/час (160 000 ₽/мес), Middle — 2 500 ₽/час (400 000 ₽/мес), Senior — 5 000 ₽/час (800 000 ₽/мес). Данные агрегированы по FL.ru, Behance и профессиональным сообществам.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли графическому дизайнеру перейти в UI/UX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, это один из самых популярных карьерных переходов в дизайне. Навыки работы в Figma, понимание типографики и композиции — хорошая база. Дополнительно нужно освоить пользовательские исследования, прототипирование и основы UX-методологий. Переход обычно занимает 3–6 месяцев активного обучения и позволяет увеличить ставку на 39–43%.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "UI/UX vs Графический дизайнер", item: `${BASE_URL}/sravnenie/ui-ux-vs-graficheskij-dizajner` },
      ],
    },
  ],
};

export default function UiUxVsGraficheskijDizajnerPage() {
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
              <li className="text-gray-700">UI/UX vs Графический дизайнер</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            UI/UX дизайнер vs Графический дизайнер: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Оба направления в дизайне востребованы, но разрыв в ставках впечатляет.
            <strong> UI/UX дизайнеры зарабатывают на 39–43% больше</strong> графических дизайнеров
            на уровне Middle и Senior. Middle UI/UX берёт 2 500 ₽/час против 1 800 ₽/час у
            графического дизайнера. Эта разница — следствие принципиально разных задач:
            UI/UX требует исследований, аналитики и работы с продуктом, а не только визуального
            мастерства. Разберём всё по цифрам.
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
              Таблица ставок: UI/UX vs Графический дизайнер
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-purple-700">UI/UX ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-pink-700">Граф. дизайн ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход UI/UX/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход граф./мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">1 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">700 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+43%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">160 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">112 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">2 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+39%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">400 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">5 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+43%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">800 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Данные агрегированы по FL.ru, Behance, Telegram-каналам дизайнеров, Q1 2026.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что влияет на разницу в ставках
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Аналитика и исследования</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UI/UX дизайнер не просто рисует — он проводит пользовательские исследования,
                  анализирует данные, строит Customer Journey Map и обосновывает решения метриками.
                  Это дополнительный набор навыков, за который платят отдельно. Графический дизайнер
                  работает преимущественно с визуальными задачами.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Работа с продуктовыми командами</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UI/UX специалист становится частью продуктовой команды, работает с разработчиками,
                  участвует в стратегических обсуждениях. Это поднимает его ценность выше, чем
                  «исполнитель визуальных задач». Заказчики платят за влияние на бизнес-метрики,
                  а не только за красивые экраны.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Инструменты и специализация</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UI/UX работает в Figma, проводит A/B тесты, использует Hotjar и аналитику.
                  Графический дизайнер — Photoshop, Illustrator, задачи для печати и брендинга.
                  Второй рынок насыщен специалистами, первый испытывает дефицит — отсюда разрыв в ставках.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между UI/UX и Графическим дизайном</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h3 className="font-bold text-purple-900 mb-3">Выбирайте UI/UX, если...</h3>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li>— интересует аналитика и психология пользователей</li>
                  <li>— хотите зарабатывать на 39–43% больше</li>
                  <li>— нравится работать в IT-продуктах и стартапах</li>
                  <li>— готовы освоить Figma, прототипирование и UX-методологии</li>
                </ul>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
                <h3 className="font-bold text-pink-900 mb-3">Выбирайте Графический дизайн, если...</h3>
                <ul className="space-y-2 text-sm text-pink-800">
                  <li>— страсть к визуальному искусству, брендингу, типографике</li>
                  <li>— интересует работа с печатью, упаковкой, иллюстрациями</li>
                  <li>— нравится работать с малым бизнесом и агентствами</li>
                  <li>— хотите широкий рынок заказов без глубокой IT-специализации</li>
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
                  Кто больше зарабатывает — UI/UX или графический дизайнер?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UI/UX дизайнеры зарабатывают на 39–43% больше на всех уровнях. Senior UI/UX —
                  5 000 ₽/час (800 000 ₽/мес) против 3 500 ₽/час (560 000 ₽/мес) у
                  графического дизайнера.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает UI/UX дизайнер-фрилансер в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior — 1 000 ₽/час (~160 000 ₽/мес), Middle — 2 500 ₽/час
                  (~400 000 ₽/мес), Senior — 5 000 ₽/час (~800 000 ₽/мес).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Можно ли графическому дизайнеру перейти в UI/UX?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, это один из самых популярных карьерных переходов. Базовые навыки работы
                  с визуальными инструментами помогают. Дополнительно нужно освоить UX-методологии,
                  прототипирование и исследования пользователей. Переход занимает 3–6 месяцев
                  и позволяет увеличить ставку на 39–43%.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/ui-ux"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">UI/UX дизайнер</p>
                <p className="text-sm text-gray-500">Ставка 1 000–5 000 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/graficheskij-dizajner"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-pink-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Графический дизайнер</p>
                <p className="text-sm text-gray-500">Ставка 700–3 500 ₽/час. Рассчитать персонально →</p>
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
