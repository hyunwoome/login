import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './LoginLayout.styled';
import axios from 'axios';
import Input from 'components/Input/Input';
import ErrorText from 'components/ErrorText/ErrorText';
import Label from 'components/Label/Label';
import CONST from 'constants/const';

const LoginLayout = (): React.ReactElement => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    resetError();
    let validated = true;

    if (!email) {
      setEmailError(CONST.ERROR.NAME);
      validated = false;
    }

    if (!password) {
      setPasswordError(CONST.ERROR.PASSWORD);
      validated = false;
    }
    return validated;
  };

  const resetError = () => {
    setEmailError('');
    setPasswordError('');
  };

  const resetForm = () => {
    setForm({
      email: '',
      password: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(CONST.API.LOGIN, {
          email,
          password,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      resetForm();
      resetError();
    }
  };
  return (
    <Styled.Container>
      <Styled.Title>{CONST.TITLE.LOGIN}</Styled.Title>
      <Styled.TextContainer>
        <Styled.Text>{CONST.TEXT.LOGIN}</Styled.Text>
        <Link to={CONST.URL.SIGN_UP}>
          <Styled.LinkText>{CONST.TEXT.SIGN_UP}</Styled.LinkText>
        </Link>
      </Styled.TextContainer>
      <Styled.FormContainer onSubmit={handleSubmit}>
        <Styled.LabelContainer>
          <Label target="email" text={CONST.LABEL.EMAIL}></Label>
          <Input
            id="email"
            name="email"
            value={email}
            type="email"
            placeholder={CONST.PLACEHOLDER.EMAIL}
            onChange={onChange}
          />
          <ErrorText text={emailError}></ErrorText>
        </Styled.LabelContainer>
        <Styled.LabelContainer>
          <Label target="password" text={CONST.LABEL.PASSWORD}></Label>
          <Input
            id="password"
            name="password"
            value={password}
            type="password"
            placeholder={CONST.PLACEHOLDER.PASSWORD}
            onChange={onChange}
          />
          <ErrorText text={passwordError}></ErrorText>
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
