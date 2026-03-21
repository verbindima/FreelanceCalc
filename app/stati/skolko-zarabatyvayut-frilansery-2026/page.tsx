import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";
const SLUG = "skolko-zarabatyvayut-frilansery-2026";

export const metadata: Metadata = {
  title: "Сколько реально зарабатывают фрилансеры в 2026 году: честная математика",
  description:
    "44% фрилансеров зарабатывают менее 30 000 ₽/мес. Почему так — и как попасть в топ 21%, которые получают 100 000+. Реальные цифры, расчёты, конкретный план.",
  keywords: [
    "сколько зарабатывает фрилансер",
    "сколько можно заработать на фрилансе",
    "реальный доход фрилансера 2026",
    "средний заработок фрилансера россия",
    "доход фрилансера в месяц",
    "сколько зарабатывают на фрилансе в России",
    "фриланс доход реальность",
    "сколько зарабатывают фрилансеры 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Сколько реально зарабатывают фрилансеры в 2026: честные цифры",
    description:
      "44% фрилансеров — меньше 30 000 ₽/мес. Почему так и как выбраться в топ. Честная математика с реальными данными.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/${SLUG}`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/${SLUG}#article`,
      headline:
        "Сколько реально зарабатывают фрилансеры в 2026 году: честная математика",
      description:
        "44% фрилансеров зарабатывают менее 30 000 ₽/мес. Разбираем почему — и как попасть в топ 21%.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/${SLUG}`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      breadcrumb: {
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
            name: "Сколько зарабатывают фрилансеры 2026",
            item: `${BASE_URL}/stati/${SLUG}`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько в среднем зарабатывает фрилансер в России в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Медианный доход фрилансера в России — около 60 000–80 000 ₽/мес. При этом 44% зарабатывают менее 30 000 ₽/мес, а 21% — более 100 000 ₽/мес. Разброс огромный и зависит от специальности, опыта и подхода к ценообразованию.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько реально можно заработать на фрилансе новичку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Новичок в первые 3–6 месяцев зарабатывает 15 000–40 000 ₽/мес. Это нормально: время уходит на поиск клиентов, формирование портфолио и привыкание к ритму. Через год опытный фрилансер с правильной ставкой выходит на 80 000–150 000 ₽/мес.",
          },
        },
        {
          "@type": "Question",
          name: "Почему многие фрилансеры мало зарабатывают?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Три главные причины: 1) Заниженная ставка — называют цену «на глаз», не считая реальные расходы. 2) Неучтённое нерабочее время — поиск клиентов, переписка, обучение занимают 30–40% рабочих часов. 3) Игнорирование налогов — 6% НПД не учитывается в названной цене.",
          },
        },
        {
          "@type": "Question",
          name: "Как фрилансеру зарабатывать 100 000 рублей в месяц?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При загрузке 130 оплачиваемых часов/мес нужна ставка от 800 ₽/ч (с учётом НПД 6%). Для разработчиков это junior/middle уровень. Для дизайнеров — 1–2 года опыта. Ключ: правильно рассчитать ставку, не занижать, иметь 2–3 постоянных клиента.",
          },
        },
      ],
    },
  ],
};

const INCOME_TIERS = [
  {
    pct: "44%",
    range: "до 30 000 ₽/мес",
    color: "bg-red-100 border-red-200 text-red-800",
    dot: "bg-red-400",
    why: "Заниженная ставка, нет постоянных клиентов, неучтённые простои",
  },
  {
    pct: "35%",
    range: "30 000 – 100 000 ₽/мес",
    color: "bg-yellow-100 border-yellow-200 text-yellow-800",
    dot: "bg-yellow-400",
    why: "Нормальный уровень для 1–3 лет опыта, есть постоянные заказы",
  },
  {
    pct: "21%",
    range: "от 100 000 ₽/мес",
    color: "bg-green-100 border-green-200 text-green-800",
    dot: "bg-green-400",
    why: "Правильная ставка, специализация, работа с крупными клиентами",
  },
];

const MATH_ROWS = [
  {
    label: "Хочу на руки",
    naive: "100 000 ₽",
    real: "100 000 ₽",
    highlight: false,
  },
  {
    label: "НПД (6% от дохода)",
    naive: "не считаю",
    real: "−6 383 ₽",
    highlight: false,
  },
  {
    label: "Оплачиваемых часов в месяц",
    naive: "160 ч",
    real: "120–130 ч",
    highlight: false,
  },
  {
    label: "Простои (отпуск + больничный + поиск клиентов)",
    naive: "не считаю",
    real: "−20–30%",
    highlight: false,
  },
  {
    label: "Нужная ставка",
    naive: "625 ₽/ч",
    real: "от 820 ₽/ч",
    highlight: true,
  },
];

