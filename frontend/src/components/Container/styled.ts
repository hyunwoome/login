import styled from 'styled-components';

export const Container = styled.div`
  width: 566px;
  height: 650px;
  padding: ${({ theme }) => theme.padding.xl};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
