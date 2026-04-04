/**
 * Shared hh.ru market data fetcher.
 * Used by both /api/hh-market route and server-side page rendering.
 * Fetches real job market salaries and converts to freelance hourly equivalents.
 */

const HH_API = "https://api.hh.ru/vacancies";
const UA = "FreelanceCalc/1.0 (https://freelancecalc.ru)";

export const HH_AREA_IDS: Record<string, number> = {
  "Москва": 1,
  "Санкт-Петербург": 2,
  "Екатеринбург": 3,
  "Новосибирск": 4,
  "Казань": 88,
  "Нижний Новгород": 66,
  "Самара": 78,
  "Краснодар": 53,
  "Ростов-на-Дону": 76,
  "Уфа": 99,
};

export const HH_QUERIES: Record<string, string> = {
  "frontend-razrabotchik":  "frontend разработчик",
  "backend-razrabotchik":   "backend разработчик",
  "fullstack-razrabotchik": "fullstack разработчик",
  "python-razrabotchik":    "python разработчик",
  "ml-inzhener":            "ML инженер машинное обучение",
  "devops-inzhener":        "DevOps инженер",
  "mobilnyj-razrabotchik":  "мобильный разработчик iOS Android",
  "dizajner-ui-ux":         "UX UI дизайнер",
  "graficheskij-dizajner":  "графический дизайнер",
  "kopirayter":             "копирайтер",
  "seo-specialist":         "SEO специалист",
  "targetolog":             "таргетолог",
  "smm-specialist":         "SMM специалист",
  "testirovshchik-qa":      "тестировщик QA",
  "php-razrabotchik":       "PHP разработчик",
  "1c-razrabotchik":        "1С разработчик",
  "data-analyst":           "аналитик данных",
  "biznes-analitik":        "бизнес аналитик",
  "menedzher-proektov":     "менеджер проектов",
  "yurist-frilanser":       "юрист",
  "buhgalter-frilanser":    "бухгалтер",
  "illustrator-frilanser":  "иллюстратор",
  "videomontazhyor":        "видеомонтажёр",
  "fotograf-frilanser":     "фотограф",
  "perevodchik":            "переводчик",
  "kontent-menedzher":      "контент менеджер",
};

export interface HhMarketData {
  specialty: string;
  city: string;
  total_found: number;
  used: number;
  monthly_gross: { p25: number; median: number; p75: number };
  /** Equivalent freelance hourly rate to match this employment salary */
  freelance_hourly_equiv: { p25: number; median: number; p75: number };
  updated_at: string;
}

interface HHSalary {
  from?: number | null;
  to?: number | null;
  gross?: boolean;
  currency?: string;
}

interface HHVacancy {
  salary?: HHSalary | null;
}

function computeStats(arr: number[]) {
  if (arr.length === 0) return { p25: 0, median: 0, p75: 0, count: 0 };
  const s = [...arr].sort((a, b) => a - b);
  const idx = (p: number) => Math.min(Math.floor(s.length * p), s.length - 1);
  const mid = Math.floor(s.length / 2);
  return {
    count: s.length,
    p25: s[idx(0.25)],
    median: s.length % 2 === 0 ? Math.round((s[mid - 1] + s[mid]) / 2) : s[mid],
    p75: s[idx(0.75)],
  };
}

/**
 * Convert employed monthly gross salary → freelance hourly rate equivalent.
 * Formula: (monthly / 160h) ÷ billable_ratio ÷ (1 − tax_rate)
 * Assumptions: 70% billable ratio, 4% НПД (самозанятый — most common)
 */
export function toFreelanceHourly(monthly: number): number {
  return Math.round((monthly / 160) / 0.70 / 0.96 / 50) * 50;
}

/**
 * Fetch hh.ru market salary data for a specialty in a city.
 * Returns null on error or insufficient data (< 3 vacancies with salary).
 * Result is cached by Next.js fetch cache for 24 hours.
 */
export async function fetchHhMarket(
  specialty: string,
  city: string = "Москва"
): Promise<HhMarketData | null> {
  const query = HH_QUERIES[specialty] ?? specialty.replace(/-/g, " ");
  const areaId = HH_AREA_IDS[city] ?? 1;

  try {
    const url = new URL(HH_API);
    url.searchParams.set("text", query);
    url.searchParams.set("area", String(areaId));
    url.searchParams.set("only_with_salary", "true");
    url.searchParams.set("per_page", "100");
    url.searchParams.set("currency", "RUR");
    url.searchParams.set("employment", "full");

    const res = await fetch(url.toString(), {
      headers: {
        "User-Agent": UA,
        "HH-User-Agent": UA,
      },
      next: { revalidate: 86400 }, // 24h cache
    });

    if (!res.ok) return null;

    const data = await res.json();
    const items: HHVacancy[] = data.items ?? [];
    const totalFound: number = data.found ?? items.length;

    const monthlySalaries: number[] = items
      .map((item) => {
        const s = item.salary;
        if (!s || s.currency !== "RUR") return null;
        const from = s.from ?? s.to ?? 0;
        const to = s.to ?? s.from ?? 0;
        const mid = from && to ? (from + to) / 2 : from || to;
        if (!mid) return null;
        return Math.round(s.gross === false ? mid / 0.87 : mid);
      })
      .filter((v): v is number => v !== null && v > 20_000 && v < 3_000_000);

    if (monthlySalaries.length < 3) return null;

    const stats = computeStats(monthlySalaries);

    return {
      specialty,
      city,
      total_found: totalFound,
      used: stats.count,
      monthly_gross: { p25: stats.p25, median: stats.median, p75: stats.p75 },
      freelance_hourly_equiv: {
        p25: toFreelanceHourly(stats.p25),
        median: toFreelanceHourly(stats.median),
        p75: toFreelanceHourly(stats.p75),
      },
      updated_at: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}