const MISTAKES = [
  {
    num: "01",
    title: "Называют ставку «на руки»",
    text: 'Фрилансер говорит клиенту: "500 ₽/ч" — имея в виду, что хочет 500 ₽ себе. Но по закону НПД 6% платится из этой суммы. В итоге на руки приходит 470 ₽, а не 500. Умножьте на 160 часов — потеря 4 800 ₽ в месяц.',
  },
  {
    num: "02",
    title: "Считают все часы оплачиваемыми",
    text: "160 рабочих часов в месяц — это максимум при найме. На фрилансе реально оплачивается 120–130 часов: остальное уходит на поиск клиентов, переписку, выставление счётов, обучение. Это не издержки — это часть работы, и она должна быть включена в ставку.",
  },
  {
    num: "03",
    title: "Забывают про простои",
    text: "Наёмному сотруднику платят за больничный и отпуск — фрилансеру нет. 28 дней отпуска + пара больничных = минус 10–12% годового дохода. Ставка должна это компенсировать заранее, а не потом.",
  },
  {
    num: "04",
    title: "Не пересматривают ставку годами",
    text: "Инфляция в 2024–2026 годах: 7–9% в год. Ставка 100 000 ₽/мес в 2024 году = 83 000 ₽ в реальных деньгах сейчас. Без ежегодного пересмотра вы работаете всё дешевле — молча.",
  },
];

