"use client";

import { useState } from "react";

export default function Q2SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/notify-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "q2_subscriber" }),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="no-print mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
        <div className="text-2xl mb-2">✅</div>
        <p className="font-semibold text-emerald-800">Email сохранён!</p>
        <p className="text-sm text-emerald-700 mt-1">
          В июле 2026 пришлём Q3 бенчмарк автоматически на{" "}
          <strong>{email}</strong>
        </p>
      </div>
    );
  }

  return (
    <section className="no-print mt-10 bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg mb-1">
            🎁 Получить Q3 бесплатно в сентябре
          </h3>
          <p className="text-sm text-gray-600">
            Как покупатель Q2 — ты получишь следующий бенчмарк автоматически.
            Оставь email и пришлём Q3 (сентябрь 2026) бесплатно.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 min-w-0 w-full md:w-auto">
          <input
            type="email"
            required
            placeholder="твой@email.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 md:w-56 px-4 py-2.5 border border-indigo-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 disabled:opacity-60 whitespace-nowrap transition-colors"
          >
            {status === "loading" ? "..." : "Подписаться"}
          </button>
        </form>
        {status === "error" && (
          <p className="text-xs text-red-600 md:self-center">Ошибка — попробуй ещё раз</p>
        )}
      </div>
      <p className="text-xs text-gray-400 mt-3">
        Без спама. Только Q3 в сентябре. Отписаться можно в любой момент.
      </p>
    </section>
  );
}
