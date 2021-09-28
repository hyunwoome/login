import React from 'react';
import * as S from './styled';
import { CONST } from '@src/constants';

const NotFoundPage = (): React.ReactElement => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.h1>{CONST.TITLE.NOT_FOUND}</S.h1>
        <S.text>{CONST.TEXT.NOT_FOUND}</S.text>
      </S.Wrapper>
    </S.Container>
  );
};

export { NotFoundPage };
