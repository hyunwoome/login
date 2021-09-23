import React from 'react';
import * as Styled from './ErrorText.styled';

interface Props {
  text: string;
}

const ErrorText = ({ text }: Props): React.ReactElement => {
  return <Styled.Text>{text}</Styled.Text>;
};

export default ErrorText;
