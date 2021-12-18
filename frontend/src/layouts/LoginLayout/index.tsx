import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import { URL, TITLE, TEXT, PLACEHOLDER, ERROR } from '@src/constants';
import { checkedEmailApi, loginApi } from '@src/apis/authApi';
import { Container } from '@src/components/Container';
import { ErrorText } from '@src/components/ErrorText';
import { Input } from '@src/components/Input';
import { Title } from '@src/components/Title';
import { usePublicAuthCheck } from '@src/hooks/usePublicAuthCheck';
import { checkEmail, checkPassword } from '@src/validators/validator';
import Lock from '@src/img/Lock.svg';

const LoginLayout = (): React.ReactElement => {
  const history = useHistory();
  usePublicAuthCheck();

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

    if (!checkEmail(email)) {
      setEmailError(ERROR.EMAIL);
      validated = false;
    }

    if (!checkPassword(password)) {
      setPasswordError(ERROR.PASSWORD);
      validated = false;
    }

    return validated;
  };

  const resetError = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      resetError();
      checkedEmailApi(email).then((res) => {
        if (Number(res)) {
          loginApi(form)
            .then(() => history.push(URL.ACCOUNT))
            .catch(() => setPasswordError(ERROR.NOT_VALID_PASSWORD));
        } else {
          setEmailError(ERROR.NOT_VALID_EMAIL);
        }
      });
    }
  };

  return (
    <Container>
      <S.TitleImageContainer>
        <Title>{TITLE.LOGIN}</Title>
        <Lock />
      </S.TitleImageContainer>
      <S.TextContainer>
        <S.Text>{TEXT.LOGIN}</S.Text>
      </S.TextContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.LabelContainer>
          <Input
            id="email"
            name="email"
            value={email}
            type="email"
            placeholder={PLACEHOLDER.EMAIL}
            onChange={onChange}
          />
          <ErrorText text={emailError} />
        </S.LabelContainer>
        <S.LabelContainer>
          <Input
            id="password"
            name="password"
            value={password}
            type="password"
            placeholder={PLACEHOLDER.PASSWORD}
            onChange={onChange}
          />
          <ErrorText text={passwordError} />
        </S.LabelContainer>
        <S.FoundPasswordCustomLink to={URL.FOUND_PASSWORD}>
          {TEXT.FOUND_PASSWORD}
        </S.FoundPasswordCustomLink>
        <S.LoginButton type="submit">{TITLE.LOGIN_BUTTON}</S.LoginButton>
      </S.FormContainer>
      <S.LoginKakao type="submit">{TITLE.LOGIN_KAKAO}</S.LoginKakao>
      <S.LoginGoogle type="submit">{TITLE.LOGIN_GOOGLE}</S.LoginGoogle>
      <S.BottomConatiner>
        <S.ToSignUpTextContainer>
          <S.Text>{TEXT.TO_SIGN_UP}</S.Text>
          <S.CustomLink to={URL.SIGN_UP}>
            <S.LinkText>{TEXT.SIGN_UP}</S.LinkText>
          </S.CustomLink>
        </S.ToSignUpTextContainer>
      </S.BottomConatiner>
    </Container>
  );
};

export { LoginLayout };
