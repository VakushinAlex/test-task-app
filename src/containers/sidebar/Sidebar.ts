import Sidebar from "../../components/sidebar";
import { connect } from "react-redux";
import { RootState } from "../../lib/store";
import {
  toggleSidebarAction,
  isOpenSidebarSelector,
} from "../../lib/store/sidebar";
import { Dispatch } from "redux";
import { pointSelector } from "../../lib/store/breakpoint";

const mapState = (state: RootState) => ({
  isOpenSidebar: isOpenSidebarSelector(state),
  breakpoint: pointSelector(state),
});

const mapDispatch = (dispatch: Dispatch) => ({
  toggleSidebar: (isOpenSidebar: boolean) =>
    dispatch(toggleSidebarAction({ isOpenSidebar })),
});

export default connect(mapState, mapDispatch)(Sidebar);
