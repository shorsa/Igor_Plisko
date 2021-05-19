import { Action } from "redux";
import { authAtServerCompletedAction } from "./saga/handleAuth";

export interface AuthAppState {
   userId?: string;
   accessToken?: string;
}


export function authReducer(state: AuthAppState = {}, action: Action): AuthAppState {
   if (authAtServerCompletedAction.is(action)) {
      console.log(action);

      return {
         ...state,
         userId: action.userId,
      };


   }
   return state;
}
