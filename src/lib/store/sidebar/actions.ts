import { SidebarState, TOGGLE_SIDEBAR, SidebarActionTypes } from "./types";

export const toggleSidebarAction = (
  newState: SidebarState
): SidebarActionTypes => {
  return {
    type: TOGGLE_SIDEBAR,
    payload: newState,
  };
};
