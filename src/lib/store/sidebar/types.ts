export interface SidebarState {
  isOpenSidebar: boolean;
}

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

interface ToggleSidebarAction {
  type: typeof TOGGLE_SIDEBAR;
  payload: {
    isOpenSidebar: boolean;
  };
}

export type SidebarActionTypes = ToggleSidebarAction;
