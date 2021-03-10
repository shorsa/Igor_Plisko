import { object, string } from "yup";

export const ExampleSchema = object().shape(
    {
        test: string().required(),
    }
);