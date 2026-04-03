/**
 * Shared HH.ru data fetching logic for the benchmark report.
 * Fetches real vacancy salaries from hh.ru, converts to freelance hourly equivalent.
 *
 * Cached by Next.js Data Cache: revalidate every 24h.
 */

const HH_API = "https://api.hh.ru/vacancies";
const UA = "FreelanceCalc/1.0 (https://freelancecalc.ru)";

/** HH.ru free-text queries for top specialties */
const HH_QUERIES: Record<string, string> = {
  "frontend-razrabotchik":  "frontend разработчик",
  "backend-razrabotchik":   "backend разработчик",
  "python-razrabotchik":    "python разработчик",
  "ml-inzhener":            "ML инженер машинное обучение",
  "devops-inzhener":        "DevOps инженер",
  "fullstack-razrabotchik": "fullstack разработчик",
  "mobilnyj-razrabotchik":  "мобильный разработчик iOS Android",
  "dizajner-ui-ux":         "UX UI дизайнер",
  "data-analyst":           "аналитик данных",
  "menedzher-proektov":     "менеджер проектов",
};

export interface HhSpecialtyResult {
  slug: string;
  count: number;
  freelanceHourly: { p25: number; median: number; p75: number };
}

function computeStats(arr: number[]) {
  if (arr.length === 0) return null;
  const s = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return {
    count: s.length,
    p25:    s[Math.min(Math.floor(s.length * 0.25), s.length - 1)],
    median: s.length % 2 === 0 ? Math.round((s[mid - 1] + s[mid]) / 2) : s[mid],
    p75:    s[Math.min(Math.floor(s.length * 0.75), s.length - 1)],
  };
}

/**
 * Monthly gross salary → equivalent freelance hourly rate.
 * Assumptions: 160 working hours/month, 70% billable ratio, НПД tax 4%.
 */
function toFreelanceHourly(monthly: number): number {
  return Math.round((monthly / 160) / 0.70 / 0.96 / 50) * 50;
}

async function fetchOneSpecialty(slug: string): Promise<HhSpecialtyResult | null> {
  const query = HH_QUERIES[slug];
  if (!query) return null;

  try {
    const url = new URL(HH_API);
    url.searchParams.set("text", query);
    url.searchParams.set("area", "1"); // Moscow area ID
    url.searchParams.set("only_with_salary", "true");
    url.searchParams.set("per_page", "100");
    url.searchParams.set("currency", "RUR");
    url.searchParams.set("employment", "full");

    const res = await fetch(url.toString(), {
      headers: { "User-Agent": UA, "HH-User-Agent": UA },
      next: { revalidate: 86400 }, // Cache 24h via Next.js Data Cache
    });

    if (!res.ok) return null;

    const data = await res.json();
    const items: Array<{ salary?: { from?: number | null; to?: number | null; gross?: boolean; currency?: string } | null }> =
      data.items ?? [];

    const salaries = items
      .map((item) => {
        const s = item.salary;
        if (!s || s.currency !== "RUR") return null;
        const from = s.from ?? s.to ?? 0;
        const to   = s.to   ?? s.from ?? 0;
        const mid  = from && to ? (from + to) / 2 : from || to;
        if (!mid) return null;
        const gross = Math.round(s.gross === false ? mid / 0.87 : mid);
        return gross;
      })
      .filter((v): v is number => v !== null && v > 20_000 && v < 3_000_000);

    if (salaries.length < 3) return null;

    const stats = computeStats(salaries);
    if (!stats) return null;

    return {
      slug,
      count: stats.count,
      freelanceHourly: {
        p25:    toFreelanceHourly(stats.p25),
        median: toFreelanceHourly(stats.median),
        p75:    toFreelanceHourly(stats.p75),
      },
    };
  } catch {
    return null;
  }
}

/**
 * Fetch all top specialties in parallel with graceful fallback.
 * Returns array in same order as HH_LIVE_SPECIALTIES; null = data unavailable.
 */
export async function fetchAllHhData(slugs: readonly string[]): Promise<Array<HhSpecialtyResult | null>> {
  const results = await Promise.allSettled(slugs.map(fetchOneSpecialty));
  return results.map((r) => (r.status === "fulfilled" ? r.value : null));
}
