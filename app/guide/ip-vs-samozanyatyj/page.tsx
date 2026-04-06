import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "ИП или самозанятый: что выбрать фрилансеру в 2026 году | FreelanceCalc",
  description:
    "Сравниваем ИП УСН 6% и самозанятость (НПД) для фрилансера: налоги, взносы, лимит дохода, отчётность. Расчёт точки безубыточности и онлайн-калькулятор.",
  alternates: { canonical: `${BASE_URL}/guide/ip-vs-samozanyatyj` },
  openGraph: {
    title: "ИП или самозанятый для фрилансера — полное сравнение 2026",
    description:
      "Налоги, взносы, лимиты и точка безубыточности. Разбираем, что выгоднее — ИП УСН или самозанятость — при разных уровнях дохода.",
    url: `${BASE_URL}/guide/ip-vs-samozanyatyj`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "ИП или самозанятый: что выгоднее фрилансеру в 2026",
    description:
      "Сравнение режимов по налогам, взносам и лимитам. Точка безубыточности — 68 750 ₽/месяц.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Что выгоднее для фрилансера: ИП или самозанятый?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При доходе до ~68 750 ₽/месяц (825 000 ₽/год) выгоднее самозанятость: нет обязательных страховых взносов ~49 500 ₽/год. При доходе выше — ИП УСН выгоднее: взносы полностью вычитаются из налога. При доходе свыше 2,4 млн ₽/год самозанятость невозможна — только ИП.",
      },
    },
    {
      "@type": "Question",
      name: "Какие налоги платит самозанятый vs ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятый: 4% с доходов от физлиц, 6% с доходов от юрлиц и ИП, без страховых взносов. ИП УСН 6%: 6% со всех доходов плюс страховые взносы ~49 500 ₽/год, но взносы уменьшают налог (до 100% при отсутствии сотрудников).",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли быть ИП и самозанятым одновременно?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. ИП может применять режим НПД (самозанятость). Это часто выгоднее: статус ИП упрощает открытие расчётного счёта и заключение крупных договоров, а налог — только НПД 4–6% без взносов. Главное условие: не иметь наёмных сотрудников и не превышать лимит 2,4 млн ₽/год.",
      },
    },
    {
      "@type": "Question",
      name: "Что сложнее в оформлении — ИП или самозанятость?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятость проще: регистрация через приложение «Мой налог» за 10 минут, не нужны расчётный счёт, печать, онлайн-касса и налоговые декларации. ИП сложнее: регистрация в ФНС (3–5 дней), обязательная сдача декларации раз в год, уплата взносов даже при нулевом доходе.",
      },
    },
    {
      "@type": "Question",
      name: "Когда нужно переходить с самозанятого на ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Рекомендуется перейти на ИП при: (1) доходе свыше 150 000–180 000 ₽/месяц (приближение к лимиту 2,4 млн ₽/год), (2) необходимости нанять сотрудников, (3) работе с крупными компаниями, требующими ИП-статус для договора, (4) желании открыть полноценный расчётный счёт для бизнеса.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ИП или самозанятый: что выбрать фрилансеру в 2026 году",
  description:
    "Сравнение ИП УСН 6% и самозанятости (НПД) для фрилансера: налоги, взносы, лимиты, точка безубыточности и практические рекомендации.",
  url: `${BASE_URL}/guide/ip-vs-samozanyatyj`,
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function IpVsSamozanyatyjPage() {
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
            ИП или самозанятый: что выбрать фрилансеру в 2026 году
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Полное сравнение двух режимов: налоги, взносы, лимиты и точка безубыточности — с конкретными расчётами.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 8 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Хотите сразу посчитать ставку с учётом налогов?
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Укажите налоговый режим — калькулятор покажет минимальную ставку для вашего дохода
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Краткое сравнение */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Главное отличие: страховые взносы
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                На первый взгляд, ставка налога у обоих режимов одинакова при работе с компаниями: <strong>6%</strong> у самозанятого (НПД) и <strong>6%</strong> у ИП на УСН «Доходы». Но дьявол в деталях.
              </p>
              <p>
                ИП обязан платить <strong>страховые взносы</strong> вне зависимости от дохода — это фиксированные ~49 500 ₽ в год в 2026 году. Самозанятый взносы не платит.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 font-semibold mb-1">Важно понимать:</p>
                <p className="text-xs text-amber-700">
                  У ИП взносы вычитаются из налога (до 100% при отсутствии сотрудников). Это означает, что при высоком доходе ИП платит примерно столько же налога, что и самозанятый, — но взносы при этом «работают» на пенсию.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Полная таблица сравнения */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Таблица: ИП УСН 6% vs самозанятый (НПД)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-2.5 font-semibold text-slate-700 border border-slate-200">Параметр</th>
                    <th className="text-center p-2.5 font-semibold text-indigo-700 border border-slate-200">Самозанятый (НПД)</th>
                    <th className="text-center p-2.5 font-semibold text-slate-700 border border-slate-200">ИП УСН 6%</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ставка с доходов от юрлиц", "6%", "6%"],
                    ["Ставка с доходов от физлиц", "4%", "6%"],
                    ["Страховые взносы", "Нет (добровольно)", "~49 500 ₽/год (обязательно)"],
                    ["Взносы вычитаются из налога", "—", "Да, до 100%"],
                    ["Максимальный доход", "2,4 млн ₽/год", "265 млн ₽/год"],
                    ["Регистрация", "Приложение, 10 мин", "ФНС, 3–5 дней"],
                    ["Налоговая декларация", "Не нужна", "Раз в год"],
                    ["Онлайн-касса", "Не нужна", "Не нужна (без сотрудников)"],
                    ["Расчётный счёт", "Не обязателен", "Рекомендуется"],
                    ["Наёмные сотрудники", "Нельзя", "Можно"],
                    ["Пенсионный стаж", "Не идёт", "Идёт за счёт взносов"],
                  ].map(([param, sam, ip]) => (
                    <tr key={param} className="hover:bg-slate-50">
                      <td className="p-2 border border-slate-200 text-slate-700">{param}</td>
                      <td className="p-2 border border-slate-200 text-center text-indigo-700 font-medium">{sam}</td>
                      <td className="p-2 border border-slate-200 text-center text-slate-600">{ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 — Точка безубыточности */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Точка безубыточности: 68 750 ₽/месяц
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Есть конкретный порог дохода, при котором самозанятость и ИП становятся одинаково выгодными. При доходе <strong>выше этого порога</strong> ИП выгоднее, ниже — самозанятость.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Расчёт точки безубыточности (только B2B-клиенты):</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Страховые взносы ИП в 2026</span>
                  <span className="font-semibold">49 500 ₽/год</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Разница в ставке (6% − 6%)</span>
                  <span className="font-semibold">0% (одинаково)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Взносы = экономия на налоге при доходе X</span>
                  <span className="font-semibold">X × 6% = 49 500 ₽</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="font-bold text-slate-800">Точка безубыточности</span>
                  <span className="font-bold text-indigo-700">825 000 ₽/год = 68 750 ₽/мес</span>
                </div>
              </div>

              <p>
                <strong>Ниже 68 750 ₽/месяц</strong> — самозанятость выгоднее: вы не платите взносы, которые ИП не успевает «отбить» налоговым вычетом.
              </p>
              <p>
                <strong>Выше 68 750 ₽/месяц</strong> — ИП выгоднее или одинаково: взносы полностью уменьшают налог, а вы дополнительно получаете пенсионный стаж.
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Примеры для разных уровней дохода</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Доход в месяц</th>
                      <th className="text-center p-2 font-semibold text-indigo-700 border border-slate-200">Итого самозанятый</th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">Итого ИП УСН</th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">Выгоднее</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["30 000 ₽", "1 800 ₽/мес", "4 125 ₽/мес *", "Самозанятый"],
                      ["60 000 ₽", "3 600 ₽/мес", "3 600 ₽/мес *", "Одинаково"],
                      ["100 000 ₽", "6 000 ₽/мес", "6 000 ₽/мес **", "Одинаково"],
                      ["200 000 ₽", "12 000 ₽/мес", "≈12 000 ₽/мес **", "ИП (+ пенсия)"],
                    ].map(([income, sam, ip, winner]) => (
                      <tr key={income} className="hover:bg-slate-50">
                        <td className="p-2 border border-slate-200 font-medium text-slate-700">{income}</td>
                        <td className="p-2 border border-slate-200 text-center text-indigo-700">{sam}</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">{ip}</td>
                        <td className="p-2 border border-slate-200 text-center font-semibold text-green-700">{winner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400">
                * При 30 000 ₽/мес ИП платит 0 налога (взносы покрывают), но взносы 4 125 ₽/мес — фиксированный обязательный платёж.<br />
                ** При 100 000+ ₽/мес взносы полностью уходят в вычет, эффективная ставка ≈ 6% у обоих.
              </p>
            </div>
          </section>

          {/* Section 4 — Лимит 2.4 млн */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Лимит самозанятого: 2,4 млн ₽/год
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Самозанятость имеет жёсткий лимит дохода — <strong>2 400 000 рублей в год</strong> (~200 000 ₽/месяц в среднем). Это критичное ограничение для растущих фрилансеров.
              </p>
              <p>
                При превышении лимита:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Статус самозанятого прекращается автоматически в момент превышения.</li>
                <li>С суммы превышения нужно уплатить НДФЛ 13%.</li>
                <li>Можно восстановить статус с 1 января следующего года.</li>
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-2">Как правильно перейти с самозанятого на ИП:</p>
                <ol className="text-xs text-green-700 space-y-1 list-decimal pl-4">
                  <li>Зарегистрируйтесь как ИП, когда доход достигнет 150 000 ₽/месяц.</li>
                  <li>Оставайтесь на НПД (ИП может применять НПД) до превышения 2,4 млн ₽.</li>
                  <li>При превышении переходите на УСН 6% — подайте уведомление в ФНС в течение 20 дней.</li>
                </ol>
              </div>

              <p>
                У ИП лимит дохода по УСН — <strong>265 миллионов рублей в год</strong>. На практике ни один фрилансер-одиночка этот порог не превысит.
              </p>
            </div>
          </section>

          {/* Section 5 — Когда что выбрать */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Итог: когда выбирать самозанятость, когда — ИП
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <p className="font-bold text-indigo-800 text-sm mb-2">Выбирайте самозанятость, если:</p>
                  <ul className="text-xs text-indigo-700 space-y-1.5">
                    <li>✓ Доход до 68 750 ₽/месяц</li>
                    <li>✓ Только начинаете фрилансить</li>
                    <li>✓ Работаете с физлицами (ставка 4%)</li>
                    <li>✓ Хотите минимум бумаг и затрат</li>
                    <li>✓ Доход нестабилен (нет взносов в убыточный месяц)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-bold text-slate-700 text-sm mb-2">Выбирайте ИП, если:</p>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>✓ Стабильный доход от 69 000 ₽/месяц</li>
                    <li>✓ Нужен расчётный счёт для крупных переводов</li>
                    <li>✓ Клиенты требуют статус ИП по договору</li>
                    <li>✓ Планируете нанять сотрудника или субподрядчика</li>
                    <li>✓ Доход приближается к 150 000+ ₽/месяц</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 font-semibold mb-1">Лайфхак: ИП на НПД</p>
                <p className="text-xs text-amber-700">
                  Многие опытные фрилансеры выбирают компромисс — <strong>ИП с применением режима НПД</strong>. Это даёт статус ИП (удобен для банков и крупных клиентов), но налог — только НПД 4–6% без обязательных взносов. Ограничение: те же 2,4 млн ₽/год и нельзя нанимать сотрудников.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 — Как учесть в ставке */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как правильно заложить налог в ставку
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Типичная ошибка: фрилансер называет клиенту свою «чистую» желаемую сумму, а потом ещё платит налог сверху из неё. В результате реальный доход оказывается ниже запланированного.
              </p>
              <p>
                Правильный подход — <strong>закладывать налог в ставку заранее</strong>:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs">
                <div>
                  <p className="font-semibold text-slate-700 mb-1">Самозанятый (6%, работа с юрлицами):</p>
                  <p className="font-mono text-slate-600">Ставка = Желаемый доход ÷ (1 − 0,06)</p>
                  <p className="text-slate-400 mt-1">Пример: хочу 2 000 ₽/час → выставляю 2 000 ÷ 0,94 = <strong>2 128 ₽/час</strong></p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-1">ИП УСН (при доходе ~100 000 ₽/мес, взносы в вычет):</p>
                  <p className="font-mono text-slate-600">Ставка ≈ та же, что у самозанятого — эффективная ставка ~6%</p>
                  <p className="text-slate-400 mt-1">Взносы компенсируются вычетом из налога при стабильном доходе</p>
                </div>
              </div>

              <p>
                Для автоматического расчёта ставки с учётом налогового режима, загрузки, отпусков и простоев используйте{" "}
                <Link href="/" className="text-indigo-600 hover:underline font-medium">
                  калькулятор фрилансера →
                </Link>
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Частые вопросы про ИП и самозанятость
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Что выгоднее для фрилансера: ИП или самозанятый?",
                  a: "До ~68 750 ₽/месяц (825 000 ₽/год) выгоднее самозанятость — нет обязательных взносов ~49 500 ₽/год. Выше — ИП выгоднее или одинаково: взносы полностью вычитаются из налога. При доходе свыше 2,4 млн ₽/год самозанятость невозможна.",
                },
                {
                  q: "Можно ли быть ИП и самозанятым одновременно?",
                  a: "Да. ИП может применять режим НПД (самозанятость). Это популярный компромисс: статус ИП + низкий налог НПД без обязательных взносов. Условия: нет наёмных сотрудников, доход до 2,4 млн ₽/год.",
                },
                {
                  q: "Что сложнее в оформлении — ИП или самозанятость?",
                  a: "Самозанятость: приложение «Мой налог», 10 минут, без счёта и деклараций. ИП: регистрация в ФНС (3–5 дней), декларация раз в год, обязательные взносы даже при нулевом доходе.",
                },
                {
                  q: "Когда нужно переходить с самозанятого на ИП?",
                  a: "При приближении к лимиту (150–180 000 ₽/месяц), если клиенты требуют статус ИП, при желании нанять сотрудника или открыть полноценный расчётный счёт.",
                },
                {
                  q: "Нужен ли расчётный счёт самозанятому?",
                  a: "Не обязателен. Самозанятый может принимать оплату на личную карту. Но при крупных суммах (от 100 000+ ₽ за раз) банки иногда блокируют переводы — тогда ИП с расчётным счётом надёжнее.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">{item.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-slate-800 text-white rounded-2xl p-6 text-center">
            <h2 className="text-lg font-bold mb-2">Рассчитайте ставку с учётом вашего режима</h2>
            <p className="text-slate-300 text-sm mb-4">
              Укажите доход, налоговый режим и загрузку — калькулятор покажет, сколько просить с клиента.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/"
                className="inline-block bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-400 transition-colors"
              >
                Калькулятор ставки →
              </Link>
              <Link
                href="/guide/nalog-samozanyatyj"
                className="inline-block bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-600 transition-colors"
              >
                Налоги самозанятого →
              </Link>
            </div>
          </section>

          {/* Related links */}
          <section className="bg-slate-50 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Связанные материалы
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link
                href="/guide/nalog-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог самозанятого
              </Link>
              <Link
                href="/nalog/dogovor-gph"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог ГПХ
              </Link>
              <Link
                href="/guide/kalkulyator-frilansera"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Расчёт ставки
              </Link>
            </div>
          </section>

        </div>

        {/* Back nav */}
        <nav className="mt-8 text-center">
          <Link
            href="/stati"
            className="text-sm text-slate-400 hover:text-indigo-600 transition-colors"
          >
            ← Все статьи о фрилансе
          </Link>
        </nav>
      </main>
    </>
  );
}
