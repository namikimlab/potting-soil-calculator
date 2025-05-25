export type ResultData = {
  volume: number;
};

export type InputData =
  | {
      shape: "cone";
      topDiameter: number;
      bottomDiameter: number;
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
      shape: "rectangle";
      width: number;
      length: number;
      height: number;
      quantity: number;
    }
  | {
      shape: "other";
      surfaceArea: number;
      height: number;
      quantity: number;
    };
