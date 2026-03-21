import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Fullstack vs Мобильный разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки Fullstack и мобильного разработчика на фрилансе в 2026. Junior, Middle, Senior — кто зарабатывает больше и почему. Таблица почасовых ставок.",
  keywords: [
    "fullstack vs мобильный разработчик зарплата",
    "fullstack или мобильная разработка кто больше зарабатывает",
    "сравнение ставок fullstack мобильный",
    "мобильный разработчик ставка 2026",
    "fullstack разработчик ставка 2026",
    "кем лучше стать fullstack или мобильный разработчик",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/fullstack-vs-mobilnyj-razrabotchik" },
  openGraph: {
    title: "Fullstack vs Мобильный разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок Fullstack и мобильного разработчика на фрилансе в 2026: Junior, Middle, Senior.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/fullstack-vs-mobilnyj-razrabotchik`,
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
          name: "Кто больше зарабатывает — Fullstack или Мобильный разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Мобильный разработчик зарабатывает на 13% больше Fullstack на уровне Middle: 4 500 ₽/час против 4 000 ₽/час. На Senior разница составляет 7% (7 500 vs 7 000 ₽/час). Мобильная разработка требует узкой специализации под конкретную платформу (iOS/Android), что создаёт дефицит и поднимает ставки.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает Fullstack разработчик-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fullstack разработчик-фрилансер в 2026 году зарабатывает: Junior — 2 000 ₽/час (~320 000 ₽/месяц), Middle — 4 000 ₽/час (~640 000 ₽/месяц), Senior — 7 000 ₽/час (~1 120 000 ₽/месяц). Данные Q1 2026 по Хабр Карьера, FL.ru, Kwork.",
          },
        },
        {
          "@type": "Question",
          name: "Что выгоднее — Fullstack или мобильная разработка?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Мобильная разработка даёт ставку на 13% выше на Middle. Но Fullstack предоставляет больший выбор проектов: веб, API, SaaS, внутренние инструменты. Fullstack лучше для разнообразного фриланса; мобильная разработка — для специализации с более высокой ставкой и меньшей конкуренцией.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Fullstack vs Мобильный", item: `${BASE_URL}/sravnenie/fullstack-vs-mobilnyj-razrabotchik` },
      ],
    },
  ],
};

export default function FullstackVsMobilePage() {
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
              <li className="text-gray-700">Fullstack vs Мобильный разработчик</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Fullstack vs Мобильный разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Оба направления — высокооплачиваемые и востребованные на фрилансе. По данным 2026 года,{" "}
            <strong>мобильный разработчик зарабатывает на 13% больше</strong> Fullstack на уровне Middle
            (4 500 vs 4 000 ₽/час). Разбираем, чем объясняется разница и что выбрать.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит с рыночной медианой.
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
              Таблица ставок: Fullstack vs Мобильный разработчик
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-emerald-700">Fullstack ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">Мобильный ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход FS/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Моб./мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">2 200 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+10%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">352 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-700">4 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">4 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+13%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">640 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">720 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-emerald-700">7 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">7 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+7%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 120 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 200 000 ₽</td>
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
              Почему мобильный разработчик зарабатывает больше
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Узкая специализация</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Мобильный разработчик знает Swift/Kotlin и платформенные особенности iOS/Android
                  глубоко. Эта экспертиза не переносится на веб без переобучения — дефицит
                  поддерживает высокие ставки. Fullstack покрывает больше технологий, но менее
                  глубоко в каждой.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">App Store и Google Play</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Приложения в сторах монетизируются напрямую — у клиентов бюджеты больше,
                  потому что они видят прямую выручку. Веб-проекты чаще продают услуги и лиды,
                  бюджеты на разработку там скромнее.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Разрыв сужается с опытом</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  На Senior уровне разница падает до 7%. Опытный Fullstack с хорошим портфолио
                  может брать сложные enterprise-проекты и получать столько же, сколько мобильный
                  разработчик. Специализация на React Native или Flutter также выравнивает ставки.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Fullstack и мобильной разработкой</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-bold text-emerald-900 mb-3">Выбирайте Fullstack, если...</h3>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li>— хотите разнообразие: API, веб, SaaS, внутренние сервисы</li>
                  <li>— нравится работать с несколькими технологиями</li>
                  <li>— хотите строить продукты от А до Я в одиночку</li>
                  <li>— интересен React + Node.js + PostgreSQL стек</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Выбирайте мобильную, если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— хотите ставку на 10–13% выше на Junior/Middle</li>
                  <li>— нравится работа с нативными платформами (iOS/Android)</li>
                  <li>— интересны Swift, Kotlin или Flutter/React Native</li>
                  <li>— хотите меньше конкурентов в нише</li>
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
                  Кто больше зарабатывает — Fullstack или мобильный разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Мобильный разработчик зарабатывает на 10–13% больше на Junior и Middle уровнях.
                  На Senior разница минимальна (7%). В абсолютных цифрах: Middle мобильный —
                  4 500 ₽/час против 4 000 ₽/час у Fullstack.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Fullstack — это ниже мобильной разработки?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Нет. Fullstack — очень высокооплачиваемая специальность: Senior берёт
                  7 000 ₽/час и 1,1 млн/мес. Разрыв с мобильной разработкой небольшой.
                  Fullstack даёт больше проектов и разнообразия.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Стоит ли Fullstack осваивать React Native для мобилки?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да. React Native позволяет Fullstack разработчику создавать мобильные приложения
                  на React — это переносимый навык. Ставка React Native разработчика близка к
                  нативному мобильному, а порог входа для Fullstack значительно ниже.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/fullstack-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-emerald-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Fullstack разработчик</p>
                <p className="text-sm text-gray-500">Ставка 2 000–7 000 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/mobilnyj-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Мобильный разработчик</p>
                <p className="text-sm text-gray-500">Ставка 2 200–7 500 ₽/час. Рассчитать персонально →</p>
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
