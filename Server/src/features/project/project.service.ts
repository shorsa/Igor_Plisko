import { loggerHelper } from "../shared/helper/logger.helper";
import { ProjectEntityModel, RequestCreateProjectEntityModel, ResponseCreteProjectModel } from "./models";
import { projectCreateSchema } from "./validation/projectCreate.shema";
import * as projectRepository from "./project.repository";






export async function create(body: RequestCreateProjectEntityModel) {

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
   loggerHelper.debug(`Is the project valid? ${isValid}`);
   loggerHelper.error(`Is the project valid? ${isValid}`);
   // const projectCreate = await projectRepository.create(body)     //: ProjectModel 
   // return projectCreate

}












/**
   *?У проекта обязательные поля - заголовок(мин 6 символов), описание(мин 10 символов), фичи.
   *?Фичи проекта, фичи должны быть представлены в виде массива без вложенных массивов, обязательные поля - уровень
   *? (для порядка и вложенностей фич, например: левел фич будет выглядеть так же как нумерация в этом
   *? документе(без отступов слева)), заголовок, описание, мин эстимейт, макс эстимейт.
   */

