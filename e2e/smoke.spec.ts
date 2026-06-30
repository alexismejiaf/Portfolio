import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("home page loads with title and all main sections", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok()).toBe(true);

    await expect(page).toHaveTitle(/Bryan Alexis Mejía Fonseca/);

    // Hero (#home)
    await expect(page.locator("#home")).toBeVisible();

    // All sections render
    for (const id of ["about", "skills", "experience", "projects", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test("has primary navigation landmark", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: /main navigation/i })).toBeVisible();
  });

  test("no console errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors, errors.join("\n")).toHaveLength(0);
  });

  test("structured data (JSON-LD) is present and valid", async ({ page }) => {
    await page.goto("/");
    const ldJson = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(ldJson).toBeTruthy();
    const data = JSON.parse(ldJson!);
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBeTruthy();
  });

  test("hero photo falls back to initials when image fails to load", async ({ page }) => {
    await page.route("**/_next/image**", (route) => route.abort());
    await page.route("**/profile.png", (route) => route.abort());
    await page.goto("/");
    await expect(page.getByRole("img", { name: /Bryan Alexis Mejía Fonseca/i })).toBeVisible();
  });

  test("sitemap.xml and robots.txt are reachable", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBe(true);
    expect((await sitemap.text()).toLowerCase()).toContain("<urlset");

    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBe(true);
    expect((await robots.text()).toLowerCase()).toContain("sitemap");
  });
});
