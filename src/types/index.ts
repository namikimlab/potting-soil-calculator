export type ResultData = {
  volume: number;
  recommendation: string;
};

export type InputData =
  | {
      shape: "rectangle";
      width: number;
      length: number;
      height: number;
      quantity: number;
    }
  | {
      shape: "cylinder";
      diameter: number;
      height: number;
      quantity: number;
    }
  | {
      shape: "cone";
      topDiameter: number;
      bottomDiameter: number;
      height: number;
      quantity: number;
    }
  | {
      shape: "other";
      surfaceArea: number;
      height: number;
      quantity: number;
    };
