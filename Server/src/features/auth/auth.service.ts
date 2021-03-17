import { create, findByEmailCount } from "./auth.repository";
import { Role } from "./enums";
import { userRegisterSchema } from "./validation/userRegister.schema";
import bcrypt from "bcrypt";
import CONFIG from "../../config/config";

export async function register(body: any) {
   console.log(body);

   //Проверка валидации
   // const a = await userRegisterSchema.isValid(body);
   // if (!a) {
   //    throw ("Error")
   // }

   // //Хеширование пароля 
   // const encryption = await bcrypt.hash(body.password, CONFIG.SALT_ROUNDS)
   // body.password = encryption

   //Проверка что мыла такого нет в бд


   create(body)


   //! RequestUserModel,ResponseUserModel




   //Создание Юз
}
// export async function update(requste: RequestUserModel ) {

//    aweit
// }








//! npm run start:dev