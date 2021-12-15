import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.titleSize.sm};
  margin-top: ${({ theme }) => theme.margin.xl};
  font-weight: 700;
  text-align: center;
`;
