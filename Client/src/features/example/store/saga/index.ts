import { all } from "redux-saga/effects";
import { handleExampleSaga } from "./handleExample";

export function* exampleSaga() {
    yield all([handleExampleSaga()]);
}