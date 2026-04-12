import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import YandexMetrica from "./components/YandexMetrica";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Калькулятор фрилансера 2026 — ставка за час с налогами | FreelanceCalc",
  description:
    "Рассчитайте точную ставку фрилансера за 30 секунд: учёт налогов НПД/УСН, отпуска, реальной загрузки. Бесплатно, без регистрации — результат сразу.",
  keywords: [
    "калькулятор ставки фрилансера",
    "ставка фрилансера",
    "расчёт ставки самозанятого",
    "сколько брать за час работы",
    "фриланс калькулятор",
    "часовая ставка фрилансер",
    "калькулятор НПД самозанятый",
    "как рассчитать ставку фрилансера",
  ],
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: { canonical: "/", types: { "application/rss+xml": `${BASE_URL}/rss.xml` } },
  verification: {
    google: process.env.GSC_VERIFICATION ?? undefined,
    yandex: 'f9c725460a6219d1',
  },
  openGraph: {
    title: "Калькулятор фрилансера 2026 — ставка за час с налогами",
    description: "Рассчитайте точную ставку за 30 секунд: налоги НПД/УСН, отпуск, реальная загрузка. Бесплатно, без регистрации.",
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: "FreelanceCalc",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "FreelanceCalc — калькулятор ставки фрилансера",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Калькулятор фрилансера 2026 — ставка за час с налогами",
    description: "Рассчитайте точную ставку за 30 секунд: налоги НПД/УСН, отпуск, реальная загрузка. Бесплатно, без регистрации.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "FreelanceCalc",
      "url": BASE_URL,
      "description": "Бесплатный онлайн-калькулятор ставки фрилансера для России",
      "inLanguage": "ru",
      "foundingDate": "2026",
      "areaServed": "RU",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "name": "FreelanceCalc",
      "url": BASE_URL,
      "inLanguage": "ru",
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/stavka/{search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebApplication",
      "@id": `${BASE_URL}/#webapp`,
      "name": "Калькулятор ставки фрилансера",
      "alternateName": "FreelanceCalc",
      "url": BASE_URL,
      "description": "Бесплатный онлайн-калькулятор ставки фрилансера с учётом налогов, отпуска и загрузки",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "inLanguage": "ru",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "RUB",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Как рассчитать часовую ставку фрилансера?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Чтобы рассчитать часовую ставку: 1) определите желаемый чистый доход в месяц, 2) добавьте налоги (самозанятый — 4% с физлиц или 6% с компаний, ИП УСН — 6%), 3) разделите годовой доход на количество оплачиваемых часов с учётом отпуска и коэффициента загрузки (обычно 60–70%). Наш калькулятор делает всё это автоматически.",
          },
        },
        {
          "@type": "Question",
          "name": "Какой налог платит самозанятый фрилансер?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Самозанятые платят НПД (налог на профессиональный доход): 4% при работе с физическими лицами и 6% при работе с юридическими лицами и ИП. Страховые взносы не уплачиваются, отчётность не сдаётся.",
          },
        },
        {
          "@type": "Question",
          "name": "Почему ставка фрилансера должна быть выше офисной зарплаты?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Фрилансер несёт дополнительные расходы: налоги, простои между проектами, самостоятельная оплата больничного и отпуска, расходы на оборудование и ПО. Чтобы получать «на руки» столько же, сколько офисный сотрудник, ставка фрилансера должна быть в 1.5–2 раза выше.",
          },
        },
        {
          "@type": "Question",
          "name": "Что такое коэффициент загрузки и зачем он нужен?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Коэффициент загрузки (billable ratio) — доля рабочего времени, которое вы фактически продаёте клиентам. Остальное время уходит на поиск заказов, административные задачи и простои. Для большинства фрилансеров реалистичная загрузка составляет 60–75%.",
          },
        },
        {
          "@type": "Question",
          "name": "Чем самозанятый отличается от ИП для фрилансера?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Самозанятый: лимит дохода 2.4 млн руб/год, налог 4–6%, без отчётности и взносов. ИП УСН 6%: без лимита дохода, налог 6% + страховые взносы (~50 000 руб/год), простая отчётность. Для небольших доходов выгоднее самозанятость.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-slate-50 text-slate-900 antialiased">
        <YandexMetrica />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
