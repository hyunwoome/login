import React, { useState } from 'react';
import Input from 'components/Input/Input';
import Label from 'components/Label/Label';
import ErrorText from 'components/ErrorText/ErrorText';
import CONST from 'constants/const';
import * as Styled from './SignUpLayout.styled';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUpLayout = (): React.ReactElement => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkPasswordError, setCheckPasswordError] = useState('');

  const { name, email, password, checkPassword } = form;

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

    if (!name) {
      setNameError(CONST.ERROR.NAME);
      validated = false;
    }

    if (!email) {
      setEmailError(CONST.ERROR.EMAIL);
      validated = false;
    }
    if (!password) {
      setPasswordError(CONST.ERROR.PASSWORD);
      validated = false;
    }

    if (!checkPassword) {
      setCheckPasswordError(CONST.ERROR.CHECK_PASSWORD);
      validated = false;
    }

    return validated;
  };

  const resetError = () => {
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setCheckPasswordError('');
  };

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      password: '',
      checkPassword: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(CONST.URL.SIGN_UP, {
          name,
          email,
          password,
          checkPassword,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      resetForm();
      resetError();
    }
  };

  return (
    <Styled.Container>
      <Styled.Title>{CONST.TITLE.SIGN_UP}</Styled.Title>
      <Styled.TextContainer>
        <Link to="/">
          <Styled.LinkText>{CONST.TEXT.OTHER_LOGIN}</Styled.LinkText>
        </Link>
      </Styled.TextContainer>
      <Styled.FormContainer onSubmit={handleSubmit}>
        <Styled.LabelContainer>
          <Label target="name" text={CONST.LABEL.NAME}></Label>
          <Input
            id="name"
            name="name"
            value={name}
            type="text"
            placeholder={CONST.PLACEHOLDER.NAME}
            onChange={onChange}
          />
          <ErrorText text={nameError}></ErrorText>
        </Styled.LabelContainer>
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
        <Styled.LabelContainer>
          <Label
            target="checkPassword"
            text={CONST.LABEL.CHECK_PASSWORD}
          ></Label>
          <Input
            id="checkPassword"
            name="checkPassword"
            value={checkPassword}
            type="password"
            placeholder={CONST.PLACEHOLDER.CHECK_PASSWORD}
            onChange={onChange}
          />
          <ErrorText text={checkPasswordError}></ErrorText>
        </Styled.LabelContainer>
        <Styled.SignUpButton
          type="submit"
          buttonTitle={CONST.TITLE.SIGN_UP_BUTTON}
        />
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default SignUpLayout;
