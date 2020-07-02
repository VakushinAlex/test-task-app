import { IHours, IIsVisible } from "../../lib/store/workingHours";

export interface IWorkingHoursDayProps extends IHours {
  updateHours: (newState: IHours) => void;
  setIsVisible: (isVisible: IIsVisible) => void;
}
