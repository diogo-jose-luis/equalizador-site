"use client";

import Script from "next/script";

type JivoChatProps = {
  widgetId: string; // ex: "AbCdEfGh"
};

export default function JivoChat({ widgetId }: JivoChatProps) {
  if (!widgetId) return null;

  // Script oficial do Jivo geralmente usa: https://code.jivosite.com/widget/<WIDGET_ID>
  const src = `https://code.jivosite.com/widget/${widgetId}`;

  return (
    <Script
      src={src}
      strategy="afterInteractive"
      // opcional: ajuda a evitar duplicar se re-renderizar
      id="jivochat-widget"
    />
  );
}
