import { defineAction } from "rd-redux-utils";
import { Action } from "redux";


export interface AppStateControl {
   status: "running" | "error" | "initial" | "success"
   message?: string
}

export const appStateAction = defineAction<AppStateControl>(
   "APP_STATE_CHANGE_ACTION"
);

export function AppStateReducer(state: AppStateControl = { status: "initial" }, action: Action): AppStateControl {
   if (appStateAction.is(action)) {


      return {
         ...state,
         status: action.status,
         message: action.message
      };
   }
   return state;
}