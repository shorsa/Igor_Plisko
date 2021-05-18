import React from "react";
import { AuthLayout } from "../../../layout/AuthLayout"
import { SignUpContainer } from "../containers/SignUpContainer";
// import { TestContainer } from "../containers/TestContainer";

interface SingPageProps {
}

export function SingUpPage({ }: SingPageProps) {
   return (
      <AuthLayout>
         {/* <TestContainer /> */}
         <SignUpContainer />

      </AuthLayout>
   )
}
