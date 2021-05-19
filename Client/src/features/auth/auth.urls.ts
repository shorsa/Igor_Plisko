import { createPath } from "rd-url-utils";

export const AUTH_PAGE_URL = createPath<{}>("/auth")
export const SIGN_UP_PAGE_URL = AUTH_PAGE_URL.createChildPath("sign-up")
export const SIGN_IN_PAGE_URL = AUTH_PAGE_URL.createChildPath("sign-in")