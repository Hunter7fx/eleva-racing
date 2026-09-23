"use client";

import { useEffect } from "react";

export function ContactHashRedirect() {
  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash === "#contact") {
      window.location.replace("/contato");
    }
  }, []);

  return null;
}
