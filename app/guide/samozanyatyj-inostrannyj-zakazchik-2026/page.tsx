import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Самозанятый с иностранным заказчиком 2026: как получить оплату | FreelanceCalc",
  description:
    "Как самозанятому легально работать с иностранными компаниями в 2026 году. Ограничения 499-ФЗ, способы получения валюты, какой налог платить, как выставить инвойс. Пример расчёта.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-inostrannyj-zakazchik-2026` },
  openGraph: {
    title: "Самозанятый с иностранным заказчиком 2026: оплата, налог и инвойс",
    description:
      "499-ФЗ запретил зарубежные эл. кошельки — как теперь принимать оплату от Upwork, иностранных компаний. НПД 6%, курс ЦБ, валютный контроль. Полный разбор.",
    url: `${BASE_URL}/guide/samozanyatyj-inostrannyj-zakazchik-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Самозанятый с иностранным заказчиком 2026",
    description:
      "Как легально получить валюту от зарубежного клиента: НПД 6%, запрет электронных кошельков, инвойс и валютный контроль.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Может ли самозанятый работать с иностранными компаниями?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, самозанятый может работать с иностранными заказчиками — физлицами и компаниями. Это полностью легально. Налог на профессиональный доход (НПД) применяется вне зависимости от того, откуда пришли деньги — из России или из-за рубежа. Ставка 6% для иностранных компаний (юрлиц).",
      },
    },
    {
      "@type": "Question",
      name: "Какой налог платит самозанятый с дохода от иностранного заказчика?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятый платит НПД: 6% — если заказчик иностранная компания (юрлицо), 4% — если заказчик физлицо. Чек в приложении «Мой налог» нужно выбить в день получения оплаты. Доход в валюте пересчитывается в рубли по курсу ЦБ на дату поступления денег на счёт.",
      },
    },
    {
      "@type": "Question",
      name: "Как получить деньги от иностранного заказчика самозанятому в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Основной способ — банковский SWIFT-перевод на расчётный счёт в российском банке. Приём оплаты через иностранные электронные кошельки (Wise, PayPal и аналоги) для самозанятых, ИП и юрлиц запрещён с 2024 года по закону 499-ФЗ. При получении суммы свыше $10 000 нужно предоставить в банк документы по сделке для валютного контроля.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли уведомлять ФНС или МВД о работе с иностранным заказчиком?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Уведомлять ФНС или МВД специально не нужно. Достаточно выбить чек в «Мой налог» на сумму оплаты. При наличии иностранного счёта нужно уведомить ФНС об открытии счёта в течение 30 дней и подавать ежегодный отчёт о движении средств. При сумме контракта свыше $1 000 000 нужна постановка контракта на учёт в банке.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли договор с иностранным заказчиком?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Договор или инвойс на английском языке является обязательным документом для прохождения валютного контроля в банке. В документе должны быть: стороны, предмет, сумма, сроки и способ оплаты. При сумме контракта свыше 3 млн ₽ (эквивалент) банк может запросить документы автоматически.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Самозанятый с иностранным заказчиком в 2026 году: налог, оплата, инвойс",
  description:
    "Полный гайд: как самозанятому легально принять оплату от иностранной компании в 2026 году. Ограничения 499-ФЗ, НПД 6%, валютный контроль, инвойс.",
  url: `${BASE_URL}/guide/samozanyatyj-inostrannyj-zakazchik-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyInostrannyPage() {
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
            Самозанятый с иностранным заказчиком в 2026 году
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Как легально получить оплату от зарубежной компании: ограничения 499-ФЗ, НПД 6%, валютный контроль и инвойс на английском.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 9 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Alert: 499-FZ */}
        <div className="mb-8 bg-amber-50 border border-amber-300 rounded-2xl p-5">
          <p className="text-sm font-bold text-amber-900 mb-1">
            ⚠️ Важно: изменения с 499-ФЗ
          </p>
          <p className="text-xs text-amber-800 leading-relaxed">
            С 2024 года для самозанятых, ИП и юридических лиц в России запрещено принимать оплату через иностранные электронные кошельки (Wise, PayPal, WebMoney и аналоги). Единственный законный способ — банковский перевод (SWIFT/SEPA) на российский счёт.
          </p>
        </div>

        {/* Calculator CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Рассчитайте свою ставку фрилансера с учётом налогов
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Введите желаемый доход — калькулятор покажет, сколько выставить в инвойсе с учётом НПД 6%
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть калькулятор ставки →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Законность */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Может ли самозанятый работать с иностранными компаниями
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                <strong>Да, это полностью законно.</strong> Режим НПД (налог на профессиональный доход) не ограничивает самозанятых в выборе заказчиков — работать можно как с российскими, так и с зарубежными компаниями и физлицами.
              </p>
              <p>
                Согласно разъяснениям ФНС и судебной практике, факт нахождения заказчика за рубежом не влияет на возможность применения НПД. Главное условие — вы как исполнитель находитесь в России и выполняете работу на территории РФ.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-green-800 font-semibold mb-1">Кто может работать с иностранцами на НПД</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• IT-разработчики, работающие с зарубежными стартапами</li>
                  <li>• Дизайнеры и авторы на международных биржах</li>
                  <li>• Консультанты и преподаватели с иностранными клиентами</li>
                  <li>• Переводчики с зарубежными агентствами</li>
                  <li>• Маркетологи и SMM-специалисты для зарубежных брендов</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 — Запрет 499-ФЗ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Запрет электронных кошельков: что говорит 499-ФЗ
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Федеральный закон 499-ФЗ, вступивший в силу в 2024 году, запретил самозанятым, ИП и юрлицам принимать деньги через <strong>иностранные электронные кошельки</strong>. Под запрет попали:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Wise (TransferWise)</strong> — самый популярный сервис для фрилансеров</li>
                <li><strong>PayPal</strong> — работал для бизнеса до санкций, теперь полностью заблокирован</li>
                <li><strong>WebMoney, Skrill, Payoneer</strong> — аналоги под запретом</li>
                <li><strong>Любые иностранные платёжные агрегаторы</strong> без российской лицензии</li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-red-800 font-semibold mb-1">Что будет за нарушение</p>
                <p className="text-xs text-red-700">
                  Приём оплаты через запрещённые каналы является нарушением валютного законодательства. Штраф — от 20% до 40% от суммы незаконной операции. При повторных нарушениях возможна уголовная ответственность.
                </p>
              </div>
              <p>
                <strong>Что разрешено:</strong> SWIFT-переводы и корреспондентские банковские переводы на расчётный счёт в российском банке. Также разрешены переводы через российские платёжные агрегаторы с лицензией ЦБ РФ.
              </p>
            </div>
          </section>

          {/* Section 3 — Как получить деньги */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как получить оплату от иностранного заказчика в 2026 году
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">

              <h3 className="font-semibold text-slate-800 text-base">Способ 1 — SWIFT-перевод (основной)</h3>
              <p>
                Самозанятый может открыть валютный счёт в российском банке и принимать платежи через SWIFT. Банки, которые в 2026 году работают с входящими SWIFT-переводами:
              </p>
              <div className="space-y-2">
                {[
                  { bank: "Газпромбанк", note: "Работает с входящими, несмотря на санкции" },
                  { bank: "Россельхозбанк", note: "Принимает SWIFT от большинства стран" },
                  { bank: "Тинькофф / Т-Банк", note: "Входящие SWIFT через банки-корреспонденты" },
                  { bank: "Совкомбанк", note: "Открыт валютный счёт для самозанятых" },
                ].map(({ bank, note }) => (
                  <div key={bank} className="flex items-start gap-3 bg-slate-50 rounded-lg px-4 py-2.5 text-xs">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-slate-800">{bank}</span>
                      <span className="text-slate-500 ml-2">{note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Способ 2 — Платёжный агент</h3>
              <p>
                Российские платёжные агенты принимают деньги на иностранный счёт и переводят вам рубли или валюту на российский счёт. Комиссия обычно 1–3%. Актуально если прямой SWIFT от заказчика невозможен из-за санкций.
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Способ 3 — Счёт в дружественной стране</h3>
              <p>
                Открыть счёт в банке Армении, Казахстана, ОАЭ или Турции, принять оплату там, затем перевести в Россию. Этот путь требует уведомить ФНС об открытии иностранного счёта в течение 30 дней и подавать ежегодный отчёт о движении средств.
              </p>
            </div>
          </section>

          {/* Section 4 — Налог */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Какой налог платит самозанятый с дохода от иностранца
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Самозанятый платит НПД по стандартным ставкам — никаких льгот или надбавок за работу с иностранцами нет:
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 text-sm">
                  <span className="text-indigo-700">Иностранная <strong>компания</strong> (юрлицо)</span>
                  <span className="font-bold text-indigo-900 text-base">6%</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm">
                  <span className="text-slate-700">Иностранное <strong>физлицо</strong></span>
                  <span className="font-bold text-slate-900 text-base">4%</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-2">Важно: курсовая разница</p>
                <p className="text-xs text-amber-700">
                  Доход в иностранной валюте пересчитывается в рубли по <strong>официальному курсу ЦБ на дату получения денег</strong> на счёт. В «Мой налог» сумму нужно вносить уже в рублях. При резком изменении курса рублёвый доход и налог могут значительно отличаться от ожидаемых.
                </p>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Пример расчёта</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Получен перевод $2 000 от американской компании, курс ЦБ 92 ₽/$:</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Доход в рублях ($2 000 × 92)</span>
                  <span className="font-semibold">184 000 ₽</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>НПД 6% (иностранное юрлицо)</span>
                  <span className="font-semibold">− 11 040 ₽</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="font-bold text-slate-800">Остаётся на руки</span>
                  <span className="font-bold text-green-700">172 960 ₽</span>
                </div>
                <div className="flex justify-between text-slate-400 pt-1 border-t border-slate-100">
                  <span>Бонус: налоговый вычет при регистрации</span>
                  <span>−10 000 ₽ (один раз)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 — Инвойс */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как выставить инвойс иностранному заказчику
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Инвойс (invoice) — счёт на оплату услуг. Для прохождения валютного контроля в российском банке инвойс или договор обязателен. Минимальный состав инвойса:
              </p>
              <div className="space-y-2">
                {[
                  { item: "Invoice number", desc: "Уникальный номер документа, например INV-2026-001" },
                  { item: "Invoice date", desc: "Дата выставления" },
                  { item: "From (Seller)", desc: "Ваше ФИО, адрес, ИНН" },
                  { item: "To (Buyer)", desc: "Название компании, страна, юридический адрес" },
                  { item: "Description of services", desc: "Описание услуги (напр. 'Web development services')" },
                  { item: "Amount", desc: "Сумма в валюте расчётов (USD/EUR)" },
                  { item: "Bank details", desc: "SWIFT-код банка, номер счёта (IBAN/account), БИК" },
                ].map(({ item, desc }) => (
                  <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-lg px-4 py-2.5 text-xs">
                    <span className="text-indigo-500 font-bold mt-0.5 shrink-0">→</span>
                    <div>
                      <span className="font-semibold text-slate-800">{item}:</span>
                      <span className="text-slate-500 ml-1">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-blue-800 font-semibold mb-1">Про валютный контроль</p>
                <p className="text-xs text-blue-700">
                  При поступлении суммы до 3 млн ₽ (эквивалент) банк, как правило, запрашивает инвойс. При суммах выше 3 млн ₽ может потребоваться постановка контракта на учёт. При сумме контракта выше 6 млн ₽ ($65 000+) — обязательная регистрация контракта в банке.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 — Самозанятый vs ИП для работы с иностранцами */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Самозанятый или ИП для работы с иностранными клиентами
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Оба статуса подходят для работы с зарубежными заказчиками. Выбор зависит от масштаба и потребностей.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Параметр</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Самозанятый</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">ИП (УСН 6%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Налог с дохода</td>
                      <td className="px-3 py-2 text-center font-semibold text-green-600">6%</td>
                      <td className="px-3 py-2 text-center font-semibold text-amber-600">6% + взносы</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Фиксированные взносы</td>
                      <td className="px-3 py-2 text-center text-green-600">Нет</td>
                      <td className="px-3 py-2 text-center text-amber-600">~49 500 ₽/год</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Лимит дохода</td>
                      <td className="px-3 py-2 text-center text-amber-600">2,4 млн ₽/год</td>
                      <td className="px-3 py-2 text-center text-green-600">265 млн ₽/год</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Валютный счёт</td>
                      <td className="px-3 py-2 text-center text-green-600">Открыть как физлицо</td>
                      <td className="px-3 py-2 text-center text-green-600">Расчётный счёт ИП</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Наём сотрудников</td>
                      <td className="px-3 py-2 text-center text-red-500">Нет</td>
                      <td className="px-3 py-2 text-center text-green-600">До 130 чел.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Сложность регистрации</td>
                      <td className="px-3 py-2 text-center text-green-600">5 минут (приложение)</td>
                      <td className="px-3 py-2 text-center text-amber-600">1–3 дня + госпошлина</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-green-800 font-semibold mb-1">Рекомендация</p>
                <p className="text-xs text-green-700">
                  Если ваш годовой доход от иностранных заказчиков меньше 2,4 млн ₽ (~$26 000) — самозанятость выгоднее. При более высоком доходе или при необходимости нанять субподрядчиков — переходите на ИП. Разница в налогах при доходе 2 млн ₽/год: самозанятый платит 120 000 ₽, ИП — 120 000 ₽ + 49 500 ₽ взносов = 169 500 ₽.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-indigo-900 mb-2">
              Рассчитайте ставку для иностранного заказчика
            </h2>
            <p className="text-sm text-indigo-700 mb-4">
              Введите желаемый чистый доход — калькулятор покажет, какую сумму выставить в инвойсе с учётом НПД 6% и нужного уровня жизни.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Открыть калькулятор ставки →
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
                  q: "Может ли самозанятый работать с иностранными компаниями?",
                  a: "Да, это законно. НПД применяется независимо от того, откуда заказчик. Ставка 6% — для иностранных юрлиц, 4% — для физлиц. Чек нужно выбить в «Мой налог» в день получения оплаты.",
                },
                {
                  q: "Какой налог платит самозанятый с дохода от иностранца?",
                  a: "НПД 6% если заказчик — иностранная компания. НПД 4% если заказчик — физлицо. Налог считается от рублёвого эквивалента по курсу ЦБ на дату поступления денег.",
                },
                {
                  q: "Как получить деньги от иностранного заказчика в 2026 году?",
                  a: "SWIFT-перевод на валютный счёт в российском банке — основной способ. Иностранные электронные кошельки (Wise, PayPal) запрещены с 2024 года по 499-ФЗ. При сумме выше $10 000 банк запросит документы по сделке.",
                },
                {
                  q: "Нужно ли уведомлять ФНС о работе с иностранным заказчиком?",
                  a: "Нет специального уведомления. Просто выбивайте чеки в «Мой налог». Если открываете иностранный счёт — нужно уведомить ФНС в течение 30 дней и подавать ежегодный отчёт о движении средств.",
                },
                {
                  q: "Нужен ли договор с иностранным заказчиком?",
                  a: "Обязателен для валютного контроля в банке. Минимум — инвойс с описанием услуги, суммой, сторонами и банковскими реквизитами. При контракте свыше 6 млн ₽ — обязательная регистрация в банке.",
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
                { href: "/guide/nalog-samozanyatyj", label: "Налог для самозанятых в 2026 году: полный разбор" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятый — что выгоднее для фрилансера" },
                { href: "/guide/nalog-ip-usn-6", label: "ИП на УСН 6%: налоги и взносы 2026" },
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым: пошаговая инструкция" },
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
