import React from 'react';
import "./AuthLayout.scss"


export interface AuthLayoutProps {
   children: React.ReactChild | React.ReactChild[]
}

export function AuthLayout({ children }: AuthLayoutProps) {
   return (

      <div className="auth-layout">
         <h1>Testing Auth</h1>
         {children}

      </div>
   )
}

