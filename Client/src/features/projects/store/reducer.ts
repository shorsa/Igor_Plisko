import { Action } from "redux";
import { ResponseSearchProjectsModel } from "../models";
import { searchProjectsServerCompletedAction } from "./saga/handleProject";


export interface ProjectAppState {
   projects?: ResponseSearchProjectsModel;

}


export function projectReducer(state: ProjectAppState = {}, action: Action): ProjectAppState {
   if (searchProjectsServerCompletedAction.is(action)) {

      return {
         ...state,
         projects: action.projects,

      };


   }
   return state;
}
