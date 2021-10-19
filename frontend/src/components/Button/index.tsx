import React from 'react';
import * as S from './styled';

export interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: any;
  children: React.ReactNode
}

const Button = ({type, className, onClick, children}: Props): React.ReactElement => {
  return (
    <S.Button onClick={onClick} type={type} className={className}>
      {children}
    </S.Button>
  );
};

export {Button};
