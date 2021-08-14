import styled from 'styled-components';

export const Container = styled.div`
  width: 566px;
  height: 634px;
  padding: ${({ theme }) => theme.padding.xl};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 15px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    border-radius: 0;
    height: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.titleSize.sm};
  text-align: center;
`;

export const Text = styled.div``;
