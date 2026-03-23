import type { Metadata } from "next";
import LaunchContent from "./LaunchContent";

// Private launch coordination page — not indexed by search engines
export const metadata: Metadata = {
  title: "Launch Pad — FreelanceCalc",
  robots: { index: false, follow: false },
};

export default function LaunchPage() {
  return <LaunchContent />;
}
