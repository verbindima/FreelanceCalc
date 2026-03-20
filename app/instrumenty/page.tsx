import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Инструменты для фрилансера — калькуляторы онлайн 2026",
  description:
    "Бесплатные онлайн-калькуляторы для фрилансеров и самозанятых: налог НПД, ставка за час, расчёт дохода. Без регистрации, моментальный результат.",
  keywords: [
    "инструменты для фрилансера",
    "калькуляторы для самозанятых",
    "онлайн калькулятор фриланс",
    "расчёт налога самозанятого",
    "расчёт ставки фрилансера",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/instrumenty" },
  openGraph: {
    title: "Инструменты для фрилансера — калькуляторы онлайн",
    description:
      "Налог НПД, ставка за час, расчёт дохода. Бесплатно, без регистрации.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/instrumenty`,
    siteName: "FreelanceCalc",
  },
};

const tools = [
  {
    href: "/instrumenty/kalkulator-naloga-samozanyatogo",
    emoji: "🧾",
    title: "Калькулятор налога самозанятого",
    description:
      "НПД 4% или 6% с учётом бонуса первого года и лимита 2 400 000 ₽",
    badge: "Популярное",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    href: "/?utm_source=instrumenty&utm_medium=hub",
    emoji: "💰",
    title: "Калькулятор ставки фрилансера",
    description:
      "Посчитайте минимальную почасовую ставку по желаемому доходу, режиму налогов и загрузке",
    badge: "Основной",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    href: "/stavka",
    emoji: "📊",
    title: "Ставки по специальностям",
    description:
      "Медианные ставки разработчиков, дизайнеров, маркетологов — 22 специальности",
    badge: null,
    badgeColor: "",
  },
];

export default function InstrumentyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 font-bold text-lg">
            FreelanceCalc
          </Link>
          <span className="text-sm text-gray-500">Инструменты</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Инструменты для фрилансера
          </h1>
          <p className="text-gray-600 text-lg">
            Бесплатные калькуляторы для самозанятых и ИП. Без регистрации,
            без рекламы — просто считайте.
          </p>
        </div>

        <div className="space-y-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block bg-white rounded-2xl border border-gray-100 p-5 hover:border-blue-200 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-0.5">{tool.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </h2>
                    {tool.badge && (
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${tool.badgeColor}`}
                      >
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{tool.description}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-blue-400 mt-1 flex-shrink-0 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 bg-blue-50 rounded-2xl p-5 text-center">
          <p className="text-blue-700 font-semibold">
            Все инструменты бесплатны и работают без регистрации
          </p>
          <p className="text-blue-600 text-sm mt-1">
            Сохраните страницу в закладки — здесь будут новые калькуляторы
          </p>
        </div>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8 text-center text-sm text-gray-400">
        <p>
          © 2026 FreelanceCalc —{" "}
          <Link href="/" className="hover:text-blue-500">
            freecalc.ru
          </Link>
        </p>
      </footer>
    </div>
  );
}
