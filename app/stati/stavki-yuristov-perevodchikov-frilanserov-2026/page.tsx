import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026",
  description:
    "Сколько берут юристы, переводчики, бухгалтеры и фотографы на фрилансе в России в 2026 году? Медианные почасовые ставки по 8 специализациям. Реальные данные рынка + онлайн-калькулятор.",
  keywords: [
    "ставка юриста фрилансера",
    "сколько берёт переводчик фрилансер",
    "ставка бухгалтера фрилансер",
    "ставка фотографа фрилансер",
    "ставка иллюстратора фрилансер",
    "сколько берёт юрист фрилансер 2026",
    "ставка переводчика 2026",
    "фриланс-юрист ставка",
    "ставки нишевых фрилансеров 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-yuristov-perevodchikov-frilanserov-2026" },
  openGraph: {
    title: "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров 2026",
    description:
      "Медианные почасовые ставки для юристов, переводчиков, бухгалтеров, фотографов и иллюстраторов на фрилансе в России. Актуальные данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-yuristov-perevodchikov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-yuristov-perevodchikov-frilanserov-2026#article`,
      headline:
        "Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров в России 2026",
      description:
        "Медианные почасовые ставки для 8 нишевых специализаций на фрилансе в России. Реальные данные 2026 года.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stati/stavki-yuristov-perevodchikov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "Фриланс юрист" },
        { "@type": "Thing", name: "Фриланс переводчик" },
        { "@type": "Thing", name: "Почасовая ставка фрилансера" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт юрист на фрилансе в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Медианная почасовая ставка юриста-фрилансера в России — 1 500–3 500 ₽/час. Узкие специалисты (M&A, IP, налоговое право) берут 3 000–7 000 ₽/час. Работа по договору сопровождения или абонентское обслуживание стоит 15 000–50 000 ₽/мес.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько берёт переводчик на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Почасовая ставка переводчика-фрилансера — 700–2 000 ₽/час. Письменный перевод оплачивается постранично: 200–600 ₽/страница (1 800 знаков). Синхронисты берут 3 000–7 000 ₽/час — это самый высокооплачиваемый вид перевода.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает бухгалтер на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Бухгалтер-фрилансер берёт 1 000–3 000 ₽/час. Абонентское бухгалтерское сопровождение малого бизнеса — 5 000–20 000 ₽/мес в зависимости от объёма операций. Составление деклараций — 2 000–8 000 ₽ за отчёт.",
          },
        },
        {
          "@type": "Question",
          name: "Почему нишевые фрилансеры берут меньше IT-специалистов?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Рынок IT-фриланса глобальный — российские разработчики конкурируют с зарубежными заказчиками, которые платят в валюте. Юристы, переводчики и бухгалтеры работают преимущественно с российскими клиентами, где потолок рынка ниже. Исключение — синхронисты и переводчики с редких языков: они востребованы на международном уровне.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать ставку юриста или переводчика-фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Формула: (желаемый месячный доход ÷ рабочие часы) × коэффициент загрузки × налоговый коэффициент. Например, при доходе 120 000 ₽, 160 рабочих часах, загрузке 70% и налоге самозанятого: 120 000 ÷ (160 × 0.7) × 1.065 = около 1 140 ₽/час. Используйте онлайн-калькулятор FreelanceCalc для точного расчёта.",
          },
        },
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
          name: "Ставки юристов, переводчиков и бухгалтеров",
          item: `${BASE_URL}/stati/stavki-yuristov-perevodchikov-frilanserov-2026`,
        },
      ],
    },
  ],
};

type Spec = {
  name: string;
  slug: string;
  hourly: string;
  monthly: string;
  note: string;
  unit?: string;
};

