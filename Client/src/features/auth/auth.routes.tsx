import React from "react";
import { Route } from "react-router";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";
import { SIGN_UP_PAGE_URL, SIGN_IN_PAGE_URL } from "./auth.urls";

export const AuthRoutes = [
   <Route key="sign-up" path={SIGN_UP_PAGE_URL.urlTemplate} component={SignUpPage} />,
   <Route key="sing-in" path={SIGN_IN_PAGE_URL.urlTemplate} component={SignInPage} />
]





