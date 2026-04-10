import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Налоговый вычет самозанятого 10 000 рублей в 2026 году: как работает и когда закончится | FreelanceCalc",
  description:
    "Налоговый вычет 10 000 ₽ для самозанятых: как получить автоматически, как снижает ставку (3% вместо 4%, 4% вместо 6%), через сколько месяцев кончится при вашем доходе. Таблица и примеры расчёта.",
  alternates: { canonical: `${BASE_URL}/guide/nalogovyj-vychet-samozanyatogo-2026` },
  openGraph: {
    title: "Налоговый вычет 10 000 ₽ для самозанятых в 2026 году",
    description:
      "Как работает налоговый бонус при регистрации самозанятого, как быстро исчерпывается, сохраняется ли при повторной регистрации.",
    url: `${BASE_URL}/guide/nalogovyj-vychet-samozanyatogo-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Налоговый вычет самозанятого 10 000 ₽: как и когда кончится",
    description:
      "Ставки 3%/4% вместо 4%/6%, автоматически, без заявления. Таблица исчерпания по доходу.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Как получить налоговый вычет 10 000 рублей самозанятому?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Автоматически — при первой регистрации в качестве самозанятого. Никаких заявлений подавать не нужно. Вычет появляется в приложении «Мой налог» сразу после регистрации и применяется к каждому чеку, снижая ставки: с 4% до 3% (для физлиц) и с 6% до 4% (для юрлиц и ИП).",
      },
    },
    {
      "@type": "Question",
      name: "Как быстро исчерпывается налоговый вычет 10 000 рублей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Скорость зависит от дохода и типа клиентов. При доходе 100 000 ₽/мес от юрлиц экономия составляет 2 000 ₽/мес, вычет кончается через 5 месяцев. При доходе 50 000 ₽/мес от физлиц экономия 500 ₽/мес — через 20 месяцев. При смешанных клиентах — пропорционально.",
      },
    },
    {
      "@type": "Question",
      name: "Сгорает ли вычет при снятии с учёта самозанятого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Согласно пункту 2.1 статьи 12 закона № 422-ФЗ, при повторной регистрации неиспользованный остаток налогового вычета восстанавливается. Исключение: если вычет уже был полностью исчерпан в предыдущем периоде — восстанавливать нечего.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли получить налоговый вычет самозанятого деньгами на счёт?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Вычет не выплачивается наличными или переводом. Он работает только как пониженная налоговая ставка: пока не исчерпан лимит 10 000 ₽, с каждого чека удерживается меньше налога. Кэшаутить вычет невозможно — он расходуется автоматически по мере выставления чеков.",
      },
    },
    {
      "@type": "Question",
      name: "Налоговый вычет самозанятого — это то же самое, что НДФЛ-вычет (имущественный, социальный)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, это разные механизмы. Стандартные вычеты (имущественный на квартиру, социальный на лечение/обучение) возвращают 13% НДФЛ и доступны только плательщикам НДФЛ. Самозанятый платит НПД, а не НДФЛ, поэтому стандартные вычеты ему недоступны. Вычет 10 000 ₽ — это бонус именно для НПД, уменьшающий ставку налога.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Налоговый вычет самозанятого 10 000 рублей в 2026 году: как работает и когда закончится",
  description:
    "Как получить налоговый вычет 10 000 ₽ при регистрации самозанятого, как он снижает ставки, через сколько месяцев исчерпается при вашем доходе.",
  url: `${BASE_URL}/guide/nalogovyj-vychet-samozanyatogo-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

// Table data: income/month → months until exhausted for юрлица (2%) and физлица (1%)
const exhaustionTable = [
  { income: "30 000 ₽", company: "~17 мес", person: "~33 мес" },
  { income: "50 000 ₽", company: "~10 мес", person: "~20 мес" },
  { income: "80 000 ₽", company: "~6 мес", person: "~12 мес" },
  { income: "100 000 ₽", company: "~5 мес", person: "~10 мес" },
  { income: "150 000 ₽", company: "~3 мес", person: "~7 мес" },
  { income: "200 000 ₽", company: "~2.5 мес", person: "~5 мес" },
];

export default function NalogovyjVychetSamozanyatogo2026Page() {
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
            Налоговый вычет самозанятого 10 000 ₽: как работает и когда закончится
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            При регистрации ФНС автоматически даёт бонус 10 000 ₽. Он снижает ставку налога и расходуется постепенно. Разбираем механизм, таблицу исчерпания и нюансы.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 6 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick answer block */}
        <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="text-sm font-bold text-green-800 mb-2">📌 Главное в двух словах</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>✓ Вычет 10 000 ₽ даётся <strong>автоматически</strong> при первой регистрации самозанятого</li>
            <li>✓ Работает как <strong>пониженная ставка</strong>: 3% вместо 4% (физлица) и 4% вместо 6% (юрлица/ИП)</li>
            <li>✓ Исчерпывается постепенно по мере выставления чеков — деньгами <strong>не выплачивается</strong></li>
            <li>✓ При снятии с учёта <strong>не сгорает</strong> — остаток восстанавливается при повторной регистрации</li>
          </ul>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Что такое */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Что такое налоговый вычет 10 000 ₽ для самозанятых
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Налоговый вычет для самозанятых — это бонус от ФНС в размере <strong>10 000 рублей</strong>, который уменьшает сумму налога на профессиональный доход (НПД). Он предусмотрен статьёй 12 Федерального закона № 422-ФЗ «О проведении эксперимента по установлению специального налогового режима».
              </p>
              <p>
                Важно понять: это <strong>не живые деньги</strong> на счёт. Вычет работает как «налоговая скидка» — пока он не исчерпан, с каждого вашего чека удерживается пониженный налог. Разница между стандартной и пониженной ставкой списывается из лимита 10 000 ₽.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-xs text-blue-800 font-semibold mb-2">Правовая основа</p>
                <p className="text-xs text-blue-700">
                  Статья 12 закона № 422-ФЗ от 27.11.2018. Вычет действует с момента введения НПД (2019 год) и не изменялся. Сумма 10 000 ₽ зафиксирована на весь период действия режима до 2028 года.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Как работает */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как работает вычет: пониженные ставки 3% и 4%
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Пока вычет не исчерпан, ФНС автоматически применяет льготные ставки:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="font-bold text-blue-800 text-lg mb-0.5">3% <span className="text-sm font-normal">(вместо 4%)</span></p>
                  <p className="text-xs text-blue-700 font-semibold mb-1.5">Доходы от физических лиц</p>
                  <p className="text-xs text-blue-600">
                    Каждые 1 000 ₽ чека физлицу экономят <strong>10 ₽</strong> из лимита вычета.
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <p className="font-bold text-purple-800 text-lg mb-0.5">4% <span className="text-sm font-normal">(вместо 6%)</span></p>
                  <p className="text-xs text-purple-700 font-semibold mb-1.5">Доходы от юрлиц и ИП</p>
                  <p className="text-xs text-purple-600">
                    Каждые 1 000 ₽ чека компании экономят <strong>20 ₽</strong> из лимита вычета.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-2">Пример расчёта</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Фриланс-дизайнер, первый месяц после регистрации:</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Чек на ООО «Бетта» — 80 000 ₽</span>
                    <span className="text-slate-600">налог 4% вместо 6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Налог со скидкой</span>
                    <span className="font-semibold text-green-700">3 200 ₽ (сэкономлено 1 600 ₽)</span>
                  </div>
                  <div className="border-t border-slate-200 pt-1.5 flex justify-between">
                    <span className="text-slate-500">Списано из лимита вычета</span>
                    <span className="font-semibold text-indigo-700">1 600 ₽ из 10 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Остаток вычета</span>
                    <span className="font-semibold">8 400 ₽</span>
                  </div>
                </div>
              </div>

              <p>
                После исчерпания 10 000 ₽ ставки возвращаются к стандартным: <strong>4% и 6%</strong>. Без какого-либо уведомления — просто молча.
              </p>
            </div>
          </section>

          {/* Section 3 — Таблица исчерпания */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Через сколько месяцев кончится вычет: таблица по доходу
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Скорость исчерпания зависит от дохода и типа клиентов. При работе только с юрлицами (ставка 2% экономии) вычет расходуется вдвое быстрее, чем при работе с физлицами (1% экономии).
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Доход/месяц</th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">Только юрлица<br/><span className="font-normal text-slate-500">(2% экономия)</span></th>
                      <th className="text-center p-2 font-semibold text-slate-700 border border-slate-200">Только физлица<br/><span className="font-normal text-slate-500">(1% экономия)</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {exhaustionTable.map((row) => (
                      <tr key={row.income} className="hover:bg-slate-50">
                        <td className="p-2 border border-slate-200 font-medium text-slate-700">{row.income}</td>
                        <td className="p-2 border border-slate-200 text-center text-purple-700">{row.company}</td>
                        <td className="p-2 border border-slate-200 text-center text-blue-700">{row.person}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Формула для расчёта своего срока</p>
                <div className="text-xs text-amber-700 font-mono mt-1">
                  <p>При работе с юрлицами: 10 000 ÷ (доход/мес × 0.02)</p>
                  <p>При работе с физлицами: 10 000 ÷ (доход/мес × 0.01)</p>
                  <p className="mt-1 text-amber-600">Пример: доход 120 000 ₽/мес от юрлиц → 10 000 ÷ 2 400 = 4,2 месяца</p>
                </div>
              </div>

              <p className="text-xs text-slate-400">
                * Расчёт приблизительный, т.к. доход реально колеблется по месяцам. Вычет исчерпывается ровно когда сумма сэкономленного налога достигает 10 000 ₽, не по календарю.
              </p>
            </div>
          </section>

          {/* Section 4 — Нюансы */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Важные нюансы: восстановление, ИП, совмещение
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">

              <div>
                <h3 className="font-semibold text-slate-800 mb-1">При снятии с учёта вычет не сгорает</h3>
                <p>
                  Если вы зарегистрировались как самозанятый, использовали часть вычета, а затем снялись с учёта — остаток вычета <strong>сохраняется</strong>. При повторной регистрации он восстанавливается автоматически (п. 2.1 ст. 12 закона № 422-ФЗ).
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600 mt-2">
                  Пример: использовали 3 000 ₽ из вычета, сняли статус. При повторной регистрации остаток 7 000 ₽ восстановится.
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 mb-1">ИП на НПД тоже получает вычет</h3>
                <p>
                  Если вы зарегистрировали ИП и перешли на режим НПД — вы также получаете вычет 10 000 ₽ как налогоплательщик НПД. ИП-статус не влияет на право получения бонуса.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Вычет нельзя получить деньгами</h3>
                <p>
                  Это частое заблуждение. Вычет 10 000 ₽ <strong>не выплачивается</strong> на счёт — ни через «Мой налог», ни через ФНС, ни через банк. Это исключительно налоговая скидка. Если в каком-то периоде у вас не было дохода — вычет «замораживается» и ждёт следующего чека.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Вычет ≠ НДФЛ-вычет</h3>
                <p>
                  Имущественный вычет за квартиру, социальный вычет за лечение/обучение — это возврат НДФЛ. Самозанятый платит НПД (не НДФЛ), поэтому <strong>стандартные вычеты на него не распространяются</strong>. Вычет 10 000 ₽ — это отдельный механизм исключительно для режима НПД.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Повторная регистрация самозанятого: новый вычет не даётся</h3>
                <p>
                  Вычет предоставляется <strong>один раз за всё время</strong>. При повторной регистрации восстанавливается только неиспользованный остаток. Полностью исчерпанный вычет не обновляется.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Как отследить */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как отследить остаток вычета в приложении «Мой налог»
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Текущий остаток вычета всегда виден в приложении. Вот где его найти:
              </p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold flex items-center justify-center">1</span>
                  <div>
                    <p className="font-semibold text-slate-700">Откройте приложение «Мой налог»</p>
                    <p className="text-slate-500 text-xs mt-0.5">Доступно на iOS, Android, Huawei AppGallery, RuStore и в веб-версии на npd.nalog.ru</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold flex items-center justify-center">2</span>
                  <div>
                    <p className="font-semibold text-slate-700">Перейдите в раздел «Налоги»</p>
                    <p className="text-slate-500 text-xs mt-0.5">На главном экране или в нижнем меню — иконка с процентом</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold flex items-center justify-center">3</span>
                  <div>
                    <p className="font-semibold text-slate-700">Найдите блок «Налоговый бонус»</p>
                    <p className="text-slate-500 text-xs mt-0.5">Здесь отображается оставшийся лимит. Пока вычет активен — ставки в чеках будут пониженными.</p>
                  </div>
                </li>
              </ol>
              <p>
                После исчерпания вычета блок исчезнет, а ставки вернутся к стандартным 4%/6% — никаких уведомлений приложение об этом не присылает. Следите сами.
              </p>
            </div>
          </section>

          {/* Section 6 — Калькулятор CTA */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
            <p className="text-sm font-semibold text-indigo-800 mb-1">
              Рассчитайте свою ставку с учётом налога
            </p>
            <p className="text-xs text-indigo-600 mb-3">
              Калькулятор FreelanceCalc покажет минимальную рыночную ставку для вашей специальности — с поправкой на самозанятость, ИП или договор ГПХ
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </div>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Частые вопросы про налоговый вычет самозанятого
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Как получить налоговый вычет 10 000 рублей самозанятому?",
                  a: "Автоматически — при первой регистрации. Никаких заявлений. Вычет активируется сразу и применяется к каждому чеку: ставки снижаются с 4% до 3% (физлица) и с 6% до 4% (юрлица/ИП).",
                },
                {
                  q: "Как быстро исчерпывается вычет 10 000 ₽?",
                  a: "Зависит от дохода и клиентов. При работе с компаниями на 100 000 ₽/мес — примерно за 5 месяцев. При работе с физлицами на 100 000 ₽/мес — около 10 месяцев. Формула: 10 000 ÷ (доход × 0.02) для юрлиц, 10 000 ÷ (доход × 0.01) для физлиц.",
                },
                {
                  q: "Сгорает ли вычет при снятии с учёта самозанятого?",
                  a: "Нет. Неиспользованный остаток сохраняется и восстанавливается при повторной регистрации. Основание: п. 2.1 ст. 12 закона № 422-ФЗ.",
                },
                {
                  q: "Можно ли получить вычет самозанятого деньгами?",
                  a: "Нет. Вычет не выплачивается наличными. Он работает только как налоговая скидка — снижает ставку до исчерпания лимита 10 000 ₽.",
                },
                {
                  q: "Отличается ли вычет самозанятого от имущественного вычета?",
                  a: "Да, это разные механизмы. Имущественный и социальный вычеты возвращают НДФЛ (13%). Самозанятый платит НПД, а не НДФЛ, поэтому стандартные вычеты ему недоступны. Вычет 10 000 ₽ — бонус только для плательщиков НПД.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">{item.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-slate-800 text-white rounded-2xl p-6 text-center">
            <h2 className="text-lg font-bold mb-2">Разберитесь с налогами фрилансера раз и навсегда</h2>
            <p className="text-slate-300 text-sm mb-4">
              Самозанятый, ИП УСН или договор ГПХ — калькулятор покажет, что выгоднее для вашего дохода
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/guide/nalog-samozanyatyj"
                className="inline-block bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-400 transition-colors"
              >
                Налог самозанятого →
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="inline-block bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-600 transition-colors"
              >
                ИП vs самозанятый
              </Link>
            </div>
          </section>

          {/* Bottom nav links */}
          <section className="bg-slate-50 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Полезные материалы
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link
                href="/guide/nalog-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог самозанятого
              </Link>
              <Link
                href="/guide/kak-stat-samozanyatym-frilanser"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Как стать самозанятым
              </Link>
              <Link
                href="/guide/samozanyatyj-prevysil-limit"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Превышение лимита 2.4 млн
              </Link>
            </div>
          </section>

        </div>

        {/* Back nav */}
        <nav className="mt-8 text-center">
          <Link
            href="/stati"
            className="text-sm text-slate-400 hover:text-indigo-600 transition-colors"
          >
            ← Все статьи о фрилансе
          </Link>
        </nav>
      </main>
    </>
  );
}
