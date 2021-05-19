import React from "react";
import { AuthLayout } from "../../../layout/AuthLayout"
import { SignUpContainer } from "../containers/SignUpContainer";


interface SingPageProps {
}

export function SignUpPage({ }: SingPageProps) {
   return (
      <AuthLayout>
         <SignUpContainer />
      </AuthLayout>
   )
}
