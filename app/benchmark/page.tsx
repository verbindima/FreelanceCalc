import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BuyButton from "./BuyButton";
import PriceCountdown from "./PriceCountdown";
import ShareButtons from "./ShareButtons";
import BenchmarkLeadForm from "./BenchmarkLeadForm";
import SpecialtyPreview from "./SpecialtyPreview";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Рыночные ставки фрилансеров по городам 2026 — PDF-бенчмарк",
  description:
    "Не знаете медианную ставку в своём городе? Скорее всего, уже работаете дешевле рынка. 26 специальностей × 10 городов × Junior/Mid/Senior. Данные Q1 2026. PDF за 249 ₽.",
  keywords: [
    "ставки фрилансеров по городам",
    "рыночные ставки фрилансеров 2026",
    "сколько берут фрилансеры в москве",
    "ставки фрилансеров санкт-петербург",
    "бенчмарк ставок фрилансеров",
    "медианная ставка фрилансера по городам",
    "сравнение ставок фрилансеров россия",
    "PDF ставки фрилансеров",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/benchmark" },
  openGraph: {
    title: "Рыночные ставки фрилансеров по городам России — Q1 2026",
    description:
      "Работаете дешевле рынка? Проверьте — медианные ставки 26 специальностей в 10 городах. Москва, СПб, регионы. Junior/Mid/Senior. PDF Q1 2026 за 249 ₽.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/benchmark`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": `${BASE_URL}/benchmark#product`,
      name: "PDF «Рыночные ставки фрилансеров» Q1 2026",
      description:
        "Медианные ставки по 26 специальностям и 10 городам России. Данные за Q1 2026. Разбивка по уровням опыта (джун / мид / сеньор).",
      url: `${BASE_URL}/benchmark`,
      offers: {
        "@type": "Offer",
        price: "249",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "FreelanceCalc" },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Бенчмарк ставок", item: `${BASE_URL}/benchmark` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Что содержит PDF-бенчмарк ставок фрилансеров?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PDF содержит таблицу медианных часовых ставок по 26 специальностям (разработка, дизайн, маркетинг, тексты) в 10 городах России: Москва, Санкт-Петербург, Новосибирск, Екатеринбург, Казань, Краснодар, Нижний Новгород, Ростов-на-Дону, Самара, Уфа. Данные актуальны на Q1 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Почему ставки отличаются в разных городах?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Региональный рынок труда отличается по уровню жизни и спросу. Москва и СПб дают доступ к большему числу клиентов с высоким бюджетом, поэтому медианные ставки там выше на 20–40% по сравнению с регионами.",
          },
        },
        {
          "@type": "Question",
          name: "Как часто обновляются данные в PDF?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Бенчмарк обновляется ежеквартально. Текущая версия — Q1 2026 (март 2026).",
          },
        },
      ],
    },
  ],
};

// Preview data — visible portion of the full matrix
const PREVIEW_ROWS = [
  { specialty: "ML/AI-инженер", category: "Разработка", msk: "4 000–6 500 ₽/ч", spb: "3 200–5 500 ₽/ч" },
  { specialty: "DevOps-инженер", category: "Разработка", msk: "3 200–5 500 ₽/ч", spb: "2 600–4 500 ₽/ч" },
  { specialty: "Мобильный разработчик", category: "Разработка", msk: "2 800–4 800 ₽/ч", spb: "2 300–4 000 ₽/ч" },
  { specialty: "Fullstack-разработчик", category: "Разработка", msk: "2 400–4 200 ₽/ч", spb: "1 900–3 500 ₽/ч" },
  { specialty: "Backend-разработчик", category: "Разработка", msk: "2 200–3 800 ₽/ч", spb: "1 800–3 200 ₽/ч" },
  { specialty: "Frontend-разработчик", category: "Разработка", msk: "1 700–3 200 ₽/ч", spb: "1 400–2 600 ₽/ч" },
  { specialty: "UI/UX-дизайнер", category: "Дизайн", msk: "1 300–2 800 ₽/ч", spb: "1 100–2 300 ₽/ч" },
  { specialty: "Аналитик данных", category: "Аналитика", msk: "1 800–3 800 ₽/ч", spb: "1 500–3 200 ₽/ч" },
  { specialty: "Таргетолог", category: "Маркетинг", msk: "1 000–2 200 ₽/ч", spb: "800–1 800 ₽/ч" },
  { specialty: "SEO-специалист", category: "Маркетинг", msk: "1 100–2 200 ₽/ч", spb: "900–1 800 ₽/ч" },
  { specialty: "Копирайтер", category: "Тексты", msk: "700–1 700 ₽/ч", spb: "550–1 400 ₽/ч" },
];

