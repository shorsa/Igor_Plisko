import bcrypt from "bcrypt";
import CONFIG from "../../config/config";
import * as authRepository from "./auth.repository";
import { RequestCreateUserModel, RequestLoginUserModel, ResponseLoginUserModel, ResponseUserRegisterModel } from "./models";
import { userLoginSchema, userRegisterSchema } from "./validation";
import jwt from "jsonwebtoken";
import { ErrorResponse } from "../shared/helper/app_error";
import httpStatus from "http-status";


export async function register(body: RequestCreateUserModel): Promise<ResponseUserRegisterModel> {
   const isValid: boolean = await userRegisterSchema.isValid(body);
   console.log("isValid", isValid);
   if (!isValid) {
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "Error, please write correctly")
   }

   const emailExist: number = await authRepository.findByEmailCount(body.email)
   if (emailExist) {
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This email already exists!")
   }

   const hashPassword: string = await bcrypt.hash(body.password, CONFIG.SALT_ROUNDS)
   body.password = hashPassword;
   console.log("body", body);

   const userCreated = await authRepository.create(body)
   console.log("userCreated", userCreated)
   return { ok: true, _id: userCreated._id }
}


export async function login(body: RequestLoginUserModel): Promise<ResponseLoginUserModel> {
   const isValidLogin: boolean = await userLoginSchema.isValid(body)
   if (!isValidLogin) {
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This email does not exist")
   }

   const emailExistEmail: any = await authRepository.findUser(body.email)
   if (!emailExistEmail) {
      throw new ErrorResponse(httpStatus.NOT_FOUND, "This email does not exist")
   }

   const checkPassword: boolean = await bcrypt.compare(body.password, emailExistEmail.password)
   if (!checkPassword) {
      throw new ErrorResponse(httpStatus.NOT_FOUND, "This password is not correct")
   }
   const token: string = jwt.sign({
      email: emailExistEmail.email,
      userId: emailExistEmail._id
   }, CONFIG.JWT_ENCRYPTION, { expiresIn: CONFIG.JWT_EXPIRATION })

   return { ok: true, token: token };
}

