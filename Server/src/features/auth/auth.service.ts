import bcrypt from "bcrypt";
import CONFIG from "../../config/config";
import * as authRepository from "./auth.repository";
import { RequestCreateUserModel, RequestLoginUserModel, ResponseUserRegisterModel } from "./models";
import { userLoginSchema, userRegisterSchema } from "./validation";
import jwt from "jsonwebtoken";

//!Регестрация
export async function register(body: RequestCreateUserModel): Promise<ResponseUserRegisterModel> {
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
   return { ok: true, _id: userCreated._id }
}


//!Авторизация
export async function login(body: RequestLoginUserModel) {
   //Валидация 
   const isValidLogin: boolean = await userLoginSchema.isValid(body)
   if (!isValidLogin) {
      throw ("Error Validation")
   }

   //проверка емейла
   const emailExistEmail: any = await authRepository.findUser(body.email)
   if (!emailExistEmail) {
      throw ("This email doesn't exist")
   }
   console.log("what this:", emailExistEmail)

   //проверка пароля
   const checkPassword: boolean = await bcrypt.compare(body.password, emailExistEmail.password)
   if (!checkPassword) {
      throw ("This password is not correct")
   }

   const token: string = jwt.sign({
      email: emailExistEmail.email,
      userId: emailExistEmail._id
   }, CONFIG.JWT_ENCRYPTION, { expiresIn: CONFIG.JWT_EXPIRATION })


   return { ok: true, token: token }

}







// Логика для авторизации юзера( проверка что такой email есть в БД, проверить что пароли совпадают (иначе отправлять ошибки)
//  и вернуть токен в котором зашифрованы (id,email, userName).
// Написать обработчик ошибок.
// Проверка токена на то что токен валидный. (время токена не истекло)