const PLAN = [
  {
    step: "1",
    title: "Рассчитайте правильную ставку",
    text: "Не на глаз — с учётом налогов, отпуска, загрузки и реальных часов. Для этого есть калькулятор.",
    cta: true,
  },
  {
    step: "2",
    title: "Сравните с рынком",
    text: "Ваша расчётная ставка — минимум. Рынок покажет, можно ли взять больше. Если рыночная медиана выше — берите рыночную.",
    cta: false,
  },
  {
    step: "3",
    title: "Найдите 2–3 постоянных клиента",
    text: "Стабильный доход на фрилансе = постоянные клиенты на 60–70% загрузки. Остальное — проекты. Это убирает непредсказуемость.",
    cta: false,
  },
  {
    step: "4",
    title: "Специализируйтесь узко",
    text: "«Разработчик» зарабатывает меньше, чем «разработчик Shopify для e-commerce». Ниша = меньше конкуренции + выше ставка.",
    cta: false,
  },
  {
    step: "5",
    title: "Пересматривайте ставку каждые 6–12 месяцев",
    text: "Поставьте напоминание. Рынок растёт — ваш доход должен расти вместе с ним, а не отставать.",
    cta: false,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              FreelanceCalc
            </Link>
            <span>›</span>
            <Link href="/stati" className="hover:text-blue-600 transition-colors">
              Статьи
            </Link>
            <span>›</span>
            <span className="text-gray-700">Сколько зарабатывают фрилансеры</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              Рынок
            </span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-500 text-sm">8 мин чтения</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Сколько реально зарабатывают фрилансеры в 2026 году: честная математика
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            44% фрилансеров в России зарабатывают менее 30 000 ₽ в месяц — при рекламных
            обещаниях про «100к из дома». Разбираем, почему так, и что конкретно делают
            те 21%, которые зарабатывают 100 000 ₽+.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Income Distribution */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Реальное распределение доходов
          </h2>
          <p className="text-gray-600 mb-6">
            Данные по российскому рынку фриланса 2025–2026. Не рекламная брошюра — реальная картина:
          </p>

          <div className="space-y-3">
            {INCOME_TIERS.map((tier) => (
              <div
                key={tier.range}
                className={`rounded-xl border p-4 flex items-start gap-4 ${tier.color}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${tier.dot}`}>
                    {tier.pct}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-base">{tier.range}</div>
                  <div className="text-sm mt-0.5 opacity-80">{tier.why}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Источники: EasyStaff, LiveJournal Survey 2026, kadrof.ru — агрегация данных по 3000+ фрилансерам.
          </p>
        </section>

        {/* The Math Problem */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Почему большинство считает неправильно
          </h2>
          <p className="text-gray-600 mb-6">
            Сравните два подхода к расчёту ставки при желаемом доходе 100 000 ₽/мес:
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-700">Параметр</th>
                  <th className="text-center p-3 font-semibold text-red-600">Наивный расчёт</th>
                  <th className="text-center p-3 font-semibold text-green-600">Реальный расчёт</th>
                </tr>
              </thead>
              <tbody>
                {MATH_ROWS.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 last:border-0 ${row.highlight ? "bg-blue-50" : ""}`}
                  >
                    <td className="p-3 text-gray-700">{row.label}</td>
                    <td className={`p-3 text-center ${row.highlight ? "font-bold text-red-600" : "text-gray-500"}`}>
                      {row.naive}
                    </td>
                    <td className={`p-3 text-center ${row.highlight ? "font-bold text-green-700" : "text-gray-600"}`}>
                      {row.real}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 mt-4 text-sm">
            Разница в 195 ₽/ч — это 25 400 ₽ в месяц, которые фрилансер теряет, считая «на глаз».
            При 12 месяцах — <strong>304 800 ₽ в год</strong>. Молча, без злого умысла, просто из-за неправильной формулы.
          </p>
        </section>

        {/* Calculator CTA */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0">🧮</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Рассчитайте свою реальную ставку за 2 минуты
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Калькулятор учитывает ваш налоговый режим, загрузку, отпуск и медианные
                данные рынка — и показывает ставку, при которой вы не работаете в убыток.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Открыть калькулятор →
              </Link>
            </div>
          </div>
        </section>

        {/* 4 Mistakes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            4 ошибки, из-за которых фрилансеры попадают в нижние 44%
          </h2>
          <p className="text-gray-600 mb-6">
            Это не про лень и не про «мало клиентов». Это про конкретные математические ошибки.
          </p>

          <div className="space-y-4">
            {MISTAKES.map((m) => (
              <div
                key={m.num}
                className="rounded-xl border border-gray-200 p-5 bg-white hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-bold text-gray-500">
                    {m.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Top 21% Do */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Что делают те 21%, которые зарабатывают 100 000 ₽+
          </h2>
          <p className="text-gray-600 mb-6">
            Это не удача и не звёздный час. Это воспроизводимый план из 5 шагов:
          </p>

          <div className="space-y-4">
            {PLAN.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  {item.cta && (
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-medium mt-2 hover:underline"
                    >
                      Открыть калькулятор →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Concrete Numbers by Specialty */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Конкретные цифры по специальностям
          </h2>
          <p className="text-gray-600 mb-5">
            При загрузке 130 оплачиваемых часов/мес и НПД 6%. Медианные ставки рынка России:
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                  <th className="text-left p-3 font-semibold">Специальность</th>
                  <th className="text-center p-3 font-semibold">Медиана ставка</th>
                  <th className="text-center p-3 font-semibold">Доход/мес</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { spec: "Frontend-разработчик", rate: "1 200 ₽/ч", income: "156 000 ₽" },
                  { spec: "Backend-разработчик", rate: "1 400 ₽/ч", income: "182 000 ₽" },
                  { spec: "UX/UI дизайнер", rate: "900 ₽/ч", income: "117 000 ₽" },
                  { spec: "Копирайтер", rate: "450 ₽/ч", income: "58 500 ₽" },
                  { spec: "Маркетолог (SMM)", rate: "700 ₽/ч", income: "91 000 ₽" },
                  { spec: "Аналитик данных", rate: "1 100 ₽/ч", income: "143 000 ₽" },
                  { spec: "Проджект-менеджер", rate: "950 ₽/ч", income: "123 500 ₽" },
                ].map((row) => (
                  <tr key={row.spec}>
                    <td className="p-3 text-gray-800">{row.spec}</td>
                    <td className="p-3 text-center text-gray-600">{row.rate}</td>
                    <td className="p-3 text-center font-semibold text-gray-900">{row.income}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * Расчёт: ставка × 130 ч × (1 − 0.06 НПД). Данные медианных ставок — FreelanceCalc, март 2026.
          </p>
        </section>

        {/* Key Takeaway */}
        <section className="bg-gray-900 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-3">Главное: честный вывод</h2>
          <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
            <li>✅ На фрилансе реально зарабатывать 100 000–200 000 ₽/мес — но не в первый месяц</li>
            <li>✅ 44% зарабатывают мало не потому что «рынок плохой» — а потому что неправильно считают ставку</li>
            <li>✅ Разница между наивным и реальным расчётом — до 300 000 ₽ в год</li>
            <li>✅ Инструмент для правильного расчёта — бесплатный калькулятор ниже</li>
          </ul>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold mt-5 hover:bg-gray-100 transition-colors text-sm"
          >
            Рассчитать свою ставку →
          </Link>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: "/stati/kak-raschitat-stavku-frilansera",
                title: "Как рассчитать ставку фрилансера",
                tag: "Расчёт",
              },
              {
                href: "/stati/skrytye-rashody-frilansera",
                title: "Скрытые расходы фрилансера",
                tag: "Финансы",
              },
              {
                href: "/stati/kak-povysit-stavku-frilansera",
                title: "Как повысить ставку: 7 способов",
                tag: "Рост",
              },
              {
                href: "/stati/frilans-vs-naym-2026",
                title: "Фриланс vs найм: честное сравнение",
                tag: "Аналитика",
              },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex-shrink-0">
                  {a.tag}
                </span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                  {a.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
