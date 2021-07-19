import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app-state';
import "./Spinner.scss";


interface spinnerProps { }

export function Spinner({ }: spinnerProps) {
   const runningSpinner: boolean = useSelector((state: AppState) => state.appState.status) === "running";

   return (
      <>
         {
            runningSpinner ?
               <div className="wrapper">
                  < Spin size="large" />
               </div > : null
         }
      </>


   );
}

export default Spinner;
