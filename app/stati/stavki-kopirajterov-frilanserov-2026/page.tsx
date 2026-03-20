import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Ставки копирайтеров-фрилансеров 2026: таблица по 8 специализациям",
  description:
    "Сколько берёт копирайтер-фрилансер в России в 2026 году? Медианные почасовые ставки для копирайтера, контент-менеджера, SEO-копирайтера, технического писателя, редактора, SMM, email-маркетолога. Реальные данные + калькулятор.",
  keywords: [
    "ставки копирайтеров фрилансеров 2026",
    "сколько берёт копирайтер фрилансер",
    "почасовая ставка копирайтера",
    "ставка контент-менеджера фрилансер",
    "ставка SEO-копирайтера",
    "сколько зарабатывает копирайтер фрилансер",
    "ставка технического писателя",
    "ставка редактора фрилансер",
    "ставки контент специалистов фрилансеров",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/stati/stavki-kopirajterov-frilanserov-2026" },
  openGraph: {
    title: "Ставки копирайтеров-фрилансеров 2026: таблица по 8 специализациям",
    description:
      "Медианные почасовые ставки для копирайтеров, контент-менеджеров, SEO-писателей, редакторов и других контент-специалистов на фрилансе. Актуальные данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/stati/stavki-kopirajterov-frilanserov-2026`,
    siteName: "FreelanceCalc",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/stati/stavki-kopirajterov-frilanserov-2026#article`,
      headline:
        "Ставки копирайтеров-фрилансеров в России 2026: таблица по 8 специализациям",
      description:
        "Медианные почасовые ставки для 8 контент-специализаций на фрилансе в России. Реальные данные 2026 года.",
      author: { "@type": "Organization", name: "FreelanceCalc", url: BASE_URL },
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
        "@id": `${BASE_URL}/stati/stavki-kopirajterov-frilanserov-2026`,
      },
      inLanguage: "ru",
      about: [
        { "@type": "Thing", name: "Фриланс-копирайтинг" },
        { "@type": "Thing", name: "Почасовая ставка копирайтера" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько берёт копирайтер-фрилансер в России в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В зависимости от специализации: общий копирайтер — 500–1 500 ₽/час, SEO-копирайтер — 600–1 500 ₽/час, технический писатель — 800–2 500 ₽/час, UX-писатель — 1 000–3 000 ₽/час, редактор — 700–2 000 ₽/час. Узкая специализация и опыт работы с брендами существенно увеличивают ставку.",
          },
        },
        {
          "@type": "Question",
          name: "Почему копирайтер на фрилансе берёт больше, чем в штате?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Фрилансер сам оплачивает налоги (4–6% НПД), простои между проектами, отпуск и оборудование. Кроме того, не все заказанные часы оплачиваются — реальная загрузка обычно 60–80%. Все эти расходы закладываются в ставку.",
          },
        },
        {
          "@type": "Question",
          name: "Как рассчитать свою ставку копирайтеру-фрилансеру?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Используйте формулу: ставка = (желаемый доход + налоги + простои) / (рабочие часы × коэффициент загрузки). Бесплатный калькулятор на FreelanceCalc делает этот расчёт автоматически за 30 секунд.",
          },
        },
        {
          "@type": "Question",
          name: "Какая ставка у технического писателя на фрилансе?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Технические писатели — одна из самых высокооплачиваемых контент-специализаций: медиана 800–2 500 ₽/час, доход от 80 000 до 270 000 ₽/месяц. Спрос стабильно высокий в IT-компаниях.",
          },
        },
      ],
    },
  ],
};

