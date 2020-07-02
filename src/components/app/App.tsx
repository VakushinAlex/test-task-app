import React from "react";
import "./App.css";
import Main from "../../containers/main";
import Sidebar from "../../containers/sidebar";
import useBreakpoint from "../../lib/customHooks/useBreakPoint";
import { RouteProps } from "react-router-dom";

const App = (props: RouteProps) => {
  const path = props?.location?.pathname;
  useBreakpoint();
  return (
    <div className="App">
      <Sidebar path={path} />
      <Main />
    </div>
  );
};

export default App;
