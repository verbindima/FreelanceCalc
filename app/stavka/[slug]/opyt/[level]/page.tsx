import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SPECIALTIES, getSpecialty } from "../../specialties";
import SpecialtyCalc from "../../SpecialtyCalc";
import { LEVELS, getLevel, ExperienceLevel } from "./levels";

const BASE_URL = "https://freelancecalc-one.vercel.app";

type Props = { params: Promise<{ slug: string; level: string }> };

export async function generateStaticParams() {
  const params: { slug: string; level: string }[] = [];
  for (const spec of SPECIALTIES) {
    for (const lvl of LEVELS) {
      params.push({ slug: spec.slug, level: lvl.slug });
    }
  }
  return params;
}

/** Adjust medianHourly range by level multiplier */
function adjustRate(median: string, multiplier: number): string {
  const matches = [...median.matchAll(/(\d[\d ]*\d|\d+)/g)];
  const nums = matches
    .map((m) => parseInt(m[0].replace(/ /g, ""), 10))
    .filter((n) => n >= 100);
  if (nums.length < 2) return median;
  const [low, high] = nums;
  const adjLow = Math.round((low * multiplier) / 100) * 100;
  const adjHigh = Math.round((high * multiplier) / 100) * 100;
  return `${adjLow.toLocaleString("ru-RU")} – ${adjHigh.toLocaleString("ru-RU")} ₽/час`;
}

function adjustedIncome(base: number, multiplier: number): number {
  return Math.round((base * multiplier) / 1000) * 1000;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, level: levelSlug } = await params;
  const spec = getSpecialty(slug);
  const lvl = getLevel(levelSlug);
  if (!spec || !lvl) return {};

  const role = spec.shortTitle.replace(/^Ставка\s+/i, "");
  const rate = adjustRate(spec.medianHourly, lvl.incomeMultiplier);

  return {
    title: `Ставка ${lvl.name} ${role} 2026 — FreelanceCalc`,
    description: `Рассчитайте ставку ${lvl.nameRu}-фрилансера: ${role.toLowerCase()} с ${lvl.yearsLong}. Медианная ставка ${lvl.name}: ${rate}. Учёт НПД, отпуска, загрузки.`,
    alternates: { canonical: `/stavka/${slug}/opyt/${levelSlug}` },
    openGraph: {
      title: `Ставка ${lvl.name} ${role} 2026`,
      description: `Медианная ставка ${lvl.name} ${role.toLowerCase()} на фрилансе: ${rate}. Калькулятор с учётом налогов и загрузки.`,
      url: `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}`,
      type: "website",
      locale: "ru_RU",
    },
  };
}

function buildFaq(spec: ReturnType<typeof getSpecialty> & {}, lvl: ExperienceLevel) {
  const role = spec.shortTitle.replace(/^Ставка\s+/i, "");
  const rate = adjustRate(spec.medianHourly, lvl.incomeMultiplier);
  const income = adjustedIncome(spec.defaultIncome, lvl.incomeMultiplier);
  const incomeStr = income.toLocaleString("ru-RU");

  return [
    {
      q: `Сколько берёт ${lvl.name} ${role} за час?`,
      a: `Медианная ставка ${lvl.name} ${role.toLowerCase()} на фрилансе в России — ${rate}. Это диапазон для специалиста с ${lvl.yearsLong}. Рассчитайте точную ставку под ваш желаемый доход (стартовая точка — ${incomeStr} ₽/мес) с помощью калькулятора выше.`,
    },
    {
      q: `Как отличается ставка junior, middle и senior ${role.toLowerCase()}?`,
      a: `Разрыв между уровнями составляет около 50–70%: junior зарабатывает в 1,5–2 раза меньше middle, а senior — в 1,5–1,7 раза больше middle. Для ${role.toLowerCase()} диапазон junior: ${adjustRate(spec.medianHourly, 0.55)}, middle: ${spec.medianHourly}, senior: ${adjustRate(spec.medianHourly, 1.65)}.`,
    },
    {
      q: `Когда ${lvl.nameRu} ${role.toLowerCase()} может поднять ставку?`,
      a:
        lvl.slug === "junior"
          ? `Обычно после 6–12 месяцев коммерческих проектов и формирования портфолио из 3–5 реальных работ. Рост до middle уровня при переходе — 40–60%.`
          : lvl.slug === "middle"
          ? `После 4–5 лет опыта, специализации в нише и формирования репутации через отзывы и рекомендации. Senior-переход даёт рост ставки на 50–70%.`
          : `Senior-специалисты могут поднимать ставку при смене ниши, выходе на зарубежные рынки или переходе к консалтингу. Потолок не ограничен репутацией и экспертизой.`,
    },
    {
      q: `Какой налоговый режим выбрать ${lvl.nameRu} ${role.toLowerCase()}?`,
      a: `При доходе до 2,4 млн ₽/год — самозанятость (НПД) 4% с физлиц или 6% с компаний. При более высоких доходах переходят на ИП УСН 6% плюс фиксированные взносы (~50 000 ₽/год). Калькулятор выше поддерживает оба режима.`,
    },
  ];
}

