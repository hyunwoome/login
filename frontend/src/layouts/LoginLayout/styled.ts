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

export const TitleImageContainer = styled.div`
  width: 145px;
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.padding.md};
  padding-left: 0;
  margin-bottom: ${({ theme }) => theme.margin.xl};
`;

export const BottomConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ToSignUpTextContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Text = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  text-align: right;
`;

export const FoundPasswordCustomLink = styled(Link)`
  color: black;
  font-weight: 300;
  margin-bottom: 30px;
  font-size: 14px;
  text-align: right;
`;

export const LinkText = styled.p`
  text-align: center;
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  color: #ff6b6b;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
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
  background-color: #ff6b6b;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const LoginKakao = styled(Button)`
  background-color: #f2c94c;
  margin-top: 16px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const LoginGoogle = styled(Button)`
  background-color: #4185f4;
  margin-top: 16px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Span = styled.span`
  background: #fff;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.lightGray};
`;
