import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "kak-stat-frilanserom-2026";

export const metadata: Metadata = {
  title: "Как стать фрилансером в 2026: пошаговый план для начинающих",
  description:
    "Полный пошаговый план перехода на фриланс в 2026 году: как выбрать специальность, рассчитать первую ставку, оформить самозанятость и найти первых клиентов. Реальные цифры и калькулятор.",
  keywords: [
    "как стать фрилансером",
    "переход на фриланс с найма",
    "начать фриланс 2026",
    "как уйти на фриланс",
    "фриланс для начинающих",
    "первые шаги на фрилансе",
    "как начать работать фрилансером",
    "с чего начать фриланс",
    "пошаговый план фриланс",
    "как перейти на фриланс самозанятый",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Как стать фрилансером в 2026: пошаговый план",
    description:
      "6 шагов перехода на фриланс с реальными цифрами. Как рассчитать первую ставку, оформить самозанятость и не прогореть в первые месяцы.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/${SLUG}`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/${SLUG}#article`,
      headline: "Как стать фрилансером в 2026: пошаговый план для начинающих",
      description:
        "6 шагов перехода на фриланс: специальность, ставка, самозанятость, первые клиенты, финансовая подушка.",
      author: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "FreelanceCalc",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.ico` },
      },
      datePublished: "2026-03-21",
      dateModified: "2026-03-21",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/stati/${SLUG}`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "FreelanceCalc",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Статьи",
          item: `${BASE_URL}/stati`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Как стать фрилансером 2026",
          item: `${BASE_URL}/stati/${SLUG}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "С чего начать фриланс в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Начните с 6 шагов: 1) Определите специальность и целевой доход. 2) Рассчитайте минимальную ставку через калькулятор. 3) Оформите самозанятость (НПД) в приложении «Мой налог». 4) Соберите минипортфолио из 3–5 работ. 5) Зарегистрируйтесь на FL.ru, Kwork, Habr Freelance. 6) Создайте финансовую подушку на 3 месяца. Переходить сразу не обязательно — можно совмещать первые 3–6 месяцев.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько нужно накопить перед уходом на фриланс?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Оптимально — 3–6 месячных расходов. Если ваши расходы 50 000 ₽/мес, нужна подушка 150 000–300 000 ₽. Первые 2–3 месяца уйдут на поиск клиентов: доход будет нестабильным. Совмещение найма и фриланса в первые месяцы снижает риск.",
          },
        },
        {
          "@type": "Question",
          name: "Нужно ли оформлять самозанятость для работы на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, не обязательно с первого дня. Но самозанятость (НПД) выгодна: ставка 4% при работе с физлицами и 6% с юрлицами — это минимальная налоговая нагрузка для фрилансеров. Оформление занимает 5 минут через приложение «Мой налог». При доходе до 2,4 млн ₽/год — оптимальный выбор.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать первую ставку на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Формула: (Желаемый доход + налоги + расходы) ÷ оплачиваемые часы. Если хотите 80 000 ₽/мес, реально оплачиваемых часов ~120 в месяц (остальное — поиск клиентов, переписка). С НПД 6% нужная ставка: (80 000 ÷ 0.94) ÷ 120 ≈ 709 ₽/час. Плюс добавьте 20–25% на отпуск и простои — выходит ~900 ₽/час. Используйте калькулятор для точного расчёта под вашу ситуацию.",
          },
        },
        {
          "@type": "Question",
          name: "Где найти первых клиентов на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Три самых рабочих канала для новичков: 1) Биржи — FL.ru, Kwork, Habr Freelance, YouDo. Низкий порог входа, много конкуренции — надо демпинговать только первые 2–3 месяца до рейтинга. 2) Личная сеть — бывшие коллеги и знакомые. 60–70% первых заказов приходят оттуда. 3) Telegram-чаты по специальности — «Работа для дизайнеров», «Python вакансии» и т.д. Прямой контакт с заказчиком без комиссии биржи.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли совмещать фриланс и работу в найме?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, и это лучшая стратегия для начинающих. Первые 3–6 месяцев работайте в найме и параллельно набирайте портфолио и первых клиентов. Когда фриланс стабильно приносит 50–60% от зарплаты — можно уходить. Юридически: если у вас трудовой договор, убедитесь, что в нём нет запрета на параллельную работу. Самозанятость при этом оформить можно без проблем.",
          },
        },
      ],
    },
  ],
};

const STEPS = [
  {
    num: "01",
    title: "Определите специальность и целевой доход",
    emoji: "🎯",
    color: "border-indigo-200 bg-indigo-50",
    numColor: "text-indigo-600",
    content: (
      <>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          Фриланс — это не «работать из дома». Это бизнес, где вы продаёте конкретный навык.
          Чем уже специализация — тем проще объяснить ценность и тем выше ставка.
        </p>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          <strong>Плохо:</strong> «Я занимаюсь дизайном и вёрсткой, немного SMM и могу писать тексты».<br />
          <strong>Хорошо:</strong> «Я делаю UI-дизайн для мобильных приложений в fintech».
        </p>
        <div className="bg-white border border-indigo-100 rounded-xl p-4 mb-3">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">Популярные специальности для старта в 2026</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              ["Frontend", "от 1 000 ₽/ч"],
              ["UI/UX дизайн", "от 900 ₽/ч"],
              ["Копирайтинг", "от 600 ₽/ч"],
              ["SEO", "от 800 ₽/ч"],
              ["SMM", "от 700 ₽/ч"],
              ["Таргет", "от 900 ₽/ч"],
              ["Python", "от 1 200 ₽/ч"],
              ["QA", "от 800 ₽/ч"],
            ].map(([spec, rate]) => (
              <div key={spec} className="flex justify-between bg-indigo-50 rounded-lg px-3 py-1.5">
                <span className="text-slate-700">{spec}</span>
                <span className="text-indigo-700 font-semibold text-xs">{rate}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-slate-600 text-sm">
          Целевой доход — это не «хочу 200 000 ₽ в месяц с первого дня».
          Реалистичная цель на первый год:{" "}
          <strong>выйти на доход от найма + 20%</strong> за счёт отсутствия налогов работодателя.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Рассчитайте минимальную ставку — до того, как уйдёте",
    emoji: "🧮",
    color: "border-emerald-200 bg-emerald-50",
    numColor: "text-emerald-600",
    content: (
      <>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          Большинство новичков называют ставку «на глаз» — и проигрывают дважды: либо занижают и работают в минус,
          либо завышают и не получают заказы. Правильная ставка считается за 30 секунд.
        </p>
        <div className="bg-white border border-emerald-100 rounded-xl p-4 mb-3">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">
            Пример: хочу зарабатывать 80 000 ₽/мес
          </p>
          <div className="space-y-2 text-sm">
            {[
              ["Целевой доход на руки", "80 000 ₽"],
              ["Налог НПД 6% (на себя)", "+ 5 106 ₽"],
              ["Итого выставить клиентам", "= 85 106 ₽"],
              ["Оплачиваемых часов в месяц", "~120 ч"],
              ["Базовая ставка", "≈ 710 ₽/ч"],
              ["+ отпуск, простои (25%)", "+ 178 ₽/ч"],
              ["Минимальная ставка", "≈ 890 ₽/ч"],
            ].map(([label, value], i) => (
              <div
                key={label}
                className={`flex justify-between ${i === 6 ? "border-t border-emerald-200 pt-2 font-bold text-emerald-800" : "text-slate-700"}`}
              >
                <span>{label}</span>
                <span className={i === 6 ? "text-emerald-700" : "text-slate-800"}>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-emerald-100 border border-emerald-200 rounded-xl px-4 py-3 text-sm text-emerald-800">
          <strong>Важно:</strong> 120 часов — это реальная оплачиваемая загрузка при 160-часовом рабочем месяце.
          40 часов уходит на поиск заказов, переписку и административные задачи. Многие новички забывают это и занижают ставку.
        </div>
      </>
    ),
  },
  {
    num: "03",
    title: "Оформите самозанятость — это 5 минут",
    emoji: "📱",
    color: "border-amber-200 bg-amber-50",
    numColor: "text-amber-600",
    content: (
      <>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          Самозанятость (НПД — налог на профессиональный доход) — лучший старт для фрилансера.
          Минимальная налоговая нагрузка, максимальная простота.
        </p>
        <div className="bg-white border border-amber-100 rounded-xl p-4 mb-3">
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-3">Почему самозанятость, а не ИП?</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-slate-500">
                  <th className="pb-2 font-medium">Параметр</th>
                  <th className="pb-2 font-medium text-amber-700">Самозанятый</th>
                  <th className="pb-2 font-medium">ИП УСН 6%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Налог с доходов", "4–6%", "6% + взносы"],
                  ["Фикс. взносы в год", "Нет", "~53 658 ₽"],
                  ["Отчётность", "Автоматически", "Ежеквартально"],
                  ["Оформление", "5 мин в приложении", "1–3 дня"],
                  ["Лимит дохода", "2,4 млн ₽/год", "Нет"],
                ].map(([param, np, ip]) => (
                  <tr key={param}>
                    <td className="py-2 text-slate-600">{param}</td>
                    <td className="py-2 text-amber-700 font-semibold">{np}</td>
                    <td className="py-2 text-slate-600">{ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-2">
          <strong>Как оформить:</strong> Скачайте приложение «Мой налог» → «Стать самозанятым» →
          авторизуйтесь через Госуслуги → всё. Статус присваивается в течение нескольких минут.
        </p>
        <p className="text-slate-600 text-sm">
          При доходе выше 2,4 млн ₽/год переходите на ИП УСН.{" "}
          <Link href="/stati/samozanyatyj-vs-ip-frilancer" className="text-amber-700 underline hover:text-amber-800">
            Подробное сравнение самозанятый vs ИП →
          </Link>
        </p>
      </>
    ),
  },
  {
    num: "04",
    title: "Соберите первое портфолио (даже если опыта нет)",
    emoji: "📁",
    color: "border-violet-200 bg-violet-50",
    numColor: "text-violet-600",
    content: (
      <>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          Без портфолио клиент не может оценить качество вашей работы — и не решается платить.
          Но «нет опыта» — не повод не начинать.
        </p>
        <div className="bg-white border border-violet-100 rounded-xl p-4 mb-3">
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide mb-3">
            Как набрать портфолио с нуля
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Сделайте 2–3 тестовых проекта",
                desc: "Redesign чужого интерфейса, pet-проект на GitHub, написанная статья на VC.ru. Не нужно ждать реального клиента.",
              },
              {
                title: "Возьмите 1–2 заказа по сниженной ставке",
                desc: "Первые клиенты — это не доход, а отзывы и кейсы. Скидка 30–40% на первый проект окупается отзывом и рекомендацией.",
              },
              {
                title: "Помогите некоммерческой организации",
                desc: "НКО, местный бизнес, знакомый — реальный кейс с реальными результатами ценнее выдуманного тестового.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{title}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-violet-100 border border-violet-200 rounded-xl px-4 py-3 text-sm text-violet-800">
          <strong>Правило 3+:</strong> 3 кейса + 3 отзыва = достаточно для получения нормальных заказов.
          Не надо ждать «идеального» портфолио — начните с минимума.
        </div>
      </>
    ),
  },
  {
    num: "05",
    title: "Найдите первых клиентов — три рабочих канала",
    emoji: "🔍",
    color: "border-rose-200 bg-rose-50",
    numColor: "text-rose-600",
    content: (
      <>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          Самая распространённая ошибка: ждать клиентов вместо того, чтобы их искать активно.
          У новичка нет ни репутации, ни SEO — есть только активный поиск.
        </p>
        <div className="bg-white border border-rose-100 rounded-xl p-4 mb-3 space-y-4">
          {[
            {
              num: "1",
              title: "Биржи фриланса",
              emoji: "🖥️",
              pros: "Много заказов, низкий порог входа",
              cons: "Высокая конкуренция, комиссия 5–20%",
              tip: "FL.ru, Kwork, Habr Freelance, YouDo. Первые 2 месяца — демпингуйте ради рейтинга.",
            },
            {
              num: "2",
              title: "Личная сеть",
              emoji: "👥",
              pros: "Без конкуренции, доверие сразу",
              cons: "Ограниченный круг",
              tip: "Напишите бывшим коллегам, однокурсникам, знакомым. 60% первых заказов приходят отсюда.",
            },
            {
              num: "3",
              title: "Telegram-чаты",
              emoji: "📨",
              pros: "Прямой контакт, нет комиссии",
              cons: "Нужно мониторить регулярно",
              tip: "Ищите: «Работа [специальность]», «[специальность] вакансии». Отвечайте в первые 10 минут.",
            },
          ].map(({ num, title, emoji, pros, cons, tip }) => (
            <div key={num} className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-sm flex-shrink-0">
                {num}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{emoji} {title}</p>
                <p className="text-xs text-slate-600 mt-0.5">
                  <span className="text-green-700">+</span> {pros} · <span className="text-red-600">−</span> {cons}
                </p>
                <p className="text-xs text-slate-500 mt-1 italic">{tip}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-rose-100 border border-rose-200 rounded-xl px-4 py-3 text-sm text-rose-800">
          <strong>Целевой KPI первых двух месяцев:</strong> не доход, а 3–5 завершённых проектов и отзывов.
          После этого цена растёт, а клиенты приходят сами.
        </div>
      </>
    ),
  },
  {
    num: "06",
    title: "Создайте финансовую подушку и систему учёта",
    emoji: "💰",
    color: "border-blue-200 bg-blue-50",
    numColor: "text-blue-600",
    content: (
      <>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          Нестабильный доход — главный стресс фрилансера. Решение — системный подход к деньгам с первого дня.
        </p>
        <div className="bg-white border border-blue-100 rounded-xl p-4 mb-3">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Формула распределения дохода для новичка
          </p>
          <div className="space-y-2">
            {[
              { label: "Налог НПД (сразу откладывать)", pct: "6–10%", color: "bg-amber-200", desc: "Не ждите конца месяца" },
              { label: "Финансовая подушка (3–6 мес расходов)", pct: "20%", color: "bg-blue-200", desc: "Пока не накопите 3 мес" },
              { label: "Жизнь и текущие расходы", pct: "60%", color: "bg-slate-200", desc: "Зарплата самому себе" },
              { label: "Инструменты и обучение", pct: "10%", color: "bg-green-200", desc: "Ваш рост = рост ставки" },
            ].map(({ label, pct, color, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className={`w-10 h-5 rounded-md ${color} flex items-center justify-center text-xs font-bold text-slate-700`}>
                  {pct}
                </div>
                <div>
                  <p className="text-sm text-slate-800 font-medium">{label}</p>
                  <p className="text-xs text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">
          Откройте отдельный счёт для налогов — кладите туда 6–10% от каждого платежа автоматически.
          Это не ваши деньги, привыкните сразу.{" "}
          <Link href="/stati/finansy-frilansera-kak-raspredelyat-dohod" className="text-blue-700 underline hover:text-blue-800">
            Подробная формула распределения дохода →
          </Link>
        </p>
      </>
    ),
  },
];

const TIMELINE = [
  { month: "Месяц 1–2", label: "Подготовка", items: ["Портфолио 3 кейса", "Оформить самозанятость", "Рассчитать ставку"], color: "bg-slate-100 border-slate-200" },
  { month: "Месяц 3–4", label: "Первые клиенты", items: ["5–10 откликов в день", "2–3 первых заказа", "Собрать отзывы"], color: "bg-indigo-50 border-indigo-200" },
  { month: "Месяц 5–6", label: "Стабилизация", items: ["Постоянные заказы", "Поднять ставку на 15–20%", "Накопить подушку"], color: "bg-emerald-50 border-emerald-200" },
  { month: "Год 1+", label: "Рост", items: ["Уйти из найма (если цель)", "Специализироваться", "Ставка × 2 от старта"], color: "bg-amber-50 border-amber-200" },
];

export default function KakStatFrilanseromPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-600">FreelanceCalc</Link>
            <span>/</span>
            <Link href="/stati" className="hover:text-slate-600">Статьи</Link>
            <span>/</span>
            <span className="text-slate-600">Как стать фрилансером 2026</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                Руководство
              </span>
              <span className="text-xs text-slate-400">· Март 2026 · 10 мин</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-4">
              Как стать фрилансером в 2026: пошаговый план для начинающих
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              В России на фрилансе работают{" "}
              <strong className="text-slate-800">7–9 миллионов человек</strong> — и половина из них перешла
              без чёткого плана и потеряла деньги на старте.{" "}
              Вот что реально работает в 2026 году: 6 шагов с конкретными цифрами.
            </p>
          </div>

          {/* Alert — loss framing */}
          <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 mb-8">
            <p className="text-sm font-semibold text-red-800 mb-1">
              ⚠️ Главная ошибка новичков — неправильная ставка
            </p>
            <p className="text-sm text-red-700 leading-relaxed">
              78% начинающих фрилансеров называют ставку «на глаз». Результат: либо работаешь в минус,
              либо клиент уходит к конкурентам. Правильная ставка считается за 30 секунд — на шаге 2.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-10">
            {STEPS.map((step) => (
              <div key={step.num} className={`border rounded-2xl p-6 ${step.color}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl flex-shrink-0">{step.emoji}</div>
                  <div>
                    <span className={`text-xs font-bold ${step.numColor} uppercase tracking-wide`}>
                      Шаг {step.num}
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 mt-0.5 leading-tight">
                      {step.title}
                    </h2>
                  </div>
                </div>
                {step.content}
              </div>
            ))}
          </div>

          {/* Calculator CTA */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white mb-8">
            <p className="text-xs font-semibold text-indigo-200 uppercase tracking-wide mb-1">
              Шаг 2 на практике
            </p>
            <h3 className="text-xl font-bold mb-2">
              Рассчитайте вашу первую ставку прямо сейчас
            </h3>
            <p className="text-indigo-100 text-sm mb-4">
              Бесплатный калькулятор учтёт налоги, отпуск, простои и вашу специальность.
              Не угадывайте — считайте точно. 30 секунд.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Timeline */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Реалистичный план на первый год
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TIMELINE.map((t) => (
                <div key={t.month} className={`border rounded-xl p-4 ${t.color}`}>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-0.5">{t.month}</p>
                  <p className="text-sm font-bold text-slate-800 mb-2">{t.label}</p>
                  <ul className="space-y-1">
                    {t.items.map((item) => (
                      <li key={item} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "С чего начать фриланс в 2026 году?",
                  a: "Начните с 6 шагов: определите специальность и целевой доход → рассчитайте минимальную ставку → оформите самозанятость (5 минут в приложении «Мой налог») → соберите 3 кейса в портфолио → найдите первых клиентов через биржи и личную сеть → создайте финансовую подушку на 3 месяца.",
                },
                {
                  q: "Сколько нужно накопить перед уходом на фриланс?",
                  a: "Оптимально — 3–6 месячных расходов. При расходах 50 000 ₽/мес нужна подушка 150 000–300 000 ₽. Лучшая стратегия: совмещать найм и фриланс первые 3–6 месяцев — пока доход от фриланса не достигнет 50–60% от зарплаты.",
                },
                {
                  q: "Можно ли начать фриланс без опыта?",
                  a: "Да. Сделайте 2–3 тестовых проекта: redesign чужого сайта, pet-проект на GitHub, статья. Возьмите 1–2 заказа со скидкой ради отзывов. Помогите знакомому бизнесу бесплатно или за символическую сумму. 3 кейса + 3 отзыва — достаточно для первых платных заказов.",
                },
                {
                  q: "Как не занизить ставку на старте?",
                  a: "Используйте калькулятор: он учитывает реальные оплачиваемые часы (не 160, а ~120/мес), налог НПД 6%, простои и отпуск. Новичок часто называет 500 ₽/ч, когда реальная минимальная ставка — 800–900 ₽/ч. Разница за год — 100–200 тысяч рублей.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="border border-slate-200 rounded-xl overflow-hidden group">
                  <summary className="px-5 py-4 cursor-pointer text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between">
                    {q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* Benchmark upsell */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
              Данные рынка Q1 2026
            </p>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Проверьте — не занижаете ли вы ставку по сравнению с рынком?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Бенчмарк: медианные ставки по 22 специальностям × 10 городам × 3 уровня опыта.
              Узнайте, где вы находитесь относительно рынка — до того, как назвать первую цену.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/benchmark"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Посмотреть ставки рынка →
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-amber-300 text-amber-800 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-100 transition-colors"
              >
                Рассчитать свою ставку
              </Link>
            </div>
          </div>

          {/* Related articles */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Читайте дальше</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/stati/samozanyatyj-vs-ip-frilancer",
                  tag: "Налоги",
                  tagColor: "bg-amber-100 text-amber-700",
                  title: "Самозанятый или ИП: что выгоднее в 2026",
                  desc: "Когда переходить на ИП и при каком доходе",
                },
                {
                  href: "/stati/pochemu-frilansery-zanizhayt-stavki",
                  tag: "Карьера",
                  tagColor: "bg-emerald-100 text-emerald-700",
                  title: "Почему фрилансеры занижают ставки",
                  desc: "5 психологических причин и как выйти из ловушки",
                },
                {
                  href: "/stati/skrytye-rashody-frilansera",
                  tag: "Финансы",
                  tagColor: "bg-red-100 text-red-700",
                  title: "Скрытые расходы фрилансера 2026",
                  desc: "Всё, что надо заложить в ставку — полный список",
                },
                {
                  href: "/stati/frilans-vs-naym-2026",
                  tag: "Аналитика",
                  tagColor: "bg-violet-100 text-violet-700",
                  title: "Фриланс vs найм: что выгоднее финансово?",
                  desc: "Честная математика с учётом всех расходов и налогов",
                },
              ].map(({ href, tag, tagColor, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor} mb-2 inline-block`}>
                    {tag}
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
                  <p className="text-xs text-slate-500">{desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer nav */}
          <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-100">
            <Link href="/stati" className="text-slate-500 hover:text-slate-700">
              ← Все статьи
            </Link>
            <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Калькулятор ставки →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
