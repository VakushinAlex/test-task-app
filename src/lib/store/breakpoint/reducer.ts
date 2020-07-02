import { IBreakpointState, BreakpointActionTypes, UPDATE_POINT } from "./types";
import { getDeviceConfig } from "./helper";

const initialState: IBreakpointState = {
  point: getDeviceConfig(window.innerWidth),
};

const reducer = (
  state = initialState,
  action: BreakpointActionTypes
): IBreakpointState => {
  switch (action.type) {
    case UPDATE_POINT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
