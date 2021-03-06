import React from 'react';
import {ContainerLayout} from '@src/layouts/ContainerLayout';
import {AccountLayout} from '@src/layouts/AccountLayout';

const AccountPage = (): React.ReactElement => {

  return (
    <ContainerLayout>
      <AccountLayout/>
    </ContainerLayout>
  );
};

export {AccountPage};
