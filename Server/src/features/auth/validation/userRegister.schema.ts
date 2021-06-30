import { date, number, object, string } from "yup";
import { Gender } from "../enums";
import { RequestCreateUserModel } from "../models";

export const userRegisterSchema = object().shape<RequestCreateUserModel>(
   {
      email: string().required().email('Please Enter your Email'),
      password: string().required('Please Enter your password').min(4),
      firstName: string().required('Please Enter your first name'),
      lastName: string().required('Please Enter your last name'),
      phoneNumber: string().required('Please Enter a phone number').min(9).max(15),
      gender: number().required('Choose your gender'),
      country: string().required('Please Enter your country'),
      age: date().required('Please Enter your age')
   }
);











