import React from "react";
import { Route } from "react-router";
import { AuthPage } from "./pages/SingUpPage";
import { AUTH_PAGE_URL } from "./auth.urls";

export const ExampleRoutes = [
   <Route key="auth" path={AUTH_PAGE_URL.urlTemplate} component={AuthPage} />
]





