import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as S from './styled';
import { CONST } from '@src/constants';
import { Container } from '@src/components/Container';
import { ErrorText } from '@src/components/ErrorText';
import { Input } from '@src/components/Input';
import { Label } from '@src/components/Label';

const SignUpLayout = (): React.ReactElement => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
  });

  const { name, email, password, checkPassword } = form;

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkPasswordError, setCheckPasswordError] = useState('');

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
        .post(CONST.API.SIGN_UP, {
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
    <Container>
      <S.Title>{CONST.TITLE.SIGN_UP}</S.Title>
      <S.TextContainer>
        <Link to={CONST.URL.LOGIN}>
          <S.LinkText>{CONST.TEXT.OTHER_LOGIN}</S.LinkText>
        </Link>
      </S.TextContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.LabelContainer>
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
        </S.LabelContainer>
        <S.LabelContainer>
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
        </S.LabelContainer>
        <S.LabelContainer>
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
        </S.LabelContainer>
        <S.LabelContainer>
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
        </S.LabelContainer>
        <S.SignUpButton
          type="submit"
          buttonTitle={CONST.TITLE.SIGN_UP_BUTTON}
        />
      </S.FormContainer>
    </Container>
  );
};

export { SignUpLayout };
