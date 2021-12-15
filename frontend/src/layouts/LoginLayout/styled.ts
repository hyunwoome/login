import styled from 'styled-components';
import { Button } from '@src/components/Button';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 566px;
  height: 650px;
  padding: ${({ theme }) => theme.padding.xl};
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

export const TextContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.padding.md};
  padding-left: 0;
  margin-bottom: ${({ theme }) => theme.margin.xl};
`;

export const Text = styled.div`
  text-align: center;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;

export const LinkText = styled.p`
  text-align: center;
  margin-left: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 43%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    height: 35%;
  }
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
