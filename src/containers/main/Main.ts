import Main from "../../components/main";
import { connect } from "react-redux";
import { RootState } from "../../lib/store";
import {
  isOpenSidebarSelector,
  toggleSidebarAction,
} from "../../lib/store/sidebar";
import { pointSelector } from "../../lib/store/breakpoint";
import { Dispatch } from "redux";

const mapState = (state: RootState) => ({
  isOpenSidebar: isOpenSidebarSelector(state),
  breakpoint: pointSelector(state),
});

const mapDispatch = (dispatch: Dispatch) => ({
  toggleSidebar: (isOpenSidebar: boolean) => {
    dispatch(toggleSidebarAction({ isOpenSidebar }));
  },
});

export default connect(mapState, mapDispatch)(Main);
