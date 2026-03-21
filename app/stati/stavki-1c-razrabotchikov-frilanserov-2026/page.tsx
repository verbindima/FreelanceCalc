import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки 1С-разработчиков на фрилансе 2026: сколько стоит час работы 1С-программиста",
  description:
    "Сколько берёт 1С-разработчик-фрилансер в России в 2026 году? Медианные ставки для Junior, Middle, Senior и 1С:ERP-консультантов. Сравнение по специализациям (Бухгалтерия, ЗУП, УТ, ERP). Реальные данные + калькулятор.",
  keywords: [
    "1с разработчик фриланс ставка",
    "сколько берёт 1с программист",
    "ставка 1с разработчика 2026",
    "1с фрилансер цена",
    "1с консультант ставка фриланс",
    "стоимость услуг 1с разработчика",
    "1с разработчик самозанятый сколько зарабатывает",
    "1с erp разработчик ставка",
    "сколько стоит доработка 1с",
    "1с разработчик junior middle senior ставка",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-1c-razrabotchikov-frilanserov-2026" },
  openGraph: {
    title: "Ставки 1С-разработчиков на фрилансе 2026: таблица Junior / Middle / Senior",
    description:
      "Медианные почасовые ставки 1С-разработчиков-фрилансеров в России. Разбивка по специализациям: 1С:Бухгалтерия, ЗУП, УТ, ERP. Реальные данные рынка 2026.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-1c-razrabotchikov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-1c-razrabotchikov-frilanserov-2026#article`,
      headline:
        "Ставки 1С-разработчиков на фрилансе 2026: сколько стоит час работы 1С-программиста",
      description:
        "Медианные почасовые ставки 1С-разработчиков-фрилансеров в России. Разбивка по уровням (Junior, Middle, Senior) и специализациям (Бухгалтерия, ЗУП, УТ, ERP).",
      url: `${BASE_URL}/stati/stavki-1c-razrabotchikov-frilanserov-2026`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stati/stavki-1c-razrabotchikov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "1С:Предприятие" },
        { "@type": "Thing", name: "Ставка 1С-разработчика" },
        { "@type": "Thing", name: "Фриланс программирование" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ставки 1С-разработчиков 2026",
          item: `${BASE_URL}/stati/stavki-1c-razrabotchikov-frilanserov-2026`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт 1С-разработчик-фрилансер в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Медианная ставка 1С-разработчика на фрилансе — 1 200–2 800 ₽/час (Middle-уровень). Junior берёт 700–1 500 ₽/час, Senior — 2 500–5 000 ₽/час. Специалисты по 1С:ERP и архитекторы систем выставляют 3 500–7 000 ₽/час и выше.",
          },
        },
        {
          "@type": "Question",
          name: "Почему 1С-разработчик берёт меньше, чем веб-разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Средние ставки 1С ниже, чем у JavaScript или Python-разработчиков, из-за меньшего числа удалённых зарубежных заказчиков. Однако спрос от российских SMB огромный: по данным «1С», ежегодно сертификацию проходят более 500 тысяч специалистов. Старший 1С:ERP-архитектор зарабатывает сопоставимо с Senior Backend.",
          },
        },
        {
          "@type": "Question",
          name: "Какой налоговый режим выбрать 1С-разработчику на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При доходе до 2,4 млн ₽/год — самозанятость (НПД): 4% с физлиц или 6% с компаний. При доходе выше — ИП на УСН 6% плюс фиксированные страховые взносы (~50 000 ₽/год в 2026). Большинство 1С-фрилансеров работают с юрлицами, поэтому чаще выбирают НПД 6%.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать свою ставку 1С-разработчику?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте формулу: ставка = (желаемый чистый доход × 12) ÷ ((1 − ставка_налога) × рабочие_часы_в_год × загрузка). Для среднего 1С-фрилансера с доходом 180 000 ₽/мес, НПД 6%, 7 часов в день и загрузкой 75% ставка составит около 1 800–2 000 ₽/час. Точный расчёт — в калькуляторе.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько стоит доработка 1С под заказ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Типовые задачи: настройка печатных форм — от 5 000 до 25 000 ₽; внедрение 1С:Бухгалтерия с нуля — от 30 000 до 150 000 ₽; разработка нестандартной конфигурации — от 100 000 ₽. Итоговая цена зависит от сложности, сроков и квалификации подрядчика.",
          },
        },
      ],
    },
  ],
};

