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

const toNumber = (value?: number | string): number => {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
};

export function calculateSoilVolume(input: VolumeInput): number {
  const shape = input.shape;

  const width = toNumber(input.width);
  const length = toNumber(input.length);
  const height = toNumber(input.height);
  const diameter = toNumber(input.diameter);
  const topDiameter = toNumber(input.topDiameter);
  const bottomDiameter = toNumber(input.bottomDiameter);
  const surfaceArea = toNumber(input.surfaceArea);
  const quantity = toNumber(input.quantity);

  if (height <= 0 || quantity <= 0) return 0;

  let volumeCm3 = 0;

  switch (shape) {
    case "rectangle":
      if (width > 0 && length > 0) {
        volumeCm3 = width * length * height;
      }
      break;

    case "cylinder":
      if (diameter > 0) {
        const radius = diameter / 2;
        volumeCm3 = Math.PI * radius * radius * height;
      }
      break;

    case "cone":
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
      if (surfaceArea > 0) {
        volumeCm3 = surfaceArea * height;
      }
      break;
  }

  // 화분 부피의 80%만 흙을 채운다고 가정
  const volumeL = (volumeCm3 / 1000) * 0.8;
  return Math.round(volumeL * quantity);
}
