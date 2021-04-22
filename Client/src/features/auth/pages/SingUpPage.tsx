import React from "react";
import { AuthLayout as AuthLayout } from "../../../layout/Auth.Layout"
import { SignUpContainer } from "../containers/SignUpContainer";
// import { } from "../containers/SignUpContainer";



export function AuthPage({ }) {
   return (
      <div>
         <AuthLayout>
            <SignUpContainer />
         </AuthLayout>
      </div>
   )
}
