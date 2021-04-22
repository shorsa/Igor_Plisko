import { defineAction } from "rd-redux-utils";
import { SignUpModel } from "../models";


export const signUpAction = defineAction<SignUpModel>("USER_SING_UP")