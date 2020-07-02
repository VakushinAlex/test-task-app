import WorkingHours from "../../components/workingHours";
import { connect } from "react-redux";
import { RootState } from "../../lib/store";
import {
  updateHoursAction,
  workingHoursStateSelector,
  IHours,
  IIsVisible,
  setIsVisibleAction,
  IIsFixed,
  setIsFixedAction,
  IWorkingHoursState,
  saveStateAction,
  restoreStateAction,
} from "../../lib/store/workingHours";
import { Dispatch } from "redux";

const mapState = (state: RootState) => ({
  initState: workingHoursStateSelector(state),
});

const mapDispatch = (dispatch: Dispatch) => ({
  updateHours: (newState: IHours) => dispatch(updateHoursAction(newState)),
  setIsVisible: (newState: IIsVisible) =>
    dispatch(setIsVisibleAction(newState)),
  setIsFixed: (newState: IIsFixed) => dispatch(setIsFixedAction(newState)),
  save: (newState: IWorkingHoursState) => dispatch(saveStateAction(newState)),
  restore: () => dispatch(restoreStateAction()),
});

export default connect(mapState, mapDispatch)(WorkingHours);
