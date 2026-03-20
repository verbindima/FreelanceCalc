import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Изменения для самозанятых в 2026 году: ставки, лимиты, новые правила",
  description:
    "Что изменилось для самозанятых в 2026 году: налоговые ставки НПД, лимит дохода, добровольные взносы в СФР, больничные. Полный разбор для фрилансеров.",
  keywords: [
    "изменения для самозанятых 2026",
    "самозанятый 2026 что изменилось",
    "новые правила самозанятых 2026",
    "НПД 2026 изменения",
    "самозанятый налог 2026",
    "самозанятый лимит 2026",
    "самозанятый СФР взносы 2026",
    "самозанятый фрилансер 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/izmeneniya-samozanyatyh-2026" },
  openGraph: {
    title: "Изменения для самозанятых 2026: что нужно знать фрилансеру",
    description:
      "Ставки НПД сохраняются (4%/6%). Лимит 2,4 млн ₽. Новинка: добровольные взносы в СФР для больничных. Полный разбор изменений.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/izmeneniya-samozanyatyh-2026`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/izmeneniya-samozanyatyh-2026#article`,
      headline: "Изменения для самозанятых в 2026 году: ставки, лимиты, новые правила",
      description:
        "Что изменилось для самозанятых в 2026 году: ставки НПД, лимит дохода, добровольные взносы в СФР, больничные.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/izmeneniya-samozanyatyh-2026`,
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Изменения самозанятых 2026",
            item: `${BASE_URL}/stati/izmeneniya-samozanyatyh-2026`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/stati/izmeneniya-samozanyatyh-2026#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Отменят ли самозанятость (НПД) в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет. Режим НПД (налог на профессиональный доход) продлён до 31 декабря 2028 года. В 2026 году самозанятость продолжает работать с теми же ставками: 4% при работе с физлицами и 6% при работе с юрлицами и ИП.",
          },
        },
        {
          "@type": "Question",
          name: "Изменился ли лимит дохода для самозанятых в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В 2026 году лимит остался прежним — 2,4 млн рублей в год (200 000 ₽ в месяц в среднем). Обсуждается возможное повышение до 3 млн рублей, но официально не принято. При превышении лимита нужно переходить на ИП.",
          },
        },
        {
          "@type": "Question",
          name: "Что изменилось для самозанятых с 2026 года?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Главное нововведение 2026 года: самозанятые могут добровольно платить взносы в Социальный фонд России (СФР) в размере 1300–1900 ₽ в месяц. Это даёт право на оплачиваемый больничный и декретные выплаты — то, чего раньше у самозанятых не было.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать ставку самозанятого с учётом изменений 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте онлайн-калькулятор FreelanceCalc: введите желаемый чистый доход, выберите режим 'самозанятый', и калькулятор автоматически рассчитает ставку с учётом актуальных ставок НПД (4%/6%) и реального рабочего времени.",
          },
        },
        {
          "@type": "Question",
          name: "Стоит ли самозанятому платить добровольные взносы в СФР в 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Зависит от ситуации. При взносах 1300–1900 ₽/месяц (15 600–22 800 ₽/год) вы получаете право на больничный и декрет. Если вы часто болеете или планируете ребёнка — выгодно. Если здоровы и без планов — можно сэкономить.",
          },
        },
      ],
    },
  ],
};

