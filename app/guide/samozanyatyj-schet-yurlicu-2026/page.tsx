import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Как самозанятому выставить счёт юридическому лицу в 2026 году | FreelanceCalc",
  description:
    "Обязателен ли счёт для самозанятого при работе с юрлицом? Образец счёта, отличие от чека НПД, что указывать в реквизитах — пошаговая инструкция 2026.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-schet-yurlicu-2026` },
  openGraph: {
    title: "Счёт самозанятого юридическому лицу 2026: образец и инструкция",
    description:
      "Нужен ли счёт самозанятому при работе с ООО и ИП? Как составить, что указать, чем отличается от чека НПД. Образец 2026.",
    url: `${BASE_URL}/guide/samozanyatyj-schet-yurlicu-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Счёт самозанятого юрлицу 2026",
    description:
      "Обязателен ли счёт? Образец, реквизиты, отличие от чека НПД. Инструкция для фрилансеров.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Обязан ли самозанятый выставлять счёт юридическому лицу?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, по закону самозанятый обязан выдать только чек НПД через приложение «Мой налог». Счёт на оплату — это необязательный документ. Однако большинство компаний требуют счёт для обоснования платежа перед своей бухгалтерией. Поэтому на практике счёт выставляют почти всегда.",
      },
    },
    {
      "@type": "Question",
      name: "Что указывать в счёте самозанятого: ИНН, статус, реквизиты?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В счёте укажите: ФИО и ИНН самозанятого, статус «Плательщик НПД», номер и дату документа, наименование услуги и стоимость, банковские реквизиты для перевода (номер карты или расчётный счёт), ИНН заказчика. Отметка «НДС не облагается» обязательна — самозанятые не платят НДС.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли выставить счёт через «Мой налог»?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, с 2024 года в приложении «Мой налог» (и в веб-версии lknpd.nalog.ru) появился раздел «Счёт на оплату». Функция позволяет сформировать PDF с реквизитами автоматически. Счёт не является чеком — после получения оплаты нужно также выдать чек НПД.",
      },
    },
    {
      "@type": "Question",
      name: "Чем счёт самозанятого отличается от чека НПД?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Счёт — это запрос на оплату: вы выставляете его ДО получения денег. Чек НПД — подтверждение получения дохода: вы формируете его ПОСЛЕ оплаты. Для налоговой важен только чек. Счёт нужен заказчику для инициирования платежа через бухгалтерию.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли договор при выставлении счёта самозанятым?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Закон не обязывает заключать договор — достаточно счёта и чека. Но при разовой услуге от 10 000 ₽ или при работе с крупными компаниями договор настоятельно рекомендуется: он защищает обе стороны и подтверждает факт оказания услуги для налоговой проверки.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как самозанятому выставить счёт юридическому лицу в 2026 году",
  description:
    "Пошаговая инструкция по выставлению счёта на оплату от самозанятого юрлицу или ИП: что указывать, чем отличается от чека НПД, образец документа 2026.",
  url: `${BASE_URL}/guide/samozanyatyj-schet-yurlicu-2026`,
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatySchetYurlicu2026() {
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

      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600">
            Главная
          </Link>
          {" / "}
          <Link href="/guide" className="hover:text-blue-600">
            Гайды
          </Link>
          {" / "}
          <span>Счёт самозанятого юридическому лицу</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Как самозанятому выставить счёт юридическому лицу в 2026 году
        </h1>

        <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026 · Время чтения: 6 минут</p>

        <p className="mb-6 text-lg">
          Вы — самозанятый, заказчик — компания. Перед оплатой бухгалтерия просит счёт.{" "}
          <strong>Обязательно ли его выставлять?</strong> Как правильно оформить? Чем счёт
          отличается от чека НПД? Разбираем всё по порядку.
        </p>

        {/* Quick summary box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-semibold text-blue-800 mb-2">Коротко о главном:</p>
          <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
            <li>Счёт — необязательный документ, но 9 из 10 компаний его требуют</li>
            <li>Счёт ≠ чек НПД: счёт выставляют до оплаты, чек — после</li>
            <li>Обязательные реквизиты: ФИО, ИНН, статус «Плательщик НПД», сумма, услуга</li>
            <li>Можно сформировать прямо в приложении «Мой налог»</li>
            <li>НДС не облагается — указывайте это явно</li>
          </ul>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Обязан ли самозанятый выставлять счёт?
        </h2>
        <p className="mb-4">
          По Федеральному закону № 422-ФЗ «О налоге на профессиональный доход» самозанятый{" "}
          <strong>не обязан</strong> выставлять счёт на оплату. Единственный обязательный документ —
          это <strong>чек НПД</strong>, формируемый в приложении «Мой налог» после получения денег.
        </p>
        <p className="mb-4">
          Однако на практике большинство юридических лиц и ИП требуют счёт до перечисления оплаты.
          Причина простая: бухгалтер компании должен обосновать платёж перед руководством и
          налоговой. Счёт служит основанием для платёжного поручения.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-800 text-sm">
            ⚠️ <strong>Важно:</strong> Счёт не заменяет чек НПД. Даже если вы выставили счёт и
            компания оплатила — вы обязаны выдать чек в «Мой налог» после поступления денег. Без
            чека возможен штраф по ст. 129.13 НК РФ.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Чем счёт отличается от чека НПД: таблица
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Параметр</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Счёт на оплату</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Чек НПД</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Когда выставляется</td>
                <td className="border border-gray-300 px-4 py-2">До оплаты — запрос денег</td>
                <td className="border border-gray-300 px-4 py-2">После оплаты — подтверждение дохода</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Обязателен ли?</td>
                <td className="border border-gray-300 px-4 py-2">Нет (по закону)</td>
                <td className="border border-gray-300 px-4 py-2">Да — требует закон № 422-ФЗ</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Кому нужен</td>
                <td className="border border-gray-300 px-4 py-2">Бухгалтерии заказчика</td>
                <td className="border border-gray-300 px-4 py-2">ФНС + заказчик для учёта расходов</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Где формируется</td>
                <td className="border border-gray-300 px-4 py-2">В «Мой налог», Word, Excel, онлайн-сервисах</td>
                <td className="border border-gray-300 px-4 py-2">Только в «Мой налог» / lknpd.nalog.ru</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Передаётся в ФНС</td>
                <td className="border border-gray-300 px-4 py-2">Нет</td>
                <td className="border border-gray-300 px-4 py-2">Да — автоматически</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Штраф за отсутствие</td>
                <td className="border border-gray-300 px-4 py-2">Нет</td>
                <td className="border border-gray-300 px-4 py-2">20% от суммы (повторно — 100%)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Что должно быть в счёте самозанятого: обязательные реквизиты
        </h2>
        <p className="mb-4">
          Чёткой формы счёта для самозанятых закон не устанавливает — но чтобы бухгалтерия компании
          приняла документ, включите следующие данные:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
          <p className="font-semibold mb-3 text-gray-700">Обязательные поля счёта:</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span><strong>Наименование документа:</strong> «Счёт на оплату № ___ от __.__.2026»</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span><strong>Исполнитель (вы):</strong> ФИО полностью, ИНН, статус «Плательщик налога на профессиональный доход»</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span><strong>Заказчик:</strong> полное наименование организации или ФИО ИП, ИНН/КПП</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span><strong>Перечень услуг:</strong> наименование, количество, цена за единицу, итоговая сумма</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span><strong>НДС:</strong> строка «НДС не облагается (применяется НПД, ст. 2 № 422-ФЗ)»</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span><strong>Банковские реквизиты:</strong> расчётный счёт (или номер карты), БИК, наименование банка</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span><strong>Срок оплаты:</strong> например, «3 банковских дня» или конкретная дата</span>
            </li>
          </ul>
        </div>
        <p className="mb-4">
          <strong>Подпись и печать</strong> — не обязательны, но если заказчик просит — поставьте
          личную подпись. Самозанятый печать иметь не обязан.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Как выставить счёт через «Мой налог»: пошагово
        </h2>
        <p className="mb-4">
          С 2024 года в приложении ФНС «Мой налог» и на сайте{" "}
          <strong>lknpd.nalog.ru</strong> появился официальный раздел для выставления счетов.
        </p>
        <ol className="list-decimal list-inside space-y-4 mb-6 pl-2">
          <li>
            Откройте приложение «Мой налог» → перейдите в раздел{" "}
            <strong>«Прочее»</strong> → <strong>«Счёт на оплату»</strong>.
          </li>
          <li>
            Нажмите <strong>«Создать счёт»</strong>. Система автоматически подтянет ваши данные
            (ФИО, ИНН).
          </li>
          <li>
            Введите данные заказчика: <strong>ИНН организации</strong> — приложение само
            определит название компании по базе ФНС.
          </li>
          <li>
            Добавьте услугу: название, количество, цену. Можно добавить несколько позиций.
          </li>
          <li>
            Укажите <strong>расчётный счёт или карту</strong> для получения оплаты.
          </li>
          <li>
            Нажмите <strong>«Сформировать»</strong> — приложение создаст PDF-документ, который
            можно отправить заказчику ссылкой, по email или в мессенджере.
          </li>
        </ol>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-green-800 text-sm">
            💡 <strong>Лайфхак:</strong> Нет «Мой налог» под рукой? Можно сделать счёт в Google Docs
            или Word по образцу — закон не требует конкретной формы. Главное — указать все
            обязательные реквизиты и статус плательщика НПД.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Образец счёта самозанятого: пример заполнения
        </h2>
        <div className="bg-white border border-gray-300 rounded-lg p-5 mb-6 font-mono text-sm">
          <p className="font-bold text-center mb-4 not-italic" style={{fontFamily: 'inherit'}}>
            СЧЁТ НА ОПЛАТУ № 12 от 13.04.2026
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4 not-italic" style={{fontFamily: 'inherit', fontSize: '0.875rem'}}>
            <div>
              <p className="font-semibold">Исполнитель:</p>
              <p>Иванов Иван Иванович</p>
              <p>ИНН: 770112345678</p>
              <p>Плательщик НПД</p>
              <p>Тел.: +7 999 123-45-67</p>
            </div>
            <div>
              <p className="font-semibold">Заказчик:</p>
              <p>ООО «ТехСтарт»</p>
              <p>ИНН: 7701234567</p>
              <p>КПП: 770101001</p>
              <p>г. Москва, ул. Примерная, 1</p>
            </div>
          </div>
          <table className="w-full border-collapse text-xs mb-3" style={{fontFamily: 'inherit'}}>
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-2 py-1 text-left">Услуга</th>
                <th className="border border-gray-400 px-2 py-1">Кол-во</th>
                <th className="border border-gray-400 px-2 py-1">Цена, ₽</th>
                <th className="border border-gray-400 px-2 py-1">Сумма, ₽</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-2 py-1">Разработка веб-страницы</td>
                <td className="border border-gray-400 px-2 py-1 text-center">1</td>
                <td className="border border-gray-400 px-2 py-1 text-right">50 000</td>
                <td className="border border-gray-400 px-2 py-1 text-right">50 000</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs mb-1">НДС не облагается (применяется НПД, ст. 2 Федерального закона № 422-ФЗ)</p>
          <p className="font-bold text-sm mb-3">Итого к оплате: 50 000 ₽ (Пятьдесят тысяч рублей)</p>
          <div className="text-xs">
            <p className="font-semibold">Банковские реквизиты:</p>
            <p>Карта Сбербанка: 4276 **** **** 1234 (Иванов И.И.)</p>
            <p>или Счёт: 40817810123456789012 | БИК: 044525225 | Сбербанк</p>
          </div>
          <p className="text-xs mt-3">Срок оплаты: 5 рабочих дней с даты выставления счёта.</p>
          <p className="text-xs mt-2">Подпись: _____________ / Иванов И.И.</p>
        </div>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Нужен ли договор при выставлении счёта?
        </h2>
        <p className="mb-4">
          Закон не обязывает заключать договор — для НПД достаточно счёта и чека. Однако при
          серьёзном сотрудничестве договор оказания услуг <strong>настоятельно рекомендуется</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-sm">
          <li>Фиксирует объём работ и сроки — защищает вас от размытого ТЗ</li>
          <li>Устанавливает порядок приёмки — акт выполненных работ</li>
          <li>Подтверждает легальность сделки для налоговой проверки заказчика</li>
          <li>Позволяет взыскать долг через суд при неоплате</li>
        </ul>
        <p className="mb-4">
          При разовой услуге до 10 000 ₽ можно обойтись счётом и чеком. При регулярном
          сотрудничестве или крупных суммах — оформляйте договор ГПХ или договор оказания услуг.
        </p>

        {/* CTA box */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 mb-10">
          <p className="font-semibold text-indigo-900 mb-2">
            Рассчитайте свою ставку с учётом налогов НПД
          </p>
          <p className="text-indigo-700 text-sm mb-3">
            Хотите узнать, сколько запрашивать у юрлица, чтобы на руках осталась нужная сумма?
            Калькулятор FreelanceCalc рассчитает ставку с учётом налога 6% НПД, времени на
            коммуникации и желаемого дохода.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Рассчитать ставку →
          </Link>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mt-10 mb-6">Частые вопросы</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: "Обязан ли самозанятый выставлять счёт юридическому лицу?",
              a: "Нет, по закону самозанятый обязан выдать только чек НПД через приложение «Мой налог». Счёт на оплату — это необязательный документ. Однако большинство компаний требуют счёт для обоснования платежа перед своей бухгалтерией. Поэтому на практике счёт выставляют почти всегда.",
            },
            {
              q: "Что указывать в счёте самозанятого: ИНН, статус, реквизиты?",
              a: "В счёте укажите: ФИО и ИНН самозанятого, статус «Плательщик НПД», номер и дату документа, наименование услуги и стоимость, банковские реквизиты, ИНН заказчика. Строка «НДС не облагается» обязательна.",
            },
            {
              q: "Можно ли выставить счёт через «Мой налог»?",
              a: "Да, с 2024 года в приложении «Мой налог» появился раздел «Счёт на оплату». Счёт формируется автоматически в PDF. После получения денег нужно дополнительно выдать чек НПД.",
            },
            {
              q: "Чем счёт самозанятого отличается от чека НПД?",
              a: "Счёт — это запрос на оплату: выставляется ДО получения денег. Чек НПД — подтверждение дохода: формируется ПОСЛЕ оплаты. Для ФНС важен только чек. Счёт нужен заказчику для инициирования платежа.",
            },
            {
              q: "Нужен ли договор при выставлении счёта самозанятым?",
              a: "Закон не обязывает. Но при сумме от 10 000 ₽ или регулярном сотрудничестве договор оказания услуг защитит обе стороны: зафиксирует объём работ, порядок приёмки и даст основание для взыскания в суде.",
            },
          ].map((item, i) => (
            <details key={i} className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-semibold cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center">
                {item.q}
                <span className="text-gray-400 ml-2">▾</span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-gray-700 text-sm">{item.a}</div>
            </details>
          ))}
        </div>

        {/* Related articles */}
        <div className="border-t border-gray-200 pt-8 mb-6">
          <p className="font-semibold text-gray-700 mb-4">Связанные статьи:</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guide/samozanyatyj-kak-vystavit-chek-2026" className="text-blue-600 hover:underline">
                Как выставить чек самозанятому в 2026 году →
              </Link>
            </li>
            <li>
              <Link href="/guide/nalog-samozanyatyj" className="text-blue-600 hover:underline">
                Налог самозанятого: ставки, расчёт, сроки уплаты →
              </Link>
            </li>
            <li>
              <Link href="/guide/dogovor-s-samozanyatym-2026" className="text-blue-600 hover:underline">
                Договор с самозанятым: образец и риски →
              </Link>
            </li>
            <li>
              <Link href="/guide/ip-vs-samozanyatyj" className="text-blue-600 hover:underline">
                ИП или самозанятый: что выгоднее для фрилансера →
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
