import { Action } from "redux";
import { exampleAtServerCompletedAction, exampleAtServerStartedAction } from "./saga/handleExample";

export interface ExampleAppState {
    status: "initial" | "running" | "success" | "error";
    error?: string;
}

export function exampleReducer(state: ExampleAppState = { status: "initial" }, action: Action): ExampleAppState {
    if (exampleAtServerStartedAction.is(action)) {
        return {
            ...state,
            status: "running",
            error: undefined
        };
    }
    if (exampleAtServerCompletedAction.is(action)) {
        return {
            ...state,
            status: action.status,
            error: action.error
        };
    }

    return state;
}
