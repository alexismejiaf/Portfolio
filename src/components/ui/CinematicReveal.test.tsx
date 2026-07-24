import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const { contextRevert, fromTo, matchMedia, mediaAdd, mediaRevert, registerPlugin } = vi.hoisted(
  () => {
    const contextRevert = vi.fn();
    const mediaAdd = vi.fn((_query: string, callback: () => void) => callback());
    const mediaRevert = vi.fn();

    return {
      contextRevert,
      fromTo: vi.fn(),
      matchMedia: vi.fn(() => ({ add: mediaAdd, revert: mediaRevert })),
      mediaAdd,
      mediaRevert,
      registerPlugin: vi.fn(),
    };
  },
);

vi.mock("gsap", () => ({
  gsap: {
    context: vi.fn((callback: () => void) => {
      callback();
      return { revert: contextRevert };
    }),
    fromTo,
    matchMedia,
    registerPlugin,
  },
}));

vi.mock("gsap/ScrollTrigger", () => ({ ScrollTrigger: {} }));

import CinematicReveal from "./CinematicReveal";

describe("CinematicReveal", () => {
  it("renders, registers animation for no-preference motion, and cleans up", () => {
    const { unmount } = render(<CinematicReveal>Content</CinematicReveal>);

    const root = screen.getByText("Content");
    expect(root).toHaveAttribute("data-cinematic-reveal");
    expect(mediaAdd).toHaveBeenCalledTimes(1);
    expect(mediaAdd).toHaveBeenCalledWith(
      "(prefers-reduced-motion: no-preference)",
      expect.any(Function),
    );
    expect(fromTo).toHaveBeenCalledWith(
      root,
      { opacity: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      },
    );

    unmount();

    expect(mediaRevert).toHaveBeenCalledTimes(1);
    expect(contextRevert).toHaveBeenCalledTimes(1);
  });
});
