import {axiosInstance} from "@src/apis/axios";
import {CONST} from '@src/constants';

interface Props {
  email: string;
  password: string;
}

const loginApi = ({email, password}: Props): any => {
  return axiosInstance
    .post(
      CONST.API.LOGIN,
      {
        email,
        password,
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export {loginApi};
