import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Средняя ставка фрилансера 2026: таблица по 22 специальностям",
  description:
    "Сколько зарабатывают фрилансеры в России в 2026 году? Медианные часовые ставки по 22 IT и digital-специальностям: разработчики, дизайнеры, маркетологи, аналитики. Данные по рынку + калькулятор ставки.",
  keywords: [
    "средняя ставка фрилансера",
    "сколько зарабатывает фрилансер",
    "ставки фрилансеров по специальностям",
    "сколько берут фрилансеры за час",
    "зарплата фрилансера 2026",
    "медианная ставка фрилансера Россия",
    "сколько стоит час работы фрилансера",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/srednyaya-stavka-frilansera-2026" },
  openGraph: {
    title: "Средняя ставка фрилансера 2026: таблица по 22 специальностям",
    description:
      "Медианные часовые ставки по 22 IT и digital-специальностям в России. Разработчики, дизайнеры, маркетологи, аналитики.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/srednyaya-stavka-frilansera-2026`,
    siteName: "FreelanceCalc",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Откуда эти данные по ставкам?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Данные агрегированы из открытых источников: Хабр Карьера, FL.ru, Kwork, отчёты Upwork по российскому рынку и Telegram-сообществ специалистов. Медиана — это примерно середина диапазона реальных предложений.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли брать ниже медианы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Можно, если вы только начинаете. Но учтите: налоги, отпуск и «пустые» периоды без заказов нужно закладывать в ставку. Калькулятор покажет минимум, ниже которого уходить в минус.",
      },
    },
    {
      "@type": "Question",
      name: "Что значит «коэффициент загрузки»?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Это процент времени, когда вы реально работаете на оплачиваемых заказах. Даже у опытных фрилансеров это обычно 60–75%: остальное — поиск клиентов, переговоры, обучение. Учитывать загрузку при расчёте ставки обязательно.",
      },
    },
    {
      "@type": "Question",
      name: "Как учесть налоги?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятые платят НПД 4% (физлица) или 6% (юрлица/ИП). ИП на УСН — 6% с дохода или 15% с прибыли. FreelanceCalc автоматически рассчитывает налог для каждого режима.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/srednyaya-stavka-frilansera-2026#article`,
      headline: "Средняя ставка фрилансера 2026: таблица по 22 специальностям",
      description:
        "Медианные часовые ставки по 22 IT и digital-специальностям в России в 2026 году.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/srednyaya-stavka-frilansera-2026`,
      datePublished: "2026-03-20",
      dateModified: "2026-03-20",
      author: { "@type": "Organization", name: "FreelanceCalc" },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Статьи",
            item: `${BASE_URL}/stati`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Средняя ставка фрилансера 2026",
            item: `${BASE_URL}/stati/srednyaya-stavka-frilansera-2026`,
          },
        ],
      },
    },
  ],
};

type SpecialtyRow = {
  name: string;
  slug: string;
  medianHourly: string;
  medianMonthly: string;
  category: string;
};

