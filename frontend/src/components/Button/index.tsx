import React from 'react';
import * as S from './styled';

export interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: any;
  buttonTitle: string;
}

const Button = ({
                  type,
                  className,
                  onClick,
                  buttonTitle,
                }: Props): React.ReactElement => {
  return (
    <S.Button onClick={onClick} type={type} className={className}>
      {buttonTitle}
    </S.Button>
  );
};

export {Button};
