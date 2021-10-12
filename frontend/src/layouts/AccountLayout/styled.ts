import styled from 'styled-components';
import {Button} from "@src/components/Button";

export const FormContainer = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 70px;
  @media ${({theme}) => theme.device.mobile} {
    height: 55%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ModifiedButton = styled(Button)`
  background-color: ${({theme}) => theme.color.blue};
  color: ${({theme}) => theme.color.white};
  font-size: ${({theme}) => theme.fontSize.md};
  margin-right: 10px;
`;

export const LogOutButton = styled(Button)`
  background-color: #F67280;
  color: ${({theme}) => theme.color.white};
  font-size: ${({theme}) => theme.fontSize.md};
  margin-right: 10px;
`;

export const DeleteButton = styled(Button)`
  background-color: #FF2E63;
  color: ${({theme}) => theme.color.white};
  font-size: ${({theme}) => theme.fontSize.md};
`;