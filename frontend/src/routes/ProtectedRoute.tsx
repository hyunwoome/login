import React, {useEffect} from "react";
import {Route, Redirect} from 'react-router-dom';
import {URL} from "@src/constants";
import {getLocalStorage} from "@src/utils/localStorage";

interface Props {
  path: string;
  component: any;
}

const ProtectedRoute = ({component, ...rest}: Props): React.ReactElement => {
  const auth = getLocalStorage();
  const routeComponent = (props: any) => (
    auth
      ? React.createElement(component, props)
      : <Redirect to={{pathname: URL.LOGIN,
        state: {from: props.location}}} />
  )
  return <Route {...rest} render={routeComponent}/>;
};

export {ProtectedRoute};