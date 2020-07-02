import React from "react";
import { Switch, Route } from "react-router-dom";
import Settings from "../settings";
import "./Main.scss";
import SidebarToggle from "../../containers/sidebarToggle";
import { IMainProps } from "./types";
import Empty from "../empty";

const Main = (props: IMainProps) => {
  const { isOpenSidebar, toggleSidebar, breakpoint } = props;
  const getMainClassName = (): string => {
    if (breakpoint === "sm" || breakpoint === "xs" || !isOpenSidebar) {
      return "main  main_full";
    }
    return "main";
  };
  const isShowDisableBlock = (): boolean => {
    if ((breakpoint === "sm" || breakpoint === "xs") && isOpenSidebar) {
      return true;
    }
    return false;
  };
  return (
    <div className={getMainClassName()}>
      {isShowDisableBlock() && (
        <div
          className="main__disable"
          onClick={() => toggleSidebar(!isOpenSidebar)}
        ></div>
      )}
      <div className="main__inner">
        <div className="main__sidebar-toggle">
          <SidebarToggle />
        </div>
        <Switch>
          <Route path="/user/settings" component={Settings} />
          <Route path="/" component={Empty} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
