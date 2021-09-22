import styled from 'styled-components';
import Button from 'components/Button/Button';

export const Container = styled.div`
  width: 566px;
  height: 634px;
  padding: ${({ theme }) => theme.padding.xl};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    border-radius: 0;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.titleSize.sm};
  text-align: center;
  margin-top: ${({ theme }) => theme.margin.xl};
`;

export const TextContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.padding.md};
  margin-bottom: ${({ theme }) => theme.margin.xl};
`;

export const LinkText = styled.div`
  text-align: center;
  margin-left: 10px;
  text-decoration: underline;
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    height: 55%;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75px;
`;

export const SignUpButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.md};
`;
