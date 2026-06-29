import { describe, it, expect } from "vitest";
import { resolveTheme, THEME_STORAGE_KEY, noFlashScript } from "./theme";

describe("resolveTheme", () => {
  it("uses stored value when valid", () => {
    expect(resolveTheme("light", true)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
  });
  it("falls back to OS preference when no stored value", () => {
    expect(resolveTheme(null, true)).toBe("dark");
    expect(resolveTheme(null, false)).toBe("light");
  });
  it("ignores invalid stored value", () => {
    expect(resolveTheme("purple", true)).toBe("dark");
  });
});

describe("constants", () => {
  it("exposes storage key", () => {
    expect(THEME_STORAGE_KEY).toBe("theme");
  });
  it("noFlashScript references the storage key and data-theme", () => {
    expect(noFlashScript).toContain("data-theme");
    expect(noFlashScript).toContain("theme");
  });
});
