import type { Metadata } from "next";
import Link from "next/link";
import FlRuCalc from "./FlRuCalc";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Комиссия FL.ru 2026: калькулятор сколько берёт биржа с фрилансера",
  description:
    "Рассчитайте точную комиссию FL.ru по Безопасной сделке. Сколько фрилансер получит на руки, сколько заплатит заказчик. Сравнение с Kwork. Ставки 7–20% в зависимости от суммы накоплений.",
  keywords: [
    "комиссия fl ru",
    "fl.ru комиссия безопасная сделка",
    "сколько берёт fl.ru с фрилансера",
    "fl.ru комиссия калькулятор",
    "безопасная сделка fl.ru процент",
    "fl ru комиссия 2026",
    "fl.ru vs kwork комиссия",
    "фриланс биржа комиссия сравнение",
    "сколько берёт fl ru с заказчика",
    "fl.ru размер комиссии",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/komissiya/fl-ru" },
  openGraph: {
    title: "Калькулятор комиссии FL.ru 2026 — сколько берёт биржа",
    description:
      "Введите сумму сделки — узнайте комиссию FL.ru (Безопасная сделка): 7%, 12% или 20% в зависимости от истории с заказчиком. Сравнение с Kwork.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/komissiya/fl-ru`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Калькулятор комиссии FL.ru",
      description:
        "Онлайн-калькулятор комиссии FL.ru по Безопасной сделке 2026. Показывает сумму на руки фрилансеру, комиссию с заказчика, сравнивает с Kwork.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/komissiya/fl-ru`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Комиссии бирж", item: `${BASE_URL}/komissiya` },
        { "@type": "ListItem", position: 3, name: "FL.ru", item: `${BASE_URL}/komissiya/fl-ru` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Какая комиссия у FL.ru для фрилансера в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Комиссия FL.ru для фрилансера зависит от суммы, накопленной с конкретным заказчиком по Безопасной сделке: до 35 000 ₽ — 20%, от 35 000 до 350 000 ₽ — 12%, от 350 000 ₽ — 7%. Суммируются только сделки, заключённые после 28.07.2021.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько платит заказчик на FL.ru сверх суммы сделки?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Заказчик на FL.ru платит отдельную комиссию сверх суммы сделки: до 5 000 ₽ — 19,9%; 5 001–10 000 ₽ — 18,9%; 10 001–50 000 ₽ — 17,9%; 50 001–100 000 ₽ — 16,9%; от 100 001 ₽ — 15,9%. То есть при сделке на 50 000 ₽ заказчик фактически заплатит около 58 950 ₽.",
          },
        },
        {
          "@type": "Question",
          name: "Что такое Безопасная сделка на FL.ru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Безопасная сделка FL.ru — встроенный платёжный инструмент биржи. Заказчик вносит деньги на эскроу-счёт, фрилансер выполняет работу, после приёмки средства переводятся исполнителю за вычетом комиссии. Это защищает обе стороны от мошенничества, но делает FL.ru посредником.",
          },
        },
        {
          "@type": "Question",
          name: "FL.ru или Kwork — где комиссия меньше?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "У новых клиентов комиссии одинаковые: 20% на FL.ru и 20% на Kwork. При постоянном сотрудничестве: FL.ru снижает до 7% (порог 350 000 ₽ накопленных с клиентом), Kwork — до 7,5% (порог 300 000 ₽). Ключевое отличие: на Kwork заказчики НЕ платят комиссию, на FL.ru — платят 15,9–19,9% сверху.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать сумму договора, если хочу получить определённую сумму на руки?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Разделите желаемую сумму на руки на (1 − ставка комиссии). Примеры: хотите 40 000 ₽ при комиссии 20% → сумма сделки 50 000 ₽ (40 000 ÷ 0,8); при комиссии 12% → 45 455 ₽ (40 000 ÷ 0,88); при комиссии 7% → 43 011 ₽ (40 000 ÷ 0,93).",
          },
        },
      ],
    },
  ],
};

