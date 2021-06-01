import classNames from "classnames";
import { Form, Input } from "formik-antd";
import React from 'react';
import "./FormInput.scss"

type PositionType = "column" | "horizontal";
interface FormInputProps {
   name: string;
   type?: string;
   label: string;
   className?: string;
   position?: PositionType;
}


export function FormInput({ name, type = "text", label, position = "horizontal", className }: FormInputProps) {

   return (
      <Form.Item name={name} label={label} className={classNames(className, { [position]: true })}>
         <Input name={name} type={type}></Input>
      </Form.Item>
   );
}