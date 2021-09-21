import React from 'react';
import * as Styled from './Label.styled';

interface Props {
  target: string;
  text: string;
}

const Label = ({ target, text }: Props): React.ReactElement => {
  return <Styled.Label htmlFor={target}>{text}</Styled.Label>;
};

export default Label;
