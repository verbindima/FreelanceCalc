import type { Metadata } from "next";
import Link from "next/link";
import SfrCalc from "./SfrCalc";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "sfr";

export const metadata: Metadata = {
  title: "Калькулятор страхования самозанятого в СФР 2026 — стоит ли подключать?",
  description:
    "Рассчитайте выгоду добровольного страхования самозанятого в СФР с 2026 года. Взнос 1 344–1 920 ₽/мес → больничный до 1 667 ₽/день. Калькулятор точки окупаемости.",
  keywords: [
    "страхование самозанятых СФР 2026",
    "добровольное страхование самозанятого",
    "больничный для самозанятых 2026",
    "взносы самозанятого в СФР",
    "самозанятый больничный расчет",
    "стоит ли платить в СФР самозанятому",
    "калькулятор страхования самозанятого",
    "НПД добровольное страхование",
    "пособие по нетрудоспособности самозанятый",
    "самозанятый социальное страхование 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/nalog/${SLUG}` },
  openGraph: {
    title: "Калькулятор страхования самозанятых в СФР 2026 — выгодно ли?",
    description:
      "Введите свой стаж и число дней болезни — узнайте, окупятся ли взносы. Новая программа с 1 января 2026.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/nalog/${SLUG}`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/nalog/${SLUG}#app`,
      name: "Калькулятор страхования самозанятого в СФР 2026",
      description:
        "Калькулятор выгодности добровольного социального страхования для плательщиков НПД. Рассчитывает ежегодные взносы, размер пособия и точку безубыточности.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/nalog/${SLUG}`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Налоги фрилансера", item: `${BASE_URL}/nalog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Страхование самозанятого в СФР",
          item: `${BASE_URL}/nalog/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько платит самозанятый за добровольное страхование в СФР в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В 2026 году самозанятый может выбрать один из двух вариантов страховой суммы. При страховой сумме 35 000 ₽/мес взнос составит 1 344 ₽/мес (16 128 ₽/год). При страховой сумме 50 000 ₽/мес — 1 920 ₽/мес (23 040 ₽/год). Взнос рассчитывается как 3,84% от выбранной страховой суммы.",
          },
        },
        {
          "@type": "Question",
          name: "Какой размер больничного получит самозанятый в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Дневное пособие зависит от стажа и выбранной страховой суммы. При страховой сумме 35 000 ₽ и стаже более 8 лет — 1 167 ₽/день; при стаже 5–8 лет — 933 ₽/день; при стаже до 5 лет — 700 ₽/день. При страховой сумме 50 000 ₽ и стаже более 8 лет — 1 667 ₽/день.",
          },
        },
        {
          "@type": "Question",
          name: "Через сколько месяцев самозанятый начнёт получать больничный после подключения страхования?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Право на больничный возникает через 6 месяцев после начала уплаты взносов. То есть если подключиться в январе 2026, первый оплачиваемый больничный можно получить не раньше июля 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли самозанятому подключать страхование в СФР?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Страхование выгодно, если вы болеете 14 и более дней в год (при стаже более 8 лет). Если стаж меньше 5 лет — порог окупаемости вырастает до 23 дней. Воспользуйтесь калькулятором на этой странице, чтобы рассчитать точку безубыточности для ваших параметров.",
          },
        },
        {
          "@type": "Question",
          name: "Как подключить добровольное страхование самозанятому в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Заявление подаётся через приложение «Мой налог» или на портале Госуслуги. Приём заявлений — с 1 января 2026 по 30 сентября 2027 года. После подачи заявления необходимо начать ежемесячно платить взносы через «Мой налог».",
          },
        },
      ],
    },
  ],
};

