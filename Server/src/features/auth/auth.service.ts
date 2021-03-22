import bcrypt from "bcrypt";
import CONFIG from "../../config/config";
import * as authRepository from "./auth.repository";
import { RequestCreateUserModel } from "./models";
import { userLoginSchema, userRegisterSchema } from "./validation";
import jsonwebtoken from "jsonwebtoken";

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
   //валидация
   const isValidLogin: boolean = await userLoginSchema.isValid(body)
   if (!isValidLogin) {
      throw ("Error Validation")
   }


   //проверка емейла
   const emailExistEmail = await authRepository.findUser(body.email)
   if (!emailExistEmail) {
      throw ("Fucking exit")
   }
   console.log("what this:", emailExistEmail)

   //проверка пароля
   const checkPassword = await bcrypt.compare(body.password, emailExistEmail.password)
   return checkPassword
}







// Логика для авторизации юзера( проверка что такой email есть в БД, проверить что пароли совпадают (иначе отправлять ошибки)
//  и вернуть токен в котором зашифрованы (id,email, userName).
// Написать обработчик ошибок.
// Проверка токена на то что токен валидный. (время токена не истекло)
