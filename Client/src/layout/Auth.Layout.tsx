import React from 'react';
import "./Auth.Layout.scss"


export interface AuthLayoutProps {
   children: React.ReactChild | React.ReactChild[]
}

export function AuthLayout({ children }: AuthLayoutProps) {
   return (
      <div>
         <div className="auth-layout">
            <h1>Testing Auth</h1>
            {children}
         </div>
      </div>
   )
}

