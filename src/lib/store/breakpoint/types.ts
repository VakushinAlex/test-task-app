export type PointType = "xs" | "sm" | "md" | "lg";

export interface IBreakpointState {
  point: PointType;
}

export const UPDATE_POINT = "UPDATE_POINT";

interface IUpdatePointAction {
  type: typeof UPDATE_POINT;
  payload: IBreakpointState;
}

export type BreakpointActionTypes = IUpdatePointAction;
