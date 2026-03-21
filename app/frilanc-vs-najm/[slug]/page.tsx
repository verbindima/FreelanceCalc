import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SPECIALTIES, getSpecialty } from "../../stavka/[slug]/specialties";
import { NAJEM_DATA } from "../najem-data";

const BASE_URL = "https://freelancecalc.ru";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SPECIALTIES
    .filter((s) => NAJEM_DATA[s.slug])
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  const data = NAJEM_DATA[slug];
  if (!spec || !data) return {};

  const role = spec.shortTitle.replace(/^Ставка\s+/i, "");
  const salaryRange = `${new Intl.NumberFormat("ru-RU").format(data.salaryMin / 1000)}–${new Intl.NumberFormat("ru-RU").format(data.salaryMax / 1000)} тыс. ₽/мес`;

  return {
    title: `${data.jobTitle}: фриланс или найм — что выгоднее в 2026`,
    description: `Сравниваем доход ${role} на фрилансе и в найме (${salaryRange}). Реальные цифры, плюсы и минусы, точка безубыточности. Калькулятор ставки онлайн.`,
    keywords: [
      `${data.jobTitle.toLowerCase()} фриланс или найм`,
      `фриланс vs найм ${data.jobTitle.toLowerCase()}`,
      `стоит ли уходить на фриланс ${data.jobTitle.toLowerCase()}`,
      `${data.jobTitle.toLowerCase()} зарплата фриланс`,
      `${data.jobTitle.toLowerCase()} доход самозанятый`,
    ],
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: `/frilanc-vs-najm/${slug}` },
    openGraph: {
      title: `${data.jobTitle}: фриланс или найм — что выгоднее в 2026`,
      description: `Реальное сравнение дохода ${role} на фрилансе и в штате. Цифры, расчёт ставки и точка безубыточности.`,
      type: "article",
      locale: "ru_RU",
      url: `${BASE_URL}/frilanc-vs-najm/${slug}`,
      siteName: "FreelanceCalc",
    },
  };
}

