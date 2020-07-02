import {
  UPDATE_HOURS,
  WorkingHoursActionTypes,
  IHours,
  SET_IS_VISIBLE,
  IIsVisible,
  IIsFixed,
  SET_IS_FIXED,
  IWorkingHoursState,
  RESTORE_STATE,
  SAVE_STATE,
  ISaveStateAction,
} from "./types";
import { getInitState, saveState } from "./helpers";

export const updateHoursAction = (
  newState: IHours
): WorkingHoursActionTypes => {
  return {
    type: UPDATE_HOURS,
    payload: newState,
  };
};

export const setIsVisibleAction = ({
  period,
  isVisible,
}: IIsVisible): WorkingHoursActionTypes => {
  return {
    type: SET_IS_VISIBLE,
    payload: {
      period,
      isVisible,
    },
  };
};

export const setIsFixedAction = (
  newState: IIsFixed
): WorkingHoursActionTypes => {
  return {
    type: SET_IS_FIXED,
    payload: newState,
  };
};

//логика сохранения и восстановления состояния должна быть в миделваре
//но это тестове задание поэтому тут
export const restoreStateAction = (): WorkingHoursActionTypes => {
  const state = getInitState();
  return {
    type: RESTORE_STATE,
    payload: state,
  };
};

export const saveStateAction = (
  state: IWorkingHoursState
): ISaveStateAction => {
  saveState(state);
  return {
    type: SAVE_STATE,
  };
};
