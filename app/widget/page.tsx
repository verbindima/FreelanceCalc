import type { Metadata } from "next";
import WidgetCalc from "./WidgetCalc";

export const metadata: Metadata = {
  title: "Калькулятор ставки фрилансера — виджет | FreelanceCalc",
  description: "Встраиваемый iframe-виджет калькулятора ставки фрилансера.",
  robots: { index: false, follow: false },
};

export default function WidgetPage() {
  return <WidgetCalc />;
}
