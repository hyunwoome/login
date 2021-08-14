import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/GlobalStyle';
import LoginPage from 'pages/Login/Login';

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

// 글로벌 스타일 적용 안되는 것 수정하기
