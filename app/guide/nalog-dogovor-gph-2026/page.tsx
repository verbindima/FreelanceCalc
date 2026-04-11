import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Расчёт налогов по договору ГПХ 2026: калькулятор онлайн и примеры | FreelanceCalc",
  description:
    "Как рассчитать НДФЛ и страховые взносы по договору ГПХ в 2026 году. Ставки: НДФЛ 13%/15%, ОПС 22%, ОМС 5,1%, ОСС 2,9%. Пример расчёта на 100 000 ₽. Онлайн-калькулятор.",
  alternates: { canonical: `${BASE_URL}/guide/nalog-dogovor-gph-2026` },
  openGraph: {
    title: "Расчёт налогов по договору ГПХ 2026: НДФЛ + взносы с примерами",
    description:
      "Договор ГПХ на 100 000 ₽: НДФЛ 13 000 ₽ удержат, на руки 87 000 ₽. Заказчик сверху платит 30 200 ₽ взносов. Онлайн-калькулятор и сравнение с самозанятым.",
    url: `${BASE_URL}/guide/nalog-dogovor-gph-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Налоги по договору ГПХ 2026: НДФЛ 13% + взносы 30,2%",
    description:
      "Пошаговый расчёт НДФЛ и страховых взносов по ГПХ. Кто платит, сколько получает исполнитель на руки. Онлайн-калькулятор.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какой НДФЛ по договору ГПХ в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По договору ГПХ с физлицом применяется прогрессивная ставка НДФЛ: 13% при годовом доходе до 2,4 млн ₽, 15% — с части дохода от 2,4 до 5 млн ₽, 18% — свыше 5 млн ₽ (ст. 224 НК РФ в редакции 2026 года). В большинстве случаев ставка составляет 13%. Налог удерживает и перечисляет в бюджет заказчик как налоговый агент.",
      },
    },
    {
      "@type": "Question",
      name: "Кто платит страховые взносы по договору ГПХ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Страховые взносы по договору ГПХ платит заказчик (организация или ИП) сверх суммы вознаграждения. Ставки в 2026 году: ОПС 22%, ОМС 5,1%, ОСС (нетрудоспособность) 2,9%. Итого 30%. Исполнитель-физлицо взносы не платит — для него это бесплатно. Обратите внимание: взносы на травматизм по ГПХ уплачиваются только если это прямо предусмотрено договором.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько получу на руки по договору ГПХ на 100 000 рублей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При договоре ГПХ на 100 000 ₽ исполнитель-физлицо получает на руки 87 000 ₽ (заказчик удерживает НДФЛ 13 000 ₽). Дополнительно заказчик тратит 30 200 ₽ страховых взносов (ОПС + ОМС + ОСС). Итого расходы заказчика — 130 200 ₽ на выплату вознаграждения 100 000 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "ГПХ или самозанятость — что выгоднее в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятость выгоднее для большинства фрилансеров. При доходе 100 000 ₽ самозанятый платит налог НПД 6 000 ₽ (6%) и получает на руки 94 000 ₽ против 87 000 ₽ по ГПХ. Для заказчика разница ещё существеннее: по ГПХ он тратит 130 200 ₽, по самозанятому — ровно 100 000 ₽. ГПХ выгоднее только если доход превышает 2,4 млн ₽/год (лимит НПД) или исполнитель хочет пенсионный стаж без доп. взносов.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли самому подавать декларацию при работе по ГПХ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если заказчик — российская компания или ИП, они сами удерживают и перечисляют НДФЛ — вам ничего делать не нужно. Если заказчик иностранный или физлицо, вы обязаны самостоятельно подать декларацию 3-НДФЛ до 30 апреля следующего года и уплатить налог до 15 июля.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Расчёт налогов по договору ГПХ в 2026 году: калькулятор и примеры",
  description:
    "Пошаговый расчёт НДФЛ и страховых взносов по договору ГПХ в 2026 году. Ставки, примеры, сравнение с самозанятым. Онлайн-калькулятор.",
  url: `${BASE_URL}/guide/nalog-dogovor-gph-2026`,
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function NalogDogovorGph2026() {
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

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-50 to-indigo-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-indigo-600">Гайды</Link>
              <span>→</span>
              <span>Налоги по договору ГПХ 2026</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              📋 Договор ГПХ — налоги 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Расчёт налогов по договору ГПХ в 2026 году: калькулятор и примеры
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              По договору ГПХ заказчик удерживает <strong>НДФЛ 13%</strong> из вашего
              вознаграждения и сверху платит <strong>страховые взносы 30%</strong>. С каждых
              100 000 ₽ вы получаете на руки <strong>87 000 ₽</strong>, а заказчик тратит{" "}
              <strong>130 200 ₽</strong>. Разберём расчёт по шагам.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "НДФЛ", value: "13%", sub: "с вознаграждения" },
                { label: "Взносы", value: "30%", sub: "платит заказчик" },
                { label: "На руки", value: "87 000 ₽", sub: "с 100 000 ₽" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-3">
                  <div className="text-xs text-slate-500 mb-1">{s.label}</div>
                  <div className="text-xl font-bold text-indigo-700">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

          {/* Calculator CTA */}
          <section className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 text-center">
            <p className="text-sm font-semibold text-indigo-900 mb-1">
              Калькулятор налогов по договору ГПХ онлайн
            </p>
            <p className="text-xs text-indigo-700 mb-4">
              Введите сумму вознаграждения — получите НДФЛ, взносы, сумму на руки и сравнение с самозанятым
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-700 transition-colors"
            >
              Открыть калькулятор ГПХ →
            </Link>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Что такое договор ГПХ и кто платит налоги
            </h2>
            <p className="text-slate-700 mb-4">
              Договор гражданско-правового характера (ГПХ) — соглашение между заказчиком и
              исполнителем-физлицом о выполнении конкретной работы или оказании услуги. В отличие
              от трудового договора, ГПХ не создаёт трудовых отношений: нет записи в трудовую
              книжку, нет оплачиваемого отпуска, нет больничного.
            </p>
            <p className="text-slate-700 mb-4">
              Самые распространённые формы ГПХ для фрилансеров:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
              <li><strong>Договор подряда</strong> — оплата за результат (сайт, дизайн-макет, текст)</li>
              <li><strong>Договор возмездного оказания услуг</strong> — оплата за процесс (консультация, обучение)</li>
              <li><strong>Авторский договор</strong> — передача прав на творческое произведение</li>
            </ul>
            <p className="text-slate-700 mb-4">
              По налогам ответственность распределяется так:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Налог / взнос</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Кто платит</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Из чьего кармана</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["НДФЛ 13% / 15%", "Заказчик (налоговый агент)", "Удерживается из вознаграждения"],
                    ["ОПС 22%", "Заказчик (организация/ИП)", "Сверх суммы договора"],
                    ["ОМС 5,1%", "Заказчик", "Сверх суммы договора"],
                    ["ОСС 2,9%", "Заказчик", "Сверх суммы договора"],
                  ].map(([tax, who, source]) => (
                    <tr key={tax} className="border-b border-slate-100">
                      <td className="p-3 font-medium text-slate-800">{tax}</td>
                      <td className="p-3 text-slate-700">{who}</td>
                      <td className="p-3 text-slate-600 text-sm">{source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-900 font-semibold mb-1">Важно: переквалификация в трудовые отношения</p>
              <p className="text-amber-800 text-sm">
                Налоговая вправе переквалифицировать ГПХ в трудовой договор, если работа
                систематическая, по фиксированному расписанию, на территории заказчика.
                Последствия — доначисление взносов, штрафы и пени. Риск возникает при
                долгосрочном сотрудничестве с одним заказчиком.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              НДФЛ по договору ГПХ: ставки в 2026 году
            </h2>
            <p className="text-slate-700 mb-4">
              С 2025 года в России действует прогрессивная шкала НДФЛ (ст. 224 НК РФ).
              Для вознаграждений физлиц по договорам ГПХ применяются следующие ставки:
            </p>
            <div className="space-y-2 mb-6">
              {[
                { range: "До 2 400 000 ₽/год", rate: "13%", note: "Стандартный случай" },
                { range: "2 400 001 — 5 000 000 ₽/год", rate: "15%", note: "С части превышения 2,4 млн" },
                { range: "5 000 001 — 20 000 000 ₽/год", rate: "18%", note: "С части превышения 5 млн" },
                { range: "Свыше 20 000 000 ₽/год", rate: "20–22%", note: "Редкий случай" },
              ].map(({ range, rate, note }) => (
                <div key={range} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-slate-800">{range}</div>
                    <div className="text-xs text-slate-500">{note}</div>
                  </div>
                  <div className="text-xl font-bold text-indigo-700">{rate}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-700 mb-4">
              Для большинства фрилансеров и подрядчиков действует ставка <strong>13%</strong> — доход
              до 2,4 млн ₽ в год (200 000 ₽/мес) укладывается в первый диапазон.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Профессиональный налоговый вычет</strong> (ст. 221 НК РФ) позволяет
              снизить налоговую базу: либо на 20% стандартный вычет без документов, либо на сумму
              документально подтверждённых расходов. Для этого нужно подать заявление заказчику
              до выплаты вознаграждения или самостоятельно заявить вычет через декларацию 3-НДФЛ.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="font-semibold text-slate-800 mb-3 text-sm">Пример: НДФЛ с договора на 150 000 ₽</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Вознаграждение по договору</span>
                  <span className="font-semibold text-slate-800">150 000 ₽</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>НДФЛ 13% (без вычета)</span>
                  <span className="font-semibold">− 19 500 ₽</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2">
                  <span className="font-bold text-slate-800">На руки</span>
                  <span className="font-bold text-green-700">130 500 ₽</span>
                </div>
                <div className="border-t border-slate-100 pt-2 mt-2">
                  <div className="text-xs text-slate-500 mb-2">С профессиональным вычетом 20%:</div>
                  <div className="flex justify-between text-slate-600">
                    <span>Налоговая база (80% от 150 000 ₽)</span>
                    <span>120 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>НДФЛ 13% от 120 000 ₽</span>
                    <span className="font-semibold">− 15 600 ₽</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1 mt-1">
                    <span className="font-bold text-slate-800">На руки (с вычетом)</span>
                    <span className="font-bold text-green-700">134 400 ₽</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-xs mt-1">
                    <span>Экономия за счёт вычета</span>
                    <span>+ 3 900 ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Страховые взносы по ГПХ: кто платит и сколько
            </h2>
            <p className="text-slate-700 mb-4">
              Страховые взносы по договору ГПХ платит <strong>заказчик из своего бюджета</strong>{" "}
              поверх суммы вознаграждения. Это принципиально: исполнитель-физлицо никаких взносов
              не платит, они не удерживаются из его выплаты.
            </p>
            <p className="text-slate-700 mb-4">
              Ставки страховых взносов в 2026 году (для обычных организаций и ИП на ОСНО):
            </p>
            <div className="space-y-2 mb-4">
              {[
                { label: "ОПС — обязательное пенсионное страхование", rate: "22%", note: "Формирует пенсионный стаж" },
                { label: "ОМС — обязательное медицинское страхование", rate: "5,1%", note: "Полис ОМС" },
                { label: "ОСС — нетрудоспособность и материнство", rate: "2,9%", note: "Больничные (с 2023 года по ГПХ тоже)" },
                { label: "Травматизм (НС и ПЗ)", rate: "0,2%+", note: "Только если прямо указано в договоре ГПХ" },
              ].map(({ label, rate, note }) => (
                <div key={label} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-slate-800">{label}</div>
                    <div className="text-xs text-slate-500">{note}</div>
                  </div>
                  <div className="text-lg font-bold text-indigo-700 whitespace-nowrap ml-4">{rate}</div>
                </div>
              ))}
              <div className="flex items-center justify-between bg-indigo-50 border border-indigo-300 rounded-lg px-4 py-3">
                <div className="font-bold text-indigo-900">Итого взносов (без травматизма)</div>
                <div className="text-xl font-bold text-indigo-800">30%</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              * МСП-предприятия (малый и средний бизнес) платят пониженные ставки: 30% с выплат
              в пределах МРОТ и 15% с части сверх МРОТ (ст. 427 НК РФ). Это снижает нагрузку
              заказчика при регулярном сотрудничестве.
            </p>
            <p className="text-slate-600 text-sm">
              * При превышении предельной базы (в 2026 году ориентировочно ~2,8 млн ₽ нарастающим
              итогом с начала года) ставка ОПС снижается до 10%, ОСС не уплачивается.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Пример расчёта: договор ГПХ на 100 000 рублей
            </h2>
            <p className="text-slate-700 mb-6">
              Разберём полный расчёт для стандартного случая: физлицо выполнило работу по договору
              ГПХ, вознаграждение 100 000 ₽, заказчик — обычная российская компания.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Исполнитель */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="text-sm font-bold text-slate-700 mb-4 pb-2 border-b border-slate-100">
                  Что получает исполнитель
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Вознаграждение по договору</span>
                    <span className="font-semibold">100 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>НДФЛ 13% (удержан заказчиком)</span>
                    <span className="font-semibold">− 13 000 ₽</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 font-bold">
                    <span className="text-slate-800">На руки</span>
                    <span className="text-green-700 text-lg">87 000 ₽</span>
                  </div>
                </div>
              </div>

              {/* Заказчик */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="text-sm font-bold text-slate-700 mb-4 pb-2 border-b border-slate-100">
                  Что тратит заказчик
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Вознаграждение по договору</span>
                    <span className="font-semibold">100 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-orange-600">
                    <span>ОПС 22%</span>
                    <span className="font-semibold">+ 22 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-orange-600">
                    <span>ОМС 5,1%</span>
                    <span className="font-semibold">+ 5 100 ₽</span>
                  </div>
                  <div className="flex justify-between text-orange-600">
                    <span>ОСС 2,9%</span>
                    <span className="font-semibold">+ 2 900 ₽</span>
                  </div>
                  <div className="flex justify-between text-orange-600">
                    <span>НДФЛ (удержан у физлица)</span>
                    <span className="font-semibold text-slate-500">13 000 ₽ *</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 font-bold">
                    <span className="text-slate-800">Итого расходов</span>
                    <span className="text-orange-700 text-lg">130 000 ₽</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">* НДФЛ входит в сумму договора, не добавляется сверху</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-6">
              <p className="font-semibold text-slate-800 mb-3">Итоговый расчёт в одной таблице</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-white">
                      <th className="text-left p-2 text-slate-600 font-semibold">Показатель</th>
                      <th className="text-right p-2 text-slate-600 font-semibold">Сумма</th>
                      <th className="text-right p-2 text-slate-600 font-semibold">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Вознаграждение по договору", "100 000 ₽", "100%"],
                      ["НДФЛ 13% (удержание)", "13 000 ₽", "13%"],
                      ["На руки исполнителю", "87 000 ₽", "87%"],
                      ["ОПС 22% (заказчик сверху)", "22 000 ₽", "22%"],
                      ["ОМС 5,1% (заказчик сверху)", "5 100 ₽", "5,1%"],
                      ["ОСС 2,9% (заказчик сверху)", "2 900 ₽", "2,9%"],
                      ["Итого расходов заказчика", "130 000 ₽", "130%"],
                    ].map(([label, amount, pct]) => (
                      <tr key={label} className="border-b border-slate-100">
                        <td className="p-2 text-slate-700">{label}</td>
                        <td className="p-2 text-right font-semibold text-slate-800">{amount}</td>
                        <td className="p-2 text-right text-slate-500">{pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-5 text-center">
              <Link
                href="/"
                className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Рассчитать по своей сумме →
              </Link>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              ГПХ vs самозанятость: что выгоднее
            </h2>
            <p className="text-slate-700 mb-4">
              Самозанятость (НПД) в большинстве случаев выгоднее договора ГПХ — и для
              исполнителя, и для заказчика. Сравним на примере одного и того же вознаграждения
              100 000 ₽.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Параметр</th>
                    <th className="text-center p-3 font-semibold text-slate-700">ГПХ (физлицо)</th>
                    <th className="text-center p-3 font-semibold text-slate-700">Самозанятый (НПД)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Налог на вознаграждение", "НДФЛ 13%", "НПД 6% (с юрлицом)"],
                    ["Страховые взносы", "+30% (заказчик)", "Нет"],
                    ["На руки с 100 000 ₽", "87 000 ₽", "94 000 ₽"],
                    ["Расходы заказчика на 100 000 ₽", "130 000 ₽", "100 000 ₽"],
                    ["Пенсионный стаж", "Да (автоматически)", "Только по желанию"],
                    ["Лимит дохода", "Нет", "2,4 млн ₽/год"],
                    ["Отчётность", "Заказчик подаёт 6-НДФЛ", "Чек в «Мой налог»"],
                  ].map(([param, gph, sz]) => (
                    <tr key={param}>
                      <td className="p-3 text-slate-600">{param}</td>
                      <td className="p-3 text-center font-medium text-red-600">{gph}</td>
                      <td className="p-3 text-center font-medium text-green-600">{sz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-semibold text-green-900 mb-2">Когда выгоднее самозанятость</p>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Доход от юрлиц/ИП до 2,4 млн ₽/год</li>
                  <li>• Регулярная работа с несколькими заказчиками</li>
                  <li>• Хотите меньше бумажной работы</li>
                  <li>• Заказчику важна экономия на взносах</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-semibold text-blue-900 mb-2">Когда ГПХ остаётся разумным выбором</p>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Доход превышает 2,4 млн ₽/год</li>
                  <li>• Нужен пенсионный стаж без доп. взносов</li>
                  <li>• Разовая сделка, не планируете работать систематически</li>
                  <li>• Заказчик настаивает на ГПХ</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-900 font-semibold mb-1">Экономия за год</p>
              <p className="text-amber-800 text-sm">
                При доходе 100 000 ₽/месяц переход с ГПХ на самозанятость даёт исполнителю
                дополнительно <strong>7 000 ₽/мес × 12 = 84 000 ₽/год</strong>. Для заказчика
                экономия на взносах составляет <strong>30 000 ₽/мес × 12 = 360 000 ₽/год</strong>.
              </p>
            </div>
          </section>

          {/* Section 6 — FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Частые вопросы о налогах по договору ГПХ
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Какой НДФЛ по договору ГПХ в 2026 году?",
                  a: "Стандартная ставка — 13% при годовом доходе до 2,4 млн ₽. При доходе 2,4–5 млн ₽ — 15% с части превышения. Свыше 5 млн ₽ — 18%. Для большинства фрилансеров и подрядчиков применяется ставка 13%.",
                },
                {
                  q: "Кто платит страховые взносы по договору ГПХ — заказчик или исполнитель?",
                  a: "Страховые взносы платит заказчик из своего бюджета поверх суммы вознаграждения. Исполнитель-физлицо взносы не платит. Ставки: ОПС 22%, ОМС 5,1%, ОСС 2,9% = итого 30%.",
                },
                {
                  q: "Сколько получу на руки по договору ГПХ на 100 000 рублей?",
                  a: "87 000 рублей. Заказчик удержит НДФЛ 13 000 ₽ и перечислит вам 87 000 ₽. Дополнительно заказчик заплатит 30 000 ₽ страховых взносов из своего кармана — они не вычитаются из вашей суммы.",
                },
                {
                  q: "Нужно ли самому платить налог и подавать декларацию по договору ГПХ?",
                  a: "Если заказчик — российская организация или ИП, они сами удерживают и перечисляют НДФЛ — вам ничего делать не нужно. Если заказчик иностранный или физлицо, вы обязаны подать 3-НДФЛ до 30 апреля следующего года и уплатить налог до 15 июля.",
                },
                {
                  q: "Как применить профессиональный вычет при работе по ГПХ?",
                  a: "Профессиональный вычет (ст. 221 НК РФ) — 20% стандартно или сумма документально подтверждённых расходов. Чтобы заказчик применил вычет при расчёте налога, подайте ему письменное заявление до выплаты вознаграждения. Если не успели — можно вернуть переплату через 3-НДФЛ по итогам года.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="bg-slate-50 rounded-xl border border-slate-200 group"
                >
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-slate-900 list-none">
                    {q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2 flex-shrink-0">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-slate-700 text-sm leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Рассчитайте налоги по вашему договору ГПХ
            </h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Введите сумму вознаграждения в калькулятор — получите точный расчёт НДФЛ, взносов,
              суммы на руки и сравнение с самозанятым.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { href: "/guide/nalog-dogovor-gph", label: "Налог по договору ГПХ: НДФЛ и страховые взносы" },
                { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого: ставки и расчёт" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятый — что выгоднее" },
                { href: "/guide/ndfl-frilanser-13-protsent", label: "НДФЛ 13% для фрилансера: полный разбор" },
                { href: "/guide/dogovor-s-samozanyatym-2026", label: "Договор с самозанятым в 2026 году" },
                { href: "/guide/samozanyatyj-inostrannyj-zakazchik-2026", label: "Самозанятый и иностранный заказчик 2026" },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group"
                >
                  <span className="text-indigo-500 group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-slate-700 text-sm font-medium">{r.label}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
