import React, { useCallback } from 'react'
import { Button } from "antd";
import { Field, Formik } from "formik";
import { Form } from "formik-antd";
import { FormInput } from "../../../shared/components/formInput/FormInput";
import { RequestCreateProjectModel } from '../models';
import * as Yup from "yup";
import { FeaturesProjectComponent } from './FeaturesProjectComponent';



interface CreateProjectProps {
   value: RequestCreateProjectModel;
   onSubmit: (createProjectModel: RequestCreateProjectModel) => void;
}
//schemaOf<RequestCreateProjectModel>
const CreateProjectValidationSchema = Yup.object(
   {
      title: Yup.string().required('Please Enter your Title'),
      description: Yup.string().required('Please Enter your Title'),
      isOpen: Yup.boolean().required('Choose the value you want'),
      estimateMin: Yup.number().required('Write your minimum number!'),
      estimateMax: Yup.number().required('Write your maximum number!')
   }
);

export function CreateProjectComponent({ value, onSubmit }: CreateProjectProps) {

   const createProjectHandleSubmit = useCallback((createProjectModel: RequestCreateProjectModel) => {

      onSubmit(createProjectModel);
   }, [onSubmit]);

   return (
      <>
         <span>Hello, Do you wanna to create new project ?</span>
         <Formik
            initialValues={value}
            onSubmit={createProjectHandleSubmit}
            validationSchema={CreateProjectValidationSchema}

         >
            <Form>
               <FormInput name="title" label="Title" />
               <FormInput name="description" label="Description" />
               <FormInput name="estimateMin" label="Estimate Min" />
               <FormInput name="estimateMin" label="Estimate Max" />

               <Field className="radio-button" component="div" name="myRadioGroup">
                  <input
                     type="radio"
                     name="isOpen"
                  // value="male"
                  />
                  <label> Is Open</label>
               </Field>
               <label>
                  <Field type="checkbox" name="checked" value="Two" />
            Is Open
            </label>
               <br />

               < FeaturesProjectComponent /><br />

               <Button
                  type="primary"
                  shape="round"
                  htmlType="submit"
                  size="large"
               >
                  Create new project
               </Button>
            </Form>
         </Formik>
      </>
   )
}






//    < label >
//    <Field type="checkbox" name=" isOpen" label="Is Open" />
// {/* {`${values.toggle}`} */ }
//          </label >
