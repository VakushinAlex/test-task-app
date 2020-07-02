import React from "react";
import "./Settings.scss";
import WorkingHours from "../../containers/workingHours";
import { Switch, Route, Link } from "react-router-dom";
import Empty from "../empty";
import { RouteProps } from "react-router-dom";

const Settings = (props: RouteProps) => {
  const pathname = props?.location?.pathname;
  const getTabClassName = (path: string): string => {
    if (path === pathname) {
      return "settings__tab  settings__tab_active";
    }
    return "settings__tab";
  };
  return (
    <div className="settings">
      <h2 className="settings__header">Settings</h2>
      <div className="settings__content">
        <div className="settings__tabs">
          <Link
            to="/user/settings/profile"
            className={getTabClassName("/user/settings/profile")}
          >
            Profile
          </Link>
          <Link
            to="/user/settings/notifications"
            className={getTabClassName("/user/settings/notifications")}
          >
            Notifications
          </Link>
          <Link
            to="/user/settings/password"
            className={getTabClassName("/user/settings/password")}
          >
            Password
          </Link>
          <Link
            to="/user/settings/working-hours"
            className={getTabClassName("/user/settings/working-hours")}
          >
            Working hours
          </Link>
          <Link
            to="/user/settings/call-settings"
            className={getTabClassName("/user/settings/call-settings")}
          >
            Call settings
          </Link>
        </div>
        <div className="settings__tab-content">
          <Switch>
            <Route
              exact
              path="/user/settings/working-hours"
              component={WorkingHours}
            />
            <Route path="/user/settings/" component={Empty} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Settings;
