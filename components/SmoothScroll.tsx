"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { ELEVA_SCROLL_EVENT, ELEVA_SCROLL_TO_EVENT, type ElevaScrollToDetail } from "@/lib/scroll";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const emitNativeScroll = () => {
      window.dispatchEvent(new CustomEvent(ELEVA_SCROLL_EVENT, {
        detail: { direction: 0, scroll: window.scrollY, velocity: 0 },
      }));
    };

    const lenis = reducedMotion.matches ? null : new Lenis({
      lerp: 0.12,
      smoothWheel: true,
    });

    let animationFrame = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      animationFrame = window.requestAnimationFrame(raf);
    };

    const onLenisScroll = ({ direction, scroll, velocity }: { direction: number; scroll: number; velocity: number }) => {
      window.dispatchEvent(new CustomEvent(ELEVA_SCROLL_EVENT, {
        detail: { direction, scroll, velocity },
      }));
    };

    const onScrollTo = (event: Event) => {
      const { behavior = "smooth", top } = (event as CustomEvent<ElevaScrollToDetail>).detail;
      const effectiveBehavior = reducedMotion.matches ? "auto" : behavior;

      if (lenis) {
        lenis.scrollTo(top, { immediate: effectiveBehavior === "auto" });
        return;
      }

      window.scrollTo({ top, behavior: effectiveBehavior });
    };

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;

      event.preventDefault();
      window.history.replaceState(null, "", href);
      onScrollTo(new CustomEvent<ElevaScrollToDetail>(ELEVA_SCROLL_TO_EVENT, {
        detail: { behavior: "smooth", top: target.getBoundingClientRect().top + window.scrollY },
      }));
    };

    if (lenis) {
      lenis.on("scroll", onLenisScroll);
      animationFrame = window.requestAnimationFrame(raf);
    } else {
      window.addEventListener("scroll", emitNativeScroll, { passive: true });
    }

    window.addEventListener(ELEVA_SCROLL_TO_EVENT, onScrollTo);
    window.addEventListener("click", onAnchorClick);
    emitNativeScroll();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener(ELEVA_SCROLL_TO_EVENT, onScrollTo);
      window.removeEventListener("click", onAnchorClick);
      window.removeEventListener("scroll", emitNativeScroll);
      lenis?.off("scroll", onLenisScroll);
      lenis?.destroy();
    };
  }, []);

  return null;
}
