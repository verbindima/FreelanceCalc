import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Менеджер проектов vs Бизнес-аналитик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки менеджера проектов и бизнес-аналитика на фрилансе в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица почасовых ставок и ежемесячного дохода.",
  keywords: [
    "менеджер проектов vs бизнес аналитик зарплата",
    "pm vs ba кто больше зарабатывает",
    "сравнение ставок менеджер проектов аналитик",
    "бизнес аналитик ставка 2026",
    "менеджер проектов ставка 2026",
    "кем лучше стать pm или ba",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/menedzher-proektov-vs-biznes-analitik" },
  openGraph: {
    title: "Менеджер проектов vs Бизнес-аналитик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок PM и BA на фрилансе: Junior, Middle, Senior. Кто зарабатывает больше в 2026 году.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/menedzher-proektov-vs-biznes-analitik`,
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
          name: "Кто больше зарабатывает — Менеджер проектов или Бизнес-аналитик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Бизнес-аналитик в среднем зарабатывает на 33% больше Менеджера проектов на уровне Middle. Разница составляет 500 ₽/час: BA берёт 2 000 ₽/час против 1 500 ₽/час у PM. Это связано с глубокой технической экспертизой BA: моделирование бизнес-процессов, работа с требованиями и системный анализ стоят дороже координационной работы PM.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Менеджер проектов-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Менеджер проектов-фрилансер в 2026 году зарабатывает: Junior — 800 ₽/час (~128 000 ₽/месяц), Middle — 1 500 ₽/час (~240 000 ₽/месяц), Senior — 3 000 ₽/час (~480 000 ₽/месяц). Данные агрегированы по Хабр Карьера, FL.ru и Kwork, Q1 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Что выгоднее изучать — PM или BA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "С точки зрения ставки BA даёт преимущество в 30–40% на уровне Middle и Junior. Но PM проще для старта: управление задачами и командами доступнее, чем системный анализ и BPMN-моделирование. BA требует технического понимания IT-систем и бизнес-процессов — это серьёзный порог входа. Если цель — максимальная ставка, то BA; если быстрый старт — PM.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "PM vs BA", item: `${BASE_URL}/sravnenie/menedzher-proektov-vs-biznes-analitik` },
      ],
    },
  ],
};

export default function PMvsBaPage() {
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
              <li className="text-gray-700">PM vs Бизнес-аналитик</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Менеджер проектов vs Бизнес-аналитик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            PM или BA — частый выбор тех, кто уходит из разработки или хочет зайти в IT без глубокого
            кодинга. По данным 2026 года,{" "}
            <strong>Бизнес-аналитики зарабатывают на 33% больше</strong> Менеджеров проектов
            на уровне Middle (2 000 vs 1 500 ₽/час). Но PM легче стартовать. Разберём цифры и причины.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит её с рыночной медианой по вашей специальности.
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
              Таблица ставок: PM vs Бизнес-аналитик по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">PM ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700">BA ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход PM/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход BA/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">900 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+13%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">128 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">144 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+33%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">4 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+33%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">640 000 ₽</td>
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
              Почему BA зарабатывает больше PM
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Глубина экспертизы</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Бизнес-аналитик должен разбираться в бизнес-процессах, системном анализе,
                  BPMN-моделировании и работе с требованиями на уровне технической документации.
                  Это редкая комбинация IT-знаний и понимания бизнеса. PM управляет людьми
                  и сроками — навык более универсальный.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Тип заказчиков</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  BA чаще нанимают крупные корпорации и системные интеграторы под конкретные
                  проекты автоматизации. Бюджеты там выше. PM нанимают агентства и стартапы —
                  часто с более ограниченными ресурсами.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Дефицит на рынке</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Хороших BA на фрилансе значительно меньше, чем PM. Многие BA работают
                  в штате — фриланс для них редкость. Дефицит предложения при высоком
                  корпоративном спросе удерживает ставки BA высокими.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между PM и BA</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте PM, если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— хотите быстро войти в IT-менеджмент (6–12 месяцев)</li>
                  <li>— нравится координация команд и коммуникация</li>
                  <li>— готовы работать с Jira, Trello, Notion</li>
                  <li>— интересует agile, scrum, kanban как методология</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">Выбирайте BA, если...</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>— готовы освоить системный анализ и BPMN</li>
                  <li>— интересно выявлять и формализовывать требования</li>
                  <li>— хотите ставку на 33% выше, чем у PM</li>
                  <li>— нравится работа на стыке бизнеса и IT</li>
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
                  Кто больше зарабатывает — PM или BA?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Бизнес-аналитик зарабатывает на 33% больше Менеджера проектов на Middle и Senior уровнях.
                  На Middle разница — 500 ₽/час: BA берёт 2 000 ₽/час против 1 500 ₽/час у PM.
                  На Junior уровне разница минимальна (13%).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает PM-фрилансер в 2026 году?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior PM — 800 ₽/час (~128 000 ₽/мес), Middle — 1 500 ₽/час
                  (~240 000 ₽/мес), Senior — 3 000 ₽/час (~480 000 ₽/мес).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Можно ли перейти из PM в BA?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, переход возможен. PM уже понимает процессы и коммуникацию с командой.
                  Нужно добавить знания системного анализа, нотаций (BPMN, UML), методологий
                  сбора требований (IDEF, user stories). Обычно переход занимает 6–12 месяцев
                  обучения и практики.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/menedzher-proektov"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Менеджер проектов</p>
                <p className="text-sm text-gray-500">Ставка 800–3 000 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/biznes-analitik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Бизнес-аналитик</p>
                <p className="text-sm text-gray-500">Ставка 900–4 000 ₽/час. Рассчитать персонально →</p>
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
