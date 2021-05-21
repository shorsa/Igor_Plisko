import React from "react";
import { Redirect } from "react-router";
import { AuthRoutes } from "./features/auth";
import { ExampleRoutes } from "./features/example";
import { ProjectRoutes } from "./features/projects";

export const AppRoutes = [
  ...AuthRoutes,
  ...ExampleRoutes,
  ...ProjectRoutes,
  < Redirect
    key="main-home-page"
    from="/"
    to="/example"
  />
];

