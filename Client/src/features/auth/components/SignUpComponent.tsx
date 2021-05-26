import { Button } from "antd";
import { Field, Formik } from "formik";
import { DatePicker, Form } from "formik-antd";
import React, { useCallback } from 'react';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FormInput } from "../../../shared/components/formInput/FormInput";
import { RequestSignUpModel } from "../models";
import "./SignUpComponent.scss";
// import { Gender } from "../enums";


interface SignUpComponentProps {
   value: RequestSignUpModel;
   loading: boolean;
   onSubmit: (signUpModel: RequestSignUpModel) => void;

}

const SignUpValidationSchema = Yup.object({
   email: Yup.string().required().email('Please Enter your Email'),
   password: Yup.string().required('Please Enter your password').min(4),
   firstName: Yup.string().required('Please Enter your first name'),
   lastName: Yup.string().required('Please Enter your last name'),
   phoneNumber: Yup.string().required('Please Enter a phone number').min(9).max(15),
   gender: Yup.number().required('Choose your gender'),
   country: Yup.string().required('Please Enter your country'),
   age: Yup.date().required('Please Enter your age')
});



export function SignUpComponent({ value, onSubmit, loading }: SignUpComponentProps) {
   // console.log(value)

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
               <FormInput name="password" label="Password" />
               <FormInput name="firstName" label="FirstName" />
               <FormInput name="lastName" label="LastName" />
               <FormInput name="phoneNumber" label="PhoneNumber" />
               <FormInput name="country" label="Country" />

               <DatePicker name="age" bordered={false} />

               <Field className="radio-button" component="div" name="myRadioGroup">
                  <input
                     type="radio"
                     // Checked={value.----- === "one"}
                     name="gender"
                     value="male"
                  />
                  <label>Male </label>

                  <input
                     type="radio"
                     name="gender"
                     value="female"
                  />
                  <label>Female </label>
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






//   <Form.Item name="gender" label="Country">
//   <div role="group" aria-labelledby="my-radio-group">
//      <label>
//         <Field type="radio" name="gender" value={1} />
//         Female
//      </label>
//      <label>
//         <Field type="radio" name="gender" value={0} />
//     Male
//   </label>
//   </div>
// </Form.Item>