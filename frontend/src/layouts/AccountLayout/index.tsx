import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import * as S from './styled'
import {ERROR, URL, TITLE, LABEL, PLACEHOLDER} from "@src/constants";
import {LabelContainer} from "@src/components/LabelContainer";
import {Container} from '@src/components/Container';
import {ErrorText} from "@src/components/ErrorText";
import {Title} from "@src/components/Title";
import {Label} from "@src/components/Label";
import {Input} from "@src/components/Input";
import {deleteApi, logoutApi, updateApi, loggedApi} from "@src/apis/authApi";
import {deleteLocalStorage} from "@src/utils/localStorage";

const AccountLayout = (): React.ReactElement => {
    const history = useHistory();

    useEffect(() => {
      loggedApi()
        .then((res: any) => {
          setForm({
            ...form,
            name: res.data.user.name,
            email: res.data.user.email,
          })
        })
        .catch(() => {
          deleteLocalStorage();
          history.push(URL.LOGIN);
        });
    }, []);

    const [form, setForm] = useState({
      name: '',
      email: '',
      password: '',
      verifyPassword: '',
    });

    const {name, email, password, verifyPassword} = form;

    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [verifyPasswordError, setVerifyPasswordError] = useState('');

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
      setVerifyPasswordError('');
    };

    const validateForm = () => {
      resetError();
      let validated = true;

      if (!name) {
        setNameError(ERROR.NAME);
        validated = false;
      }

      if (!password) {
        setPasswordError(ERROR.PASSWORD);
        validated = false;
      }

      if (!verifyPassword) {
        setVerifyPasswordError(ERROR.CHECK_PASSWORD);
        validated = false;
      }

      return validated;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        resetError();
        updateApi(form)
          .then(() => {
            window.location.reload();
          })
      }
    }

    const logoutHandler = () => {
      logoutApi()
        .then(() => {
          deleteLocalStorage();
          history.push(URL.LOGIN);
        })
    };

    const deleteHandler = (e: React.FormEvent) => {
      e.preventDefault();
      deleteApi()
        .then(() => {
          deleteLocalStorage();
          history.push(URL.LOGIN);
        });
    };

    return (
      <Container>
        <Title>{TITLE.ACCOUNT}</Title>
        <S.FormContainer onSubmit={handleSubmit}>
          <LabelContainer>
            <Label target="name" text={LABEL.NAME}/>
            <Input
              id="name"
              name="name"
              value={name}
              type="text"
              placeholder={PLACEHOLDER.NAME}
              onChange={onChange}
            />
            <ErrorText text={nameError}/>
          </LabelContainer>
          <LabelContainer>
            <Label target="email" text={LABEL.EMAIL}/>
            <Input
              id="email"
              name="email"
              value={email}
              type="email"
              onChange={onChange}
              disabled
            />
          </LabelContainer>
          <LabelContainer>
            <Label target="password" text={LABEL.PASSWORD}/>
            <Input
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder={PLACEHOLDER.NEW_PASSWORD}
              onChange={onChange}
            />
            <ErrorText text={passwordError}/>
          </LabelContainer>
          <LabelContainer>
            <Label
              target="verifyPassword"
              text={LABEL.VERIFY_PASSWORD}
            />
            <Input
              id="verifyPassword"
              name="verifyPassword"
              value={verifyPassword}
              type="password"
              placeholder={PLACEHOLDER.NEW_PASSWORD}
              onChange={onChange}
            />
            <ErrorText text={verifyPasswordError}/>
          </LabelContainer>
          <S.ButtonContainer>
            <S.ModifiedButton type='submit'>{TITLE.MODIFIED}</S.ModifiedButton>
            <S.LogOutButton onClick={logoutHandler} type='button'>{TITLE.LOGOUT}</S.LogOutButton>
            <S.DeleteButton onClick={deleteHandler} type='button'>{TITLE.DELETE}</S.DeleteButton>
          </S.ButtonContainer>
        </S.FormContainer>
      </Container>
    );
  }
;

export {AccountLayout};
