import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalThemeProvider } from '@src/styles/GlobalThemeProvider';
import { LoginPage } from '@src/pages/LoginPage';
import { SignUpPage } from '@src/pages/SignUpPage';
import { AccountPage } from '@src/pages/AccountPage';
import { NotFoundPage } from '@src/pages/NotFoundPage';
import { AuthRoute } from './routes/AuthRoute';
import { AuthApi } from '@src/apis/AuthApi';

const App = (): React.ReactElement => {
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/api/auth/login', {
        withCredentials: true,
      });
      setAuth(result.data);
    };
    fetchData();
  }, []);
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <AuthRoute
            path="/account"
            component={AccountPage}
            isAuthenticated={auth}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
