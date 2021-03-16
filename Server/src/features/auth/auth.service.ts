import { findByEmailCount } from "./auth.repository";
import { Role } from "./enums";
import { userRegisterSchema } from "./validation/userRegister.schema";
import bcrypt from "bcrypt";
import CONFIG from "../../config/config";

export async function register(body: any) {
   console.log(body);

   //Проверка валидации
   const a = await userRegisterSchema.isValid(body);
   if (!a) {
      throw ("Error")
   }

   //Хеширование пароля 
   const





   //Проверка что мыла такого нет в бд



export async

   //Хеширование пароля 
   //Обновление
}


//! npm run start:dev

