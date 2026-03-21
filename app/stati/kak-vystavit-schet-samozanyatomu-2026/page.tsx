import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "kak-vystavit-schet-samozanyatomu-2026";

export const metadata: Metadata = {
  title: "Как выставить счёт самозанятому клиенту в 2026 году | FreelanceCalc",
  description:
    "Пошаговая инструкция: как самозанятому правильно выставить чек через Мой налог. Работа с физлицами и компаниями, предоплата, штрафы за нарушения. С примерами.",
  keywords: [
    "как выставить счёт самозанятому",
    "самозанятый счёт клиенту",
    "чек самозанятого мой налог",
    "как самозанятому выставить счёт юридическому лицу",
    "самозанятый счёт фактура",
    "самозанятый чек за услуги",
    "как выставить счёт ИП самозанятому",
    "самозанятый расчёт с клиентом",
    "мой налог выставить счёт",
    "НПД как выставить счёт",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Как самозанятому выставить счёт клиенту в 2026 году",
    description:
      "Самозанятые не выставляют «счёт» — они формируют чек. Разбираем, как это сделать для физлиц и компаний, что будет при нарушении и как рассчитать налог.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/${SLUG}`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/${SLUG}#article`,
      headline: "Как выставить счёт самозанятому клиенту в 2026 году",
      description:
        "Пошаговая инструкция: как самозанятому правильно оформить чек через Мой налог для физлиц и компаний.",
      author: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
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
        "@id": `${BASE_URL}/stati/${SLUG}`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Как выставить счёт самозанятому",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Может ли самозанятый выставить счёт клиенту?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятые не выставляют «счёт» в классическом понимании. Вместо этого они формируют чек через приложение «Мой налог» — это и есть официальный документ об оплате. Чек формируется сразу при получении денег и отправляется клиенту в виде ссылки или PDF.",
          },
        },
        {
          "@type": "Question",
          name: "Нужен ли договор между самозанятым и юридическим лицом?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Для разовых работ до 10 000 ₽ договор необязателен. Для регулярных выплат, крупных сумм или когда компания перечисляет деньги по безналу — договор нужен. Также потребуется акт выполненных работ. Чек через «Мой налог» обязателен в любом случае.",
          },
        },
        {
          "@type": "Question",
          name: "Что будет, если самозанятый не выбьет чек?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Штраф составляет 20% от суммы дохода, не отражённого в чеке — но не менее 1 000 ₽. При повторном нарушении в течение 6 месяцев — 100% суммы, не менее 5 000 ₽. Налоговая отслеживает поступления через банки.",
          },
        },
        {
          "@type": "Question",
          name: "Как самозанятому получить оплату от компании?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Компания может платить самозанятому на личную карту или расчётный счёт. После получения денег самозанятый обязан сформировать чек в «Мой налог» и передать его компании. Компании используют чек как подтверждение расхода.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли самозанятому выставить счёт на предоплату?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Чек в «Мой налог» формируется в момент получения денег — включая предоплату. Если проект сорвался и деньги вернули — чек можно аннулировать через то же приложение.",
          },
        },
      ],
    },
  ],
};

const STEPS_FL = [
  {
    num: "01",
    title: "Откройте приложение «Мой налог»",
    emoji: "📱",
    body: "Главный экран — кнопка «Новая продажа». Нажмите её сразу после того, как клиент оплатил.",
    tip: "Нет телефона под рукой? Используйте веб-версию: lknpd.nalog.ru",
  },
  {
    num: "02",
    title: "Выберите тип клиента — «Физическое лицо»",
    emoji: "👤",
    body: "Для обычных людей выбираем «Физлицо». Ставка налога — 4%. Имя и паспорт клиента не нужны.",
    tip: "Если клиент — ИП, но платит «как физлицо» (личная карта) — тоже выбирайте «Физлицо».",
  },
  {
    num: "03",
    title: "Укажите название услуги и сумму",
    emoji: "✍️",
    body: "Пишите конкретно: «Разработка лендинга», «SEO-аудит сайта», «Создание логотипа». Сумма — то, что вам пришло на счёт.",
    tip: "Размытые формулировки типа «услуги» — не повод для штрафа, но лучше писать конкретно.",
  },
  {
    num: "04",
    title: "Нажмите «Выдать чек»",
    emoji: "✅",
    body: "Приложение покажет чек с QR-кодом. Скопируйте ссылку или сохраните PDF. Отправьте клиенту в мессенджере или на email.",
    tip: "Чек нужно выдать не позднее 9-го числа следующего месяца, но лучше — сразу.",
  },
];

