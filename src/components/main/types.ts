import { PointType } from "../../lib/store/breakpoint";

export interface IMainProps {
  isOpenSidebar: boolean;
  toggleSidebar: (value: boolean) => void;
  breakpoint: PointType;
}
