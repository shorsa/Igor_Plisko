import React from "react";
import { AuthLayout as AuthLayout } from "../../../layout/Auth.Layout"
import { SingUpContainer } from "../containers/SignUpContainer";



export function AuthPage({ }) {
   return (
      <div>
         <AuthLayout>
            <SingUpContainer></SingUpContainer>
         </AuthLayout>
      </div>
   )
}