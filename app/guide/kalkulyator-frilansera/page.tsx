import type { Metadata } from "next";
import Link from "next/link";
import InlineCalc from "./InlineCalc";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор фрилансера 2026 — как рассчитать ставку | FreelanceCalc",
  description:
    "Как правильно рассчитать ставку фрилансера в 2026 году: формула расчёта, учёт налогов самозанятого и ИП, примеры для разных специальностей. Онлайн-калькулятор.",
  alternates: { canonical: `${BASE_URL}/guide/kalkulyator-frilansera` },
  openGraph: {
    title: "Калькулятор фрилансера: как рассчитать свою ставку в 2026 году",
    description:
      "Формула расчёта ставки фрилансера, учёт налогов (самозанятый vs ИП), реальные примеры по специальностям. Онлайн-калькулятор на FreelanceCalc.",
    url: `${BASE_URL}/guide/kalkulyator-frilansera`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор фрилансера 2026 — как рассчитать ставку",
    description:
      "Формула расчёта ставки, налоги самозанятого и ИП, примеры для разных специальностей.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Как рассчитать ставку фрилансера онлайн?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Используйте онлайн-калькулятор фрилансера на FreelanceCalc.ru. Введите желаемый доход, выберите налоговый режим (самозанятый или ИП), укажите рабочие часы, дни отпуска и коэффициент загрузки. Калькулятор мгновенно покажет минимальную часовую и дневную ставку.",
      },
    },
    {
      "@type": "Question",
      name: "Какая формула расчёта ставки фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Базовая формула: Ставка = (Желаемый доход + Налоги) ÷ (Рабочие часы в год × Коэффициент загрузки). Рабочих часов в году ~2000 (252 дня × 8 часов минус отпуск). При загрузке 70% оплачиваемых часов около 1400 в год.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько платит налогов самозанятый фрилансер?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятый платит 4% с доходов от физических лиц и 6% с доходов от юридических лиц и ИП. Страховые взносы платить необязательно. Максимальный доход — 2,4 млн рублей в год.",
      },
    },
    {
      "@type": "Question",
      name: "Чем отличается налогообложение ИП от самозанятого для фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ИП на УСН 6% платит те же 6% с дохода, но дополнительно обязан уплачивать фиксированные страховые взносы — около 49 500 ₽ в год в 2025–2026 годах. При доходе до ~825 000 ₽ в год самозанятый выгоднее. При более высоком доходе — ИП, так как взносы уменьшают налог на 100% при отсутствии сотрудников.",
      },
    },
    {
      "@type": "Question",
      name: "Какая средняя ставка фрилансера в России в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Медианные ставки в 2026 году: Python-разработчик — 2 500 ₽/час, Frontend-разработчик — 2 000 ₽/час, UI/UX-дизайнер — 1 800 ₽/час, Копирайтер — 1 000 ₽/час, SEO-специалист — 1 500 ₽/час, Маркетолог — 1 700 ₽/час. Ставки в Москве выше на 30–40% по сравнению с регионами.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Калькулятор фрилансера: как рассчитать свою ставку в 2026 году",
  description:
    "Как правильно рассчитать ставку фрилансера: формула, учёт налогов, примеры для разных специальностей.",
  url: `${BASE_URL}/guide/kalkulyator-frilansera`,
  datePublished: "2026-03-20",
  dateModified: "2026-04-06",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function KalkulyatorFrilanceraPage() {
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
            Калькулятор фрилансера: как рассчитать свою ставку в 2026 году
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Формула расчёта, налоги самозанятого и ИП, примеры для разных специальностей — и онлайн-калькулятор, который считает всё за вас.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 8 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Inline Calculator — above the fold */}
        <div className="mb-8">
          <InlineCalc />
        </div>

        <div className="space-y-8">

          {/* Section 1 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Почему фрилансерам важно правильно считать ставку
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Большинство фрилансеров называют цену интуитивно: смотрят на конкурентов, делают скидку «чтобы взяли», или берут первую цифру, которая пришла в голову. Результат — годами работают за 60–70% того, что могли бы зарабатывать.
              </p>
              <p>
                Проблема не в том, что рынок платит мало. Проблема в том, что большинство фрилансеров не учитывают три ключевых фактора:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Налоги.</strong> Самозанятый платит 6% с дохода от юрлиц. ИП — 6% плюс ~49 500 ₽ страховых взносов в год. Эти деньги нужно закладывать в ставку, а не вычитать из дохода post factum.</li>
                <li><strong>Реальная загрузка.</strong> Фрилансер не работает 100% времени на оплачиваемых проектах. Поиск клиентов, переговоры, тестовые задания, простой между проектами — всё это съедает 25–40% рабочего времени.</li>
                <li><strong>Отпуск и больничные.</strong> В отличие от наёмного сотрудника, фрилансер не получает оплачиваемый отпуск. 28 дней отдыха — это 28 дней без дохода, которые нужно покрыть за счёт ставки в остальные месяцы.</li>
              </ul>
              <p>
                Если взять фрилансера с желаемым доходом 150 000 ₽/месяц, ставкой самозанятого 6%, загрузкой 70% и 28 днями отпуска — его реальная минимальная ставка составит около 1 450 ₽/час. При 8-часовом рабочем дне. Многие берут 1 000–1 200 ₽/час и удивляются, почему «не хватает».
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Формула расчёта ставки фрилансера
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Базовая формула расчёта часовой ставки фрилансера выглядит так:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-800 mb-1">Часовая ставка =</p>
                <p>(Желаемый доход в месяц + Налоги в месяц)</p>
                <p className="pl-4">÷ (Рабочих часов в год × Коэффициент загрузки ÷ 12)</p>
              </div>
              <p>
                Разберём каждый компонент:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Рабочих часов в году</strong> — при стандартном графике 5 дней × 8 часов в рабочем году 252 дня. Минус 28 дней отпуска = 224 рабочих дня × 8 часов = <strong>1 792 часа</strong>.
                </li>
                <li>
                  <strong>Коэффициент загрузки</strong> — реальная доля оплачиваемого времени. У опытных фрилансеров — 65–75%, у начинающих — 40–55%. При загрузке 70% из 1 792 часов оплачиваемых будет около <strong>1 254 часа</strong>.
                </li>
                <li>
                  <strong>Налоги</strong> — для самозанятого (юрлица) 6% от выставленных счётов. Чтобы получить 150 000 ₽ чистыми, нужно выставить на 159 574 ₽ — разница 9 574 ₽ идёт в ФНС.
                </li>
              </ul>
              <p>
                Итого: для дохода 150 000 ₽/месяц при загрузке 70% и 28 днях отпуска часовая ставка составит примерно <strong>1 450–1 500 ₽/час</strong>.
              </p>
              <p>
                Считать всё это вручную каждый раз утомительно. Именно для этого существует{" "}
                <Link href="/" className="text-indigo-600 hover:underline font-medium">
                  онлайн-калькулятор ставки фрилансера
                </Link>{" "}
                — он делает все расчёты автоматически.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Налоги фрилансера: самозанятый vs ИП
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Выбор налогового режима напрямую влияет на ставку. Рассмотрим оба варианта.
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Самозанятый (НПД)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ставка налога: <strong>4%</strong> с доходов от физических лиц, <strong>6%</strong> — от юридических лиц и ИП.</li>
                <li>Страховые взносы: не обязательны (можно платить добровольно).</li>
                <li>Максимальный доход: 2,4 млн ₽ в год (~200 000 ₽/месяц).</li>
                <li>Регистрация: 5 минут через приложение «Мой налог».</li>
              </ul>
              <p>
                <strong>Вывод:</strong> самозанятость идеальна для начинающих и фрилансеров с доходом до 200 000 ₽/месяц, работающих преимущественно с физлицами.
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">ИП на УСН 6%</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ставка налога: <strong>6%</strong> с дохода (как и самозанятый от юрлиц).</li>
                <li>Страховые взносы: фиксированные ~<strong>49 500 ₽ в год</strong> (2025–2026), плюс 1% с дохода свыше 300 000 ₽.</li>
                <li>Максимальный доход: без ограничений (до 265 млн ₽ для УСН).</li>
                <li>Плюс: взносы уменьшают налог на 100% (без сотрудников).</li>
              </ul>
              <p>
                <strong>Вывод:</strong> ИП выгоднее при доходе от 825 000 ₽ в год (~68 750 ₽/месяц) при работе с юрлицами — взносы покрываются налоговым вычетом. При высоком доходе (3–5 млн ₽/год) экономия существенная.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                <p className="text-xs text-amber-800 font-medium">
                  Практический совет: большинство фрилансеров с доходом до 150 000 ₽/месяц начинают с самозанятости. При росте дохода выше 200 000 ₽/месяц или переходе на b2b-проекты стоит рассмотреть ИП.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Пример расчёта для Python-разработчика
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Рассмотрим конкретный пример. Алексей — Python-разработчик с 3 годами опыта из Москвы. Хочет получать 200 000 ₽ в месяц на руки. Работает как самозанятый, преимущественно с юрлицами.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Желаемый доход</span>
                  <span className="font-semibold">200 000 ₽/мес</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Налог самозанятого (6%)</span>
                  <span className="font-semibold">12 766 ₽/мес</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Нужно выставить счётов</span>
                  <span className="font-semibold">212 766 ₽/мес</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between">
                  <span className="text-slate-500">Рабочих дней в году (минус 28 отпуска)</span>
                  <span className="font-semibold">224 дня</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Оплачиваемых часов в году (загрузка 70%)</span>
                  <span className="font-semibold">1 254 часа</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between text-base">
                  <span className="font-bold text-slate-800">Минимальная ставка</span>
                  <span className="font-bold text-indigo-700">~2 035 ₽/час</span>
                </div>
              </div>

              <p>
                Медианная ставка Python-разработчика в Москве в 2026 году — около 2 500 ₽/час. Значит, при ставке 2 035 ₽/час Алексей немного ниже рынка, и у него есть потенциал для роста.
              </p>
              <p>
                Если бы Алексей работал 6 часов в день вместо 8 — его минимальная ставка выросла бы до ~2 700 ₽/час. Сокращение рабочих часов в день требует повышения ставки, а не снижения доходов.
              </p>
              <p>
                Для быстрого расчёта под любые параметры воспользуйтесь{" "}
                <Link href="/" className="text-indigo-600 hover:underline font-medium">
                  калькулятором фрилансера на FreelanceCalc
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как влияет опыт на ставку
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Опыт — главный рычаг роста ставки фрилансера. Вот медианные ставки по уровням в 2026 году:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Специальность</th>
                      <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Junior</th>
                      <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Middle</th>
                      <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Senior</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Python-разработчик", "1 200 ₽", "2 500 ₽", "4 500 ₽"],
                      ["Frontend-разработчик", "1 000 ₽", "2 000 ₽", "3 800 ₽"],
                      ["UI/UX-дизайнер", "800 ₽", "1 800 ₽", "3 200 ₽"],
                      ["Копирайтер", "500 ₽", "1 000 ₽", "2 000 ₽"],
                      ["SEO-специалист", "700 ₽", "1 500 ₽", "2 800 ₽"],
                      ["Маркетолог", "900 ₽", "1 700 ₽", "3 000 ₽"],
                    ].map(([spec, junior, middle, senior]) => (
                      <tr key={spec} className="hover:bg-slate-50">
                        <td className="p-2 border border-slate-200 text-slate-700">{spec}</td>
                        <td className="p-2 border border-slate-200 text-right text-slate-500">{junior}</td>
                        <td className="p-2 border border-slate-200 text-right font-medium text-slate-700">{middle}</td>
                        <td className="p-2 border border-slate-200 text-right font-semibold text-indigo-700">{senior}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Медианные ставки для Москвы. В регионах — на 20–35% ниже.
              </p>

              <p>
                Разница между Junior и Senior — в 3–4 раза. Это не просто «больше лет опыта». Senior умеет:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Формулировать результат в бизнес-метриках, а не технических терминах.</li>
                <li>Работать асинхронно, давать точные оценки сроков и стоимости.</li>
                <li>Предупреждать о рисках заранее, а не после факапа.</li>
                <li>Специализироваться — узкая ниша даёт premium к ставке 50–100%.</li>
              </ul>

              <p>
                Самый быстрый способ вырасти в ставке — перейти от «делаю всё для всех» к «делаю конкретное для конкретной отрасли». Верстальщик для e-commerce на Shopify берёт вдвое больше, чем просто верстальщик.
              </p>
            </div>
          </section>

          {/* Section 5.5 — Project Cost */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как назвать цену клиенту: считаем стоимость проекта
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Знать свою часовую ставку — это полдела. Когда клиент приходит с задачей, ему нужна итоговая цена проекта, а не ставка за час. Как перейти от ставки к смете?
              </p>
              <p>
                Базовая формула стоимости проекта:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-800 mb-1">Стоимость проекта =</p>
                <p>Часовая ставка × Оценка часов × Коэффициент правок</p>
              </div>
              <p>
                Коэффициент правок — страховочный буфер. Большинство проектов выходят за первоначальную оценку на 20–40%. Стандартная практика: умножать оценку на <strong>1,2–1,4</strong> (закладывать 20–40% на доработки и уточнение требований).
              </p>
              <p>
                Пример: дизайнер с ставкой 1 800 ₽/час оценил лендинг в 20 часов работы. С коэффициентом правок 1,3: стоимость = 1 800 × 20 × 1,3 = <strong>46 800 ₽</strong>. Округлив до 47 000 ₽ — это честная цена с защитой от размытия объёма.
              </p>
              <p>
                Для быстрого расчёта бюджета по специальности и объёму работы используйте{" "}
                <Link
                  href="/instrumenty/kalkulator-stoimosti-proekta"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  калькулятор стоимости проекта →
                </Link>
              </p>
            </div>
          </section>

          {/* Mid-article CTA — market data */}
          <section className="bg-slate-800 text-white rounded-2xl p-6 text-center">
            <h2 className="text-lg font-bold mb-2">Сравните со своей специальностью</h2>
            <p className="text-slate-300 text-sm mb-4">
              Данные hh.ru по 26 специальностям, 3 уровням опыта и 24 городам России — обновляются ежедневно.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/stavka"
                className="inline-block bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-400 transition-colors"
              >
                Ставки по специальностям →
              </Link>
              <Link
                href="/salary-index"
                className="inline-block bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-600 transition-colors"
              >
                Индекс рынка 2026
              </Link>
            </div>
          </section>

          {/* Section 6 — FAQ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">FAQ</h2>
            <div className="space-y-5">
              {[
                {
                  q: "Как рассчитать ставку фрилансера онлайн?",
                  a: "Воспользуйтесь онлайн-калькулятором на FreelanceCalc.ru. Введите желаемый доход, выберите налоговый режим, укажите рабочие часы, дни отпуска и коэффициент загрузки. Результат — ваша минимальная часовая и дневная ставка.",
                },
                {
                  q: "Что такое коэффициент загрузки фрилансера?",
                  a: "Это доля времени, когда вы реально работаете на оплачиваемых проектах. Оставшееся время уходит на поиск клиентов, переговоры, тестовые задания и простой. У опытных фрилансеров загрузка 65–75%, у начинающих — 40–55%. Именно поэтому ставка должна быть выше, чем кажется «на первый взгляд».",
                },
                {
                  q: "Нужно ли платить страховые взносы самозанятому?",
                  a: "Нет. Самозанятый не обязан платить страховые взносы в СФР. Это главное преимущество перед ИП. Однако без взносов не идёт страховой стаж для пенсии — если это важно, можно платить добровольно.",
                },
                {
                  q: "Как часто нужно пересчитывать свою ставку?",
                  a: "Минимум раз в год — с учётом инфляции (8–12% в год). При смене налогового режима, изменении рабочего графика или желаемого дохода — немедленно. Многие фрилансеры не поднимали ставку годами и теряют реальный доход.",
                },
                {
                  q: "Как учесть больничные при расчёте ставки?",
                  a: "Самозанятый и ИП не получают оплачиваемых больничных. Обычная практика — добавить 5–10 дней к плановому «отпуску» в калькуляторе, чтобы заложить резерв на непредвиденные нерабочие дни. Это немного повысит ставку, но защитит ваш доход.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">{item.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom nav links */}
          <section className="bg-slate-50 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Полезные материалы
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Link
                href="/guide"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Как поднять ставку на 30%
              </Link>
              <Link
                href="/stavka"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Ставки по специальностям
              </Link>
              <Link
                href="/nalog/sravnenie"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Сравнение налоговых режимов
              </Link>
              <Link
                href="/instrumenty/kalkulator-stoimosti-proekta"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Стоимость проекта →
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
