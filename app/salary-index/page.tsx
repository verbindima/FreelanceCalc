import type { Metadata } from "next";
import Link from "next/link";
import { fetchHhMarket, HhMarketData } from "@/lib/hh-market";
import { getBenchmarkPrice } from "@/lib/price";

export const revalidate = 86400; // 24h — sync with hh.ru cache

export const metadata: Metadata = {
  title: "Индекс ставок фрилансеров России 2026 — реальные данные hh.ru",
  description:
    "Актуальный индекс медианных ставок фрилансеров России: 15 специальностей, данные с hh.ru, обновляется ежедневно. Узнайте, сколько реально платят за час работы разработчику, дизайнеру, маркетологу.",
  alternates: { canonical: "https://freelancecalc.ru/salary-index" },
  openGraph: {
    title: "Индекс ставок фрилансеров России 2026",
    description: "Медианные ставки 15 специальностей — реальные данные рынка найма hh.ru",
    url: "https://freelancecalc.ru/salary-index",
  },
};

const INDEX_SPECIALTIES = [
  { slug: "frontend-razrabotchik",  label: "Frontend-разработчик",   category: "Разработка" },
  { slug: "backend-razrabotchik",   label: "Backend-разработчик",    category: "Разработка" },
  { slug: "python-razrabotchik",    label: "Python-разработчик",     category: "Разработка" },
  { slug: "fullstack-razrabotchik", label: "Fullstack-разработчик",  category: "Разработка" },
  { slug: "mobilnyj-razrabotchik",  label: "Мобильный разработчик",  category: "Разработка" },
  { slug: "devops-inzhener",        label: "DevOps-инженер",         category: "Разработка" },
  { slug: "ml-inzhener",            label: "ML-инженер",             category: "Разработка" },
  { slug: "1c-razrabotchik",        label: "1С-разработчик",         category: "Разработка" },
  { slug: "dizajner-ui-ux",         label: "UX/UI-дизайнер",         category: "Дизайн" },
  { slug: "graficheskij-dizajner",  label: "Графический дизайнер",   category: "Дизайн" },
  { slug: "testirovshchik-qa",      label: "Тестировщик QA",         category: "QA" },
  { slug: "data-analyst",           label: "Аналитик данных",        category: "Аналитика" },
  { slug: "seo-specialist",         label: "SEO-специалист",         category: "Маркетинг" },
  { slug: "smm-specialist",         label: "SMM-специалист",         category: "Маркетинг" },
  { slug: "menedzher-proektov",     label: "Менеджер проектов",      category: "Управление" },
];

interface IndexRow {
  slug: string;
  label: string;
  category: string;
  data: HhMarketData | null;
}

function fmt(n: number) {
  return n.toLocaleString("ru-RU");
}

