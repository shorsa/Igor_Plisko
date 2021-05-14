import { all } from "redux-saga/effects";
import { handleSignUpSaga } from "./handleAuth";

export function* authSaga() {
   yield all([handleSignUpSaga()]);
}