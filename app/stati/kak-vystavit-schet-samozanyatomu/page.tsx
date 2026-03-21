import { redirect } from "next/navigation";
import type { Metadata } from "next";

// Duplicate of /stati/kak-vystavit-schet-samozanyatomu-2026 (same topic).
// 301 redirect to canonical URL to prevent duplicate content penalty.
export const metadata: Metadata = {
  alternates: {
    canonical: "https://freelancecalc.ru/stati/kak-vystavit-schet-samozanyatomu-2026",
  },
};

export default function Page() {
  redirect("/stati/kak-vystavit-schet-samozanyatomu-2026");
}
