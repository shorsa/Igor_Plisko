import { Gender } from "../../enums";
export interface RequestSingUpModel {
   email: string;
   password: string;
   firstName: string;
   lastName: string;
   phoneNumber: string;
   gender: Gender;
   country: string;
   age: Date;
}

