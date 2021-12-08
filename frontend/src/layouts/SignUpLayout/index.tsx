import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import { ERROR, URL, TITLE, TEXT, LABEL, PLACEHOLDER } from '@src/constants';
import { Container } from '@src/components/Container';
import { ErrorText } from '@src/components/ErrorText';
import { Input } from '@src/components/Input';
import { Label } from '@src/components/Label';
import { Title } from '@src/components/Title';
import { LabelContainer } from '@src/components/LabelContainer';
import { checkedEmailApi, signupApi } from '@src/apis/authApi';
import { usePublicAuthCheck } from '@src/hooks/usePublicAuthCheck';
import {
  checkEmail,
  checkName,
  checkPassword,
  sameCheckPassword,
} from '@src/validators/validator';

export const SignUpLayout = (): React.ReactElement => {
  usePublicAuthCheck();

  const history = useHistory();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    verifyPassword: '',
  });

  const { name, email, password, verifyPassword } = form;

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [verifyPasswordError, setVerifyPasswordError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetError = () => {
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setVerifyPasswordError('');
  };

  const validateForm = () => {
    resetError();
    let validated = true;

    if (!checkName(name)) {
      setNameError(ERROR.NAME);
      validated = false;
    }

    if (!checkEmail(email)) {
      setEmailError(ERROR.EMAIL);
      validated = false;
    }

    if (!checkPassword(password)) {
      setPasswordError(ERROR.PASSWORD);
      validated = false;
    }

    if (!checkPassword(verifyPassword)) {
      setVerifyPasswordError(ERROR.PASSWORD);
      validated = false;
    } else {
      if (!sameCheckPassword(password, verifyPassword)) {
        setVerifyPasswordError(ERROR.NOT_SAME_PASSWORD);
        validated = false;
      }
    }

    return validated;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      resetError();
      // 이메일 중복 체크 후 폼 전송
      checkedEmailApi(email).then((res) => {
        if (res) {
          console.log(res);
          setEmailError(ERROR.DUPLICATED_EMAIL);
        } else {
          signupApi(form)
            .then(() => history.push(URL.LOGIN))
            .catch((error) => console.error(error));
        }
      });
    }
  };

  return (
    <Container>
      <Title>{TITLE.SIGN_UP}</Title>
      <S.TextContainer>
        <S.CustomLink to={URL.LOGIN}>
          <S.LinkText>{TEXT.OTHER_LOGIN}</S.LinkText>
        </S.CustomLink>
      </S.TextContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <LabelContainer>
          <Label target="name" text={LABEL.NAME} />
          <Input
            id="name"
            name="name"
            value={name}
            type="text"
            placeholder={PLACEHOLDER.NAME}
            onChange={onChange}
          />
          <ErrorText text={nameError} />
        </LabelContainer>
        <LabelContainer>
          <Label target="email" text={LABEL.EMAIL} />
          <Input
            id="email"
            name="email"
            value={email}
            type="email"
            placeholder={PLACEHOLDER.EMAIL}
            onChange={onChange}
          />
          <ErrorText text={emailError} />
        </LabelContainer>
        <LabelContainer>
          <Label target="password" text={LABEL.PASSWORD} />
          <Input
            id="password"
            name="password"
            value={password}
            type="password"
            placeholder={PLACEHOLDER.PASSWORD}
            onChange={onChange}
          />
          <ErrorText text={passwordError} />
        </LabelContainer>
        <LabelContainer>
          <Label target="verifyPassword" text={LABEL.VERIFY_PASSWORD} />
          <Input
            id="verifyPassword"
            name="verifyPassword"
            value={verifyPassword}
            type="password"
            placeholder={PLACEHOLDER.VERIFY_PASSWORD}
            onChange={onChange}
          />
          <ErrorText text={verifyPasswordError} />
        </LabelContainer>
        <S.SignUpButton type="submit">{TITLE.SIGN_UP_BUTTON}</S.SignUpButton>
      </S.FormContainer>
    </Container>
  );
};
