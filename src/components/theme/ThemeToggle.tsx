"use client";

import { motion, useReducedMotion } from "motion/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const reduce = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="glass glass-interactive inline-flex h-10 w-10 items-center justify-center rounded-full text-text transition-colors hover:bg-(--glass-bg-strong)"
    >
      <motion.span
        key={theme}
        initial={reduce ? false : { rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="inline-flex"
      >
        {isDark ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
      </motion.span>
    </button>
  );
}
