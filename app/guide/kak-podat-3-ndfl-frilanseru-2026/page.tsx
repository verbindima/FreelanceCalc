import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "kak-podat-3-ndfl-frilanseru-2026";

export const metadata: Metadata = {
  title: "Как фрилансеру подать 3-НДФЛ за 2025 год: пошаговая инструкция | FreelanceCalc",
  description:
    "Срок подачи 3-НДФЛ — до 30 апреля 2026. Как фрилансеру заполнить декларацию онлайн через Госуслуги или Личный кабинет ФНС за 20 минут. Кто обязан подавать, какие доходы включать, как не получить штраф.",
  alternates: { canonical: `${BASE_URL}/guide/${SLUG}` },
  openGraph: {
    title: "3-НДФЛ для фрилансера 2026: подать до 30 апреля",
    description:
      "Работаете как физлицо? Декларацию 3-НДФЛ за 2025 нужно подать до 30 апреля 2026. Пошаговая инструкция: Госуслуги, ФНС, заполнение, штрафы. 20 минут — и готово.",
    url: `${BASE_URL}/guide/${SLUG}`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "3-НДФЛ фрилансеру: срок 30 апреля 2026",
    description:
      "Пошаговая инструкция: как подать декларацию за 2025 год через Госуслуги или ФНС. Кто обязан, как заполнить, какой штраф за просрочку.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "До какого числа фрилансеру подать 3-НДФЛ за 2025 год?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Декларацию 3-НДФЛ за 2025 год необходимо подать до 30 апреля 2026 года. Уплатить исчисленный налог нужно до 15 июля 2026 года. Если 30 апреля выпадает на выходной — срок переносится на ближайший рабочий день.",
      },
    },
    {
      "@type": "Question",
      name: "Должен ли фрилансер подавать декларацию 3-НДФЛ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Фрилансер обязан подать 3-НДФЛ если: получал доход от иностранных заказчиков, работал с физлицами без статуса налогового агента, продавал имущество в 2025 году. Если заказчик — российская компания или ИП, они сами удерживают НДФЛ и декларация не нужна. Самозанятые и ИП подают другие формы отчётности.",
      },
    },
    {
      "@type": "Question",
      name: "Как быстро подать 3-НДФЛ онлайн?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самый быстрый способ — через Личный кабинет налогоплательщика на nalog.ru или через приложение «Налоги ФЛ». Войдите через Госуслуги, выберите «Подать декларацию 3-НДФЛ», заполните онлайн-мастер — данные о доходах, вычетах, подпишите электронной подписью. Весь процесс занимает 15–20 минут.",
      },
    },
    {
      "@type": "Question",
      name: "Какой штраф за несдачу 3-НДФЛ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Штраф за непредставление декларации 3-НДФЛ в срок — 5% от суммы неуплаченного налога за каждый полный и неполный месяц просрочки. Минимум — 1 000 рублей, максимум — 30% от суммы налога (ст. 119 НК РФ). Если декларация нулевая (вычет без налога к уплате) — штраф 1 000 рублей.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли подавать 3-НДФЛ самозанятому фрилансеру?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятые (плательщики НПД) не подают декларацию 3-НДФЛ по доходам от профессиональной деятельности — налог автоматически рассчитывается и уплачивается через приложение «Мой налог». Если у самозанятого был доход ВНЕ НПД (например, продажа имущества), по нему нужна отдельная 3-НДФЛ.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фрилансеру подать 3-НДФЛ за 2025 год: пошаговая инструкция",
  description:
    "Срок подачи 3-НДФЛ — до 30 апреля 2026. Пошаговая инструкция для фрилансера: кто обязан подавать, как заполнить онлайн, штрафы за просрочку.",
  url: `${BASE_URL}/guide/${SLUG}`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function Ndfl3FrilanserPage() {
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
            Как фрилансеру подать 3-НДФЛ за 2025 год
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Пошаговая инструкция: кто обязан, как заполнить онлайн через Госуслуги,
            какой штраф за просрочку. Срок — до 30 апреля 2026.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 10 минут</span>
            <span>·</span>
            <span>Апрель 2026</span>
          </div>
        </header>

        {/* Deadline Banner */}
        <div className="mb-8 bg-red-50 border border-red-300 rounded-2xl p-5 text-center">
          <p className="text-sm font-bold text-red-800 mb-1">
            ⏰ Срок подачи: 30 апреля 2026
          </p>
          <p className="text-xs text-red-600 mb-3">
            Осталось 20 дней. Штраф за просрочку — от 1 000 ₽ + 5% от суммы налога за каждый месяц.
          </p>
          <a
            href="https://lkfl2.nalog.ru/lkfl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-red-500 transition-colors"
          >
            Перейти в кабинет ФНС →
          </a>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Кто обязан подавать */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Кто из фрилансеров обязан подавать 3-НДФЛ
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Большинство фрилансеров НЕ подают 3-НДФЛ — если работают с российскими компаниями, те сами удерживают налог и перечисляют в бюджет. Декларация нужна только в конкретных ситуациях.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <span className="text-red-600 font-bold text-lg mt-0.5">✗</span>
                  <div>
                    <p className="font-semibold text-red-800 text-sm mb-1">Обязаны подать 3-НДФЛ</p>
                    <ul className="text-xs text-red-700 space-y-1">
                      <li>• Фрилансер-физлицо с <strong>иностранными заказчиками</strong> (Upwork, прямые контракты)</li>
                      <li>• Работа по ГПХ с <strong>физлицами</strong> (не компаниями), которые не платят взносы</li>
                      <li>• Продажа имущества в 2025 году (квартира, машина, криптовалюта)</li>
                      <li>• Выигрыши, гонорары, роялти без налогового агента</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <span className="text-green-600 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-green-800 text-sm mb-1">НЕ нужна 3-НДФЛ</p>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• <strong>Самозанятые</strong> — налог через приложение «Мой налог»</li>
                      <li>• <strong>ИП на УСН/ПСН/ОСНО</strong> — другие формы отчётности</li>
                      <li>• Фрилансер по ГПХ с <strong>российской компанией или ИП</strong> — они налоговые агенты</li>
                      <li>• Работник по трудовому договору — НДФЛ удерживает работодатель</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 font-semibold mb-1">Добровольная подача (для вычета)</p>
                <p className="text-xs text-amber-700">
                  Даже если НДФЛ уже удержан работодателем — вы можете подать 3-НДФЛ добровольно, чтобы получить налоговые вычеты: за квартиру, обучение, лечение, ИИС. Срок в этом случае — до 31 декабря 2026 (без ограничений).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Пошаговая инструкция */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Пошаговая инструкция: подать 3-НДФЛ онлайн за 20 минут
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Самый простой способ — Личный кабинет налогоплательщика на <strong>nalog.ru</strong>. Вход через Госуслуги, всё заполняется онлайн, подписывается электронной подписью (выпускается бесплатно там же).
              </p>

              <div className="space-y-3">
                {[
                  {
                    step: "1",
                    title: "Войдите в Личный кабинет ФНС",
                    desc: "Зайдите на lkfl2.nalog.ru → «Войти через Госуслуги». Если аккаунта нет — зарегистрируйтесь на gosuslugi.ru (нужен паспорт и СНИЛС).",
                  },
                  {
                    step: "2",
                    title: "Создайте электронную подпись",
                    desc: "Раздел «Профиль» → «Получить ЭП». Выберите «Ключ ЭП хранится в защищённой системе ФНС России» — это бесплатно, занимает 10–30 минут. Придумайте пароль и запомните его.",
                  },
                  {
                    step: "3",
                    title: "Откройте форму 3-НДФЛ",
                    desc: "Раздел «Доходы и вычеты» → «Подать декларацию» → «Заполнить онлайн». Выберите год: 2025.",
                  },
                  {
                    step: "4",
                    title: "Укажите источники дохода",
                    desc: "Добавьте каждый источник: название компании/физлица, ИНН (если есть), страна (Россия или иностранное государство), сумма дохода в рублях. Для валютных доходов — пересчитайте по курсу ЦБ на дату получения.",
                  },
                  {
                    step: "5",
                    title: "Примените вычеты (если есть)",
                    desc: "Стандартные (на детей), социальные (лечение, обучение), имущественные (квартира) — добавляйте в соответствующих разделах. Загрузите подтверждающие документы.",
                  },
                  {
                    step: "6",
                    title: "Проверьте расчёт и отправьте",
                    desc: "Система автоматически рассчитает налог к уплате. Проверьте итог, введите пароль ЭП, нажмите «Подписать и отправить». Декларация уйдёт в ФНС мгновенно.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{title}</p>
                      <p className="text-xs text-slate-600 mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 — Расчёт налога */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Сколько НДФЛ заплатить фрилансеру: примеры расчётов
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Ставка НДФЛ для резидентов РФ — <strong>13%</strong> при годовом доходе до 5 млн ₽, <strong>15%</strong> с суммы превышения над 5 млн ₽ (с 2025 года введена прогрессивная шкала).
              </p>

              <h3 className="font-semibold text-slate-800">Пример 1: Фрилансер с иностранными заказчиками</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="text-slate-500 mb-2">Доход за 2025 год: $15 000 по курсу 90 ₽ = 1 350 000 ₽</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Доход в рублях</span>
                  <span className="font-semibold">1 350 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Профессиональный вычет 20%</span>
                  <span className="font-semibold text-green-600">− 270 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Налоговая база</span>
                  <span className="font-semibold">1 080 000 ₽</span>
                </div>
                <div className="flex justify-between text-red-600 border-t border-slate-200 pt-2">
                  <span>НДФЛ 13%</span>
                  <span className="font-semibold">140 400 ₽</span>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800">Пример 2: Фрилансер с физлицами (репетитор, дизайнер)</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="text-slate-500 mb-2">Доход за год от частных клиентов: 600 000 ₽</p>
                <div className="flex justify-between">
                  <span className="text-slate-500">Доход</span>
                  <span className="font-semibold">600 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Вычет (без документов — 20%)</span>
                  <span className="font-semibold text-green-600">− 120 000 ₽</span>
                </div>
                <div className="flex justify-between text-red-600 border-t border-slate-200 pt-2">
                  <span>НДФЛ 13% с 480 000 ₽</span>
                  <span className="font-semibold">62 400 ₽</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-xs text-blue-800 font-semibold mb-1">Профессиональный налоговый вычет</p>
                <p className="text-xs text-blue-700">
                  Фрилансеры вправе применить профессиональный вычет: <strong>20% от дохода без документов</strong> (стандартный) или <strong>фактические расходы</strong> с подтверждением (чеки на оборудование, ПО, обучение). Второй вариант выгоднее, если расходы превышают 20% от дохода. Вычет подаётся в той же декларации 3-НДФЛ.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — Штрафы */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Штрафы за нарушение сроков
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Нарушение</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Штраф</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Основание</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Декларация не подана (есть налог к уплате)</td>
                      <td className="px-3 py-2 text-center font-semibold text-red-600">5% / мес, мин. 1 000 ₽, макс. 30%</td>
                      <td className="px-3 py-2 text-center text-slate-500">ст. 119 НК РФ</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Декларация не подана (нулевая, только вычет)</td>
                      <td className="px-3 py-2 text-center font-semibold text-orange-600">1 000 ₽</td>
                      <td className="px-3 py-2 text-center text-slate-500">ст. 119 НК РФ</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Налог уплачен с опозданием (после 15 июля)</td>
                      <td className="px-3 py-2 text-center font-semibold text-orange-600">Пени 1/300 ставки ЦБ за каждый день</td>
                      <td className="px-3 py-2 text-center text-slate-500">ст. 75 НК РФ</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Умышленное уклонение от уплаты</td>
                      <td className="px-3 py-2 text-center font-semibold text-red-600">40% от суммы налога</td>
                      <td className="px-3 py-2 text-center text-slate-500">ст. 122 НК РФ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-1">Как избежать штрафа</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Подать декларацию до 30 апреля 2026 — даже если нет денег на уплату налога. Штраф за несдачу отдельный от пеней за неуплату.</li>
                  <li>• Уплатить налог до 15 июля 2026 — штраф за несдачу и пени за неуплату считаются отдельно.</li>
                  <li>• При технических проблемах на сайте ФНС — сохранить скриншот, обратиться в поддержку nalog.ru.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 — Сравнение режимов */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как платят налоги фрилансеры на разных режимах
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Подача 3-НДФЛ — удел фрилансеров без специального статуса. Самозанятые и ИП платят налоги по-другому:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Статус</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Налог</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Отчётность</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Срок</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 text-slate-600">Физлицо (ГПХ, иностр. заказчик)</td>
                      <td className="px-3 py-2 text-center font-semibold text-red-600">13–15% НДФЛ</td>
                      <td className="px-3 py-2 text-center">3-НДФЛ</td>
                      <td className="px-3 py-2 text-center text-red-600 font-semibold">30 апреля</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">Самозанятый (НПД)</td>
                      <td className="px-3 py-2 text-center font-semibold text-green-600">4–6% НПД</td>
                      <td className="px-3 py-2 text-center text-green-600">Нет декларации</td>
                      <td className="px-3 py-2 text-center text-green-600">Ежемесячно</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-slate-600">ИП УСН 6%</td>
                      <td className="px-3 py-2 text-center font-semibold text-amber-600">6% УСН</td>
                      <td className="px-3 py-2 text-center">Декларация УСН</td>
                      <td className="px-3 py-2 text-center">25 апреля</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 text-slate-600">ИП на патенте (ПСН)</td>
                      <td className="px-3 py-2 text-center font-semibold text-amber-600">Фиксированно</td>
                      <td className="px-3 py-2 text-center text-green-600">Нет декларации</td>
                      <td className="px-3 py-2 text-center">По патенту</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <p className="text-xs text-indigo-800 font-semibold mb-1">Вывод: как упростить налоги</p>
                <p className="text-xs text-indigo-700">
                  Если устали подавать 3-НДФЛ каждый год — оформите самозанятость (НПД). Налог 4–6%, никакой отчётности, всё через приложение. Лимит дохода 2,4 млн ₽/год. Для более высоких доходов — ИП на УСН 6%.
                </p>
                <div className="flex gap-2 mt-3">
                  <Link
                    href="/guide/kak-stat-samozanyatym-frilanser"
                    className="text-xs text-indigo-600 font-semibold hover:underline"
                  >
                    Как стать самозанятым →
                  </Link>
                  <span className="text-indigo-300">|</span>
                  <Link
                    href="/guide/ip-vs-samozanyatyj"
                    className="text-xs text-indigo-600 font-semibold hover:underline"
                  >
                    ИП vs самозанятый →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-indigo-900 mb-2">
              Рассчитайте свою ставку и налоги
            </h2>
            <p className="text-sm text-indigo-700 mb-4">
              Калькулятор FreelanceCalc поможет рассчитать реальную ставку фрилансера с учётом налогов — по договору ГПХ, как самозанятый или как ИП.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "До какого числа фрилансеру подать 3-НДФЛ за 2025 год?",
                  a: "До 30 апреля 2026 года. Уплатить налог — до 15 июля 2026 года. Если 30 апреля — выходной, срок переносится на ближайший рабочий день.",
                },
                {
                  q: "Должен ли фрилансер подавать 3-НДФЛ?",
                  a: "Только если: работаете с иностранными заказчиками, получали доходы от физлиц без налогового агента, продавали имущество в 2025 году. Если заказчик — российская компания или ИП, декларация не нужна — они сами удерживают налог.",
                },
                {
                  q: "Как быстро подать 3-НДФЛ онлайн?",
                  a: "Через Личный кабинет налогоплательщика на nalog.ru (вход через Госуслуги). Заполните онлайн-мастер, создайте электронную подпись (бесплатно, 15 мин), подпишите и отправьте. Весь процесс: 20–30 минут.",
                },
                {
                  q: "Какой штраф за несдачу 3-НДФЛ?",
                  a: "5% от суммы налога за каждый месяц просрочки. Минимум — 1 000 рублей, максимум — 30% от суммы налога (ст. 119 НК РФ). Даже если нечего платить — штраф 1 000 ₽ за саму несдачу.",
                },
                {
                  q: "Нужно ли самозанятому подавать 3-НДФЛ?",
                  a: "Нет. Самозанятые платят налог НПД через приложение «Мой налог» — декларация не нужна. Исключение: если у самозанятого был доход ВНЕ НПД (продажа квартиры, например) — по нему отдельная 3-НДФЛ.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-4 py-3 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-semibold text-slate-800 list-none">
                    {q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2">▾</span>
                  </summary>
                  <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-base font-bold text-slate-800 mb-4">
              Читайте также
            </h2>
            <div className="space-y-2">
              {[
                { href: "/guide/ndfl-frilanser-13-protsent", label: "НДФЛ 13% для фрилансера: что это и как платить" },
                { href: "/guide/nalog-dogovor-gph", label: "Налог по договору ГПХ: НДФЛ и взносы 2026" },
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым фрилансером" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятый — что выгоднее для фрилансера" },
                { href: "/guide/nalog-samozanyatyj", label: "Налог для самозанятых в 2026 году" },
                { href: "/", label: "Калькулятор ставки фрилансера" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                >
                  <span className="text-indigo-400">→</span>
                  {label}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
