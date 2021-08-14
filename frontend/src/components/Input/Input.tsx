import React from 'react';
import { SInput } from './Input.styled';

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
