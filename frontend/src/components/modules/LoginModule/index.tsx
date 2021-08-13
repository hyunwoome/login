import React from 'react';
import Input from 'components/atoms/Input';
import { PLACEHOLDER } from 'constants/placeholder';

const LoginModule = (): React.ReactElement => {
  return (
    <>
      <Input placeholder={PLACEHOLDER.LOGIN_EMAIL} />
    </>
  );
};

export default LoginModule;
