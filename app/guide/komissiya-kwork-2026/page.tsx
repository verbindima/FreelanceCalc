import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Комиссия Kwork 2026: сколько берёт биржа и как рассчитать ставку | FreelanceCalc",
  description:
    "Комиссия Kwork в 2026 году: 20% → 12% → 7,5% в зависимости от оборота. Таблица тарифов, пример расчёта, как заложить комиссию в цену кворка. Сравнение с FL.ru.",
  alternates: { canonical: `${BASE_URL}/guide/komissiya-kwork-2026` },
  openGraph: {
    title: "Комиссия Kwork 2026: сколько берёт биржа фрилансеров",
    description:
      "Kwork берёт 20% с новичков и до 7,5% с опытных фрилансеров. Как рассчитать цену кворка, чтобы не работать в убыток?",
    url: `${BASE_URL}/guide/komissiya-kwork-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Комиссия Kwork 2026: таблица тарифов и расчёт ставки",
    description:
      "20% → 12% → 7,5% — прогрессивная шкала комиссии Kwork. Как заложить её в цену кворка — разбор с примерами.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какая комиссия Kwork для фрилансера в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kwork берёт прогрессивную комиссию: 20% при обороте до 30 000 ₽ с одним заказчиком, 12% — от 30 000 до 300 000 ₽, 7,5% — свыше 300 000 ₽. Комиссия считается по каждому заказчику отдельно, не по общему обороту.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько Kwork берёт с заказчика?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kwork не берёт комиссию с покупателей — только с продавцов (фрилансеров). Заказчик платит ту цену, которую видит в объявлении, без скрытых сборов.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать цену кворка с учётом комиссии?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: цена = желаемый доход ÷ (1 − комиссия). При комиссии 20% и желаемом доходе 2 000 ₽: 2000 ÷ 0,8 = 2 500 ₽. При комиссии 12%: 2000 ÷ 0,88 = 2 273 ₽. При комиссии 7,5%: 2000 ÷ 0,925 = 2 162 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Какая комиссия при выводе денег с Kwork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Комиссия при выводе зависит от способа: на банковскую карту РФ — 3%, через Яндекс.Деньги — 1,5%. Минимальная сумма вывода — 500 ₽, выплаты проводятся дважды в неделю (по понедельникам и четвергам до 23:00 МСК).",
      },
    },
    {
      "@type": "Question",
      name: "Kwork или FL.ru — где выгоднее работать фрилансеру?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Зависит от объёма работы. Kwork выгоднее для фрилансеров с высоким оборотом с одним клиентом (комиссия падает до 7,5%). FL.ru выгоднее при среднем обороте с PRO-тарифом (фиксированные 10%). Для новичков с оборотом до 30 000 ₽ — комиссия одинакова (20%).",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Комиссия Kwork в 2026 году: сколько берёт биржа и как рассчитать ставку",
  description:
    "Прогрессивная шкала комиссий Kwork, таблица тарифов, расчёт цены кворка, сравнение с FL.ru и Habr Freelance.",
  url: `${BASE_URL}/guide/komissiya-kwork-2026`,
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

export default function KomissiyaKworkPage() {
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
            <span>Комиссия Kwork 2026</span>
          </nav>

          {/* H1 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Комиссия Kwork 2026: сколько берёт биржа и как рассчитать ставку
          </h1>
          <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026</p>

          <p className="text-lg text-gray-700 mb-8">
            Kwork — крупнейший русскоязычный маркетплейс фриланс-услуг. В отличие от FL.ru,
            здесь нет почасовой оплаты — фрилансер продаёт «кворки» (стандартизированные
            пакеты услуг). И вся бизнес-модель строится вокруг одного вопроса: как заложить
            комиссию биржи в цену так, чтобы не потерять деньги?
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Как устроена комиссия Kwork
          </h2>
          <p className="text-gray-700 mb-4">
            Kwork использует <strong>прогрессивную шкалу</strong>: чем больше оборот с
            конкретным заказчиком, тем ниже комиссия. Важный нюанс — шкала применяется
            <em> по каждому заказчику отдельно</em>, а не по суммарному обороту аккаунта.
          </p>
          <p className="text-gray-700 mb-6">
            Это означает: если вы продали кворков на 200 000 ₽ разным заказчикам по 5 000 ₽ каждому —
            комиссия остаётся 20% со всех. Снизить её можно, только накапливая оборот с
            одним и тем же клиентом.
          </p>

          {/* Table */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Таблица комиссий Kwork 2026
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left rounded-tl-xl">Оборот с заказчиком</th>
                  <th className="p-3 text-center">Комиссия</th>
                  <th className="p-3 text-right rounded-tr-xl">С 5 000 ₽ вы получите</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-gray-700">До 30 000 ₽</td>
                  <td className="p-3 text-center font-bold text-red-600">20%</td>
                  <td className="p-3 text-right text-gray-700">4 000 ₽</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 text-gray-700">30 000 — 300 000 ₽</td>
                  <td className="p-3 text-center font-bold text-yellow-600">12%</td>
                  <td className="p-3 text-right text-gray-700">4 400 ₽</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Свыше 300 000 ₽</td>
                  <td className="p-3 text-center font-bold text-green-600">7,5%</td>
                  <td className="p-3 text-right text-gray-700">4 625 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Пример расчёта: сколько вы реально получите
          </h2>
          <p className="text-gray-700 mb-4">
            Представим: вы дизайнер и продаёте кворк «Логотип за 3 000 ₽». Это ваш первый
            заказ от нового клиента. Комиссия будет 20%.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-800 mb-3">Расчёт для кворка за 3 000 ₽:</p>
            <ul className="space-y-1 text-gray-700">
              <li>Цена кворка: <strong>3 000 ₽</strong></li>
              <li>Комиссия Kwork 20%: <strong>−600 ₽</strong></li>
              <li>Вы получите на баланс: <strong>2 400 ₽</strong></li>
              <li>Комиссия вывода на карту (3%): <strong>−72 ₽</strong></li>
              <li className="pt-1 font-bold text-green-700">
                Итого на руки: <strong>2 328 ₽</strong> (вместо 3 000 ₽)
              </li>
            </ul>
          </div>
          <p className="text-gray-700 mb-8">
            Реальный доход — <strong>77,6% от цены кворка</strong>. Чтобы получить 3 000 ₽
            на руки, нужно выставить цену <strong>3 968 ₽</strong> (с учётом комиссии
            биржи и вывода).
          </p>

          {/* Section 4 — withdrawal */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Комиссия при выводе денег с Kwork
          </h2>
          <p className="text-gray-700 mb-4">
            Помимо комиссии за сделку, Kwork удерживает комиссию при выводе средств.
            Выплаты проводятся <strong>дважды в неделю</strong> — по понедельникам и
            четвергам до 23:00 МСК. Минимальная сумма вывода — <strong>500 ₽</strong>.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left rounded-tl-xl text-gray-700">Способ вывода</th>
                  <th className="p-3 text-center text-gray-700">Комиссия</th>
                  <th className="p-3 text-right rounded-tr-xl text-gray-700">Из 10 000 ₽ получите</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-gray-700">Банковская карта РФ</td>
                  <td className="p-3 text-center font-bold text-orange-600">3%</td>
                  <td className="p-3 text-right text-gray-700">9 700 ₽</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700">ЮMoney (Яндекс.Деньги)</td>
                  <td className="p-3 text-center font-bold text-green-600">1,5%</td>
                  <td className="p-3 text-right text-gray-700">9 850 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-8">
            Самозанятые и ИП могут вывести средства с пониженной комиссией — уточняйте
            актуальные условия в разделе «Кошелёк» в личном кабинете Kwork.
          </p>

          {/* Section 5 — how to set price */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Как заложить комиссию Kwork в цену кворка
          </h2>
          <p className="text-gray-700 mb-4">
            Главная ошибка новичков — выставить цену кворка равную желаемому доходу.
            Нужно поступить наоборот: рассчитать цену «от обратного» с помощью формулы.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <p className="font-semibold text-gray-800 mb-2">Формула расчёта цены кворка:</p>
            <p className="text-blue-700 font-mono text-lg mb-3">
              Цена = Желаемый доход ÷ (1 − комиссия)
            </p>
            <div className="space-y-1 text-gray-700 text-sm">
              <p>При комиссии <strong>20%</strong>: хочу 5 000 ₽ → ставлю <strong>6 250 ₽</strong> (5000 ÷ 0,8)</p>
              <p>При комиссии <strong>12%</strong>: хочу 5 000 ₽ → ставлю <strong>5 682 ₽</strong> (5000 ÷ 0,88)</p>
              <p>При комиссии <strong>7,5%</strong>: хочу 5 000 ₽ → ставлю <strong>5 405 ₽</strong> (5000 ÷ 0,925)</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Также не забудьте прибавить <strong>комиссию на вывод</strong> (3% на карту).
            Полная формула: Цена = Желаемый доход ÷ (1 − комиссия биржи) ÷ (1 − комиссия вывода).
          </p>
          <p className="text-gray-700 mb-8">
            Пример: хочу 5 000 ₽ на карте, комиссия 20%, вывод на карту 3%:{" "}
            <strong>5000 ÷ 0,8 ÷ 0,97 = 6 443 ₽</strong> — вот минимальная цена кворка.
          </p>

          {/* CTA — calculator */}
          <div className="bg-blue-600 text-white rounded-xl p-6 mb-10 text-center">
            <p className="text-lg font-bold mb-2">Рассчитайте свою минимальную ставку</p>
            <p className="text-blue-100 mb-4 text-sm">
              Калькулятор учитывает налоги, комиссии бирж и расходы — покажет, сколько
              реально нужно брать за час работы
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
            Kwork vs FL.ru vs Habr Freelance — сравнение комиссий 2026
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-gray-700">Биржа</th>
                  <th className="p-3 text-center text-gray-700">Мин. комиссия</th>
                  <th className="p-3 text-center text-gray-700">Макс. комиссия</th>
                  <th className="p-3 text-right text-gray-700">Как снизить</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium text-gray-800">Kwork</td>
                  <td className="p-3 text-center text-green-600 font-bold">7,5%</td>
                  <td className="p-3 text-center text-red-600 font-bold">20%</td>
                  <td className="p-3 text-right text-gray-600 text-sm">Накопить оборот с клиентом</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">FL.ru (бесплатный)</td>
                  <td className="p-3 text-center text-red-600 font-bold">20%</td>
                  <td className="p-3 text-center text-red-600 font-bold">20%</td>
                  <td className="p-3 text-right text-gray-600 text-sm">Нельзя без подписки</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium text-gray-800">FL.ru (PRO)</td>
                  <td className="p-3 text-center text-green-600 font-bold">10%</td>
                  <td className="p-3 text-center text-orange-600 font-bold">10%</td>
                  <td className="p-3 text-right text-gray-600 text-sm">От 999 ₽/мес</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-gray-800">Habr Freelance</td>
                  <td className="p-3 text-center text-green-600 font-bold">5%</td>
                  <td className="p-3 text-center text-orange-600 font-bold">10%</td>
                  <td className="p-3 text-right text-gray-600 text-sm">Рост репутации</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Вывод:</strong> Kwork выгоден для долгосрочных клиентов — при обороте
            свыше 300 000 ₽ комиссия 7,5% одна из лучших на рынке. FL.ru с PRO-тарифом
            фиксированные 10% — подходит для проектной работы. Habr Freelance — лучший
            выбор для IT-специалистов с хорошей репутацией.
          </p>
          <p className="text-gray-700 mb-8">
            Подробнее о комиссиях FL.ru: <Link href="/guide/komissiya-fl-ru-2026" className="text-blue-600 hover:underline">
              Комиссия FL.ru 2026 — полный разбор
            </Link>.
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
                  Комиссия FL.ru 2026: тарифы и расчёт ставки
                </Link>
              </li>
              <li>
                <Link
                  href="/guide/nalog-samozanyatyj"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Налог самозанятого: как платить 4% и 6%
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
