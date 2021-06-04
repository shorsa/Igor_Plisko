import { defineAction } from "rd-redux-utils";
import { RequestSearchProjectModel, RequestUpdateProjectModel } from "../models";

export const getAllProjectsDataAction = defineAction<{ payload: RequestSearchProjectModel }>("GET_ALL_PROJECT_DATA")
export const getOneProjectDataAction = defineAction<{ id: string }>("GET_ONE_PROJECT_DATA")
export const updateProjectDataAction = defineAction<{ payload: RequestUpdateProjectModel }>("UPDATE_PROJECT_DATA")