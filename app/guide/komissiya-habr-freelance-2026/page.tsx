import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Комиссия Habr Freelance в 2026 году: 12% с заказчика, 0% с фрилансера | FreelanceCalc",
  description:
    "Комиссия Habr Freelance 2026: фрилансер платформу не оплачивает — 12% за безопасную сделку берут с заказчика. Как это влияет на ставку? Таблица тарифов, расчёт, сравнение с FL.ru и Kwork.",
  alternates: { canonical: `${BASE_URL}/guide/komissiya-habr-freelance-2026` },
  openGraph: {
    title: "Комиссия Habr Freelance 2026: 0% для фрилансера, 12% для заказчика",
    description:
      "На Хабр Фриланс фрилансер не платит комиссию. Всё бремя ложится на заказчика. Как это менять вашу ставку?",
    url: `${BASE_URL}/guide/komissiya-habr-freelance-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habr Freelance комиссия 2026: кто и сколько платит",
    description:
      "Хабр Фриланс — единственная крупная IT-биржа где фрилансер не платит комиссию. Объясняем модель.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какая комиссия Habr Freelance для фрилансера в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Для фрилансера использование платформы Habr Freelance полностью бесплатно. Никакой комиссии с суммы заказа нет — вы получаете ровно столько, сколько договорились с заказчиком. Это уникальная модель среди крупных российских фриланс-бирж.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько берёт Habr Freelance с заказчика?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Habr Freelance берёт 12% с заказчика за использование безопасной сделки (гарантированной оплаты). Например, при бюджете проекта 50 000 ₽ заказчик заплатит 56 000 ₽ (50 000 + 6 000 комиссии). Фрилансер получит полные 50 000 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Как модель Habr Freelance влияет на ставку фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Поскольку комиссию платит заказчик, фрилансер на Habr Freelance может называть ту же ставку, что и в прямых переговорах — без накидки на комиссию. В отличие от FL.ru (20%) и Kwork (20%), где нужно закладывать комиссию в цену: если хотите 50 000 ₽ на FL.ru free, назовите 62 500 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Есть ли минимальная сумма заказа на Habr Freelance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, минимальная сумма заказа через безопасную сделку Habr Freelance составляет 3 000 рублей. Заказы на меньшую сумму через систему защищённых платежей оформить нельзя.",
      },
    },
    {
      "@type": "Question",
      name: "Habr Freelance или FL.ru — что выгоднее для фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По комиссии Habr Freelance выгоднее: 0% против 10–20% на FL.ru. Однако FL.ru имеет более широкую аудиторию заказчиков из всех отраслей. Habr Freelance специализируется на IT-специалистах, там более качественная аудитория в сфере разработки, дизайна и управления продуктами.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Комиссия Habr Freelance в 2026 году: сколько берёт биржа и с кого",
  description:
    "Разбор тарифной модели Habr Freelance: 0% с фрилансера, 12% с заказчика за безопасную сделку. Сравнение с FL.ru, Kwork, YouDo.",
  url: `${BASE_URL}/guide/komissiya-habr-freelance-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function KomissiyaHabrFreelancePage() {
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
            Комиссия Habr Freelance в 2026 году
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            Уникальная модель: фрилансер не платит ничего — 12% за безопасную сделку берут с заказчика. Разбираем как это работает и когда это выгодно.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 6 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick Answer Block */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
          <p className="text-sm font-bold text-indigo-900 mb-3">Коротко: комиссия Habr Freelance в 2026</p>
          <div className="space-y-2">
            {[
              { label: "Фрилансер", value: "0% — платформа бесплатна" },
              { label: "Заказчик (безопасная сделка)", value: "12% от суммы заказа" },
              { label: "Минимальная сумма заказа", value: "3 000 ₽" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="text-indigo-700">{label}</span>
                <span className="font-bold text-indigo-900">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-indigo-200">
            <p className="text-xs text-indigo-700 mb-2 font-semibold">
              Рассчитайте рыночную ставку для IT-фрилансера:
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
              Почему Habr Freelance не берёт комиссию с фрилансера
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Habr Freelance — IT-ориентированная биржа фриланса от команды Хабра (крупнейшего
                русскоязычного IT-медиа). Платформа работает по <strong>обратной модели комиссии</strong>:
                вместо того чтобы удерживать процент с заработка фрилансера, она берёт комиссию с
                заказчика при использовании безопасной сделки.
              </p>
              <p>
                Логика простая: Habr монетизирует <em>доступ к качественной IT-аудитории</em>, а не
                экспертизу исполнителей. Заказчик платит за гарантию что исполнитель реальный
                (верифицированный аккаунт Хабра) и за юридическую защиту сделки.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-1">
                  Что это значит для фрилансера
                </p>
                <p className="text-xs text-green-700">
                  Вы можете называть заказчику ровно ту сумму, которую хотите получить — без накидки
                  на комиссию биржи. На FL.ru при ставке 50 000 ₽ вы получите 40 000 ₽ (комиссия 20%).
                  На Habr Freelance вы получите полные 50 000 ₽.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Как работает безопасная сделка */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Безопасная сделка Habr Freelance: как считается 12%
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Безопасная сделка — основной механизм расчётов на платформе. Заказчик вносит деньги
                на эскроу-счёт, деньги замораживаются. После подтверждения выполнения работы средства
                переводятся фрилансеру. Комиссия 12% начисляется <strong>сверх суммы заказа</strong>,
                а не удерживается из неё.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Сумма заказа</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Комиссия 12%</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Итого платит заказчик</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Получает фрилансер</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { order: "5 000 ₽", comm: "600 ₽", total: "5 600 ₽", freelancer: "5 000 ₽" },
                      { order: "15 000 ₽", comm: "1 800 ₽", total: "16 800 ₽", freelancer: "15 000 ₽" },
                      { order: "30 000 ₽", comm: "3 600 ₽", total: "33 600 ₽", freelancer: "30 000 ₽" },
                      { order: "60 000 ₽", comm: "7 200 ₽", total: "67 200 ₽", freelancer: "60 000 ₽" },
                      { order: "100 000 ₽", comm: "12 000 ₽", total: "112 000 ₽", freelancer: "100 000 ₽" },
                    ].map((row) => (
                      <tr key={row.order} className="odd:bg-slate-50">
                        <td className="px-3 py-2 font-semibold text-slate-700">{row.order}</td>
                        <td className="px-3 py-2 text-center text-amber-600 font-semibold">{row.comm}</td>
                        <td className="px-3 py-2 text-center text-red-600 font-bold">{row.total}</td>
                        <td className="px-3 py-2 text-center text-green-600 font-bold">{row.freelancer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 font-semibold mb-1">Возврат комиссии</p>
                <p className="text-xs text-amber-700">
                  Если заказчик инициирует возврат <strong>в день начала проекта</strong> — комиссия
                  возвращается вместе с суммой заказа. Если возврат позже — заказчик теряет комиссию,
                  сумма заказа возвращается.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Сравнение бирж */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Сравнение комиссий: Habr Freelance vs FL.ru vs Kwork vs YouDo
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Биржа</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Комиссия с фрилансера</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Комиссия с заказчика</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Фокус</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      {
                        name: "Habr Freelance",
                        freelancer: "0%",
                        client: "12% (безоп. сделка)",
                        focus: "IT-специалисты",
                        fl: "text-green-600",
                      },
                      {
                        name: "FL.ru",
                        freelancer: "10–20%",
                        client: "3–5% (безоп. сделка)",
                        focus: "Все категории",
                        fl: "text-red-500",
                      },
                      {
                        name: "Kwork",
                        freelancer: "20% (фиксировано)",
                        client: "0%",
                        focus: "Пакетные услуги",
                        fl: "text-red-500",
                      },
                      {
                        name: "YouDo",
                        freelancer: "Откликов от 10 ₽/шт",
                        client: "9–15% (доп. услуги)",
                        focus: "Бытовые услуги + IT",
                        fl: "text-amber-500",
                      },
                    ].map((row) => (
                      <tr key={row.name} className="odd:bg-slate-50">
                        <td className="px-3 py-2 font-semibold text-slate-700">{row.name}</td>
                        <td className={`px-3 py-2 text-center font-bold ${row.fl}`}>{row.freelancer}</td>
                        <td className="px-3 py-2 text-center text-slate-600">{row.client}</td>
                        <td className="px-3 py-2 text-center text-slate-500">{row.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Habr Freelance — единственная крупная российская биржа, где фрилансер не отдаёт
                процент от заработка. Это принципиальное отличие от FL.ru и Kwork. Однако надо
                учитывать: заказчики на Habr Freelance знают о 12% и закладывают это в бюджет.
                Нередко они пытаются договориться об оплате напрямую, минуя биржу — такая схема
                нарушает правила платформы и лишает вас защиты безопасной сделки.
              </p>
            </div>
          </section>

          {/* Section 4 — Стратегия ставки */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как ставить цену на Habr Freelance: практика
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Раз комиссии нет — можно выставлять «чистую» ставку. Но есть нюанс: заказчик
                заплатит на 12% больше вашей цены. Это значит, что при бюджете заказчика 50 000 ₽
                он сможет выделить вам максимум <strong>44 643 ₽</strong> (50 000 / 1.12).
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3">
                <p className="text-xs text-blue-800 font-semibold">
                  Пример: заказчик готов потратить 60 000 ₽
                </p>
                <div className="space-y-1.5">
                  {[
                    { label: "Бюджет заказчика", value: "60 000 ₽" },
                    { label: "Комиссия Habr Freelance (12%)", value: "− 6 429 ₽" },
                    { label: "Максимум для вашей ставки", value: "53 571 ₽", bold: true, green: true },
                  ].map(({ label, value, bold, green }) => (
                    <div
                      key={label}
                      className={`flex justify-between text-xs ${green ? "text-green-700 font-bold" : "text-blue-700"}`}
                    >
                      <span>{label}</span>
                      <span className={bold ? "font-bold" : ""}>{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-blue-600">
                  Формула: бюджет заказчика ÷ 1.12 = ваша максимальная ставка
                </p>
              </div>

              <p>
                На практике в IT-проектах заказчики часто принимают комиссию как данность и не
                пытаются снизить вашу ставку. Habr Freelance ориентирован на квалифицированных
                специалистов, где разница в 6–7 тысяч рублей некритична при бюджете 50–100k.
              </p>
            </div>
          </section>

          {/* Section 5 — Когда выбирать Habr Freelance */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Когда выбирать Habr Freelance, а когда — другие биржи
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs text-green-800 font-semibold mb-2">Habr Freelance подходит если вы:</p>
                  <ul className="text-xs text-green-700 space-y-1 list-disc list-inside">
                    <li>IT-специалист: разработчик, дизайнер, DevOps, PM, аналитик</li>
                    <li>Работаете на долгосрочных проектах от 30 000 ₽+</li>
                    <li>Ценна репутация внутри IT-сообщества (карма Хабра)</li>
                    <li>Хотите работать с технически грамотными заказчиками</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-700 font-semibold mb-2">FL.ru / Kwork лучше если вы:</p>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    <li>Работаете в non-IT нишах: копирайтинг, переводы, дизайн SMM</li>
                    <li>Нужен высокий поток заказов (FL.ru — 4 млн пользователей)</li>
                    <li>Продаёте стандартные пакеты услуг (Kwork-формат)</li>
                    <li>Начинаете карьеру и ищете любые заказы</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA — Калькулятор */}
          <section className="bg-indigo-600 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Рассчитайте рыночную ставку для вашей специальности
            </h2>
            <p className="text-indigo-200 text-sm mb-4">
              Введите специальность, опыт и город — получите диапазон ставок и сравнение с рынком.
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
                  desc: "10–20% с фрилансера, как снизить и рассчитать ставку",
                },
                {
                  href: "/guide/komissiya-kwork-2026",
                  title: "Комиссия Kwork в 2026",
                  desc: "Фиксированные 20% с каждого кворка — как работать в плюс",
                },
                {
                  href: "/guide/komissiya-youdo-2026",
                  title: "Комиссия YouDo в 2026",
                  desc: "Плата за отклики вместо процента — считаем реальную стоимость",
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
