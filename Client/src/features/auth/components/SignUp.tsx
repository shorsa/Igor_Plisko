import { Button } from "antd";
import React from 'react';
import * as Yup from "yup";
import { SignUpModel } from "../models";
import "./SignUp.scss";
import { Gender } from "../enums";
interface SingPageProps {
   value: SignUpModel;
   loading: boolean;
   onChange: (signUpModel: SignUpModel) => void
}

const SingUpValidationSchema: SchemaOf<Request> = Yup.object({
   email: Yup.string().required().email('Please Enter your Email'),
   password: Yup.string().required('Please Enter your password').min(4),
   firstName: Yup.string().required('Please Enter your first name'),
   lastName: Yup.string().required('Please Enter your last name'),
   phoneNumber: Yup.string().required('Please Enter a phone number').min(9).max(15),
   gender: Yup.mixed().oneOf(Object.values(Gender) as Gender[]).required('Choose your gender'),
   country: Yup.string().required('Please Enter your country'),
   age: Yup.date().required('Please Enter your age')
});



export function SingUp({ }: SingPageProps) {

   return (
      <Button
         type="primary"
      >
         SingUp
      </Button>
   )
}



