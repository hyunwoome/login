import React from 'react';
import * as Styled from './Button.styed';

interface Prop {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  buttonTitle: string;
}

export const Button = ({
  type,
  className,
  buttonTitle,
}: Prop): React.ReactElement => {
  return (
    <Styled.Button type={type} className={className}>
      {buttonTitle}
    </Styled.Button>
  );
};

export default Button;
