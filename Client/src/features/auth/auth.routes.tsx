import React from "react";
import { Route } from "react-router";
import { SingUpPage } from "./pages/SingUpPage";
import { SIGN_UP_PAGE_URL } from "./auth.urls";

export const AuthRoutes = [
   <Route key="sign-up" path={SIGN_UP_PAGE_URL.urlTemplate} component={SingUpPage} />
]