export default async function SalaryIndexPage() {
  const price = getBenchmarkPrice();
  const updatedAt = new Date().toLocaleDateString("ru-RU", {
    day: "numeric", month: "long", year: "numeric",
  });

  // Fetch all specialties in parallel (all cached 24h at hh.ru level)
  const results = await Promise.allSettled(
    INDEX_SPECIALTIES.map((s) => fetchHhMarket(s.slug, "Москва"))
  );

  const rows: IndexRow[] = INDEX_SPECIALTIES.map((spec, i) => ({
    ...spec,
    data: results[i].status === "fulfilled" ? results[i].value : null,
  }));

  // Group by category
  const categories = Array.from(new Set(INDEX_SPECIALTIES.map((s) => s.category)));

  // Build JSON-LD: Dataset + FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "name": "Индекс ставок фрилансеров России 2026",
        "description": "Медианные часовые ставки фрилансеров по специальностям. Рассчитаны на основе актуальных данных рынка занятости hh.ru с поправкой на налоговую нагрузку самозанятого (НПД 4%) и коэффициент загрузки 70%.",
        "url": "https://freelancecalc.ru/salary-index",
        "creator": { "@type": "Organization", "name": "FreelanceCalc", "url": "https://freelancecalc.ru" },
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "temporalCoverage": "2026",
        "spatialCoverage": "Россия, Москва (базовый регион)",
        "measurementTechnique": "Медиана зарплат по вакансиям hh.ru с конвертацией в эквивалент фриланс-ставки",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://freelancecalc.ru" },
          { "@type": "ListItem", "position": 2, "name": "Индекс ставок", "item": "https://freelancecalc.ru/salary-index" },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Откуда берутся данные в индексе ставок?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Данные получены с API hh.ru — крупнейшего российского сайта по поиску работы. Мы анализируем актуальные вакансии с указанием зарплаты, вычисляем медиану и переводим в эквивалент фриланс-ставки с учётом налога НПД 4% и коэффициента загрузки 70%.",
            },
          },
          {
            "@type": "Question",
            "name": "Как часто обновляется индекс?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Индекс обновляется ежедневно. Данные hh.ru кешируются на 24 часа, после чего автоматически загружаются свежие данные по вакансиям.",
            },
          },
          {
            "@type": "Question",
            "name": "Почему фриланс-ставка выше зарплаты в найме?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Фрилансер несёт дополнительные расходы: налог НПД (4-6%), нет оплачиваемого отпуска и больничных, часть времени уходит на поиск клиентов. Коэффициент загрузки 70% означает, что реально продаётся только 70% рабочего времени. Чтобы получить тот же доход, что наёмный сотрудник, фрилансер должен брать ~40-50% больше за час.",
            },
          },
          {
            "@type": "Question",
            "name": "Для каких городов есть данные?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "В открытом индексе — данные по Москве как базовому региону. Полный отчёт с разбивкой по 10 городам (Москва, СПб, Екатеринбург, Новосибирск, Казань, Нижний Новгород, Самара, Краснодар, Ростов-на-Дону, Уфа) и трём уровням опыта (Junior/Middle/Senior) доступен в PDF-бенчмарке за " + price + " ₽.",
            },
          },
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

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Главная</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">Индекс ставок</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Индекс ставок фрилансеров России 2026
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Медианные часовые ставки по 15 специальностям — на основе реальных вакансий{" "}
            <abbr title="крупнейший российский job-сайт" className="cursor-help no-underline border-b border-dotted border-gray-400">hh.ru</abbr>.
            Обновляется ежедневно.
          </p>
          <p className="text-sm text-gray-500">
            Данные по Москве · Обновлено: {updatedAt}
          </p>
        </div>

        {/* Methodology note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm text-blue-800">
          <strong>Методология:</strong> Медиана зарплат по вакансиям hh.ru → конвертация в часовую
          ставку фрилансера с учётом налога НПД 4% и коэффициента загрузки 70%.
          Подробнее: <Link href="/guide" className="underline hover:no-underline">Как рассчитать ставку</Link>.
        </div>

        {/* Tables by category */}
        {categories.map((category) => {
          const catRows = rows.filter((r) => r.category === category);
          return (
            <section key={category} className="mb-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                {category}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-4 font-medium text-gray-600 rounded-tl-lg">Специальность</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Медиана ₽/час</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Диапазон ₽/час</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600 rounded-tr-lg">Вакансий с з/п</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {catRows.map((row) => (
                      <tr key={row.slug} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4">
                          <Link
                            href={`/stavka/${row.slug}`}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {row.label}
                          </Link>
                        </td>
                        {row.data ? (
                          <>
                            <td className="py-3 px-4 text-right font-semibold text-gray-900">
                              {fmt(row.data.freelance_hourly_equiv.median)} ₽
                            </td>
                            <td className="py-3 px-4 text-right text-gray-500">
                              {fmt(row.data.freelance_hourly_equiv.p25)}–{fmt(row.data.freelance_hourly_equiv.p75)} ₽
                            </td>
                            <td className="py-3 px-4 text-right text-gray-400">
                              {row.data.total_found.toLocaleString("ru-RU")}
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="py-3 px-4 text-right text-gray-400 italic">нет данных</td>
                            <td className="py-3 px-4 text-right text-gray-300">—</td>
                            <td className="py-3 px-4 text-right text-gray-300">—</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}

        {/* Upsell CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Нужны данные по городам и опыту?
              </h3>
              <p className="text-sm text-gray-600">
                PDF-бенчмарк: 32 специальности × 10 городов × Junior/Middle/Senior.
                Ставки, коридоры, динамика Q2 2026.
              </p>
            </div>
            <Link
              href="/benchmark"
              className="shrink-0 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm"
            >
              Получить PDF — {price} ₽
            </Link>
          </div>
        </div>

        {/* Why freelance rate > salary */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Почему фриланс-ставка выше зарплаты в найме?
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold text-gray-800 mb-1">Налоги — сами</h3>
              <p className="text-gray-600">НПД 4% или 6%, плюс нет налогового агента. В найме налоги платит работодатель.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold text-gray-800 mb-1">Отпуск — за свой счёт</h3>
              <p className="text-gray-600">28 рабочих дней отпуска в год без оплаты. В найме отпуск оплачивается работодателем.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="font-semibold text-gray-800 mb-1">Загрузка 70%</h3>
              <p className="text-gray-600">Часть времени уходит на поиск клиентов, переговоры, договоры. Реально продаётся ~70% времени.</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Итог: чтобы получать столько же, сколько наёмный сотрудник, фрилансер должен брать
            примерно на 40–50% больше за час.{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Рассчитайте свою ставку →
            </Link>
          </p>
        </section>

        {/* Calculator CTA */}
        <div className="bg-gray-900 text-white rounded-xl p-6 mb-10 text-center">
          <h2 className="text-xl font-semibold mb-2">Рассчитайте свою личную ставку</h2>
          <p className="text-gray-400 text-sm mb-4">
            Введите желаемый доход, налоговый режим и количество рабочих дней — получите точную часовую ставку
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            Открыть калькулятор ставки →
          </Link>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Частые вопросы</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Откуда берутся данные?</h3>
              <p className="text-gray-600 text-sm">
                Данные получены с API hh.ru — крупнейшего российского сайта по поиску работы.
                Мы анализируем актуальные вакансии с указанием зарплаты, вычисляем медиану,
                25-й и 75-й перцентили, затем конвертируем в эквивалент фриланс-ставки.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Как часто обновляется индекс?</h3>
              <p className="text-gray-600 text-sm">
                Ежедневно. Данные кешируются на 24 часа, после чего автоматически обновляются.
                Дата последнего обновления указана в заголовке страницы.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Есть ли данные по другим городам?</h3>
              <p className="text-gray-600 text-sm">
                В открытом индексе — данные по Москве. Разбивка по 10 городам и трём уровням опыта
                (Junior/Middle/Senior) доступна в{" "}
                <Link href="/benchmark" className="text-blue-600 hover:underline">PDF-бенчмарке</Link> за {price} ₽.
                Также можно воспользоваться{" "}
                <Link href="/goroda" className="text-blue-600 hover:underline">страницами городов</Link>{" "}
                с коэффициентами для каждого региона.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Можно ли использовать данные с ссылкой на источник?</h3>
              <p className="text-gray-600 text-sm">
                Да. Данные распространяются по лицензии CC BY 4.0. При использовании обязательна
                ссылка на{" "}
                <Link href="/salary-index" className="text-blue-600 hover:underline">
                  freelancecalc.ru/salary-index
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Смотрите также</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link href="/stavka" className="text-blue-600 hover:underline">
              Ставки по всем специальностям →
            </Link>
            <Link href="/goroda" className="text-blue-600 hover:underline">
              Ставки по городам России →
            </Link>
            <Link href="/nalog" className="text-blue-600 hover:underline">
              Сравнение налоговых режимов →
            </Link>
            <Link href="/frilanc-vs-najm" className="text-blue-600 hover:underline">
              Фриланс vs найм — сравнение →
            </Link>
            <Link href="/benchmark" className="text-blue-600 hover:underline">
              PDF-бенчмарк 32 специальности × 10 городов →
            </Link>
            <Link href="/for-developers" className="text-blue-600 hover:underline">
              API и виджет для разработчиков →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
