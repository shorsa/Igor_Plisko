import { defineAction } from "rd-redux-utils";
import { RequestSearchProjectModel } from "../models";

export const getAllProjectsDataAction = defineAction<{ payload: RequestSearchProjectModel }>("GET_ALL_PROJECT_DATA")
