import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Продакт-менеджер vs Проджект-менеджер: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки продакт-менеджера (PM) и проджект-менеджера (PjM) на фрилансе в 2026. Разница в доходе — 133% в пользу продакта. Junior, Middle, Senior — таблица с почасовыми ставками и месячным доходом.",
  keywords: [
    "продакт менеджер vs проджект менеджер зарплата",
    "pm vs pjm кто больше зарабатывает",
    "product manager vs project manager ставка",
    "продакт или проджект фриланс",
    "pm фриланс сколько зарабатывает",
    "проджект менеджер ставка 2026",
    "продакт менеджер ставка 2026",
    "чем отличается pm от pjm",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/product-manager-vs-menedzher-proektov" },
  openGraph: {
    title: "Продакт-менеджер vs Проджект-менеджер: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок PM и PjM на фрилансе: Junior, Middle, Senior. Продакт зарабатывает на 133% больше проджекта на Middle-уровне.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/product-manager-vs-menedzher-proektov`,
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
          name: "Кто больше зарабатывает — продакт-менеджер или проджект-менеджер?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Продакт-менеджер зарабатывает на 133% больше проджект-менеджера на Middle-уровне: 3 500 ₽/час против 1 500 ₽/час. На Senior разрыв сужается до 83% (5 500 vs 3 000 ₽/час). Это объясняется тем, что продакт отвечает за бизнес-результат продукта (метрики, выручка, рост), а проджект — за координацию задач и сроков.",
          },
        },
        {
          "@type": "Question",
          name: "В чём разница между продакт-менеджером и проджект-менеджером?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Продакт-менеджер (PM) отвечает за ЧТО и ЗАЧЕМ: стратегия продукта, метрики, приоритизация фич, работа с пользователями. Проджект-менеджер (PjM) отвечает за КАК и КОГДА: план проекта, контроль сроков, управление командой и бюджетом. PM ближе к бизнесу, PjM — к операционному управлению.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает продакт-менеджер-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Продакт-менеджер-фрилансер в 2026 году зарабатывает: Junior — 2 000 ₽/час (320 000 ₽/месяц), Middle — 3 500 ₽/час (560 000 ₽/месяц), Senior — 5 500 ₽/час (880 000 ₽/месяц). Данные агрегированы по Хабр Карьера, FL.ru и Habr Freelance, Q1 2026.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Продакт vs Проджект", item: `${BASE_URL}/sravnenie/product-manager-vs-menedzher-proektov` },
      ],
    },
  ],
};

export default function ProductVsProjectPage() {
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
              <li className="text-gray-700">Продакт vs Проджект</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Продакт-менеджер vs Проджект-менеджер: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>7 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            «PM» и «PjM» — два сокращения, которые часто путают даже опытные IT-специалисты.
            По данным 2026 года,{" "}
            <strong>продакт-менеджер зарабатывает на 133% больше</strong> проджект-менеджера на Middle-уровне:
            3 500 ₽/час против 1 500 ₽/час. Разница огромная — и она объясняется не столько навыками,
            сколько ответственностью: продакт отвечает за бизнес-результат, проджект — за процесс.
            Разберём по уровням, цифрам и задачам.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит её с рыночной медианой по вашей специальности.
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
              Таблица ставок: Продакт vs Проджект по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-violet-700">Продакт-менеджер ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">Проджект-менеджер ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход PM/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход PjM/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+100%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">160 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+133%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-violet-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+83%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Данные агрегированы по Хабр Карьера, FL.ru, Habr Freelance, Q1 2026.
            </p>
          </section>

          {/* Difference explained */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему продакт зарабатывает в 2 раза больше
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Ответственность за бизнес-результат</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Продакт-менеджер напрямую влияет на выручку, активность пользователей и рост продукта.
                  Когда PM принимает решение о фиче, он отвечает за то, вырастет ли конверсия или нет.
                  Заказчики готовы платить за эту ответственность вдвое дороже, чем за координацию процессов.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Дефицит сильных продактов</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Хороших проджект-менеджеров на рынке значительно больше — управление задачами
                  освоить проще. Продакт-менеджер с реальным опытом роста метрик — редкость.
                  Дефицит предложения при высоком спросе поднимает ставку PM выше любой смежной роли.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Стратегический, а не операционный вклад</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Проджект-менеджер — операционная роль: следить за сроками, Jira-тикетами и коммуникацией.
                  Продакт — стратегическая: исследования, приоритизация, гипотезы о рынке.
                  Стратегический вклад ценится значительно выше операционного — это фундаментальный закон рынка.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между PM и PjM</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
                <h3 className="font-bold text-violet-900 mb-3">Выбирайте Продакт (PM), если...</h3>
                <ul className="space-y-2 text-sm text-violet-800">
                  <li>— интересна стратегия и рост метрик продукта</li>
                  <li>— умеете работать с данными и пользовательскими исследованиями</li>
                  <li>— готовы нести ответственность за бизнес-результат</li>
                  <li>— цель — ставка 3 500+ ₽/час и долгосрочные ретейнеры</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте Проджект (PjM), если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— нравится организация команды и процессов</li>
                  <li>— хотите быстро войти в IT-менеджмент (порог ниже)</li>
                  <li>— интересна работа с разными проектами и заказчиками</li>
                  <li>— готовы расти до Senior PjM или перейти в PM позже</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Важно: многие PjM переходят в PM через 2–3 года. Это осознанный карьерный путь
              с потенциальным удвоением ставки. Если вы уже работаете проджектом — инвестируйте
              в продуктовые навыки (user research, A/B тесты, метрики роста).
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Кто больше зарабатывает — продакт-менеджер или проджект-менеджер?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Продакт-менеджер зарабатывает на 133% больше на Middle-уровне: 3 500 ₽/час против
                  1 500 ₽/час у проджект-менеджера. На Senior разрыв сужается до 83% (5 500 vs 3 000 ₽/час).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  В чём разница между продактом и проджектом?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Продакт (PM) отвечает за продукт: что строить, зачем, как измерять успех.
                  Проджект (PjM) отвечает за проект: как организовать команду, уложиться в сроки и бюджет.
                  PM ближе к бизнесу и пользователям, PjM — к команде и операционному контролю.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Можно ли перейти из проджект-менеджера в продакт?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, и это один из самых распространённых карьерных переходов в IT. PjM-опыт даёт
                  понимание процессов, командной работы и коммуникации с заказчиком. Для перехода
                  в PM нужно добавить: user research, работу с метриками и продуктовыми гипотезами,
                  понимание бизнес-модели. Переход обычно занимает 1–2 года целенаправленного обучения.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/product-manager-frilanser"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-violet-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Продакт-менеджер</p>
                <p className="text-sm text-gray-500">Ставка 2 000–5 500 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/menedzher-proektov"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Проджект-менеджер</p>
                <p className="text-sm text-gray-500">Ставка 1 000–3 000 ₽/час. Рассчитать персонально →</p>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="/sravnenie/menedzher-proektov-vs-biznes-analitik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors block"
              >
                <p className="font-semibold text-gray-900 mb-1">Также: Проджект-менеджер vs Бизнес-аналитик</p>
                <p className="text-sm text-gray-500">Кто зарабатывает больше в IT-менеджменте →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-violet-100 mb-6">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <a
              href="https://freelancecalc-one.vercel.app/"
              className="inline-block bg-white text-violet-700 font-bold px-8 py-3 rounded-xl hover:bg-violet-50 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
