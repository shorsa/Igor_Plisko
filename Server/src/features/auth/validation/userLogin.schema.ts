import { object, string } from "yup";

export const userLoginSchema = object().shape(
   {
      email: string().required().email('Please Enter your Email'),
      password: string().required('Please Enter your password').min(4),

   }
);
