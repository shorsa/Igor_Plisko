import { Form, Input } from "formik-antd";
import React from 'react';

interface FormInputProps {
   name: string;
   type?: string;
   label: string;
}

export function FormInput({ name, type = "text", label }: FormInputProps) {
   return (
      <Form.Item name={name} label={label}>
         <Input name={name} type={type}></Input>
      </Form.Item>
   );
}