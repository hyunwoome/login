import React from 'react';
import Input from 'components/Input/Input';
import { PLACEHOLDER } from 'constants/placeholder';
import { Container } from './LoginLayout.styled';

const LoginModule = (): React.ReactElement => {
  return (
    <Container>
      <Input placeholder={PLACEHOLDER.LOGIN_EMAIL} />
    </Container>
  );
};

export default LoginModule;
