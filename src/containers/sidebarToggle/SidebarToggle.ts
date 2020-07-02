import SidebarToggle from "../../components/sidebarToggle";
import { connect } from "react-redux";
import { RootState } from "../../lib/store";
import {
  toggleSidebarAction,
  isOpenSidebarSelector,
} from "../../lib/store/sidebar";
import { Dispatch } from "redux";

const mapState = (state: RootState) => ({
  isOpenSidebar: isOpenSidebarSelector(state),
});

const mapDispatch = (dispatch: Dispatch) => ({
  toggleSidebar: (isOpenSidebar: boolean) =>
    dispatch(toggleSidebarAction({ isOpenSidebar })),
});

export default connect(mapState, mapDispatch)(SidebarToggle);
