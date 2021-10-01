import axios from 'axios';
import { CONST } from '@src/constants';

interface User {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
}

const SignUpApi = ({ name, email, password, checkPassword }: User): void => {
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
