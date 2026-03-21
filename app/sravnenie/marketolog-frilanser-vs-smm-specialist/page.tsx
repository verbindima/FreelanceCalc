import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Маркетолог vs SMM-специалист: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки маркетолога-фрилансера и SMM-специалиста в 2026. Маркетолог зарабатывает на 50% больше на Middle. Junior, Middle, Senior — таблица с почасовыми ставками и месячным доходом.",
  keywords: [
    "маркетолог vs smm кто больше зарабатывает",
    "маркетолог фриланс ставка 2026",
    "smm специалист ставка 2026",
    "маркетолог или smm что выгоднее",
    "маркетолог фрилансер доход",
    "чем отличается маркетолог от smm",
    "цифровой маркетолог зарплата фриланс",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/marketolog-frilanser-vs-smm-specialist" },
  openGraph: {
    title: "Маркетолог vs SMM-специалист: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок маркетолога и SMM-специалиста на фрилансе: Junior, Middle, Senior. Маркетолог зарабатывает на 50% больше на Middle-уровне.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/marketolog-frilanser-vs-smm-specialist`,
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
          name: "Кто больше зарабатывает — маркетолог или SMM-специалист?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Маркетолог-фрилансер зарабатывает на 50% больше SMM-специалиста на Middle-уровне: 1 800 ₽/час против 1 200 ₽/час. На Senior разрыв сохраняется: 3 000 против 2 500 ₽/час. Маркетолог работает со стратегией, воронками и бюджетами, что создаёт более измеримый ROI и позволяет брать дороже.",
          },
        },
        {
          "@type": "Question",
          name: "В чём разница между маркетологом и SMM-специалистом?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Маркетолог отвечает за весь маркетинговый микс: стратегия, позиционирование, воронка продаж, аналитика, рекламные каналы (SEO, PPC, email, SMM). SMM-специалист работает только с социальными сетями: контент, публикации, комьюнити, таргет. Маркетолог — шире, SMM — глубже в одном канале.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает маркетолог-фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Маркетолог-фрилансер в 2026 году: Junior — 800 ₽/час (128 000 ₽/месяц), Middle — 1 800 ₽/час (288 000 ₽/месяц), Senior — 3 000 ₽/час (480 000 ₽/месяц). Данные агрегированы по FL.ru, Kwork и Habr Freelance, Q1 2026.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Маркетолог vs SMM", item: `${BASE_URL}/sravnenie/marketolog-frilanser-vs-smm-specialist` },
      ],
    },
  ],
};

export default function MarketologVsSmmPage() {
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
              <li className="text-gray-700">Маркетолог vs SMM</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Маркетолог vs SMM-специалист: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            «Маркетолог» и «SMM-специалист» — две профессии, которые часто путают, а иногда
            объединяют в одну вакансию. По данным 2026 года,{" "}
            <strong>маркетолог зарабатывает на 50% больше SMM-специалиста</strong> на
            Middle-уровне: 1 800 ₽/час против 1 200 ₽/час. Разрыв объясняется шириной
            ответственности: маркетолог управляет всей воронкой, SMM — одним каналом.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход, уровень опыта и город — калькулятор покажет вашу ставку
              и сравнит её с рыночной медианой по специальности.
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
              Таблица ставок: Маркетолог vs SMM по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-green-700">Маркетолог ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-pink-700">SMM-специалист ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход маркетолог/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход SMM/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+60%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">128 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">80 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">1 800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">1 200 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+50%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">288 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">192 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-green-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-pink-700">2 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+20%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">400 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Данные агрегированы по FL.ru, Kwork, Habr Freelance, Q1 2026.
            </p>
          </section>

          {/* Why marketer earns more */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему маркетолог зарабатывает больше SMM-специалиста
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Ширина зоны ответственности</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Маркетолог управляет всей маркетинговой воронкой: осведомлённость, лиды, конверсия,
                  удержание. SMM-специалист отвечает только за социальные сети. Больше ответственности
                  — выше ставка. Клиенты платят за охват задач, а не только за количество постов.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Измеримый ROI маркетолога</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Маркетолог работает с метриками, которые напрямую влияют на выручку: CAC, LTV,
                  конверсия воронки, ROI каналов. Когда специалист приносит бизнесу измеримый рост
                  выручки, обосновать высокую ставку значительно проще. SMM-метрики (охват, вовлечённость)
                  сложнее конвертировать в деньги для клиента.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">На Senior-уровне разрыв сужается</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Опытный Senior SMM-специалист, который умеет строить комьюнити, управлять
                  инфлюенсерами и привязывать результаты к бизнес-метрикам, берёт 2 500 ₽/час —
                  всего на 20% меньше маркетолога. На Senior-уровне разрыв сужается, потому что
                  глубокая экспертиза в одном канале стоит сопоставимо с широкой стратегической.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между маркетологом и SMM</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">Выбирайте маркетолога, если...</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>— интересна стратегия и аналитика, а не только контент</li>
                  <li>— хотите работать с несколькими каналами одновременно</li>
                  <li>— нравится измерять ROI и влиять на продажи</li>
                  <li>— цель — ставка 1 800+ ₽/час и долгосрочные проекты</li>
                </ul>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
                <h3 className="font-bold text-pink-900 mb-3">Выбирайте SMM, если...</h3>
                <ul className="space-y-2 text-sm text-pink-800">
                  <li>— любите создавать контент и работать с аудиторией</li>
                  <li>— интересно строить комьюнити и продвигать личные бренды</li>
                  <li>— хотите быстро начать: порог входа ниже</li>
                  <li>— специализируетесь на одной нише (beauty, food, e-commerce)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Важно: многие успешные маркетологи начинали с SMM. Это разумный путь — получить
              опыт работы с аудиторией и контентом, затем расширить экспертизу до стратегии,
              платного трафика и аналитики. Переход занимает 1–2 года целенаправленного обучения.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Кто больше зарабатывает — маркетолог или SMM-специалист?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Маркетолог зарабатывает на 50% больше на Middle-уровне: 1 800 ₽/час против
                  1 200 ₽/час у SMM. На Junior разрыв ещё больше — 60%. На Senior — 20% (3 000 vs 2 500 ₽/час).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Чем маркетолог отличается от SMM-специалиста?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Маркетолог управляет всем маркетинговым миксом: стратегия, позиционирование,
                  несколько каналов (SEO, PPC, email, SMM), аналитика. SMM-специалист фокусируется
                  исключительно на социальных сетях. SMM — одна из компетенций маркетолога.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает SMM-специалист-фрилансер в 2026 году?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior SMM — 500 ₽/час (~80 000 ₽/мес), Middle — 1 200 ₽/час (~192 000 ₽/мес),
                  Senior — 2 500 ₽/час (~400 000 ₽/мес). Расчёт по 160 рабочим часам в месяц.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/marketolog-frilanser"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Маркетолог-фрилансер</p>
                <p className="text-sm text-gray-500">Ставка 800–3 000 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/smm-specialist"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-pink-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">SMM-специалист</p>
                <p className="text-sm text-gray-500">Ставка 500–2 500 ₽/час. Рассчитать персонально →</p>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="/sravnenie/smm-vs-targetolog"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors block"
              >
                <p className="font-semibold text-gray-900 mb-1">Также: SMM vs Таргетолог</p>
                <p className="text-sm text-gray-500">Кто зарабатывает больше в маркетинге →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-green-100 mb-6">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <a
              href="https://freelancecalc.ru/"
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
