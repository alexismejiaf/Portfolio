"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { MotionConfig } from "motion/react";
import { resolveTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

type ThemeContextValue = { theme: Theme; toggle: () => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync from the value the no-flash script already applied.
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    // SSR constraint: data-theme cannot be read in the useState initializer (document is
    // undefined server-side). This one-shot read bridges the no-flash script's DOM write
    // to React state; fires once on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (current === "dark" || current === "light") setTheme(current);
  }, []);

  // Follow OS changes only when the user has not set an explicit override.
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      const next = resolveTheme(null, mql.matches);
      document.documentElement.setAttribute("data-theme", next);
      setTheme(next);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_STORAGE_KEY, next); } catch {}
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
