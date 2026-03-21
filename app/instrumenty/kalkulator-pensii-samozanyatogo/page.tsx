import type { Metadata } from "next";
import Link from "next/link";
import PensionCalc from "./PensionCalc";

const BASE_URL = "https://freelancecalc-one.vercel.app";
const CANONICAL = "/instrumenty/kalkulator-pensii-samozanyatogo";

export const metadata: Metadata = {
  title: "Калькулятор пенсии самозанятого 2026 — сколько теряете без взносов?",
  description:
    "Самозанятые не накапливают пенсионный стаж по умолчанию. Рассчитайте потерю пенсии за годы без добровольных взносов в СФР 2026 и сравните с ценой страхования. Бесплатно.",
  keywords: [
    "пенсия самозанятого 2026",
    "самозанятый пенсия расчет",
    "самозанятый пенсионный стаж",
    "добровольные взносы самозанятого ПФР",
    "самозанятый пенсионные баллы",
    "самозанятый пенсия будет ли",
    "как самозанятому получить пенсию",
    "калькулятор пенсии самозанятый",
    "самозанятый стаж взносы СФР 2026",
    "самозанятый НПД пенсионный стаж",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Калькулятор пенсии самозанятого 2026 — считайте, сколько теряете",
    description:
      "Каждый год без взносов — это −171 ₽/мес к пенсии навсегда. Рассчитайте свою потерю и узнайте, стоит ли платить.",
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
      "@type": "WebApplication",
      "@id": `${BASE_URL}${CANONICAL}`,
      name: "Калькулятор пенсии самозанятого 2026",
      description:
        "Рассчитайте потерю пенсии за годы работы без добровольных взносов в СФР. Сравните сценарии: без взносов vs с минимальными взносами.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}${CANONICAL}`,
      inLanguage: "ru",
      offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Инструменты", item: `${BASE_URL}/instrumenty` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Калькулятор пенсии самозанятого",
          item: `${BASE_URL}${CANONICAL}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Будет ли пенсия у самозанятого?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Самозанятые, которые платят только НПД (4–6%), не накапливают пенсионный стаж и пенсионные баллы (ИПК). Без официального стажа или добровольных взносов в СФР они получат только социальную пенсию — примерно 7 500 ₽/мес и на 5 лет позже обычного возраста.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько стоит добровольный взнос самозанятого в СФР в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Минимальный добровольный взнос самозанятого в 2026 году — 71 525,52 ₽ в год (5 960 ₽/мес). За это начисляется 1,09 пенсионного балла (ИПК) и 1 год стажа.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько добавляет 1 год добровольных взносов к пенсии?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В 2026 году 1 балл ИПК = 156,76 ₽/мес к пенсии. Минимальный взнос даёт 1,09 балла, то есть ~171 ₽/мес прибавки к пенсии пожизненно.",
          },
        },
      ],
    },
  ],
};

export default function PensionCalcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-indigo-600 font-bold text-lg">
              FreelanceCalc
            </Link>
            <Link href="/instrumenty" className="text-sm text-gray-500 hover:text-indigo-600">
              Все инструменты →
            </Link>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-400 mb-6 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
            <span>/</span>
            <Link href="/instrumenty" className="hover:text-indigo-600">Инструменты</Link>
            <span>/</span>
            <span className="text-slate-600">Пенсия самозанятого</span>
          </nav>

          {/* Hero */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-indigo-500 mb-1 tracking-wide uppercase">
              Калькулятор
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Пенсия самозанятого: сколько теряете?
            </h1>
            <p className="mt-2 text-slate-500 text-base max-w-lg">
              Самозанятые не платят пенсионные взносы по умолчанию — НПД идёт только в ФОМС.{" "}
              Каждый год без добровольных взносов не идёт в стаж и не добавляет пенсионных баллов.
              Посчитайте свою потерю за 30 секунд.
            </p>
          </div>

          <PensionCalc />

          {/* Related tools */}
          <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="font-semibold text-slate-700 text-sm mb-3">Связанные инструменты</h2>
            <div className="space-y-2">
              {[
                {
                  href: "/nalog/sfr",
                  emoji: "🏥",
                  title: "Больничный для самозанятых (СФР)",
                  desc: "Стоит ли платить взносы на случай болезни — калькулятор окупаемости",
                },
                {
                  href: "/nalog/sravnenie",
                  emoji: "⚖️",
                  title: "Самозанятый vs ИП: сравнение налогов",
                  desc: "Найдите точку перехода с НПД на ИП УСН для вашего дохода",
                },
                {
                  href: "/nalog/ip-usn",
                  emoji: "🏢",
                  title: "Калькулятор налога ИП УСН 6%",
                  desc: "ИП платят пенсионные взносы обязательно — посчитайте полную нагрузку",
                },
                {
                  href: "/",
                  emoji: "💰",
                  title: "Калькулятор ставки фрилансера",
                  desc: "Включите взносы в СФР в свою ставку — и получайте реальный доход",
                },
              ].map(({ href, emoji, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-2xl mt-0.5">{emoji}</span>
                  <div>
                    <p className="text-sm font-medium text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {title}
                    </p>
                    <p className="text-xs text-slate-500">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-100 mt-16 py-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} FreelanceCalc —{" "}
            <Link href="/" className="hover:text-indigo-600">
              freelancecalc-one.vercel.app
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
