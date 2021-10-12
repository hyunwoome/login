import {signupApi} from '@src/apis/signupApi';
import {SIGNUP} from '@src/actions/types';

interface Props {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
}

const signupAction = (form: Props): any => {
  const request = signupApi(form);
  return {
    type: SIGNUP,
    payload: request,
  };
};

export {signupAction};
