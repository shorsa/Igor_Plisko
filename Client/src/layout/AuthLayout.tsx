import React from 'react';
import "./AuthLayout.scss"
import roundElements from "../assets/img/auth-layout/round-elements.svg"
import mainScreenGraph from "../assets/img/auth-layout/main-screen-graph.svg"
import dottedBackground from "../assets/img/auth-layout/dotted-background.svg"


export interface AuthLayoutProps {
   children: React.ReactChild | React.ReactChild[]
}

export function AuthLayout({ children }: AuthLayoutProps) {
   return (

      <div className="auth-layout-wrapper">
         <div className="container">

            <div className="content">
               <div>
                  <h1 className="logo">сoreg widget</h1>
               </div>

               {children}
            </div>

            <div className="static-layout">
               <img className="round-elements" src={roundElements} alt="" />
               <img className="main-screen-graph" src={mainScreenGraph} alt="" />
               <img className="dotted top" src={dottedBackground} alt="" />
               <img className="dotted bottom" src={dottedBackground} alt="" />
               <div className='txt-layout'>
                  <h4>Coreg Wdget Platform</h4>
                  <h2>What if you could save $100 (or more)  on your SEO services today?</h2>
                  <h3>Discover The Growth Opportunities
                      Your Website Is Missing</h3>

               </div>

            </div>
         </div>


         <div className="footer">
            <ul className='nav'>
               <li>© Coreg Widget — 2021, All Rights Reserved</li>
               <li>Privacy policy</li>
               <li>Terms {'&'} Conditions</li>
               <li>Contacts</li>
            </ul>



         </div>









      </div>
   )
}

