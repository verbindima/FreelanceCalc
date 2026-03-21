import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "nalogovyj-vychet-samozanyatogo-2026";

export const metadata: Metadata = {
  title: "Налоговый вычет для самозанятых 2026: как получить 10 000 ₽ бонус",
  description:
    "Каждый самозанятый получает вычет 10 000 ₽ при регистрации — автоматически, без заявлений. Ставка временно снижается с 4% до 3% (и с 6% до 4%). Разбираем, как работает вычет, сколько экономишь и почему важно не потерять его при перерегистрации.",
  keywords: [
    "налоговый вычет самозанятый",
    "налоговый вычет самозанятого 2026",
    "вычет 10000 самозанятый",
    "бонус самозанятый мой налог",
    "как получить вычет самозанятому",
    "самозанятый налоговый бонус",
    "вычет НПД 2026",
    "самозанятый уменьшить налог",
    "налог на профессиональный доход вычет",
    "мой налог вычет при регистрации",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Налоговый вычет для самозанятых 2026: 10 000 ₽ бонус при регистрации",
    description:
      "Самозанятый получает вычет 10 000 ₽ автоматически. Ставка снижается с 4% до 3%. Разбираем: сколько экономишь, когда исчерпается и что будет при повторной регистрации.",
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
      headline: "Налоговый вычет для самозанятых 2026: как получить 10 000 ₽ бонус",
      description:
        "Каждый самозанятый получает налоговый вычет 10 000 ₽ при регистрации. Ставка снижается с 4% до 3% до исчерпания вычета. Разбираем механику, расчёты и важные нюансы.",
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
          name: "Налоговый вычет самозанятого 2026",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько составляет налоговый вычет для самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "10 000 рублей. Вычет предоставляется один раз при первичной регистрации в качестве самозанятого (плательщика НПД). Он применяется автоматически через приложение Мой налог.",
          },
        },
        {
          "@type": "Question",
          name: "Как работает вычет 10 000 рублей для самозанятых?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Вычет не выплачивается деньгами. Он снижает налоговую ставку: для доходов от физлиц — с 4% до 3%, для доходов от юрлиц/ИП — с 6% до 4%. Разница в 1–2% с каждого чека списывается из 10 000 ₽ вычета до его полного исчерпания.",
          },
        },
        {
          "@type": "Question",
          name: "Когда исчерпается вычет 10 000 рублей у самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "При работе только с физлицами (1% экономии) — после оборота 1 000 000 ₽. При работе только с юрлицами (2% экономии) — после оборота 500 000 ₽. При смешанном потоке — где-то между этими цифрами.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли получить вычет второй раз при повторной регистрации?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет. Если вы снялись с учёта и снова зарегистрировались как самозанятый, вычет 10 000 ₽ второй раз не предоставляется. Это важно учитывать при временном снятии с учёта.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли подавать заявление для получения вычета самозанятому?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, никаких заявлений подавать не нужно. Вычет применяется автоматически с момента регистрации через приложение Мой налог или сервисы-партнёры (Сбербанк, Тинькофф и др.).",
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
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-indigo-600 transition-colors">FreelanceCalc</Link>
          <span>›</span>
          <Link href="/stati" className="hover:text-indigo-600 transition-colors">Статьи</Link>
          <span>›</span>
          <span className="text-slate-600">Налоговый вычет самозанятого</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3 leading-tight">
          Налоговый вычет для самозанятых 2026: 10 000 ₽ бонус при регистрации
        </h1>

        <p className="text-slate-500 text-sm mb-6">
          Обновлено: март 2026 · FreelanceCalc
        </p>

        {/* Key takeaway */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-6">
          <p className="text-sm font-semibold text-indigo-800 mb-1">Главное за 10 секунд</p>
          <ul className="text-sm text-indigo-700 space-y-1 list-disc list-inside">
            <li>При регистрации самозанятый получает вычет <strong>10 000 ₽</strong> — автоматически</li>
            <li>Вычет снижает ставку: <strong>4% → 3%</strong> (с физлиц) и <strong>6% → 4%</strong> (с юрлиц)</li>
            <li>Выплачивается не деньгами — только уменьшает налог по каждому чеку</li>
            <li>Даётся <strong>один раз</strong>: при повторной регистрации не возобновляется</li>
          </ul>
        </div>

        {/* What is it */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Что такое налоговый вычет для самозанятых</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Налог на профессиональный доход (НПД) — режим для самозанятых — при регистрации даёт
            каждому налогоплательщику единовременный вычет <strong>10 000 рублей</strong>. Это
            бонус от государства: не нужно ни заявлений, ни деклараций, ни похода в налоговую.
            Приложение «Мой налог» применяет его автоматически.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Вычет установлен статьёй 12 Федерального закона №422-ФЗ «О проведении эксперимента
            по установлению специального налогового режима "Налог на профессиональный доход"».
            Механизм действует с момента введения режима в 2019 году и продолжает работать в 2026 году.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Важно понимать: вычет <em>не перечисляется на счёт</em>. Он работает иначе — временно
            снижает налоговую ставку до исчерпания суммы 10 000 ₽.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Как работает вычет: механика</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Ставки НПД: 4% с доходов от физических лиц, 6% — с доходов от юридических лиц и ИП.
            Пока вычет не исчерпан, ставки снижаются:
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-2 text-slate-700 font-semibold border border-slate-200">Клиент</th>
                  <th className="text-center px-3 py-2 text-slate-700 font-semibold border border-slate-200">Стандартная ставка</th>
                  <th className="text-center px-3 py-2 text-slate-700 font-semibold border border-slate-200">Ставка с вычетом</th>
                  <th className="text-center px-3 py-2 text-slate-700 font-semibold border border-slate-200">Экономия</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border border-slate-200 text-slate-700">Физическое лицо</td>
                  <td className="px-3 py-2 border border-slate-200 text-center text-slate-600">4%</td>
                  <td className="px-3 py-2 border border-slate-200 text-center font-semibold text-emerald-700">3%</td>
                  <td className="px-3 py-2 border border-slate-200 text-center text-emerald-600">1% с каждого чека</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-3 py-2 border border-slate-200 text-slate-700">Юридическое лицо / ИП</td>
                  <td className="px-3 py-2 border border-slate-200 text-center text-slate-600">6%</td>
                  <td className="px-3 py-2 border border-slate-200 text-center font-semibold text-emerald-700">4%</td>
                  <td className="px-3 py-2 border border-slate-200 text-center text-emerald-600">2% с каждого чека</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-600 mb-2">Пример расчёта:</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Вы фрилансер, работаете с компанией. Выставляете чек на <strong>50 000 ₽</strong>.
              Стандартный налог — 6% = 3 000 ₽. С вычетом — 4% = 2 000 ₽.{" "}
              <strong className="text-emerald-700">Экономия: 1 000 ₽</strong>. Из вычета списывается
              1 000 ₽ (осталось 9 000 ₽ из 10 000 ₽).
            </p>
          </div>
        </section>

        {/* When exhausted */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Когда исчерпается вычет</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Вычет «расходуется» с каждым чеком. Как быстро — зависит от того, с кем вы работаете:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-blue-700 mb-1">Только физлица (4%→3%)</p>
              <p className="text-2xl font-bold text-blue-900 mb-1">1 000 000 ₽</p>
              <p className="text-xs text-blue-600">
                Экономия 1% с чека. Чтобы исчерпать 10 000 ₽ вычета, нужен оборот 1 млн ₽.
                При доходе 100 000 ₽/мес — около 10 месяцев.
              </p>
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-violet-700 mb-1">Только юрлица/ИП (6%→4%)</p>
              <p className="text-2xl font-bold text-violet-900 mb-1">500 000 ₽</p>
              <p className="text-xs text-violet-600">
                Экономия 2% с чека. Чтобы исчерпать 10 000 ₽ вычета, нужен оборот 500 тыс ₽.
                При доходе 100 000 ₽/мес — около 5 месяцев.
              </p>
            </div>
          </div>

          <p className="text-slate-500 text-xs">
            После исчерпания вычета приложение «Мой налог» автоматически переходит на стандартные
            ставки 4% и 6%. Никаких действий с вашей стороны не требуется.
          </p>
        </section>

        {/* Important nuances */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Важные нюансы</h2>

          <div className="space-y-3">
            <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <span className="text-lg flex-shrink-0">⚠️</span>
              <div>
                <p className="text-sm font-semibold text-amber-800 mb-1">Вычет — один раз в жизни</p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Если вы снялись с учёта самозанятого и снова зарегистрировались — вычет второй
                  раз не предоставляется. Даже если первый раз вы его не использовали. Это критично
                  при временном уходе с режима НПД.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-lg flex-shrink-0">🤖</span>
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Всё автоматически</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Не нужно ничего делать: подавать заявления, уведомлять налоговую, вести учёт вычета.
                  Приложение «Мой налог» и банки-партнёры (Сбербанк, Тинькофф, ВТБ и др.) применяют
                  сниженную ставку автоматически по каждому чеку.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-lg flex-shrink-0">💰</span>
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Не деньги на счёт, а экономия на налоге</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Часто возникает путаница: вычет — это не 10 000 ₽, которые придут на расчётный счёт.
                  Это сумма, на которую уменьшится ваш налог в совокупности за весь период использования
                  вычета. Максимально можно «сэкономить» ровно 10 000 ₽ налога.
                </p>
              </div>
            </div>

            <div className="flex gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-lg flex-shrink-0">⏳</span>
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">Вычет не сгорает</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Срока действия у вычета нет. Если вы зарегистрировались, но почти ничего не зарабатываете —
                  вычет будет ждать. Он не «сгорает» в конце года или через несколько лет. Расходуется
                  только при выставлении чеков.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it affects rate calculation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Как учесть вычет при расчёте ставки</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            При расчёте своей ставки первые месяцы можно закладывать пониженную ставку налога.
            Например, если работаете с физлицами:
          </p>
          <ul className="text-sm text-slate-600 space-y-2 mb-4">
            <li className="flex gap-2">
              <span className="text-indigo-500 font-bold flex-shrink-0">→</span>
              До исчерпания вычета: налоговая нагрузка 3% (вместо 4%)
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-500 font-bold flex-shrink-0">→</span>
              После исчерпания: стандартные 4%
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-500 font-bold flex-shrink-0">→</span>
              Разница в ставке: около 3% дополнительного дохода на старте
            </li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Наш калькулятор рассчитывает ставку с учётом стандартного налога (4% или 6%).
            Если вы только начинаете — реальная нагрузка в первый год будет чуть ниже.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Рассчитать свою ставку →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: "Я уже давно самозанятый — вычет уже исчерпан?",
                a: "Если с момента регистрации ваш суммарный доход превысил 500 тыс–1 млн ₽ (в зависимости от типа клиентов) — скорее всего да. Проверить остаток вычета можно в приложении «Мой налог»: раздел «Профиль» → «Налоговый бонус».",
              },
              {
                q: "Применяется ли вычет к доходу от иностранных компаний?",
                a: "Иностранные компании в контексте НПД рассматриваются как юридические лица. Ставка без вычета — 6%, с вычетом — 4%. Обратите внимание: получение оплаты от иностранных заказчиков требует правильного оформления. Подробнее — в нашей статье о работе с иностранными клиентами.",
              },
              {
                q: "Можно ли передать вычет другому человеку или продать?",
                a: "Нет. Налоговый вычет самозанятого — персональный, привязан к конкретному ИНН. Ни передать, ни продать, ни использовать по доверенности нельзя.",
              },
              {
                q: "Что если я работаю и с физлицами, и с юрлицами?",
                a: "Вычет расходуется пропорционально: на чеки физлицам списывается по 1% от суммы, на чеки юрлицам — по 2%. Итого исчерпание 10 000 ₽ происходит раньше, чем при работе только с физлицами, но позже, чем при работе только с юрлицами.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="border border-slate-200 rounded-xl overflow-hidden">
                <summary className="px-4 py-3 text-sm font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 transition-colors">
                  {q}
                </summary>
                <p className="px-4 pb-3 pt-1 text-sm text-slate-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Читайте также</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/stati/kak-oformit-samozanyatost-2026", title: "Как оформить самозанятость в 2026 году: пошаговая инструкция" },
              { href: "/stati/samozanyatyj-vs-ip-frilancer", title: "Самозанятый vs ИП: что выгоднее для фрилансера" },
              { href: "/stati/kak-vystavit-schet-samozanyatomu-2026", title: "Как выставить счёт самозанятому клиенту" },
              { href: "/stati/stavka-samozanyatogo-2026", title: "Ставка налога для самозанятых в 2026 году" },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block p-3 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-xl transition-colors"
              >
                <p className="text-sm font-medium text-slate-700 hover:text-indigo-700 leading-snug">
                  {article.title}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-center text-white">
          <p className="font-bold text-lg mb-2">Рассчитайте справедливую ставку с учётом налогов</p>
          <p className="text-indigo-200 text-sm mb-4">
            Калькулятор учитывает самозанятость, ИП УСН, отпуск и реальную загрузку
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </section>
      </main>
    </>
  );
}
