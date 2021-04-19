import bcrypt from "bcrypt";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import CONFIG from "../../config/config";
import { ErrorResponse } from "../shared/helper/appError.helper";
import { loggerHelper } from "../shared/helper/logger.helper";
import * as authRepository from "./auth.repository";
import {
   RequestCreateUserModel, RequestLoginUserModel,
   ResponseLoginUserModel, ResponseUserRegisterModel,
   UserModel
} from "./models";
import { userLoginSchema, userRegisterSchema } from "./validation";
import UserSchemaEntityModel from "./entities/user.entity";

function generatedToken(foundedUser: UserModel): string {
   const generatedToken = jwt.sign({
      email: foundedUser.email,
      userId: foundedUser._id
   }, CONFIG.JWT_ENCRYPTION, { expiresIn: CONFIG.JWT_EXPIRATION })
   return generatedToken
}

export async function register(body: RequestCreateUserModel): Promise<ResponseUserRegisterModel> {

   loggerHelper.debug(`User started registration ${body.email}`);

   const isValid: boolean = await userRegisterSchema.isValid(body);

   if (!isValid) {
      loggerHelper.error(`User registration invalid ${body.email}`);
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "Error, please write correctly")
   }

   const emailExist: number = await authRepository.findCountByEmailRegister(body.email)
   if (emailExist) {
      loggerHelper.error(`This email already exists ${body.email}`);
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This email already exists!")
   }

   const hashPassword: string = await bcrypt.hash(body.password, CONFIG.SALT_ROUNDS)
   body.password = hashPassword;


   loggerHelper.error(`Password was not hashed, ${JSON.stringify(body)}`);

   const user = new UserSchemaEntityModel(body);
   console.log(user);


   const userCreated: UserModel = await authRepository.create(user)

   return { ok: true, _id: userCreated._id }
}


export async function login(body: RequestLoginUserModel): Promise<ResponseLoginUserModel> {

   loggerHelper.debug(`User start login ${body.email}`);

   const isValidLogin: boolean = await userLoginSchema.isValid(body);
   if (!isValidLogin) {
      loggerHelper.error(`User credentials invalid ${body.email}`);
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This email does not exist");
   }

   const foundedUser: UserModel | null = await authRepository.findUserByEmailLogin(body.email);
   if (!foundedUser) {
      loggerHelper.error("User not found", body.email);
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This email does not exist");
   };

   const checkPassword: boolean = await bcrypt.compare(body.password, foundedUser.password);
   if (!checkPassword) {
      loggerHelper.error(`This password is not correct ${JSON.stringify(body)}`);
      throw new ErrorResponse(httpStatus.BAD_REQUEST, "This password is not correct");
   }
   const token: string = generatedToken(foundedUser);

   loggerHelper.debug("User is login", foundedUser.email);

   return { ok: true, token: token };
}

