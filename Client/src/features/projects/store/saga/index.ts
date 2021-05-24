import { all } from "redux-saga/effects";
import { handleGetProjectSaga } from "./handleProject";

export function* projectSaga() {
   yield all([handleGetProjectSaga()]);
}