import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SPECIALTIES, getSpecialty } from "./specialties";
import SpecialtyCalc from "./SpecialtyCalc";

const BASE_URL = "https://freelancecalc.ru";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  if (!spec) return {};
  return {
    title: `${spec.shortTitle} — FreelanceCalc`,
    description: spec.description,
    alternates: { canonical: `/stavka/${slug}` },
    openGraph: {
      title: `${spec.shortTitle} — FreelanceCalc`,
      description: spec.description,
      url: `${BASE_URL}/stavka/${slug}`,
      type: "website",
      locale: "ru_RU",
    },
  };
}

export default async function SpecialtyPage({ params }: Props) {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  if (!spec) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": spec.title,
    "description": spec.description,
    "url": `${BASE_URL}/stavka/${slug}`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "FreelanceCalc", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Ставки по специальностям", "item": `${BASE_URL}/stavka` },
        { "@type": "ListItem", "position": 3, "name": spec.shortTitle, "item": `${BASE_URL}/stavka/${slug}` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span>›</span>
          <span>Ставки по специальностям</span>
          <span>›</span>
          <span className="text-slate-600">{spec.shortTitle}</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {spec.title}
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            {spec.intro}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-1.5">
            <span className="text-xs text-indigo-600 font-medium">
              📊 Медианная ставка: <strong>{spec.medianHourly}</strong>
            </span>
          </div>
        </header>

        {/* Calculator pre-filled for this specialty */}
        <SpecialtyCalc
          defaultIncome={spec.defaultIncome}
          defaultHours={spec.defaultHours}
          defaultLoad={spec.defaultLoad}
          specialty={spec.shortTitle}
        />

        {/* Links to other specialties */}
        <section className="mt-10">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Другие специальности
          </h2>
          <div className="flex flex-wrap gap-2">
            {SPECIALTIES.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                href={`/stavka/${s.slug}`}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {s.shortTitle}
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">
            ← Главная
          </Link>
        </footer>
      </main>
    </>
  );
}
