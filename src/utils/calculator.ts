/**
 * calculator.ts
 *
 * Contains logic to calculate potting soil volume in liters
 * based on user-provided shape and dimensions.
 * 
 * Return 80% of the total volume as recommended soil volumne
 */

type VolumeInput = {
  shape: "rectangle" | "cylinder" | "cone" | "other";
  width?: number | string;
  length?: number | string;
  height?: number | string;
  diameter?: number | string;
  topDiameter?: number | string;
  bottomDiameter?: number | string;
  surfaceArea?: number | string;
  quantity: number | string;
};

/**
 * Converts any number-like value to a number, returns 0 if invalid.
 */
const toNumber = (value?: number | string): number => {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
};

/**
 * Calculates soil volume in liters for given pot shape and dimensions.
 * Assumes pots are filled to 80% of their total volume.
 *
 * @param input - User input containing shape and size dimensions
 * @returns 80% of total volume in liters (rounded and multiplied by quantity)
 */
export function calculateSoilVolume(input: VolumeInput): number {
  const shape = input.shape;

  // Convert all values to numbers for safety
  const width = toNumber(input.width);
  const length = toNumber(input.length);
  const height = toNumber(input.height);
  const diameter = toNumber(input.diameter);
  const topDiameter = toNumber(input.topDiameter);
  const bottomDiameter = toNumber(input.bottomDiameter);
  const surfaceArea = toNumber(input.surfaceArea);
  const quantity = toNumber(input.quantity);

  // Early exit for invalid core values
  if (height <= 0 || quantity <= 0) return 0;

  let volumeCm3 = 0;

  switch (shape) {
    case "rectangle":
      // Volume = width × length × height
      if (width > 0 && length > 0) {
        volumeCm3 = width * length * height;
      }
      break;

    case "cylinder":
      // Volume = π × r² × h
      if (diameter > 0) {
        const radius = diameter / 2;
        volumeCm3 = Math.PI * radius * radius * height;
      }
      break;

    case "cone":
      // Volume = (1/3) × π × h × (r1² + r1 × r2 + r2²)
      if (topDiameter > 0 && bottomDiameter > 0) {
        const topR = topDiameter / 2;
        const bottomR = bottomDiameter / 2;
        volumeCm3 =
          (1 / 3) *
          Math.PI *
          height *
          (topR * topR + topR * bottomR + bottomR * bottomR);
      }
      break;

    case "other":
      // Volume = surface area × height
      if (surfaceArea > 0) {
        volumeCm3 = surfaceArea * height;
      }
      break;
  }

  // Convert to liters and apply 80% fill assumption
  const volumeL = (volumeCm3 / 1000) * 0.8;
  
  // Multiply by quantity and round
  return Math.round(volumeL * quantity);
}
