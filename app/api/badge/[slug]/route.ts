/**
 * SVG Rate Badge API
 * GET /api/badge/[slug]?city=Москва&level=middle
 *
 * Returns a shields.io-style SVG badge with real hh.ru market rate data.
 * Embeddable in GitHub README, blogs, portfolios.
 *
 * Example:
 *   ![Python Rate](https://freelancecalc.ru/api/badge/python-razrabotchik)
 */

import { NextRequest, NextResponse } from "next/server";
import { fetchHhMarket, HH_QUERIES } from "@/lib/hh-market";

const SPECIALTY_NAMES: Record<string, string> = {
  "frontend-razrabotchik":  "Frontend",
  "backend-razrabotchik":   "Backend",
  "fullstack-razrabotchik": "Fullstack",
  "python-razrabotchik":    "Python Dev",
  "ml-inzhener":            "ML Engineer",
  "devops-inzhener":        "DevOps",
  "mobilnyj-razrabotchik":  "Mobile Dev",
  "dizajner-ui-ux":         "UX/UI",
  "graficheskij-dizajner":  "Graphic Design",
  "kopirayter":             "Copywriter",
  "seo-specialist":         "SEO",
  "targetolog":             "Таргетолог",
  "smm-specialist":         "SMM",
  "testirovshchik-qa":      "QA",
  "php-razrabotchik":       "PHP Dev",
  "1c-razrabotchik":        "1C Dev",
  "data-analyst":           "Data Analyst",
  "biznes-analitik":        "Biz Analyst",
  "menedzher-proektov":     "PM",
  "yurist-frilanser":       "Юрист",
  "buhgalter-frilanser":    "Бухгалтер",
  "illustrator-frilanser":  "Иллюстратор",
  "videomontazhyor":        "Видеомонтаж",
  "fotograf-frilanser":     "Фотограф",
  "perevodchik":            "Переводчик",
  "kontent-menedzher":      "Контент",
};

function formatRate(rub: number): string {
  if (rub >= 1000) {
    return `${(rub / 1000).toFixed(1).replace(".0", "")}к ₽/ч`;
  }
  return `${rub} ₽/ч`;
}

function escapeXml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function measureText(text: string): number {
  // Rough approximation: ~7px per char for 11px Verdana
  return Math.round(text.length * 7 + 10);
}

function buildSvg(label: string, value: string, color: string): string {
  const lw = measureText(label);
  const rw = measureText(value);
  const totalW = lw + rw;
  const h = 20;

  const lx = Math.round(lw / 2);
  const rx = lw + Math.round(rw / 2);

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalW}" height="${h}" role="img" aria-label="${escapeXml(label)}: ${escapeXml(value)}">
  <title>${escapeXml(label)}: ${escapeXml(value)}</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="${totalW}" height="${h}" rx="3" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="${lw}" height="${h}" fill="#555"/>
    <rect x="${lw}" width="${rw}" height="${h}" fill="${color}"/>
    <rect width="${totalW}" height="${h}" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="${lx}" y="15" fill="#010101" fill-opacity=".3">${escapeXml(label)}</text>
    <text x="${lx}" y="14">${escapeXml(label)}</text>
    <text x="${rx}" y="15" fill="#010101" fill-opacity=".3">${escapeXml(value)}</text>
    <text x="${rx}" y="14">${escapeXml(value)}</text>
  </g>
</svg>`;
}

function errorSvg(slug: string): string {
  return buildSvg("FreelanceCalc", "нет данных", "#e05d44");
}

export const runtime = "nodejs";
export const revalidate = 86400; // 24h ISR — Vercel caches per slug

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Check if slug is known
  if (!HH_QUERIES[slug]) {
    const svg = buildSvg("FreelanceCalc", "неизвестная специальность", "#e05d44");
    return new NextResponse(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }

  const name = SPECIALTY_NAMES[slug] ?? slug;

  try {
    const data = await fetchHhMarket(slug, "Москва");

    if (!data || data.freelance_hourly_equiv.median === 0) {
      return new NextResponse(errorSvg(slug), {
        status: 200,
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
      });
    }

    const rate = formatRate(data.freelance_hourly_equiv.median);
    const label = `FreelanceCalc · ${name}`;
    const value = `${rate} · hh.ru`;
    const svg = buildSvg(label, value, "#4c81e8");

    return new NextResponse(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse(errorSvg(slug), {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  }
}
