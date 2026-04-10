import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Как закрыть самозанятость в 2026 году: 3 способа за 5 минут | FreelanceCalc",
  description:
    "Пошаговая инструкция как закрыть самозанятость через «Мой налог», Госуслуги или банк. Что будет с долгом по налогу, можно ли открыть снова. Новые правила 2026.",
  alternates: { canonical: `${BASE_URL}/guide/kak-zakryt-samozanyatost-2026` },
  openGraph: {
    title: "Как закрыть самозанятость в 2026 году: 3 способа",
    description:
      "Снятие с учёта НПД за 5 минут: через «Мой налог», Госуслуги или банк. Что делать с долгом по налогу и можно ли зарегистрироваться заново.",
    url: `${BASE_URL}/guide/kak-zakryt-samozanyatost-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Как закрыть самозанятость 2026: 3 способа за 5 минут",
    description:
      "Мой налог, Госуслуги, банк. Долг, повторная регистрация, когда нельзя закрыть. Пошаговая инструкция.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Что будет с долгом по налогу, если закрыть самозанятость?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Долг не исчезнет. После снятия с учёта функция оплаты налога в приложении «Мой налог» остаётся активной. ФНС рассчитает финальную сумму и пришлёт уведомление. Нужно погасить задолженность до 28-го числа следующего месяца. В 2026 году при отрицательном балансе ЕНС ФНС уведомит через приложение с указанием срока уплаты.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли закрыть самозанятость и сразу открыть снова?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Повторная регистрация в качестве плательщика НПД возможна в любое время при условии отсутствия задолженности по налогам с профессионального дохода. Ограничений на число регистраций нет.",
      },
    },
    {
      "@type": "Question",
      name: "Обязательно ли закрывать самозанятость, если нет доходов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Если доходов нет — налогов нет. Самозанятость можно просто не использовать: не выдавать чеки, не получать доходы. Статус сохраняется бессрочно без каких-либо обязательных взносов или платежей. Закрывать имеет смысл только если планируете перейти на ИП или трудоустроиться к бывшему работодателю.",
      },
    },
    {
      "@type": "Question",
      name: "Когда налоговая может закрыть самозанятость принудительно?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ФНС снимет с учёта автоматически при: (1) превышении лимита дохода 2,4 млн ₽ в год, (2) найме сотрудников по трудовому договору, (3) начале деятельности, запрещённой для самозанятых (перепродажа, добыча полезных ископаемых, агентская деятельность с НДС).",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли уведомлять заказчиков при закрытии самозанятости?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Юридически — нет. Но если у вас есть активные договоры, заказчику важно знать: после снятия с учёта вы не сможете выдавать чеки самозанятого, а значит он потеряет возможность учитывать ваши услуги как расходы. Предупредите заранее и обсудите переход на другой формат сотрудничества.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как закрыть самозанятость в 2026 году: 3 способа за 5 минут",
  description:
    "Пошаговая инструкция по снятию с учёта НПД через «Мой налог», Госуслуги или банк. Долг, повторная регистрация, обязательные случаи закрытия.",
  url: `${BASE_URL}/guide/kak-zakryt-samozanyatost-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как закрыть самозанятость через приложение «Мой налог»",
  description: "Снятие с учёта плательщика НПД за 5 минут",
  totalTime: "PT5M",
  step: [
    {
      "@type": "HowToStep",
      name: "Откройте приложение «Мой налог»",
      text: "Авторизуйтесь в официальном приложении ФНС «Мой налог» (доступно в RuStore, AppGallery, App Store, Google Play).",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Перейдите в Профиль",
      text: "Нажмите «Прочее» → «Профиль» → прокрутите страницу до самого низа.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Нажмите «Сняться с учёта НПД»",
      text: "Выберите причину снятия с учёта. Для добровольного закрытия — «Отказываюсь от применения специального налогового режима».",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Подтвердите действие",
      text: "Уведомление о смене статуса придёт мгновенно. Официальное подтверждение от ФНС появится в приложении на следующий рабочий день.",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "Оплатите остаток налога",
      text: "Функция оплаты в «Мой налог» останется активной. Погасите начисленный налог до 28-го числа следующего месяца.",
      position: 5,
    },
  ],
};

