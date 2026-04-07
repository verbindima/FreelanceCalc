import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Самозанятый превысил лимит 2,4 млн ₽ в 2026 году: что делать | FreelanceCalc",
  description:
    "Превысили лимит НПД 2,4 млн ₽? Пошаговый план: сроки перехода на ИП, расчёт налогов после превышения, как не попасть на ОСНО. Онлайн-калькулятор.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-prevysil-limit` },
  openGraph: {
    title: "Самозанятый превысил лимит 2,4 млн ₽: что делать в 2026",
    description:
      "Лимит НПД превышен — что происходит с налогами, как быстро перейти на ИП УСН и не потерять деньги. Пошаговая инструкция с расчётами.",
    url: `${BASE_URL}/guide/samozanyatyj-prevysil-limit`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Самозанятый превысил лимит 2.4 млн: пошаговый план",
    description:
      "Что делать при превышении лимита НПД: сроки, переход на ИП, налоги, расчёты. FreelanceCalc.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Что происходит, когда самозанятый превышает лимит 2,4 млн ₽?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При превышении лимита 2 400 000 ₽ в год статус плательщика НПД автоматически прекращается. Все доходы сверх лимита до конца года облагаются НДФЛ 13% (если не зарегистрировать ИП). Приложение «Мой налог» уведомит об этом в день превышения.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько дней есть на регистрацию ИП после превышения лимита НПД?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "С момента прекращения НПД у вас есть 20 календарных дней для подачи уведомления в налоговую о применении УСН. Если опоздать — автоматически применяется ОСНО (НДС 20% + НДФЛ 13% + взносы), что крайне невыгодно для фрилансера.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли снова стать самозанятым после превышения лимита?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, но только с 1 января следующего года. Лимит 2,4 млн ₽ обнуляется каждый год. Если вы превысили лимит в ноябре 2026 — повторно зарегистрироваться как самозанятый можно с 1 января 2027 года.",
      },
    },
    {
      "@type": "Question",
      name: "Какие налоги платит фрилансер после превышения лимита, если не открыть ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При отсутствии ИП доходы сверх 2,4 млн облагаются НДФЛ 13% (физлицо без ИП). Придётся подать декларацию 3-НДФЛ до 30 апреля следующего года и заплатить налог до 15 июля. С дохода 3 млн ₽ это 78 000 ₽ только с суммы превышения.",
      },
    },
    {
      "@type": "Question",
      name: "Что выгоднее при доходе выше 2,4 млн в год: ИП или НДФЛ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ИП на УСН 6% почти всегда выгоднее НДФЛ 13% при доходах свыше 2,4 млн ₽. Пример: на доход 3 000 000 ₽ ИП УСН платит 126 342 ₽ (6% минус взносы), физлицо-НДФЛ — 390 000 ₽. Разница: 263 658 ₽ в пользу ИП.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Что делать самозанятому при превышении лимита 2,4 млн ₽",
  description:
    "Пошаговая инструкция: как действовать при превышении лимита НПД, как перейти на ИП УСН, как не попасть на ОСНО.",
  totalTime: "P1D",
  estimatedCost: { "@type": "MonetaryAmount", currency: "RUB", value: "800" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Зафиксируйте дату превышения",
      text: "Дата снятия с НПД — день, когда суммарный доход с 1 января превысил 2 400 000 ₽. Приложение «Мой налог» уведомит автоматически. Отсчёт 20 дней идёт с этой даты.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Зарегистрируйте ИП в течение 20 дней",
      text: "Подайте заявление на регистрацию ИП через Госуслуги или налоговую. Одновременно подайте уведомление о применении УСН (форма 26.2-1). Срок — 20 дней с даты снятия с НПД.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Выберите режим налогообложения",
      text: "Для большинства фрилансеров оптимально ИП УСН 6% (доходы). Если расходы на бизнес превышают 60% дохода — рассмотрите УСН «Доходы минус расходы» 15%.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Уплатите налог с дохода сверх лимита",
      text: "Доход от даты снятия с НПД до регистрации ИП облагается НДФЛ 13%. Это переходный период — его нельзя избежать, но можно минимизировать, регистрируя ИП быстро.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Уведомите заказчиков о смене статуса",
      text: "После регистрации ИП сообщите клиентам об изменении реквизитов. Теперь вы выставляете счета как ИП — без чеков «Мой налог». При работе с физлицами используйте онлайн-кассу или БСО.",
    },
  ],
};

