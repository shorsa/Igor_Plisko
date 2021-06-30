import axios, { AxiosResponse } from "axios";
import { push } from "connected-react-router";
import { defineAction } from "rd-redux-utils";
import { put, takeEvery } from "redux-saga/effects";
import { PROJECT_PAGE_URL } from "../../../projects";
import { SIGN_IN_PAGE_URL } from "../..";
import { appStateAction } from "../../../../app-state.reducer";
import { API_SERVER } from "../../../../config";
import { RequestSignInModel, RequestSignUpModel, ResponseSignInModel, ResponseSingUpModel } from "../../models";
import { signInAction, signUpAction } from "../actions";
/*-------------REDUCERS-------------------*/
import { AuthAppState } from "../reducer";


export const signUpAtServerCompletedAction = defineAction<AuthAppState>(
   "SIGN_UP_AT_SERVER_SUCCESS"
);
export const signInAtServerCompletedAction = defineAction<AuthAppState>(
   "SIGN_IN_AT_SERVER_SUCCESS"
);


export function* handleSignUpSaga() {
   yield takeEvery(signUpAction.TYPE, function* (
      action: typeof signUpAction.typeOf.action
   ) {
      let requestModel: RequestSignUpModel = action.payload;

      try {
         yield put(
            appStateAction({
               status: "running"
            })
         );
         const response: AxiosResponse<ResponseSingUpModel> = yield axios.post(
            `${API_SERVER}/api/auth/register`,
            requestModel
         );


         yield put(
            signUpAtServerCompletedAction({
               userId: response.data._id
            })
         );
         yield put(
            appStateAction({
               status: "success",
               message: response.data.message
            })
         );

         yield put(push(SIGN_IN_PAGE_URL.urlTemplate));
      } catch (e) {
         yield put(appStateAction({
            status: "error",
            message: e.response.data.message
         })
         );
      }
   })
}

export function* handleSignInSaga() {
   yield takeEvery(signInAction.TYPE, function* (
      action: typeof signInAction.typeOf.action
   ) {
      let requestModel: RequestSignInModel = action.payload;

      try {
         yield put(
            appStateAction({
               status: "running"
            })
         );
         const response: AxiosResponse<ResponseSignInModel> = yield axios.post(
            `${API_SERVER}/api/auth/login`,
            requestModel
         );
         console.log(response);

         yield put(
            signInAtServerCompletedAction({
               accessToken: response.data.token
            })
         );
         yield put(
            appStateAction({
               status: "success"
            })
         );
         yield put(push(PROJECT_PAGE_URL.urlTemplate));
      } catch (e) {

         yield put(appStateAction({
            status: "error",
         })
         );
      }
   })
}