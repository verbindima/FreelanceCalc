import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

type CalcRow = { label: string; value: string; negative?: boolean; bold?: boolean; green?: boolean; red?: boolean };

export const metadata: Metadata = {
  title: "Комиссия FL.ru в 2026 году: сколько берёт биржа и как считать ставку | FreelanceCalc",
  description:
    "Комиссия FL.ru в 2026 году: 10–20% для фрилансера + 3–5% с заказчика. Как рассчитать ставку с учётом комиссии биржи? Таблица тарифов, пример расчёта, сравнение с Kwork.",
  alternates: { canonical: `${BASE_URL}/guide/komissiya-fl-ru-2026` },
  openGraph: {
    title: "Комиссия FL.ru 2026: сколько берёт биржа фрилансеров",
    description:
      "FL.ru берёт 10–20% с исполнителя. Как рассчитать ставку, чтобы не работать в ноль? Таблица тарифов и калькулятор.",
    url: `${BASE_URL}/guide/komissiya-fl-ru-2026`,
    type: "article",
    siteName: "FreelanceCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Комиссия FL.ru 2026: таблица тарифов и расчёт ставки",
    description:
      "10–20% с фрилансера. Как заложить комиссию биржи в свою ставку — разбор с примерами.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какая комиссия FL.ru для фрилансера в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FL.ru берёт от 10% до 20% с суммы выполненного заказа. Ставка зависит от тарифного плана: на бесплатном тарифе — 20%, на PRO-тарифах комиссия снижается до 10%. Комиссия удерживается автоматически при выводе средств.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько FL.ru берёт с заказчика?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "С заказчика FL.ru взимает комиссию безопасной сделки 3–5% от суммы заказа. Это страховка за использование системы гарантированной оплаты. При прямой оплате без безопасной сделки заказчик не платит комиссию, но и гарантий нет.",
      },
    },
    {
      "@type": "Question",
      name: "Как рассчитать ставку с учётом комиссии FL.ru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если хотите получить 5 000 ₽ за задачу при комиссии 20%, выставляйте цену 6 250 ₽ (5000 / 0.8). Формула: желаемый доход ÷ (1 - комиссия). При комиссии 10% — делите на 0.9: 5000 / 0.9 = 5 556 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли не платить комиссию FL.ru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Полностью избежать комиссии нельзя — это нарушение правил биржи и риск блокировки аккаунта. Снизить комиссию можно: перейдите на PRO-тариф (от 999 ₽/мес) — комиссия снижается до 10%. Также комиссия снижается по мере роста оборота на платформе.",
      },
    },
    {
      "@type": "Question",
      name: "FL.ru или Kwork — где комиссия меньше?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kwork берёт фиксированные 20% с любого заказа — без возможности снизить. FL.ru на бесплатном тарифе — те же 20%, но при PRO-тарифе снижается до 10%. Для системного фриланса FL.ru с PRO выгоднее Kwork, если оборот выше 10 000 ₽/мес (окупается стоимость тарифа).",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Комиссия FL.ru в 2026 году: сколько берёт биржа и как рассчитать ставку",
  description:
    "Тарифы FL.ru, размер комиссии с фрилансера и заказчика, как заложить комиссию в ставку. Сравнение с Kwork и Habr Freelance.",
  url: `${BASE_URL}/guide/komissiya-fl-ru-2026`,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  inLanguage: "ru",
};

