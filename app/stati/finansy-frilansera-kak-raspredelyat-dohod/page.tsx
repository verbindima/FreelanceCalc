import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Финансы фрилансера: как распределять доход на налоги, подушку и жизнь",
  description:
    "Сколько откладывать на налоги, финансовую подушку и развитие — практический гид для самозанятых и ИП-фрилансеров 2026. Формула распределения дохода с примерами.",
  keywords: [
    "финансы фрилансера",
    "как распределять доход фрилансера",
    "сколько откладывать на налоги самозанятому",
    "финансовая подушка фрилансера",
    "бюджет фрилансера",
    "самозанятый как откладывать деньги",
    "финансовая грамотность фрилансера",
    "куда откладывать деньги фрилансеру",
    "нерегулярный доход как планировать",
    "финансы самозанятого 2026",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/finansy-frilansera-kak-raspredelyat-dohod" },
  openGraph: {
    title: "Финансы фрилансера: как распределять доход — формула 40-20-20-20",
    description:
      "Сколько откладывать на налоги, подушку и развитие. Практическая формула для фрилансеров с примерами расчёта.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/finansy-frilansera-kak-raspredelyat-dohod`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Финансы фрилансера: как распределять доход на налоги, подушку и жизнь",
  description:
    "Практическая формула распределения дохода фрилансера: налоги, финансовая подушка, операционные расходы, жизнь. Примеры для самозанятых и ИП.",
  url: `${BASE_URL}/stati/finansy-frilansera-kak-raspredelyat-dohod`,
  inLanguage: "ru",
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  publisher: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/stati/finansy-frilansera-kak-raspredelyat-dohod`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько откладывать на налоги самозанятому?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятому нужно откладывать 4–6% от каждого поступления: 4% если клиент — физлицо, 6% если юрлицо или ИП. На практике удобно откладывать 6–7% с любого платежа — тогда никогда не будет дефицита. Налог платится раз в месяц через приложение «Мой налог».",
      },
    },
    {
      "@type": "Question",
      name: "Какой должна быть финансовая подушка фрилансера?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Минимум — 3 месяца базовых расходов. Комфортно — 6 месяцев. При нерегулярном доходе фрилансера это важнее, чем для офисного сотрудника: простои, потеря клиента, болезнь могут обнулить доход на 1–2 месяца. Формула: ежемесячные базовые расходы × 6.",
      },
    },
    {
      "@type": "Question",
      name: "Как планировать бюджет при нерегулярном доходе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Считайте не от поступившей суммы, а от базового (минимального) дохода за последние 12 месяцев. Всё, что выше этой суммы — в накопления и резерв. Вводите себе «зарплату» раз в месяц с отдельного счёта, куда приходят все платежи от клиентов.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли фрилансеру отдельный счёт для клиентских денег?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, это критически важно. Открой отдельный рабочий счёт (или карту самозанятого), куда приходят все гонорары. С него — отдельно на налоги, отдельно на подушку, отдельно «зарплата» себе. Смешивать рабочий и личный счёт — главная ошибка новых фрилансеров.",
      },
    },
    {
      "@type": "Question",
      name: "Как посчитать, какую ставку нужно брать, чтобы хватало на жизнь?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Сложите: желаемый доход на руки + налоги + взносы + откладываемая подушка + операционные расходы. Разделите на реальные оплачиваемые часы (с учётом загрузки 60–70%). Калькулятор FreelanceCalc делает этот расчёт автоматически за 2 минуты.",
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
      name: "Финансы фрилансера",
      item: `${BASE_URL}/stati/finansy-frilansera-kak-raspredelyat-dohod`,
    },
  ],
};

const DISTRIBUTION = [
  {
    category: "Жизнь",
    emoji: "🏠",
    percent: "40%",
    color: "border-blue-200 bg-blue-50",
    badgeColor: "text-blue-700 bg-blue-100",
    description: "Аренда, еда, транспорт, коммуналка, базовые личные расходы",
    example: "При доходе 150 000 ₽ → 60 000 ₽/мес",
    tip: "Это ваша «зарплата» — переводите её себе раз в месяц фиксированной суммой, не привязанной к поступлениям",
  },
  {
    category: "Налоги",
    emoji: "🧾",
    percent: "7–15%",
    color: "border-red-200 bg-red-50",
    badgeColor: "text-red-700 bg-red-100",
    description: "НПД самозанятого (4–6%) или налог ИП (6–15%) плюс страховые взносы",
    example: "При доходе 150 000 ₽ → 9 000–22 500 ₽/мес",
    tip: "Откладывайте с каждого платежа сразу — не ждите конца месяца. Используйте отдельный «налоговый» счёт",
  },
  {
    category: "Финансовая подушка",
    emoji: "🛡️",
    percent: "20%",
    color: "border-green-200 bg-green-50",
    badgeColor: "text-green-700 bg-green-100",
    description: "Резерв на простои, больничные, непредвиденные расходы",
    example: "При доходе 150 000 ₽ → 30 000 ₽/мес (цель: 6 месяцев расходов)",
    tip: "После набора 6-месячной подушки направьте этот % на инвестиции или досрочные цели",
  },
  {
    category: "Операционные расходы",
    emoji: "🛠️",
    percent: "10%",
    color: "border-yellow-200 bg-yellow-50",
    badgeColor: "text-yellow-700 bg-yellow-100",
    description: "ПО, оборудование, самообразование, маркетинг, бухгалтерия",
    example: "При доходе 150 000 ₽ → 15 000 ₽/мес",
    tip: "Не экономьте на инструментах — дорогой Figma или Cursor часто окупается за один проект",
  },
  {
    category: "Развитие и инвестиции",
    emoji: "📈",
    percent: "15%",
    color: "border-purple-200 bg-purple-50",
    badgeColor: "text-purple-700 bg-purple-100",
    description: "Курсы, конференции, долгосрочные накопления, пенсионный фонд",
    example: "При доходе 150 000 ₽ → 22 500 ₽/мес",
    tip: "Даже 10 000 ₽/мес на ИИС за 10 лет дают ощутимый капитал. Начните сейчас",
  },
];

const MISTAKES = [
  {
    mistake: "Тратить всё, что пришло",
    consequence: "Налоговое уведомление на неожиданные 20 000+ ₽ в конце месяца",
    fix: "Автоматически откладывайте % с каждого поступления в тот же день",
  },
  {
    mistake: "Не иметь подушки",
    consequence: "Согласие на плохого клиента ради «хоть каких-то денег»",
    fix: "Минимальная цель — 3 месяца базовых расходов на отдельном счёте",
  },
  {
    mistake: "Считать поступления = доходом",
    consequence: "Завышенные ожидания и разочарование в конце квартала",
    fix: "Доход фрилансера = поступление − налоги − операционные расходы",
  },
  {
    mistake: "Не учитывать простои в ставке",
    consequence: "Фактический доход в 1.5–2 раза ниже ожидаемого",
    fix: "Используйте калькулятор со сниженной загрузкой (60–70%), не 100%",
  },
  {
    mistake: "Смешивать личный и рабочий счёт",
    consequence: "Невозможно понять, сколько реально заработал",
    fix: "Отдельная карта для клиентских платежей — это не советский бюджет, а базовая гигиена",
  },
];

export default function FinanceFrilancerPage() {
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

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="text-sm text-gray-500 flex items-center gap-2">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                FreelanceCalc
              </Link>
              <span>→</span>
              <Link href="/stati" className="hover:text-blue-600 transition-colors">
                Статьи
              </Link>
              <span>→</span>
              <span className="text-gray-700">Финансы фрилансера</span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              💰 Финансовая грамотность
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Финансы фрилансера: как распределять доход на налоги, подушку и жизнь
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Большинство фрилансеров допускают одну и ту же ошибку: тратят то, что пришло — а потом
              удивляются, куда делись деньги. Вот рабочая формула, которая решает эту проблему раз и навсегда.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>⏱️ 7 минут</span>
              <span>•</span>
              <span>📅 Март 2026</span>
              <span>•</span>
              <span>👁️ Актуально для НПД и ИП</span>
            </div>
          </header>

          {/* Key insight */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <div className="text-2xl mb-2">⚠️</div>
            <p className="text-amber-900 font-semibold text-lg mb-1">
              Офисный подход к деньгам убивает фрилансеров
            </p>
            <p className="text-amber-800">
              Офисный сотрудник получает зарплату — и может тратить почти всё. Фрилансер получает гонорар —
              и это{" "}
              <strong>не его деньги целиком</strong>. Часть ещё принадлежит налоговой, часть нужна на
              «нерабочие» месяцы, часть — на инструменты. Пока это не встроено в систему, финансы будут
              хаотичными.
            </p>
          </div>

          {/* Problem context */}
          <section className="prose prose-lg max-w-none mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему офисная логика не работает</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Офисный сотрудник с зарплатой 100 000 ₽ получает ровно 100 000 ₽ каждый месяц. Налоги удержаны
              работодателем, больничный оплачен, отпускные придут в июле. Финансовое планирование сводится к
              одному вопросу: как потратить эту сумму.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Фрилансер с оборотом 150 000 ₽ живёт в другой реальности:
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-500 mt-1">✗</span>
                Январь — пришло 200 000 ₽, февраль — 80 000 ₽, март — 170 000 ₽
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-500 mt-1">✗</span>
                Налог за прошлый месяц нужно заплатить до 28-го числа текущего
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-500 mt-1">✗</span>
                В августе — отпуск: доход 0, расходы прежние
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-red-500 mt-1">✗</span>
                Заболел на 2 недели — деньги не капают, а аренду всё равно платить
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              При таком входящем потоке спонтанные траты — прямой путь к кассовому разрыву. Нужна система.
            </p>
          </section>

          {/* Distribution formula */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Формула распределения: 40-7-20-10-15 (→ 8 счетов?)
            </h2>
            <p className="text-gray-600 mb-6">
              Вот как выглядит рабочая схема распределения для фрилансера со стабильным средним доходом
              100–300 000 ₽/мес. Пропорции — ориентировочные, под вас их стоит откалибровать.
            </p>
            <div className="space-y-4">
              {DISTRIBUTION.map((item) => (
                <div
                  key={item.category}
                  className={`border rounded-xl p-5 ${item.color}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <h3 className="text-lg font-bold text-gray-900">{item.category}</h3>
                    </div>
                    <span
                      className={`text-base font-bold px-3 py-1 rounded-full ${item.badgeColor}`}
                    >
                      {item.percent}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3 text-sm">
                    <div className="bg-white/60 rounded-lg px-3 py-2 flex-1">
                      <span className="font-medium text-gray-600">Пример: </span>
                      <span className="text-gray-700">{item.example}</span>
                    </div>
                    <div className="bg-white/60 rounded-lg px-3 py-2 flex-1">
                      <span className="font-medium text-gray-600">Совет: </span>
                      <span className="text-gray-700">{item.tip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practical setup */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Практическая настройка: 3 счёта вместо одного
            </h2>
            <p className="text-gray-600 mb-6">
              Не нужно 8 разных счетов и сложных таблиц. Достаточно трёх:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="text-2xl mb-2">📥</div>
                <h3 className="font-bold text-gray-900 mb-1">Рабочий счёт</h3>
                <p className="text-sm text-gray-600">
                  Все платежи от клиентов — сюда. Это буфер. С него вы автоматически распределяете деньги,
                  но лично не тратите.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="text-2xl mb-2">🧾</div>
                <h3 className="font-bold text-gray-900 mb-1">Налоговый счёт</h3>
                <p className="text-sm text-gray-600">
                  6–15% с каждого поступления — сразу сюда. Это не ваши деньги. Настройте автоперевод
                  в тот же день, что пришёл платёж.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="text-2xl mb-2">💳</div>
                <h3 className="font-bold text-gray-900 mb-1">Личный счёт (зарплата)</h3>
                <p className="text-sm text-gray-600">
                  Раз в месяц переводите себе фиксированную сумму — вашу «зарплату». Именно с этого
                  счёта живёте.
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
              <strong>Остаток на рабочем счёте</strong> после налогов и «зарплаты» — это подушка безопасности
              + операционные расходы + развитие. Делите по своим пропорциям или просто накапливайте.
            </div>
          </section>

          {/* Tax specifics */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Налоги: сколько конкретно откладывать</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">👤</span>
                  <h3 className="font-bold text-gray-900">Самозанятый (НПД)</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Физлица-клиенты</span>
                    <span className="font-bold text-red-600">4%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Юрлица и ИП</span>
                    <span className="font-bold text-red-600">6%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Рекомендую откладывать</span>
                    <span className="font-bold text-blue-600">7% с любого</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  7% = небольшой запас на случай, если клиент окажется юрлицом. Лимит дохода — 2,4 млн ₽/год.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🏢</span>
                  <h3 className="font-bold text-gray-900">ИП на УСН 6%</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Налог УСН</span>
                    <span className="font-bold text-red-600">6%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Взносы ОМС + ОПС</span>
                    <span className="font-bold text-red-600">~49 500 ₽/год</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Рекомендую откладывать</span>
                    <span className="font-bold text-blue-600">12–15%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  12–15% покрывает и налог, и страховые взносы, которые нужно платить независимо от дохода.
                </p>
              </div>
            </div>
          </section>

          {/* Safety cushion */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Финансовая подушка: сколько и где хранить
            </h2>
            <p className="text-gray-600 mb-6">
              Для фрилансера стандартная рекомендация «3 месяца расходов» — слишком мало. Простой у
              нового фрилансера может длиться 1–3 месяца. У опытного — тоже случается.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-1">3 мес</div>
                <div className="text-sm font-medium text-gray-700">Минимум</div>
                <div className="text-xs text-gray-500 mt-1">Только для стартовавших</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">6 мес</div>
                <div className="text-sm font-medium text-gray-700">Комфортно</div>
                <div className="text-xs text-gray-500 mt-1">Рекомендуемая цель</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">12 мес</div>
                <div className="text-sm font-medium text-gray-700">Свобода</div>
                <div className="text-xs text-gray-500 mt-1">Можно выбирать любых клиентов</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Где хранить подушку:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✅ <strong>Накопительный счёт в надёжном банке</strong> — ставка 14–18% годовых, вывести за 1 день</li>
                <li>✅ <strong>ИИС (индивидуальный инвестиционный счёт)</strong> — налоговый вычет + доходность</li>
                <li>❌ <strong>Акции и крипта</strong> — это не подушка, это инвестиции. Подушка должна быть доступна мгновенно</li>
                <li>❌ <strong>Под матрасом</strong> — инфляция съедает 7–10% в год</li>
              </ul>
            </div>
          </section>

          {/* Mistakes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5 главных ошибок в финансах фрилансера</h2>
            <div className="space-y-3">
              {MISTAKES.map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 mb-1">
                        <span className="text-red-500">Ошибка:</span> {item.mistake}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Последствие:</span> {item.consequence}
                      </p>
                      <p className="text-sm text-green-700">
                        <span className="font-medium">Решение:</span> {item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA — calculator */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-10">
            <h2 className="text-2xl font-bold mb-3">
              Сначала проверьте: а ваша ставка достаточная?
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Вся система распределения не имеет смысла, если ставка изначально низкая. Если вы берёте
              1 000 ₽/час при загрузке 70% — откладывать 20% на подушку просто не получится.
            </p>
            <p className="text-blue-100 mb-6">
              Калькулятор FreelanceCalc рассчитает нужную ставку от желаемого дохода — с учётом налогов,
              загрузки и отпуска. Займёт 2 минуты.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Рассчитать свою ставку →
            </Link>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько откладывать на налоги самозанятому?",
                  a: "Откладывайте 7% с каждого поступления — независимо от того, физлицо или юрлицо клиент. Это покроет 4% с физлиц и 6% с юрлиц, плюс небольшой запас. Налог платится раз в месяц через «Мой налог» до 28-го числа.",
                },
                {
                  q: "Какой должна быть финансовая подушка фрилансера?",
                  a: "Минимум — 3 месяца базовых расходов (аренда + еда + транспорт). Комфортный уровень — 6 месяцев. После набора 6-месячной подушки направляйте этот % на инвестиции или досрочное закрытие целей.",
                },
                {
                  q: "Как планировать бюджет при нерегулярном доходе?",
                  a: "Определите свой «базовый минимум» — минимальный доход за последние 12 месяцев. Платите себе «зарплату» именно от этой суммы раз в месяц. Всё, что выше — в резервы и накопления. Это стабилизирует психологическое ощущение денег.",
                },
                {
                  q: "Нужен ли отдельный счёт для клиентских денег?",
                  a: "Обязательно. Отдельная карта для входящих платежей — это минимальная финансовая гигиена. Без неё невозможно понять, сколько реально заработано, и легко случайно потратить деньги, которые должны уйти на налоги.",
                },
                {
                  q: "Как понять, правильная ли у меня ставка?",
                  a: "Посчитайте от желаемого: сложите нужный доход на руки + 7–15% на налоги + 20% подушка + 10% расходы. Разделите на реальные оплачиваемые часы (с загрузкой 60–70%). Если текущая ставка ниже этой цифры — значит, вы дотируете клиентов из своего кармана.",
                },
              ].map((item, i) => (
                <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Связанные статьи</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/stati/skrytye-rashody-frilansera"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <p className="text-sm text-gray-500 mb-1">→ Читать далее</p>
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  Скрытые расходы фрилансера 2026: считаем реальную стоимость часа
                </p>
              </Link>
              <Link
                href="/stati/samozanyatyj-vs-ip-frilancer"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <p className="text-sm text-gray-500 mb-1">→ Читать далее</p>
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  Самозанятый или ИП: что выгоднее для фрилансера в 2026 году
                </p>
              </Link>
              <Link
                href="/stati/izmeneniya-samozanyatyh-2026"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <p className="text-sm text-gray-500 mb-1">→ Читать далее</p>
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  Изменения для самозанятых в 2026 году: всё что нужно знать
                </p>
              </Link>
              <Link
                href="/instrumenty/kalkulator-naloga-samozanyatogo"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <p className="text-sm text-gray-500 mb-1">→ Инструмент</p>
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  Калькулятор налога самозанятого: посчитайте свой НПД
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
