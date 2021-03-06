
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SignInComponent } from '../components/SignInComponent';
import { RequestSignInModel } from "../models";
import { signInAction } from '../store/actions';


const initialValues: RequestSignInModel = {
   email: '',
   password: '',
}

export interface SignInContainerProps { }

export function SignInContainer({ }: SignInContainerProps) {
   const dispatch = useDispatch();
   const handleSubmit = useCallback(

      (value: RequestSignInModel) => {
         dispatch(signInAction({ payload: value }))
      },
      [dispatch],
   )

   return (
      < SignInComponent value={initialValues} onSubmit={handleSubmit} loading={false} />

   )
}


