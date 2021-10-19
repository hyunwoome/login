import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {URL} from "@src/constants";
import {getLocalStorage} from '@src/utils/localStorage'

interface Props {
  path: string;
  component: any;
  exact?: any;
}

const PublicRoute = ({component, ...rest}: Props): React.ReactElement => {
  const auth = getLocalStorage();
  const routeComponent = (props: any) => (
    auth
      ? <Redirect exact to={{pathname: URL.ACCOUNT,
        state: {from: props.location}}} />
      : React.createElement(component, props)
  )
  return <Route {...rest} render={routeComponent}/>
};

export {PublicRoute};