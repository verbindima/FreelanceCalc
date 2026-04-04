import { Metadata } from "next";
import Link from "next/link";
import { SPECIALTIES } from "../stavka/[slug]/specialties";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Сколько платить фрилансеру в 2026 году — ставки по специальностям",
  description:
    "Рыночные ставки фрилансеров для работодателей: 44 специальности. Узнайте, сколько стоит нанять разработчика, дизайнера, маркетолога на проект в 2026 году.",
  alternates: { canonical: "/naim" },
  openGraph: {
    title: "Сколько платить фрилансеру в 2026 — FreelanceCalc",
    description:
      "Рыночные ставки по 44 специальностям для работодателей. Данные hh.ru, обновляются ежедневно.",
    url: `${BASE_URL}/naim`,
    type: "website",
    locale: "ru_RU",
  },
};

function roleFromTitle(shortTitle: string): string {
  return shortTitle.replace(/^Ставка\s+/i, "");
}

const CATEGORIES = [
  {
    label: "Разработка",
    slugs: [
      "frontend-razrabotchik",
      "backend-razrabotchik",
      "fullstack-razrabotchik",
      "python-razrabotchik",
      "mobilnyj-razrabotchik",
      "ios-razrabotchik",
      "android-razrabotchik",
      "react-razrabotchik",
      "java-razrabotchik",
      "golang-razrabotchik",
      "php-razrabotchik",
      "1c-razrabotchik",
      "bitrix-razrabotchik",
      "wordpress-razrabotchik",
      "net-razrabotchik",
    ],
  },
  {
    label: "Data & ML",
    slugs: ["python-razrabotchik", "data-analyst", "ml-inzhener", "biznes-analitik"],
  },
  {
    label: "DevOps",
    slugs: ["devops-inzhener"],
  },
  {
    label: "Дизайн",
    slugs: [
      "dizajner-ui-ux",
      "graficheskij-dizajner",
      "illustrator-frilanser",
      "moushon-dizajner",
      "3d-vizualizator",
      "dizajner-intererov",
    ],
  },
  {
    label: "Маркетинг и контент",
    slugs: [
      "kopirayter",
      "smm-specialist",
      "seo-specialist",
      "targetolog",
      "kontent-menedzher",
      "marketolog-frilanser",
    ],
  },
  {
    label: "Медиа и творчество",
    slugs: ["videomontazhyor", "fotograf-frilanser", "perevodchik", "perevodchik-frilanser"],
  },
  {
    label: "Управление",
    slugs: ["menedzher-proektov", "product-manager-frilanser"],
  },
  {
    label: "Профессионалы",
    slugs: [
      "yurist-frilanser",
      "buhgalter-frilanser",
      "psiholog-frilanser",
      "tekhnicheskij-pisatel",
      "repetitor",
    ],
  },
];

const specialtyMap = Object.fromEntries(SPECIALTIES.map((s) => [s.slug, s]));

export default function NaimHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Сколько платить фрилансеру в 2026 году",
            description:
              "Рыночные ставки фрилансеров по 44 специальностям для работодателей. Данные hh.ru.",
            url: `${BASE_URL}/naim`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
                { "@type": "ListItem", position: 2, name: "Найм фрилансеров", item: `${BASE_URL}/naim` },
              ],
            },
          }),
        }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center">
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span>›</span>
          <span className="text-slate-600">Найм фрилансеров</span>
        </nav>

        <header className="mb-8">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            🏢 Для работодателей
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Сколько платить фрилансеру в 2026 году
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            Рыночные ставки по 44 специальностям. Данные hh.ru, обновляются ежедневно.
            Узнайте актуальную стоимость junior / middle / senior по каждой специальности.
          </p>
        </header>

        {/* Categories */}
        <div className="space-y-6">
          {CATEGORIES.map((cat) => {
            const specs = cat.slugs
              .map((slug) => specialtyMap[slug])
              .filter(Boolean);
            if (specs.length === 0) return null;
            return (
              <section key={cat.label}>
                <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  {cat.label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {specs.map((spec) => (
                    <Link
                      key={spec.slug}
                      href={`/naim/${spec.slug}`}
                      className="group flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all"
                    >
                      <div>
                        <div className="text-sm font-medium text-slate-800 group-hover:text-amber-700">
                          {roleFromTitle(spec.shortTitle)}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{spec.medianHourly}</div>
                      </div>
                      <span className="text-slate-300 group-hover:text-amber-400 text-sm">→</span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Cross-link to freelancer side */}
        <section className="mt-10 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-sm text-slate-600">
            Вы фрилансер?{" "}
            <Link href="/stavka" className="text-indigo-600 hover:underline font-medium">
              Рассчитайте свою ставку →
            </Link>
          </p>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">← Главная</Link>
        </footer>
      </main>
    </>
  );
}
