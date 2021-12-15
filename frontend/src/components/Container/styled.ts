import styled from 'styled-components';

export const Container = styled.div`
  width: 566px;
  height: 650px;
  padding: 56px 40px 56px 40px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
