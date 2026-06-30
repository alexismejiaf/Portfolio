import { test, expect } from "@playwright/test";

test.describe("theme toggle", () => {
  test("toggles between light and dark and persists to localStorage", async ({ page }) => {
    await page.goto("/");

    const html = page.locator("html");
    const initial = await html.getAttribute("data-theme");
    expect(["light", "dark"]).toContain(initial);

    const toggle = page.getByRole("button", { name: /switch to (light|dark) mode/i });
    await toggle.click();

    await expect.poll(async () => html.getAttribute("data-theme")).not.toBe(initial);

    const stored = await page.evaluate(() => localStorage.getItem("theme"));
    expect(stored).toBeTruthy();

    // Reload and confirm persistence
    await page.reload();
    const afterReload = await html.getAttribute("data-theme");
    expect(afterReload).toBe(stored);
  });
});
