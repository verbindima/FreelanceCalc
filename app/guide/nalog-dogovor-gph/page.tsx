import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Налог по договору ГПХ в 2026 году: НДФЛ и страховые взносы | FreelanceCalc",
  description:
    "Сколько налогов удержат по договору ГПХ в 2026 году? НДФЛ 13%, страховые взносы 30%, расчёт суммы на руки. Сравнение с самозанятым и ИП. Онлайн-калькулятор.",
  alternates: { canonical: `${BASE_URL}/guide/nalog-dogovor-gph` },
  openGraph: {
    title: "Налог по договору ГПХ 2026: НДФЛ 13% + взносы 30%",
    description:
      "Договор на 100 000 ₽ → на руки 81 700 ₽. Всего государство заберёт 18 300 ₽ (НДФЛ) + заказчик доплатит 30% взносов. Разбор с калькулятором.",
    url: `${BASE_URL}/guide/nalog-dogovor-gph`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Налог по договору ГПХ 2026",
    description:
      "НДФЛ 13%, страховые взносы 30% — кто платит, сколько, как считать. Сравнение с самозанятым.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какой налог по договору ГПХ в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По договору ГПХ с физлицом заказчик удерживает НДФЛ 13% (или 15% при доходе свыше 5 млн ₽/год) и уплачивает страховые взносы 30% от суммы вознаграждения. Исполнитель получает сумму уже за вычетом НДФЛ. Взносы платит заказчик сверх суммы договора.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько получу на руки по договору ГПХ на 100 000 рублей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При договоре ГПХ на 100 000 ₽: НДФЛ 13 000 ₽ удерживается заказчиком, на руки вы получаете 87 000 ₽. Дополнительно заказчик заплатит страховые взносы 30 000 ₽ сверху из своего бюджета. Итого расходы заказчика на выплату — 130 000 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Самозанятый или ГПХ — что выгоднее?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятость выгоднее в 99% случаев. При доходе 100 000 ₽/мес самозанятый платит 6 000 ₽ налога (6%), по ГПХ удержат 13 000 ₽ НДФЛ. Разница — 7 000 ₽/мес или 84 000 ₽/год. Плюс заказчик по ГПХ дополнительно платит 30 000 ₽ взносов — для него самозанятый тоже выгоднее на 23% расходов.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли самому платить налог по договору ГПХ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если заказчик — российская организация или ИП, они сами удерживают НДФЛ из вашего вознаграждения и перечисляют в бюджет. Вы ничего не делаете. Если заказчик — иностранная компания или физлицо, вы обязаны сами подать декларацию 3-НДФЛ до 30 апреля следующего года и уплатить налог до 15 июля.",
      },
    },
    {
      "@type": "Question",
      name: "Платит ли физлицо страховые взносы по договору ГПХ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Страховые взносы 30% по договору ГПХ платит заказчик сверх суммы вознаграждения. Исполнитель (физлицо) страховые взносы не платит. Но эти взносы идут в СФР и формируют пенсионный стаж — в отличие от самозанятого, у которого стажа нет без добровольных взносов.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Налог по договору ГПХ в 2026 году: НДФЛ и страховые взносы",
  description:
    "Расчёт НДФЛ 13% и страховых взносов 30% по договору ГПХ. Кто платит, сколько получит исполнитель на руки. Сравнение с самозанятым.",
  url: `${BASE_URL}/guide/nalog-dogovor-gph`,
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function NalogDogovorGphPage() {
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
            Налог по договору ГПХ в 2026 году: НДФЛ и взносы
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Сколько удержат с вашей выплаты? Кто платит страховые взносы? Выгоднее ли стать самозанятым? Разбор с примерами и калькулятором.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 8 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Calculator CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Рассчитайте налог по вашему договору ГПХ
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Введите сумму вознаграждения — калькулятор покажет НДФЛ, взносы, сумму на руки и сравнение с самозанятым
          </p>
          <Link
            href="/nalog/dogovor-gph"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть калькулятор ГПХ →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Что такое ГПХ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Что такое договор ГПХ и кто им пользуется
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Договор гражданско-правового характера (ГПХ) — соглашение между заказчиком и исполнителем-физлицом о выполнении конкретной работы или оказании услуги. В отличие от трудового договора, ГПХ не создаёт трудовых отношений: нет записи в трудовую, нет отпуска, нет больничного.
              </p>
              <p>
                Самые распространённые формы ГПХ для фрилансеров:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Договор подряда</strong> — результат работы (сайт, текст, дизайн-макет)</li>
                <li><strong>Договор возмездного оказания услуг</strong> — процесс услуги (консультация, обучение)</li>
                <li><strong>Авторский договор</strong> — передача прав на творческий результат</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Важно: переквалификация в трудовые отношения</p>
                <p className="text-xs text-amber-700">
                  Налоговая может переквалифицировать ГПХ в трудовой договор, если работа систематическая, по расписанию, на территории заказчика. Последствия — доначисление взносов и штрафы. Риск актуален при долгосрочном сотрудничестве с одним заказчиком.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — НДФЛ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              НДФЛ по договору ГПХ: ставка, кто платит, как считать
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Вознаграждение физлица по ГПХ облагается <strong>НДФЛ по ставке 13%</strong> (при доходе до 5 млн ₽/год) или 15% (с суммы превышения 5 млн ₽). Заказчик выступает налоговым агентом: удерживает налог из выплаты и перечисляет в бюджет.
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Пример расчёта НДФЛ</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Договор ГПХ на разработку сайта — 150 000 ₽:</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Сумма по договору</span>
                  <span className="font-semibold">150 000 ₽</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>НДФЛ 13% (удерживает заказчик)</span>
                  <span className="font-semibold">− 19 500 ₽</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="font-bold text-slate-800">На руки исполнителю</span>
                  <span className="font-bold text-green-700">130 500 ₽</span>
                </div>
              </div>

              <p>
                Профессиональный налоговый вычет позволяет снизить базу: <strong>20% стандартный вычет</strong> (без документов) или документально подтверждённые расходы. Для применения вычета нужно подать заявление заказчику или самостоятельно через 3-НДФЛ.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs mt-2">
                <p className="font-semibold text-slate-700 mb-2">С профвычетом 20%:</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Налоговая база (80% от 150 000 ₽)</span>
                  <span className="font-semibold">120 000 ₽</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>НДФЛ 13% от 120 000 ₽</span>
                  <span className="font-semibold">− 15 600 ₽</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="font-bold text-slate-800">На руки исполнителю</span>
                  <span className="font-bold text-green-700">134 400 ₽</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Экономия на вычете</span>
                  <span>+ 3 900 ₽</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — Страховые взносы */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Страховые взносы по ГПХ: кто и сколько платит
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Страховые взносы по договору ГПХ платит <strong>заказчик сверх суммы вознаграждения</strong>. Исполнитель-физлицо никаких взносов не платит. Это принципиальное отличие от ИП, который платит взносы сам.
              </p>

              <h3 className="font-semibold text-slate-800 text-base">Ставки взносов в 2026 году:</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-2.5 text-xs">
                  <span className="text-slate-600">ОПС (пенсионное страхование)</span>
                  <span className="font-bold text-slate-800">22%</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-2.5 text-xs">
                  <span className="text-slate-600">ОМС (медицинское страхование)</span>
                  <span className="font-bold text-slate-800">5,1%</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-2.5 text-xs">
                  <span className="text-slate-600">ВНиМ (нетрудоспособность, материнство)</span>
                  <span className="font-bold text-slate-800">2,9%</span>
                </div>
                <div className="flex items-center justify-between bg-indigo-50 rounded-lg px-4 py-2.5 text-xs border border-indigo-200">
                  <span className="text-indigo-700 font-semibold">Итого взносов</span>
                  <span className="font-bold text-indigo-800">30%</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                * При доходе выше предельной базы (в 2026 году ~2,8 млн ₽/год) ставка ОПС снижается до 10%, ВНиМ не уплачивается. МСП-предприятия платят 15% с выплат сверх МРОТ.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs mt-4">
                <p className="font-semibold text-slate-700 mb-2">Полные расходы заказчика на договор ГПХ 100 000 ₽:</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Вознаграждение по договору</span>
                  <span className="font-semibold">100 000 ₽</span>
                </div>
                <div className="flex justify-between text-orange-600">
                  <span>Страховые взносы 30%</span>
                  <span className="font-semibold">+ 30 000 ₽</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="font-bold text-slate-800">Итого расходов заказчика</span>
                  <span className="font-bold text-orange-700">130 000 ₽</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                  <span>Из этих 100 000 ₽ исполнитель получит</span>
                  <span className="font-semibold text-green-700">87 000 ₽</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — ГПХ vs Самозанятый */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              ГПХ vs самозанятый: что выгоднее для фрилансера
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Самозанятость выгоднее договора ГПХ практически всегда — и для исполнителя, и для заказчика.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Параметр</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">ГПХ (физлицо)</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Самозанятый</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Налог с вознаграждения</td>
                      <td className="px-3 py-2 text-center font-semibold text-red-600">13%</td>
                      <td className="px-3 py-2 text-center font-semibold text-green-600">6%</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Взносы (платит заказчик)</td>
                      <td className="px-3 py-2 text-center font-semibold text-red-600">+30%</td>
                      <td className="px-3 py-2 text-center font-semibold text-green-600">0%</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Доход исполнителя с 100 000 ₽</td>
                      <td className="px-3 py-2 text-center font-semibold text-red-600">87 000 ₽</td>
                      <td className="px-3 py-2 text-center font-semibold text-green-600">94 000 ₽</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Расходы заказчика (на 100 000 ₽)</td>
                      <td className="px-3 py-2 text-center font-semibold text-red-600">130 000 ₽</td>
                      <td className="px-3 py-2 text-center font-semibold text-green-600">100 000 ₽</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Пенсионный стаж</td>
                      <td className="px-3 py-2 text-center text-green-600">✓ Да</td>
                      <td className="px-3 py-2 text-center text-amber-600">Добровольно</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Лимит дохода</td>
                      <td className="px-3 py-2 text-center text-green-600">Нет</td>
                      <td className="px-3 py-2 text-center text-amber-600">2,4 млн ₽/год</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Налоговый вычет</td>
                      <td className="px-3 py-2 text-center text-green-600">20% (профвычет)</td>
                      <td className="px-3 py-2 text-center text-green-600">10 000 ₽ при регистрации</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-green-800 font-semibold mb-1">Вывод: когда выгодно оставаться на ГПХ</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Разовая сделка, не планируете работать систематически</li>
                  <li>• Доход выше 2,4 млн ₽/год (лимит самозанятого)</li>
                  <li>• Хотите формировать пенсионный стаж без доп. взносов</li>
                  <li>• Заказчик не работает с самозанятыми (редкие случаи)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 — Иностранный заказчик */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Договор ГПХ с иностранным заказчиком
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Если ваш заказчик — иностранная компания или нерезидент, налоговый агент отсутствует. Вы обязаны самостоятельно:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Задекларировать доход — подать <strong>3-НДФЛ до 30 апреля</strong> следующего года.</li>
                <li>Уплатить НДФЛ — <strong>до 15 июля</strong> года, следующего за налоговым периодом.</li>
                <li>Подтвердить источник — иметь договор, инвойс или банковскую выписку.</li>
              </ol>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-blue-800 font-semibold mb-1">Курсовые разницы при оплате в валюте</p>
                <p className="text-xs text-blue-700">
                  Доход в иностранной валюте пересчитывается в рубли по курсу ЦБ на дату получения. При изменении курса между датой договора и датой поступления средств возникает курсовая разница — она также включается в налоговую базу.
                </p>
              </div>
              <p>
                Для работы с иностранными заказчиками многие фрилансеры предпочитают оформить <strong>самозанятость или ИП</strong> — проще отчётность и ниже налоговая нагрузка.
              </p>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-indigo-900 mb-2">
              Калькулятор налогов по договору ГПХ
            </h2>
            <p className="text-sm text-indigo-700 mb-4">
              Введите сумму вознаграждения — калькулятор посчитает НДФЛ, страховые взносы, сумму на руки и сравнит с самозанятым и ИП УСН.
            </p>
            <Link
              href="/nalog/dogovor-gph"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Открыть калькулятор ГПХ →
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Какой налог по договору ГПХ в 2026 году?",
                  a: "НДФЛ 13% удерживает заказчик из вашего вознаграждения. При доходе свыше 5 млн ₽/год ставка 15% с суммы превышения. Дополнительно заказчик уплачивает страховые взносы 30% сверху — это не вычитается из вашей суммы.",
                },
                {
                  q: "Сколько получу на руки по договору ГПХ на 100 000 рублей?",
                  a: "87 000 рублей. Заказчик удержит НДФЛ 13 000 ₽ и перечислит вам 87 000 ₽. Плюс заказчик заплатит 30 000 ₽ взносов из своего бюджета.",
                },
                {
                  q: "Самозанятый или ГПХ — что выгоднее?",
                  a: "Самозанятость выгоднее: налог 6% вместо 13% НДФЛ. Экономия 7 000 ₽ с каждых 100 000 ₽ дохода. Заказчик тоже экономит 30 000 ₽ взносов — это делает вас привлекательнее как исполнителя.",
                },
                {
                  q: "Нужно ли самому платить налог по договору ГПХ?",
                  a: "Если заказчик — российская компания или ИП, они сами удерживают и платят НДФЛ. Если заказчик иностранный — подаёте 3-НДФЛ до 30 апреля и платите налог до 15 июля.",
                },
                {
                  q: "Платит ли физлицо страховые взносы по договору ГПХ?",
                  a: "Нет. Страховые взносы 30% платит заказчик из своего бюджета поверх вашего вознаграждения. Для вас это бесплатно — и при этом идёт пенсионный стаж.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-4 py-3 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-semibold text-slate-800 list-none">
                    {q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2">▾</span>
                  </summary>
                  <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-base font-bold text-slate-800 mb-4">
              Читайте также
            </h2>
            <div className="space-y-2">
              {[
                { href: "/guide/ndfl-frilanser-13-protsent", label: "НДФЛ 13% для фрилансера: полный разбор" },
                { href: "/guide/nalog-samozanyatyj", label: "Налог для самозанятых в 2026 году" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятый — что выгоднее" },
                { href: "/nalog/dogovor-gph", label: "Калькулятор налогов по договору ГПХ" },
                { href: "/", label: "Калькулятор ставки фрилансера" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                >
                  <span className="text-indigo-400">→</span>
                  {label}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
