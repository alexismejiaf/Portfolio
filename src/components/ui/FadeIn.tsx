"use client";

import { motion, useReducedMotion } from "motion/react";

type FadeInProps = {
  children: React.ReactNode;
  y?: number;
  scale?: number;
  delay?: number;
  className?: string;
};

export default function FadeIn({ children, y, scale, delay = 0, className }: FadeInProps) {
  const reduce = useReducedMotion();
  const offset = { ...(y !== undefined && { y }), ...(scale !== undefined && { scale }) };
  const settled = {
    ...(y !== undefined && { y: 0 }),
    ...(scale !== undefined && { scale: 1 }),
  };
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offset }}
      animate={{ opacity: 1, ...settled }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
