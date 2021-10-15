import React, {Component} from "react";
import {Route, Redirect} from 'react-router-dom';

interface Props {
  path: string;
  isAuthenticated?: boolean;
  component: any;
  exact?: any;
}

const PublicRoute = ({path, isAuthenticated, exact, component, ...rest}: Props): React.ReactElement => {
  const key = 'auth';
  const auth = localStorage.getItem(key);
  console.log(auth);
  const routeComponent = (props: any) => (
    auth
      ? <Redirect to={{pathname: '/account'}} />
      : React.createElement(component, props)
  )
  return <Route {...rest} render={routeComponent}/>
};

export {PublicRoute};