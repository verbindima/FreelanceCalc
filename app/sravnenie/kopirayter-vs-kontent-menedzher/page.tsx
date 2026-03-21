import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Копирайтер vs Контент-менеджер: кто больше зарабатывает в 2026",
  description:
    "Сравниваем ставки копирайтеров и контент-менеджеров-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору специальности.",
  keywords: [
    "копирайтер vs контент менеджер зарплата",
    "копирайтер или контент менеджер кто больше зарабатывает",
    "ставка копирайтера 2026",
    "ставка контент менеджера 2026",
    "копирайтер или контент менеджер что лучше",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/kopirayter-vs-kontent-menedzher" },
  openGraph: {
    title: "Копирайтер vs Контент-менеджер: кто больше зарабатывает в 2026",
    description:
      "Сравнение почасовых ставок копирайтеров и контент-менеджеров на фрилансе. Цифры и аналитика 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/kopirayter-vs-kontent-menedzher`,
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
          name: "Кто больше зарабатывает — копирайтер или контент-менеджер?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ставки близки, но контент-менеджер в среднем зарабатывает чуть больше. Middle контент-менеджер — 900 ₽/час против 800 ₽/час у копирайтера (+13%). Senior — одинаково: 2 000 ₽/час. Однако специализированный копирайтер (SEO, Landing, продающие тексты) может зарабатывать значительно больше обычного контент-менеджера.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает копирайтер-фрилансер в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Копирайтер-фрилансер в 2026: Junior — 300 ₽/час (48 000 ₽/мес), Middle — 800 ₽/час (128 000 ₽/мес), Senior — 2 000 ₽/час (320 000 ₽/мес). Специализация (SEO, e-commerce, финтех) позволяет увеличить ставку в 2–3 раза относительно «общего» копирайтинга.",
          },
        },
        {
          "@type": "Question",
          name: "В чём разница между копирайтером и контент-менеджером?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Копирайтер создаёт тексты: статьи, продающие страницы, рекламные объявления. Контент-менеджер управляет процессом: публикации, редактура, работа с авторами, контент-план, аналитика. Контент-менеджер обычно берёт на себя больше ответственности и координации, что отчасти оправдывает более высокую ставку.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        { "@type": "ListItem", position: 3, name: "Копирайтер vs Контент-менеджер", item: `${BASE_URL}/sravnenie/kopirayter-vs-kontent-menedzher` },
      ],
    },
  ],
};

export default function KopirayterVsKontentMenedzherPage() {
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
              <li className="text-gray-700">Копирайтер vs Контент-менеджер</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Копирайтер vs Контент-менеджер: кто больше зарабатывает в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Копирайтинг и контент-менеджмент — два самых массовых направления на рынке фриланса.
            Ставки у них близки, но разница в карьерных перспективах и специализации огромная.
            <strong> Контент-менеджер на уровне Middle зарабатывает на 13% больше</strong> копирайтера,
            но специализированный копирайтер (SEO, Landing Page, e-commerce) может обойти
            обычного контент-менеджера в 2–3 раза. Всё зависит от специализации и умения продавать свои услуги.
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
              Таблица ставок: Копирайтер vs Контент-менеджер по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-amber-700">Копирайтер ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-indigo-700">Контент-менеджер ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Копир./мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход КМ/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-amber-700">300 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-indigo-700">400 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+33%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">48 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">64 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-amber-700">800 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-indigo-700">900 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">+13%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">128 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">144 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-amber-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-indigo-700">2 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">0%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">320 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров. Месячный доход = ставка × 160 рабочих часов.
              Специализация (SEO, финтех, e-commerce) может поднять ставку копирайтера до 3 000–5 000 ₽/час.
            </p>
          </section>

          {/* What drives the difference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что влияет на разницу в ставках
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Ответственность и координация</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Контент-менеджер несёт ответственность за весь контент-процесс: планирование,
                  публикации, работа с авторами, аналитика результатов. Это управленческая роль
                  с более широкой зоной ответственности, что немного поднимает ставку.
                  Копирайтер отвечает только за свои тексты.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Сила специализации для копирайтера</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Общий копирайтер зарабатывает немного. Но специализированный — совсем другая история.
                  SEO-копирайтер, автор Landing Page для IT-компаний, эксперт по текстам для e-commerce —
                  такие специалисты берут 2 000–5 000 ₽/час и выше. Специализация в копирайтинге
                  важнее стажа.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Насыщенность рынка</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Оба рынка насыщены предложением — особенно на уровне Junior. Выход: узкая
                  специализация, портфолио с результатами (рост трафика, конверсии) и работа
                  в конкретной нише. Универсальные специалисты обоих направлений конкурируют
                  по цене; нишевые — по ценности.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между Копирайтингом и Контент-менеджментом</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-900 mb-3">Выбирайте Копирайтинг, если...</h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li>— любите писать и работать со словом</li>
                  <li>— готовы специализироваться (SEO, Landing, финтех)</li>
                  <li>— предпочитаете фокус на одной задаче</li>
                  <li>— хотите «чистую» творческую работу без управления</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h3 className="font-bold text-indigo-900 mb-3">Выбирайте Контент-менеджмент, если...</h3>
                <ul className="space-y-2 text-sm text-indigo-800">
                  <li>— нравится управлять процессами и командой</li>
                  <li>— интересует аналитика и стратегия</li>
                  <li>— хотите работать с разными форматами контента</li>
                  <li>— готовы координировать авторов и публикации</li>
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
                  Кто больше зарабатывает — копирайтер или контент-менеджер?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  На Middle уровне контент-менеджер берёт на 13% больше (900 vs 800 ₽/час).
                  На Senior ставки одинаковые — 2 000 ₽/час. Однако специализированный
                  копирайтер (SEO, Landing, финтех) может зарабатывать до 5 000 ₽/час.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сколько зарабатывает копирайтер-фрилансер в 2026?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Junior — 300 ₽/час (~48 000 ₽/мес), Middle — 800 ₽/час
                  (~128 000 ₽/мес), Senior — 2 000 ₽/час (~320 000 ₽/мес).
                  Специализация может увеличить ставку в 2–3 раза.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  В чём разница между копирайтером и контент-менеджером?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Копирайтер создаёт тексты. Контент-менеджер управляет контент-процессом:
                  планирование, редактура, публикации, аналитика, работа с авторами.
                  Второй несёт больше ответственности за результат контент-стратегии в целом.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Детальные калькуляторы ставок</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stavka/kopirayter"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Копирайтер</p>
                <p className="text-sm text-gray-500">Ставка 300–2 000 ₽/час. Рассчитать персонально →</p>
              </Link>
              <Link
                href="/stavka/kontent-menedzher"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Контент-менеджер</p>
                <p className="text-sm text-gray-500">Ставка 400–2 000 ₽/час. Рассчитать персонально →</p>
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
