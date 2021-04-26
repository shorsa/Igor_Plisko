import React from "react";
import { ExampleLayout } from "../../../layout/ExampleLayout";
import { ExampleFormContainer } from "../containers/ExampleFormContainer";

interface ExamplePageProps { }

export function ExamplePage({ }: ExamplePageProps) {
    return (
        <ExampleLayout>
            <ExampleFormContainer />
        </ExampleLayout>
    )
}