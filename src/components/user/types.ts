import { PointType } from "../../lib/store/breakpoint";

export interface UserProps {
  isOpenSidebar: boolean;
  breakpoint: PointType;
  toggleSidebar: Function;
}
