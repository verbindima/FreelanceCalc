import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Самозанятый и пенсия 2026: как не остаться без пенсии",
  description:
    "Самозанятые по умолчанию не платят пенсионные взносы. Каждый год без взносов — потеря пенсионного стажа и баллов. Разбираем добровольные взносы в СФР, сколько платить в 2026, и как не остаться без пенсии.",
  keywords: [
    "самозанятый пенсия 2026",
    "самозанятый пенсионные взносы",
    "самозанятый ПФР взносы",
    "пенсия для самозанятых",
    "самозанятый СФР пенсия",
    "добровольные взносы самозанятого",
    "самозанятый пенсионный стаж",
    "пенсия фрилансер 2026",
    "самозанятый без пенсии",
    "взносы самозанятого в пенсионный фонд",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/samozanyatyj-pensiya-2026" },
  openGraph: {
    title: "Самозанятый и пенсия 2026: как не остаться без пенсии",
    description:
      "По умолчанию самозанятые не накапливают пенсионный стаж. Каждый год без взносов = потеря баллов. Что делать — разбираем добровольные взносы в СФР и альтернативы.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/samozanyatyj-pensiya-2026`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/samozanyatyj-pensiya-2026#article`,
      headline: "Самозанятый и пенсия 2026: как не остаться без пенсии",
      description:
        "Самозанятые по умолчанию не платят пенсионные взносы. Разбираем добровольные взносы в СФР, расчёт стоимости пенсионного года, сравнение стратегий накопления.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/samozanyatyj-pensiya-2026`,
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
          { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Самозанятый и пенсия 2026",
            item: `${BASE_URL}/stati/samozanyatyj-pensiya-2026`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/samozanyatyj-pensiya-2026#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Платит ли самозанятый пенсионные взносы?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, по умолчанию самозанятые (плательщики НПД) не платят пенсионные взносы. Налог НПД (4%/6%) не включает пенсионную составляющую. Это значит, что годы работы на НПД без добровольных взносов в СФР не засчитываются в трудовой стаж и не дают пенсионных баллов.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько нужно платить самозанятому в СФР для пенсии в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В 2026 году минимальный добровольный взнос для получения полного года пенсионного стажа составляет 50 798 рублей в год (фиксированный размер страховых взносов ИП на ОПС). Можно платить частями ежемесячно — около 4 233 рублей в месяц. Чтобы получить засчитанный год стажа, нужно уплатить не менее этой суммы до 31 декабря текущего года.",
          },
        },
        {
          "@type": "Question",
          name: "Будет ли самозанятый получать пенсию, если не платит взносы?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятый без добровольных взносов в СФР не накапливает страховой стаж и пенсионные баллы. По достижении пенсионного возраста (65 лет для мужчин, 60 для женщин в 2026 г.) при недостатке стажа и баллов государственная страховая пенсия назначена не будет. Вместо неё назначается социальная пенсия — но только на 5 лет позже порогового возраста и в значительно меньшем размере.",
          },
        },
        {
          "@type": "Question",
          name: "Как самозанятому подключить добровольные взносы в СФР на пенсию?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Чтобы платить добровольные взносы на пенсионное страхование, самозанятому нужно: 1) Подать заявление в СФР через портал Госуслуги или лично в отделении. 2) Получить уведомление о регистрации в качестве добровольного плательщика. 3) Платить взносы до 31 декабря текущего года (единовременно или частями). В 2026 году минимальная сумма для засчёта полного года стажа — 50 798 рублей.",
          },
        },
        {
          "@type": "Question",
          name: "Что выгоднее: платить в СФР или копить самостоятельно на пенсию?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Оба подхода имеют смысл, но с разными рисками. Взносы в СФР дают официальный стаж и гарантированную страховую пенсию (при наборе 15 лет стажа и 30 баллов к 2028+ году). Самостоятельные накопления (НПФ, ИИС, недвижимость) дают потенциально больший доход, но несут рыночные риски. Оптимальная стратегия для фрилансера — совместить: платить минимум в СФР для набора стажа и параллельно инвестировать самостоятельно.",
          },
        },
        {
          "@type": "Question",
          name: "Засчитывается ли самозанятость в трудовой стаж?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, годы работы на НПД без добровольных взносов в СФР не засчитываются в страховой (пенсионный) стаж. Только при уплате добровольных взносов на ОПС в СФР период самозанятости будет учтён при расчёте пенсии.",
          },
        },
      ],
    },
  ],
};

