import { Action } from "redux";
import { ResponseSearchProjectsModel } from "../models";
import { ResponseGetOneProjectModel } from "../models/response/responseGetOneProject.model";
import { getOneProjectServerCompleted, searchProjectsServerCompletedAction } from "./saga/handleProject";


export interface ProjectAppState {
   projects?: ResponseSearchProjectsModel;
   project?: ResponseGetOneProjectModel

}


export function projectReducer(state: ProjectAppState = {}, action: Action): ProjectAppState {
   if (searchProjectsServerCompletedAction.is(action)) {

      return {
         ...state,
         projects: action.projects,
      };
   }

   if (getOneProjectServerCompleted.is(action)) {

      return {
         ...state,
         project: action.project
      }
   }


   return state;
}
