import axios, { AxiosResponse } from "axios";
import { push } from "connected-react-router";
// import { push } from "connected-react-router";
import { defineAction } from "rd-redux-utils";
import { put, takeEvery } from "redux-saga/effects";
import { appStateAction } from "../../../../app-state.reducer";
import { API_SERVER } from "../../../../config";
import { ResponseSearchProjectsModel } from "../../models";
import { ResponseGetOneProjectModel } from "../../models/response/responseGetOneProject.model";
import {
   createProjectDataAction, getAllProjectsDataAction, deleteProjectDataAction,
   getOneProjectDataAction, updateProjectDataAction
} from "../actions";
import { ProjectAppState } from "../reducer";
/*-------------REDUCERS-------------------*/


export const searchProjectsServerCompletedAction = defineAction<ProjectAppState>(
   "GET_PROJECT_AT_SERVER_SUCCESS"
);

export const getOneProjectServerCompleted = defineAction<ProjectAppState>(
   'GET_ONE_PROJECT_SERVER_SUCCESS'
);

export function* handleGetProjectSaga() {
   yield takeEvery(getAllProjectsDataAction.TYPE, function* (
      action: typeof getAllProjectsDataAction.typeOf.action
   ) {
      let testModel = action.payload;
      // console.log("getAllProjectsDataAction", testModel);
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
         // console.log(response);

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


export function* handleGetOneProjectByIdSaga() {
   yield takeEvery(getOneProjectDataAction.TYPE, function* (
      action: typeof getOneProjectDataAction.typeOf.action
   ) {
      let id: string = action.id;
      try {
         yield put(
            appStateAction({
               status: "running"
            })
         );
         const response: AxiosResponse<ResponseGetOneProjectModel> = yield axios.get(
            `${API_SERVER}/api/project/get?id=${id}`
         );
         yield put(getOneProjectServerCompleted({
            project: response.data
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


export function* handleUpdateProjectSaga() {
   yield takeEvery(updateProjectDataAction.TYPE, function* (
      action: typeof updateProjectDataAction.typeOf.action
   ) {
      let updateProject = action.payload;
      try {
         yield put(
            appStateAction({
               status: "running"
            })
         );
         const response: AxiosResponse<ResponseSearchProjectsModel> = yield axios.put(
            `${API_SERVER}/api/project/update`,
            updateProject
         );
         yield put(
            appStateAction({
               status: "success",
               message: response.data.message
            })
         );

         yield put(
            appStateAction({
               status: "initial"
            })
         );
         yield put(push("/home/project"));
      } catch (error) {
         yield put(appStateAction({
            status: "error",
            message: error.response.data.message
         })
         );
      }
   })
}

export function* handleCreateProjectSaga() {
   yield takeEvery(createProjectDataAction.TYPE, function* (
      action: typeof createProjectDataAction.typeOf.action
   ) {
      let createProject = action.payload;

      try {
         yield put(
            appStateAction({
               status: "running"
            })
         );
         const response: AxiosResponse<ResponseSearchProjectsModel> = yield axios.post(
            `${API_SERVER}/api/project/create`,
            createProject
         );
         yield put(
            appStateAction({
               status: "success",
               message: response.data.message
            })
         );

         yield put(
            appStateAction({
               status: "initial"
            })
         );
         yield put(push("/home/project"));
      } catch (error) {
         yield put(appStateAction({
            status: "error",
            message: error.response.data.message
         })
         );
      }
   })
}

export function* handleDeleteProjectSaga() {
   yield takeEvery(deleteProjectDataAction.TYPE, function* (
      action: typeof deleteProjectDataAction.typeOf.action
   ) {
      let id = action.id;
      try {
         yield put(
            appStateAction({
               status: "running"
            })
         );
         const response: AxiosResponse<ResponseSearchProjectsModel> = yield axios.delete(
            `${API_SERVER}/api/project/delete?id=${id}`
         );
         yield put(
            appStateAction({
               status: "success",
               message: response.data.message
            })
         );

         yield put(
            appStateAction({
               status: "initial"
            })
         );
      } catch (error) {
         yield put(appStateAction({
            status: "error",
            message: error.response.data.message
         })
         );
      }
   })
}