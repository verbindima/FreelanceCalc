import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import path from "node:path";

export const alt = "FreelanceCalc — калькулятор ставки фрилансера";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (2026-04-13, extracted from the authored PNG)
const INDIGO = "#302858";
const MINT   = "#88D8B0";
const BG     = "#F8F0E8";
const SLATE  = "#0F172A";

// Inline the master mark as a base64 data URL so next/og doesn't need
// to fetch over the network at edge runtime (keeps node runtime too).
function logoDataUrl(): string {
  const file = path.join(process.cwd(), "public", "logo-master.png");
  const buf = readFileSync(file);
  return `data:image/png;base64,${buf.toString("base64")}`;
}

export default async function Image() {
  const logoSrc = logoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: BG,
          display: "flex",
          padding: "72px 60px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Original brand mark (authored PNG) */}
        <img
          src={logoSrc}
          width={440}
          height={440}
          alt=""
          style={{ marginTop: 55 }}
        />

        {/* Text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 40,
            flex: 1,
          }}
        >
          <div
            style={{
              background: "rgba(136, 216, 176, 0.28)",
              border: `2px solid ${MINT}`,
              color: INDIGO,
              borderRadius: 999,
              padding: "6px 20px",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 24,
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            Бесплатный калькулятор
          </div>

          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: INDIGO,
              lineHeight: 1.08,
              marginBottom: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Рассчитай справедливую</span>
            <span>ставку фрилансера</span>
          </div>

          <div
            style={{
              fontSize: 28,
              color: SLATE,
              lineHeight: 1.35,
              marginBottom: 30,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>За 30 секунд — с налогами НПД/УСН,</span>
            <span>отпуском и реальной загрузкой.</span>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {["36 специальностей", "26 городов", "Самозанятый и ИП"].map((label) => (
              <div
                key={label}
                style={{
                  background: "rgba(48, 40, 88, 0.06)",
                  border: `1px solid rgba(48, 40, 88, 0.18)`,
                  borderRadius: 10,
                  padding: "8px 14px",
                  color: INDIGO,
                  fontSize: 18,
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 60,
            right: 60,
            bottom: 48,
            height: 4,
            background: MINT,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: 62,
            color: INDIGO,
            fontSize: 22,
            fontWeight: 700,
            display: "flex",
          }}
        >
          freelancecalc.ru
        </div>
      </div>
    ),
    { ...size }
  );
}
