import { defineAction } from "rd-redux-utils";
import { RequestSignInModel, RequestSignUpModel } from "../models";

export const signUpAction = defineAction<{ payload: RequestSignUpModel }>("USER_SING_UP")
export const signInAction = defineAction<{ payload: RequestSignInModel }>("USER_SING_IN")
