"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { MotionConfig } from "motion/react";
import { resolveTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

type ToggleOrigin = { x: number; y: number };
type ThemeContextValue = { theme: Theme; toggle: (origin?: ToggleOrigin) => void };
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

  const toggle = useCallback((origin?: ToggleOrigin) => {
    const root = document.documentElement;
    const next: Theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const apply = () => {
      root.setAttribute("data-theme", next);
      try {
        // Toggling back to the system's theme drops the override so the site
        // keeps following the OS setting; otherwise persist the explicit choice.
        if (next === systemTheme) {
          localStorage.removeItem(THEME_STORAGE_KEY);
        } else {
          localStorage.setItem(THEME_STORAGE_KEY, next);
        }
      } catch {}
      setTheme(next);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !document.startViewTransition) {
      apply();
      return;
    }

    // Circular reveal expanding from the toggle button (see globals.css).
    if (origin) {
      const radius = Math.hypot(
        Math.max(origin.x, window.innerWidth - origin.x),
        Math.max(origin.y, window.innerHeight - origin.y),
      );
      root.style.setProperty("--vt-x", `${origin.x}px`);
      root.style.setProperty("--vt-y", `${origin.y}px`);
      root.style.setProperty("--vt-r", `${radius}px`);
    }

    // Suppress per-element color transitions so the snapshot doesn't animate twice.
    root.setAttribute("data-theme-switching", "");
    const transition = document.startViewTransition(apply);
    transition.finished.finally(() => root.removeAttribute("data-theme-switching"));
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
