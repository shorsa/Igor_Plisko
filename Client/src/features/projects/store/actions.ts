import { defineAction } from "rd-redux-utils";
import { RequestCreateProjectModel, RequestSearchProjectModel, RequestUpdateProjectModel } from "../models";

export const getAllProjectsDataAction = defineAction<{ payload: RequestSearchProjectModel }>("GET_ALL_PROJECT_DATA")
export const updateProjectDataAction = defineAction<{ payload: RequestUpdateProjectModel }>("UPDATE_PROJECT_DATA")
export const createProjectDataAction = defineAction<{ payload: RequestCreateProjectModel }>("CREATE_PROJECT_DATA")
export const getOneProjectDataAction = defineAction<{ id: string }>("GET_ONE_PROJECT_DATA")
export const deleteProjectDataAction = defineAction<{ id: string }>("DELETE_PROJECT_DATA")
console.log(deleteProjectDataAction, 'What this faking ????');
