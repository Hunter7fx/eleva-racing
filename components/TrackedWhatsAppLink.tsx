"use client";

import type { MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedWhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function TrackedWhatsAppLink({ children, className, href }: TrackedWhatsAppLinkProps) {
  const handleClick = (_event: MouseEvent<HTMLAnchorElement>) => {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: "click_diagnostico_whatsapp" });
    window.gtag?.("event", "click_diagnostico_whatsapp", { event_category: "conversion", event_label: "diagnostico_presenca_digital" });
  };

  return <a className={className} href={href} data-gtm-event="click_diagnostico_whatsapp" onClick={handleClick}>{children}</a>;
}
