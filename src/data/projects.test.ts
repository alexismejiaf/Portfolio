import { describe, it, expect } from "vitest";
import { projects, featuredProjects, gridProjects, categories } from "./projects";

describe("projects data", () => {
  it("has exactly three featured projects", () => {
    expect(featuredProjects).toHaveLength(3);
    expect(featuredProjects.map((p) => p.title)).toEqual(
      expect.arrayContaining(["MKT by Rita", "TruckLog", "Data Extractor"]),
    );
  });
  it("featured + grid partitions the full list", () => {
    expect(featuredProjects.length + gridProjects.length).toBe(projects.length);
  });
  it("every project has unique id and required fields", () => {
    const ids = new Set(projects.map((p) => p.id));
    expect(ids.size).toBe(projects.length);
    for (const p of projects) {
      expect(p.title).toBeTruthy();
      expect(p.description.length).toBeGreaterThan(20);
      expect(p.tech.length).toBeGreaterThan(0);
      expect(p.category).toBeTruthy();
    }
  });
  it("derives categories including 'All' first", () => {
    expect(categories[0]).toBe("All");
  });
});
