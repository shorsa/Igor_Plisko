import { Button } from "antd";
import React from 'react';
import * as Yup from "yup";
import "./SignUp.scss";


export interface SignUpModel {
   email: string;
   password: string;
   firstName: string;
}
interface SingPageProps {
   value: SignUpModel;
   loading: boolean;
   onChange: (signUpModel: SignUpModel) => void
}

// const SingUpValidationSchema = Yup.object({
//    email: Yup.string().required()                            //?

// });



export function SingUp({ }: SingPageProps) {

   return (
      <Button
         type="primary"
      >
         SingUp
      </Button>
   )
}



