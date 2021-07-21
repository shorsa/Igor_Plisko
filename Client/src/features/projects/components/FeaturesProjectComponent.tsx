import React, { useCallback, useState } from 'react'
import { FeatureModel } from '../models';
import "./FeaturesProjectComponent.scss";


interface FeaturesProjectComponentProps {
   feature: FeatureModel
   onChange: (updateFeature: FeatureModel) => void;
}


export function FeaturesProjectComponent({ feature, onChange }: FeaturesProjectComponentProps) {
   const [featureState, setFeatureState] = useState(feature);

   const handleOnChange = useCallback(event => {
      let { name, value } = event.target;
      console.dir(event.target);

      if (name === "isRequired") {
         value = event.target.checked;
      }

      setFeatureState({ ...featureState, [name]: value })
      onChange({ ...featureState, [name]: value })

   }, [featureState]);


   return (
      <>
         <div className="features-wrapper">

            <div className="block-inputs">
               <div className="form-item" >
                  <label htmlFor="title" className="formLabel">
                     Title:
                  </label>
                  <input value={featureState.title} type="text" name="title" id="title" className="formField" onChange={handleOnChange} /><br />
               </div>

               <div className="form-item" >
                  <label htmlFor="description" className="formLabel">
                     Description:
                  </label>
                  <input value={featureState.description} type="text" name="description" id="description" className="formField" onChange={handleOnChange} /><br />
               </div>
            </div>


            <div className="form-item">
               <label htmlFor="estimateMin" className="formLabel">
                  EstimateMin:
               </label>
               <input value={featureState.estimateMin} type="text" name="estimateMin" id="estimateMin" className="formField" onChange={handleOnChange} /><br />
            </div>

            <div className="form-item">
               <label htmlFor="estimateMax" className="formLabel">
                  EstimateMax
               </label>
               <input value={featureState.estimateMax} type="text" name="estimateMax" id="estimateMax" className="formField" onChange={handleOnChange} /><br />
            </div>
            <label>
               <input type="checkbox" name="isRequired" checked={featureState.isRequired} onChange={handleOnChange} />
               {' '}Is Required
            </label>
         </div>
      </>
   )
}


