
import React from "react";
import { SignUpComponent } from "../components/SignUpComponent";
import { Gender } from "../enums";
import { RequestSingUpModel } from "../models";
// import { useDispatch } from "react-redux";

const initialValues: RequestSingUpModel = {
   email: '',
   password: '',
   firstName: '',
   lastName: '',
   phoneNumber: '',
   gender: Gender.Female,
   country: "",
   age: new Date(),
}

export interface SignUpContainerProps { }

export function SignUpContainer({ }: SignUpContainerProps) {

   console.log(test)
   return (

      <SignUpComponent value={initialValues} onChange={() => { console.log("hello") }} loading={true} />
   )
}
