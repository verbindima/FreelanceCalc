import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "dogovor-gph-nalogi-frilansera-2026";

export const metadata: Metadata = {
  title: "Договор ГПХ для фрилансера: налоги и риски 2026",
  description:
    "Кто платит налоги по договору ГПХ, как рассчитать НДФЛ 13%, чем ГПХ отличается от самозанятости и ИП. Калькулятор ставки с учётом налогов договора ГПХ.",
  keywords: [
    "договор ГПХ налог фрилансер",
    "договор ГПХ 2026",
    "ГПХ налоги фрилансер",
    "договор гражданско-правового характера налоги",
    "ГПХ vs самозанятый",
    "НДФЛ договор ГПХ фрилансер",
    "налог договор подряда фрилансер",
    "ставка фрилансера ГПХ",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Договор ГПХ для фрилансера: налоги, расчёт и риски 2026",
    description:
      "Кто платит НДФЛ по ГПХ, как рассчитать налог, чем ГПХ хуже самозанятости — и калькулятор ставки с учётом всех удержаний.",
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
      headline: "Договор ГПХ для фрилансера: налоги, риски и как правильно работать в 2026",
      description:
        "Кто платит налоги по договору ГПХ, как рассчитать НДФЛ 13%, чем ГПХ отличается от самозанятости и ИП.",
      author: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stati/${SLUG}`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Договор ГПХ для фрилансера: налоги 2026",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/${SLUG}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Кто платит налоги по договору ГПХ — фрилансер или заказчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Если заказчик — юридическое лицо или ИП, то он выступает налоговым агентом и сам удерживает НДФЛ 13% из вашего вознаграждения. Если заказчик — физическое лицо, фрилансер обязан самостоятельно задекларировать и уплатить налог.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько налога удерживается по договору ГПХ в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Стандартная ставка НДФЛ — 13% при годовом доходе до 5 млн руб., 15% на сумму превышения. Дополнительно заказчик платит страховые взносы: 30% в фонды (за счёт заказчика, не вычитаются из вашей суммы). Итог: при договоре на 100 000 ₽ вы получите 87 000 ₽ на руки.",
          },
        },
        {
          "@type": "Question",
          name: "Чем договор ГПХ отличается от самозанятости для фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При самозанятости (НПД): налог 4–6%, нет взносов, лимит 2,4 млн руб/год, оформление через приложение. При ГПХ как физлицо: налог 13% НДФЛ, заказчик платит 30% взносов сверху, нет лимита дохода. Самозанятость выгоднее по налоговой нагрузке, но ГПХ даёт запись в трудовую историю и учёт в пенсионный стаж.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли указывать доход по ГПХ в налоговой декларации?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Если заказчик — организация или ИП, они сами отчитываются в ФНС и выдают вам справку 2-НДФЛ. Декларацию 3-НДФЛ вы подаёте самостоятельно только если работаете с физлицами-заказчиками или хотите получить вычеты.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать ставку по договору ГПХ, чтобы получить нужную сумму на руки?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Разделите желаемую сумму на 0,87 (для ставки 13%). Например, чтобы получить 100 000 ₽ чистыми, выставьте счёт на 114 943 ₽. Калькулятор FreelanceCalc автоматически учитывает любой налоговый режим, включая расчёт gross-суммы для ГПХ.",
          },
        },
      ],
    },
  ],
};

const TABLE_DATA = [
  {
    regime: "ГПХ (физлицо)",
    tax: "НДФЛ 13%",
    contributions: "30% (платит заказчик)",
    limit: "Нет",
    pension: "Да",
    paperwork: "Заказчик (2-НДФЛ)",
  },
  {
    regime: "Самозанятый (НПД)",
    tax: "4% (физлица) / 6% (юрлица)",
    contributions: "Нет",
    limit: "2,4 млн/год",
    pension: "Нет (добровольно)",
    paperwork: "Чек в приложении",
  },
  {
    regime: "ИП УСН 6%",
    tax: "6%",
    contributions: "~50 000 ₽/год",
    limit: "Нет",
    pension: "Да",
    paperwork: "Декларация раз в год",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span>›</span>
          <Link href="/stati" className="hover:text-indigo-600">Статьи</Link>
          <span>›</span>
          <span className="text-slate-600">Договор ГПХ: налоги 2026</span>
        </nav>

        <header className="mb-8">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 text-xs font-medium text-orange-700 mb-3">
            📋 Налоги · Обновлено март 2026
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
            Договор ГПХ для фрилансера: налоги, риски и как правильно работать в 2026
          </h1>
          <p className="mt-3 text-slate-500 text-base leading-relaxed">
            Работаете по договору гражданско-правового характера? Разбираемся, кто платит 13% НДФЛ, зачем заказчик удерживает деньги — и почему самозанятость чаще выгоднее.
          </p>
        </header>

        {/* Quick summary box */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-8 space-y-2">
          <p className="text-sm font-semibold text-indigo-800">Коротко: главное о ГПХ и налогах</p>
          <ul className="text-sm text-indigo-700 space-y-1 list-disc list-inside">
            <li>Заказчик-юрлицо удержит <strong>НДФЛ 13%</strong> сам — вы получите меньше суммы в договоре</li>
            <li>Сверху заказчик заплатит <strong>30% страховых взносов</strong> за свой счёт</li>
            <li>Самозанятость: налог <strong>4–6%</strong> — вдвое-втрое дешевле ГПХ</li>
            <li>ГПХ засчитывается в <strong>пенсионный стаж</strong> и трудовой опыт</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Что такое договор ГПХ</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Договор гражданско-правового характера (ГПХ) — это договор подряда, оказания услуг или авторского заказа между физическим лицом и заказчиком. Он регулируется Гражданским кодексом, а не Трудовым. Фрилансеры часто работают именно по ГПХ: разработчики, дизайнеры, копирайтеры, маркетологи.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ключевые особенности: нет трудовых гарантий (больничный, отпуск, ТК), но есть запись в пенсионный стаж и возможность работать с крупными компаниями, которые не могут платить самозанятым напрямую (если фрилансер был штатным сотрудником той же компании в последние 2 года).
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Кто платит НДФЛ по договору ГПХ</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Всё зависит от типа заказчика:
          </p>
          <div className="space-y-3">
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-slate-800 mb-1">🏢 Заказчик — организация или ИП</p>
              <p className="text-sm text-slate-600">
                Они выступают <strong>налоговым агентом</strong>: удерживают НДФЛ 13% из вашего вознаграждения и перечисляют в бюджет сами. Вы получаете сумму «на руки» уже после вычета налога. Декларацию 3-НДФЛ подавать не нужно — только если хотите получить вычеты.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-slate-800 mb-1">👤 Заказчик — физическое лицо</p>
              <p className="text-sm text-slate-600">
                Физлицо-заказчик <strong>не является налоговым агентом</strong>. Вы обязаны самостоятельно задекларировать доход (декларация 3-НДФЛ до 30 апреля следующего года) и уплатить 13% до 15 июля.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Example calculation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Пример расчёта: сколько получите на руки</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Допустим, вы договорились на <strong>100 000 ₽</strong> по договору ГПХ с компанией.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <div className="divide-y divide-slate-200 text-sm">
              <div className="flex justify-between px-4 py-3">
                <span className="text-slate-600">Сумма в договоре</span>
                <span className="font-semibold text-slate-800">100 000 ₽</span>
              </div>
              <div className="flex justify-between px-4 py-3">
                <span className="text-slate-600">Минус НДФЛ 13%</span>
                <span className="font-semibold text-red-600">− 13 000 ₽</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-emerald-50">
                <span className="text-slate-700 font-medium">Получите на руки</span>
                <span className="font-bold text-emerald-700">87 000 ₽</span>
              </div>
              <div className="flex justify-between px-4 py-3">
                <span className="text-slate-500 text-xs">Страховые взносы (платит заказчик сверху)</span>
                <span className="text-slate-500 text-xs">+ 30 000 ₽ (не из вашей суммы)</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Итого стоимость вас для заказчика: 130 000 ₽. При самозанятости — 106 000 ₽ (налог 6% из 100 000 ₽ вы платите сами). Разница ощутимая.
          </p>
        </section>

        {/* CTA — calculator */}
        <div className="bg-indigo-600 text-white rounded-2xl p-6 mb-8">
          <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wide mb-1">
            Практический инструмент
          </p>
          <h3 className="text-lg font-bold mb-2">
            Рассчитайте, какую сумму указать в договоре ГПХ
          </h3>
          <p className="text-indigo-100 text-sm mb-4">
            Чтобы получить нужную сумму «на руки», ставка в договоре должна быть выше. Калькулятор автоматически закладывает налог в ставку — просто введите желаемый доход.
          </p>
          <Link
            href="/?tax=none"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Открыть калькулятор ставки →
          </Link>
        </div>

        {/* Section 4 — Comparison table */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ГПХ, самозанятость или ИП: что выгоднее</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-xs text-slate-700 min-w-[560px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Режим</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Налог</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Взносы</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Лимит</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Стаж</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TABLE_DATA.map((row) => (
                  <tr key={row.regime} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium">{row.regime}</td>
                    <td className="px-4 py-3">{row.tax}</td>
                    <td className="px-4 py-3">{row.contributions}</td>
                    <td className="px-4 py-3">{row.limit}</td>
                    <td className="px-4 py-3">{row.pension}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 — When GPC makes sense */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Когда ГПХ оправдан для фрилансера</h2>
          <div className="space-y-3">
            {[
              {
                title: "Крупные заказчики, которые не работают с самозанятыми",
                text: "Банки, государственные компании, иностранные юрлица иногда принципиально заключают только ГПХ с физлицами или требуют ИП. В этом случае ГПХ — единственный вариант.",
              },
              {
                title: "Нужен пенсионный стаж",
                text: "С доходов по ГПХ начисляются пенсионные баллы, в отличие от самозанятости (там стаж идёт только при добровольных взносах). Для фрилансеров 35+ это может быть важно.",
              },
              {
                title: "Доход превышает лимит самозанятого",
                text: "Лимит НПД — 2,4 млн руб/год (~200 000 ₽/мес). При более высоком доходе самозанятость придётся сочетать с ГПХ или переходить на ИП.",
              },
              {
                title: "Ограничение по самозанятости (бывший работодатель)",
                text: "Нельзя работать с бывшим работодателем по НПД в течение 2 лет. ГПХ как физлицо — рабочий выход в этой ситуации.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-slate-800 mb-1">✓ {item.title}</p>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — How to negotiate rate */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Как правильно указать сумму в договоре ГПХ</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Ошибка многих фрилансеров: называть заказчику «чистую» сумму и потом удивляться, что получили меньше. Правильный подход — считать «gross» (до налогов) и указывать эту сумму в договоре.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
            <p className="text-sm font-semibold text-amber-800 mb-2">📐 Формула «gross» для договора ГПХ:</p>
            <p className="text-sm text-amber-700 font-mono bg-amber-100 rounded-lg px-3 py-2">
              Сумма в договоре = Желаемый доход на руки ÷ (1 − 0,13)
            </p>
            <p className="text-xs text-amber-600 mt-2">
              Пример: хотите 120 000 ₽ → указывайте 137 931 ₽ в договоре
            </p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Если заказчик говорит «я плачу X, и это уже чистыми» — уточните: будет ли он удерживать НДФЛ или нет. Это разные суммы. Используйте{" "}
            <Link href="/" className="text-indigo-600 hover:underline font-medium">
              калькулятор FreelanceCalc
            </Link>
            , чтобы автоматически рассчитать нужную ставку с учётом налогового режима.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Частые вопросы про ГПХ и налоги</h2>
          <div className="space-y-3">
            {[
              {
                q: "Нужно ли самозанятому заключать договор ГПХ с заказчиком?",
                a: "Нет. Самозанятый работает по договору на оказание услуг, а не по трудовому или гражданско-правовому договору с удержанием НДФЛ. Чек в приложении «Мой налог» — это ваша отчётность. Некоторые заказчики для своей бухгалтерии просят подписать договор услуг — это нормально, главное чтобы в нём не было пункта об удержании НДФЛ.",
              },
              {
                q: "Могу ли я оформить налоговый вычет с дохода по ГПХ?",
                a: "Да. Стандартный профессиональный вычет по ГПХ — 20% от дохода или сумма документально подтверждённых расходов. Для его получения нужно подать декларацию 3-НДФЛ до 30 апреля следующего года.",
              },
              {
                q: "Что грозит, если не заплатить налог с ГПХ с физлицом?",
                a: "Штраф 20–40% от неуплаченной суммы + пени 1/300 ставки ЦБ за каждый день просрочки. ФНС видит ваши поступления от физлиц через банковские данные. Лучше задекларировать самостоятельно.",
              },
              {
                q: "Входит ли ГПХ в трудовую книжку?",
                a: "Нет, в трудовую книжку ГПХ не вносится — это не трудовой договор. Но для пенсионного стажа это не важно: работодатель (заказчик) платит взносы в ПФР, и стаж начисляется.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="w-full text-left px-5 py-4 flex justify-between items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                    <span className="text-sm font-semibold text-slate-800">{item.q}</span>
                    <span className="text-slate-400 text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-8 bg-white border border-slate-200 rounded-2xl p-6">
          <h3 className="font-semibold text-slate-700 text-sm mb-3">📚 Читайте также</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="text-indigo-600 hover:underline">
                Самозанятый vs ИП: что выбрать фрилансеру в 2026 →
              </Link>
            </li>
            <li>
              <Link href="/stati/stavka-samozanyatogo-2026" className="text-indigo-600 hover:underline">
                Ставка самозанятого: как рассчитать с учётом налога НПД →
              </Link>
            </li>
            <li>
              <Link href="/stati/skrytye-rashody-frilansera" className="text-indigo-600 hover:underline">
                Скрытые расходы фрилансера: что забывают при расчёте ставки →
              </Link>
            </li>
            <li>
              <Link href="/stati/kak-raschitat-stavku-frilansera" className="text-indigo-600 hover:underline">
                Как рассчитать ставку фрилансера: пошаговое руководство →
              </Link>
            </li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="bg-slate-800 rounded-2xl p-6 text-white text-center">
          <p className="text-slate-300 text-xs mb-1">Бесплатный инструмент</p>
          <h3 className="text-lg font-bold mb-2">Рассчитайте свою ставку</h3>
          <p className="text-slate-300 text-sm mb-4">
            Введите желаемый доход — калькулятор автоматически учтёт налог и загрузку
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        <footer className="mt-10 text-center text-xs text-slate-400 space-y-1">
          <div>
            <Link href="/stati" className="hover:text-indigo-600">Все статьи</Link>
            &nbsp;·&nbsp;
            <Link href="/" className="hover:text-indigo-600">Калькулятор ставки</Link>
            &nbsp;·&nbsp;
            <Link href="/instrumenty/kalkulator-naloga-samozanyatogo" className="hover:text-indigo-600">Калькулятор НПД</Link>
          </div>
          <div>© {new Date().getFullYear()} FreelanceCalc · Материал носит информационный характер. Проконсультируйтесь с бухгалтером по конкретной ситуации.</div>
        </footer>
      </main>
    </>
  );
}
