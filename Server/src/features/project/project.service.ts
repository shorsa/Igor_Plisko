import { loggerHelper } from "../shared/helper/logger.helper";
import { ProjectEntityModel, ProjectModel, RequestCreateProjectEntityModel, ResponseCreteProjectModel } from "./models";
import { projectCreateSchema } from "./validation/projectCreate.shema";
import * as projectRepository from "./project.repository";
import { ErrorResponse } from "../shared/helper/appError.helper";
import httpStatus from "http-status";
import ProjectSchemaEntityModel from "./entity/featureProject.entity";


export async function create(body: RequestCreateProjectEntityModel): Promise<ResponseCreteProjectModel> {   //: Promise<ResponseCreteProjectModel>

   loggerHelper.debug(`Start of project creation! ${body}`);

   const isValid: boolean = await projectCreateSchema.isValid(body);
   console.log("isValid", isValid);
   if (!isValid) {
      loggerHelper.error(`Is the project valid? ${isValid}`);
   }

   // const model: ProjectEntityModel = {
   //    ...body,                                     //? нам это больше не надо! 
   //    creationDate: new Date()
   // }

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


export async function deleteServiceProject(id: string) {

   const deleteProject = await projectRepository.deleteProjectRepo(id)
   if (!deleteProject) {
      loggerHelper.debug(`Has the project been deleted? ${deleteProject}`);

      return { ok: false, message: "The project was not deleted" }
   }
   return deleteProject

}

export async function getServiceProject(id: string) {

   const getProject = await projectRepository.getProjectRepo(id)

   if (!getProject) {
      loggerHelper.error(`Project was not found! ${getProject}`);

      return { ok: false, message: "Project not found" }
   }
   return getProject
}


export async function searchProject(body: any) {

   const getProject = await projectRepository.searchProject(body)
   // if (!getProject) {
   //    loggerHelper.error(`Project was not found! ${getProject}`);

   //    return { ok: false, message: "Project not found" }
   // }

}


// export async function getServiceProject(id: string) {

//    const getProject = await projectRepository.getProjectRepo(id)
//    if (!getProject) {
//       loggerHelper.error(`Project was not found! ${getProject}`);

//       return { ok: false, message: "Project not found" }
//    }

// }












/**
   *?У проекта обязательные поля - заголовок(мин 6 символов), описание(мин 10 символов), фичи.
   *?Фичи проекта, фичи должны быть представлены в виде массива без вложенных массивов, обязательные поля - уровень
   *? (для порядка и вложенностей фич, например: левел фич будет выглядеть так же как нумерация в этом
   *? документе(без отступов слева)), заголовок, описание, мин эстимейт, макс эстимейт.
   */

