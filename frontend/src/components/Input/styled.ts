import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #f7f7f7;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => theme.padding.md};
  :focus {
    background-color: ${({ theme }) => theme.color.white};
    outline: none;
    box-shadow: 0px 0px 10px 1px #f7f7f7;
    border: 1px solid #f7f7f7;
  }
`;
