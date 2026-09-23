"use client";

import { type CSSProperties, type ElementType, type ReactNode, useEffect, useRef, useState } from "react";

type FadeOnScrollProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeOnScroll({ as: Tag = "div", children, className = "", delay = 0 }: FadeOnScrollProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Tag ref={elementRef} className={`fade-on-scroll ${visible ? "is-visible" : ""} ${className}`.trim()} style={{ "--fade-delay": `${delay}ms` } as CSSProperties}>{children}</Tag>;
}
