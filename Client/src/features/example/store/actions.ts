import { defineAction } from "rd-redux-utils";
import { ExampleModel } from "../components/ExampleForm";

export const exampleAction = defineAction<ExampleModel>("EXAMPLE")