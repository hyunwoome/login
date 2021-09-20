import React from 'react';
import * as Styled from './NotFound.styled';
import CONST from '../../constants/const';

const NotFound = (): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.h1>{CONST.TITLE.NOT_FOUND}</Styled.h1>
        <Styled.text>{CONST.TEXT.NOT_FOUND}</Styled.text>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default NotFound;
