import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Штрафы для самозанятых в 2026 году: за что наказывают и как избежать | FreelanceCalc",
  description:
    "Полный список штрафов для самозанятых в 2026: за непробитый чек — 20–100% суммы (ст. 129.13 НК РФ), за скрытие дохода — 20%, за превышение 2,4 млн ₽. Таблица с примерами расчётов.",
  alternates: { canonical: `${BASE_URL}/guide/shtrafy-samozanyatogo-2026` },
  openGraph: {
    title: "Штрафы самозанятых 2026: полная таблица с суммами",
    description:
      "За непробитый чек — до 100% суммы. За скрытие дохода — 20%. Разбираем ст. 129.13 НК РФ и как ФНС находит нарушителей.",
    url: `${BASE_URL}/guide/shtrafy-samozanyatogo-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Штрафы самозанятых 2026: за непробитый чек, скрытый доход, подмену трудовых",
    description:
      "Первое нарушение — 20% суммы. Повторное — 100%. Как ФНС проверяет самозанятых и как не попасть на штраф.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какой штраф самозанятому за невыдачу чека в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По ст. 129.13 НК РФ: первое нарушение — 20% от суммы расчёта (минимум 200 ₽). Повторное нарушение в течение 6 месяцев — 100% суммы (то есть штраф равен полной стоимости заказа). Например, не пробили чек на 5 000 ₽ — штраф 1 000 ₽. Второй раз за полгода — уже 5 000 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Как ФНС узнаёт, что самозанятый скрывает доходы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Основные источники: жалобы заказчиков через приложение «Мой налог», контрольные закупки ФНС (инспектор оплачивает услугу и проверяет чек), сравнение доходов по банковским переводам с задекларированными в приложении, анализ объявлений на маркетплейсах (Авито, Яндекс Услуги) и социальных сетях.",
      },
    },
    {
      "@type": "Question",
      name: "Что будет, если самозанятый превысит лимит 2,4 млн рублей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Статус НПД автоматически прекращается со дня превышения. С суммы свыше 2,4 млн придётся заплатить НДФЛ 13% (или 15% с превышения 5 млн). Если не зарегистрироваться как ИП в течение 20 дней — налоговая доначислит НДФЛ за весь сверхлимитный доход плюс штраф 20% по ст. 122 НК РФ.",
      },
    },
    {
      "@type": "Question",
      name: "Может ли заказчик пожаловаться на самозанятого, который не выдал чек?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Заказчик может сообщить о нарушении через приложение «Мой налог» → раздел «Поддержка» → «Пожаловаться на самозанятого». Также можно обратиться на сайт ФНС. Налоговая обязана рассмотреть жалобу и выслать самозанятому требование о формировании чека.",
      },
    },
    {
      "@type": "Question",
      name: "Есть ли срок давности по штрафам для самозанятых?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. По ст. 113 НК РФ общий срок давности привлечения к ответственности — 3 года с момента нарушения. Однако налоговые доначисления могут охватывать более длительный период, если будет доказан умысел (ст. 122 НК РФ, ч. 3 — срок не ограничен при умышленном уклонении).",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Штрафы для самозанятых в 2026 году: за что наказывают и как избежать",
  description:
    "Полный разбор штрафов для плательщиков НПД в 2026 году: за непробитый чек по ст. 129.13 НК РФ, за скрытие доходов, за превышение лимита 2,4 млн ₽ и за подмену трудовых отношений. Таблица штрафов с примерами расчётов.",
  url: `${BASE_URL}/guide/shtrafy-samozanyatogo-2026`,
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function ShtrazyySamozanyatogo2026() {
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
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/guide" className="hover:underline">Гайды</Link>
          <span className="mx-2">/</span>
          <span>Штрафы самозанятых 2026</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Штрафы для самозанятых в 2026 году: полная таблица и как избежать
        </h1>

        <p className="text-gray-500 text-sm mb-6">Обновлено: апрель 2026 · 8 мин чтения</p>

        <p className="text-lg text-gray-700 mb-8">
          Режим НПД считается одним из самых простых — но и у него есть штрафные санкции. В 2026 году
          ФНС усилила контроль за плательщиками налога на профессиональный доход: контрольные закупки,
          мониторинг переводов на карту, жалобы заказчиков. Разбираем все виды штрафов с конкретными
          суммами и статьями закона.
        </p>

        {/* Сводная таблица */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Таблица штрафов самозанятых в 2026 году</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Нарушение</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Штраф (первое)</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Штраф (повторное)</th>
                  <th className="text-left px-4 py-3 border border-gray-200 font-semibold">Статья НК РФ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Не выдал чек или просрочил выдачу</td>
                  <td className="px-4 py-3 border border-gray-200 text-orange-600 font-medium">20% суммы (мин. 200 ₽)</td>
                  <td className="px-4 py-3 border border-gray-200 text-red-600 font-medium">100% суммы расчёта</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-500">ст. 129.13</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Скрытие (занижение) дохода</td>
                  <td className="px-4 py-3 border border-gray-200 text-orange-600 font-medium">20% неуплаченного налога</td>
                  <td className="px-4 py-3 border border-gray-200 text-red-600 font-medium">40% при умысле</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-500">ст. 122</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Превышение лимита 2,4 млн ₽ без перехода на ИП</td>
                  <td className="px-4 py-3 border border-gray-200 text-orange-600 font-medium">НДФЛ 13% + 20% штраф</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-400">—</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-500">ст. 122, 123</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Подмена трудового договора (для заказчика)</td>
                  <td className="px-4 py-3 border border-gray-200 text-orange-600 font-medium">НДФЛ + взносы + пени</td>
                  <td className="px-4 py-3 border border-gray-200 text-red-600 font-medium">До 200 000 ₽ на компанию</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-500">КоАП 5.27</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-200">Незаконное применение НПД (запрещённый вид деятельности)</td>
                  <td className="px-4 py-3 border border-gray-200 text-orange-600 font-medium">Доначисление налогов + 20%</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-400">—</td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-500">ст. 122</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Штраф за чек */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Штраф за невыдачу чека (ст. 129.13 НК РФ)</h2>
          <p className="mb-4">
            Это самый распространённый штраф для самозанятых. Чек нужно выдать{" "}
            <strong>не позднее 9-го числа месяца, следующего за месяцем расчёта</strong>{" "}
            (если заказчик — юридическое лицо или ИП), или сразу при получении наличных (если физлицо).
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mb-5">
            <h3 className="font-semibold text-orange-800 mb-3">Размер штрафа по ст. 129.13 НК РФ:</h3>
            <ul className="space-y-2 text-orange-900">
              <li>
                <strong>Первое нарушение:</strong> 20% от суммы расчёта, на которую не сформирован чек
                (минимум 200 ₽)
              </li>
              <li>
                <strong>Повторное нарушение</strong> в течение 6 месяцев: 100% суммы расчёта
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mb-3">Примеры расчёта:</h3>
          <div className="space-y-3 mb-5">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-700">Пример 1. Дизайнер не пробил чек на 15 000 ₽</p>
              <p className="text-gray-600 text-sm mt-1">
                Штраф (первое нарушение): 15 000 × 20% = <strong className="text-orange-600">3 000 ₽</strong>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-700">
                Пример 2. Тот же дизайнер повторно не выдал чек на 8 000 ₽ через 3 месяца
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Штраф (повторное нарушение): 8 000 × 100% = <strong className="text-red-600">8 000 ₽</strong>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-700">
                Пример 3. Мелкая услуга на 500 ₽ — чек не выдан
              </p>
              <p className="text-gray-600 text-sm mt-1">
                500 × 20% = 100 ₽ → применяется <strong>минимальный штраф 200 ₽</strong>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Как ФНС находит нарушителей:</strong> контрольные закупки (инспектор платит за
              услугу и проверяет чек), жалобы заказчиков через «Мой налог», сравнение переводов на
              карту с задекларированными доходами.
            </p>
          </div>
        </section>

        {/* Скрытие доходов */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Штраф за скрытие дохода (ст. 122 НК РФ)</h2>
          <p className="mb-4">
            Если самозанятый не фиксирует часть доходов в приложении «Мой налог», налоговая вправе
            доначислить налог за весь незадекларированный период и применить штраф.
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-5 text-gray-700">
            <li>
              <strong>Неумышленное занижение:</strong> 20% от суммы неуплаченного налога + сам налог +
              пени (1/300 ставки ЦБ за каждый день просрочки)
            </li>
            <li>
              <strong>Умышленное уклонение:</strong> 40% от суммы неуплаченного налога
            </li>
          </ul>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-medium text-gray-700">
              Пример: фрилансер скрыл 200 000 ₽ дохода от физлица (НПД 4%)
            </p>
            <div className="text-sm text-gray-600 mt-2 space-y-1">
              <p>Неуплаченный налог: 200 000 × 4% = 8 000 ₽</p>
              <p>Штраф 20%: 8 000 × 20% = 1 600 ₽</p>
              <p>Итого к уплате (без пеней): <strong className="text-orange-600">9 600 ₽</strong></p>
            </div>
          </div>
        </section>

        {/* Превышение лимита */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            3. Превышение лимита 2,4 млн ₽: что грозит
          </h2>
          <p className="mb-4">
            Лимит дохода на НПД — <strong>2 400 000 ₽ в календарном году</strong>. При превышении статус
            самозанятого прекращается автоматически. Дальнейшие доходы облагаются как у физического лица.
          </p>

          <div className="space-y-3 mb-5">
            <div className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-medium">Автоматическая потеря статуса НПД</p>
                <p className="text-gray-600 text-sm">Происходит в день превышения лимита. Уведомление приходит в «Мой налог».</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-medium">НДФЛ 13% с превышающей суммы</p>
                <p className="text-gray-600 text-sm">
                  Если не зарегистрировать ИП в течение 20 дней — ФНС доначислит НДФЛ на весь доход
                  после превышения.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-red-100 text-red-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-medium">Штраф 20% по ст. 122 НК РФ</p>
                <p className="text-gray-600 text-sm">
                  За неуплату НДФЛ с суммы превышения + пени за каждый день просрочки.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm">
              <strong>Как защититься:</strong> следите за накопленным доходом в «Мой налог» (раздел
              «Доходы» → «С начала года»). При приближении к 2,4 млн заблаговременно зарегистрируйте
              ИП на УСН — переход займёт 1–3 рабочих дня.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Подробнее о действиях при превышении лимита →{" "}
            <Link href="/guide/samozanyatyj-prevysil-limit" className="text-blue-600 hover:underline">
              Самозанятый превысил 2,4 млн: пошаговый план
            </Link>
          </p>
        </section>

        {/* Подмена трудовых */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            4. Штрафы за подмену трудовых отношений (для заказчика)
          </h2>
          <p className="mb-4">
            Этот штраф грозит не самозанятому, а компании-заказчику — если ФНС или трудовая инспекция
            признают, что отношения с самозанятым фактически являются трудовыми. В 2026 году число
            проверок по этому основанию выросло.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-5">
            <h3 className="font-semibold text-red-800 mb-2">Последствия для компании:</h3>
            <ul className="space-y-2 text-red-900 text-sm">
              <li>• Доначисление НДФЛ (13%) и страховых взносов (~30%) за весь период</li>
              <li>• Пени за каждый день просрочки уплаты</li>
              <li>• Штраф по ст. 5.27 КоАП: до <strong>200 000 ₽</strong> на организацию</li>
              <li>• При повторном нарушении — дисквалификация руководителя на 1–3 года</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-3">
            <strong>Признаки, по которым ФНС переквалифицирует договор:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mb-4">
            <li>Самозанятый работает только с одним заказчиком более 2 лет</li>
            <li>Доход от одного заказчика составляет 90%+ всех поступлений</li>
            <li>Фиксированные ежемесячные выплаты в одинаковой сумме</li>
            <li>Самозанятый использует оборудование и программное обеспечение заказчика</li>
            <li>Регулярные рабочие часы, отчёты, выполнение внутренних регламентов</li>
          </ul>
        </section>

        {/* Незаконные виды деятельности */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            5. Запрещённые виды деятельности на НПД
          </h2>
          <p className="mb-4">
            Некоторые виды деятельности несовместимы с режимом НПД. Если ФНС обнаружит, что
            самозанятый занимается запрещённым видом деятельности — статус аннулируется задним числом,
            налоги пересчитываются по общей системе.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-700 mb-2 text-sm">❌ Запрещено на НПД</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Перепродажа товаров (не своё производство)</li>
                <li>• Агентские договоры в интересах третьих лиц</li>
                <li>• Добыча и продажа полезных ископаемых</li>
                <li>• Деятельность нотариуса, адвоката, медиатора</li>
                <li>• Доставка с использованием чужих ККТ</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-700 mb-2 text-sm">✅ Разрешено на НПД</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Разработка ПО, дизайн, копирайтинг</li>
                <li>• Консультации, репетиторство</li>
                <li>• Ремонт и строительство</li>
                <li>• Продажа товаров собственного производства</li>
                <li>• Аренда жилья (не нежилого помещения)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Как избежать */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Как самозанятому избежать штрафов: 5 простых правил
          </h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-medium">Формируйте чек сразу при получении оплаты</p>
                <p className="text-gray-600 text-sm">
                  Наличные — сразу, безналичные от физлица — не позднее 9-го числа следующего месяца,
                  от юрлица/ИП — до 9-го числа следующего месяца.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-medium">Фиксируйте 100% дохода — включая мелкие оплаты</p>
                <p className="text-gray-600 text-sm">
                  Переводы на карту от друзей за услуги тоже должны отражаться в «Мой налог».
                  Банковский перевод — не анонимная операция.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-medium">Следите за приближением к лимиту 2,4 млн ₽</p>
                <p className="text-gray-600 text-sm">
                  При доходе от 2 млн — готовьтесь к регистрации ИП на УСН. Это занимает
                  1–3 дня через Госуслуги.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
              <div>
                <p className="font-medium">Не выполняйте признаки «скрытого сотрудника»</p>
                <p className="text-gray-600 text-sm">
                  Работайте с несколькими заказчиками, не выполняйте внутренние регламенты компаний,
                  не используйте оборудование заказчика на постоянной основе.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
              <div>
                <p className="font-medium">Включите уведомления в «Мой налог»</p>
                <p className="text-gray-600 text-sm">
                  ФНС присылает напоминания о начисленных налогах и требования. Своевременное
                  реагирование сокращает штрафы или позволяет подать возражение.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-2">Рассчитайте свои налоги как самозанятый</h2>
          <p className="text-gray-700 text-sm mb-4">
            Наш калькулятор покажет точную сумму НПД с учётом вычета 10 000 ₽, комиссии биржи и
            расходов — чтобы не было неприятных сюрпризов от налоговой.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
          >
            Открыть калькулятор →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-5">
            {faqJsonLd.mainEntity.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg">
                <summary className="px-5 py-4 font-medium cursor-pointer hover:bg-gray-50 rounded-lg">
                  {item.name}
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-xl font-semibold mb-4">Читайте также</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/guide/nalog-samozanyatyj"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Налог самозанятого: НПД 4% и 6%</p>
              <p className="text-gray-500 text-xs mt-1">Как рассчитать и когда платить</p>
            </Link>
            <Link
              href="/guide/samozanyatyj-prevysil-limit"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Самозанятый превысил 2,4 млн ₽</p>
              <p className="text-gray-500 text-xs mt-1">Пошаговый план действий</p>
            </Link>
            <Link
              href="/guide/nalogovyj-vychet-samozanyatogo-2026"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">Налоговый вычет 10 000 ₽</p>
              <p className="text-gray-500 text-xs mt-1">Как экономить на первых заказах</p>
            </Link>
            <Link
              href="/guide/ip-vs-samozanyatyj"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-800 text-sm">ИП или самозанятый: что выбрать</p>
              <p className="text-gray-500 text-xs mt-1">Сравнение налогов, взносов и рисков</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
