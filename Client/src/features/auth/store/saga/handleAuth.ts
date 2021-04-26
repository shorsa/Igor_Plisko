// import axios, { AxiosResponse } from "axios";
// import { API_SERVER } from "../../../../config";
import { defineAction } from "rd-redux-utils";



/*-------------REDUCERS-------------------*/
import { AuthAppState } from "../reducer";

export const authAtServerStartedAction = defineAction<AuthAppState>(
   "AUTH_AT_SERVER_STARTED"
);

export const authAtServerCompletedAction = defineAction<AuthAppState>(
   "AUTH_AT_SERVER_SUCCESS"
);

// export function* handleAuthSaga() {
//    yield takeEvery()
// }