export default function IzmeneniyaSamozanyatyh2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3 flex-wrap">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 text-sm hover:text-blue-600">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Изменения для самозанятых 2026</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Изменения для самозанятых в 2026 году: что нужно знать фрилансеру
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              В интернете много паники про «отмену самозанятости» — разбираемся, что реально
              изменилось в 2026 году, что осталось прежним и как это влияет на вашу ставку.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Обновлено: март 2026</span>
              <span>·</span>
              <span>Налоги</span>
              <span>·</span>
              <span>Россия</span>
            </div>
          </div>

          {/* Quick answer banner */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
            <div className="font-semibold text-green-900 mb-2">✅ Главное: НПД не отменили</div>
            <ul className="text-sm text-green-800 space-y-1.5">
              <li>
                <strong>Ставки сохраняются</strong> — 4% с физлиц, 6% с юрлиц
              </li>
              <li>
                <strong>Лимит 2,4 млн ₽/год</strong> — без изменений
              </li>
              <li>
                <strong>Режим продлён до 2028 года</strong> — официально подтверждено
              </li>
              <li>
                <strong>Новинка 2026:</strong> добровольные взносы в СФР (больничные и декрет)
              </li>
            </ul>
          </div>

          {/* Key numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Налог с физлиц", value: "4%", sub: "без изменений" },
              { label: "Налог с юрлиц", value: "6%", sub: "без изменений" },
              { label: "Лимит дохода", value: "2,4 млн ₽", sub: "в год" },
              { label: "НПД до", value: "2028", sub: "продлён официально" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl border border-gray-200 p-4 text-center"
              >
                <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                <div className="text-xs font-medium text-gray-700 mt-1">{item.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Section: what didn't change */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что НЕ изменилось для самозанятых в 2026 году
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 w-1/2">
                      Параметр
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">
                      Значение в 2026
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: "Ставка НПД с физлиц", value: "4%" },
                    { param: "Ставка НПД с юрлиц и ИП", value: "6%" },
                    { param: "Лимит годового дохода", value: "2 400 000 ₽" },
                    { param: "Налоговый вычет при регистрации", value: "10 000 ₽ (однократно)" },
                    { param: "Срок действия режима", value: "до 31 декабря 2028" },
                    { param: "Регистрация через приложение", value: "«Мой налог» — без изменений" },
                    { param: "Запрет нанимать сотрудников", value: "остаётся" },
                    { param: "Ограничение по видам деятельности", value: "остаётся" },
                  ].map((row, i) => (
                    <tr
                      key={row.param}
                      className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      <td className="px-4 py-3 text-gray-700">{row.param}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: what changed */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что нового появилось в 2026 году
            </h2>

            {/* SFR contributions */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                🏥 Добровольные взносы в СФР — больничные для самозанятых
              </h3>
              <p className="text-sm text-blue-800 mb-4">
                Главное нововведение: самозанятые могут добровольно вступить в систему
                социального страхования. Раньше у самозанятых не было права на оплачиваемый
                больничный — теперь есть, но по желанию.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Взнос в месяц",
                    value: "1 300–1 900 ₽",
                    desc: "добровольно",
                  },
                  {
                    title: "В год",
                    value: "15 600–22 800 ₽",
                    desc: "при постоянных взносах",
                  },
                  {
                    title: "Что даёт",
                    value: "Больничный + декрет",
                    desc: "при стаже взносов",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-lg border border-blue-100 p-3 text-center"
                  >
                    <div className="text-sm font-bold text-blue-700">{item.value}</div>
                    <div className="text-xs font-medium text-gray-700 mt-1">{item.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                <strong>Важно:</strong> Взносы добровольные. Если не платить — работает как
                прежде: никаких больничных, зато и взносов нет. Платить через приложение «Мой
                налог» или Госуслуги.
              </div>
            </div>

            {/* Increased FNS attention */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                🔍 Повышенное внимание ФНС к самозанятым
              </h3>
              <p className="text-sm text-amber-800 mb-3">
                В 2026 году ФНС усилила проверку схем с самозанятыми. Особое внимание — к
                компаниям, которые переводят штатных сотрудников в самозанятые, чтобы избежать
                страховых взносов. Для <strong>честных фрилансеров</strong> ничего не меняется.
              </p>
              <ul className="text-sm text-amber-800 space-y-1.5">
                <li>
                  ⚠️ Нельзя работать с одним заказчиком как самозанятый, если это бывший
                  работодатель (в течение 2 лет)
                </li>
                <li>⚠️ Нельзя работать только с одним клиентом (риск переквалификации в трудовые отношения)</li>
                <li>✅ Работа с несколькими клиентами — безопасно</li>
              </ul>
            </div>
          </section>

          {/* Impact on rate calculation */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как изменения влияют на расчёт ставки
            </h2>
            <p className="text-gray-600 mb-4">
              Если вы решите платить добровольные взносы в СФР, это нужно учитывать при расчёте
              ставки — они увеличивают ваши реальные расходы.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Доход/месяц</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">
                      Налог НПД (6%)
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">
                      Взнос СФР (если платить)
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-600">
                      Итого нагрузка
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { income: "50 000 ₽", npd: "3 000 ₽", sfr: "1 600 ₽", total: "9,2%" },
                    { income: "80 000 ₽", npd: "4 800 ₽", sfr: "1 600 ₽", total: "8,0%" },
                    { income: "120 000 ₽", npd: "7 200 ₽", sfr: "1 600 ₽", total: "7,3%" },
                    { income: "200 000 ₽", npd: "12 000 ₽", sfr: "1 600 ₽", total: "6,8%" },
                  ].map((row, i) => (
                    <tr
                      key={row.income}
                      className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">{row.income}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{row.npd}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{row.sfr}</td>
                      <td className="px-4 py-3 text-center font-semibold text-blue-700">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500">
              * Расчёт для работы с юрлицами (ставка 6%). Взнос СФР — среднее значение 1 600 ₽/мес.
            </p>
          </section>

          {/* CTA Calculator */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 mb-10 text-white text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Рассчитайте свою ставку с учётом актуальных данных 2026
            </h2>
            <p className="text-blue-100 mb-6 text-sm md:text-base">
              Калькулятор уже учитывает актуальные ставки НПД. Введите желаемый доход — получите
              точную часовую ставку.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </div>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Частые вопросы про изменения 2026
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Отменят ли самозанятость (НПД) в 2026 году?",
                  a: "Нет. Режим НПД продлён до 31 декабря 2028 года правительством России. Разговоры об «отмене» связаны с тем, что первоначально НПД вводился как эксперимент до 2028 года — но он был продлён.",
                },
                {
                  q: "Изменился ли лимит дохода для самозанятых?",
                  a: "В 2026 году лимит остался 2,4 млн ₽/год (~200 000 ₽/месяц). Обсуждается возможное повышение до 3 млн ₽, но официального решения пока нет. Следите за обновлениями на сайте ФНС.",
                },
                {
                  q: "Нужно ли самозанятому платить в СФР в 2026?",
                  a: "Нет, это добровольно. Взносы в СФР (1300–1900 ₽/месяц) дают право на больничные и декретные. Если вам это не нужно — можете не платить, как и раньше.",
                },
                {
                  q: "Как фрилансеру правильно работать с самозанятостью в 2026?",
                  a: "Работайте с несколькими клиентами, не с одним. Не работайте как самозанятый с бывшим работодателем (2 года ограничение). Выставляйте чеки в приложении «Мой налог». Следите за тем, чтобы доход не превысил 2,4 млн ₽/год.",
                },
                {
                  q: "При каком доходе самозанятому стоит перейти на ИП в 2026?",
                  a: "При доходе от ~70 000–80 000 ₽/месяц (если работаете с юрлицами) ИП на УСН 6% начинает быть выгоднее: страховые взносы (~50 800 ₽/год) полностью перекрываются налоговым вычетом. При доходе свыше 200 000 ₽/месяц — только ИП (лимит НПД).",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">По теме</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  title: "Самозанятый или ИП: что выгоднее",
                  desc: "Сравнение с реальными расчётами",
                },
                {
                  href: "/stati/stavka-samozanyatogo-2026",
                  title: "Как рассчитать ставку самозанятого",
                  desc: "Методика с учётом НПД 4%/6%",
                },
                {
                  href: "/instrumenty/kalkulator-naloga-samozanyatogo",
                  title: "Калькулятор налога самозанятого",
                  desc: "Онлайн расчёт НПД за месяц",
                },
                {
                  href: "/stati/skrytye-rashody-frilansera",
                  title: "Скрытые расходы фрилансера",
                  desc: "Что ещё учесть помимо налогов",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <div className="font-medium text-gray-900 group-hover:text-blue-700 text-sm">
                    {link.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white mt-12">
          <div className="max-w-4xl mx-auto px-4 py-6 flex flex-wrap justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                FreelanceCalc
              </Link>{" "}
              — калькулятор ставки фрилансера
            </div>
            <nav className="flex gap-4 flex-wrap">
              <Link href="/stati" className="hover:text-blue-600">
                Статьи
              </Link>
              <Link href="/instrumenty" className="hover:text-blue-600">
                Инструменты
              </Link>
              <Link href="/goroda" className="hover:text-blue-600">
                По городам
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
