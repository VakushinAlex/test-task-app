import { moduleName } from "./index";
import { RootState } from "../index";
import { IWorkingHoursState } from "./types";

/**
 * селекторы
 */
export const workingHoursStateSelector = (
  state: RootState
): IWorkingHoursState => state[moduleName];
