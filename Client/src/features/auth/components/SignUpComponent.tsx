import { Button } from "antd";
import { Field, Formik } from "formik";
import { DatePicker, Form } from "formik-antd";
import React, { useCallback } from 'react';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { SchemaOf } from "yup";
import { FormInput } from "../../../shared/components/formInput/FormInput";
import { Gender } from "../enums";
import { RequestSignUpModel } from "../models";
import "./SignUpComponent.scss";

interface SignUpComponentProps {
   value: RequestSignUpModel;
   loading: boolean;
   onSubmit: (signUpModel: RequestSignUpModel) => void;

}

const SignUpValidationSchema: SchemaOf<RequestSignUpModel> = Yup.object({
   email: Yup.string().required().email('Please Enter your Email'),
   password: Yup.string().required('Please Enter your password').min(4),
   firstName: Yup.string().required('Please Enter your first name'),
   lastName: Yup.string().required('Please Enter your last name'),
   phoneNumber: Yup.string().required('Please Enter a phone number').min(9).max(15),
   gender: Yup.number().required('Choose your gender'),
   country: Yup.string().required('Please Enter your country'),
   age: Yup.string().required('Please Enter your age')
});



export function SignUpComponent({ value, onSubmit, loading }: SignUpComponentProps) {

   const handleSubmit = useCallback((signUpModel: RequestSignUpModel) => {
      console.log(signUpModel);
      onSubmit(signUpModel);
   }, [onSubmit]);

   return (
      <div className="sign-up-wrapper">
         <h1>Sign Up</h1>
         <span>Already have an account?</span>
         <Link className="link-sing-in" to={'#'}>Sing in here</Link>

         <Formik
            initialValues={value}
            validateOnBlur
            onSubmit={handleSubmit}
            validationSchema={SignUpValidationSchema}
         >
            <Form>
               <FormInput name="email" label="Email" />
               <FormInput name="password" label="Password" type="password" />
               <FormInput name="firstName" label="FirstName" />
               <FormInput name="lastName" label="LastName" />
               <FormInput name="phoneNumber" label="PhoneNumber" type="number" />
               <FormInput name="country" label="Country" />
               <DatePicker name="age" bordered={false} />
               <Field className="radio-button" component="div" name="gender">
                  <input
                     type="radio"
                     name="gender"
                     value={Gender.Male}
                  />
                  <label>{Gender[Gender.Male]}</label>

                  <input
                     type="radio"
                     name="gender"
                     value={Gender.Female}
                  />
                  <label>{Gender[Gender.Female]} </label>
               </Field>
               <Button
                  type="primary"
                  shape="round"
                  htmlType="submit"
                  disabled={loading}
                  size="large"
               >
                  Sing Up
               </Button>
            </Form>
         </Formik>
      </div>
   )
}

