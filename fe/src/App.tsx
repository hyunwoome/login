import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <LoginPage />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
