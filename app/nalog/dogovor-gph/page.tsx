import type { Metadata } from "next";
import Link from "next/link";
import GphCalc from "./GphCalc";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор налогов по договору ГПХ 2026 — онлайн расчёт",
  description:
    "Рассчитайте НДФЛ и страховые взносы по договору ГПХ в 2026 году. Сколько вы получите на руки? Сколько заплатит заказчик? Сравнение с самозанятым и ИП УСН 6%.",
  keywords: [
    "расчет налогов по договору гпх",
    "калькулятор налогов гпх 2026",
    "договор гпх налоги онлайн",
    "ндфл гпх калькулятор",
    "гпх страховые взносы 2026",
    "договор гпх сколько на руки",
    "гпх vs самозанятый",
    "гражданско-правовой договор налоги",
    "расчет налогов фрилансер гпх",
    "гпх или самозанятый что выгоднее 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/nalog/dogovor-gph" },
  openGraph: {
    title: "Калькулятор налогов по договору ГПХ 2026",
    description:
      "Введите сумму по договору ГПХ — рассчитайте НДФЛ, страховые взносы, сравните с самозанятым и ИП.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/nalog/dogovor-gph`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Калькулятор налогов по договору ГПХ",
      description:
        "Онлайн-калькулятор налогов по гражданско-правовому договору (ГПХ) 2026. Рассчитывает НДФЛ, страховые взносы заказчика, сумму на руки. Сравнение с самозанятым (НПД) и ИП УСН 6%.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/nalog/dogovor-gph`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Налоги фрилансера", item: `${BASE_URL}/nalog` },
        { "@type": "ListItem", position: 3, name: "Договор ГПХ", item: `${BASE_URL}/nalog/dogovor-gph` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Какой налог платится по договору ГПХ в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "По договору ГПХ исполнитель платит НДФЛ 13% (при доходе до 5 млн ₽/год) или 15% (свыше 5 млн ₽). Заказчик удерживает НДФЛ из суммы договора и перечисляет в бюджет. Дополнительно заказчик платит страховые взносы сверх суммы договора: ~30% (22% ПФР + 5,1% ОМС + 2,9% ФСС).",
          },
        },
        {
          "@type": "Question",
          name: "Что выгоднее: договор ГПХ или самозанятый?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятость выгоднее и для исполнителя, и для заказчика. Исполнитель получает на 7-9% больше (НДФЛ 13% vs НПД 6%). Заказчик экономит ~30% на страховых взносах. Ограничения самозанятого: доход не более 2,4 млн ₽/год, нельзя нанимать сотрудников, нельзя работать по самозанятости с текущим или бывшим работодателем (2 года).",
          },
        },
        {
          "@type": "Question",
          name: "Что такое профессиональный вычет по договору ГПХ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Профессиональный вычет — это право уменьшить налоговую базу на документально подтверждённые расходы или на 20% от дохода без документов. Для получения вычета нужно самостоятельно подать декларацию 3-НДФЛ до 30 апреля следующего года. Заказчик удерживает НДФЛ без учёта вычета, а возврат получаете сами от налоговой.",
          },
        },
        {
          "@type": "Question",
          name: "Платит ли заказчик страховые взносы по договору ГПХ в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. С 2023 года заказчик обязан платить страховые взносы по договорам ГПХ: пенсионные (22%), медицинские (5,1%) и социальные (2,9%). Итого ~30% сверх суммы договора. С 2024 года исполнители по ГПХ также получили право на больничные и декретные выплаты.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать сумму по ГПХ, если известна сумма на руки?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Если вы хотите получить на руки N рублей, сумма договора (gross) должна быть: N ÷ 0.87 = gross (без вычета) или N ÷ 0.896 (с профессиональным вычетом 20%). Пример: хотите 100 000 ₽ на руки → договор на 114 943 ₽ (округлённо 115 000 ₽). При этом заказчик заплатит ещё ~30% сверху страховых взносов.",
          },
        },
      ],
    },
  ],
};

