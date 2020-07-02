export const GLOBAL = "Global";
export const monday = "Monday";
export const tuesday = "Tuesday";
export const wednesday = "Wednesday";
export const thursday = "Thursday";
export const friday = "Friday";
export const saturday = "Saturday";
export const sunday = "Sunday";

export type PeriodTypes =
  | typeof GLOBAL
  | typeof monday
  | typeof tuesday
  | typeof wednesday
  | typeof thursday
  | typeof friday
  | typeof saturday
  | typeof sunday;

export interface IHours {
  period: PeriodTypes;
  from: number;
  to: number;
  isActive: boolean;
  isVisible: boolean;
  label?: string;
}

export type PeriodPayloadType<T> = { [P in keyof T]: T[P] } & {
  period: PeriodTypes;
};

export interface IIsVisible extends PeriodPayloadType<{ isVisible: boolean }> {}

export interface IIsFixed {
  isFixed: boolean;
}

export interface IWorkingHoursState {
  isFixed: boolean;
  [GLOBAL]: IHours;
  [monday]: IHours;
  [tuesday]: IHours;
  [wednesday]: IHours;
  [thursday]: IHours;
  [friday]: IHours;
  [saturday]: IHours;
  [sunday]: IHours;
}

export const UPDATE_HOURS = "UPDATE_HOURS";
export const SET_IS_VISIBLE = "SET_IS_VISIBLE";
export const SET_IS_FIXED = "SET_IS_FIXED";
export const SAVE_STATE = "SAVE_STATE";
export const RESTORE_STATE = "RESTORE_STATE";

interface IUpdateHoursAction {
  type: typeof UPDATE_HOURS;
  payload: IHours;
}

interface ISetIsVisibleAction {
  type: typeof SET_IS_VISIBLE;
  payload: IIsVisible;
}

interface ISetIsFixedAction {
  type: typeof SET_IS_FIXED;
  payload: IIsFixed;
}
export interface ISaveStateAction {
  type: typeof SAVE_STATE;
}

interface IRestoreStateAction {
  type: typeof RESTORE_STATE;
  payload: IWorkingHoursState;
}

export type WorkingHoursActionTypes =
  | IUpdateHoursAction
  | ISetIsVisibleAction
  | ISetIsFixedAction
  | IRestoreStateAction;
