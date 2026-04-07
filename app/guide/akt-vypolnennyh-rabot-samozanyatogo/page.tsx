import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Акт выполненных работ для самозанятого 2026: нужен ли, образец | FreelanceCalc",
  description:
    "Нужен ли акт выполненных работ самозанятому? Разбираем закон, когда акт обязателен, чем его заменяет чек в Мой налог, и даём образец для скачивания.",
  alternates: { canonical: `${BASE_URL}/guide/akt-vypolnennyh-rabot-samozanyatogo` },
  openGraph: {
    title: "Акт выполненных работ для самозанятого 2026: нужен ли, образец",
    description:
      "Чек в «Мой налог» vs акт выполненных работ: когда обязателен, как составить, образец структуры. Всё по закону для самозанятого.",
    url: `${BASE_URL}/guide/akt-vypolnennyh-rabot-samozanyatogo`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Акт выполненных работ для самозанятого 2026: нужен ли?",
    description:
      "Когда самозанятому нужен акт, а когда хватает чека — разбираем по закону. Образец акта и FAQ.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Нужна ли печать на акте выполненных работ у самозанятого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Самозанятый — физическое лицо, у него нет обязательной печати. Акт подписывается от руки или усиленной квалифицированной электронной подписью (УКЭП). Отсутствие печати не лишает документ юридической силы.",
      },
    },
    {
      "@type": "Question",
      name: "Что делать, если заказчик не подписывает акт выполненных работ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Направьте акт заказным письмом с уведомлением или на email, зафиксировав отправку. Если в договоре прописан срок приёмки (например, 5 рабочих дней), по истечении срока без мотивированного отказа работа считается принятой — ГК РФ ст. 753. Чек из «Мой налог» при этом подтверждает факт получения оплаты.",
      },
    },
    {
      "@type": "Question",
      name: "Может ли ИП работать с самозанятым без акта?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Технически — да, если ИП применяет УСН «доходы» (6%) и не нуждается в подтверждении расходов. Но ИП на УСН «доходы минус расходы» или ОСНО обязан иметь первичные документы по 402-ФЗ. Чек самозанятого является первичным документом, однако акт дополнительно фиксирует состав и результат работы, что снижает налоговые риски.",
      },
    },
    {
      "@type": "Question",
      name: "Как акт выполненных работ помогает при споре с заказчиком?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Подписанный акт фиксирует: что именно было сделано, в какой срок, на какую сумму, и что заказчик претензий не имеет. В суде акт — ключевое доказательство выполнения обязательств. Без акта придётся доказывать факт работы перепиской, скриншотами и свидетельскими показаниями, что существенно сложнее.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли акт при работе через FL.ru, Kwork или другие биржи?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При работе через биржу акт, как правило, не нужен: платформа фиксирует факт выполнения задания внутри системы. Чек в «Мой налог» выдаётся на сумму, поступившую от биржи. Если заказчик — крупная компания и хочет акт для своей бухгалтерии, его можно составить дополнительно. Уточняйте условия в договоре оферты конкретной платформы.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Акт выполненных работ для самозанятого в 2026 году: нужен ли и как оформить",
  description:
    "Когда самозанятому нужен акт, чем его заменяет чек по 422-ФЗ, как составить акт для юрлица и образец структуры документа.",
  url: `${BASE_URL}/guide/akt-vypolnennyh-rabot-samozanyatogo`,
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "FreelanceCalc",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Гайды",
      item: `${BASE_URL}/guide`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Акт выполненных работ для самозанятого",
      item: `${BASE_URL}/guide/akt-vypolnennyh-rabot-samozanyatogo`,
    },
  ],
};