const STRATEGIES = [
  {
    name: "Только СФР (пенсионные взносы)",
    cost: "~50 798 ₽/год",
    pros: "Официальный стаж, государственная гарантия, стабильная пенсия",
    cons: "Низкая доходность относительно рынка, деньги «заморожены» до пенсии",
    verdict: "Базовая защита",
    color: "blue",
  },
  {
    name: "Только самостоятельные накопления",
    cost: "Любая сумма",
    pros: "Гибкость, потенциально высокая доходность (ИИС, акции, облигации)",
    cons: "Нет стажа → нет страховой пенсии, рыночные риски, нужна финансовая дисциплина",
    verdict: "Высокий риск без стажа",
    color: "amber",
  },
  {
    name: "Комбинированная стратегия",
    cost: "~50 798 ₽ СФР + инвестиции",
    pros: "Стаж + доходность. Покрывает оба риска",
    cons: "Требует большего бюджета",
    verdict: "Оптимально",
    color: "green",
  },
];

export default function SamozanyatyjPensiyaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3 flex-wrap">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 text-sm hover:text-blue-600">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Самозанятый и пенсия 2026</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Самозанятый и пенсия 2026: как не остаться без пенсии
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Хорошая новость: налог НПД маленький. Плохая новость: он не включает
              пенсионные взносы. Каждый год работы на самозанятости без дополнительных
              действий — это потерянный год стажа и пенсионных баллов навсегда.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Обновлено: март 2026</span>
              <span>·</span>
              <span>Пенсия и взносы</span>
              <span>·</span>
              <span>Россия</span>
            </div>
          </div>

          {/* Alarm banner */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-10">
            <div className="font-semibold text-red-900 mb-2">
              Критически важно: что теряет самозанятый без взносов
            </div>
            <ul className="text-sm text-red-800 space-y-1.5">
              <li>
                <strong>Нет пенсионного стажа</strong> — годы на НПД без взносов не засчитываются
              </li>
              <li>
                <strong>Нет пенсионных баллов</strong> — страховая пенсия не формируется
              </li>
              <li>
                <strong>Риск остаться без страховой пенсии</strong> — при недостатке стажа (15 лет)
                и баллов (30 ИПК) назначается только социальная пенсия — на 5 лет позже и вдвое меньше
              </li>
              <li>
                <strong>Потеря необратима</strong> — пропущенные годы стажа нельзя «докупить»
                задним числом
              </li>
            </ul>
          </div>

          {/* Key numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Взносы в НПД на ОПС", value: "0 ₽", sub: "по умолчанию" },
              { label: "Стаж без взносов", value: "0 лет", sub: "каждый год НПД" },
              { label: "Взнос для стажа", value: "~50 798 ₽", sub: "в год в 2026" },
              { label: "Мин. стаж для пенсии", value: "15 лет", sub: "к 2028+ году" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl border border-gray-200 p-4 text-center"
              >
                <div className="text-2xl font-bold text-red-600">{item.value}</div>
                <div className="text-xs font-medium text-gray-700 mt-1">{item.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Section: how it works */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему самозанятые остаются без пенсии
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Налог на профессиональный доход (НПД) — самый простой налоговый режим в России.
              Ставки 4% (с физлиц) и 6% (с юрлиц) — это всё, что платит самозанятый государству.
              Никакой бухгалтерии, никаких деклараций. Удобно.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Но именно здесь скрыта главная ловушка: в ставках НПД{" "}
              <strong>нет пенсионной составляющей</strong>. У наёмных работников работодатель
              ежемесячно отчисляет 22% от зарплаты в СФР на пенсионное страхование. У ИП —
              обязательные фиксированные взносы (~50 798 ₽/год в 2026 г.). У самозанятых —
              ноль рублей, ноль баллов, ноль стажа.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Это не баг и не забытая деталь — это архитектурное решение НПД как режима
              для подработки, а не для основного дохода. Фрилансеры, которые перешли на
              самозанятость на постоянной основе, должны решить пенсионный вопрос самостоятельно.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
              <p className="font-semibold text-amber-900 mb-2">Эффект потери (loss aversion)</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                Каждый год бездействия — это не просто «отсутствие прибыли», это реальная потеря.
                Фрилансер, 10 лет работающий на НПД без взносов, теряет 10 лет стажа и примерно
                10–15 пенсионных баллов. Восстановить их невозможно: время не купишь.
                По достижении 65 лет (мужчины) такой фрилансер рискует получить социальную пенсию
                в ~7–8 тыс. ₽/мес. вместо страховой 20–30 тыс. ₽/мес.
              </p>
            </div>
          </section>

          {/* Section: what gives stazh */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что нужно для страховой пенсии в 2026 году
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Чтобы получить страховую пенсию по старости, нужно выполнить три условия
              одновременно:
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Условие</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Требование в 2026</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">К 2028 году</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      cond: "Пенсионный возраст",
                      val2026: "65 лет (М) / 60 лет (Ж)",
                      val2028: "65 / 60 (без изменений)",
                    },
                    {
                      cond: "Страховой стаж",
                      val2026: "14 лет",
                      val2028: "15 лет (финальное значение)",
                    },
                    {
                      cond: "Пенсионные баллы (ИПК)",
                      val2026: "28,2 балла",
                      val2028: "30 баллов (финальное)",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.cond}
                      className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      <td className="px-4 py-3 text-gray-700 font-medium">{row.cond}</td>
                      <td className="px-4 py-3 text-gray-700">{row.val2026}</td>
                      <td className="px-4 py-3 text-gray-500">{row.val2028}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Если не выполнено хотя бы одно условие — страховая пенсия не назначается.
              Вместо неё — социальная пенсия, которая назначается на 5 лет позже
              (70 лет для мужчин) и составляет примерно 7–8 тыс. ₽/мес. (в 2026 году).
            </p>
          </section>

          {/* Section: voluntary contributions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Добровольные взносы в СФР: как самозанятому получить пенсионный стаж
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Самозанятый может добровольно платить страховые взносы на обязательное
              пенсионное страхование (ОПС) в Социальный фонд России (СФР). Это единственный
              официальный способ накапливать пенсионный стаж, оставаясь на НПД.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Сколько платить в 2026 году</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  title: "Минимальный взнос (1 год стажа)",
                  value: "50 798 ₽",
                  sub: "в год",
                  desc: "Базовый размер — как у ИП. Засчитывается полный год стажа.",
                },
                {
                  title: "Ежемесячно",
                  value: "~4 233 ₽",
                  sub: "в месяц",
                  desc: "Удобно делить на 12 равных платежей.",
                },
                {
                  title: "Частичный год",
                  value: "Пропорционально",
                  sub: "от суммы",
                  desc: "Заплатили половину → засчитается ~6 месяцев стажа.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-blue-50 rounded-xl border border-blue-100 p-4"
                >
                  <div className="text-xl font-bold text-blue-700">{item.value}</div>
                  <div className="text-xs text-blue-500 mb-2">{item.sub}</div>
                  <div className="text-xs font-medium text-gray-700 mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
              <p className="font-semibold text-gray-900 mb-3">
                Как подключить добровольные взносы на пенсию: пошагово
              </p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 w-5 flex-shrink-0">1.</span>
                  <span>
                    Войдите на портал Госуслуги (gosuslugi.ru) или обратитесь лично в отделение СФР.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 w-5 flex-shrink-0">2.</span>
                  <span>
                    Подайте заявление о добровольном вступлении в правоотношения по ОПС
                    (форма ДВС-1).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 w-5 flex-shrink-0">3.</span>
                  <span>
                    Получите уведомление СФР о регистрации и реквизиты для оплаты.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 w-5 flex-shrink-0">4.</span>
                  <span>
                    Оплатите взносы — единовременно или частями — до <strong>31 декабря</strong>{" "}
                    текущего года.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600 w-5 flex-shrink-0">5.</span>
                  <span>
                    Год засчитается в стаж после подтверждения платежа СФР (обычно в январе–феврале
                    следующего года).
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Важно:</strong> Если вы уже платите добровольные взносы в СФР на
              социальное страхование (больничные) — это отдельный вид взносов. Взносы на ОПС
              (пенсионный стаж) — другая программа, нужно регистрироваться отдельно.
            </div>
          </section>

          {/* Section: cost calculator */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Расчёт взносов: сколько заплатить за 10 и 20 лет стажа
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Посмотрим, сколько стоит обеспечить себе минимально необходимый стаж,
              если начать платить взносы в разном возрасте.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Сценарий</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">Лет до пенсии</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">Взнос/год</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">Итого за период</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Результат</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      scenario: "Начали в 35, пенсия в 65",
                      years: "30",
                      perYear: "50 798 ₽",
                      total: "~1 524 000 ₽",
                      result: "30 лет стажа — страховая пенсия",
                    },
                    {
                      scenario: "Начали в 45, пенсия в 65",
                      years: "20",
                      perYear: "50 798 ₽",
                      total: "~1 016 000 ₽",
                      result: "20 лет стажа — страховая пенсия",
                    },
                    {
                      scenario: "Начали в 50, пенсия в 65",
                      years: "15",
                      perYear: "50 798 ₽",
                      total: "~762 000 ₽",
                      result: "15 лет стажа — минимально для пенсии",
                    },
                    {
                      scenario: "Начали в 55, пенсия в 65",
                      years: "10",
                      perYear: "50 798 ₽",
                      total: "~508 000 ₽",
                      result: "10 лет — не хватит для страховой",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.scenario}
                      className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} ${i === 3 ? "text-red-700" : ""}`}
                    >
                      <td className="px-4 py-3 font-medium">{row.scenario}</td>
                      <td className="px-4 py-3 text-center">{row.years}</td>
                      <td className="px-4 py-3 text-center">{row.perYear}</td>
                      <td className="px-4 py-3 text-center font-semibold">{row.total}</td>
                      <td className="px-4 py-3">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">
              * Расчёт по ставке 2026 года (50 798 ₽/год). Ставка ежегодно индексируется.
              Учитывайте это при долгосрочном планировании.
            </p>

            {/* Calculator CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6">
              <p className="text-sm font-semibold text-blue-900 mb-1">
                Рассчитайте свою пенсию как самозанятый
              </p>
              <p className="text-sm text-blue-800 mb-3">
                Используйте калькулятор пенсии — введите возраст, имеющийся стаж и узнайте,
                сколько лет взносов ещё нужно оплатить.
              </p>
              <Link
                href="/instrumenty/kalkulator-pensii-samozanyatogo"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Калькулятор пенсии самозанятого →
              </Link>
            </div>
          </section>

          {/* Section: strategies comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Копить самому или платить в СФР: сравнение стратегий
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              У самозанятого фактически три пути для обеспечения пенсии. Разберём каждый.
            </p>
            <div className="space-y-4 mb-6">
              {STRATEGIES.map((s) => {
                const borderColor =
                  s.color === "blue"
                    ? "border-blue-200"
                    : s.color === "amber"
                      ? "border-amber-200"
                      : "border-green-200";
                const bgColor =
                  s.color === "blue"
                    ? "bg-blue-50"
                    : s.color === "amber"
                      ? "bg-amber-50"
                      : "bg-green-50";
                const textColor =
                  s.color === "blue"
                    ? "text-blue-700"
                    : s.color === "amber"
                      ? "text-amber-700"
                      : "text-green-700";
                const badgeBg =
                  s.color === "blue"
                    ? "bg-blue-100 text-blue-800"
                    : s.color === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-green-100 text-green-800";
                return (
                  <div
                    key={s.name}
                    className={`rounded-xl border ${borderColor} ${bgColor} p-5`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className={`font-bold text-base ${textColor}`}>{s.name}</h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeBg} flex-shrink-0`}>
                        {s.verdict}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Стоимость:</strong> {s.cost}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-medium text-gray-700 mb-1">Плюсы:</p>
                        <p className="text-gray-600">{s.pros}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 mb-1">Минусы:</p>
                        <p className="text-gray-600">{s.cons}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="font-semibold text-gray-900 mb-2">Рекомендация FreelanceCalc</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Для большинства фрилансеров оптимальна <strong>комбинированная стратегия</strong>:
                платить минимальные взносы в СФР (~50 798 ₽/год) для накопления официального стажа
                + инвестировать оставшееся самостоятельно через ИИС или НПФ.
                Это покрывает государственный минимум и даёт возможность сформировать
                дополнительный капитал.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-2">
                При доходе 100 000 ₽/месяц взнос в СФР на ОПС составляет около 4,2% дохода —
                сопоставимо с тем, что платят наёмные работники из «белой» зарплаты.
                Заложите это в свою ставку.
              </p>
            </div>
          </section>

          {/* Section: include in rate */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как учесть пенсионные взносы в ставке фрилансера
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Взносы в СФР на ОПС — такой же обязательный расход, как налог НПД.
              Если вы решили платить их, их нужно закладывать в ставку при расчёте
              дохода, иначе пенсионные отчисления съедят часть вашего чистого дохода.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Доход/месяц</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">НПД (6%)</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">Взнос ОПС/мес</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">Итого нагрузка</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">% дохода</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { income: "50 000 ₽", npd: "3 000 ₽", ops: "4 233 ₽", total: "7 233 ₽", pct: "14,5%" },
                    { income: "80 000 ₽", npd: "4 800 ₽", ops: "4 233 ₽", total: "9 033 ₽", pct: "11,3%" },
                    { income: "120 000 ₽", npd: "7 200 ₽", ops: "4 233 ₽", total: "11 433 ₽", pct: "9,5%" },
                    { income: "200 000 ₽", npd: "12 000 ₽", ops: "4 233 ₽", total: "16 233 ₽", pct: "8,1%" },
                  ].map((row, i) => (
                    <tr
                      key={row.income}
                      className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">{row.income}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.npd}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{row.ops}</td>
                      <td className="px-4 py-3 text-center font-semibold text-gray-900">{row.total}</td>
                      <td className="px-4 py-3 text-center font-semibold text-blue-700">{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              * Расчёт для работы с юрлицами (НПД 6%). Взнос ОПС — 50 798 ₽ / 12 = 4 233 ₽/мес.
            </p>

            {/* Main calculator CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Рассчитайте ставку с учётом пенсионных взносов
              </h3>
              <p className="text-blue-100 mb-6 text-sm md:text-base">
                Калькулятор FreelanceCalc поможет заложить все реальные расходы —
                налоги, взносы, простои, отпуск — и рассчитать справедливую ставку.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Рассчитать ставку →
                </Link>
                <Link
                  href="/nalog/sfr"
                  className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-400 transition-colors"
                >
                  Калькулятор СФР →
                </Link>
              </div>
            </div>
          </section>

          {/* Section: risks */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Риски остаться без пенсии: реальные сценарии
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-red-800 mb-2">
                  Сценарий 1: 15 лет на НПД без взносов (старт в 35 лет)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Фрилансер стал самозанятым в 35 лет и работал до 50 без добровольных взносов.
                  К 50 годам — 0 лет пенсионного стажа. До пенсии (65 лет) осталось 15 лет.
                  Это ровно минимум для страховой пенсии — но только если начать платить немедленно
                  и не пропустить ни одного года. Малейшая задержка — и стажа не хватит.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-amber-200 p-5">
                <h3 className="font-bold text-amber-800 mb-2">
                  Сценарий 2: Перерывы в платежах взносов
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Взносы в СФР добровольные — легко забыть или «отложить на следующий год».
                  Пропустили 2026 год → потеряли год стажа навсегда. Через 20 лет таких
                  «пропусков» может накопиться 5–7 лет недостающего стажа, что означает
                  отказ в страховой пенсии.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">
                  Сценарий 3: Предыдущий стаж по найму + самозанятость
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Если у вас есть стаж по трудовому договору (например, 5 лет) до перехода
                  на фриланс — он засчитывается. В таком случае нужно набрать лишь оставшиеся
                  9–10 лет взносов (до 14–15 лет). Подсчитайте свой имеющийся стаж на портале
                  Госуслуги в разделе «Сведения о трудовой деятельности».
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы про пенсию самозанятого
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Платит ли самозанятый пенсионные взносы?",
                  a: "Нет, по умолчанию самозанятые (плательщики НПД) не платят пенсионные взносы. НПД (4%/6%) не включает пенсионную составляющую. Годы работы на НПД без добровольных взносов в СФР не засчитываются в трудовой стаж и не дают пенсионных баллов.",
                },
                {
                  q: "Сколько нужно платить самозанятому в СФР для пенсии в 2026 году?",
                  a: "В 2026 году минимальный взнос для получения полного года пенсионного стажа — 50 798 рублей в год (фиксированный размер взносов ИП на ОПС). Можно платить частями ежемесячно (~4 233 ₽/мес.). Важно уплатить всю сумму до 31 декабря текущего года.",
                },
                {
                  q: "Засчитывается ли самозанятость в трудовой стаж?",
                  a: "Нет, годы работы на НПД без добровольных взносов в СФР не засчитываются в страховой стаж. Только при уплате добровольных взносов на ОПС период самозанятости будет учтён при расчёте пенсии.",
                },
                {
                  q: "Будет ли самозанятый получать пенсию без взносов?",
                  a: "При недостатке стажа (15 лет) и баллов (30 ИПК) страховая пенсия не назначается. Вместо неё — социальная пенсия на 5 лет позже порогового возраста (70 лет для мужчин) и в значительно меньшем размере (~7–8 тыс. ₽/мес. в 2026 году).",
                },
                {
                  q: "Как подключить добровольные пенсионные взносы самозанятому?",
                  a: "Через портал Госуслуги — найдите услугу «Добровольное вступление в правоотношения по ОПС» или обратитесь в отделение СФР лично. Подайте заявление по форме ДВС-1. После регистрации получите реквизиты для оплаты. Взносы перечисляйте до 31 декабря текущего года.",
                },
                {
                  q: "Что выгоднее: взносы в СФР или самостоятельные инвестиции?",
                  a: "Оптимальна комбинированная стратегия: минимальные взносы в СФР (~50 798 ₽/год) для набора официального стажа + самостоятельные инвестиции через ИИС или НПФ. Это покрывает государственный минимум и формирует дополнительный капитал. Полный отказ от взносов в пользу «только инвестиций» несёт риск остаться без страховой пенсии.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">По теме</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  href: "/stati/izmeneniya-samozanyatyh-2026",
                  title: "Изменения для самозанятых в 2026 году",
                  desc: "Ставки НПД, добровольные взносы в СФР, больничные",
                },
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  title: "Самозанятый или ИП: что выгоднее",
                  desc: "Сравнение по налогам, взносам и пенсии",
                },
                {
                  href: "/stati/skrytye-rashody-frilansera",
                  title: "Скрытые расходы фрилансера",
                  desc: "Всё, что нужно заложить в ставку помимо налогов",
                },
                {
                  href: "/nalog/sfr",
                  title: "Калькулятор страхования в СФР",
                  desc: "Рассчитайте выгоду от добровольных взносов",
                },
                {
                  href: "/stati/kak-oformit-samozanyatost-2026",
                  title: "Как оформить самозанятость в 2026",
                  desc: "Пошаговая инструкция через Госуслуги и «Мой налог»",
                },
                {
                  href: "/instrumenty/kalkulator-pensii-samozanyatogo",
                  title: "Калькулятор пенсии самозанятого",
                  desc: "Рассчитайте, сколько лет взносов вам ещё нужно",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <div className="font-medium text-gray-900 group-hover:text-blue-700 text-sm">
                    {link.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white mt-12">
          <div className="max-w-4xl mx-auto px-4 py-6 flex flex-wrap justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                FreelanceCalc
              </Link>{" "}
              — калькулятор ставки фрилансера
            </div>
            <nav className="flex gap-4 flex-wrap">
              <Link href="/stati" className="hover:text-blue-600">
                Статьи
              </Link>
              <Link href="/instrumenty" className="hover:text-blue-600">
                Инструменты
              </Link>
              <Link href="/goroda" className="hover:text-blue-600">
                По городам
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
