import { Action } from "redux";
import { signInAtServerCompletedAction, signUpAtServerCompletedAction } from "./saga/handleAuth";

export interface AuthAppState {
   userId?: string;
   accessToken?: string;
}


export function authReducer(state: AuthAppState = {}, action: Action): AuthAppState {
   if (signUpAtServerCompletedAction.is(action)) {


      return {
         ...state,
         userId: action.userId,
      };


   }
   if (signInAtServerCompletedAction.is(action)) {


      return {
         ...state,
         accessToken: action.accessToken
      };


   }
   return state;
}
