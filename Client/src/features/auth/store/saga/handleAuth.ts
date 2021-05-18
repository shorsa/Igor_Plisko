// import axios, { AxiosResponse } from "axios";
// import { API_SERVER } from "../../../../config";
import axios, { AxiosResponse } from "axios";
import { push } from "connected-react-router";
import { defineAction } from "rd-redux-utils";
import { put, takeEvery } from "redux-saga/effects";
import { appStateAction } from "../../../../app-state.reducer";
import { API_SERVER } from "../../../../config";
import { ResponseSingUpModel } from "../../models";
import { signUpAction } from "../actions";
/*-------------REDUCERS-------------------*/
import { AuthAppState } from "../reducer";


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
            appStateAction({
               status: "running"
            })
         );
         const response: AxiosResponse<ResponseSingUpModel> = yield axios.post(
            `${API_SERVER}/api/auth/register`,
            testModel
         );
         console.log(response);

         yield put(
            authAtServerCompletedAction({
               userId: response.data._id
            })
         );
         yield put(
            appStateAction({
               status: "success",
               message: response.data.message
            })
         );

         yield put(push("/home"));
      } catch (e) {
         console.dir();

         yield put(appStateAction({
            status: "error",
            message: e.response.data.message  //----------------------! вывести сообщение в нотификейшен 
         })
         );
      }
   })
}