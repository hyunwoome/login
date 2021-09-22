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
    height: 100%;
    border-radius: 0;
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

export const Text = styled.div`
  text-align: center;
`;

export const LinkText = styled.div`
  text-align: center;
  margin-left: 10px;
  text-decoration: underline;
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
`;

export const FormContainer = styled.div`
  width: 100%;
  /* min-height: 180px; */
  height: 42%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75px;
`;

export const LoginButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Line = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e4e4e4;
  line-height: 0.1em;
  margin: 25px 0 25px;
`;

export const Span = styled.span`
  background: #fff;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.lightGray};
`;
