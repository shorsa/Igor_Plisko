import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import React, { useCallback } from "react";
import * as Yup from "yup";
import "./ExampleForm.scss";

export interface ExampleModel {
  test: string;
}

interface ExamplePageProps {
  value: ExampleModel;
  loading: boolean;
  onChange: (exampleModel: ExampleModel) => void;
}

const exampleValidationSchema = Yup.object<ExampleModel>({
  test: Yup.string().required()
});

export function ExampleForm({ value, onChange, loading }: ExamplePageProps): JSX.Element {

  const handleSubmit = useCallback((exampleModel: ExampleModel) => {
    onChange(exampleModel);
  }, [onChange]);

  return (
    <Formik
      initialValues={value}
      onSubmit={handleSubmit}
      validationSchema={exampleValidationSchema}
    >
      <Form>
        <Form.Item name="test" label="Test">
          <Input name="test"></Input>
        </Form.Item>
        <Button
          type="primary"
          shape="round"
          htmlType="submit"
          disabled={loading}
          icon={<SendOutlined />}
          size="large"
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