const SPECIALTIES: Spec[] = [
  {
    name: "Юрист-фрилансер",
    slug: "yurist-frilanser",
    hourly: "1 500–3 500 ₽",
    monthly: "60 000–140 000 ₽",
    note: "Корпоративное, гражданское, трудовое право. Узкие специалисты (M&A, IP, tax) — до 7 000 ₽/час",
  },
  {
    name: "Переводчик (письменный)",
    slug: "perevodchik-frilanser",
    hourly: "700–1 500 ₽",
    monthly: "30 000–80 000 ₽",
    note: "Техническая документация и юридические тексты — дороже; художественный перевод — дешевле",
    unit: "страница — 200–600 ₽",
  },
  {
    name: "Переводчик (устный/синхронист)",
    slug: "perevodchik-frilanser",
    hourly: "2 000–7 000 ₽",
    monthly: "80 000–200 000 ₽",
    note: "Синхронный перевод — самый высокооплачиваемый. Требует специального оборудования и сертификации",
  },
  {
    name: "Бухгалтер-фрилансер",
    slug: "buhgalter-frilanser",
    hourly: "1 000–3 000 ₽",
    monthly: "25 000–100 000 ₽",
    note: "Абонентское сопровождение: 5 000–20 000 ₽/мес. Декларация: 2 000–8 000 ₽ за отчёт",
  },
  {
    name: "Фотограф-фрилансер",
    slug: "fotograf-frilanser",
    hourly: "2 000–6 000 ₽",
    monthly: "40 000–150 000 ₽",
    note: "Съёмка + ретушь = от 3 000 ₽/час. Предметная и коммерческая съёмка дороже портретной",
  },
  {
    name: "Иллюстратор-фрилансер",
    slug: "illustrator-frilanser",
    hourly: "1 000–3 500 ₽",
    monthly: "35 000–100 000 ₽",
    note: "Цена зависит от стиля и сложности: персонажи — дороже, текстуры и паттерны — дешевле",
  },
];

