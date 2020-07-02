import { SidebarState, SidebarActionTypes, TOGGLE_SIDEBAR } from "./types";

const initialState: SidebarState = {
  isOpenSidebar: true,
};

const sidebarReducer = (
  state = initialState,
  action: SidebarActionTypes
): SidebarState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default sidebarReducer;
