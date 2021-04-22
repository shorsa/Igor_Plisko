import { Button } from "antd";
import { Field, Formik } from "formik";
import { Form, Input } from "formik-antd";
import React, { useCallback } from 'react';
import * as Yup from "yup";
import { Gender } from "../enums";
import { RequestSingUpModel } from "../models";
import "./SignUp.scss";


interface SingPageProps {
   value: RequestSingUpModel;
   loading: boolean;
   onChange: (signUpModel: RequestSingUpModel) => void
}

const SingUpValidationSchema = Yup.object({                                                       //!разобраться с типизацией  ----------------------    Yup.object().shape({ 
   email: Yup.string().required().email('Please Enter your Email'),
   password: Yup.string().required('Please Enter your password').min(4),
   firstName: Yup.string().required('Please Enter your first name'),
   lastName: Yup.string().required('Please Enter your last name'),
   phoneNumber: Yup.string().required('Please Enter a phone number').min(9).max(15),
   gender: Yup.mixed().oneOf(Object.values(Gender) as Gender[]).required('Choose your gender'),
   country: Yup.string().required('Please Enter your country'),
   age: Yup.date().required('Please Enter your age')
});



export function SignUpComponent({ value, onChange, loading }: SingPageProps) {
   const handleSubmit = useCallback((signUpModel: RequestSingUpModel) => {
      console.log(signUpModel);

      onChange(signUpModel);
   }, [onChange]);

   return (
      <Formik
         initialValues={value}
         validateOnBlur
         onSubmit={handleSubmit}
         validationSchema={SingUpValidationSchema}
      >
         <Form>
            <Form.Item name="email" label="Email">
               <Input name="email" type='text'></Input>
            </Form.Item>

            <Form.Item name="password" label="Password">
               <Input name=" password" type='text'></Input>
            </Form.Item>

            <Form.Item name="firstName" label="First Name">
               <Input name="firstName" type="text"></Input>
            </Form.Item>

            <Form.Item name="lastName" label="Last Name">
               <Input name="lastName" type="text"></Input>
            </Form.Item>


            <Form.Item name="phoneNumber" label="Phone number">
               <Input name="phoneNumber" type="text"></Input>
            </Form.Item>

            <label>
               <Field type="radio" name="gender" />
                  Human
                   </label>
         </Form>



         <Button
            type="primary"
            shape="round"
            htmlType="submit"
            disabled={loading}
            size="large"
         >
            Sing Up
        </Button>

      </Formik>

   )
}

  //?validateOnBlur  валидируемься когда  переходим на другое поле
 //!  {({  handleChange, handelBlur, isValid, handleSubmit}



