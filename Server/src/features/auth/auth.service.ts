import bcrypt from "bcrypt";
import CONFIG from "../../config/config";
import * as authRepository from "./auth.repository";
import { RequestCreateUserModel } from "./models";
import { userRegisterSchema } from "./validation/userRegister.schema";

export async function register(body: RequestCreateUserModel) {
   console.log(body);
   //Проверка валидации--------------------------------------
   const isValid: boolean = await userRegisterSchema.isValid(body);
   console.log("isValid", isValid);

   if (!isValid) {
      throw ("Error isValid")
   }
   // Проверка что мыла такого нет в бд-------------------------
   const emailExist: number = await authRepository.findByEmailCount(body.email)
   if (emailExist) {
      throw ("Exit")
   }


   //Хеширование пароля ---------------------------------------
   const hashPassword: string = await bcrypt.hash(body.password, CONFIG.SALT_ROUNDS)
   body.password = hashPassword;
   console.log("body", body);

   //Создание User---------------------------------------------
   const userCreated = await authRepository.create(body)
   console.log("userCreated", userCreated)
}

export async function login(body: any) {

   const emailLoginExist: number = await authRepository.findByEmailCount(body.email)
   if (emailLoginExist) {
      throw ("Exit")
   }



}






// Логика для авторизации юзера( проверка что такой email есть в БД, проверить что пароли совпадают (иначе отправлять ошибки)
//  и вернуть токен в котором зашифрованы (id,email, userName).
// Написать обработчик ошибок.
// Проверка токена на то что токен валидный. (время токена не истекло)
