import { AppstoreAddOutlined, DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect, useState } from 'react'
import { FeatureModel } from '../models';
import "./FeaturesProjectComponent.scss";

const initialStateFeature: FeatureModel = {
   level: '',
   title: '',
   description: '',
   isRequired: true,
   estimateMin: 0,
   estimateMax: 0,
}

interface FeaturesProjectComponentProps {
   feature: FeatureModel
   onChange: (updateFeature: FeatureModel) => void;
   onAddFeature: (value: FeatureModel, level: string) => void;
   onAddFeatureChild: (valueChild: FeatureModel, level: string) => void

}


export function FeaturesProjectComponent({ feature, onChange, onAddFeature, onAddFeatureChild }: FeaturesProjectComponentProps) {
   const [featureState, setFeatureState] = useState(feature);

   useEffect(() => {
      setFeatureState(feature)
   }, [feature, feature.level]);

   const handleOnChange = useCallback(event => {
      let { name, value } = event.target;
      if (name === "isRequired") {
         value = event.target.checked;
      }
      // console.log({ [name]: value }, '!!!!!!!!');


      setFeatureState({ ...featureState, [name]: value })
      onChange({ ...featureState, [name]: value })

   }, [featureState, onChange]);


   const handleAddFeature = () => {
      onAddFeature(initialStateFeature, feature.level)
   }

   const handleAddFeatureChild = () => {
      onAddFeatureChild(initialStateFeature, feature.level)
   }



   return (
      <>
         <div className="features-wrapper">
            <span className="main-number">{feature.level}</span>
            <div className="block-inputs">
               <div className="form-item" >
                  <label htmlFor="title" className="formLabel">
                     Title:
                  </label>
                  <input value={feature.title} type="text" name="title" id="title" className="formField" onChange={handleOnChange} /><br />
               </div>

               <div className="form-item" >
                  <label htmlFor="description" className="formLabel">
                     Description:
                  </label>
                  <input value={feature.description} type="text" name="description" id="description" className="formField" onChange={handleOnChange} /><br />
               </div>
            </div>
            <div className="form-item estimate-styles">
               <label htmlFor="estimateMin" className="formLabel">
                  EstimateMin:
               </label>
               <input value={feature.estimateMin} type="number" name="estimateMin" id="estimateMin" className="formField" onChange={handleOnChange} /><br />
            </div>

            <div className="form-item estimate-styles">
               <label htmlFor="estimateMax" className="formLabel">
                  EstimateMax
               </label>
               <input value={feature.estimateMax} type="number" name="estimateMax" id="estimateMax" className="formField " onChange={handleOnChange} /><br />
            </div>

            <label>
               <input type="checkbox" name="isRequired" checked={feature.isRequired} onChange={handleOnChange} className="required" />
               {' '}Is Required
            </label>

            <div className="icons">
               <PlusSquareOutlined style={{ fontSize: '20px', color: '#0ecc1e', paddingLeft: '6px' }} onClick={handleAddFeature} />
               <DeleteOutlined style={{ fontSize: '20px', color: 'red', paddingLeft: '4px' }} />
               <AppstoreAddOutlined style={{ fontSize: '20px', color: "#45c3fd", paddingLeft: '10px' }} onClick={handleAddFeatureChild} />
            </div>
         </div>
      </>
   )
}


