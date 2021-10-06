import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: any;
  isAuthenticated: boolean;
  path: any;
}

const AuthRoute = ({
  component: Component,
  isAuthenticated,
}: Props): React.ReactElement => {
  return (
    <Route
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export { AuthRoute };