export default function SfrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Хлебные крошки */}
          <nav className="text-xs text-slate-400 mb-6 flex gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
            <span>/</span>
            <Link href="/nalog" className="hover:text-blue-600">Налоги</Link>
            <span>/</span>
            <span className="text-slate-600">Страхование в СФР</span>
          </nav>

          {/* Заголовок */}
          <header className="mb-8">
            <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              🆕 Новое с 1 января 2026
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-3">
              Калькулятор страхования самозанятого в СФР: стоит ли подключать?
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              С 1 января 2026 года самозанятые могут добровольно застраховаться в Социальном фонде
              России и получать оплачиваемый больничный. Разбираем цифры и считаем, когда это
              выгодно.
            </p>
          </header>

          {/* Краткие факты */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-xl font-bold text-slate-900">1 344 ₽</p>
              <p className="text-xs text-slate-500 mt-1">мин. взнос / мес</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-xl font-bold text-slate-900">1 667 ₽</p>
              <p className="text-xs text-slate-500 mt-1">макс. пособие / день</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-xl font-bold text-slate-900">6 мес</p>
              <p className="text-xs text-slate-500 mt-1">до первого больничного</p>
            </div>
          </div>

          {/* Интерактивный калькулятор */}
          <SfrCalc />

          {/* Как работает программа */}
          <section className="mt-10 mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-5">
              Как работает страхование самозанятых в 2026 году
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-2">💰 Сколько платить взносов?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ставка взноса — <strong>3,84%</strong> от выбранной страховой суммы. Две
                  опции: <strong>35 000 ₽/мес</strong> (взнос 1 344 ₽/мес, или 16 128 ₽/год) и{" "}
                  <strong>50 000 ₽/мес</strong> (взнос 1 920 ₽/мес, или 23 040 ₽/год). Взносы
                  платятся через приложение «Мой налог» вместе с НПД.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-2">🏥 Сколько получите на больничном?</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Дневное пособие = страховая_сумма × процент_по_стажу / 30 дней.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-3 py-2 text-slate-600 font-medium border border-slate-200">Стаж</th>
                        <th className="text-center px-3 py-2 text-slate-600 font-medium border border-slate-200">% пособия</th>
                        <th className="text-center px-3 py-2 text-slate-600 font-medium border border-slate-200">35 000 ₽ / день</th>
                        <th className="text-center px-3 py-2 text-slate-600 font-medium border border-slate-200">50 000 ₽ / день</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-700">До 5 лет</td>
                        <td className="px-3 py-2 border border-slate-200 text-center text-slate-700">60%</td>
                        <td className="px-3 py-2 border border-slate-200 text-center font-medium">700 ₽</td>
                        <td className="px-3 py-2 border border-slate-200 text-center font-medium">1 000 ₽</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-700">5–8 лет</td>
                        <td className="px-3 py-2 border border-slate-200 text-center text-slate-700">80%</td>
                        <td className="px-3 py-2 border border-slate-200 text-center font-medium">933 ₽</td>
                        <td className="px-3 py-2 border border-slate-200 text-center font-medium">1 333 ₽</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-700">Более 8 лет</td>
                        <td className="px-3 py-2 border border-slate-200 text-center text-slate-700">100%</td>
                        <td className="px-3 py-2 border border-slate-200 text-center font-medium text-green-700">1 167 ₽</td>
                        <td className="px-3 py-2 border border-slate-200 text-center font-medium text-green-700">1 667 ₽</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-2">📋 Как подключить?</h3>
                <ol className="text-sm text-slate-600 space-y-2 list-decimal list-inside">
                  <li>Откройте приложение <strong>«Мой налог»</strong> на телефоне</li>
                  <li>Перейдите в раздел «Прочее» → «Страхование»</li>
                  <li>Выберите страховую сумму: 35 000 ₽ или 50 000 ₽</li>
                  <li>Подтвердите и начните платить ежемесячные взносы</li>
                  <li>Через 6 месяцев право на больничный активируется</li>
                </ol>
                <p className="text-xs text-slate-400 mt-3">
                  Заявления принимаются с 01.01.2026 по 30.09.2027
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
                <h3 className="font-semibold text-amber-800 mb-2">⚠️ Важные ограничения</h3>
                <ul className="text-sm text-amber-800 space-y-1.5 list-disc list-inside">
                  <li>Право на пособие появляется только через <strong>6 месяцев</strong> после начала взносов</li>
                  <li>Нельзя получить больничный «задним числом» — нужно сначала заплатить взносы</li>
                  <li>При превышении лимита НПД (2,4 млн ₽/год) и потере статуса — взносы прекращаются</li>
                  <li>Пособие рассчитывается по страховой сумме, а не по реальному доходу фрилансера</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-5">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Учитывается ли стаж самозанятого при расчёте пособия?",
                  a: "Сам по себе период самозанятости без уплаты пенсионных взносов в стаж не идёт. Но если параллельно платить добровольные пенсионные взносы в СФР, эти периоды будут засчитаны. Для расчёта пособия берётся общий страховой стаж по трудовой книжке + периоды с добровольными взносами.",
                },
                {
                  q: "Можно ли отказаться от страхования после подключения?",
                  a: "Да, можно в любое время прекратить платить взносы. В этом случае право на пособие утрачивается. При возобновлении взносов 6-месячный период ожидания начнётся заново.",
                },
                {
                  q: "Распространяется ли страхование на декретный отпуск?",
                  a: "Да, программа покрывает не только больничные, но и пособия по беременности и родам, а также по уходу за ребёнком. Размер рассчитывается аналогично — по страховой сумме и стажу.",
                },
                {
                  q: "Нужно ли сообщать о болезни в налоговую?",
                  a: "Нет. Документы подаются в СФР: открытый электронный листок нетрудоспособности (ЭЛН). Налоговая в процессе не участвует. Пособие приходит напрямую из СФР.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Связанные страницы */}
          <section className="mb-8">
            <h2 className="text-base font-semibold text-slate-700 mb-3">Читайте также</h2>
            <div className="grid gap-2">
              {[
                { href: "/nalog", label: "Налоги фрилансера 2026: самозанятый, ИП, патент" },
                { href: "/nalog/sravnenie", label: "Калькулятор: самозанятый vs ИП УСН 6%" },
                { href: "/nalog/ip-usn", label: "ИП УСН 6%: взносы, расчёты, лимиты 2026" },
                { href: "/stati/izmeneniya-samozanyatyh-2026", label: "Все изменения для самозанятых в 2026 году" },
                { href: "/stati/samozanyatyj-vs-ip-frilancer", label: "Самозанятый или ИП: что выгоднее для фрилансера" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <span className="text-slate-300">→</span>
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-slate-800 rounded-2xl p-6 text-white text-center">
            <p className="font-bold text-base mb-2">Пересчитайте ставку с учётом взносов</p>
            <p className="text-slate-300 text-sm mb-4">
              Если платите в СФР — заложите взносы в свою ставку. Калькулятор учтёт всё: налоги,
              загрузку, отпуск.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-slate-900 font-semibold text-sm px-5 py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
