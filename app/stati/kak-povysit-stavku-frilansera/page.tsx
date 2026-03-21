import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";
const SLUG = "kak-povysit-stavku-frilansera";

export const metadata: Metadata = {
  title: "Как повысить ставку фрилансера: 7 проверенных способов в 2026",
  description:
    "Когда и как поднять цену клиентам, не потеряв их. Чёткий алгоритм с цифрами: как узнать рыночную ставку, как аргументировать рост цены и когда пора двигаться вверх.",
  keywords: [
    "как повысить ставку фрилансера",
    "как поднять чек фрилансеру",
    "как увеличить стоимость услуг фрилансеру",
    "повысить оплату фриланс",
    "как просить повышения оплаты фрилансер",
    "рост ставки фрилансера",
    "как поднять цену клиентам фриланс",
    "увеличить доход фрилансера 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/stati/${SLUG}` },
  openGraph: {
    title: "Как повысить ставку фрилансера: 7 проверенных способов",
    description:
      "Алгоритм повышения цены: когда просить, как аргументировать, сколько добавлять. С рыночными данными и примерами писем клиентам.",
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
      headline: "Как повысить ставку фрилансера: 7 проверенных способов в 2026",
      description:
        "Когда и как поднять цену клиентам, не потеряв их. Алгоритм с цифрами: рыночный бенчмарк, аргументация, сроки.",
      inLanguage: "ru",
      url: `${BASE_URL}/stati/${SLUG}`,
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
          { "@type": "ListItem", position: 2, name: "Статьи", item: `${BASE_URL}/stati` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Как повысить ставку фрилансера",
            item: `${BASE_URL}/stati/${SLUG}`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Как часто фрилансеру нужно повышать ставку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Оптимально — раз в 6–12 месяцев или после значимого проекта в портфолио. Если 80%+ потенциальных клиентов соглашаются без торга — вы уже занижаете цену.",
          },
        },
        {
          "@type": "Question",
          name: "На сколько можно поднять ставку за раз?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Новым клиентам — на любую сумму, ориентируйтесь на рынок. Постоянным клиентам комфортно воспринимается рост до 15–20% с предупреждением за 3–4 недели.",
          },
        },
        {
          "@type": "Question",
          name: "Как узнать рыночную ставку для своей специальности?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте калькулятор FreelanceCalc — он показывает медианные ставки по 22 специальностям и 16 городам России. Также смотрите данные с hh.ru, Хабр Карьера, FL.ru.",
          },
        },
      ],
    },
  ],
};

