import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Как рассчитать ставку фрилансера: пошаговое руководство 2026",
  description:
    "Формула расчёта почасовой ставки фрилансера с учётом налогов, простоев и расходов. Пошаговая инструкция + онлайн-калькулятор для самозанятых и ИП. Реальные цифры 2026.",
  keywords: [
    "как рассчитать ставку фрилансера",
    "формула расчёта ставки фрилансера",
    "как посчитать стоимость часа фрилансера",
    "калькулятор ставки фрилансера",
    "как поставить цену на фриланс",
    "почасовая ставка фрилансера расчёт",
    "минимальная ставка фрилансера",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/kak-raschitat-stavku-frilansera" },
  openGraph: {
    title: "Как рассчитать ставку фрилансера: пошаговое руководство 2026",
    description:
      "Формула + пошаговая инструкция расчёта почасовой ставки с учётом налогов, простоев и расходов. Онлайн-калькулятор для самозанятых и ИП.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/kak-raschitat-stavku-frilansera`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/kak-raschitat-stavku-frilansera#article`,
      headline:
        "Как рассчитать ставку фрилансера: пошаговое руководство 2026",
      description:
        "Формула расчёта почасовой ставки фрилансера с учётом налогов, простоев и расходов.",
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
      datePublished: "2026-01-15",
      dateModified: "2026-03-01",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stati/kak-raschitat-stavku-frilansera`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "HowTo",
      "@id": `${BASE_URL}/stati/kak-raschitat-stavku-frilansera#howto`,
      name: "Как рассчитать почасовую ставку фрилансера",
      description:
        "Пошаговое руководство по расчёту минимальной и рыночной почасовой ставки для фрилансера в России",
      totalTime: "PT10M",
      tool: [
        {
          "@type": "HowToTool",
          name: "Калькулятор ставки фрилансера FreelanceCalc",
        },
      ],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Определите желаемый доход на руки",
          text: "Решите, сколько вы хотите получать «чистыми» каждый месяц. Это ваша база для расчёта.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Учтите налоги",
          text: "Для самозанятого добавьте 6% (от юрлиц) или 4% (от физлиц). Для ИП на УСН — 6–15% плюс страховые взносы.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Рассчитайте рабочие часы с учётом простоев",
          text: "Умножьте рабочие дни на рабочие часы в день и учтите, что 30–40% времени уходит на поиск клиентов и административные задачи.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Добавьте расходы и буфер",
          text: "Прибавьте расходы на инструменты, обучение, интернет. Добавьте 20% буфер на непредвиденные ситуации.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Сравните с рынком",
          text: "Проверьте полученную ставку с медианными данными по вашей специальности — она должна укладываться в рыночный диапазон.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/kak-raschitat-stavku-frilansera#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Как рассчитать почасовую ставку фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Формула: ставка = (желаемый доход на руки + налоги + расходы) / (рабочие часы × коэффициент загрузки). Например, при желаемом доходе 100 000 ₽, налоге самозанятого 6%, загрузке 70% и 160 рабочих часах: (100 000 / 0.94) / (160 × 0.70) ≈ 950 ₽/ч.",
          },
        },
        {
          "@type": "Question",
          name: "Что такое коэффициент загрузки у фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Коэффициент загрузки — это доля времени, которую вы фактически тратите на оплачиваемую работу. Обычно 60–70%: остальное уходит на поиск клиентов, коммуникацию, обучение и административные задачи.",
          },
        },
        {
          "@type": "Question",
          name: "Какая минимальная ставка фрилансера в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Медианная минимальная ставка начинается от 400–600 ₽/ч для начинающих специалистов. Для опытных разработчиков, дизайнеров и маркетологов — от 1 000 до 3 500 ₽/ч.",
          },
        },
        {
          "@type": "Question",
          name: "Как учесть налоги при расчёте ставки?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятый платит 4% с доходов от физлиц и 6% от юрлиц. ИП на УСН 6% платит 6% плюс фиксированные страховые взносы (~49 500 ₽ в 2026 году). Разделите желаемый чистый доход на (1 − налоговая_ставка), чтобы получить необходимый валовый доход.",
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
          name: "Как рассчитать ставку фрилансера",
          item: `${BASE_URL}/stati/kak-raschitat-stavku-frilansera`,
        },
      ],
    },
  ],
};

