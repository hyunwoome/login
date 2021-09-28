import React from 'react';
import * as S from './styled';
import { LoginLayout } from '@src/layout/LoginLayout';

const LoginPage = (): React.ReactElement => {
  return (
    <S.Container>
      <LoginLayout />
    </S.Container>
  );
};

export { LoginPage };
