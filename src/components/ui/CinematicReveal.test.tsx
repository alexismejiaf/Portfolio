import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const { contextRevert, fromTo, matchMedia, mediaAdd, mediaRevert, registerPlugin } = vi.hoisted(
  () => {
    const contextRevert = vi.fn();
    const mediaAdd = vi.fn();
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
  it("renders, registers only no-preference motion, and cleans up", () => {
    const { unmount } = render(<CinematicReveal>Content</CinematicReveal>);

    expect(screen.getByText("Content")).toHaveAttribute("data-cinematic-reveal");
    expect(mediaAdd).toHaveBeenCalledTimes(1);
    expect(mediaAdd).toHaveBeenCalledWith(
      "(prefers-reduced-motion: no-preference)",
      expect.any(Function),
    );

    unmount();

    expect(mediaRevert).toHaveBeenCalledTimes(1);
    expect(contextRevert).toHaveBeenCalledTimes(1);
  });
});
