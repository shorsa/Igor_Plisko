import React, { useState } from 'react'
import "./FeaturesProjectComponent.scss";


export function FeaturesProjectComponent() {

   const [x, setX] = useState();
   const handleClick = ({ target: { checked } }: any) => {
      console.log(checked);
      setX(checked);
   };



   return (
      <>

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

            <label>
               <input type="checkbox" checked={x} onChange={handleClick} />
               {' '}Is Required
            </label>

         </div>
      </>

   )
}


