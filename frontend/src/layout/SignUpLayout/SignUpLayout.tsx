import React from 'react';
import Input from 'components/Input/Input';
import CONST from 'constants/const';
import * as Styled from './SignUpLayout.styled';
import { Link } from 'react-router-dom';

const SignUpLayout = (): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.Title>{CONST.TITLE.SIGN_UP}</Styled.Title>
      <Styled.TextContainer>
        <Link to="/">
          <Styled.LinkText>{CONST.TEXT.OTHER_LOGIN}</Styled.LinkText>
        </Link>
      </Styled.TextContainer>
      <Styled.FormContainer>
        <Input placeholder={CONST.PLACEHOLDER.SIGN_UP_NAME} />
        <Input placeholder={CONST.PLACEHOLDER.SIGN_UP_EMAIL} />
        <Input placeholder={CONST.PLACEHOLDER.SIGN_UP_PASSWORD} />
        <Input placeholder={CONST.PLACEHOLDER.SIGN_UP_PASSWORD_CHECK} />
        <Styled.SignUpButton buttonTitle={CONST.TITLE.SIGN_UP_BUTTON} />
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default SignUpLayout;