export default function GphPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-400 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              FreelanceCalc
            </Link>
            <span>›</span>
            <Link href="/nalog" className="hover:text-indigo-600 transition-colors">
              Налоги фрилансера
            </Link>
            <span>›</span>
            <span className="text-slate-600">Договор ГПХ</span>
          </nav>

          {/* Hero */}
          <header>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Калькулятор налогов по договору ГПХ 2026
            </h1>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Введите сумму по договору — узнайте, сколько получите на руки и сколько заплатит заказчик.
              Сравнение с самозанятым и ИП УСН 6%.
            </p>
          </header>

          {/* Interactive calculator */}
          <GphCalc />

          {/* Article content */}
          <article className="prose-sm max-w-none space-y-5 text-slate-700">
            <section>
              <h2 className="text-base font-bold text-slate-800 mb-2">
                Как рассчитываются налоги по договору ГПХ
              </h2>
              <p className="text-sm leading-relaxed">
                По гражданско-правовому договору (ГПХ) заказчик выплачивает исполнителю вознаграждение
                и удерживает из него НДФЛ — 13% при доходе до 5&nbsp;000&nbsp;000&nbsp;₽ в год
                или 15% с суммы превышения. Значит, если ваш договор на 100&nbsp;000&nbsp;₽,
                на руки вы получаете 87&nbsp;000&nbsp;₽.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Помимо этого, с 2023 года заказчик обязан уплачивать страховые взносы
                сверх суммы договора: пенсионные (22%), медицинские (5,1%) и социальные (2,9%).
                Итого заказчик тратит около 130&nbsp;000&nbsp;₽, чтобы вы получили 87&nbsp;000&nbsp;₽.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-800 mb-2">
                ГПХ vs Самозанятый: что выгоднее в 2026 году
              </h2>
              <p className="text-sm leading-relaxed">
                Самозанятость (НПД) выгоднее и для исполнителя, и для заказчика.
                При той же сумме договора исполнитель-самозанятый платит 6% НПД вместо 13% НДФЛ
                — разница +7% к доходу. Заказчик экономит ~30% на страховых взносах:
                для него работа с самозанятым стоит ровно столько, сколько указано в договоре.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                <strong>Ограничения самозанятости:</strong> доход не более 2,4&nbsp;млн&nbsp;₽
                в год, нельзя нанимать сотрудников, запрет работать с бывшим работодателем
                в течение 2 лет.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-800 mb-2">
                Профессиональный вычет по договору ГПХ
              </h2>
              <p className="text-sm leading-relaxed">
                Исполнитель по ГПХ вправе уменьшить НДФЛ за счёт профессионального вычета:
                либо на документально подтверждённые расходы, либо на 20% без документов.
                Вычет не применяется автоматически — нужно самостоятельно подать декларацию
                3-НДФЛ до 30 апреля следующего года. Заказчик удерживает полный НДФЛ,
                а разницу возвращает налоговая.
              </p>
            </section>
          </article>

          {/* FAQ */}
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-4">
              Частые вопросы
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "Нужно ли самому платить НДФЛ по ГПХ?",
                  a: "Нет — заказчик как налоговый агент удерживает НДФЛ из вашего вознаграждения и перечисляет его в налоговую. Вы получаете уже «чистую» сумму. Исключение — если заказчик физлицо или иностранная компания: тогда платите НДФЛ сами через 3-НДФЛ.",
                },
                {
                  q: "Учитываются ли периоды по ГПХ для пенсии?",
                  a: "Да. С 2023 года заказчик платит пенсионные взносы (22%) по ГПХ договорам, поэтому период идёт в страховой стаж и учитывается при расчёте пенсии.",
                },
                {
                  q: "Можно ли работать по ГПХ и быть самозанятым одновременно?",
                  a: "Нет. Самозанятый не может применять НПД для доходов, которые оформлены как ГПХ с тем же заказчиком — это уже становится трудовыми отношениями. Но можно иметь разные договоры с разными клиентами — часть по ГПХ (если нельзя НПД), часть по самозанятости.",
                },
                {
                  q: "Облагается ли больничный исполнителя по ГПХ?",
                  a: "С 2024 года да. Исполнители по ГПХ получили право на оплату больничных и пособий по беременности/родам — при условии, что заказчик платил за них взносы в ФСС хотя бы в предыдущем году.",
                },
                {
                  q: "Как посчитать сумму договора, если знаю, сколько хочу получить на руки?",
                  a: "Разделите желаемую сумму на руки на 0,87 (без вычета) или на 0,896 (с профессиональным вычетом 20%). Пример: хотите 150 000 ₽ → договор должен быть на 172 414 ₽ (≈ 172 500 ₽). При этом заказчик дополнительно заплатит ~52 000 ₽ страховых взносов.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="bg-white border border-slate-200 rounded-xl group"
                >
                  <summary className="px-4 py-3 text-sm font-semibold text-slate-800 cursor-pointer select-none list-none flex items-center justify-between gap-2">
                    {q}
                    <span className="text-slate-400 text-base group-open:rotate-180 transition-transform shrink-0">
                      ▾
                    </span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <nav className="bg-slate-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Другие калькуляторы
            </p>
            <div className="space-y-1.5">
              <Link href="/nalog" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                → Налоги фрилансера: самозанятый, ИП УСН, патент — сравнение
              </Link>
              <Link href="/nalog/sravnenie" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                → Сравнение режимов по годовому доходу
              </Link>
              <Link href="/nalog/ip-usn" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                → Калькулятор налога ИП УСН 6%
              </Link>
              <Link href="/" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                → Калькулятор ставки фрилансера (с учётом всех налогов)
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
