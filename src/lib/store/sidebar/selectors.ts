import { createSelector } from "reselect";
import { moduleName } from "./index";
import { RootState } from "../index";
import { SidebarState } from "./types";

/**
 * селекторы
 */
export const sidebarState = (state: RootState): SidebarState =>
  state[moduleName];

export const isOpenSidebarSelector = createSelector(
  [sidebarState],
  (sidebar) => sidebar.isOpenSidebar
);
