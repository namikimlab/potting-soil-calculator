import { calculateSoilVolume } from "./calculator";

describe("calculateSoilVolume", () => {
  test("calculates volume for rectangle", () => {
    const result = calculateSoilVolume({
      shape: "rectangle",
      width: 20,
      length: 30,
      height: 40,
      quantity: 1,
    });
    // 20 * 30 * 40 = 24000 cm^3 → 80% = 19200 → 19.2L → 19
    expect(result).toBe(19);
  });

  test("calculates volume for cylinder", () => {
    const result = calculateSoilVolume({
      shape: "cylinder",
      diameter: 20,
      height: 30,
      quantity: 1,
    });
    const radius = 10;
    const volumeCm3 = Math.PI * radius * radius * 30;
    const expected = Math.round((volumeCm3 / 1000) * 0.8);
    expect(result).toBe(expected);
  });

  test("calculates volume for cone", () => {
    const result = calculateSoilVolume({
      shape: "cone",
      topDiameter: 10,
      bottomDiameter: 20,
      height: 30,
      quantity: 1,
    });
    expect(result).toBeGreaterThan(0);
  });

  test("calculates volume for 'other' shape", () => {
    const result = calculateSoilVolume({
      shape: "other",
      surfaceArea: 100,
      height: 10,
      quantity: 1,
    });
    const expected = Math.round((100 * 10 / 1000) * 0.8);
    expect(result).toBe(expected);
  });

  test("returns 0 for invalid (negative height)", () => {
    const result = calculateSoilVolume({
      shape: "rectangle",
      width: 10,
      length: 10,
      height: -5,
      quantity: 1,
    });
    expect(result).toBe(0);
  });

  test("applies quantity correctly", () => {
    const result = calculateSoilVolume({
      shape: "rectangle",
      width: 10,
      length: 10,
      height: 10,
      quantity: 2,
    });
    const expected = Math.round(((10 * 10 * 10) / 1000) * 0.8 * 2);
    expect(result).toBe(expected);
  });
});