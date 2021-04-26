import React from "react";
import { Redirect } from "react-router";
import { AuthRoutes } from "./features/auth";
import { ExampleRoutes } from "./features/example";

export const AppRoutes = [
  ...AuthRoutes,
  ...ExampleRoutes,
  <Redirect
    key="main-home-page"
    from="/"
    to="/example"
  />,
];

