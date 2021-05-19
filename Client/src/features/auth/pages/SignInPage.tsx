import React from "react";
import { AuthLayout } from "../../../layout/AuthLayout"
import { SignInContainer } from "../containers/SignInContainer";

interface SingInPageProps {
}

export function SignInPage({ }: SingInPageProps) {
   return (
      <AuthLayout>
         <SignInContainer />
      </AuthLayout>
   )
}
