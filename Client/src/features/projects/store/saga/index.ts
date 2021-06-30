import { all } from "redux-saga/effects";
import { handleCreateProjectSaga, handleGetOneProjectByIdSaga, handleGetProjectSaga, handleUpdateProjectSaga } from "./handleProject";

export function* projectSaga() {
   yield all([handleGetProjectSaga(), handleUpdateProjectSaga(), handleGetOneProjectByIdSaga(), handleCreateProjectSaga()]);
}