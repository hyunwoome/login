import React from 'react';
import Input from 'components/Input/Input';
import { PLACEHOLDER } from 'constants/placeholder';
import { TITLE } from 'constants/title';
import { TEXT } from 'constants/text';
import * as Styled from './LoginLayout.styled';

const LoginModule = (): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.H1>{TITLE.LOGIN_TITLE}</Styled.H1>
      <Styled.Text>{TEXT.LOGIN_TEXT}</Styled.Text>
      <Input placeholder={PLACEHOLDER.LOGIN_EMAIL} />
      <Input placeholder={PLACEHOLDER.LOGIN_PASSWORD} type="password" />
    </Styled.Container>
  );
};

export default LoginModule;
