import {axiosInstance} from "@src/apis/axios";
import {CONST} from '@src/constants';

interface Props {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
}

const signupApi = ({name, email, password, checkPassword}: Props): any => {
  return axiosInstance
    .post(CONST.API.SIGN_UP, {
      name,
      email,
      password,
      checkPassword,
    })
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export {signupApi};
