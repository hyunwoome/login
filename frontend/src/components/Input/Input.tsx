import React from 'react';
import * as Styled from './Input.styled';

interface Props {
  placeholder?: string;
  type?: string;
}

const Input = ({ placeholder, type }: Props): React.ReactElement => {
  return <Styled.Input placeholder={placeholder} type={type} />;
};

export default Input;
