import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalThemeProvider } from '@src/styles/GlobalThemeProvider';
import { LoginPage } from '@src/pages/LoginPage';
import { SignUpPage } from '@src/pages/SignUpPage';
import { AccountPage } from '@src/pages/AccountPage';
import { NotFoundPage } from '@src/pages/NotFoundPage';

const App = () => {
  // TODO: API 작업 분리
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/auth/login', { withCredentials: true })
      .then((res) => setAuthenticated(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(authenticated);

  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/account" component={AccountPage} />
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
