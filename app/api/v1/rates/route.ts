import { NextResponse } from "next/server";
import { SPECIALTIES } from "../../../stavka/[slug]/specialties";
import { CITIES } from "../../../goroda/cities";
import { LEVELS } from "../../../stavka/[slug]/opyt/[level]/levels";

const BASE_URL = "https://freelancecalc.ru";

/** Parse "1 500–3 000 ₽/час" → { min: 1500, max: 3000 } */
function parseMedianHourly(s: string): { min: number; max: number } {
  const cleaned = s.replace(/\s/g, "");
  const match = cleaned.match(/(\d+)[–-](\d+)/);
  if (!match) return { min: 0, max: 0 };
  return { min: parseInt(match[1]), max: parseInt(match[2]) };
}

export async function GET() {
  const specialties = SPECIALTIES.map((spec) => {
    const { min, max } = parseMedianHourly(spec.medianHourly);
    return {
      slug: spec.slug,
      name: spec.shortTitle,
      median_hourly_min_rub: min,
      median_hourly_max_rub: max,
      median_monthly_rub: spec.defaultIncome,
      calculator_url: `${BASE_URL}/stavka/${spec.slug}`,
    };
  });

  const cities = CITIES.map((city) => ({
    slug: city.slug,
    name: city.name,
    rate_multiplier: city.multiplier,
    calculator_url: `${BASE_URL}/goroda/${city.slug}`,
  }));

  const experience_levels = LEVELS.map((lvl) => ({
    slug: lvl.slug,
    name: lvl.name,
    years: lvl.years,
    income_multiplier: lvl.incomeMultiplier,
  }));

  const response = {
    meta: {
      version: "v1",
      updated_quarter: "2026-Q1",
      total_specialties: specialties.length,
      total_cities: cities.length,
      currency: "RUB",
      source: BASE_URL,
      docs: `${BASE_URL}/for-developers`,
      license: "CC BY 4.0",
      license_url: "https://creativecommons.org/licenses/by/4.0/deed.ru",
    },
    specialties,
    cities,
    experience_levels,
  };

  return NextResponse.json(response, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
