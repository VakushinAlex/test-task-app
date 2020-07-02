import { PointType } from "./types";

export const getDeviceConfig = (width: number): PointType => {
  if (width < 320) {
    return "xs";
  } else if (width >= 320 && width < 720) {
    return "sm";
  } else if (width >= 720 && width < 1024) {
    return "md";
  }
  return "lg";
};
