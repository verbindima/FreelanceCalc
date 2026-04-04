import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SPECIALTIES, getSpecialty, Specialty } from "../../stavka/[slug]/specialties";
import { BENCHMARK_PRICE } from "@/lib/price";
import { fetchHhMarket } from "@/lib/hh-market";

const BASE_URL = "https://freelancecalc.ru";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}

/** Extract role name from shortTitle ("Ставка Frontend-разработчика" → "Frontend-разработчика") */
function roleFromTitle(shortTitle: string): string {
  return shortTitle.replace(/^Ставка\s+/i, "");
}

/** Role in accusative form approximation for "нанять X" */
function buildEmployerTitle(spec: Specialty): string {
  const role = roleFromTitle(spec.shortTitle);
  return `Сколько стоит нанять ${role} на фриланс в 2026 году`;
}

function buildEmployerDescription(spec: Specialty): string {
  const role = roleFromTitle(spec.shortTitle);
  return `Рыночные ставки ${role}-фрилансера для работодателей в 2026 году: реальные цены junior, middle, senior. Медианная ставка — ${spec.medianHourly}. Бюджет, факторы цены и советы по найму.`;
}

function buildEmployerFaq(spec: Specialty, hhMedian?: number) {
  const role = roleFromTitle(spec.shortTitle);
  const medStr = spec.medianHourly;
  const medHh = hhMedian
    ? `По данным hh.ru, эквивалентная фриланс-ставка составляет ${hhMedian.toLocaleString("ru-RU")} ₽/час.`
    : "";

  return [
    {
      q: `Сколько платить ${role} за час работы?`,
      a: `Рыночная ставка ${role} на фрилансе — ${medStr}. ${medHh} Конкретная сумма зависит от опыта специалиста (junior/middle/senior), стека технологий, срочности задачи и региона. Для точной оценки используйте калькулятор фрилансера: если специалист сам ввёл нужный доход, вы сразу увидите его расчёт.`,
    },
    {
      q: `Чем ставка фрилансера отличается от зарплаты штатного сотрудника?`,
      a: `Фрилансер включает в ставку: налоги (4–6% НПД или 6% УСН + взносы ИП), оплату простоев и поиска клиентов, отпуск и больничные. Реальная себестоимость штатного сотрудника с учётом НДФЛ, взносов и накладных расходов сопоставима или выше. Для проектной работы фрилансер обычно экономичнее: нет обязательств вне проекта.`,
    },
    {
      q: `Как проверить, что ставка фрилансера соответствует рынку?`,
      a: `Зайдите на FreelanceCalc.ru и введите ставку специалиста: инструмент покажет, куда она попадает — ниже рынка, в норме или выше. Также запрашивайте ставки у 2–3 кандидатов: разброс более 40% между кандидатами с одинаковым опытом — повод уточнить компетенции.`,
    },
    {
      q: `Что влияет на стоимость услуг ${role}-фрилансера?`,
      a: `Основные факторы: (1) опыт — junior в 2–3 раза дешевле senior; (2) стек — редкие технологии дороже; (3) срочность — rush-проект +30–50% к ставке; (4) тип задачи — разовая задача vs долгосрочный контракт; (5) регион — Москва и СПб дороже регионов на 15–25%.`,
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  if (!spec) return {};
  const title = buildEmployerTitle(spec);
  const description = buildEmployerDescription(spec);
  return {
    title: `${title} — FreelanceCalc`,
    description,
    alternates: { canonical: `/naim/${slug}` },
    openGraph: {
      title: `${title} — FreelanceCalc`,
      description,
      url: `${BASE_URL}/naim/${slug}`,
      type: "website",
      locale: "ru_RU",
    },
  };
}

export default async function NaimPage({ params }: Props) {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  if (!spec) notFound();

  const hhData = await fetchHhMarket(slug);
  const role = roleFromTitle(spec.shortTitle);
  const h1 = buildEmployerTitle(spec);
  const faqItems = buildEmployerFaq(spec, hhData?.freelance_hourly_equiv?.median);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: h1,
    description: buildEmployerDescription(spec),
    url: `${BASE_URL}/naim/${slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Найм фрилансеров", item: `${BASE_URL}/naim` },
        { "@type": "ListItem", position: 3, name: h1, item: `${BASE_URL}/naim/${slug}` },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">FreelanceCalc</Link>
          <span>›</span>
          <Link href="/naim" className="hover:text-indigo-600">Найм фрилансеров</Link>
          <span>›</span>
          <span className="text-slate-600">{role}</span>
        </nav>

        <header className="mb-6">
          {/* Employer badge */}
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
            🏢 Для работодателей
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {h1}
          </h1>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            Ориентировочные рыночные ставки для оценки бюджета. Данные на основе рынка hh.ru и агрегированных фриланс-платформ.
          </p>
        </header>

        {/* Rate tiers card */}
        <section className="rounded-xl border border-slate-200 bg-white p-5 mb-6">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">
            💰 Рыночные ставки {role}: junior / middle / senior
          </h2>

          {hhData ? (
            <>
              <div className="grid grid-cols-3 gap-3 text-center mb-3">
                <div className="rounded-lg border border-slate-100 bg-slate-50 py-3 px-2">
                  <div className="text-lg font-bold text-slate-600">
                    {hhData.freelance_hourly_equiv.p25.toLocaleString("ru-RU")} ₽
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Junior · в час</div>
                </div>
                <div className="rounded-lg border border-indigo-200 bg-indigo-50 py-3 px-2">
                  <div className="text-lg font-bold text-indigo-700">
                    {hhData.freelance_hourly_equiv.median.toLocaleString("ru-RU")} ₽
                  </div>
                  <div className="text-xs text-indigo-500 mt-1">Middle · в час</div>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 py-3 px-2">
                  <div className="text-lg font-bold text-slate-700">
                    {hhData.freelance_hourly_equiv.p75.toLocaleString("ru-RU")} ₽
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Senior · в час</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 text-center">
                Эквивалент фриланс-ставки · зарплата в найме (медиана):{" "}
                {Math.round(hhData.monthly_gross.median / 1000)} тыс. ₽/мес ·{" "}
                {hhData.total_found.toLocaleString("ru-RU")} вакансий на hh.ru · Москва
              </p>
            </>
          ) : (
            <>
              <div className="rounded-lg border border-indigo-100 bg-indigo-50 py-3 px-4 mb-3">
                <div className="text-lg font-bold text-indigo-700">{spec.medianHourly}</div>
                <div className="text-xs text-indigo-500 mt-1">Медианная ставка · фрилансер</div>
              </div>
              <p className="text-xs text-slate-400">
                Ориентировочные данные по рынку. Junior берёт в 2–2,5 раза меньше, senior — в 1,5–2 раза больше медианы.
              </p>
            </>
          )}
        </section>

        {/* Budget calculator hint */}
        <section className="rounded-xl border border-green-100 bg-green-50 p-5 mb-6">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            🧮 Быстрый расчёт бюджета
          </h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Оцените стоимость задачи: умножьте ставку на планируемые часы. Учтите, что реально оплачиваемых часов обычно{" "}
            <strong>на 20–30% меньше</strong> номинальных (митинги, согласования, итерации правок).
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg border border-green-100 p-3">
              <div className="text-xs text-slate-400 mb-1">Небольшая задача (8–20 ч)</div>
              {hhData ? (
                <div className="font-semibold text-slate-700">
                  {(hhData.freelance_hourly_equiv.median * 8).toLocaleString("ru-RU")}–{(hhData.freelance_hourly_equiv.median * 20).toLocaleString("ru-RU")} ₽
                </div>
              ) : (
                <div className="font-semibold text-slate-700">от 20 000 ₽</div>
              )}
            </div>
            <div className="bg-white rounded-lg border border-green-100 p-3">
              <div className="text-xs text-slate-400 mb-1">Месяц работы (160 ч)</div>
              {hhData ? (
                <div className="font-semibold text-slate-700">
                  {(hhData.freelance_hourly_equiv.median * 160).toLocaleString("ru-RU")} ₽
                </div>
              ) : (
                <div className="font-semibold text-slate-700">
                  {(spec.defaultIncome * 1.1).toLocaleString("ru-RU")} ₽
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How to verify a rate */}
        <section className="rounded-xl border border-slate-200 bg-white p-5 mb-6">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">
            ✅ Как проверить ставку кандидата
          </h2>
          <ol className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="text-indigo-500 font-bold shrink-0">1.</span>
              Попросите кандидата самому рассчитать ставку на FreelanceCalc — он увидит свою позицию относительно рынка
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-500 font-bold shrink-0">2.</span>
              Сравните с диапазонами выше: junior, middle, senior
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-500 font-bold shrink-0">3.</span>
              Запросите 2–3 предложения от разных кандидатов — разброс &gt;40% при одинаковом опыте сигнализирует о различии в уровне
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-500 font-bold shrink-0">4.</span>
              Учтите тип задачи: разовая задача дороже долгосрочного контракта на 10–20%
            </li>
          </ol>
        </section>

        {/* CTA: Benchmark report */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <div className="flex-1">
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">📊 Полный бенчмарк Q2 2026</p>
            <p className="text-sm font-bold text-slate-900 mb-1">
              Ставки {role} по 10 городам · junior / middle / senior
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Москва, СПб + Новосибирск, Екатеринбург, Казань, Краснодар и 4 города.
              Данные hh.ru + агрегированные фриланс-платформы.
            </p>
          </div>
          <Link
            href="/benchmark"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap shadow-sm"
          >
            Открыть за {BENCHMARK_PRICE} ₽ →
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mt-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Частые вопросы работодателей</h2>
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

        {/* Link to freelancer-facing page */}
        <section className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-sm text-slate-600">
            Вы фрилансер?{" "}
            <Link href={`/stavka/${slug}`} className="text-indigo-600 hover:underline font-medium">
              Рассчитайте свою ставку как {role} →
            </Link>
          </p>
        </section>

        {/* Links to other specialties */}
        <section className="mt-6">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            Другие специальности
          </h2>
          <div className="flex flex-wrap gap-2">
            {SPECIALTIES.filter((s) => s.slug !== slug).slice(0, 20).map((s) => (
              <Link
                key={s.slug}
                href={`/naim/${s.slug}`}
                className="text-xs bg-slate-100 hover:bg-amber-50 hover:text-amber-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors"
              >
                {roleFromTitle(s.shortTitle)}
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">← Главная</Link>
          {" "}&nbsp;·&nbsp;{" "}
          <Link href={`/stavka/${slug}`} className="hover:text-indigo-600">Калькулятор для фрилансера</Link>
        </footer>
      </main>
    </>
  );
}
