import { Action } from "redux";
import { authAtServerCompletedAction, authAtServerStartedAction } from "./saga/handleAuth";

export interface AuthAppState {
   status?: "initial" | "running" | "success" | "error";
   error?: string;
   userId?: string;
}


export function authReducer(state: AuthAppState = { status: "initial" }, action: Action): AuthAppState {
   if (authAtServerStartedAction.is(action)) {
      return {
         ...state,
         status: "running",
         error: undefined
      };
   }
   if (authAtServerCompletedAction.is(action)) {
      console.log(action);

      return {
         ...state,
         userId: action.userId,
         status: action.status,
         error: action.error
      };
   }
   return state;
}
