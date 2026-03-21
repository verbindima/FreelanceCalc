import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Налоги фрилансера 2026: самозанятый, ИП УСН, патент — сравнение",
  description:
    "Какой налоговый режим выбрать фрилансеру в 2026 году: самозанятый НПД, ИП УСН 6%, ИП на патенте. Калькуляторы, сравнение, примеры расчётов для разных доходов.",
  keywords: [
    "налоги фрилансера 2026",
    "самозанятый или ИП",
    "налоговый режим фрилансер",
    "НПД ИП УСН сравнение",
    "какой налог выбрать фрилансеру",
    "самозанятый ИП что выгоднее",
    "налоги разработчика фрилансера",
    "как платить налоги фрилансеру",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/nalog" },
  openGraph: {
    title: "Налоги фрилансера 2026: самозанятый vs ИП — что выгоднее?",
    description:
      "Сравните налоговые режимы: НПД, ИП УСН 6%, ИП патент. Калькуляторы и разбор для фрилансеров с любым доходом.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/nalog`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Налоги фрилансера", item: `${BASE_URL}/nalog` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Самозанятый или ИП — что выгоднее для фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "До дохода 2,4 млн ₽/год самозанятость выгоднее: НПД 4–6% против ИП УСН 6% + обязательные взносы ~50 000 ₽/год. При доходе выше 2,4 млн необходим переход на ИП. Подробное сравнение с калькулятором — на странице сравнения режимов.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько налогов платит фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятый: 4% с физлиц, 6% с юрлиц. ИП УСН 6%: 6% от дохода + ~50 400 ₽ обязательных страховых взносов + 1% с дохода свыше 300 000 ₽. При доходе 1 млн ₽/год самозанятый платит 60 000 ₽, ИП УСН — около 57 400 ₽ (взносы вычитаются из налога).",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли работать фрилансером без регистрации?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет. Систематическое получение дохода без регистрации — это нарушение НК РФ. Самозанятость регистрируется за 5 минут в приложении «Мой налог» и является легальным минимумом для любого фрилансера.",
          },
        },
      ],
    },
  ],
};

const REGIMES = [
  {
    slug: "/instrumenty/kalkulator-naloga-samozanyatogo",
    emoji: "🟢",
    name: "Самозанятый (НПД)",
    rate: "4–6%",
    limit: "до 2,4 млн ₽/год",
    pros: ["Минимальная ставка", "Нет взносов", "Регистрация за 5 мин", "Нет деклараций"],
    cons: ["Лимит 2.4М ₽/год", "Нет соцгарантий", "Нельзя нанимать сотрудников"],
    bestFor: "Доход до 150 000 ₽/мес",
    badge: "Самый популярный",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    slug: "/nalog/ip-usn",
    emoji: "🔵",
    name: "ИП УСН 6%",
    rate: "6% + взносы",
    limit: "до 450 млн ₽/год",
    pros: ["Высокий лимит дохода", "Взносы вычитаются из налога", "Можно нанять до 130 сотрудников"],
    cons: ["~50 000 ₽ взносов в год", "Требуется расчётный счёт", "Квартальные авансы"],
    bestFor: "Доход от 150 000 ₽/мес",
    badge: "При доходе выше лимита",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    slug: "/nalog/sravnenie",
    emoji: "⚖️",
    name: "Сравнение режимов",
    rate: "—",
    limit: "—",
    pros: ["Интерактивная таблица", "Точный расчёт для вашего дохода", "Точка перехода самозанятый → ИП"],
    cons: [],
    bestFor: "Для выбора режима",
    badge: "Калькулятор сравнения",
    badgeColor: "bg-amber-100 text-amber-800",
  },
];

