
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SignUpComponent } from "../components/SignUpComponent";
import { Gender } from "../enums";
import { RequestSignUpModel } from "../models";
import { signUpAction } from "../store/actions";
// import { useDispatch } from "react-redux";

const initialValues: RequestSignUpModel = {
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

   const dispatch = useDispatch();

   const handleSubmit = useCallback(
      (value: any) => {
         dispatch(signUpAction({ payload: value }))
      },
      [dispatch],
   )

   return (
      <SignUpComponent value={initialValues} onSubmit={handleSubmit} loading={false} />
   )
}
