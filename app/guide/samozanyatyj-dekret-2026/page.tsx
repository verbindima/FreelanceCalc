import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Декрет для самозанятых в 2026 году: пособия, декретные, что изменилось | FreelanceCalc",
  description:
    "С 2026 года самозанятые могут получать декретные — но только ИП на НПД. Таблица: кто что получит, расчёт взносов, размер выплат. Пошаговая инструкция для ИП-самозанятых.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-dekret-2026` },
  openGraph: {
    title: "Декрет для самозанятых 2026: кто получит и сколько",
    description:
      "ИП на НПД: декретные до 140 дней + пособие по уходу. Чистый НПД: только больничный. Взносы от 1 344 ₽/мес. Полный разбор.",
    url: `${BASE_URL}/guide/samozanyatyj-dekret-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Декрет самозанятого 2026: кто получит декретные и как",
    description:
      "Таблица выплат: НПД-физлицо vs ИП на НПД. Расчёт: стоит ли платить взносы ради декретных.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Может ли самозанятый (НПД) получить декретные выплаты в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Только если самозанятый зарегистрирован как ИП на НПД и заранее (минимум за 6 месяцев до декрета) подключился к добровольному соцстрахованию в СФР. Чистый самозанятый-физлицо без статуса ИП получить декретные через новый механизм не может — добровольное страхование для физлиц НПД покрывает только больничный, но не беременность и роды.",
      },
    },
    {
      "@type": "Question",
      name: "Какие пособия получит самозанятая без статуса ИП в декрете?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятая-физлицо в декрете имеет право на: единое пособие на ребёнка (в зависимости от дохода семьи), материнский капитал (при рождении первого ребёнка с 2020 г. — 631 000 ₽, второго — 833 900 ₽), единовременное пособие при рождении ребёнка (24 604 ₽ в 2026 году). Декретные по беременности и родам (140 дней) без статуса ИП и взносов в СФР — не положены.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли работать самозанятым во время декрета?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, закон не запрещает получать доход как самозанятый во время отпуска по уходу за ребёнком. Но есть нюанс: если одновременно работаете по найму и находитесь в отпуске по уходу, то при получении дохода от самозанятости право на ежемесячное пособие по уходу (до 1,5 лет) может быть пересмотрено — ФСС требует уведомления о выходе на неполный рабочий день.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитывается пособие по беременности для ИП на НПД?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для ИП-самозанятых, подключивших добровольное страхование, пособие по беременности и родам рассчитывается исходя из МРОТ: МРОТ × 24 / 730 × количество дней (140 при обычных родах). В 2026 году при МРОТ 23 500 ₽: 23 500 × 24 / 730 × 140 ≈ 107 800 ₽ за весь декрет.",
      },
    },
    {
      "@type": "Question",
      name: "Стоит ли ИП-самозанятой переходить на НПД ради декрета?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Переход с обычного ИП на НПД перед декретом невыгоден: на УСН или ОСНО ИП может платить взносы с большей базы и получить декретные выше минимума. На ИП-НПД декретные считаются только от МРОТ. Если уже на НПД — добровольное страхование оправдано при планировании беременности: взносы 1 920 ₽ × 12 мес = 23 040 ₽ в год, пособие за декрет ~107 800 ₽ — выгода очевидна.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Декрет для самозанятых в 2026 году: пособия, декретные, что изменилось",
  description:
    "С 2026 года в России появилось добровольное соцстрахование для самозанятых. Разбираем: какие декретные получит чистый НПД, а какие — ИП на НПД, как считаются выплаты и выгодно ли платить взносы.",
  url: `${BASE_URL}/guide/samozanyatyj-dekret-2026`,
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyDekret2026() {
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

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-50 to-pink-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-blue-600">Гайды</Link>
              <span>→</span>
              <span>Декрет для самозанятых</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🆕 Изменения 2026 — добровольное соцстрахование
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Декрет и пособия для самозанятых в 2026 году: кто что получит
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              С 1 января 2026 года самозанятые могут получать декретные — но только при соблюдении ряда условий.
              Разбираем: что получит чистый НПД, что ИП на НПД, как считаются выплаты и стоит ли платить взносы.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">📅 Апрель 2026</span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">👶 Декрет 140 дней ~107 800 ₽</span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">💰 Взносы от 1 344 ₽/мес</span>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

          {/* Что изменилось */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Что изменилось в 2026 году</h2>
            <p className="text-slate-700 mb-4">
              До 2026 года самозанятые не платили взносы в СФР и не имели права ни на больничные,
              ни на декретные выплаты. Беременность = потеря дохода без каких-либо компенсаций от государства.
            </p>
            <p className="text-slate-700 mb-4">
              С <strong>1 января 2026 года</strong> запущен эксперимент по добровольному социальному
              страхованию для самозанятых (Федеральный закон № 537-ФЗ). Участие платное и добровольное.
              Эксперимент действует до <strong>31 декабря 2028 года</strong>.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-amber-900 font-semibold mb-1">⚠️ Важное различие</p>
              <p className="text-amber-800 text-sm">
                Новая программа страхования для чистых НПД (физлиц без статуса ИП) покрывает
                только <strong>больничный</strong>. Декретные выплаты по беременности и родам
                через этот механизм могут получить <strong>только ИП на НПД</strong>.
              </p>
            </div>
          </section>

          {/* Таблица кто что получит */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Таблица: кто какие пособия получит
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-900 border border-slate-200">Пособие</th>
                    <th className="text-center p-3 font-semibold text-slate-900 border border-slate-200">
                      НПД-физлицо<br />
                      <span className="font-normal text-slate-500">(без ИП)</span>
                    </th>
                    <th className="text-center p-3 font-semibold text-slate-900 border border-slate-200">
                      ИП на НПД<br />
                      <span className="font-normal text-slate-500">+ взносы в СФР</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Больничный (болезнь)",
                      npd: "✅ Да (с 2026, взносы в СФР)",
                      ip: "✅ Да (с 2026, взносы в СФР)",
                    },
                    {
                      name: "Декретные по беременности и родам (140 дней)",
                      npd: "❌ Нет",
                      ip: "✅ Да (~107 800 ₽)",
                    },
                    {
                      name: "Пособие по уходу до 1,5 лет",
                      npd: "❌ Нет (от СФР)",
                      ip: "✅ Да (~8 591 ₽/мес)",
                    },
                    {
                      name: "Единовременное пособие при рождении",
                      npd: "✅ Да (24 604 ₽ в 2026)",
                      ip: "✅ Да (24 604 ₽ в 2026)",
                    },
                    {
                      name: "Материнский капитал",
                      npd: "✅ Да",
                      ip: "✅ Да",
                    },
                    {
                      name: "Единое пособие на ребёнка",
                      npd: "✅ Да (зависит от дохода семьи)",
                      ip: "✅ Да (зависит от дохода семьи)",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 border border-slate-200 text-slate-700">{row.name}</td>
                      <td className="p-3 border border-slate-200 text-center">{row.npd}</td>
                      <td className="p-3 border border-slate-200 text-center">{row.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mt-3">
              * ИП на НПД должен подключить добровольное страхование и платить взносы минимум 6 месяцев до выхода в декрет.
            </p>
          </section>

          {/* Пособия которые получит любой самозанятый */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Пособия, которые получит любая самозанятая без ИП
            </h2>
            <p className="text-slate-700 mb-4">
              Даже без добровольного страхования и без статуса ИП самозанятая при рождении ребёнка
              имеет право на ряд выплат:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🎁",
                  title: "Единовременное пособие при рождении",
                  amount: "24 604 ₽",
                  desc: "Выплачивается один раз после рождения ребёнка. Подаётся через Госуслуги, начисляется автоматически с 2023 года.",
                },
                {
                  icon: "👨‍👩‍👧",
                  title: "Материнский капитал",
                  amount: "631 000 / 833 900 ₽",
                  desc: "При рождении первого ребёнка — 631 000 ₽, второго — 833 900 ₽ (2026 год). Можно потратить на жильё, образование, пенсию мамы.",
                },
                {
                  icon: "📊",
                  title: "Единое пособие на ребёнка",
                  amount: "До 1 прожиточного минимума",
                  desc: "Выплачивается до 17 лет при среднедушевом доходе семьи ниже прожиточного минимума. Нужно подать заявление на Госуслугах.",
                },
                {
                  icon: "🏥",
                  title: "Пособие за постановку на учёт до 12 недель",
                  amount: "~800 ₽",
                  desc: "Небольшое, но доступно всем. Выплачивается через работодателя или СФР напрямую при отсутствии занятости.",
                },
              ].map(({ icon, title, amount, desc }) => (
                <div key={title} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="font-semibold text-slate-900 mb-1">{title}</div>
                  <div className="text-blue-700 font-bold text-lg mb-2">{amount}</div>
                  <div className="text-slate-600 text-sm">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Расчёт для ИП на НПД */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Расчёт декретных для ИП на НПД в 2026 году
            </h2>
            <p className="text-slate-700 mb-4">
              Если вы зарегистрированы как ИП с режимом НПД и подключили добровольное страхование,
              декретные рассчитываются исходя из <strong>МРОТ</strong> — 23 500 ₽ в 2026 году.
            </p>

            {/* Расчёт пособия по БиР */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">📋 Пособие по беременности и родам (140 дней)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-700">МРОТ 2026</span>
                  <span className="font-semibold">23 500 ₽/мес</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Среднедневной заработок</span>
                  <span className="font-semibold">23 500 × 24 / 730 = 771,37 ₽/день</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Дней декрета (обычные роды)</span>
                  <span className="font-semibold">140 дней</span>
                </div>
                <div className="border-t border-blue-200 pt-2 flex justify-between">
                  <span className="text-slate-900 font-semibold">Итого пособие</span>
                  <span className="text-blue-700 font-bold text-lg">107 992 ₽</span>
                </div>
              </div>
            </div>

            {/* Расчёт пособия по уходу */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-green-900 mb-3">🍼 Пособие по уходу за ребёнком до 1,5 лет</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-700">Размер: 40% от МРОТ</span>
                  <span className="font-semibold">23 500 × 40% = 9 400 ₽/мес</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Минимальный размер в 2026</span>
                  <span className="font-semibold">~8 591 ₽/мес</span>
                </div>
                <div className="border-t border-green-200 pt-2 flex justify-between">
                  <span className="text-slate-900 font-semibold">За 18 месяцев</span>
                  <span className="text-green-700 font-bold text-lg">~154 638 ₽</span>
                </div>
              </div>
            </div>

            {/* Стоимость страхования vs выплаты */}
            <div className="bg-slate-900 text-white rounded-xl p-5">
              <h3 className="font-semibold mb-3">💡 Выгодно ли? Взносы vs выплаты</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Взносы за 6 мес (минимум)</span>
                  <span>1 920 ₽ × 6 = 11 520 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Взносы за 12 мес (1 год)</span>
                  <span>1 920 ₽ × 12 = 23 040 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Пособие по БиР (140 дней)</span>
                  <span className="text-green-400 font-bold">+107 992 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Пособие по уходу (18 мес)</span>
                  <span className="text-green-400 font-bold">+~154 638 ₽</span>
                </div>
                <div className="border-t border-slate-700 pt-2 flex justify-between">
                  <span className="font-semibold">Чистая выгода</span>
                  <span className="text-green-400 font-bold text-lg">~239 000 ₽</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-3">
                * При условии подключения за 6+ месяцев до декрета и продолжении уплаты взносов.
              </p>
            </div>
          </section>

          {/* Инструкция для ИП-самозанятых */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Как ИП на НПД подключить декретное страхование: пошагово
            </h2>
            <p className="text-slate-700 mb-6">
              Подключиться нужно <strong>заранее</strong> — минимум за 6 месяцев до предполагаемого декрета.
              Срок подачи заявления — до 30 сентября 2027 года.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Проверьте статус ИП",
                  desc: "Добровольное страхование для декрета доступно только при наличии статуса ИП с режимом НПД. Чистое НПД-физлицо (без ИП) декретные через СФР не получит. Если нет ИП — зарегистрируйте через Госуслуги (бесплатно, 3 рабочих дня).",
                  link: "/guide/kak-otkryt-ip-frilanseru-2026",
                  linkText: "Как открыть ИП фрилансеру →",
                },
                {
                  step: "2",
                  title: "Подайте заявление в СФР",
                  desc: "Подать заявление можно через: личный кабинет на сайте СФР (sfr.gov.ru), портал Госуслуги, МФЦ лично. В заявлении выберите страховую сумму: 35 000 ₽ (взнос 1 344 ₽/мес) или 50 000 ₽ (взнос 1 920 ₽/мес). Для декрета рекомендуется максимальная сумма.",
                },
                {
                  step: "3",
                  title: "Платите взносы каждый месяц",
                  desc: "Взносы платятся ежемесячно через личный кабинет СФР, Госуслуги или банк по реквизитам СФР. Пропуск платежа = остановка страхования. Если пропустите — придётся заново ждать 6 месяцев.",
                },
                {
                  step: "4",
                  title: "Встаньте на учёт в женской консультации",
                  desc: "При наступлении беременности встаньте на учёт в женской консультации до 12 недель. Врач выдаст больничный лист (листок нетрудоспособности) — основание для начисления декретных.",
                },
                {
                  step: "5",
                  title: "Подайте заявление на пособие",
                  desc: "Подайте заявление на выплату пособия по беременности и родам через Госуслуги или СФР. Пособие перечислят в течение 10 рабочих дней после подачи. По окончании декрета — подайте заявление на пособие по уходу до 1,5 лет.",
                },
              ].map(({ step, title, desc, link, linkText }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 mb-1">{title}</div>
                    <p className="text-slate-700 text-sm">{desc}</p>
                    {link && (
                      <Link href={link} className="text-blue-600 hover:underline text-sm mt-1 inline-block">
                        {linkText}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Можно ли работать самозанятым в декрете */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Можно ли работать самозанятым во время декрета?
            </h2>
            <p className="text-slate-700 mb-4">
              <strong>Да, закон не запрещает.</strong> Самозанятость и декрет — совместимые статусы.
              Самозанятая, получая пособие по уходу за ребёнком, может продолжать принимать заказы
              и получать доход через «Мой налог».
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-4">
              <h3 className="font-semibold text-slate-900 mb-3">Важные нюансы при совмещении:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Самозанятость как физлицо (НПД) + декрет — <strong>совместимы без ограничений</strong>. Никакого уведомления СФР не нужно.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">⚠</span>
                  <span>Если вы работаете <strong>по трудовому договору</strong> и находитесь в отпуске по уходу — при получении дохода от подработки уведомите работодателя об оформлении неполного рабочего дня, иначе ФСС может потребовать вернуть выплаченные пособия.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Лимит дохода НПД (2,4 млн ₽/год) в декрете не меняется — он действует в обычном режиме.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Статус самозанятого можно не закрывать на весь период декрета — можно просто не выставлять чеки в «Мой налог» в периоды, когда нет дохода.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Если нет ИП: что делать */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Вы самозанятый-физлицо без ИП: стоит ли регистрировать ИП ради декрета?
            </h2>
            <p className="text-slate-700 mb-4">
              Открыть ИП с режимом НПД — бесплатно и быстро (3 рабочих дня через Госуслуги).
              Это не меняет налоговую нагрузку: налог остаётся 4-6% от дохода.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="font-semibold text-green-900 mb-2">✅ Когда стоит открыть ИП</div>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Планируете беременность в ближайшие 1–2 года</li>
                  <li>• Хотите получить ~262 630 ₽ суммарных выплат (БиР + уход до 1,5 лет)</li>
                  <li>• Готовы платить 23 040 ₽/год взносов (окупается за первый декрет)</li>
                  <li>• Работаете только как самозанятый (нет трудового договора)</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="font-semibold text-red-900 mb-2">❌ Когда не нужно</div>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Беременность уже наступила — за 6 мес не успеете</li>
                  <li>• Есть трудовой договор — декретные получите от работодателя</li>
                  <li>• Не планируете декрет в ближайшие 2–3 года</li>
                  <li>• Доход семьи высокий — единое пособие всё равно не дадут</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/guide/kak-otkryt-ip-frilanseru-2026"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm"
              >
                Как открыть ИП фрилансеру за 1 день →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Может ли самозанятый (НПД) получить декретные выплаты в 2026 году?",
                  a: "Только если самозанятый зарегистрирован как ИП на НПД и заранее (минимум за 6 месяцев до декрета) подключился к добровольному соцстрахованию в СФР. Чистый самозанятый-физлицо без статуса ИП декретные через новый механизм не получит.",
                },
                {
                  q: "Какие пособия получит самозанятая без статуса ИП в декрете?",
                  a: "Единовременное пособие при рождении (24 604 ₽), материнский капитал (631 000–833 900 ₽), единое пособие на ребёнка (зависит от дохода семьи). Декретные по беременности и родам (140 дней) без статуса ИП и взносов — не положены.",
                },
                {
                  q: "Можно ли работать самозанятым во время декрета?",
                  a: "Да, закон не запрещает. Самозанятость и декрет совместимы. Но если одновременно работаете по трудовому договору — при получении дохода от подработки нужно уведомить работодателя об оформлении неполного рабочего дня, иначе ФСС может потребовать вернуть пособия.",
                },
                {
                  q: "Как рассчитывается пособие по беременности для ИП на НПД?",
                  a: "Исходя из МРОТ: 23 500 × 24 / 730 × 140 дней ≈ 107 992 ₽ за весь декрет (2026 год). Это минимальный размер — для ИП на других режимах расчёт идёт от фактического дохода.",
                },
                {
                  q: "Стоит ли переходить с ИП УСН на ИП-НПД ради декрета?",
                  a: "Нет, это невыгодно. На УСН/ОСНО ИП может платить взносы с большей базы и получить декретные выше минимума. На ИП-НПД декретные считаются только от МРОТ. Если уже на НПД — добровольное страхование оправдано при планировании беременности.",
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="group border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 font-semibold text-slate-900">
                    {q}
                    <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="p-4 pt-0 text-slate-700 text-sm leading-relaxed border-t border-slate-100">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Навигация */}
          <section className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Читайте также</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/samozanyatyj-bolnichnyj-2026", text: "Больничный для самозанятых в 2026 году" },
                { href: "/guide/kak-otkryt-ip-frilanseru-2026", text: "Как открыть ИП фрилансеру" },
                { href: "/guide/nalog-samozanyatyj", text: "Налог самозанятого: полный гайд" },
                { href: "/guide/kak-zakryt-samozanyatost-2026", text: "Как закрыть самозанятость" },
                { href: "/guide/ip-vs-samozanyatyj", text: "ИП vs самозанятый: что выбрать" },
                { href: "/guide/samozanyatyj-pensiya-2026", text: "Пенсия самозанятого" },
              ].map(({ href, text }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all text-sm text-slate-700 hover:text-blue-600"
                >
                  <span className="text-blue-500">→</span>
                  {text}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA Калькулятор */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white text-center">
            <div className="text-4xl mb-3">🧮</div>
            <h2 className="text-xl font-bold mb-2">Рассчитайте свою ставку как фрилансер</h2>
            <p className="text-blue-100 mb-4 text-sm">
              Узнайте, сколько стоит ваш час с учётом налогов, декретного «резерва» и рыночных ставок
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </section>

        </div>
      </main>
    </>
  );
}