const SIGNALS = [
  {
    emoji: "🟢",
    title: "Клиенты соглашаются без торга",
    detail: "Если 80%+ говорят «да» без обсуждения цены — вы ниже рынка. Спрос превышает вашу оценку себя.",
  },
  {
    emoji: "🟢",
    title: "Очередь из заказов",
    detail: "Загрузка > 80% две недели подряд — пора поднять цену и отсечь менее выгодные проекты.",
  },
  {
    emoji: "🟢",
    title: "Появились крутые кейсы",
    detail: "Новый проект с крупным брендом, публикация на Хабре, выступление — это рост ценности.",
  },
  {
    emoji: "🟢",
    title: "Освоили новый дорогой стек",
    detail: "Изучили Rust, Kubernetes, GenAI — рынок платит за это на 30–60% больше.",
  },
  {
    emoji: "🔴",
    title: "Прошёл год без пересмотра",
    detail: "Инфляция 7–9% в год незаметно съедает реальный доход. Ставка — 100 000 ₽/мес год назад = 91 000 ₽ сегодня.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Проверьте рынок — цифры, не ощущения",
    body: (
      <>
        <p className="text-gray-600 leading-relaxed mb-3">
          Прежде чем называть новую цену, убедитесь, что она обоснована. Сравните свою ставку
          с медианными данными по вашей специальности и городу.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          🧮 Рассчитать рыночную ставку →
        </Link>
        <p className="text-sm text-gray-500 mt-2">
          Калькулятор учитывает налоги, загрузку и отпуск — показывает реальную цифру, а не мечту.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Двухуровневая стратегия: новые vs. старые",
    body: (
      <p className="text-gray-600 leading-relaxed">
        <strong>Новым клиентам</strong> — сразу называйте целевую ставку. Никаких оговорок вроде
        «обычно беру меньше». Старая цена нигде не зафиксирована.{" "}
        <strong>Постоянным клиентам</strong> — предупредите за 3–4 недели, объясните причину (рост
        рынка, новый стек, загрузка). Рост до 20% воспринимается нормально, если вы ценны.
      </p>
    ),
  },
  {
    num: "03",
    title: "Письмо клиенту: шаблон без неловкости",
    body: (
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 font-mono text-sm text-gray-700 leading-relaxed">
        <p>
          Привет [Имя],
        </p>
        <br />
        <p>
          С [дата] пересматриваю ставки — рынок вырос, появились новые проекты и опыт.
          Моя новая ставка — [X] ₽/ч (была [Y] ₽/ч).
        </p>
        <br />
        <p>
          Наши текущие проекты завершу по старой цене. Новые задачи — уже по новой.
          Если неудобно — обсудим, как продолжить сотрудничество.
        </p>
        <br />
        <p>Спасибо за работу вместе 🙏</p>
      </div>
    ),
  },
  {
    num: "04",
    title: "Повышайте портфолио, а не просто цену",
    body: (
      <p className="text-gray-600 leading-relaxed">
        Ставка без роста ценности — риск. Каждый раз, поднимая цену, добавляйте что-то
        ощутимое: новый кейс, ускорили сдачу, взяли ответственность за результат, а не
        только за работу. Клиент должен видеть, за что он платит больше.
      </p>
    ),
  },
  {
    num: "05",
    title: "Нишуйтесь — это самый быстрый рост",
    body: (
      <p className="text-gray-600 leading-relaxed">
        Универсальный разработчик берёт 1 500 ₽/ч. Разработчик на Elixir для fintech — 4 000 ₽/ч.
        Узкая специализация сокращает конкуренцию и даёт обоснование премии. Выберите 1–2 нишу
        (индустрия + технология) и точите туда портфолио.
      </p>
    ),
  },
  {
    num: "06",
    title: "Правило 80/20 для отсева дешёвых клиентов",
    body: (
      <p className="text-gray-600 leading-relaxed">
        Поднимите ставку так, чтобы 20% текущих клиентов ушли. Это высвобождает время для
        лучших. Страшно? Считайте в деньгах: потеря 2 клиентов по 50 000 ₽ и замена их
        одним клиентом по 120 000 ₽ — это рост дохода на 20% при меньшей нагрузке.
      </p>
    ),
  },
  {
    num: "07",
    title: "Проверьте ставку через 3 месяца",
    body: (
      <p className="text-gray-600 leading-relaxed">
        После повышения дайте рынку 2–3 месяца отреагировать. Если конверсия в сделку не
        упала ниже 50% — можно поднять ещё. Ставка — не константа, это инструмент управления
        загрузкой и доходом.
      </p>
    ),
  },
];

const MISTAKES = [
  { icon: "❌", text: "Извиняться за новую цену («понимаю, что дорого...»)" },
  { icon: "❌", text: "Поднимать ставку в середине проекта без договорённостей" },
  { icon: "❌", text: "Давать скидку новым клиентам «для старта» — потом сложно поднять" },
  { icon: "❌", text: "Ориентироваться на биржи (FL.ru, Kwork) — там демпинг, не рынок" },
  { icon: "❌", text: "Повышать сразу на 100%+ без обоснования — даже если вы выросли" },
];

export default function HowToRaiseRatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
            <Link href="/" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              FreelanceCalc
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/stati" className="text-gray-500 text-sm hover:text-gray-700">
              Статьи
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 text-sm">Как повысить ставку</span>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">

          {/* Hero */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              📈 Доход фрилансера
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Как повысить ставку фрилансера: 7 шагов без потери клиентов
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Большинство фрилансеров занижают себя на 20–40%. Не потому что плохо работают,
              а потому что не знают рынок и боятся ответа «дорого». Вот алгоритм, который работает
              — с цифрами, шаблонами писем и конкретными триггерами.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Март 2026</span>
              <span>·</span>
              <span>7 мин. чтения</span>
              <span>·</span>
              <span>FreelanceCalc</span>
            </div>
          </div>

          {/* Key stat banner */}
          <div className="bg-blue-600 text-white rounded-2xl p-6 mb-10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold">41%</div>
                <div className="text-blue-100 text-xs mt-1">фрилансеров не пересматривали ставку больше года</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">+23%</div>
                <div className="text-blue-100 text-xs mt-1">средний рост ставки после пересмотра</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">7–9%</div>
                <div className="text-blue-100 text-xs mt-1">съедает инфляция за год без роста ставки</div>
              </div>
            </div>
          </div>

          {/* When to raise section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5 сигналов: пора поднимать цену прямо сейчас
            </h2>
            <div className="space-y-3">
              {SIGNALS.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-xl border border-gray-200 p-4 flex gap-3"
                >
                  <span className="text-xl shrink-0">{s.emoji}</span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{s.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7 steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              7 шагов для роста ставки
            </h2>
            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                    {step.body}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PDF upsell banner */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="text-4xl shrink-0">📊</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Рыночный бенчмарк: медианные ставки по специальностям
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PDF с медианными ставками по 22 специальностям и 16 городам России.
                  Готовый аргумент для клиента: «По рынку X–Y ₽/ч, я прошу Z».
                  Обновляется ежеквартально.
                </p>
              </div>
              <div className="shrink-0 text-center">
                <Link
                  href="/stavka/frontend-razrabotchik/moskva#pdf"
                  className="inline-block bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors"
                >
                  Купить PDF — 249 ₽
                </Link>
                <div className="text-xs text-gray-400 mt-1">Одноразовая покупка</div>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5 ошибок при повышении ставки
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {MISTAKES.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-3 p-4 ${i < MISTAKES.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <span className="text-lg shrink-0">{m.icon}</span>
                  <span className="text-gray-700 text-sm">{m.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Как часто нужно пересматривать ставку?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Минимум раз в год — просто чтобы компенсировать инфляцию. Идеально — каждые
                  6 месяцев или после значимого события в карьере. Привяжите к «ценовому аудиту»:
                  раз в полгода смотрите на свою загрузку, конверсию и рыночные данные.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Клиент спрашивает «почему так дорого» — что отвечать?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Не объясняйте, не оправдывайтесь. Скажите: «Это моя ставка для таких проектов».
                  Если хочется обосновать — покажите рыночные данные: «По рынку для [специальность]
                  в [город] — X–Y ₽/ч, я прошу Z». Цифры снимают субъективность.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Что если клиент уйдёт после повышения?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Это нормально. Если клиент уходит из-за роста на 15–20% — он не ценил вашу
                  работу, а только цену. Освободившееся время займёт лучший клиент — или вы
                  сохраните прежний доход, работая меньше часов.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Узнайте свою целевую ставку прямо сейчас
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Введите желаемый доход — калькулятор покажет, сколько брать за час с учётом налогов
              и реальной загрузки.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              🧮 Открыть калькулятор ставки
            </Link>
          </section>

          {/* Related articles */}
          <nav className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Читайте также
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { href: "/stati/srednyaya-stavka-frilansera-2026", label: "Средние ставки по 22 специальностям — таблица 2026" },
                { href: "/stati/kak-raschitat-stavku-frilansera", label: "Как рассчитать часовую ставку фрилансера" },
                { href: "/stati/stavka-samozanyatogo-2026", label: "Ставка самозанятого: налоги и расчёты" },
                { href: "/rukovodstvo", label: "Полное руководство по ценообразованию" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  <span className="text-gray-400">→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white mt-12">
          <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <Link href="/" className="font-semibold text-blue-600 hover:text-blue-700">
              FreelanceCalc
            </Link>
            <div className="flex gap-4">
              <Link href="/stati" className="hover:text-gray-700">Статьи</Link>
              <Link href="/stavka" className="hover:text-gray-700">По специальностям</Link>
              <Link href="/goroda" className="hover:text-gray-700">По городам</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
