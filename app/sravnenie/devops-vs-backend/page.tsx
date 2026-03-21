import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "DevOps vs Backend разработчик: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки DevOps-инженеров и Backend разработчиков-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору направления.",
  keywords: [
    "devops vs backend зарплата",
    "devops или backend кто больше зарабатывает",
    "ставка devops инженера 2026",
    "devops фрилансер ставка",
    "backend разработчик или devops что выбрать",
    "сисадмин devops зарплата фриланс",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/devops-vs-backend" },
  openGraph: {
    title: "DevOps vs Backend разработчик: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок DevOps-инженеров и Backend разработчиков на фрилансе. Данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/devops-vs-backend`,
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
          name: "Кто больше зарабатывает — DevOps или Backend разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DevOps-инженеры зарабатывают на 8–10% больше Backend-разработчиков. Middle DevOps — 3 800 ₽/час против 3 500 ₽/час у Backend (+8.5%). Senior DevOps — 6 500 ₽/час против 6 000 ₽/час (+8%). DevOps критически важен для бизнеса: любой сбой CI/CD или инфраструктуры стоит компании дорого, поэтому специалистов ценят высоко.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает DevOps-инженер фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DevOps-инженер фрилансер в 2026 году: Junior — 2 000 ₽/час (320 000 ₽/мес), Middle — 3 800 ₽/час (608 000 ₽/мес), Senior — 6 500 ₽/час (1 040 000 ₽/мес). Многие DevOps также берут ретейнерные контракты на обслуживание инфраструктуры — 30 000–100 000 ₽/мес дополнительно.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли переходить из Backend в DevOps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DevOps-инженеры зарабатывают больше и востребованность растёт. Backend-знания — отличная база: понимание кода делает DevOps более ценным специалистом (DevSecOps, Platform Engineering). Переход требует освоения Kubernetes, Terraform, CI/CD (GitLab CI, GitHub Actions). Реалистичный срок — 6–12 месяцев при наличии Backend-базы.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "DevOps vs Backend", item: `${BASE_URL}/sravnenie/devops-vs-backend` },
      ],
    },
  ],
};

export default function DevopsVsBackendPage() {
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
              <li className="text-gray-700">DevOps vs Backend</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            DevOps vs Backend разработчик: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            DevOps и Backend — две самые востребованные IT-специальности на фрилансе.
            <strong> DevOps берёт на 8–10% больше</strong> Backend-разработчиков.
            Middle DevOps — 3 800 ₽/час против 3 500 ₽/час у Backend.
            Но Backend проще войти: порог ниже, заказов на FL.ru и Upwork больше.
            Разберём детально.
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
              Таблица ставок: DevOps vs Backend по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-slate-700">Backend ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-cyan-700">DevOps ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Backend/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход DevOps/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+11%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-700">3 500 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">3 800 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+8.5%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">560 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">608 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-700">6 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-cyan-700">6 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+8%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">960 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">1 040 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров, рынок России. Месячный доход = ставка × 160 рабочих часов.
              Данные Q1 2026: FL.ru, Хабр Карьера, Telegram-каналы DevOps-сообщества.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему DevOps зарабатывает больше Backend
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Критическая важность для бизнеса</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Сбой инфраструктуры стоит компании прямых убытков — простой e-commerce теряет
                  деньги каждую минуту. DevOps обеспечивает непрерывность бизнеса, поэтому
                  клиенты готовы платить premium за надёжного специалиста. Backend-ошибка
                  критична, но DevOps-ошибка останавливает весь продукт.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Ретейнерные контракты</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  DevOps-инженеры часто работают по ретейнерным контрактам на поддержку
                  инфраструктуры — 30 000–100 000 ₽/мес фиксировано. Это стабильный доход
                  поверх проектной работы. Backend-фрилансеры реже имеют такую модель.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Широкий стек = выше ценность</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Хороший DevOps владеет Kubernetes, Terraform, Ansible, мониторингом (Prometheus,
                  Grafana), облаками (Yandex Cloud, AWS). Этот стек шире, чем у большинства
                  Backend-специалистов, и требует больше времени на освоение.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между DevOps и Backend</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-3">Выбирайте Backend, если...</h3>
                <ul className="space-y-2 text-sm text-slate-800">
                  <li>— нравится писать бизнес-логику и API</li>
                  <li>— хотите много заказов на любых фриланс-платформах</li>
                  <li>— интересны Python, Go, Node.js, PHP</li>
                  <li>— хотите быстрее начать зарабатывать (меньше порог входа)</li>
                </ul>
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
                <h3 className="font-bold text-cyan-900 mb-3">Выбирайте DevOps, если...</h3>
                <ul className="space-y-2 text-sm text-cyan-800">
                  <li>— нравится инфраструктура и автоматизация</li>
                  <li>— хотите ставку на 8–10% выше Backend</li>
                  <li>— есть Backend-база (ускорит освоение)</li>
                  <li>— интересны Kubernetes, Terraform, CI/CD</li>
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
                  Кто зарабатывает больше — DevOps или Backend?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  DevOps берёт на 8–10% больше. Middle DevOps — 3 800 ₽/час (608 000 ₽/мес) против
                  3 500 ₽/час (560 000 ₽/мес) у Backend. Разница растёт при ретейнерных контрактах.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Есть ли смысл переходить из Backend в DevOps?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, если нравится инфраструктурная работа. Backend-база сильно помогает:
                  понимание кода делает DevOps-специалиста на 30–40% ценнее.
                  Срок перехода — 6–12 месяцев при наличии основы.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Реально ли работать DevOps-инженером на фрилансе?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, и рынок растёт. Малый и средний бизнес не может держать DevOps в штате,
                  поэтому нанимает фрилансеров на проекты: настройка CI/CD, миграция в облако,
                  настройка мониторинга. Средний проект — 50 000–200 000 ₽.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Похожие сравнения IT-специальностей</h2>
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
                <p className="text-sm text-gray-500">Fullstack+14% за охват всего стека →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-blue-100 mb-6">
              Калькулятор учтёт вашу специализацию, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку DevOps или Backend разработчика.
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
