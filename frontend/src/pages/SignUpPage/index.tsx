import React from 'react';
import * as S from './styled';
import { ContainerLayout } from '@src/layout/ContainerLayout';
import { SignUpLayout } from '@src/layout/SignUpLayout';

const SignUpPage = (): React.ReactElement => {
  return (
    <ContainerLayout>
      <SignUpLayout />
    </ContainerLayout>
  );
};

export { SignUpPage };
