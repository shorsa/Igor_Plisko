import { AppState } from "app-state";
import React, { Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "redux";
import { ExampleForm, ExampleModel } from "../components/ExampleForm";
import { exampleAction } from "../store/actions";
export interface ExampleFormContainerProps { }

export function ExampleFormContainer({ }: ExampleFormContainerProps): JSX.Element {
  const dispatch: React.Dispatch<Action<ExampleModel>> = useDispatch<Dispatch<Action<ExampleModel>>>();

  const handleExample = useCallback(
    (exampleModel: ExampleModel) => dispatch(exampleAction({ test: exampleModel.test })),
    [dispatch]
  );

  const loading = useSelector<AppState, boolean>((state): boolean => {
    return state.example.status === "running";
  });

  return (
    <ExampleForm
      value={{
        test: "",
      }}
      loading={loading}
      onChange={handleExample}
    />
  );
}
