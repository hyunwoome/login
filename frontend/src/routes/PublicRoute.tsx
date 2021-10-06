import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  component: any;
  isAuthenticated: boolean;
  exact?: boolean;
  path: any;
}

const PublicRoute = ({
  component: Component,
  isAuthenticated,
}: Props): React.ReactElement => {
  return (
    <Route
      render={(props) =>
        isAuthenticated ? <Redirect to="/account" /> : <Component {...props} />
      }
    />
  );
};

export { PublicRoute };
