import axios, { AxiosResponse } from "axios";
// import { push } from "connected-react-router";
import { defineAction } from "rd-redux-utils";
import { put, takeEvery } from "redux-saga/effects";
import { appStateAction } from "../../../../app-state.reducer";
import { API_SERVER } from "../../../../config";
import { ResponseSearchProjectsModel } from "../../models";
import { getAllProjectsDataAction } from "../actions";
import { ProjectAppState } from "../reducer";
/*-------------REDUCERS-------------------*/



export const searchProjectsServerCompletedAction = defineAction<ProjectAppState>(
   "PROJECT_GET_AT_SERVER_SUCCESS"
);



export function* handleGetProjectSaga() {
   yield takeEvery(getAllProjectsDataAction.TYPE, function* (
      action: typeof getAllProjectsDataAction.typeOf.action
   ) {
      let testModel = action.payload;
      console.log("getAllProjectsDataAction", testModel);
      try {
         yield put(
            appStateAction({
               status: "running"
            })
         );
         const response: AxiosResponse<ResponseSearchProjectsModel> = yield axios.post(
            `${API_SERVER}/api/project/search`,
            testModel
         );
         console.log(response);

         yield put(searchProjectsServerCompletedAction({
            projects: response.data
         })

         );
         yield put(
            appStateAction({
               status: "initial"
            })
         );

      } catch (e) {
         yield put(appStateAction({
            status: "error",

         })
         );
      }
   })
}

