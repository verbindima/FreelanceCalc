import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FreelanceCalc — калькулятор ставки фрилансера",
  description:
    "Рассчитайте оптимальную часовую, дневную и месячную ставку с учётом налогов, отпуска и загрузки. Бесплатно.",
  keywords: [
    "калькулятор ставки фрилансера",
    "ставка фрилансера",
    "расчёт ставки самозанятого",
    "сколько брать за час работы",
    "фриланс калькулятор",
  ],
  openGraph: {
    title: "FreelanceCalc — калькулятор ставки фрилансера",
    description: "Рассчитайте оптимальную ставку с учётом налогов, отпуска и реальной загрузки.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