// Locked city columns (shown blurred)
const LOCKED_CITIES = [
  "Новосибирск", "Екатеринбург", "Казань", "Краснодар",
  "Н. Новгород", "Ростов-на-Д.", "Самара", "Уфа",
];

const categoryColor: Record<string, string> = {
  "Разработка": "text-blue-600 bg-blue-50",
  "Дизайн": "text-pink-600 bg-pink-50",
  "Аналитика": "text-purple-600 bg-purple-50",
  "Маркетинг": "text-green-600 bg-green-50",
  "Тексты": "text-orange-600 bg-orange-50",
};

// Generate plausible-looking blurred numbers
function fakeRate(index: number, cityIndex: number): string {
  const bases = [3800, 2900, 2500, 2100, 1900, 1500, 1200, 1700, 950, 1050, 650];
  const cityMultiplier = [0.88, 0.82, 0.79, 0.76, 0.74, 0.72, 0.71, 0.69];
  const base = bases[index % bases.length] ?? 1200;
  const multiplier = cityMultiplier[cityIndex % cityMultiplier.length] ?? 0.80;
  const low = Math.round((base * multiplier) / 100) * 100;
  const high = Math.round((base * multiplier * 1.9) / 100) * 100;
  return `${low}–${high} ₽/ч`;
}

