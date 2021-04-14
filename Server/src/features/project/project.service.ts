import {
   ProjectModel,
   RequestCreateProjectModel, ResponseCreteProjectModel,
   RequestSearchProjectModel, ResponseSearchProjectsModel,
   ResponseSearchFeatureProjectModel
} from "./models";
import { loggerHelper } from "../shared/helper/logger.helper";
import { projectCreateSchema } from "./validation/projectCreate.schema";
import * as projectRepository from "./project.repository";
import { ErrorResponse } from "../shared/helper/appError.helper";
import httpStatus from "http-status";
import ProjectSchemaEntityModel from "./entity/featureProject.entity";
import { BaseResponseModel } from "../shared/models";



export async function createProject(body: RequestCreateProjectModel): Promise<ResponseCreteProjectModel> {

   loggerHelper.debug(`Start of project creation! ${body}`);

   const isValid: boolean = await projectCreateSchema.isValid(body);
   console.log("isValid", isValid);
   if (!isValid) {
      loggerHelper.error(`Is the project valid? ${isValid}`);
   }

   const createProjectModel = new ProjectSchemaEntityModel(body)    //? это что бы наследовало модели которых нет
   console.log("createProject", createProjectModel);

   const checkProject: number = await projectRepository.findProjectByTitle(createProjectModel.title);
   if (checkProject) {
      loggerHelper.error(`This project tittle already exists ${createProjectModel.title}`);

      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This title already exists!");
   }
   const projectCreate: ProjectModel | null = await projectRepository.create(createProjectModel);

   return { ok: true, ...projectCreate };
}

export async function deleteProject(id: string): Promise<BaseResponseModel> {

   const deleteProject: ProjectModel | null = await projectRepository.deleteProjectById(id)
   if (!deleteProject) {
      loggerHelper.debug(`Has the project been deleted? ${deleteProject}`);

      return { ok: false, message: "The project was not deleted" };
   }
   return { ok: true };
}

export async function getProject(id: string): Promise<ProjectModel | BaseResponseModel> {

   const getProject: ProjectModel | null = await projectRepository.getProjectById(id);

   if (!getProject) {
      loggerHelper.debug(`Has the project been added? ${getProject}`);

      return { ok: false, message: "No project added!" };
   }
   return getProject;
}

export async function updateProject(body: ProjectModel): Promise<BaseResponseModel> {
   const updateProject: ProjectModel | null = await projectRepository.updateProjectById(body)

   if (!updateProject) {
      loggerHelper.debug(`Has the project been updated? ${updateProject}`);

      return { ok: false, message: "The project has not been updated!" };
   }
   return { ok: true, message: "The project  updated!" };
}

export async function searchPaginationProject(body: RequestSearchProjectModel): Promise<ResponseSearchProjectsModel | BaseResponseModel> {

   const reqModel: RequestSearchProjectModel | null = {
      page: body.page ?? 1,
      pageSize: body.pageSize ?? 2,
      searchText: body.searchText ?? ""
   }

   const searchProject: ResponseSearchProjectsModel | null = await projectRepository.searchProject(reqModel)
   if (!searchProject) {
      loggerHelper.debug(`Has the project been paginated ? ${searchProject}`);

      return { ok: false, message: "The project has not been paginated!" };
   }
   return searchProject;
}

export async function searchFeatureProject(searchText: string): Promise<ResponseSearchFeatureProjectModel[] | BaseResponseModel> {

   const searchFeatureProject: ResponseSearchFeatureProjectModel[] = await projectRepository.searchFeatureProject(searchText)

   if (!searchFeatureProject) {
      loggerHelper.debug(`Has the project been aggregated ? ${searchFeatureProject}`);

      return { ok: false, message: "The project has not been aggregated!" };
   }
   return searchFeatureProject;
}

