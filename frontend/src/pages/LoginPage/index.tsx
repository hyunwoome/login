import React from 'react';
import * as S from './styled';
import { ContainerLayout } from '@src/layout/ContainerLayout';
import { LoginLayout } from '@src/layout/LoginLayout';

const LoginPage = (): React.ReactElement => {
  return (
    <ContainerLayout>
      <LoginLayout />
    </ContainerLayout>
  );
};

export { LoginPage };
