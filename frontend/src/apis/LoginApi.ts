import axios from 'axios';
import { CONST } from '@src/constants';

interface User {
  email: string;
  password: string;
}

const LoginApi = ({ email, password }: User): void => {
  axios
    .post(
      CONST.API.LOGIN,
      {
        email,
        password,
      },
      { withCredentials: true },
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export { LoginApi };
