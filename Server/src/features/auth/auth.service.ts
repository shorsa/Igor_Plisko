import bcrypt from "bcrypt";
import CONFIG from "../../config/config";
import * as authRepository from "./auth.repository";
import { RequestCreateUserModel, RequestLoginUserModel, ResponseLoginUserModel, ResponseUserRegisterModel } from "./models";
import { userLoginSchema, userRegisterSchema } from "./validation";
import jwt from "jsonwebtoken";
import { ErrorResponse } from "../shared/helper/app_error";
import httpStatus from "http-status";

//!Регестрация
export async function register(body: RequestCreateUserModel): Promise<ResponseUserRegisterModel> {
   console.log(body);
   //Проверка валидации--------------------------------------
   const isValid: boolean = await userRegisterSchema.isValid(body);
   console.log("isValid", isValid);
   if (!isValid) {
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "Error, please write correctly")
   }
   // Проверка что мыла такого нет в бд-------------------------
   const emailExist: number = await authRepository.findByEmailCount(body.email)
   if (emailExist) {
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This email already exists!")
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
export async function login(body: RequestLoginUserModel): Promise<ResponseLoginUserModel> {
   //Валидация 
   const isValidLogin: boolean = await userLoginSchema.isValid(body)
   if (!isValidLogin) {
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This email does not exist")
   }

   //проверка емейла
   const emailExistEmail: any = await authRepository.findUser(body.email)
   if (!emailExistEmail) {
      throw new ErrorResponse(httpStatus.NOT_FOUND, "This email does not exist")
   }

   //проверка пароля
   const checkPassword: boolean = await bcrypt.compare(body.password, emailExistEmail.password)
   if (!checkPassword) {
      throw new ErrorResponse(httpStatus.NOT_FOUND, "This password is not correct")
   }
   const token: string = jwt.sign({
      email: emailExistEmail.email,
      userId: emailExistEmail._id
   }, CONFIG.JWT_ENCRYPTION, { expiresIn: CONFIG.JWT_EXPIRATION })


   return { ok: true, token: token }

}



export enum HttpStatusCode {
   OK = 200,
   BAD_REQUEST = 400,
   NOT_FOUND = 404,
   INTERNAL_SERVER = 500,
}





// Проверка токена на то что токен валидный. (время токена не истекло)
