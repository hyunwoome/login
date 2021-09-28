import React from 'react';
import * as S from './styled';

export interface Props {
  target: string;
  text: string;
}

const Label = ({ target, text }: Props): React.ReactElement => {
  return <S.Label htmlFor={target}>{text}</S.Label>;
};

export { Label };