export default function NalogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-3 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              ← FreelanceCalc
            </Link>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-700">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Налоги фрилансера</span>
          </nav>

          {/* Hero */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Налоги фрилансера в 2026 году: самозанятый, ИП УСН, патент
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Разберитесь, какой налоговый режим выгоднее при вашем доходе.
            Калькуляторы, сравнение режимов и ответы на частые вопросы.
          </p>

          {/* Regime cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {REGIMES.map((r) => (
              <Link
                key={r.slug}
                href={r.slug}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{r.emoji}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${r.badgeColor}`}>
                    {r.badge}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
                  {r.name}
                </h2>
                {r.rate !== "—" && (
                  <p className="text-2xl font-bold text-blue-600 mb-1">{r.rate}</p>
                )}
                {r.limit !== "—" && (
                  <p className="text-sm text-gray-500 mb-4">{r.limit}</p>
                )}
                {r.pros.length > 0 && (
                  <ul className="space-y-1 mb-3">
                    {r.pros.slice(0, 3).map((p) => (
                      <li key={p} className="text-sm text-gray-600 flex items-center gap-1.5">
                        <span className="text-green-500">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-xs text-gray-400 mt-2">{r.bestFor}</p>
              </Link>
            ))}
          </div>

          {/* Quick comparison table */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Быстрое сравнение режимов
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-gray-600 font-medium">Параметр</th>
                    <th className="text-center py-2 px-3 text-gray-600 font-medium">Самозанятый</th>
                    <th className="text-center py-2 px-3 text-gray-600 font-medium">ИП УСН 6%</th>
                    <th className="text-center py-2 px-3 text-gray-600 font-medium">ИП УСН 15%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2.5 pr-4 text-gray-700">Ставка налога</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-green-700">4–6%</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-blue-700">6%</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">15%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-gray-700">Страховые взносы</td>
                    <td className="py-2.5 px-3 text-center text-green-700">Нет</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">~50 400 ₽/год</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">~50 400 ₽/год</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-gray-700">Лимит дохода</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">2,4 млн ₽/год</td>
                    <td className="py-2.5 px-3 text-center text-green-700">450 млн ₽/год</td>
                    <td className="py-2.5 px-3 text-center text-green-700">450 млн ₽/год</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-gray-700">Регистрация</td>
                    <td className="py-2.5 px-3 text-center text-green-700">5 минут онлайн</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">ИФНС / МФЦ</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">ИФНС / МФЦ</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-gray-700">Декларация</td>
                    <td className="py-2.5 px-3 text-center text-green-700">Не нужна</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">1 раз в год</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">1 раз в год</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-gray-700">Расчётный счёт</td>
                    <td className="py-2.5 px-3 text-center text-green-700">Не нужен</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">Желателен</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">Желателен</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-gray-700">Когда выгоднее</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">до ~150К ₽/мес</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">от ~200К ₽/мес</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">если расходы &gt;40%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/nalog/sravnenie"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Рассчитать точную выгоду для вашего дохода →
              </Link>
            </div>
          </section>

          {/* Новинка 2026: СФР страхование */}
          <section className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-10">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">🆕</span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Новое с 2026 года</p>
                <h2 className="text-lg font-semibold text-blue-900 mb-2">
                  Добровольное страхование самозанятых в СФР — стоит ли подключать?
                </h2>
                <p className="text-sm text-blue-800 mb-3 leading-relaxed">
                  С 1 января 2026 года самозанятые могут платить добровольные взносы в Социальный
                  фонд (1 344–1 920 ₽/мес) и получать оплачиваемые больничные. Рассчитайте, при
                  каком количестве дней болезни это выгодно именно вам.
                </p>
                <Link
                  href="/nalog/sfr"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Открыть калькулятор страхования →
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Самозанятый или ИП — что выгоднее для фрилансера?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  До дохода 2,4 млн ₽/год (200 000 ₽/мес) обычно выгоднее самозанятость: нет
                  обязательных взносов и ставка 4–6%. При более высоком доходе переходят на ИП —
                  взносы там фиксированы (~50 400 ₽/год), а налог с суммы свыше лимита платить
                  нельзя. Точный расчёт с учётом вашего дохода —{" "}
                  <Link href="/nalog/sravnenie" className="text-blue-600 hover:underline">
                    в калькуляторе сравнения
                  </Link>
                  .
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Нужно ли платить НДС фрилансеру?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Самозанятый и ИП на УСН — НДС не платят. НДС обязателен только при переходе на
                  ОСНО (общая система) или если годовой доход превышает 60 млн ₽ (порог для
                  перехода на НДС для УСН с 2025 года).
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Как учесть налоги при расчёте ставки?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Используйте{" "}
                  <Link href="/" className="text-blue-600 hover:underline">
                    главный калькулятор FreelanceCalc
                  </Link>{" "}
                  — он учитывает НПД (4%/6%) и ИП УСН (6%/15%) при расчёте ставки. Введите
                  желаемый чистый доход — получите ставку с учётом вашего налогового режима.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 text-center">
            <p className="text-gray-700 font-medium mb-3">
              Рассчитайте свою ставку с учётом налогов
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
