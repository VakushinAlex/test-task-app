import sidebarReducer, { moduleName as sidebarModuleName } from "./sidebar";
import workingHoursReducer, {
  moduleName as workingHoursModuleName,
} from "./workingHours";
import breakpointReducer, {
  moduleName as breakpointModuleName,
} from "./breakpoint";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  [sidebarModuleName]: sidebarReducer,
  [breakpointModuleName]: breakpointReducer,
  [workingHoursModuleName]: workingHoursReducer,
});

export default rootReducer;
