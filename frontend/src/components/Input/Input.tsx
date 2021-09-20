import React from 'react';
import * as Styled from './Input.styled';

interface Props {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  name,
  value,
  type,
  placeholder,
  onChange,
}: Props): React.ReactElement => {
  return (
    <Styled.Input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
