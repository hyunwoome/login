import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {GlobalThemeProvider} from '@src/styles/GlobalThemeProvider';
import {LoginPage} from '@src/pages/LoginPage';
import {SignUpPage} from '@src/pages/SignUpPage';
import {AccountPage} from '@src/pages/AccountPage';
import {NotFoundPage} from '@src/pages/NotFoundPage';
import {ProtectedRoute} from "@src/routes/ProtectedRoute";
import {PublicRoute} from "@src/routes/PublicRoute";
import {loggedApi} from "@src/apis/authApi";

const App = (): React.ReactElement => {
  // const [auth, setAuth] = useState(true);

  // useEffect(() => {
  // loggedApi()
  // .then((res: any) => {
  //   setAuth(true);
  // })
  // .catch((err: any) => {
  //   console.error(err);
  // })
  // }, []);

  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage}/>
          <PublicRoute path="/signup" component={SignUpPage}/>
          <ProtectedRoute path="/account" component={AccountPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export {App};
