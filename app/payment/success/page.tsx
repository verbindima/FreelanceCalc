"use client";

import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md border border-slate-200 p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Спасибо за покупку!
        </h1>
        <p className="text-slate-600 text-sm mb-6">
          PDF «Рыночные ставки фрилансеров» отправлен на вашу почту, указанную
          при оплате. Если письмо не пришло — проверьте папку «Спам».
        </p>

        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6">
          <p className="text-sm text-indigo-700 font-medium">
            📊 Отчёт включает:
          </p>
          <ul className="text-sm text-indigo-600 mt-2 space-y-1 text-left">
            <li>• Медианные ставки по 20+ специальностям</li>
            <li>• Разбивка по 10 городам России</li>
            <li>• Актуальные данные за Q1 2026</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
        >
          ← Вернуться к калькулятору
        </Link>
      </div>
    </main>
  );
}
