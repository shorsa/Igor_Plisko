import { Button } from "antd";
import React, { useCallback } from 'react';
import * as Yup from "yup";
import { SignUpModel } from "../models";
import "./SignUp.scss";
import { Gender } from "../enums";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
interface SingPageProps {
   value: SignUpModel;
   loading: boolean;
   onChange: (signUpModel: SignUpModel) => void
}

const SingUpValidationSchema = Yup.object({       //!разобраться с типизацией 
   email: Yup.string().required().email('Please Enter your Email'),
   password: Yup.string().required('Please Enter your password').min(4),
   firstName: Yup.string().required('Please Enter your first name'),
   lastName: Yup.string().required('Please Enter your last name'),
   phoneNumber: Yup.string().required('Please Enter a phone number').min(9).max(15),
   gender: Yup.mixed().oneOf(Object.values(Gender) as Gender[]).required('Choose your gender'),
   country: Yup.string().required('Please Enter your country'),
   age: Yup.date().required('Please Enter your age')
});



export function SingUp({ value, onChange, loading }: SingPageProps) {
   const handlesInputEmail = useCallback((signUpModel: SignUpModel) => {
      console.log(signUpModel);

      onChange(signUpModel);
   }, [onChange]);



   return (

      <Formik
         initialValues={value}
         onSubmit={handlesInputEmail}
         validationSchema={SingUpValidationSchema}
      >
         <Form>
            <Form.Item name="test" label="Test">
               <Input name="test"></Input>
            </Form.Item>

            <Button
               type="primary"
               shape="round"
               htmlType="submit"
               disabled={loading}
               size="large"
            >
               Submit
        </Button>
            <div>
               Это текст
         </div>
         </Form>
      </Formik>
   )
}