const SPECIALTIES: SpecialtyRow[] = [
  // Разработка
  { name: "ML/AI-инженер", slug: "ml-inzhener", medianHourly: "3 000–7 000 ₽/ч", medianMonthly: "360 000–840 000 ₽", category: "Разработка" },
  { name: "DevOps-инженер", slug: "devops-inzhener", medianHourly: "2 500–6 000 ₽/ч", medianMonthly: "300 000–720 000 ₽", category: "Разработка" },
  { name: "Мобильный разработчик", slug: "mobilnyj-razrabotchik", medianHourly: "2 500–5 000 ₽/ч", medianMonthly: "300 000–600 000 ₽", category: "Разработка" },
  { name: "Fullstack-разработчик", slug: "fullstack-razrabotchik", medianHourly: "2 000–4 500 ₽/ч", medianMonthly: "240 000–540 000 ₽", category: "Разработка" },
  { name: "Python-разработчик", slug: "python-razrabotchik", medianHourly: "2 000–4 500 ₽/ч", medianMonthly: "240 000–540 000 ₽", category: "Разработка" },
  { name: "Backend-разработчик", slug: "backend-razrabotchik", medianHourly: "2 000–4 000 ₽/ч", medianMonthly: "240 000–480 000 ₽", category: "Разработка" },
  { name: "Frontend-разработчик", slug: "frontend-razrabotchik", medianHourly: "1 500–3 000 ₽/ч", medianMonthly: "180 000–360 000 ₽", category: "Разработка" },
  { name: "1С-разработчик", slug: "1c-razrabotchik", medianHourly: "1 200–2 800 ₽/ч", medianMonthly: "144 000–336 000 ₽", category: "Разработка" },
  { name: "PHP-разработчик", slug: "php-razrabotchik", medianHourly: "1 200–2 800 ₽/ч", medianMonthly: "144 000–336 000 ₽", category: "Разработка" },
  // Аналитика и управление
  { name: "Аналитик данных", slug: "data-analyst", medianHourly: "1 500–3 500 ₽/ч", medianMonthly: "180 000–420 000 ₽", category: "Аналитика и управление" },
  { name: "Бизнес-аналитик", slug: "biznes-analitik", medianHourly: "1 500–3 500 ₽/ч", medianMonthly: "180 000–420 000 ₽", category: "Аналитика и управление" },
  { name: "Менеджер проектов", slug: "menedzher-proektov", medianHourly: "1 000–2 500 ₽/ч", medianMonthly: "120 000–300 000 ₽", category: "Аналитика и управление" },
  { name: "QA-тестировщик", slug: "testirovshchik-qa", medianHourly: "900–2 000 ₽/ч", medianMonthly: "108 000–240 000 ₽", category: "Аналитика и управление" },
  // Дизайн
  { name: "UI/UX-дизайнер", slug: "dizajner-ui-ux", medianHourly: "1 000–2 500 ₽/ч", medianMonthly: "120 000–300 000 ₽", category: "Дизайн" },
  { name: "Графический дизайнер", slug: "graficheskij-dizajner", medianHourly: "800–1 800 ₽/ч", medianMonthly: "96 000–216 000 ₽", category: "Дизайн" },
  { name: "Видеомонтажёр", slug: "videomontazhyor", medianHourly: "700–2 000 ₽/ч", medianMonthly: "84 000–240 000 ₽", category: "Дизайн" },
  // Маркетинг и контент
  { name: "Таргетолог", slug: "targetolog", medianHourly: "800–2 000 ₽/ч", medianMonthly: "96 000–240 000 ₽", category: "Маркетинг и контент" },
  { name: "SEO-специалист", slug: "seo-specialist", medianHourly: "900–2 000 ₽/ч", medianMonthly: "108 000–240 000 ₽", category: "Маркетинг и контент" },
  { name: "SMM-специалист", slug: "smm-specialist", medianHourly: "700–1 500 ₽/ч", medianMonthly: "84 000–180 000 ₽", category: "Маркетинг и контент" },
  { name: "Копирайтер", slug: "kopirayter", medianHourly: "500–1 500 ₽/ч", medianMonthly: "60 000–180 000 ₽", category: "Маркетинг и контент" },
  { name: "Контент-менеджер", slug: "kontent-menedzher", medianHourly: "500–1 200 ₽/ч", medianMonthly: "60 000–144 000 ₽", category: "Маркетинг и контент" },
  { name: "Переводчик", slug: "perevodchik", medianHourly: "400–1 200 ₽/ч", medianMonthly: "48 000–144 000 ₽", category: "Маркетинг и контент" },
];

const CATEGORIES = ["Разработка", "Аналитика и управление", "Дизайн", "Маркетинг и контент"];

const categoryColors: Record<string, string> = {
  "Разработка": "bg-blue-50 text-blue-700",
  "Аналитика и управление": "bg-purple-50 text-purple-700",
  "Дизайн": "bg-pink-50 text-pink-700",
  "Маркетинг и контент": "bg-green-50 text-green-700",
};

