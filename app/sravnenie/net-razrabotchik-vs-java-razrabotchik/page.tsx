import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: ".NET разработчик vs Java: кто больше зарабатывает на фрилансе в 2026",
  description:
    "Сравниваем ставки .NET-разработчиков и Java-разработчиков-фрилансеров в 2026. Junior, Middle, Senior — таблица почасовых ставок, месячный доход и советы по выбору платформы.",
  keywords: [
    ".net разработчик зарплата фриланс",
    "java vs net кто больше зарабатывает",
    ".net c# разработчик ставка 2026",
    "java разработчик ставка фриланс",
    "c# фрилансер сколько берёт",
    "dotnet vs java зарплата",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/sravnenie/net-razrabotchik-vs-java-razrabotchik" },
  openGraph: {
    title: ".NET разработчик vs Java: кто больше зарабатывает на фрилансе в 2026",
    description:
      "Сравнение почасовых ставок .NET и Java разработчиков на фрилансе. Данные 2026 года.",
    type: "article",
    locale: "ru_RU",
    url: `${BASE_URL}/sravnenie/net-razrabotchik-vs-java-razrabotchik`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Кто больше зарабатывает — .NET или Java разработчик?",
          acceptedAnswer: {
            "@type": "Answer",
            text: ".NET и Java разработчики зарабатывают примерно одинаково на Junior и Middle уровнях. Java незначительно обгоняет .NET на Senior: 5 500 vs 5 000 ₽/час (+10%). Разница определяется не языком, а специализацией: .NET/Azure-специалисты и Java/Spring-архитекторы берут одинаково. Выше ставки у тех, кто решает бизнес-задачи, а не просто пишет код.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько зарабатывает .NET разработчик фрилансер в 2026 году?",
          acceptedAnswer: {
            "@type": "Answer",
            text: ".NET (C#) разработчик фрилансер в 2026 году: Junior — 1 600 ₽/час (256 000 ₽/мес), Middle — 3 000 ₽/час (480 000 ₽/мес), Senior — 5 000 ₽/час (800 000 ₽/мес). .NET-специалисты по Azure и корпоративным решениям (SharePoint, Dynamics 365) берут на 20–30% выше среднего.",
          },
        },
        {
          "@type": "Question",
          name: "Что выбрать — .NET или Java для фриланса?",
          acceptedAnswer: {
            "@type": "Answer",
            text: ".NET актуален в корпоративном и государственном секторе России, а также при работе с Microsoft-экосистемой (Azure, SharePoint, 1C интеграции). Java лучше для международного фриланса и стартапов. По количеству заказов в России .NET незначительно уступает Java. На Upwork Java-разработчиков ищут активнее.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Сравнение специальностей", item: `${BASE_URL}/sravnenie` },
        {
          "@type": "ListItem",
          position: 3,
          name: ".NET vs Java разработчик",
          item: `${BASE_URL}/sravnenie/net-razrabotchik-vs-java-razrabotchik`,
        },
      ],
    },
  ],
};

