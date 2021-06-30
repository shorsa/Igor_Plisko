import { Gender } from "../../enums";
export interface RequestSignUpModel {
   email: string;
   password: string;
   firstName: string;
   lastName: string;
   phoneNumber: string;
   gender: Gender;
   country: string;
   age: string;
}

