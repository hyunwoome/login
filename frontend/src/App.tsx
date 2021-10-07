import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalThemeProvider } from '@src/styles/GlobalThemeProvider';
import { LoginPage } from '@src/pages/LoginPage';
import { SignUpPage } from '@src/pages/SignUpPage';
import { AccountPage } from '@src/pages/AccountPage';
import { NotFoundPage } from '@src/pages/NotFoundPage';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { AuthHOC } from '@src/hoc/AuthHOC';

const App = (): React.ReactElement => {
  // const [auth, setAuth] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await AuthApi();
  //     setAuth(result.data.isAuth);
  //   };
  //   fetchData();
  // }, []);
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          {/* <PublicRoute
            exact
            path="/"
            component={LoginPage}
            isAuthenticated={auth}
          />
          <PublicRoute
            path="/signup"
            component={SignUpPage}
            isAuthenticated={auth}
          /> */}
          <Route exact path="/" component={AuthHOC(LoginPage, false)} />
          <Route path="/signup" component={AuthHOC(SignUpPage, false)} />
          <Route path="/account" component={AuthHOC(AccountPage, true)} />
          {/* <PrivateRoute
            path="/account"
            component={AccountPage}
            isAuthenticated={auth}
          /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export { App };
