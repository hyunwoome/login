import React from 'react';
import * as Styled from './Login.styled';
import LoginLayout from 'layout/LoginLayout/LoginLayout';

const LoginPage = (): React.ReactElement => {
  return (
    <Styled.Container>
      <LoginLayout />
    </Styled.Container>
  );
};

export default LoginPage;
