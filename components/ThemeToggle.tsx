"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const THEME_KEY = "eleva-theme";

function readTheme() {
  try {
    const savedTheme = window.localStorage?.getItem(THEME_KEY);
    if (savedTheme) return savedTheme;
  } catch {
    // Some embedded previews disable localStorage; use the cookie fallback below.
  }

  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${THEME_KEY}=`))
    ?.split("=")[1];
}

function writeTheme(theme: "dark" | "light") {
  try {
    window.localStorage?.setItem(THEME_KEY, theme);
  } catch {
    // Keep the theme functional in embedded previews without localStorage.
  }

  document.cookie = `${THEME_KEY}=${theme}; path=/; max-age=31536000; SameSite=Lax`;
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const nextIsDark = readTheme() === "dark";
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("theme-dark", nextIsDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("theme-dark", nextIsDark);
    writeTheme(nextIsDark ? "dark" : "light");
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={isDark}
      title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {isDark ? <Sun size={16} strokeWidth={1.7} /> : <Moon size={16} strokeWidth={1.7} />}
    </button>
  );
}
