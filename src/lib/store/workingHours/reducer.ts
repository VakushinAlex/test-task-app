import {
  IWorkingHoursState,
  WorkingHoursActionTypes,
  UPDATE_HOURS,
  GLOBAL,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  SET_IS_VISIBLE,
  IHours,
  IIsVisible,
  SET_IS_FIXED,
  IIsFixed,
  RESTORE_STATE,
} from "./types";
import { getInitState } from "./helpers";

const initialState = getInitState();

const changePeriodsState = (
  state: IWorkingHoursState,
  newState: Partial<IHours>
) => {
  return {
    [GLOBAL]: {
      ...state[GLOBAL],
      ...newState,
    },
    [monday]: {
      ...state[monday],
      ...newState,
    },
    [tuesday]: {
      ...state[tuesday],
      ...newState,
    },
    [wednesday]: {
      ...state[wednesday],
      ...newState,
    },
    [thursday]: {
      ...state[thursday],
      ...newState,
    },
    [friday]: {
      ...state[friday],
      ...newState,
    },
    [saturday]: {
      ...state[saturday],
      ...newState,
    },
    [sunday]: {
      ...state[sunday],
      ...newState,
    },
  };
};

const workingHoursReducer = (
  state = initialState,
  action: WorkingHoursActionTypes
): IWorkingHoursState => {
  const { type, payload = {} } = action;
  switch (type) {
    case UPDATE_HOURS: {
      const { period, from, to } = payload as IHours;
      if (state.isFixed) {
        return {
          ...state,
          ...changePeriodsState(state, { from, to }),
        };
      }
      return {
        ...state,
        [period]: {
          ...state[period],
          ...payload,
        },
      };
    }
    case SET_IS_VISIBLE: {
      const { period, isVisible } = payload as IIsVisible;
      return {
        ...state,
        [period]: {
          ...state[period],
          isVisible,
        },
      };
    }
    case SET_IS_FIXED: {
      const { isFixed } = payload as IIsFixed;
      return {
        ...state,
        ...changePeriodsState(state, {
          from: state[GLOBAL].from,
          to: state[GLOBAL].to,
        }),
        isFixed,
      };
    }
    case RESTORE_STATE: {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};

export default workingHoursReducer;
