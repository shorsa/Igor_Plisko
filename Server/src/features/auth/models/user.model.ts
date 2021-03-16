import { Gender, Role } from "../enums";

export interface User {
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