export default function NetVsJavaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li><Link href="/" className="hover:text-blue-600">Главная</Link></li>
              <li>/</li>
              <li><Link href="/sravnenie" className="hover:text-blue-600">Сравнение специальностей</Link></li>
              <li>/</li>
              <li className="text-gray-700">.NET vs Java</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            .NET разработчик vs Java: кто больше зарабатывает на фрилансе в 2026
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
            <span>Обновлено: март 2026</span>
            <span>6 минут чтения</span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            .NET (C#) и Java — два главных языка корпоративной разработки. Ставки почти равны:
            Java незначительно обгоняет на Senior-уровне.{" "}
            <strong>Java Senior — 5 500 ₽/час против 5 000 ₽/час у .NET (+10%).</strong>{" "}
            Реальный разрыв определяется специализацией, а не языком. Разберём.
          </p>

          {/* CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p className="text-blue-900 font-semibold mb-2">Рассчитайте свою реальную ставку</p>
            <p className="text-blue-700 text-sm mb-4">
              Калькулятор учтёт вашу специализацию, опыт, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>

          {/* Comparison table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Таблица ставок: .NET vs Java по уровням опыта
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Уровень</th>
                    <th className="text-center px-4 py-3 font-semibold text-purple-700">.NET ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-red-700">Java ₽/час</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Разница</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход .NET/мес.</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Доход Java/мес.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Junior</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">1 600 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">1 700 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">Java +6%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">256 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">272 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Middle</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">3 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">3 200 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">Java +7%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">480 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">512 000 ₽</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Senior</td>
                    <td className="px-4 py-3 text-center font-semibold text-purple-700">5 000 ₽</td>
                    <td className="px-4 py-3 text-center font-semibold text-red-700">5 500 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 hidden md:table-cell">Java +10%</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">800 000 ₽</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">880 000 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Ставки для фрилансеров, рынок России. Месячный доход = ставка × 160 рабочих часов.
              Данные Q1 2026: Хабр Карьера, FL.ru, корпоративные вакансии.
            </p>
          </section>

          {/* Deeper analysis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Что реально влияет на ставку — не язык, а специализация
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">.NET с Azure = premium-ставка</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  .NET-разработчик с опытом Azure (Functions, Service Bus, Cosmos DB) и DevOps
                  в Microsoft-экосистеме зарабатывает 5 000–7 000 ₽/час. Это выше Java-среднего.
                  Специализация важнее языка: .NET-архитектор корпоративных систем ≠ .NET-джун.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Java Spring + микросервисы = топ-ставка</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Java Senior с опытом Spring Cloud, Kubernetes, Kafka и архитектуры микросервисов
                  берёт 6 000–8 000 ₽/час. Топовые Java-специалисты востребованы в финтехе, банках
                  и крупных e-commerce, где платят premium за надёжность и масштабируемость.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Государственный сектор — нишевое преимущество .NET</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Microsoft-стек традиционно доминирует в государственных структурах России:
                  Active Directory, SharePoint, Exchange, SQL Server. .NET-разработчик с опытом
                  интеграции с госсистемами и знанием 223-ФЗ может брать выше рынка.
                </p>
              </div>
            </div>
          </section>

          {/* How to choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Как выбрать между .NET и Java</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h3 className="font-bold text-purple-900 mb-3">Выбирайте .NET, если...</h3>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li>— нравится C# и Microsoft-экосистема</li>
                  <li>— цель — корпоративный и государственный сектор России</li>
                  <li>— интересен Azure, SharePoint, Dynamics 365</li>
                  <li>— есть заказчики в Windows-среде</li>
                  <li>— рассматриваете Unity (игры на C#)</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-900 mb-3">Выбирайте Java, если...</h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>— целитесь на международный рынок (Upwork)</li>
                  <li>— нравится Spring Framework и микросервисы</li>
                  <li>— интересен финтех, банковский сектор</li>
                  <li>— хотите больше заказов на отечественных платформах</li>
                  <li>— рассматриваете Android (Kotlin/Java)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Кто зарабатывает больше — .NET или Java разработчик?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Разница незначительна: Java Senior берёт 5 500 ₽/час против 5 000 ₽/час у .NET (+10%).
                  На Junior и Middle уровнях ставки почти равны. Специализация важнее языка:
                  .NET + Azure и Java + Spring Cloud — оба premium-варианта.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Много ли заказов на .NET разработчиков в России?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Да, достаточно. .NET распространён в корпоративном секторе: банки, страховые компании,
                  ретейл используют ASP.NET, WPF, WinForms. На FL.ru заказов на .NET/C# меньше,
                  чем на Java, но больше, чем на Go или Rust. На Upwork конкуренция примерно равна Java.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Легко ли .NET-разработчику перейти на Java?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Относительно легко: оба языка объектно-ориентированные, со схожим синтаксисом.
                  C# и Java похожи больше, чем любые два других языка в этом рейтинге.
                  Срок перехода при наличии .NET-базы — 2–3 месяца на освоение JVM, Maven/Gradle и Spring.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Похожие сравнения разработчиков</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/sravnenie/java-razrabotchik-vs-golang-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Java vs Golang разработчик</p>
                <p className="text-sm text-gray-500">Go зарабатывает на 29–41% больше Java →</p>
              </Link>
              <Link
                href="/sravnenie/java-razrabotchik-vs-python-razrabotchik"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">Java vs Python разработчик</p>
                <p className="text-sm text-gray-500">Python обгоняет Java на Senior-уровне →</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Узнайте свою точную ставку за 30 секунд</h2>
            <p className="text-purple-100 mb-6">
              Калькулятор учтёт вашу специализацию, город, налоги и загрузку —
              и покажет минимальную и рыночную ставку .NET или Java разработчика.
            </p>
            <a
              href="/"
              className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-xl hover:bg-purple-50 transition-colors"
            >
              Рассчитать свою ставку бесплатно →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
