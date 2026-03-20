import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc-one.vercel.app";

export const metadata: Metadata = {
  title: "Как рассчитать ставку фрилансера: полное руководство 2026",
  description:
    "Пошаговое руководство: как посчитать справедливую часовую ставку фрилансера с учётом налогов, отпуска и реальной загрузки. Формулы, примеры и бесплатный калькулятор.",
  keywords: [
    "как рассчитать ставку фрилансера",
    "ставка фрилансера расчёт",
    "сколько брать за час работы",
    "как посчитать часовую ставку",
    "расчёт ставки самозанятого",
    "фриланс ставка формула",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/rukovodstvo" },
  openGraph: {
    title: "Как рассчитать ставку фрилансера: полное руководство 2026",
    description:
      "Пошаговое руководство: формулы, примеры и бесплатный калькулятор. Учёт налогов, отпуска и реальной загрузки.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/rukovodstvo`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/rukovodstvo#article`,
      "headline": "Как рассчитать ставку фрилансера: полное руководство 2026",
      "description":
        "Пошаговое руководство по расчёту часовой и дневной ставки фрилансера с учётом налогов, отпуска и коэффициента загрузки.",
      "inLanguage": "ru",
      "url": `${BASE_URL}/rukovodstvo`,
      "datePublished": "2026-03-20",
      "dateModified": "2026-03-20",
      "author": { "@type": "Organization", "name": "FreelanceCalc" },
      "publisher": {
        "@type": "Organization",
        "name": "FreelanceCalc",
        "url": BASE_URL,
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "FreelanceCalc", "item": BASE_URL },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Как рассчитать ставку фрилансера",
            "item": `${BASE_URL}/rukovodstvo`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Почему нельзя просто разделить желаемый доход на часы?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Такой расчёт не учитывает: налоги (самозанятый платит 4–6%), нерабочие дни (отпуск, праздники, больничные), и реальную загрузку — часть времени уходит на поиск клиентов, брифы и правки без оплаты. В итоге «честная» ставка оказывается на 40–80% выше простого деления.",
          },
        },
        {
          "@type": "Question",
          "name": "Какой коэффициент загрузки использовать для расчёта ставки?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Для начинающих фрилансеров реалистичный показатель — 50–60%. Для опытных с устойчивой базой клиентов — 70–80%. Использовать 100% не рекомендуется: это не оставляет резерва на поиск новых заказов.",
          },
        },
        {
          "@type": "Question",
          "name": "Как часто нужно пересчитывать ставку?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Минимум раз в год или при изменении: желаемого дохода, налогового режима, среднего количества рабочих часов. Оптимально — пересчитывать каждый квартал, сравнивая результат с рыночными ставками.",
          },
        },
      ],
    },
  ],
};

