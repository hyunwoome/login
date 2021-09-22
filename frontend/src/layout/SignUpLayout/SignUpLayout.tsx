import React, { useState } from 'react';
import Input from 'components/Input/Input';
import Label from 'components/Label/Label';
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

  const { name, email, password, checkPassword } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({
      name: '',
      email: '',
      password: '',
      checkPassword: '',
    });

    axios
      .post(CONST.URL.SIGN_UP, {
        name,
        email,
        password,
        checkPassword,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
