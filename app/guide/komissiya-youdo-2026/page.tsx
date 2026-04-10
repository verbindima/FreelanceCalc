import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Комиссия YouDo 2026: сколько стоит отклик и как считать реальные затраты | FreelanceCalc",
  description:
    "Комиссия YouDo в 2026 году — не процент, а оплата за каждый отклик (30–80 ₽). Пакеты откликов, расчёт реальной стоимости привлечения клиента, сравнение с FL.ru и Kwork.",
  alternates: { canonical: `${BASE_URL}/guide/komissiya-youdo-2026` },
  openGraph: {
    title: "Комиссия YouDo 2026: платите за отклики, а не с заказа",
    description:
      "YouDo не берёт процент с выполненных работ. Вместо этого — плата за каждый отклик: 30–80 ₽, даже если заказчик вас не выбрал. Разбор с расчётами.",
    url: `${BASE_URL}/guide/komissiya-youdo-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Комиссия YouDo 2026: скрытые затраты и расчёт",
    description:
      "YouDo берёт 30–80 ₽ за каждый отклик — даже если клиент вас не выбрал. Как считать реальную стоимость привлечения заказа?",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какая комиссия YouDo для исполнителя в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YouDo не берёт процентную комиссию с выполненных заказов. Вместо этого исполнители платят за каждый отклик на задание — от 30 до 80 рублей в зависимости от категории, региона и конкуренции. Если заказчик вас не выбрал — деньги за отклик не возвращаются.",
      },
    },
    {
      "@type": "Question",
      name: "Что такое отклик с постоплатой на YouDo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Отклик с постоплатой — это тип отклика, при котором деньги списываются не сразу, а после того, как заказчик выбирает исполнителя. Если вас не выбрали — сумма не списывается. Это снижает риск потерять деньги впустую, но постоплатные отклики дороже обычных.",
      },
    },
    {
      "@type": "Question",
      name: "Как купить пакет откликов на YouDo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YouDo предлагает два типа пакетов: с фиксированным количеством откликов (youdo.com/package/base) и безлимитные (youdo.com/package/unlimited). Безлимитный пакет выгоден исполнителям, которые откликаются на 10+ заданий в неделю. Пакеты приобретаются в личном кабинете.",
      },
    },
    {
      "@type": "Question",
      name: "Платит ли заказчик комиссию на YouDo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Заказчик платит комиссию только при использовании 'Сделки без риска' — защищённой оплаты через платформу. При прямом договоре с исполнителем заказчик не несёт дополнительных расходов. Основную нагрузку несут исполнители через систему платных откликов.",
      },
    },
    {
      "@type": "Question",
      name: "YouDo или FL.ru — где выгоднее работать фрилансеру?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Зависит от конверсии откликов. На YouDo нет процентной комиссии, но вы платите за каждую попытку. При конверсии 1 из 5 откликов и средней цене отклика 50 ₽ — стоимость привлечения заказа = 250 ₽. FL.ru берёт 10–20% с суммы заказа: при заказе за 3 000 ₽ это 300–600 ₽. Для мелких заказов YouDo выгоднее, для крупных — FL.ru с PRO-тарифом.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Комиссия YouDo в 2026 году: сколько стоит отклик и как считать реальные затраты",
  description:
    "Разбор системы откликов YouDo: почему платная подача заявок — это скрытая комиссия, как рассчитать реальную стоимость привлечения заказа и сравнение с FL.ru и Kwork.",
  url: `${BASE_URL}/guide/komissiya-youdo-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: {
    "@type": "Organization",
    name: "FreelanceCalc",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "FreelanceCalc",
    url: BASE_URL,
  },
};

