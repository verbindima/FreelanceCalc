import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "kredit-dlya-samozanyatogo-2026";

export const metadata: Metadata = {
  title: "Кредит для самозанятого 2026: какие банки дают и как подтвердить доход",
  description:
    "Какие банки дают кредит самозанятым в 2026 году, какие документы нужны и как подтвердить доход через «Мой налог». Сбер, Т-Банк, ВТБ, Альфа-Банк — условия и ставки.",
  keywords: [
    "кредит для самозанятого",
    "кредит самозанятому 2026",
    "дают ли кредит самозанятым",
    "самозанятый кредит наличными",
    "банки для самозанятых кредит",
    "как получить кредит самозанятому",
    "самозанятый потребительский кредит",
    "самозанятый документы для кредита",
    "справка о доходах самозанятого для банка",
    "кредит НПД 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Кредит для самозанятого 2026: какие банки дают и как одобрить",
    description:
      "Сбер, Т-Банк, ВТБ, Альфа-Банк дают кредиты самозанятым. Главное — справка из «Мой налог» и стабильные чеки за 12 месяцев.",
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
      headline:
        "Кредит для самозанятого 2026: какие банки дают, какие документы нужны",
      description:
        "Обзор банков, которые дают кредит самозанятым в 2026 году: условия, документы, как подтвердить доход через справку из Мой налог.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/${SLUG}`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/stati/${SLUG}` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Кредит для самозанятого 2026",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Дают ли банки кредит самозанятым?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Большинство крупных банков — Сбер, Т-Банк, ВТБ, Альфа-Банк, Совкомбанк — официально кредитуют самозанятых. Главное условие — подтвердить доход через справку из приложения «Мой налог» (форма КНД 1122036) за 12 месяцев.",
          },
        },
        {
          "@type": "Question",
          name: "Какие документы нужны для кредита самозанятому?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Паспорт, СНИЛС и справка о доходах из «Мой налог» (КНД 1122036). Некоторые банки также запрашивают выписку по банковскому счёту за 6–12 месяцев и свидетельство о постановке на учёт как плательщика НПД.",
          },
        },
        {
          "@type": "Question",
          name: "Как самозанятому получить справку о доходах для банка?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В приложении «Мой налог» зайдите в раздел «Прочее» → «Справки» → «Справка о состоянии расчётов». Это форма КНД 1122036 — официальный документ ФНС, который принимают все банки. Также справку можно получить на сайте lknpd.nalog.ru.",
          },
        },
        {
          "@type": "Question",
          name: "Почему банк отказал самозанятому в кредите?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Основные причины отказа: нерегулярный доход (пробелы в чеках больше 2–3 месяцев), небольшой срок работы как самозанятого (менее 6–12 месяцев), низкий доход относительно запрашиваемой суммы, плохая кредитная история или высокая долговая нагрузка.",
          },
        },
        {
          "@type": "Question",
          name: "Самозанятому лучше брать кредит в своём банке?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, это выгоднее. Банк, в котором у вас открыт расчётный счёт и куда поступают платежи от клиентов, видит реальные обороты — и одобряет кредит с меньшим пакетом документов. Т-Банк, Сбер и Альфа-Банк предлагают сниженные ставки для зарплатных клиентов.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              {" → "}
              <Link href="/stati" className="hover:text-blue-600">Статьи</Link>
              {" → "}
              <span>Кредит для самозанятого</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Кредит для самозанятого 2026: какие банки дают и как подтвердить доход
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Самозанятые могут получить потребительский кредит в большинстве крупных банков. Главная задача — правильно подтвердить доход. Разбираем условия, документы и главные ошибки.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
              <span>📅 Обновлено: март 2026</span>
              <span>⏱ 8 минут чтения</span>
              <span>👤 12,7 млн самозанятых в России</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 py-10">

          {/* Quick Answer */}
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg mb-8">
            <p className="font-semibold text-green-800 mb-2">Коротко: да, дают</p>
            <p className="text-green-700 text-sm">
              Сбер, Т-Банк, ВТБ, Альфа-Банк и Совкомбанк официально кредитуют самозанятых.
              Нужны паспорт + справка из «Мой налог» за 12 месяцев. Ставки — от 11,9% до 22% годовых
              в зависимости от банка и суммы.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Дают ли банки кредит самозанятым?</h2>
          <p className="text-gray-700 mb-4">
            До 2021 года большинство банков не знало, как работать с самозанятыми: статус новый,
            подтверждение дохода непривычное, 2-НДФЛ нет. Сейчас ситуация изменилась — рынок
            плательщиков НПД вырос до 12,7 млн человек, и банки активно адаптируют продукты.
          </p>
          <p className="text-gray-700 mb-4">
            Ключевое отличие от наёмного работника:{" "}
            <strong>вместо справки 2-НДФЛ самозанятый предоставляет форму КНД 1122036</strong> —
            «Справку о состоянии расчётов (доходах) по налогу на профессиональный доход». Она
            формируется в приложении «Мой налог» или на портале <em>lknpd.nalog.ru</em> в один клик
            и имеет юридическую силу официального документа ФНС.
          </p>
          <p className="text-gray-700 mb-6">
            Важно: банк смотрит на{" "}
            <strong>регулярность дохода, а не только на общую сумму</strong>. Самозанятый с доходом
            80 000 ₽/мес стабильно 12 месяцев подряд получит кредит легче, чем тот, кто заработал
            500 000 ₽ за два месяца и полгода «простаивал».
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Какие банки дают кредит самозанятым: таблица условий</h2>
          <p className="text-gray-700 mb-4">
            Актуальные данные по ведущим банкам на март 2026 года. Ставки могут меняться — уточняйте
            на сайтах банков.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Банк</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Сумма</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Ставка от</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Срок до</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Условия для самозанятых</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Сбербанк</td>
                  <td className="p-3 border border-gray-200">до 5 млн ₽</td>
                  <td className="p-3 border border-gray-200 text-green-700 font-semibold">11,9% / год</td>
                  <td className="p-3 border border-gray-200">5 лет</td>
                  <td className="p-3 border border-gray-200">Справка КНД 1122036 за 12 мес., стаж самозанятости от 12 мес.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Т-Банк</td>
                  <td className="p-3 border border-gray-200">до 3 млн ₽</td>
                  <td className="p-3 border border-gray-200 text-green-700 font-semibold">12% / год</td>
                  <td className="p-3 border border-gray-200">3 года</td>
                  <td className="p-3 border border-gray-200">Стаж от 6 мес., доход от 30 000 ₽/мес. Онлайн без визита.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">ВТБ</td>
                  <td className="p-3 border border-gray-200">до 7 млн ₽</td>
                  <td className="p-3 border border-gray-200 text-green-700 font-semibold">12,5% / год</td>
                  <td className="p-3 border border-gray-200">7 лет</td>
                  <td className="p-3 border border-gray-200">Справка КНД 1122036 или выписка по счёту за 6 мес.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Альфа-Банк</td>
                  <td className="p-3 border border-gray-200">до 5 млн ₽</td>
                  <td className="p-3 border border-gray-200 text-green-700 font-semibold">14% / год</td>
                  <td className="p-3 border border-gray-200">5 лет</td>
                  <td className="p-3 border border-gray-200">Стаж от 6 мес., доход от 25 000 ₽/мес. Нужен СНИЛС.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Совкомбанк</td>
                  <td className="p-3 border border-gray-200">до 5 млн ₽</td>
                  <td className="p-3 border border-gray-200">15% / год</td>
                  <td className="p-3 border border-gray-200">5 лет</td>
                  <td className="p-3 border border-gray-200">Лояльнее к коротким историям, рассматривают от 3 мес. стажа.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Газпромбанк</td>
                  <td className="p-3 border border-gray-200">до 7 млн ₽</td>
                  <td className="p-3 border border-gray-200">13% / год</td>
                  <td className="p-3 border border-gray-200">7 лет</td>
                  <td className="p-3 border border-gray-200">Стаж от 12 мес., доход от 50 000 ₽/мес. Двойная ставка без залога.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-sm text-yellow-800">
            <strong>⚠️ Важно:</strong> ставки указаны как минимальные — для клиентов с хорошей
            кредитной историей. Реальная ставка рассчитывается индивидуально. Уточняйте условия
            на официальных сайтах банков.
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Как подтвердить доход: пошаговая инструкция</h2>
          <p className="text-gray-700 mb-4">
            Банк принимает один из двух форматов подтверждения дохода самозанятого:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Справка КНД 1122036 через «Мой налог»</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-4">
            <li>Откройте приложение «Мой налог»</li>
            <li>Перейдите в раздел <strong>«Прочее»</strong> (нижний правый угол)</li>
            <li>Нажмите <strong>«Справки»</strong> → <strong>«Справка о состоянии расчётов»</strong></li>
            <li>Выберите период — обычно за последние 12 месяцев</li>
            <li>Нажмите «Получить справку» — она сформируется мгновенно</li>
            <li>Скачайте PDF с электронной подписью ФНС</li>
          </ol>
          <p className="text-gray-600 text-sm mb-4">
            Альтернативно: зайдите на <strong>lknpd.nalog.ru</strong> → «Настройки» →
            «Справка о постановке на учёт» или «Справка о доходах».
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Выписка по счёту</h3>
          <p className="text-gray-700 mb-4">
            Многие банки принимают выписку по расчётному счёту, на который поступают платежи от
            клиентов. Нужно, чтобы в описании транзакций было видно: это оплата услуг, а не
            переводы от родственников.{" "}
            <strong>Важно: самозанятому необязательно открывать расчётный счёт</strong> — можно
            работать через личный счёт, но многие банки тогда запрашивают дополнительные
            подтверждения.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
            <p className="font-semibold text-blue-800 mb-2">💡 Совет: работайте через счёт в банке, где берёте кредит</p>
            <p className="text-blue-700 text-sm">
              Если вы ведёте расчёты через Т-Банк или Сбер — именно в этих банках вам проще
              получить кредит. Банк видит реальные обороты без дополнительных справок и нередко
              сам предлагает выгодные условия.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Полный список документов для кредита</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">📋 Обязательные</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✓ Паспорт гражданина РФ</li>
                <li>✓ СНИЛС</li>
                <li>✓ Справка КНД 1122036 из «Мой налог»</li>
                <li>✓ Заявление-анкета банка</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">📋 Дополнительные (по запросу)</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>○ Выписка по счёту за 6–12 мес.</li>
                <li>○ Свидетельство о постановке на учёт НПД</li>
                <li>○ ИНН</li>
                <li>○ Документы на залог (если крупная сумма)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Почему банки отказывают и как это исправить</h2>

          <div className="space-y-4 mb-8">
            <div className="border border-red-100 rounded-lg p-4">
              <h3 className="font-semibold text-red-700 mb-1">❌ Нерегулярный доход</h3>
              <p className="text-gray-700 text-sm mb-2">
                Пробелы в чеках по 2–3 месяца = сигнал нестабильности. Банк не уверен, что
                следующий платёж по кредиту придёт вовремя.
              </p>
              <p className="text-green-700 text-sm font-medium">
                ✓ Решение: пробивайте чеки регулярно, даже на небольшие суммы. Если клиент платит
                раз в квартал — оформляйте аванс/предоплату отдельным чеком.
              </p>
            </div>

            <div className="border border-red-100 rounded-lg p-4">
              <h3 className="font-semibold text-red-700 mb-1">❌ Малый срок самозанятости</h3>
              <p className="text-gray-700 text-sm mb-2">
                Большинство банков требуют от 6 до 12 месяцев непрерывной работы как самозанятого.
                Если зарегистрировались недавно — вероятен отказ.
              </p>
              <p className="text-green-700 text-sm font-medium">
                ✓ Решение: подождите 6–12 месяцев или попробуйте Совкомбанк (лояльнее к новым
                самозанятым) или кредит под залог.
              </p>
            </div>

            <div className="border border-red-100 rounded-lg p-4">
              <h3 className="font-semibold text-red-700 mb-1">❌ Высокая долговая нагрузка (ПДН)</h3>
              <p className="text-gray-700 text-sm mb-2">
                Если действующие кредиты уже «съедают» более 50% дохода — ЦБ обязывает банки
                применять повышенные коэффициенты риска. Часто это означает отказ.
              </p>
              <p className="text-green-700 text-sm font-medium">
                ✓ Решение: погасите мелкие кредиты и закройте кредитные карты, которыми не
                пользуетесь — они тоже учитываются в ПДН.
              </p>
            </div>

            <div className="border border-red-100 rounded-lg p-4">
              <h3 className="font-semibold text-red-700 mb-1">❌ Плохая кредитная история</h3>
              <p className="text-gray-700 text-sm mb-2">
                Просрочки в прошлом — главная причина отказа. Банки проверяют БКИ независимо от
                статуса самозанятого.
              </p>
              <p className="text-green-700 text-sm font-medium">
                ✓ Решение: проверьте свою КИ на сайте ЦБ (бесплатно 2 раза в год), закройте
                старые долги, откройте кредитную карту с небольшим лимитом и погашайте в срок.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Самозанятый vs ИП: кому проще получить кредит?</h2>
          <p className="text-gray-700 mb-4">
            ИП с налоговой декларацией (УСН, ОСНО) формально кажется банкам «понятнее», но
            на практике разница небольшая:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Самозанятый</strong> — справка КНД 1122036 моментально, без бухгалтера.
              Банки хорошо знают этот документ.
            </li>
            <li>
              <strong>ИП на УСН</strong> — нужна налоговая декларация за год + КУДиР. Справка
              формируется дольше, иногда нужен бухгалтер.
            </li>
            <li>
              <strong>Вывод:</strong> при прочих равных самозанятый с годовым доходом 1,5–2 млн ₽
              получит кредит на сопоставимых условиях с ИП на УСН.
            </li>
          </ul>
          <p className="text-gray-700 mb-6">
            Подробнее о разнице статусов:{" "}
            <Link
              href="/stati/samozanyatyj-vs-ip-frilancer"
              className="text-blue-600 hover:underline"
            >
              Самозанятый vs ИП: что выгоднее фрилансеру
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ипотека и крупные кредиты</h2>
          <p className="text-gray-700 mb-4">
            Потребительский кредит до 1–2 млн ₽ — самый доступный продукт для самозанятых. Для
            ипотеки требования строже: нужен стаж от 12–24 месяцев и более высокий доход. Если
            вы думаете о жилищном кредите — читайте отдельный разбор:
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-8">
            <Link
              href="/stati/samozanyatyj-ipoteka-2026"
              className="text-indigo-700 font-semibold hover:underline"
            >
              → Ипотека для самозанятых 2026: какие банки дают и как не получить отказ
            </Link>
            <p className="text-indigo-600 text-sm mt-1">
              Обзор Сбера, ВТБ и Т-Банка, чек-лист документов, минимальный доход
            </p>
          </div>

          {/* Calculator CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white mb-10">
            <h2 className="text-xl font-bold mb-2">Знаете ли вы свою реальную ставку?</h2>
            <p className="text-blue-100 mb-4 text-sm">
              Чтобы банк одобрил кредит — нужна стабильная ставка и предсказуемый доход.
              Калькулятор помогает правильно рассчитать, сколько брать за час работы с учётом
              налогов, отпуска и простоев.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Рассчитать ставку фрилансера →
            </Link>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Частые вопросы</h2>

          <div className="space-y-4 mb-10">
            {[
              {
                q: "Дают ли банки кредит самозанятым?",
                a: "Да. Сбер, Т-Банк, ВТБ, Альфа-Банк, Совкомбанк официально работают с самозанятыми. Нужны паспорт, СНИЛС и справка КНД 1122036 из «Мой налог».",
              },
              {
                q: "Как самозанятому получить справку о доходах для банка?",
                a: "В приложении «Мой налог»: Прочее → Справки → «Справка о состоянии расчётов». Формируется мгновенно, имеет подпись ФНС — банки принимают без вопросов.",
              },
              {
                q: "Какой минимальный доход нужен для кредита?",
                a: "Зависит от банка и суммы. Т-Банк одобряет от 30 000 ₽/мес., Альфа-Банк — от 25 000 ₽/мес. Сбер и ВТБ ориентируются на соотношение платёж/доход не более 50%.",
              },
              {
                q: "Могу ли я получить кредит, если только что стал самозанятым?",
                a: "Сложно. Большинство банков требуют 6–12 месяцев стажа. Исключение — Совкомбанк, который рассматривает от 3 месяцев. Также можно привлечь поручителя.",
              },
              {
                q: "Считается ли совмещение работы по найму и самозанятости при оценке дохода?",
                a: "Да, и это плюс. Если у вас есть трудовой договор + самозанятость, банк суммирует оба источника дохода. Справка 2-НДФЛ от работодателя + КНД 1122036 = более высокая оценка.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="border border-gray-200 rounded-lg group">
                <summary className="p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                  {q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-700 text-sm">{a}</div>
              </details>
            ))}
          </div>

          {/* Related articles */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Читайте также</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                href: "/stati/samozanyatyj-ipoteka-2026",
                title: "Ипотека для самозанятых 2026",
                desc: "Какие банки дают, минимальный доход, чек-лист",
              },
              {
                href: "/stati/samozanyatyj-vs-ip-frilancer",
                title: "Самозанятый vs ИП: что выгоднее",
                desc: "Сравнение налогов, ограничений и оформления",
              },
              {
                href: "/stati/kak-oformit-samozanyatost-2026",
                title: "Как оформить самозанятость 2026",
                desc: "Пошаговая регистрация за 10 минут",
              },
              {
                href: "/stati/nalogovyj-vychet-samozanyatogo-2026",
                title: "Налоговый вычет самозанятого",
                desc: "10 000 ₽ при регистрации — как работает",
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >
                <div className="font-semibold text-gray-900 group-hover:text-blue-700 mb-1 text-sm">
                  {title}
                </div>
                <div className="text-gray-500 text-xs">{desc}</div>
              </Link>
            ))}
          </div>

          {/* Meta info */}
          <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
            <p>
              <strong>Материал подготовлен командой FreelanceCalc</strong> на основе условий банков
              на март 2026 года. Условия кредитования могут меняться — уточняйте актуальные ставки
              на официальных сайтах банков. Статья не является финансовой консультацией.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
