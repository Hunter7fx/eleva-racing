"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Children, type ElementType, type ReactNode, type RefObject, useEffect, useMemo, useRef } from "react";
import { ELEVA_SCROLL_EVENT } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger);

type ScrollFloatProps = {
  children: ReactNode;
  as?: ElementType;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
};

export function ScrollFloat({
  children,
  as: Tag = "h2",
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLElement>(null);
  const splitText = useMemo<ReactNode[]>(() => {
    let characterIndex = 0;
    const result: ReactNode[] = [];

    Children.forEach(children, (child) => {
      if (typeof child !== "string" && typeof child !== "number") {
        if (child !== null && typeof child === "object") result.push(child);
        return;
      }

      String(child).split("").forEach((character) => {
        result.push(
          <span className="char" key={`char-${characterIndex++}`}>
            {character === " " ? "\u00a0" : character}
          </span>,
        );
      });
    });

    return result;
  }, [children]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroller = scrollContainerRef?.current ?? window;
    const characters = element.querySelectorAll<HTMLElement>(".char");
    if (!characters.length) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        characters,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: {
            trigger: element,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        },
      );
    }, element);

    const updateTrigger = () => ScrollTrigger.update();
    window.addEventListener(ELEVA_SCROLL_EVENT, updateTrigger);
    window.addEventListener("resize", updateTrigger, { passive: true });
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener(ELEVA_SCROLL_EVENT, updateTrigger);
      window.removeEventListener("resize", updateTrigger);
      context.revert();
    };
  }, [animationDuration, ease, scrollContainerRef, scrollEnd, scrollStart, stagger, splitText]);

  return (
    <Tag ref={containerRef} className={`scroll-float ${containerClassName}`.trim()}>
      <span className={`scroll-float-text ${textClassName}`.trim()}>{splitText}</span>
    </Tag>
  );
}