export default function GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 mb-6 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-indigo-600">
            FreelanceCalc
          </Link>
          <span>›</span>
          <span className="text-slate-600">Как рассчитать ставку фрилансера</span>
        </nav>

        <article className="prose-custom">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Как рассчитать ставку фрилансера: полное руководство 2026
            </h1>
            <p className="mt-3 text-slate-500 text-base leading-relaxed">
              Большинство фрилансеров называют ставку «на глаз» или копируют чужие цифры из
              чата. В результате либо работают в убыток, либо теряют клиентов из-за
              завышенных цен. В этом руководстве — точная формула расчёта с учётом всех
              реальных факторов.
            </p>
            <p className="mt-2 text-xs text-slate-400">Обновлено: март 2026 · Время чтения: 7 минут</p>
          </header>

          {/* Intro CTA */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8 not-prose">
            <p className="text-sm text-indigo-800 font-medium mb-3">
              Не хотите считать вручную? Калькулятор сделает всё за вас:
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              Открыть калькулятор ставки →
            </Link>
          </div>

          {/* Section 1 */}
          <Section>
            <H2>Почему «1000 ₽/час × 8 часов = 8000 ₽/день» — неправильная формула</H2>
            <P>
              Эту ошибку совершают почти все фрилансеры на старте. Кажется логичным:
              берёшь желаемый месячный доход, делишь на рабочие часы — получаешь ставку.
              Но в этой формуле не учтены три ключевых фактора.
            </P>
            <ul className="mt-4 space-y-3 text-sm text-slate-700 list-none">
              <FactItem
                icon="📅"
                title="Нерабочее время"
                text="В году 365 дней, но реально продаётся ~230 рабочих дней. Минус отпуск (28 дней), праздники (~14 дней), возможные больничные."
              />
              <FactItem
                icon="⏰"
                title="Неоплачиваемые часы"
                text='Поиск клиентов, брифы, правки, тестовые задания, администрирование — всё это рабочее время без оплаты. Реальная "загрузка" у фрилансера: 60–75%.'
              />
              <FactItem
                icon="🧾"
                title="Налоги"
                text="Самозанятый платит НПД: 4% с физлиц и 6% с юрлиц. ИП на УСН 6% — плюс страховые взносы ~50 000 руб/год. Это уменьшает «чистый» доход."
              />
            </ul>
            <Callout>
              Фрилансер с ставкой 1 000 ₽/час и загрузкой 70% зарабатывает не 160 000
              руб/мес, а около 95 000–105 000 на руки — в зависимости от налогового режима.
            </Callout>
          </Section>

          {/* Section 2 */}
          <Section>
            <H2>Правильная формула: считаем от результата назад</H2>
            <P>
              Вместо того чтобы умножать ставку на часы, начните с желаемого дохода на
              руки и двигайтесь в обратном направлении.
            </P>

            <H3>Шаг 1. Определите желаемый чистый доход</H3>
            <P>
              Сколько вы хотите получать <strong>после налогов</strong>, каждый месяц? Это
              число должно покрывать все расходы плюс накопления.
            </P>
            <CodeBlock>Чистый доход = 150 000 ₽/мес</CodeBlock>

            <H3>Шаг 2. Пересчитайте в gross с учётом налога</H3>
            <P>
              Налог платится с дохода до выплаты. Чтобы получить нужную сумму «на руки»,
              нужно зарабатывать больше.
            </P>
            <CodeBlock>
              {`Самозанятый (клиенты — физлица, НПД 4%):
Gross = 150 000 / (1 − 0.04) = 156 250 ₽/мес

Самозанятый (клиенты — юрлица, НПД 6%):
Gross = 150 000 / (1 − 0.06) = 159 574 ₽/мес`}
            </CodeBlock>

            <H3>Шаг 3. Посчитайте оплачиваемые часы в год</H3>
            <P>
              Не все рабочие часы приносят деньги. Учтите отпуск, праздники и реальную
              загрузку.
            </P>
            <CodeBlock>
              {`График: 5 дней × 8 часов
Рабочих дней в году: 52 × 5 = 260
Минус отпуск (28 дней): 232 дня
Минус праздники (~14): 218 дней
Загрузка 70%: 218 × 0.7 = 153 оплачиваемых дня
Часов: 153 × 8 = 1 224 оплачиваемых часа`}
            </CodeBlock>

            <H3>Шаг 4. Рассчитайте часовую ставку</H3>
            <CodeBlock>
              {`Годовой gross = 156 250 × 12 = 1 875 000 ₽
Часовая ставка = 1 875 000 / 1 224 = ~1 531 ₽/час`}
            </CodeBlock>
            <P>
              Итог: чтобы зарабатывать 150 000 ₽/мес чистыми как самозанятый с загрузкой
              70%, часовая ставка должна быть около <strong>1 530 ₽/час</strong> — а не 937
              ₽, которые дало бы простое деление.
            </P>
          </Section>

          {/* Section 3 */}
          <Section>
            <H2>Налоговые режимы: что выбрать фрилансеру</H2>
            <P>
              Выбор налогового режима влияет на ставку напрямую. Вот краткое сравнение для
              фрилансеров в России в 2026 году.
            </P>
            <div className="not-prose overflow-x-auto mt-4">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-4 py-2 font-semibold text-slate-700 rounded-tl-lg">Режим</th>
                    <th className="px-4 py-2 font-semibold text-slate-700">Налог</th>
                    <th className="px-4 py-2 font-semibold text-slate-700">Лимит</th>
                    <th className="px-4 py-2 font-semibold text-slate-700 rounded-tr-lg">Взносы</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-2 text-slate-700">Самозанятый (физлица)</td>
                    <td className="px-4 py-2 text-green-700 font-medium">4%</td>
                    <td className="px-4 py-2 text-slate-600">2.4 млн ₽/год</td>
                    <td className="px-4 py-2 text-green-700">Нет</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-2 text-slate-700">Самозанятый (юрлица)</td>
                    <td className="px-4 py-2 text-slate-700 font-medium">6%</td>
                    <td className="px-4 py-2 text-slate-600">2.4 млн ₽/год</td>
                    <td className="px-4 py-2 text-green-700">Нет</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-slate-700">ИП УСН «Доходы»</td>
                    <td className="px-4 py-2 text-slate-700 font-medium">6%</td>
                    <td className="px-4 py-2 text-slate-600">Нет</td>
                    <td className="px-4 py-2 text-amber-700">~50 000 ₽/год</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-2 text-slate-700">ИП УСН «Доходы − расходы»</td>
                    <td className="px-4 py-2 text-slate-700 font-medium">15%</td>
                    <td className="px-4 py-2 text-slate-600">Нет</td>
                    <td className="px-4 py-2 text-amber-700">~50 000 ₽/год</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P className="mt-4">
              <strong>Рекомендация:</strong> При доходе до 2.4 млн руб/год самозанятость
              выгоднее. При превышении лимита или если хотите работать с крупными заказчиками
              официально — оформляйте ИП.
            </P>
          </Section>

          {/* Section 4 */}
          <Section>
            <H2>Ставки по специальностям: ориентиры 2026</H2>
            <P>
              Расчёт даёт вашу минимальную ставку. Но нужно сравнить её с рыночными
              данными — вдруг рынок платит больше?
            </P>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {SPECIALTY_LINKS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/stavka/${s.slug}`}
                  className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">
                    {s.title}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-indigo-500">
                    {s.rate}
                  </span>
                </Link>
              ))}
            </div>
            <div className="not-prose mt-3">
              <Link href="/stavka" className="text-sm text-indigo-600 hover:underline">
                Все специальности →
              </Link>
            </div>
          </Section>

          {/* Section 5 */}
          <Section>
            <H2>Типичные ошибки при установке ставки</H2>
            <ul className="mt-3 space-y-3 text-sm text-slate-700 list-none">
              <FactItem
                icon="❌"
                title="Копировать чужую ставку"
                text="У разного фрилансера разные расходы, налоги и загрузка. Ставка соседа по чату — это не ваша ставка."
              />
              <FactItem
                icon="❌"
                title="Не учитывать рост расходов"
                text="Ставку нужно пересчитывать минимум раз в год. Инфляция 10–12% в год — это 100–120 ₽/час роста при ставке 1 000 ₽."
              />
              <FactItem
                icon="❌"
                title="Брать ставку «на испытательный срок»"
                text='Снижать ставку для "тестового" проекта — почти всегда ловушка. Клиент привыкает к низкой цене и не готов платить больше.'
              />
              <FactItem
                icon="❌"
                title="Не считать нерабочие дни"
                text="Праздники, болезни, форс-мажоры — это ~30–40 дней в году, которые не приносят дохода. Они должны быть заложены в ставку."
              />
            </ul>
          </Section>

          {/* Section 6 */}
          <Section>
            <H2>Как использовать калькулятор FreelanceCalc</H2>
            <P>
              Калькулятор реализует описанную выше формулу автоматически. Достаточно
              ввести несколько параметров:
            </P>
            <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal list-inside leading-relaxed">
              <li>
                <strong>Желаемый доход на руки</strong> — сколько хотите получать после
                уплаты налогов
              </li>
              <li>
                <strong>Налоговый режим</strong> — самозанятый (4% или 6%), ИП УСН 6% или
                15%
              </li>
              <li>
                <strong>График работы</strong> — часов в день и дней в неделю
              </li>
              <li>
                <strong>Отпуск</strong> — сколько дней в году не работаете
              </li>
              <li>
                <strong>Загрузка</strong> — какой % времени фактически оплачивается
              </li>
            </ol>
            <P className="mt-4">
              Результат — точная часовая и дневная ставка. Ссылку на расчёт можно
              скопировать и отправить клиенту или сохранить для себя.
            </P>
            <div className="not-prose mt-5">
              <Link
                href="/"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Рассчитать свою ставку →
              </Link>
            </div>
          </Section>

          {/* FAQ */}
          <Section>
            <H2>Частые вопросы</H2>
            <div className="not-prose space-y-4 mt-4">
              {GUIDE_FAQ.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <p className="font-semibold text-slate-800 text-sm mb-2">{item.q}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </Section>
        </article>

        <footer className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FreelanceCalc &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-indigo-600">
            ← Главная
          </Link>
        </footer>
      </main>
    </>
  );
}

/* ─────────────── Sub-components ─────────────── */

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mt-10 space-y-3">{children}</section>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-slate-900 leading-snug">{children}</h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-slate-800 mt-5 mb-1">{children}</h3>
  );
}

function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-slate-600 leading-relaxed ${className}`}>{children}</p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 mt-4">
      <p className="text-sm text-amber-900 leading-relaxed">💡 {children}</p>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-slate-900 text-green-300 text-xs rounded-xl px-5 py-4 mt-3 overflow-x-auto leading-relaxed font-mono whitespace-pre-wrap">
      {children}
    </pre>
  );
}

