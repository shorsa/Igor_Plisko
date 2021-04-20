import React from 'react';
import "./ExampleLayout.scss"


export interface ExampleLayoutProps {
    children: React.ReactChild | React.ReactChild[]

}

export function ExampleLayout({ children }: ExampleLayoutProps) {
    return (
        <div className="example-layout">
            <div className="form-wrapper">
                <h2>TEST </h2>
                {children}
            </div>
        </div>
    );
}