const steps = [
  {
    num: 1,
    title: "Определите желаемый доход «на руки»",
    content: (
      <>
        <p className="text-gray-700 mb-3">
          Начните с конкретной цифры: сколько вы хотите получать ежемесячно
          после вычета всех налогов? Это ваша{" "}
          <strong>точка отсчёта</strong>.
        </p>
        <p className="text-gray-700 mb-3">
          Не занижайте. Учтите все реальные расходы: аренда жилья, еда,
          транспорт, подписки, отпуск, «подушка безопасности» на 3–6 месяцев.
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Пример:</strong> Петя хочет 120 000 ₽ в месяц чистыми.
            Это и есть его стартовая цифра.
          </p>
        </div>
      </>
    ),
  },
  {
    num: 2,
    title: "Прибавьте налоги",
    content: (
      <>
        <p className="text-gray-700 mb-4">
          Фрилансер платит налоги с <em>валового</em> дохода, поэтому нужно
          пересчитать желаемый доход вверх:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-2 px-3 font-semibold text-gray-700 border border-gray-200">
                  Форма
                </th>
                <th className="text-center py-2 px-3 font-semibold text-gray-700 border border-gray-200">
                  Ставка
                </th>
                <th className="text-left py-2 px-3 font-semibold text-gray-700 border border-gray-200">
                  Формула пересчёта
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3 border border-gray-200">
                  Самозанятый (от физлиц)
                </td>
                <td className="py-2 px-3 border border-gray-200 text-center">
                  4%
                </td>
                <td className="py-2 px-3 border border-gray-200 font-mono text-xs">
                  доход / 0.96
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-3 border border-gray-200">
                  Самозанятый (от юрлиц)
                </td>
                <td className="py-2 px-3 border border-gray-200 text-center">
                  6%
                </td>
                <td className="py-2 px-3 border border-gray-200 font-mono text-xs">
                  доход / 0.94
                </td>
              </tr>
              <tr>
                <td className="py-2 px-3 border border-gray-200">
                  ИП УСН 6%
                </td>
                <td className="py-2 px-3 border border-gray-200 text-center">
                  6% + взносы
                </td>
                <td className="py-2 px-3 border border-gray-200 font-mono text-xs">
                  (доход + ~4 125 ₽/мес) / 0.94
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Продолжение примера:</strong> Петя — самозанятый,
            работает с компаниями. Налог 6%. Нужный валовый доход:{" "}
            <strong>120 000 / 0.94 ≈ 127 660 ₽</strong>.
          </p>
        </div>
      </>
    ),
  },
  {
    num: 3,
    title: "Прибавьте профессиональные расходы",
    content: (
      <>
        <p className="text-gray-700 mb-3">
          Фрилансер сам оплачивает всё, что штатному сотруднику даёт
          работодатель. Учтите ежемесячные расходы:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            ["💻 Софт и подписки", "Adobe CC, Figma, GitHub — 3 000–8 000 ₽/мес"],
            ["📚 Обучение", "Курсы, книги, конференции — ~2 000 ₽/мес"],
            ["🌐 Интернет и связь", "~1 500 ₽/мес"],
            ["🏠 Рабочее место", "Коворкинг или часть аренды — 0–15 000 ₽/мес"],
            ["🔧 Техника", "Амортизация ноутбука и периферии — ~2 000 ₽/мес"],
          ].map(([icon, desc]) => (
            <li key={icon} className="flex gap-2 text-sm text-gray-700">
              <span>{icon}</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>В примере:</strong> Петя тратит ~8 000 ₽/мес на
            инструменты. Итого нужно зарабатывать:{" "}
            <strong>127 660 + 8 000 = 135 660 ₽</strong> валового дохода.
          </p>
        </div>
      </>
    ),
  },
  {
    num: 4,
    title: "Рассчитайте оплачиваемые часы",
    content: (
      <>
        <p className="text-gray-700 mb-3">
          Ключевая ошибка фрилансеров — считать, что все рабочие часы
          оплачиваемые. Это не так. Часть времени уходит на:
        </p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            ["30–40%", "Поиск клиентов и переговоры"],
            ["10–15%", "Административные задачи"],
            ["5–10%", "Обучение и развитие"],
            ["5%", "Больничные, отпуск, форс-мажор"],
          ].map(([pct, label]) => (
            <div
              key={label}
              className="bg-amber-50 border border-amber-100 rounded p-3"
            >
              <div className="text-lg font-bold text-amber-700">{pct}</div>
              <div className="text-xs text-gray-600">{label}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 mb-3">
          Итого реальный коэффициент загрузки для фрилансера —{" "}
          <strong>55–70%</strong>. Для новичков ближе к 50%.
        </p>
        <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm mb-4">
          <div className="text-gray-400 mb-1">// Формула</div>
          <div>
            оплачиваемых_часов = рабочих_часов × коэффициент_загрузки
          </div>
          <div className="mt-2 text-gray-400">
            // При 8ч/день, 21 рабочем дне и загрузке 65%:
          </div>
          <div>= 8 × 21 × 0.65 = <span className="text-white font-bold">109 ч</span></div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Петя работает 8 ч/день, 21 день в месяц, загрузка 65%.</strong>{" "}
            Оплачиваемых часов: 8 × 21 × 0.65 ={" "}
            <strong>109 часов/мес</strong>.
          </p>
        </div>
      </>
    ),
  },
  {
    num: 5,
    title: "Посчитайте минимальную ставку",
    content: (
      <>
        <p className="text-gray-700 mb-4">
          Теперь делите валовый доход на оплачиваемые часы:
        </p>
        <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm mb-4">
          <div className="text-gray-400 mb-1">// Формула минимальной ставки</div>
          <div>
            ставка = (доход_на_руки + налоги + расходы) / оплачиваемых_часов
          </div>
          <div className="mt-3 text-gray-400">// Пример Пети:</div>
          <div>= 135 660 / 109 = <span className="text-white font-bold">~1 245 ₽/ч</span></div>
        </div>
        <p className="text-gray-700 mb-3">
          Это <strong>минимальная ставка</strong> — ниже неё работать
          означает получать меньше желаемого. Для рыночной ставки прибавьте{" "}
          <strong>15–30% буфер</strong> на непредвиденные простои и торг.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            <strong>Рыночная ставка Пети:</strong> 1 245 × 1.20 ≈{" "}
            <strong>1 500 ₽/ч</strong> — именно эту цифру он ставит в
            профиль на бирже.
          </p>
        </div>
      </>
    ),
  },
  {
    num: 6,
    title: "Сравните с рынком",
    content: (
      <>
        <p className="text-gray-700 mb-3">
          Полученная ставка должна быть <em>обоснованной</em> — слишком
          низкой или слишком высокой. Сравните с медианными данными по
          вашей специальности:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-2 px-3 font-semibold text-gray-700 border border-gray-200">
                  Специальность
                </th>
                <th className="text-center py-2 px-3 font-semibold text-gray-700 border border-gray-200">
                  Junior
                </th>
                <th className="text-center py-2 px-3 font-semibold text-gray-700 border border-gray-200">
                  Middle
                </th>
                <th className="text-center py-2 px-3 font-semibold text-gray-700 border border-gray-200">
                  Senior
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Frontend-разработчик", "800", "1 500", "3 000"],
                ["Backend-разработчик", "900", "1 700", "3 500"],
                ["UI/UX-дизайнер", "700", "1 300", "2 500"],
                ["Проджект-менеджер", "800", "1 400", "2 500"],
                ["Копирайтер", "400", "700", "1 400"],
                ["SMM-специалист", "500", "900", "1 800"],
              ].map(([spec, jun, mid, sen], i) => (
                <tr key={spec} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                  <td className="py-2 px-3 border border-gray-200">{spec}</td>
                  <td className="py-2 px-3 border border-gray-200 text-center">
                    {jun} ₽
                  </td>
                  <td className="py-2 px-3 border border-gray-200 text-center font-medium">
                    {mid} ₽
                  </td>
                  <td className="py-2 px-3 border border-gray-200 text-center text-green-700 font-semibold">
                    {sen} ₽
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Данные: медианные ставки российского рынка фриланса, 2026 год.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "Как рассчитать почасовую ставку фрилансера?",
    a: "Формула: ставка = (желаемый доход + налоги + расходы) / (рабочие часы × коэффициент загрузки). Например, при желаемом доходе 100 000 ₽, налоге 6%, загрузке 65% и 160 рабочих часах: (100 000 / 0.94 + 5 000) / (160 × 0.65) ≈ 1 075 ₽/ч.",
  },
  {
    q: "Что такое коэффициент загрузки у фрилансера?",
    a: "Коэффициент загрузки — доля времени, которую вы фактически тратите на оплачиваемую работу. Обычно 60–70%: остальное уходит на поиск клиентов, административные задачи и обучение. У новичков — 50%.",
  },
  {
    q: "Нужно ли добавлять буфер к минимальной ставке?",
    a: "Да. Минимальная ставка покрывает лишь ваши базовые нужды. Добавьте 15–30% буфер для переговорного пространства, непредвиденных простоев и накопления. Итоговая «рыночная ставка» обычно на 20% выше минимальной.",
  },
  {
    q: "Как часто нужно пересчитывать ставку?",
    a: "Рекомендуется пересматривать ставку раз в 6–12 месяцев или при значительных изменениях: рост расходов, смена налогового режима, повышение опыта, изменение рынка. Многие фрилансеры повышают ставку на 10–15% ежегодно.",
  },
  {
    q: "Как учесть отпуск при расчёте ставки?",
    a: "Просто уменьшите рабочие дни в году на дни отпуска. Например, при 2 неделях отпуска: 365 − 104 (выходные) − 14 (отпуск) − 14 (праздники) = 233 рабочих дня. Ваш месячный доход нужно обеспечить за 233/12 ≈ 19.4 рабочих дня, а не 21.",
  },
];

export default function HowToCalculatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-blue-200 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                FreelanceCalc
              </Link>
              {" › "}
              <Link
                href="/stati"
                className="hover:text-white transition-colors"
              >
                Статьи
              </Link>
              {" › "}
              <span>Как рассчитать ставку</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Как рассчитать ставку фрилансера: пошаговое руководство 2026
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Формула, расчёт налогов, учёт простоев — и в конце готовая
              цифра, которую можно ставить клиентам
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              <span>⏱ 10 минут на прочтение</span>
              <span>📅 Март 2026</span>
              <span>✅ Актуально для самозанятых и ИП</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Intro */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Почему большинство фрилансеров недооценивают свой труд
            </h2>
            <p className="text-gray-700 mb-3">
              По данным опросов фрилансеров 2025–2026 годов, более{" "}
              <strong>60% фрилансеров в России устанавливают ставку
              интуитивно</strong> — «посмотрел на конкурентов и поставил
              чуть ниже». В итоге они получают меньше нужного, не учитывают
              налоги и простои, и в конце месяца обнаруживают, что дохода
              не хватает.
            </p>
            <p className="text-gray-700">
              Правильный расчёт ставки — это математика, а не ощущения.
              Ниже — пошаговая инструкция, которую можно пройти за 10 минут
              и получить конкретную цифру.
            </p>
          </div>

          {/* CTA Calculator */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 mb-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">
                  Не хотите считать вручную?
                </h3>
                <p className="text-blue-100 text-sm">
                  Калькулятор сделает всё за вас: учтёт налоги, загрузку,
                  расходы — и выдаст готовую ставку за 2 минуты.
                </p>
              </div>
              <Link
                href="/"
                className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap text-center"
              >
                Открыть калькулятор →
              </Link>
            </div>
          </div>

          {/* Steps */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Шесть шагов расчёта ставки
          </h2>
          <div className="space-y-6 mb-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                </div>
                <div className="px-6 py-5">{step.content}</div>
              </div>
            ))}
          </div>

          {/* Summary formula box */}
          <div className="bg-gray-900 text-white rounded-xl p-6 mb-10">
            <h3 className="font-bold text-lg mb-4 text-green-400">
              // Итоговая формула
            </h3>
            <div className="font-mono text-sm space-y-2 text-gray-300">
              <div>
                <span className="text-blue-300">gross_income</span> ={" "}
                <span className="text-yellow-300">net_income</span> /{" "}
                (1 - <span className="text-red-300">tax_rate</span>)
              </div>
              <div>
                <span className="text-blue-300">total_needed</span> ={" "}
                <span className="text-blue-300">gross_income</span> +{" "}
                <span className="text-orange-300">expenses</span>
              </div>
              <div>
                <span className="text-blue-300">paid_hours</span> ={" "}
                <span className="text-purple-300">work_hours</span> ×{" "}
                <span className="text-green-300">utilization_rate</span>
              </div>
              <div className="pt-2 border-t border-gray-700">
                <span className="text-white font-bold">min_rate</span> ={" "}
                <span className="text-blue-300">total_needed</span> /{" "}
                <span className="text-blue-300">paid_hours</span>
              </div>
              <div>
                <span className="text-white font-bold">market_rate</span> ={" "}
                <span className="text-white font-bold">min_rate</span> × 1.20
              </div>
            </div>
          </div>

          {/* Mistakes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              5 типичных ошибок при расчёте ставки
            </h2>
            <div className="space-y-4">
              {[
                {
                  err: "Считать все рабочие часы оплачиваемыми",
                  fix: "Умножайте на коэффициент 0.60–0.70. Остальное — маркетинг и административная работа.",
                },
                {
                  err: "Не учитывать налоги",
                  fix: "Самозанятый платит 4–6%, ИП — больше. Всегда считайте от валового дохода.",
                },
                {
                  err: "Забыть про расходы на инструменты",
                  fix: "Подписки на профессиональный софт, обучение, техника — добавьте к целевому доходу.",
                },
                {
                  err: "Не закладывать отпуск и больничные",
                  fix: "Фрилансер не получает больничные. Заложите «подушку» на 20–30% от дохода.",
                },
                {
                  err: "Ориентироваться только на конкурентов",
                  fix: "Ставка конкурента — это его себестоимость. Ваша может быть выше или ниже в зависимости от расходов.",
                },
              ].map(({ err, fix }, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-red-500 text-lg flex-shrink-0">✗</span>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">
                      {err}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="text-green-600 font-medium">
                        Как правильно:{" "}
                      </span>
                      {fix}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-700 text-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">
              Рассчитайте свою ставку прямо сейчас
            </h2>
            <p className="text-blue-100 mb-6">
              Введите желаемый доход, выберите специальность и форму
              налогообложения — калькулятор мгновенно покажет вашу
              минимальную и рыночную ставку.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>

          {/* Related articles */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">
              Читайте также
            </h3>
            <div className="space-y-3">
              <Link
                href="/stati/srednyaya-stavka-frilansera-2026"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="text-2xl">📊</span>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    Средняя ставка фрилансера 2026
                  </div>
                  <div className="text-sm text-gray-500">
                    Медианные ставки по 22 специальностям
                  </div>
                </div>
              </Link>
              <Link
                href="/stati/stavka-samozanyatogo-2026"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="text-2xl">🧾</span>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    Ставка самозанятого фрилансера 2026
                  </div>
                  <div className="text-sm text-gray-500">
                    Как НПД влияет на вашу ставку
                  </div>
                </div>
              </Link>
              <Link
                href="/stavka"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    Калькуляторы по специальностям
                  </div>
                  <div className="text-sm text-gray-500">
                    Frontend, design, marketing и 20+ других профессий
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
