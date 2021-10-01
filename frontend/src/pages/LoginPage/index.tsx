import React from 'react';
import { ContainerLayout } from '@src/layouts/ContainerLayout';
import { LoginLayout } from '@src/layouts/LoginLayout';

const LoginPage = (): React.ReactElement => {
  return (
    <ContainerLayout>
      <LoginLayout />
    </ContainerLayout>
  );
};

export { LoginPage };
