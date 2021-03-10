import React from "react";
import { Route } from "react-router";
import { ExamplePage } from "./pages/ExamplePage";
import { EXAMPLE_PAGE_URL } from "./urls";

export const ExampleRoutes = [
    <Route key="example" path={EXAMPLE_PAGE_URL.urlTemplate} component={ExamplePage} />
]