const levels = [
  {
    level: "Junior",
    years: "0–1 год",
    rate: "700–1 500 ₽/час",
    monthly: "от 60 000 до 130 000 ₽",
    notes: "Стандартные конфигурации, баги, несложные доработки. Чаще субподряд у интеграторов.",
  },
  {
    level: "Middle",
    years: "2–4 года",
    rate: "1 200–2 800 ₽/час",
    monthly: "от 120 000 до 280 000 ₽",
    notes:
      "Самостоятельные доработки, интеграции, автоматизация учёта. Ключевой сегмент рынка.",
  },
  {
    level: "Senior",
    years: "5+ лет",
    rate: "2 500–5 000 ₽/час",
    monthly: "от 250 000 до 500 000 ₽",
    notes:
      "Нестандартные конфигурации, проектирование архитектуры, тиражные решения.",
  },
  {
    level: "Архитектор / 1С:ERP",
    years: "7+ лет",
    rate: "3 500–7 000+ ₽/час",
    monthly: "от 350 000 ₽",
    notes:
      "Крупные внедрения ERP, проектное управление, экспертная консультация. Топ рынка.",
  },
];

const specializations = [
  {
    name: "1С:Бухгалтерия",
    rate: "800–2 500 ₽/час",
    demand: "Очень высокий",
    notes: "Самая массовая специализация. Большой рынок SMB, но и высокая конкуренция среди исполнителей.",
  },
  {
    name: "1С:ЗУП (Зарплата и управление персоналом)",
    rate: "1 000–2 800 ₽/час",
    demand: "Высокий",
    notes:
      "Регулярные обновления законодательства поддерживают стабильный спрос. Востребован у кадровых агентств и производственных компаний.",
  },
  {
    name: "1С:Управление торговлей (УТ)",
    rate: "1 000–3 000 ₽/час",
    demand: "Высокий",
    notes:
      "Автоматизация торговли, склада и CRM. Интеграции с маркетплейсами — растущий запрос.",
  },
  {
    name: "1С:ERP Управление предприятием",
    rate: "2 000–6 000 ₽/час",
    demand: "Средний",
    notes:
      "Сложные корпоративные внедрения. Длинные проекты, высокий чек. Дефицит квалифицированных специалистов.",
  },
  {
    name: "1С:Розница",
    rate: "800–2 200 ₽/час",
    demand: "Высокий",
    notes:
      "Ретейл, HoReCa, ИП. Много типовых задач, но постоянный поток заказчиков.",
  },
  {
    name: "1С:Документооборот (ДО)",
    rate: "1 200–3 000 ₽/час",
    demand: "Средний",
    notes:
      "Автоматизация делопроизводства в государственных и крупных частных компаниях.",
  },
];

const cities = [
  { name: "Москва", rate: "1 500–4 000 ₽/час", multiplier: "×1.4" },
  { name: "Санкт-Петербург", rate: "1 300–3 500 ₽/час", multiplier: "×1.25" },
  { name: "Екатеринбург", rate: "1 000–2 800 ₽/час", multiplier: "×1.0" },
  { name: "Новосибирск", rate: "900–2 500 ₽/час", multiplier: "×0.9" },
  { name: "Казань", rate: "900–2 500 ₽/час", multiplier: "×0.9" },
  { name: "Краснодар", rate: "800–2 200 ₽/час", multiplier: "×0.8" },
  { name: "Другие города", rate: "700–2 000 ₽/час", multiplier: "×0.7–0.85" },
];

