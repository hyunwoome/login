import {loginApi} from "@src/apis/authApi";
import {LOGIN} from '@src/actions/types';

interface Props {
  email: string;
  password: string;
}

const loginAction = (form: Props): any => {
  const request = loginApi(form);
  return {
    type: LOGIN,
    payload: request,
  };
};

export {loginAction};
