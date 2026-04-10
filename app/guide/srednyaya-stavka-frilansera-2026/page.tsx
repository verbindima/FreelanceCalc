import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Средняя ставка фрилансера по специальностям 2026 — таблица ₽/час | FreelanceCalc",
  description:
    "Средняя ставка фрилансера в час в 2026 году: Python, JavaScript, PHP, дизайн, PM — по уровню junior/middle/senior. Реальные данные, таблица по городам, как сравнить свою ставку с рынком.",
  alternates: { canonical: `${BASE_URL}/guide/srednyaya-stavka-frilansera-2026` },
  openGraph: {
    title: "Средняя ставка фрилансера 2026: таблица по специальностям",
    description:
      "Сколько берут фрилансеры в час в 2026 году? Данные по Python, JS, PHP, дизайну, PM — junior/middle/senior. Сравни свою ставку с рынком.",
    url: `${BASE_URL}/guide/srednyaya-stavka-frilansera-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Средняя ставка фрилансера 2026: junior/middle/senior по специальностям",
    description:
      "Таблица часовых ставок фрилансеров в 2026 году по специальностям и городам. Сравни с рынком.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какая средняя ставка фрилансера-разработчика в час в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Средняя ставка middle-разработчика в 2026 году: Python — 1 800–2 500 ₽/ч, JavaScript/Frontend — 1 500–2 200 ₽/ч, PHP — 1 200–1 800 ₽/ч. Senior-специалисты берут на 40–60% больше, junior — на 50–60% меньше среднего по рынку.",
      },
    },
    {
      "@type": "Question",
      name: "Чем отличается ставка фрилансера в Москве и регионах?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Московские фрилансеры берут на 20–35% больше, чем в регионах. Однако с 2023 года разрыв сокращается: удалёнка уравняла рынок. Middle Python-разработчик в Москве — 2 000–2 800 ₽/ч, в Новосибирске или Казани — 1 400–2 000 ₽/ч при той же компетенции.",
      },
    },
    {
      "@type": "Question",
      name: "Как понять, что моя ставка ниже рынка?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Сравните свою часовую ставку с таблицей по специальности и уровню. Если ваша ставка на 30%+ ниже медианы по рынку — вы недооцениваете себя. Используйте калькулятор FreelanceCalc: он учитывает ваши расходы, налоги и желаемый доход — и показывает минимальную ставку, ниже которой работать невыгодно.",
      },
    },
    {
      "@type": "Question",
      name: "Когда фрилансеру поднимать ставку?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Признаки что пора поднимать ставку: (1) заказчики принимают оффер без торга — значит вы дёшевы; (2) ваша загрузка постоянно 100% — спрос превышает ваше предложение; (3) ваша ставка ниже рыночной медианы больше чем на 20%; (4) прошёл год с последнего повышения. Рекомендуемый шаг — +15–25% за раз.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать свою минимальную часовую ставку?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: минимальная ставка = (желаемый доход в месяц + расходы + налоги) ÷ рабочие часы в месяц. Пример: хотите 120 000 ₽ на руки, налог самозанятого 6%, расходы 20 000 ₽, работаете 120 часов/мес. Минимальная ставка = (120 000 ÷ 0.94 + 20 000) ÷ 120 = 1 234 ₽/ч. Калькулятор FreelanceCalc рассчитает за 30 секунд.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Средняя ставка фрилансера по специальностям в 2026 году",
  description:
    "Таблица часовых ставок фрилансеров в 2026 году: Python, JavaScript, PHP, дизайн, PM — по уровням junior/middle/senior и городам.",
  url: `${BASE_URL}/guide/srednyaya-stavka-frilansera-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

type RateRow = {
  specialty: string;
  slug: string;
  junior: string;
  middle: string;
  senior: string;
};

const rates: RateRow[] = [
  { specialty: "Python-разработчик", slug: "python-razrabotchik", junior: "700–1 100", middle: "1 800–2 500", senior: "3 000–4 500" },
  { specialty: "JavaScript / Frontend", slug: "frontend-razrabotchik", junior: "600–1 000", middle: "1 500–2 200", senior: "2 800–4 000" },
  { specialty: "PHP-разработчик", slug: "php-razrabotchik", junior: "500–900", middle: "1 200–1 800", senior: "2 200–3 200" },
  { specialty: "Java-разработчик", slug: "java-razrabotchik", junior: "800–1 200", middle: "2 000–2 800", senior: "3 500–5 000" },
  { specialty: "iOS / Swift", slug: "ios-razrabotchik", junior: "900–1 300", middle: "2 200–3 000", senior: "3 800–5 500" },
  { specialty: "Android / Kotlin", slug: "android-razrabotchik", junior: "900–1 300", middle: "2 000–2 800", senior: "3 500–5 000" },
  { specialty: "UI/UX-дизайнер", slug: "ux-dizajner", junior: "500–800", middle: "1 200–1 800", senior: "2 500–3 500" },
  { specialty: "Менеджер проектов", slug: "menedzher-proektov", junior: "400–700", middle: "1 000–1 600", senior: "2 000–3 000" },
  { specialty: "Data Science / ML", slug: "data-scientist", junior: "900–1 400", middle: "2 200–3 200", senior: "4 000–6 000" },
  { specialty: "DevOps / SRE", slug: "devops-inzhener", junior: "800–1 200", middle: "2 000–2 800", senior: "3 500–5 000" },
];

const cityCoeff: { city: string; coeff: string; example: string }[] = [
  { city: "Москва", coeff: "+25–35%", example: "middle Python: 2 250–3 375 ₽/ч" },
  { city: "Санкт-Петербург", coeff: "+15–20%", example: "middle Python: 2 070–3 000 ₽/ч" },
  { city: "Новосибирск", coeff: "±0% (база)", example: "middle Python: 1 800–2 500 ₽/ч" },
  { city: "Казань", coeff: "−5–10%", example: "middle Python: 1 620–2 375 ₽/ч" },
  { city: "Екатеринбург", coeff: "±0–+10%", example: "middle Python: 1 800–2 750 ₽/ч" },
  { city: "Другие регионы", coeff: "−10–20%", example: "middle Python: 1 440–2 250 ₽/ч" },
];

export default function SrednyayaStavkaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-8 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo-500 tracking-wide uppercase hover:underline"
          >
            FreelanceCalc
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Средняя ставка фрилансера по специальностям 2026
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Таблица часовых ставок для 10 специальностей: junior / middle / senior. Сравните свою ставку с рынком и узнайте, стоит ли поднимать цены.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 8 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
          <p className="text-sm font-bold text-indigo-900 mb-2">Сравни свою ставку с рынком прямо сейчас</p>
          <p className="text-xs text-indigo-700 mb-4">
            Таблица показывает рыночные диапазоны. Ваша минимальная ставка зависит от расходов, налогов и желаемого дохода — рассчитайте её за 30 секунд.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Рассчитать свою ставку →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Why rates matter */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Почему важно знать рыночную ставку
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                По данным исследований фриланс-рынка России, <strong>67% фрилансеров занижают свою ставку</strong> — и большинство даже не подозревает об этом. Заказчики принимают оффер без торга? Значит, вы продаёте дёшево.
              </p>
              <p>
                Рыночная ставка — это не просто «сколько берут другие». Это ориентир, ниже которого вы работаете в убыток или недополучаете за свою квалификацию. Знать рынок нужно, чтобы:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Аргументировать цену заказчику («это рыночная ставка для middle»)</li>
                <li>Понять, когда пора поднимать цены</li>
                <li>Не соглашаться на демпинговые предложения</li>
                <li>Планировать доход и налоги</li>
              </ul>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mt-3">
                <p className="text-xs text-slate-500 font-semibold mb-1">Источники данных</p>
                <p className="text-xs text-slate-500">
                  Данные агрегированы из открытых вакансий hh.ru (раздел «Контракт»), биржи FL.ru, Kwork и Habr Freelance за Q1 2026. Указаны медианные диапазоны — 25–75 перцентиль.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Main rates table */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Таблица ставок по специальностям: ₽/час (апрель 2026)
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Медианные рыночные ставки фрилансеров. Ставки без учёта налогов — это то, что фрилансер выставляет клиенту.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Специальность</th>
                    <th className="text-center px-3 py-2 text-slate-600 font-semibold">Junior</th>
                    <th className="text-center px-3 py-2 text-slate-600 font-semibold">Middle</th>
                    <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Senior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rates.map((row) => (
                    <tr key={row.specialty} className="hover:bg-slate-50 transition-colors">
                      <td className="px-3 py-2.5 font-medium text-slate-700">
                        <Link
                          href={`/stavka/${row.slug}`}
                          className="hover:text-indigo-600 hover:underline"
                        >
                          {row.specialty}
                        </Link>
                      </td>
                      <td className="px-3 py-2.5 text-center text-slate-600">{row.junior} ₽/ч</td>
                      <td className="px-3 py-2.5 text-center font-semibold text-indigo-700">{row.middle} ₽/ч</td>
                      <td className="px-3 py-2.5 text-center text-emerald-600 font-semibold">{row.senior} ₽/ч</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              * Данные: медиана рынка Q1 2026. Реальная ставка конкретного специалиста зависит от портфолио, отрасли и типа клиента.
            </p>
          </section>

          {/* Section 3 — City coefficients */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как город влияет на ставку фрилансера
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Фриланс — это удалённая работа, но географическая поправка всё ещё влияет: московские клиенты привыкли к более высоким ценам, а региональные заказчики чаще торгуются.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Город</th>
                    <th className="text-center px-3 py-2 text-slate-600 font-semibold">Поправка</th>
                    <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Пример</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {cityCoeff.map((row) => (
                    <tr key={row.city} className="hover:bg-slate-50 transition-colors">
                      <td className="px-3 py-2 font-medium text-slate-700">{row.city}</td>
                      <td className="px-3 py-2 text-center">
                        <span className={`font-semibold ${row.coeff.startsWith("+") ? "text-emerald-600" : row.coeff.startsWith("−") ? "text-red-500" : "text-slate-600"}`}>
                          {row.coeff}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-slate-500">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-amber-800 font-semibold mb-1">Тренд 2024–2026: разрыв сокращается</p>
              <p className="text-xs text-amber-700">
                После массового перехода на удалёнку разрыв между Москвой и регионами уменьшился с 40–50% до 20–35%. Крупные IT-компании нанимают фрилансеров по единой сетке вне зависимости от города.
              </p>
            </div>
          </section>

          {/* Section 4 — How to calculate your min rate */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как рассчитать свою минимальную ставку
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Рыночная таблица показывает, <em>что берут другие</em>. Ваша минимальная ставка — это сколько нужно брать <em>вам лично</em>, чтобы покрыть расходы, заплатить налоги и получить нужный доход.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <p className="text-xs font-bold text-indigo-900 mb-2">Формула расчёта:</p>
                <p className="text-xs text-indigo-800 font-mono bg-white rounded-lg p-3 border border-indigo-200">
                  Ставка = (Желаемый доход ÷ (1 − Налог%)) + Расходы/ч
                </p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-slate-700">Пример: middle Python-разработчик</p>
                <div className="bg-slate-50 rounded-xl border border-slate-200">
                  {[
                    { label: "Желаемый доход на руки", value: "120 000 ₽/мес" },
                    { label: "Налог (самозанятый, 6%)", value: "7 660 ₽/мес" },
                    { label: "Расходы (ПО, интернет, оборудование)", value: "15 000 ₽/мес" },
                    { label: "Рабочих часов в месяц (120 ч)", value: "120 часов" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center px-4 py-2 border-b border-slate-200 last:border-0 text-xs">
                      <span className="text-slate-600">{label}</span>
                      <span className="font-semibold text-slate-800">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center px-4 py-3 bg-indigo-50 rounded-b-xl text-sm">
                    <span className="font-bold text-indigo-800">Минимальная ставка</span>
                    <span className="font-bold text-indigo-900 text-base">≈ 1 189 ₽/час</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Рыночная ставка middle Python — 1 800–2 500 ₽/ч. Минимум — 1 189 ₽/ч. Значит, этот специалист может брать по рынку и зарабатывать больше желаемого — или поднять доходную цель.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
                >
                  Рассчитать точно с учётом своих данных →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5 — When to raise your rate */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Когда поднимать ставку: 4 признака
            </h2>
            <div className="space-y-3">
              {[
                {
                  num: "01",
                  title: "Заказчики не торгуются",
                  text: "Если клиент принимает ваш оффер без единого вопроса — вы, скорее всего, дёшевы. Рынок готов платить больше.",
                },
                {
                  num: "02",
                  title: "Вы постоянно загружены на 100%",
                  text: "Очередь из клиентов — это сигнал спроса, превышающего предложение. Поднимите ставку — часть клиентов уйдёт, но доход вырастет.",
                },
                {
                  num: "03",
                  title: "Ваша ставка ниже рыночной медианы на 20%+",
                  text: "Сравните с таблицей выше. Если вы на 20%+ ниже — поднимайте. Рынок будет платить.",
                },
                {
                  num: "04",
                  title: "Прошёл год с последнего повышения",
                  text: "Инфляция 2024–2025 — около 8–9%/год. Ставка без повышения год — это -8–9% к реальному доходу.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-2xl font-black text-slate-200 shrink-0 leading-none">{item.num}</span>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">{item.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-xs text-emerald-800 font-semibold mb-1">Рекомендуемый шаг повышения</p>
              <p className="text-xs text-emerald-700">
                Поднимайте ставку на <strong>15–25% за раз</strong>. Меньше — незаметно для клиента, но и для вашего дохода. Больше — риск потерять сразу всю базу. Оптимально: предупредить постоянных клиентов за 2–4 недели.
              </p>
            </div>
          </section>

          {/* Section 6 — PDF upsell */}
          <section className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Детальный бенчмарк: PDF-отчёт по рынку
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Общая таблица выше — это медианы. В PDF-бенчмарке FreelanceCalc — детализация: ставки с разбивкой по городу, стеку технологий, типу клиента (стартап vs корпорация) и опыту. Данные обновляются ежеквартально.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 mb-5">
              {[
                "40+ специальностей с разбивкой по стеку",
                "Ставки по 15 городам России",
                "Разница: фриланс-биржи vs прямые клиенты",
                "Тренды изменения ставок 2024→2026",
                "Шаблон для переговоров о повышении",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/?utm_source=guide&utm_medium=srednyaya-stavka&utm_campaign=pdf-upsell"
              className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Получить PDF-бенчмарк — 249 ₽ →
            </Link>
            <p className="text-xs text-slate-400 mt-2">Единоразовая оплата · Обновление каждый квартал бесплатно</p>
          </section>

          {/* Section 7 — Specialty pages links */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Ставки по специальностям — подробнее
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              На FreelanceCalc есть отдельные страницы с детальным калькулятором для каждой специальности:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {rates.map((row) => (
                <Link
                  key={row.slug}
                  href={`/stavka/${row.slug}/opyt/middle`}
                  className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm text-slate-700 hover:text-indigo-700"
                >
                  <span className="text-indigo-400">→</span>
                  <span className="font-medium text-xs">{row.specialty}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Частые вопросы
            </h2>
            <div className="space-y-5">
              {faqJsonLd.mainEntity.map((item) => (
                <div key={item.name} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                  <p className="text-sm font-bold text-slate-800 mb-2">{item.name}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="text-center py-6">
            <p className="text-sm text-slate-600 mb-4">
              Узнали свою рыночную ставку? Рассчитайте, сколько вам нужно брать минимум — с учётом ваших налогов и расходов.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-bold px-8 py-3 rounded-2xl text-base hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-200"
            >
              Открыть калькулятор ставки
            </Link>
            <p className="mt-2 text-xs text-slate-400">Бесплатно · Результат за 30 секунд</p>
          </div>

          {/* Breadcrumb / Navigation */}
          <nav className="border-t border-slate-200 pt-6 flex flex-wrap gap-3 text-xs text-slate-500">
            <Link href="/" className="hover:text-indigo-600 hover:underline">← Калькулятор ставки</Link>
            <Link href="/guide" className="hover:text-indigo-600 hover:underline">Все гайды</Link>
            <Link href="/guide/nalog-samozanyatyj" className="hover:text-indigo-600 hover:underline">Налог самозанятого</Link>
            <Link href="/guide/ip-vs-samozanyatyj" className="hover:text-indigo-600 hover:underline">ИП vs самозанятый</Link>
          </nav>
        </div>
      </main>
    </>
  );
}