const contentSpecialties = [
  {
    name: "Копирайтер",
    slug: "kopirajtер",
    median: "500–1 500 ₽/час",
    monthlyIncome: "от 50 000 до 165 000 ₽",
    demand: "Очень высокий",
    notes: "Продающие тексты, лендинги, рекламные объявления. Самая массовая ниша.",
  },
  {
    name: "SEO-копирайтер",
    slug: "seo-kopirajtеr",
    median: "600–1 500 ₽/час",
    monthlyIncome: "от 60 000 до 165 000 ₽",
    demand: "Высокий",
    notes: "Статьи под поиск, оптимизация текстов. Стабильный спрос от агентств.",
  },
  {
    name: "Контент-менеджер",
    slug: "kontent-menedzher",
    median: "600–1 200 ₽/час",
    monthlyIncome: "от 60 000 до 130 000 ₽",
    demand: "Высокий",
    notes: "Ведение блогов, соцсетей, новостных разделов. Часто проектная работа.",
  },
  {
    name: "Редактор",
    slug: "redaktor",
    median: "700–2 000 ₽/час",
    monthlyIncome: "от 70 000 до 220 000 ₽",
    demand: "Средний",
    notes: "Вычитка, правка, структурирование текстов. Высокий порог входа.",
  },
  {
    name: "Технический писатель",
    slug: "tekhnicheskij-pisatel",
    median: "800–2 500 ₽/час",
    monthlyIncome: "от 80 000 до 270 000 ₽",
    demand: "Высокий",
    notes: "Документация, инструкции, API-описания. Стабильный спрос в IT.",
  },
  {
    name: "SMM-специалист (контент)",
    slug: "smm-specialist",
    median: "700–1 800 ₽/час",
    monthlyIncome: "от 70 000 до 200 000 ₽",
    demand: "Очень высокий",
    notes: "Тексты для ВКонтакте, Telegram, Instagram. Часто работа на постоянной основе.",
  },
  {
    name: "Email-маркетолог",
    slug: "email-marketolog",
    median: "800–2 200 ₽/час",
    monthlyIncome: "от 80 000 до 240 000 ₽",
    demand: "Средний",
    notes: "Рассылки, цепочки писем, A/B-тесты. Ценится опыт с e-commerce.",
  },
  {
    name: "UX-писатель",
    slug: "ux-pisatel",
    median: "1 000–3 000 ₽/час",
    monthlyIncome: "от 100 000 до 330 000 ₽",
    demand: "Растущий",
    notes: "Тексты интерфейсов, онбординг, микрокопи. Быстрорастущая специализация.",
  },
];

const demandColor = (demand: string) => {
  if (demand === "Очень высокий") return "bg-green-100 text-green-800";
  if (demand === "Высокий") return "bg-blue-100 text-blue-800";
  if (demand === "Растущий") return "bg-purple-100 text-purple-800";
  return "bg-gray-100 text-gray-700";
};

