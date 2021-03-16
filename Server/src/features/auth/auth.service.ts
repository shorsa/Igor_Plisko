import { findByEmailCount } from "./auth.repository";
import { Role } from "./enums";
import { userRegisterSchema } from "./validation/userRegister.schema";

export async function register(body: any) {
   console.log(Role[Role.User]);
   const a = await userRegisterSchema.isValid(body);
   if (!a) {
      throw ("Error")
   }

   const b = findByEmailCount(body.email)

   //Проверка валидации



   //Проверка что мыла такого нет в бд




   //Хеширование пароля 
   //
}