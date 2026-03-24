"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

type AdType = "adaptive" | "feed" | "context";

interface YandexAdProps {
  blockId: string;
  /** Тип блока: adaptive = адаптивный (рекомендуется), feed = в ленте, context = контекстный */
  type?: AdType;
  /** Минимальная высота контейнера в px (только для adaptive, необязательно) */
  minHeight?: number;
}

/**
 * Yandex Advertising Network (РСЯ) — адаптивный рекламный блок.
 *
 * Рекомендованный тип: adaptive (автоматически подстраивается под ширину контейнера).
 * Ширина блока = 100% родителя (responsive). Высота управляется Яндексом автоматически.
 *
 * Для включения:
 *   1. Получи blockId на https://partner.yandex.ru (создай адаптивный блок)
 *   2. Установи в Vercel:
 *        NEXT_PUBLIC_AD_BLOCK_ID_TOP=R-A-XXXXXX-1
 *        NEXT_PUBLIC_AD_BLOCK_ID_BOTTOM=R-A-XXXXXX-2
 *        NEXT_PUBLIC_YANDEX_AD_ENABLED=true
 */
export default function YandexAd({
  blockId,
  type = "adaptive",
  minHeight,
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

  if (!isEnabled) {
    return null;
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
