import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FreelanceCalc — калькулятор ставки фрилансера";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Tag */}
        <div
          style={{
            background: "rgba(99,102,241,0.3)",
            border: "1px solid rgba(165,180,252,0.4)",
            color: "#a5b4fc",
            borderRadius: "999px",
            padding: "6px 18px",
            fontSize: "18px",
            fontWeight: 600,
            marginBottom: "24px",
            display: "flex",
          }}
        >
          🧮 Бесплатный инструмент
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "20px",
            maxWidth: "900px",
            display: "flex",
          }}
        >
          Рассчитай ставку фрилансера
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: "30px",
            color: "#c7d2fe",
            lineHeight: 1.4,
            marginBottom: "48px",
            maxWidth: "800px",
            display: "flex",
          }}
        >
          С учётом налогов (самозанятый / ИП), отпуска и реальной загрузки. 30 секунд.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {[
            { icon: "🎯", label: "36 специальностей" },
            { icon: "🏙️", label: "26 городов" },
            { icon: "🧾", label: "Самозанятый и ИП" },
            { icon: "✅", label: "Бесплатно" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "10px 20px",
                color: "#e0e7ff",
                fontSize: "20px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {icon} {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "rgba(165,180,252,0.7)",
            fontSize: "22px",
            fontWeight: 600,
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
