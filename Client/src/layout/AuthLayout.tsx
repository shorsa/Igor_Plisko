import React from 'react';
import "./AuthLayout.scss"


export interface AuthLayoutProps {
   children: React.ReactChild | React.ReactChild[]
}

export function AuthLayout({ children }: AuthLayoutProps) {
   return (

      <div className="auth-layout">

         <div className="Content">
            {children}
         </div>


         <div>
            <h1>Static</h1>
         </div>


         <div>
            <h1>Foter</h1>
         </div>









      </div>
   )
}

