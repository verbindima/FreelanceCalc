import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Комиссия Яндекс.Услуги в 2026 году: 0% без сделки или 3% с защитой | FreelanceCalc",
  description:
    "Комиссия Яндекс.Услуги 2026: без безопасной сделки фрилансер платит 0%, с ней — 3% (не менее 30 ₽). Как работает платформа, скрытые расходы на продвижение, сравнение с FL.ru и Kwork.",
  alternates: { canonical: `${BASE_URL}/guide/komissiya-yandex-uslugi-2026` },
  openGraph: {
    title: "Комиссия Яндекс.Услуги 2026: 0% или 3% — разбираем модель",
    description:
      "Яндекс.Услуги — единственная крупная платформа где можно работать без комиссии. Но есть нюансы: платное продвижение и лимит безопасной сделки 50 000 ₽.",
    url: `${BASE_URL}/guide/komissiya-yandex-uslugi-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Яндекс.Услуги комиссия 2026: кто и сколько платит",
    description:
      "На Яндекс.Услугах фрилансер может работать без комиссии. Разбираем реальную модель расходов.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какая комиссия Яндекс.Услуги для фрилансера в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если работаете без безопасной сделки — комиссия 0%. Если используете безопасную сделку — 3% от суммы заказа, но не менее 30 рублей. Это самая низкая транзакционная комиссия среди крупных российских фриланс-платформ. Однако для продвижения в выдаче придётся платить отдельно.",
      },
    },
    {
      "@type": "Question",
      name: "Что такое безопасная сделка на Яндекс.Услугах?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Безопасная сделка — необязательный инструмент расчётов. Заказчик замораживает оплату на счёте платформы, деньги переводятся фрилансеру после подтверждения выполнения. Максимальная сумма безопасной сделки — 50 000 рублей, срок выполнения — до 50 дней. Комиссия 3% берётся с фрилансера (но не менее 30 ₽).",
      },
    },
    {
      "@type": "Question",
      name: "Яндекс.Услуги или FL.ru — что выгоднее по комиссии?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По транзакционной комиссии Яндекс.Услуги выгоднее: 0–3% против 10–20% на FL.ru. Но FL.ru — универсальная профессиональная биржа с большим потоком IT-заказов. Яндекс.Услуги больше подходит для сервисных специалистов: мастеров по ремонту, репетиторов, веб-разработчиков с небольшими проектами.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли платить за продвижение на Яндекс.Услугах?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Базовое размещение профиля бесплатно. Но платформа предлагает платные инструменты продвижения — поднятие в выдаче, приоритетный показ. Стоимость зависит от категории и региона. Без продвижения в конкурентных нишах сложно попасть в топ выдачи — это и есть основной монетизационный механизм Яндекс.Услуг.",
      },
    },
    {
      "@type": "Question",
      name: "Яндекс.Услуги подходят для IT-фрилансеров?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Частично. На Яндекс.Услугах есть категории: разработка сайтов, настройка ПК, помощь с техникой, дизайн. Но IT-аудитория там менее профессиональная, чем на Habr Freelance или FL.ru. Оптимально для фрилансеров с небольшими проектами (до 50 000 ₽) и для тех, кто работает с физлицами в своём городе.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Комиссия Яндекс.Услуги в 2026 году: сколько берёт платформа и с кого",
  description:
    "Разбор тарифной модели Яндекс.Услуги: 0% без безопасной сделки, 3% с ней. Скрытые расходы на продвижение, сравнение с FL.ru, Kwork, YouDo, Habr Freelance.",
  url: `${BASE_URL}/guide/komissiya-yandex-uslugi-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function KomissiyaYandexUslugiPage() {
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
            Комиссия Яндекс.Услуги в 2026 году
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            0% без безопасной сделки или 3% с ней — самая низкая транзакционная комиссия среди
            фриланс-платформ. Но есть нюансы: разбираем реальную модель расходов.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 6 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick Answer Block */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
          <p className="text-sm font-bold text-indigo-900 mb-3">Коротко: комиссия Яндекс.Услуги 2026</p>
          <div className="space-y-2">
            {[
              { label: "Без безопасной сделки", value: "0% комиссии" },
              { label: "С безопасной сделкой", value: "3% (не менее 30 ₽)" },
              { label: "Максимум по безопасной сделке", value: "50 000 ₽" },
              { label: "Срок выполнения заказа", value: "до 50 дней" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="text-indigo-700">{label}</span>
                <span className="font-bold text-indigo-900">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-indigo-200">
            <p className="text-xs text-indigo-700 mb-2 font-semibold">
              Рассчитайте рыночную ставку с учётом комиссии платформы:
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Модель комиссии */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как Яндекс.Услуги зарабатывают: двухуровневая модель
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Яндекс.Услуги работают по <strong>модели, принципиально отличной</strong> от FL.ru,
                Kwork или YouDo. Транзакционная комиссия минимальна — платформа зарабатывает
                в основном на продвижении, а не на проценте от каждого заказа.
              </p>
              <p>
                Это логично для Яндекса: у них уже есть трафик через поиск, Яндекс.Карты и
                Алису. Задача платформы — монетизировать этот трафик через рекламные
                инструменты продвижения, а не через высокий «налог» на каждую сделку.
              </p>

              <div className="grid grid-cols-1 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs text-green-800 font-semibold mb-2">Уровень 1 — Транзакции (дёшево)</p>
                  <ul className="text-xs text-green-700 space-y-1 list-disc list-inside">
                    <li>Без безопасной сделки: <strong>0%</strong> — работаете напрямую с заказчиком</li>
                    <li>С безопасной сделкой: <strong>3%</strong> от суммы (не менее 30 ₽)</li>
                    <li>Базовое размещение профиля: бесплатно</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs text-amber-800 font-semibold mb-2">Уровень 2 — Продвижение (здесь деньги)</p>
                  <ul className="text-xs text-amber-700 space-y-1 list-disc list-inside">
                    <li>Приоритетный показ в выдаче — платно</li>
                    <li>Поднятие профиля в категории — платно</li>
                    <li>Без продвижения сложно попасть в топ в конкурентных нишах</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — Безопасная сделка */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Безопасная сделка Яндекс.Услуги: 3% — как считается
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Безопасная сделка — <strong>необязательный инструмент</strong>. Заказчик сам
                решает, использовать её или нет при создании заказа. Если выбирает безопасную
                сделку — деньги замораживаются на счёте платформы до подтверждения работы.
              </p>
              <p>
                Комиссия 3% берётся <strong>с фрилансера</strong> (в отличие от Habr Freelance,
                где комиссию платит заказчик). Но 3% — это значительно меньше, чем на других
                платформах.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Сумма заказа</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Комиссия 3%</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Мин. 30 ₽</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Получаете</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { order: "1 000 ₽", comm: "30 ₽", min: "да (мин.)", receive: "970 ₽" },
                      { order: "5 000 ₽", comm: "150 ₽", min: "нет", receive: "4 850 ₽" },
                      { order: "15 000 ₽", comm: "450 ₽", min: "нет", receive: "14 550 ₽" },
                      { order: "30 000 ₽", comm: "900 ₽", min: "нет", receive: "29 100 ₽" },
                      { order: "50 000 ₽", comm: "1 500 ₽", min: "нет (лимит)", receive: "48 500 ₽" },
                    ].map((row) => (
                      <tr key={row.order} className="odd:bg-slate-50">
                        <td className="px-3 py-2 font-semibold text-slate-700">{row.order}</td>
                        <td className="px-3 py-2 text-center text-amber-600 font-semibold">{row.comm}</td>
                        <td className="px-3 py-2 text-center text-slate-400 text-xs">{row.min}</td>
                        <td className="px-3 py-2 text-center text-green-600 font-bold">{row.receive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-xs text-blue-800 font-semibold mb-1">Важный лимит</p>
                <p className="text-xs text-blue-700">
                  Максимальная сумма безопасной сделки — <strong>50 000 рублей</strong>. Для
                  крупных проектов (разработка сайта, долгосрочная поддержка) безопасная
                  сделка не подходит — придётся делить на этапы или работать напрямую.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Сравнение */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Сравнение комиссий: Яндекс.Услуги vs FL.ru vs Kwork vs YouDo vs Habr
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Платформа</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Комиссия с фрилансера</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Доп. расходы</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Модель</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      {
                        name: "Яндекс.Услуги",
                        comm: "0% / 3%",
                        extra: "Продвижение",
                        model: "Продвижение",
                        color: "text-green-600",
                      },
                      {
                        name: "Habr Freelance",
                        comm: "0%",
                        extra: "Нет",
                        model: "Комиссия с заказчика",
                        color: "text-green-600",
                      },
                      {
                        name: "FL.ru",
                        comm: "10–20%",
                        extra: "Подписка PRO",
                        model: "% с фрилансера",
                        color: "text-red-500",
                      },
                      {
                        name: "Kwork",
                        comm: "20% (фикс.)",
                        extra: "Нет",
                        model: "% с кворка",
                        color: "text-red-500",
                      },
                      {
                        name: "YouDo",
                        comm: "За отклики",
                        extra: "Подписка",
                        model: "Плата за лиды",
                        color: "text-amber-500",
                      },
                    ].map((row) => (
                      <tr key={row.name} className="odd:bg-slate-50">
                        <td className="px-3 py-2 font-semibold text-slate-700">{row.name}</td>
                        <td className={`px-3 py-2 text-center font-bold ${row.color}`}>{row.comm}</td>
                        <td className="px-3 py-2 text-center text-slate-500">{row.extra}</td>
                        <td className="px-3 py-2 text-center text-slate-500">{row.model}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                По <strong>транзакционной комиссии</strong> Яндекс.Услуги — один из лидеров
                наравне с Habr Freelance. Но реальная стоимость работы на платформе выше из-за
                расходов на продвижение. В конкурентных нишах (ремонт, репетиторы, веб-разработка)
                без вложений в видимость заказов будет мало.
              </p>
            </div>
          </section>

          {/* Section 4 — Пример расчёта */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Пример расчёта: веб-разработчик зарабатывает 80 000 ₽/месяц
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Сравним реальную прибыль фрилансера при одинаковом обороте на трёх платформах —
                Яндекс.Услуги, FL.ru и Kwork.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-4">
                <p className="text-xs font-semibold text-slate-700">Условия: оборот 80 000 ₽/мес, 4 проекта по 20 000 ₽</p>
                {[
                  {
                    platform: "Яндекс.Услуги (с безопасной сделкой)",
                    comm: "2 400 ₽ (3% × 4)",
                    promo: "~3 000 ₽ (продвижение)",
                    total: "74 600 ₽",
                    rate: "7%",
                    color: "bg-green-50 border-green-200",
                    textColor: "text-green-700",
                  },
                  {
                    platform: "FL.ru (тариф PRO, комиссия 10%)",
                    comm: "8 000 ₽",
                    promo: "1 500 ₽ (подписка PRO)",
                    total: "70 500 ₽",
                    rate: "12%",
                    color: "bg-amber-50 border-amber-200",
                    textColor: "text-amber-700",
                  },
                  {
                    platform: "Kwork (комиссия 20%)",
                    comm: "16 000 ₽",
                    promo: "0 ₽",
                    total: "64 000 ₽",
                    rate: "20%",
                    color: "bg-red-50 border-red-200",
                    textColor: "text-red-700",
                  },
                ].map((row) => (
                  <div key={row.platform} className={`border rounded-xl p-3 ${row.color}`}>
                    <p className={`text-xs font-bold mb-2 ${row.textColor}`}>{row.platform}</p>
                    <div className="space-y-1">
                      {[
                        { l: "Комиссия платформы", v: row.comm },
                        { l: "Продвижение/подписка", v: row.promo },
                        { l: "Итого остаётся", v: row.total },
                        { l: "Реальный % расходов", v: row.rate },
                      ].map(({ l, v }) => (
                        <div key={l} className="flex justify-between text-xs">
                          <span className="text-slate-600">{l}</span>
                          <span className="font-semibold text-slate-800">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <p className="text-xs text-indigo-800 font-semibold mb-1">Вывод</p>
                <p className="text-xs text-indigo-700">
                  При обороте 80 000 ₽/месяц Яндекс.Услуги с продвижением дадут примерно
                  на <strong>6 000–10 000 ₽ больше</strong> чем Kwork. Но этот расчёт
                  справедлив только если вы получаете достаточно заказов — без продвижения
                  их может не быть совсем.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Для кого подходит */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Яндекс.Услуги: для кого подходит, а кому лучше FL.ru
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs text-green-800 font-semibold mb-2">Яндекс.Услуги подходят если вы:</p>
                  <ul className="text-xs text-green-700 space-y-1 list-disc list-inside">
                    <li>Работаете локально (в своём городе) с физлицами</li>
                    <li>Оказываете услуги до 50 000 ₽ за проект</li>
                    <li>Ниша: веб, настройка ПК, репетиторство, дизайн для малого бизнеса</li>
                    <li>Хотите минимальную комиссию с готовностью вложиться в продвижение</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-2">FL.ru / Habr Freelance лучше если вы:</p>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    <li>Работаете удалённо с заказчиками по всей России</li>
                    <li>Проекты от 50 000 ₽ (лимит безопасной сделки ЯУ)</li>
                    <li>IT-специалист — разработчик, DevOps, PM (Habr Freelance)</li>
                    <li>Нужна юридическая защита крупных сделок</li>
                  </ul>
                </div>
              </div>

              <p>
                Яндекс.Услуги — не замена FL.ru, а дополнительный канал. Многие фрилансеры
                размещаются на нескольких платформах одновременно: ЯУ даёт местных клиентов,
                FL.ru — федеральный поток, Habr Freelance — IT-нишу.
              </p>
            </div>
          </section>

          {/* CTA — Калькулятор */}
          <section className="bg-indigo-600 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Рассчитайте ставку с учётом комиссии любой платформы
            </h2>
            <p className="text-indigo-200 text-sm mb-4">
              Введите специальность и опыт — получите рыночный диапазон ставок.
              Добавьте 3–20% в зависимости от выбранной биржи.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </section>

          {/* FAQ */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Частые вопросы</h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((item) => (
                <div key={item.name} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-slate-800 mb-1">{item.name}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Другие статьи о биржах */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Сравнить с другими биржами</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  href: "/guide/komissiya-fl-ru-2026",
                  title: "Комиссия FL.ru в 2026",
                  desc: "10–20% с фрилансера — как снизить до минимума",
                },
                {
                  href: "/guide/komissiya-kwork-2026",
                  title: "Комиссия Kwork в 2026",
                  desc: "Фиксированные 20% с кворка — как работать в плюс",
                },
                {
                  href: "/guide/komissiya-youdo-2026",
                  title: "Комиссия YouDo в 2026",
                  desc: "Плата за отклики вместо процента — считаем реальную стоимость",
                },
                {
                  href: "/guide/komissiya-habr-freelance-2026",
                  title: "Комиссия Habr Freelance в 2026",
                  desc: "0% с фрилансера, 12% с заказчика — уникальная IT-биржа",
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition-all group"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700">{title}</p>
                    <p className="text-xs text-slate-500">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
