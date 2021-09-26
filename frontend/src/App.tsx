import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'pages/Main/Main';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import NotFound from 'pages/NotFound/NotFound';

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user !== null;

  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route component={NotFound} />
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
