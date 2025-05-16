type VolumeInput = {
  shape: "rectangle" | "cylinder" | "cone" | "other";
  width?: number | string; // rectangle
  length?: number | string; // rectangle
  height?: number | string; 
  diameter?: number | string; // cylinder
  topDiameter?: number | string; // cone
  bottomDiameter?: number | string; // cone
  surfaceArea?: number | string; // other
  quantity: number | string; 
};

export function calculateSoilVolume(input: VolumeInput): number {
  console.log("입력값:", input);

  const shape = input.shape;

  // 모든 수치 입력값을 숫자로 변환
  const width = Number(input.width);
  const height = Number(input.height);
  const length = Number(input.length);
  const diameter = Number(input.diameter);
  const topDiameter = Number(input.topDiameter);
  const bottomDiameter = Number(input.bottomDiameter);
  const surfaceArea = Number(input.surfaceArea);
  const quantity = Number(input.quantity);

  if (!height || !quantity) return 0;

  let volumeCm3 = 0;

  switch (shape) {
    case "rectangle":
      if (width && length) {
        volumeCm3 = width * length * height;
      }
      break;

    case "cylinder":
      if (diameter) {
        const radius = diameter / 2;
        volumeCm3 = Math.PI * radius * radius * height;
      }
      break;

    case "cone":
      if (topDiameter && bottomDiameter) {
        const topR = topDiameter / 2;
        const bottomR = bottomDiameter / 2;
        const avgR = (topR + bottomR) / 2;
        volumeCm3 = (1 / 3) * Math.PI * avgR * avgR * height;
      }
      break;

    case "other":
      if (surfaceArea) {
        volumeCm3 = surfaceArea * height;
      }
      break;

    default:
      return 0;
  }

  const volumeL = volumeCm3 / 1000;
  return Math.round(volumeL * quantity);
}
