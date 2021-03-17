import { Gender } from "../../enums";

export interface RequestUserModel {
   email: string;
   password: string;
   firstName: string;
   lastName: string;
   phoneNumber: string;
   gender: Gender;
   country: string;
   age: Date;
}


//!Мы убераем поля    " role: Role;   createdAt:Date;" потому, эти поля для запроса !   
//!  " role: Role;   createdAt:Date;" еще не известны 