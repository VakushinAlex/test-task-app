import { FunctionComponent, SVGProps } from "react";
import { PointType } from "../../lib/store/breakpoint";

export interface SidebarProps {
  isOpenSidebar: boolean;
  toggleSidebar: Function;
  breakpoint: PointType;
  path?: string;
}

export interface INavItem {
  path: string;
  label: string;
  ico: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

export type NavItemsType = INavItem[];
