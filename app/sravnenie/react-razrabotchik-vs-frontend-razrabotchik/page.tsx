import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "React разработчик vs Frontend разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки React-разработчика и общего Frontend-разработчика на фрилансе в 2026. React даёт +17% к ставке на Middle. Junior, Middle, Senior — таблица с почасовыми ставками и месячным доходом.",
  keywords: [
    "react разработчик vs frontend зарплата",
    "react developer ставка 2026",
    "frontend разработчик ставка 2026",
    "react или frontend что выгоднее",
    "сколько зарабатывает react разработчик",
    "react vs frontend кто больше",
    "специализироваться на react стоит ли",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/react-razrabotchik-vs-frontend-razrabotchik" },
  openGraph: {
    title: "React разработчик vs Frontend разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение ставок React-специалиста и Frontend-разработчика на фрилансе: Junior, Middle, Senior. React-разработчик берёт на 17% больше на Middle.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/react-razrabotchik-vs-frontend-razrabotchik`,
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
          name: "Кто больше зарабатывает — React разработчик или Frontend разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "React-разработчик зарабатывает на 17% больше Frontend-специалиста без явной специализации на Middle-уровне: 3 500 ₽/час против 3 000 ₽/час. Специализация на конкретном фреймворке (React, Next.js) позволяет брать более сложные проекты и обосновать более высокую ставку.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли специализироваться на React для фриланса?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. React — самый востребованный JavaScript-фреймворк на российском фриланс-рынке. По данным FL.ru и Kwork 2026, 60–70% вакансий для Frontend-разработчиков требуют React. Специализация на React+TypeScript+Next.js позволяет брать +17% к ставке и закрывать проекты, недоступные «дженералистам».",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает React-разработчик-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "React-разработчик-фрилансер в 2026 году: Junior — 1 800 ₽/час (288 000 ₽/месяц), Middle — 3 500 ₽/час (560 000 ₽/месяц), Senior — 6 000 ₽/час (960 000 ₽/месяц). Данные агрегированы по Хабр Карьера, FL.ru, Kwork, Q1 2026.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "React vs Frontend", item: `${BASE_URL}/sravnenie/react-razrabotchik-vs-frontend-razrabotchik` },
      ],
    },
  ],
};

export default function ReactVsFrontendPage() {
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
              <li className="text-gray-700">React vs Frontend</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            React разработчик vs Frontend разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            React — это Frontend, но не всякий Frontend — React. Звучит как тавтология, но
            именно это разделение объясняет разницу в ставках. По данным 2026 года,{" "}
            <strong>React-разработчик зарабатывает на 17% больше</strong> «дженералиста» на
            Middle-уровне. Специализация сужает рынок — но повышает ставку. Разберём по цифрам.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит её с рыночной медианой по специализации.
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
              Таблица ставок: React vs Frontend по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-cyan-700">React-разработчик ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-blue-700">Frontend (general) ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход React/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход FE/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">1 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+20%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">240 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+17%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">6 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-blue-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+9%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">960 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Данные агрегированы по Хабр Карьера, FL.ru, Kwork, Q1 2026.
            </p>
          </section>

          {/* Why React pays more */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему React-специалист зарабатывает больше
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">60–70% вакансий требуют React</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  По данным FL.ru и Kwork 2026, большинство фронтенд-проектов написаны на React или
                  Next.js. Клиенты ищут конкретного специалиста, а не «Frontend вообще». Чёткое
                  позиционирование «React + TypeScript + Next.js» позволяет брать больше и фильтровать
                  клиентов с низкими бюджетами.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Экосистема добавляет ценность</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  React-разработчик работает с глубокой экосистемой: Redux / Zustand, React Query,
                  Next.js, Remix, Storybook, тестирование на RTL. Каждый инструмент — дополнительная
                  компетенция, которую клиент готов оплачивать отдельно. «Просто Frontend» такого
                  спектра не предлагает.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">На Senior-уровне разница сужается</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Опытный Senior Frontend без явной специализации на React часто знает его де-факто.
                  На высоком уровне разница в ставке составляет всего 9% — потому что Senior может
                  освоить нужный стек для проекта. Специализация особенно важна на Junior и Middle-уровне,
                  когда нужно выделиться среди сотен похожих кандидатов.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Стоит ли позиционировать себя как React-разработчика?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
                <h3 className="font-bold text-cyan-900 mb-3">Специализируйтесь на React, если...</h3>
                <ul className="space-y-2 text-sm text-cyan-800">
                  <li>— уже работаете с React на 90%+ проектов</li>
                  <li>— знаете экосистему: TypeScript, Next.js, React Query</li>
                  <li>— хотите повысить ставку без смены языка</li>
                  <li>— цель — SPA, веб-приложения, корпоративные дашборды</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Оставайтесь «Frontend», если...</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>— работаете с разными стеками (Vue, Angular, vanilla JS)</li>
                  <li>— хотите максимальный выбор проектов</li>
                  <li>— специализируетесь на производительности, accessibility или CSS</li>
                  <li>— вы Senior с опытом нескольких фреймворков</li>
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
                  React — это Frontend или отдельная специальность?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  React — библиотека для Frontend-разработки. Но на рынке фриланса «React-разработчик»
                  и «Frontend-разработчик» — разные позиции с разными ставками. Специализация на React
                  позволяет брать на 17% больше на Middle-уровне за счёт конкретики в портфолио и резюме.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает React-разработчик-фрилансер в 2026 году?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior React — 1 800 ₽/час (~288 000 ₽/мес), Middle — 3 500 ₽/час (~560 000 ₽/мес),
                  Senior — 6 000 ₽/час (~960 000 ₽/мес). Расчёт по 160 рабочим часам в месяц.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Стоит ли учить React в 2026 году?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да. React остаётся самым востребованным JS-фреймворком на рынке и доминирует в
                  российских IT-компаниях и на фриланс-платформах. Next.js — стандарт для SSR-приложений.
                  Связка React + TypeScript + Next.js — базовое требование для большинства фронтенд-проектов.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/react-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-cyan-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">React-разработчик</p>
                <p className="text-sm text-gray-500">Ставка 1 800–6 000 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/frontend-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Frontend-разработчик</p>
                <p className="text-sm text-gray-500">Ставка 1 500–5 500 ₽/час. Рассчитать персонально →</p>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="/sravnenie/frontend-vs-backend"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors block"
              >
                <p className="font-semibold text-gray-900 mb-1">Также: Frontend vs Backend разработчик</p>
                <p className="text-sm text-gray-500">Кто зарабатывает больше в вебе →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-cyan-100 mb-6">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <a
              href="https://freelancecalc-one.vercel.app/"
              className="inline-block bg-white text-cyan-700 font-bold px-8 py-3 rounded-xl hover:bg-cyan-50 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
