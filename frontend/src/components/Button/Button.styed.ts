import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => theme.padding.md};
`;