const STEPS_UR = [
  {
    num: "01",
    title: "Заключите договор",
    emoji: "📄",
    body: "Для работы с компанией нужен договор на оказание услуг. Можно использовать шаблон — главное указать: предмет, сроки, стоимость и реквизиты сторон.",
    tip: "Многие компании имеют свой шаблон договора с самозанятыми. Попросите у бухгалтера.",
  },
  {
    num: "02",
    title: "Подпишите акт выполненных работ",
    emoji: "📝",
    body: "После сдачи работы компания подписывает акт. Это их подтверждение факта получения услуги. Без акта бухгалтерия не проведёт оплату.",
    tip: "Чек в «Мой налог» НЕ заменяет акт. Это разные документы.",
  },
  {
    num: "03",
    title: "Получите оплату на карту",
    emoji: "💳",
    body: "Компания переводит деньги на вашу личную карту или СБП. Укажите реквизиты в договоре или отдельным письмом.",
    tip: "Банк может попросить пояснить происхождение платежа. Чек из «Мой налог» — ваше объяснение.",
  },
  {
    num: "04",
    title: "Выбейте чек в «Мой налог»",
    emoji: "📱",
    body: "Выбираете тип клиента — «Юридическое лицо», вводите ИНН компании. Ставка налога — 6%. Чек отправьте бухгалтеру компании.",
    tip: "Компания использует ваш чек как подтверждение расхода. Без чека — их налоговая не примет расход.",
  },
];

