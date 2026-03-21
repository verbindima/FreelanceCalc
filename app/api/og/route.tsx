import { ImageResponse } from "next/og";

export const runtime = "edge";

type TaxRegime =
  | "self_employed_fl"
  | "self_employed_ul"
  | "ip_usn6"
  | "ip_usn15"
  | "none";

const TAX_RATES: Record<TaxRegime, number> = {
  self_employed_fl: 0.04,
  self_employed_ul: 0.06,
  ip_usn6: 0.06,
  ip_usn15: 0.15,
  none: 0,
};

const TAX_LABELS: Record<TaxRegime, string> = {
  self_employed_fl: "Самозанятый (НПД 4%)",
  self_employed_ul: "Самозанятый (НПД 6%)",
  ip_usn6: "ИП УСН 6%",
  ip_usn15: "ИП УСН 15%",
  none: "Без налогов",
};

/** Mirror of getMarketContext in FreelanceCalc.tsx */
function getMarketLevel(hourlyRate: number): {
  emoji: string;
  label: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
} {
  if (hourlyRate < 700)
    return {
      emoji: "📉",
      label: "Ниже рынка",
      gradient: "linear-gradient(135deg, #1a0505 0%, #450a0a 50%, #7f1d1d 100%)",
      badgeBg: "rgba(239,68,68,0.20)",
      badgeText: "#fca5a5",
    };
  if (hourlyRate < 1200)
    return {
      emoji: "📊",
      label: "Нижний квартиль",
      gradient: "linear-gradient(135deg, #1a0a00 0%, #431407 50%, #7c2d12 100%)",
      badgeBg: "rgba(249,115,22,0.20)",
      badgeText: "#fdba74",
    };
  if (hourlyRate < 2000)
    return {
      emoji: "✅",
      label: "Рыночный уровень",
      gradient: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #065f46 100%)",
      badgeBg: "rgba(16,185,129,0.20)",
      badgeText: "#6ee7b7",
    };
  if (hourlyRate < 3500)
    return {
      emoji: "🚀",
      label: "Выше рынка",
      gradient: "linear-gradient(135deg, #0f0c29 0%, #1e1b4b 50%, #312e81 100%)",
      badgeBg: "rgba(99,102,241,0.25)",
      badgeText: "#a5b4fc",
    };
  return {
    emoji: "💎",
    label: "Топ рынка",
    gradient: "linear-gradient(135deg, #1a0030 0%, #2e1065 50%, #4c1d95 100%)",
    badgeBg: "rgba(139,92,246,0.25)",
    badgeText: "#d8b4fe",
  };
}

function fmtNum(n: number): string {
  return new Intl.NumberFormat("ru-RU").format(Math.round(n));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const income = Number(searchParams.get("income") || 150000);
  const taxStr = (searchParams.get("tax") || "self_employed_fl") as TaxRegime;
  const hpd = Number(searchParams.get("hpd") || 8);
  const dpw = Number(searchParams.get("dpw") || 5);
  const vac = Number(searchParams.get("vac") || 28);
  const load = Number(searchParams.get("load") || 70);

  const taxRate = TAX_RATES[taxStr] ?? 0.04;
  const grossMonthly = taxRate < 1 ? income / (1 - taxRate) : income;
  const grossAnnual = grossMonthly * 12;
  const workingDays = Math.round(52 * dpw - vac);
  const billableDays = workingDays * (load / 100);
  const billableHours = billableDays * hpd;
  const hourlyRate = billableHours > 0 ? grossAnnual / billableHours : 0;
  const dailyRate = billableDays > 0 ? grossAnnual / billableDays : 0;

  // Round display values to match the UI
  const displayHourly = Math.round(hourlyRate / 50) * 50;
  const displayDaily = Math.round(dailyRate / 100) * 100;

  const taxLabel = TAX_LABELS[taxStr] ?? TAX_LABELS.self_employed_fl;
  const market = getMarketLevel(hourlyRate);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1200px",
          height: "630px",
          background: market.gradient,
          padding: "56px 64px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Header: brand + market badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "100px",
              padding: "8px 20px",
            }}
          >
            FreelanceCalc
          </div>
          {/* Dynamic market badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: market.badgeBg,
              border: `1px solid ${market.badgeText}55`,
              borderRadius: "100px",
              padding: "8px 20px",
              color: market.badgeText,
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            <span>{market.emoji}</span>
            <span>{market.label}</span>
          </div>
        </div>

        {/* Label */}
        <div
          style={{
            color: "rgba(255,255,255,0.60)",
            fontSize: "28px",
            marginBottom: "10px",
            fontWeight: 500,
          }}
        >
          Моя ставка фрилансера
        </div>

        {/* Main rate */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "14px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "108px",
              fontWeight: 800,
              lineHeight: "1",
              letterSpacing: "-3px",
            }}
          >
            {fmtNum(displayHourly)} ₽
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.60)",
              fontSize: "38px",
              fontWeight: 600,
              paddingBottom: "8px",
            }}
          >
            /час
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {/* В день */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.10)",
              borderRadius: "16px",
              padding: "18px 26px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.50)", fontSize: "17px" }}>
              В день
            </div>
            <div
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              {fmtNum(displayDaily)} ₽
            </div>
          </div>

          {/* Net/мес */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.10)",
              borderRadius: "16px",
              padding: "18px 26px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.50)", fontSize: "17px" }}>
              Доход на руки
            </div>
            <div
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              {fmtNum(income)} ₽/мес
            </div>
          </div>

          {/* Режим налога */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.10)",
              borderRadius: "16px",
              padding: "18px 26px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.50)", fontSize: "17px" }}>
              Загрузка · налоги
            </div>
            <div
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              {load}% · {taxLabel}
            </div>
          </div>
        </div>

        {/* CTA footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "14px",
            padding: "18px 28px",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "20px",
              flex: 1,
            }}
          >
            Рассчитай свою ставку бесплатно — с налогами, отпуском, загрузкой
          </div>
          <div
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: 700,
              background: "rgba(255,255,255,0.18)",
              padding: "10px 22px",
              borderRadius: "10px",
            }}
          >
            freelancecalc-one.vercel.app →
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
