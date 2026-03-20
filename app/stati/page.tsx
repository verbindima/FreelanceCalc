import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Статьи о ставке фрилансера — советы и расчёты 2026 | FreelanceCalc",
  description:
    "Гайды и статьи о ставках фрилансеров: как рассчитать ставку, налоги самозанятых, средние ставки по специальностям, фриланс vs найм. Реальные данные 2026.",
  keywords: [
    "статьи о фрилансе",
    "советы фрилансеру",
    "ставка фрилансера статья",
    "гайд по ставке фрилансера",
    "фриланс налоги 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati" },
  openGraph: {
    title: "Статьи о ставке фрилансера — FreelanceCalc",
    description:
      "Гайды о расчёте ставки, налогах и рынке фриланса в России 2026.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/stati`,
    siteName: "FreelanceCalc",
  },
};

const ARTICLES = [
  {
    slug: "izmeneniya-samozanyatyh-2026",
    title: "Изменения для самозанятых в 2026 году: ставки, лимиты, новые правила",
    description:
      "Что реально изменилось в НПД в 2026 году: ставки сохранились (4%/6%), режим продлён до 2028. Новинка — добровольные взносы в СФР для больничных.",
    readTime: "6 мин",
    tag: "Налоги",
  },
  {
    slug: "skolko-stoit-nanyat-frilansera",
    title: "Сколько стоит нанять фрилансера в 2026 году — ставки по специальностям",
    description:
      "Реальные ставки для разработчиков, дизайнеров, маркетологов. Типичные бюджеты на проекты, красные флаги и советы по переговорам для заказчиков.",
    readTime: "7 мин",
    tag: "Заказчикам",
  },
  {
    slug: "srednyaya-stavka-frilansera-2026",
    title: "Средняя ставка фрилансера 2026: таблица по 22 специальностям",
    description:
      "Медианные часовые ставки разработчиков, дизайнеров, маркетологов и аналитиков в России. Реальные данные рынка.",
    readTime: "8 мин",
    tag: "Рынок",
  },
  {
    slug: "kak-raschitat-stavku-frilansera",
    title: "Как рассчитать ставку фрилансера: пошаговое руководство",
    description:
      "Формула расчёта почасовой ставки с учётом налогов, простоев и загрузки. Пошаговая инструкция + онлайн-калькулятор.",
    readTime: "6 мин",
    tag: "Руководство",
  },
  {
    slug: "stavka-samozanyatogo-2026",
    title: "Ставка самозанятого фрилансера: как учесть налог НПД",
    description:
      "Как налог 4–6% влияет на расчёт ставки. Разница между самозанятым и ИП для фрилансеров.",
    readTime: "5 мин",
    tag: "Налоги",
  },
  {
    slug: "frilans-vs-naym-2026",
    title: "Фриланс vs найм 2026: что выгоднее финансово?",
    description:
      "Сравнение реального дохода фрилансера и офисного сотрудника с учётом всех расходов и налогов.",
    readTime: "7 мин",
    tag: "Аналитика",
  },
  {
    slug: "kak-povysit-stavku-frilansera",
    title: "Как повысить ставку фрилансера: 7 проверенных способов",
    description:
      "Когда и как поднимать цену на свои услуги. Скрипты для переговоров с клиентами о повышении ставки.",
    readTime: "6 мин",
    tag: "Карьера",
  },
  {
    slug: "samozanyatyj-vs-ip-frilancer",
    title: "Самозанятый или ИП: что выгоднее для фрилансера в 2026",
    description:
      "Сравниваем НПД и ИП УСН 6%: налоги, взносы, реальные расчёты. При каком доходе переходить на ИП?",
    readTime: "7 мин",
    tag: "Налоги",
  },
  {
    slug: "skrytye-rashody-frilansera",
    title: "Скрытые расходы фрилансера 2026: полный список",
    description:
      "Налоги, простои, больничные, ПО, самообразование — всё, что надо заложить в ставку. Считаем реальную стоимость фриланс-часа.",
    readTime: "9 мин",
    tag: "Финансы",
  },
  {
    slug: "stavki-frilanserov-po-gorodam-2026",
    title: "Ставки фрилансеров по городам России 2026: сравнение 15 городов",
    description:
      "Сколько берут фрилансеры в Москве, Петербурге, Екатеринбурге и других городах? Таблица медианных ставок по 15 городам с калькуляторами.",
    readTime: "6 мин",
    tag: "Рынок",
  },
];

const TAG_COLORS: Record<string, string> = {
  Рынок: "bg-blue-50 text-blue-700",
  Руководство: "bg-indigo-50 text-indigo-700",
  Налоги: "bg-amber-50 text-amber-700",
  Аналитика: "bg-violet-50 text-violet-700",
  Карьера: "bg-emerald-50 text-emerald-700",
  Заказчикам: "bg-rose-50 text-rose-700",
  Финансы: "bg-red-50 text-red-700",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Статьи о ставке фрилансера",
  description:
    "Гайды и статьи о расчёте ставки фрилансера, налогах и рынке фриланса в России 2026.",
  url: `${BASE_URL}/stati`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
    ],
  },
  hasPart: ARTICLES.map((a) => ({
    "@type": "Article",
    headline: a.title,
    description: a.description,
    url: `${BASE_URL}/stati/${a.slug}`,
  })),
};

export default function StatiIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">
            FreelanceCalc
          </Link>
          <span>›</span>
          <span className="text-slate-600">Статьи</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Статьи о ставке фрилансера
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            Гайды, расчёты и аналитика для фрилансеров в России. Реальные
            данные рынка 2026 — без воды.
          </p>
        </header>

        {/* Articles list */}
        <div className="space-y-4">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/stati/${article.slug}`}
              className="block group bg-white rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm transition-all p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${TAG_COLORS[article.tag] ?? "bg-slate-100 text-slate-600"}`}
                >
                  {article.tag}
                </span>
                <span className="text-xs text-slate-400">{article.readTime} чтения</span>
              </div>
              <h2 className="text-base font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors leading-snug">
                {article.title}
              </h2>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-indigo-50 border border-indigo-100 rounded-xl p-5 text-center">
          <p className="text-sm text-indigo-700 font-medium">
            Рассчитайте свою ставку прямо сейчас
          </p>
          <p className="text-xs text-indigo-500 mt-1 mb-3">
            Бесплатный калькулятор с учётом налогов, отпуска и загрузки
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Открыть калькулятор →
          </Link>
        </div>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">
            ← Главная
          </Link>
          &nbsp;·&nbsp;
          <Link href="/stavka" className="hover:text-indigo-600">
            Ставки по специальностям
          </Link>
          &nbsp;·&nbsp;
          <Link href="/goroda" className="hover:text-indigo-600">
            Города
          </Link>
        </footer>
      </main>
    </>
  );
}
