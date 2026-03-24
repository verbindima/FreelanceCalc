"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface YandexAdProps {
  blockId: string;
  width: number;
  height: number;
}

/**
 * Yandex Advertising Network (РСЯ) ad block.
 * Requires a real blockId from https://partner.yandex.ru after moderation.
 * Set NEXT_PUBLIC_YANDEX_AD_ENABLED=true to render ads.
 */
export default function YandexAd({ blockId, width, height }: YandexAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const isEnabled = process.env.NEXT_PUBLIC_YANDEX_AD_ENABLED === "true";

  useEffect(() => {
    if (!isEnabled || rendered.current) return;
    rendered.current = true;

    const w = window as any;
    w.yaContextCb = w.yaContextCb || [];
    w.yaContextCb.push(() => {
      w.Ya.Context.AdvManager.render({
        blockId,
        renderTo: containerRef.current?.id,
        type: "feed",
      });
    });
  }, [blockId, isEnabled]);

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
        style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%" }}
      />
    </>
  );
}
