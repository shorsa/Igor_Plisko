import { object, string } from "yup";
import { RequestLoginUserModel } from "../models";

export const userLoginSchema = object().shape<RequestLoginUserModel>(
   {
      email: string().required().email('Please Enter your Email'),
      password: string().required('Please Enter your password').min(4),
   }
);
