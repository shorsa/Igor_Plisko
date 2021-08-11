import { all } from "redux-saga/effects";
import { handleCreateProjectSaga, handleDeleteProjectSaga, handleGetOneProjectByIdSaga, handleGetProjectSaga, handleUpdateProjectSaga } from "./handleProject";

export function* projectSaga() {
   yield all([handleGetProjectSaga(), handleUpdateProjectSaga(), handleGetOneProjectByIdSaga(), handleCreateProjectSaga(), handleDeleteProjectSaga()]);
}