export default async function LevelPage({ params }: Props) {
  const { slug, level: levelSlug } = await params;
  const spec = getSpecialty(slug);
  const lvl = getLevel(levelSlug);
  if (!spec || !lvl) notFound();

  const role = spec.shortTitle.replace(/^Ставка\s+/i, "");
  const adjustedRate = adjustRate(spec.medianHourly, lvl.incomeMultiplier);
  const defaultIncome = adjustedIncome(spec.defaultIncome, lvl.incomeMultiplier);
  const faqItems = buildFaq(spec, lvl);
  const otherLevels = LEVELS.filter((l) => l.slug !== levelSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}`,
        name: `Ставка ${lvl.name} ${role} 2026`,
        description: `Медианная ставка ${lvl.name} ${role.toLowerCase()} на фрилансе: ${adjustedRate}.`,
        url: `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}`,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Ставки по специальностям", item: `${BASE_URL}/stavka` },
            { "@type": "ListItem", position: 3, name: spec.shortTitle, item: `${BASE_URL}/stavka/${slug}` },
            { "@type": "ListItem", position: 4, name: `${lvl.name} уровень`, item: `${BASE_URL}/stavka/${slug}/opyt/${levelSlug}` },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
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
          <Link href="/stavka" className="hover:text-indigo-600">Специальности</Link>
          <span>›</span>
          <Link href={`/stavka/${slug}`} className="hover:text-indigo-600">{spec.shortTitle}</Link>
          <span>›</span>
          <span className="text-slate-600">{lvl.name}</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Ставка {lvl.name} {role}: калькулятор 2026
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            {lvl.context} {spec.intro}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-1.5">
              <span className="text-xs text-indigo-600 font-medium">
                📊 Медиана {lvl.name}: <strong>{adjustedRate}</strong>
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              <span className="text-xs text-slate-500">
                🎓 Опыт: <strong>{lvl.yearsLong}</strong>
              </span>
            </div>
          </div>
        </header>

        {/* Calculator */}
        <SpecialtyCalc
          defaultIncome={defaultIncome}
          defaultHours={spec.defaultHours}
          defaultLoad={spec.defaultLoad}
          specialty={`${lvl.name} ${role}`}
        />

        {/* Benchmark upsell — hot zone right after level calculator */}
        <section className="mt-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">📊 Полный бенчмарк Q1 2026</p>
            <p className="text-sm font-bold text-slate-900 mb-1">
              {role}: ставки по 10 городам и всем уровням опыта
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              22+ специальности × 10 городов России. Джун / мид / сеньор.{" "}
              <span className="text-red-600 font-medium">С 7 апреля — 349 ₽.</span>
            </p>
          </div>
          <Link
            href="/benchmark"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap shadow-sm"
          >
            Открыть за 249 ₽ →
          </Link>
        </section>

        {/* Level comparison table */}
        <section className="mt-8">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Ставки {role.toLowerCase()} по уровням опыта
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Уровень</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Опыт</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Медианная ставка</th>
                </tr>
              </thead>
              <tbody>
                {LEVELS.map((l) => (
                  <tr
                    key={l.slug}
                    className={`border-b border-slate-100 last:border-0 ${l.slug === levelSlug ? "bg-indigo-50" : "hover:bg-slate-50"}`}
                  >
                    <td className="px-4 py-3">
                      {l.slug === levelSlug ? (
                        <span className="font-semibold text-indigo-700">{l.name} ←</span>
                      ) : (
                        <Link href={`/stavka/${slug}/opyt/${l.slug}`} className="text-indigo-600 hover:underline">
                          {l.name}
                        </Link>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-500">{l.years}</td>
                    <td className="px-4 py-3 font-medium text-slate-800">
                      {adjustRate(spec.medianHourly, l.incomeMultiplier)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Частые вопросы</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden group"
              >
                <summary className="w-full text-left px-5 py-4 flex justify-between items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors list-none">
                  <span className="text-sm font-semibold text-slate-800">{item.q}</span>
                  <span className="text-slate-400 text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Other levels */}
        <section className="mt-8">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Другие уровни — {role}
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherLevels.map((l) => (
              <Link
                key={l.slug}
                href={`/stavka/${slug}/opyt/${l.slug}`}
                className="text-xs bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {l.name} {role} ({l.years})
              </Link>
            ))}
          </div>
        </section>

        {/* Related articles */}
        <section className="mt-8 border-t border-slate-100 pt-6">
          <h2 className="text-base font-semibold text-slate-700 mb-3">Читайте по теме</h2>
          <ul className="space-y-2">
            <li>
              <Link href={`/stavka/${slug}`} className="text-sm text-indigo-600 hover:underline">
                {spec.title} — все уровни и города
              </Link>
            </li>
            <li>
              <Link href="/rukovodstvo" className="text-sm text-indigo-600 hover:underline">
                Как рассчитать ставку фрилансера: полное руководство 2026
              </Link>
            </li>
            <li>
              <Link href="/stati/kak-povysit-stavku-frilansera" className="text-sm text-indigo-600 hover:underline">
                Как повысить ставку фрилансера: 7 проверенных способов
              </Link>
            </li>
          </ul>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">← Главная</Link>
          &nbsp;·&nbsp;
          <Link href={`/stavka/${slug}`} className="hover:text-indigo-600">
            {spec.shortTitle}
          </Link>
        </footer>
      </main>
    </>
  );
}
