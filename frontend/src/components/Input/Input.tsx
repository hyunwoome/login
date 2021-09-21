import React from 'react';
import * as Styled from './Input.styled';

interface Props {
  id?: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  id,
  name,
  value,
  type,
  placeholder,
  onChange,
}: Props): React.ReactElement => {
  return (
    <Styled.Input
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
