import React from 'react';
import {Container} from '@src/components/Container';
import {CONST} from "@src/constants";
import {axiosInstance} from "@src/apis/axios";

const AccountLayout = (): React.ReactElement => {

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axiosInstance.post(CONST.API.LOGOUT)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <form onSubmit={formSubmit}>
        <button type='submit'>로그아웃</button>
      </form>
    </Container>
  );
};

export {AccountLayout};
