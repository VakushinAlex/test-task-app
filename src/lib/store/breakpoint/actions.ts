import { IBreakpointState, UPDATE_POINT, BreakpointActionTypes } from "./types";

export const updatePointAction = (
  newState: IBreakpointState
): BreakpointActionTypes => {
  return {
    type: UPDATE_POINT,
    payload: newState,
  };
};
