import React, { useCallback, useState, useRef } from 'react'
import { Button } from 'antd'
import { FormInput } from '../../../shared/components/formInput/FormInput'
import { Formik } from "formik";
import { Form } from "formik-antd";
import { RequestSignInModel } from '../models';
import * as Yup from "yup";


interface SignInComponentProps {
   value: RequestSignInModel;
   loading: boolean;
   onSubmit: (signInModel: RequestSignInModel) => void;
}


export const SignInValidationSchema = Yup.object(
   {
      email: Yup.string().required().email('Please Enter your Email'),
      password: Yup.string().required('Please Enter your password').min(4),
   }
);

export function SignInComponent({ value, loading, onSubmit }: SignInComponentProps) {

   const handleSubmit = useCallback((signInModel: RequestSignInModel) => {
      console.log("!!!!!???", signInModel);
      onSubmit(signInModel);
   }, [onSubmit]);



   //? ----------------------------------------------------------------------------
   // const [state, setState] = useState("");
   // let input2: React.MutableRefObject<null | HTMLInputElement> = useRef(null);

   // const click = () => {
   //    console.log(state)
   //    console.log(input2.current?.value)
   // }



   return (
      <div className="sign-up-wrapper">

         {/* <div className="App" style={{ height: "300vh", margin: "98px" }}>
            <input onChange={((event) => setState(event.target.value))} placeholder="Управляемый" />
            <input ref={input2} placeholder="Не управляемый" />
            <button onClick={click}> Get value </button>
         </div>              -------------------- 32 minutes*/ }



         <h1>Sign In</h1>
         <Formik
            initialValues={value}
            onSubmit={handleSubmit}
            validationSchema={SignInValidationSchema}
         >
            <Form>
               <FormInput name="email" label="Email" />
               <FormInput name="password" label="Password" />
               <Button
                  type="primary"
                  shape="round"
                  htmlType="submit"
                  disabled={loading}
                  size="large"
               >
                  Sing In
               </Button>
            </Form>
         </Formik>
      </div >

   )
}


