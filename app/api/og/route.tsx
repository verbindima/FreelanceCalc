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

  const taxLabel = TAX_LABELS[taxStr] ?? TAX_LABELS.self_employed_fl;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
          padding: "56px 64px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            FreelanceCalc
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "20px",
            }}
          >
            freelancecalc-one.vercel.app
          </div>
        </div>

        {/* Label */}
        <div
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "30px",
            marginBottom: "12px",
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
            marginBottom: "36px",
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
            {fmtNum(hourlyRate)} ₽
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "42px",
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
            gap: "0px",
            marginBottom: "36px",
          }}
        >
          {/* В день */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "20px 28px",
              marginRight: "16px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px" }}>
              В день
            </div>
            <div
              style={{
                color: "white",
                fontSize: "34px",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              {fmtNum(dailyRate)} ₽
            </div>
          </div>

          {/* Net/мес */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "20px 28px",
              marginRight: "16px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px" }}>
              Доход на руки
            </div>
            <div
              style={{
                color: "white",
                fontSize: "34px",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              {fmtNum(income)} ₽/мес
            </div>
          </div>

          {/* Загрузка */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "20px 28px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "18px" }}>
              Загрузка · {taxLabel}
            </div>
            <div
              style={{
                color: "white",
                fontSize: "34px",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              {load}%
            </div>
          </div>
        </div>

        {/* CTA footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "14px",
            padding: "18px 28px",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "22px",
              flex: 1,
            }}
          >
            Рассчитайте свою ставку бесплатно
          </div>
          <div
            style={{
              color: "white",
              fontSize: "22px",
              fontWeight: 700,
              background: "rgba(255,255,255,0.2)",
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
