import React from 'react';
import { SInput } from './style';

interface Props {
  placeholder?: string;
}

const Input = ({ placeholder }: Props): React.ReactElement => {
  return (
    <>
      <SInput placeholder={placeholder} />
    </>
  );
};

export default Input;
