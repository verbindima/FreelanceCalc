import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Идёт ли трудовой стаж у самозанятых в 2026 году | FreelanceCalc",
  description:
    "По умолчанию трудовой и страховой стаж у самозанятых НЕ идёт. Но можно купить стаж добровольно через СФР: 71 525 ₽ = 1 год стажа и ~1 пенсионный балл в 2026. Разбор с расчётами.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-trudovoj-stazh-2026` },
  openGraph: {
    title: "Трудовой стаж самозанятого 2026: идёт ли и как накопить",
    description:
      "Самозанятый по умолчанию не копит стаж. Хотите пенсию — платите добровольные взносы в СФР: 71 525 ₽ за 1 год стажа. Полный расчёт и инструкция.",
    url: `${BASE_URL}/guide/samozanyatyj-trudovoj-stazh-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Стаж самозанятого 2026: не идёт, но можно купить за 71 525 ₽/год",
    description:
      "НПД не даёт стаж автоматически. Добровольные взносы в СФР: 71 525 ₽ = 1 год страхового стажа + ~1 пенсионный балл в 2026 году.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Идёт ли трудовой стаж у самозанятых в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. По умолчанию трудовой и страховой стаж у плательщиков НПД (налога на профессиональный доход) не накапливается. Самозанятые не платят страховые взносы в обязательном порядке. Чтобы стаж шёл, нужно добровольно уплачивать взносы в Социальный фонд России (СФР).",
      },
    },
    {
      "@type": "Question",
      name: "Сколько стоит 1 год трудового стажа самозанятому в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В 2026 году минимальный добровольный взнос для получения полного года страхового стажа составляет 71 525,52 рублей. За эту сумму вы получите 1 год страхового стажа и примерно 1 пенсионный балл (ИПК). Можно платить меньше — стаж и баллы засчитаются пропорционально.",
      },
    },
    {
      "@type": "Question",
      name: "Как самозанятому подключить добровольные взносы в СФР?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Через приложение «Мой налог»: раздел «Прочее» → «Пенсионное страхование» → «Подать заявление». Или лично в отделении СФР, или через Госуслуги. Заявление рассматривается в течение 10 рабочих дней. После одобрения начнёте платить взносы ежемесячно или разовым платежом до 31 декабря.",
      },
    },
    {
      "@type": "Question",
      name: "Если я работаю по найму и одновременно зарегистрирован как самозанятый, стаж идёт?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Если вы официально трудоустроены и работодатель платит за вас страховые взносы (ОПС) — стаж начисляется в полном объёме. Самозанятость в этом случае не мешает и не добавляет обязательных взносов. Двойного стажа не будет: засчитывается только один период за каждый месяц.",
      },
    },
    {
      "@type": "Question",
      name: "Считается ли самозанятость при назначении страховой пенсии?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Периоды самозанятости включаются в страховой стаж для пенсии только если за эти периоды уплачивались добровольные взносы в СФР. Без взносов — не включаются. Для назначения страховой пенсии по старости в 2026 году нужно: возраст 63 года (женщины) / 65 лет (мужчины), 15 лет стажа, 28,2 пенсионного балла (ИПК).",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Идёт ли трудовой стаж у самозанятых в 2026 году",
  description:
    "Подробный разбор: почему стаж у самозанятых не начисляется по умолчанию, как оформить добровольные взносы в СФР через «Мой налог», сколько стоит 1 год стажа в 2026 году и стоит ли это делать.",
  url: `${BASE_URL}/guide/samozanyatyj-trudovoj-stazh-2026`,
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyjTrudovojStazh2026() {
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
        <section className="bg-gradient-to-br from-slate-50 to-violet-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-blue-600">Гайды</Link>
              <span>→</span>
              <span>Трудовой стаж самозанятого 2026</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              🏛 Пенсия и стаж НПД — 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Идёт ли трудовой стаж у самозанятых в 2026 году
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Короткий ответ: <strong>нет</strong>. Самозанятые не платят страховые взносы —
              значит, стаж и пенсионные баллы не накапливаются. Но можно{" "}
              <strong>добровольно «купить» стаж</strong> через Социальный фонд России.
              В 2026 году 1 год стажа стоит{" "}
              <strong>71 525 ₽</strong>.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Стаж по умолчанию", value: "0", sub: "лет/год" },
                { label: "Стоимость 1 года", value: "71 525 ₽", sub: "добровольный взнос" },
                { label: "Пенсионных баллов", value: "~1 ИПК", sub: "за полный год" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-3">
                  <div className="text-xs text-slate-500 mb-1">{s.label}</div>
                  <div className="text-xl font-bold text-violet-700">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Почему стаж у самозанятых не начисляется автоматически
            </h2>
            <p className="text-slate-700 mb-4">
              Трудовой и страховой стаж пополняется только если работодатель (или сам человек)
              платит <strong>страховые взносы на обязательное пенсионное страхование (ОПС)</strong>.
              Эти взносы поступают в Социальный фонд России (СФР) и конвертируются в страховой
              стаж и пенсионные баллы (ИПК).
            </p>
            <p className="text-slate-700 mb-4">
              Плательщики НПД (самозанятые) <strong>освобождены от обязательных страховых взносов</strong>{" "}
              по статье 15 Федерального закона № 422-ФЗ. Это одно из главных преимуществ режима:
              не нужно платить 36 000–50 000 ₽/год как ИП. Но обратная сторона — пенсионный стаж
              не идёт.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-amber-900 font-semibold mb-1">⚠️ Важное уточнение</p>
              <p className="text-amber-800 text-sm">
                Самозанятость{" "}
                <strong>не обнуляет накопленный ранее стаж</strong>. Годы, отработанные по трудовому
                договору, сохраняются в полном объёме. Просто пока вы на НПД — новый стаж сам
                по себе не прибавляется.
              </p>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Статус</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Стаж идёт?</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Взносы в год</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Наёмный работник", "✅ Да (работодатель платит)", "~22% от зарплаты (за счёт работодателя)"],
                    ["ИП на УСН/ПСН", "✅ Да (платит сам)", "от 49 500 ₽ (фиксированные взносы)"],
                    ["Самозанятый (НПД) без взносов", "❌ Нет", "0 ₽"],
                    ["Самозанятый + добровольный взнос в СФР", "✅ Да", "от 71 525,52 ₽/год"],
                  ].map(([status, stazh, vznosy]) => (
                    <tr key={status} className="border-b border-slate-100">
                      <td className="p-3 text-slate-700 font-medium">{status}</td>
                      <td className="p-3 text-slate-700">{stazh}</td>
                      <td className="p-3 text-slate-700">{vznosy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Как самозанятому накопить стаж: добровольные взносы в СФР
            </h2>
            <p className="text-slate-700 mb-4">
              Статья 29 Федерального закона № 167-ФЗ «Об обязательном пенсионном страховании»
              даёт самозанятым право{" "}
              <strong>добровольно вступить в правоотношения по ОПС</strong>. Подав заявление в
              Социальный фонд России, вы начнёте накапливать страховой стаж и пенсионные баллы
              наравне с наёмными работниками.
            </p>

            {/* Cost calculation */}
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                📊 Сколько стоит 1 год стажа в 2026 году
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  ["Минимальный размер оплаты труда (МРОТ 2026)", "19 242 ₽/мес"],
                  ["Ставка ОПС (добровольный взнос)", "22%"],
                  ["Минимальный взнос за месяц", "19 242 × 22% = 4 233,24 ₽"],
                  ["Минимальный взнос за год (12 мес.)", "71 525,52 ₽"],
                  ["Пенсионных баллов (ИПК) за год", "~1 балл"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center border-b border-violet-100 pb-2">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-bold text-violet-800 text-right">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-violet-700 text-xs mt-3">
                * Можно платить больше МРОТ — тогда ИПК за год будет выше. Срок уплаты: до 31 декабря текущего года.
              </p>
            </div>

            <p className="text-slate-700 mb-4">
              Важно: добровольные взносы формируют <strong>страховой стаж для пенсии</strong>,
              а не трудовой стаж в классическом смысле. Это разные понятия:
            </p>
            <ul className="space-y-2 text-slate-700 text-sm mb-4">
              <li className="flex gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span>
                  <strong>Трудовой стаж</strong> — суммарная длительность работы по трудовому договору. Влияет на некоторые льготы (например, «ветеран труда»).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-violet-600 font-bold">•</span>
                <span>
                  <strong>Страховой стаж</strong> — периоды, за которые уплачивались взносы на ОПС.
                  Именно он нужен для назначения страховой (трудовой) пенсии по старости.
                </span>
              </li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-900 text-sm">
                ✅ Для получения <strong>страховой пенсии</strong> важен именно страховой стаж.
                Добровольные взносы в СФР полностью его формируют — этого достаточно.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Как оформить добровольные взносы: пошаговая инструкция
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Шаг</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Откройте приложение «Мой налог» → «Прочее» → «Пенсионное страхование» → «Подать заявление»"],
                    ["2", "Или зайдите на Госуслуги: «Добровольное пенсионное страхование» → заявление на вступление в ОПС"],
                    ["3", "Дождитесь одобрения СФР (до 10 рабочих дней). Придёт уведомление в «Мой налог» или на Госуслуги"],
                    ["4", "Оплатите взносы: реквизиты — в личном кабинете СФР (sfr.gov.ru) или в «Мой налог»"],
                    ["5", "Срок оплаты за текущий год — не позднее 31 декабря. Можно платить частями в течение года"],
                  ].map(([n, desc]) => (
                    <tr key={n} className="border-b border-slate-100">
                      <td className="p-3 font-bold text-violet-700">{n}</td>
                      <td className="p-3 text-slate-700">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {[
                {
                  icon: "📱",
                  title: "«Мой налог»",
                  desc: "Самый быстрый способ — всё в одном приложении, заявление и оплата.",
                },
                {
                  icon: "💻",
                  title: "Госуслуги",
                  desc: "Через gosuslugi.ru — поиск «добровольное страхование СФР».",
                },
                {
                  icon: "🏛",
                  title: "Отделение СФР",
                  desc: "Лично, с паспортом и СНИЛС. Подходит если нет доступа к онлайн-сервисам.",
                },
              ].map((c) => (
                <div key={c.title} className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="font-semibold text-slate-900 mb-1">{c.title}</div>
                  <div className="text-sm text-slate-600">{c.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Special case: employee + self-employed */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Работаю по найму и самозанятый одновременно — стаж идёт?
            </h2>
            <p className="text-slate-700 mb-4">
              Если вы <strong>официально трудоустроены</strong> (по трудовому договору) и
              одновременно зарегистрированы как самозанятый, стаж идёт за счёт работодателя.
              Он ежемесячно перечисляет за вас 22% от зарплаты в СФР, формируя стаж и баллы.
            </p>
            <p className="text-slate-700 mb-4">
              В этом случае <strong>добровольные взносы как самозанятый не нужны</strong> —
              они не дадут «двойной» стаж. По одному периоду (месяцу) СФР засчитывает стаж
              только один раз, независимо от количества источников взносов.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-900 font-semibold mb-2">💡 Совет</p>
              <p className="text-blue-800 text-sm">
                Если есть основная работа, не тратьте 71 525 ₽/год на добровольные взносы:
                стаж и так идёт. Деньги лучше направить в{" "}
                <strong>НПФ (негосударственный пенсионный фонд)</strong> или на инвестиции —
                это более гибкий инструмент накопления.
              </p>
            </div>
          </section>

          {/* Section 5 — Стоит ли платить? */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Стоит ли самозанятому платить добровольные взносы в 2026 году?
            </h2>
            <p className="text-slate-700 mb-4">
              Однозначного ответа нет — зависит от ситуации. Вот основные аргументы:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-semibold text-green-900 mb-3">✅ Платить взносы стоит если:</p>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• Самозанятость — ваш основной заработок, нет трудового договора</li>
                  <li>• Вам 40+ лет и не хватает стажа для пенсии (нужно 15 лет к 2026)</li>
                  <li>• Планируете работать на НПД ещё 5–10 лет</li>
                  <li>• Хотите «купить» недостающие годы стажа</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="font-semibold text-red-900 mb-3">❌ Платить взносы не стоит если:</p>
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• Есть основная работа по трудовому договору</li>
                  <li>• Вам до 35 лет — пенсионная система может измениться</li>
                  <li>• Нет стабильного дохода — взнос 71 525 ₽/год ощутим</li>
                  <li>• Предпочитаете самостоятельно инвестировать эти деньги</li>
                </ul>
              </div>
            </div>

            {/* Example calculation */}
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                📊 Пример: сколько пенсии даст 10 лет добровольных взносов
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  ["Взносов за 10 лет (71 525 × 10)", "715 250 ₽"],
                  ["Накоплено пенсионных баллов (ИПК)", "~10 баллов"],
                  ["Стоимость 1 балла в 2026 году", "133,05 ₽/мес"],
                  ["Прибавка к пенсии за 10 лет", "~1 330 ₽/мес"],
                  ["Окупаемость (715 250 / 1 330)", "~45 лет"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-violet-100 pb-2">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-bold text-violet-800">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-violet-700 text-xs mt-3">
                * Расчёт приблизительный. Стоимость балла ежегодно индексируется.
                Окупаемость ~45 лет — низкая по сравнению с рыночными инвестициями.
                Но взносы дают страховой стаж, необходимый для получения пенсии вообще.
              </p>
            </div>
          </section>

          {/* Section 6 — Pension requirements */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Требования для страховой пенсии в 2026 году
            </h2>
            <p className="text-slate-700 mb-4">
              Чтобы получить страховую (трудовую) пенсию по старости в 2026 году, нужно
              одновременно выполнить три условия:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Условие</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Женщины</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Мужчины</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Пенсионный возраст", "63 года", "65 лет"],
                    ["Минимальный страховой стаж", "15 лет", "15 лет"],
                    ["Минимум пенсионных баллов (ИПК)", "28,2 балла", "28,2 балла"],
                  ].map(([cond, women, men]) => (
                    <tr key={cond} className="border-b border-slate-100">
                      <td className="p-3 text-slate-700 font-medium">{cond}</td>
                      <td className="p-3 text-slate-700">{women}</td>
                      <td className="p-3 text-slate-700">{men}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm mt-4">
              Если не хватает стажа или баллов — назначается социальная пенсия (на 5 лет позже
              страхового возраста). В 2026 году её размер составляет около 7 900 ₽/мес —
              существенно ниже страховой. Именно поэтому для фрилансеров с длинным горизонтом
              добровольные взносы могут быть оправданы.
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
                  q: "Идёт ли трудовой стаж у самозанятых в 2026 году?",
                  a: "Нет, по умолчанию не идёт. Самозанятые не платят страховые взносы на ОПС. Чтобы стаж копился, нужно добровольно платить взносы в СФР через «Мой налог» или Госуслуги.",
                },
                {
                  q: "Сколько стоит 1 год трудового стажа самозанятому в 2026 году?",
                  a: "71 525,52 рублей — это минимальная сумма добровольного взноса за полный год. За эти деньги вы получите 1 год страхового стажа и около 1 пенсионного балла (ИПК). Можно платить меньше — стаж засчитывается пропорционально.",
                },
                {
                  q: "Как самозанятому подключить добровольные взносы в СФР?",
                  a: "Через «Мой налог»: «Прочее» → «Пенсионное страхование» → «Подать заявление». Или через Госуслуги или лично в отделении СФР. Заявление одобряется за 10 рабочих дней.",
                },
                {
                  q: "Если я работаю по найму и одновременно зарегистрирован как самозанятый, стаж идёт?",
                  a: "Да, стаж идёт за счёт работодателя. Дополнительно платить добровольные взносы как самозанятый не нужно — двойного стажа не будет.",
                },
                {
                  q: "Считается ли самозанятость при назначении страховой пенсии?",
                  a: "Только если уплачивались добровольные взносы в СФР. Без взносов период самозанятости в страховой стаж не включается. Для пенсии в 2026 нужно 15 лет стажа и 28,2 балла ИПК.",
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
          <section className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Рассчитайте ставку с учётом всех налогов
            </h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Если решили платить добровольные взносы — заложите их в свою ставку.
              Калькулятор FreelanceCalc учитывает налоги, взносы и желаемый доход.
            </p>
            <Link
              href="/"
              className="inline-block bg-violet-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-violet-700 transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { href: "/guide/samozanyatyj-pensiya-2026", label: "Пенсия самозанятого: как копить и что ждать" },
                { href: "/guide/samozanyatyj-bolnichnyj-2026", label: "Больничный для самозанятых в 2026 году" },
                { href: "/guide/samozanyatyj-dekret-2026", label: "Декрет и пособия для самозанятых 2026" },
                { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого: ставки 4% и 6%, расчёт" },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-colors group"
                >
                  <span className="text-violet-500 group-hover:translate-x-1 transition-transform">→</span>
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