export default function FlRuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-400 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              FreelanceCalc
            </Link>
            <span>›</span>
            <span className="text-slate-600">Комиссии бирж</span>
            <span>›</span>
            <span className="text-slate-800 font-medium">FL.ru</span>
          </nav>

          {/* Hero */}
          <header>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Калькулятор комиссии FL.ru 2026
            </h1>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Введите сумму сделки — узнайте, сколько FL.ru удержит с вас и с заказчика.
              Комиссия зависит от истории с клиентом: от 7% до 20%.
            </p>
          </header>

          {/* Calculator */}
          <FlRuCalc />

          {/* Article */}
          <article className="space-y-5 text-slate-700">
            <section>
              <h2 className="text-base font-bold text-slate-800 mb-2">
                Как работает комиссия FL.ru по Безопасной сделке
              </h2>
              <p className="text-sm leading-relaxed">
                FL.ru берёт комиссию отдельно с фрилансера и отдельно с заказчика.
                Размер комиссии для фрилансера снижается по мере роста накопленных выплат
                от конкретного клиента: <strong>20% → 12% → 7%</strong>.
                Это значит, что с новыми клиентами вы всегда теряете 20% — и только
                выстраивая долгосрочные отношения, можно снизить ставку до 7%.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Заказчик при этом платит ещё 15,9–19,9% сверх суммы договора.
                Итого при новой сделке на 50&nbsp;000&nbsp;₽ фрилансер получит 40&nbsp;000&nbsp;₽,
                а заказчик заплатит около 58&nbsp;950&nbsp;₽ — биржа заберёт почти 19&nbsp;000&nbsp;₽.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-800 mb-2">
                Таблица комиссий FL.ru 2026
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 font-semibold text-slate-700 border border-slate-200">Накоплено с клиентом</th>
                      <th className="text-right px-3 py-2 font-semibold text-slate-700 border border-slate-200">Комиссия с фрилансера</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-2 border border-slate-200 text-slate-600">До 35 000 ₽ (новый клиент)</td>
                      <td className="px-3 py-2 border border-slate-200 text-right font-semibold text-red-600">20%</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 border border-slate-200 text-slate-600">35 000 — 350 000 ₽</td>
                      <td className="px-3 py-2 border border-slate-200 text-right font-semibold text-amber-600">12%</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 border border-slate-200 text-slate-600">Более 350 000 ₽</td>
                      <td className="px-3 py-2 border border-slate-200 text-right font-semibold text-emerald-600">7%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 font-semibold text-slate-700 border border-slate-200">Сумма сделки</th>
                      <th className="text-right px-3 py-2 font-semibold text-slate-700 border border-slate-200">Комиссия с заказчика</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["До 5 000 ₽", "19,9%"],
                      ["5 001 — 10 000 ₽", "18,9%"],
                      ["10 001 — 50 000 ₽", "17,9%"],
                      ["50 001 — 100 000 ₽", "16,9%"],
                      ["Более 100 000 ₽", "15,9%"],
                    ].map(([range, pct], i) => (
                      <tr key={range} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">{range}</td>
                        <td className="px-3 py-2 border border-slate-200 text-right font-semibold text-slate-700">{pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-800 mb-2">
                Как снизить комиссию FL.ru
              </h2>
              <p className="text-sm leading-relaxed">
                Единственный способ снизить комиссию — накопить историю с конкретным заказчиком.
                Все сделки суммируются автоматически, но только начиная с 28.07.2021.
                Комиссия снижается автоматически при следующей сделке с тем же клиентом,
                как только накопленная сумма пересекает порог (35&nbsp;000&nbsp;₽ или 350&nbsp;000&nbsp;₽).
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Альтернатива: если у вас постоянный заказчик и объём работы от 300&nbsp;000&nbsp;₽/год,
                рассмотрите прямой договор без платформы. Это устраняет комиссию полностью,
                но требует самостоятельного контроля оплаты (договор, счёт).
              </p>
            </section>
          </article>

          {/* FAQ */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-4">Частые вопросы</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Можно ли обойти комиссию FL.ru и работать напрямую?",
                  a: "Технически — да, но FL.ru запрещает обходить Безопасную сделку в своих правилах. За попытки обойти комиссию аккаунт могут заблокировать. Безопаснее: вести переговоры через платформу, а потом перейти к прямому сотрудничеству после завершения нескольких проектов (снимите контакты).",
                },
                {
                  q: "Облагается ли вознаграждение по FL.ru налогом?",
                  a: "Да. Платформа не является налоговым агентом — вы сами платите налог с дохода. Если вы самозанятый: 6% НПД (юрлица) или 4% (физлица). Если ИП УСН 6%: 6% плюс страховые взносы. Если физлицо без статуса: 13% НДФЛ. Калькулятор налогов — на главной странице FreelanceCalc.",
                },
                {
                  q: "Когда Kwork выгоднее FL.ru для фрилансера?",
                  a: "Kwork выгоднее если: (1) заказчик новый — комиссии одинаковые (20%), но на Kwork заказчик не платит сверху; (2) объём накоплений приближается к 300 000 ₽ с покупателем — тогда Kwork даёт 7,5% против 12% у FL.ru на том же пороге. FL.ru выгоднее только если накоплено 350 000+ ₽ (7% против 7,5%).",
                },
                {
                  q: "Есть ли у FL.ru подписка вместо комиссии?",
                  a: "FL.ru предлагает платные тарифы (PRO, Gold), которые дают дополнительные возможности (больше откликов, приоритет), но НЕ отменяют комиссию по Безопасной сделке. Комиссия существует отдельно от подписки.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="bg-white border border-slate-200 rounded-xl group">
                  <summary className="px-4 py-3 text-sm font-semibold text-slate-800 cursor-pointer select-none list-none flex items-center justify-between gap-2">
                    {q}
                    <span className="text-slate-400 text-base group-open:rotate-180 transition-transform shrink-0">▾</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <nav className="bg-slate-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Связанные калькуляторы
            </p>
            <div className="space-y-1.5">
              <Link href="/" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                → Калькулятор ставки фрилансера (с налогами и загрузкой)
              </Link>
              <Link href="/nalog" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                → Налоги фрилансера: самозанятый, ИП, физлицо
              </Link>
              <Link href="/nalog/dogovor-gph" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                → Калькулятор налогов по договору ГПХ
              </Link>
              <Link href="/nalog/sravnenie" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                → Сравнение налоговых режимов по годовому доходу
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
