"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ELEVA_SCROLL_EVENT } from "@/lib/scroll";

type ScrollExpandMediaProps = {
  alt: string;
  description: string;
  eyebrow: string;
  label: string;
  src: string;
  title: string;
  tone?: "light" | "green";
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function ScrollExpandMedia({ alt, description, eyebrow, label, src, title, tone = "light" }: ScrollExpandMediaProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const media = mediaRef.current;
    const content = contentRef.current;
    if (!section || !frame || !media || !content) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sticky = section.querySelector<HTMLElement>(".scroll-expand-media__sticky");
    const update = () => {
      const sectionTop = section.getBoundingClientRect().top;
      // Finish the expansion before the section runs out of scrollable space.
      const travel = Math.max(window.innerHeight * 0.7, 1);
      const progress = clamp(-sectionTop / travel, 0, 1);
      const eased = progress * progress * (3 - 2 * progress);
      // Keep the copy inside the visible frame while preserving the expand effect.
      const inset = 15 * (1 - eased);
      const radius = 28 * (1 - eased);

      if (sticky && window.innerWidth < 760) {
        const sectionBottom = sectionTop + section.offsetHeight;
        sticky.style.position = sectionTop > 0 || sectionBottom < window.innerHeight ? "absolute" : "fixed";
        sticky.style.top = sectionTop > 0 ? "0px" : sectionBottom < window.innerHeight ? `${Math.max(0, section.offsetHeight - window.innerHeight)}px` : "0px";
        sticky.style.left = "0px";
        sticky.style.width = "100%";
      } else if (sticky) {
        sticky.style.removeProperty("position");
        sticky.style.removeProperty("top");
        sticky.style.removeProperty("left");
        sticky.style.removeProperty("width");
      }

      frame.style.clipPath = `inset(${inset}% round ${radius}px)`;
      media.style.transform = `scale(${1.18 - eased * 0.18})`;
      // The image expands into a full-screen visual, but its message must remain readable.
      content.style.opacity = "1";
      content.style.transform = `translate3d(0, ${eased * -34}px, 0) scale(${1 - eased * 0.04})`;
    };
    update();
    if (reduced) return;

    window.addEventListener(ELEVA_SCROLL_EVENT, update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("load", update);

    return () => {
      window.removeEventListener(ELEVA_SCROLL_EVENT, update);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
    };
  }, []);

  return (
    <section className={`scroll-expand-media scroll-expand-media--${tone}`} ref={sectionRef} aria-label="Uma ideia ganhando forma">
      <div className="scroll-expand-media__sticky">
        <div className="scroll-expand-media__frame" ref={frameRef}>
          <Image
            ref={mediaRef}
            className="scroll-expand-media__image"
            src={src}
            alt={alt}
            fill
            sizes="100vw"
          />
          <div className="scroll-expand-media__wash" />
          <div className="scroll-expand-media__content" ref={contentRef}>
            <p className="scroll-expand-media__eyebrow">{eyebrow}</p>
            <p className="scroll-expand-media__label">{label}</p>
            <h3>{title}</h3>
            <p className="scroll-expand-media__description">{description}</p>
          </div>
          <span className="scroll-expand-media__mark" aria-hidden="true">✳</span>
        </div>
      </div>
    </section>
  );
}
