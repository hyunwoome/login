import styled from 'styled-components';
import {Button} from '@src/components/Button';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  width: 566px;
  height: 650px;
  padding: ${({theme}) => theme.padding.xl};
  background-color: ${({theme}) => theme.color.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({theme}) => theme.device.mobile} {
    width: 100%;
    border-radius: 0;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  padding: ${({theme}) => theme.padding.md};
  margin-bottom: ${({theme}) => theme.margin.xl};
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`

export const LinkText = styled.p`
  text-align: center;
  font-weight: 500;
  color: ${({theme}) => theme.color.blue};
  cursor: pointer;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({theme}) => theme.device.mobile} {
    height: 55%;
  }
`;

export const SignUpButton = styled(Button)`
  background-color: ${({theme}) => theme.color.blue};
  color: ${({theme}) => theme.color.white};
  font-size: ${({theme}) => theme.fontSize.md};
`;
