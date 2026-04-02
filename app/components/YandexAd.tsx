"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

type AdType = "adaptive" | "feed" | "context";

interface YandexAdProps {
  blockId: string;
  /** Тип блока: adaptive = адаптивный (рекомендуется), feed = в ленте, context = контекстный */
  type?: AdType;
  /**
   * Минимальная высота контейнера в px.
   * Нужна только для предотвращения прыжков при загрузке.
   * Реальный размер блока устанавливает Яндекс автоматически.
   * Рекомендуемые значения: top=90, bottom=250
   */
  minHeight?: number;
  /** Название позиции (для placeholder в режиме разработки) */
  label?: string;
}

/**
 * ═══════════════════════════════════════════════════════════
 * ИНСТРУКЦИЯ ПО ПОДКЛЮЧЕНИЮ РСЯ (Яндекс Рекламная Сеть)
 * ═══════════════════════════════════════════════════════════
 *
 * ШАГ 1. Зарегистрируйся на https://partner.yandex.ru
 *   → «Стать партнёром» → «Сайт» → добавить freelancecalc.ru
 *   → Дождись модерации (1-3 дня)
 *
 * ШАГ 2. Создай ДВА рекламных блока:
 *   → «Мои блоки» → «Новый блок»
 *   → Тип: «Адаптивный» (НЕ выбирай фиксированный размер!)
 *   → Адаптивный блок сам подстраивается под ширину экрана:
 *       на телефоне → ~320px
 *       на планшете → ~768px
 *       на десктопе → полная ширина контейнера
 *   → Высоту Яндекс выбирает автоматически (обычно 90-250px)
 *
 * ШАГ 3. Скопируй ID двух блоков (формат: R-A-XXXXXXX-1)
 *   → Блок 1 (верхний, под шапкой) — обычно R-A-XXXXXXX-1
 *   → Блок 2 (нижний, под калькулятором) — обычно R-A-XXXXXXX-2
 *
 * ШАГ 4. Добавь в Vercel Dashboard (Settings → Environment Variables):
 *   NEXT_PUBLIC_YANDEX_AD_ENABLED = true
 *   NEXT_PUBLIC_AD_BLOCK_ID_TOP   = R-A-XXXXXXX-1
 *   NEXT_PUBLIC_AD_BLOCK_ID_BOTTOM = R-A-XXXXXXX-2
 *   → После сохранения нажми «Redeploy» (или сделай пустой коммит)
 *
 * ⚠️  Если блок не показывается первые часы — это нормально.
 *     Яндекс наполняет блок рекламой постепенно.
 * ═══════════════════════════════════════════════════════════
 */
export default function YandexAd({
  blockId,
  type = "adaptive",
  minHeight,
  label,
}: YandexAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const isEnabled = process.env.NEXT_PUBLIC_YANDEX_AD_ENABLED === "true";

  useEffect(() => {
    if (!isEnabled || rendered.current || !containerRef.current) return;
    rendered.current = true;

    const w = window as any;
    w.yaContextCb = w.yaContextCb || [];
    w.yaContextCb.push(() => {
      w.Ya.Context.AdvManager.render({
        blockId,
        renderTo: containerRef.current!.id,
        type,
      });
    });
  }, [blockId, isEnabled, type]);

  // Показываем placeholder только в dev-режиме (NODE_ENV=development)
  const isDev = process.env.NODE_ENV === "development";

  if (!isEnabled) {
    if (!isDev) return null;

    // Dev-режим: показываем где будет реклама
    const placeholderHeight = minHeight ?? (label?.includes("bottom") ? 250 : 90);
    return (
      <div
        style={{
          width: "100%",
          minHeight: `${placeholderHeight}px`,
          background: "repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #e8e8e8 10px, #e8e8e8 20px)",
          border: "2px dashed #ccc",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "4px",
          color: "#999",
          fontSize: "12px",
          fontFamily: "monospace",
        }}
      >
        <span>📢 РСЯ блок ({label ?? blockId})</span>
        <span>Адаптивный · ~{placeholderHeight}px высота · 100% ширина</span>
        <span style={{ fontSize: "10px" }}>Установи NEXT_PUBLIC_YANDEX_AD_ENABLED=true чтобы включить</span>
      </div>
    );
  }

  const containerId = `yandex_rtb_${blockId}`;

  return (
    <>
      <Script
        src="https://yandex.ru/ads/system/context.js"
        strategy="afterInteractive"
      />
      <div
        ref={containerRef}
        id={containerId}
        style={{
          width: "100%",
          minHeight: minHeight ? `${minHeight}px` : undefined,
          overflow: "hidden",
        }}
      />
    </>
  );
}
