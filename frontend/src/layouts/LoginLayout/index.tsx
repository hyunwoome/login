import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import * as S from './styled';
import {CONST} from '@src/constants';
import {useDispatch} from 'react-redux';
import {loginAction} from '@src/actions/loginAction';
import {loginApi} from "@src/apis/authApi";
import {Container} from '@src/components/Container';
import {ErrorText} from '@src/components/ErrorText';
import {Input} from '@src/components/Input';
import {Label} from '@src/components/Label';
import {Title} from "@src/components/Title";

const LoginLayout = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const {email, password} = form;
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      resetError();
      loginApi(form)
        .then(() => history.push('/account'));
      // dispatch(loginAction(form)).then((res: any) => {
      // if (res.payload.loginSuccess) history.push('/account');
      // else alert('Failed login');
    }
  };

  return (
    <Container>
      <Title>{CONST.TITLE.LOGIN}</Title>
      <S.TextContainer>
        <S.Text>{CONST.TEXT.LOGIN}</S.Text>
        <Link to={CONST.URL.SIGN_UP}>
          <S.LinkText>{CONST.TEXT.SIGN_UP}</S.LinkText>
        </Link>
      </S.TextContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.LabelContainer>
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
        </S.LabelContainer>
        <S.LabelContainer>
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
        </S.LabelContainer>
        <S.LoginButton type="submit">{CONST.TITLE.LOGIN_BUTTON}</S.LoginButton>
      </S.FormContainer>
      <S.Line>
        <S.Span>또는</S.Span>
      </S.Line>
    </Container>
  );
};

export {LoginLayout};
