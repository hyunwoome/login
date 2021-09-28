import React from 'react';
import * as S from './styled';
import { MainLayout } from '@src/layout/MainLayout';

const MainPage = (): React.ReactElement => {
  return (
    <S.Container>
      <MainLayout />
    </S.Container>
  );
};

export { MainPage };
