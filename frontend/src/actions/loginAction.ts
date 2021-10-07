import { loginApi } from '@src/apis/loginApi';
import { LOGIN } from '@src/actions/types';

interface Props {
  email: string;
  password: string;
}

const loginAction = (form: Props): any => {
  const request = loginApi(form);
  console.log(request);
  return {
    type: LOGIN,
    payload: request,
  };
};

export { loginAction };