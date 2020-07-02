import {
  IWorkingHoursState,
  GLOBAL,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
} from "./types";

const LS_WORKING_HOURS_STATE_KEY = "LS_WORKING_HOURS_STATE";

export const DEFAULT_STATE: IWorkingHoursState = {
  isFixed: false,
  [GLOBAL]: {
    period: GLOBAL,
    from: 480,
    to: 1020,
    isActive: true,
    isVisible: true,
    label: "Working hours",
  },
  [monday]: {
    period: monday,
    from: 480,
    to: 1020,
    isActive: true,
    isVisible: true,
    label: monday,
  },
  [tuesday]: {
    period: tuesday,
    from: 480,
    to: 1020,
    isActive: true,
    isVisible: true,
    label: tuesday,
  },
  [wednesday]: {
    period: wednesday,
    from: 480,
    to: 1020,
    isActive: true,
    isVisible: true,
    label: wednesday,
  },
  [thursday]: {
    period: thursday,
    from: 480,
    to: 1020,
    isActive: true,
    isVisible: true,
    label: thursday,
  },
  [friday]: {
    period: friday,
    from: 480,
    to: 1020,
    isActive: true,
    isVisible: true,
    label: friday,
  },
  [saturday]: {
    period: saturday,
    from: 480,
    to: 1020,
    isActive: true,
    isVisible: true,
    label: saturday,
  },
  [sunday]: {
    period: sunday,
    from: 480,
    to: 1020,
    isActive: true,
    isVisible: true,
    label: sunday,
  },
};

// нет валидации т.к это тестовое задание
export const getInitState = (): IWorkingHoursState => {
  const jsonState = localStorage.getItem(LS_WORKING_HOURS_STATE_KEY);
  if (jsonState) {
    try {
      return JSON.parse(jsonState) as IWorkingHoursState;
    } catch (e) {}
  }
  saveState(DEFAULT_STATE);
  return DEFAULT_STATE;
};

export const saveState = (state: IWorkingHoursState): void => {
  localStorage.setItem(LS_WORKING_HOURS_STATE_KEY, JSON.stringify(state));
};
