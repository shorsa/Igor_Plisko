import { loggerHelper } from "../shared/helper/logger.helper";
import { ProjectEntityModel, ProjectModel, RequestCreateProjectEntityModel, ResponseCreteProjectModel } from "./models";
import { projectCreateSchema } from "./validation/projectCreate.shema";
import * as projectRepository from "./project.repository";
import { ErrorResponse } from "../shared/helper/appError.helper";
import httpStatus from "http-status";



export async function create(body: RequestCreateProjectEntityModel): Promise<ResponseCreteProjectModel> {   //: Promise<ResponseCreteProjectModel>

   loggerHelper.debug(`Start of project creation! ${body}`);

   const model: ProjectEntityModel = {
      ...body,
      creationDate: new Date()
   }
   const isValid: boolean = await projectCreateSchema.isValid(body);
   console.log("isValid", isValid);
   if (!isValid) {
      console.log('Error');

   }
   loggerHelper.debug(`what do we get? ${body}`);
   loggerHelper.error(`Is the project valid? ${isValid}`);
   const projectCreate: any = await projectRepository.create(model)   //: ProjectModel


   const checkProject: number = await projectRepository.findProject(model.title)
   if (checkProject) {
      loggerHelper.error(`This project tittle already exists ${model.title}`);

      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This title already exists!")
   }
   return { ok: true, ...projectCreate }

}


export async function deleteServiceProject(id: string) {

   const deleteProject = await projectRepository.deleteProjectRepo(id)
   loggerHelper.error(`Has the project been deleted?? ${deleteProject}`);

   return deleteProject


}


export async function getServiceProject(id: string) {

   const getProject = await projectRepository.getProjectRepo(id)
   if (!getProject) {
      loggerHelper.error(`Project was not found! ${getProject}`);

      return { ok: false, message: "Project not found" }
   }

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

