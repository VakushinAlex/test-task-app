import {
  IWorkingHoursState,
  IHours,
  IIsVisible,
  IIsFixed,
} from "../../lib/store/workingHours";

export interface IWorkingHoursProps {
  initState: IWorkingHoursState;
  updateHours: (newState: IHours) => void;
  setIsVisible: (newState: IIsVisible) => void;
  setIsFixed: (newState: IIsFixed) => void;
  save: (newState: IWorkingHoursState) => void;
  restore: () => void;
}
