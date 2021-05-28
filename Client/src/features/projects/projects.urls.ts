import { createPath } from "rd-url-utils";

export const MAIN_PROJECT_PAGE_URL = createPath<{}>("/home")
export const PROJECT_PAGE_URL = MAIN_PROJECT_PAGE_URL.createChildPath("project")

export const CREATE_PAGE_URL = MAIN_PROJECT_PAGE_URL.createChildPath("create")
export const UPDATE_PAGE_URL = MAIN_PROJECT_PAGE_URL.createChildPath("update")
