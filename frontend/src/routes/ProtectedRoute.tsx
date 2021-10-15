import React from "react";
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import {loggedApi} from "@src/apis/authApi";

interface Props {
  path: string;
  isAuthenticated?: boolean;
  component: any;
}

const ProtectedRoute = ({path, isAuthenticated, component, ...rest}: Props): React.ReactElement => {
  const key = 'auth';
  const auth = localStorage.getItem(key);
  console.log(auth);

  const routeComponent = (props: any) => (
    auth
      ? React.createElement(component, props)
      : <Redirect to={{pathname: '/'}}/>
  )
  return <Route {...rest} render={routeComponent}/>;
};

export {ProtectedRoute};