import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./lib/store";
import "normalize.css";
import "./assets/scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <Route component={App} />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
