import React from 'react';
import { ContainerLayout } from '@src/layouts/ContainerLayout';
import { SignUpLayout } from '@src/layouts/SignUpLayout';

const SignUpPage = (): React.ReactElement => {
  return (
    <ContainerLayout>
      <SignUpLayout />
    </ContainerLayout>
  );
};

export { SignUpPage };
