import { Button, Radio, RadioChangeEvent } from "antd";
import { Formik } from "formik";
import { Form } from "formik-antd";
import React, { useCallback, useEffect, useState } from 'react';
import * as Yup from "yup";
import { SchemaOf } from 'yup';
import { FormInput } from "../../../shared/components/formInput/FormInput";
import { FeatureModel, RequestCreateProjectModel } from '../models';
import { ResponseGetOneProjectModel } from '../models/response/responseGetOneProject.model';
import "./CreateAndUpdateProjectComponent.scss";
import { FeaturesProjectComponent } from './FeaturesProjectComponent';
import { TestComponent } from './TestComponent';


interface CreateProjectProps {
   value: RequestCreateProjectModel | ResponseGetOneProjectModel;
   onSubmit: (createProjectModel: RequestCreateProjectModel) => void;
}

type ValidationType = Omit<RequestCreateProjectModel, "features" | "ownerId">

const CreateProjectValidationSchema: SchemaOf<ValidationType> = Yup.object(
   {
      title: Yup.string().required('Please Enter your Title'),
      description: Yup.string().required('Please Enter your Title'),
      isOpen: Yup.boolean().required('Choose the value you want'),
      estimateMin: Yup.number().required('Write your minimum number!'),
      estimateMax: Yup.number().required('Write your maximum number!')
   }
);

