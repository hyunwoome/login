import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  @media ${({ theme }) => theme.device.mobile} {
    height: 70px;
  }
`;

export const h1 = styled.h1`
  font-size: 50px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 33px;
  }
`;

export const text = styled.p`
  font-size: 20px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
  }
`;
