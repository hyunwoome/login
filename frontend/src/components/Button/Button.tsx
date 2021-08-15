import React from 'react';
import * as Styled from './Button.styed';

interface Prop {
  className?: string;
  buttonTitle: string;
}

export const Button = ({
  className,
  buttonTitle,
}: Prop): React.ReactElement => {
  return <Styled.Button className={className}>{buttonTitle}</Styled.Button>;
};

export default Button;
