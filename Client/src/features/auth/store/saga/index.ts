import { all } from "redux-saga/effects";
import { handleSignInSaga, handleSignUpSaga } from "./handleAuth";

export function* authSaga() {
   yield all([handleSignUpSaga(), handleSignInSaga()]);
}