export default function AverageRatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 text-sm">Статьи</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Средняя ставка 2026</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Средняя ставка фрилансера в России 2026: таблица по 22 специальностям
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Сколько берут фрилансеры за час работы? Собрали медианные ставки по 22
              IT и digital-специальностям на основе данных фриланс-бирж и сообществ.
              Данные актуальны на I квартал 2026 года.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Обновлено: март 2026</span>
              <span>·</span>
              <span>22 специальности</span>
              <span>·</span>
              <span>Россия</span>
            </div>
          </div>

          {/* Quick summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Минимальная ставка", value: "400 ₽/ч", sub: "переводчик" },
              { label: "Медианная ставка", value: "1 200 ₽/ч", sub: "по всем специальностям" },
              { label: "Максимальная ставка", value: "7 000 ₽/ч", sub: "ML-инженер" },
              { label: "Специальностей в базе", value: "22", sub: "с калькуляторами" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                <div className="text-xs font-medium text-gray-700 mt-1">{item.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Main table by category */}
          {CATEGORIES.map((category) => {
            const rows = SPECIALTIES.filter((s) => s.category === category);
            return (
              <section key={category} className="mb-10">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[category]}`}>
                    {category}
                  </span>
                </h2>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-gray-600">Специальность</th>
                        <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Ставка/час</th>
                        <th className="text-right px-4 py-3 font-semibold text-gray-600 hidden md:table-cell whitespace-nowrap">Доход/месяц</th>
                        <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Калькулятор</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, idx) => (
                        <tr
                          key={row.slug}
                          className={`border-b border-gray-50 hover:bg-blue-50/40 transition-colors ${idx === rows.length - 1 ? "border-0" : ""}`}
                        >
                          <td className="px-4 py-3 font-medium text-gray-800">{row.name}</td>
                          <td className="px-4 py-3 text-right font-semibold text-gray-900 whitespace-nowrap">
                            {row.medianHourly}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-500 hidden md:table-cell whitespace-nowrap">
                            {row.medianMonthly}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Link
                              href={`/stavka/${row.slug}`}
                              className="inline-block text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg transition-colors"
                            >
                              Рассчитать →
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}

          {/* How rates are formed */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Почему ставки отличаются в 10 раз?
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Диапазон "400–7 000 ₽/ч" выглядит огромным, но это реальный рынок. Ставка зависит
                от нескольких ключевых факторов:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Опыт", text: "Джун с 6 месяцами опыта берёт 500 ₽/ч, сеньор с 5+ годами — 3 000 ₽/ч и выше." },
                  { title: "Специализация", text: "ML-инженер и DevOps дефицитнее, чем копирайтер — рынок платит за редкость." },
                  { title: "Налоговый режим", text: "Самозанятый (НПД 4–6%) платит меньше налогов, чем ИП на ОСНО — значит может брать ниже при той же чистой прибыли." },
                  { title: "Загрузка", text: "Фрилансер занят не 100% времени. Реальная загрузка — 60–75%. Это нужно закладывать в ставку." },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                    <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <section className="mb-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Рассчитайте свою ставку с учётом налогов
            </h2>
            <p className="text-blue-100 mb-6 text-sm md:text-base">
              Медианная ставка — ориентир, а не приговор. Калькулятор FreelanceCalc учтёт ваш
              желаемый доход, налоговый режим (НПД/ИП УСН), отпуск и коэффициент загрузки.
              Займёт 30 секунд.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Открыть калькулятор →
            </Link>
          </section>

          {/* Benchmark PDF upsell */}
          <section className="mb-10 border border-indigo-200 rounded-2xl p-6 bg-indigo-50">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  Нужны данные по городам и уровням опыта?
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  Таблица выше — национальная медиана. В PDF-бенчмарке — разбивка по <strong>10 городам</strong>{" "}
                  (Москва, СПб, Новосибирск, Екатеринбург, Казань и др.) и <strong>3 уровням опыта</strong>{" "}
                  (джун / мид / сеньор). Обновляется ежеквартально.
                </p>
                <p className="text-xs text-gray-400 mb-3">Единоразовая покупка — 249 ₽</p>
                <Link
                  href="/benchmark"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-800 bg-indigo-100 hover:bg-indigo-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Смотреть бенчмарк →
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Откуда эти данные по ставкам?",
                  a: "Данные агрегированы из открытых источников: Хабр Карьера, FL.ru, Kwork, отчёты Upwork по российскому рынку и Telegram-сообществ специалистов. Медиана — это примерно середина диапазона реальных предложений.",
                },
                {
                  q: "Можно ли брать ниже медианы?",
                  a: "Можно, если вы только начинаете. Но учтите: налоги, отпуск и «пустые» периоды без заказов нужно закладывать в ставку. Калькулятор покажет минимум, ниже которого уходить в минус.",
                },
                {
                  q: "Что значит «коэффициент загрузки»?",
                  a: "Это процент времени, когда вы реально работаете на оплачиваемых заказах. Даже у опытных фрилансеров это обычно 60–75%: остальное — поиск клиентов, переговоры, обучение. Учитывать загрузку при расчёте ставки обязательно.",
                },
                {
                  q: "Как учесть налоги?",
                  a: "Самозанятые платят НПД 4% (физлица) или 6% (ИП). ИП на УСН — 6% с дохода или 15% с прибыли. FreelanceCalc автоматически рассчитывает налог для каждого режима.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="font-semibold text-gray-800 mb-2">{item.q}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom nav */}
          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-3">
            <Link href="/stavka" className="text-sm text-blue-600 hover:underline">
              Все специальности →
            </Link>
            <Link href="/rukovodstvo" className="text-sm text-blue-600 hover:underline">
              Как рассчитать ставку →
            </Link>
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              Калькулятор →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
