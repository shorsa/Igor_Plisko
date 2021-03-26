import { ProjectEntityModel, RequestCreateProjectEntityModel } from "./models";






export async function create(body: RequestCreateProjectEntityModel) {
   const model: ProjectEntityModel = {
      ...body,
      creationDate: new Date()
   }
   // const isValid: boolean = await userRegisterSchema.isValid(body);
   // console.log("isValid", isValid);
   // if (!isValid) {
   //    loggerHelper.error(`User registration invalid ${body.email}`);

}












/**
   *?У проекта обязательные поля - заголовок(мин 6 символов), описание(мин 10 символов), фичи.
   *?Фичи проекта, фичи должны быть представлены в виде массива без вложенных массивов, обязательные поля - уровень
   *? (для порядка и вложенностей фич, например: левел фич будет выглядеть так же как нумерация в этом
   *? документе(без отступов слева)), заголовок, описание, мин эстимейт, макс эстимейт.
   */

