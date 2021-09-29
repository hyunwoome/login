import axios from 'axios';
import { CONST } from '@src/constants';

const SignUpApi = (
  name: string,
  email: string,
  password: string,
  checkPassword: string,
): void => {
  axios
    .post(CONST.API.SIGN_UP, {
      name,
      email,
      password,
      checkPassword,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { SignUpApi };
