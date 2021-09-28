import React from 'react';
import * as S from './styled';
import { SignUpLayout } from '@src/layout/SignUpLayout';

const SignUpPage = (): React.ReactElement => {
  return (
    <S.Container>
      <SignUpLayout />
    </S.Container>
  );
};

export { SignUpPage };
