import React from 'react';
import * as Styled from './Main.styles';
import MainLayout from 'layout/MainLayout/MainLayout';

const MainPage = (): React.ReactElement => {
  return (
    <Styled.Container>
      <MainLayout />
    </Styled.Container>
  );
};

export default MainPage;
