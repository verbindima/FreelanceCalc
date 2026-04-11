import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Отменят ли самозанятость в 2026 году: официальный ответ и все изменения НПД | FreelanceCalc",
  description:
    "Нет, самозанятость не отменят в 2026 году — режим НПД продлён до 31 декабря 2028. Ставки 4%/6% и лимит 2,4 млн остались. Что реально изменилось: добровольные больничные, усиленный контроль, новые проверки.",
  alternates: { canonical: `${BASE_URL}/guide/otmenyat-li-samozanyatost-2026` },
  openGraph: {
    title: "Отменят ли самозанятость в 2026: официальный ответ",
    description:
      "НПД не отменяют до 2028. Ставки 4%/6% сохранены. Что реально изменилось в 2026: больничные, контроль, лимит.",
    url: `${BASE_URL}/guide/otmenyat-li-samozanyatost-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Отменят ли самозанятость в 2026: нет, но вот что изменилось",
    description:
      "Режим НПД продлён до 2028. Ставки те же. Изменения: добровольное соцстрахование, усиленный контроль за «самозанятыми по принуждению».",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Отменят ли самозанятость в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Режим налога на профессиональный доход (НПД) официально продлён до 31 декабря 2028 года. Правительство РФ отклонило предложение Совета Федерации завершить эксперимент досрочно. Ставки налога (4% с физлиц, 6% с организаций) и лимит дохода (2 400 000 ₽ в год) сохраняются без изменений.",
      },
    },
    {
      "@type": "Question",
      name: "Изменятся ли ставки НПД в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Ставки зафиксированы законодательно и не могут быть повышены до конца 2028 года: 4% при расчётах с физическими лицами и 6% при расчётах с юридическими лицами и ИП. Налоговый вычет 10 000 ₽ также сохраняется.",
      },
    },
    {
      "@type": "Question",
      name: "Что реально изменилось для самозанятых в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "С 1 января 2026 года: (1) Запущен эксперимент по добровольному социальному страхованию (ФЗ-456 от 15.12.2025) — самозанятые могут платить 1 344–1 920 ₽/мес и получать больничные до 50 000 ₽/мес. (2) Усилен контроль за подменой трудовых отношений самозанятостью — работодателям, которые оформляют сотрудников как самозанятых, грозят доначисления НДФЛ и страховых взносов. (3) С апреля 2026 банки обязаны подтверждать доходы самозанятых через Цифровой профиль ФНС при ипотечном кредитовании.",
      },
    },
    {
      "@type": "Question",
      name: "Что будет с самозанятостью после 2028 года?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Официально режим НПД действует как «эксперимент» до 31 декабря 2028 года. После 2028 возможны три сценария: (1) продление в том же виде, (2) включение НПД в постоянный налоговый кодекс, (3) замена на новый режим. По оценкам экспертов (Контур, СберБизнес), режим с 10+ млн плательщиков слишком масштабен, чтобы его отменить — скорее всего, будет формализован.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли совмещать самозанятость с работой по найму в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Самозанятый может одновременно работать по трудовому договору. Зарплата облагается НДФЛ 13–15% работодателем, а доходы от профессиональной деятельности (фриланс, услуги) — НПД по ставке 4–6%. Единственное ограничение: нельзя оказывать услуги своему текущему работодателю или бывшему (в течение 2 лет после увольнения).",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Отменят ли самозанятость в 2026 году: официальный ответ и все изменения НПД",
  description:
    "Полный разбор: режим НПД продлён до 2028, ставки не меняются, но в 2026 появились добровольные больничные и усилен контроль за подменой трудовых отношений.",
  url: `${BASE_URL}/guide/otmenyat-li-samozanyatost-2026`,
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

const changes2026 = [
  {
    category: "Налоговые ставки",
    was: "4% (физлица) / 6% (юрлица)",
    now: "Без изменений ✅",
    impact: "низкий",
  },
  {
    category: "Лимит дохода",
    was: "2 400 000 ₽/год",
    now: "Без изменений ✅",
    impact: "низкий",
  },
  {
    category: "Налоговый вычет",
    was: "10 000 ₽ однократно",
    now: "Без изменений ✅",
    impact: "низкий",
  },
  {
    category: "Больничные",
    was: "Не положены",
    now: "Добровольное страхование с 01.01.2026 (ФЗ-456) 🆕",
    impact: "высокий",
  },
  {
    category: "Декрет / пособие по беременности",
    was: "Только при ИП-НПД",
    now: "Доступно для всех НПД при добровольном взносе 🆕",
    impact: "высокий",
  },
  {
    category: "Контроль за трудовыми отношениями",
    was: "Мониторинг ФНС",
    now: "Усилен: автоматический анализ данных ФНС + СФР 📈",
    impact: "высокий",
  },
  {
    category: "Ипотека / кредиты",
    was: "Справка КНД 1122036",
    now: "Банки подтверждают доход через Цифровой профиль ФНС (с апреля 2026) 📈",
    impact: "средний",
  },
  {
    category: "Маркированные товары",
    was: "Обычный чек «Мой налог»",
    now: "Новые реквизиты чека с 01.09.2026 (приказ ФНС ЕД-7-20/236@) 📈",
    impact: "низкий (для большинства)",
  },
];

export default function OtmenyatLiSamozanyatost2026() {
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
        <section className="bg-gradient-to-br from-slate-50 to-green-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-blue-600">Гайды</Link>
              <span>→</span>
              <span>Отменят ли самозанятость 2026</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              ✅ Режим НПД — 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Отменят ли самозанятость в 2026 году: официальный ответ и все изменения
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Короткий ответ: <strong>нет</strong>. Режим НПД официально продлён до{" "}
              <strong>31 декабря 2028 года</strong>. Ставки 4%/6% и лимит 2,4 млн не изменились.
              Но в 2026 году появились важные новшества — разбираем их подробно.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Режим действует до", value: "2028", sub: "официально" },
                { label: "Ставка с физлица", value: "4%", sub: "не изменилась" },
                { label: "Лимит дохода", value: "2,4 млн", sub: "в год" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-3">
                  <div className="text-xs text-slate-500 mb-1">{s.label}</div>
                  <div className="text-xl font-bold text-green-700">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

          {/* Section 1: Официальный ответ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Официальная позиция: НПД продлён до конца 2028
            </h2>
            <p className="text-slate-700 mb-4">
              Режим налога на профессиональный доход введён Федеральным законом № 422-ФЗ от
              27.11.2018 как эксперимент сначала в нескольких регионах, а с 2020 года — по всей
              России. Эксперимент установлен сроком до <strong>31 декабря 2028 года</strong>.
            </p>
            <p className="text-slate-700 mb-4">
              В конце 2025 года Совет Федерации предложил завершить эксперимент досрочно в связи
              с масштабом применения режима. Правительство РФ{" "}
              <strong>отклонило это предложение</strong>, подтвердив сохранение НПД до конца 2028 года.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
              <p className="text-green-900 font-semibold text-lg mb-2">
                ✅ Самозанятость в 2026 году не отменяют
              </p>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Режим НПД действует до 31.12.2028 — это закреплено законодательно</li>
                <li>• Ставки 4% и 6% <strong>не могут быть повышены</strong> по закону до конца 2028</li>
                <li>• Лимит 2 400 000 ₽/год и вычет 10 000 ₽ сохранены</li>
                <li>• По состоянию на 2026 год в режиме НПД работают <strong>более 11 млн человек</strong></li>
              </ul>
            </div>
            <p className="text-slate-700 text-sm">
              Режим с 11 млн плательщиков невозможно отменить без серьёзных социальных последствий.
              Большинство экономистов считают, что после 2028 НПД будет включён в постоянный
              Налоговый кодекс — возможно, с небольшими изменениями.
            </p>
          </section>

          {/* Section 2: Таблица изменений */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Что реально изменилось в 2026 году: таблица
            </h2>
            <p className="text-slate-700 mb-4">
              Несмотря на сохранение режима, в 2026 году появились важные новшества.
              Вот полная картина изменений:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Параметр</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Было (2025)</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Стало (2026)</th>
                  </tr>
                </thead>
                <tbody>
                  {changes2026.map((row) => (
                    <tr key={row.category} className="border-b border-slate-100">
                      <td className="p-3 font-medium text-slate-800">{row.category}</td>
                      <td className="p-3 text-slate-600">{row.was}</td>
                      <td className={`p-3 font-medium ${
                        row.impact === "высокий" ? "text-blue-700" :
                        row.impact === "средний" ? "text-amber-700" : "text-green-700"
                      }`}>{row.now}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs">
              Источники: ФЗ-456 от 15.12.2025, kontur.ru, sfr.gov.ru, e-kontur.ru
            </p>
          </section>

          {/* Section 3: Добровольное страхование */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Главное новшество 2026: добровольные больничные для самозанятых
            </h2>
            <p className="text-slate-700 mb-4">
              С 1 января 2026 года вступил в силу Федеральный закон № 456-ФЗ от 15.12.2025 —
              эксперимент по добровольному социальному страхованию самозанятых на случай
              временной нетрудоспособности. Эксперимент продлится до 2028 года.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="text-blue-900 font-semibold mb-2">💰 Взносы (2 варианта)</div>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• <strong>Вариант 1:</strong> 1 344 ₽/мес (16 128 ₽/год)</li>
                  <li>• <strong>Вариант 2:</strong> 1 920 ₽/мес (23 040 ₽/год)</li>
                  <li>• Ставка взноса: 3,84% от страховой суммы</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="text-green-900 font-semibold mb-2">🏥 Выплаты при болезни</div>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• <strong>Вариант 1:</strong> до 35 000 ₽/мес</li>
                  <li>• <strong>Вариант 2:</strong> до 50 000 ₽/мес</li>
                  <li>• Право на выплату: через 6 мес. после начала взносов</li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-amber-900 font-semibold mb-2">📌 Как подключить</p>
              <p className="text-amber-800 text-sm">
                Заявление подаётся через приложение <strong>«Мой налог»</strong>, личный кабинет
                на сайте СФР или портал Госуслуги. Срок подачи заявления: не позже
                30 сентября 2027 года.
              </p>
            </div>
            <Link
              href="/guide/samozanyatyj-bolnichnyj-2026"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"
            >
              → Подробный разбор: как получить больничный самозанятому в 2026
            </Link>
          </section>

          {/* Section 4: Контроль */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Усиленный контроль: кому грозят проверки в 2026
            </h2>
            <p className="text-slate-700 mb-4">
              Ключевая проблема, которую власти решают в 2026 году — массовое использование
              режима НПД работодателями для{" "}
              <strong>уклонения от уплаты страховых взносов и НДФЛ</strong>. Схема: уволить
              сотрудника и заключить с ним договор как с самозанятым.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <p className="text-red-900 font-semibold mb-2">
                ⚠️ Признаки «самозанятости по принуждению» (ФНС проверяет автоматически)
              </p>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Один и тот же заказчик даёт более 80% дохода на протяжении 3+ месяцев</li>
                <li>• Бывший работодатель = текущий заказчик (в течение 2 лет после увольнения)</li>
                <li>• Регулярные выплаты в фиксированные даты (признак зарплаты)</li>
                <li>• Работа по месту нахождения заказчика с его инструментами</li>
                <li>• Более 10 самозанятых, работающих исключительно на одного заказчика</li>
              </ul>
            </div>
            <p className="text-slate-700 mb-4">
              Для добросовестных самозанятых, которые оказывают услуги{" "}
              <strong>разным заказчикам</strong>, эти меры не несут рисков.
              Они направлены против работодателей, которые злоупотребляют режимом.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-slate-800 font-semibold mb-1">🔑 Простое правило</p>
              <p className="text-slate-700 text-sm">
                Если вы реально фрилансер — работаете с несколькими клиентами, сами выбираете
                задачи и время работы — самозанятость полностью легальна. Контроль 2026 года
                касается только схем уклонения работодателей от налогов.
              </p>
            </div>
          </section>

          {/* Section 5: Мини-калькулятор */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Быстрый расчёт налога самозанятого
            </h2>
            <p className="text-slate-700 mb-4">
              Ставки в 2026 году не изменились. Напомним, как рассчитывается налог:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Доход от</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Ставка</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Пример: доход 100 000 ₽</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Налог</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Физических лиц", "4%", "100 000 ₽", "4 000 ₽"],
                    ["Юридических лиц / ИП", "6%", "100 000 ₽", "6 000 ₽"],
                    ["Физлиц (с учётом вычета 10 000 ₽)", "эффективно ~3,2%", "100 000 ₽", "~3 200 ₽"],
                  ].map(([type, rate, income, tax]) => (
                    <tr key={type} className="border-b border-slate-100">
                      <td className="p-3 text-slate-700">{type}</td>
                      <td className="p-3 font-bold text-blue-700">{rate}</td>
                      <td className="p-3 text-slate-600">{income}</td>
                      <td className="p-3 font-bold text-slate-800">{tax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Налоговый вычет в размере 10 000 ₽ применяется единоразово при старте:
              уменьшает ставку с 4% до 3% (физлица) и с 6% до 4% (юрлица) до исчерпания вычета.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <p className="text-slate-700 mb-3 font-medium">
                Хотите рассчитать свою ставку как самозанятый?
              </p>
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Открыть калькулятор фрилансера →
              </Link>
            </div>
          </section>

          {/* Section 6: После 2028 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Что будет с самозанятостью после 2028 года
            </h2>
            <p className="text-slate-700 mb-4">
              Режим НПД юридически является «экспериментом», который завершается 31.12.2028.
              Что произойдёт дальше — официально неизвестно. Но есть три сценария:
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  icon: "✅",
                  title: "Продление (наиболее вероятно)",
                  desc: "Режим продлят ещё на несколько лет или переведут на постоянную основу в НК РФ. 11+ млн самозанятых — это политически и экономически значимо.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🔄",
                  title: "Реформа (возможно)",
                  desc: "НПД включат в НК РФ со скорректированными условиями: возможно повышение лимита дохода, введение добровольных взносов в пенсию как условие по умолчанию.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "⚠️",
                  title: "Замена новым режимом (маловероятно)",
                  desc: "Создадут новый налоговый режим взамен НПД с изменёнными ставками или лимитами. Требует перехода 11 млн плательщиков — очень сложно технически.",
                  color: "bg-amber-50 border-amber-200",
                },
              ].map((s) => (
                <div key={s.title} className={`${s.color} border rounded-xl p-4`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{s.title}</p>
                      <p className="text-slate-700 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              По оценкам аналитиков e-kontur.ru и developers.sber.ru, отмена режима НПД
              без замены маловероятна: это вернуло бы миллионы людей в «серую» занятость.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Отменят ли самозанятость в 2026 году?",
                  a: "Нет. Режим НПД продлён до 31 декабря 2028 года. Правительство отклонило предложение Совета Федерации завершить эксперимент досрочно.",
                },
                {
                  q: "Изменятся ли ставки НПД в 2026 году?",
                  a: "Нет. Ставки зафиксированы законом: 4% с физлиц, 6% с юрлиц и ИП. Повышение невозможно до конца 2028 года. Налоговый вычет 10 000 ₽ сохранён.",
                },
                {
                  q: "Что реально изменилось для самозанятых в 2026?",
                  a: "Три главных изменения: (1) с 01.01.2026 появились добровольные больничные (ФЗ-456) — взносы 1 344–1 920 ₽/мес, выплаты до 50 000 ₽/мес; (2) усилен контроль за «самозанятыми по принуждению»; (3) с апреля 2026 банки подтверждают доход через Цифровой профиль ФНС.",
                },
                {
                  q: "Что будет с самозанятостью после 2028?",
                  a: "Официально неизвестно. Наиболее вероятный сценарий — продление или включение НПД в Налоговый кодекс на постоянной основе. Отмена без замены крайне маловероятна из-за 11 млн плательщиков.",
                },
                {
                  q: "Можно ли совмещать самозанятость с работой по найму в 2026?",
                  a: "Да. Зарплата облагается НДФЛ работодателем, доходы от фриланса — НПД 4–6%. Нельзя только оказывать услуги текущему и бывшему работодателю (в течение 2 лет после увольнения).",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="bg-slate-50 rounded-xl border border-slate-200 group"
                >
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-slate-900 list-none">
                    {q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-slate-700 text-sm leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Рассчитайте свою ставку с учётом НПД
            </h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Ставки 4%/6% сохранены — самое время понять, сколько брать с клиентов,
              чтобы выйти на желаемый доход «на руки».
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого: ставки, расчёт, сроки уплаты" },
                { href: "/guide/samozanyatyj-bolnichnyj-2026", label: "Больничный для самозанятых в 2026 году: как оформить" },
                { href: "/guide/samozanyatyj-lgoty-2026", label: "Льготы для самозанятых в 2026: полный список" },
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым: пошаговая инструкция" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятость: что выгоднее в 2026" },
                { href: "/guide/shtrafy-samozanyatogo-2026", label: "Штрафы для самозанятых в 2026: за что и сколько" },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-slate-700 text-sm font-medium">{r.label}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