export default function Stavki1cRazrabotchikovPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span>›</span>
          <Link href="/stati" className="hover:text-indigo-600">Статьи</Link>
          <span>›</span>
          <span className="text-slate-600">Ставки 1С-разработчиков 2026</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
              Рынок
            </span>
            <span className="text-xs text-slate-400">8 мин чтения · март 2026</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-snug">
            Ставки 1С-разработчиков на фрилансе 2026: сколько стоит час работы 1С-программиста
          </h1>
          <p className="mt-3 text-slate-500 text-sm leading-relaxed">
            1С:Предприятие используют более{" "}
            <strong className="text-slate-700">6 миллионов компаний</strong> в России — это
            крупнейшая экосистема корпоративного ПО в стране. Соответственно, 1С-разработчики
            один из самых востребованных сегментов рынка фриланса. В этой статье — реальные
            ставки по уровням, специализациям и городам, а также объяснение, как правильно
            рассчитать свою цену.
          </p>
        </header>

        {/* CTA — calculator */}
        <div className="mb-8 bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <p className="text-sm font-medium text-indigo-800 mb-1">
            Рассчитайте вашу ставку 1С-разработчика
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Введите желаемый доход, налоговый режим и загрузку — калькулятор покажет,
            сколько брать в час с учётом всех расходов.
          </p>
          <Link
            href="/stavka/1c-razrabotchik"
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Открыть калькулятор для 1С-разработчика →
          </Link>
        </div>

        {/* Section 1 — Rates by level */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Ставки по уровням опыта: Junior, Middle, Senior
          </h2>
          <p className="text-sm text-slate-500 mb-5 leading-relaxed">
            Разброс ставок у 1С-разработчиков выше, чем в большинстве IT-специальностей:
            между Junior и Архитектором разница в 5–8 раз. Это объясняется сложностью крупных
            конфигураций и дефицитом опытных специалистов по 1С:ERP.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700">Уровень</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Опыт</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Ставка</th>
                  <th className="px-4 py-3 font-semibold text-slate-700 hidden sm:table-cell">Доход/мес</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {levels.map((row) => (
                  <tr key={row.level} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.level}</td>
                    <td className="px-4 py-3 text-slate-500">{row.years}</td>
                    <td className="px-4 py-3 font-semibold text-indigo-700">{row.rate}</td>
                    <td className="px-4 py-3 text-slate-500 hidden sm:table-cell">{row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Медианные ставки на открытом рынке фриланса (FL.ru, Kwork, Telegram-каналы). Март 2026.
          </p>
          <div className="mt-4 space-y-3">
            {levels.map((row) => (
              <div key={row.level} className="bg-slate-50 rounded-lg px-4 py-3 text-xs text-slate-600">
                <span className="font-semibold text-slate-700">{row.level}:</span> {row.notes}
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 — By specialization */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Ставки по специализациям 1С
          </h2>
          <p className="text-sm text-slate-500 mb-5 leading-relaxed">
            Специализация влияет на ставку не меньше, чем уровень опыта. Работа с ERP
            приносит в 2–3 раза больше, чем типовая Бухгалтерия — но требует и значительно
            большей экспертизы.
          </p>
          <div className="space-y-3">
            {specializations.map((spec) => (
              <div
                key={spec.name}
                className="border border-slate-200 rounded-xl p-4 hover:border-indigo-100 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <span className="font-semibold text-slate-800 text-sm">{spec.name}</span>
                  <span className="font-bold text-indigo-700 text-sm whitespace-nowrap">{spec.rate}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      spec.demand === "Очень высокий"
                        ? "bg-emerald-50 text-emerald-700"
                        : spec.demand === "Высокий"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    Спрос: {spec.demand}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{spec.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — By city */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Ставки по городам России
          </h2>
          <p className="text-sm text-slate-500 mb-5 leading-relaxed">
            1С-разработчики работают удалённо по всей России. Московские заказчики
            платят на 30–40% выше, чем региональные. Однако стоимость жизни в регионах
            также ниже — поэтому реальные доходы сопоставимы.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700">Город</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Ставка (Middle)</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Коэффициент</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cities.map((city) => (
                  <tr key={city.name} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-800">{city.name}</td>
                    <td className="px-4 py-3 font-semibold text-indigo-700">{city.rate}</td>
                    <td className="px-4 py-3 text-slate-500">{city.multiplier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Базовая ставка (×1.0) — Екатеринбург. Используйте{" "}
            <Link href="/stavka/1c-razrabotchik" className="text-indigo-600 hover:underline">
              калькулятор
            </Link>{" "}
            для расчёта с городским коэффициентом.
          </p>
        </section>

        {/* Section 4 — Context */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Почему 1С-разработчики востребованы на фрилансе
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              В России около{" "}
              <strong className="text-slate-700">500 000 сертифицированных специалистов 1С</strong>,
              но большинство из них работают в штате или в интеграторских компаниях. На открытом
              рынке фриланса дефицит квалифицированных исполнителей — особенно в сегменте ERP.
            </p>
            <p>
              Малый и средний бизнес (основные заказчики) не могут позволить себе штатного
              1С-программиста — его зарплата в регионах начинается от 80–120 тыс. ₽/мес, в Москве
              от 150–200 тыс. ₽/мес. Поэтому они нанимают фрилансеров под конкретные задачи.
            </p>
            <p>
              Типовые запросы от заказчиков: настройка новой версии после обновления (раз в квартал
              у большинства конфигураций), интеграция с маркетплейсами и CRM, разработка
              нестандартных отчётов, переход на 1С из другой системы учёта.
            </p>
          </div>
        </section>

        {/* Section 5 — How to calculate */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Как рассчитать свою ставку: пример для 1С-разработчика
          </h2>
          <div className="bg-slate-50 rounded-xl p-5 text-sm text-slate-700 space-y-3">
            <p className="font-semibold text-slate-800">Вводные данные:</p>
            <ul className="space-y-1 text-slate-600">
              <li>• Желаемый доход: <strong>180 000 ₽/мес</strong></li>
              <li>• Налоговый режим: <strong>НПД 6% (работа с юрлицами)</strong></li>
              <li>• Рабочих часов в день: <strong>7 ч</strong></li>
              <li>• Коэффициент загрузки: <strong>75%</strong> (реальные оплачиваемые часы)</li>
              <li>• Отпуск: <strong>28 дней / год</strong></li>
            </ul>
            <hr className="border-slate-200" />
            <p className="font-semibold text-slate-800">Расчёт:</p>
            <ul className="space-y-1 text-slate-600">
              <li>• Валовый доход (с налогом): 180 000 ÷ 0.94 ≈ <strong>191 500 ₽/мес</strong></li>
              <li>• Рабочих дней в году (за вычетом отпуска): 247 − 28 = <strong>219 дней</strong></li>
              <li>• Оплачиваемых часов: 219 × 7 × 0.75 ≈ <strong>1 150 ч/год</strong> → 96 ч/мес</li>
              <li>• Ставка: 191 500 ÷ 96 ≈ <strong>2 000 ₽/час</strong></li>
            </ul>
            <p className="text-xs text-slate-400 mt-2">
              Итоговая ставка попадает в медианный диапазон Middle 1С-разработчика. Если хотите
              доход выше — увеличьте ставку или загрузку.
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/stavka/1c-razrabotchik"
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Рассчитать свою ставку автоматически →
            </Link>
          </div>
        </section>

        {/* Section 6 — Comparison with other devs */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            1С-разработчик vs другие IT-специальности
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700">Специальность</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Ставка Middle</th>
                  <th className="px-4 py-3 font-semibold text-slate-700 hidden sm:table-cell">Рынок</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="bg-indigo-50/40">
                  <td className="px-4 py-3 font-semibold text-indigo-800">1С-разработчик</td>
                  <td className="px-4 py-3 font-bold text-indigo-700">1 200–2 800 ₽/час</td>
                  <td className="px-4 py-3 hidden sm:table-cell">Только РФ и СНГ</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <Link href="/stavka/backend-razrabotchik" className="text-indigo-600 hover:underline">
                      Backend-разработчик
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-700">2 000–4 000 ₽/час</td>
                  <td className="px-4 py-3 hidden sm:table-cell">РФ + международный</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <Link href="/stavka/frontend-razrabotchik" className="text-indigo-600 hover:underline">
                      Frontend-разработчик
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-700">1 500–3 000 ₽/час</td>
                  <td className="px-4 py-3 hidden sm:table-cell">РФ + международный</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <Link href="/stavka/python-razrabotchik" className="text-indigo-600 hover:underline">
                      Python-разработчик
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-700">2 200–4 500 ₽/час</td>
                  <td className="px-4 py-3 hidden sm:table-cell">РФ + международный</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <Link href="/stavka/php-razrabotchik" className="text-indigo-600 hover:underline">
                      PHP-разработчик
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-700">1 300–2 800 ₽/час</td>
                  <td className="px-4 py-3 hidden sm:table-cell">РФ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Ставки 1С ниже международного уровня, но 1С-специалисты имеют практически
            гарантированный поток заказов от российских SMB — без конкуренции с зарубежными
            исполнителями.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-900 mb-5">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Сколько берёт 1С-разработчик-фрилансер в России в 2026 году?",
                a: "Медианная ставка 1С-разработчика на фрилансе — 1 200–2 800 ₽/час (Middle-уровень). Junior берёт 700–1 500 ₽/час, Senior — 2 500–5 000 ₽/час. Специалисты по 1С:ERP и архитекторы систем выставляют 3 500–7 000 ₽/час и выше.",
              },
              {
                q: "Почему 1С-разработчик берёт меньше, чем веб-разработчик?",
                a: "Рынок 1С — практически только Россия и СНГ, нет международной конкуренции ставок. Однако в сегменте ERP и сложных конфигураций старший специалист зарабатывает сопоставимо с Senior Backend-разработчиком. Плюс: у 1С-фрилансеров стабильный поток заказов от малого бизнеса без конкуренции с зарубежными подрядчиками.",
              },
              {
                q: "Стоит ли уходить на фриланс 1С-разработчику в 2026 году?",
                a: "Да, если у вас есть первые 3–5 рабочих контактов (потенциальных заказчиков). Рынок стабильный: обновления законодательства, интеграции с маркетплейсами, автоматизация нового бизнеса — это постоянный спрос. Переходить лучше постепенно: начать с подработки и набрать загрузку, прежде чем уходить со штатной позиции.",
              },
              {
                q: "Как 1С-фрилансеру найти первых заказчиков?",
                a: "Топ-4 канала: 1) FL.ru и Kwork (массовый рынок); 2) Телеграм-каналы с вакансиями (1С-специалисты, 1С-вакансии); 3) Партнёрские сети 1С — авторизованные франчайзи передают задачи субподрядчикам; 4) Личные рекомендации — попросите коллег и знакомых с бизнесом.",
              },
              {
                q: "Нужна ли сертификация 1С для работы на фрилансе?",
                a: "Не обязательна, но сильно помогает. Сертификат «1С:Специалист» или «1С:Профессионал» подтверждает уровень и обычно позволяет поднять ставку на 15–30%. Для работы с крупными заказчиками и госструктурами часто является обязательным требованием.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-4">
                <p className="font-semibold text-slate-800 text-sm mb-2">{item.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-10">
          <h2 className="text-base font-bold text-slate-900 mb-4">Смотрите также</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/stavka/1c-razrabotchik"
              className="group block border border-slate-200 rounded-xl p-4 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700">
                Калькулятор ставки 1С-разработчика →
              </p>
              <p className="text-xs text-slate-500 mt-1">Рассчитайте вашу ставку с учётом налогов и загрузки</p>
            </Link>
            <Link
              href="/stati/stavki-razrabotchikov-po-yazykam-2026"
              className="group block border border-slate-200 rounded-xl p-4 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700">
                Ставки по языкам программирования →
              </p>
              <p className="text-xs text-slate-500 mt-1">Python, JS, PHP, Go, Java и другие</p>
            </Link>
            <Link
              href="/stati/stavki-razrabotchikov-frilanserov-2026"
              className="group block border border-slate-200 rounded-xl p-4 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700">
                Ставки разработчиков-фрилансеров 2026 →
              </p>
              <p className="text-xs text-slate-500 mt-1">Frontend, Backend, Fullstack, DevOps, ML</p>
            </Link>
            <Link
              href="/stati/samozanyatyj-vs-ip-frilancer"
              className="group block border border-slate-200 rounded-xl p-4 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700">
                Самозанятый или ИП для 1С-фрилансера →
              </p>
              <p className="text-xs text-slate-500 mt-1">Когда переходить с НПД на ИП УСН</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 text-center">
          <p className="text-sm text-indigo-700 font-medium">
            Узнайте, занижаете ли вы ставку
          </p>
          <p className="text-xs text-indigo-500 mt-1 mb-3">
            Большинство 1С-фрилансеров берут на 15–30% меньше рынка. Калькулятор поможет
            найти правильную цифру.
          </p>
          <Link
            href="/stavka/1c-razrabotchik"
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Рассчитать ставку бесплатно →
          </Link>
        </div>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;
          <Link href="/" className="hover:text-indigo-600">← Главная</Link>
          &nbsp;·&nbsp;
          <Link href="/stati" className="hover:text-indigo-600">Все статьи</Link>
          &nbsp;·&nbsp;
          <Link href="/stavka" className="hover:text-indigo-600">Ставки по специальностям</Link>
        </footer>
      </main>
    </>
  );
}
