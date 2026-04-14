import type { Metadata, Viewport } from "next";
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
    // app/icon.svg + app/apple-icon.svg are auto-served by Next.js as
    // primary vector icons. PNG sizes below are explicit fallbacks for
    // older browsers and platform-specific surfaces.
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#302858" },
    { media: "(prefers-color-scheme: dark)",  color: "#302858" },
  ],
  colorScheme: "light",
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
