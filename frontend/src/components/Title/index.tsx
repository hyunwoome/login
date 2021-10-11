import React from 'react';
import * as S from './styled';

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props): React.ReactElement => {
  return <S.Title>{children}</S.Title>;
};

export { Title };
