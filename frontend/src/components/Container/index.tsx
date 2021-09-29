import React from 'react';
import * as S from './styled';

interface Prop {
  children?: React.ReactNode;
}

const Container = ({ children }: Prop): React.ReactElement => {
  return <S.Container>{children}</S.Container>;
};

export { Container };
