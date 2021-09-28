import React from 'react';
import * as S from './styled';

export interface Props {
  text: string;
}

const ErrorText = ({ text }: Props): React.ReactElement => {
  return <S.Text>{text}</S.Text>;
};

export { ErrorText };
