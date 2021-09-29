import axios from 'axios';
import { CONST } from '@src/constants';

const LoginApi = (email: string, password: string): void => {
  axios
    .post(
      CONST.API.LOGIN,
      {
        email,
        password,
      },
      { withCredentials: true },
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { LoginApi };
