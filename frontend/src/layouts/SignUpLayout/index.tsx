import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import * as S from './styled';
import {CONST} from '@src/constants';
import {Container} from '@src/components/Container';
import {ErrorText} from '@src/components/ErrorText';
import {Input} from '@src/components/Input';
import {Label} from '@src/components/Label';
import {Title} from "@src/components/Title";
import {LabelContainer} from "@src/components/LabelContainer";
import {signupApi} from "@src/apis/authApi";
import {usePublicAuthCheck} from "@src/hooks/usePublicAuthCheck";

const SignUpLayout = (): React.ReactElement => {
  const history = useHistory();
  usePublicAuthCheck();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
  });

  const {name, email, password, checkPassword} = form;

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkPasswordError, setCheckPasswordError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetError = () => {
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setCheckPasswordError('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      resetError();
      signupApi(form)
        .then(() => history.push(CONST.URL.LOGIN))
        .catch((err: any) => console.error(err));
    }
  };

  return (
    <Container>
      <Title>{CONST.TITLE.SIGN_UP}</Title>
      <S.TextContainer>
        <Link to={CONST.URL.LOGIN}>
          <S.LinkText>{CONST.TEXT.OTHER_LOGIN}</S.LinkText>
        </Link>
      </S.TextContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <LabelContainer>
          <Label target="name" text={CONST.LABEL.NAME}/>
          <Input
            id="name"
            name="name"
            value={name}
            type="text"
            placeholder={CONST.PLACEHOLDER.NAME}
            onChange={onChange}
          />
          <ErrorText text={nameError}/>
        </LabelContainer>
        <LabelContainer>
          <Label target="email" text={CONST.LABEL.EMAIL}/>
          <Input
            id="email"
            name="email"
            value={email}
            type="email"
            placeholder={CONST.PLACEHOLDER.EMAIL}
            onChange={onChange}
          />
          <ErrorText text={emailError}/>
        </LabelContainer>
        <LabelContainer>
          <Label target="password" text={CONST.LABEL.PASSWORD}/>
          <Input
            id="password"
            name="password"
            value={password}
            type="password"
            placeholder={CONST.PLACEHOLDER.PASSWORD}
            onChange={onChange}
          />
          <ErrorText text={passwordError}/>
        </LabelContainer>
        <LabelContainer>
          <Label
            target="checkPassword"
            text={CONST.LABEL.CHECK_PASSWORD}
          />
          <Input
            id="checkPassword"
            name="checkPassword"
            value={checkPassword}
            type="password"
            placeholder={CONST.PLACEHOLDER.CHECK_PASSWORD}
            onChange={onChange}
          />
          <ErrorText text={checkPasswordError}/>
        </LabelContainer>
        <S.SignUpButton type="submit">{CONST.TITLE.SIGN_UP_BUTTON}</S.SignUpButton>
      </S.FormContainer>
    </Container>
  );
};

export {SignUpLayout};
