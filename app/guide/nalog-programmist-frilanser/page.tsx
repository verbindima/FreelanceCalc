import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Налог программиста-фрилансера 2026: самозанятый vs ИП — что выгоднее | FreelanceCalc",
  description:
    "Сколько налогов платит программист-фрилансер в 2026 году. Самозанятый 4–6%, ИП УСН 6%, НДФЛ 13%. Реальные примеры расчётов для junior, middle, senior. Калькулятор онлайн.",
  alternates: { canonical: `${BASE_URL}/guide/nalog-programmist-frilanser` },
  openGraph: {
    title: "Налог программиста-фрилансера 2026: самозанятый vs ИП",
    description:
      "Junior 80k/мес → самозанятый экономит 4 240 ₽. Senior 250k/мес → ИП выгоднее на 8 500 ₽/мес. Полный расчёт с цифрами.",
    url: `${BASE_URL}/guide/nalog-programmist-frilanser`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Налог программиста-фрилансера 2026: самозанятый vs ИП",
    description:
      "Junior 80k, Middle 150k, Senior 250k — расчёт налогов для каждого уровня. Что выгоднее и когда переходить на ИП.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какой налог платит программист-фрилансер в России в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Зависит от налогового режима. Самозанятый платит 4% при работе с физлицами или 6% с юрлицами. ИП на УСН 6% платит 6% с дохода, но может уменьшить налог на страховые взносы (53 658 ₽/год). Если работать без регистрации — НДФЛ 13%, что самый невыгодный вариант.",
      },
    },
    {
      "@type": "Question",
      name: "Когда программисту-фрилансеру выгоднее стать самозанятым, а не ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При доходе до ~75 000 ₽/месяц (900 000 ₽/год) самозанятость выгоднее: нет обязательных страховых взносов 53 658 ₽/год. При доходе выше 75 000 ₽/месяц ИП на УСН 6% становится сопоставимым или выгоднее — взносы перекрываются экономией на налоге за счёт вычета. При доходе выше 200 000 ₽/месяц ИП значительно выгоднее.",
      },
    },
    {
      "@type": "Question",
      name: "Может ли программист работать на фриланс-биржах как самозанятый?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Upwork, Toptal, Habr Freelance, FL.ru принимают самозанятых. Нужно выписывать чек через приложение «Мой налог». Важно: если зарубежная компания платит в валюте, при конвертации в рубли налог считается с рублёвой суммы по курсу ЦБ на дату получения. Лимит самозанятого — 2,4 млн ₽/год (~200 000 ₽/мес).",
      },
    },
    {
      "@type": "Question",
      name: "Нужна ли кассовая техника программисту-фрилансеру на ИП?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, если работаете только с юридическими лицами и ИП по безналичному расчёту (расчётный счёт, банковский перевод). Онлайн-касса нужна только при расчётах с физлицами наличными или картой. Большинство IT-фрилансеров работают с компаниями — касса не нужна.",
      },
    },
    {
      "@type": "Question",
      name: "Как программисту рассчитать минимальную ставку с учётом налогов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: ставка = желаемый доход на руки ÷ (1 − налоговая нагрузка). Для самозанятого с юрлицами: ставка = доход ÷ 0,94. Для ИП УСН 6% при доходе 1,5 млн/год: нагрузка ≈ 6%, ставка = доход ÷ 0,94. Используйте калькулятор FreelanceCalc для точного расчёта с учётом режима, опыта и города.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Налог программиста-фрилансера в 2026 году: самозанятый vs ИП",
  description:
    "Полный разбор налогов для IT-фрилансеров в России: самозанятый 4–6%, ИП УСН 6%, НДФЛ 13%. Расчёты для junior, middle, senior с конкретными суммами.",
  url: `${BASE_URL}/guide/nalog-programmist-frilanser`,
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function NalogProgrammistFrilanserPage() {
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
            Налог программиста‑фрилансера в 2026 году: самозанятый, ИП или НДФЛ
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Junior, middle, senior — считаем налог для каждого уровня. Когда самозанятость выгоднее ИП и что происходит при доходе 250 000 ₽/месяц.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 10 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick Calculator CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Рассчитайте свою ставку с учётом налогового режима
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Укажите желаемый доход и режим (самозанятый / ИП) — получите минимальную ставку для выставления клиенту
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Рассчитать ставку программиста →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Три режима */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Три варианта: самозанятый, ИП, физлицо
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Программист-фрилансер в России может работать в трёх правовых форматах. Каждый имеет свою налоговую нагрузку, ограничения и сценарии применения.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse mt-3">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left p-2 border border-slate-200 font-semibold text-slate-700">Параметр</th>
                      <th className="text-center p-2 border border-slate-200 font-semibold text-indigo-700">Самозанятый</th>
                      <th className="text-center p-2 border border-slate-200 font-semibold text-emerald-700">ИП УСН 6%</th>
                      <th className="text-center p-2 border border-slate-200 font-semibold text-amber-700">Физлицо (НДФЛ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-slate-200 text-slate-600">Ставка налога</td>
                      <td className="p-2 border border-slate-200 text-center">4% (физлица) / 6% (юрлица)</td>
                      <td className="p-2 border border-slate-200 text-center">6% с дохода</td>
                      <td className="p-2 border border-slate-200 text-center">13–22% НДФЛ</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-2 border border-slate-200 text-slate-600">Страховые взносы</td>
                      <td className="p-2 border border-slate-200 text-center">Нет (добровольно)</td>
                      <td className="p-2 border border-slate-200 text-center">53 658 ₽/год</td>
                      <td className="p-2 border border-slate-200 text-center">Платит работодатель</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-slate-200 text-slate-600">Лимит дохода</td>
                      <td className="p-2 border border-slate-200 text-center">2,4 млн ₽/год</td>
                      <td className="p-2 border border-slate-200 text-center">265,8 млн ₽/год</td>
                      <td className="p-2 border border-slate-200 text-center">Нет лимита</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-2 border border-slate-200 text-slate-600">Регистрация</td>
                      <td className="p-2 border border-slate-200 text-center">Приложение «Мой налог»</td>
                      <td className="p-2 border border-slate-200 text-center">Налоговая / МФЦ</td>
                      <td className="p-2 border border-slate-200 text-center">Не нужна</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-slate-200 text-slate-600">Отчётность</td>
                      <td className="p-2 border border-slate-200 text-center">Нет (автоматически)</td>
                      <td className="p-2 border border-slate-200 text-center">1 декларация/год</td>
                      <td className="p-2 border border-slate-200 text-center">3-НДФЛ раз в год</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                * НДФЛ 13% при годовом доходе до 2,4 млн ₽; 15% — с суммы сверх 2,4 млн; 22% — с суммы сверх 5 млн ₽ (2025–2026 гг.).
              </p>
            </div>
          </section>

          {/* Section 2 — Расчёты для junior */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Junior-разработчик: 80 000 ₽/месяц
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Junior-программист на фрилансе зарабатывает в среднем 60 000–100 000 ₽/месяц. Возьмём 80 000 ₽ (960 000 ₽/год) как базу для расчёта.
              </p>
              <div className="space-y-4">
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                  <p className="text-xs font-semibold text-indigo-800 mb-2">Самозанятый (работает с компаниями, 6%):</p>
                  <ul className="text-xs text-indigo-700 space-y-1">
                    <li>• Доход: 960 000 ₽/год</li>
                    <li>• Налог НПД: 960 000 × 6% = <strong>57 600 ₽/год</strong></li>
                    <li>• Страховые взносы: 0 ₽ (добровольно)</li>
                    <li>• Итого к уплате: <strong>57 600 ₽/год (4 800 ₽/мес)</strong></li>
                    <li>• «На руки»: <strong>75 200 ₽/месяц</strong></li>
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  <p className="text-xs font-semibold text-emerald-800 mb-2">ИП УСН 6%:</p>
                  <ul className="text-xs text-emerald-700 space-y-1">
                    <li>• Доход: 960 000 ₽/год</li>
                    <li>• Налог УСН до вычета: 960 000 × 6% = 57 600 ₽</li>
                    <li>• Страховые взносы: 53 658 ₽ фикс. + (960 000 − 300 000) × 1% = 6 600 ₽ = <strong>60 258 ₽</strong></li>
                    <li>• Взносы > налога → налог = 0 (вычет 100%)</li>
                    <li>• Итого к уплате: <strong>60 258 ₽/год (5 022 ₽/мес)</strong></li>
                    <li>• «На руки»: <strong>74 978 ₽/месяц</strong></li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-2">
                <p className="text-xs text-amber-800">
                  <strong>Вывод для junior:</strong> Самозанятость выгоднее на ~222 ₽/месяц. Разница минимальная, но преимущество самозанятого — простота: нет банковского счёта ИП (~1 000–2 000 ₽/мес обслуживание), нет регистрации в налоговой, нет декларации.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Middle */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Middle-разработчик: 150 000 ₽/месяц
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Middle-разработчик на фрилансе зарабатывает 120 000–200 000 ₽/месяц. При 150 000 ₽ годовой доход составляет 1 800 000 ₽ — близко к порогу выгодности ИП.
              </p>
              <div className="space-y-4">
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                  <p className="text-xs font-semibold text-indigo-800 mb-2">Самозанятый (работает с компаниями, 6%):</p>
                  <ul className="text-xs text-indigo-700 space-y-1">
                    <li>• Доход: 1 800 000 ₽/год</li>
                    <li>• Налог НПД: 1 800 000 × 6% = <strong>108 000 ₽/год</strong></li>
                    <li>• Итого к уплате: <strong>108 000 ₽/год (9 000 ₽/мес)</strong></li>
                    <li>• «На руки»: <strong>141 000 ₽/месяц</strong></li>
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  <p className="text-xs font-semibold text-emerald-800 mb-2">ИП УСН 6%:</p>
                  <ul className="text-xs text-emerald-700 space-y-1">
                    <li>• Доход: 1 800 000 ₽/год</li>
                    <li>• Налог УСН до вычета: 108 000 ₽</li>
                    <li>• Взносы: 53 658 ₽ + (1 800 000 − 300 000) × 1% = 15 000 ₽ = <strong>68 658 ₽</strong></li>
                    <li>• Налог к уплате: 108 000 − 68 658 = <strong>39 342 ₽</strong></li>
                    <li>• Итого: 68 658 + 39 342 = <strong>108 000 ₽/год (9 000 ₽/мес)</strong></li>
                    <li>• «На руки»: <strong>141 000 ₽/месяц</strong></li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mt-2">
                <p className="text-xs text-slate-700">
                  <strong>Вывод для middle:</strong> При 150 000 ₽/мес налоговая нагрузка одинакова — 6% в обоих случаях. Выбор зависит от других факторов: нужен ли расчётный счёт ИП для крупных корпоративных заказчиков, планируете ли превысить лимит самозанятого 2,4 млн ₽/год.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — Senior */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Senior-разработчик: 250 000 ₽/месяц
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Senior зарабатывает 200 000–400 000 ₽/месяц. При 250 000 ₽/мес годовой доход — 3 000 000 ₽, что превышает лимит самозанятого. <strong>Самозанятость невозможна.</strong>
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                <p className="text-xs font-semibold text-red-800 mb-1">Важно для senior:</p>
                <p className="text-xs text-red-700">
                  Лимит НПД — 2 400 000 ₽/год (~200 000 ₽/мес). При превышении статус самозанятого автоматически прекращается. Нужно заранее открыть ИП и перейти на УСН.
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-emerald-800 mb-2">ИП УСН 6% при 3 000 000 ₽/год:</p>
                <ul className="text-xs text-emerald-700 space-y-1">
                  <li>• Доход: 3 000 000 ₽/год</li>
                  <li>• Налог УСН до вычета: 3 000 000 × 6% = 180 000 ₽</li>
                  <li>• Взносы: 53 658 ₽ + (3 000 000 − 300 000) × 1% = 27 000 ₽ = <strong>80 658 ₽</strong></li>
                  <li>• Налог к уплате: 180 000 − 80 658 = <strong>99 342 ₽</strong></li>
                  <li>• Итого к уплате: 80 658 + 99 342 = <strong>180 000 ₽/год</strong></li>
                  <li>• Эффективная ставка: <strong>6% (из дохода)</strong></li>
                  <li>• «На руки»: <strong>235 000 ₽/месяц</strong></li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-2">
                <p className="text-xs text-amber-800">
                  <strong>Вывод для senior:</strong> ИП на УСН 6% — единственный реальный вариант. Эффективная нагрузка остаётся 6% независимо от уровня дохода (взносы полностью поглощаются налогом). При доходе 3+ млн/год экономия на фиксированных взносах — до 80 658 ₽/год по сравнению со ставкой 6% без вычета.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Как посчитать ставку */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как рассчитать минимальную ставку для клиента
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Многие программисты ошибаются: называют клиенту ставку, которую хотят «на руки», забывая вычесть налог. В результате — меньше запланированного.
              </p>
              <div className="bg-slate-800 text-slate-100 rounded-xl p-4 font-mono text-xs">
                <p className="text-slate-400 mb-2">// Формулы расчёта ставки:</p>
                <p className="text-green-400">// Самозанятый (работа с юрлицами, 6%)</p>
                <p>ставка = нужный доход / 0.94</p>
                <br/>
                <p className="text-green-400">// ИП УСН 6% (доход ~1,5 млн/год)</p>
                <p>ставка = нужный доход / 0.94</p>
                <br/>
                <p className="text-green-400">// Физлицо (НДФЛ 13%)</p>
                <p>ставка = нужный доход / 0.87</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-blue-800 mb-2">Пример: хочу 150 000 ₽ на руки, работаю с юрлицами как самозанятый</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Ставка клиенту = 150 000 / 0.94 = <strong>159 574 ₽/месяц</strong></li>
                  <li>• Налог 6%: 159 574 × 6% = 9 574 ₽</li>
                  <li>• «На руки»: 159 574 − 9 574 = <strong>150 000 ₽ ✓</strong></li>
                </ul>
              </div>
              <p>
                Используйте <Link href="/" className="text-indigo-600 hover:underline font-medium">калькулятор FreelanceCalc</Link> — он автоматически считает нужную ставку с учётом налогового режима, города и уровня опыта. Можно указать желаемый доход «на руки» и получить сумму для выставления счёта.
              </p>
            </div>
          </section>

          {/* Section 6 — Иностранные клиенты */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Иностранные клиенты: Upwork, Toptal, прямые контракты
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Многие российские программисты работают с зарубежными заказчиками. Налоговый режим при этом не меняется — важно правильно получить деньги.
              </p>
              <div className="space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate-700 mb-2">Самозанятый + иностранный клиент:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Налог 6% (иностранный заказчик = юрлицо)</li>
                    <li>• Чек выписывается в «Мой налог» в рублях по курсу ЦБ на дату получения</li>
                    <li>• Получение через Wise, расчётный счёт, криптообменники (серая зона)</li>
                    <li>• Лимит 2,4 млн ₽/год (~$26 000 по курсу 90 ₽/$) — для senior мало</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  <p className="text-xs font-semibold text-emerald-800 mb-2">ИП + иностранный клиент (рекомендуется):</p>
                  <ul className="text-xs text-emerald-700 space-y-1">
                    <li>• Валютный контракт, оплата на транзитный валютный счёт</li>
                    <li>• Зачисление в рублях через уполномоченный банк</li>
                    <li>• Налог 6% с рублёвого эквивалента</li>
                    <li>• Нет лимита по сумме — подходит для senior с высоким доходом</li>
                    <li>• Нужен валютный контроль (документы в банк): контракт, акты</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 — Практические советы */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Практические советы программисту-фрилансеру
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed">
              <ol className="space-y-3 list-none">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <p className="font-semibold text-slate-700">Начинайте как самозанятый</p>
                    <p className="text-xs text-slate-500 mt-0.5">Регистрация за 5 минут в «Мой налог». Нет расчётного счёта, нет декларации, нет взносов. Оптимально для старта и дохода до 150 000 ₽/мес.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <p className="font-semibold text-slate-700">Открывайте ИП при доходе выше 150 000 ₽/мес</p>
                    <p className="text-xs text-slate-500 mt-0.5">Не ждите достижения лимита 2,4 млн — открытие ИП занимает 3–5 дней, лучше сделать заранее. При превышении лимита самозанятость автоматически закрывается.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <p className="font-semibold text-slate-700">Платите взносы ИП поквартально</p>
                    <p className="text-xs text-slate-500 mt-0.5">Перечисляйте взносы в январе, апреле, июле, октябре — тогда вычтете их из авансовых платежей УСН и не переплатите авансом.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <p className="font-semibold text-slate-700">Выставляйте счета с учётом налога</p>
                    <p className="text-xs text-slate-500 mt-0.5">Называйте клиенту сумму с учётом 6% сверху. Используйте <Link href="/" className="text-indigo-600 hover:underline">FreelanceCalc</Link> для расчёта нужной ставки перед отправкой КП.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                  <div>
                    <p className="font-semibold text-slate-700">Не работайте «в серую» с крупными компаниями</p>
                    <p className="text-xs text-slate-500 mt-0.5">Компании с штатом 10+ человек обязаны платить НДФЛ и взносы с разовых подрядчиков-физлиц. Они откажут или предложат «налоговый агент» схему. Самозанятый или ИП решают проблему.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 8 — Калькулятор CTA */}
          <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-center text-white">
            <h2 className="text-xl font-bold mb-2">
              Посчитайте свою ставку прямо сейчас
            </h2>
            <p className="text-indigo-200 text-sm mb-4">
              Укажите желаемый доход, налоговый режим и специализацию — калькулятор покажет минимальную ставку для клиента и сравнит режимы.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
            >
              Открыть калькулятор фрилансера →
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-5">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors list-none">
                  Какой налог платит программист-фрилансер в России в 2026 году?
                  <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-1">
                  Зависит от налогового режима. Самозанятый платит 4% при работе с физлицами или 6% с юрлицами. ИП на УСН 6% платит 6% с дохода, но может уменьшить налог на страховые взносы (53 658 ₽/год). Работать без регистрации — НДФЛ 13–22%, самый невыгодный вариант.
                </p>
              </details>
              <div className="border-t border-slate-100" />
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors list-none">
                  Когда программисту-фрилансеру выгоднее стать самозанятым, а не ИП?
                  <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-1">
                  При доходе до ~75 000 ₽/месяц (900 000 ₽/год) самозанятость выгоднее: нет обязательных страховых взносов 53 658 ₽/год. При доходе выше — ИП на УСН 6% становится сопоставимым. При доходе выше 200 000 ₽/месяц ИП значительно удобнее, а при 200 000 ₽/мес — единственный вариант (превышение лимита НПД).
                </p>
              </details>
              <div className="border-t border-slate-100" />
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors list-none">
                  Может ли программист работать на фриланс-биржах как самозанятый?
                  <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-1">
                  Да. Habr Freelance, FL.ru, Upwork принимают самозанятых. Нужно выписывать чек через приложение «Мой налог». При получении валюты налог считается с рублёвой суммы по курсу ЦБ на дату получения. Лимит самозанятого — 2,4 млн ₽/год (~200 000 ₽/мес).
                </p>
              </details>
              <div className="border-t border-slate-100" />
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors list-none">
                  Нужна ли кассовая техника программисту-фрилансеру на ИП?
                  <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-1">
                  Нет, если работаете только с юридическими лицами и ИП по безналичному расчёту. Онлайн-касса нужна только при расчётах с физлицами наличными или картой. Большинство IT-фрилансеров работают с компаниями — касса не нужна.
                </p>
              </details>
              <div className="border-t border-slate-100" />
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors list-none">
                  Как программисту рассчитать минимальную ставку с учётом налогов?
                  <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-1">
                  Формула: ставка = желаемый доход на руки ÷ (1 − налоговая нагрузка). Для самозанятого с юрлицами: ставка = доход ÷ 0,94. Или используйте калькулятор FreelanceCalc — он автоматически считает нужную ставку с учётом режима, опыта и города.
                </p>
              </details>
            </div>
          </section>

          {/* Navigation links */}
          <section className="border-t border-slate-100 pt-6">
            <p className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wide">Связанные материалы</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guide/nalog-samozanyatyj"
                className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-colors text-sm text-slate-700 hover:text-indigo-700"
              >
                <span className="text-lg">📊</span>
                <span>Налог самозанятого 2026</span>
              </Link>
              <Link
                href="/guide/nalog-ip-usn-6"
                className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-colors text-sm text-slate-700 hover:text-indigo-700"
              >
                <span className="text-lg">🧮</span>
                <span>ИП УСН 6%: полный расчёт</span>
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-colors text-sm text-slate-700 hover:text-indigo-700"
              >
                <span className="text-lg">⚖️</span>
                <span>ИП vs самозанятый: что выбрать</span>
              </Link>
              <Link
                href="/guide/kalkulyator-frilansera"
                className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-colors text-sm text-slate-700 hover:text-indigo-700"
              >
                <span className="text-lg">💡</span>
                <span>Калькулятор ставки фрилансера</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
