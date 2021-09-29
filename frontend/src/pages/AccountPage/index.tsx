import React from 'react';
import * as S from './styled';
import { ContainerLayout } from '@src/layout/ContainerLayout';
import { AccountLayout } from '@src/layout/AccountLayout';

const AccountPage = (): React.ReactElement => {
  return (
    <ContainerLayout>
      <AccountLayout />
    </ContainerLayout>
  );
};

export { AccountPage };
