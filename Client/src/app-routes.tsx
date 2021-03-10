import React from "react";
import { Redirect } from "react-router";
import { ExampleRoutes } from "./features/example";

export const AppRoutes = [
  ...ExampleRoutes,
  <Redirect
    key="main-home-page"
    from="/"
    to="/example"
  />,
];
