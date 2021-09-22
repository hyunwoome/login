import React from 'react';
import Input from 'components/Input/Input';
import CONST from 'constants/const';
import * as Styled from './LoginLayout.styled';
import { Link } from 'react-router-dom';
import Label from 'components/Label/Label';

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
        <Styled.LabelContainer>
          <Label target="email" text={CONST.LABEL.EMAIL}></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={CONST.PLACEHOLDER.EMAIL}
          />
        </Styled.LabelContainer>
        <Styled.LabelContainer>
          <Label target="password" text={CONST.LABEL.PASSWORD}></Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder={CONST.PLACEHOLDER.PASSWORD}
          />
        </Styled.LabelContainer>
        <Styled.LoginButton
          type="submit"
          buttonTitle={CONST.TITLE.LOGIN_BUTTON}
        />
      </Styled.FormContainer>
      <Styled.Line>
        <Styled.Span>또는</Styled.Span>
      </Styled.Line>
    </Styled.Container>
  );
};

export default LoginLayout;
