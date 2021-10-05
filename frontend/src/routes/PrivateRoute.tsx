import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: any;
  isAuthenticated: boolean;
  path: any;
}

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
}: Props): React.ReactElement => {
  return (
    <Route
      render={(props) =>
        // auth가 true일 때 account에 접근 (...)
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export { PrivateRoute };
