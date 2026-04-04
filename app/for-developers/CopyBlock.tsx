"use client";
import { useState } from "react";

export function CopyBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="relative">
      <pre className="bg-gray-900 text-green-400 rounded-xl p-4 text-sm overflow-x-auto whitespace-pre font-mono leading-relaxed">
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-gray-200 text-xs px-3 py-1.5 rounded-lg transition-colors font-medium"
      >
        {copied ? "✓ Скопировано" : label}
      </button>
    </div>
  );
}
