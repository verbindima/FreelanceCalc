import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Скрытые расходы фрилансера 2026: считаем реальную стоимость часа",
  description:
    "Налоги, простои, больничные, инструменты, самообразование — список скрытых расходов фрилансера в 2026 году. Как их учесть в ставке и не работать в минус.",
  keywords: [
    "скрытые расходы фрилансера",
    "реальная стоимость часа фрилансера",
    "расходы самозанятого",
    "скрытые затраты фриланс",
    "почему фрилансер должен брать больше",
    "себестоимость фриланса",
    "накладные расходы фрилансера",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/skrytye-rashody-frilansera" },
  openGraph: {
    title: "Скрытые расходы фрилансера 2026: полный список",
    description:
      "Налоги, простои, оборудование, самообразование — всё, что надо заложить в ставку, чтобы не работать в минус.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/skrytye-rashody-frilansera`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Скрытые расходы фрилансера 2026: считаем реальную стоимость часа",
  description:
    "Полный список скрытых расходов фрилансера: налоги, простои, инструменты, самообразование. Как каждый из них влияет на ставку.",
  url: `${BASE_URL}/stati/skrytye-rashody-frilansera`,
  inLanguage: "ru",
  datePublished: "2026-03-01",
  dateModified: "2026-03-21",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/stati/skrytye-rashody-frilansera` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какие скрытые расходы есть у фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Основные скрытые расходы: налоги (4–15% дохода), простои между проектами (25–40% рабочего времени), самостоятельная оплата отпуска и больничных, ПО и инструменты (1 000–5 000 ₽/мес), самообразование, реклама и маркетинг, бухгалтерия. В сумме они составляют 40–70% сверх желаемого «чистого» дохода.",
      },
    },
    {
      "@type": "Question",
      name: "Почему фрилансер должен брать в 1.5–2 раза больше офисной зарплаты?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Офисный сотрудник получает скрытые бонусы: оплачиваемый отпуск, больничные, страховые взносы работодателя, оборудование за счёт компании. Фрилансер оплачивает всё сам. Если офисная зарплата — 100 000 ₽, реальная стоимость сотрудника для компании — 130–160 000 ₽. Фрилансер конкурирует именно с этой цифрой, а не с «чистой» зарплатой.",
      },
    },
    {
      "@type": "Question",
      name: "Как учесть простои в ставке фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Используйте коэффициент загрузки (billable ratio). Если вы реально работаете 65% времени, делите желаемый годовой доход на 65% от рабочих часов. Калькулятор FreelanceCalc делает это автоматически — достаточно задать процент загрузки.",
      },
    },
    {
      "@type": "Question",
      name: "Как посчитать стоимость своей ставки с учётом всех расходов?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Формула: (Желаемый чистый доход + Налоги + Отпускные + Расходы на инструменты и маркетинг) / Оплачиваемые часы в год. Для самозанятого с доходом 120 000 ₽/мес и загрузкой 70% получается около 1 200–1 400 ₽/час. Калькулятор FreelanceCalc учитывает все параметры.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "FreelanceCalc", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Скрытые расходы фрилансера",
      item: `${BASE_URL}/stati/skrytye-rashody-frilansera`,
    },
  ],
};

const HIDDEN_COSTS = [
  {
    category: "Налоги",
    emoji: "🧾",
    color: "border-red-200 bg-red-50",
    badgeColor: "text-red-700 bg-red-100",
    items: [
      {
        name: "НПД (самозанятый, физлица)",
        amount: "4% от дохода",
        monthly: "~4 800 ₽ при доходе 120 000 ₽/мес",
        note: "Самый низкий налог, но лимит — 2.4 млн ₽/год",
      },
      {
        name: "НПД (самозанятый, юрлица)",
        amount: "6% от дохода",
        monthly: "~7 200 ₽ при доходе 120 000 ₽/мес",
        note: "Большинство B2B-клиентов — юрлица",
      },
      {
        name: "УСН 6% + страховые взносы (ИП)",
        amount: "6% + ~49 500 ₽/год",
        monthly: "~7 200 ₽ налог + ~4 125 ₽ взносы",
        note: "Итого 8–12% от дохода в зависимости от суммы",
      },
    ],
  },
  {
    category: "Простои и непродуктивное время",
    emoji: "⏳",
    color: "border-orange-200 bg-orange-50",
    badgeColor: "text-orange-700 bg-orange-100",
    items: [
      {
        name: "Поиск новых клиентов",
        amount: "10–25% рабочего времени",
        monthly: "До 2 недель в месяц",
        note: "Время на написание предложений, переговоры, отклики",
      },
      {
        name: "Тестовые задания и брифинг",
        amount: "5–10% времени",
        monthly: "1–4 дня в месяц",
        note: "Часто без оплаты, но это рабочие часы",
      },
      {
        name: "Административная работа",
        amount: "5–8% времени",
        monthly: "1–2 дня в месяц",
        note: "Договоры, счета, переписка, бухгалтерия",
      },
      {
        name: "Период без заказов",
        amount: "1–3 недели/год",
        monthly: "Пиковые — декабрь, август",
        note: "Неизбежный «простой» даже у опытных фрилансеров",
      },
    ],
  },
  {
    category: "Отпуск и нетрудоспособность",
    emoji: "🏖",
    color: "border-yellow-200 bg-yellow-50",
    badgeColor: "text-yellow-700 bg-yellow-100",
    items: [
      {
        name: "Оплачиваемый отпуск",
        amount: "14–28 дней/год",
        monthly: "~27 000–54 000 ₽ при доходе 120к/мес",
        note: "У офисных — за счёт работодателя. У вас — за свой счёт",
      },
      {
        name: "Больничные",
        amount: "5–15 дней/год в среднем",
        monthly: "Около 10 000–30 000 ₽ потерь",
        note: "Самозанятые не получают больничные пособия",
      },
      {
        name: "Праздники (нерабочие дни)",
        amount: "~14 дней/год",
        monthly: "Заложено в «отпуск» или потери",
        note: "Официальных праздников в России — 14 дней",
      },
    ],
  },
  {
    category: "Инструменты и оборудование",
    emoji: "💻",
    color: "border-blue-200 bg-blue-50",
    badgeColor: "text-blue-700 bg-blue-100",
    items: [
      {
        name: "ПО и подписки",
        amount: "1 000–5 000 ₽/мес",
        monthly: "Figma, Adobe, Notion, GitLab, IDE",
        note: "Офисный сотрудник платит 0 ₽ за ПО",
      },
      {
        name: "Амортизация оборудования",
        amount: "~2 000–4 000 ₽/мес",
        monthly: "Ноутбук 100 000 ₽ служит ~4 года",
        note: "Плюс монитор, периферия, обновления",
      },
      {
        name: "Интернет и связь",
        amount: "1 000–2 000 ₽/мес",
        monthly: "Дома и резервный мобильный",
        note: "Частично можно вычесть из дохода при УСН 15%",
      },
    ],
  },
  {
    category: "Маркетинг и продвижение",
    emoji: "📣",
    color: "border-purple-200 bg-purple-50",
    badgeColor: "text-purple-700 bg-purple-100",
    items: [
      {
        name: "Портфолио и сайт",
        amount: "5 000–30 000 ₽ единовременно",
        monthly: "~500–1 500 ₽/мес в пересчёте",
        note: "Хостинг, домен, редизайн раз в 2–3 года",
      },
      {
        name: "Размещение на биржах",
        amount: "0–2 000 ₽/мес",
        monthly: "FL.ru, Kwork, Hh.ru — платные тарифы",
        note: "Бесплатные тарифы имеют ограниченную видимость",
      },
      {
        name: "Контент и личный бренд",
        amount: "10–20% времени",
        monthly: "Статьи, кейсы, публикации",
        note: "Непрямая инвестиция, но критична для потока заказов",
      },
    ],
  },
  {
    category: "Обучение и развитие",
    emoji: "📚",
    color: "border-green-200 bg-green-50",
    badgeColor: "text-green-700 bg-green-100",
    items: [
      {
        name: "Курсы и конференции",
        amount: "10 000–50 000 ₽/год",
        monthly: "~800–4 000 ₽/мес в среднем",
        note: "Без обучения специалист теряет конкурентоспособность",
      },
      {
        name: "Книги и материалы",
        amount: "1 000–5 000 ₽/год",
        monthly: "Незначительная статья",
        note: "Плюс платный доступ к профессиональным ресурсам",
      },
    ],
  },
];

export default function SkrytiyeRaskhodyPage() {
  const totalMin = 35000;
  const totalMax = 80000;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Header / breadcrumb */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="text-indigo-600 hover:underline font-medium">
              FreelanceCalc
            </Link>
            <span>/</span>
            <Link href="/stati" className="hover:underline">
              Статьи
            </Link>
            <span>/</span>
            <span className="text-slate-700">Скрытые расходы</span>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              💸 Финансы фрилансера · 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Скрытые расходы фрилансера: полный список 2026
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Фрилансер называет ставку 2 000 ₽/час — и думает, что забирает домой эти деньги.
              На самом деле реальный доход на руки после всех скрытых расходов составляет <strong>60–70% от выставленного счёта</strong>.
              Разбираем каждую статью.
            </p>
          </div>

          {/* Key stat */}
          <div className="bg-red-600 text-white rounded-2xl p-6 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">4–15%</div>
                <div className="text-red-200 text-xs mt-1">уходит на налоги</div>
              </div>
              <div>
                <div className="text-2xl font-bold">25–40%</div>
                <div className="text-red-200 text-xs mt-1">времени неоплачиваемо</div>
              </div>
              <div>
                <div className="text-2xl font-bold">28+ дней</div>
                <div className="text-red-200 text-xs mt-1">отпуск за свой счёт</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5–10 тыс ₽</div>
                <div className="text-red-200 text-xs mt-1">инструменты/мес</div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <section className="prose prose-slate max-w-none mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Почему фрилансер — не «просто удалёнщик»</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Когда компания нанимает сотрудника с зарплатой 100 000 ₽, она реально платит 130–160 000 ₽: страховые взносы,
              НДФЛ за свой счёт, отпускные, больничные, оборудование, ПО. Фрилансер несёт эти же расходы
              <em> самостоятельно</em> — просто они не так очевидны.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Если вы хотите получать на руки 120 000 ₽ в месяц, вам нужно выставлять счета минимум на{" "}
              <strong>165 000–200 000 ₽</strong> — в зависимости от налогового режима, загрузки и расходов.
              Ниже — разбор каждой статьи.
            </p>
          </section>

          {/* Cost categories */}
          <div className="space-y-8 mb-10">
            {HIDDEN_COSTS.map((cat) => (
              <section key={cat.category} className={`border rounded-2xl overflow-hidden ${cat.color}`}>
                <div className="px-6 py-4 border-b border-current border-opacity-20">
                  <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span>{cat.emoji}</span>
                    {cat.category}
                  </h2>
                </div>
                <div className="divide-y divide-current divide-opacity-10">
                  {cat.items.map((item) => (
                    <div key={item.name} className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-800 text-sm">{item.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{item.note}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className={`inline-block text-xs font-bold px-2 py-1 rounded-lg ${cat.badgeColor}`}>
                            {item.amount}
                          </div>
                          <div className="text-xs text-slate-500 mt-1 max-w-[200px] text-right">
                            {item.monthly}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Summary calculation */}
          <section className="bg-slate-800 text-white rounded-2xl p-6 mb-10">
            <h2 className="text-xl font-bold mb-4">Итого: сколько «съедают» скрытые расходы</h2>
            <p className="text-slate-300 text-sm mb-5 leading-relaxed">
              Для фрилансера с желаемым доходом <strong>120 000 ₽/мес на руки</strong>:
            </p>
            <div className="space-y-3 mb-5">
              {[
                { label: "Желаемый доход на руки", value: "120 000 ₽/мес", highlight: false },
                { label: "Налог (самозанятый, юрлица 6%)", value: "+ 7 700 ₽", highlight: false },
                { label: "Простои (загрузка 70%)", value: "+ 36 000 ₽ к ставке*", highlight: false },
                { label: "Отпуск 28 дней за свой счёт", value: "+ 13 500 ₽/мес в пересчёте", highlight: false },
                { label: "Инструменты и оборудование", value: "+ 5 000 ₽/мес", highlight: false },
                { label: "Маркетинг, обучение", value: "+ 3 000 ₽/мес", highlight: false },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">{row.label}</span>
                  <span className={`font-semibold ${row.highlight ? "text-amber-400" : "text-white"}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="border-t border-slate-600 pt-3 flex justify-between items-center">
                <span className="font-bold text-white">Счёт клиенту должен быть ~</span>
                <span className="font-bold text-amber-400 text-lg">
                  {new Intl.NumberFormat("ru-RU").format(totalMin)}–{new Intl.NumberFormat("ru-RU").format(totalMax)} ₽*
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              * Диапазон зависит от налогового режима, фактической загрузки, суммы ваших расходов.
              Расчёт приблизительный.
            </p>
          </section>

          {/* CTA: Calculator */}
          <section className="bg-indigo-600 text-white rounded-2xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Рассчитайте свою ставку с учётом всех расходов</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  Введите желаемый доход, выберите налоговый режим и загрузку —
                  калькулятор автоматически учтёт все коэффициенты.
                </p>
              </div>
              <Link
                href="/"
                className="shrink-0 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Открыть калькулятор →
              </Link>
            </div>
          </section>

          {/* CTA: Benchmark PDF */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
                  Ваша ставка выше или ниже рынка?
                </p>
                <h3 className="font-bold text-slate-800 text-base">
                  PDF с медианами по 22+ специальностям и 10 городам
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Данные Q1 2026: сравните свою ставку с коллегами по специальности и городу.
                </p>
              </div>
              <Link
                href="/benchmark"
                className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Узнать — 249 ₽
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Частые вопросы</h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((item) => (
                <div key={item.name} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="font-semibold text-slate-800 mb-2 text-sm">{item.name}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Читайте также</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/stati/kak-raschitat-stavku-frilansera",
                  title: "Как рассчитать ставку фрилансера: пошаговое руководство",
                  desc: "Формула расчёта с примерами для самозанятых и ИП",
                },
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  title: "Самозанятый vs ИП для фрилансера",
                  desc: "Сравнение налоговых режимов: что выгоднее в 2026 году",
                },
                {
                  href: "/stati/kak-povysit-stavku-frilansera",
                  title: "Как повысить ставку фрилансера",
                  desc: "7 конкретных шагов, которые работают в 2026 году",
                },
                {
                  href: "/stati/frilans-vs-naym-2026",
                  title: "Фриланс vs найм 2026: финансовое сравнение",
                  desc: "Считаем реальный доход с обеих сторон",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <div className="font-semibold text-slate-800 text-sm mb-1">{link.title}</div>
                  <div className="text-xs text-slate-500">{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
