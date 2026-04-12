import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Нужен ли расчётный счёт самозанятому в 2026 году | FreelanceCalc",
  description:
    "Самозанятому (НПД) расчётный счёт не нужен — принимать деньги можно на карту физлица. Исключения: ИП на НПД, крупные заказчики, иностранные клиенты. Таблица способов оплаты и FAQ.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-raschetnyj-schet-2026` },
  openGraph: {
    title: "Расчётный счёт для самозанятого 2026: нужен или нет?",
    description:
      "Короткий ответ: нет. Длинный: карта физлица подходит, но есть нюансы при работе с юрлицами и иностранцами. Разбор с таблицами.",
    url: `${BASE_URL}/guide/samozanyatyj-raschetnyj-schet-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Расчётный счёт самозанятому 2026: нужен или нет?",
    description:
      "Физлицо-НПД обходится картой физлица. ИП-НПД — расчётный счёт желателен. Все нюансы и способы получения оплаты.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Нужен ли расчётный счёт самозанятому в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Физлицу на НПД расчётный счёт не нужен — закон не обязывает. Деньги можно принимать на обычную карту физлица, наличными или через СБП. ИП на НПД расчётный счёт не обязателен, но желателен для удобства работы с юрлицами.",
      },
    },
    {
      "@type": "Question",
      name: "Может ли самозанятый принимать деньги на личную карту?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. ФЗ-422 не ограничивает способ получения оплаты. Деньги на личную карту — законно. Главное — зафиксировать доход в приложении «Мой налог» и выдать чек покупателю. Банк не заблокирует карту, если это систематические поступления от одного и того же источника: укажите в комментарии назначение платежа.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли самозанятому работать с юрлицами без расчётного счёта?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Можно. Юрлицо вправе переводить деньги физлицу на карту. Нужны: договор, акт выполненных работ и чек из «Мой налог». Некоторые бухгалтерии крупных компаний предпочитают платить только на расчётные счета — в таком случае потребуется оформить ИП.",
      },
    },
    {
      "@type": "Question",
      name: "Что делать, если иностранный заказчик не может перевести на карту физлица?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для получения валютных платежей из-за рубежа нужен валютный счёт или международная платёжная система. Физлицо-НПД может открыть транзитный валютный счёт в банке. Альтернатива — Wise, Payoneer (доступны из РФ через посредников) или крипто-конвертация. ИП на НПД проще: открывает расчётный + валютный счёт.",
      },
    },
    {
      "@type": "Question",
      name: "Заблокирует ли банк карту за платежи от заказчиков?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Риск есть при больших оборотах без объяснений. Чтобы избежать блокировки: укажите в назначении платежа «оплата по договору №… за услуги», поставьте статус самозанятого в приложении банка (Сбер, Тинькофф, Альфа поддерживают), своевременно выдавайте чеки. При обороте от 600 тыс. руб./мес. банк может запросить пояснения — это нормально.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Нужен ли расчётный счёт самозанятому в 2026 году",
  description:
    "Разбор: обязателен ли расчётный счёт для самозанятого, чем отличается физлицо-НПД от ИП-НПД, как принимать деньги от юрлиц и иностранных заказчиков.",
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
  author: { "@type": "Organization", name: "FreelanceCalc" },
  publisher: {
    "@type": "Organization",
    name: "FreelanceCalc",
    url: BASE_URL,
  },
};

export default function Page() {
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

      <main className="max-w-2xl mx-auto px-4 py-10 text-gray-800">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Главная</Link>
          <span className="mx-1">/</span>
          <Link href="/guide" className="hover:underline">Гайды</Link>
          <span className="mx-1">/</span>
          <span>Расчётный счёт самозанятого</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Нужен ли расчётный счёт самозанятому в 2026 году
        </h1>

        <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026 · Время чтения: 5 минут</p>

        {/* Quick answer */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
          <p className="font-semibold text-green-800 text-lg mb-1">Короткий ответ: нет, не нужен</p>
          <p className="text-green-700 text-sm">
            Физлицо на НПД принимает оплату на обычную карту физлица — это законно. ИП на НПД
            расчётный счёт не обязателен, но удобен. Главное — вовремя выдавать чек в «Мой налог».
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Что говорит закон
        </h2>
        <p className="mb-4">
          Федеральный закон № 422-ФЗ «О налоге на профессиональный доход» не обязывает самозанятых
          открывать расчётный счёт. В отличие от ООО и ИП, которые обязаны проводить расчёты через
          банковский счёт при определённых условиях, самозанятый-физлицо может:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
          <li>принимать наличные</li>
          <li>получать переводы на личную карту физлица</li>
          <li>использовать СБП (Систему быстрых платежей) по номеру телефона</li>
          <li>принимать платежи через ЮKassa, Robokassa и другие агрегаторы</li>
        </ul>
        <p className="mb-4">
          Ограничение одно — максимальный доход в рамках НПД составляет <strong>2 400 000 ₽ в год</strong>.
          При превышении нужно переходить на ИП или ООО — и вот тогда расчётный счёт становится
          практически необходимым.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Физлицо-НПД vs ИП-НПД: кому нужен счёт?
        </h2>
        <p className="mb-4">
          Всё зависит от вашего статуса: вы зарегистрированы как физлицо или как ИП на режиме НПД.
          Разница существенная:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Параметр</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Физлицо-НПД</th>
                <th className="border border-gray-200 px-3 py-2 text-left">ИП-НПД</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Расчётный счёт</td>
                <td className="border border-gray-200 px-3 py-2 text-green-700 font-medium">Не нужен</td>
                <td className="border border-gray-200 px-3 py-2 text-yellow-700 font-medium">Не обязателен, но удобен</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">Карта физлица для работы</td>
                <td className="border border-gray-200 px-3 py-2">✅ Можно</td>
                <td className="border border-gray-200 px-3 py-2">⚠️ Можно, но банк может потребовать р/с</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Работа с юрлицами</td>
                <td className="border border-gray-200 px-3 py-2">На карту физлица + чек</td>
                <td className="border border-gray-200 px-3 py-2">На карту или р/с + чек</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">Иностранные заказчики</td>
                <td className="border border-gray-200 px-3 py-2">⚠️ Сложнее, нужен валютный счёт</td>
                <td className="border border-gray-200 px-3 py-2">✅ Открывает р/с + валютный счёт</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Эквайринг (оплата картой)</td>
                <td className="border border-gray-200 px-3 py-2">Через агрегаторы (ЮKassa)</td>
                <td className="border border-gray-200 px-3 py-2">Через р/с или агрегаторы</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-2">Лимит дохода</td>
                <td className="border border-gray-200 px-3 py-2">2 400 000 ₽/год</td>
                <td className="border border-gray-200 px-3 py-2">2 400 000 ₽/год</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Способы получения оплаты в 2026 году
        </h2>
        <p className="mb-4">
          Самозанятый может использовать любой из следующих способов — все законны при условии
          выдачи чека:
        </p>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold mb-1">💳 Перевод на карту физлица</p>
            <p className="text-sm text-gray-600">
              Самый простой способ. Заказчик переводит деньги по номеру карты или через СБП.
              Укажите в назначении платежа: «Оплата по договору № … за разработку сайта».
              Это защитит от вопросов банка.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold mb-1">📱 СБП (Система быстрых платежей)</p>
            <p className="text-sm text-gray-600">
              Перевод по номеру телефона — удобно и мгновенно. Комиссия для физлиц — 0%.
              Банки-участники: Сбер, Тинькофф, Альфа, ВТБ и 200+ других.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold mb-1">💵 Наличные</p>
            <p className="text-sm text-gray-600">
              Закон не запрещает. Получили наличные — откройте «Мой налог», зафиксируйте доход,
              выдайте чек (можно цифровой). Штраф за отсутствие чека — 20% от суммы при первом
              нарушении и 100% при повторном.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold mb-1">🌐 Платёжные агрегаторы</p>
            <p className="text-sm text-gray-600">
              ЮKassa, Robokassa, Cloudpayments позволяют самозанятым принимать оплату картой
              на сайте или по ссылке. Комиссия: 2–3%. Деньги зачисляются на карту физлица.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Когда без расчётного счёта не обойтись
        </h2>
        <p className="mb-4">
          Есть три ситуации, когда расчётный счёт становится практически необходимым:
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">1. Крупные корпоративные заказчики</h3>
        <p className="mb-3 text-gray-700">
          Бухгалтерии некоторых крупных компаний (госкорпорации, банки) настроены на оплату
          только на расчётные счета ИП. Если большинство ваших клиентов — такие организации,
          имеет смысл открыть ИП на НПД и расчётный счёт.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">2. Иностранные заказчики</h3>
        <p className="mb-3 text-gray-700">
          Получать валюту из-за рубежа физлицу сложнее. Для SWIFT-переводов нужен валютный
          транзитный счёт. Для работы с заказчиками из ЕС, США, ОАЭ проще оформить ИП на НПД
          и открыть счёт с валютным субсчётом.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">3. Доход приближается к лимиту 2,4 млн ₽</h3>
        <p className="mb-4 text-gray-700">
          При обороте 150–200 тыс. ₽/мес. вы за год подойдёте к лимиту НПД. Заранее
          зарегистрируйте ИП (оставаясь на НПД) и откройте расчётный счёт — это упростит
          переход на УСН или ОСНО в случае превышения.
        </p>

        {/* Calculator CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8">
          <p className="font-semibold text-blue-900 mb-2">Рассчитайте свою ставку фрилансера</p>
          <p className="text-blue-700 text-sm mb-3">
            Учтите налог НПД, расходы и желаемый доход — узнайте, сколько брать с заказчика.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        {/* Section 5: Blocking card risks */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Могут ли заблокировать карту за платежи от заказчиков?
        </h2>
        <p className="mb-3">
          Это популярный страх. На практике блокировка из-за рабочих поступлений редка, если:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          <li>
            <strong>Поставьте статус самозанятого в приложении банка.</strong> Сбер, Тинькофф,
            Альфа, ВТБ позволяют указать статус НПД — тогда банк понимает природу поступлений.
          </li>
          <li>
            <strong>Указывайте назначение платежа.</strong> Попросите заказчика писать:
            «Оплата услуг по договору №…».
          </li>
          <li>
            <strong>Выдавайте чеки вовремя.</strong> Чек из «Мой налог» — это документ, который
            подтверждает законность дохода при любых вопросах от банка или ФНС.
          </li>
          <li>
            <strong>Не обналичивайте всё сразу.</strong> Частые снятия крупных сумм наличными
            — сигнал для службы безопасности банка.
          </li>
        </ul>
        <p className="mb-4 text-gray-700">
          При обороте от <strong>600 000 ₽ в месяц</strong> банк по закону обязан проверить
          источник средств (115-ФЗ). Это не блокировка, а запрос документов. Покажите договор
          и чеки — вопрос закроется.
        </p>

        {/* Section 6: How to open if needed */}
        <h2 className="text-2xl font-bold mt-8 mb-3">
          Как открыть расчётный счёт, если он всё же нужен
        </h2>
        <p className="mb-3">
          Физлицо на НПД открыть расчётный счёт не может — это инструмент для ИП и юрлиц.
          Если счёт нужен, алгоритм такой:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
          <li>Зарегистрируйте ИП (онлайн через «Госуслуги» — бесплатно, 3 рабочих дня).</li>
          <li>
            Встаньте на учёт как плательщик НПД через приложение «Мой налог» — выберите
            «Я ИП» при регистрации.
          </li>
          <li>
            Откройте расчётный счёт в любом банке. Популярные варианты для фрилансеров:
            Тинькофф Бизнес, Точка, Альфа-Банк (от 0 ₽/мес. при обороте до определённого лимита).
          </li>
          <li>Укажите реквизиты расчётного счёта в договорах с заказчиками.</li>
        </ol>
        <p className="mb-4 text-gray-700">
          Важно: переход с физлица-НПД на ИП-НПД не прерывает режим самозанятости.
          Ставки 4% (физлица) и 6% (юрлица) сохраняются.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Частые вопросы</h2>
        <div className="space-y-4">
          {[
            {
              q: "Нужен ли расчётный счёт самозанятому в 2026 году?",
              a: "Физлицу на НПД расчётный счёт не нужен — закон не обязывает. Деньги можно принимать на обычную карту физлица, наличными или через СБП. ИП на НПД расчётный счёт не обязателен, но желателен для удобства работы с юрлицами.",
            },
            {
              q: "Может ли самозанятый принимать деньги на личную карту?",
              a: "Да. ФЗ-422 не ограничивает способ получения оплаты. Деньги на личную карту — законно. Главное — зафиксировать доход в приложении «Мой налог» и выдать чек покупателю.",
            },
            {
              q: "Можно ли самозанятому работать с юрлицами без расчётного счёта?",
              a: "Можно. Юрлицо вправе переводить деньги физлицу на карту. Нужны: договор, акт выполненных работ и чек из «Мой налог». Некоторые бухгалтерии крупных компаний предпочитают платить только на расчётные счета — в таком случае потребуется оформить ИП.",
            },
            {
              q: "Что делать, если иностранный заказчик не может перевести на карту физлица?",
              a: "Для получения валютных платежей из-за рубежа нужен валютный счёт или международная платёжная система. Физлицо-НПД может открыть транзитный валютный счёт в банке. ИП на НПД проще: открывает расчётный + валютный счёт.",
            },
            {
              q: "Заблокирует ли банк карту за платежи от заказчиков?",
              a: "Риск есть при больших оборотах без объяснений. Чтобы избежать блокировки: укажите в назначении платежа «оплата по договору №…», поставьте статус самозанятого в приложении банка (Сбер, Тинькофф, Альфа поддерживают), своевременно выдавайте чеки.",
            },
          ].map(({ q, a }) => (
            <details key={q} className="border border-gray-200 rounded-lg p-4 group">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-10">
          <p className="font-semibold mb-2">Итого: ключевые выводы</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Физлицо на НПД — расчётный счёт не нужен, достаточно карты физлица.</li>
            <li>ИП на НПД — расчётный счёт не обязателен, но удобен при работе с крупными юрлицами.</li>
            <li>Главное правило: любой способ получения денег + чек в «Мой налог» = всё законно.</li>
            <li>Лимит НПД — 2 400 000 ₽/год. При превышении переходите на ИП+УСН.</li>
          </ul>
        </div>

        {/* Related links */}
        <div className="mt-10 border-t pt-6">
          <p className="font-medium mb-3 text-gray-700">Читайте также:</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guide/nalog-samozanyatyj" className="text-blue-600 hover:underline">
                Налог самозанятого: ставки, расчёт, оплата в 2026
              </Link>
            </li>
            <li>
              <Link href="/guide/samozanyatyj-kak-vystavit-chek-2026" className="text-blue-600 hover:underline">
                Как выставить чек самозанятому: пошаговая инструкция
              </Link>
            </li>
            <li>
              <Link href="/guide/ip-vs-samozanyatyj" className="text-blue-600 hover:underline">
                ИП или самозанятый: что выбрать фрилансеру в 2026
              </Link>
            </li>
            <li>
              <Link href="/guide/samozanyatyj-inostrannyj-zakazchik-2026" className="text-blue-600 hover:underline">
                Самозанятый и иностранный заказчик: как получить оплату
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
