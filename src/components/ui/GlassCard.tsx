"use client";

import { useGlassPointer } from "@/hooks/useGlassPointer";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export default function GlassCard({
  interactive = true,
  className = "",
  children,
  ...rest
}: GlassCardProps) {
  const pointer = useGlassPointer();
  const handlers = interactive ? pointer : {};
  return (
    <div
      {...rest}
      {...handlers}
      className={`glass ${interactive ? "glass-interactive" : ""} rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}