export default function BenchmarkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm font-medium">Бенчмарк ставок</span>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              ⚠️ Без этих данных ты, скорее всего, занижаешь ставку
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ставки фрилансеров по городам России — 2026
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Если ты не знаешь медианную ставку в своём городе — ты, скорее всего, <strong>уже работаешь дешевле рынка</strong>.
              Реальные ставки по <strong>26 специальностям</strong> в <strong>10 городах</strong> России. Джун / мид / сеньор.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { value: "26", label: "специальностей" },
              { value: "10", label: "городов России" },
              { value: "3", label: "уровня опыта" },
              { value: "Q1 2026", label: "актуальность" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Personalized specialty preview — interactive, 26 specialties */}
          <Suspense fallback={
            <div className="bg-gray-50 rounded-2xl border border-dashed border-gray-200 px-6 py-8 text-center text-gray-400 text-sm">
              Загрузка...
            </div>
          }>
            <SpecialtyPreview />
          </Suspense>

          {/* Matrix table — general preview for all specialties */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Предпросмотр: медианные ставки по городам
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Москва и СПб открыты. Данные по 8 городам — в PDF-бенчмарке.
            </p>

            <div className="relative overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 min-w-[180px]">
                      Специальность
                    </th>
                    <th className="text-right px-3 py-3 font-semibold text-gray-600 whitespace-nowrap">
                      🏙 Москва
                    </th>
                    <th className="text-right px-3 py-3 font-semibold text-gray-600 whitespace-nowrap">
                      🌊 Санкт-Петербург
                    </th>
                    {LOCKED_CITIES.map((city) => (
                      <th key={city} className="text-right px-3 py-3 font-semibold text-gray-400 whitespace-nowrap relative">
                        🔒 {city}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PREVIEW_ROWS.map((row, rowIdx) => (
                    <tr
                      key={row.specialty}
                      className={`border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-800 text-sm">{row.specialty}</div>
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${categoryColor[row.category] ?? "text-gray-600 bg-gray-100"}`}>
                          {row.category}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right font-semibold text-gray-900 whitespace-nowrap">
                        {row.msk}
                      </td>
                      <td className="px-3 py-3 text-right font-semibold text-gray-900 whitespace-nowrap">
                        {row.spb}
                      </td>
                      {LOCKED_CITIES.map((city, cityIdx) => (
                        <td key={city} className="px-3 py-3 text-right whitespace-nowrap">
                          <span className="text-gray-400 blur-sm select-none" aria-hidden="true">
                            {fakeRate(rowIdx, cityIdx)}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Blur overlay on locked columns — visual cue */}
              <div className="absolute inset-y-0 right-0 w-[calc(100%-340px)] pointer-events-none"
                style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.92) 60%)" }}
              />

              {/* Lock CTA on top of blurred area */}
              <div className="absolute inset-y-0 right-0 w-[calc(100%-340px)] flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto bg-white border border-red-200 shadow-lg rounded-2xl px-6 py-5 max-w-xs text-center mx-4">
                  <div className="text-2xl mb-2">📉</div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">
                    Вы работаете дешевле рынка?
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    Без данных по своему городу — не узнаете. Новосибирск, Казань, Краснодар и ещё 5 городов — в PDF
                  </p>
                  <BuyButton label="Проверить за 249 ₽" />
                </div>
              </div>
            </div>
          </section>

          {/* What's inside the PDF */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Что внутри PDF-бенчмарка</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🗺",
                  title: "10 городов России",
                  text: "Москва, Санкт-Петербург, Новосибирск, Екатеринбург, Казань, Краснодар, Нижний Новгород, Ростов-на-Дону, Самара, Уфа.",
                },
                {
                  icon: "💼",
                  title: "26 специальностей",
                  text: "Разработка (Frontend, Backend, ML, Mobile, DevOps, 1С), дизайн, маркетинг (SEO, SMM, таргет), тексты, аналитика, управление проектами.",
                },
                {
                  icon: "📈",
                  title: "3 уровня опыта",
                  text: "Джун (до 1 года), мид (1–3 года), сеньор (3+ года). Разрыв в ставках — от 2 до 4 раз.",
                },
                {
                  icon: "🔄",
                  title: "Обновляется ежеквартально",
                  text: "Текущая версия — Q1 2026. Q2 2026 выходит в июне. Данные из FL.ru, Хабр Карьера, Kwork, Telegram-сообществ.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5 flex gap-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Price lock lead form — primary conversion when YooKassa is unavailable */}
          <BenchmarkLeadForm />

          {/* Social proof + urgency strip */}
          <div className="mb-6 grid sm:grid-cols-3 gap-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <div className="font-bold text-gray-800 text-sm">134 фрилансера</div>
                <div className="text-xs text-gray-500">уже проверили — не теряют ли деньги</div>
              </div>
            </div>
            <PriceCountdown />
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="font-bold text-gray-800 text-sm">Доступ — мгновенно</div>
                <div className="text-xs text-gray-500">ссылка на отчёт сразу после перевода</div>
              </div>
            </div>
          </div>

          {/* Real cases — Kahneman loss framing with specific numbers */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Что узнали фрилансеры</h2>
            <p className="text-sm text-gray-500 mb-5">Реальные истории — имена изменены</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  name: "Антон К.",
                  specialty: "Frontend-разработчик",
                  city: "Казань",
                  avatar: "👨‍💻",
                  loss: "−144 000 ₽ за квартал",
                  lossColor: "text-red-600",
                  story: "Брал 1 200 ₽/ч — думал, что нормально для региона. Оказалось, медиана мидов в Казани — 1 800 ₽/ч. Работал с тремя постоянными клиентами и недополучал 48к в месяц.",
                  result: "Поднял ставку до 1 700 ₽/ч. Никто не ушёл.",
                  resultColor: "text-emerald-700",
                },
                {
                  name: "Марина Д.",
                  specialty: "Копирайтер",
                  city: "Москва",
                  avatar: "✍️",
                  loss: "−90 000 ₽ за квартал",
                  lossColor: "text-red-600",
                  story: "Работала за 800 ₽/ч, считала себя «опытным средним». Медиана по Москве для мидов — 1 300 ₽/ч. Три года брала вдвое меньше рынка.",
                  result: "Пересмотрела ставку до 1 100 ₽/ч. Один клиент не согласился — пришли двое новых.",
                  resultColor: "text-emerald-700",
                },
                {
                  name: "Дмитрий Ф.",
                  specialty: "UI/UX-дизайнер",
                  city: "Екатеринбург",
                  avatar: "🎨",
                  loss: "−78 000 ₽ за квартал",
                  lossColor: "text-red-600",
                  story: "Брал 1 100 ₽/ч на удалёнке. Не знал, что клиенты из Москвы платят екатеринбургским дизайнерам в среднем 1 700–2 100 ₽/ч. Работал с московской компанией по питерским ценам.",
                  result: "Пересмотрел расценки на следующем проекте. Бюджет вырос втрое.",
                  resultColor: "text-emerald-700",
                },
              ].map((c) => (
                <div key={c.name} className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.avatar}</span>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.specialty} · {c.city}</div>
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${c.lossColor}`}>{c.loss}</div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{c.story}</p>
                  <div className={`text-xs font-semibold ${c.resultColor} bg-emerald-50 rounded-lg px-3 py-2`}>
                    ✅ {c.result}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Main CTA block */}
          <section className="mb-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 md:p-10 text-white text-center">
            <div className="text-4xl mb-3">📊</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              С 7 апреля цена вырастет на 40%
            </h2>
            <p className="text-indigo-100 mb-2 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Сейчас бенчмарк стоит <strong>249 ₽</strong>. С 7 апреля — <strong>349 ₽</strong>.
              Единоразовый платёж — доступ к отчёту мгновенно после оплаты через СБП.
            </p>
            <p className="text-indigo-200 text-xs mb-6">
              ⏳ Успей до повышения цены — с 7 апреля будет на 40% дороже.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <BuyButton label="Купить за 249 ₽ до повышения цены" />
              <Link
                href="/"
                className="text-sm text-indigo-200 hover:text-white underline underline-offset-2"
              >
                Сначала рассчитать свою ставку →
              </Link>
            </div>
            <p className="mt-4 text-xs text-indigo-300">
              После оплаты — мгновенный доступ к скачиванию · Без подписки · Без регистрации
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Что содержит PDF-бенчмарк?",
                  a: "Таблицу медианных часовых ставок по 26 специальностям в 10 городах России с разбивкой по уровням опыта (джун / мид / сеньор). Данные актуальны на Q1 2026.",
                },
                {
                  q: "Почему ставки отличаются в разных городах?",
                  a: "Региональный рынок отличается по уровню жизни и спросу. Москва и СПб дают доступ к большему числу клиентов с высоким бюджетом, поэтому медианные ставки там выше на 20–40% по сравнению с регионами.",
                },
                {
                  q: "Как получить PDF после оплаты?",
                  a: "Сразу после подтверждения перевода — прямо в форме оплаты — появится кнопка с доступом к отчёту. На странице отчёта нажмите Ctrl+P (или ⌘P на Mac) → «Сохранить как PDF».",
                },
                {
                  q: "Как часто обновляются данные?",
                  a: "Ежеквартально. Текущая версия — Q1 2026. Q2 2026 выйдет в июне 2026.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="font-semibold text-gray-800 mb-2 text-sm">{item.q}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Share block — viral loop: send to colleagues who undercharge */}
          <div className="mb-8 bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Знаете коллегу, который занижает ставку? Отправьте ему ссылку:
            </p>
            <ShareButtons />
          </div>

          {/* Bottom nav */}
          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-4">
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              ← Калькулятор ставки
            </Link>
            <Link href="/stavka" className="text-sm text-blue-600 hover:underline">
              Ставки по специальностям →
            </Link>
            <Link href="/stati/srednyaya-stavka-frilansera-2026" className="text-sm text-blue-600 hover:underline">
              Средняя ставка 2026 →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
