import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Альтернативы калькуляторам ставки фрилансера — FreelanceCalc",
  description:
    "Сравниваем FreelanceCalc с другими инструментами для фрилансеров в России: FL.ru, Kwork, Digital Broccoli, Тинькофф Журнал, NPD-Calculator. Узнайте, чем отличается FreelanceCalc и почему рыночные медианы важнее простой формулы.",
  keywords: [
    "альтернатива калькулятору ставки фрилансера",
    "лучший калькулятор фрилансера",
    "калькулятор ставки fl.ru",
    "kwork комиссия калькулятор",
    "digital broccoli альтернатива",
    "тинькофф журнал калькулятор альтернатива",
    "npd calculator альтернатива фрилансер",
    "profi ru калькулятор ставки",
    "альтернатива profi.ru калькулятор",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/alternativa" },
  openGraph: {
    title: "Альтернативы калькуляторам ставки фрилансера — FreelanceCalc",
    description:
      "Сравниваем всех: FL.ru, Kwork, Digital Broccoli, Тинькофф, NPD-Calculator и FreelanceCalc.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/alternativa`,
    siteName: "FreelanceCalc",
  },
};

const competitors = [
  {
    slug: "fl-ru-kalkulator",
    name: "FL.ru",
    url: "fl.ru",
    description: "Крупнейшая биржа фриланса в России. Нет встроенного калькулятора ставки — фрилансеры называют цену «на глаз» и занижают её на 30–45%.",
    tags: ["крупнейшая биржа", "нет калькулятора", "нет рыночных данных"],
    pros: "Огромная база заказов",
    cons: "Нет инструмента для расчёта ставки",
  },
  {
    slug: "kwork-kalkulator",
    name: "Kwork",
    url: "kwork.ru",
    description: "Популярная биржа фиксированных задач. Комиссия 20% + налог НПД — без калькулятора легко поставить цену ниже нужной.",
    tags: ["комиссия 20%", "фиксированные цены", "нет калькулятора"],
    pros: "Удобный формат кворков",
    cons: "Комиссия скрыто «съедает» доход",
  },
  {
    slug: "digital-broccoli",
    name: "Digital Broccoli",
    url: "digitalbroccoli.com/calc",
    description: "Один из первых калькуляторов фрилансера в рунете. Хорошая база, но без рыночных медиан и специализаций.",
    tags: ["универсальный", "без специальностей", "без городов"],
    pros: "Простой и быстрый",
    cons: "Нет рыночных данных и специализаций",
  },
  {
    slug: "tinkoff-kalkulator",
    name: "Тинькофф Журнал",
    url: "t-j.ru/freelance-calc",
    description: "Авторитетный источник, но калькулятор давно не обновлялся. Ставки рынка ушли вперёд.",
    tags: ["авторитетный бренд", "без обновлений", "без городов"],
    pros: "Знакомый бренд",
    cons: "Устаревшие данные, нет специализаций",
  },
  {
    slug: "npd-calculator",
    name: "NPD-Calculator",
    url: "npd-calculator.ru",
    description: "Считает только налог НПД. Полезен как утилита, но не помогает рассчитать ставку.",
    tags: ["только налог НПД", "без ставки", "самозанятый"],
    pros: "Точный расчёт НПД",
    cons: "Не считает полную ставку",
  },
  {
    slug: "profi-ru-kalkulator",
    name: "Profi.ru",
    url: "profi.ru",
    description: "Крупнейший маркетплейс услуг в России — 10+ млн исполнителей. Нет встроенного калькулятора ставки: исполнители ставят цену «на глаз» и не учитывают налоги и загрузку.",
    tags: ["крупнейший маркетплейс", "нет калькулятора", "нет рыночных данных"],
    pros: "Огромная база клиентов",
    cons: "Нет инструмента для расчёта ставки",
  },
];

const features = [
  { label: "20+ специальностей", description: "Разработчик, дизайнер, копирайтер, таргетолог..." },
  { label: "10+ городов", description: "Москва, СПб, Краснодар, Новосибирск и другие" },
  { label: "Рыночные медианы", description: "Реальные данные рынка Q1 2026, обновляются ежеквартально" },
  { label: "Налоги самозанятого и ИП", description: "НПД 4%/6%, ИП УСН 6% — точный расчёт" },
  { label: "Загрузка и отпуск", description: "Billable ratio, больничные, простои — всё учтено" },
  { label: "PDF-бенчмарк", description: "Медианы по специальностям и городам за 249 ₽" },
];

export default function AlternativaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
            FreelanceCalc
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
            <li>/</li>
            <li className="text-gray-700">Альтернативы</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          FreelanceCalc vs другие калькуляторы ставки фрилансера
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Работаете на FL.ru, Kwork или ищете калькулятор с рыночными данными? Здесь — честное
          сравнение всех инструментов: что умеет каждый и чем FreelanceCalc отличается.
        </p>

        {/* CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <p className="text-blue-900 font-semibold mb-2">Попробуйте FreelanceCalc прямо сейчас</p>
          <p className="text-blue-700 text-sm mb-4">
            Ставка по специальности и городу с рыночными медианами — бесплатно за 30 секунд.
          </p>
          <Link
            href="/?utm_source=alternativa&utm_medium=hub&utm_campaign=main"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Рассчитать ставку бесплатно →
          </Link>
        </div>

        {/* Competitors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Сравнение калькуляторов</h2>
          <div className="space-y-4">
            {competitors.map((comp) => (
              <div key={comp.slug} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{comp.name}</h3>
                    <p className="text-xs text-gray-400 mb-2">{comp.url}</p>
                    <p className="text-gray-600 text-sm mb-3">{comp.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {comp.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/alternativa/${comp.slug}`}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
                  >
                    Детальное сравнение →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100 text-sm">
                  <div>
                    <span className="text-green-600 font-medium">✅ Плюс: </span>
                    <span className="text-gray-600">{comp.pros}</span>
                  </div>
                  <div>
                    <span className="text-red-500 font-medium">❌ Минус: </span>
                    <span className="text-gray-600">{comp.cons}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FreelanceCalc features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Почему FreelanceCalc</h2>
          <p className="text-gray-600 mb-6">
            Единственный калькулятор с рыночными медианами по специальностям и городам России.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.label} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">✅ {feature.label}</p>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Попробуйте сами — это бесплатно</h2>
          <p className="text-blue-100 mb-6">
            30 секунд. Специальность, город, налоги, загрузка — и ставка с рыночным контекстом.
          </p>
          <Link
            href="/?utm_source=alternativa&utm_medium=hub&utm_campaign=bottom"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>
      </div>
    </main>
  );
}
