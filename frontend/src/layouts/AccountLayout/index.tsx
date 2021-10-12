import React, {useState} from 'react';
import {CONST} from "@src/constants";
import * as S from './styled'
import {Container} from '@src/components/Container';
import {logoutApi} from "@src/apis/logoutApi";
import {Title} from "@src/components/Title";
import {LabelContainer} from "@src/components/LabelContainer";
import {Label} from "@src/components/Label";
import {Input} from "@src/components/Input";
import {ErrorText} from "@src/components/ErrorText";
import {ButtonContainer, LogOutButton} from "./styled";

const AccountLayout = (): React.ReactElement => {
  const [form, setForm] = useState({
    name: '',
    password: '',
    checkPassword: '',
  });

  const {name, password, checkPassword} = form;

  const [nameError, setNameError] = useState('');
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


  const logoutHandler = (e: React.FormEvent) => {
    e.preventDefault();
    logoutApi();
  }

  return (
    <Container>
      <Title>{CONST.TITLE.ACCOUNT}</Title>
      <S.FormContainer>
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
            type="email"
            placeholder={CONST.PLACEHOLDER.EMAIL}
            onChange={onChange}
          />
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
        <S.ButtonContainer>
          <S.ModifiedButton type='submit'>회원 정보 수정</S.ModifiedButton>
          <S.LogOutButton onClick={logoutHandler} type='button'>로그아웃</S.LogOutButton>
          <S.DeleteButton type='button'>회원 탈퇴</S.DeleteButton>
        </S.ButtonContainer>
      </S.FormContainer>
    </Container>
  );
};

export {AccountLayout};
