import React from 'react';
import Input from '../../atoms/Input';
import { LOGIN_PLACEHOLDER_EMAIL } from '../../../constants';

const LoginModule = (): React.ReactElement => {
  return (
    <>
      <Input placeholder={LOGIN_PLACEHOLDER_EMAIL} />
    </>
  );
};

export default LoginModule;
