import axios from 'axios';
import {CONST} from '@src/constants';

interface Props {
  email: string;
  password: string;
}

const loginApi = ({email, password}: Props): any => {
  return axios
    .post(
      CONST.API.LOGIN,
      {
        email,
        password,
      },
      {withCredentials: true},
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export {loginApi};
