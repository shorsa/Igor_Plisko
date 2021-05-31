import React, { useState } from 'react'
import "./FeaturesProjectComponent.scss";


export function FeaturesProjectComponent() {
   const [checked, setChecked] = useState(true);

   return (
      <>
         <span> Array Feture</span>
         <div className="input-wrapper">

            <div className="form-item">
               <label htmlFor="title">
                  Title:
            </label>
               <input type="text" name="title" id="title" /><br />
            </div>

            <div className="form-item">
               <label htmlFor="description">
                  Description:
            </label>
               <input type="text" name="description" id="description" /><br />
            </div>

            <div className="form-item">
               <label htmlFor="estimateMin">
                  EstimateMin:
            </label>
               <input type="text" name="estimateMin" id="estimateMin" /><br />
            </div>

            <div className="form-item">
               <label htmlFor="estimateMax">
                  EstimateMax
            </label>
               <input type="text" name="estimateMax" id="estimateMax" /><br />
            </div>

            {/* 
            <input type="checkbox" name="isOpen" value="">
               <label > Is Open</label><br /> */}

            <label>
               <input type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
               />
                 Is Open
             </label>
         </div>
      </>

   )
}