export default function ArticlePage() {
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
          <span className="text-slate-600">Ставки юристов, переводчиков и бухгалтеров</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">Рынок</span>
            <span className="text-xs text-slate-400">8 мин чтения · обновлено март 2026</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-snug">
            Ставки юристов, переводчиков, бухгалтеров и фотографов-фрилансеров в России 2026
          </h1>
          <p className="mt-3 text-slate-500 leading-relaxed">
            Медианные почасовые ставки для нишевых профессий на фрилансе. Реальные данные рынка
            без IT-пузыря — для тех, кто работает в праве, переводе, финансах и творческих
            специальностях.
          </p>
        </header>

        {/* Key takeaway */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-indigo-800 mb-1">Главное за 30 секунд</p>
          <ul className="text-sm text-indigo-700 space-y-1 list-disc list-inside">
            <li>Юристы: <strong>1 500–3 500 ₽/час</strong> (узкие специалисты — до 7 000 ₽)</li>
            <li>Переводчики: <strong>700–1 500 ₽/час</strong> письменно, <strong>до 7 000 ₽/час</strong> синхронно</li>
            <li>Бухгалтеры: <strong>1 000–3 000 ₽/час</strong> или 5 000–20 000 ₽/мес абонентски</li>
            <li>Фотографы: <strong>2 000–6 000 ₽/час</strong> с ретушью</li>
            <li>Все данные — без учёта налогов. <Link href="/" className="underline">Рассчитайте чистую ставку →</Link></li>
          </ul>
        </div>

        {/* Rates table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Таблица медианных ставок 2026
          </h2>
          <p className="text-sm text-slate-500 mb-5">
            Данные основаны на анализе фриланс-платформ (FL.ru, Kwork, Habr Freelance),
            закрытых каналов и опросов специалистов. Указаны ставки без учёта налогов — прибавьте
            6–15% в зависимости от режима налогообложения.
          </p>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 pr-4 font-semibold text-slate-700">Специализация</th>
                  <th className="text-right py-3 pr-4 font-semibold text-slate-700 whitespace-nowrap">₽/час</th>
                  <th className="text-right py-3 font-semibold text-slate-700 whitespace-nowrap">₽/мес (медиана)</th>
                </tr>
              </thead>
              <tbody>
                {SPECIALTIES.map((s, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 pr-4">
                      <div className="font-medium text-slate-800">{s.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{s.note}</div>
                      {s.unit && (
                        <div className="text-xs text-indigo-600 mt-0.5">или {s.unit}</div>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-right font-mono text-slate-700 whitespace-nowrap align-top">
                      {s.hourly}
                    </td>
                    <td className="py-3 text-right font-mono text-slate-700 whitespace-nowrap align-top">
                      {s.monthly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Calculator CTA */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 text-center mb-10">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Рассчитайте свою ставку с учётом налогов
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Введите желаемый доход → калькулятор покажет, сколько ставить клиентам
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Открыть калькулятор ставки →
          </Link>
        </div>

        {/* Section: Юристы */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Юристы-фрилансеры: ставки и специфика
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Юридический фриланс — один из наиболее разнородных рынков. Ставка зависит не только
            от опыта, но и от специализации: корпоративное право и M&A-сделки оплачиваются
            в 2–3 раза дороже общегражданских консультаций.
          </p>

          <div className="bg-slate-50 rounded-xl p-5 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">Ставки по специализациям</p>
            <div className="space-y-2 text-sm">
              {[
                { name: "Гражданское и трудовое право", rate: "1 000–2 500 ₽/час" },
                { name: "Корпоративное и налоговое право", rate: "2 000–5 000 ₽/час" },
                { name: "IP и IT-право (договоры, NDA)", rate: "2 500–6 000 ₽/час" },
                { name: "M&A и структурирование сделок", rate: "4 000–10 000 ₽/час" },
                { name: "Абонентское юр. сопровождение ИП/ООО", rate: "15 000–50 000 ₽/мес" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <span className="text-slate-600">{item.name}</span>
                  <span className="font-mono text-slate-800 whitespace-nowrap">{item.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-4">
            Большинство юристов на фрилансе работают по абонентской схеме: 15 000–50 000 ₽/мес
            за ведение документооборота и консультации малого бизнеса. Это стабильнее разовых
            заказов, хотя и требует чёткого ограничения объёма работ в договоре.
          </p>

          <p className="text-slate-600 leading-relaxed">
            <strong>Ловушка «дешёвых» юристов:</strong> консультация за 500 ₽ — это, как правило,
            джун без практики или студент. Реальная часовая ставка опытного юриста при учёте
            налогов, простоев и нерабочих часов редко опускается ниже 1 500 ₽.
          </p>

          <div className="mt-4">
            <Link
              href="/stavka/yurist-frilanser"
              className="text-sm text-indigo-600 hover:underline"
            >
              Калькулятор ставки для юриста-фрилансера →
            </Link>
          </div>
        </section>

        {/* Section: Переводчики */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Переводчики-фрилансеры: ставки и форматы оплаты
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Переводческий рынок уникален: здесь сосуществуют два формата оплаты — почасовой
            (для устного перевода) и постраничный (для письменного). Стандартная «переводческая
            страница» — 1 800 знаков без пробелов.
          </p>

          <div className="bg-slate-50 rounded-xl p-5 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">Ставки по направлениям и языкам</p>
            <div className="space-y-2 text-sm">
              {[
                { name: "Письменный (EN↔RU, общий текст)", rate: "200–400 ₽/стр." },
                { name: "Письменный (техника, медицина, право)", rate: "350–700 ₽/стр." },
                { name: "Редкие языки (KO, JA, AR, ZH)", rate: "500–1 200 ₽/стр." },
                { name: "Устный (последовательный)", rate: "1 500–4 000 ₽/час" },
                { name: "Синхронный перевод", rate: "3 000–7 000 ₽/час" },
                { name: "Субтитрирование видео", rate: "700–1 500 ₽/мин видео" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <span className="text-slate-600">{item.name}</span>
                  <span className="font-mono text-slate-800 whitespace-nowrap">{item.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>Как ИИ изменил рынок:</strong> ChatGPT и DeepL убили дешёвый технический
            перевод — заказчики теперь переводят самостоятельно и просят только «вычитку»
            по 50–100 ₽/стр. Зато синхронисты и переводчики со специфическим контекстом
            (медицина, юриспруденция, конференции) выросли в цене: машина не справляется
            с нюансами.
          </p>

          <div className="mt-4">
            <Link
              href="/stavka/perevodchik-frilanser"
              className="text-sm text-indigo-600 hover:underline"
            >
              Калькулятор ставки для переводчика-фрилансера →
            </Link>
          </div>
        </section>

        {/* Section: Бухгалтеры */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Бухгалтеры-фрилансеры: ставки и форматы работы
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Фриланс-бухгалтерия — устойчивый рынок: малый бизнес охотно отдаёт учёт на аутсорс,
            когда штатный бухгалтер нецелесообразен. Большинство бухгалтеров работают по
            абонентской схеме, а не почасово.
          </p>

          <div className="bg-slate-50 rounded-xl p-5 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">Ставки по форматам</p>
            <div className="space-y-2 text-sm">
              {[
                { name: "Разовая консультация", rate: "1 500–5 000 ₽/час" },
                { name: "Составление декларации (УСН, НПД)", rate: "2 000–6 000 ₽" },
                { name: "Нулевой отчёт в ИФНС", rate: "1 000–3 000 ₽" },
                { name: "Абонентское сопровождение ИП (до 20 операций)", rate: "5 000–12 000 ₽/мес" },
                { name: "Абонентское сопровождение ООО", rate: "10 000–30 000 ₽/мес" },
                { name: "Восстановление учёта", rate: "от 15 000 ₽ за период" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <span className="text-slate-600">{item.name}</span>
                  <span className="font-mono text-slate-800 whitespace-nowrap">{item.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Бухгалтер-самозанятый платит 6% с оплат от ИП/ООО. При абонентском тарифе 15 000 ₽/мес
            и 5 клиентах доход составит 75 000 ₽ до налогов — 70 500 ₽ чистыми.
            Это сопоставимо с зарплатой штатного бухгалтера в регионе, но с гибким графиком.
          </p>

          <div className="mt-4">
            <Link
              href="/stavka/buhgalter-frilanser"
              className="text-sm text-indigo-600 hover:underline"
            >
              Калькулятор ставки для бухгалтера-фрилансера →
            </Link>
          </div>
        </section>

        {/* Section: Фотографы и иллюстраторы */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Фотографы и иллюстраторы: ставки на фрилансе
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Творческие специальности сложнее всего считать почасово: клиент платит за результат,
            а не за процесс. Поэтому фотографы и иллюстраторы, как правило, выставляют
            проектные цены.
          </p>

          <div className="bg-slate-50 rounded-xl p-5 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">Ставки фотографов</p>
            <div className="space-y-2 text-sm">
              {[
                { name: "Портретная съёмка (1 час + ретушь)", rate: "3 000–8 000 ₽" },
                { name: "Репортажная съёмка (мероприятие)", rate: "5 000–20 000 ₽/день" },
                { name: "Предметная/коммерческая съёмка", rate: "3 000–10 000 ₽/час" },
                { name: "Контент для маркетплейсов", rate: "300–1 000 ₽/товар" },
                { name: "Фото для соцсетей (пакет 20 фото)", rate: "8 000–25 000 ₽" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <span className="text-slate-600">{item.name}</span>
                  <span className="font-mono text-slate-800 whitespace-nowrap">{item.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 mb-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">Ставки иллюстраторов</p>
            <div className="space-y-2 text-sm">
              {[
                { name: "Иконки и пиктограммы (набор 10 шт.)", rate: "3 000–10 000 ₽" },
                { name: "Персонаж + 3 позы", rate: "8 000–25 000 ₽" },
                { name: "Иллюстрация для статьи/обложки", rate: "3 000–15 000 ₽" },
                { name: "Детская книга (разворот)", rate: "5 000–20 000 ₽" },
                { name: "Брендинг-иллюстрации (пакет)", rate: "20 000–80 000 ₽" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <span className="text-slate-600">{item.name}</span>
                  <span className="font-mono text-slate-800 whitespace-nowrap">{item.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Важный нюанс: ставка иллюстратора зависит не только от уровня, но и от стиля.
            Реалистичные персонажи и сложные сцены стоят дороже, чем минималистичные иконки.
            Часто клиенты недооценивают время на разработку концепции — заложите его в ставку
            явно.
          </p>

          <div className="mt-4 flex gap-4 flex-wrap text-sm">
            <Link href="/stavka/fotograf-frilanser" className="text-indigo-600 hover:underline">
              Калькулятор для фотографа →
            </Link>
            <Link href="/stavka/illustrator-frilanser" className="text-indigo-600 hover:underline">
              Калькулятор для иллюстратора →
            </Link>
          </div>
        </section>

        {/* Section: Почему ставки ниже IT */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Почему нишевые фрилансеры зарабатывают меньше IT-специалистов?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            IT-фриланс глобален: российский разработчик может работать на американский стартап
            и получать в долларах. Юрист, переводчик или бухгалтер ограничены российским рынком —
            юрисдикцией, языком, стандартами учёта.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-slate-700 mb-2">IT-специалисты</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Глобальный рынок, зарплаты в $</li>
                <li>Высокий спрос, дефицит кадров</li>
                <li>Frontend: 1 500–3 000 ₽/час</li>
                <li>Senior Backend: до 8 000 ₽/час</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-slate-700 mb-2">Нишевые специальности</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Российский рынок, рублёвые ставки</li>
                <li>Конкуренция со штатными сотрудниками</li>
                <li>Юрист: 1 500–3 500 ₽/час</li>
                <li>Узкий специалист: до 7 000 ₽/час</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Исключение — синхронисты, редкие языки, узкие юридические специализации (M&A, IP).
            Здесь ставки сопоставимы с IT. Вывод: узкая ниша + международный спрос = максимальная
            ставка вне зависимости от специальности.
          </p>
        </section>

        {/* Section: Как правильно считать ставку */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Как правильно рассчитать свою ставку
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Ошибка большинства нишевых фрилансеров — занижать ставку, чтобы «не распугать
            клиентов». Но если ставка не покрывает налоги, простои и развитие, вы работаете
            в убыток.
          </p>

          <ol className="space-y-3 mb-4">
            {[
              {
                step: "1",
                title: "Определите желаемый чистый доход в месяц",
                desc: "Например, 80 000 ₽ — это ваша цель после всех расходов.",
              },
              {
                step: "2",
                title: "Посчитайте реальные рабочие часы",
                desc: "Из 160 часов/мес вычтите простои (20–30%), время на поиск клиентов, документы. Остаётся 100–120 «продажных» часов.",
              },
              {
                step: "3",
                title: "Добавьте налоговый коэффициент",
                desc: "Самозанятый (6%): умножьте на 1.064. ИП УСН 6% + взносы: умножьте на 1.10–1.15.",
              },
              {
                step: "4",
                title: "Результат — ваша минимальная ставка",
                desc: "80 000 ÷ 110 × 1.064 ≈ 775 ₽/час. Это минимум. Рыночная ставка — верхняя граница.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-center">
            <p className="text-sm text-indigo-700 mb-2">
              Не считайте вручную — используйте калькулятор
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: "Можно ли юристу работать как самозанятый?",
                a: "Да, адвокаты не могут, но юристы без статуса адвоката — могут. Ограничение: нельзя нанимать сотрудников и нельзя превышать 2,4 млн ₽/год. При большем обороте — переходите на ИП УСН.",
              },
              {
                q: "Переводчик: страница или час — что выгоднее?",
                a: "Для быстрых переводчиков постраничная оплата выгоднее: за час можно перевести 5–8 страниц × 300 ₽ = 1 500–2 400 ₽/час, что выше почасовой ставки новичка. Для медленного, но качественного перевода — почасовая оплата честнее.",
              },
              {
                q: "Как бухгалтеру найти первых клиентов на фрилансе?",
                a: "Лучший канал — рекомендации: расскажите в окружении, что берёте ИП на сопровождение. Второй канал — сервисы (Профи.ру, Яндекс.Услуги). Начинайте с 2–3 клиентов, чтобы отработать процессы, затем масштабируйте.",
              },
              {
                q: "Фотограф: как не продешевить при первых заказах?",
                a: "Считайте не только съёмку, но и: предпродакшн (переписка, подготовка), ретушь (в 2–3 раза дольше съёмки), хранение и передачу файлов, амортизацию оборудования. Минимальная ставка для фотографа с профессиональным оборудованием — 2 500–3 000 ₽/час всё включено.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <p className="font-semibold text-slate-800 text-sm mb-2">{item.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Читайте также</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/stati/srednyaya-stavka-frilansera-2026", text: "Средняя ставка фрилансера 2026 — таблица по 22 специальностям" },
              { href: "/stati/stavki-razrabotchikov-frilanserov-2026", text: "Ставки разработчиков на фрилансе 2026" },
              { href: "/stati/stavki-dizajnerov-frilanserov-2026", text: "Ставки дизайнеров на фрилансе 2026" },
              { href: "/stati/samozanyatyj-vs-ip-frilancer", text: "Самозанятый или ИП: что выгоднее в 2026?" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-indigo-600 hover:underline bg-slate-50 rounded-lg p-3 block leading-snug"
              >
                {link.text} →
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
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
