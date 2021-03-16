import { Gender, Role } from "../../enums";

export interface ResponseUserModel {
   _id:string;
   email: string;
   password: string;
   firstName: string;
   lastName: string;
   phoneNumber: string;
   gender: Gender;
   country: string;
   age: number;
   role: Role;
   createdAt:Date;
}

//! Респонс у нас всегда идет с "id"