export default function KomissiyaFlRuPage() {
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
            Комиссия FL.ru в 2026 году: сколько берёт биржа
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
            10–20% с каждого заказа. Как работает комиссия FL.ru, можно ли её снизить и как правильно рассчитать ставку, чтобы не работать в убыток.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-100 rounded-full px-4 py-1.5">
            <span>Время чтения: 7 минут</span>
            <span>·</span>
            <span>Обновлено апрель 2026</span>
          </div>
        </header>

        {/* Quick Answer Block */}
        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
          <p className="text-sm font-bold text-indigo-900 mb-3">Коротко: комиссия FL.ru в 2026</p>
          <div className="space-y-2">
            {[
              { label: "Бесплатный тариф", value: "20% с фрилансера" },
              { label: "PRO-тариф (от 999 ₽/мес)", value: "10% с фрилансера" },
              { label: "Безопасная сделка (заказчик)", value: "3–5% сверху" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="text-indigo-700">{label}</span>
                <span className="font-bold text-indigo-900">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-indigo-200">
            <p className="text-xs text-indigo-700 mb-2 font-semibold">Рассчитайте ставку с учётом комиссии:</p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>
        </div>

        <div className="space-y-8">

          {/* Section 1 — Тарифная сетка */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Тарифная сетка FL.ru: сколько берут с исполнителя
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                FL.ru — крупнейшая российская биржа фриланса с 4+ млн зарегистрированных пользователей. За использование платформы фрилансер платит <strong>комиссию с каждого выполненного заказа</strong>. Размер зависит от вашего тарифного плана.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold rounded-tl-lg">Тариф</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Стоимость</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Комиссия</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold rounded-tr-lg">Доп. возможности</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 font-semibold text-slate-700">Free</td>
                      <td className="px-3 py-2 text-center text-green-600 font-semibold">0 ₽</td>
                      <td className="px-3 py-2 text-center text-red-600 font-bold">20%</td>
                      <td className="px-3 py-2 text-center text-slate-500">Базовый отклик</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 font-semibold text-slate-700">PRO-базовый</td>
                      <td className="px-3 py-2 text-center font-semibold">~999 ₽/мес</td>
                      <td className="px-3 py-2 text-center text-amber-600 font-bold">15%</td>
                      <td className="px-3 py-2 text-center text-slate-500">Приоритетный отклик</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-slate-700">PRO+</td>
                      <td className="px-3 py-2 text-center font-semibold">~1 999 ₽/мес</td>
                      <td className="px-3 py-2 text-center text-green-600 font-bold">10%</td>
                      <td className="px-3 py-2 text-center text-slate-500">Топ в поиске, портфолио</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 font-semibold mb-1">Важно: комиссия начисляется на всю сумму заказа</p>
                <p className="text-xs text-amber-700">
                  При заказе 10 000 ₽ на бесплатном тарифе FL.ru удержит 2 000 ₽. На счёт поступит 8 000 ₽. Комиссия удерживается автоматически, вручную её не нужно перечислять.
                </p>
              </div>

              <p className="text-xs text-slate-500">
                * Точные тарифы FL.ru могут меняться. Проверяйте актуальные условия на{" "}
                <span className="text-indigo-600">fl.ru/freelancers/terms</span> перед принятием решения.
              </p>
            </div>
          </section>

          {/* Section 2 — Как заложить комиссию в ставку */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Как рассчитать ставку с учётом комиссии FL.ru
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Главная ошибка новичков на FL.ru — выставлять ставку равную желаемому доходу. После удержания 20% комиссии реальный доход оказывается на 25% ниже ожидаемого.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-xs text-red-800 font-semibold mb-2">❌ Неверный расчёт (типичная ошибка)</p>
                <p className="text-xs text-red-700">
                  Хочу заработать 5 000 ₽ → выставляю 5 000 ₽ → FL.ru берёт 20% = 1 000 ₽ → получаю 4 000 ₽.
                  Потеря: 1 000 ₽ (20% от реального дохода).
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-green-800 font-semibold mb-2">✅ Верный расчёт</p>
                <p className="text-xs text-green-700">
                  Хочу получить 5 000 ₽ → делю на (1 − 0.20) = 0.80 → выставляю 6 250 ₽ → FL.ru берёт 1 250 ₽ → получаю 5 000 ₽.
                </p>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Формула расчёта цены заказа:</h3>
              <div className="bg-slate-900 text-green-400 rounded-xl p-4 text-sm font-mono">
                <p>Цена заказа = Желаемый доход ÷ (1 − комиссия)</p>
                <p className="mt-2 text-slate-400 text-xs">// Пример: 5 000 ÷ (1 − 0.20) = 6 250 ₽</p>
              </div>

              <h3 className="font-semibold text-slate-800 text-base mt-4">Таблица поправочных коэффициентов:</h3>
              <div className="space-y-2">
                {[
                  { commission: "20% (Free)", divider: "0.80", multiplier: "×1.25", example: "5 000 → 6 250 ₽" },
                  { commission: "15% (PRO)", divider: "0.85", multiplier: "×1.18", example: "5 000 → 5 882 ₽" },
                  { commission: "10% (PRO+)", divider: "0.90", multiplier: "×1.11", example: "5 000 → 5 556 ₽" },
                ].map(({ commission, divider, multiplier, example }) => (
                  <div key={commission} className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-2.5 text-xs gap-2">
                    <span className="text-slate-600 w-28">{commission}</span>
                    <span className="font-mono font-semibold text-slate-700">{multiplier}</span>
                    <span className="text-slate-500 text-right">{example}</span>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-indigo-800 font-semibold mb-2">Калькулятор ставки фрилансера</p>
                <p className="text-xs text-indigo-700 mb-3">
                  Укажите желаемый доход в месяц, количество рабочих часов и тип проектов — калькулятор рассчитает минимальную почасовую ставку с учётом всех издержек.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-indigo-600 text-white font-semibold px-4 py-2 rounded-xl text-xs hover:bg-indigo-500 transition-colors"
                >
                  Рассчитать ставку →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 3 — Когда PRO окупается */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Когда PRO-тариф окупается: математика
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                PRO-тариф снижает комиссию с 20% до 10–15%. Стоимость — от 999 ₽/мес. Вопрос: при каком обороте подписка начинает себя окупать?
              </p>

              <h3 className="font-semibold text-slate-800 text-base">Точка окупаемости PRO-базового (999 ₽/мес, комиссия 15%):</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="text-slate-500 mb-2">Экономия на комиссии при обороте X:</p>
                <div className="flex justify-between">
                  <span>Бесплатный: комиссия 20% с X</span>
                  <span className="font-mono">0.20 × X</span>
                </div>
                <div className="flex justify-between">
                  <span>PRO: 999 ₽ + комиссия 15% с X</span>
                  <span className="font-mono">999 + 0.15 × X</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between font-semibold text-slate-800">
                  <span>PRO выгоднее при обороте от</span>
                  <span className="text-green-700">9 990 ₽/мес</span>
                </div>
              </div>

              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold">Оборот/мес</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Free (20%)</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">PRO (15%+999₽)</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Выгода PRO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { turnover: "5 000 ₽", free: "1 000 ₽", pro: "1 749 ₽", benefit: "−749 ₽" },
                      { turnover: "10 000 ₽", free: "2 000 ₽", pro: "2 499 ₽", benefit: "−499 ₽" },
                      { turnover: "15 000 ₽", free: "3 000 ₽", pro: "3 249 ₽", benefit: "+не ещё" },
                      { turnover: "20 000 ₽", free: "4 000 ₽", pro: "3 999 ₽", benefit: "+1 ₽" },
                      { turnover: "50 000 ₽", free: "10 000 ₽", pro: "8 499 ₽", benefit: "+1 501 ₽" },
                      { turnover: "100 000 ₽", free: "20 000 ₽", pro: "15 999 ₽", benefit: "+4 001 ₽" },
                    ].map(({ turnover, free, pro, benefit }) => (
                      <tr key={turnover} className="odd:bg-white even:bg-slate-50">
                        <td className="px-3 py-2 font-semibold text-slate-700">{turnover}</td>
                        <td className="px-3 py-2 text-center text-red-600">{free}</td>
                        <td className="px-3 py-2 text-center text-slate-600">{pro}</td>
                        <td className={`px-3 py-2 text-center font-semibold ${benefit.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
                          {benefit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-xs text-blue-800 font-semibold mb-1">Вывод</p>
                <p className="text-xs text-blue-700">
                  PRO-тариф окупается при ежемесячном обороте от ~10 000–20 000 ₽. Для фрилансеров с доходом 50 000+ ₽/мес экономия составит 1 500–4 000 ₽/мес — это уже существенно.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — Сравнение бирж */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Сравнение комиссий: FL.ru vs Kwork vs Habr Freelance
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left px-3 py-2 text-slate-600 font-semibold">Биржа</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Комиссия мин.</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Комиссия макс.</th>
                      <th className="text-center px-3 py-2 text-slate-600 font-semibold">Снизить можно?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-2 font-semibold text-indigo-700">FL.ru</td>
                      <td className="px-3 py-2 text-center text-green-600 font-bold">10%</td>
                      <td className="px-3 py-2 text-center text-red-600 font-bold">20%</td>
                      <td className="px-3 py-2 text-center text-green-600">Да, PRO-тариф</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 font-semibold text-slate-700">Kwork</td>
                      <td className="px-3 py-2 text-center text-red-600 font-bold">20%</td>
                      <td className="px-3 py-2 text-center text-red-600 font-bold">20%</td>
                      <td className="px-3 py-2 text-center text-red-500">Нет</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-slate-700">Habr Freelance</td>
                      <td className="px-3 py-2 text-center text-amber-600 font-bold">10%</td>
                      <td className="px-3 py-2 text-center text-amber-600 font-bold">10%</td>
                      <td className="px-3 py-2 text-center text-amber-600">Нет (уже минимум)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-3 py-2 font-semibold text-slate-700">YouDo</td>
                      <td className="px-3 py-2 text-center text-red-600 font-bold">25%</td>
                      <td className="px-3 py-2 text-center text-red-600 font-bold">25%</td>
                      <td className="px-3 py-2 text-center text-red-500">Нет</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate-700 mb-1">FL.ru — лучший выбор, если:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Долгосрочное сотрудничество с заказчиками</li>
                    <li>• Оборот от 20 000 ₽/мес (PRO окупается)</li>
                    <li>• Важна широкая аудитория заказчиков</li>
                    <li>• Нужен личный кабинет самозанятого (интеграция с ФНС)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate-700 mb-1">Habr Freelance — лучший выбор, если:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• IT-специальность (разработка, дизайн, аналитика)</li>
                    <li>• Нужны платёжеспособные корпоративные заказчики</li>
                    <li>• Хотите фиксированную комиссию без сюрпризов</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 — Налоги поверх комиссии */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Комиссия FL.ru + налоги: полный расчёт
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                Комиссия биржи — не единственное удержание. Фрилансер также платит налоги. Рассмотрим полный расчёт на примере заказа 10 000 ₽.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Самозанятый + FL.ru PRO (10% комиссия)",
                    color: "green",
                    rows: [
                      { label: "Сумма заказа", value: "10 000 ₽" },
                      { label: "Комиссия FL.ru 10%", value: "−1 000 ₽", negative: true },
                      { label: "Налог НПД 6% от 10 000 ₽", value: "−600 ₽", negative: true },
                      { label: "Итого на руки", value: "8 400 ₽", bold: true, green: true },
                    ] as CalcRow[],
                  },
                  {
                    title: "Физлицо ГПХ + FL.ru Free (20% комиссия)",
                    color: "red",
                    rows: [
                      { label: "Сумма заказа", value: "10 000 ₽" },
                      { label: "Комиссия FL.ru 20%", value: "−2 000 ₽", negative: true },
                      { label: "НДФЛ 13% от 10 000 ₽", value: "−1 300 ₽", negative: true },
                      { label: "Итого на руки", value: "6 700 ₽", bold: true, red: true },
                    ] as CalcRow[],
                  },
                ].map(({ title, rows }) => (
                  <div key={title} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                    <p className="font-semibold text-slate-700 mb-2">{title}:</p>
                    {rows.map(({ label, value, negative, bold, green, red }) => (
                      <div
                        key={label}
                        className={`flex justify-between ${bold ? "border-t border-slate-200 pt-2" : ""}`}
                      >
                        <span className={bold ? "font-bold text-slate-800" : "text-slate-500"}>{label}</span>
                        <span
                          className={`font-semibold ${
                            green ? "text-green-700" : red ? "text-red-600" : negative ? "text-red-500" : "text-slate-700"
                          }`}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <p className="text-xs text-indigo-800 font-semibold mb-1">Вывод: самозанятый + PRO = оптимум</p>
                <p className="text-xs text-indigo-700">
                  Разница между лучшим (самозанятый + PRO) и худшим (физлицо + Free) вариантом — 1 700 ₽ с каждых 10 000 ₽. При обороте 50 000 ₽/мес это 8 500 ₽ дополнительного дохода в месяц или 102 000 ₽ в год.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-indigo-900 mb-2">
              Рассчитайте вашу ставку с учётом всех издержек
            </h2>
            <p className="text-sm text-indigo-700 mb-4">
              Калькулятор FreelanceCalc учитывает режим налогообложения, тип работы, опыт и регион. Узнайте рыночную ставку и минимум для безубыточной работы.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-indigo-500 transition-colors"
            >
              Открыть калькулятор ставки →
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
                  q: "Какая комиссия FL.ru для фрилансера в 2026 году?",
                  a: "От 10% до 20% от суммы заказа. На бесплатном тарифе — 20%, на PRO-тарифе (от 999 ₽/мес) — 15%, на PRO+ — 10%. Комиссия удерживается автоматически при закрытии заказа.",
                },
                {
                  q: "Сколько FL.ru берёт с заказчика?",
                  a: "3–5% за использование безопасной сделки (гарантированная оплата). Если стороны договорились о прямой оплате в обход биржи — нарушение правил FL.ru, риск блокировки.",
                },
                {
                  q: "Как рассчитать цену заказа с учётом комиссии FL.ru?",
                  a: "Формула: Цена = Желаемый доход ÷ (1 − комиссия). При комиссии 20%: хотите получить 5 000 ₽ → выставляйте 6 250 ₽ (5000 ÷ 0.8). При комиссии 10%: 5 000 ÷ 0.9 = 5 556 ₽.",
                },
                {
                  q: "Можно ли снизить комиссию FL.ru без PRO-тарифа?",
                  a: "Нет. Единственный легальный способ снизить комиссию — перейти на PRO-тариф. Работа напрямую с заказчиком через FL.ru без оплаты через биржу нарушает правила и грозит блокировкой.",
                },
                {
                  q: "FL.ru или Kwork — где комиссия меньше?",
                  a: "На Kwork фиксированная комиссия 20% без возможности снизить. FL.ru с PRO-тарифом (999 ₽/мес) — 15%, с PRO+ — 10%. При обороте от 20 000 ₽/мес FL.ru PRO уже выгоднее Kwork.",
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
                { href: "/guide/nalog-samozanyatyj", label: "Налог для самозанятых в 2026 году" },
                { href: "/guide/ip-vs-samozanyatyj", label: "ИП или самозанятый — что выгоднее" },
                { href: "/guide/nalog-dogovor-gph", label: "Налог по договору ГПХ: НДФЛ и страховые взносы" },
                { href: "/guide/kak-stat-samozanyatym-frilanser", label: "Как стать самозанятым в 2026 году" },
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
