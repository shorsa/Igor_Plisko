import { Button } from "antd";
import { Field, Formik } from "formik";
import { Form, Input, DatePicker } from "formik-antd";
import React, { useCallback } from 'react';
import * as Yup from "yup";
// import { Gender } from "../enums";
import { RequestSingUpModel } from "../models";
import "./SignUp.scss";


interface SignUpComponentProps {
   value: RequestSingUpModel;
   loading: boolean;
   onChange: (signUpModel: RequestSingUpModel) => void
}

const SingUpValidationSchema = Yup.object({
   email: Yup.string().required().email('Please Enter your Email'),
   password: Yup.string().required('Please Enter your password').min(4),
   firstName: Yup.string().required('Please Enter your first name'),
   lastName: Yup.string().required('Please Enter your last name'),
   phoneNumber: Yup.string().required('Please Enter a phone number').min(9).max(15),
   gender: Yup.number().required('Choose your gender'),
   country: Yup.string().required('Please Enter your country'),
   age: Yup.date().required('Please Enter your age')
});



export function SignUpComponent({ value, onChange, loading }: SignUpComponentProps) {
   console.log(value)




   const handleSubmit = useCallback((signUpModel: RequestSingUpModel) => {
      console.log(signUpModel);

      onChange(signUpModel);
   }, [onChange]);

   return (
      <div className="sign-up-wrapper">
         <h1>Test</h1>
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
                  <Input name="password" type='text'></Input>
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

               <Form.Item name="country" label="Country">
                  <Input name="country" type="text"></Input>
               </Form.Item>

               <DatePicker name="age" bordered={false} />


               <Form.Item name="gender" label="Country">
                  <div role="group" aria-labelledby="my-radio-group">
                     <label>
                        <Field type="radio" name="gender" value={1} />
                        Female
                     </label>
                     <label>
                        <Field type="radio" name="gender" value={0} />
                    Male
                  </label>
                  </div>
               </Form.Item>
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

  //?validateOnBlur  валидируемься когда  переходим на другое поле