export default function CopywriterRatesArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
              FreelanceCalc
            </Link>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/stati" className="hover:text-blue-600">Статьи</Link></li>
              <li>/</li>
              <li className="text-gray-700">Ставки копирайтеров-фрилансеров 2026</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ставки копирайтеров-фрилансеров в России 2026: таблица по 8 специализациям
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>📅 Обновлено: март 2026</span>
            <span>⏱ 7 минут чтения</span>
            <span>✍️ Копирайтер, SEO, Контент, Редактор, UX</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Копирайтинг — одна из самых востребованных фриланс-специализаций в России. Но «сколько
            берёт копирайтер» — размытый вопрос: ставка общего копирайтера и UX-писателя могут
            отличаться в 6 раз. Ниже — актуальные медианные данные по 8 контент-специализациям
            с объяснением, что влияет на ставку.
          </p>

          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою ставку за 30 секунд</p>
            <p className="text-blue-700 text-sm mb-4">
              Введите желаемый доход — калькулятор учтёт налоги, загрузку и отпуск и покажет,
              сколько нужно брать за час именно вам.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=article&utm_campaign=copywriter-rates-2026"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать ставку бесплатно →
            </Link>
          </div>

          {/* Main table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Медианные ставки копирайтеров-фрилансеров в 2026 году
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Специализация</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Медиана ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход/месяц</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Спрос</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700">Калькулятор</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {contentSpecialties.map((spec) => (
                    <tr key={spec.slug} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{spec.name}</td>
                      <td className="px-4 py-3 text-center font-semibold text-green-700">{spec.median}</td>
                      <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell text-xs">{spec.monthlyIncome}</td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${demandColor(spec.demand)}`}>
                          {spec.demand}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Link
                          href={`/?utm_source=stati&utm_medium=table&utm_campaign=copywriter-rates-2026`}
                          className="text-xs text-blue-600 hover:underline"
                        >
                          Рассчитать →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Медианные данные по открытым источникам: FL.ru, Kwork, Habr Карьера, Telegram-каналы по копирайтингу.
              Март 2026.
            </p>
          </section>

          {/* What affects rates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Что влияет на ставку копирайтера
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3">📈 Повышают ставку</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Узкая специализация (тех. тексты, UX, медицина, финансы)</li>
                  <li>• Портфолио с известными брендами</li>
                  <li>• Работа с английским языком</li>
                  <li>• Понимание SEO и аналитики</li>
                  <li>• Опыт работы в штате крупных компаний</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-3">📉 Снижают ставку</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Работа в перегретых нишах (общий инфоконтент)</li>
                  <li>• Конкуренция с ИИ-генерацией текстов</li>
                  <li>• Отсутствие специализации и кейсов</li>
                  <li>• Работа только с биржами (Kwork, FL.ru)</li>
                  <li>• Нет понимания воронок продаж</li>
                </ul>
              </div>
            </div>
          </section>

          {/* About AI competition */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Копирайтинг vs ИИ: что происходит со ставками в 2026
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <p className="text-amber-900 text-sm leading-relaxed">
                <strong>Главный тренд 2026:</strong> массовый SEO-контент заметно подешевел из-за
                ChatGPT и аналогов. Но специализированные ниши — UX-тексты, технические инструкции,
                брендинговые материалы — наоборот, выросли в цене. Компании платят больше за тех,
                кто умеет работать с ИИ-инструментами и при этом сохраняет человеческий голос бренда.
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Практический вывод: если вы генерируете безликий SEO-контент — давление на ставку
              будет расти. Если специализируетесь на сложных форматах (исследования, интервью,
              UX-микрокопи, технические тексты) — ставки стабильны или растут.
            </p>
          </section>

          {/* How to calculate */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Как рассчитать ставку копирайтеру: формула
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Медианные ставки — ориентир, а не ваша личная цена. Ваша ставка зависит от того,
              какой доход вам нужен. Базовая формула:
            </p>
            <div className="bg-gray-900 text-gray-100 rounded-xl p-5 mb-4 font-mono text-sm">
              <p>Ставка/час = (Желаемый доход + Налоги) /</p>
              <p className="ml-16">(Рабочих часов в год × Загрузка)</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
              <p className="text-sm text-gray-600 mb-3"><strong>Пример расчёта:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Желаемый доход: 120 000 ₽/месяц</li>
                <li>• Налог самозанятого (6% от дохода с юрлиц): +7 700 ₽</li>
                <li>• Рабочих часов в год (8 ч × 5 дн × 48 нед): 1 920 ч</li>
                <li>• Загрузка 70%: 1 344 оплачиваемых часа</li>
                <li>• <strong>Ставка: 127 700 × 12 / 1 344 ≈ 1 140 ₽/час</strong></li>
              </ul>
            </div>
            <Link
              href="/?utm_source=stati&utm_medium=article-calc&utm_campaign=copywriter-rates-2026"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать свою ставку автоматически →
            </Link>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько берёт копирайтер-фрилансер в 2026 году?",
                  a: "В зависимости от специализации: общий копирайтер — 500–1 500 ₽/час, SEO-копирайтер — 600–1 500 ₽/час, технический писатель — 800–2 500 ₽/час, UX-писатель — 1 000–3 000 ₽/час. Узкая специализация и опыт работы с известными брендами существенно увеличивают ставку.",
                },
                {
                  q: "Стоит ли оформлять самозанятость копирайтеру?",
                  a: "Да. Самозанятость (НПД) — самый простой и выгодный режим для фрилансеров. Налог 4% от физлиц или 6% от юрлиц, без отчётности и страховых взносов. Большинство крупных заказчиков требуют официальное оформление.",
                },
                {
                  q: "Как копирайтеру увеличить ставку?",
                  a: "Три пути: 1) Сузить специализацию (тех. тексты, медицина, финансы — платят вдвое больше). 2) Перейти к прямым клиентам от бирж. 3) Добавить сопутствующие навыки: SEO, аналитику, редактуру, стратегию контента.",
                },
                {
                  q: "На каких биржах ищут копирайтеров в России?",
                  a: "FL.ru — самая крупная для разовых проектов. Kwork — для пакетных услуг. Авито Услуги — хорошо работает для региональных клиентов. Telegram-каналы (@content_jobs, @freelance_ru) — для более серьёзных проектов.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Похожие статьи</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  href: "/stati/stavki-marketologov-frilanserov-2026",
                  title: "Ставки маркетологов-фрилансеров 2026",
                  desc: "Медианные ставки для маркетологов, таргетологов, SMM.",
                },
                {
                  href: "/stati/srednyaya-stavka-frilansera-2026",
                  title: "Средняя ставка фрилансера 2026",
                  desc: "Сводная таблица по 22 специализациям.",
                },
                {
                  href: "/stati/kak-povysit-stavku-frilansera",
                  title: "Как повысить ставку фрилансера",
                  desc: "7 проверенных способов увеличить доход.",
                },
                {
                  href: "/stati/stavka-samozanyatogo-2026",
                  title: "Ставка самозанятого 2026",
                  desc: "Как учесть налог НПД при расчёте ставки.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <p className="font-semibold text-gray-900 group-hover:text-blue-700 mb-1 text-sm">
                    {link.title}
                  </p>
                  <p className="text-gray-500 text-xs">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Рассчитайте свою ставку прямо сейчас</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Введите желаемый доход, выберите налоговый режим — и за 30 секунд получите
              свою реальную почасовую ставку с учётом всех расходов.
            </p>
            <Link
              href="/?utm_source=stati&utm_medium=article-bottom&utm_campaign=copywriter-rates-2026"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Открыть калькулятор →
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
