import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Страховые взносы ИП в 2026 году: сколько платить фрилансеру | FreelanceCalc",
  description:
    "Фиксированные страховые взносы ИП 2026: 53 658 ₽ + 1% с дохода свыше 300 000 ₽. Как уменьшить налог УСН до нуля, сроки уплаты, пример расчёта для фрилансера.",
  alternates: { canonical: `${BASE_URL}/guide/strahovye-vznosy-ip-2026` },
  openGraph: {
    title: "Страховые взносы ИП 2026: 53 658 ₽ + 1% — расчёт для фрилансера",
    description:
      "Сколько платит ИП-фрилансер в 2026 году: фиксированная часть, дополнительный 1%, как вычесть взносы из налога. Онлайн-калькулятор.",
    url: `${BASE_URL}/guide/strahovye-vznosy-ip-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Страховые взносы ИП 2026: 53 658 ₽ + 1%",
    description:
      "Фиксированные взносы, дополнительный 1%, как уменьшить налог УСН. Пример расчёта для фрилансера.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько страховых взносов платит ИП в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В 2026 году фиксированные страховые взносы ИП составляют 53 658 рублей в год (объединённый платёж ОПС + ОМС). Дополнительно — 1% от дохода, превышающего 300 000 рублей в год. Например, при доходе 1 000 000 ₽/год дополнительный взнос = (1 000 000 − 300 000) × 1% = 7 000 ₽. Итого: 53 658 + 7 000 = 60 658 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли уменьшить налог УСН 6% на страховые взносы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. ИП без наёмных сотрудников вправе уменьшить налог УСН 6% на всю сумму уплаченных страховых взносов — до 100%. Это означает, что при небольших доходах налог к уплате может быть нулевым: взносы полностью перекрывают его. При доходе свыше ~894 300 ₽/год экономия от вычета взносов делает ИП выгоднее самозанятости.",
      },
    },
    {
      "@type": "Question",
      name: "До какого числа ИП обязан уплатить страховые взносы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Фиксированная часть (53 658 ₽) должна быть уплачена не позднее 31 декабря текущего года. Дополнительный взнос 1% с дохода свыше 300 000 ₽ — не позднее 1 июля следующего года. Для уменьшения авансового платежа по УСН взносы нужно уплатить до окончания квартала, за который считается аванс.",
      },
    },
    {
      "@type": "Question",
      name: "Что выгоднее для фрилансера: платить взносы как ИП или стать самозанятым?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "До дохода ~894 300 ₽/год (~74 500 ₽/месяц) выгоднее самозанятость: нет обязательных взносов 53 658 ₽. При доходе выше — ИП на УСН 6% выгоднее: взносы полностью вычитаются из налога, эффективная ставка падает ниже 6%. При доходе 2 000 000 ₽/год ИП платит в бюджет столько же, сколько самозанятый (6%), но зарабатывает пенсионный стаж.",
      },
    },
    {
      "@type": "Question",
      name: "Платит ли ИП взносы если не было дохода?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Фиксированные взносы 53 658 ₽ обязательны независимо от наличия дохода. Исключение — льготные периоды: военная служба, уход за ребёнком до 1,5 лет, уход за инвалидом I группы. В эти периоды можно приостановить деятельность ИП и не платить взносы. Если доходов нет, но ИП не ликвидировано — взносы начисляются.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Страховые взносы ИП в 2026 году: сколько платить фрилансеру",
  description:
    "Фиксированные страховые взносы ИП 2026: 53 658 ₽ + 1% с дохода свыше 300 000 ₽. Как уменьшить налог УСН до нуля, сроки, расчёт.",
  url: `${BASE_URL}/guide/strahovye-vznosy-ip-2026`,
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function StrahovyeVznosyIpPage() {
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
            Страховые взносы ИП в 2026 году: сколько платить фрилансеру
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Фиксированная часть, дополнительный 1%, как уменьшить налог УСН до нуля — и когда ИП выгоднее самозанятости.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 7 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick Calculator CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Рассчитайте нагрузку ИП с учётом взносов
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Введите доход — калькулятор покажет налог УСН после вычета взносов и итоговую нагрузку
          </p>
          <Link
            href="/nalog/sravnenie"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Сравнить режимы и взносы →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Что такое страховые взносы */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Что такое страховые взносы и почему ИП обязан их платить
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Страховые взносы — обязательные платежи ИП в Социальный фонд России (СФР). Они формируют пенсионный стаж и право на медицинскую помощь по ОМС. В отличие от наёмного работника, за которого взносы платит работодатель, ИП платит их самостоятельно.
              </p>
              <p>
                <strong>Важно:</strong> взносы обязательны вне зависимости от наличия дохода. Даже если фрилансер три месяца не работал — взносы начисляются за весь период, пока ИП числится в реестре.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 font-semibold mb-2">Почему взносы выгодны — не только обязанность</p>
                <ul className="text-xs text-amber-700 space-y-1">
                  <li>✓ Полностью уменьшают налог УСН (до 100% при отсутствии сотрудников)</li>
                  <li>✓ Формируют пенсионный стаж и пенсионные баллы</li>
                  <li>✓ Дают право на бесплатную медпомощь по ОМС</li>
                  <li>✓ При доходе выше ~894 000 ₽/год ИП + взносы выгоднее самозанятости</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 — Размер взносов 2026 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Размер страховых взносов ИП в 2026 году
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                С 2023 года взносы объединены в единый платёж — отдельно уплачивать ОПС (пенсионное) и ОМС (медицинское) не нужно:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="font-bold text-blue-800 text-xl mb-1">53 658 ₽</p>
                  <p className="text-xs text-blue-700 font-semibold mb-2">Фиксированная часть</p>
                  <p className="text-xs text-blue-600">
                    Платится каждый год до 31 декабря. Не зависит от дохода. Для ИП, зарегистрировавшегося в середине года, — пропорционально числу дней.
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <p className="font-bold text-orange-800 text-xl mb-1">+1%</p>
                  <p className="text-xs text-orange-700 font-semibold mb-2">Дополнительный взнос</p>
                  <p className="text-xs text-orange-600">
                    1% от дохода свыше 300 000 ₽/год. Срок — до 1 июля следующего года. Максимум = 8 × 53 658 = 429 264 ₽.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Как рассчитать дополнительный взнос</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs font-mono">
                <p className="font-semibold text-slate-700 not-italic">Формула:</p>
                <p className="text-slate-600">Доп. взнос = (Годовой доход − 300 000 ₽) × 1%</p>
              </div>

              <div className="space-y-2 mt-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Примеры расчёта</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left p-2 font-semibold text-slate-700 border border-slate-200">Годовой доход</th>
                        <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Фиксированные</th>
                        <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Доп. 1%</th>
                        <th className="text-right p-2 font-semibold text-slate-700 border border-slate-200">Итого взносов</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["300 000 ₽", "53 658 ₽", "0 ₽", "53 658 ₽"],
                        ["600 000 ₽", "53 658 ₽", "3 000 ₽", "56 658 ₽"],
                        ["1 000 000 ₽", "53 658 ₽", "7 000 ₽", "60 658 ₽"],
                        ["1 500 000 ₽", "53 658 ₽", "12 000 ₽", "65 658 ₽"],
                        ["2 000 000 ₽", "53 658 ₽", "17 000 ₽", "70 658 ₽"],
                        ["3 000 000 ₽", "53 658 ₽", "27 000 ₽", "80 658 ₽"],
                      ].map(([income, fixed, extra, total]) => (
                        <tr key={income} className="hover:bg-slate-50">
                          <td className="p-2 border border-slate-200 font-medium text-slate-700">{income}</td>
                          <td className="p-2 border border-slate-200 text-right text-slate-600">{fixed}</td>
                          <td className="p-2 border border-slate-200 text-right text-orange-600">{extra}</td>
                          <td className="p-2 border border-slate-200 text-right font-bold text-slate-800">{total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — Уменьшение налога УСН */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как уменьшить налог УСН 6% на взносы: главная выгода ИП
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                ИП на УСН 6% без наёмных сотрудников вправе вычесть <strong>100% уплаченных взносов</strong> из суммы налога. Это главное финансовое преимущество ИП перед самозанятым при высоких доходах.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-2">Формула налога ИП УСН 6% с вычетом взносов:</p>
                <p className="text-xs text-green-700 font-mono">
                  Налог к уплате = (Доход × 6%) − Взносы уплаченные
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Если взносы ≥ налог → налог к уплате = 0. Взносы не «сгорают» — они просто перекрывают налог.
                </p>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Пример расчёта для фрилансера</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Фриланс-разработчик, доход 1 500 000 ₽/год (125 000 ₽/месяц):</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Доход за год</span>
                    <span className="font-semibold">1 500 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Налог до вычета (6%)</span>
                    <span className="font-semibold">90 000 ₽</span>
                  </div>
                  <div className="border-t border-slate-200 pt-1.5 flex justify-between text-slate-500">
                    <span>Фиксированные взносы</span>
                    <span>− 53 658 ₽</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Доп. взнос 1% × (1 500 000 − 300 000)</span>
                    <span>− 12 000 ₽</span>
                  </div>
                  <div className="border-t border-slate-200 pt-1.5 flex justify-between font-bold text-indigo-700">
                    <span>Налог к уплате</span>
                    <span>24 342 ₽</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Итого в бюджет (налог + взносы)</span>
                    <span>90 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Эффективная ставка</span>
                    <span className="font-semibold text-green-700">6,0% — как УСН</span>
                  </div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 mt-2">
                  <p className="text-xs text-indigo-700">
                    <strong>Вывод:</strong> при доходе 1,5 млн ₽ общая нагрузка = 6% — как у самозанятого. Но ИП накапливает пенсионный стаж и может нанять сотрудников. При доходе выше 1,5 млн ₽ взносы «разбавляются» доходом, и эффективная нагрузка падает ниже 6%.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Порог выгоды ИП vs самозанятый</h3>
              <p>
                При каком доходе ИП становится выгоднее самозанятого? Точка безубыточности — когда сэкономленный налог равен взносам:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs">
                <p className="text-slate-600">Доход × 6% − Взносы = Доход × 6%</p>
                <p className="text-slate-600 mt-1">Взносы / 6% = 53 658 / 0,06 ≈ <strong className="text-slate-800 not-italic">894 300 ₽/год</strong> (~74 525 ₽/месяц)</p>
              </div>
              <p className="text-sm text-slate-600">
                При доходе ниже 894 300 ₽/год — самозанятый выгоднее (нет взносов). При доходе выше — ИП выгоднее: взносы компенсируются за счёт налогового вычета.
              </p>
            </div>
          </section>

          {/* Section 4 — Сроки уплаты */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Сроки уплаты взносов и авансовые платежи
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Формально взносы можно платить раз в год — до дедлайна. Но для уменьшения <strong>авансовых платежей</strong> по УСН лучше платить поквартально.
              </p>

              <div className="space-y-3">
                {[
                  {
                    deadline: "До 31 марта",
                    desc: "Уплата взносов для уменьшения аванса за I квартал (январь–март)",
                    highlight: false,
                  },
                  {
                    deadline: "До 30 июня",
                    desc: "Уплата взносов для уменьшения аванса за полугодие (январь–июнь)",
                    highlight: false,
                  },
                  {
                    deadline: "До 30 сентября",
                    desc: "Уплата взносов для уменьшения аванса за 9 месяцев",
                    highlight: false,
                  },
                  {
                    deadline: "До 31 декабря",
                    desc: "Финальный срок уплаты фиксированной части взносов (53 658 ₽)",
                    highlight: true,
                  },
                  {
                    deadline: "До 1 июля\nследующего года",
                    desc: "Срок уплаты дополнительного взноса 1% с дохода свыше 300 000 ₽",
                    highlight: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 p-3 rounded-xl border ${
                      item.highlight
                        ? "bg-red-50 border-red-200"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 text-xs font-bold whitespace-pre-line ${
                        item.highlight ? "text-red-700" : "text-slate-700"
                      }`}
                    >
                      {item.deadline}
                    </span>
                    <span className="text-xs text-slate-600">{item.desc}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800 font-semibold mb-1">Лайфхак для фрилансеров</p>
                <p className="text-xs text-amber-700">
                  Платите взносы поквартально равными частями (~13 414 ₽/квартал из 53 658 ₽). Это позволяет уменьшать каждый авансовый платёж по УСН и не держать всю сумму до декабря. Авансы по УСН платятся до 28 апреля, 28 июля, 28 октября.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Пропорциональный расчёт */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Если ИП зарегистрировано не с начала года
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Фиксированные взносы рассчитываются пропорционально числу дней, в течение которых вы числились ИП в текущем году.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs">
                <p className="font-semibold text-slate-700 not-italic mb-2">Формула:</p>
                <p className="text-slate-600">Взносы = 53 658 × (Кол-во дней ИП / 365)</p>
                <p className="text-slate-400 mt-2 not-italic">
                  Пример: ИП открыто 1 апреля (275 дней до конца года):<br />
                  53 658 × (275 / 365) = <strong className="text-slate-700">40 436 ₽</strong>
                </p>
              </div>

              <p>
                День регистрации ИП включается в расчёт, день снятия с учёта — нет. ФНС рассчитывает сумму автоматически — вы увидите её в личном кабинете на nalog.ru.
              </p>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Льготные периоды: когда взносы не начисляются</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Военная служба по призыву</li>
                <li>Уход за ребёнком до 1,5 лет (каждый ребёнок)</li>
                <li>Уход за инвалидом I группы или ребёнком-инвалидом</li>
                <li>Уход за пожилым человеком старше 80 лет</li>
              </ul>
              <p className="text-xs text-slate-500">
                Для применения льготы нужно подать заявление в ФНС и документально подтвердить основание. Деятельность ИП в этот период не должна вестись.
              </p>
            </div>
          </section>

          {/* Section 6 — Как учесть в ставке */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как взносы влияют на почасовую ставку фрилансера
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Взносы — это фиксированная стоимость статуса ИП. Чтобы не уйти в минус, нужно заложить их в ставку.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Расчёт минимальной ставки с учётом взносов:</p>

                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Желаемый чистый доход</span>
                    <span className="font-semibold">120 000 ₽/мес</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Взносы в месяц (53 658 / 12)</span>
                    <span className="font-semibold">+ 4 472 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Итого нужно заработать до налога</span>
                    <span className="font-semibold">124 472 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Налог УСН 6% (фактически ~0–3% с учётом вычета)</span>
                    <span className="font-semibold">≈ 3 734 ₽</span>
                  </div>
                  <div className="border-t border-slate-200 pt-1.5 flex justify-between font-bold text-indigo-700">
                    <span>Нужно выставить клиенту</span>
                    <span>128 206 ₽/мес</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <p className="font-semibold text-slate-700 mb-1">При рабочей нагрузке 160 ч/мес (100%):</p>
                  <p className="text-slate-600">Минимальная ставка = 128 206 / 160 = <strong className="text-slate-800">~802 ₽/час</strong></p>
                  <p className="text-slate-500 mt-1">При нагрузке 120 ч/мес (75%): ~1 068 ₽/час</p>
                </div>
              </div>

              <p>
                Для точного расчёта своей ставки с учётом налогового режима, загрузки и взносов используйте{" "}
                <Link href="/" className="text-indigo-600 hover:underline font-medium">
                  калькулятор фрилансера →
                </Link>
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Частые вопросы по взносам ИП
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Сколько страховых взносов платит ИП в 2026 году?",
                  a: "Фиксированная часть — 53 658 ₽/год (единый платёж ОПС + ОМС). Дополнительно — 1% от дохода свыше 300 000 ₽ в год. Максимальный размер дополнительного взноса ограничен: 8 × 53 658 = 429 264 ₽.",
                },
                {
                  q: "Можно ли уменьшить налог УСН 6% на страховые взносы?",
                  a: "Да, ИП без сотрудников уменьшает налог на 100% взносов. Если взносы превышают сумму налога — налог к уплате равен нулю. Неиспользованный остаток на следующий год не переносится.",
                },
                {
                  q: "До какого числа ИП обязан уплатить страховые взносы?",
                  a: "Фиксированная часть — до 31 декабря текущего года. Дополнительный взнос 1% — до 1 июля следующего года. Для уменьшения авансовых платежей по УСН взносы нужно уплатить до конца квартала, за который считается аванс.",
                },
                {
                  q: "Что выгоднее: платить взносы как ИП или стать самозанятым?",
                  a: "При доходе до ~894 300 ₽/год (~74 500 ₽/месяц) — самозанятый выгоднее: нет взносов. При доходе выше — ИП выгоднее: взносы вычитаются из налога и уменьшают эффективную ставку ниже 6%. Самозанятость невозможна при доходе свыше 2,4 млн ₽/год.",
                },
                {
                  q: "Платит ли ИП взносы, если не было дохода?",
                  a: "Да, фиксированные взносы 53 658 ₽ начисляются независимо от дохода. Если ИП бездействует — выгоднее его закрыть и открыть заново при необходимости (закрытие занимает 5 рабочих дней). Повторно открыть ИП можно сразу же.",
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
            <h2 className="text-lg font-bold mb-2">Рассчитайте ставку с учётом взносов и налогов</h2>
            <p className="text-slate-300 text-sm mb-4">
              Введите желаемый доход, режим и загрузку — калькулятор покажет минимальную ставку и налоговую нагрузку.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/"
                className="inline-block bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-400 transition-colors"
              >
                Калькулятор ставки →
              </Link>
              <Link
                href="/guide/nalog-ip-usn-6"
                className="inline-block bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-600 transition-colors"
              >
                Налог ИП УСН 6% →
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
                href="/guide/nalog-ip-usn-6"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог ИП УСН 6%
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                ИП vs самозанятый
              </Link>
              <Link
                href="/guide/nalog-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог самозанятого
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
