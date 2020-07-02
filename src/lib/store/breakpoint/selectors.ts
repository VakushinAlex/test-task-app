import { createSelector } from "reselect";
import { moduleName } from "./index";
import { RootState } from "../index";
import { IBreakpointState } from "./types";

/**
 * селекторы
 */
export const breakpointState = (state: RootState): IBreakpointState =>
  state[moduleName];

export const pointSelector = createSelector(
  [breakpointState],
  (breakpoint) => breakpoint.point
);
