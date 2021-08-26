import React from 'react';
import * as Styled from './SignUp.styled';
import SignUpLayout from 'layout/SignUpLayout/SignUpLayout';

const SignUpPage = (): React.ReactElement => {
  return (
    <Styled.Container>
      <SignUpLayout />
    </Styled.Container>
  );
};

export default SignUpPage;
