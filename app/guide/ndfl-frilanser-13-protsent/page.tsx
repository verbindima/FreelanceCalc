import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "НДФЛ 13% для фрилансера в 2026 году: как считать и платить | FreelanceCalc",
  description:
    "Когда фрилансер платит НДФЛ 13%. Договор ГПХ с физлицом, работа без регистрации, самостоятельная подача 3-НДФЛ. Профессиональный вычет 20%. Сравнение с самозанятым и ИП.",
  alternates: { canonical: `${BASE_URL}/guide/ndfl-frilanser-13-protsent` },
  openGraph: {
    title: "НДФЛ 13% для фрилансера 2026: расчёт и сравнение с самозанятым",
    description:
      "Доход 100 000 ₽/мес → НДФЛ 13 000 ₽, самозанятый платит 6 000 ₽. Разница 84 000 ₽/год. Когда всё же выгодно работать как физлицо.",
    url: `${BASE_URL}/guide/ndfl-frilanser-13-protsent`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "НДФЛ 13% для фрилансера 2026",
    description:
      "Договор ГПХ, 3-НДФЛ, профессиональный вычет — полный разбор с цифрами. Сравнение с самозанятым и ИП.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Когда фрилансер платит НДФЛ 13%?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Фрилансер платит НДФЛ 13% когда работает без регистрации как физлицо: по договору ГПХ с российской компанией (компания удерживает налог), по договору с иностранным заказчиком (нужно самому подавать 3-НДФЛ), или разово оказывает услуги частным лицам. Это самый невыгодный режим — ставка 13% против 4–6% у самозанятых.",
      },
    },
    {
      "@type": "Question",
      name: "Как платить НДФЛ с договора ГПХ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если заказчик — российская компания или ИП, они сами удерживают НДФЛ из выплаты и перечисляют в бюджет. Вы получаете сумму уже за вычетом налога. Если заказчик — иностранная компания или физлицо, вы сами обязаны подать декларацию 3-НДФЛ до 30 апреля следующего года и уплатить налог до 15 июля.",
      },
    },
    {
      "@type": "Question",
      name: "Что такое профессиональный налоговый вычет для фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Профессиональный вычет позволяет уменьшить налогооблагаемую базу. Два варианта: 1) Стандартный вычет 20% от дохода — налог считается не с 100%, а с 80% дохода. При доходе 100 000 ₽ экономия составит 2 600 ₽. 2) Документально подтверждённые расходы — вычет на сумму реальных затрат (оборудование, ПО, обучение). Для применения вычета нужно подать 3-НДФЛ.",
      },
    },
    {
      "@type": "Question",
      name: "Выгоднее ли стать самозанятым вместо НДФЛ 13%?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, в абсолютном большинстве случаев самозанятость выгоднее. При работе с юрлицами самозанятый платит 6% вместо 13% — разница в 7 процентных пунктов. При доходе 100 000 ₽/мес экономия составит 7 000 ₽/мес или 84 000 ₽/год. Регистрация занимает 10 минут через приложение «Мой налог». НДФЛ 13% оправдан только для разовых сделок.",
      },
    },
    {
      "@type": "Question",
      name: "Платит ли компания страховые взносы с выплат по договору ГПХ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, но не все. С 2023 года заказчик платит взносы на пенсионное страхование (22%) и медицинское (5,1%), а также взносы от несчастных случаев если предусмотрено договором. Взносы на ВНиМ (больничные и декретные) с ГПХ не начисляются — больничный лист не оплачивается. Эти взносы идут поверх вашего вознаграждения, то есть реальная стоимость для заказчика выше суммы договора.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "НДФЛ 13% для фрилансера в 2026 году: как считать и платить",
  description:
    "Полный разбор НДФЛ 13% для фрилансеров: договор ГПХ, 3-НДФЛ, профессиональный вычет, сравнение с самозанятым и ИП. Примеры расчётов.",
  url: `${BASE_URL}/guide/ndfl-frilanser-13-protsent`,
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function NdflFrilanser13Page() {
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
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            ← Калькулятор ставки фрилансера
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            НДФЛ 13% для фрилансера в 2026 году
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Когда фрилансер платит НДФЛ, как правильно его считать и почему в
            большинстве случаев самозанятость выгоднее.
          </p>
          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded-full">⏱ 6 минут</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">📅 Апрель 2026</span>
            <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full font-medium">НДФЛ 13%</span>
          </div>
        </header>

        {/* CTA Box */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            💡 Считайте ставку с учётом налогов
          </p>
          <p className="text-sm text-indigo-700 mb-3">
            Калькулятор покажет рыночную ставку по вашей специальности и поможет
            учесть налоговую нагрузку при любом режиме.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Рассчитать ставку →
          </Link>
        </div>

        {/* Section 1: Who pays */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Кто и когда платит НДФЛ 13%
          </h2>
          <p className="text-gray-700 mb-4">
            НДФЛ (налог на доходы физических лиц) — это налог по умолчанию для
            всех, кто получает доход в России без специальной регистрации.
            Фрилансер платит НДФЛ в трёх ситуациях:
          </p>

          <div className="space-y-3 mb-5">
            <div className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-2xl flex-shrink-0">🏢</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Договор ГПХ с российской компанией
                </p>
                <p className="text-sm text-gray-600">
                  Компания выступает налоговым агентом — сама удерживает НДФЛ из
                  вашего вознаграждения и перечисляет в бюджет. Вы получаете
                  сумму уже «чистыми».
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-2xl flex-shrink-0">🌍</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Иностранный заказчик
                </p>
                <p className="text-sm text-gray-600">
                  Иностранная компания не является налоговым агентом в России.
                  Вы обязаны самостоятельно подать 3-НДФЛ до 30 апреля и
                  заплатить налог до 15 июля следующего года.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-2xl flex-shrink-0">👤</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Разовая работа для физлица
                </p>
                <p className="text-sm text-gray-600">
                  Физлицо-заказчик не удерживает налог. Вы сами декларируете
                  доход и платите НДФЛ.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-amber-800 mb-1">
              ⚠️ Важно: незарегистрированная деятельность
            </p>
            <p className="text-sm text-amber-700">
              Систематическая работа на фрилансе без регистрации — нарушение
              законодательства. НДФЛ 13% — не «легальный способ не регистрироваться»,
              а обязательный налог при разовых сделках. При регулярном доходе
              регистрируйте самозанятость или ИП.
            </p>
          </div>
        </section>

        {/* Section 2: Tax rates */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Ставки НДФЛ в 2026 году
          </h2>
          <p className="text-gray-700 mb-4">
            С 2025 года в России действует прогрессивная шкала НДФЛ. Для
            большинства фрилансеров актуальны первые две ступени:
          </p>

          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Годовой доход</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Ставка</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">≈ Доход в мес.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-emerald-50">
                  <td className="p-3 border border-gray-200">До 2 400 000 ₽</td>
                  <td className="p-3 border border-gray-200 font-bold text-emerald-700">13%</td>
                  <td className="p-3 border border-gray-200">до 200 000 ₽/мес</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="p-3 border border-gray-200">2,4 – 5 млн ₽</td>
                  <td className="p-3 border border-gray-200 font-bold text-amber-700">15%</td>
                  <td className="p-3 border border-gray-200">200 – 417 000 ₽/мес</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="p-3 border border-gray-200">5 – 20 млн ₽</td>
                  <td className="p-3 border border-gray-200 font-bold text-orange-700">18%</td>
                  <td className="p-3 border border-gray-200">417 000+ ₽/мес</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-3 border border-gray-200">20 – 50 млн ₽</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-700">20%</td>
                  <td className="p-3 border border-gray-200">Топ-менеджмент</td>
                </tr>
                <tr className="bg-red-100">
                  <td className="p-3 border border-gray-200">Свыше 50 млн ₽</td>
                  <td className="p-3 border border-gray-200 font-bold text-red-800">22%</td>
                  <td className="p-3 border border-gray-200">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Для понимания:</span> прогрессия
              применяется только к сумме превышения. Если доход 3 млн ₽/год —
              13% платится с первых 2,4 млн, и 15% только с 600 000 ₽ разницы.
            </p>
          </div>
        </section>

        {/* Section 3: Real calculation example */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Пример расчёта: фрилансер 100 000 ₽/мес
          </h2>
          <p className="text-gray-700 mb-4">
            Разберём конкретный пример: фрилансер зарабатывает 100 000 ₽ в
            месяц (1 200 000 ₽ в год). Ставка 13%.
          </p>

          <div className="bg-gray-900 text-green-400 rounded-xl p-5 font-mono text-sm mb-5">
            <p className="text-gray-400 mb-2"># Доход 100 000 ₽/месяц</p>
            <p>Доход: 100 000 ₽</p>
            <p>НДФЛ 13%: − 13 000 ₽</p>
            <p className="border-t border-gray-600 mt-2 pt-2 text-white font-semibold">
              На руки: 87 000 ₽
            </p>
            <p className="text-gray-400 mt-3 mb-1"># С профессиональным вычетом 20%</p>
            <p>База для налога: 80 000 ₽ (−20% вычет)</p>
            <p>НДФЛ 13%: − 10 400 ₽</p>
            <p className="border-t border-gray-600 mt-2 pt-2 text-white font-semibold">
              На руки: 89 600 ₽
            </p>
          </div>

          {/* Comparison table */}
          <p className="text-gray-700 mb-3 font-medium">
            Сравнение с другими режимами при доходе 100 000 ₽/мес:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Режим</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Налог/мес</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">На руки</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">За год</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-emerald-50">
                  <td className="p-3 border border-gray-200 font-medium text-emerald-800">
                    Самозанятый (юрлицо, 6%)
                  </td>
                  <td className="p-3 border border-gray-200 text-right text-emerald-700 font-semibold">6 000 ₽</td>
                  <td className="p-3 border border-gray-200 text-right font-bold text-emerald-700">94 000 ₽</td>
                  <td className="p-3 border border-gray-200 text-right text-emerald-700">1 128 000 ₽</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-3 border border-gray-200 font-medium text-blue-800">
                    ИП УСН 6%
                  </td>
                  <td className="p-3 border border-gray-200 text-right text-blue-700 font-semibold">~5 528 ₽*</td>
                  <td className="p-3 border border-gray-200 text-right font-bold text-blue-700">94 472 ₽</td>
                  <td className="p-3 border border-gray-200 text-right text-blue-700">1 133 664 ₽</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-3 border border-gray-200 font-medium text-red-800">
                    НДФЛ 13% (без вычета)
                  </td>
                  <td className="p-3 border border-gray-200 text-right text-red-700 font-semibold">13 000 ₽</td>
                  <td className="p-3 border border-gray-200 text-right font-bold text-red-700">87 000 ₽</td>
                  <td className="p-3 border border-gray-200 text-right text-red-700">1 044 000 ₽</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="p-3 border border-gray-200 font-medium text-orange-800">
                    НДФЛ 13% (вычет 20%)
                  </td>
                  <td className="p-3 border border-gray-200 text-right text-orange-700 font-semibold">10 400 ₽</td>
                  <td className="p-3 border border-gray-200 text-right font-bold text-orange-700">89 600 ₽</td>
                  <td className="p-3 border border-gray-200 text-right text-orange-700">1 075 200 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            *ИП УСН: налог 6 000 ₽ − вычет страховых взносов 472 ₽/мес (53 658 ₽ ÷ 12) = 5 528 ₽
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <p className="text-sm font-semibold text-red-800 mb-1">
              💸 Итог: НДФЛ vs самозанятый
            </p>
            <p className="text-sm text-red-700">
              При доходе 100 000 ₽/мес самозанятый получает на{" "}
              <strong>7 000 ₽/мес больше</strong>, чем физлицо на НДФЛ 13%.
              За год разница — <strong>84 000 ₽</strong>. Регистрация
              самозанятости занимает 10 минут.
            </p>
          </div>
        </section>

        {/* Section 4: Professional deduction */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Профессиональный налоговый вычет
          </h2>
          <p className="text-gray-700 mb-4">
            Единственный способ снизить НДФЛ — профессиональный вычет (ст. 221
            НК РФ). Он применяется при подаче 3-НДФЛ. Два варианта:
          </p>

          <div className="grid grid-cols-1 gap-4 mb-5">
            <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
              <h3 className="font-bold text-blue-900 mb-2">
                Вариант 1: стандартный вычет 20%
              </h3>
              <p className="text-sm text-blue-800 mb-3">
                Налог считается не со 100%, а с 80% дохода. Документы не
                нужны.
              </p>
              <div className="bg-white rounded-lg p-3 font-mono text-xs text-gray-700">
                <p>Доход: 1 200 000 ₽/год</p>
                <p>Вычет 20%: − 240 000 ₽</p>
                <p>База: 960 000 ₽</p>
                <p className="font-bold mt-1">НДФЛ: 124 800 ₽ (экономия 31 200 ₽)</p>
              </div>
            </div>

            <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50">
              <h3 className="font-bold text-emerald-900 mb-2">
                Вариант 2: документальные расходы
              </h3>
              <p className="text-sm text-emerald-800 mb-3">
                Вычет на сумму реальных затрат — покупка оборудования, ПО,
                обучение, аренда рабочего места. Нужны чеки и документы.
              </p>
              <div className="bg-white rounded-lg p-3 font-mono text-xs text-gray-700">
                <p>Доход: 1 200 000 ₽/год</p>
                <p>Расходы: − 350 000 ₽ (ноут, курсы, ПО)</p>
                <p>База: 850 000 ₽</p>
                <p className="font-bold mt-1">НДФЛ: 110 500 ₽ (экономия 45 500 ₽)</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Когда вычет не применяется автоматически:</span>{" "}
              если компания-заказчик удерживает НДФЛ как налоговый агент — вычет
              нужно заявлять отдельно через налоговую. Напишите заказчику заявление
              о применении профессионального вычета до выплаты.
            </p>
          </div>
        </section>

        {/* Section 5: GPC and social contributions */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Страховые взносы при договоре ГПХ
          </h2>
          <p className="text-gray-700 mb-4">
            Когда российская компания заключает с вами договор ГПХ, она не
            только удерживает НДФЛ, но и платит страховые взносы из{" "}
            <em>своего кармана</em> поверх вашего вознаграждения:
          </p>

          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Вид взноса</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Ставка</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Платится?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-emerald-50">
                  <td className="p-3 border border-gray-200">Пенсионное (ОПС)</td>
                  <td className="p-3 border border-gray-200 text-right">22%</td>
                  <td className="p-3 border border-gray-200 text-emerald-700">✅ Да</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="p-3 border border-gray-200">Медицинское (ОМС)</td>
                  <td className="p-3 border border-gray-200 text-right">5,1%</td>
                  <td className="p-3 border border-gray-200 text-emerald-700">✅ Да</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-3 border border-gray-200">Больничные и декрет (ВНиМ)</td>
                  <td className="p-3 border border-gray-200 text-right">2,9%</td>
                  <td className="p-3 border border-gray-200 text-red-700">❌ Нет</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="p-3 border border-gray-200">Несчастные случаи</td>
                  <td className="p-3 border border-gray-200 text-right">0,2–8,5%</td>
                  <td className="p-3 border border-gray-200 text-amber-700">⚡ Если указано в договоре</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-3">
            <strong>Практический вывод:</strong> реальная стоимость для
            заказчика выше суммы договора на 27,1%. При вашем вознаграждении
            100 000 ₽ заказчик тратит ≈ 127 100 ₽. Больничный лист при договоре
            ГПХ не оплачивается.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-sm text-indigo-800">
              <span className="font-semibold">Для сравнения:</span> при работе
              через самозанятого заказчик платит только ваше вознаграждение —
              никаких взносов. Это часто делает самозанятого привлекательнее для
              бизнеса, даже если ставка чуть выше.
            </p>
          </div>
        </section>

        {/* Section 6: 3-NDFL */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Самостоятельная подача 3-НДФЛ
          </h2>
          <p className="text-gray-700 mb-4">
            Если ваш заказчик не удержал налог (иностранец, физлицо), вы
            обязаны подать декларацию 3-НДФЛ. Алгоритм:
          </p>

          <ol className="space-y-3 mb-5">
            {[
              {
                n: "1",
                title: "Соберите данные о доходах",
                text: "Все поступления от иностранных клиентов за год, пересчитанные в рубли по курсу ЦБ на дату получения платежа.",
              },
              {
                n: "2",
                title: "Подайте декларацию до 30 апреля",
                text: "Через Госуслуги или сайт налоговой (nalog.ru) → «Жизненные ситуации» → «Подать декларацию 3-НДФЛ». Форма за 2025 год — до 30 апреля 2026.",
              },
              {
                n: "3",
                title: "Уплатите налог до 15 июля",
                text: "После подачи декларации у вас есть время до 15 июля. Оплата через личный кабинет или банк.",
              },
              {
                n: "4",
                title: "Используйте вычет",
                text: "В той же декларации заявите профессиональный вычет 20% или сумму документальных расходов.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
              >
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.n}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-red-800 mb-1">
              ⛔ Штрафы за непредоставление декларации
            </p>
            <p className="text-sm text-red-700">
              5% от неуплаченного налога за каждый месяц просрочки (минимум
              1 000 ₽, максимум 30%). За неуплату налога — 20% от суммы или
              40% при умысле. Пеня за каждый день просрочки — 1/300 ставки ЦБ.
            </p>
          </div>
        </section>

        {/* Section 7: When NDFL makes sense */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Когда НДФЛ 13% всё же оправдан
          </h2>
          <p className="text-gray-700 mb-4">
            Несмотря на высокую ставку, есть ситуации когда работа как физлицо
            имеет смысл:
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xl flex-shrink-0">🧪</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Тестовый проект или единичный заказ</p>
                <p className="text-xs text-gray-600">
                  Разовая работа стоимостью 20–50 тысяч рублей — регистрировать
                  самозанятость нецелесообразно (хотя занимает 10 минут и бесплатно).
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xl flex-shrink-0">🏢</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Компания требует оформление «по-белому»</p>
                <p className="text-xs text-gray-600">
                  Некоторые корпорации работают только с физлицами по ГПХ,
                  отказываясь от самозанятых из-за внутренних регламентов.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-xl flex-shrink-0">💰</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">Большие документальные расходы</p>
                <p className="text-xs text-gray-600">
                  Если расходы на оборудование и ПО превышают 20% дохода — вычет
                  на документальные расходы может быть выгоднее, чем ставка
                  самозанятого.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Когда фрилансер платит НДФЛ 13%?",
                a: "Фрилансер платит НДФЛ 13% когда работает без регистрации как физлицо: по договору ГПХ с российской компанией (компания удерживает налог), при работе с иностранным заказчиком (3-НДФЛ самостоятельно), или при разовых услугах физлицам.",
              },
              {
                q: "Как платить НДФЛ с договора ГПХ?",
                a: "Если заказчик — российская компания, она сама удерживает НДФЛ и перечисляет в налоговую. Вы получаете сумму уже за вычетом налога. Если заказчик — иностранная компания или физлицо, подаёте 3-НДФЛ до 30 апреля и платите налог до 15 июля следующего года.",
              },
              {
                q: "Что такое профессиональный налоговый вычет для фрилансера?",
                a: "Позволяет уменьшить налоговую базу на 20% стандартно или на сумму документальных расходов. При доходе 1,2 млн ₽/год стандартный вычет экономит 31 200 ₽ налога.",
              },
              {
                q: "Выгоднее ли стать самозанятым вместо НДФЛ 13%?",
                a: "Да, в большинстве случаев. Самозанятый платит 6% с юрлицами против 13% НДФЛ — разница 7%. При доходе 100 000 ₽/мес экономия 7 000 ₽/мес = 84 000 ₽/год. Регистрация занимает 10 минут через «Мой налог».",
              },
              {
                q: "Платит ли компания страховые взносы с выплат по договору ГПХ?",
                a: "Да — ОПС 22% и ОМС 5,1% из своего кармана поверх вашего вознаграждения. ВНиМ (больничные) не платится — больничный лист не оплачивается. Итого заказчик тратит на 27,1% больше суммы вашего договора.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="border border-gray-200 rounded-xl group"
              >
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-gray-800 hover:bg-gray-50 rounded-xl">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2 flex-shrink-0">
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">
            Рассчитайте рыночную ставку с учётом налогов
          </h2>
          <p className="text-indigo-200 mb-4 text-sm">
            Введите специальность и опыт — получите медианную ставку по
            рынку и сумму на руки при любом налоговом режиме.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Открыть калькулятор →
          </Link>
          <p className="text-xs text-indigo-300 mt-3">
            Бесплатно · Без регистрации · Данные hh.ru 2026
          </p>
        </section>

        {/* Related articles */}
        <section className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Читайте также
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { href: "/guide/nalog-samozanyatyj", title: "Налог самозанятого 2026: 4% или 6%" },
              { href: "/guide/ip-vs-samozanyatyj", title: "ИП или самозанятый: что выбрать фрилансеру" },
              { href: "/guide/nalog-ip-usn-6", title: "ИП на УСН 6%: расчёт налога и взносов" },
              { href: "/guide/nalog-programmist-frilanser", title: "Налог программиста-фрилансера 2026" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors p-3 rounded-lg hover:bg-indigo-50"
              >
                <span>→</span>
                {link.title}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