export default async function FrilancVsNajmPage({ params }: Props) {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  const data = NAJEM_DATA[slug];

  if (!spec || !data) notFound();

  const role = spec.shortTitle.replace(/^Ставка\s+/i, "");
  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

  // Freelance gross income needed to match employment midpoint (after taxes)
  const najemMid = Math.round((data.salaryMin + data.salaryMax) / 2);
  // As self-employed (6% NPD from legal entities), need to earn gross: net / 0.94
  const freelanceBEP = Math.round(najemMid / 0.94);
  // Monthly working hours: 8h/day × 22 days × (load/100)
  const monthlyBillableHours = Math.round(8 * 22 * (spec.defaultLoad / 100));
  const bepHourly = Math.round(freelanceBEP / monthlyBillableHours);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${data.jobTitle}: фриланс или найм — что выгоднее в 2026`,
        description: `Сравнение дохода ${role} на фрилансе и в найме. Реальные цифры ставок и зарплат.`,
        url: `${BASE_URL}/frilanc-vs-najm/${slug}`,
        inLanguage: "ru",
        datePublished: "2026-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Сколько зарабатывает ${data.jobTitle.toLowerCase()} на фрилансе в 2026?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${role} на фрилансе зарабатывает ${spec.medianHourly}. При полной загрузке ${spec.defaultLoad}% это около ${fmt(Math.round(bepHourly * monthlyBillableHours))} ₽/мес до налогов. В штате медианная зарплата — ${fmt(data.salaryMin)}–${fmt(data.salaryMax)} ₽/мес.`,
            },
          },
          {
            "@type": "Question",
            name: `Стоит ли ${data.jobTitle.toLowerCase()} уходить на фриланс?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Фриланс выгоднее финансово, если удерживать загрузку от ${spec.defaultLoad}% и брать ставку от ${fmt(bepHourly)} ₽/час. Главный риск — нестабильный поток заказов в первые 3–6 месяцев. Рекомендуется накопить финансовую подушку на 3 месяца перед переходом.`,
            },
          },
          {
            "@type": "Question",
            name: `Какой доход нужен на фрилансе, чтобы сравниться с зарплатой в штате?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Чтобы иметь «на руки» столько же, сколько ${data.jobTitle.toLowerCase()} в найме (медиана ${fmt(najemMid)} ₽/мес), нужно зарабатывать на фрилансе от ${fmt(freelanceBEP)} ₽/мес (брутто, с учётом НПД 6%). Это ${fmt(bepHourly)} ₽/час при загрузке ${spec.defaultLoad}%.`,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Фриланс vs найм", item: `${BASE_URL}/frilanc-vs-najm` },
          { "@type": "ListItem", position: 3, name: data.jobTitle, item: `${BASE_URL}/frilanc-vs-najm/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-400 mb-6 flex flex-wrap gap-1 items-center">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Главная</Link>
          <span>›</span>
          <Link href="/frilanc-vs-najm" className="hover:text-indigo-600 transition-colors">Фриланс vs найм</Link>
          <span>›</span>
          <span className="text-slate-600">{data.jobTitle}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Сравнение доходов 2026
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            {data.jobTitle}: фриланс или найм — что выгоднее в 2026?
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Реальное сравнение доходов {role} на фрилансе и в штате.
            Разбираем цифры, считаем точку безубыточности и объясняем,
            когда переходить, а когда лучше остаться в найме.
          </p>
        </header>

        {/* Comparison table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Сравнение доходов</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Показатель</th>
                  <th className="text-center px-4 py-3 font-semibold text-indigo-700">Фриланс</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">Найм</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 text-slate-600">Медианная ставка / зарплата</td>
                  <td className="px-4 py-3 text-center font-semibold text-indigo-700">{spec.medianHourly}</td>
                  <td className="px-4 py-3 text-center font-semibold text-slate-700">{fmt(data.salaryMin)}–{fmt(data.salaryMax)} ₽/мес</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 text-slate-600">Доход на руки (медиана)</td>
                  <td className="px-4 py-3 text-center font-medium text-slate-800">
                    ~{fmt(Math.round(spec.defaultIncome * 0.85))}–{fmt(spec.defaultIncome)} ₽/мес
                  </td>
                  <td className="px-4 py-3 text-center font-medium text-slate-800">
                    ~{fmt(Math.round(najemMid * 0.87))} ₽/мес
                    <span className="block text-xs text-slate-400">(−13% НДФЛ)</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-600">Налоговая нагрузка</td>
                  <td className="px-4 py-3 text-center text-green-700 font-medium">4–6% НПД</td>
                  <td className="px-4 py-3 text-center text-slate-600">13% НДФЛ</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 text-slate-600">Отпуск</td>
                  <td className="px-4 py-3 text-center text-amber-600">За свой счёт</td>
                  <td className="px-4 py-3 text-center text-green-700">28 дней оплачиваемых</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-600">Больничный</td>
                  <td className="px-4 py-3 text-center text-amber-600">Не оплачивается</td>
                  <td className="px-4 py-3 text-center text-green-700">Оплачивается</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 text-slate-600">Коэффициент доходности</td>
                  <td className="px-4 py-3 text-center font-bold text-indigo-700">{data.rateMultiplier} vs найма</td>
                  <td className="px-4 py-3 text-center text-slate-500">Базовый уровень</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            * Данные на основе HH.ru, Habr Career, FL.ru, Kwork. Конкретные цифры зависят от опыта, региона и специализации.
          </p>
        </section>

        {/* Breakeven */}
        <section className="mb-10 bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-indigo-900 mb-3">📊 Точка безубыточности</h2>
          <p className="text-sm text-indigo-800 leading-relaxed mb-4">
            Чтобы иметь <strong>«на руки»</strong> столько же, сколько в найме (медиана{" "}
            <strong>{fmt(najemMid)} ₽/мес</strong>), нужно зарабатывать на фрилансе:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl px-4 py-3 text-center border border-indigo-100">
              <div className="text-2xl font-bold text-indigo-700">{fmt(freelanceBEP)} ₽</div>
              <div className="text-xs text-slate-500 mt-1">в месяц (брутто)</div>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 text-center border border-indigo-100">
              <div className="text-2xl font-bold text-indigo-700">{fmt(bepHourly)} ₽/час</div>
              <div className="text-xs text-slate-500 mt-1">при загрузке {spec.defaultLoad}%</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-indigo-700">
            Всё, что выше этой отметки — чистая прибыль фриланса над наймом. Медианная ставка {role} на
            бирже — <strong>{spec.medianHourly}</strong>.
          </p>
        </section>

        {/* Pros/Cons */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Плюсы и минусы для {data.jobTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Freelance pros */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <span>✅</span> Плюсы фриланса
              </h3>
              <ul className="space-y-2">
                {data.freelancePros.map((pro) => (
                  <li key={pro} className="text-sm text-green-700 flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">›</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Employment pros */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <span>🏢</span> Плюсы найма
              </h3>
              <ul className="space-y-2">
                {data.najemPros.map((pro) => (
                  <li key={pro} className="text-sm text-blue-700 flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 shrink-0">›</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Market note */}
        <section className="mb-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h2 className="text-base font-semibold text-slate-800 mb-2">💡 Особенности рынка</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{data.marketNote}</p>
        </section>

        {/* CTA: calculator */}
        <section className="mb-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-6 text-white">
          <h2 className="text-lg font-bold mb-2">Рассчитайте вашу ставку прямо сейчас</h2>
          <p className="text-indigo-100 text-sm mb-5">
            Введите желаемый доход «на руки» и узнайте точную почасовую ставку с учётом
            налогов, отпуска и реальной загрузки. Бесплатно.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/stavka/${slug}`}
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors text-sm"
            >
              🧮 Калькулятор для {data.jobTitle}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              Общий калькулятор
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Частые вопросы</h2>
          <div className="space-y-4">
            <details className="group border border-slate-200 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                <span>Сколько зарабатывает {data.jobTitle.toLowerCase()} на фрилансе в 2026?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                Медианная ставка {role} на фрилансе — <strong>{spec.medianHourly}</strong>. При загрузке{" "}
                {spec.defaultLoad}% доход составляет около{" "}
                <strong>~{fmt(Math.round(bepHourly * monthlyBillableHours))} ₽/мес</strong> (брутто),
                или <strong>~{fmt(Math.round(bepHourly * monthlyBillableHours * 0.94))} ₽</strong> на руки
                после НПД 6%. В найме медианная зарплата — {fmt(data.salaryMin)}–{fmt(data.salaryMax)} ₽/мес.
              </div>
            </details>
            <details className="group border border-slate-200 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                <span>Когда фриланс выгоднее найма для {data.jobTitle.toLowerCase()}?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                Фриланс выгоднее при выполнении трёх условий: ставка от{" "}
                <strong>{fmt(bepHourly)} ₽/час</strong>, загрузка не ниже{" "}
                <strong>{spec.defaultLoad}%</strong> и наличие финансовой подушки на 3 месяца.
                Дополнительный плюс — возможность совмещать несколько клиентов и расти в доходе
                быстрее, чем позволяет корпоративная сетка грейдов.
              </div>
            </details>
            <details className="group border border-slate-200 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                <span>Как стать самозанятым {data.jobTitle.toLowerCase()}?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                Оформить статус самозанятого (НПД) можно через приложение «Мой налог» за 5 минут — паспорт
                и телефон. Ставка налога: 4% с физлиц, 6% с юрлиц. Лимит — 2,4 млн ₽/год. При более
                высоких доходах рассмотрите ИП на УСН 6%. Подробнее —{" "}
                <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="text-indigo-600 hover:underline">
                  самозанятый vs ИП
                </Link>
                .
              </div>
            </details>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-10">
          <h2 className="text-base font-semibold text-slate-800 mb-4">Полезные ссылки</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href={`/stavka/${slug}`}
              className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl">🧮</span>
              <div>
                <div className="font-semibold text-sm text-slate-800">Калькулятор ставки</div>
                <div className="text-xs text-slate-500">{spec.shortTitle}</div>
              </div>
            </Link>
            <Link
              href="/stati/frilans-vs-naym-2026"
              className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-semibold text-sm text-slate-800">Фриланс vs найм 2026</div>
                <div className="text-xs text-slate-500">Полный разбор для всех специальностей</div>
              </div>
            </Link>
            <Link
              href="/stati/samozanyatyj-vs-ip-frilancer"
              className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl">📋</span>
              <div>
                <div className="font-semibold text-sm text-slate-800">Самозанятый или ИП</div>
                <div className="text-xs text-slate-500">Какой налоговый режим выбрать</div>
              </div>
            </Link>
            <Link
              href="/frilanc-vs-najm"
              className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl">📑</span>
              <div>
                <div className="font-semibold text-sm text-slate-800">Все специальности</div>
                <div className="text-xs text-slate-500">Фриланс vs найм по профессиям</div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