export default function KomissiyaYoudoPage() {
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

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-blue-600">
              Главная
            </Link>
            {" → "}
            <Link href="/guide" className="hover:text-blue-600">
              Гайды
            </Link>
            {" → "}
            <span>Комиссия YouDo 2026</span>
          </nav>

          {/* H1 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Комиссия YouDo 2026: сколько стоит отклик и как считать реальные затраты
          </h1>
          <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026</p>

          <p className="text-lg text-gray-700 mb-8">
            YouDo — одна из крупнейших российских площадок для фрилансеров и самозанятых.
            Её главное отличие от FL.ru и Kwork:{" "}
            <strong>здесь нет процентной комиссии с заказов</strong>. Вместо этого — плата
            за каждый отклик. Звучит выгоднее? Не торопитесь. Рассчитаем, когда это
            правда, а когда — скрытая ловушка.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Как устроена «комиссия» YouDo
          </h2>
          <p className="text-gray-700 mb-4">
            Традиционной комиссии (процент с суммы заказа) на YouDo нет. Платформа зарабатывает
            иначе: исполнители{" "}
            <strong>платят за каждый отклик на задание</strong> — независимо от того,
            выберет ли их заказчик.
          </p>
          <p className="text-gray-700 mb-4">
            Это принципиально другая модель. На FL.ru вы тратите деньги только тогда, когда
            получаете заказ. На YouDo — каждый раз, когда пытаетесь его получить. При низкой
            конверсии откликов это может обойтись дороже, чем 20% комиссия конкурентов.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
            <p className="font-semibold text-yellow-800 mb-2">⚠️ Важно знать</p>
            <p className="text-yellow-700 text-sm">
              Деньги за обычный отклик списываются в момент отправки — до того, как заказчик
              принял решение. Если он выбрал другого исполнителя — деньги{" "}
              <strong>не возвращаются</strong>.
            </p>
          </div>

          {/* Section 2 — cost of bids */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Сколько стоит отклик на YouDo в 2026 году
          </h2>
          <p className="text-gray-700 mb-4">
            Цена отклика зависит от категории задания, региона и уровня конкуренции. По отзывам
            исполнителей в 2025–2026 году:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left rounded-tl-xl">Тип задания</th>
                  <th className="p-3 text-center">Цена отклика</th>
                  <th className="p-3 text-right rounded-tr-xl">Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-gray-700">Мелкие бытовые задания</td>
                  <td className="p-3 text-center font-bold text-green-600">30–40 ₽</td>
                  <td className="p-3 text-right text-gray-500 text-sm">Уборка, мелкий ремонт</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 text-gray-700">Услуги средней сложности</td>
                  <td className="p-3 text-center font-bold text-yellow-600">40–60 ₽</td>
                  <td className="p-3 text-right text-gray-500 text-sm">Курьер, сборка мебели</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Популярные категории (Москва)</td>
                  <td className="p-3 text-center font-bold text-red-600">60–80 ₽</td>
                  <td className="p-3 text-right text-gray-500 text-sm">Высокая конкуренция</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-8">
            Средний отклик по России — около <strong>50 рублей</strong>. В конкурентных
            категориях Москвы сумма доходит до 80 ₽ за попытку.
          </p>

          {/* Section 3 — real commission calculation */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Расчёт реальной стоимости привлечения заказа
          </h2>
          <p className="text-gray-700 mb-4">
            Ключевой параметр — ваша конверсия откликов: сколько откликов нужно, чтобы
            получить один заказ. По данным исполнителей, в среднем принимают{" "}
            <strong>1 из 5–10 откликов</strong>.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-800 mb-3">Пример расчёта для курьера (Москва):</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Стоимость заказа: <strong>1 500 ₽</strong></li>
              <li>Цена одного отклика: <strong>60 ₽</strong></li>
              <li>Принимают 1 из 7 откликов (конверсия 14%)</li>
              <li>Затраты на привлечение заказа: <strong>60 × 7 = 420 ₽</strong></li>
              <li>Реальная «комиссия»: <strong>420 / 1500 = 28%</strong></li>
              <li className="pt-2 font-bold text-red-700">
                На руки остаётся: 1 500 − 420 = <strong>1 080 ₽</strong>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            В этом примере реальная «комиссия» YouDo составила{" "}
            <strong>28% от суммы заказа</strong> — больше, чем максимальная комиссия FL.ru.
          </p>

          {/* Table: scenarios */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-gray-700">Конверсия откликов</th>
                  <th className="p-3 text-center text-gray-700">Откликов на заказ</th>
                  <th className="p-3 text-center text-gray-700">Затраты (при 50 ₽/отклик)</th>
                  <th className="p-3 text-right text-gray-700">«Комиссия» от заказа 2 000 ₽</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-gray-700">50% (высокая)</td>
                  <td className="p-3 text-center font-bold text-green-600">2</td>
                  <td className="p-3 text-center text-green-600">100 ₽</td>
                  <td className="p-3 text-right text-green-600 font-bold">5%</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 text-gray-700">20% (средняя)</td>
                  <td className="p-3 text-center font-bold text-yellow-600">5</td>
                  <td className="p-3 text-center text-yellow-600">250 ₽</td>
                  <td className="p-3 text-right text-yellow-600 font-bold">12,5%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-700">10% (низкая)</td>
                  <td className="p-3 text-center font-bold text-orange-600">10</td>
                  <td className="p-3 text-center text-orange-600">500 ₽</td>
                  <td className="p-3 text-right text-orange-600 font-bold">25%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700">5% (очень низкая)</td>
                  <td className="p-3 text-center font-bold text-red-600">20</td>
                  <td className="p-3 text-center text-red-600">1 000 ₽</td>
                  <td className="p-3 text-right text-red-600 font-bold">50%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4 — packages */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Пакеты откликов YouDo: как сэкономить
          </h2>
          <p className="text-gray-700 mb-4">
            YouDo предлагает два типа пакетов для исполнителей:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-900 mb-2">📦 Фиксированный пакет</p>
              <p className="text-gray-600 text-sm mb-3">
                Определённое количество откликов по сниженной цене. Выгоден при умеренной
                активности — 3–7 откликов в неделю.
              </p>
              <p className="text-blue-600 text-sm font-medium">youdo.com/package/base</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-900 mb-2">♾️ Безлимитный пакет</p>
              <p className="text-gray-600 text-sm mb-3">
                Неограниченное количество откликов за фиксированную плату в месяц. Окупается
                при активности от 10+ откликов в неделю.
              </p>
              <p className="text-blue-600 text-sm font-medium">youdo.com/package/unlimited</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Также YouDo предлагает <strong>отклики с постоплатой</strong> — деньги
            списываются только если заказчик выбрал вас. Такие отклики дороже обычных, но
            снижают риск потерять деньги впустую.
          </p>
          <p className="text-gray-700 mb-8">
            Главное правило: если вы откликаетесь на 10 и более заданий в неделю —
            безлимитный пакет окупится. Если меньше — выгоднее покупать разовые отклики или
            фиксированный пакет.
          </p>

          {/* Section 5 — sdelka bez riska */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            «Сделка без риска» — комиссия для заказчика, не для вас
          </h2>
          <p className="text-gray-700 mb-4">
            YouDo предлагает защищённую оплату — «Сделку без риска». Деньги замораживаются
            на счёте сервиса до выполнения задания, а потом переводятся исполнителю.
          </p>
          <p className="text-gray-700 mb-4">
            Важно: <strong>комиссию за «Сделку без риска» платит заказчик</strong>, а не
            исполнитель. Для вас как исполнителя эта функция бесплатна.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
            <p className="font-semibold text-green-800 mb-2">✅ Что это значит для вас</p>
            <p className="text-green-700 text-sm">
              Предлагайте заказчикам «Сделку без риска» — это повышает доверие и вероятность
              выбора вас. Дополнительной комиссии с вас не возьмут. Заказчик платит небольшую
              надбавку за гарантию — это его выбор.
            </p>
          </div>

          {/* CTA — calculator */}
          <div className="bg-blue-600 text-white rounded-xl p-6 mb-10 text-center">
            <p className="text-lg font-bold mb-2">Рассчитайте свою минимальную ставку</p>
            <p className="text-blue-100 mb-4 text-sm">
              Калькулятор учитывает налоги, расходы и комиссии — покажет реальный минимум,
              ниже которого работать невыгодно
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>

          {/* Section 6 — comparison */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            YouDo vs FL.ru vs Kwork — сравнение реальных затрат 2026
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-gray-700">Биржа</th>
                  <th className="p-3 text-center text-gray-700">Модель</th>
                  <th className="p-3 text-center text-gray-700">Затраты при заказе 3 000 ₽</th>
                  <th className="p-3 text-right text-gray-700">Выгодно когда</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium text-gray-800">YouDo</td>
                  <td className="p-3 text-center text-gray-600 text-sm">Плата за отклик</td>
                  <td className="p-3 text-center text-yellow-600 font-bold">
                    100–500 ₽ <span className="text-xs font-normal">(зависит от конверсии)</span>
                  </td>
                  <td className="p-3 text-right text-gray-600 text-sm">Высокая конверсия откликов</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">FL.ru (бесплатный)</td>
                  <td className="p-3 text-center text-gray-600 text-sm">20% с заказа</td>
                  <td className="p-3 text-center text-red-600 font-bold">600 ₽</td>
                  <td className="p-3 text-right text-gray-600 text-sm">Редко (только старт)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium text-gray-800">FL.ru (PRO)</td>
                  <td className="p-3 text-center text-gray-600 text-sm">10% с заказа</td>
                  <td className="p-3 text-center text-orange-600 font-bold">300 ₽</td>
                  <td className="p-3 text-right text-gray-600 text-sm">Проекты от 5 000 ₽</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">Kwork</td>
                  <td className="p-3 text-center text-gray-600 text-sm">7,5–20% с кворка</td>
                  <td className="p-3 text-center text-green-600 font-bold">225–600 ₽</td>
                  <td className="p-3 text-right text-gray-600 text-sm">Стандартные услуги пакетами</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Вывод:</strong> YouDo выгоден, если у вас высокая конверсия откликов
            (1 из 2–3) — тогда реальная «комиссия» составит 5–10%. Если вы конкурируете
            с 10+ исполнителями за каждый заказ — FL.ru с PRO-тарифом или Kwork окажутся
            дешевле.
          </p>
          <p className="text-gray-700 mb-8">
            Читайте также:{" "}
            <Link href="/guide/komissiya-fl-ru-2026" className="text-blue-600 hover:underline">
              Комиссия FL.ru 2026
            </Link>{" "}
            и{" "}
            <Link href="/guide/komissiya-kwork-2026" className="text-blue-600 hover:underline">
              Комиссия Kwork 2026
            </Link>
            .
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4 mb-10">
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* Related guides */}
          <div className="bg-gray-100 rounded-xl p-6">
            <p className="font-semibold text-gray-800 mb-3">Читайте также:</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/guide/komissiya-fl-ru-2026"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Комиссия FL.ru 2026: тарифы, расчёт, PRO vs бесплатный
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/komissiya-kwork-2026"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Комиссия Kwork 2026: прогрессивная шкала и расчёт цены кворка
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/nalog-samozanyatyj"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Налог самозанятого: 4% и 6%, как платить
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/ip-vs-samozanyatyj"
                  className="text-blue-600 hover:underline text-sm"
                >
                  ИП vs самозанятый: что выгоднее для фрилансера
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Все гайды для фрилансеров →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
