"use client";

import { useState } from "react";

function ymGoal(name: string) {
  if (typeof window !== "undefined" && typeof (window as unknown as Record<string, unknown>).ym === "function") {
    const id = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
    (window as unknown as Record<string, (...args: unknown[]) => void>).ym?.(id, "reachGoal", name);
  }
}

export default function BuyButton({ label = "Купить полный PDF — 249 ₽" }: { label?: string }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    ymGoal("upsell_click");
    try {
      const res = await fetch("/api/payment", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        ymGoal("payment_started");
        window.location.href = data.url;
      } else {
        alert(data.error || "Ошибка при создании платежа. Попробуйте позже.");
        setLoading(false);
      }
    } catch {
      alert("Не удалось связаться с сервером оплаты. Попробуйте позже.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm"
    >
      {loading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Переход к оплате…
        </>
      ) : (
        label
      )}
    </button>
  );
}
