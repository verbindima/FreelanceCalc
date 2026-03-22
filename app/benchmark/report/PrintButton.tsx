"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-indigo-50 transition-colors"
    >
      🖨️ Сохранить PDF (Ctrl+P)
    </button>
  );
}