function FactItem({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <li className="flex gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3">
      <span className="text-lg flex-shrink-0">{icon}</span>
      <div>
        <p className="font-semibold text-slate-800 text-sm">{title}</p>
        <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{text}</p>
      </div>
    </li>
  );
}

/* ─────────────── Data ─────────────── */

const SPECIALTY_LINKS = [
  { slug: "frontend-razrabotchik", title: "Frontend-разработчик", rate: "от 1 500 ₽/ч" },
  { slug: "backend-razrabotchik", title: "Backend-разработчик", rate: "от 1 800 ₽/ч" },
  { slug: "dizajner-ui-ux", title: "UI/UX-дизайнер", rate: "от 1 200 ₽/ч" },
  { slug: "kopirayter", title: "Копирайтер", rate: "от 600 ₽/ч" },
  { slug: "smm-specialist", title: "SMM-специалист", rate: "от 800 ₽/ч" },
  { slug: "seo-specialist", title: "SEO-специалист", rate: "от 1 000 ₽/ч" },
];

const GUIDE_FAQ = [
  {
    q: "Почему нельзя просто разделить желаемый доход на часы?",
    a: 'Такой расчёт не учитывает налоги (4–6%), нерабочее время (отпуск, праздники) и реальную загрузку — часть времени уходит на поиск клиентов без оплаты. "Честная" ставка оказывается на 40–80% выше простого деления.',
  },
  {
    q: "Какой коэффициент загрузки использовать?",
    a: "Для начинающих — 50–60%. Для опытных с устойчивой базой клиентов — 70–80%. Не используйте 100%: это не оставляет резерва на поиск новых заказов.",
  },
  {
    q: "Как часто нужно пересчитывать ставку?",
    a: "Минимум раз в год. Обязательно — при изменении желаемого дохода, налогового режима или среднего объёма работы. Оптимально — каждый квартал, сравнивая с рыночными данными.",
  },
];
