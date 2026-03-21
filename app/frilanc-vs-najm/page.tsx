import type { Metadata } from "next";
import Link from "next/link";
import { SPECIALTIES } from "../stavka/[slug]/specialties";
import { NAJEM_DATA } from "./najem-data";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Фриланс vs найм 2026: сравнение доходов по специальностям",
  description:
    "Сравниваем зарплаты фрилансеров и штатных сотрудников по 30+ специальностям. Реальные цифры, точка безубыточности и калькулятор ставки для каждой профессии.",
  keywords: [
    "фриланс vs найм",
    "фриланс или работа в офисе",
    "стоит ли уходить на фриланс",
    "зарплата фрилансера vs штат",
    "фриланс доход сравнение",
    "самозанятый vs наёмный работник",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/frilanc-vs-najm" },
  openGraph: {
    title: "Фриланс vs найм 2026: сравнение доходов по специальностям",
    description:
      "30+ специальностей: сравниваем реальные доходы фрилансеров и штатных сотрудников с точным расчётом.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/frilanc-vs-najm`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Фриланс vs найм 2026: сравнение по специальностям",
      description:
        "Подробное сравнение доходов фрилансеров и штатных сотрудников по 30+ специальностям с расчётом точки безубыточности.",
      url: `${BASE_URL}/frilanc-vs-najm`,
      inLanguage: "ru",
      publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Фриланс vs найм", item: `${BASE_URL}/frilanc-vs-najm` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Фриланс или найм — что выгоднее финансово?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Фрилансер зарабатывает в 1,5–2 раза больше штатного сотрудника той же квалификации — при условии загрузки от 65–70% и самостоятельной оплаты налогов (4–6% НПД). Ключевые риски: нестабильный поток заказов, отсутствие оплачиваемого отпуска и больничного. Рекомендуется начинать переход с финансовой подушкой на 3 месяца.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько нужно зарабатывать на фрилансе, чтобы не потерять в доходе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Чтобы иметь столько же «на руки», как в найме, нужно зарабатывать на фрилансе примерно на 25–35% больше: компенсировать отпуск (28 дней = ~11%), больничные (~3%), периоды между проектами (~10%) и иногда расходы на маркетинг. Калькулятор на нашем сайте считает точную ставку с учётом всех этих факторов.",
          },
        },
      ],
    },
  ],
};

// Categories for grouping specialties
const CATEGORIES = [
  {
    name: "Разработка",
    emoji: "💻",
    slugs: [
      "frontend-razrabotchik",
      "backend-razrabotchik",
      "fullstack-razrabotchik",
      "mobilnyj-razrabotchik",
      "python-razrabotchik",
      "java-razrabotchik",
      "golang-razrabotchik",
      "react-razrabotchik",
      "php-razrabotchik",
      "devops-inzhener",
      "1c-razrabotchik",
      "bitrix-razrabotchik",
      "wordpress-razrabotchik",
      "testirovshchik-qa",
    ],
  },
  {
    name: "Дизайн",
    emoji: "🎨",
    slugs: [
      "dizajner-ui-ux",
      "graficheskij-dizajner",
      "illustrator-frilanser",
      "fotograf-frilanser",
      "videomontazhyor",
      "dizajner-intererov",
    ],
  },
  {
    name: "Маркетинг и контент",
    emoji: "📢",
    slugs: [
      "kopirayter",
      "smm-specialist",
      "seo-specialist",
      "targetolog",
      "kontent-menedzher",
      "tekhnicheskij-pisatel",
      "marketolog-frilanser",
    ],
  },
  {
    name: "Аналитика и данные",
    emoji: "📊",
    slugs: ["data-analyst", "ml-inzhener", "biznes-analitik"],
  },
  {
    name: "Управление",
    emoji: "📋",
    slugs: ["menedzher-proektov"],
  },
  {
    name: "Другие профессии",
    emoji: "🌟",
    slugs: [
      "yurist-frilanser",
      "buhgalter-frilanser",
      "perevodchik",
      "repetitor",
      "psiholog-frilanser",
    ],
  },
];

const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

export default function FrilancVsNajmIndexPage() {
  // Filter specialties that have najem data
  const available = SPECIALTIES.filter((s) => NAJEM_DATA[s.slug]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Главная</Link>
          <span>›</span>
          <span className="text-slate-600">Фриланс vs найм</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {available.length} специальностей · Данные 2026
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Фриланс vs найм 2026: сравнение доходов по специальностям
          </h1>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
            Реальные цифры зарплат штатных сотрудников и ставок фрилансеров.
            Для каждой специальности — точка безубыточности, плюсы и минусы, калькулятор.
          </p>
        </header>

        {/* Summary block */}
        <section className="mb-12 grid sm:grid-cols-3 gap-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">1.5–2×</div>
            <div className="text-sm text-indigo-600">Доход фрилансера выше</div>
            <div className="text-xs text-indigo-400 mt-1">при загрузке 65–75%</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold text-green-700 mb-1">4–6%</div>
            <div className="text-sm text-green-600">Налог самозанятого (НПД)</div>
            <div className="text-xs text-green-400 mt-1">против 13% НДФЛ в найме</div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold text-amber-700 mb-1">3 мес</div>
            <div className="text-sm text-amber-600">Финансовая подушка</div>
            <div className="text-xs text-amber-400 mt-1">рекомендуется перед переходом</div>
          </div>
        </section>

        {/* Categories */}
        {CATEGORIES.map((cat) => {
          const specs = cat.slugs
            .map((slug) => SPECIALTIES.find((s) => s.slug === slug))
            .filter(Boolean)
            .filter((s) => s && NAJEM_DATA[s.slug]);

          if (specs.length === 0) return null;

          return (
            <section key={cat.name} className="mb-10">
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {specs.map((spec) => {
                  if (!spec) return null;
                  const data = NAJEM_DATA[spec.slug];
                  return (
                    <Link
                      key={spec.slug}
                      href={`/frilanc-vs-najm/${spec.slug}`}
                      className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:shadow-sm transition-all group"
                    >
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-slate-800 group-hover:text-indigo-700 transition-colors truncate">
                          {data.jobTitle}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Найм: {fmt(data.salaryMin / 1000)}–{fmt(data.salaryMax / 1000)} тыс. ₽ · Фриланс: {spec.medianHourly}
                        </div>
                      </div>
                      <span className="text-slate-300 group-hover:text-indigo-400 transition-colors ml-3 shrink-0">›</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Рассчитайте вашу ставку</h2>
          <p className="text-indigo-100 text-sm mb-6 max-w-md mx-auto">
            Введите желаемый доход — калькулятор покажет точную ставку с учётом налогов,
            отпуска и реальной загрузки.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            🧮 Открыть калькулятор ставки
          </Link>
        </section>

        {/* Related */}
        <section className="mt-10">
          <h2 className="text-base font-semibold text-slate-700 mb-4">Связанные материалы</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/stati/frilans-vs-naym-2026" className="text-sm text-indigo-600 hover:underline bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
              Фриланс vs найм 2026 — полный разбор
            </Link>
            <Link href="/stati/kak-raschitat-stavku-frilansera" className="text-sm text-indigo-600 hover:underline bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
              Как рассчитать ставку фрилансера
            </Link>
            <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="text-sm text-indigo-600 hover:underline bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
              Самозанятый или ИП: что выбрать
            </Link>
            <Link href="/stavka" className="text-sm text-indigo-600 hover:underline bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
              Ставки по всем специальностям
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
