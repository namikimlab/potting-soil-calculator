// src/utils/calculator.ts

export function calculateSoilVolume(
    shape: string,
    width: number,
    height: number,
    quantity: number
  ): number {
    const radius = width / 2;
    let volume = 0;
  
    switch (shape) {
      case "square":
        volume = width * width * height;
        break;
      case "cylinder":
        volume = Math.PI * radius * radius * height;
        break;
      case "cone":
        volume = (1 / 3) * Math.PI * radius * radius * height;
        break;
      case "ellipse":
        volume = Math.PI * radius * (width * 0.6) * height;
        break;
      default:
        return 0;
    }
  
    return Math.round((volume / 1000) * quantity); // cm³ → L
  }
  