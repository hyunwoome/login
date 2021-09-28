import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalThemeProvider } from '@src/styles/GlobalThemeProvider';
import { MainPage } from '@src/pages/MainPage';
import { LoginPage } from '@src/pages/LoginPage';
import { SignUpPage } from '@src/pages/SignUpPage';
import { NotFoundPage } from '@src/pages/NotFoundPage';

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
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
