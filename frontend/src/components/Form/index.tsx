import React from 'react';
import * as S from './styled';

interface Props {
  onSubmit: any;
  children: React.ReactNode;
}

const Form = ({ onSubmit, children }: Props): React.ReactElement => {
  return <S.Form onSubmit={onSubmit}>{children}</S.Form>;
};

export { Form };
