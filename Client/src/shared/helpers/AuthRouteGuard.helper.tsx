import React from 'react';
import { SIGN_IN_PAGE_URL } from '../../features/auth';
import { Redirect, Route } from 'react-router'
import { getAccessToken } from './LocalStorage.helper'

interface AuthRoutesProps {
   component: () => JSX.Element;
   key: string;
   path: string;
}

export function AuthRouteGuard(props: AuthRoutesProps) {
   const { component, key, path, ...rest } = props;
   const token: string | undefined = getAccessToken();
   return (
      <Route
         {...rest}
         render={(props) => {
            if (token) {
               return component();
            } else {
               return <Redirect to={{ pathname: SIGN_IN_PAGE_URL.urlTemplate, state: { from: props.location } }} />;
            }
         }}
      />
   );
}


