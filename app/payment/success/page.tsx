import type { Metadata } from "next";
import PaymentSuccessClient from "./PaymentSuccessClient";

const BASE_URL = "https://freelancecalc.ru";

export const metadata: Metadata = {
  title: "Оплата успешно завершена — FreelanceCalc",
  description: "Страница подтверждения оплаты и доступа к отчёту FreelanceCalc.",
  alternates: { canonical: `${BASE_URL}/payment/success` },
  robots: { index: false, follow: false },
};

export default function PaymentSuccessPage() {
  const key = process.env.REPORT_ACCESS_KEY;
  const reportUrl = key
    ? `${BASE_URL}/benchmark/report?key=${key}`
    : `${BASE_URL}/benchmark`;

  return <PaymentSuccessClient reportUrl={reportUrl} />;
}
