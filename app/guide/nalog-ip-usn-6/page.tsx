import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Налог ИП УСН 6% для фрилансера 2026: расчёт и страховые взносы | FreelanceCalc",
  description:
    "Полный расчёт налога ИП на УСН 6% для фрилансера в 2026 году. Страховые взносы, примеры расчётов, когда ИП выгоднее самозанятого. Калькулятор онлайн.",
  alternates: { canonical: `${BASE_URL}/guide/nalog-ip-usn-6` },
  openGraph: {
    title: "Налог ИП УСН 6% для фрилансера 2026: расчёт и страховые взносы",
    description:
      "Страховые взносы 53 658 ₽/год, 1% с дохода сверх 300 000 ₽, уменьшение налога до 0. Пример расчёта для дохода 1 500 000 ₽/год.",
    url: `${BASE_URL}/guide/nalog-ip-usn-6`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "ИП УСН 6% для фрилансера: налог, взносы, расчёт 2026",
    description:
      "Страховые взносы, формула уменьшения налога, реальный пример на 1,5 млн ₽/год. Когда ИП выгоднее самозанятого.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько страховых взносов платит ИП в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В 2026 году фиксированные страховые взносы ИП составляют 53 658 рублей в год (ОПС + ОМС вместе). Дополнительно — 1% от дохода, превышающего 300 000 рублей в год. Максимальный размер дополнительного взноса ограничен 8-кратным фиксированным взносом.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли уменьшить налог УСН на страховые взносы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. ИП без наёмных сотрудников может уменьшить налог УСН 6% на сумму уплаченных страховых взносов до 100%. То есть при небольшом доходе налог может быть равен нулю — взносы полностью его перекроют.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать налог ИП УСН 6% при доходе 1 500 000 ₽ в год?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Доход 1 500 000 ₽. Налог до вычета: 1 500 000 × 6% = 90 000 ₽. Страховые взносы: 53 658 ₽ фиксированных + (1 500 000 − 300 000) × 1% = 12 000 ₽ = итого 65 658 ₽. Налог к уплате: 90 000 − 65 658 = 24 342 ₽. Итого платежей в бюджет: 24 342 + 65 658 = 90 000 ₽ (= те же 6%).",
      },
    },
    {
      "@type": "Question",
      name: "При каком доходе ИП выгоднее самозанятого в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При доходе от ~894 300 ₽ в год (~74 525 ₽/месяц) ИП на УСН 6% становится выгоднее самозанятости. До этого порога у самозанятого нет обязательных взносов, поэтому налоговая нагрузка меньше. При доходе свыше 2,4 млн ₽/год самозанятость невозможна — только ИП.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли ИП на УСН сдавать декларацию и вести бухгалтерию?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ИП на УСН 6% без сотрудников сдаёт одну декларацию в год (до 25 апреля). Бухгалтерский учёт вести не обязан, но нужно вести Книгу учёта доходов и расходов (КУДиР). Онлайн-касса не нужна при работе исключительно с юрлицами по безналу.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Налог ИП УСН 6% для фрилансера в 2026 году: полный расчёт",
  description:
    "Страховые взносы ИП в 2026 году, как уменьшить налог УСН 6% до нуля, пример расчёта для дохода 1 500 000 ₽/год, сравнение с самозанятым.",
  url: `${BASE_URL}/guide/nalog-ip-usn-6`,
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function NalogIpUsn6Page() {
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
            Налог ИП УСН 6% для фрилансера в 2026 году: полный расчёт
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Страховые взносы 53 658 ₽, уменьшение налога до нуля, реальный пример на 1,5 млн ₽/год — и когда ИП выгоднее самозанятого.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 9 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick Calculator CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Рассчитайте свою ставку фрилансера с учётом налога
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Укажите желаемый доход и режим — калькулятор покажет минимальную ставку для клиента
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Рассчитать свою ставку фрилансера →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Что такое УСН 6% */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Что такое УСН 6% и кому подходит
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                УСН «Доходы» (упрощённая система налогообложения по ставке 6%) — один из самых популярных налоговых режимов для индивидуальных предпринимателей в России. Суть проста: вы платите 6% со всех поступлений на счёт, независимо от расходов. Никаких сложных расчётов себестоимости.
              </p>
              <p>
                Для фрилансеров — разработчиков, дизайнеров, маркетологов, консультантов — это оптимальный режим при доходе выше определённого порога. Вы работаете легально, выставляете счета компаниям и получаете оплату на расчётный счёт ИП.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-2">УСН 6% подходит, если:</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>— Доход от 70 000–100 000 ₽/месяц и выше (порог рентабельности ИП)</li>
                  <li>— Работаете преимущественно с юридическими лицами и ИП</li>
                  <li>— Доход превышает или приближается к лимиту самозанятого (2,4 млн ₽/год)</li>
                  <li>— Нужен полноценный расчётный счёт для безналичных расчётов</li>
                  <li>— Планируете нанять сотрудника или субподрядчика</li>
                </ul>
              </div>
              <p>
                Лимит дохода на УСН в 2026 году — <strong>265 миллионов рублей в год</strong>. Для фрилансера-одиночки это практически бесконечность: ни один человек в одиночку столько не заработает.
              </p>
            </div>
          </section>

          {/* Section 2 — Как рассчитать налог */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как рассчитать налог УСН 6%: формула и пример
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Базовая формула проста: <strong>Налог = Доход × 6%</strong>. Но это только первый шаг — из рассчитанного налога можно вычесть страховые взносы (о них ниже).
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Пример: доход 100 000 ₽/месяц</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Фрилансер-разработчик, 12 месяцев × 100 000 ₽:</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Годовой доход</span>
                  <span className="font-semibold">1 200 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Налог до вычета взносов (6%)</span>
                  <span className="font-semibold">72 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Фиксированные взносы 2026</span>
                  <span className="font-semibold text-amber-700">53 658 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Доп. взнос 1% с (1 200 000 − 300 000)</span>
                  <span className="font-semibold text-amber-700">9 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Итого взносов</span>
                  <span className="font-semibold text-amber-700">62 658 ₽</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="font-bold text-slate-800">Налог к уплате (72 000 − 62 658)</span>
                  <span className="font-bold text-indigo-700">9 342 ₽</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Итого в бюджет (налог + взносы)</span>
                  <span>72 000 ₽ (= 6% от дохода)</span>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Ключевой вывод: при любом уровне дохода итоговая нагрузка у ИП УСН без сотрудников стремится к 6% — взносы не «дополнительная трата», а просто другая форма того же налога.
              </p>
            </div>
          </section>

          {/* Section 3 — Страховые взносы */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Страховые взносы ИП в 2026 году
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Страховые взносы — обязательная часть затрат любого ИП. Они делятся на <strong>фиксированную часть</strong> (платится вне зависимости от дохода) и <strong>дополнительную</strong> (1% с дохода сверх 300 000 ₽).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="font-bold text-blue-800 text-lg mb-1">53 658 ₽</p>
                  <p className="text-xs text-blue-700 font-semibold mb-2">Фиксированная часть / год</p>
                  <p className="text-xs text-blue-600">
                    Обязательные взносы на ОПС и ОМС. Платятся раз в год (до 31 декабря) или частями — поквартально. Не зависят от дохода.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="font-bold text-amber-800 text-lg mb-1">1%</p>
                  <p className="text-xs text-amber-700 font-semibold mb-2">Доп. взнос с дохода {'>'} 300 000 ₽</p>
                  <p className="text-xs text-amber-600">
                    Уплачивается до 1 июля следующего года. Максимум — 8× фиксированного взноса (429 264 ₽ в 2026).
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Таблица взносов при разных доходах</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Годовой доход</th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">Фикс. взносы</th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">Доп. 1%</th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">Итого взносов</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["500 000 ₽", "53 658 ₽", "2 000 ₽", "55 658 ₽"],
                      ["800 000 ₽", "53 658 ₽", "5 000 ₽", "58 658 ₽"],
                      ["1 200 000 ₽", "53 658 ₽", "9 000 ₽", "62 658 ₽"],
                      ["1 500 000 ₽", "53 658 ₽", "12 000 ₽", "65 658 ₽"],
                      ["2 400 000 ₽", "53 658 ₽", "21 000 ₽", "74 658 ₽"],
                      ["3 000 000 ₽", "53 658 ₽", "27 000 ₽", "80 658 ₽"],
                    ].map(([income, fixed, extra, total]) => (
                      <tr key={income} className="hover:bg-slate-50">
                        <td className="p-2 border border-slate-200 font-medium text-slate-700">{income}</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">{fixed}</td>
                        <td className="p-2 border border-slate-200 text-center text-amber-700">{extra}</td>
                        <td className="p-2 border border-slate-200 text-center font-semibold text-indigo-700">{total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-slate-600 font-semibold mb-1">Важно: когда платить взносы</p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>— Фиксированные взносы — до 31 декабря текущего года</li>
                  <li>— Дополнительный 1% — до 1 июля следующего года</li>
                  <li>— Можно платить частями поквартально — так удобнее уменьшать авансовые платежи по УСН</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 — Уменьшение налога */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как уменьшить налог УСН на страховые взносы
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Это главное преимущество ИП на УСН 6% перед другими режимами. ИП <strong>без наёмных сотрудников</strong> может уменьшить рассчитанный налог на сумму уплаченных страховых взносов — вплоть до 100%. То есть если взносы перекрывают налог, платить налог не нужно совсем.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-2">Правило уменьшения (ИП без сотрудников):</p>
                <p className="text-xs text-green-700 font-mono">Налог к уплате = max(0, Доход × 6% − Взносы уплаченные)</p>
                <p className="text-xs text-green-600 mt-2">
                  Уменьшение применяется к авансовым платежам и итоговому налогу за год. Важно: взносы должны быть уплачены в том же периоде, за который уменьшается налог.
                </p>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">При каком доходе налог обнуляется?</h3>
              <p>
                Если взносы (53 658 ₽) полностью перекрывают 6% налога, то при доходе до <strong>894 300 ₽/год</strong> (~74 525 ₽/месяц) налог УСН равен нулю. ИП платит только взносы.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
                <p className="font-semibold text-slate-700 mb-1">Расчёт порога нулевого налога:</p>
                <p className="font-mono text-slate-600">53 658 ÷ 0,06 = 894 300 ₽/год = 74 525 ₽/месяц</p>
                <p className="text-slate-400 mt-1">При доходе ниже этого — налог = 0, платишь только фиксированные взносы 53 658 ₽/год.</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Совет: платите взносы поквартально</p>
                <p className="text-xs text-amber-700">
                  Авансовые платежи по УСН уплачиваются раз в квартал (до 28-го числа месяца, следующего за кварталом). Если платить взносы в том же квартале — сразу вычитаете их из аванса. Это улучшает денежный поток и исключает ситуацию, когда «переплатили аванс, а возврат ждёте».
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Пример 1 500 000 ₽ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Реальный расчёт: фрилансер с доходом 1 500 000 ₽/год
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Разберём полный расчёт для фрилансера-разработчика с доходом <strong>125 000 ₽/месяц</strong> (1 500 000 ₽/год). Все клиенты — юрлица, работа по договору оказания услуг.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5 text-xs">
                <p className="font-semibold text-slate-700 text-sm mb-3">Годовой расчёт (2026):</p>

                <div className="flex justify-between">
                  <span className="text-slate-600">Годовой доход</span>
                  <span className="font-semibold text-slate-800">1 500 000 ₽</span>
                </div>

                <div className="border-t border-slate-100 pt-2">
                  <p className="text-slate-500 font-semibold mb-1.5">Шаг 1: рассчитываем налог</p>
                  <div className="flex justify-between">
                    <span className="text-slate-500">1 500 000 × 6%</span>
                    <span className="font-semibold">90 000 ₽</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-2">
                  <p className="text-slate-500 font-semibold mb-1.5">Шаг 2: считаем страховые взносы</p>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Фиксированные взносы</span>
                    <span className="font-semibold">53 658 ₽</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-slate-500">Доп. 1% × (1 500 000 − 300 000)</span>
                    <span className="font-semibold">12 000 ₽</span>
                  </div>
                  <div className="flex justify-between mt-1 font-semibold text-amber-700">
                    <span>Итого взносов</span>
                    <span>65 658 ₽</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-2">
                  <p className="text-slate-500 font-semibold mb-1.5">Шаг 3: уменьшаем налог на взносы</p>
                  <div className="flex justify-between">
                    <span className="text-slate-500">90 000 − 65 658</span>
                    <span className="font-semibold text-indigo-700">= 24 342 ₽ (налог к уплате)</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>Итого платежей в год</span>
                    <span className="text-indigo-700">24 342 + 65 658 = 90 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-slate-400 mt-1">
                    <span>Эффективная ставка</span>
                    <span>6,0% (= стандартная УСН)</span>
                  </div>
                  <div className="flex justify-between text-slate-400 mt-1">
                    <span>Чистый доход после всех платежей</span>
                    <span className="font-semibold text-green-700">1 410 000 ₽ (94%)</span>
                  </div>
                </div>
              </div>

              <p>
                При доходе 1,5 млн ₽/год фрилансер отдаёт государству <strong>90 000 рублей</strong> (налог + взносы). Это ровно 6% — именно столько заплатил бы самозанятый при ставке 6% (работа с юрлицами), но без пенсионного стажа и с ограничением в 2,4 млн ₽/год.
              </p>
            </div>
          </section>

          {/* Section 6 — Сравнение с самозанятым */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              ИП УСН 6% vs самозанятый НПД: когда что выгоднее
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                На первый взгляд оба режима одинаковы — 6% при работе с юрлицами. Но ИП платит ещё и страховые взносы 53 658 ₽/год. Это решающая разница при малом доходе.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-2.5 font-semibold text-slate-700 border border-slate-200">Доход/год</th>
                      <th className="text-center p-2.5 font-semibold text-indigo-700 border border-slate-200">Самозанятый (6%)</th>
                      <th className="text-center p-2.5 font-semibold text-slate-700 border border-slate-200">ИП УСН 6%</th>
                      <th className="text-center p-2.5 font-semibold text-green-700 border border-slate-200">Выгоднее</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["400 000 ₽", "24 000 ₽", "53 658 ₽ *", "Самозанятый"],
                      ["700 000 ₽", "42 000 ₽", "53 658 ₽ *", "Самозанятый"],
                      ["894 300 ₽", "53 658 ₽", "53 658 ₽ *", "Одинаково"],
                      ["1 200 000 ₽", "72 000 ₽", "72 000 ₽ **", "Одинаково"],
                      ["1 800 000 ₽", "108 000 ₽", "108 000 ₽ **", "ИП (+ пенсия)"],
                      ["2 400 000 ₽ (лимит)", "144 000 ₽", "144 000 ₽ **", "Только ИП"],
                    ].map(([income, sam, ip, winner]) => (
                      <tr key={income} className="hover:bg-slate-50">
                        <td className="p-2 border border-slate-200 font-medium text-slate-700">{income}</td>
                        <td className="p-2 border border-slate-200 text-center text-indigo-700">{sam}</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">{ip}</td>
                        <td className={`p-2 border border-slate-200 text-center font-semibold ${winner === "Самозанятый" ? "text-indigo-700" : winner === "Одинаково" ? "text-slate-500" : "text-green-700"}`}>{winner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400">
                * При доходе ниже 894 300 ₽ ИП платит только фиксированные взносы (налог = 0, взносы перекрывают его).<br />
                ** При доходе выше 894 300 ₽ итоговая нагрузка одинакова: взносы вычитаются из налога, итог = 6% от дохода.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Главный вывод:</p>
                <p className="text-xs text-amber-700">
                  При доходе выше ~895 000 ₽/год (около 74 500 ₽/месяц) ИП УСН и самозанятость одинаково дороги. Разница в том, что у ИП идёт <strong>пенсионный стаж</strong> и нет ограничения по 2,4 млн ₽. Самозанятость выгоднее только при малом доходе.
                </p>
              </div>

              <p>
                Подробное сравнение с расчётами для вашего дохода — в статье{" "}
                <Link href="/guide/ip-vs-samozanyatyj" className="text-indigo-600 hover:underline font-medium">
                  ИП vs самозанятый: что выгоднее фрилансеру →
                </Link>
              </p>
            </div>
          </section>

          {/* Section 7 — Когда переходить */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Когда переходить с самозанятого на ИП УСН
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Переход с самозанятости на ИП — логичный шаг при росте дохода. Вот конкретные сигналы, что пора это сделать:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-red-100 text-red-700 rounded-full text-xs font-bold flex items-center justify-center">1</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-sm">Доход приближается к 150 000–180 000 ₽/месяц</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Лимит самозанятого — 2,4 млн ₽/год (~200 000 ₽/месяц в среднем). При доходе 150–180 тысяч в месяц нужно зарегистрировать ИП заранее, чтобы не потерять статус в середине года.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-orange-100 text-orange-700 rounded-full text-xs font-bold flex items-center justify-center">2</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-sm">Крупные клиенты требуют статус ИП</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Некоторые компании (особенно госкорпорации и крупный бизнес) принципиально не работают с самозанятыми — только с ИП или ООО. Если теряете контракт из-за статуса, ИП необходимо.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold flex items-center justify-center">3</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-sm">Нужен расчётный счёт для бизнеса</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      При оборотах от 500 000–1 млн ₽/год банки иногда задают вопросы о происхождении средств на личном счёте. Расчётный счёт ИП снимает все вопросы.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex items-center justify-center">4</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-sm">Планируете нанять помощника</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Самозанятый не может нанимать сотрудников по трудовому договору. Если хотите делегировать задачи — только ИП.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-green-800 font-semibold mb-2">Лайфхак: ИП на НПД как промежуточный шаг</p>
                <p className="text-xs text-green-700">
                  Можно зарегистрировать ИП, но оставаться на режиме НПД (самозанятость) — пока доход не превысит 2,4 млн ₽/год. Так вы получите статус ИП и расчётный счёт, но будете платить только НПД 4–6% без обязательных взносов. При превышении лимита — автоматически переходите на УСН.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 — Отчётность */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Отчётность и административная нагрузка ИП УСН
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Многие фрилансеры боятся ИП из-за «бумаг». На практике для ИП без сотрудников на УСН всё довольно просто.
              </p>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3">
                  <span className="text-green-600 font-bold text-sm flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">Декларация УСН — 1 раз в год</p>
                    <p className="text-slate-500 text-xs">До 25 апреля за прошедший год. Заполняется в ФНС онлайн или через бухгалтерский сервис.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3">
                  <span className="text-green-600 font-bold text-sm flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">КУДиР — книга учёта доходов</p>
                    <p className="text-slate-500 text-xs">Не сдаётся в ФНС, но должна быть. Это просто таблица с датой, суммой и контрагентом. Многие банки ведут её автоматически.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3">
                  <span className="text-green-600 font-bold text-sm flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">Авансовые платежи — 4 раза в год</p>
                    <p className="text-slate-500 text-xs">Уплачиваются до 28 апреля, 28 июля, 28 октября и итоговый — до 28 апреля следующего года. Считать несложно: доход × 6% − взносы.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0">✗</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-xs">Онлайн-касса — не нужна</p>
                    <p className="text-slate-500 text-xs">При работе только с юрлицами по безналичному расчёту касса не нужна. Нужна только если принимаете оплату наличными или от физлиц.</p>
                  </div>
                </div>
              </div>

              <p>
                Стоимость бухгалтерского сопровождения ИП УСН без сотрудников — от 500 до 2 000 ₽/месяц (сервисы вроде «Контур.Эльба», «Моё дело», «1С:Фреш»). Многие фрилансеры справляются самостоятельно.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              FAQ по налогу ИП УСН 6%
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Сколько страховых взносов платит ИП в 2026 году?",
                  a: "Фиксированные взносы — 53 658 ₽ в год (ОПС + ОМС вместе, платёж единый). Плюс 1% от дохода, превышающего 300 000 ₽ в год. Максимальный доп. взнос ограничен 8× фиксированного = 429 264 ₽.",
                },
                {
                  q: "Можно ли уменьшить налог УСН на страховые взносы?",
                  a: "Да, до 100% — если у вас нет наёмных сотрудников. При доходе до 894 300 ₽/год налог равен нулю: взносы полностью его перекрывают. При доходе выше — налог к уплате = 6% × доход − взносы.",
                },
                {
                  q: "Как рассчитать налог ИП УСН 6% при доходе 1 500 000 ₽/год?",
                  a: "Налог: 1 500 000 × 6% = 90 000 ₽. Взносы: 53 658 + (1 500 000 − 300 000) × 1% = 65 658 ₽. Налог к уплате: 90 000 − 65 658 = 24 342 ₽. Итого в бюджет: 90 000 ₽ (= 6%).",
                },
                {
                  q: "При каком доходе ИП выгоднее самозанятого?",
                  a: "При доходе от ~894 300 ₽/год (~74 500 ₽/месяц) ИП и самозанятый одинаково дороги: оба платят ~6%. Ниже — самозанятый выгоднее (нет взносов). Выше 2,4 млн ₽ — только ИП (самозанятость невозможна).",
                },
                {
                  q: "Нужно ли ИП на УСН сдавать декларацию и вести бухгалтерию?",
                  a: "Декларация — 1 раз в год, до 25 апреля. Бухучёт не обязателен, но нужна КУДиР (книга учёта доходов). Авансовые платежи — 4 раза в год. Без сотрудников онлайн-касса не нужна при безналичных расчётах с юрлицами.",
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
            <h2 className="text-lg font-bold mb-2">Рассчитайте ставку с учётом налога ИП УСН</h2>
            <p className="text-slate-300 text-sm mb-4">
              Введите желаемый доход — калькулятор покажет, сколько просить с клиента с учётом 6% налога и взносов.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/"
                className="inline-block bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-400 transition-colors"
              >
                Рассчитать свою ставку фрилансера →
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="inline-block bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-600 transition-colors"
              >
                ИП vs самозанятый →
              </Link>
            </div>
          </section>

          {/* Related links */}
          <section className="bg-slate-50 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Полезные материалы
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link
                href="/guide/nalog-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог самозанятого
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                ИП vs самозанятый
              </Link>
              <Link
                href="/nalog/ip-usn"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Калькулятор ИП УСН
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
