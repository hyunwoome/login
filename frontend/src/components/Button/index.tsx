import React from 'react';
import * as S from './styled';

export interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  buttonTitle: string;
}

const Button = ({
  type,
  className,
  buttonTitle,
}: Props): React.ReactElement => {
  return (
    <S.Button type={type} className={className}>
      {buttonTitle}
    </S.Button>
  );
};

export { Button };
