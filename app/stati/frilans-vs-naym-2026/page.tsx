import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Фриланс vs найм: что выгоднее в 2026 году? Честное сравнение доходов",
  description:
    "Фрилансер с ставкой 2000 ₽/ч зарабатывает меньше наёмного сотрудника с зарплатой 120 000 ₽? Разбираем реальные цифры: налоги, простои, соцпакет. Калькулятор сравнения доходов.",
  keywords: [
    "фриланс или найм что выгоднее",
    "фриланс vs работа в офисе",
    "сравнение доходов фрилансер и офис",
    "стоит ли идти во фриланс",
    "фриланс или работа по найму",
    "фриланс выгоднее найма",
    "доход фрилансера vs наёмный работник",
    "фриланс против работы в офисе 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/frilans-vs-naym-2026" },
  openGraph: {
    title: "Фриланс vs найм: что выгоднее в 2026 году?",
    description:
      "Честное сравнение доходов: фрилансер 2000 ₽/ч против наёмника с зарплатой 120 000 ₽. Кто на самом деле зарабатывает больше?",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/frilans-vs-naym-2026`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/frilans-vs-naym-2026#article`,
      headline:
        "Фриланс vs найм: что выгоднее в 2026 году? Честное сравнение доходов",
      description:
        "Сравнение реальных доходов фрилансера и наёмного сотрудника с учётом налогов, простоев и соцпакета.",
      author: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
      datePublished: "2026-03-20",
      dateModified: "2026-03-20",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stati/frilans-vs-naym-2026`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/frilans-vs-naym-2026#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Что выгоднее — фриланс или работа в найме?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Зависит от специальности, загрузки и налогового режима. Фрилансер с 2000 ₽/ч и загрузкой 70% получает на руки около 115 000 ₽ — столько же, сколько наёмник с зарплатой 130 000 ₽ брутто. Но у наёмника есть оплачиваемый отпуск, больничный и пенсионные отчисления.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько должен зарабатывать фрилансер, чтобы быть в плюсе по сравнению с офисом?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Чтобы компенсировать отсутствие соцпакета (отпуск, больничный, пенсия), фрилансер должен зарабатывать примерно на 30–40% больше своего офисного коллеги. При офисной зарплате 100 000 ₽ на руки фрилансеру нужно зарабатывать от 130 000–140 000 ₽ чистыми.",
          },
        },
        {
          "@type": "Question",
          name: "Какие скрытые расходы есть у фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Налоги (4–6% самозанятый, 6%+ ИП), простои и поиск клиентов (30–40% времени), отсутствие оплачиваемого отпуска (22 дня = ~1 месячная ставка), расходы на инструменты, обучение, коворкинг. В сумме — до 45% от валового дохода.",
          },
        },
        {
          "@type": "Question",
          name: "Фрилансер платит налоги сам — это невыгодно?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятый платит 4–6% — значительно меньше, чем 13% НДФЛ наёмного работника. Однако наёмник не видит эти деньги — работодатель платит за него. Реальная разница: работодатель тратит ещё ~30% сверх зарплаты на страховые взносы. Фрилансер забирает эту дельту себе — если умеет её считать.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "FreelanceCalc",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Статьи",
          item: `${BASE_URL}/stati`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Фриланс vs найм 2026",
          item: `${BASE_URL}/stati/frilans-vs-naym-2026`,
        },
      ],
    },
  ],
};

export default function FrilansVsNaymPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              FreelanceCalc
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Главная
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/stati" className="hover:text-blue-600">
                  Статьи
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-700">Фриланс vs найм 2026</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Фриланс vs найм: что выгоднее в 2026 году?
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Фрилансер берёт 2 000 ₽/ч и думает, что зарабатывает вдвое больше
            наёмника с зарплатой 120 000 ₽. На деле разница куда меньше — а
            иногда не в пользу фрилансера. Разбираем реальные цифры.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-3">
              Посчитайте свою реальную ставку за 30 секунд
            </p>
            <p className="text-blue-700 text-sm mb-4">
              Калькулятор учитывает налоги, простои, отпуск и расходы — и
              показывает, сколько вы реально зарабатываете.
            </p>
            <Link
              href="/?utm_source=article&utm_medium=internal&utm_campaign=frilanc-vs-naym"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему сравнение фрилансера и наёмника — это ловушка
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Когда человек смотрит на часовую ставку фрилансера, он
              автоматически умножает её на 176 рабочих часов в месяц. Это
              ошибка.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Наёмный сотрудник получает деньги за{" "}
              <strong>каждый рабочий день</strong> — даже если в этот день
              провёл три часа на совещаниях. Фрилансер получает деньги только
              за <strong>оплачиваемые часы</strong>. Остальное — за его счёт.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Поиск клиентов, переговоры, брифы, правки договоров, ожидание
              предоплаты — у опытного фрилансера это занимает 30–40% рабочего
              времени. Значит из 176 часов оплачиваемых — около 105–120.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Сравнение доходов: фрилансер 2000 ₽/ч vs наёмник 120 000 ₽/мес
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Параметр
                    </th>
                    <th className="text-right p-3 border border-gray-200 font-semibold text-blue-700">
                      Фрилансер
                    </th>
                    <th className="text-right p-3 border border-gray-200 font-semibold text-green-700">
                      Наёмник
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 text-gray-700">
                      Валовый доход
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono">
                      240 000 ₽
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono">
                      138 000 ₽
                      <span className="text-xs text-gray-400 block">
                        (120к + 15% взносов)
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-3 border border-gray-200 text-gray-700">
                      Налоги
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-red-600">
                      −14 400 ₽
                      <span className="text-xs text-gray-400 block">
                        (6% самозанятый)
                      </span>
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-red-600">
                      −15 600 ₽
                      <span className="text-xs text-gray-400 block">
                        (13% НДФЛ)
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 text-gray-700">
                      Простои (30–40% времени)
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-red-600">
                      −72 000 ₽
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-gray-400">
                      —
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-3 border border-gray-200 text-gray-700">
                      Отпуск (22 дня/год)
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-red-600">
                      −14 500 ₽
                      <span className="text-xs text-gray-400 block">
                        (в месяц)
                      </span>
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-green-600">
                      оплачивается
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 text-gray-700">
                      Инструменты, расходы
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-red-600">
                      −5 000 ₽
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-green-600">
                      за счёт компании
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-3 border border-gray-200 text-gray-700">
                      Больничный
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-red-600">
                      не оплачивается
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-green-600">
                      оплачивается
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 text-gray-700">
                      Пенсионные накопления
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-red-600">
                      не начисляются
                    </td>
                    <td className="p-3 border border-gray-200 text-right font-mono text-green-600">
                      начисляются
                    </td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="p-3 border border-blue-200 text-gray-900">
                      Реально на руки
                    </td>
                    <td className="p-3 border border-blue-200 text-right font-mono text-blue-700 text-lg">
                      ~134 000 ₽
                    </td>
                    <td className="p-3 border border-blue-200 text-right font-mono text-green-700 text-lg">
                      ~104 400 ₽
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              * Расчёт для самозанятого с загрузкой 70%, 22 рабочих дня,
              ставка 2 000 ₽/ч. Данные приблизительные, зависят от реальной
              загрузки.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Когда фриланс выгоднее найма
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-800 mb-3">
                  ✅ Фриланс выигрывает, если:
                </h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Загрузка стабильно выше 70–80%</li>
                  <li>• Ставка выше рынка (+30% за уникальную экспертизу)</li>
                  <li>• Работаете как самозанятый (налог 4–6% vs 13% НДФЛ)</li>
                  <li>• Несколько постоянных клиентов одновременно</li>
                  <li>• Живёте в регионе, работаете на Москву/зарубеж</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-3">
                  ❌ Найм выгоднее, если:
                </h3>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Загрузка нестабильная, много простоев</li>
                  <li>• Оффер в компании покрывает соцпакет + ДМС</li>
                  <li>• Ставка ниже рыночной медианы</li>
                  <li>• Высокие расходы на жизнь (ипотека, дети)</li>
                  <li>• Работодатель платит за обучение и инструменты</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Скрытая стоимость найма: что теряет работодатель
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Мало кто считает{" "}
              <strong>полную стоимость сотрудника для работодателя</strong>.
              При зарплате 100 000 ₽ на руки компания тратит:
            </p>
            <div className="bg-gray-100 rounded-lg p-5 mb-4 font-mono text-sm">
              <div className="flex justify-between mb-1">
                <span>Зарплата на руки</span>
                <span>100 000 ₽</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>НДФЛ 13%</span>
                <span>+14 943 ₽</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Страховые взносы ~30%</span>
                <span>+34 483 ₽</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-300 pt-2 mt-2">
                <span>Итого для компании</span>
                <span>~149 000 ₽</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Это значит, что нанимая фрилансера за те же деньги, работодатель
              экономит ~49 000 ₽ в месяц. Именно поэтому в IT и digital всё
              больше компаний переходят на подрядчиков. А значит — спрос на
              фрилансеров будет расти.
            </p>
          </section>

          {/* Section 4: Breakeven */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Точка безубыточности: сколько нужно зарабатывать на фрилансе
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Чтобы фриланс стал{" "}
              <strong>
                эквивалентен найму с учётом всех скрытых факторов
              </strong>
              , нужно зарабатывать примерно на 35–45% больше своей офисной
              зарплаты:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-700">
                      Зарплата в офисе (на руки)
                    </th>
                    <th className="text-right p-3 border border-gray-200 font-semibold text-blue-700">
                      Минимум на фрилансе (чистыми)
                    </th>
                    <th className="text-right p-3 border border-gray-200 font-semibold text-gray-500">
                      Ставка/ч при загрузке 70%
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["60 000 ₽", "82 000 ₽", "~740 ₽/ч"],
                    ["80 000 ₽", "109 000 ₽", "~985 ₽/ч"],
                    ["100 000 ₽", "136 000 ₽", "~1 230 ₽/ч"],
                    ["120 000 ₽", "164 000 ₽", "~1 480 ₽/ч"],
                    ["150 000 ₽", "205 000 ₽", "~1 850 ₽/ч"],
                    ["200 000 ₽", "273 000 ₽", "~2 470 ₽/ч"],
                  ].map(([salary, freelance, rate]) => (
                    <tr key={salary} className="hover:bg-gray-50">
                      <td className="p-3 border border-gray-200 text-gray-700">
                        {salary}
                      </td>
                      <td className="p-3 border border-gray-200 text-right font-mono font-semibold text-blue-700">
                        {freelance}
                      </td>
                      <td className="p-3 border border-gray-200 text-right font-mono text-gray-600">
                        {rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              * Учитывает потери на простои (30%), отпуск (22 дн.), налог
              самозанятого (6%), расходы на инструменты (5 000 ₽/мес).
            </p>
          </section>

          {/* Section 5: By specialty */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ставки по специальностям: фрилансер vs рынок
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Не все специальности одинаково выгодны на фрилансе. Вот где
              разрыв максимален:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  title: "Backend-разработчик",
                  office: "150 000–250 000 ₽",
                  freelance: "2 500–5 000 ₽/ч",
                  verdict: "🟢 Фриланс выгоднее",
                  slug: "backend-razrabotchik",
                },
                {
                  title: "Frontend-разработчик",
                  office: "120 000–200 000 ₽",
                  freelance: "2 000–4 000 ₽/ч",
                  verdict: "🟢 Фриланс выгоднее",
                  slug: "frontend-razrabotchik",
                },
                {
                  title: "UX/UI дизайнер",
                  office: "80 000–150 000 ₽",
                  freelance: "1 200–2 500 ₽/ч",
                  verdict: "🟡 Паритет",
                  slug: "ux-ui-dizayner",
                },
                {
                  title: "SMM-специалист",
                  office: "50 000–100 000 ₽",
                  freelance: "700–1 500 ₽/ч",
                  verdict: "🔴 Найм часто лучше",
                  slug: "smm-specialist",
                },
                {
                  title: "Копирайтер",
                  office: "40 000–80 000 ₽",
                  freelance: "500–1 500 ₽/ч",
                  verdict: "🔴 Найм часто лучше",
                  slug: "kopirayter",
                },
                {
                  title: "Data Scientist",
                  office: "180 000–350 000 ₽",
                  freelance: "3 000–6 000 ₽/ч",
                  verdict: "🟢 Фриланс выгоднее",
                  slug: "data-scientist",
                },
              ].map((item) => (
                <div
                  key={item.slug}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="text-xs">{item.verdict}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    Офис: {item.office}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    Фриланс: {item.freelance}
                  </div>
                  <Link
                    href={`/stavka/${item.slug}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Рассчитать ставку →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Conclusion */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Итог: нет правильного ответа — есть правильные цифры
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Фриланс vs найм — это не вопрос свободы или стабильности. Это
              финансовый расчёт. И большинство фрилансеров делают его неверно:
              умножают ставку на рабочие часы и радуются большой цифре.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Реальный доход фрилансера{" "}
              <strong>на 35–50% ниже валового</strong> — после учёта простоев,
              налогов, отпуска и расходов. Это не плохо и не хорошо: просто
              надо считать честно.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Хорошая новость: если вы знаете свои реальные цифры, вы можете
              управлять ими. Поднять загрузку. Пересмотреть ставку. Выбрать
              оптимальный налоговый режим. Именно для этого создан FreelanceCalc.
            </p>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">
              Узнайте свой реальный доход на фрилансе
            </h2>
            <p className="text-blue-100 mb-6">
              Введите желаемый доход, специальность и налоговый режим —
              калькулятор покажет, какую ставку нужно поставить и как она
              соотносится с рынком.
            </p>
            <Link
              href="/?utm_source=article&utm_medium=internal&utm_campaign=frilanc-vs-naym-bottom"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Что выгоднее — фриланс или работа в найме?",
                  a: "Зависит от специальности, загрузки и налогового режима. Фрилансер с 2000 ₽/ч и загрузкой 70% получает примерно столько же, сколько наёмник с зарплатой 130 000 ₽ брутто. Но у наёмника есть оплачиваемый отпуск, больничный и пенсионные отчисления.",
                },
                {
                  q: "Сколько должен зарабатывать фрилансер, чтобы быть в плюсе?",
                  a: "Чтобы компенсировать отсутствие соцпакета, фрилансер должен зарабатывать на 35–45% больше своего офисного коллеги. При офисной зарплате 100 000 ₽ на руки — от 136 000 ₽ чистыми на фрилансе.",
                },
                {
                  q: "Какие скрытые расходы есть у фрилансера?",
                  a: "Налоги (4–6% самозанятый), простои и поиск клиентов (30–40% времени), неоплачиваемый отпуск (22 дня = ~1 месячная ставка), расходы на инструменты, обучение, коворкинг. В сумме — до 45% от валового дохода.",
                },
                {
                  q: "Стоит ли уходить с работы во фриланс?",
                  a: "Если ваша ставка на фрилансе позволяет зарабатывать на 35–45% больше текущей зарплаты при загрузке 70%+ — финансово это выгодно. Сначала проверьте расчёт на калькуляторе, потом уходите.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <summary className="p-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                    {item.q}
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Читайте также
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/stati/srednyaya-stavka-frilansera-2026"
                className="block border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="text-sm text-blue-600 mb-2">Аналитика</div>
                <div className="font-semibold text-gray-900 text-sm">
                  Средняя ставка фрилансера 2026: таблица по 22 специальностям
                </div>
              </Link>
              <Link
                href="/stati/stavka-samozanyatogo-2026"
                className="block border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="text-sm text-blue-600 mb-2">Налоги</div>
                <div className="font-semibold text-gray-900 text-sm">
                  Ставка самозанятого 2026: как считать с учётом налога
                </div>
              </Link>
              <Link
                href="/stati/kak-raschitat-stavku-frilansera"
                className="block border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="text-sm text-blue-600 mb-2">Руководство</div>
                <div className="font-semibold text-gray-900 text-sm">
                  Как рассчитать ставку фрилансера: пошаговое руководство
                </div>
              </Link>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-10">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            <p>
              <Link href="/" className="hover:text-blue-600">
                FreelanceCalc
              </Link>{" "}
              — бесплатный калькулятор ставки фрилансера
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