export default function SamozanyatyLimitPage() {
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
        {/* Header */}
        <header className="mb-8 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo-500 tracking-wide uppercase hover:underline"
          >
            FreelanceCalc
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Самозанятый превысил лимит 2,4 млн ₽: что делать в 2026
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Пошаговый план: сроки, переход на ИП, расчёт налогов — чтобы не потерять деньги и не попасть на ОСНО.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>📖 6 минут на чтение</span>
            <span>·</span>
            <span>🗓 Актуально Q2 2026</span>
          </div>
        </header>

        {/* Alert box */}
        <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4">
          <p className="text-sm font-semibold text-red-700 mb-1">⚠️ Критический срок</p>
          <p className="text-sm text-red-600">
            С даты снятия с НПД у вас <strong>20 календарных дней</strong> на регистрацию ИП и подачу уведомления об УСН.
            Если опоздать — автоматически применяется ОСНО: НДС 20% + НДФЛ 13%.
          </p>
        </div>

        {/* Section 1: What happens */}
        <section className="mb-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-3">
            Что происходит при превышении лимита
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Лимит дохода самозанятого — <strong>2 400 000 ₽ в год</strong> (с 1 января по 31 декабря).
            Это примерно 200 000 ₽ в месяц. При превышении происходит следующее:
          </p>
          <ul className="text-sm text-slate-600 space-y-2 mb-4">
            <li className="flex gap-2">
              <span className="text-red-500 shrink-0">✗</span>
              Статус плательщика НПД <strong>автоматически прекращается</strong> в день превышения.
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 shrink-0">✗</span>
              Все доходы <strong>сверх 2,4 млн до конца года</strong> облагаются НДФЛ 13% (как у обычного физлица).
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500 shrink-0">!</span>
              «Мой налог» пришлёт уведомление и перестанет принимать новые чеки.
            </li>
            <li className="flex gap-2">
              <span className="text-green-500 shrink-0">✓</span>
              Доходы <strong>до превышения</strong> (в пределах 2,4 млн) облагались по НПД — они не пересчитываются.
            </li>
          </ul>
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Пример расчёта</p>
            <p className="text-sm text-slate-600">
              Фрилансер заработал 2 600 000 ₽ за год. Первые 2 400 000 ₽ — НПД по ставке 4–6%.
              Оставшиеся <strong>200 000 ₽</strong> — НДФЛ 13% = <strong>26 000 ₽</strong> дополнительного налога.
              Плюс обязанность подать декларацию 3-НДФЛ.
            </p>
          </div>
        </section>

        {/* Section 2: 20-day window */}
        <section className="mb-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-3">
            Критическое окно: 20 дней на переход
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            После снятия с НПД начинается <strong>20-дневный отсчёт</strong>. Именно в этот срок нужно
            зарегистрировать ИП <em>и</em> подать уведомление о выборе УСН. Пропустили — добро пожаловать
            на ОСНО до конца года.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-green-700 mb-1">Успели (до 20 дней)</p>
              <p className="text-sm text-slate-600">ИП на УСН 6%: платите 6% с доходов минус страховые взносы 53 658 ₽/год</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-red-700 mb-1">Опоздали (после 20 дней)</p>
              <p className="text-sm text-slate-600">ОСНО: НДС 20% + НДФЛ 13% + взносы. На следующий год — перейти на УСН.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-step ИП registration */}
        <section className="mb-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">
            Пошаговый переход на ИП УСН 6%
          </h2>
          <div className="space-y-4">
            {[
              {
                n: 1,
                title: "Зафиксируйте дату и сохраните уведомление",
                body: "В «Мой налог» посмотрите дату снятия с НПД. Скачайте справку КНД 1122035 — она подтверждает, что вы были самозанятым. Пригодится для банков и клиентов.",
              },
              {
                n: 2,
                title: "Зарегистрируйте ИП",
                body: "Через Госуслуги (форма Р21001) — бесплатно, без визита в налоговую. Или через сервис nalog.ru. ОКВЭД выбирайте по вашей деятельности (IT: 62.01, дизайн: 74.10, маркетинг: 73.11).",
              },
              {
                n: 3,
                title: "Подайте уведомление об УСН одновременно с регистрацией",
                body: "Форма 26.2-1 — прикладывается к пакету документов при регистрации ИП. Или подаётся отдельно в течение 30 дней после регистрации (но в пределах 20 дней от снятия с НПД).",
              },
              {
                n: 4,
                title: "Откройте расчётный счёт",
                body: "Для ИП нужен расчётный счёт. Тинькофф, Сбер, Точка — первые 3–6 месяцев часто бесплатно. Это не обязательно по закону, но необходимо для работы с юрлицами.",
              },
              {
                n: 5,
                title: "Уведомите заказчиков о смене статуса",
                body: "Отправьте клиентам новые реквизиты: ИНН, ОГРНИП, расчётный счёт. Для работы с физлицами может понадобиться онлайн-касса (уточните для вашего вида деятельности).",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {step.n}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-800">{step.title}</p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Tax comparison */}
        <section className="mb-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-3">
            Сравнение налогов при доходе 3 000 000 ₽/год
          </h2>
          <p className="text-sm text-slate-500 mb-4">
            Почему ИП УСН 6% выгоднее физлица на НДФЛ при доходах выше лимита:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 rounded-tl-lg font-semibold text-slate-700">Параметр</th>
                  <th className="text-right p-3 font-semibold text-slate-700">Физлицо НДФЛ</th>
                  <th className="text-right p-3 rounded-tr-lg font-semibold text-indigo-700">ИП УСН 6%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Доход за год", "3 000 000 ₽", "3 000 000 ₽"],
                  ["Налог", "390 000 ₽ (13%)", "180 000 ₽ (6%)"],
                  ["Страховые взносы", "—", "53 658 ₽"],
                  ["Уменьшение налога на взносы", "—", "−53 658 ₽"],
                  ["Итого к уплате", "390 000 ₽", "180 000 ₽"],
                  ["Остаток «на руки»", "2 610 000 ₽", "2 766 342 ₽"],
                ].map(([label, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 text-slate-600">{label}</td>
                    <td className="p-3 text-right text-slate-500">{a}</td>
                    <td className="p-3 text-right font-semibold text-indigo-700">{b}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-indigo-50 border-t-2 border-indigo-200">
                  <td className="p-3 font-bold text-slate-700" colSpan={2}>Выгода ИП УСН</td>
                  <td className="p-3 text-right font-bold text-indigo-700">+ 156 342 ₽</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            * Расчёт для ИП без сотрудников, УСН «Доходы» 6%, взносы 2026: 53 658 ₽ фиксированные + 1% с суммы свыше 300 000 ₽ = 53 658 + 27 000 = 80 658 ₽. Налог уменьшается на всю сумму взносов.
          </p>
        </section>

        {/* Section 5: Return to self-employed */}
        <section className="mb-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-3">
            Можно ли вернуться к самозанятости?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Да. Лимит НПД обнуляется каждый год — с 1 января. Если вы превысили лимит в 2026 году,
            с 1 января 2027 года можно снова зарегистрироваться как самозанятый.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-amber-700 mb-2">Стратегия для высокодоходных фрилансеров</p>
            <p className="text-sm text-slate-600">
              Если ваш доход нестабилен и часть лет превышает 2,4 млн — удобно держать ИП постоянно
              (взносы 53 658 ₽/год, УСН 6%) и не переключаться. При доходе от 900 000 ₽/год ИП
              выгоднее самозанятости даже с учётом взносов.
            </p>
            <Link
              href="/guide/ip-vs-samozanyatyj"
              className="mt-2 inline-block text-sm font-semibold text-indigo-600 hover:underline"
            >
              Подробное сравнение ИП vs самозанятый →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Частые вопросы</h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((q, i) => (
              <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <p className="text-sm font-semibold text-slate-800 mb-1">{q.name}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Calculator */}
        <section className="mt-8 bg-indigo-600 text-white rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold mb-2">Рассчитайте ставку уже как ИП</h2>
          <p className="text-indigo-200 text-sm mb-4">
            После перехода на ИП нужно заложить в ставку взносы 53 658 ₽/год.
            Калькулятор пересчитает правильную почасовую ставку.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </section>

        {/* Benchmark upsell */}
        <section className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
              Планируете рост дохода?
            </p>
            <p className="text-sm font-bold text-slate-800">
              Бенчмарк PDF — медианные ставки по 32 специальностям и 10 городам
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Узнайте рыночный уровень до того, как доходы снова вырастут. Q2 2026.
            </p>
          </div>
          <Link
            href="/benchmark"
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            Посмотреть — 249 ₽
          </Link>
        </section>

        {/* Internal links */}
        <nav className="mt-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Связанные гайды
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятый: что выгоднее" },
              { href: "/guide/nalog-ip-usn-6", label: "ИП на УСН 6%: расчёт налога и взносов" },
              { href: "/guide/strahovye-vznosy-ip-2026", label: "Страховые взносы ИП 2026" },
              { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого 2026: ставки 4% и 6%" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline bg-indigo-50 rounded-lg px-3 py-2 transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </nav>

        <nav className="mt-6 text-center">
          <Link href="/stati" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">
            ← Все статьи о фрилансе
          </Link>
        </nav>
      </main>
    </>
  );
}
