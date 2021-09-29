import React from 'react';
import * as S from './styled';

interface Props {
  children?: React.ReactNode;
}

const ContainerLayout = ({ children }: Props): React.ReactElement => {
  return <S.Container>{children}</S.Container>;
};

export { ContainerLayout };
