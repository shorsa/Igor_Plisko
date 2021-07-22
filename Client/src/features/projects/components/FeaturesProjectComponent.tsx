import { AppstoreAddOutlined, DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react'
import { FeatureModel } from '../models';
import "./FeaturesProjectComponent.scss";


interface FeaturesProjectComponentProps {
   feature: FeatureModel
   onChange: (updateFeature: FeatureModel) => void;
   onAddFeature: () => void;
}


export function FeaturesProjectComponent({ feature, onChange, onAddFeature }: FeaturesProjectComponentProps) {
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


   const handleAddFeature = useCallback(
      () => {
         onAddFeature()
      },
      [],
   )


   return (
      <>
         <div className="features-wrapper">
            <span className="main-number">{featureState.level}</span>
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
            <div className="form-item estimate-styles">
               <label htmlFor="estimateMin" className="formLabel">
                  EstimateMin:
               </label>
               <input value={featureState.estimateMin} type="number" name="estimateMin" id="estimateMin" className="formField" onChange={handleOnChange} /><br />
            </div>

            <div className="form-item estimate-styles">
               <label htmlFor="estimateMax" className="formLabel">
                  EstimateMax
               </label>
               <input value={featureState.estimateMax} type="number" name="estimateMax" id="estimateMax" className="formField " onChange={handleOnChange} /><br />
            </div>

            <label>
               <input type="checkbox" name="isRequired" checked={featureState.isRequired} onChange={handleOnChange} className="required" />
               {' '}Is Required
            </label>

            <div className="icons">
               <PlusSquareOutlined style={{ fontSize: '20px', color: '#0ecc1e', paddingLeft: '6px' }} onClick={handleAddFeature} />
               <DeleteOutlined style={{ fontSize: '20px', color: 'red', paddingLeft: '4px' }} />
               <AppstoreAddOutlined style={{ fontSize: '20px', color: "#45c3fd", paddingLeft: '10px' }} />
            </div>



         </div>
      </>
   )
}


