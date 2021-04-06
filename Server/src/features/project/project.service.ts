import { loggerHelper } from "../shared/helper/logger.helper";
import { ProjectEntityModel, ProjectModel, RequestCreateProjectEntityModel, ResponseCreteProjectModel } from "./models";
import { projectCreateSchema } from "./validation/projectCreate.shema";
import * as projectRepository from "./project.repository";
import { ErrorResponse } from "../shared/helper/appError.helper";
import httpStatus from "http-status";
import ProjectSchemaEntityModel from "./entity/featureProject.entity";
import { BaseResponseModel } from "../shared/models";


export async function create(body: RequestCreateProjectEntityModel): Promise<ResponseCreteProjectModel> {   //: Promise<ResponseCreteProjectModel>

   loggerHelper.debug(`Start of project creation! ${body}`);

   const isValid: boolean = await projectCreateSchema.isValid(body);
   console.log("isValid", isValid);
   if (!isValid) {
      loggerHelper.error(`Is the project valid? ${isValid}`);
   }



   console.log("body", body);
   const createProjectModel = new ProjectSchemaEntityModel(body)    //? это что бы наследовало модели которых нет
   console.log("createProject", createProjectModel);


   const projectCreate: any = await projectRepository.create(createProjectModel)


   const checkProject: number = await projectRepository.findProject(createProjectModel.title)
   if (checkProject) {
      loggerHelper.error(`This project tittle already exists ${createProjectModel.title}`);

      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This title already exists!")
   }
   return { ok: true, ...projectCreate }

}


export async function deleteServiceProject(id: string): Promise<BaseResponseModel> {

   const deleteProject: ProjectModel | null = await projectRepository.deleteProjectRepo(id)
   if (!deleteProject) {
      loggerHelper.debug(`Has the project been deleted? ${deleteProject}`);

      return { ok: false, message: "The project was not deleted" }
   }
   return { ok: true }
}

export async function getServiceProject(id: string) {

   const getProject = await projectRepository.getProjectRepo(id)

   if (!getProject) {
      loggerHelper.debug(`Has the project been added? ${getProject}`);

      return { ok: false, message: "No project added!" }  //во
   }
   return getProject
}


export async function updateServiceProject(body: any): Promise<BaseResponseModel> {
   const updateProject = await projectRepository.updateProjectRepo(body)

   if (!updateProject) {
      loggerHelper.debug(`Has the project been updated? ${updateProject}`);

      return { ok: false, message: "The project has not been updated!" }
   }
   return { ok: true, message: "The project  updated!" }

}

// const model: UserEntityModel = {     //!
//    ...user,
//    role: Role.User,
//    createdAt: new Date()
// };


//-----------------------------------------------------------------------------
//!search
export async function searchServiceProject(body: any) {

   const searchProject = await projectRepository.searchProjectRepo(body)

   // if (!searchProject){
   //    loggerHelper.debug(`Project was not found! ${searchProject}`);

   //    return { ok: false, message: "Project not found" }
   // }
   // return searchProject
}











/**
   *?У проекта обязательные поля - заголовок(мин 6 символов), описание(мин 10 символов), фичи.
   *?Фичи проекта, фичи должны быть представлены в виде массива без вложенных массивов, обязательные поля - уровень
   *? (для порядка и вложенностей фич, например: левел фич будет выглядеть так же как нумерация в этом
   *? документе(без отступов слева)), заголовок, описание, мин эстимейт, макс эстимейт.
   */

