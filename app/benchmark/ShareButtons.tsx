"use client";

import { useState } from "react";
import { ymGoal } from "@/app/components/YandexMetrica";

const PAGE_URL = "https://freelancecalc.ru/benchmark";
const PAGE_TITLE =
  "Рыночные ставки фрилансеров по городам России — 2026. Бесплатный предпросмотр.";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(
    "Нашёл таблицу медианных ставок фрилансеров по городам России — может пригодиться для торга с клиентами 👇"
  )}`;

  const vkUrl = `https://vk.com/share.php?url=${encodeURIComponent(PAGE_URL)}&title=${encodeURIComponent(
    PAGE_TITLE
  )}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      ymGoal("benchmark_share_copy");
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-gray-500 shrink-0">Поделиться:</span>

      {/* Telegram */}
      <a
        href={tgUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => ymGoal("benchmark_share_telegram")}
        className="inline-flex items-center gap-1.5 text-sm font-medium bg-[#229ED9] hover:bg-[#1a8abf] text-white px-3 py-1.5 rounded-lg transition-colors"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.667l-2.95-.924c-.64-.203-.658-.64.136-.954l11.57-4.46c.537-.194 1.006.131.837.941l-.829-.05z" />
        </svg>
        Telegram
      </a>

      {/* VK */}
      <a
        href={vkUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => ymGoal("benchmark_share_vk")}
        className="inline-flex items-center gap-1.5 text-sm font-medium bg-[#0077FF] hover:bg-[#0062d4] text-white px-3 py-1.5 rounded-lg transition-colors"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.001-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.565c0 .424-.135.677-1.253.677-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.779.678.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.743c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.068.712-.559.712z" />
        </svg>
        VK
      </a>

      {/* Copy link */}
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition-colors"
      >
        {copied ? (
          <>
            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Скопировано!
          </>
        ) : (
          <>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            Скопировать ссылку
          </>
        )}
      </button>
    </div>
  );
}
