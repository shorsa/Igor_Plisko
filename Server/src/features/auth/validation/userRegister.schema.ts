import { date, mixed, number, object, string } from "yup";
import { Gender } from "../enums";
import { RequestUserModel } from "../models";

export const userRegisterSchema = object().shape<RequestUserModel>(
   {
      email: string().required().email('Please Enter your Email'),
      password: string().required('Please Enter your password').min(8).max(15),
      firstName: string().required('Please Enter your first name'),
      lastName: string().required('Please Enter your last name'),
      phoneNumber: string().required('Please Enter a phone number').min(9).max(15),
      gender: mixed().oneOf(Object.values(Gender) as Gender[]).required('Please Enter a phone number'),
      country: string().required('Please Enter your country'),
      age: number().required('Please Enter your age').min(1).max(2),
   }
);











