import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import { URL, TITLE, TEXT, PLACEHOLDER, ERROR, LABEL } from '@src/constants';
import { checkedEmailApi, loginApi } from '@src/apis/authApi';
import { Container } from '@src/components/Container';
import { ErrorText } from '@src/components/ErrorText';
import { Input } from '@src/components/Input';
import { Label } from '@src/components/Label';
import { Title } from '@src/components/Title';
import { usePublicAuthCheck } from '@src/hooks/usePublicAuthCheck';
import { checkEmail, checkPassword } from '@src/validators/validator';

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
      <Title>{TITLE.LOGIN}</Title>
      <S.TextContainer>
        <S.Text>{TEXT.LOGIN}</S.Text>
        <S.CustomLink to={URL.SIGN_UP}>
          <S.LinkText>{TEXT.SIGN_UP}</S.LinkText>
        </S.CustomLink>
      </S.TextContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.LabelContainer>
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
        </S.LabelContainer>
        <S.LabelContainer>
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
        </S.LabelContainer>
        <S.LoginButton type="submit">{TITLE.LOGIN_BUTTON}</S.LoginButton>
      </S.FormContainer>
      <S.Line>
        <S.Span>또는</S.Span>
      </S.Line>
    </Container>
  );
};

export { LoginLayout };