export default function KakVystavitSchetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3 flex-wrap">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 text-sm hover:text-gray-700">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Как выставить счёт самозанятому</span>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">

          {/* Hero */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              🧾 Документы и расчёты
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Как самозанятому выставить счёт клиенту в 2026 году
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Самозанятые не выставляют счёт — они формируют чек. Звучит просто,
              но 40% новых самозанятых делают это неправильно: не вовремя, не тому типу клиента
              или не выдают вообще. Штраф — от 1 000 до 100% суммы.
              Разбираем пошагово: физлица и компании.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>21 марта 2026</span>
              <span>·</span>
              <span>7 мин. чтения</span>
              <span>·</span>
              <span>FreelanceCalc</span>
            </div>
          </div>

          {/* Warning box */}
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-10">
            <div className="flex gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-amber-900 mb-1">Главное заблуждение</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Самозанятые <strong>не выставляют «счёт на оплату»</strong> как ИП или компании.
                  Их инструмент — <strong>чек через приложение «Мой налог»</strong>. Чек формируется
                  после получения денег, а не до. Если клиент просит «счёт» — вы отправляете
                  реквизиты карты и договариваетесь устно или по переписке. После оплаты — выдаёте чек.
                </p>
              </div>
            </div>
          </div>

          {/* Tax rate quick info */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">4%</div>
              <div className="text-sm text-gray-600">Налог с физлиц</div>
              <div className="text-xs text-gray-400 mt-1">Клиент — обычный человек</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">6%</div>
              <div className="text-sm text-gray-600">Налог с юрлиц</div>
              <div className="text-xs text-gray-400 mt-1">Клиент — компания или ИП</div>
            </div>
          </div>

          {/* Section 1: Физлица */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Чек для физлица: 4 шага
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Клиент-физлицо платит вам как частному специалисту. Договор не нужен.
              Только чек после оплаты.
            </p>
            <div className="space-y-4">
              {STEPS_FL.map((s) => (
                <div key={s.num} className="bg-white rounded-2xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 bg-blue-600 text-white rounded-xl flex items-center justify-center font-mono text-sm font-bold">
                      {s.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {s.emoji} {s.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{s.body}</p>
                      <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-xs text-blue-700">
                        💡 {s.tip}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Юрлица */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Работа с компаниями (юрлица и ИП)
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Компании более требовательны к документам — им нужно подтверждение расходов
              для своей бухгалтерии. Процесс сложнее, зато ставка выше и платят вовремя.
            </p>
            <div className="space-y-4">
              {STEPS_UR.map((s) => (
                <div key={s.num} className="bg-white rounded-2xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-mono text-sm font-bold">
                      {s.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {s.emoji} {s.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{s.body}</p>
                      <div className="bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2 text-xs text-indigo-700">
                        💡 {s.tip}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Штрафы */}
          <section className="mb-12 bg-red-50 border border-red-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Штрафы за нарушения: что грозит
            </h2>
            <div className="space-y-3 mb-4">
              {[
                {
                  situation: "Не выдали чек вовремя (первый раз)",
                  fine: "20% суммы, мин. 1 000 ₽",
                  color: "text-orange-600",
                },
                {
                  situation: "Повторное нарушение за 6 месяцев",
                  fine: "100% суммы, мин. 5 000 ₽",
                  color: "text-red-600",
                },
                {
                  situation: "Скрыли доход, не сформировали чек",
                  fine: "Доначисление + штраф + возможная потеря статуса",
                  color: "text-red-700",
                },
              ].map((row) => (
                <div
                  key={row.situation}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl px-4 py-3 border border-red-100 gap-1"
                >
                  <span className="text-sm text-gray-700">{row.situation}</span>
                  <span className={`font-bold text-sm shrink-0 ${row.color}`}>{row.fine}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              * Основание: ст. 129.13 НК РФ. Налоговая отслеживает поступления через банки — скрыть сложно.
            </p>
          </section>

          {/* Section 4: Prepayment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Предоплата и возврат: как не запутаться
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">📥 Получили предоплату</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Сформируйте чек сразу на сумму предоплаты — в тот же день или в крайнем случае
                  до 9-го числа следующего месяца. Налог начислится на эту сумму.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">↩️ Вернули деньги</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Открываете чек в «Мой налог», нажимаете «Аннулировать» — выбираете причину
                  «Возврат средств». Налог пересчитается автоматически. Это бесплатно и занимает
                  30 секунд.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">💸 Доплата за сверхурочные</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Получили доплату — выдаёте отдельный чек на эту сумму. Каждый платёж = отдельный чек.
                  Объединять несколько платежей в один чек не рекомендуется.
                </p>
              </div>
            </div>
          </section>

          {/* Tax calculator CTA */}
          <section className="mb-12 bg-blue-600 text-white rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-2">
                  Посчитайте налог заранее
                </p>
                <h3 className="font-bold text-lg mb-2">
                  Сколько налога я заплачу с этого чека?
                </h3>
                <p className="text-blue-100 text-sm">
                  Введите сумму — калькулятор покажет налог НПД (4% или 6%)
                  и остаток на руки. Также учитывает бонус 10 000 ₽ для новых самозанятых.
                </p>
              </div>
              <Link
                href="/instrumenty/kalkulator-naloga-samozanyatogo"
                className="shrink-0 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Рассчитать налог →
              </Link>
            </div>
          </section>

          {/* Docs checklist */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Итоговая шпаргалка: кому что нужно
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left rounded-tl-xl">Ситуация</th>
                    <th className="px-4 py-3 text-left">Чек в Мой налог</th>
                    <th className="px-4 py-3 text-left">Договор</th>
                    <th className="px-4 py-3 text-left rounded-tr-xl">Акт</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sit: "Физлицо, разовая работа", chek: "✅ Обязательно", dogovor: "❌ Не нужен", akt: "❌ Не нужен" },
                    { sit: "Физлицо, регулярно", chek: "✅ Обязательно", dogovor: "⚠️ Желательно", akt: "❌ Не нужен" },
                    { sit: "ИП, разовая работа", chek: "✅ Обязательно", dogovor: "⚠️ При сумме > 10 000 ₽", akt: "⚠️ Желательно" },
                    { sit: "Компания (ООО, АО)", chek: "✅ Обязательно", dogovor: "✅ Обязательно", akt: "✅ Обязательно" },
                    { sit: "Компания, постоянный клиент", chek: "✅ Каждый платёж", dogovor: "✅ Один раз", akt: "✅ Каждый период" },
                  ].map((row, i) => (
                    <tr key={row.sit} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{row.sit}</td>
                      <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.chek}</td>
                      <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.dogovor}</td>
                      <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.akt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Rate calculator CTA */}
          <section className="mb-12 bg-gray-900 text-white rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Ваша ставка с учётом налогов
                </p>
                <h3 className="font-bold text-lg mb-2">
                  Теперь посчитайте, сколько вам нужно брать с клиентов
                </h3>
                <p className="text-gray-300 text-sm">
                  Чек оформили — отлично. Следующий вопрос: правильную ли цену вы назвали?
                  Калькулятор покажет минимальную ставку с учётом налога, отпуска и загрузки.
                </p>
              </div>
              <Link
                href="/"
                className="shrink-0 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Рассчитать ставку →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Можно ли самозанятому выставить счёт заранее, до оплаты?",
                  a: "Нет — чек в «Мой налог» формируется только после получения денег. Но вы можете отправить клиенту реквизиты карты и договориться устно или по переписке. Компаниям можно отправить проформу (неформальный документ «к оплате»), но это не официальный счёт.",
                },
                {
                  q: "Нужен ли ИНН клиента для формирования чека?",
                  a: "Для физлиц — нет, ИНН не нужен. Для юрлиц и ИП — нужен ИНН организации: приложение подтянет название компании автоматически. Это позволяет компании подтвердить расход в своей бухгалтерии.",
                },
                {
                  q: "Что делать, если клиент платит наличными?",
                  a: "Всё то же самое — получаете наличные, формируете чек через «Мой налог» в тот же день. Применяются те же правила и штрафы. Наличные не освобождают от чека.",
                },
                {
                  q: "Можно ли выставить один чек на несколько услуг?",
                  a: "Да — в одном чеке можно добавить несколько позиций. Но если услуги разные (например, разработка и дизайн), лучше сделать отдельные строки для ясности. Каждый отдельный платёж должен быть отдельным чеком.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-2xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Читайте также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/instrumenty/kalkulator-naloga-samozanyatogo", label: "🧮 Калькулятор налога самозанятого" },
                { href: "/stati/kak-oformit-samozanyatost-2026", label: "📋 Как оформить самозанятость" },
                { href: "/stati/samozanyatyj-vs-ip-frilancer", label: "⚖️ Самозанятый vs ИП: что выгоднее" },
                { href: "/stati/izmeneniya-samozanyatyh-2026", label: "📰 Изменения для самозанятых в 2026" },
                { href: "/nalog", label: "💰 Налоги фрилансера: все режимы" },
                { href: "/", label: "🎯 Рассчитать ставку фрилансера" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white mt-8">
          <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <Link href="/" className="font-semibold text-gray-900 hover:text-blue-600">FreelanceCalc</Link>
            <div className="flex gap-4">
              <Link href="/stati" className="hover:text-gray-700">Статьи</Link>
              <Link href="/nalog" className="hover:text-gray-700">Налоги</Link>
              <Link href="/stavka" className="hover:text-gray-700">Ставки</Link>
              <Link href="/" className="hover:text-gray-700">Калькулятор</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
