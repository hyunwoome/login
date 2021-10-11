import React from 'react';
import * as S from './styled';

interface Props {
  children: React.ReactNode;
}

const LabelContainer = ({ children }: Props): React.ReactElement => {
  return <S.LabelContainer>{children}</S.LabelContainer>;
};

export { LabelContainer };
