import React from 'react';
import Input from 'components/Input/Input';
import CONST from 'constants/const';
import * as Styled from './LoginLayout.styled';
import { Link } from 'react-router-dom';

const LoginLayout = (): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.Title>{CONST.TITLE.LOGIN}</Styled.Title>
      <Styled.TextContainer>
        <Styled.Text>{CONST.TEXT.LOGIN}</Styled.Text>
        <Link to="/SignUp">
          <Styled.LinkText>{CONST.TEXT.SIGN_UP}</Styled.LinkText>
        </Link>
      </Styled.TextContainer>
      <Styled.FormContainer>
        {/* <Input placeholder={CONST.PLACEHOLDER.LOGIN_EMAIL} />
        <Input placeholder={CONST.PLACEHOLDER.LOGIN_PASSWORD} type="password" />
        <Styled.LoginButton buttonTitle={CONST.TITLE.LOGIN_BUTTON} /> */}
      </Styled.FormContainer>
      <Styled.Line>
        <Styled.Span>또는</Styled.Span>
      </Styled.Line>
    </Styled.Container>
  );
};

export default LoginLayout;