export default function AktVypolnenyhRabotSamozanyatogoPago() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            Акт выполненных работ для самозанятого в 2026 году: нужен ли и как оформить
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Разбираем по закону: когда акт обязателен, чем его заменяет чек из «Мой налог», и как правильно составить документ для корпоративного клиента.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 7 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Рассчитайте ставку с учётом налога
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Знаете, сколько хотите получить на руки? Калькулятор покажет, какую сумму выставить клиенту в акте и чеке.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть калькулятор ставки →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Нужен ли акт по закону */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Нужен ли акт самозанятому по закону
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Однозначного ответа нет — всё зависит от того, кто ваш заказчик. Законодательство разделяет две ситуации.
              </p>
              <p>
                <strong>Работа с физическими лицами.</strong> Если вы берёте заказ у частного человека (репетиторство, дизайн для блога, ремонт техники), акт выполненных работ не обязателен ни для вас, ни для клиента. Федеральный закон № 422-ФЗ о налоге на профессиональный доход устанавливает: чек, сформированный в приложении «Мой налог», является единственным обязательным документом, подтверждающим операцию.
              </p>
              <p>
                <strong>Работа с юридическими лицами и ИП.</strong> Картина другая. Компании ведут бухгалтерский учёт по Федеральному закону № 402-ФЗ и обязаны оформлять каждую хозяйственную операцию первичным учётным документом. Сам по себе чек самозанятого — корректный первичный документ, однако он не всегда содержит достаточную детализацию: описание работ, сроки, объём. Поэтому большинство корпоративных бухгалтерий требуют ещё и акт.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs text-green-800 font-semibold mb-2">Акт НЕ обязателен:</p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>✓ Заказчик — физическое лицо</li>
                    <li>✓ Оплата разовая, сумма небольшая</li>
                    <li>✓ Работа через биржу (FL.ru, Kwork)</li>
                    <li>✓ Устный заказ без договора ГПХ</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs text-amber-800 font-semibold mb-2">Акт НУЖЕН:</p>
                  <ul className="text-xs text-amber-700 space-y-1">
                    <li>⚠ Заказчик — ООО, АО, ИП</li>
                    <li>⚠ Есть договор ГПХ с компанией</li>
                    <li>⚠ Длительный проект с поэтапной оплатой</li>
                    <li>⚠ Бухгалтерия клиента требует документы</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-500 bg-slate-50 rounded-xl p-3 mt-2">
                Вывод: для частных клиентов достаточно чека. Для корпоративных — чек плюс акт. Если работаете по договору ГПХ — акт обязателен как закрывающий документ по договору.
              </p>
            </div>
          </section>

          {/* Section 2 — Что заменяет акт */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Что заменяет акт для самозанятого: чек в «Мой налог»
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                По закону № 422-ФЗ самозанятый обязан выдать чек при каждом получении оплаты. Чек формируется в приложении «Мой налог» и передаётся заказчику — в электронном виде (ссылка, QR-код, PDF) или распечатанным.
              </p>
              <p>
                Чек содержит: ФИО и ИНН самозанятого, дату и время операции, описание услуги, сумму, ставку налога (4% или 6%), ИНН покупателя (если юрлицо), а также уникальный номер и QR-код для проверки на сайте ФНС. Это официальный фискальный документ, признанный государством.
              </p>
              <p>
                Для физических лиц чек полностью закрывает документальную сторону сделки. Никаких актов, договоров или квитанций дополнительно не требуется. Именно в этом — одно из ключевых преимуществ режима НПД перед ИП на ОСНО или обычным договором подряда.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-blue-800 font-semibold mb-1">Важно для корпоративных клиентов</p>
                <p className="text-xs text-blue-700">
                  Чек самозанятого с ИНН компании-заказчика позволяет юрлицу учесть расходы при налогообложении. Компания не платит за вас НДФЛ и страховые взносы — это ещё одна причина, почему бизнес охотно работает с самозанятыми. Подробнее о налогах читайте в нашем гайде{" "}
                  <Link href="/guide/nalog-samozanyatyj" className="text-blue-600 underline hover:text-blue-800">
                    «Налоги самозанятого»
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Когда акт всё-таки нужен */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Когда акт всё-таки нужен самозанятому
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Несмотря на то что акт не является обязательным по 422-ФЗ, на практике он нужен значительно чаще, чем многие думают. Вот основные случаи:
              </p>

              <div className="space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">1. Корпоративный клиент с юридическим отделом</p>
                  <p className="text-xs text-slate-600">
                    Крупные компании (банки, ретейл, IT-корпорации) не выпустят оплату без полного пакета: договор → акт → чек. Их бухгалтерия работает по внутренним регламентам, и ваш чек без акта просто «не пройдёт» через систему документооборота.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">2. Длительный проект с поэтапной оплатой</p>
                  <p className="text-xs text-slate-600">
                    Если проект идёт несколько месяцев и оплата производится этапами, каждый этап закрывается отдельным актом. Это защищает обе стороны: вы подтверждаете объём выполненного, заказчик — что принял результат. Без акта при споре будет сложно доказать, что именно и в каком объёме было сдано.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">3. Договор ГПХ как обязательное условие</p>
                  <p className="text-xs text-slate-600">
                    Если с вами заключён договор гражданско-правового характера (подряда, возмездного оказания услуг), акт — стандартный закрывающий документ по ГК РФ. В договоре, как правило, прямо прописано, что работа считается принятой после подписания акта. Подробнее — в гайде{" "}
                    <Link href="/guide/nalog-dogovor-gph" className="text-indigo-500 underline hover:text-indigo-700">
                      «НДФЛ и взносы по договору ГПХ»
                    </Link>.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-1">4. Возможные разногласия о качестве или объёме</p>
                  <p className="text-xs text-slate-600">
                    Если есть риск спора (сложный креативный проект, нечёткое ТЗ, нестандартный результат), подписанный акт — ваша защита. Заказчик, поставив подпись, подтверждает, что претензий нет.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Образец акта */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как составить акт самозанятому: структура и образец
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Строгой формы акта для самозанятых нет. Главное — чтобы документ содержал обязательные реквизиты первичного документа по ст. 9 Федерального закона № 402-ФЗ.
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-mono text-xs leading-relaxed space-y-1 overflow-x-auto">
                <p className="text-slate-400">{"/* Образец структуры акта выполненных работ */"}</p>
                <p>&nbsp;</p>
                <p className="font-semibold text-white">АКТ ВЫПОЛНЕННЫХ РАБОТ (ОКАЗАННЫХ УСЛУГ) № ___</p>
                <p>г. Москва &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; «__» ________ 2026 г.</p>
                <p>&nbsp;</p>
                <p>Исполнитель: Иванова Мария Сергеевна, плательщик налога</p>
                <p>на профессиональный доход, ИНН 771234567890</p>
                <p>&nbsp;</p>
                <p>Заказчик: ООО «Ромашка», ИНН 7701234567,</p>
                <p>в лице генерального директора Петрова И.И.</p>
                <p>&nbsp;</p>
                <p>Основание: Договор № 15 от 01.03.2026</p>
                <p>&nbsp;</p>
                <p className="text-slate-300">Исполнитель выполнил, а Заказчик принял следующие</p>
                <p className="text-slate-300">работы / услуги:</p>
                <p>&nbsp;</p>
                <p>┌─────────────────────┬────────┬────────┬───────────┐</p>
                <p>│ Наименование        │ Кол-во │ Цена   │ Сумма     │</p>
                <p>├─────────────────────┼────────┼────────┼───────────┤</p>
                <p>│ Разработка лендинга │ 1 шт.  │ 50 000 │ 50 000 ₽  │</p>
                <p>└─────────────────────┴────────┴────────┴───────────┘</p>
                <p>&nbsp;</p>
                <p>Итого: 50 000 (Пятьдесят тысяч) рублей 00 копеек.</p>
                <p>НДС не облагается (применяется НПД, 422-ФЗ).</p>
                <p>&nbsp;</p>
                <p className="text-slate-300">Стороны претензий друг к другу не имеют.</p>
                <p>Работы выполнены в срок и с надлежащим качеством.</p>
                <p>&nbsp;</p>
                <p>Исполнитель: _______________ / Иванова М.С. /</p>
                <p>Заказчик:    _______________ / Петров И.И.  /</p>
              </div>

              <div className="space-y-2 mt-2">
                <p className="font-semibold text-slate-700">Обязательные поля по 402-ФЗ:</p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                  <li>Наименование документа («Акт выполненных работ»)</li>
                  <li>Дата составления</li>
                  <li>Наименование экономического субъекта — то есть ваши ФИО и ИНН</li>
                  <li>Содержание факта хозяйственной жизни (что именно сделано)</li>
                  <li>Натуральный и/или денежный измеритель (количество и сумма)</li>
                  <li>Должность и подпись лица, совершившего операцию (вы + представитель заказчика)</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Пометка об НДС</p>
                <p className="text-xs text-amber-700">
                  Обязательно укажите фразу: <em>«НДС не облагается. Исполнитель применяет специальный налоговый режим — налог на профессиональный доход (ФЗ № 422-ФЗ от 27.11.2018)»</em>. Это снимает вопросы со стороны бухгалтерии клиента.
                </p>
              </div>

              <p>
                Акт составляется в двух экземплярах, подписывается обеими сторонами. После подписания — выдайте чек в «Мой налог» на сумму, указанную в акте. Чек и акт вместе образуют полный пакет закрывающих документов.
              </p>
            </div>
          </section>

          {/* Section 5 — FAQ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Частые вопросы об акте выполненных работ
            </h2>
            <div className="space-y-4">

              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Нужна ли печать на акте у самозанятого?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Нет. Самозанятый — физическое лицо, и он не обязан иметь печать. Акт имеет юридическую силу при наличии личной подписи (или квалифицированной электронной подписи). Некоторые фрилансеры для солидности заказывают штамп, но это исключительно по желанию.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Что делать, если заказчик не подписывает акт?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Направьте акт заказным письмом с уведомлением о вручении или на корпоративный email с фиксацией (например, через сервис Diadoc). Если в договоре прописан срок приёмки, по его истечении без письменного мотивированного отказа работа считается принятой — ст. 753 ГК РФ. Чек из «Мой налог» подтверждает факт оплаты независимо от ситуации с актом.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Может ли ИП работать с самозанятым без акта?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Если ИП на УСН «доходы» — формально да, расходы он не учитывает. Но ИП на УСН «доходы минус расходы» или ОСНО обязан иметь первичные документы. Чек самозанятого уже является первичным документом, однако акт дополнительно описывает состав и результат работы — это снижает налоговые риски при проверке.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Как акт помогает при споре с заказчиком?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Подписанный акт фиксирует: что было сделано, в какой срок, на какую сумму, и что заказчик результат принял без претензий. В суде акт — главное доказательство выполнения обязательств. Без акта придётся собирать переписку, скриншоты, созваниваться со свидетелями — всё это слабее единого подписанного документа.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  Нужен ли акт при работе через FL.ru, Kwork или другие фриланс-биржи?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Как правило, нет: биржа фиксирует факт выполнения задания внутри своей платформы, и этого достаточно для расчётов. Вы выдаёте чек в «Мой налог» на сумму, пришедшую от платформы. Если заказчик — крупная компания и запрашивает акт для своей бухгалтерии, составьте его дополнительно. Уточните условия в договоре оферты конкретной биржи.
                </p>
              </div>

            </div>
          </section>

          {/* Итог */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Итог: акт или чек — что выбрать
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Чек в «Мой налог» — обязательный и достаточный документ для физических лиц. Для корпоративных клиентов чек дополняется актом выполненных работ, который требует бухгалтерия заказчика по нормам 402-ФЗ. Акта как такового никто не обязывает вас составлять — это требование исходит от заказчика, а не от налогового законодательства для самозанятых.
              </p>
              <p>
                Практическая рекомендация: заведите простой шаблон акта (как образец выше) и заполняйте его для каждого корпоративного проекта. Это занимает 5 минут, но защищает вас юридически и упрощает жизнь бухгалтерии клиента — а значит, ускоряет оплату.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-indigo-600">422-ФЗ</p>
                  <p className="text-xs text-slate-500 mt-1">Закон о НПД: чек — единственный обязательный документ</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-indigo-600">402-ФЗ</p>
                  <p className="text-xs text-slate-500 mt-1">Закон о бухучёте: юрлица обязаны иметь первичные документы</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-indigo-600">ГК РФ 753</p>
                  <p className="text-xs text-slate-500 mt-1">Молчание заказчика = принятие работы по договору подряда</p>
                </div>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Читайте также</p>
            <div className="space-y-2">
              <Link
                href="/guide/nalog-samozanyatyj"
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <span>→</span>
                <span>Налоги самозанятого: ставки 4% и 6%, вычет, лимит 2,4 млн</span>
              </Link>
              <Link
                href="/guide/nalog-dogovor-gph"
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <span>→</span>
                <span>НДФЛ и взносы по договору ГПХ в 2026 году</span>
              </Link>
            </div>
          </section>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-indigo-50 border border-indigo-200 rounded-2xl p-6 text-center">
          <p className="text-base font-bold text-indigo-900 mb-1">
            Посчитайте свою ставку как самозанятый
          </p>
          <p className="text-sm text-indigo-600 mb-4">
            Введите желаемый доход — калькулятор покажет, какую сумму указать в акте и чеке, чтобы получить нужную сумму после налога.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть FreelanceCalc →
          </Link>
        </div>

        {/* Footer nav */}
        <nav className="mt-8 text-center text-xs text-slate-400 space-x-4">
          <Link href="/" className="hover:text-slate-600 hover:underline">Калькулятор</Link>
          <Link href="/guide/nalog-samozanyatyj" className="hover:text-slate-600 hover:underline">Налог самозанятого</Link>
          <Link href="/guide/nalog-dogovor-gph" className="hover:text-slate-600 hover:underline">Договор ГПХ</Link>
        </nav>
      </main>
    </>
  );
}
