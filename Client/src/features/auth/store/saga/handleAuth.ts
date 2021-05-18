// import axios, { AxiosResponse } from "axios";
// import { API_SERVER } from "../../../../config";
import axios, { AxiosResponse } from "axios";
import { push } from "connected-react-router";
import { defineAction } from "rd-redux-utils";
import { put, takeEvery } from "redux-saga/effects";
import { API_SERVER } from "../../../../config";
import { ResponseSingUpModel } from "../../models";
import { signUpAction } from "../actions";
/*-------------REDUCERS-------------------*/
import { AuthAppState } from "../reducer";


export const authAtServerStartedAction = defineAction<AuthAppState>(
   "AUTH_AT_SERVER_STARTED"
);

export const authAtServerCompletedAction = defineAction<AuthAppState>(
   "AUTH_AT_SERVER_SUCCESS"
);

export function* handleSignUpSaga() {
   yield takeEvery(signUpAction.TYPE, function* (                         //!  takeEvry производит отслеживание 
      action: typeof signUpAction.typeOf.action
   ) {
      let testModel = action.payload;
      console.log("signUpAction", testModel);
      try {
         yield put(
            authAtServerStartedAction({})                             //!yield put  Мы помешаем дату в наш  Redux  yeald put это как dispatch 
         );
         const response: AxiosResponse<ResponseSingUpModel> = yield axios.post(
            `${API_SERVER}/api/auth/register`,
            testModel
         );
         console.log(response);

         yield put(
            authAtServerCompletedAction({
               status: "success",
               userId: response.data._id
            })
         );
         yield put(push("/home"));
      } catch (e) {
         yield put(
            authAtServerCompletedAction({
               status: "error",
               error: e.toString(),
            })
         );
      }
   })
}