"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CinematicRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function CinematicReveal({ children, className, delay = 0 }: CinematicRevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          root.current,
          { opacity: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            delay,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      });
    }, root);

    return () => {
      media.revert();
      context.revert();
    };
  }, [delay]);

  return (
    <div ref={root} className={className} data-cinematic-reveal>
      {children}
    </div>
  );
}