export function CreateAndUpdateProjectComponent({ value, onSubmit }: CreateProjectProps) {
   // console.log(value, 'this value check it');
   const increaseValue = (value: string): string => String(Number(value) + 1);

   const [projectState, setProjectState] = useState(value)

   useEffect(() => {
      setProjectState(value)
   }, [value, value.title]);

   const handleChange = useCallback((index: number, feature: FeatureModel) => {
      projectState.features[index] = { ...feature };

      setProjectState({ ...projectState, features: [...projectState.features] })
   }, [projectState])

   const onChangeStateProject = useCallback(
      (event: RadioChangeEvent) => {
         setProjectState({ ...projectState, isOpen: event.target.value === "true" })
      },
      [projectState],
   )

   const createProjectHandleSubmit = useCallback((createProjectModel: RequestCreateProjectModel) => {
      onSubmit({ ...createProjectModel, features: projectState.features });
   }, [onSubmit, projectState]);


   const onAddFeature = useCallback(
      (value: FeatureModel, level: string) => {
         const indexFined: number = projectState.features.findIndex((feature: FeatureModel) => {
            return feature.level === level
         })
         // console.log(level, "what this level ?")
         const arrayLevel = level.split('.')
         let newArrayFeature: FeatureModel[] = projectState.features;


         if (arrayLevel.length === 1) {
            debugger
            newArrayFeature = projectState.features.map((feature: FeatureModel, index: number) => {
               if (index > indexFined) {

                  const currentLevelArray = feature.level.split(".");
                  // console.log(currentLevelArray, 'what this ?');
                  currentLevelArray[0] = increaseValue(currentLevelArray[0]);
                  feature.level = currentLevelArray.join(".")
               }
               return feature
            })
            newArrayFeature.splice(indexFined + 1, 0, { ...value, level: increaseValue(level) })

         }
         if (arrayLevel.length !== 1) {
            // debugger
            const lastLevel = Number(arrayLevel[arrayLevel.length - 1]) + 1;
            newArrayFeature.forEach((feature: FeatureModel, index: number) => {

               const currentLevelArray = feature.level.split(".");

               //! здесь нужно рефакторить код  
               const isLevelWhoIncrease = currentLevelArray.length === arrayLevel.length &&
                  currentLevelArray[0] === arrayLevel[0] &&
                  indexFined < index;

               if (isLevelWhoIncrease) {
                  currentLevelArray[currentLevelArray.length - 1] = increaseValue(currentLevelArray[currentLevelArray.length - 1])
                  feature.level = currentLevelArray.join(".")
               }


            })

            //? здесь можнл копировать ссылку '[...arrayLevel]"  что бы небыло изменения по старой ссылке !
            arrayLevel.pop()
            arrayLevel.push(String(lastLevel))

            newArrayFeature.splice(indexFined + 1, 0, { ...value, level: arrayLevel.join('.') })

         }
         setProjectState({
            ...projectState,
            features: [...newArrayFeature]
         });
      },
      [projectState])



   const onAddFeatureChild = useCallback(
      (valueChild: FeatureModel, level: string) => {

         // const increaseValue = (value: string): string => String(Number(value) + 1);

         const indexFined: number = projectState.features.findIndex((feature: FeatureModel) => {
            return feature.level === level
         })

         const filteredFeatureArray = projectState.features.filter((feature: FeatureModel) => {

            return feature.level === `${level}.1`
         })

         // let isLevelChildWhoIncrease = feature
         // debugger
         if (filteredFeatureArray.length === 0) {
            projectState.features.splice(indexFined + 1, 0, { ...valueChild, level: `${level}.1` })
         }
         if (filteredFeatureArray.length !== 0) {
            projectState.features.forEach((feature: FeatureModel, index) => {

               const currentFeatureLevelArray = feature.level.split(".");
               console.log(currentFeatureLevelArray, 'currentFeatureLevelArray');



               const mainLevelArray = level.split(".");
               console.log(mainLevelArray, 'mainLevelArray');
               const baseLevelCurren = currentFeatureLevelArray.slice(0, mainLevelArray.length)
               console.log(baseLevelCurren, 'baseLevelCurren');
               const isLengthSame = currentFeatureLevelArray.length >= mainLevelArray.length;
               console.log(isLengthSame, 'isLengthSame');
               const baseLevelSome = level === baseLevelCurren.join(".");
               console.log(baseLevelSome, 'baseLevelSome');

               if (isLengthSame && index > indexFined && baseLevelSome) {
                  currentFeatureLevelArray[currentFeatureLevelArray.length - 1] = increaseValue(currentFeatureLevelArray[currentFeatureLevelArray.length - 1])
                  feature.level = currentFeatureLevelArray.join(".")
               }

            })
            projectState.features.splice(indexFined + 1, 0, { ...valueChild, level: `${level}.1` })
         }

         setProjectState({
            ...projectState,
            features: [...projectState.features]
         });

      }, [projectState]
   )

   return (
      < div className="form-wrapper" >
         {/* <Switch defaultChecked onChange={onChange} /> */}
         <Formik
            initialValues={value}
            onSubmit={createProjectHandleSubmit}
            validationSchema={CreateProjectValidationSchema}
         >
            <Form>
               <div className="main-input">
                  <div className="two-input">
                     <FormInput position="column" name="title" label="Title" />
                     <FormInput position="column" name="description" label="Description" />
                  </div>
                  <div className="another-item">
                     <FormInput position="column" name="estimateMin" label="Estimate Min" className="estimateInput" />
                     <FormInput position="column" name="estimateMax" label="Estimate Max" className="estimateInput" />

                     <Radio.Group value={value.isOpen} onChange={onChangeStateProject}>
                        <Radio.Button value="true">Open</Radio.Button>
                        <Radio.Button value="false">Close</Radio.Button>
                     </Radio.Group>
                  </div>
               </div>
               {
                  projectState.features?.map((feature, index) => (
                     <FeaturesProjectComponent key={index} onAddFeature={onAddFeature} onAddFeatureChild={onAddFeatureChild} feature={feature} onChange={(qwerty) => handleChange(index, qwerty)} />
                  ))
               }
               <Button
                  className="create-button"
                  type="primary"
                  shape="round"
                  htmlType="submit"
                  size="large"
               >
                  Create new project
               </Button>
            </Form>
         </Formik>
         <TestComponent /><br />
      </div >
   )
}





