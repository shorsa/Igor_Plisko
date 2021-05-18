import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app-state';
import "./Spinner.scss";


export function Spinner() {
   const runningSpinner = useSelector((state: AppState) => state.appState.status) === "running";
   console.log(runningSpinner);


   return (
      <div className="wrapper">
         {true ? <Spin size="large" /> : null}
      </div>


   );
}

export default Spinner;
