import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернатива приложению «Мой налог» для расчёта ставки — FreelanceCalc",
  description:
    "«Мой налог» считает только НПД, но не помогает рассчитать часовую ставку фрилансера. FreelanceCalc считает ставку с учётом налогов, простоев, отпуска и рыночных медиан по 20+ специальностям.",
  keywords: [
    "мой налог калькулятор самозанятого",
    "мой налог калькулятор ставки",
    "альтернатива мой налог",
    "самозанятый калькулятор ставки",
    "калькулятор самозанятого 2026",
    "мой налог фрилансер",
    "нпд калькулятор фрилансера",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa/moj-nalog-kalkulator" },
  openGraph: {
    title: "«Мой налог» vs FreelanceCalc: в чём разница для фрилансера",
    description:
      "«Мой налог» — для уплаты НПД. FreelanceCalc — для расчёта правильной ставки. Объясняем разницу.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa/moj-nalog-kalkulator`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Альтернатива «Мой налог» для расчёта ставки фрилансера — FreelanceCalc",
  description:
    "«Мой налог» — официальное приложение ФНС для самозанятых. Но оно не считает часовую ставку. FreelanceCalc восполняет этот пробел.",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/alternativa/moj-nalog-kalkulator`,
  },
  inLanguage: "ru",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Чем FreelanceCalc отличается от «Мой налог»?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "«Мой налог» — официальное приложение ФНС для регистрации доходов и уплаты НПД. FreelanceCalc — калькулятор ставки: помогает рассчитать, сколько брать с клиента в час или в месяц, чтобы получить нужный доход на руки. Это разные инструменты с разными задачами.",
      },
    },
    {
      "@type": "Question",
      name: "Считает ли «Мой налог» часовую ставку фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. «Мой налог» предназначен для регистрации фактических доходов и формирования чеков. Калькулятор ставки в приложении отсутствует. Для расчёта часовой ставки с учётом налога НПД, загрузки и отпуска используйте FreelanceCalc.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать ставку самозанятого с учётом НПД?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: Желаемый доход на руки / (1 − 0.04 или 0.06) / Оплачиваемые часы в год. При доходе 120 000 ₽/мес, загрузке 70% и НПД 6% (клиенты — юрлица) часовая ставка составит около 1 200–1 400 ₽. FreelanceCalc делает этот расчёт автоматически.",
      },
    },
  ],
};

const COMPARISON_ROWS = [
  {
    feature: "Расчёт часовой ставки",
    mojNalog: false,
    freelanceCalc: true,
    note: "Ключевое отличие",
  },
  {
    feature: "Учёт налога НПД (4% и 6%)",
    mojNalog: true,
    freelanceCalc: true,
    note: "Оба инструмента",
  },
  {
    feature: "Учёт простоев (загрузка %)",
    mojNalog: false,
    freelanceCalc: true,
    note: "",
  },
  {
    feature: "Учёт отпуска и праздников",
    mojNalog: false,
    freelanceCalc: true,
    note: "",
  },
  {
    feature: "Поддержка ИП УСН 6% и 15%",
    mojNalog: false,
    freelanceCalc: true,
    note: "",
  },
  {
    feature: "Рыночные медианы по специальностям",
    mojNalog: false,
    freelanceCalc: true,
    note: "20+ специальностей, Q1 2026",
  },
  {
    feature: "Медианы по городам России",
    mojNalog: false,
    freelanceCalc: true,
    note: "10 городов",
  },
  {
    feature: "Регистрация дохода и формирование чека",
    mojNalog: true,
    freelanceCalc: false,
    note: "Только «Мой налог»",
  },
  {
    feature: "Официальное приложение ФНС",
    mojNalog: true,
    freelanceCalc: false,
    note: "",
  },
];

export default function MojNalogAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
              FreelanceCalc
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/alternativa" className="hover:text-blue-600">Альтернативы</Link></li>
              <li>/</li>
              <li className="text-gray-700">Мой налог</li>
            </ol>
          </nav>

          {/* Hero */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            «Мой налог» vs FreelanceCalc: что выбрать самозанятому фрилансеру
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Миллионы самозанятых ежедневно открывают «Мой налог». Но приложение ФНС
            не отвечает на главный вопрос фрилансера: <strong>сколько брать с клиента?</strong>{" "}
            Разбираем, чем отличаются инструменты и как использовать оба.
          </p>

          {/* Key difference callout */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-10">
            <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide mb-2">
              Главное отличие
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-indigo-100">
                <div className="font-bold text-gray-800 mb-1">«Мой налог»</div>
                <p className="text-sm text-gray-600">
                  Официальное приложение ФНС. Регистрирует доходы, формирует чеки,
                  автоматически рассчитывает НПД к уплате.
                  <span className="text-orange-600 font-medium"> Не считает ставку.</span>
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-indigo-100">
                <div className="font-bold text-gray-800 mb-1">FreelanceCalc</div>
                <p className="text-sm text-gray-600">
                  Калькулятор ставки. Показывает, сколько выставлять клиенту в час,
                  чтобы получить нужный доход на руки после налога и с учётом загрузки.
                  <span className="text-green-600 font-medium"> Не заменяет «Мой налог».</span>
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что умеет «Мой налог»
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              «Мой налог» — официальное приложение Федеральной налоговой службы России для плательщиков
              налога на профессиональный доход (НПД). Его задача:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Регистрация дохода и формирование электронного чека",
                "Автоматический расчёт НПД (4% от физлиц, 6% от юрлиц)",
                "Уведомления о начисленном налоге (каждый месяц до 25-го)",
                "Оплата НПД через банковскую карту",
                "Проверка статуса самозанятого",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Всё это критично важно для легальной работы как самозанятый. Но расчёт
              <em> правильной ставки</em> — то есть сколько просить у клиента — приложение не делает.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему «Мой налог» не заменяет калькулятор ставки
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Типичная ошибка новичка: «я самозанятый, НПД 6%, значит мою ставку я просто умножу
              на 1.06». На деле фрилансер теряет деньги ещё в нескольких местах:
            </p>
            <div className="space-y-3 mb-5">
              {[
                {
                  emoji: "⏳",
                  title: "Простои",
                  text: "25–40% рабочего времени уходит на поиск клиентов, переговоры, административку. Эти часы не оплачиваются, но стоят денег.",
                },
                {
                  emoji: "🏖",
                  title: "Отпуск за свой счёт",
                  text: "У самозанятого нет оплачиваемого отпуска. 28 дней отдыха при доходе 120 000 ₽/мес = 13 500 ₽ потерь ежемесячно в пересчёте.",
                },
                {
                  emoji: "💻",
                  title: "Инструменты и оборудование",
                  text: "Figma, Adobe, ноутбук, интернет — это ваши расходы. Офисный сотрудник платит за всё это 0 ₽.",
                },
                {
                  emoji: "📊",
                  title: "Рыночные данные",
                  text: "Даже правильно посчитанная ставка может оказаться ниже или выше медианы по вашей специальности. Без данных невозможно позиционировать себя правильно.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 bg-white rounded-xl border border-gray-200 p-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">{item.title}</div>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Сравнение: «Мой налог» vs FreelanceCalc
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-700 font-semibold">Функция</th>
                    <th className="text-center px-4 py-3 text-gray-700 font-semibold">«Мой налог»</th>
                    <th className="text-center px-4 py-3 text-indigo-700 font-semibold">FreelanceCalc</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-gray-700">
                        {row.feature}
                        {row.note && (
                          <span className="ml-2 text-xs text-gray-400">{row.note}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.mojNalog ? (
                          <span className="text-green-600 font-bold">✓</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.freelanceCalc ? (
                          <span className="text-green-600 font-bold">✓</span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Practical advice */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как использовать оба инструмента вместе
            </h2>
            <div className="bg-slate-800 text-white rounded-2xl p-6">
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "FreelanceCalc → узнайте свою правильную ставку",
                    desc: "Введите желаемый доход, выберите режим НПД 6% (если работаете с компаниями), загрузку 70% и отпуск 28 дней. Калькулятор покажет, сколько просить с клиента.",
                  },
                  {
                    step: "2",
                    title: "«Мой налог» → легально работайте и платите НПД",
                    desc: "Каждую оплату регистрируйте в приложении, формируйте чек и отправляйте клиенту. НПД начисляется автоматически.",
                  },
                  {
                    step: "3",
                    title: "FreelanceCalc → сравните ставку с рынком",
                    desc: "Посмотрите медианы по вашей специальности и городу в PDF-отчёте Q1 2026. Поймите, где вы относительно рынка.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA: Calculator */}
          <section className="bg-indigo-600 text-white rounded-2xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">
                  Рассчитайте свою ставку самозанятого за 1 минуту
                </h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  Введите желаемый доход на руки, выберите НПД 4% или 6% — и получите
                  точную часовую ставку с учётом всех коэффициентов.
                </p>
              </div>
              <Link
                href="/"
                className="shrink-0 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Открыть калькулятор →
              </Link>
            </div>
          </section>

          {/* CTA: Benchmark PDF */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
                  Ваша ставка выше или ниже рынка?
                </p>
                <h3 className="font-bold text-slate-800 text-base">
                  PDF с медианами по 22+ специальностям и 10 городам
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Данные Q1 2026: сравните свою ставку с коллегами.
                </p>
              </div>
              <Link
                href="/benchmark"
                className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Узнать — 249 ₽
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Частые вопросы</h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((item) => (
                <div key={item.name} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="font-semibold text-gray-800 mb-2 text-sm">{item.name}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {item.acceptedAnswer.text}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Читайте также</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  title: "Самозанятый vs ИП: что выгоднее для фрилансера",
                  desc: "Сравнение налоговых режимов в 2026 году",
                },
                {
                  href: "/stati/skrytye-rashody-frilansera",
                  title: "Скрытые расходы фрилансера",
                  desc: "Полный список: что надо заложить в ставку",
                },
                {
                  href: "/instrumenty/kalkulator-naloga-samozanyatogo",
                  title: "Калькулятор налога самозанятого",
                  desc: "Считаем НПД 4% и 6% за любой период",
                },
                {
                  href: "/alternativa/npd-calculator",
                  title: "NPD-Calculator vs FreelanceCalc",
                  desc: "Ещё один популярный калькулятор НПД — сравниваем",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <div className="font-semibold text-gray-800 text-sm mb-1">{link.title}</div>
                  <div className="text-xs text-gray-500">{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