export default function KakZakrytSamozanyatost2026() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600">FreelanceCalc</Link>
              <span>→</span>
              <Link href="/guide" className="hover:text-blue-600">Гайды</Link>
              <span>→</span>
              <span>Закрыть самозанятость</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Как закрыть самозанятость в 2026 году: 3 способа за 5 минут
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Снятие с учёта НПД: пошаговые инструкции через «Мой налог», Госуслуги и банк.
              Что будет с долгом по налогу, когда закрывать обязательно, можно ли зарегистрироваться повторно.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">📅 Обновлено: апрель 2026</span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">⏱ 5 минут на закрытие</span>
              <span className="bg-white border border-slate-200 rounded-full px-3 py-1">✅ Актуально для всех регионов РФ</span>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

          {/* Когда закрывать */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Когда нужно закрывать самозанятость</h2>
            <p className="text-slate-700 mb-4">
              Самозанятость — гибкий режим. Если у вас нет доходов, налогов тоже нет: можно просто не выдавать чеки и не получать доходы сколько угодно. Никаких обязательных взносов и платежей нет. Закрывать самозанятость стоит только в конкретных ситуациях.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-3">
              <h3 className="font-semibold text-amber-900">Когда закрытие обязательно:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">1.</span>
                  <span><strong>Переход на ИП (не НПД).</strong> Если хотите нанять сотрудников или ваши доходы превышают 2,4 млн ₽/год — нужен другой налоговый режим.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">2.</span>
                  <span><strong>Трудоустройство к бывшему работодателю.</strong> В течение 2 лет после увольнения нельзя работать с бывшим работодателем как самозанятый. Но это касается только конкретного работодателя, не статуса в целом.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">3.</span>
                  <span><strong>Начало запрещённой деятельности.</strong> Перепродажа товаров, агентская деятельность с НДС, добыча полезных ископаемых — несовместимы с НПД.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold mt-0.5">4.</span>
                  <span><strong>Превышение лимита 2,4 млн ₽.</strong> В этом случае ФНС снимет с учёта автоматически. Нужно заранее зарегистрировать ИП.</span>
                </li>
              </ul>
            </div>
            <p className="text-slate-600 mt-4 text-sm">
              Если ни одна из ситуаций не касается вас — закрывать самозанятость не нужно. Режим можно «заморозить»: просто не выдавать чеки.
            </p>
          </section>

          {/* 3 способа */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3 способа закрыть самозанятость в 2026 году</h2>

            {/* Способ 1 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-blue-600 text-white px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span className="font-semibold text-lg">Способ 1: Через приложение «Мой налог» (рекомендуем)</span>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-slate-600 text-sm">Самый быстрый способ — снятие прямо в приложении ФНС. Занимает 2-3 минуты.</p>
                <ol className="space-y-3">
                  {[
                    { step: "1", text: "Откройте приложение «Мой налог» (RuStore, AppGallery, App Store, Google Play)" },
                    { step: "2", text: "Нажмите «Прочее» (правый нижний угол) → «Профиль»" },
                    { step: "3", text: "Прокрутите страницу до самого низа — найдите кнопку «Сняться с учёта НПД»" },
                    { step: "4", text: "Выберите причину: «Отказываюсь от применения специального налогового режима»" },
                    { step: "5", text: "Подтвердите действие. Уведомление придёт мгновенно, подтверждение от ФНС — на следующий рабочий день" },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex gap-3 items-start">
                      <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{step}</span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Способ 2 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-emerald-600 text-white px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">🏛</span>
                <span className="font-semibold text-lg">Способ 2: Через Госуслуги</span>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-slate-600 text-sm">Подходит, если привыкли работать через портал Госуслуг.</p>
                <ol className="space-y-3">
                  {[
                    { step: "1", text: "Авторизуйтесь на gosuslugi.ru в личном кабинете" },
                    { step: "2", text: "В строке поиска введите: «Снятие с учета самозанятого»" },
                    { step: "3", text: "Выберите услугу и укажите причину закрытия" },
                    { step: "4", text: "Отправьте заявку. Обработка занимает 1 рабочий день" },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex gap-3 items-start">
                      <span className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{step}</span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Способ 3 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-purple-600 text-white px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">🏦</span>
                <span className="font-semibold text-lg">Способ 3: Через банковское приложение</span>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-slate-600 text-sm">Если самозанятость была подключена через банк (Сбербанк, Тинькофф, ВТБ и др.) — можно закрыть там же.</p>
                <ol className="space-y-3">
                  {[
                    { step: "1", text: "Откройте приложение банка, через который регистрировали самозанятость" },
                    { step: "2", text: "Найдите раздел «Самозанятость» или «Своё дело»" },
                    { step: "3", text: "В настройках найдите «Отключить самозанятость» или «Сняться с учёта»" },
                    { step: "4", text: "Подтвердите. Банк отправит заявление в ФНС автоматически" },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex gap-3 items-start">
                      <span className="bg-purple-100 text-purple-700 font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{step}</span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-slate-500 text-sm bg-slate-50 rounded-lg p-3">
                  💡 В Сбербанке: раздел «Своё дело» → «Настройки» → «Отключить в Сбербанке и налоговой».
                </p>
              </div>
            </div>
          </section>

          {/* Что будет с налогом */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Что будет с налогом после закрытия</h2>
            <p className="text-slate-700 mb-4">
              Закрытие самозанятости не обнуляет долг. Вот что происходит:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 bg-slate-50 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">1️⃣</span>
                <div>
                  <p className="font-semibold text-slate-900">Функция оплаты остаётся активной</p>
                  <p className="text-slate-600 text-sm mt-1">Даже после снятия с учёта вы сможете оплатить начисленный налог через «Мой налог» или nalog.ru. Приложение покажет сумму к уплате.</p>
                </div>
              </div>
              <div className="flex gap-4 bg-slate-50 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">2️⃣</span>
                <div>
                  <p className="font-semibold text-slate-900">ФНС рассчитает финальную сумму</p>
                  <p className="text-slate-600 text-sm mt-1">Налог за последний неполный месяц ФНС начислит до 12-го числа следующего месяца. Срок уплаты — 28-е число того же месяца.</p>
                </div>
              </div>
              <div className="flex gap-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <div>
                  <p className="font-semibold text-amber-900">Новые правила взыскания долгов с 2026 года</p>
                  <p className="text-slate-600 text-sm mt-1">Минфин ввёл новый порядок: при отрицательном балансе Единого налогового счёта (ЕНС) ФНС уведомит через приложение «Мой налог» с указанием срока уплаты. Игнорировать уведомление нельзя — долг могут взыскать через суд или из банковского счёта.</p>
                </div>
              </div>
              <div className="flex gap-4 bg-slate-50 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">3️⃣</span>
                <div>
                  <p className="font-semibold text-slate-900">Повторная регистрация возможна</p>
                  <p className="text-slate-600 text-sm mt-1">Зарегистрироваться заново можно в любой момент после погашения долга. Ограничений на количество регистраций нет.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Калькулятор CTA */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Рассчитайте ставку перед уходом на другой режим
            </h2>
            <p className="text-slate-600 mb-4">
              Если переходите с самозанятости на ИП или возвращаетесь в найм — пересчитайте свою рыночную ставку с учётом нового налогообложения.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
            <p className="text-slate-500 text-sm mt-3">
              Бесплатно. Учитывает налоги ИП УСН, НДФЛ, НПД — и показывает чистую ставку.
            </p>
          </section>

          {/* Сравнительная таблица способов */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Сравнение способов закрытия</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Способ</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Время</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Когда подходит</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { way: "«Мой налог»", time: "2–3 минуты", when: "Всегда — самый быстрый вариант" },
                    { way: "Госуслуги", time: "5–10 минут", when: "Если нет приложения «Мой налог»" },
                    { way: "Банковское приложение", time: "3–5 минут", when: "Если подключали через банк" },
                    { way: "Личный кабинет nalog.ru", time: "5 минут", when: "Если нет смартфона под рукой" },
                  ].map(({ way, time, when }, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-200 px-4 py-3 font-medium text-slate-900">{way}</td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-700">{time}</td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-700">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Что делать с заказчиками */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Что сообщить заказчикам при закрытии</h2>
            <p className="text-slate-700 mb-4">
              Юридически уведомлять заказчиков не нужно. Но если у вас есть активные договоры — предупредите заранее. После снятия с учёта вы не сможете выдавать чеки самозанятого, а заказчик потеряет возможность подтверждать расходы.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-semibold text-blue-900 mb-3">Что обсудить с заказчиком:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Переход на договор с физлицом (НДФЛ 13% платит заказчик)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Заключение договора после регистрации ИП</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Закрытие незавершённых задач до даты снятия с учёта</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Что будет с долгом по налогу, если закрыть самозанятость?",
                  a: "Долг не исчезнет. После снятия с учёта функция оплаты в «Мой налог» остаётся активной. ФНС рассчитает финальную сумму и пришлёт уведомление. В 2026 году при отрицательном балансе ЕНС ФНС уведомит через приложение с указанием срока уплаты. Погасите до 28-го числа следующего месяца.",
                },
                {
                  q: "Можно ли закрыть самозанятость и сразу открыть снова?",
                  a: "Да. Повторная регистрация возможна в любой момент при отсутствии задолженности по налогам с профессионального дохода. Ограничений на число регистраций нет.",
                },
                {
                  q: "Обязательно ли закрывать самозанятость, если нет доходов?",
                  a: "Нет. Если доходов нет — налогов нет, взносов нет. Режим можно «заморозить» на любой срок. Закрывать имеет смысл только при переходе на другой режим или найме сотрудников.",
                },
                {
                  q: "Когда налоговая закрывает самозанятость принудительно?",
                  a: "Автоматически — при превышении лимита 2,4 млн ₽/год, найме сотрудников по трудовому договору, начале деятельности, несовместимой с НПД (перепродажа, агентская деятельность с НДС).",
                },
                {
                  q: "Нужно ли уведомлять заказчиков при закрытии самозанятости?",
                  a: "Юридически нет. Но если есть активные договоры — предупредите: после снятия с учёта вы не сможете выдавать чеки, а заказчик потеряет возможность учитывать ваши услуги как расходы.",
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="border border-slate-200 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 flex items-center justify-between">
                    {q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-4 text-slate-700 leading-relaxed">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Навигация */}
          <section className="border-t border-slate-200 pt-8">
            <h3 className="font-semibold text-slate-700 mb-4">Читайте также:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым фрилансеру" },
                { href: "/guide/nalog-samozanyatyj", label: "Налог самозанятого: ставки 4% и 6%" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП vs самозанятый: что выбрать" },
                { href: "/guide/samozanyatyj-prevysil-limit", label: "Что делать, если превысили лимит 2,4 млн" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700 hover:text-blue-700"
                >
                  <span>📄</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
