import { Button, Switch } from "antd";
import { Formik } from "formik";
import { Form } from "formik-antd";
import React, { useCallback, useState } from 'react';
import * as Yup from "yup";
import { FormInput } from "../../../shared/components/formInput/FormInput";
import { RequestCreateProjectModel } from '../models';
import { ResponseGetOneProjectModel } from '../models/response/responseGetOneProject.model';
import "./CreateAndUpdateProjectComponent.scss";
import { FeaturesProjectComponent } from './FeaturesProjectComponent';
import { TestComponent } from './TestComponent';



//?schemaOf<RequestCreateProjectModel>
interface CreateProjectProps {
   value: RequestCreateProjectModel | ResponseGetOneProjectModel;
   onSubmit: (createProjectModel: RequestCreateProjectModel) => void;
}

const CreateProjectValidationSchema = Yup.object(
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

   const createProjectHandleSubmit = useCallback((createProjectModel: RequestCreateProjectModel) => {

      onSubmit(createProjectModel);
   }, [onSubmit]);

   function onChange(checked: any) {
      console.log(`switch to ${checked}`);
   }


   return (
      <>
         <span>Hello, Do you wanna to create new project ?</span>
         <Formik
            initialValues={value}
            onSubmit={createProjectHandleSubmit}
            validationSchema={CreateProjectValidationSchema}
         >
            <Form>
               <FormInput position="column" name="title" label="Title" />
               <FormInput position="column" name="description" label="Description" />
               <FormInput position="column" name="estimateMin" label="Estimate Min" />
               <FormInput position="column" name="estimateMax" label="Estimate Max" />


               <Switch defaultChecked onChange={onChange} />
               {/* <label>
                  <Field type="checkbox" name="checked" value="Two" className="checkbox-style" />
            Is Open
            </label>
               <br /> */}

               {
                  changeFeature.features?.map((feature, index) => (
                     < FeaturesProjectComponent feature={feature} key={index} onChange={(qwerty) => handleChange(index, qwerty)} />
                  ))
               }
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


         <TestComponent /><br />

      </>
   )
}






//    < label >
//    <Field type="checkbox" name=" isOpen" label="Is Open" />
// {/* {`${values.toggle}`} */ }
//          </label >
