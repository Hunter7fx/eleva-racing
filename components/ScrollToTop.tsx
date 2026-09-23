"use client";

import { useEffect } from "react";
import { requestScrollTo } from "@/lib/scroll";

export function ScrollToTop() {
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => requestScrollTo(0, "auto"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
