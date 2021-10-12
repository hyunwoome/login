import React from 'react';
import * as S from './styled';

export interface Props {
  id?: string;
  name?: string;
  value?: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  id,
  name,
  value,
  type,
  placeholder,
  disabled,
  onChange,
}: Props): React.ReactElement => {
  return (
    <S.Input
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export { Input };
