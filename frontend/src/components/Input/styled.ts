import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  color: #dfe4ea;
  border: 1px solid #dfe4ea;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => theme.padding.md};
  font-weight: 300;
  :disabled {
    background-color: #dedede;
  }
  :focus {
    background-color: ${({ theme }) => theme.color.white};
    outline: none;
    border: 1px solid #ff6b6b;
  }
`;
