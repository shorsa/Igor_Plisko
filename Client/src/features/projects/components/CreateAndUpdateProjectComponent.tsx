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
import * as LevelsHelper from "../../../shared/helpers/LevelsLogic.helper";
import { MarkdownEditor } from "../../../shared/components/MarkdownEditor/MarkdownEditor";


interface CreateProjectProps {
   value: RequestCreateProjectModel | ResponseGetOneProjectModel;
   onSubmit: (createProjectModel: RequestCreateProjectModel) => void;
}

type ValidationType = Omit<RequestCreateProjectModel, "features" | "ownerId" | "description">

const CreateProjectValidationSchema: SchemaOf<ValidationType> = Yup.object(
   {
      title: Yup.string().required('Please Enter your Title'),
      isOpen: Yup.boolean().required('Choose the value you want'),
      estimateMin: Yup.number().required('Write your minimum number!'),
      estimateMax: Yup.number().required('Write your maximum number!')
   }
);

export function CreateAndUpdateProjectComponent({ value: project, onSubmit }: CreateProjectProps) {

   const [projectState, setProjectState] = useState(project)

   useEffect(() => {
      setProjectState(project)
   }, [project, project.title]);

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

      onSubmit({ ...createProjectModel, description: projectState.description, features: projectState.features });
   }, [onSubmit, projectState]);


   const onAddFeature = useCallback(
      (value: FeatureModel, level: string) => {
         const newArrayFeature = LevelsHelper.onAddFeature(projectState.features, value, level);
         setProjectState({
            ...projectState,
            features: [...newArrayFeature]
         });
      },
      [projectState])

   const onAddFeatureChild = useCallback(
      (valueChild: FeatureModel, level: string) => {
         LevelsHelper.onAddFeatureChild(projectState.features, valueChild, level);
         setProjectState({
            ...projectState,
            features: [...projectState.features]
         });
      }, [projectState]
   )

   const onRemoveFeature = useCallback(
      (level: string) => {
         LevelsHelper.onRemoveFeature(projectState.features, level)
         setProjectState({
            ...projectState,
            features: [...projectState.features]
         });
      },
      [projectState],
   )

   const handleMarkdown = (value: string) => {
      console.log("handleMarkdown", value);
      projectState.description = value;
      console.log("projectState", projectState.description);

   }
   return (
      < div className="form-wrapper" >
         {/* <Switch defaultChecked onChange={onChange} /> */}
         <Formik
            initialValues={project}
            onSubmit={createProjectHandleSubmit}
            validationSchema={CreateProjectValidationSchema}
         >
            <Form>
               <div className="main-input">
                  <div className="two-input">
                     <FormInput position="column" name="title" label="Title" />

                     <MarkdownEditor onChange={handleMarkdown} value={projectState.description} />
                     {/* <MarkdownEditor position="column" name="description" label="Description" /> */}
                     {/* <FormInput position="column" name="description" label="Description" /> */}

                  </div>
                  <div className="another-item">
                     <FormInput position="column" name="estimateMin" label="Estimate Min" className="estimateInput" />
                     <FormInput position="column" name="estimateMax" label="Estimate Max" className="estimateInput" />

                     <Radio.Group value={project.isOpen} onChange={onChangeStateProject}>
                        <Radio.Button value="true">Open</Radio.Button>
                        <Radio.Button value="false">Close</Radio.Button>
                     </Radio.Group>
                  </div>
               </div>
               {
                  projectState.features?.map((feature, index) => (
                     <FeaturesProjectComponent key={index} onAddFeature={onAddFeature} onAddFeatureChild={onAddFeatureChild}
                        onRemoveFeature={onRemoveFeature} feature={feature} onChange={(qwerty) => handleChange(index, qwerty)} />
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





