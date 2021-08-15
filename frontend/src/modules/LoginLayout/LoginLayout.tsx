import React from 'react';
import Input from 'components/Input/Input';
import { PLACEHOLDER } from 'constants/placeholder';
import { TITLE } from 'constants/title';
import { TEXT } from 'constants/text';
import * as Styled from './LoginLayout.styled';

const LoginModule = (): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.Title>{TITLE.LOGIN_TITLE}</Styled.Title>
      <Styled.TextContainer>
        <Styled.Text>{TEXT.LOGIN_TEXT}</Styled.Text>
        <Styled.LinkText>{TEXT.SIGN_UP_TEXT}</Styled.LinkText>
      </Styled.TextContainer>
      <Styled.FormContainer>
        <Input placeholder={PLACEHOLDER.LOGIN_EMAIL} />
        <Input placeholder={PLACEHOLDER.LOGIN_PASSWORD} type="password" />
        <Styled.LoginButton buttonTitle={TITLE.LOGIN_BUTTON_TITLE} />
      </Styled.FormContainer>
      <Styled.Line>
        <Styled.Span>또는</Styled.Span>
      </Styled.Line>
    </Styled.Container>
  );
};

export default LoginModule;
