import type { Metadata } from "next";
import Link from "next/link";
import ProjectCalc from "./ProjectCalc";

const BASE_URL = "https://freelancecalc-one.vercel.app";
const CANONICAL = "/instrumenty/kalkulator-stoimosti-proekta";

export const metadata: Metadata = {
  title: "Калькулятор стоимости найма фрилансера 2026 — бюджет на проект",
  description:
    "Рассчитайте бюджет на фрилансера: укажите специальность, город и объём работы — получите диапазон стоимости проекта с учётом рыночных ставок Q1 2026. Разработчики, дизайнеры, маркетологи.",
  keywords: [
    "сколько стоит нанять фрилансера",
    "калькулятор стоимости фрилансера",
    "бюджет на фрилансера",
    "сколько платить фрилансеру за проект",
    "стоимость разработки фрилансер",
    "расчёт бюджета проекта",
    "сколько стоит разработчик фрилансер",
    "сколько берёт дизайнер фрилансер",
    "стоимость услуг фрилансера 2026",
    "нанять фрилансера цена",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Калькулятор стоимости найма фрилансера — бюджет на проект 2026",
    description:
      "Рассчитайте бюджет: специальность × город × часы = диапазон стоимости. Данные рынка Q1 2026.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}${CANONICAL}`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Калькулятор стоимости найма фрилансера",
      description:
        "Интерактивный калькулятор для расчёта бюджета на найм фрилансера по рыночным ставкам Q1 2026. Специальность × город × объём работы.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}${CANONICAL}`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "RUB",
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Инструменты", item: `${BASE_URL}/instrumenty` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Калькулятор стоимости найма",
          item: `${BASE_URL}${CANONICAL}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько стоит нанять фрилансера-разработчика?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В среднем по России: Frontend-разработчик — 1 500–3 000 ₽/час, Backend — 2 000–4 000 ₽/час, Fullstack — 2 000–4 500 ₽/час. Проект на 160 часов (1 месяц) обойдётся от 240 000 до 720 000 ₽ в зависимости от специализации и региона фрилансера. Используйте калькулятор выше для точного расчёта.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать бюджет на фрилансера?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Формула: часовая ставка × количество часов × поправочный коэффициент города. Дополнительно закладывайте 10–20% на правки и итерации. Ставки зависят от специальности, уровня опыта (джун/мид/сеньор) и региона: Москва — базовый уровень, регионы — на 25–40% ниже.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли платить налоги при найме фрилансера-самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет. Самозанятый платит НПД самостоятельно: 4% при получении от физлиц, 6% от юрлиц и ИП. Работодатель не является налоговым агентом, не платит НДФЛ (13%) и страховые взносы (~30%). Это делает найм самозанятых выгоднее штатного сотрудника примерно на 30–40%.",
          },
        },
        {
          "@type": "Question",
          name: "Почему ставки фрилансеров в регионах ниже, чем в Москве?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Региональный рынок труда ориентируется на местный уровень жизни и стоимость ресурсов. В регионах ставки в среднем на 25–40% ниже московских при сопоставимом уровне специалиста. Однако многие опытные региональные фрилансеры работают с московскими клиентами по московским ставкам.",
          },
        },
      ],
    },
  ],
};

export default function KalkulyatorStoimostiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/instrumenty" className="text-gray-500 text-sm hover:text-blue-600">
              Инструменты
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm font-medium">Стоимость найма</span>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8 md:py-10">
          {/* Hero */}
          <header className="mb-8 text-center">
            <p className="text-sm font-semibold text-indigo-500 mb-1 tracking-wide uppercase">
              Для работодателей
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Сколько стоит нанять фрилансера?
            </h1>
            <p className="mt-2 text-slate-500 text-base max-w-md mx-auto">
              Выберите специальность, город и объём работы — получите оценку бюджета
              по рыночным ставкам Q1 2026
            </p>
          </header>

          <ProjectCalc />

          {/* Article-style content for SEO */}
          <article className="mt-10 prose prose-slate prose-sm max-w-none">
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Рыночные ставки фрилансеров по специальностям в 2026 году
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Стоимость найма фрилансера зависит от трёх ключевых факторов: специальности,
              уровня опыта и региона. В 2026 году рынок фриланса в России продолжает расти —
              особенно в сегментах разработки и диджитал-маркетинга.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Специальность</th>
                    <th className="text-right px-4 py-3 font-semibold text-slate-700">Ставка (Москва)</th>
                    <th className="text-right px-4 py-3 font-semibold text-slate-700">Месяц (160 ч)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "ML/AI-инженер", rate: "3 500–7 000 ₽/ч", month: "560 000–1 120 000 ₽" },
                    { name: "DevOps-инженер", rate: "2 500–5 000 ₽/ч", month: "400 000–800 000 ₽" },
                    { name: "Backend-разработчик", rate: "2 000–4 000 ₽/ч", month: "320 000–640 000 ₽" },
                    { name: "Fullstack-разработчик", rate: "2 000–4 500 ₽/ч", month: "320 000–720 000 ₽" },
                    { name: "Frontend-разработчик", rate: "1 500–3 000 ₽/ч", month: "240 000–480 000 ₽" },
                    { name: "Аналитик данных", rate: "1 500–3 500 ₽/ч", month: "240 000–560 000 ₽" },
                    { name: "UI/UX-дизайнер", rate: "1 200–2 800 ₽/ч", month: "192 000–448 000 ₽" },
                    { name: "SEO-специалист", rate: "1 000–2 200 ₽/ч", month: "160 000–352 000 ₽" },
                    { name: "Таргетолог", rate: "900–2 000 ₽/ч", month: "144 000–320 000 ₽" },
                    { name: "Копирайтер", rate: "700–1 700 ₽/ч", month: "112 000–272 000 ₽" },
                  ].map((row) => (
                    <tr key={row.name} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                      <td className="px-4 py-2.5 font-medium text-slate-800">{row.name}</td>
                      <td className="px-4 py-2.5 text-right text-slate-700">{row.rate}</td>
                      <td className="px-4 py-2.5 text-right text-slate-600">{row.month}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Налоги при найме самозанятого фрилансера
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Найм самозанятого фрилансера значительно выгоднее штатного сотрудника:
            </p>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li>• <strong>НДФЛ (13%):</strong> не платите — самозанятый платит НПД сам (4–6%)</li>
              <li>• <strong>Страховые взносы (~30%):</strong> не платите — освобождены по закону</li>
              <li>• <strong>Итого экономия:</strong> ~30–40% к стоимости штатного специалиста</li>
            </ul>
            <p className="text-slate-600 text-sm leading-relaxed">
              Единственное ограничение: самозанятый не может работать более 2,4 млн ₽/год с одним
              заказчиком. Для долгосрочного сотрудничества стоит рассмотреть ИП на УСН.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">
              Как правильно оценить стоимость проекта
            </h2>
            <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside mb-4">
              <li>Составьте чёткое ТЗ с функциональными требованиями — это снизит стоимость правок</li>
              <li>Запросите предоплату 30–50%: это отсеивает ненадёжных исполнителей</li>
              <li>Разбейте проект на этапы с приёмкой — оплата по майлстоунам</li>
              <li>Закладывайте +20% к смете на непредвиденные правки</li>
              <li>Проверьте ставку по рынку — сравните с медианами в бенчмарке</li>
            </ol>
          </article>

          {/* Footer nav */}
          <div className="border-t border-gray-200 pt-6 mt-8 flex flex-wrap gap-4">
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              ← Калькулятор ставки (для фрилансера)
            </Link>
            <Link href="/stati/skolko-stoit-nanyat-frilansera" className="text-sm text-blue-600 hover:underline">
              Статья: сколько платить фрилансеру →
            </Link>
            <Link href="/benchmark" className="text-sm text-blue-600 hover:underline">
              PDF-бенчмарк ставок →
            </Link>
            <Link href="/instrumenty" className="text-sm text-blue-600 hover:underline">
              Все инструменты →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
