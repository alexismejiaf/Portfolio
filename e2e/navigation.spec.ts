import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("desktop nav anchors scroll to matching section", async ({ page }) => {
    test.skip(test.info().project.name === "mobile-chrome", "desktop-only");
    await page.goto("/");

    for (const id of ["about", "skills", "experience", "projects", "contact"]) {
      await page.getByRole("link", { name: new RegExp(`^${id}$`, "i") }).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect(page.locator(`#${id}`)).toBeInViewport({ ratio: 0.05 });
    }
  });

  test("mobile menu toggles open and closed", async ({ page }) => {
    test.skip(test.info().project.name !== "mobile-chrome", "mobile-only");
    await page.goto("/");

    const toggle = page.getByRole("button", { name: /toggle navigation menu/i });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    // Clicking a nav item closes the menu
    await page.getByRole("link", { name: /^about$/i }).click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test("Download CV link points to the PDF asset", async ({ page }) => {
    await page.goto("/");
    const link = page.getByRole("link", { name: /download cv/i }).first();
    const href = await link.getAttribute("href");
    expect(href).toMatch(/\.pdf$/i);
  });
});
