import { Gender, Role } from "../../enums";

export interface ResponseUserModel {
   _id: string;
   email: string;
   password: string;
   firstName: string;
   lastName: string;
   phoneNumber: string;
   gender: Gender;
   country: string;
   age: Date;
   role: Role;
   createdAt: Date;
}

