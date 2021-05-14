import { defineAction } from "rd-redux-utils";
import { SignUpModel } from "../models";


export const signUpAction = defineAction<{ payload: SignUpModel }>("USER_SING_UP")