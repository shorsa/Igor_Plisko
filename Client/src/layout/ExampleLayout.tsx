import React from 'react';


export interface ExampleLayoutProps {
    children: React.ReactChild | React.ReactChild[]

}

export function ExampleLayout({ children }: ExampleLayoutProps) {
    return (
        <div className="example-layout">
            <div className="form-wrapper">
                <h2>TESTING  </h2>
                {children}

            </div>
        </div>
    );
}
