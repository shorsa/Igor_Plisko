import * as authRepository from "./auth.repository";
import { Role } from "./enums";
import { userRegisterSchema } from "./validation/userRegister.schema";
import bcrypt from "bcrypt";
import CONFIG from "../../config/config";
import { RequestUserModel } from "./models";

export async function register(body: RequestUserModel) {
   console.log(body);
   //!Проверка валидации--------------------------------------
   const isValid: boolean = await userRegisterSchema.isValid(body);
   console.log("isValid", isValid);

   if (!isValid) {
      throw ("Error isValid")
   }
   // //!Проверка что мыла такого нет в бд-------------------------
   const emailExist: number = await authRepository.findByEmailCount(body.email)
   if (emailExist) {
      throw ("Exit")
   }


   //!Хеширование пароля ---------------------------------------
   const hashPassword: string = await bcrypt.hash(body.password, CONFIG.SALT_ROUNDS)
   body.password = hashPassword;
   console.log("body", body);

   //!Создание User---------------------------------------------
   const userCreated = await authRepository.create(body)
   console.log("userCreated", userCreated)


}


