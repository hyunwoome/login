import React from 'react';
import ReactDOM from 'react-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Login from 'pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from 'pages/SignUp/SignUp';

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
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
