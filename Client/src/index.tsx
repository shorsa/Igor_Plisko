import "antd/dist/antd.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Switch } from "react-router";
import { AppRoutes } from "./app-routes";
import { appStore } from "./app-state";
// import "./extensions/array";
import { history } from "./history-instance";
import "./index.scss";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Notification } from "./shared/components/notification/Notification";
import Spinner from "./shared/components/spinner/Spinner";

render(
  <Provider store={appStore}>
    <ConnectedRouter history={history}>
      <Spinner />
      <Notification />
      <Switch>{AppRoutes}</Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
