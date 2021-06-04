import { all } from "redux-saga/effects";
import { handleGetOneProjectByIdSaga, handleGetProjectSaga, handleUpdateProjectSaga } from "./handleProject";

export function* projectSaga() {
   yield all([handleGetProjectSaga(), handleUpdateProjectSaga(), handleGetOneProjectByIdSaga()]);
}