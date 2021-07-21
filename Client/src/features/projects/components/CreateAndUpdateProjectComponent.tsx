import { Button, Radio, RadioChangeEvent } from "antd";
import { Formik } from "formik";
import { Form } from "formik-antd";
import React, { useCallback, useState } from 'react';
import * as Yup from "yup";
import { SchemaOf } from 'yup';
import { FormInput } from "../../../shared/components/formInput/FormInput";
import { RequestCreateProjectModel } from '../models';
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
   const [changeFeature, setChangeFeature] = useState(value)

   const handleChange = (index: number, qwerty: any) => {
      if (changeFeature.features) {
         console.log("index", index);
         console.log("Feature for update", qwerty);

         console.log(changeFeature.features);
         changeFeature.features[index] = qwerty

         setChangeFeature(changeFeature)
      }
   }

   const onChangeStateProject = useCallback(
      (event: RadioChangeEvent) => {
         setChangeFeature({ ...changeFeature, isOpen: event.target.value === "true" })
      },
      [changeFeature, value],
   )

   const createProjectHandleSubmit = useCallback((createProjectModel: RequestCreateProjectModel) => {
      console.log(createProjectModel);

      onSubmit(createProjectModel);
   }, [onSubmit]);


   // function onChange(checked: any) {
   //    console.log(`switch to ${checked}`);
   // }


   return (

      < div className="form-wrapper" >
         {/* <Switch defaultChecked onChange={onChange} /> */}
         <Formik
            initialValues={value}
            onSubmit={createProjectHandleSubmit}
            validationSchema={CreateProjectValidationSchema}
         >
            <Form>
               <div className="mainInput">
                  <div className="bigTwoInput">
                     <FormInput position="column" name="title" label="Title" />
                     <FormInput position="column" name="description" label="Description" />
                  </div>
                  <div className="anotherItem">
                     <FormInput position="column" name="estimateMin" label="Estimate Min" className="estimateInput" />
                     <FormInput position="column" name="estimateMax" label="Estimate Max" className="estimateInput" />

                     <Radio.Group value={value.isOpen} onChange={onChangeStateProject}>
                        <Radio.Button value="true">Open</Radio.Button>
                        <Radio.Button value="false">Close</Radio.Button>
                     </Radio.Group>


                  </div>

               </div>

               {
                  changeFeature.features?.map((feature, index) => (
                     < FeaturesProjectComponent feature={feature} key={index} onChange={(qwerty) => handleChange(index, qwerty)} />
                  ))
               }
               <Button
                  className="createButton"
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





