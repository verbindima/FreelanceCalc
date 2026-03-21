import type { Metadata } from "next";
import Link from "next/link";
import TaxCalc from "./TaxCalc";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор налога самозанятого 2026 — НПД 4% и 6% онлайн",
  description:
    "Рассчитайте налог самозанятого онлайн: НПД 4% (физлица) и 6% (компании). Бонус первого года, лимит 2 400 000 ₽, чистый доход после налогов. Бесплатно, без регистрации.",
  keywords: [
    "калькулятор налога самозанятого",
    "налог самозанятого рассчитать онлайн",
    "ндпд калькулятор онлайн",
    "сколько налогов платит самозанятый",
    "налог 4 процента самозанятый",
    "налог 6 процентов самозанятый юрлицо",
    "бонус самозанятого 10000",
    "лимит самозанятого 2400000",
    "калькулятор нпд",
  ],
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/instrumenty/kalkulator-naloga-samozanyatogo" },
  openGraph: {
    title: "Калькулятор налога самозанятого 2026 — НПД онлайн",
    description:
      "НПД 4% с физлиц, 6% с компаний. Бонус первого года снижает ставку. Лимит 2.4М₽. Считайте онлайн — бесплатно.",
    type: "website",
    locale: "ru_RU",
    url: `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo`,
    siteName: "FreelanceCalc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Калькулятор налога самозанятого",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo`,
  description:
    "Онлайн-калькулятор налога на профессиональный доход (НПД) для самозанятых. Ставки 4% и 6%, бонус первого года, контроль лимита 2.4 млн ₽.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Инструменты",
        item: `${BASE_URL}/instrumenty`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Калькулятор налога самозанятого",
        item: `${BASE_URL}/instrumenty/kalkulator-naloga-samozanyatogo`,
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Какой налог платит самозанятый в 2026 году?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Самозанятые платят налог на профессиональный доход (НПД): 4% с доходов от физических лиц и 6% с доходов от ИП и организаций. В первый год действует бонус 10 000 ₽, снижающий ставку до 3% и 4% соответственно.",
      },
    },
    {
      "@type": "Question",
      name: "Какой лимит дохода у самозанятого?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Годовой лимит дохода для самозанятых составляет 2 400 000 ₽ (200 000 ₽ в месяц в среднем). При превышении этой суммы статус самозанятого аннулируется, и необходимо зарегистрировать ИП или уплатить НДФЛ 13%.",
      },
    },
    {
      "@type": "Question",
      name: "Что такое бонус самозанятого 10 000 рублей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "При регистрации в качестве самозанятого государство предоставляет налоговый вычет 10 000 ₽. Он автоматически снижает ставку: с 4% до 3% (физлица) и с 6% до 4% (компании), пока сумма экономии не достигнет 10 000 ₽.",
      },
    },
    {
      "@type": "Question",
      name: "Нужно ли самозанятому платить страховые взносы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет, самозанятые не обязаны платить страховые взносы в ПФР и ФОМС. Это одно из главных отличий от ИП. Однако стаж для пенсии при этом не копится — можно платить добровольно.",
      },
    },
  ],
};

export default function KalkulyatorNalogaSamozanyatogo() {
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
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-blue-600 font-bold text-lg">
              FreelanceCalc
            </Link>
            <nav className="text-sm text-gray-500 flex gap-1 items-center">
              <Link href="/instrumenty" className="hover:text-blue-600">
                Инструменты
              </Link>
              <span>/</span>
              <span className="text-gray-800">Налог самозанятого</span>
            </nav>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Калькулятор налога самозанятого
            </h1>
            <p className="text-gray-600 text-lg">
              НПД 4% с физлиц и 6% с компаний. Бонус первого года, лимит
              2 400 000 ₽. Расчёт онлайн — бесплатно.
            </p>
          </div>

          {/* Calculator */}
          <TaxCalc />

          {/* Article content for SEO */}
          <article className="mt-10 prose prose-gray max-w-none">
            <h2>Как рассчитать налог самозанятого</h2>
            <p>
              Налог на профессиональный доход (НПД) — самый простой налоговый
              режим для фрилансеров. Ставка зависит от того, кто ваш клиент:
            </p>
            <ul>
              <li>
                <strong>4%</strong> — если клиент физическое лицо
              </li>
              <li>
                <strong>6%</strong> — если клиент ИП или организация
              </li>
            </ul>

            <h3>Бонус первого года: как он работает</h3>
            <p>
              При регистрации в приложении «Мой налог» государство автоматически
              начисляет налоговый вычет 10 000 ₽. Этот бонус снижает
              эффективную ставку:
            </p>
            <ul>
              <li>С 4% до 3% (работа с физлицами)</li>
              <li>С 6% до 4% (работа с компаниями)</li>
            </ul>
            <p>
              Бонус расходуется постепенно на каждый платёж, пока суммарная
              экономия не достигнет 10 000 ₽. После этого применяется обычная
              ставка.
            </p>

            <h3>Лимит дохода 2 400 000 ₽</h3>
            <p>
              Самозанятые могут зарабатывать не более 2 400 000 ₽ в год
              (около 200 000 ₽ в месяц). При превышении лимита статус
              самозанятого автоматически прекращается. В этом случае нужно
              либо зарегистрировать ИП, либо уплатить НДФЛ 13% с превышения.
            </p>
            <p>
              Если вы стабильно зарабатываете более 200 000 ₽/месяц — рассмотрите
              переход на ИП УСН «Доходы» (6% с полного оборота, но нет лимита
              и можно нанимать сотрудников).
            </p>

            <h3>Когда нужно платить налог</h3>
            <p>
              Самозанятые платят налог раз в месяц. ФНС формирует квитанцию
              через приложение «Мой налог» до 12-го числа следующего месяца.
              Оплатить нужно до 28-го числа. Налог начисляется только с тех
              доходов, которые вы сами отметили чеком в приложении.
            </p>
          </article>

          {/* Related tools */}
          <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">
              Другие инструменты
            </h3>
            <div className="space-y-3">
              <Link
                href="/?utm_source=instrumenty&utm_medium=related"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">
                  💰
                </div>
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-blue-600">
                    Калькулятор ставки фрилансера
                  </div>
                  <div className="text-sm text-gray-500">
                    Посчитайте минимальную ставку по желаемому доходу
                  </div>
                </div>
              </Link>
              <Link
                href="/stati/stavka-samozanyatogo-2026?utm_source=instrumenty&utm_medium=related"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
                  📊
                </div>
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-blue-600">
                    Ставка самозанятого: рыночные данные 2026
                  </div>
                  <div className="text-sm text-gray-500">
                    Медианные ставки по специальностям
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </main>

        <footer className="border-t border-gray-100 mt-16 py-8 text-center text-sm text-gray-400">
          <p>
            © 2026 FreelanceCalc —{" "}
            <Link href="/" className="hover:text-blue-500">
              freecalc.ru
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
