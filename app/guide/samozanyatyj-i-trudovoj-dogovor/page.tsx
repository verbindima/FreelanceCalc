import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Самозанятый и работа по трудовому договору одновременно 2026 | FreelanceCalc",
  description:
    "Можно ли совмещать самозанятость с официальной работой в 2026 году? Да. Разбираем ограничения, налоги, запрет на услуги работодателю и расчёт ставки для подработки.",
  alternates: { canonical: `${BASE_URL}/guide/samozanyatyj-i-trudovoj-dogovor` },
  openGraph: {
    title: "Самозанятый и трудовой договор одновременно — можно ли совмещать в 2026",
    description:
      "Закон разрешает совмещать найм и самозанятость. Главное ограничение — нельзя оказывать услуги своему работодателю. Полный разбор правил и расчёт ставки.",
    url: `${BASE_URL}/guide/samozanyatyj-i-trudovoj-dogovor`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Самозанятый и официальная работа: как совмещать в 2026",
    description:
      "Да, можно. Зарплата — НДФЛ работодателя, подработка — НПД 4–6% ваш. Запрет только на услуги текущему работодателю.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Можно ли работать официально и быть самозанятым одновременно?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, закон не запрещает совмещать трудовой договор и статус самозанятого (НПД). Зарплата облагается НДФЛ — его удерживает работодатель. Доходы от самозанятости облагаются НПД 4–6% — налог платите вы сами. Трудовой стаж при этом не прерывается.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли оказывать услуги своему работодателю как самозанятый?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Это прямо запрещено законом о НПД (Федеральный закон №422-ФЗ). Нельзя работать как самозанятый для текущего работодателя, а также для бывшего работодателя в течение 2 лет после увольнения. Если налоговая выявит такую схему — доначислит НДФЛ 13% и страховые взносы.",
      },
    },
    {
      "@type": "Question",
      name: "Входит ли зарплата в лимит 2,4 млн ₽ для самозанятого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Зарплата по трудовому договору не учитывается в лимите дохода самозанятого. Ограничение 2,4 млн ₽/год распространяется только на доходы, облагаемые НПД (то есть ваши доходы от фриланса и подработок). Зарплата — отдельный источник дохода с другим налоговым режимом.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли сообщать работодателю о статусе самозанятого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По закону — нет. Вы не обязаны уведомлять работодателя о регистрации самозанятости. Исключение: некоторые трудовые договоры содержат пункт о запрете работы с конкурентами или раскрытии информации о подработках — перечитайте свой договор. Для большинства рядовых позиций такого пункта нет.",
      },
    },
    {
      "@type": "Question",
      name: "Как правильно рассчитать ставку для подработки, если уже работаешь в найме?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ставка для подработки рассчитывается иначе, чем ставка полного фрилансера: у вас нет простоев как основного источника риска, но меньше доступных часов. Формула: (Желаемый доход от подработки ÷ Доступные часы) ÷ (1 − 0,06) для B2B или ÷ (1 − 0,04) для B2C. Калькулятор FreelanceCalc автоматически учитывает налоговый режим.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Самозанятый и работа по трудовому договору одновременно 2026",
  description:
    "Можно ли совмещать самозанятость с официальной работой в 2026 году — ограничения, налоги, запрет на услуги работодателю и расчёт ставки для подработки.",
  url: `${BASE_URL}/guide/samozanyatyj-i-trudovoj-dogovor`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function SamozanyatyjITrudovoyDogovorPage() {
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
            Самозанятый и работа по трудовому договору одновременно
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Да, совмещать можно. Но есть важные ограничения — особенно по услугам для своего работодателя.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 7 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold text-indigo-800 mb-1">
            Работаете в найме и берёте фриланс-заказы?
          </p>
          <p className="text-xs text-indigo-600 mb-3">
            Рассчитайте минимальную ставку с учётом НПД, доступных часов и налогов
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Можно ли */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Закон разрешает совмещать найм и самозанятость
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Федеральный закон №422-ФЗ «О налоге на профессиональный доход» не запрещает применять режим НПД
                работающим по трудовому договору. Это прямо подтверждено письмами ФНС и Минфина.
              </p>
              <p>
                Схема работает так:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Зарплата</strong> — облагается НДФЛ 13–15%. Налог удерживает и перечисляет работодатель.
                  Вы не делаете ничего.
                </li>
                <li>
                  <strong>Доходы от подработок</strong> — облагаются НПД 4% (от физлиц) или 6% (от юрлиц и ИП).
                  Налог рассчитывается автоматически в приложении «Мой налог», платите раз в месяц.
                </li>
                <li>
                  <strong>Трудовой стаж</strong> не прерывается — самозанятость никак не влияет на вашу запись
                  в трудовой книжке.
                </li>
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-green-800 mb-1">Вывод:</p>
                <p className="text-xs text-green-700">
                  Зарегистрироваться как самозанятый, продолжая работать в найме — легально и не требует
                  уведомления работодателя (если иное не прописано в вашем трудовом договоре).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Главное ограничение */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Главное ограничение: нельзя работать с текущим работодателем
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Это самое важное правило, прямо прописанное в ст. 6 ФЗ №422-ФЗ:
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-red-800 mb-2">⛔ Запрещено оказывать услуги как самозанятый:</p>
                <ul className="text-xs text-red-700 space-y-1 list-disc pl-4">
                  <li>Текущему работодателю (даже по другому виду услуг)</li>
                  <li>Бывшему работодателю в течение <strong>2 лет после увольнения</strong></li>
                </ul>
              </div>

              <p>
                Почему это важно: компании нередко пытаются «переоформить» штатных сотрудников как самозанятых,
                чтобы не платить страховые взносы ~30% и НДФЛ 13%. Налоговая активно выявляет такие схемы.
              </p>
              <p>
                Если ФНС выявит нарушение — доначислит работодателю НДФЛ 13% и страховые взносы за весь период
                с пени и штрафами. Для самозанятого — аннулирует чеки и доначислит НДФЛ.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-amber-800 mb-2">Пример правильного совмещения:</p>
                <p className="text-xs text-amber-700">
                  Вы работаете Frontend-разработчиком в компании А. Как самозанятый вы можете брать заказы
                  от компании Б, физлиц, стартапов — кого угодно, кроме компании А (и бывшей компании, если
                  работали там менее 2 лет назад).
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Лимит и стаж */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Лимит 2,4 млн ₽ и пенсионный стаж
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <h3 className="font-semibold text-slate-800 text-base">Лимит дохода — только на НПД-доходы</h3>
              <p>
                Зарплата по трудовому договору <strong>не входит</strong> в лимит 2,4 млн ₽/год
                для самозанятого. Считается только доход, задекларированный через «Мой налог».
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
                <p className="font-semibold text-slate-700 mb-2">Пример:</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Зарплата в год</span>
                    <span className="font-semibold">1 800 000 ₽ (150 000 ₽/мес)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Фриланс-доход за год</span>
                    <span className="font-semibold">800 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Использовано от лимита НПД</span>
                    <span className="font-semibold text-green-700">800 000 ₽ из 2 400 000 ₽</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2 flex justify-between">
                    <span className="font-bold text-slate-700">Лимит не превышен</span>
                    <span className="font-bold text-green-700">✓ Режим НПД сохраняется</span>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Пенсионный стаж</h3>
              <p>
                Трудовой стаж и пенсионные баллы начисляются <strong>только по трудовому договору</strong>.
                Самозанятость пенсионный стаж не даёт — если не платить добровольные взносы в СФР.
              </p>
              <p>
                Совмещая найм и самозанятость, вы автоматически получаете стаж через работодателя. Это
                преимущество перед полными фрилансерами: им нужно самостоятельно платить пенсионные взносы.
              </p>
            </div>
          </section>

          {/* Section 4 — Налоги */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как устроены налоги при совмещении
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-2.5 font-semibold text-slate-700 border border-slate-200">Доход</th>
                      <th className="text-center p-2.5 font-semibold text-slate-700 border border-slate-200">Налог</th>
                      <th className="text-center p-2.5 font-semibold text-slate-700 border border-slate-200">Кто платит</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Зарплата", "НДФЛ 13% (15% с части > 5 млн ₽/год)", "Работодатель"],
                      ["Фриланс-доход от физлиц", "НПД 4%", "Вы сами, через «Мой налог»"],
                      ["Фриланс-доход от юрлиц / ИП", "НПД 6%", "Вы сами, через «Мой налог»"],
                    ].map(([type, tax, who]) => (
                      <tr key={type} className="hover:bg-slate-50">
                        <td className="p-2 border border-slate-200 text-slate-700 font-medium">{type}</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">{tax}</td>
                        <td className="p-2 border border-slate-200 text-center text-slate-600">{who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Налоговая декларация по зарплате не нужна — работодатель сам сдаёт 6-НДФЛ.
                По НПД декларация тоже не нужна — всё происходит автоматически в приложении.
              </p>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-indigo-800 mb-1">Имущественные вычеты</p>
                <p className="text-xs text-indigo-700">
                  Налоговые вычеты (ипотека, лечение, обучение) применяются только к НДФЛ с зарплаты.
                  НПД с фриланс-дохода вычетами не уменьшается — это отдельная система.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Расчёт ставки */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как рассчитать ставку для подработки
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                У наёмного работника, берущего фриланс-заказы, другая логика расчёта ставки по сравнению с
                полным фрилансером:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="font-semibold text-slate-700 text-xs mb-2">Полный фрилансер</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>✗ Простои 30–40% времени</li>
                    <li>✗ Нет страховки от работодателя</li>
                    <li>✗ Пенсия — только за свой счёт</li>
                    <li>✓ Полная свобода часов</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <p className="font-semibold text-indigo-700 text-xs mb-2">Наёмный + самозанятый</p>
                  <ul className="text-xs text-indigo-600 space-y-1">
                    <li>✓ Нет риска простоев (есть зарплата)</li>
                    <li>✓ Страховка и стаж через работодателя</li>
                    <li>✓ Пенсия накапливается автоматически</li>
                    <li>✗ Ограниченное время (вечера/выходные)</li>
                  </ul>
                </div>
              </div>

              <p>
                Из-за ограниченного времени ставка подработки часто <strong>должна быть выше</strong>
                , чем у полного фрилансера: вы продаёте дефицитный ресурс — своё свободное время.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-semibold text-slate-700">Формула расчёта ставки для подработки:</p>
                <p className="font-mono text-slate-600 bg-white rounded p-2">
                  Ставка = Желаемый доход в месяц ÷ Доступные часы ÷ (1 − налог)
                </p>
                <div className="border-t border-slate-200 pt-2">
                  <p className="font-semibold text-slate-600 mb-1">Пример (работа с юрлицами, НПД 6%):</p>
                  <p className="text-slate-500">Хочу зарабатывать 50 000 ₽/мес на подработке,</p>
                  <p className="text-slate-500">доступно 80 часов/мес (вечера + выходные).</p>
                  <p className="font-semibold text-indigo-700 mt-1">
                    50 000 ÷ 80 ÷ 0,94 = <span className="text-lg">664 ₽/час</span>
                  </p>
                </div>
              </div>

              <p>
                Используйте{" "}
                <Link href="/" className="text-indigo-600 hover:underline font-medium">
                  калькулятор фрилансера →
                </Link>{" "}
                чтобы подобрать ставку под ваш налоговый режим и количество доступных часов.
              </p>
            </div>
          </section>

          {/* Section 6 — Как зарегистрироваться */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как оформить самозанятость, работая в найме
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>Регистрация занимает 10 минут и не требует похода в налоговую:</p>

              <ol className="space-y-3 list-none">
                {[
                  {
                    step: "1",
                    title: "Скачайте приложение «Мой налог»",
                    desc: "App Store или Google Play. Доступна также веб-версия на lknpd.nalog.ru.",
                  },
                  {
                    step: "2",
                    title: "Зарегистрируйтесь через Госуслуги или ИНН + паспорт",
                    desc: "Через Госуслуги — самый быстрый способ, не нужно фотографировать документы.",
                  },
                  {
                    step: "3",
                    title: "Выберите вид деятельности",
                    desc: "Укажите ваш вид деятельности (разработка, дизайн, консалтинг и т.д.). Можно указать несколько.",
                  },
                  {
                    step: "4",
                    title: "Регистрация подтверждена — можно работать",
                    desc: "ФНС уведомит работодателей автоматически? Нет. Уведомлять работодателя вы не обязаны.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-1">Налоговый бонус 10 000 ₽</p>
                <p className="text-xs text-green-700">
                  После регистрации государство даёт бонус 10 000 ₽ — им автоматически компенсируется часть налога.
                  На практике: первые ~167 000 ₽ дохода от юрлиц облагаются по 0% вместо 6%.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Частые вопросы о совмещении
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Можно ли работать официально и быть самозанятым одновременно?",
                  a: "Да, закон не запрещает совмещать трудовой договор и статус самозанятого. Зарплата облагается НДФЛ (удерживает работодатель), доходы от подработок — НПД 4–6% (платите сами). Трудовой стаж не прерывается.",
                },
                {
                  q: "Можно ли оказывать услуги своему работодателю как самозанятый?",
                  a: "Нет. Это прямо запрещено ФЗ №422-ФЗ. Нельзя работать с текущим и бывшим работодателем (в течение 2 лет после увольнения). Нарушение ведёт к доначислению НДФЛ и взносов.",
                },
                {
                  q: "Входит ли зарплата в лимит 2,4 млн ₽ для самозанятого?",
                  a: "Нет. В лимит НПД входит только доход, задекларированный через «Мой налог». Зарплата по трудовому договору — отдельный налоговый источник, лимит не уменьшает.",
                },
                {
                  q: "Нужно ли уведомлять работодателя о регистрации самозанятости?",
                  a: "По закону не нужно. Исключение — если в вашем трудовом договоре прописан запрет на параллельную деятельность или работу с конкурентами. Проверьте свой договор.",
                },
                {
                  q: "Как быть с пенсией при совмещении?",
                  a: "Пенсионный стаж и баллы начисляются через трудовой договор автоматически — работодатель платит страховые взносы ~30%. Самозанятость дополнительного стажа не даёт, если не платить добровольные взносы в СФР.",
                },
              ].map((item, i) => (
                <details key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                  <summary className="text-sm font-semibold text-slate-800 cursor-pointer hover:text-indigo-700 transition-colors">
                    {item.q}
                  </summary>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-slate-800 text-white rounded-2xl p-6 text-center">
            <h2 className="text-lg font-bold mb-2">Рассчитайте ставку для подработки</h2>
            <p className="text-slate-300 text-sm mb-4">
              Укажите доступные часы, желаемый доход и режим НПД — получите минимальную ставку.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                href="/"
                className="inline-block bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-400 transition-colors"
              >
                Калькулятор ставки →
              </Link>
              <Link
                href="/guide/nalog-samozanyatyj"
                className="inline-block bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-600 transition-colors"
              >
                Налоги самозанятого →
              </Link>
            </div>
          </section>

          {/* Related links */}
          <section className="bg-slate-50 rounded-2xl p-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Связанные материалы
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link
                href="/guide/nalog-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Налог самозанятого
              </Link>
              <Link
                href="/guide/ip-vs-samozanyatyj"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                ИП vs самозанятый
              </Link>
              <Link
                href="/guide/kak-stat-samozanyatym-frilanser"
                className="bg-white border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors text-center"
              >
                Как стать самозанятым
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
