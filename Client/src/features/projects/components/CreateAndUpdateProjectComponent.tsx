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
   console.log(value, 'this value check it');


   const [projectState, setProjectState] = useState(value)

   useEffect(() => {
      setProjectState(value)
   }, [value, value.title]);

   const handleChange = useCallback((index: number, feature: FeatureModel) => {

      console.log(index, 'hey bro!?!?!??')
      // debugger
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


         const newArrayFeature: FeatureModel[] = projectState.features.map((feature: FeatureModel, index: number) => {

            if (index > indexFined) {
               feature.level = String(Number(feature.level) + 1)
            }


            return feature
         })
         newArrayFeature.splice(indexFined + 1, 0, { ...value, level: String(Number(level) + 1) })

         setProjectState({
            ...projectState,
            features: [...newArrayFeature]
         });
      },
      [projectState])



   const onAddFeatureChild = useCallback(
      (valueChild: FeatureModel, level: string) => {
         const indexFined: number = projectState.features.findIndex((feature: FeatureModel) => {
            return feature.level === level
         })
         projectState.features.splice(indexFined + 1, 0, { ...valueChild, level: `${level}.1` })

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





